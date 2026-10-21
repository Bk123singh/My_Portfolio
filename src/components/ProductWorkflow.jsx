import React from 'react';
import { productWorkflowSteps } from '../data/portfolioData';
import { GitBranch, CheckCircle2, ArrowRight, Lightbulb } from 'lucide-react';

export default function ProductWorkflow() {
  return (
    <section id="product-thinking" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>From Conception to Production</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Product Thinking & Engineering Ownership
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            How I bridge business requirements and production engineering: a structured 7-step workflow applied across microservices, AI platforms, and event pipelines.
          </p>
        </div>

        {/* 7-Step Workflow Grid */}
        <div className="space-y-4">
          {productWorkflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 group hover:bg-slate-900/70"
            >
              {/* Step Number & Title */}
              <div className="flex items-start gap-4 lg:w-5/12">
                <span className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/40 font-mono font-bold text-blue-400 flex items-center justify-center shrink-0 text-sm group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-bold text-slate-100 text-base sm:text-lg tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Real World Application Pill */}
              <div className="lg:w-7/12 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans flex items-start gap-3">
                <span className="font-mono text-[11px] font-semibold text-emerald-400 uppercase tracking-wider shrink-0 mt-0.5">
                  Applied In:
                </span>
                <span>{step.caseStudy}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
