import React, { useState } from 'react';
import { aiShowcaseProjects } from '../data/portfolioData';
import { Bot, Sparkles, ExternalLink, ArrowRight, Layers, Database, Cpu, CheckCircle2, ShieldAlert } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function AiShowcase() {
  const [activeTab, setActiveTab] = useState(aiShowcaseProjects[0].id);

  const selectedProject = aiShowcaseProjects.find((p) => p.id === activeTab) || aiShowcaseProjects[0];

  return (
    <section id="ai-showcase" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Systems & Intelligent Workflows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Engineering & RAG Showcase
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            Real implementations of autonomous multi-agent pipelines, deterministic ATS matching algorithms, and complete Retrieval-Augmented Generation (RAG) vector workflows.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl">
          {aiShowcaseProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === project.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>{project.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Project Card */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 relative">
          
          {/* Top Title & Links */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-950/80 text-blue-400 border border-blue-800/40">
                  {selectedProject.badge}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Implementation</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Problem & Architectural Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-6 border-b border-slate-800">
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-2">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>The Engineering Problem</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedProject.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>System Architecture</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedProject.architecture}
              </p>
            </div>
          </div>

          {/* Specialized Workflow Diagrams */}
          
          {/* 1. JobPilot 5-Pillar Matching Breakdown */}
          {selectedProject.id === 'jobpilot-ai' && selectedProject.fivePillars && (
            <div className="py-6 border-b border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>Deterministic 5-Pillar Compatibility Weighting</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {selectedProject.fivePillars.map((pillar, pIdx) => (
                  <div key={pIdx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <span className="text-lg font-bold font-mono text-blue-400">{pillar.weight}</span>
                      <h5 className="text-xs font-semibold text-slate-200 mt-1">{pillar.name}</h5>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2 leading-tight">{pillar.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Agentic Workflow Steps */}
          {selectedProject.agenticWorkflow && (
            <div className="py-6 border-b border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Bot className="w-3.5 h-3.5 text-indigo-400" />
                <span>Autonomous Agent Pipeline & Execution Stages</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {selectedProject.agenticWorkflow.map((step, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 relative">
                    <div className="text-[10px] font-mono font-bold text-indigo-400">STAGE 0{sIdx + 1}</div>
                    <h5 className="text-xs font-bold text-white mt-1">{step.step}</h5>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Document RAG Pipeline Flow */}
          {selectedProject.id === 'document-rag-assistant' && selectedProject.ragPipelineSteps && (
            <div className="py-6 border-b border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified End-to-End RAG Pipeline (Code Grounded)</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedProject.ragPipelineSteps.map((step, rIdx) => (
                  <div key={rIdx} className="p-3.5 rounded-xl bg-slate-950/80 border border-cyan-900/30">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-300 font-mono">{step.stage}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">{step.tech}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes & Tech Chips */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Verifiable Engineering Outcomes
              </h4>
              <ul className="space-y-2">
                {selectedProject.outcomes.map((outcome, oIdx) => (
                  <li key={oIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
