export default function FAQ() {
  const faqs = [
    {
      q: "Ce pot face cu MobizzApp?",
      a: "MobizzApp este o aplicație 'All-in-One' pentru servicii locale. Poți face rezervări la saloane, servicii medicale, auto, fitness, dar poți și comanda mâncare de la restaurantele partenere din zona ta, totul dintr-un singur cont.",
    },
    {
      q: "Cum mă înregistrez ca utilizator?",
      a: "Descarcă aplicația MobizzApp din App Store sau Google Play. Deschide aplicația, introdu numărul de telefon pentru validare SMS și completează-ți profilul. Procesul durează mai puțin de un minut și este complet gratuit.",
    },
    {
      q: "Pot comanda mâncare prin MobizzApp?",
      a: "Da! Pe lângă funcția de rezervări, MobizzApp include o secțiune dedicată restaurantelor. Poți vizualiza meniul digital cu poze, adăuga produse în coș, selecta opțiuni extra și plasa comenzi pentru ridicare personală sau livrare (în funcție de disponibilitatea restaurantului).",
    },
    {
      q: "Cum plătesc pentru servicii sau mâncare?",
      a: "Momentan, plățile se fac direct la locație sau la livrare (Cash sau Card), conform politicii fiecărui partener. Aplicația facilitează rezervarea sau comanda, dar tranzacția financiară finală are loc între tine și furnizor.",
    },
    {
      q: "Cum îmi înregistrez salonul sau restaurantul?",
      a: "Procesul este simplu și se face din aplicație. La înregistrare selectează opțiunea 'Cont Business/Partener'. Vei putea configura tipul afacerii (Servicii/Programări sau Restaurant/Comenzi), orarul, echipa și oferta. După validare, afacerea ta va fi vizibilă pentru toți utilizatorii.",
    },
    {
      q: "Pot lăsa recenzii?",
      a: "Da, transparența este esențială. După finalizarea unei rezervări sau a unei comenzi, vei putea acorda un rating (stele) și lăsa o recenzie scrisă despre experiența ta. Acest lucru ajută comunitatea să identifice cele mai bune servicii.",
    },
    {
      q: "Cât costă să folosesc MobizzApp ca partener?",
      a: "Oferim un plan Gratuit cu funcții de bază care îți permite să fii listat și să primești rezervări/comenzi. Pentru funcții avansate (statistici, campanii SMS, notificări automate), există planuri Premium accesibile, activate direct din aplicație.",
    },
    {
      q: "Ce se întâmplă dacă trebuie să anulez o rezervare sau o comandă?",
      a: "Poți anula rezervările direct din secțiunea 'Programările Mele', respectând politica de anulare a partenerului. Pentru comenzile de mâncare, anularea este posibilă doar dacă restaurantul nu a început încă prepararea comenzii (status 'În așteptare').",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Întrebări Frecvente
        </h1>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="group border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <summary className="w-full flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50 transition-colors list-none">
                <span className="font-semibold text-slate-800 pr-4">
                  {item.q}
                </span>
                <svg
                  className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180 group-open:text-brand-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="p-6 bg-white text-slate-600 border-t border-slate-100 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-900 font-medium mb-2">
            Nu ai găsit răspunsul?
          </p>
          <a
            href="/contact"
            className="text-brand-600 font-bold hover:underline"
          >
            Contactează echipa de suport
          </a>
        </div>
      </div>
    </div>
  );
}
