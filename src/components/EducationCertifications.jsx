import React from 'react';
import { motion } from 'framer-motion';
import { educationAndAchievements } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { LeetCodeIcon } from './Icons';

export default function EducationCertifications() {
  const { education, achievements, certifications } = educationAndAchievements;

  return (
    <section id="education" className="py-20 md:py-28 border-b border-[#e8e8e3] bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index & Header */}
        <div className="mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-charcoal-600 mb-2 block">
            [ 06 / EDUCATION & ACHIEVEMENTS ]
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111215]">
            Foundations & Problem Solving
          </h2>
          <p className="mt-2 text-charcoal-700 text-sm sm:text-base max-w-xl">
            Core computer science principles, algorithmic fluency in Python, and professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formal Degree */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 card-clean p-8 bg-white"
          >
            <div className="flex items-center justify-between pb-6 border-b border-[#e8e8e3]">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#f4f4f0] text-charcoal-800 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-800" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#111215]">
                    {education.institution}
                  </h3>
                  <p className="text-xs text-charcoal-600 font-mono mt-0.5">
                    {education.period}
                  </p>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-850 border border-emerald-200 text-xs font-mono font-bold text-emerald-900">
                CGPA: {education.cgpa}
              </div>
            </div>

            <div className="py-5">
              <h4 className="font-display font-bold text-base text-[#111215]">
                {education.degree}
              </h4>
              <p className="text-xs text-charcoal-700 mt-1 leading-relaxed">
                Comprehensive training across low-level operating system architectures, distributed systems, database indexing, and computer networks.
              </p>
            </div>

            <div className="pt-2 border-t border-[#f0f0eb]">
              <div className="text-xs font-mono uppercase tracking-wider text-charcoal-600 font-semibold mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-800" aria-hidden="true" />
                <span>Relevant Academic Coursework</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#fafaf8] text-charcoal-800 border border-[#e8e8e3]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#f0f0eb] text-xs text-charcoal-600 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-800" aria-hidden="true" />
              <span>Degree in progress (Expected Graduation: May 2027)</span>
            </div>
          </motion.div>

          {/* Right Column: LeetCode & Certifications */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* LeetCode Milestone */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-clean p-7 bg-white"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#e8e8e3]">
                <div className="flex items-center gap-2.5">
                  <LeetCodeIcon className="w-5 h-5 text-amber-800" aria-hidden="true" />
                  <h3 className="font-display font-bold text-[#111215] text-base">
                    Algorithmic Problem Solving
                  </h3>
                </div>
                <span className="text-xs font-mono text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full font-medium">
                  LeetCode
                </span>
              </div>

              <div className="pt-4 space-y-3">
                {achievements.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#fafaf8] border border-[#e8e8e3] flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-[#111215]">
                        {item.title}
                      </div>
                      <p className="text-xs text-charcoal-700 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-white border border-[#e8e8e3] text-charcoal-700 hover:text-[#111215] hover:scale-105 transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-[#111215]"
                        aria-label="View Bishal Kumar's LeetCode Profile (opens in new tab)"
                      >
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="card-clean p-7 bg-white"
            >
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#e8e8e3]">
                <Award className="w-5 h-5 text-blue-800" aria-hidden="true" />
                <h3 className="font-display font-bold text-[#111215] text-base">
                  Professional Certifications
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="p-3.5 rounded-xl bg-[#fafaf8] border border-[#e8e8e3] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-blue-800 uppercase tracking-wider font-semibold">{cert.issuer}</span>
                      <h4 className="font-bold text-xs text-[#111215] mt-1">{cert.title}</h4>
                    </div>
                    <span className="mt-2 text-[10px] font-mono text-emerald-800 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                      <span>{cert.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
