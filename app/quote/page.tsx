import { Metadata } from "next";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Get a Quote — Bharat Paints",
  description: "Request a free quote for your paint project. Expert recommendations + transparent pricing.",
};

export default function QuotePage() {
  return (
    <div className="py-8 md:py-12">
      <ContactFormSection />
    </div>
  );
}
