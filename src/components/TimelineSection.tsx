
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
    <section className="py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative illustration */}
      <div className="absolute right-8 bottom-8 w-32 h-32 opacity-20">
        <div className="w-full h-full bg-lexend-primary rounded-full relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-800 rounded"></div>
          <div className="absolute bottom-8 left-2 w-6 h-8 bg-gray-800 rounded"></div>
          <div className="absolute bottom-8 right-2 w-6 h-8 bg-gray-800 rounded"></div>
          <div className="absolute -top-4 -right-2 text-2xl">👑</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            How we <span className="gradient-text">got here</span>
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="flex justify-between items-center mb-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Timeline dot */}
                <div className="w-4 h-4 bg-gray-900 dark:bg-white rounded-full mb-4 relative z-10"></div>
                
                {/* Timeline line */}
                {index < timelineEvents.length - 1 && (
                  <div className="absolute top-2 left-4 w-full h-0.5 bg-gray-300 dark:bg-gray-600 z-0"></div>
                )}
              </div>
            ))}
          </div>

          {/* Timeline content */}
          <div className="grid grid-cols-6 gap-8">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className="mb-6">
                  <div className="relative overflow-hidden rounded-2xl mx-auto w-32 h-24 lg:w-40 lg:h-28">
                    <img 
                      src={event.image} 
                      alt={`Timeline ${event.year}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Year */}
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">
                  {event.year}
                </div>

                {/* Title */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {event.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineEvents.map((event, index) => (
            <div 
              key={index}
              className="flex gap-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative overflow-hidden rounded-xl w-20 h-16">
                  <img 
                    src={event.image} 
                    alt={`Timeline ${event.year}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-xl font-bold gradient-text mb-1">{event.year}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {event.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
