export interface NavItem {
  label: string;
  path: string;
  isButton?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  name: string;
  priceDisplay: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  isPopular?: boolean;
}

export enum LegalPageType {
  TERMS = "terms",
  PRIVACY = "privacy",
  DELIVERY = "delivery",
  REFUND = "refund",
}
