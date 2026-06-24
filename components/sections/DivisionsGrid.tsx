"use client";

import { motion } from "framer-motion";
import { DivisionCard } from "@/components/cards/DivisionCard";
import { divisions } from "@/content/divisions";

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

export function DivisionsGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-navy-50 scroll-mt-20" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Our Paint Divisions</h2>
          <p className="section-subheading">
            Expert solutions for every surface and requirement
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-3"
        >
          {divisions.map((division) => (
            <motion.div key={division.id} variants={itemVariants}>
              <DivisionCard division={division} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
