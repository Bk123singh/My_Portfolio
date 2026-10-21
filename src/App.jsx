import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import AiShowcase from './components/AiShowcase';
import Skills from './components/Skills';
import ProductWorkflow from './components/ProductWorkflow';
import HowIWork from './components/HowIWork';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-blue-600/30 selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <AiShowcase />
        <Skills />
        <ProductWorkflow />
        <HowIWork />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
