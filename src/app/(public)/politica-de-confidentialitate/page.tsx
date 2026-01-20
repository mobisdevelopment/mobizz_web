import { COMPANY_INFO } from "@/constants/constants";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-black overflow-hidden border-b border-dark-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] -z-0 opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dark-900 border border-dark-800 px-4 py-2 rounded-full text-brand-400 text-sm font-semibold mb-6">
              <Shield size={16} />
              <span>Document Legal</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Politica de{" "}
              <span className="text-brand-500">Confidențialitate</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed font-light">
              Informații despre modul în care colectăm, utilizăm și protejăm
              datele dumneavoastră personale.
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
              <p className="text-dark-600 leading-relaxed">
                Aceasta este politica de confidențialitate pentru aplicația
                Mobizz (denumită în continuare &quot;noi&quot; sau
                &quot;aplicația&quot;). Vom utiliza această pagină pentru a vă
                informa cu privire la politica noastră de confidențialitate în
                ceea ce privește utilizarea datelor personale colectate prin
                intermediul aplicației noastre.
              </p>
            </div>

            {/* Colectarea de Date */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Colectarea de Date
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Colectăm anumite informații personale de la utilizatori în
                momentul în care aceștia utilizează aplicația noastră. Aceste
                informații pot include:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-dark-600 mb-4">
                <li>Numele și prenumele utilizatorului</li>
                <li>Adresa de e-mail</li>
                <li>
                  Informații de plată (nume de card, număr de card, CVV, data de
                  expirare)
                </li>
                <li>
                  Informații despre dispozitivul utilizatorului (inclusiv tipul
                  de dispozitiv, sistemul de operare, identificatorul unic al
                  dispozitivului)
                </li>
                <li>
                  Datele de utilizare ale aplicației și interacțiunile
                  utilizatorului cu aceasta
                </li>
              </ul>
              <p className="text-dark-600 leading-relaxed">
                În plus, pentru a îmbunătăți calitatea serviciilor noastre,
                colectăm informații agregate despre utilizarea aplicației, cum
                ar fi datele despre vizualizările paginilor și alte statistici
                relevante.
              </p>
            </div>

            {/* Utilizarea Datelor */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Utilizarea Datelor
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Utilizăm datele colectate pentru a furniza, menține și
                îmbunătăți serviciile noastre și pentru a îndeplini cerințele
                legale. Datele pot fi utilizate în următoarele moduri:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-dark-600">
                <li>
                  Pentru a vă oferi acces la funcționalitățile aplicației
                  noastre
                </li>
                <li>Pentru a vă contacta în legătură cu contul dvs.</li>
                <li>
                  Pentru a îndeplini cerințele legale, cum ar fi impozitele și
                  taxele
                </li>
                <li>
                  Pentru a analiza datele și a îmbunătăți serviciile noastre
                </li>
                <li>
                  Pentru a vă oferi suport tehnic și asistență pentru clienți
                </li>
              </ul>
            </div>

            {/* Partajarea Datelor */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Partajarea Datelor
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Nu vom partaja datele personale ale utilizatorilor cu terțe
                părți, cu excepția cazurilor prevăzute de lege sau pentru a
                îndeplini obligațiile noastre contractuale. Datele pot fi
                partajate în următoarele circumstanțe:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-dark-600">
                <li>Cu partenerii noștri de plată și procesatori de plăți</li>
                <li>
                  Cu terțe părți care ne ajută să oferim servicii și
                  funcționalități ale aplicației
                </li>
                <li>Cu autoritățile legale, dacă este necesar</li>
              </ul>
            </div>

            {/* Securitatea Datelor */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Securitatea Datelor
              </h2>
              <p className="text-dark-600 leading-relaxed">
                Noi luăm măsuri adecvate pentru a proteja datele personale
                colectate prin intermediul aplicației noastre și a preveni
                accesul neautorizat sau utilizarea incorectă a acestora.
                Implementăm măsuri de securitate tehnice și organizatorice,
                inclusiv criptarea datelor și autentificarea cu doi factori,
                pentru a ne asigura că datele sunt protejate în mod
                corespunzător.
              </p>
            </div>

            {/* Drepturile Utilizatorilor */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Drepturile Utilizatorilor
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Conform reglementărilor GDPR, utilizatorii au anumite drepturi
                în ceea ce privește datele personale colectate de noi. Aceste
                drepturi includ:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-dark-600 mb-4">
                <li>
                  Dreptul de a solicita accesul la datele personale pe care le
                  colectăm
                </li>
                <li>
                  Dreptul de a solicita corectarea oricăror date personale
                  inexacte
                </li>
                <li>
                  Dreptul de a solicita ștergerea datelor personale, sub rezerva
                  anumitor excepții legale
                </li>
                <li>
                  Dreptul de a solicita restricționarea prelucrării datelor
                  personale
                </li>
                <li>
                  Dreptul de a se opune prelucrării datelor personale, în
                  anumite circumstanțe
                </li>
                <li>
                  Dreptul la portabilitatea datelor, adică dreptul de a primi
                  datele personale într-un format structurat, utilizabil și ușor
                  de citit, și de a le transmite altui controlor de date
                </li>
              </ul>
              <p className="text-dark-600 leading-relaxed">
                În plus, utilizatorii noștri pot solicita ștergerea contului lor
                în orice moment, utilizând funcționalitatea specială disponibilă
                în aplicație.
              </p>
            </div>

            {/* Modificări la Politica de Confidențialitate */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Modificări la Politica de Confidențialitate
              </h2>
              <p className="text-dark-600 leading-relaxed">
                Noi ne rezervăm dreptul de a actualiza sau de a modifica
                politica noastră de confidențialitate în orice moment, în
                funcție de necesitățile noastre sau de cerințele legale. Orice
                modificări vor fi publicate pe această pagină și vor intra în
                vigoare imediat după publicarea lor.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">Contact</h2>
              <p className="text-dark-600 leading-relaxed">
                Dacă aveți întrebări sau preocupări cu privire la politica
                noastră de confidențialitate, vă rugăm să ne contactați la
                adresa de e-mail {COMPANY_INFO.email}. Vom răspunde cât mai
                curând posibil la întrebările dvs. și vom face tot posibilul
                pentru a vă oferi suportul necesar în legătură cu datele
                personale colectate prin intermediul aplicației noastre.
              </p>
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
                Pentru alte întrebări, vă rugăm să vizitați{" "}
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
