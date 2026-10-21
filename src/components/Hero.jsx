import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FileDown, ArrowUpRight, MapPin, Mail, Phone, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

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
        
        {/* Top Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#e8e8e3] shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-xs text-charcoal-700 font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Backend Software Engineer Intern @ ShriNeo Vittiyam</span>
          <span className="text-charcoal-300">•</span>
          <span className="text-charcoal-500 font-mono">B.Tech CSE '27</span>
        </motion.div>

        {/* Main Grid: Headline + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Bold Editorial Typography */}
          <div className="lg:col-span-8 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111215] leading-[1.08]"
            >
              Crafting <span className="italic font-serif font-normal text-charcoal-700">resilient</span> backend systems & <span className="underline decoration-[#e2e2dc] decoration-2 underline-offset-8">agentic AI</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-charcoal-600 max-w-2xl font-normal leading-relaxed"
            >
              Hi, I'm <strong className="font-semibold text-[#111215]">{personalInfo.name}</strong>. Software Development Engineer intern specializing in clean, tested production microservices, event-driven pipelines with Apache Kafka, deterministic ATS scoring engines, and multi-agent LLM workflows.
            </motion.p>

            {/* Quick Contact Metadata Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-charcoal-500 font-mono pt-1"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-charcoal-400" />
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <Mail className="w-3.5 h-3.5 text-charcoal-400" />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <Phone className="w-3.5 h-3.5 text-charcoal-400" />
                {personalInfo.phone}
              </a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-3"
            >
              <a
                href={personalInfo.resumeUrl}
                download="Bishal_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-full bg-[#111215] hover:bg-[#27272a] text-white shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-full bg-white hover:bg-[#f4f4f0] text-charcoal-800 border border-[#e8e8e3] shadow-sm hover:shadow transition-all"
              >
                <span>Selected Work</span>
                <ArrowUpRight className="w-4 h-4 text-charcoal-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-medium text-charcoal-600 hover:text-[#111215] transition-colors"
              >
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Profiles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 pt-2"
            >
              <span className="text-xs font-mono text-charcoal-400">Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-700 hover:text-[#111215] px-3 py-1 bg-white border border-[#e8e8e3] rounded-full hover:bg-[#f4f4f0] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-700 hover:text-blue-600 px-3 py-1 bg-white border border-[#e8e8e3] rounded-full hover:bg-[#f4f4f0] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-700 hover:text-amber-600 px-3 py-1 bg-white border border-[#e8e8e3] rounded-full hover:bg-[#f4f4f0] transition-colors"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-600" />
                <span>LeetCode 150+</span>
              </a>
            </motion.div>

          </div>

          {/* Right: Minimalist Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer clean frame */}
              <div className="w-64 sm:w-72 rounded-3xl p-2.5 bg-white border border-[#e8e8e3] shadow-[0_12px_40px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_50px_rgba(0,0,0,0.09)] transition-all duration-300">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-80 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs font-mono text-charcoal-500">
                  <span>{personalInfo.name}</span>
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verified
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
              <span className="text-charcoal-400">✦</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
