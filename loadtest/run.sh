#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# Omeelo Load Test Runner
# Usage:
#   ./run.sh smoke    – 50 VUs, quick sanity check
#   ./run.sh load     – 10 000 VUs, full load test (default)
#   ./run.sh stress   – ramp past 10k to find the breaking point
#   ./run.sh report   – open the last JSON report in HTML
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

MODE="${1:-load}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# ── 1. Install dependencies if needed ────────────────────────────────────────
if [ ! -d "$SCRIPT_DIR/node_modules" ]; then
  echo ">>> Installing Artillery dependencies..."
  cd "$SCRIPT_DIR" && npm install
fi

# ── 2. OS-level tuning ───────────────────────────────────────────────────────
# Each WebSocket connection uses one file descriptor on both the server and
# the Artillery runner. The default Linux limit (1024) will cause failures
# long before 10k users. We raise it for this shell session.
#
# For a permanent fix on the server, add to /etc/security/limits.conf:
#   * soft nofile 100000
#   * hard nofile 100000
# and set in /etc/sysctl.conf:
#   net.core.somaxconn = 65535
#   net.ipv4.tcp_max_syn_backlog = 65535

CURRENT_LIMIT=$(ulimit -n)
TARGET_LIMIT=65536

if [ "$CURRENT_LIMIT" -lt "$TARGET_LIMIT" ]; then
  echo ">>> Raising file descriptor limit from $CURRENT_LIMIT → $TARGET_LIMIT"
  ulimit -n $TARGET_LIMIT 2>/dev/null || {
    echo "WARNING: Could not raise ulimit. You may hit 'EMFILE: too many open files'."
    echo "         Run: sudo sysctl -w fs.file-max=200000"
    echo "         Or:  sudo sh -c 'echo \"* soft nofile 100000\" >> /etc/security/limits.conf'"
  }
fi

# Node.js heap for the Artillery process (each VU is an in-process coroutine)
export NODE_OPTIONS="--max-old-space-size=4096"

# ── 3. Run the selected scenario ─────────────────────────────────────────────
cd "$SCRIPT_DIR"

case "$MODE" in
  smoke)
    echo ">>> Running SMOKE test (50 VUs)..."
    npx artillery run --config scenarios/smoke.yml
    ;;
  load)
    echo ">>> Running LOAD test (10 000 VUs)..."
    npx artillery run scenarios/load.yml --output loadtest-report.json
    echo ""
    echo ">>> Done. Generate HTML report with:"
    echo "    ./run.sh report"
    ;;
  stress)
    echo ">>> Running STRESS test (finding breaking point)..."
    npx artillery run scenarios/stress.yml --output stress-report.json
    ;;
  report)
    REPORT="${2:-loadtest-report.json}"
    if [ ! -f "$SCRIPT_DIR/$REPORT" ]; then
      echo "ERROR: Report file not found: $REPORT"
      echo "       Run ./run.sh load first."
      exit 1
    fi
    echo ">>> Generating HTML report from $REPORT..."
    npx artillery report "$SCRIPT_DIR/$REPORT"
    ;;
  *)
    echo "Unknown mode: $MODE"
    echo "Usage: ./run.sh [smoke|load|stress|report]"
    exit 1
    ;;
esac
