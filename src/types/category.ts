export interface Category {
  id: number;
  name: string;
  image?: string;
  categories: Category[];
  hasServices: boolean;
}
