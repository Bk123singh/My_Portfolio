import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aiShowcaseProjects } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Database, Bot, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeTab, setActiveTab] = useState(aiShowcaseProjects[0].id);

  const selectedProject = aiShowcaseProjects.find((p) => p.id === activeTab) || aiShowcaseProjects[0];

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#e8e8e3] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-charcoal-400 mb-2 block">
              [ 02 / SELECTED WORK & AI SYSTEMS ]
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111215]">
              Featured Projects & AI Systems
            </h2>
            <p className="mt-2 text-charcoal-600 text-sm sm:text-base max-w-xl">
              Autonomous multi-agent workflows, deterministic ATS scoring algorithms, and verified Retrieval-Augmented Generation (RAG) pipelines.
            </p>
          </div>
        </div>

        {/* Project Selector - Alejandro HA style numbered navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {aiShowcaseProjects.map((project, idx) => {
            const isActive = activeTab === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                  isActive
                    ? 'bg-[#111215] text-white border-[#111215] shadow-md scale-[1.01]'
                    : 'bg-[#fafaf8] text-charcoal-700 border-[#e8e8e3] hover:bg-[#f4f4f0]'
                }`}
              >
                <div className={`font-mono text-xs font-bold ${isActive ? 'text-blue-400' : 'text-charcoal-400'}`}>
                  0{idx + 1}
                </div>
                <div className="font-display font-bold text-sm sm:text-base mt-1 truncate">
                  {project.title.split(':')[0]}
                </div>
                <div className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-neutral-300' : 'text-charcoal-500'}`}>
                  {project.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Project Card with Smooth Animated Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="card-clean p-8 sm:p-10 border border-[#e8e8e3] bg-[#fafaf8]"
          >
            {/* Top Bar: Title + Badges + Action Buttons */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#e8e8e3]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white text-blue-700 border border-[#e2e2dc]">
                    {selectedProject.badge}
                  </span>
                  <span className="text-xs font-mono text-emerald-700 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Implementation</span>
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111215] tracking-tight mt-2.5">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-charcoal-600 mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-[#111215] hover:bg-[#27272a] text-white shadow-sm transition-all"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-white hover:bg-[#f4f4f0] text-charcoal-800 border border-[#e8e8e3] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Architectural Solution Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-6 border-b border-[#e8e8e3]">
              <div className="p-5 rounded-2xl bg-white border border-[#e8e8e3]">
                <div className="text-xs font-mono uppercase tracking-wider text-rose-700 font-semibold mb-2">
                  The Engineering Problem
                </div>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#e8e8e3]">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold mb-2">
                  System Architecture & Solution
                </div>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                  {selectedProject.architecture}
                </p>
              </div>
            </div>

            {/* Specific Visualizers */}

            {/* 1. JobPilot AI 5-Pillars */}
            {selectedProject.id === 'jobpilot-ai' && selectedProject.fivePillars && (
              <div className="py-6 border-b border-[#e8e8e3]">
                <div className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold mb-4 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  <span>Deterministic 5-Pillar Matching Weighting</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {selectedProject.fivePillars.map((pillar, pIdx) => (
                    <div key={pIdx} className="p-4 rounded-xl bg-white border border-[#e8e8e3] flex flex-col justify-between">
                      <div>
                        <span className="font-display font-bold text-xl text-blue-700">{pillar.weight}</span>
                        <h4 className="text-xs font-bold text-[#111215] mt-1">{pillar.name}</h4>
                      </div>
                      <p className="text-[11px] text-charcoal-500 mt-2 leading-tight">{pillar.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Agentic Workflow Pipeline */}
            {selectedProject.agenticWorkflow && (
              <div className="py-6 border-b border-[#e8e8e3]">
                <div className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold mb-4 flex items-center gap-2">
                  <Bot className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Autonomous Multi-Agent Workflow Execution</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {selectedProject.agenticWorkflow.map((step, sIdx) => (
                    <div key={sIdx} className="p-4 rounded-xl bg-white border border-[#e8e8e3]">
                      <div className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">
                        Stage 0{sIdx + 1}
                      </div>
                      <h4 className="text-xs font-bold text-[#111215] mt-1">{step.step}</h4>
                      <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Document RAG Pipeline */}
            {selectedProject.id === 'document-rag-assistant' && selectedProject.ragPipelineSteps && (
              <div className="py-6 border-b border-[#e8e8e3]">
                <div className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold mb-4 flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-blue-600" />
                  <span>Verified 6-Stage RAG Pipeline (Code Grounded)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {selectedProject.ragPipelineSteps.map((step, rIdx) => (
                    <div key={rIdx} className="p-4 rounded-xl bg-white border border-[#e8e8e3]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-700 font-mono">{step.stage}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f4f4f0] text-charcoal-700 font-mono">
                          {step.tech}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes & Technology Stack */}
            <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7">
                <div className="text-xs font-mono uppercase tracking-wider text-charcoal-400 font-semibold mb-3">
                  Verifiable Engineering Outcomes
                </div>
                <ul className="space-y-2">
                  {selectedProject.outcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                      <span className="text-emerald-600 mt-0.5 font-bold">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <div className="text-xs font-mono uppercase tracking-wider text-charcoal-400 font-semibold mb-3">
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-charcoal-700 border border-[#e2e2dc]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
