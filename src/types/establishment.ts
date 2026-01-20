export interface Establishment {
  id: number;
  categoryId: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  description?: string;
  status: number;
}
