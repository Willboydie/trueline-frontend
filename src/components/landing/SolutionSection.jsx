import React from "react";
import { motion } from "framer-motion";
import { Zap, GraduationCap, Timer, Target, Mountain, TrendingDown } from "lucide-react";

const keyPoints = [
  { icon: Zap, label: "Rapid deployment" },
  { icon: GraduationCap, label: "Minimal training required" },
  { icon: Timer, label: "Real-time projection" },
  { icon: Target, label: "High positional accuracy" },
  { icon: Mountain, label: "Works on uneven terrain" },
  { icon: TrendingDown, label: "Lowers labour costs" },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="relative bg-white py-32 lg:py-40">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1D1D1F] leading-tight tracking-tight">
              Project the Design Directly Onto the Ground
            </h2>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#4A4A4A] leading-relaxed font-light">
              TrueLine Lasers introduces a compact laser projection system that
              directly scribes architects' and engineers' plans onto the
              construction site at full scale.
            </p>
            <p className="mt-4 sm:mt-6 text-[#4A4A4A] leading-relaxed text-base sm:text-lg font-light">
              Unlike traditional tools, the system provides full vector-based
              floor plan projection, allowing teams to visualise the actual
              design on site from any location — bridging the gap between digital
              plans and physical execution.
            </p>

            {/* Key points grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyPoints.map((point, i) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-3 px-5 py-4 rounded-xl bg-[#F5F7F6] border border-transparent"
                >
                  <point.icon className="w-5 h-5 text-[#1B5E20] flex-shrink-0" />
                  <span className="text-sm text-[#1D1D1F] break-words font-medium">{point.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6985c356bc894bb40ecced64/d35c5d2dd_pexels-pixabay-159375.jpg"
                alt="Construction site floor work"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}