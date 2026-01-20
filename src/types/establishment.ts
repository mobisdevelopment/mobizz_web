import { EstablishmentImage } from "./establishmentImage";

export interface Establishment {
  id: number;
  categoryId: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  lat?: string;
  lng?: string;
  status: number;
  establishmentImages?: EstablishmentImage[];
  establishmentImagesIds?: string[];
}
