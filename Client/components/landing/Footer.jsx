import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#d4ad98] rounded-full flex items-center justify-center shadow-lg">
                <svg 
                  className="w-6 h-6 text-white" 
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
              <div>
                <h3 className="text-xl font-bold text-gray-800">MindfulAI</h3>
                <p className="text-xs text-gray-600">Compassionate Support</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your safe space for emotional support and mental wellness. Available 24/7 with empathetic AI therapy.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                className="w-10 h-10 bg-[#d4ad98]/10 hover:bg-[#d4ad98]/20 rounded-full flex items-center justify-center text-[#d4ad98] transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#d4ad98]/10 hover:bg-[#d4ad98]/20 rounded-full flex items-center justify-center text-[#d4ad98] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#d4ad98]/10 hover:bg-[#d4ad98]/20 rounded-full flex items-center justify-center text-[#d4ad98] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/auth/signUp" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Crisis Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Privacy */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4 text-lg">Legal & Privacy</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Data Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#d4ad98] transition-colors duration-300">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Important Disclaimer */}
        <div className="mt-12 p-6 bg-[#d4ad98]/5 border-l-4 border-[#d4ad98] rounded-lg">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-800">Important Notice:</span> MindfulAI provides emotional support and is not a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a mental health crisis, please contact emergency services or a crisis hotline immediately.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-[#f7f3ee]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} MindfulAI. All rights reserved. Made with care for your well-being.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-[#d4ad98] text-sm transition-colors duration-300">
                Status
              </a>
              <a href="#" className="text-gray-600 hover:text-[#d4ad98] text-sm transition-colors duration-300">
                Blog
              </a>
              <a href="#" className="text-gray-600 hover:text-[#d4ad98] text-sm transition-colors duration-300">
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;