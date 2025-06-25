
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HowLexendHelps from '../components/HowLexendHelps';
import ValuesSection from '../components/ValuesSection';
import ClientTestimonials from '../components/ClientTestimonials';
import TimelineSection from '../components/TimelineSection';
import ExecutiveTeam from '../components/ExecutiveTeam';
import CareersSection from '../components/CareersSection';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowLexendHelps />
      <ValuesSection />
      <ClientTestimonials />
      <TimelineSection />
      <ExecutiveTeam />
      <CareersSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
