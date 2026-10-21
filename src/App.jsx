import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import HowIWork from './components/HowIWork';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#141517] selection:bg-[#111215] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MetricsBar />
        <Experience />
        <Projects />
        <Skills />
        <HowIWork />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
