"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle } from "lucide-react";

const clients = [
  {
    id: "client-1",
    name: "Haldiram Snacks Pvt Ltd",
    location: "Industrial Area, Haryana",
    projectType: "Industrial Facility Coating",
  },
  {
    id: "client-2",
    name: "Amritdhara Hospital",
    location: "Karnal",
    projectType: "Hospital Interior & Exterior",
  },
  {
    id: "client-3",
    name: "Sandhu Poultry Farm",
    location: "Asandh",
    projectType: "Industrial Waterproofing",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Trusted Clients & Projects</h2>
          <p className="section-subheading">
            Serving homes, hospitals, factories, and institutions across Haryana
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-3"
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              className="premium-card p-8 flex flex-col gap-5"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-16 bg-navy-50 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-7 h-7 text-navy-700" />
              </div>

              {/* Name + location */}
              <div>
                <p className="font-semibold text-navy-900 text-display-sm leading-snug">
                  {client.name}
                </p>
                <p className="text-sm text-gray-600 mt-1">{client.location}</p>
              </div>

              {/* Project type badge */}
              <div className="flex items-center gap-2 mt-auto">
                <CheckCircle className="w-4 h-4 text-magenta-600 flex-shrink-0" />
                <span className="badge badge-magenta">{client.projectType}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
