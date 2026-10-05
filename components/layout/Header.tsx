"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const menuVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
  exit: { opacity: 0, x: -100, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Paint Expert", href: "/chatbot" },
    { label: "Services", href: "/#services" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-navy-900/80 border-b border-white/10">
      <nav className="container flex items-center justify-between h-20 px-4 md:px-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center flex-shrink-0"
        >
          <Link href="/" className="relative w-12 h-12">
            <Image
              src="/BHARAT_PAINTS_LOGO_jpg.jpeg"
              alt="Bharat Paints"
              fill
              className="object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <motion.li key={item.label} whileHover={{ color: "#d1118c" }}>
              <Link
                href={item.href}
                className="text-white/80 hover:text-magenta-600 transition-colors"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="hidden sm:block flex-shrink-0"
        >
          <Button
            asLink
            href="/quote"
            className="btn-md btn-primary"
          >
            Get Quote
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-navy-800/95 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col divide-y divide-white/10">
              {menuItems.map((item) => (
                <motion.li key={item.label} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="block px-4 py-4 text-white/80 hover:text-magenta-600 hover:bg-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants} className="px-4 py-4">
                <Button
                  asLink
                  href="/quote"
                  className="btn-md btn-primary w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
