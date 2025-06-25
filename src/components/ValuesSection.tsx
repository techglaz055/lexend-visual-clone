
import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-diamond.svg",
      title: "Make an Impact",
      description: "We strive to create meaningful change in how people read and learn, one font at a time."
    },
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-trophy.svg",
      title: "Learn",
      description: "Continuous learning and research drive our innovation in typography and reading science."
    },
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-globe.svg",
      title: "Have Fun",
      description: "We believe that work should be enjoyable and that creativity flourishes in a positive environment."
    },
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-crown.svg",
      title: "Empathy",
      description: "Understanding diverse reading needs helps us create inclusive solutions for everyone."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Values: <span className="gradient-text">It's Simple</span>
          </h2>
          <p className="text-lg text-lexend-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These core values guide everything we do, from our research methodology to our product development and team culture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-lexend-lightBlue dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                <img 
                  src={value.icon} 
                  alt={`${value.title} icon`} 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-lexend-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
