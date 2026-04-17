import React from "react";
import { motion } from "framer-motion";

export default function Team() {
  const team = [
    {
      name: "Sir James Hutchison",
      role: "Founder / CEO",
      photo: "/James_photo.png",
      bio: "A Chartered Surveyor with 25 years' experience in landscape design and construction project management, James has a wealth of experience in outdoor construction projects. He founded TrueLine Lasers because he knows all too well what can go wrong and is determined to empower the industry to do better.",
    },
    {
      name: "William Boyd",
      role: "Co-Founder / CTO",
      photo: "/WB_photo_website.png",
      bio: "An applied mathematician and embedded systems programmer with a wide-ranging skill set, William leads the technical development team. He oversees the entire pipeline: from PCB traces and physical modelling to firmware infrastructure and frontend connectivity.",
    },
    {
      name: "Fraser Clark",
      role: "Co-Founder / Electronics and Optics Specialist",
      photo: "/Fraser_photo.png",
      bio: "Leaving retirement after an impressive academic career in optics, electrical engineering and embedded systems, Fraser brings deep expertise and a broad technical knowledge to the TrueLine team.",
    },
    {
      name: "Vedika Kumar",
      role: "Technical Graduate Intern",
      photo: "/Vedika_photo.png",
      bio: "With a master's degree in Sensors and Imaging from Glasgow and Edinburgh universities, Vedika is a bright spark bringing fresh ideas to the technical development.",
    },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-[#1E3A8A]/30 transition-all duration-300"
            >
              {/* Photo Header */}
              <div className="h-72 sm:h-80 bg-[#1B5E20] relative overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
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