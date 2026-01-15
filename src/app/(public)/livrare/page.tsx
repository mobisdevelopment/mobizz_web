import { COMPANY_INFO } from "@/constants/constants";
import { FileText, Truck } from "lucide-react";

export default function DeliveryPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-black overflow-hidden border-b border-dark-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] -z-0 opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dark-900 border border-dark-800 px-4 py-2 rounded-full text-brand-400 text-sm font-semibold mb-6">
              <Truck size={16} />
              <span>Politici și Proceduri</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              <span className="text-brand-500">Livrare</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed font-light">
              Informații despre modul de livrare a serviciilor și produselor.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introducere */}
            <div className="mb-12">
              <p className="text-dark-600 leading-relaxed text-lg">
                Platforma noastră facilitează programări și comenzi între
                clienți și parteneri. Modul de livrare poate varia în funcție de
                tipul serviciului sau produsului comandat:
              </p>
            </div>

            {/* Pentru Servicii */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Pentru Servicii
              </h2>
              <ul className="list-disc pl-6 space-y-4 text-dark-600">
                <li>
                  <strong>Livrarea serviciului</strong> are loc fizic, la
                  locația clientului sau partenerului, în funcție de alegerea
                  făcută la programare.
                </li>
                <li>
                  <strong>Timpul de livrare</strong> este confirmat de partener
                  și poate fi vizualizat în contul tău, la secțiunea
                  „Programările mele".
                </li>
                <li>
                  <strong>Anulările sau reprogramările</strong> sunt posibile
                  conform politicii fiecărui partener.
                </li>
              </ul>
            </div>

            {/* Pentru Produse */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Pentru Produse
              </h2>
              <ul className="list-disc pl-6 space-y-4 text-dark-600">
                <li>
                  <strong>Produsele sunt livrate</strong> direct de parteneri,
                  prin curier sau livrare proprie.
                </li>
                <li>
                  <strong>Termenele de livrare și costurile</strong> sunt
                  afișate în pagina de finalizare a comenzii.
                </li>
                <li>
                  <strong>Fiecare partener</strong> este responsabil de
                  respectarea termenelor și calitatea livrării.
                </li>
              </ul>
            </div>

            {/* Note importante */}
            <div className="mb-12">
              <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark-900 mb-4 flex items-center gap-2">
                  <FileText className="text-brand-600" size={24} />
                  Informații Importante
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  Pentru întrebări legate de livrare, te rugăm să contactezi
                  direct partenerul sau echipa noastră de suport.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-dark-50 border border-dark-200 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                Informații de Contact
              </h3>
              <p className="text-dark-600 mb-2">
                <strong>Companie:</strong> {COMPANY_INFO.name}
              </p>
              <p className="text-dark-600 mb-2">
                <strong>Email:</strong> {COMPANY_INFO.email}
              </p>
              <p className="text-dark-600">
                Pentru asistență, vă rugăm să vizitați{" "}
                <a
                  href="/contact"
                  className="text-brand-600 hover:text-brand-700 font-semibold underline"
                >
                  pagina de contact
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
