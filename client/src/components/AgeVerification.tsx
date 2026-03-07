'use client';

import { useEffect, useState } from 'react';

export default function AgeVerification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show if user hasn't verified yet
    const verified = localStorage.getItem('age_verified');
    if (!verified) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('age_verified', 'true');
    setShow(false);
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="bg-[#1a1a24] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
        {/* Header */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Age Verification
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-5">
          Please confirm your age to continue. You must be 18 years or older to use this service.
        </p>

        {/* Disclaimer box */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            By clicking &quot;I am 18 or older&quot;, you confirm that you are legally an adult and meet the age requirement to use this service.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleReject}
            className="flex-1 bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm sm:text-base"
          >
            I am not 18
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm sm:text-base"
          >
            I am 18 or older
          </button>
        </div>
      </div>
    </div>
  );
}
