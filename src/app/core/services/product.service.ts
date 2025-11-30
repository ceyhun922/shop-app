import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private products: Product[] = [

  // ===========================
  // CATEGORY 1 → SUB 101 (iPhone)
  // ===========================

  {
    id: 2,
    name: "iPhone 14 Pro Max 128GB",
    brand: "Apple",
    price: 3299,
    oldPrice: 3599,
    discount: 8,
    rating: 4.9,
    ratingCount: 610,
    views: 8700,
    badge: "⭐ Bestseller",
    isBestSeller: true,
    images: [
      "assets/products/iphone12.png",
      "assets/products/iphone15pro.webp",
      "assets/products/iphone12.png"
    ],
    categoryId: 1,
    subCategoryId: 101,
    tags: ["top", "en-cox-satilan"]
  }
]




  getAllProducts(): Product[] {
    return this.products;
  }
}
