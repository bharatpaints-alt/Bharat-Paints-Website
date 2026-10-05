import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Bharat Paints</h3>
            <p className="text-white/70 text-sm mb-4">
              Karnal's trusted paint expert since 1976.
            </p>
            <p className="text-white/70 text-sm">
              <strong>Address:</strong> SCO 30, Bhagat Singh Market, Railway Road, Karnal – 132001
            </p>
            <p className="text-white/70 text-sm mt-2">
              <strong>Hours:</strong> Mon–Sat: 9:30 AM – 6:30 PM
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Interior Paints
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Exterior Paints
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Waterproofing
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Wood Coatings
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="hover:text-white transition">
                  AI Paint Expert
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white transition">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <p>&copy; 2026 Bharat Paints. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://giopaints.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GIO Paints</a>
              <a href="https://www.instagram.com/Bharatpaints_1976/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
              <a href="https://wa.me/919355860009" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                WhatsApp
              </a>
              <a href="tel:+919355860009" className="hover:text-white transition">
                Call: +91 93558 60009
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
