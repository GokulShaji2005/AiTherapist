
"use client";
import React from 'react';
// import LoginPage from '@/app/auth/login/page';
import { useRouter } from 'next/navigation';
const HeroSection = () => {
  const router=useRouter();
  return (
    <div className="min-h-screen bg-[#f7f3ee] overflow-hidden">
      {/* Curved Navbar */}
      <nav className="relative z-50 mx-auto mt-6 max-w-6xl px-4">
        <div className="bg-[#d4ad98] rounded-4xl shadow-lg shadow-black/10 px-8 py-4 flex items-center justify-between backdrop-blur-sm">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
              <svg 
                className="w-6 h-6 text-[#d4ad98]" 
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
            <span className="text-white font-semibold text-lg tracking-tight">
              MindfulAI
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              className="text-white/90 hover:text-white font-medium text-sm transition-colors duration-300 focus:outline-none focus:text-white"
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-white/90 hover:text-white font-medium text-sm transition-colors duration-300 focus:outline-none focus:text-white"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-white/90 hover:text-white font-medium text-sm transition-colors duration-300 focus:outline-none focus:text-white"
            >
              How It Works
            </a>
            <a 
              href="#privacy" 
              className="text-white/90 hover:text-white font-medium text-sm transition-colors duration-300 focus:outline-none focus:text-white"
            >
              Privacy
            </a>
            <a 
              href="#get-started" 
              className="bg-white text-[#d4ad98] px-6 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={()=>router.push('/auth/login')} >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative md:pt-8 pt-18 pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Decorative Blob Shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-linear-to from-[#d4ad98]/20 to-[#e8c8b5]/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-linear-to from-[#f0dfd4]/30 to-[#d4ad98]/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-linear-to from-[#e8c8b5]/15 to-transparent rounded-full blur-2xl" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              {/* <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm animate-slide-up">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">
                  Available 24/7
                </span>
              </div> */}

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight animate-slide-up animation-delay-200">
                A Safe Space to Talk,{' '}
                <span className="text-[#d4ad98]">Anytime.</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg animate-slide-up animation-delay-400">
                Connect with an AI therapist that truly listens with empathy, 
                remembers your journey, and provides thoughtful session summaries. 
                Your mental wellness, supported by compassionate AI.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
                <button className="bg-[#d4ad98] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#d4ad98]/30 hover:shadow-xl hover:shadow-[#d4ad98]/40 hover:scale-105 hover:bg-[#c99d87] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#d4ad98]/30"
                 onClick={()=>router.push('/auth/login')} >
                  Start Therapy Session
                </button>
                <button className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200">
                  How It Works
                </button>
              </div>

              {/* Trust Indicators */}
              {/* <div className="flex items-center gap-6 pt-4 animate-slide-up animation-delay-800">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#d4ad98]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Private & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#d4ad98]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">No Judgment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#d4ad98]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Always Available</span>
                </div>
              </div> */}
            </div>

            {/* Right Visual - Abstract Illustration */}
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;