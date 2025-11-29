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
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    brand: "Apple",
    price: 3999,
    oldPrice: 4399,
    discount: 9,
    rating: 4.9,
    ratingCount: 830,
    views: 12000,
    badge: "🔥 Yeni",
    isNew: true,
    isTop10: true,
    image: "assets/products/iphone15promax.png",
    images: [
      "assets/products/iphone15promax.png",
      "assets/products/iphone15promax-2.png"
    ],
    categoryId: 1,
    subCategoryId: 101,
    tags: ["flagship", "premium"]
  },
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
    image: "assets/products/iphone14promax.png",
    images: [
      "assets/products/iphone14promax.png",
      "assets/products/iphone14promax-2.png"
    ],
    categoryId: 1,
    subCategoryId: 101,
    tags: ["top", "en-cox-satilan"]
  },
  {
    id: 3,
    name: "iPhone 13 128GB",
    brand: "Apple",
    price: 1999,
    oldPrice: 2299,
    discount: 14,
    rating: 4.8,
    ratingCount: 920,
    views: 9500,
    image: "assets/products/iphone13.png",
    images: [
      "assets/products/iphone13.png",
      "assets/products/iphone13-2.png"
    ],
    categoryId: 1,
    subCategoryId: 101,
    tags: ["popular"]
  },
  {
    id: 4,
    name: "iPhone 12 128GB",
    brand: "Apple",
    price: 1599,
    oldPrice: 1799,
    discount: 12,
    rating: 4.7,
    ratingCount: 1200,
    views: 5000,
    image: "assets/products/iphone12.png",
    images: [
      "assets/products/iphone12.png"
    ],
    categoryId: 1,
    subCategoryId: 101
  },
  {
    id: 5,
    name: "iPhone SE (2022)",
    brand: "Apple",
    price: 999,
    oldPrice: 1099,
    discount: 9,
    rating: 4.5,
    ratingCount: 330,
    views: 2200,
    image: "assets/products/iphonese.png",
    images: [
      "assets/products/iphonese.png"
    ],
    categoryId: 1,
    subCategoryId: 101
  },

  // ===========================
  // CATEGORY 1 → SUB 102 (Samsung)
  // ===========================
  {
    id: 6,
    name: "Samsung S23 Ultra",
    brand: "Samsung",
    price: 2799,
    oldPrice: 3199,
    discount: 13,
    rating: 4.9,
    ratingCount: 740,
    views: 11000,
    isMegaSale: true,
    badge: "MEGA SALE",
    image: "assets/products/s23ultra.png",
    images: ["assets/products/s23ultra.png"],
    categoryId: 1,
    subCategoryId: 102
  },
  {
    id: 7,
    name: "Samsung S22 Ultra",
    brand: "Samsung",
    price: 2299,
    oldPrice: 2599,
    discount: 12,
    rating: 4.8,
    ratingCount: 580,
    views: 7600,
    image: "assets/products/s22ultra.png",
    images: ["assets/products/s22ultra.png"],
    categoryId: 1,
    subCategoryId: 102
  },
  {
    id: 8,
    name: "Samsung A54",
    brand: "Samsung",
    price: 1299,
    oldPrice: 1399,
    discount: 7,
    rating: 4.6,
    ratingCount: 510,
    views: 5300,
    image: "assets/products/a54.png",
    images: ["assets/products/a54.png"],
    categoryId: 1,
    subCategoryId: 102
  },
  {
    id: 9,
    name: "Samsung A34",
    brand: "Samsung",
    price: 999,
    oldPrice: 1099,
    discount: 9,
    rating: 4.5,
    ratingCount: 480,
    views: 4200,
    image: "assets/products/a34.png",
    images: ["assets/products/a34.png"],
    categoryId: 1,
    subCategoryId: 102
  },
  {
    id: 10,
    name: "Samsung M33",
    brand: "Samsung",
    price: 799,
    oldPrice: 899,
    discount: 11,
    rating: 4.3,
    ratingCount: 250,
    views: 1800,
    image: "assets/products/m33.png",
    images: ["assets/products/m33.png"],
    categoryId: 1,
    subCategoryId: 102
  },

  // ===========================
  // CATEGORY 1 → SUB 103 (Xiaomi)
  // ===========================
  {
    id: 11,
    name: "Xiaomi 13 Pro",
    brand: "Xiaomi",
    price: 1699,
    oldPrice: 1999,
    discount: 15,
    rating: 4.7,
    ratingCount: 300,
    views: 4600,
    image: "assets/products/xiaomi13pro.png",
    images: ["assets/products/xiaomi13pro.png"],
    categoryId: 1,
    subCategoryId: 103
  },
  {
    id: 12,
    name: "Xiaomi 12",
    brand: "Xiaomi",
    price: 1299,
    oldPrice: 1499,
    discount: 13,
    rating: 4.6,
    ratingCount: 410,
    views: 3700,
    image: "assets/products/xiaomi12.png",
    images: ["assets/products/xiaomi12.png"],
    categoryId: 1,
    subCategoryId: 103
  },
  {
    id: 13,
    name: "Xiaomi Redmi Note 12",
    brand: "Xiaomi",
    price: 799,
    oldPrice: 899,
    discount: 11,
    rating: 4.5,
    ratingCount: 580,
    views: 5300,
    image: "assets/products/redmi12.png",
    images: ["assets/products/redmi12.png"],
    categoryId: 1,
    subCategoryId: 103
  },
  {
    id: 14,
    name: "Xiaomi Redmi Note 11",
    brand: "Xiaomi",
    price: 699,
    oldPrice: 799,
    discount: 12,
    rating: 4.4,
    ratingCount: 610,
    views: 4800,
    image: "assets/products/redmi11.png",
    images: ["assets/products/redmi11.png"],
    categoryId: 1,
    subCategoryId: 103
  },
  {
    id: 15,
    name: "Xiaomi Poco X5",
    brand: "Xiaomi",
    price: 899,
    oldPrice: 999,
    discount: 10,
    rating: 4.3,
    ratingCount: 340,
    views: 2600,
    image: "assets/products/pocoX5.png",
    images: ["assets/products/pocoX5.png"],
    categoryId: 1,
    subCategoryId: 103
  },

  // ===========================
  // CATEGORY 1 → SUB 104 (Huawei)
  // ===========================
  {
    id: 16,
    name: "Huawei P60 Pro",
    brand: "Huawei",
    price: 1599,
    oldPrice: 1799,
    discount: 11,
    rating: 4.7,
    ratingCount: 700,
    views: 4500,
    image: "assets/products/huaweiP60.png",
    images: ["assets/products/huaweiP60.png"],
    categoryId: 1,
    subCategoryId: 104
  },
  {
    id: 17,
    name: "Huawei Mate 50",
    brand: "Huawei",
    price: 1799,
    oldPrice: 1999,
    discount: 10,
    rating: 4.6,
    ratingCount: 510,
    views: 3400,
    image: "assets/products/mate50.png",
    images: ["assets/products/mate50.png"],
    categoryId: 1,
    subCategoryId: 104
  },
  {
    id: 18,
    name: "Huawei Nova 11",
    brand: "Huawei",
    price: 899,
    oldPrice: 999,
    discount: 10,
    rating: 4.4,
    ratingCount: 350,
    views: 2700,
    image: "assets/products/nova11.png",
    images: ["assets/products/nova11.png"],
    categoryId: 1,
    subCategoryId: 104
  },
  {
    id: 19,
    name: "Huawei Nova 10",
    brand: "Huawei",
    price: 799,
    oldPrice: 899,
    discount: 11,
    rating: 4.3,
    ratingCount: 290,
    views: 2100,
    image: "assets/products/nova10.png",
    images: ["assets/products/nova10.png"],
    categoryId: 1,
    subCategoryId: 104
  },
  {
    id: 20,
    name: "Huawei P40 Lite",
    brand: "Huawei",
    price: 599,
    oldPrice: 699,
    discount: 14,
    rating: 4.2,
    ratingCount: 210,
    views: 1600,
    image: "assets/products/p40lite.png",
    images: ["assets/products/p40lite.png"],
    categoryId: 1,
    subCategoryId: 104
  },

  // ===========================
  // CATEGORY 1 → SUB 105 (Realme)
  // ===========================
  {
    id: 21,
    name: "Realme GT 3",
    brand: "Realme",
    price: 1299,
    oldPrice: 1399,
    discount: 7,
    rating: 4.6,
    ratingCount: 290,
    views: 2400,
    image: "assets/products/realmeGT3.png",
    images: ["assets/products/realmeGT3.png"],
    categoryId: 1,
    subCategoryId: 105
  },
  {
    id: 22,
    name: "Realme 11 Pro",
    brand: "Realme",
    price: 999,
    oldPrice: 1099,
    discount: 9,
    rating: 4.4,
    ratingCount: 330,
    views: 1900,
    image: "assets/products/realme11pro.png",
    images: ["assets/products/realme11pro.png"],
    categoryId: 1,
    subCategoryId: 105
  },
  {
    id: 23,
    name: "Realme 10",
    brand: "Realme",
    price: 799,
    oldPrice: 899,
    discount: 12,
    rating: 4.3,
    ratingCount: 210,
    views: 1500,
    image: "assets/products/realme10.png",
    images: ["assets/products/realme10.png"],
    categoryId: 1,
    subCategoryId: 105
  },
  {
    id: 24,
    name: "Realme C55",
    brand: "Realme",
    price: 699,
    oldPrice: 799,
    discount: 13,
    rating: 4.2,
    ratingCount: 180,
    views: 1200,
    image: "assets/products/realmeC55.png",
    images: ["assets/products/realmeC55.png"],
    categoryId: 1,
    subCategoryId: 105
  },
  {
    id: 25,
    name: "Realme C33",
    brand: "Realme",
    price: 599,
    oldPrice: 699,
    discount: 12,
    rating: 4.1,
    ratingCount: 140,
    views: 900,
    image: "assets/products/realmeC33.png",
    images: ["assets/products/realmeC33.png"],
    categoryId: 1,
    subCategoryId: 105
  }
]




  getAllProducts(): Product[] {
    return this.products;
  }
}
