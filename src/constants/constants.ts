import { NavItem, Plan } from "../types/types";

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
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
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
