
import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-diamond.svg",
      title: "Make an impact",
      description: "We're building something big. Something that has the power to change the trajectory of any sized business for the better."
    },
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-trophy.svg",
      title: "Learn",
      description: "Lexend team are masters of their craft. Even though we're all experts in our respective fields, we always make time to expand our minds."
    },
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-globe.svg",
      title: "Have fun",
      description: "We work hard and play harder. We believe in the importance of celebrating wins big or small, for the business or individuals."
    },
    {
      icon: "https://lexend-nextjs.vercel.app/assets/images/template/icon-crown.svg",
      title: "Empathy",
      description: "We strive to be empathetic to every customer and colleague and by doing so we can provide a better experience for all."
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Values: <span className="gradient-text">it's Simple!</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-lexend-light dark:bg-gray-800 rounded-3xl p-8 lg:p-10 card-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <img 
                    src={value.icon} 
                    alt={`${value.title} icon`} 
                    className="w-8 h-8 lg:w-10 lg:h-10"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-lexend-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
