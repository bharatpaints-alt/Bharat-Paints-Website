"use client";

import { motion } from "framer-motion";
import { ProcessCard } from "@/components/cards/ProcessCard";
import { Button } from "@/components/ui/Button";
import { processSteps } from "@/content/process";

export function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Our Process</h2>
          <p className="section-subheading">
            5 simple steps to transform your space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {processSteps.map((step, i) => (
            <ProcessCard
              key={step.id}
              step={step}
              index={i}
              total={processSteps.length}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button asLink href="/quote" className="btn-lg btn-primary">
            Start Your Project Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
