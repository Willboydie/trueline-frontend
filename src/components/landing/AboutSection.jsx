import React from "react";
import { motion } from "framer-motion";
import { Crosshair, Timer, Banknote } from "lucide-react";

const pillars = [
  { icon: Crosshair, label: "Improve Accuracy" },
  { icon: Timer, label: "Reduce Setup Time" },
  { icon: Banknote, label: "Lower Labour Costs" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#111113] py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-[#1C1C1E] border border-white/[0.04] overflow-hidden relative">
              {/* Abstract construction pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full h-full p-12 opacity-60">
                  {/* Technical blueprint elements */}
                  <motion.circle cx="200" cy="150" r="80" fill="none" stroke="#E53935" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3"
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                  />
                  <motion.circle cx="200" cy="150" r="50" fill="none" stroke="#E53935" strokeWidth="0.5" opacity="0.4"
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  />
                  <motion.line x1="50" y1="150" x2="350" y2="150" stroke="#E53935" strokeWidth="0.5" opacity="0.2"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                  <motion.line x1="200" y1="30" x2="200" y2="270" stroke="#E53935" strokeWidth="0.5" opacity="0.2"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.3 }}
                  />
                  {/* Precision crosshair */}
                  <motion.circle cx="200" cy="150" r="5" fill="#E53935" opacity="0.6"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.3, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-[#E53935] text-xs font-semibold uppercase tracking-widest">
              About TrueLine Lasers
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Pioneering Innovation in Construction
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              TrueLine Lasers is leading the way in construction innovation by
              replacing outdated setting-out methods with modern laser projection
              technology.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Our mission is to improve accuracy, reduce setup time, and lower
              labour costs across construction projects by bringing digital
              designs directly into the physical world.
            </p>

            {/* Mission pillars */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                >
                  <p.icon className="w-4 h-4 text-[#E53935] flex-shrink-0" />
                  <span className="text-sm text-gray-300 font-medium">{p.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}