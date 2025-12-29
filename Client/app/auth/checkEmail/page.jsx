'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckEmailPage() {
  const router = useRouter();
  const [isResending, setIsResending] = useState(false);

  const handleResendEmail = () => {
    // Placeholder for resend logic
    setIsResending(true);
    setTimeout(() => {
      setIsResending(false);
      console.log('Confirmation email resent');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f7f3ee] overflow-hidden relative">
      {/* Decorative Background Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-[#d4ad98]/20 to-[#e8c8b5]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-linear-to-tr from-[#f0dfd4]/30 to-[#d4ad98]/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-linear-to-bl from-[#e8c8b5]/15 to-transparent rounded-full blur-2xl" />

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md mx-auto">
          
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 p-6 md:p-8 backdrop-blur-sm">
            
            {/* Email Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#d4ad98]/10 rounded-full flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-[#d4ad98]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            </div>

            {/* Card Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Check your email
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We have sent a confirmation link to your email.
                <br />
                Please verify your email to continue.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* Resend Email Button */}
              <button
                onClick={handleResendEmail}
                disabled={isResending}
                className="w-full bg-[#d4ad98] text-white py-2.5 rounded-lg font-semibold shadow-lg shadow-[#d4ad98]/30 hover:shadow-xl hover:shadow-[#d4ad98]/40 hover:scale-[1.02] hover:bg-[#c99d87] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#d4ad98]/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isResending ? 'Sending...' : 'Resend confirmation email'}
              </button>

              {/* Back to Login Link */}
              <div className="text-center">
                <button
                  onClick={() => router.push('/auth/login')}
                  className="text-sm text-[#d4ad98] hover:text-[#c99d87] font-medium transition-colors duration-300 focus:outline-none focus:underline"
                >
                  Back to login
                </button>
              </div>
            </div>

            {/* Helper Text */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-start gap-2">
                <svg 
                  className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Didn&apos;t receive the email? Check your spam folder or try resending the confirmation.
                </p>
              </div>
            </div>

          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need help?{' '}
              <a 
                href="#" 
                className="text-[#d4ad98] hover:text-[#c99d87] font-medium transition-colors duration-300"
              >
                Contact support
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
