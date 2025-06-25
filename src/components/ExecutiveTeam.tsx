
import React from 'react';

const ExecutiveTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Leading typography research with over 15 years of experience in cognitive psychology."
    },
    {
      name: "Michael Chen",
      position: "Head of Research",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Pioneering font development methodologies and reading comprehension studies."
    },
    {
      name: "Emily Rodriguez",
      position: "Design Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Creating beautiful and functional typography that enhances reading experiences."
    },
    {
      name: "Dr. James Wilson",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      description: "Building innovative tools and platforms to distribute Lexend fonts globally."
    },
    {
      name: "Lisa Thompson",
      position: "Head of Education",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
      description: "Partnering with schools and educators to implement reading improvements."
    },
    {
      name: "David Park",
      position: "Lead Font Engineer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      description: "Technical expert in font optimization and cross-platform compatibility."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Executive Team</span>
          </h2>
          <p className="text-lg text-lexend-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals leading our mission to improve reading for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-lexend-blue font-semibold mb-3">{member.position}</p>
                <p className="text-lexend-gray-600 dark:text-gray-300 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;
