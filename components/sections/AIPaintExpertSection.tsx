"use client";

import { motion } from "framer-motion";
import { Zap, MessageCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/Button";

const features = [
  {
    icon: MessageCircle,
    title: "Instant Chat",
    description: "Get answers to your paint questions in seconds",
  },
  {
    icon: Lightbulb,
    title: "Smart Recommendations",
    description: "AI-powered suggestions based on your needs",
  },
  {
    icon: Zap,
    title: "Quick Solutions",
    description: "Fast resolution of your paint challenges",
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

export function AIPaintExpertSection() {
  return (
    <section className="py-20 bg-gradient-navy-dark text-white overflow-hidden relative">
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{ backgroundPosition: ["0 0", "100px 100px"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "radial-gradient(circle, #d1118c 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="section-heading text-white mb-4"
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
          >
            AI Paint Expert
          </motion.h2>
          <p className="section-subheading text-white/80">
            Get instant expert guidance powered by artificial intelligence
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-3 mb-12"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card p-8 text-center"
            >
              <motion.div
                className="w-16 h-16 rounded-16 bg-gradient-teal flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-display-sm font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asLink
            href="/chatbot"
            className="btn-lg btn-primary px-12"
          >
            Launch AI Paint Expert
          </Button>
          <p className="text-white/60 text-sm mt-4">
            ✨ Available 24/7 • Response in &lt;1 second
          </p>
        </motion.div>
      </div>
    </section>
  );
}
