import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-[#f4f4f0] text-charcoal-600 text-xs font-mono border-t border-[#e8e8e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#e2e2dc]">
          
          {/* Brand */}
          <div className="flex flex-col sm:items-start text-center sm:text-left">
            <span className="font-display text-base font-bold text-[#111215]">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-charcoal-500 mt-0.5">
              Full-Stack Developer • Backend Engineering • Generative & Agentic AI
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-white border border-[#e8e8e3] text-charcoal-700 hover:text-[#111215] hover:bg-[#fafaf8] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-white border border-[#e8e8e3] text-charcoal-700 hover:text-blue-600 hover:bg-[#fafaf8] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-2 rounded-full bg-white border border-[#e8e8e3] text-charcoal-700 hover:text-amber-600 hover:bg-[#fafaf8] transition-colors"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-full bg-white border border-[#e8e8e3] text-charcoal-700 hover:text-[#111215] hover:bg-[#fafaf8] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#e8e8e3] text-charcoal-700 hover:text-[#111215] hover:bg-[#fafaf8] transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-charcoal-400 gap-2">
          <div>
            © {new Date().getFullYear()} Bishal Kumar. Built with React 18, Vite & Tailwind CSS.
          </div>
          <div className="flex items-center gap-2 text-emerald-700 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Verified Commercial & AI Systems</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
