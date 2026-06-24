"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Brand } from "@/types";

interface Props {
  brand: Brand;
}

export function BrandLogo({ brand }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative rounded-16 p-6 overflow-hidden transition-all ${
        brand.highlighted
          ? "col-span-1 md:col-span-2 bg-gradient-magenta shadow-premium"
          : "premium-card-hover"
      }`}
    >
      {/* Background Pattern for Highlighted */}
      {brand.highlighted && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative h-24 md:h-32 flex items-center justify-center">
        <Image
          src={brand.logo}
          alt={brand.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Badge for Highlighted Brand */}
      {brand.highlighted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 px-3 py-1 bg-gold-400 text-navy-900 rounded-full text-xs font-bold"
        >
          Featured
        </motion.div>
      )}

      {/* Name for Highlighted */}
      {brand.highlighted && (
        <p className="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-sm">
          {brand.name}
        </p>
      )}
    </motion.div>
  );
}
