
import React from 'react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2014",
      image: "https://lexend-nextjs.vercel.app/assets/images/template/timeline-01.png",
      title: "Where the idea come up of Lexend :)",
      description: ""
    },
    {
      year: "2015",
      image: "https://lexend-nextjs.vercel.app/assets/images/template/timeline-03.png",
      title: "Launched our first business that can be created in minutes, build meaningful relationships.",
      description: ""
    },
    {
      year: "2016",
      image: "https://lexend-nextjs.vercel.app/assets/images/template/timeline-04.png",
      title: "Opened our new office in Toronto, CA",
      description: ""
    },
    {
      year: "2019",
      image: "https://lexend-nextjs.vercel.app/assets/images/template/timeline-05.png",
      title: "Moved to Silicon Valley whereas now we can focus on building out to help our employees.",
      description: ""
    },
    {
      year: "2020",
      image: "https://lexend-nextjs.vercel.app/assets/images/template/timeline-06.png",
      title: "Opened a new office in London, UK.",
      description: ""
    },
    {
      year: "Today",
      image: "https://lexend-nextjs.vercel.app/assets/images/template/timeline-06.png",
      title: "Top-rated software solution for service suppliers.",
      description: ""
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 lg:px-8 section-bg-light dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How we <span className="gradient-text">got here</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on large screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Content */}
                <div className="lg:w-5/12 w-full">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-lexend-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {event.year === "Today" ? "∞" : event.year.slice(-2)}
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold gradient-text">{event.year}</h3>
                      </div>
                    </div>
                    <p className="text-lexend-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {event.title}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot - Only visible on large screens */}
                <div className="lg:w-2/12 hidden lg:flex justify-center">
                  <div className="w-6 h-6 bg-lexend-primary rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                </div>

                {/* Image */}
                <div className="lg:w-5/12 w-full">
                  <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg max-w-md mx-auto">
                    <img 
                      src={event.image} 
                      alt={`Timeline ${event.year}`}
                      className="w-full h-48 lg:h-64 object-cover transition-transform duration-300 hover:scale-110"
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
