import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [

    // ===========================
    // 🔥 CATEGORY 6 → TELEFONLAR
    // ===========================
    {
      id: 1,
      name: "iPhone 14 Pro Max 256GB",
      image: "assets/products/iphone14promax.png",
      images: [
        "assets/products/iphone14promax.png",
        "assets/products/iphone12.png",
        "assets/products/iPhone_15.webp",
        "assets/products/iphone15pro.webp"
      ],
      categoryId: 6,
      subCategoryId: 601,
      price: 3299,
      oldPrice: 3599,
      discount: 8,
      rating: 4.9,
      ratingCount: 312,
      tags: ["top", "en-cox-satilan"]
    },
    {
      id: 2,
      name: "Samsung S23 Ultra 12/512GB",
      image: "assets/products/s23ultra.png",
      categoryId: 6,
      subCategoryId: 602,
      price: 2799,
      oldPrice: 3299,
      discount: 15,
      rating: 4.8,
      ratingCount: 198,
      tags: ["mega-endirim"]
    },
    {
      id: 3,
      name: "Xiaomi 13 Pro 12/256",
      image: "assets/products/xiaomi13pro.png",
      categoryId: 6,
      subCategoryId: 603,
      price: 1699,
      oldPrice: 1999,
      discount: 12,
      rating: 4.7,
      ratingCount: 144
    },
    {
      id: 4,
      name: "iPhone 12 128GB",
      image: "assets/products/iphone12.png",
      categoryId: 6,
      subCategoryId: 601,
      price: 1499,
      oldPrice: 1799,
      discount: 17,
      rating: 4.6,
      ratingCount: 612
    },
    {
      id: 5,
      name: "Huawie",
      image: "assets/products/Huawie.png",
      categoryId: 6,
      subCategoryId: 604,
      price: 1,
      oldPrice: 2,
      discount: 17,
      rating: 4.6,
      ratingCount: 612
    },

    // ===========================
    // 💻 CATEGORY 8 → KOMPÜTERLƏR
    // ===========================
    {
      id: 5,
      name: "MacBook Air M2 16/512GB",
      image: "assets/products/macbookairm2.png",
      categoryId: 8,
      subCategoryId: 801,
      price: 2999,
      oldPrice: 3299,
      discount: 10,
      rating: 5.0,
      ratingCount: 99
    },
    {
      id: 6,
      name: "Asus ROG Strix G15",
      image: "assets/products/asusrog.png",
      categoryId: 8,
      subCategoryId: 801,
      price: 2599,
      oldPrice: 2899,
      discount: 10,
      rating: 4.9,
      ratingCount: 201
    },

    // MONITORLAR
    {
      id: 7,
      name: "Xiaomi 34 Curved Monitor",
      image: "assets/products/xiaomi34.png",
      categoryId: 8,
      subCategoryId: 803,
      price: 649,
      oldPrice: 999,
      discount: 35,
      rating: 4.8,
      ratingCount: 19
    },

    // ===========================
    // 📺 CATEGORY 9 → TV-lər
    // ===========================
    {
      id: 8,
      name: "LG 55'' OLED Smart TV",
      image: "assets/products/lg55.png",
      categoryId: 9,
      subCategoryId: 901,
      price: 1899,
      oldPrice: 2199,
      discount: 12,
      rating: 5,
      ratingCount: 84
    },
    {
      id: 9,
      name: "Samsung QLED 65''",
      image: "assets/products/samsung65.png",
      categoryId: 9,
      subCategoryId: 901,
      price: 2299,
      oldPrice: 2699,
      discount: 15,
      rating: 4.9,
      ratingCount: 90
    },

    // ===========================
    // 🔌 CATEGORY 7 → MƏİŞƏT TEXN.
    // ===========================
    {
      id: 10,
      name: "LG Mikrodalğalı soba",
      image: "assets/products/micro-lg.png",
      categoryId: 7,
      subCategoryId: 705,
      price: 259,
      oldPrice: 350,
      discount: 26,
      rating: 4.7,
      ratingCount: 57
    },
    {
      id: 11,
      name: "Philips blender seti",
      image: "assets/products/blender.png",
      categoryId: 7,
      subCategoryId: 704,
      price: 149,
      oldPrice: 199,
      discount: 25,
      rating: 4.8,
      ratingCount: 123
    },

    // ===========================
    // 🛒 CATEGORY 4 → DÜKAN BAZARLIQ
    // ===========================
    {
      id: 12,
      name: "Qala kartof 5kg",
      image: "assets/products/potato.png",
      categoryId: 4,
      subCategoryId: 401,
      price: 3.49,
      rating: 4.6,
      ratingCount: 42
    },
    {
      id: 13,
      name: "Təzə pomidor 1kg",
      image: "assets/products/tomato.png",
      categoryId: 4,
      subCategoryId: 401,
      price: 2.99,
      rating: 4.7,
      ratingCount: 70
    },
    {
      id: 14,
      name: "Süd 1L",
      image: "assets/products/milk.png",
      categoryId: 4,
      subCategoryId: 403,
      price: 1.49,
      rating: 4.9,
      ratingCount: 150
    },
    {
      id: 15,
      name: "Toyuq budu 1kg",
      image: "assets/products/chicken.png",
      categoryId: 4,
      subCategoryId: 404,
      price: 6.99,
      rating: 4.8,
      ratingCount: 110
    }
  ];

  getAllProducts(): Product[] {
    return this.products;
  }
}
