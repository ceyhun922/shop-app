export interface Product {
  id: number;
  name: string;

  price: number;
  oldPrice?: number;
  discount?: number;

  image: string;

  categoryId: number;
  subCategoryId?: number;

  brand?: string;

  rating: number;
  ratingCount: number;

  views?: number;        
  badge?: string;
  tags?: string[];

  isDailySale?: boolean;
  isBestSeller?: boolean;
  isTop10?: boolean;
  isMegaSale?: boolean;
  isNew?: boolean;

  isFavorite?: boolean;
}
