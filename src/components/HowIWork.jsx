import React from 'react';
import { softSkills } from '../data/portfolioData';
import { Compass, Cpu, Target, Users, BookOpen, CheckCircle } from 'lucide-react';

const iconMap = {
  Compass,
  Cpu,
  Target,
  Users,
  BookOpen
};

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Professional Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beyond the Code: How I Work
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            Software engineering is more than syntax. These are the operating principles and collaborative habits that define how I contribute to engineering teams and product delivery.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Compass;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
                    <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-100 text-base">
                      {skill.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {skill.principles.map((principle, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
