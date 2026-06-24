"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import type { Testimonial } from "@/types";

interface Props {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="premium-card-hover p-8 relative border-l-4 border-magenta-600"
    >
      {/* Stars */}
      <motion.div
        className="flex gap-1 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        className="text-lg font-serif text-navy-900 italic mb-6 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </motion.blockquote>

      {/* Author Info */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {/* Avatar */}
        <motion.div
          className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-400/30 flex-shrink-0"
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name & Role */}
        <div>
          <p className="font-semibold text-navy-900">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
          {testimonial.projectType && (
            <p className="text-xs text-magenta-600 font-medium mt-1">
              {testimonial.projectType}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
