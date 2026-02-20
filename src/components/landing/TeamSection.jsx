import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Sir James Hutchison",
    role: "Founder",
    bio: "Chartered Surveyor with 25 years' experience in landscape design and construction project management.",
    initials: "JH",
  },
  {
    name: "Dr. Fraser Clark",
    role: "Optics & Engineering",
    bio: "Specialist in optics and engineering, bringing deep technical expertise to laser projection systems.",
    initials: "FC",
  },
  {
    name: "Will Boyd",
    role: "Software Development",
    bio: "Lead programmer responsible for software development at TrueLine Lasers.",
    initials: "WB",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative bg-[#0E0E10] py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#E53935] text-xs font-semibold uppercase tracking-widest">
            Management Team
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            The People Behind TrueLine
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-[#E53935]/15 transition-all duration-500"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-[#1C1C1E] border border-white/[0.06] flex items-center justify-center mx-auto mb-6 group-hover:border-[#E53935]/20 transition-colors duration-300">
                <span className="text-xl font-bold text-[#E53935]/70 group-hover:text-[#E53935] transition-colors duration-300">
                  {member.initials}
                </span>
              </div>

              <h3 className="text-white font-semibold text-lg">{member.name}</h3>
              <p className="text-[#E53935] text-sm font-medium mt-1">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}