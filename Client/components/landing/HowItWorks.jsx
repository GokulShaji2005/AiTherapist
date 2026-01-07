import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      title: "Create Your Account",
      description: "Sign up in seconds with just your email. No lengthy forms, no complicated processes—just a simple, secure registration to get you started on your journey to better mental wellness."
    },
    {
      number: "02",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Start Your First Session",
      description: "Jump right into a conversation with our empathetic AI therapist. Share what's on your mind freely—there's no judgment, no appointments needed, and complete privacy guaranteed throughout your session."
    },
    {
      number: "03",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Receive Thoughtful Insights",
      description: "At the end of each session, get a personalized summary with gentle reflections and actionable insights. Our AI remembers your journey, helping you track progress and recognize patterns over time."
    },
    {
      number: "04",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Track Your Growth",
      description: "Access your session history anytime to see how far you've come. Watch your emotional wellness journey unfold with saved conversations, summaries, and insights that illuminate your personal growth."
    }
  ];

  return (
    <section id="how-it-works" className="relative bg-[#f7f3ee] py-20 px-4 overflow-hidden">
      {/* Decorative Background Blobs - matching HeroSection */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-linear-to-br from-[#d4ad98]/20 to-[#e8c8b5]/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-linear-to-tr from-[#f0dfd4]/30 to-[#d4ad98]/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            How It{' '}
            <span className="text-[#d4ad98]">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting started with your AI therapist is simple. Just four easy steps to begin your journey toward better emotional well-being.
          </p>
        </div>

        {/* Steps Container */}
        <div className="space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                flex flex-col md:flex-row items-center gap-8 md:gap-12
                ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
                animate-slide-up
                ${index === 0 ? 'animation-delay-200' : ''}
                ${index === 1 ? 'animation-delay-400' : ''}
                ${index === 2 ? 'animation-delay-600' : ''}
                ${index === 3 ? 'animation-delay-800' : ''}
              `}
            >
              {/* Visual Column */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  {/* Large Number Background */}
                  <div className="absolute -top-6 -left-6 text-[120px] md:text-[160px] font-bold text-[#d4ad98]/10 leading-none pointer-events-none">
                    {step.number}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-4 border-[#d4ad98]/30 flex items-center justify-center text-[#d4ad98] transform hover:scale-105 hover:rotate-3 transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Connecting Line (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-1 h-16 bg-linear-to-b from-[#d4ad98]/30 to-transparent mt-8" />
                  )}
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 text-center md:text-left space-y-4">
                {/* Step Number Badge */}
                <div className="inline-flex items-center gap-2 bg-[#d4ad98]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#d4ad98]/20">
                  <span className="text-sm font-semibold text-[#d4ad98]">
                    Step {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in animation-delay-1000">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#d4ad98]/20 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Join thousands who have found support, clarity, and peace through compassionate AI therapy. Your mental wellness matters.
            </p>
            <button className="bg-[#d4ad98] text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#d4ad98]/30 hover:shadow-xl hover:shadow-[#d4ad98]/40 hover:scale-105 hover:bg-[#c99d87] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#d4ad98]/30">
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
