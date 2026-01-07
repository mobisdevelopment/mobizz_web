"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Smartphone } from "lucide-react";
import { NAV_ITEMS, APP_LINKS } from "../constants/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-dark-800 shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-brand-500 to-brand-700 text-white p-2 rounded-xl shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
                <Smartphone size={24} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Mobizz<span className="text-brand-500">App</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-sm font-medium transition-colors hover:text-accent-500 text-dark-300"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#download"
                className="bg-accent-500 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-accent-500/20 hover:bg-accent-600 transition-all transform hover:-translate-y-0.5"
              >
                Descarcă Aplicația
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-white hover:text-accent-500 p-2 transition-colors rounded-lg hover:bg-dark-800"
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
