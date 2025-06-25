
import React from 'react';

const HowLexendHelps = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 lg:px-8 section-bg-light dark:bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="gradient-text">Lexend</span> helps
          </h2>
          <p className="text-lg md:text-xl text-lexend-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8">
            Teams use Lexend to improve document workflows, insights, and speed while delivering an amazing 
            experience for their customers. Businesses trust Lexend's all-in-one document automation software to 
            streamline the process to create, approve, and eSign proposals, quotes, contracts, and more. With 
            powerful document creation and workflow capabilities, teams can provide their customers with a more 
            professional, timely, and engaging experience.
          </p>
          <p className="text-lg text-lexend-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            In 2014, Steven Smith have gotten so much of our time back that we're now able to put towards things that 
            are actually helping our company as opposed to just throwing content out there. and the idea of Lexend 
            was born. Today, Lexend empowers teams to easily communicate with customers through personalized 
            documents that can be created in minutes, build meaningful relationships..
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">2014</div>
            <p className="text-lg text-lexend-gray-600 dark:text-gray-300">Lexend founded.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50</div>
            <p className="text-lg text-lexend-gray-600 dark:text-gray-300">Hardworking group.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100k</div>
            <p className="text-lg text-lexend-gray-600 dark:text-gray-300">Document workflows.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowLexendHelps;
