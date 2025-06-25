
import React from 'react';
import HeroSection from '../components/HeroSection';
import HowLexendHelps from '../components/HowLexendHelps';
import ValuesSection from '../components/ValuesSection';
import TimelineSection from '../components/TimelineSection';
import ExecutiveTeam from '../components/ExecutiveTeam';
import FloatingButtons from '../components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowLexendHelps />
      <ValuesSection />
      <TimelineSection />
      <ExecutiveTeam />
      <FloatingButtons />
    </div>
  );
};

export default Index;
