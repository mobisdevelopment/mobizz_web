import { NavItem, Plan } from "../app/types/types";

export const COMPANY_INFO = {
  name: "MOBIS DEVELOPMENT SRL",
  cui: "44897771",
  regCom: "J04/1581/2021",
  address: "Com. Brusturoasa, sat Brusturoasa, nr.2, jud. Bacău, România",
  email: "office@mobizz.ro",
};

export const APP_LINKS = {
  android: "#android-store",
  ios: "#apple-store",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Acasă", path: "/" },
  { label: "Despre Noi", path: "/despre" },
  { label: "Parteneri", path: "/parteneri" },
  { label: "Planuri", path: "/planuri" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export const PLANS: Plan[] = [
  {
    name: "Start / Gratuit",
    priceDisplay: "0 LEI",
    description:
      "Ideal pentru liber-profesioniști (Pliant/Stylist) sau fast-food-uri mici la început de drum.",
    cta: "Începe Gratuit",
    features: [
      {
        text: "Vizibilitate în Marketplace: Apariția în lista generală de căutări pentru utilizatorii din zona ta.",
        included: true,
      },
      {
        text: "Profil Business Basic: Informații esențiale (nume, adresă, program și listă de prețuri).",
        included: true,
      },
      {
        text: "Servicii: Maxim 1 Specialist: Calendar individual dedicat pentru un singur prestator.",
        included: true,
      },
      {
        text: "Food: Meniu Limitat (Max 15 Produse): Ideal pentru un catalog restrâns de produse vedetă.",
        included: true,
      },
      {
        text: "Notificări PUSH în aplicație: Alerte instantanee pe telefonul clientului despre statusul programării.",
        included: true,
      },
      {
        text: "Confirmare Manuală comenzi: Verificarea disponibilității proprii înainte de a accepta cererea clientului.",
        included: true,
      },
      {
        text: "Notificări SMS Automate: Reamintiri automate prin SMS trimise clienților înainte de vizită.",
        included: false,
      },
      {
        text: "Statistici Financiare: Rapoarte detaliate despre încasări și cele mai profitabile ore.",
        included: false,
      },
      {
        text: "Modul Marketing & Promoții: Crearea de vouchere și campanii de reduceri direct în app.",
        included: false,
      },
      {
        text: "Gestionare Livratori proprii: Monitorizarea traseului și a statusului pentru curierii tăi.",
        included: false,
      },
    ],
  },
  {
    name: "Business PRO",
    priceDisplay: "La Cerere",
    description:
      "Soluția completă pentru saloane cu echipă, clinici, restaurante și servicii de delivery.",
    cta: "Activează PRO",
    isPopular: true,
    features: [
      {
        text: "Vizibilitate Prioritară în căutări: Afișare în primele rezultate pentru a atrage mai mulți clienți.",
        included: true,
      },
      {
        text: "Profil Premium (Galerie Foto): Prezentare vizuală extinsă și descrieri detaliate ale locației.",
        included: true,
      },
      {
        text: "Servicii: Specialiști Nelimitați: Adaugă întreaga echipă cu calendare și servicii individuale.",
        included: true,
      },
      {
        text: "Food: Meniu Digital Nelimitat: Catalog complet cu categorii, ingrediente și opțiuni extra.",
        included: true,
      },
      {
        text: "Notificări SMS: Reamintiri automate la 24h și confirmări de comenzi pentru reducerea pierderilor.",
        included: true,
      },
      {
        text: "Acceptare Automată (Reguli Smart): Rezervările se confirmă instant fără intervenția ta manuală.",
        included: true,
      },
      {
        text: "Statistici Vânzări & Clienți: Analiza comportamentului de consum și fidelizarea clienților vechi.",
        included: true,
      },
      {
        text: "Modul Marketing (SMS/Push): Trimite oferte personalizate sau anunțuri direct bazei de date.",
        included: true,
      },
      {
        text: "Gestionare Livratori & Zone: Definește raze de livrare și costuri pe hartă pentru restaurante.",
        included: true,
      },
      {
        text: "Export Bază de Date: Descarcă contactele clienților pentru campanii externe sau arhivă.",
        included: true,
      },
    ],
  },
];

export const CATEGORIES = [
  { name: "Saloane Înfrumusețare", icon: "Scissors" },
  { name: "Food & Drink", icon: "Utensils" },
  { name: "Sănătate & Wellness", icon: "HeartPulse" },
  { name: "Fitness & Sport", icon: "Dumbbell" },
  { name: "Servicii Medicale", icon: "Stethoscope" },
  { name: "Auto & Transport", icon: "Car" },
  { name: "Animale de Companie", icon: "Dog" },
  { name: "Evenimente", icon: "PartyPopper" },
  { name: "Servicii Casnice", icon: "Home" },
  { name: "Diverse", icon: "MoreHorizontal" },
];
