import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, CloudRain, Ruler, TrendingDown } from "lucide-react";

export default function Problem() {
  const issues = [
    {
      icon: Ruler,
      title: "Manual Measurement",
      description: "Skilled operators must interpret large-scale plans and take measurements using tape measures and string lines."
    },
    {
      icon: CloudRain,
      title: "Harsh Conditions",
      description: "Wind, rain, mud, and sand make accurate setting-out extremely challenging on active construction sites."
    },
    {
      icon: AlertCircle,
      title: "Frequent Errors",
      description: "Traffic erases paint markings and displaces string lines, leading to inaccuracies in foundations and walls."
    },
    {
      icon: TrendingDown,
      title: "Costly Rework",
      description: "Inaccurate marking increases delays, rework, and costs — particularly for critical elements like doors and windows."
    }
  ];

  return (
    <section id="problem" className="py-24 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-6">
            Traditional Setting-Out Is Slow,<br />Labour-Intensive, and Error-Prone
          </h2>
          <div className="w-20 h-1 bg-[#E53935] mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Traditional site setting-out requires skilled operators to interpret large-scale plans on site, often in challenging conditions such as wind and rain. Accurate measurements must be taken from key reference points using tape measures, string lines, and marker paint.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Construction sites are frequently muddy and wet or dry and sandy, with constant traffic that erases paint markings and displaces string lines. This leads to inaccuracies in foundations, walls, and openings such as doors and windows — increasing rework, delays, and costs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#E53935]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#E53935]/10 flex items-center justify-center mb-4">
                <issue.icon className="w-6 h-6 text-[#E53935]" />
              </div>
              <h3 className="text-lg font-bold text-[#1C1C1E] mb-2">{issue.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{issue.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}