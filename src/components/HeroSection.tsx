
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-8 top-8 text-4xl transform rotate-12">✦</div>
      <div className="absolute left-8 top-20 text-3xl transform -rotate-12">✦</div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            About <span className="gradient-text">Lexend.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            In 2014, Steven Smith have gotten so much of our time back that we're now able to put towards 
            things that are actually helping our company as opposed to just throwing content out there. and the 
            idea of Lexend was born. Today, Lexend empowers teams to easily communicate with customers 
            through personalized documents that can be created in minutes, build meaningful relationships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Illustration */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <img 
                src="https://lexend-nextjs.vercel.app/assets/images/template/walking.svg" 
                alt="Lexend illustration" 
                className="w-full max-w-lg mx-auto float-animation"
              />
            </div>
          </div>

          {/* Right Content - Hero Boxes */}
          <div className="grid gap-6 animate-fade-in">
            {/* Box 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="relative overflow-hidden rounded-2xl flex-shrink-0">
                  <img 
                    src="https://lexend-nextjs.vercel.app/assets/images/template/hero-about-01.jpg" 
                    alt="Reading comprehension" 
                    className="w-24 h-24 lg:w-32 lg:h-32 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src="https://lexend-nextjs.vercel.app/assets/images/template/hand-pencil.svg" 
                      alt="Hand pencil icon" 
                      className="w-8 h-8 flex-shrink-0"
                    />
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">Better Reading</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Improve reading speed and comprehension with scientifically designed fonts.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="relative overflow-hidden rounded-2xl flex-shrink-0">
                  <img 
                    src="https://lexend-nextjs.vercel.app/assets/images/template/hero-about-02.jpg" 
                    alt="Typography research" 
                    className="w-24 h-24 lg:w-32 lg:h-32 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src="https://lexend-nextjs.vercel.app/assets/images/template/empathing.svg" 
                      alt="Empathy icon" 
                      className="w-8 h-8 flex-shrink-0"
                    />
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">Research Based</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our fonts are backed by extensive research in cognitive psychology and education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company logos section */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
              <div className="w-8 h-8 bg-lexend-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">C</span>
              </div>
              Capsule
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
              <div className="w-8 h-8 bg-lexend-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">L</span>
              </div>
              Layers
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
              <div className="w-8 h-8 bg-lexend-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">P</span>
              </div>
              Polymath
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
              <div className="w-8 h-8 bg-lexend-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">S</span>
              </div>
              Segment
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
              <div className="w-8 h-8 bg-lexend-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">A</span>
              </div>
              Alt+Shift
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
