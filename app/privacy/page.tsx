import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Bharat Paints",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-display-lg font-bold text-navy-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-body text-gray-700">
          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you contact us through our website or in person, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your name, phone number, and email address</li>
              <li>Your location and property details</li>
              <li>Project requirements and preferences</li>
              <li>Payment information (for online orders)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Deliver paint products and services</li>
              <li>Send you updates about promotions (with your consent)</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              3. Data Security
            </h2>
            <p>
              We take data security seriously. Your personal information is protected by industry-standard security measures. We do not sell or share your data with third parties without consent.
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              4. Cookies
            </h2>
            <p>
              Our website uses cookies to improve your experience. You can control cookie settings in your browser.
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal information. Contact us at +91 93558 60009 to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-navy-900 mb-3">
              6. Contact Us
            </h2>
            <p>
              For privacy-related questions, please contact us at:
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
