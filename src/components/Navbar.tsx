"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-[#111111]/95 backdrop-blur-sm shadow-lg" : "py-5 bg-[#111111]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="font-montserrat font-black text-xl tracking-wider text-white">
            PL<span className="text-[#A8A9AD]">Λ</span>TINUM<span className="text-[#A8A9AD]">-</span><span className="text-[#E87722]">CRETE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-inter text-sm font-medium transition-colors duration-200 hover:text-[#E87722] ${
                pathname === link.href
                  ? "text-[#E87722] border-b-2 border-[#E87722] pb-0.5"
                  : "text-[#A8A9AD]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#E87722] hover:bg-[#CF6A1A] text-white font-montserrat font-700 text-sm px-5 py-2.5 transition-colors duration-300"
        >
          Get a Free Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#2A2A2A] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-inter text-base font-medium transition-colors duration-200 ${
                pathname === link.href ? "text-[#E87722]" : "text-[#A8A9AD] hover:text-[#E87722]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#E87722] hover:bg-[#CF6A1A] text-white font-montserrat font-700 text-sm px-5 py-3 text-center transition-colors duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
