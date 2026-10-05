"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

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
    transition: { duration: 0.8 },
  },
};

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100svh-5rem)] py-16 md:py-20 overflow-hidden bg-gradient-navy-dark">
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ["0 0", "100px 100px"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "radial-gradient(circle, #d1118c 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/Bharat_Painst_Front.jpeg"
          alt="Bharat Paints Store"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/40" />
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Premium Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-gold-400 bg-gold-400/10 border border-gold-400/30">
              ✨ Premium Paint Expert Since 1976
            </span>
          </motion.div>

          {/* Main Headline - Animated */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-display-xl font-bold text-white mb-6 leading-tight"
          >
            India's Most{" "}
            <span className="bg-gradient-magenta bg-clip-text text-transparent">
              Trusted Paint Experience
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-body-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            10,000+ homes transformed. 200+ rice mills coated. 100+ projects pan India.
            Guaranteed quality with warranty since 1976.
          </motion.p>

          {/* Trust Metrics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 md:gap-12 mb-8 max-w-lg mx-auto py-8"
          >
            <TrustMetric number="10,000+" label="Homes Transformed" />
            <TrustMetric number="200+" label="Rice Mills" />
            <TrustMetric number="100+" label="Projects Pan India" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asLink
                href="/chatbot"
                className="btn-lg btn-primary px-8"
              >
                Launch AI Paint Expert
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asLink
                href="#contact"
                className="btn-lg btn-outline text-white border-white/40 hover:border-white/60"
              >
                Get Free Quote
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/40" />
        </motion.div>
      </div>
    </section>
  );
}

function TrustMetric({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      whileInView={{ scale: [0.9, 1] }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-1">
        {number}
      </div>
      <p className="text-xs md:text-sm text-white/70 font-medium">{label}</p>
    </motion.div>
  );
}
