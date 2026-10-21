import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { technicalSkillsCategories } from '../data/portfolioData';
import {
  Code2,
  Layout,
  Server,
  Database,
  Network,
  Sparkles,
  Bot,
  FileSearch,
  Wrench,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Network,
  Sparkles,
  Bot,
  FileSearch,
  Wrench,
  ShieldCheck
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...technicalSkillsCategories.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? technicalSkillsCategories
      : technicalSkillsCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#e8e8e3] bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-charcoal-600 mb-2 block">
              [ 04 / CAPABILITIES & SKILLS ]
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111215]">
              Technical Capabilities
            </h2>
            <p className="mt-2 text-charcoal-700 text-sm sm:text-base max-w-xl">
              Curated engineering competencies verified across production microservices, full-stack apps, and agentic workflows.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-emerald-800 flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" aria-hidden="true" />
            <span>Zero Fake Percentages • 100% Code Grounded</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Skill Category Filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-[#111215] ${
                selectedCategory === cat
                  ? 'bg-[#111215] text-white shadow-sm font-semibold'
                  : 'bg-white hover:bg-[#f4f4f0] text-charcoal-700 border border-[#e8e8e3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="card-clean p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#e8e8e3]">
                    <div className="w-8 h-8 rounded-full bg-[#f4f4f0] text-charcoal-800 flex items-center justify-center">
                      <IconComponent className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-bold text-[#111215] text-sm sm:text-base">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#fafaf8] text-charcoal-800 border border-[#e8e8e3] hover:border-charcoal-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f0f0eb] flex items-center justify-between text-[11px] font-mono text-charcoal-600 font-semibold">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-emerald-800 font-medium">✓ verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
