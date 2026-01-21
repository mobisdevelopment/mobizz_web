import { Category } from "./category";
import { EstablishmentImage } from "./establishmentImage";
import { EstablishmentProductCategory } from "./establishmentProductCategory";

export interface Establishment {
  id: number;
  categoryId: string;
  category?: Category;
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
  establishmentProductCategories?: EstablishmentProductCategory[];
}
