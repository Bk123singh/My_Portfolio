import React from 'react';
import { motion } from 'framer-motion';
import { softSkills } from '../data/portfolioData';
import { Compass, Cpu, Target, Users, BookOpen, Check } from 'lucide-react';

const iconMap = {
  Compass,
  Cpu,
  Target,
  Users,
  BookOpen
};

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 md:py-28 border-b border-[#e8e8e3] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index & Header */}
        <div className="mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-charcoal-600 mb-2 block">
            [ 05 / OPERATING PRINCIPLES ]
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111215]">
            Beyond the Code
          </h2>
          <p className="mt-2 text-charcoal-700 text-sm sm:text-base max-w-xl">
            Software engineering is an ongoing balance of technical rigor, trade-off evaluation, and team ownership.
          </p>
        </div>

        {/* Operating Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Compass;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="card-clean p-7 flex flex-col justify-between bg-[#fafaf8]"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#e8e8e3]">
                    <div className="w-8 h-8 rounded-full bg-white border border-[#e8e8e3] text-charcoal-800 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-blue-800" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-bold text-[#111215] text-base">
                      {skill.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {skill.principles.map((principle, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                        <Check className="w-3.5 h-3.5 text-blue-800 shrink-0 mt-1" aria-hidden="true" />
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
