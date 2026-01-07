import Button from "@/components/Button";
import { APP_LINKS, CATEGORIES } from "@/constants/constants";
import {
  ArrowRight,
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Dog,
  Download,
  Dumbbell,
  HeartPulse,
  HomeIcon,
  MoreHorizontal,
  MousePointerClick,
  PartyPopper,
  Quote,
  Scissors,
  Search,
  Settings,
  Smartphone,
  Stethoscope,
  TrendingUp,
  Users,
  Utensils,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

export default function Home() {
  const iconMap: any = {
    Scissors,
    HeartPulse,
    Dumbbell,
    Stethoscope,
    Car,
    Dog,
    PartyPopper,
    HomeIcon,
    Utensils,
    MoreHorizontal,
  };

  const homeFaqs = [
    {
      q: "Este aplicația gratuită pentru utilizatori?",
      a: "Da, MobizzApp este 100% gratuită pentru clienți. Nu plătești niciun comision pentru rezervări sau comenzile de mâncare. Plătești doar serviciile sau produsele achiziționate, direct la locația partenerului.",
    },
    {
      q: "Cum pot face o programare?",
      a: "Descarcă aplicația, creează-ți un cont rapid, alege serviciul dorit (Tuns, Masaj, Medic, etc.) sau specialistul preferat, selectează ziua și ora din calendarul live și confirmă. Vei primi confirmarea pe loc.",
    },
    {
      q: "Pot comanda și mâncare din aceeași aplicație?",
      a: "Absolut! MobizzApp este un 'Super-App'. Comută simplu pe modul 'Food' (Orange) și vei vedea toate restaurantele partenere din zona ta, cu meniuri complete și opțiuni de livrare.",
    },
    {
      q: "În ce orașe este disponibilă MobizzApp?",
      a: "Suntem prezenți în principalele orașe din România și ne extindem constant. Activează localizarea în aplicație pentru a vedea instant partenerii disponibili în apropierea ta.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section - Deep Black Background */}
      <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-32 overflow-hidden bg-black">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent-500/10 rounded-full blur-[120px] -z-10 opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-dark-900 border border-dark-800 px-4 py-2 rounded-full text-accent-500 text-sm font-semibold animate-fade-in">
                <Zap size={16} className="fill-accent-500 text-accent-500" />
                <span>Super-App pentru nevoile tale</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                Servicii <span className="text-brand-500">Premium.</span>
                <br />
                Mâncare <span className="text-accent-500">Delicioasă.</span>
              </h1>
              <p className="text-xl text-dark-300 lg:max-w-lg mx-auto lg:mx-0 font-light">
                O singură aplicație pentru tot ce ai nevoie. Rezervări la salon
                în{" "}
                <span className="text-brand-400 font-medium">Green Mode</span>{" "}
                și comenzi food în{" "}
                <span className="text-accent-500 font-medium">Orange Mode</span>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  href={APP_LINKS.android}
                  icon={<ArrowRight size={20} />}
                  variant="primary"
                >
                  Descarcă Aplicația
                </Button>
                <Button
                  variant="secondary"
                  href="/parteneri"
                  className="border border-dark-700 bg-transparent hover:bg-dark-900"
                >
                  Pentru Business
                </Button>
              </div>
              <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-dark-400 font-medium">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-brand-500/10 rounded-full">
                    <CheckCircle2 size={14} className="text-brand-500" />
                  </div>
                  <span>Rezervări Instant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-accent-500/10 rounded-full">
                    <CheckCircle2 size={14} className="text-accent-500" />
                  </div>
                  <span>Food Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-white/10 rounded-full">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span>100% Gratuit</span>
                </div>
              </div>
            </div>

            {/* Mockup Image */}
            <div className="relative lg:h-[650px] flex items-center justify-center">
              <div className="relative w-72 h-[600px] bg-black rounded-[3rem] border-[8px] border-dark-800 shadow-2xl shadow-accent-500/10 overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-all duration-700">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                {/* Screen Placeholder */}
                <div className="w-full h-full bg-dark-950 relative">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"
                    alt="App Interface Mockup - Wellness & Spa"
                    className="w-full h-full object-cover opacity-80"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                  {/* UI Elements Mockup inside phone */}
                  <div className="absolute bottom-0 w-full p-4 space-y-3">
                    <div className="bg-dark-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-brand-400 font-bold uppercase">
                          Rezervare Confirmată
                        </span>
                        <span className="text-xs text-white">14:00</span>
                      </div>
                      <div className="h-2 w-2/3 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Orange (Food) */}
              <div className="absolute bottom-32 -left-4 lg:-left-8 bg-white p-4 rounded-2xl shadow-xl shadow-black/20 border border-dark-100 animate-bounce-slow max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="bg-accent-50 p-2.5 rounded-xl text-accent-500">
                    <UtensilsCrossed size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-dark-900 text-sm">
                      Comandă Nouă
                    </p>
                    <p className="text-xs text-dark-500">Burger House</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Green (Service) */}
              <div className="absolute top-20 -right-4 lg:right-0 bg-white p-4 rounded-2xl shadow-xl shadow-black/20 border border-dark-100 animate-pulse max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-50 p-2.5 rounded-xl text-brand-500">
                    <Scissors size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-dark-900 text-sm">
                      Programare
                    </p>
                    <p className="text-xs text-dark-500">Azi, 16:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Black */}
      <section className="bg-black border-y border-dark-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-dark-800/50">
            <div>
              <div className="text-4xl font-black text-white mb-2">50k+</div>
              <div className="text-brand-500 text-xs font-bold uppercase tracking-widest">
                Utilizatori
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">1.2k+</div>
              <div className="text-accent-500 text-xs font-bold uppercase tracking-widest">
                Parteneri
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">100k+</div>
              <div className="text-brand-500 text-xs font-bold uppercase tracking-widest">
                Rezervări
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">4.9</div>
              <div className="text-accent-500 text-xs font-bold uppercase tracking-widest">
                Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantaje Utilizatori - Light Background */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-dark-900 mb-6">
              De ce <span className="text-accent-500">Mobizz</span>App?
            </h2>
            <p className="text-lg text-dark-600">
              Tehnologie modernă, design intuitiv și toate serviciile tale
              preferate într-un singur loc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-dark-50 rounded-3xl p-6 lg:p-8 hover:bg-white hover:shadow-2xl hover:shadow-dark-900/5 hover:-translate-y-2 transition-all duration-300 border border-dark-100 hover:border-brand-200/50 group flex flex-col items-start">
              <div className="bg-brand-50 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                <Calendar size={28} className="lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-dark-900 group-hover:text-brand-600 transition-colors">
                Rezervări & Comenzi
              </h3>
              <p className="text-dark-600 leading-relaxed text-sm lg:text-base">
                Găsești intervale libere la saloane sau comanzi mâncare de la
                restaurantele din zonă, totul dintr-o singură aplicație
                unificată.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-dark-50 rounded-3xl p-6 lg:p-8 hover:bg-white hover:shadow-2xl hover:shadow-dark-900/5 hover:-translate-y-2 transition-all duration-300 border border-dark-100 hover:border-accent-200/50 group flex flex-col items-start">
              <div className="bg-accent-50 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-accent-500 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                <UtensilsCrossed size={28} className="lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-dark-900 group-hover:text-accent-600 transition-colors">
                Diversitate Maximă
              </h3>
              <p className="text-dark-600 leading-relaxed text-sm lg:text-base">
                De la tuns, cosmetică și servicii medicale, până la pizza,
                burgeri și sushi. Ai acces la mii de parteneri verificați.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-dark-50 rounded-3xl p-6 lg:p-8 hover:bg-white hover:shadow-2xl hover:shadow-dark-900/5 hover:-translate-y-2 transition-all duration-300 border border-dark-100 hover:border-dark-300/50 group flex flex-col items-start">
              <div className="bg-dark-200 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-dark-700 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                <Smartphone size={28} className="lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-dark-900 group-hover:text-dark-950 transition-colors">
                Totul pe Mobil
              </h3>
              <p className="text-dark-600 leading-relaxed text-sm lg:text-base">
                Istoric rezervări, status comenzi în timp real, saloane favorite
                și restaurante preferate. Un singur cont.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Dark Gray Background */}
      <section className="py-24 bg-dark-50 border-t border-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Cum funcționează?
            </h2>
            <p className="text-dark-600">
              Simplu pentru clienți, eficient pentru afaceri.
            </p>
          </div>

          {/* User Flow */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="bg-brand-100 text-brand-700 p-2 rounded-lg">
                <Users size={20} />
              </span>
              <h3 className="text-2xl font-bold text-dark-900">
                Pentru Clienți
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Desktop Line Connector */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-200 via-accent-200 to-brand-200 border-t border-dashed border-dark-300 -z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-sm border border-dark-100 text-center hover:shadow-lg transition-all group">
                <div className="w-24 h-24 bg-white border-4 border-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500 group-hover:scale-110 transition-transform shadow-sm">
                  <Download size={32} />
                </div>
                <div className="absolute top-6 right-8 text-6xl font-black text-brand-500/5 select-none z-0">
                  1
                </div>
                <h4 className="text-xl font-bold text-dark-900 mb-2 relative z-10">
                  Descarcă & Creează Cont
                </h4>
                <p className="text-sm text-dark-600 relative z-10">
                  Instalează aplicația gratuit și configurează-ți profilul în
                  câteva secunde.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-sm border border-dark-100 text-center hover:shadow-lg transition-all group">
                <div className="w-24 h-24 bg-white border-4 border-accent-50 rounded-full flex items-center justify-center mx-auto mb-6 text-accent-500 group-hover:scale-110 transition-transform shadow-sm">
                  <Search size={32} />
                </div>
                <div className="absolute top-6 right-8 text-6xl font-black text-accent-500/5 select-none z-0">
                  2
                </div>
                <h4 className="text-xl font-bold text-dark-900 mb-2 relative z-10">
                  Caută Servicii
                </h4>
                <p className="text-sm text-dark-600 relative z-10">
                  Găsește saloane, medici sau restaurante în zona ta și verifică
                  disponibilitatea.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-sm border border-dark-100 text-center hover:shadow-lg transition-all group">
                <div className="w-24 h-24 bg-white border-4 border-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500 group-hover:scale-110 transition-transform shadow-sm">
                  <MousePointerClick size={32} />
                </div>
                <div className="absolute top-6 right-8 text-6xl font-black text-brand-500/5 select-none z-0">
                  3
                </div>
                <h4 className="text-xl font-bold text-dark-900 mb-2 relative z-10">
                  Rezervă sau Comandă
                </h4>
                <p className="text-sm text-dark-600 relative z-10">
                  Selectează ora sau produsele și confirmă instant. Plătești la
                  locație.
                </p>
              </div>
            </div>
          </div>

          {/* Partner Flow */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="bg-dark-200 text-dark-800 p-2 rounded-lg">
                <Building2 size={20} />
              </span>
              <h3 className="text-2xl font-bold text-dark-900">
                Pentru Parteneri
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Desktop Line Connector */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-dark-200 border-t border-dashed border-dark-300 -z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-sm border border-dark-100 text-center hover:shadow-lg transition-all group">
                <div className="w-24 h-24 bg-white border-4 border-dark-100 rounded-full flex items-center justify-center mx-auto mb-6 text-dark-700 group-hover:scale-110 transition-transform shadow-sm">
                  <Building2 size={32} />
                </div>
                <div className="absolute top-6 right-8 text-6xl font-black text-dark-200/20 select-none z-0">
                  1
                </div>
                <h4 className="text-xl font-bold text-dark-900 mb-2 relative z-10">
                  Cont Business
                </h4>
                <p className="text-sm text-dark-600 relative z-10">
                  Selectează opțiunea &quot;Cont Business&quot; la înregistrarea
                  în aplicație.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-sm border border-dark-100 text-center hover:shadow-lg transition-all group">
                <div className="w-24 h-24 bg-white border-4 border-dark-100 rounded-full flex items-center justify-center mx-auto mb-6 text-dark-700 group-hover:scale-110 transition-transform shadow-sm">
                  <Settings size={32} />
                </div>
                <div className="absolute top-6 right-8 text-6xl font-black text-dark-200/20 select-none z-0">
                  2
                </div>
                <h4 className="text-xl font-bold text-dark-900 mb-2 relative z-10">
                  Configurare
                </h4>
                <p className="text-sm text-dark-600 relative z-10">
                  Setează rapid orarul, echipa, serviciile sau meniul digital.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-sm border border-dark-100 text-center hover:shadow-lg transition-all group">
                <div className="w-24 h-24 bg-white border-4 border-dark-100 rounded-full flex items-center justify-center mx-auto mb-6 text-dark-700 group-hover:scale-110 transition-transform shadow-sm">
                  <TrendingUp size={32} />
                </div>
                <div className="absolute top-6 right-8 text-6xl font-black text-dark-200/20 select-none z-0">
                  3
                </div>
                <h4 className="text-xl font-bold text-dark-900 mb-2 relative z-10">
                  Creștere
                </h4>
                <p className="text-sm text-dark-600 relative z-10">
                  Primești comenzi și rezervări direct pe telefon. Ești vizibil
                  pentru mii de oameni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorii - White Background (Changed from dark-50 to alternate) */}
      <section className="py-24 bg-white border-t border-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-dark-900 mb-4">
                Categorii Populare
              </h2>
              <p className="text-dark-600">
                Descoperă serviciile și restaurantele disponibile în zona ta.
              </p>
            </div>
            <Button
              variant="outline"
              className="hidden sm:inline-flex"
              href={APP_LINKS.android}
            >
              Vezi toate
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, idx) => {
              const Icon = iconMap[cat.icon] || MoreHorizontal;
              // Alternate colors for visual interest
              const isFood = ["Food & Drink"].includes(cat.name);
              const activeColorClass = isFood
                ? "text-accent-500 group-hover:bg-accent-500"
                : "text-brand-500 group-hover:bg-brand-500";
              const bgClass = isFood ? "bg-accent-50" : "bg-brand-50";

              return (
                <div
                  key={idx}
                  className="group bg-dark-50 p-6 rounded-2xl hover:shadow-lg transition-all cursor-default flex flex-col items-center text-center gap-4 border border-dark-200 hover:border-brand-200"
                >
                  <div
                    className={`${activeColorClass} ${bgClass} p-4 rounded-full transition-colors group-hover:text-white`}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="font-semibold text-dark-700 text-sm">
                    {cat.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" href={APP_LINKS.android} fullWidth>
              Vezi toate categoriile
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Dark Background (Changed from White to alternate) */}
      <section className="py-24 bg-dark-50 border-t border-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Ce spun utilizatorii
            </h2>
            <p className="text-dark-600">Feedback real de la oameni reali.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl relative border border-dark-100 hover:shadow-lg transition-shadow">
              <Quote
                className="text-dark-300 absolute top-6 left-6"
                size={40}
              />
              <p className="text-dark-700 italic mb-8 relative z-10 pt-4 leading-relaxed">
                &quot;De când folosesc MobizzApp nu mai pierd timp la telefon.
                Văd imediat când e liber stilistul meu și rezerv în 10 secunde.
                Super util!&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-dark-200 pt-6">
                <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center font-bold text-white">
                  AM
                </div>
                <div>
                  <p className="font-bold text-dark-900">Ana Maria</p>
                  <p className="text-xs text-brand-600">Utilizator Verified</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white rounded-3xl relative border border-dark-100 hover:shadow-lg transition-shadow">
              <Quote
                className="text-dark-300 absolute top-6 left-6"
                size={40}
              />
              <p className="text-dark-700 italic mb-8 relative z-10 pt-4 leading-relaxed">
                &quot;Comand prânzul la birou zilnic prin aplicație. Îmi place
                că pot urmări comanda în timp real și meniul e mereu
                actualizat.&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-dark-200 pt-6">
                <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center font-bold text-white">
                  RI
                </div>
                <div>
                  <p className="font-bold text-dark-900">Radu Ionescu</p>
                  <p className="text-xs text-accent-600">Foodie & Tech Lover</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white rounded-3xl relative border border-dark-100 hover:shadow-lg transition-shadow">
              <Quote
                className="text-dark-300 absolute top-6 left-6"
                size={40}
              />
              <p className="text-dark-700 italic mb-8 relative z-10 pt-4 leading-relaxed">
                &quot;Pentru salonul meu, MobizzApp a fost o revoluție. Am redus
                neprezentările cu 80% datorită SMS-urilor automate de
                reamintire.&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-dark-200 pt-6">
                <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center font-bold text-white">
                  ES
                </div>
                <div>
                  <p className="font-bold text-dark-900">Elena Stan</p>
                  <p className="text-xs text-dark-500">Manager Salon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - White Background */}
      <section className="py-24 bg-white border-t border-dark-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Întrebări Frecvente
            </h2>
            <p className="text-dark-600">
              Cele mai comune întrebări despre utilizarea aplicației.
            </p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-dark-50 rounded-2xl border border-dark-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer focus:outline-none font-bold text-dark-900 select-none hover:bg-dark-100/50 transition-colors">
                  <span className="pr-8">{faq.q}</span>
                  <span className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <svg
                      className="w-5 h-5 text-brand-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 text-dark-600 leading-relaxed border-t border-dark-200">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-dark-500 mb-4">Mai ai nelămuriri?</p>
            <Button
              variant="ghost"
              href="/faq"
              className="text-brand-600 font-semibold hover:bg-brand-50"
            >
              Vezi toate întrebările
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Bottom - Black for closing impact */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Gata de o nouă experiență?
          </h2>
          <p className="text-xl text-dark-300 mb-12 font-light">
            Alătură-te miilor de utilizatori care își simplifică viața cu
            MobizzApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              href={APP_LINKS.android}
              variant="primary"
              className="shadow-white/5"
            >
              Descarcă pentru Client
            </Button>
            <Button
              href="/parteneri"
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Devino Partener
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
