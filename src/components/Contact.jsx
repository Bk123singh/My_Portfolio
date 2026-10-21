import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, FileDown, Send } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Resilient
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            I'm actively interested in full-stack, backend engineering, and generative/agentic AI developer opportunities. Reach out directly or download my verified resume.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Email Me</h3>
              <p className="text-xs text-slate-400 mt-1">Best channel for opportunities and technical inquiries.</p>
              <div className="mt-4 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs text-blue-300 break-all select-all">
                {personalInfo.email}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Compose</span>
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/40 flex items-center justify-center text-indigo-400 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Call / WhatsApp</h3>
              <p className="text-xs text-slate-400 mt-1">Direct phone contact for scheduled interviews.</p>
              <div className="mt-4 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs text-indigo-300 select-all">
                {personalInfo.phone}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
              </button>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Resume Download Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900/60 to-slate-950 border border-blue-900/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-4">
                <FileDown className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Curriculum Vitae</h3>
              <p className="text-xs text-slate-400 mt-1">Get the latest 1-page verified resume in clean PDF format.</p>
              <div className="mt-4 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center justify-between">
                <span>Bishal_Kumar_Resume.pdf</span>
                <span className="text-[10px] text-slate-500">Verified</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80">
              <a
                href={personalInfo.resumeUrl}
                download="Bishal_Kumar_Resume.pdf"
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
