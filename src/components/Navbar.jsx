import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects & AI', href: '#projects' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'How I Work', href: '#how-i-work' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fafaf8]/90 backdrop-blur-md border-b border-[#e8e8e3] py-3.5 shadow-[0_2px_15px_rgba(0,0,0,0.03)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Creative & Clean */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-9 h-9 rounded-full bg-[#111215] text-[#fafaf8] flex items-center justify-center font-display font-bold text-sm tracking-tighter group-hover:scale-105 transition-transform duration-200">
              BK
            </span>
            <div className="flex flex-col">
              <span className="font-display font-bold text-[#111215] text-base tracking-tight leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-charcoal-500 font-mono tracking-wider">
                Full-Stack & Backend SDE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 border border-[#e8e8e3] rounded-full px-3 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-charcoal-700 hover:text-[#111215] hover:bg-[#f4f4f0] rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Socials + Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 border-r border-[#e8e8e3] pr-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 text-charcoal-600 hover:text-[#111215] hover:bg-[#f4f4f0] rounded-full transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-charcoal-600 hover:text-[#111215] hover:bg-[#f4f4f0] rounded-full transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-2 text-charcoal-600 hover:text-amber-600 hover:bg-[#f4f4f0] rounded-full transition-colors"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              download="Bishal_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-[#111215] hover:bg-[#27272a] text-white shadow-sm hover:shadow transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-charcoal-800 lg:hidden hover:bg-[#f4f4f0] rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 border-b border-[#e8e8e3] px-5 pt-3 pb-6 space-y-2 mt-2 backdrop-blur-xl shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-charcoal-800 hover:bg-[#f4f4f0] rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#e8e8e3] flex flex-col gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Bishal_Kumar_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-full bg-[#111215] text-white shadow"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Verified Resume</span>
            </a>
            <div className="flex items-center justify-around pt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 text-charcoal-600 hover:text-[#111215]">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-charcoal-600 hover:text-[#111215]">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="p-2 text-charcoal-600 hover:text-amber-600">
                <LeetCodeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
