"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Division } from "@/types";

interface Props {
  division: Division;
}

export function DivisionCard({ division }: Props) {
  const colorMap: Record<string, string> = {
    navy: "from-navy-600 to-navy-900",
    magenta: "from-magenta-600 to-magenta-900",
    gold: "from-gold-400 to-gold-600",
    teal: "from-teal-600 to-teal-900",
  };

  return (
    <Link href={division.href}>
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="premium-card-hover p-8 group h-full"
    >
      {/* Icon with Gradient Circle */}
      <motion.div
        className={`w-16 h-16 rounded-16 bg-gradient-to-br ${colorMap[division.color] || colorMap.navy} flex items-center justify-center mb-6 group-hover:shadow-glow transition-all`}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <span className="text-3xl">{division.icon}</span>
      </motion.div>

      {/* Content */}
      <h3 className="text-display-sm font-semibold text-navy-900 mb-3">
        {division.name}
      </h3>
      <p className="text-body text-gray-600 mb-6 flex-grow">
        {division.description}
      </p>

      {/* Animated Arrow Link */}
      <motion.div
        className="inline-flex items-center gap-2 text-magenta-600 font-semibold text-sm"
        whileHover={{ x: 4 }}
      >
        <span>Explore</span>
        <ArrowRight className="w-4 h-4" />
      </motion.div>
    </motion.div>
    </Link>
  );
}
