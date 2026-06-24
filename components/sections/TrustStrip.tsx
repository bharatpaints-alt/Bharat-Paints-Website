"use client";

import { motion } from "framer-motion";
import { Award, Users, Building2, Clock } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    stat: "48+",
    label: "Years Experience",
  },
  {
    icon: Users,
    stat: "500+",
    label: "Happy Customers",
  },
  {
    icon: Building2,
    stat: "50+",
    label: "Major Projects",
  },
  {
    icon: Clock,
    stat: "24/7",
    label: "Support Available",
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

export function TrustStrip() {
  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 rounded-16 bg-gradient-magenta/10 flex items-center justify-center mx-auto mb-3"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(209, 17, 140, 0.2)" }}
              >
                <item.icon className="w-8 h-8 text-magenta-600" />
              </motion.div>
              <motion.div
                className="text-2xl md:text-3xl font-bold text-navy-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {item.stat}
              </motion.div>
              <p className="text-sm text-gray-600 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
