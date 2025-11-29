import { Product } from "./product";

export interface SortOption {
  key: string;
  label: string;
  type: 'asc' | 'desc' | 'none';
  field?: keyof Product;   // price, ratingCount, etc.
}
