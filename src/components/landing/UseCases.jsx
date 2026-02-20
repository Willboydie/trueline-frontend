import React from "react";
import { motion } from "framer-motion";
import { HardHat, Layers, Home, Square, DoorOpen, MapPin } from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      icon: HardHat,
      title: "Civil Engineering",
      description: "Large-scale infrastructure projects requiring precise layout and positioning across extensive areas."
    },
    {
      icon: Layers,
      title: "Foundations",
      description: "Accurate marking of foundation layouts ensures structural integrity from the ground up."
    },
    {
      icon: Home,
      title: "Modular Construction",
      description: "Precise positioning for prefabricated modules, ensuring perfect alignment and fit on site."
    },
    {
      icon: Square,
      title: "Walls and Structural Layouts",
      description: "Clear visualisation of wall positions, load-bearing elements, and structural grids."
    },
    {
      icon: DoorOpen,
      title: "Doors and Window Positioning",
      description: "Exact placement of openings prevents costly rework and ensures design intent is realised."
    },
    {
      icon: MapPin,
      title: "Large-Scale Site Marking",
      description: "Complete site layouts projected at scale, from perimeter boundaries to internal details."
    }
  ];

  return (
    <section id="usecases" className="py-24 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-6">
            Built for Real Construction Challenges
          </h2>
          <div className="w-20 h-1 bg-[#E53935] mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From civil engineering to modular construction, TrueLine Lasers adapts to your project requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#E53935] transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#E53935]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E53935] transition-colors duration-300">
                  <useCase.icon className="w-6 h-6 text-[#E53935] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1C1C1E] mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}