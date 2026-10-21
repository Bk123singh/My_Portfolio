import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Sparkles, Terminal, ArrowRight } from 'lucide-react';

export default function AboutMe() {
  const humanTraits = [
    {
      icon: Coffee,
      label: "My Core Driver",
      title: "Building for real humans, not just benchmarks",
      desc: "Code only matters when it solves genuine friction. Whether it's reducing loan-approval latency for a borrower or giving a job seeker clear ATS feedback, empathy guides every schema and endpoint I design.",
    },
    {
      icon: Terminal,
      label: "Engineering Craft",
      title: "Clean architecture as a form of respect",
      desc: "Writing clean, modular code with strict typing, validation, and error boundaries isn't perfectionism—it's respecting the team and future engineers who will read and maintain it tomorrow.",
    },
    {
      icon: Sparkles,
      label: "AI Philosophy",
      title: "Grounded, deterministic & transparent AI",
      desc: "I believe AI is most powerful when it works collaboratively with humans. That's why in JobPilot AI and Multi-Agent Studio, I design deterministic matching and critique loops instead of unpredictable black boxes.",
    },
  ];

  const personalSnapshots = [
    { label: "Location", val: "Siwan, Bihar, India 🇮🇳" },
    { label: "Education", val: "B.Tech CSE @ VGU (2023–2027)" },
    { label: "Current Role", val: "Backend SDE Intern @ ShriNeo Vittiyam" },
    { label: "Algorithmic Habit", val: "150+ LeetCode DSA in Python" },
    { label: "Favorite Work Mode", val: "Deep work, music & clean logs" },
    { label: "Core Values", val: "Ownership, humility, continuous learning" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#e8e8e3] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Heading */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-charcoal-600 mb-2 block">
            [ 01 / STORY & PHILOSOPHY ]
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111215] leading-tight">
            The Human Behind the Code
          </h2>
          <p className="mt-3 text-charcoal-700 text-base sm:text-lg leading-relaxed">
            I'm Bishal Kumar. An engineer who cares about the craft: clean, tested software shipped to production, built with empathy for the users and teammates who touch it.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 3 Human Philosophy Cards */}
          <div className="lg:col-span-7 space-y-5">
            {humanTraits.map((trait, idx) => {
              const IconComp = trait.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card-clean p-7 bg-[#fafaf8] border border-[#e8e8e3] hover:border-charcoal-300 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-white border border-[#e8e8e3] flex items-center justify-center text-charcoal-800 shadow-sm group-hover:scale-105 transition-transform">
                      <IconComp className="w-4 h-4 text-blue-700" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-600 block font-semibold">
                        {trait.label}
                      </span>
                      <h3 className="font-display font-bold text-base text-[#111215]">
                        {trait.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal pl-12">
                    {trait.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Personal Snapshot & Life Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 card-clean p-8 bg-[#fafaf8] border border-[#e8e8e3] space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-medium mb-3">
                <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" aria-hidden="true" />
                <span>Quick Bio & Daily Rituals</span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#111215]">
                Bishal in a Nutshell
              </h3>
              <p className="text-xs text-charcoal-700 mt-1 leading-relaxed">
                When I'm not architecting Kafka event queues or tuning Redis cache policies, you'll find me solving algorithmic challenges or experimenting with multi-agent orchestration late into the night.
              </p>
            </div>

            {/* Snapshot Attributes */}
            <div className="space-y-2.5 pt-2 border-t border-[#e8e8e3]">
              {personalSnapshots.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#ebebe7] text-xs font-mono"
                >
                  <span className="text-charcoal-600">{item.label}</span>
                  <span className="font-semibold text-charcoal-900 text-right">{item.val}</span>
                </div>
              ))}
            </div>

            {/* Direct personal note */}
            <div className="pt-4 border-t border-[#e8e8e3] flex items-center justify-between text-xs text-charcoal-700">
              <span className="font-sans italic">"Always learning. Always shipping."</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-800 transition-colors focus-visible:ring-2 focus-visible:ring-[#111215] rounded"
              >
                <span>Say hello</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
