'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Certifications", href: "/certifications" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  return (
    <nav
      style={{ WebkitBackfaceVisibility: "hidden" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-white/90 backdrop-blur-md py-4 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent py-6 text-white"
          : "bg-white py-4 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
      }`}
    >
      <div className="max-w-6xl mx-auto pl-4 pr-6 md:pl-6 md:pr-8 flex items-center justify-between">
        
        {/* Logo (Fixed Size + Alignment) */}
        <Link href="/" className="flex items-center -ml-1 md:-ml-3 lg:-ml-4">
          <Image
            src="/logo.png"
            alt="Pravij Logo"
            width={160}
            height={60}
            priority
            className="h-11 md:h-12 lg:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base tracking-wide transition-colors ${
                  isActive
                    ? isHomePage
                      ? isScrolled
                        ? "text-zinc-900 font-medium"
                        : "text-white font-medium"
                      : "text-zinc-900 font-medium"
                    : isHomePage
                      ? isScrolled
                        ? "text-zinc-500 hover:text-zinc-900 font-light"
                        : "text-white/70 hover:text-white font-light"
                      : "text-zinc-500 hover:text-zinc-900 font-light"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className={`text-sm font-medium px-6 py-2.5 rounded-full transition ${
              isHomePage
                ? isScrolled
                  ? "bg-black text-white hover:bg-black/90"
                  : "bg-white text-black hover:bg-white/90"
                : "bg-black text-white hover:bg-black/90"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden transition-colors ${
            isHomePage
              ? isScrolled
                ? "text-zinc-600"
                : "text-white"
              : "text-zinc-600"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={false}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-zinc-700">
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 bg-green-600 text-white px-6 py-3 rounded-full text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}