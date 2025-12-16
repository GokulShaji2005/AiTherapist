'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Placeholder handlers (no actual logic)
  const handleEmailSignUp = (e) => {
    e.preventDefault();
    console.log('Email sign up clicked');
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked');
  };

  return (
    <div className="min-h-screen bg-[#f7f3ee] overflow-hidden relative">
      {/* Decorative Background Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#d4ad98]/20 to-[#e8c8b5]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-[#f0dfd4]/30 to-[#d4ad98]/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-bl from-[#e8c8b5]/15 to-transparent rounded-full blur-2xl" />

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl mx-auto">
          
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Section - Hero Content */}
            <div className="space-y-6 text-center md:text-left order-2 md:order-1">
              {/* Logo */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
                <div className="w-12 h-12 bg-[#d4ad98] rounded-full flex items-center justify-center shadow-lg">
                  <svg 
                    className="w-7 h-7 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                    />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  AI Therapist
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Begin Your{' '}
                <span className="text-[#d4ad98]">Healing Journey</span>
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
                Start your personalized mental wellness journey with compassionate AI support. 
                Create your safe space today.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#d4ad98]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">100% Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#d4ad98]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Start Instantly</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#d4ad98]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  <span className="text-sm text-gray-600">No Credit Card</span>
                </div>
              </div>
            </div>

            {/* Right Section - Auth Card */}
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 p-6 md:p-8 backdrop-blur-sm max-w-md mx-auto">
                {/* Card Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Create Account
                  </h2>
                  <p className="text-sm text-gray-600">
                    Join thousands on their wellness journey
                  </p>
                </div>

                {/* Sign Up Form */}
                <form onSubmit={handleEmailSignUp} className="space-y-4">
                  {/* Name Input */}
                  {/* <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4ad98]/50 focus:border-[#d4ad98] transition-all duration-300 outline-none text-gray-800 placeholder:text-gray-400"
                      required
                    />
                  </div> */}

                  {/* Email Input */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4ad98]/50 focus:border-[#d4ad98] transition-all duration-300 outline-none text-gray-800 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div>
                    <label 
                      htmlFor="password" 
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a strong password"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4ad98]/50 focus:border-[#d4ad98] transition-all duration-300 outline-none text-gray-800 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  {/* Confirm Password Input */}
                  {/* <div>
                    <label 
                      htmlFor="confirmPassword" 
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter your password"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4ad98]/50 focus:border-[#d4ad98] transition-all duration-300 outline-none text-gray-800 placeholder:text-gray-400"
                      required
                    />
                  </div> */}

                  {/* Terms & Conditions */}
                  <div className="flex items-start gap-2">
                    <input
                      id="terms"
                      type="checkbox"
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#d4ad98] focus:ring-[#d4ad98]/50"
                      required
                    />
                    <label htmlFor="terms" className="text-xs text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-[#d4ad98] hover:text-[#c99d87] font-medium">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-[#d4ad98] hover:text-[#c99d87] font-medium">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  {/* Sign Up Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#d4ad98] text-white py-2.5 rounded-lg font-semibold shadow-lg shadow-[#d4ad98]/30 hover:shadow-xl hover:shadow-[#d4ad98]/40 hover:scale-[1.02] hover:bg-[#c99d87] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#d4ad98]/30"
                  >
                    Create Account
                  </button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">
                      or
                    </span>
                  </div>
                </div>

                {/* Google Sign Up Button */}
                <button
                  onClick={handleGoogleSignUp}
                  className="w-full bg-white border-2 border-gray-300 text-gray-700 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 flex items-center justify-center gap-3"
                >
                  {/* Google Icon */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign up with Google
                </button>

                {/* Login Link */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                      onClick={() => router.push('/auth/login')}
                      className="text-[#d4ad98] hover:text-[#c99d87] font-semibold transition-colors duration-300 focus:outline-none focus:underline"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}