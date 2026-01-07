import { COMPANY_INFO } from "@/constants/constants";
import { FileText, RotateCcw } from "lucide-react";

export default function CancelPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-black overflow-hidden border-b border-dark-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] -z-0 opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dark-900 border border-dark-800 px-4 py-2 rounded-full text-brand-400 text-sm font-semibold mb-6">
              <RotateCcw size={16} />
              <span>Politici și Proceduri</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              <span className="text-brand-500">Retur</span> / Anulare
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed font-light">
              Informații despre politicile de retur și anulare pentru comenzile
              tale.
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
                Politicile de retur și anulare diferă în funcție de tipul
                comenzii (serviciu sau produs) și de partenerul selectat.
              </p>
            </div>

            {/* Pentru Servicii */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Pentru Servicii
              </h2>
              <ul className="list-disc pl-6 space-y-4 text-dark-600">
                <li>
                  <strong>Anularea unei programări</strong> este posibilă cu
                  minimum 24 de ore înainte de ora stabilită, dacă partenerul nu
                  are o politică diferită.
                </li>
                <li>
                  <strong>Anulările efectuate după acest termen</strong> pot
                  duce la pierderea sumei achitate sau la aplicarea unei
                  penalizări, în funcție de condițiile partenerului.
                </li>
                <li>
                  <strong>Reprogramările</strong> sunt posibile în funcție de
                  disponibilitatea partenerului.
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
                  <strong>Returul produselor</strong> este acceptat în termen de
                  14 zile calendaristice de la livrare, conform legislației în
                  vigoare.
                </li>
                <li>
                  <strong>Produsele trebuie să fie</strong> în stare nouă,
                  nefolosite și în ambalajul original.
                </li>
                <li>
                  <strong>Costurile de retur</strong> pot fi suportate de
                  client, în funcție de politica partenerului.
                </li>
              </ul>
            </div>

            {/* Procesul */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Procesul de Anulare/Retur
              </h2>
              <div className="bg-dark-50 border border-dark-200 rounded-2xl p-8">
                <ol className="list-decimal pl-6 space-y-4 text-dark-600">
                  <li className="text-lg">
                    <strong>Accesează comanda</strong> din contul tău.
                  </li>
                  <li className="text-lg">
                    <strong>Selectează opțiunea</strong> de anulare/retur.
                  </li>
                  <li className="text-lg">
                    <strong>Urmează pașii indicați</strong> sau contactează
                    direct partenerul.
                  </li>
                </ol>
              </div>
            </div>

            {/* Note importante */}
            <div className="mb-12">
              <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark-900 mb-4 flex items-center gap-2">
                  <FileText className="text-brand-600" size={24} />
                  Notă Importantă
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  Pentru nelămuriri, echipa noastră de suport îți stă la
                  dispoziție. Te rugăm să ne contactezi pentru orice întrebare
                  legată de procesul de anulare sau retur.
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
