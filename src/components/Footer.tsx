import Link from "next/link";
import { Smartphone, Facebook, Instagram, Linkedin } from "lucide-react";
import { COMPANY_INFO } from "../constants/constants";

export default function Footer() {
  return (
    <footer className="bg-black text-dark-400 py-12 border-t border-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Smartphone size={24} className="text-brand-500" />
              <span className="text-xl font-bold">MobizzApp</span>
            </div>
            <p className="text-sm text-dark-400 leading-relaxed">
              Simplificăm modul în care îți rezervi serviciile preferate. Rapid,
              sigur și mereu la îndemână.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-brand-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-brand-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigare</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/despre"
                  className="hover:text-accent-500 transition-colors"
                >
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link
                  href="/parteneri"
                  className="hover:text-accent-500 transition-colors"
                >
                  Pentru Parteneri
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/termeni-si-conditii"
                  className="hover:text-accent-500 transition-colors"
                >
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-confidentialitate"
                  className="hover:text-accent-500 transition-colors"
                >
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link
                  href="/livrare"
                  className="hover:text-accent-500 transition-colors"
                >
                  Politică Livrare
                </Link>
              </li>
              <li>
                <Link
                  href="/cancel"
                  className="hover:text-accent-500 transition-colors"
                >
                  Retur și Anulare
                </Link>
              </li>
              <li>
                <a
                  href="https://anpc.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-500 transition-colors"
                >
                  ANPC
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Date Companie</h3>
            <div className="text-sm space-y-2 text-dark-500">
              <p className="font-semibold text-dark-300">{COMPANY_INFO.name}</p>
              <p>CUI: {COMPANY_INFO.cui}</p>
              <p>Reg. Com: {COMPANY_INFO.regCom}</p>
              <p className="opacity-80">{COMPANY_INFO.address}</p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-accent-500 hover:underline block mt-2"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-dark-900 mt-12 pt-8 text-center text-xs text-dark-600 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} MobizzApp. Toate drepturile
            rezervate.
          </p>
          <p className="mt-2 md:mt-0">
            <a
              href="https://pixery.ro"
              target="_blank"
              className="hover:text-accent-500"
            >
              {" "}
              Dezvoltat cu 💚 & 🧡 de Pixery
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
