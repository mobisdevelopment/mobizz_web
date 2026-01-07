import { COMPANY_INFO } from "@/constants/constants";
import {
  CheckCircle2,
  Eye,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Target,
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section - Brand Dark */}
      <section className="relative py-24 bg-black overflow-hidden border-b border-dark-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] -z-0 opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dark-900 border border-dark-800 px-4 py-2 rounded-full text-brand-400 text-sm font-semibold mb-6">
              <Rocket size={16} />
              <span>Digitalizăm viitorul serviciilor</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Suntem <span className="text-brand-500">Mobizz</span>App
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed font-light">
              Mai mult decât o aplicație, suntem partenerul tău în digitalizarea
              experiențelor zilnice. Conectăm dorința cu disponibilitatea,
              într-un mod simplu, rapid și intuitiv.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Light */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-100 rounded-full -z-10 opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-100 rounded-full -z-10 opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Echipa la lucru"
                className="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover border-4 border-white"
                loading="lazy"
              />
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl border border-dark-100 max-w-[200px]">
                <p className="text-3xl font-black text-brand-600 mb-1">2021</p>
                <p className="text-sm text-dark-500 font-medium">
                  Anul în care am început să schimbăm regulile.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 tracking-tight">
                De la frustrare la{" "}
                <span className="text-accent-500">Inovație</span>
              </h2>
              <p className="text-dark-600 text-lg leading-relaxed">
                MobizzApp s-a născut dintr-o observație simplă: de ce este încă
                atât de greu să rezervi un serviciu sau să vezi un meniu real în
                timp real? Telefonul a devenit extensia noastră digitală, dar
                industria serviciilor locale era încă blocată în agende de
                hârtie.
              </p>
              <p className="text-dark-600 text-lg leading-relaxed">
                Am decis să construim un pod digital. Un punct unic unde
                utilizatorii găsesc tot ce au nevoie — de la programări la
                barber shop, până la livrarea de burgeri — iar afacerile primesc
                uneltele necesare pentru a concura în era digitală fără costuri
                prohibitive.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-500" size={20} />
                  <span className="font-bold text-dark-800">
                    100% Made in RO
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-500" size={20} />
                  <span className="font-bold text-dark-800">
                    Suport Dedicat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Background */}
      <section className="py-24 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misiune */}
            <div className="bg-white p-10 rounded-[2rem] border border-dark-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-600 mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                Misiunea Noastră
              </h3>
              <p className="text-dark-600 leading-relaxed text-lg">
                Să democratizăm accesul la tehnologie pentru orice afacere
                locală. Credem că un mic salon sau un restaurant de familie
                merită aceleași instrumente digitale ca marile corporații,
                pentru a oferi o experiență de 5 stele clienților lor.
              </p>
            </div>

            {/* Viziune */}
            <div className="bg-white p-10 rounded-[2rem] border border-dark-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-accent-50 w-16 h-16 rounded-2xl flex items-center justify-center text-accent-600 mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                Viziunea Noastră
              </h3>
              <p className="text-dark-600 leading-relaxed text-lg">
                Vrem să transformăm MobizzApp în &quot;Super-Aplicația&quot;
                preferată a românilor. Un ecosistem digital în care orice nevoie
                de servicii sau food este satisfăcută prin trei atingeri de
                ecran, simplificând viața urbană și susținând economia locală.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Valori care ne definesc
            </h2>
            <p className="text-dark-500 max-w-2xl mx-auto">
              Nu doar construim cod, ci construim relații bazate pe încredere și
              performanță.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="group p-8 rounded-3xl bg-dark-50 border border-dark-100 hover:bg-white hover:shadow-2xl transition-all duration-300 text-center">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 text-brand-500 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <Lightbulb size={28} />
              </div>
              <h4 className="text-xl font-bold text-dark-900 mb-3">
                Inovație Pragmatică
              </h4>
              <p className="text-dark-600">
                Nu adoptăm tehnologia doar pentru a fi &quot;moderni&quot;, ci
                pentru a aduce valoare reală și utilitate imediată afacerilor și
                clienților.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group p-8 rounded-3xl bg-dark-50 border border-dark-100 hover:bg-white hover:shadow-2xl transition-all duration-300 text-center">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 text-accent-500 shadow-sm group-hover:bg-accent-500 group-hover:text-white transition-colors">
                <Heart size={28} />
              </div>
              <h4 className="text-xl font-bold text-dark-900 mb-3">
                Empatie Digitală
              </h4>
              <p className="text-dark-600">
                Ascultăm constant partenerii noștri. Fiecare funcție nouă este
                rezultatul direct al unei nevoi reale exprimate de comunitate.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group p-8 rounded-3xl bg-dark-50 border border-dark-100 hover:bg-white hover:shadow-2xl transition-all duration-300 text-center">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 text-dark-900 shadow-sm group-hover:bg-dark-900 group-hover:text-white transition-colors">
                <Shield size={28} />
              </div>
              <h4 className="text-xl font-bold text-dark-900 mb-3">
                Transparență Totală
              </h4>
              <p className="text-dark-600">
                Fără taxe ascunse, fără contracte complicate. Suntem parteneri
                egali și creștem împreună cu afacerile care ne aleg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Brand Info - Dark */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-dark-900 border border-dark-800 rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
              Ești gata să fii parte din <br />
              viitorul digital?
            </h2>
            <p className="text-dark-400 text-lg mb-10 max-w-2xl mx-auto">
              Indiferent dacă ești un utilizator care caută confort sau un
              antreprenor care vrea eficiență, MobizzApp este aici pentru tine.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-dark-200 transition-all shadow-xl"
              >
                Contactează Echipa
              </a>
              <a
                href="/parteneri"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
              >
                Vezi Beneficii Parteneri
              </a>
            </div>
            <div className="mt-12 pt-12 border-t border-dark-800 flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-left">
                <p className="text-xs font-bold text-brand-500 uppercase tracking-widest mb-1">
                  Compania
                </p>
                <p className="text-white font-medium">{COMPANY_INFO.name}</p>
              </div>
              <div className="w-px h-10 bg-dark-800 hidden md:block"></div>
              <div className="text-left">
                <p className="text-xs font-bold text-accent-500 uppercase tracking-widest mb-1">
                  Localizare
                </p>
                <p className="text-white font-medium">Bacău, România</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
