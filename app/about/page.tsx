import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bharat Paints — Serving Karnal Since 1976",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <div className="mb-12">
          <p className="text-eyebrow text-magenta-600 mb-2">OUR STORY</p>
          <h1 className="section-heading">Serving Karnal Since 1976</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-body-lg text-gray-700 mb-6">
            Bharat Paints started in 1976 as a small paint shop in Karnal. What began as a single retail store has grown into the region's most trusted paint expert, serving homeowners, contractors, architects, and industrial buyers.
          </p>

          <h2 className="text-display-sm font-bold text-navy-900 mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-body-lg text-gray-700 mb-6">
            To provide premium paint solutions backed by expert advice. We believe every project deserves the right paint, applied by professionals, with genuine support before, during, and after.
          </p>

          <h2 className="text-display-sm font-bold text-navy-900 mt-8 mb-4">
            What Makes Us Different
          </h2>
          <ul className="text-body-lg text-gray-700 space-y-3 mb-6">
            <li>✓ <strong>50 years of trust</strong> — Established in 1976, we're part of Karnal's growth story</li>
            <li>✓ <strong>Expert team</strong> — Our consultants have 20+ years of field experience</li>
            <li>✓ <strong>All brands under one roof</strong> — Asian Paints, Dulux, Berger, Kansai, and our own GIO Paints</li>
            <li>✓ <strong>Professional application</strong> — We don't just sell paints, we apply them with care</li>
            <li>✓ <strong>Fair pricing</strong> — No hidden costs. Transparent MRP + offer prices</li>
            <li>✓ <strong>Warranty & support</strong> — 5-year guarantee on workmanship</li>
          </ul>

          <h2 className="text-display-sm font-bold text-navy-900 mt-8 mb-4">
            Our Coverage
          </h2>
          <p className="text-body-lg text-gray-700 mb-6">
            <strong>10,000+ homes transformed</strong> — From 2BHK apartments to sprawling villas<br/>
            <strong>200+ rice mills & industrial facilities</strong> — Epoxy floors, machinery coatings, warehouse finishes<br/>
            <strong>100+ projects pan India</strong> — Commercial, institutional, and large-scale industrial work<br/>
            <strong>Entire Karnal region</strong> — Home visits within 24 hours
          </p>

          <h2 className="text-display-sm font-bold text-navy-900 mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-body-lg text-gray-700 mb-6">
            <strong>Address:</strong> SCO 30, Bhagat Singh Market, Railway Road, Karnal 132001<br/>
            <strong>Phone:</strong> +91 9896 221004<br/>
            <strong>Hours:</strong> Mon–Sat: 9:30 AM – 7:30 PM | Sunday: Closed<br/>
            <strong>WhatsApp:</strong> Available 24/7 for emergencies
          </p>
        </div>
      </div>
    </div>
  );
}
