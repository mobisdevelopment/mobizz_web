import {
  BellRing,
  Check,
  PieChart,
  Scissors,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  Utensils,
} from "lucide-react";
import Image from "next/image";

export default function Partners() {
  const benefits = [
    {
      icon: <TrendingUp size={32} />,
      title: "Creșterea Veniturilor",
      desc: "Ocupă intervalele moarte la salon sau crește numărul de comenzi la restaurant prin vizibilitate extinsă către mii de utilizatori locali. Algoritmii noștri de recomandare scot în evidență afacerea ta în momentele cheie, transformând vizitatorii curioși în clienți plătitori și loiali.",
    },
    {
      icon: <Users size={32} />,
      title: "Clienți & Comenzi",
      desc: "Gestionează baza de clienți fideli și primește comenzi de mâncare sau rezervări direct pe telefon, fără intermediari costisitori. Eliminarea barierelor de comunicare înseamnă o rată de conversie mai mare și o relație mai strânsă, directă, cu comunitatea ta locală.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Platformă All-in-One",
      desc: "Calendar, angajați, servicii, meniuri digitale și prețuri. Totul gestionat dintr-o singură aplicație intuitivă. Centralizarea operațiunilor reduce drastic erorile umane și îți permite să te concentrezi exclusiv pe calitatea serviciilor, nu pe sarcini administrative obositoare.",
    },
    {
      icon: <BellRing size={32} />,
      title: "Notificări Automate",
      desc: "Notificări SMS pentru reamintirea rezervărilor (reduce No-Show) sau statusul comenzilor de mâncare în timp real. Prin menținerea clienților informați la fiecare pas, îmbunătățești satisfacția acestora și previi pierderile financiare cauzate de programările neonorate.",
    },
    {
      icon: <PieChart size={32} />,
      title: "Rapoarte Detaliate",
      desc: "Vezi care sunt cele mai vândute servicii sau preparate culinare, orele de vârf și performanța financiară a afacerii tale. Aceste date concrete îți permit să iei decizii strategice bazate pe cifre reale, optimizând stocurile sau orarul personalului pentru profitabilitate maximă.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Control Total",
      desc: "Tu decizi orarul, meniul, prețurile și regulile. Datele afacerii tale sunt în siguranță deplină și accesibile doar ție. Flexibilitatea platformei înseamnă că afacerea ta se poate adapta instantaneu la schimbările pieței sau la evenimente sezoniere, fără a depinde de suport tehnic extern.",
    },
  ];

  return (
    <div className="bg-dark-50">
      {/* Header - Black */}
      <section className="bg-black py-24 relative overflow-hidden border-b border-dark-900">
        <div className="absolute inset-0 bg-brand-900/10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-900/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-dark-900 border border-dark-800 text-brand-400 text-sm font-semibold">
            Pentru Afaceri
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Soluția Completă pentru <br />
            <span className="text-brand-500">Servicii</span> și{" "}
            <span className="text-accent-500">Restaurante</span>
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto mb-10">
            Fie că deții un salon, o clinică, un teren de sport sau un
            restaurant, MobizzApp te ajută să gestionezi rezervările și
            comenzile eficient.
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-accent-500 mb-8">
            Înregistrează-ți afacerea acum
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.agrorifserv.homeliv&hl=ro"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/images/download-android.png"
                width={160}
                height={48}
                alt="Descarcă aplicația pentru Android"
                className="h-auto"
              />
            </a>
            <a
              href="https://apps.apple.com/ro/app/mobizz/id1554145259"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/images/download-ios.png"
                width={144}
                height={40}
                alt="Descarcă aplicația pentru iOS"
                className="h-auto"
              />
            </a>
          </div>
          <p className="mt-4 text-sm text-dark-500">
            Înregistrarea se face exclusiv din aplicația mobilă.
          </p>
        </div>
      </section>

      {/* Specific Features Breakdown - Light */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Funcționalități Adaptate Afacerii Tale
            </h2>
            <p className="text-dark-600">
              Am construit unelte specifice pentru fiecare tip de activitate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Pentru Saloane */}
            <div className="bg-dark-50 rounded-3xl shadow-lg overflow-hidden border border-dark-200 hover:border-brand-500/50 transition-all group h-full">
              <div className="bg-brand-50 p-8 border-b border-brand-100 flex items-center gap-4">
                <div className="p-3 bg-white text-brand-600 rounded-xl shadow-lg shadow-brand-500/10">
                  <Scissors size={24} />
                </div>
                <h3 className="text-2xl font-bold text-brand-900">
                  Pentru Saloane & Servicii
                </h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "Calendar Inteligent: Evită suprapunerile cu un calendar digital drag-and-drop, sincronizat pe toate dispozitivele.",
                    "Reducere No-Show: Sistem automat de notificări SMS și Push (confirmare + reminder 24h) care reduce drastic neprezentările.",
                    "Profil Business Premium: Galerie foto atractivă, listă de prețuri transparentă și recenzii verificate pentru a atrage clienți noi.",
                    "Management Echipă: Setează orarul individual, permisiunile și serviciile specifice fiecărui angajat.",
                    "Bază de Date Clienți (CRM): Istoric complet, notițe despre preferințe și posibilitate de blocare clienți neserioși.",
                    "Rapoarte Financiare: Vezi încasările zilnice/lunare, top servicii vândute și performanța echipei.",
                  ].map((item, i) => {
                    const [boldText, normalText] = item.split(": ");
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="text-brand-500 mt-1 flex-shrink-0"
                        />
                        <span className="text-dark-700">
                          {normalText ? (
                            <>
                              <span className="font-bold text-dark-900">
                                {boldText}:
                              </span>{" "}
                              {normalText}
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Pentru Restaurante */}
            <div className="bg-dark-50 rounded-3xl shadow-lg overflow-hidden border border-dark-200 hover:border-accent-500/50 transition-all group h-full">
              <div className="bg-accent-50 p-8 border-b border-accent-100 flex items-center gap-4">
                <div className="p-3 bg-white text-accent-600 rounded-xl shadow-lg shadow-accent-500/10">
                  <Utensils size={24} />
                </div>
                <h3 className="text-2xl font-bold text-accent-900">
                  Pentru Restaurante
                </h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "Comisioane Zero: Preiei comenzi direct de la clienți fără a plăti procentele uriașe ale platformelor clasice de delivery.",
                    "Flux Comenzi Live: Tabletă/Telefon dedicat în bucătărie cu alerte sonore. Gestionează statusul: Nouă -> În Preparare -> Livrată.",
                    "Livrare Proprie & Zone: Definește zonele unde livrezi pe hartă, costul transportului și comanda minimă pentru fiecare zonă.",
                    "Gestionare Livratori: Aplicație dedicată pentru șoferii tăi sau opțiune simplă de 'Ridicare Personală' pentru clienți.",
                    "Imprimare Bonuri: Compatibilitate cu imprimante termice Bluetooth pentru a scoate bonurile instant în bucătărie.",
                    "Marketing & Fidelizare: Trimite notificări Push clienților din zonă cu 'Oferta Zilei' sau 'Happy Hour' pentru a crește vânzările.",
                  ].map((item, i) => {
                    const [boldText, normalText] = item.split(": ");
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="text-accent-500 mt-1 flex-shrink-0"
                        />
                        <span className="text-dark-700">
                          {normalText ? (
                            <>
                              <span className="font-bold text-dark-900">
                                {boldText}:
                              </span>{" "}
                              {normalText}
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Benefits Grid - Very Light Gray */}
      <section className="py-24 bg-dark-50 border-y border-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Beneficii Generale
            </h2>
            <p className="text-dark-600">
              Cum transformă MobizzApp modul în care îți gestionezi și crești
              afacerea.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start p-8 rounded-3xl bg-white border border-dark-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="p-3 bg-brand-50 rounded-xl shadow-sm text-brand-600 mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-4 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-dark-600 leading-relaxed text-sm lg:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Cum devin partener?
            </h2>
            <p className="text-dark-600">
              Procesul este simplu, durează mai puțin de 5 minute.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-50 p-8 rounded-3xl shadow-sm border-l-4 border-brand-500 relative overflow-hidden">
              <span className="text-8xl font-black text-dark-200 absolute -top-4 -right-3 z-0">
                1
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  Descarcă & Creează Cont
                </h3>
                <p className="text-dark-600">
                  Instalează aplicația și alege opțiunea &quot;Cont
                  Business&quot; la înregistrare.
                </p>
              </div>
            </div>

            <div className="bg-dark-50 p-8 rounded-3xl shadow-sm border-l-4 border-brand-500 relative overflow-hidden">
              <span className="text-8xl font-black text-dark-200 absolute -top-4 -right-6 z-0">
                2
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  Configurează Profilul
                </h3>
                <p className="text-dark-600">
                  Adaugă serviciile și orarul (pentru programări) SAU meniul
                  digital (pentru restaurante).
                </p>
              </div>
            </div>

            <div className="bg-dark-50 p-8 rounded-3xl shadow-sm border-l-4 border-brand-500 relative overflow-hidden">
              <span className="text-8xl font-black text-dark-200 absolute -top-4 -right-6 z-0">
                3
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  Start Business
                </h3>
                <p className="text-dark-600">
                  Activează profilul. Clienții se pot programa sau pot comanda
                  mâncare imediat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
