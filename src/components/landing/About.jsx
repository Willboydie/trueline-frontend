import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Engineering excellence in every projection"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Transforming traditional construction methods"
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Built for demanding site conditions"
    }
  ];

  return (
    <section id="about" className="py-32 lg:py-40 bg-[#1B5E20]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Pioneering Innovation<br />in Construction
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-4 sm:mb-6 font-light">
              TrueLine Lasers is leading the way in construction innovation by replacing outdated setting-out methods with modern laser projection technology.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 sm:mb-12 font-light">
              Our mission is to improve accuracy, reduce setup time, and lower labour costs across construction projects by bringing digital designs directly into the physical world.
            </p>

            {/* Company Details */}
            <div className="p-6 sm:p-8 bg-white/10 rounded-2xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-2 h-2 rounded-full bg-white mt-1.5 sm:mt-2" />
                <div>
                  <div className="font-semibold text-white mb-1 sm:mb-2 text-base sm:text-lg">TrueLine Lasers</div>
                  <div className="text-white/70 font-light text-sm sm:text-base">Trading name of Galactic Lasers Ltd</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Team collaboration image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden mb-6"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6985c356bc894bb40ecced64/dffbb2cb5_pexels-mikael-blomkvist-8961065.jpg"
                alt="Construction team collaboration"
                className="w-full h-[240px] object-cover"
              />
            </motion.div>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 sm:gap-6 p-6 sm:p-8 bg-white/10 rounded-2xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-white/80 font-light text-sm sm:text-base md:text-lg">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}