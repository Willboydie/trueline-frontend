import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, Mountain, Users, Clock, DollarSign, CheckCircle } from "lucide-react";

export default function Solution() {
  const benefits = [
    { icon: Zap, text: "Rapid deployment" },
    { icon: Users, text: "Minimal training required" },
    { icon: Clock, text: "Real-time projection" },
    { icon: Target, text: "High positional accuracy" },
    { icon: Mountain, text: "Works on uneven terrain" },
    { icon: Clock, text: "Reduces setup time significantly" },
    { icon: DollarSign, text: "Lowers labour costs" }
  ];

  return (
    <section id="solution" className="py-24 lg:py-32 bg-[#1C1C1E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(229, 57, 53, 0.4) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Project the Design<br />Directly Onto the Ground
            </h2>
            <div className="w-20 h-1 bg-[#E53935] mb-8" />
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              TrueLine Lasers introduces a compact laser projection system that directly scribes architects' and engineers' plans onto the construction site at full scale.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Unlike traditional tools, the system provides full vector-based floor plan projection, allowing teams to visualise the actual design on site from any location — bridging the gap between digital plans and physical execution.
            </p>

            {/* Visual representation */}
            <div className="relative p-8 bg-gradient-to-br from-[#E53935]/10 to-transparent border border-[#E53935]/20 rounded-xl">
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#E53935] animate-pulse" />
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-16 rounded bg-white/5 border border-white/10" />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-[#E53935]/30 border-t-[#E53935] animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-[#E53935]/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E53935]/20 flex items-center justify-center group-hover:bg-[#E53935]/30 transition-colors">
                    <benefit.icon className="w-5 h-5 text-[#E53935]" />
                  </div>
                  <span className="text-gray-300 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}