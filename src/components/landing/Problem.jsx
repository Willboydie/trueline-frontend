import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, DollarSign, CloudRain } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Time-Consuming Setup",
    desc: "Skilled operators must manually interpret large-scale plans, taking hours for what should take minutes.",
  },
  {
    icon: AlertTriangle,
    title: "Prone to Errors",
    desc: "Manual measurements from reference points introduce cumulative inaccuracies in foundations, walls, and openings.",
  },
  {
    icon: CloudRain,
    title: "Vulnerable to Conditions",
    desc: "Wind, rain, mud, and site traffic constantly erode paint markings and displace string lines.",
  },
  {
    icon: DollarSign,
    title: "Costly Rework",
    desc: "Inaccurate setting-out increases rework, delays project timelines, and inflates budgets significantly.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function ProblemSection() {
  return (
    <section id="problem" className="relative bg-[#F5F7F6] py-32 lg:py-40">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-2xl overflow-hidden max-w-2xl mx-auto"
        >
          <img
            src="traditional_marking.png"
            alt="Construction workers on site"
            className="w-full h-[280px] object-cover"
          />
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-[#00C853] text-xs font-semibold uppercase tracking-widest">
            The Problem
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1E3A] leading-tight">
            Traditional Setting-Out Is Slow, Labour-Intensive, and Error-Prone
          </h2>
          <p className="mt-6 text-[#4A5568] text-lg leading-relaxed max-w-2xl">
            Traditional site setting-out requires skilled operators to interpret
            large-scale plans on site, often in challenging conditions such as
            wind and rain. Accurate measurements must be taken from key reference
            points using tape measures, string lines, and marker paint.
          </p>
        </motion.div>

        {/* Pain point cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group relative p-6 rounded-2xl bg-white border border-[#0A1E3A]/10 hover:border-[#00C853]/40 hover:shadow-lg hover:shadow-[#00C853]/10 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00C853]/10 flex items-center justify-center mb-5">
                <point.icon className="w-5 h-5 text-[#00C853]" />
              </div>
              <h3 className="text-[#0A1E3A] font-semibold text-base mb-2">
                {point.title}
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}