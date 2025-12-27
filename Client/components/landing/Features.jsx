import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Empathetic AI Conversations',
      description: 'Experience therapy-like chats that feel genuinely caring, supportive, and completely free of judgment.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Session-Aware Memory',
      description: 'Our AI understands your journey, remembers past conversations, and maintains meaningful context throughout your sessions.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Smart Session Summaries',
      description: 'Receive thoughtful, gentle reflections at the end of each session to help you track your emotional growth.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Privacy-First Design',
      description: 'Your conversations are completely private and secure. We prioritize your confidentiality above all else.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Available Anytime',
      description: 'Get instant emotional support whenever you need it—no scheduling, no waiting, no barriers to care.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Non-Clinical Experience',
      description: 'A warm, human-centered approach that feels like talking to a caring friend, not a medical professional.'
    }
  ];

  return (
    <section className="bg-[#f7f3ee] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Designed to Support Your{' '}
            <span className="text-[#d4ad98]">Emotional Well-Being</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience compassionate AI support built with your mental wellness in mind, combining advanced technology with genuine care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                bg-white/80 backdrop-blur-sm 
                rounded-2xl p-8 
                border-2 border-[#d4ad98]/20 
                shadow-md hover:shadow-xl 
                hover:border-[#d4ad98]/40 
                hover:-translate-y-1 
                transition-all duration-300 
                animate-slide-up
                ${index === 0 ? 'animation-delay-200' : ''}
                ${index === 1 ? 'animation-delay-300' : ''}
                ${index === 2 ? 'animation-delay-400' : ''}
                ${index === 3 ? 'animation-delay-500' : ''}
                ${index === 4 ? 'animation-delay-600' : ''}
                ${index === 5 ? 'animation-delay-800' : ''}
              `}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4ad98]/20 to-[#e8c8b5]/10 rounded-2xl flex items-center justify-center mb-6 text-[#d4ad98] transform transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA (Optional) */}
        <div className="text-center mt-16 animate-fade-in animation-delay-800">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to experience compassionate AI support?
          </p>
          <button className="bg-[#d4ad98] text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#d4ad98]/30 hover:shadow-xl hover:shadow-[#d4ad98]/40 hover:scale-105 hover:bg-[#c99d87] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#d4ad98]/30">
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
