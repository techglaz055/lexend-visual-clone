
import React from 'react';

const ClientTestimonials = () => {
  const testimonials = [
    {
      company: "Boltshift",
      quote: "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
      author: "Mark Zellers",
      position: "CEO, Co-Founder",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=24&h=24&fit=crop&auto=format"
    },
    {
      company: "Lightbox",
      quote: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
      author: "Natalia Larsson",
      position: "Director of Sales",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=24&h=24&fit=crop&auto=format"
    },
    {
      company: "Interlock",
      quote: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder just outstanding!!",
      author: "Sarah Edrissi",
      position: "Lead Marketing",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=24&h=24&fit=crop&auto=format"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Some clients feedbacks
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Company header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-lexend-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.company[0]}</span>
                </div>
                <span className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.company}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-lexend-primary hover:text-lexend-secondary font-semibold transition-colors">
            See all feedbacks
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
