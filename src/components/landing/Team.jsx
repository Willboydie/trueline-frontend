import React from "react";
import { motion } from "framer-motion";
import { Award, Microscope, Code } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Sir James Hutchison",
      role: "Founder",
      icon: Award,
      bio: "Chartered Surveyor with 25 years' experience in landscape design and construction project management.",
      accent: "from-[#0A1E3A] to-[#123D73]"
    },
    {
      name: "William Boyd",
      role: "Co-Founder, Head of Research & Development",
      icon: Code,
      bio: "Mathematics graduate and embedded systems programmer. Responsible for prototype development and delivery.",
      accent: "from-[#0A1E3A] to-[#123D73]"
    },
    {
      name: "Dr. Fraser Clark",
      role: "Co-Founder, Electronics & Optics Specialist",
      icon: Microscope,
      bio: "Specialist in optics, electrical engineering and embedded systems, bringing deep technical expertise to the TrueLine research & development team.",
      accent: "from-[#0A1E3A] to-[#123D73]"
    }
  ];

  return (
    <section id="team" className="py-32 lg:py-40 bg-[#F5F7F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1D1D1F] mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Management Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4A4A4A] max-w-3xl mx-auto font-light px-4 sm:px-0">
            Combining decades of expertise in surveying, optics, and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-[#1E3A8A]/30 transition-all duration-300"
            >
              {/* Icon Header */}
              <div className="h-32 sm:h-40 bg-[#1B5E20] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center">
                  <member.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-1 sm:mb-2">{member.name}</h3>
                <div className="text-xs sm:text-sm font-semibold text-[#1B5E20] mb-4 sm:mb-5 uppercase tracking-wide">{member.role}</div>
                <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed font-light">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}