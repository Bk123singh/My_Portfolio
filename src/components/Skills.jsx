import React, { useState } from 'react';
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
  CheckCircle2,
  Filter
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
    <section id="skills" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Engineering Competencies
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl">
              100% verified against codebases, production microservices at ShriNeo Vittiyam, and active repositories. Categorized with clean typography without artificial skill percentages.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>10 Curated Engineering Domains</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700/80 p-6 flex flex-col justify-between transition-all group hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/80">
                    <div className="w-9 h-9 rounded-xl bg-blue-950/70 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:scale-105 transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-100 text-sm sm:text-base">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills Tag List */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/70 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{cat.skills.length} verified competencies</span>
                  <span className="text-emerald-500/80">✓ verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
