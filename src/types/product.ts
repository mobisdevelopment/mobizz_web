import { Establishment } from "./establishment";
import { EstablishmentProductCategory } from "./establishmentProductCategory";

export interface Product {
  id: string;
  name: string;
  priceMinor: number;
  status: number;
  establishment: Establishment;
  establishmentProductCategory?: EstablishmentProductCategory | null;
}
