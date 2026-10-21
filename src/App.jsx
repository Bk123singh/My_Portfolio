import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';

// Below-the-fold components loaded on demand for optimal FCP & TBT
const AboutMe = lazy(() => import('./components/AboutMe'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const HowIWork = lazy(() => import('./components/HowIWork'));
const EducationCertifications = lazy(() => import('./components/EducationCertifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#141517] selection:bg-[#111215] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MetricsBar />
        <Suspense fallback={<div className="min-h-[200px]" aria-hidden="true" />}>
          <AboutMe />
          <Experience />
          <Projects />
          <Skills />
          <HowIWork />
          <EducationCertifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
