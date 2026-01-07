"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  Smartphone,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";
import { NAV_ITEMS, APP_LINKS } from "../constants/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Slide-in Panel */}
      <div
        className={`absolute top-0 right-0 w-[85%] max-w-[320px] h-full bg-dark-950 border-l border-dark-800 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-800 bg-black/20">
          <div className="flex items-center gap-2">
            <div className="bg-brand-500/10 p-1.5 rounded-lg">
              <Smartphone size={20} className="text-brand-500" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Meniu
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-dark-400 hover:text-white rounded-xl hover:bg-dark-800 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={onClose}
              className={`group flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                pathname === item.path
                  ? "bg-accent-500/10 text-accent-500 border border-accent-500/20"
                  : "text-dark-300 hover:text-white hover:bg-dark-800 border border-transparent"
              }`}
            >
              <span>{item.label}</span>
              {pathname === item.path ? (
                <div className="w-2 h-2 rounded-full bg-accent-500 shadow-lg shadow-accent-500/50"></div>
              ) : (
                <ChevronRight
                  size={16}
                  className="text-dark-600 group-hover:text-dark-400 transition-colors"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Footer Action */}
        <div className="p-6 border-t border-dark-800 bg-black/20 space-y-4">
          <Link
            href="/#download"
            onClick={onClose}
            className="flex items-center justify-center w-full py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl shadow-lg shadow-accent-500/20 transition-all active:scale-95"
          >
            Descarcă Aplicația
          </Link>
          <div className="flex justify-center gap-6 text-dark-500">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-accent-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
