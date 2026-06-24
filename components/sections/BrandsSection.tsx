"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/cards/BrandLogo";
import { brands } from "@/content/brands";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function BrandsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Premium Brands We Offer</h2>
          <p className="section-subheading">
            Curated selection of trusted brands for superior quality
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {brands.map((brand) => (
            <motion.div key={brand.id} variants={itemVariants}>
              <BrandLogo brand={brand} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
