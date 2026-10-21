import React from 'react';
import { educationAndAchievements } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, ExternalLink, Code, CheckCircle } from 'lucide-react';

export default function EducationCertifications() {
  const { education, achievements, certifications } = educationAndAchievements;

  return (
    <section id="education" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Foundational Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Problem Solving & Certifications
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            Computer science foundation, algorithmic problem-solving fluency, and verified professional coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Formal Education */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      {education.institution}
                    </h3>
                    <p className="text-xs text-blue-400 font-mono">
                      {education.period}
                    </p>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                  CGPA: {education.cgpa}
                </div>
              </div>

              <div className="py-4">
                <h4 className="text-base font-semibold text-slate-200">
                  {education.degree}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Rigorous academic curriculum emphasizing low-level system concepts, databases, algorithm optimization, and distributed systems.
                </p>
              </div>

              <div className="pt-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Relevant Coursework</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950/80 text-slate-300 border border-slate-800"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full-time degree in progress (Expected Graduation: May 2027)</span>
            </div>
          </div>

          {/* Right Column: Achievements & Certifications */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* LeetCode & Problem Solving */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <Code className="w-4 h-4 text-amber-400" />
                  <h4 className="font-bold text-white text-base">
                    Algorithmic Problem Solving
                  </h4>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                  LeetCode
                </span>
              </div>

              <div className="pt-4 space-y-3">
                {achievements.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-sm text-slate-100 flex items-center gap-2">
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white shrink-0"
                        title="View LeetCode Profile"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
                <Award className="w-4 h-4 text-cyan-400" />
                <h4 className="font-bold text-white text-base">
                  Professional Certifications
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-cyan-400">{cert.issuer}</div>
                      <h5 className="font-bold text-xs text-slate-100 mt-1">{cert.title}</h5>
                    </div>
                    <span className="mt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>{cert.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
