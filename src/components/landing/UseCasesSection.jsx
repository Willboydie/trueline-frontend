import React from "react";
import { motion } from "framer-motion";
import { Building2, Landmark, Box, Columns3, DoorOpen, MapPin } from "lucide-react";

const useCases = [
  {
    icon: Landmark,
    title: "Civil Engineering",
    desc: "Road layouts, drainage systems, and infrastructure setting-out with precise alignment to engineering drawings.",
  },
  {
    icon: Building2,
    title: "Foundations",
    desc: "Project foundation outlines directly onto excavated ground, ensuring accuracy before concrete is poured.",
  },
  {
    icon: Box,
    title: "Modular Construction",
    desc: "Align modular units with millimetre precision, accelerating assembly on pre-prepared sites.",
  },
  {
    icon: Columns3,
    title: "Walls & Structural Layouts",
    desc: "Visualise internal and external wall positions, column grids, and load-bearing elements at full scale.",
  },
  {
    icon: DoorOpen,
    title: "Doors & Window Positioning",
    desc: "Eliminate measurement errors for openings, ensuring frames are correctly positioned first time.",
  },
  {
    icon: MapPin,
    title: "Large-Scale Site Marking",
    desc: "Mark out entire site plans across large areas with consistent accuracy and minimal equipment.",
  },
];

export default function UseCasesSection() {
  return (
    <section id="usecases" className="relative bg-white py-32 lg:py-40">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#00C853] text-xs font-semibold uppercase tracking-widest">
            Use Cases
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1E3A]">
            From Ground-Up to Fit-Out
          </h2>
          <p className="mt-4 text-[#4A5568] text-lg">
            Precision laser projection for every stage of construction.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#0A1E3A]/10 hover:border-[#00C853]/40 hover:shadow-lg hover:shadow-[#00C853]/10 transition-all duration-500"
            >
              {/* Top accent bar */}
              <div className="h-0.5 bg-gradient-to-r from-[#00C853]/0 via-[#00C853]/30 to-[#00C853]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-[#F1FFF6] flex items-center justify-center mb-4 group-hover:bg-[#00C853]/10 transition-colors duration-300">
                  <uc.icon className="w-5 h-5 text-[#4A5568] group-hover:text-[#00C853] transition-colors duration-300" />
                </div>
                <h3 className="text-[#0A1E3A] font-semibold mb-2">{uc.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{uc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}