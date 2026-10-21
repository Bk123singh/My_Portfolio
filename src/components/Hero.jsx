import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FileDown, ArrowUpRight, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

// Isolated clock component to prevent re-rendering the Hero section
const LiveClock = memo(function LiveClock() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!currentTime) return null;

  return (
    <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f4f0] border border-[#e8e8e3] text-xs font-mono text-charcoal-600">
      <Clock className="w-3.5 h-3.5 text-charcoal-500" aria-hidden="true" />
      <span>Siwan, IN: {currentTime} (IST)</span>
    </div>
  );
});

export default function Hero() {
  const marqueeItems = [
    "Production Microservices Architecture",
    "Apache Kafka Event Streaming",
    "Deterministic 5-Pillar AI Matching",
    "Autonomous Multi-Agent Orchestration",
    "Retrieval-Augmented Generation (RAG)",
    "Redis Caching & Latency Optimization",
    "150+ DSA Solved on LeetCode",
    "Clean Code & Distributed Systems",
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[#e8e8e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status & Live Time Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#e8e8e3] shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-xs text-charcoal-700 font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
            <span>Backend SDE Intern @ ShriNeo Vittiyam</span>
            <span className="text-charcoal-400" aria-hidden="true">•</span>
            <span className="text-charcoal-600 font-mono">B.Tech CSE '27</span>
          </motion.div>

          <LiveClock />
        </div>

        {/* Main Grid: Headline + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Bold Editorial Typography with Humanized Voice */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Friendly Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-700 font-sans"
            >
              <span className="text-xl animate-wave" role="img" aria-label="Waving hand">👋</span>
              <span>Hey there, I'm Bishal Kumar</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111215] leading-[1.08]"
            >
              Crafting <span className="italic font-serif font-normal text-charcoal-700">resilient</span> backend systems & <span className="underline decoration-[#e2e2dc] decoration-2 underline-offset-8">agentic AI</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-charcoal-600 max-w-2xl font-normal leading-relaxed"
            >
              I build software that real people use. Experienced in clean microservices, event-driven pipelines with Apache Kafka, deterministic ATS scoring algorithms, and autonomous multi-agent LLM systems that solve practical problems with empathy and precision.
            </motion.p>

            {/* Quick Contact Metadata Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-charcoal-600 font-mono pt-1"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-charcoal-500" aria-hidden="true" />
                <span>{personalInfo.location}</span>
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-blue-700 transition-colors focus-visible:ring-2 focus-visible:ring-[#111215] rounded"
              >
                <Mail className="w-3.5 h-3.5 text-charcoal-500" aria-hidden="true" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-blue-700 transition-colors focus-visible:ring-2 focus-visible:ring-[#111215] rounded"
              >
                <Phone className="w-3.5 h-3.5 text-charcoal-500" aria-hidden="true" />
                <span>{personalInfo.phone}</span>
              </a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3.5 pt-3"
            >
              <a
                href={personalInfo.resumeUrl}
                download="Bishal_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-full bg-[#111215] hover:bg-[#27272a] text-white shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#111215] focus-visible:ring-offset-2"
                aria-label="Download Bishal Kumar's Verified Resume PDF"
              >
                <FileDown className="w-4 h-4" aria-hidden="true" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-full bg-white hover:bg-[#f4f4f0] text-charcoal-800 border border-[#e8e8e3] shadow-sm hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-[#111215] focus-visible:ring-offset-2"
              >
                <span>Selected Work</span>
                <ArrowUpRight className="w-4 h-4 text-charcoal-500" aria-hidden="true" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-medium text-charcoal-700 hover:text-[#111215] transition-colors focus-visible:ring-2 focus-visible:ring-[#111215] rounded"
              >
                <span>My Story</span>
              </a>
            </motion.div>

            {/* Profile Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 pt-2"
            >
              <span className="text-xs font-mono text-charcoal-500">Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bishal Kumar on GitHub"
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-700 hover:text-[#111215] px-3 py-1 bg-white border border-[#e8e8e3] rounded-full hover:bg-[#f4f4f0] transition-colors focus-visible:ring-2 focus-visible:ring-[#111215]"
              >
                <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bishal Kumar on LinkedIn"
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-700 hover:text-blue-700 px-3 py-1 bg-white border border-[#e8e8e3] rounded-full hover:bg-[#f4f4f0] transition-colors focus-visible:ring-2 focus-visible:ring-[#111215]"
              >
                <LinkedinIcon className="w-3.5 h-3.5" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bishal Kumar on LeetCode"
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-700 hover:text-amber-800 px-3 py-1 bg-white border border-[#e8e8e3] rounded-full hover:bg-[#f4f4f0] transition-colors focus-visible:ring-2 focus-visible:ring-[#111215]"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-700" aria-hidden="true" />
                <span>LeetCode (150+)</span>
              </a>
            </motion.div>

          </div>

          {/* Right: Minimalist Editorial Portrait with Floating Badges & Optimized Responsive Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center lg:justify-end relative"
          >
            <div className="relative group">
              
              {/* Floating Top Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 z-10 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#e8e8e3] shadow-md text-[11px] font-mono text-charcoal-800 flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600" aria-hidden="true" />
                <span>Shipping @ ShriNeo Vittiyam</span>
              </motion.div>

              {/* Floating Bottom Badge */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 z-10 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#e8e8e3] shadow-md text-[11px] font-mono text-charcoal-800 flex items-center gap-1.5"
              >
                <span className="text-amber-600" aria-hidden="true">⚡</span>
                <span>150+ DSA Problems Solved</span>
              </motion.div>

              {/* Outer clean frame with optimized WebP responsive picture */}
              <div className="w-64 sm:w-72 rounded-3xl p-2.5 bg-white border border-[#e8e8e3] shadow-[0_12px_40px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_50px_rgba(0,0,0,0.09)] transition-all duration-300">
                <picture>
                  <source type="image/webp" srcSet="/assets/profile-300w.webp 1x, /assets/profile.webp 2x" />
                  <img
                    src="/assets/profile-300w.webp"
                    alt="Bishal Kumar — Full-Stack Developer and AI Systems Engineer"
                    width="288"
                    height="320"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                    className="w-full h-80 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </picture>
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs font-mono text-charcoal-600">
                  <span>{personalInfo.name}</span>
                  <span className="flex items-center gap-1 text-emerald-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                    Verified SDE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Infinite Horizontal Marquee Ticker */}
      <div className="mt-16 pt-6 pb-6 bg-[#f4f4f0] border-y border-[#e8e8e3] overflow-hidden whitespace-nowrap mask-marquee">
        <div className="inline-flex gap-8 animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-charcoal-600">
              <span>{item}</span>
              <span className="text-charcoal-500" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
