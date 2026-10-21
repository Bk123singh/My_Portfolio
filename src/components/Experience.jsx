import React from 'react';
import { experience, personalInfo } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, FileDown, Layers, Zap, Shield, GitCommit } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Commercial Engineering Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl">
              Recruiter-focused timeline verified against production code and current resume. Demonstrates real-world microservices architecture, low-latency API design, and asynchronous event streaming.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href={personalInfo.resumeUrl}
              download="Bishal_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-blue-400" />
              <span>Verify in Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

              {/* Role Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2 text-sm text-slate-300 font-mono">
                    <span className="text-blue-400 font-semibold">{exp.company}</span>
                    <span className="text-slate-600 hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="text-slate-600 hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Quantifiable Impact Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {exp.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
                      <div className="text-sm font-bold text-blue-400 font-mono">{metric.value}</div>
                      <div className="text-[10px] text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product / Architecture Context */}
              <div className="py-4">
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  <span className="font-semibold text-slate-200">Product & Systems Context: </span>
                  {exp.context}
                </p>
              </div>

              {/* Verified Responsibilities Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <GitCommit className="w-3.5 h-3.5 text-blue-400" />
                  <span>Key Engineering Deliverables & Verified Outcomes</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700/80 transition-colors flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-950/40 text-blue-300 border border-blue-800/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
