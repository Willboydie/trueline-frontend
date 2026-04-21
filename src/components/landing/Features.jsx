import React from "react";
import { motion } from "framer-motion";
import { Layers, Brain, CloudSun, Rocket, Gauge } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Full Vector Floor Plan Projection",
    desc: "Visualise the complete design at real scale, directly on the construction site. Every wall, opening, and structural element projected with precision.",
  },
  {
    icon: Brain,
    title: "Machine Learning Terrain Mapping",
    desc: "Automatically maps topography and adjusts laser direction to compensate for local height variations across uneven ground.",
  },
  {
    icon: CloudSun,
    title: "Works in Real Site Conditions",
    desc: "Accurate marking even on muddy, wet, sandy, or uneven ground. Designed for the harsh realities of construction environments.",
  },
  {
    icon: Rocket,
    title: "Fast Setup, Minimal Training",
    desc: "Teams can deploy quickly without relying on highly specialised operators. Intuitive interface reduces the learning curve to minutes.",
  },
  {
    icon: Gauge,
    title: "Improves Build Speed and Accuracy",
    desc: "Precise layout directly impacts construction speed, quality, and cost. Reduce rework and keep projects on schedule.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[#F5F7F6] py-32 lg:py-40">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1D1D1F] tracking-tight px-4 sm:px-0">
            Built for the Realities of Construction
          </h2>
        </motion.div>

        {/* Feature cards - bento-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative p-6 sm:p-8 rounded-2xl bg-white border border-transparent hover:border-[#1E3A8A]/30 transition-all duration-300 ${
                i >= 3 ? "lg:col-span-1 md:col-span-1" : ""
              } ${i === 0 ? "lg:row-span-1" : ""}`}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F5F7F6] flex items-center justify-center mb-4 sm:mb-6">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1B5E20]" />
                </div>
                <h3 className="text-[#1D1D1F] font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}