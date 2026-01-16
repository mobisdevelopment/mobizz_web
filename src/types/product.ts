import { Establishment } from "./establishment";
import { EstablishmentProductCategory } from "./establishmentProductCategory";
import { UploadedImage } from "./uploadedImage";

export interface Product {
  id: string;
  name: string;
  priceMinor: number;
  status: number;
  establishment: Establishment;
  establishmentProductCategory?: EstablishmentProductCategory | null;
  uploadedImages: UploadedImage[];
}
