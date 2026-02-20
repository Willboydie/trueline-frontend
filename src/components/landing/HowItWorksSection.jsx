import React from "react";
import { motion } from "framer-motion";
import { Upload, Crosshair, ScanLine, Projector } from "lucide-react";

const steps = [
  {
    icon: Upload,
    num: "01",
    title: "Upload Plans",
    desc: "Upload or import architectural and engineering drawings directly into the TrueLine system.",
  },
  {
    icon: Crosshair,
    num: "02",
    title: "Position Device",
    desc: "Place the TrueLine device at a known reference point on site and power on.",
  },
  {
    icon: ScanLine,
    num: "03",
    title: "Map Terrain",
    desc: "The system automatically scans the local topography and calculates projection angles.",
  },
  {
    icon: Projector,
    num: "04",
    title: "Project Layout",
    desc: "Full-scale laser projection of the complete floor plan appears directly on the ground.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="howitworks" className="relative bg-[#0E0E10] py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-[#E53935] text-xs font-semibold uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Four Steps to Precision
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E53935]/20 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Step number bubble */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#1C1C1E] border border-white/[0.06] flex items-center justify-center mx-auto relative z-10">
                    <step.icon className="w-8 h-8 text-[#E53935]" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#E53935] flex items-center justify-center z-20">
                    <span className="text-white text-[10px] font-bold">{step.num}</span>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}