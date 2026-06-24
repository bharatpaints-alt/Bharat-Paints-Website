"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "1",
    title: "Modern Home Interior",
    image: "/Bharat_Paints_Instore_pics_1.webp",
    category: "Interior",
  },
  {
    id: "2",
    title: "Commercial Space",
    image: "/Bharat_Paints_Instore_pics_2.webp",
    category: "Commercial",
  },
  {
    id: "3",
    title: "Premium Finish",
    image: "/Bharat_Paints_Instore_pics_3.webp",
    category: "Interior",
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function ProjectsGallerySection() {
  return (
    <section className="py-20 bg-white scroll-mt-20" id="gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Our Projects</h2>
          <p className="section-subheading">
            See the transformations we&apos;ve created
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-16 shadow-card hover:shadow-elevated transition-all"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div>
                    <p className="text-xs text-gold-400 font-semibold mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
