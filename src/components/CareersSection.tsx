
import React from 'react';

const CareersSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-8 top-8 text-6xl">✦</div>
      <div className="absolute right-8 top-12 text-4xl">✈️</div>
      <div className="absolute left-12 bottom-12 text-4xl">✦</div>
      <div className="absolute right-12 bottom-8 text-5xl">📄</div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Left illustration */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-32 hidden lg:block">
          <div className="w-24 h-32 bg-lexend-primary rounded-full relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-800 rounded"></div>
            <div className="absolute bottom-8 left-2 w-6 h-8 bg-gray-800 rounded"></div>
            <div className="absolute bottom-8 right-2 w-6 h-8 bg-gray-800 rounded"></div>
            <div className="absolute -top-4 -left-2 w-12 h-4 bg-white rounded-full transform rotate-12"></div>
          </div>
        </div>

        {/* Right illustration */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-32 hidden lg:block">
          <div className="w-24 h-32 bg-lexend-primary rounded-full relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-800 rounded"></div>
            <div className="absolute bottom-8 left-2 w-6 h-8 bg-gray-800 rounded"></div>
            <div className="absolute bottom-8 right-2 w-6 h-8 bg-gray-800 rounded"></div>
            <div className="absolute -top-4 -right-2 w-8 h-8 bg-white rounded-lg transform -rotate-12"></div>
          </div>
        </div>

        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            We're looking for people<br />
            who share our vision!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Have what it takes to be one of us.
          </p>
          <button className="bg-lexend-primary text-white px-8 py-3 rounded-lg hover:bg-lexend-secondary transition-colors font-semibold">
            View current openings
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
