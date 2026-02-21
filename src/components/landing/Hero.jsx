import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F7F6] mb-10"
          >
            <span className="text-sm text-[#4A4A4A] font-medium tracking-wide">Next-Generation Construction Technology</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#1D1D1F] mb-6 sm:mb-8 tracking-tight leading-[1.1] px-4 sm:px-0">
            Revolutionising Construction
            <br />
            Site Setting-Out
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#4A4A4A] max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed font-light px-4 sm:px-0">
            Portable laser projection technology that delivers architects' plans directly onto site — improving accuracy, reducing setup time, and cutting labour costs.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            <button
              onClick={() => handleNav("#contact")}
              className="group w-full sm:w-auto px-10 py-4 bg-[#1B5E20] hover:bg-[#154A19] text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleNav("#howitworks")}
              className="group w-full sm:w-auto px-10 py-4 bg-white hover:bg-[#1B5E20] text-[#1B5E20] hover:text-white font-medium rounded-xl transition-all duration-200 border-2 border-[#1B5E20] flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Learn How It Works
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-24 lg:mt-32 pt-16 sm:pt-24 lg:pt-32 border-t border-[#1D1D1F]/10"
          >
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-2 sm:mb-3">75%</div>
              <div className="text-sm sm:text-base text-[#4A4A4A] font-light">Faster Setup Time</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-2 sm:mb-3">±2cm</div>
              <div className="text-sm sm:text-base text-[#4A4A4A] font-light">Positional Accuracy</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-2 sm:mb-3">50%</div>
              <div className="text-sm sm:text-base text-[#4A4A4A] font-light">Reduction in Labour Costs</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}