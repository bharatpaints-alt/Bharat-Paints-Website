import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Bharat Paints",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-display-lg font-bold text-navy-900 mb-8">
          Terms & Conditions
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-body text-gray-700">
          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              1. General Terms
            </h2>
            <p>
              Welcome to Bharat Paints. These terms and conditions govern your use of our website and services. By accessing our website or purchasing from us, you agree to be bound by these terms.
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              2. Products & Pricing
            </h2>
            <p>
              All product prices are subject to change without notice. We reserve the right to refuse or cancel any order. Prices displayed on our website are in Indian Rupees (INR).
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              3. Order & Payment
            </h2>
            <p>
              Orders are placed through our website or in-store. Payment must be made before delivery. We accept cash and digital payment methods. All transactions are final unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              4. Delivery & Shipping
            </h2>
            <p>
              We deliver within Karnal and surrounding areas. Delivery times are estimates only. We are not responsible for delays caused by traffic, weather, or other unforeseen circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              5. Returns & Refunds
            </h2>
            <p>
              Products must be returned in original condition within 7 days for a full refund. Opened or used products are not eligible for return. Return shipping costs are the customer's responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              6. Warranty
            </h2>
            <p>
              All paints come with manufacturers' warranties as specified on packaging. For painting services, we provide a 5-year warranty on workmanship. Warranties do not cover misuse, natural disasters, or poor maintenance.
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              Bharat Paints is not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount of your purchase.
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              8. Intellectual Property
            </h2>
            <p>
              All content on our website, including text, images, and logos, is the property of Bharat Paints. Unauthorized use or reproduction is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              9. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Karnal, Haryana.
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              10. Contact Us
            </h2>
            <p>
              For questions about these terms, contact us at:
            </p>
            <p>
              <strong>Bharat Paints</strong><br/>
              SCO 30, Railway Road, Karnal 132001<br/>
              Phone: +91 93558 60009<br/>
              Email: bharatpaints@gmail.com
            </p>
          </div>

          <p className="text-xs text-gray-600 pt-8 border-t border-gray-300 mt-8">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
}
