import React from "react";
import { motion } from "framer-motion";
import { Layers, Brain, CloudRain, Gauge, TrendingUp } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Layers,
      title: "Full Vector Floor Plan Projection",
      description: "Visualise the complete design at real scale, directly on the construction site. Every wall, door, and structural element projected with precision."
    },
    {
      icon: Brain,
      title: "Machine Learning Terrain Mapping",
      description: "Automatically maps topography and adjusts laser direction to compensate for local height variations, ensuring accuracy on any surface."
    },
    {
      icon: CloudRain,
      title: "Works in Real Site Conditions",
      description: "Accurate marking from muddy and wet to sandy or uneven ground. Built for the harsh realities of active construction sites."
    },
    {
      icon: Gauge,
      title: "Fast Setup, Minimal Training",
      description: "Teams can deploy quickly without relying on highly specialised operators. Intuitive operation reduces dependency on scarce skills."
    },
    {
      icon: TrendingUp,
      title: "Improves Build Speed and Accuracy",
      description: "Precise layout directly impacts construction speed, quality, and cost. Reduce rework and accelerate project timelines."
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-6">
            Why It's a Game Changer
          </h2>
          <div className="w-20 h-1 bg-[#E53935] mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Combining precision engineering with real-world practicality, TrueLine Lasers transforms how construction teams work on site.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[#E53935]/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#E53935]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E53935] to-[#C62828] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}