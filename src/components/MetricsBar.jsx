import React from 'react';
import { motion } from 'framer-motion';

export default function MetricsBar() {
  const metrics = [
    {
      value: "04",
      label: "Production Microservices",
      detail: "Clean architecture at ShriNeo Vittiyam (Auth, Loan, Fraud, Notification)",
    },
    {
      value: "~40%",
      label: "DB Lookups Avoided",
      detail: "High-performance Redis caching for session & token validation",
    },
    {
      value: "500+",
      label: "Kafka Events Streamed",
      detail: "Decoupled fraud detection & alerts pipeline with 100% reliability",
    },
    {
      value: "120ms",
      label: "Sustained API Latency",
      detail: "Benchmarked in Postman under high concurrency",
    },
  ];

  return (
    <section className="py-12 border-b border-[#e8e8e3] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#e8e8e3]">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''}`}
            >
              <div className="font-display font-bold text-3xl sm:text-4xl text-[#111215] tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-700 font-mono mt-1">
                {metric.label}
              </div>
              <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                {metric.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
