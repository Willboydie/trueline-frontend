import React from "react";
import { motion } from "framer-motion";
import { Upload, MapPin, ScanLine, Projector } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload Plans",
      description: "Upload or import architectural and engineering plans in standard formats."
    },
    {
      icon: MapPin,
      number: "02",
      title: "Position Device",
      description: "Place the TrueLine device on site at a known reference point."
    },
    {
      icon: ScanLine,
      number: "03",
      title: "Terrain Mapping",
      description: "System automatically maps terrain topography and aligns projection."
    },
    {
      icon: Projector,
      number: "04",
      title: "Project Layout",
      description: "Laser projects full-scale layout directly onto the ground in real-time."
    }
  ];

  return (
    <section id="howitworks" className="py-32 lg:py-40 bg-white relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1D1D1F] mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4A4A4A] max-w-3xl mx-auto font-light px-4 sm:px-0">
            From digital design to physical reality in four simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-[#00B3FF]/40 to-transparent" />
              )}

              <div className="relative bg-white border border-[#0A1E3A]/10 p-8 rounded-xl hover:border-[#00C853]/40 hover:shadow-lg hover:shadow-[#00C853]/10 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#00C853] flex items-center justify-center shadow-lg shadow-[#00C853]/20">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0A1E3A] to-[#123D73] flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#0A1E3A] mb-3">{step.title}</h3>
                <p className="text-[#4A5568] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}