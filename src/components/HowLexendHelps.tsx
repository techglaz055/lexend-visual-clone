
import React from 'react';

const HowLexendHelps = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-lexend-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in">
            <div className="relative">
              <img 
                src="https://lexend-nextjs.vercel.app/assets/images/template/walking.svg" 
                alt="How Lexend helps illustration" 
                className="w-full max-w-md mx-auto float-animation"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How <span className="gradient-text">Lexend</span> Helps
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-lexend-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Improved Reading Speed</h3>
                  <p className="text-lexend-gray-600 dark:text-gray-300">
                    Our fonts can increase reading speed by up to 25% while maintaining comprehension.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-lexend-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Better Comprehension</h3>
                  <p className="text-lexend-gray-600 dark:text-gray-300">
                    Students show significant improvement in reading comprehension when using Lexend fonts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-lexend-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduced Reading Stress</h3>
                  <p className="text-lexend-gray-600 dark:text-gray-300">
                    Less eye strain and fatigue means more comfortable reading experiences for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowLexendHelps;
