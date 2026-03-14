#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# Omeelo Load Test Runner
# Usage:
#   ./run.sh smoke    –  50 VUs, quick sanity check
#   ./run.sh load     –  10 000 VUs, full load test (default)
#   ./run.sh stress   –  20 000 VUs, find the breaking point
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

MODE="${1:-load}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# ── 1. Install dependencies if needed ────────────────────────────────────────
if [ ! -d "$SCRIPT_DIR/node_modules" ]; then
  echo ">>> Installing dependencies..."
  cd "$SCRIPT_DIR" && npm install
fi

# ── 2. OS-level tuning ───────────────────────────────────────────────────────
# Each WebSocket connection uses one file descriptor. The default Linux limit
# (1024) will cause failures long before 10k users.
CURRENT_LIMIT=$(ulimit -n)
TARGET_LIMIT=65536

if [ "$CURRENT_LIMIT" -lt "$TARGET_LIMIT" ]; then
  echo ">>> Raising file descriptor limit: $CURRENT_LIMIT → $TARGET_LIMIT"
  ulimit -n $TARGET_LIMIT 2>/dev/null || {
    echo "WARNING: Could not raise ulimit. You may hit 'too many open files'."
    echo "         Fix: sudo sh -c 'echo \"* soft nofile 100000\" >> /etc/security/limits.conf'"
  }
fi

# Give Node.js enough heap for many concurrent socket objects
export NODE_OPTIONS="--max-old-space-size=4096"

# ── 3. Run ────────────────────────────────────────────────────────────────────
cd "$SCRIPT_DIR"

case "$MODE" in
  smoke)
    echo ">>> Smoke test – 50 users, 10s ramp"
    node loadtest.js --users 50 --ramp 10
    ;;
  load)
    echo ">>> Load test – 10 000 users, 120s ramp"
    node loadtest.js --users 10000 --ramp 120
    ;;
  stress)
    echo ">>> Stress test – 20 000 users, 300s ramp"
    node loadtest.js --users 20000 --ramp 300
    ;;
  *)
    echo "Usage: ./run.sh [smoke|load|stress]"
    exit 1
    ;;
esac
