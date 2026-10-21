import React from 'react';
import { motion } from 'framer-motion';
import { experience, personalInfo } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2, FileDown, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#e8e8e3] bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-charcoal-400 mb-2 block">
              [ 01 / EXPERIENCE ]
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111215]">
              Commercial Engineering
            </h2>
            <p className="mt-2 text-charcoal-600 text-sm sm:text-base max-w-xl">
              Production microservices, event-driven pipelines, and high-performance caching for a digital lending platform.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href={personalInfo.resumeUrl}
              download="Bishal_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white hover:bg-[#f4f4f0] text-charcoal-800 border border-[#e8e8e3] shadow-sm transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-charcoal-500" />
              <span>Verify in Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Experience Editorial Cards */}
        <div className="space-y-10">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-clean p-8 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column: Role Details & Meta */}
                <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-[#e8e8e3] pb-6 lg:pb-0 lg:pr-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{exp.type}</span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#111215] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-blue-700 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-charcoal-500 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-charcoal-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-charcoal-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Context */}
                  <p className="text-xs text-charcoal-600 leading-relaxed pt-2">
                    {exp.context}
                  </p>

                  {/* Tech stack tags */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-charcoal-400 uppercase tracking-wider mb-2">
                      Core Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#f4f4f0] text-charcoal-700 border border-[#e8e8e3]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Key Engineering Deliverables */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-charcoal-400 mb-2">
                    Verified Production Deliverables & Outcomes
                  </div>

                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 rounded-xl bg-[#fafaf8] border border-[#ebebe7] hover:border-[#dcdcd7] transition-colors flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
