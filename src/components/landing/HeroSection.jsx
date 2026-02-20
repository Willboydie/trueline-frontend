import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111113]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Laser accent lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#E53935]/20 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#E53935]/10 to-transparent" />

      {/* Horizontal laser line */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E53935]/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#E53935]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-4xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E53935]/30 bg-[#E53935]/5 text-[#E53935] text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] animate-pulse" />
              Construction Technology
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
          >
            Revolutionising{" "}
            <br className="hidden sm:block" />
            Construction Site{" "}
            <span className="relative">
              <span className="text-[#E53935]">Setting-Out</span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E53935]/40"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            Portable laser projection technology that delivers architects' plans
            directly onto site — improving accuracy, reducing setup time, and
            cutting labour costs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-red-900/25"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("#howitworks")}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5"
            >
              <Play className="w-4 h-4" />
              Learn How It Works
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-10 border-t border-white/5 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { value: "10×", label: "Faster Setup" },
              { value: "±2mm", label: "Accuracy" },
              { value: "50%", label: "Labour Savings" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}