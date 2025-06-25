
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-bg py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We are <span className="gradient-text">Lexend</span>
            </h1>
            <p className="text-lg md:text-xl text-lexend-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We believe in the power of typography to improve reading proficiency and 
              comprehension. Our mission is to make reading easier for everyone through 
              innovative font design and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-lexend-blue hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
              <button className="border-2 border-lexend-blue text-lexend-blue hover:bg-lexend-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Content - Hero Boxes */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-float">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src="https://lexend-nextjs.vercel.app/assets/images/template/hero-about-01.jpg" 
                    alt="Reading comprehension" 
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src="https://lexend-nextjs.vercel.app/assets/images/template/hand-pencil.svg" 
                    alt="Hand pencil icon" 
                    className="w-8 h-8"
                  />
                  <h3 className="text-xl font-semibold">Better Reading</h3>
                </div>
                <p className="text-lexend-gray-600 dark:text-gray-300">
                  Improve reading speed and comprehension with scientifically designed fonts.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src="https://lexend-nextjs.vercel.app/assets/images/template/hero-about-02.jpg" 
                    alt="Typography research" 
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src="https://lexend-nextjs.vercel.app/assets/images/template/empathing.svg" 
                    alt="Empathy icon" 
                    className="w-8 h-8"
                  />
                  <h3 className="text-xl font-semibold">Research Based</h3>
                </div>
                <p className="text-lexend-gray-600 dark:text-gray-300">
                  Our fonts are backed by extensive research in cognitive psychology and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
