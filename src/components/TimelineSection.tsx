
import React from 'react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2014",
      image: "https://lexend-nextjs.vercel.app/assets/images/template/timeline-01.png",
      title: "The Beginning",
      description: "Research begins on the relationship between typography and reading comprehension at Google Fonts."
    },
    {
      year: "2016",
      image: "https://lexend-nextjs.vercel.app/assets/images/template/timeline-03.png",
      title: "First Studies",
      description: "Initial studies show promising results in reading speed improvements with optimized character spacing."
    },
    {
      year: "2019",
      image: "https://lexend-nextjs.vercel.app/assets/images/template/timeline-04.png",
      title: "Lexend Launch",
      description: "The first Lexend font family is released, backed by comprehensive research data."
    },
    {
      year: "2020",
      image: "https://lexend-nextjs.vercel.app/assets/images/template/timeline-05.png",
      title: "Global Adoption",
      description: "Educational institutions worldwide begin adopting Lexend fonts for improved learning outcomes."
    },
    {
      year: "Today",
      image: "https://lexend-nextjs.vercel.app/assets/images/template/timeline-06.png",
      title: "Continuous Innovation",
      description: "We continue to research and develop new font families to help everyone read better."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-lexend-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We <span className="gradient-text">Got Here</span>
          </h2>
          <p className="text-lg text-lexend-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our journey from research hypothesis to global impact in reading education.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line hidden lg:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Content */}
                <div className="lg:w-5/12">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-lexend-blue text-white rounded-full flex items-center justify-center font-bold">
                        {event.year === "Today" ? "∞" : event.year.slice(-2)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold gradient-text">{event.year}</h3>
                        <h4 className="text-xl font-semibold">{event.title}</h4>
                      </div>
                    </div>
                    <p className="text-lexend-gray-600 dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="lg:w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-lexend-blue rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                </div>

                {/* Image */}
                <div className="lg:w-5/12">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src={event.image} 
                      alt={`Timeline ${event.year}`}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
