import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, FileDown, ArrowUpRight } from 'lucide-react';

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
    <section id="contact" className="py-20 md:py-28 border-b border-[#e8e8e3] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index & Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-charcoal-600 mb-2 block">
            [ 07 / GET IN TOUCH ]
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111215]">
            Let's Build Something Resilient.
          </h2>
          <p className="mt-2 text-charcoal-700 text-sm sm:text-base leading-relaxed">
            Actively open to Full-Stack, Backend Software Engineering, and AI application developer roles. Reach out directly or download my verified resume.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card-clean p-7 bg-[#fafaf8] flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-white border border-[#e8e8e3] flex items-center justify-center text-charcoal-800 mb-4 shadow-sm">
                <Mail className="w-5 h-5 text-cobalt" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-[#111215] text-lg">Direct Email</h3>
              <p className="text-xs text-charcoal-600 mt-1">Best channel for opportunities and technical inquiries.</p>
              <div className="mt-4 p-3 rounded-xl bg-white border border-[#e8e8e3] font-mono text-xs text-charcoal-800 break-all select-all font-medium">
                {personalInfo.email}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e8e8e3] flex items-center gap-2">
              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                aria-label="Copy email address to clipboard"
                className="flex-1 py-2 px-3 rounded-full text-xs font-semibold bg-white hover:bg-[#f4f4f0] text-charcoal-800 border border-[#e8e8e3] transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111215]"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5" aria-hidden="true" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send email to Bishal Kumar"
                className="flex-1 py-2 px-3 rounded-full text-xs font-semibold bg-[#111215] hover:bg-[#27272a] text-white transition-all flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111215] focus-visible:ring-offset-2"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card-clean p-7 bg-[#fafaf8] flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-white border border-[#e8e8e3] flex items-center justify-center text-charcoal-800 mb-4 shadow-sm">
                <Phone className="w-5 h-5 text-emerald-800" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-[#111215] text-lg">Phone / WhatsApp</h3>
              <p className="text-xs text-charcoal-600 mt-1">Available for scheduled interviews and discussions.</p>
              <div className="mt-4 p-3 rounded-xl bg-white border border-[#e8e8e3] font-mono text-xs text-charcoal-800 select-all font-medium">
                {personalInfo.phone}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e8e8e3] flex items-center gap-2">
              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                aria-label="Copy phone number to clipboard"
                className="flex-1 py-2 px-3 rounded-full text-xs font-semibold bg-white hover:bg-[#f4f4f0] text-charcoal-800 border border-[#e8e8e3] transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111215]"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5" aria-hidden="true" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={`tel:${personalInfo.phone}`}
                aria-label="Call Bishal Kumar"
                className="flex-1 py-2 px-3 rounded-full text-xs font-semibold bg-[#111215] hover:bg-[#27272a] text-white transition-all flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111215] focus-visible:ring-offset-2"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Call</span>
              </a>
            </div>
          </motion.div>

          {/* Resume Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="card-clean p-7 bg-white border-2 border-[#111215] flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#111215] text-white flex items-center justify-center mb-4 shadow-sm">
                <FileDown className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-[#111215] text-lg">Curriculum Vitae</h3>
              <p className="text-xs text-charcoal-600 mt-1">Download the verified 1-page PDF document.</p>
              <div className="mt-4 p-3 rounded-xl bg-[#fafaf8] border border-[#e8e8e3] font-mono text-xs text-charcoal-800 flex items-center justify-between">
                <span>Bishal_Kumar_Resume.pdf</span>
                <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">Verified</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e8e8e3]">
              <a
                href={personalInfo.resumeUrl}
                download="Bishal_Kumar_Resume.pdf"
                aria-label="Download Bishal Kumar's verified PDF resume"
                className="w-full py-2.5 px-4 rounded-full text-xs font-semibold bg-[#111215] hover:bg-[#27272a] text-white transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111215] focus-visible:ring-offset-2"
              >
                <FileDown className="w-4 h-4" aria-hidden="true" />
                <span>Download PDF Resume</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
