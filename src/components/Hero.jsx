import React from 'react';
import { personalInfo, professionalInterests } from '../data/portfolioData';
import { FileDown, ArrowRight, Mail, MapPin, Phone, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/60">
      {/* Background radial gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Backend Software Engineer Intern @ ShriNeo Vittiyam</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">{personalInfo.name}</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-blue-300/90 font-mono">
                {personalInfo.title}
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {personalInfo.summary}
            </p>

            {/* Quick Contact Metadata Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 font-mono pt-1">
              <span className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.phone}
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download="Bishal_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-400 text-white shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#ai-showcase"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-xl hover:bg-slate-800/50 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <span>AI Projects</span>
              </a>
            </div>

            {/* Quick Profile Links */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs font-mono text-slate-500">Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 rounded-md transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-blue-400 px-2.5 py-1 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 rounded-md transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-400 px-2.5 py-1 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 rounded-md transition-colors"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode (150+)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Portrait Card & Live Fast-Scan Metrics */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Card Container */}
            <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-slate-800/70 to-slate-900/90 border border-slate-700/70 p-5 shadow-2xl relative">
              
              {/* Photo & Identity */}
              <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                <div className="relative">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-blue-500/40 shadow-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-slate-900" title="Online / Active" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 text-lg">{personalInfo.name}</h3>
                  <p className="text-xs text-blue-400 font-mono">B.Tech CSE '27 (VGU)</p>
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Internship Experience</span>
                  </div>
                </div>
              </div>

              {/* Fast-Scan Metric Grid (30-Second Recruiter Read) */}
              <div className="pt-4 space-y-2.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Verified Production Benchmarks</span>
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-xl font-bold text-blue-400 font-mono">4 Shipped</div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Production Microservices</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-xl font-bold text-cyan-400 font-mono">~40%</div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">DB Lookups Cut (Redis)</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-xl font-bold text-indigo-400 font-mono">500+</div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Kafka Events (0 Loss)</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-xl font-bold text-emerald-400 font-mono">120ms</div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Avg API Latency (Postman)</div>
                  </div>
                </div>

                {/* Additional Quick Badges */}
                <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/40">
                    <span className="text-slate-400 font-mono text-[11px]">LeetCode DSA in Python</span>
                    <span className="font-bold text-amber-400 font-mono">150+ Solved</span>
                  </div>
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/40">
                    <span className="text-slate-400 font-mono text-[11px]">Docker Setup Onboarding</span>
                    <span className="font-bold text-emerald-400 font-mono">&lt; 10 min (from 30 min)</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Professional Interests Ticker */}
        <div className="mt-12 pt-8 border-t border-slate-800/60">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Core Engineering Competencies & Professional Focus
          </p>
          <div className="flex flex-wrap gap-2">
            {professionalInterests.map((interest, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 text-slate-300 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
