"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/types";

interface Props {
  step: ProcessStep;
  index: number;
  total: number;
}

export function ProcessCard({ step, index, total }: Props) {
  const isLast = index === total - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Number Badge */}
      <motion.div
        className="absolute -top-6 left-0 w-12 h-12 rounded-full bg-gradient-magenta text-white font-bold flex items-center justify-center shadow-elevated"
        whileHover={{ scale: 1.1 }}
      >
        {index + 1}
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="premium-card-hover p-8 pt-12 text-center"
      >
        {/* Icon */}
        <motion.div
          className="w-16 h-16 rounded-16 bg-gradient-gold mx-auto mb-6 flex items-center justify-center text-white text-2xl"
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          {step.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-display-sm font-semibold text-navy-900 mb-3">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-body text-gray-600 mb-4">
          {step.description}
        </p>
      </motion.div>

      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-magenta-600 to-transparent" />
      )}
    </motion.div>
  );
}
