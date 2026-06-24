"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  location: z.string().min(2, "Location is required"),
  propertyType: z.enum(
    ["residential", "commercial", "industrial", "institutional", "other"],
    { message: "Please select a property type" }
  ),
  customerType: z.enum(["homeowner", "contractor", "architect", "builder", "industrial"], {
    message: "Please select customer type",
  }),
  requirement: z.string().min(10, "Please provide more details"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-navy-50 scroll-mt-20" id="contact">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Get Your Free Quote</h2>
          <p className="section-subheading">
            Tell us about your project, and we&apos;ll provide an expert estimate
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="premium-card p-8 md:p-12"
        >
          {/* Name */}
          <motion.div className="mb-6" whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              Full Name *
            </label>
            <input
              {...register("name")}
              type="text"
              className="input-premium"
              placeholder="Your name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div className="mb-6" whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              Phone Number *
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="input-premium"
              placeholder="10-digit mobile number"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
            )}
          </motion.div>

          {/* Location */}
          <motion.div className="mb-6" whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              Location *
            </label>
            <input
              {...register("location")}
              type="text"
              className="input-premium"
              placeholder="City/Area"
              disabled={isSubmitting}
            />
            {errors.location && (
              <p className="text-red-600 text-xs mt-1">{errors.location.message}</p>
            )}
          </motion.div>

          {/* Property Type */}
          <motion.div className="mb-6" whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              Property Type *
            </label>
            <select
              {...register("propertyType")}
              className="input-premium appearance-none cursor-pointer"
              disabled={isSubmitting}
            >
              <option value="">Select property type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
              <option value="institutional">Institutional</option>
              <option value="other">Other</option>
            </select>
            {errors.propertyType && (
              <p className="text-red-600 text-xs mt-1">
                {errors.propertyType.message}
              </p>
            )}
          </motion.div>

          {/* Customer Type */}
          <motion.div className="mb-6" whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              I am a *
            </label>
            <select
              {...register("customerType")}
              className="input-premium appearance-none cursor-pointer"
              disabled={isSubmitting}
            >
              <option value="">Select customer type</option>
              <option value="homeowner">Home Owner</option>
              <option value="contractor">Contractor</option>
              <option value="architect">Architect</option>
              <option value="builder">Builder</option>
              <option value="industrial">Industrial Buyer</option>
            </select>
            {errors.customerType && (
              <p className="text-red-600 text-xs mt-1">
                {errors.customerType.message}
              </p>
            )}
          </motion.div>

          {/* Requirement */}
          <motion.div className="mb-8" whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              Project Details *
            </label>
            <textarea
              {...register("requirement")}
              className="input-premium resize-none h-24"
              placeholder="Tell us about your painting requirements..."
              disabled={isSubmitting}
            />
            {errors.requirement && (
              <p className="text-red-600 text-xs mt-1">
                {errors.requirement.message}
              </p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mb-4"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-lg btn-primary w-full"
            >
              {isSubmitting ? "Submitting..." : "Get Free Quote"}
            </Button>
          </motion.div>

          {/* Success Message */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-12 bg-green-50 border border-green-200 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">Quote Request Sent!</p>
                  <p className="text-sm text-green-700">
                    We&apos;ll contact you soon with your free estimate.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">Prefer to chat directly?</p>
          <Button
            asLink
            href="https://wa.me/919896221004"
            target="_blank"
            className="btn-lg btn-whatsapp"
          >
            💬 Chat on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
