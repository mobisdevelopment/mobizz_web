import { Establishment } from "./establishment";
import { EstablishmentProductCategory } from "./establishmentProductCategory";
import { UploadedImage } from "./uploadedImage";

export interface Product {
  id: string;
  name: string;
  description: string;
  priceMinor: number;
  status: number;
  establishmentId?: number | null;
  establishment: Establishment;
  establishmentProductCategoryId?: number | null;
  establishmentProductCategory?: EstablishmentProductCategory | null;
  uploadedImages: UploadedImage[];
  uploadedImagesIds?: string[];
}
