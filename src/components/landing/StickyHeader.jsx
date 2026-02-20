import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#usecases" },
  { label: "How It Works", href: "#howitworks" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
];

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md border-b border-[#1D1D1F]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#1B5E20] flex items-center justify-center">
            <div className="w-4 h-0.5 bg-white rounded-full" />
          </div>
          <span className="text-[#1D1D1F] font-bold text-xl tracking-tight">
            TrueLine
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2.5 text-sm text-[#4A4A4A] hover:text-[#1D1D1F] transition-colors duration-200 rounded-lg font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNav("#contact")}
          className="hidden lg:block px-6 py-3 bg-[#1B5E20] hover:bg-[#154A19] text-white text-sm font-medium rounded-xl transition-all duration-200"
        >
          Request a Demo
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#1D1D1F] p-2"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-[#1D1D1F]/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-5 py-4 text-[#4A4A4A] hover:text-[#1D1D1F] rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                className="mt-4 px-5 py-4 bg-[#1B5E20] hover:bg-[#154A19] text-white font-medium rounded-xl transition-colors"
              >
                Request a Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}