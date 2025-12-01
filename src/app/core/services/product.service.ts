import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [

  // ============================
  // ELEKTRONİKA
  // ============================

  // 1) iPhone 15 Pro — 3 şəkil
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 2899,
    oldPrice: 3199,
    discount: 10,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35d1?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=800&q=80"
    ],
    categoryId: 1,
    subCategoryId: 1,
    brand: "Apple",
    rating: 4.9,
    ratingCount: 1200,
    views: 23000,
    badge: "Top",
    tags: ["iphone", "apple", "smartphone"],
    isBestSeller: true,
    isNew: true,
    isFavorite: false,
    description: "Titanium gövdə və A17 Pro çipi ilə Apple-ın ən güclü telefonu."
  },

  // 2) Samsung S23 Ultra — 2 şəkil
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 2499,
    oldPrice: 2799,
    discount: 12,
    images: [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35d1?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=800&q=80"
    ],
    categoryId: 1,
    subCategoryId: 1,
    brand: "Samsung",
    rating: 4.8,
    ratingCount: 980,
    views: 18500,
    badge: "Sale",
    tags: ["android", "samsung"],
    isDailySale: true,
    isFavorite: false,
    description: "200MP kamera və güclü performans."
  },

  // 3) Xiaomi 14 — 1 şəkil
  {
    id: 3,
    name: "Xiaomi 14",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=800&q=80"
    ],
    categoryId: 1,
    subCategoryId: 1,
    brand: "Xiaomi",
    rating: 4.7,
    ratingCount: 600,
    views: 9000,
    badge: "Hot",
    tags: ["xiaomi", "android"],
    isMegaSale: true,
    isFavorite: false,
    description: "Leica kamera ilə güclü foto performansı."
  },

  // ============================
  // NOUTBUKLAR
  // ============================

  // 4) MacBook Air M3 — 3 şəkil
  {
    id: 4,
    name: "MacBook Air M3",
    price: 2599,
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=800&q=80"
    ],
    categoryId: 1,
    subCategoryId: 2,
    brand: "Apple",
    rating: 4.9,
    ratingCount: 700,
    views: 15000,
    badge: "Top",
    tags: ["macbook", "apple", "m3"],
    isTop10: true,
    isFavorite: false,
    description: "M3 çipi ilə güclü performans."
  },

  // 5) ASUS ROG Strix — 4 şəkil
  {
    id: 5,
    name: "ASUS ROG Strix G16",
    price: 2999,
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1587202372775-98908b3a79b7?auto=format&w=800&q=80"
    ],
    categoryId: 1,
    subCategoryId: 2,
    brand: "ASUS",
    rating: 4.7,
    ratingCount: 410,
    views: 11000,
    badge: "Best",
    tags: ["gaming", "laptop", "rog"],
    isBestSeller: true,
    isFavorite: false,
    description: "RTX seriyalı GPU ilə yüksək FPS."
  },

  // 6) Lenovo Legion — 2 şəkil
  {
    id: 6,
    name: "Lenovo Legion 5",
    price: 2199,
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&w=800&q=80"
    ],
    categoryId: 1,
    subCategoryId: 2,
    brand: "Lenovo",
    rating: 4.8,
    ratingCount: 350,
    views: 10000,
    isFavorite: false,
    description: "Oyun və iş üçün güclü noutbuk."
  },

  // ============================
  // TV-lər
  // ============================

  // 7) Samsung QLED — 2 şəkil
  {
    id: 7,
    name: "Samsung QLED 55",
    price: 1799,
    images: [
      "https://images.unsplash.com/photo-1587825140708-6b850a16b4f0?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1587574293031-23a6fc0fa4b1?auto=format&w=800&q=80"
    ],
    categoryId: 1,
    subCategoryId: 3,
    brand: "Samsung",
    rating: 4.7,
    ratingCount: 512,
    views: 8000,
    tags: ["qled", "tv"],
    isFavorite: false,
    description: "QLED panel, HDR10+ dəstəyi."
  },

  // 8) LG OLED — 3 şəkil
  {
    id: 8,
    name: "LG OLED C3 55",
    price: 2399,
    images: [
      "https://images.unsplash.com/photo-1587825140708-6b850a16b4f0?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1555617117-08fda9a08a37?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1587574293031-23a6fc0fa4b1?auto=format&w=800&q=80"
    ],
    categoryId: 1,
    subCategoryId: 3,
    brand: "LG",
    rating: 4.9,
    ratingCount: 680,
    views: 9500,
    badge: "Premium",
    tags: ["oled", "tv"],
    isBestSeller: true,
    isFavorite: false,
    description: "OLED panel ilə sonsuz kontrast."
  },

  // 9) Sony Bravia — 1 şəkil
  {
    id: 9,
    name: "Sony Bravia XR55",
    price: 2299,
    images: [
      "https://images.unsplash.com/photo-1555617117-08fda9a08a37?auto=format&w=800&q=80"
    ],
    categoryId: 1,
    subCategoryId: 3,
    brand: "Sony",
    rating: 4.8,
    ratingCount: 400,
    views: 7000,
    tags: ["sony", "bravia"],
    isFavorite: false,
    description: "Sony XR prosessorlu premium TV."
  },

  // ============================
  // EV & YAŞAM
  // ============================

  // 10) Blender — 1 şəkil
  {
    id: 10,
    name: "Philips Blender",
    price: 129,
    images: [
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&w=800&q=80"
    ],
    categoryId: 2,
    subCategoryId: 4,
    brand: "Philips",
    rating: 4.6,
    ratingCount: 220,
    views: 3000,
    tags: ["kitchen"],
    isFavorite: false,
    description: "Güclü motor və dayanıqlı bıçaqlar."
  },

  // 11) Tefal Airfryer — 2 şəkil
  {
    id: 11,
    name: "Tefal Airfryer",
    price: 199,
    images: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&w=800&q=80"
    ],
    categoryId: 2,
    subCategoryId: 4,
    brand: "Tefal",
    rating: 4.8,
    ratingCount: 410,
    views: 5000,
    isDailySale: true,
    tags: ["airfryer"],
    isFavorite: false,
    description: "Yağsız qızartma texnologiyası."
  },

  // 12) Bosch Mikser — 2 şəkil
  {
    id: 12,
    name: "Bosch Mikser",
    price: 149,
    images: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&w=800&q=80"
    ],
    categoryId: 2,
    subCategoryId: 4,
    brand: "Bosch",
    rating: 4.7,
    ratingCount: 310,
    views: 3200,
    tags: ["mixer"],
    isFavorite: false,
    description: "Gündəlik mətbəx istifadəsi üçün."
  },

  // ============================
  // MEBEL (13-15)
  // ============================

  // 13) Skandinav Masa — 3 şəkil
  {
    id: 13,
    name: "Skandinav Masa",
    price: 399,
    images: [
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1582582621959-d44c9a80d0b2?auto=format&w=800&q=80"
    ],
    categoryId: 2,
    subCategoryId: 5,
    brand: "Ikea",
    rating: 4.6,
    ratingCount: 150,
    views: 2000,
    tags: ["table"],
    isFavorite: false,
    description: "Minimalist skandinav dizayn."
  },

  // 14) Qonaq Divanı — 2 şəkil
  {
    id: 14,
    name: "Qonaq Divanı",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&w=800&q=80",
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&w=800&q=80"
    ],
    categoryId: 2,
    subCategoryId: 5,
    brand: "Bellona",
    rating: 4.8,
    ratingCount: 240,
    views: 4500,
    isBestSeller: true,
    tags: ["sofa"],
    isFavorite: false,
    description: "Rahat və geniş oturacaq."
  },

  // 15) TV Standı — 1 şəkil
  {
    id: 15,
    name: "TV Standı",
    price: 249,
    images: [
      "https://images.unsplash.com/photo-1582582621959-d44c9a80d0b2?auto=format&w=800&q=80"
    ],
    categoryId: 2,
    subCategoryId: 5,
    brand: "Ikea",
    rating: 4.5,
    ratingCount: 180,
    views: 1800,
    tags: ["tv stand"],
    isFavorite: false,
    description: "Modern və dayanıqlı TV masası."
  },
// ============================================
// DEKOR – 16–18
// ============================================

// 16) LED Şam Seti — 2 şəkil
{
  id: 16,
  name: "LED Şam Seti",
  price: 49,
  images: [
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&w=800&q=80"
  ],
  categoryId: 2,
  subCategoryId: 6,
  rating: 4.6,
  ratingCount: 95,
  views: 900,
  tags: ["decor", "light"],
  isFavorite: false,
  description: "Dekor üçün LED işıqlı şam dəsti."
},

// 17) Divar Saatı — 1 şəkil
{
  id: 17,
  name: "Divar Saatı",
  price: 59,
  images: [
    "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&w=800&q=80"
  ],
  categoryId: 2,
  subCategoryId: 6,
  rating: 4.7,
  ratingCount: 120,
  views: 1500,
  isFavorite: false,
  description: "Sakit mexanizmli divar saatı."
},

// 18) Dekor Vaza — 3 şəkil
{
  id: 18,
  name: "Dekor Vaza",
  price: 79,
  images: [
    "https://images.unsplash.com/photo-1616628182507-1c3c2de3d8a1?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1602526216037-bf4d5f4e3a7b?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1582582621959-d44c9a80d0b2?auto=format&w=800&q=80"
  ],
  categoryId: 2,
  subCategoryId: 6,
  rating: 4.4,
  ratingCount: 70,
  views: 800,
  tags: ["vase"],
  isFavorite: false,
  description: "Modern keramika dekor vaza."
},


// ============================================
// GÖZƏLLİK – PARFÜM (19–21)
// ============================================

// 19) Dior Sauvage — 3 şəkil
{
  id: 19,
  name: "Dior Sauvage",
  price: 199,
  images: [
    "https://images.unsplash.com/photo-1600185365483-26d7a6f5e01c?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1585386959984-a4155224a1f6?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1601924582971-c0eac389f87f?auto=format&w=800&q=80"
  ],
  categoryId: 3,
  subCategoryId: 7,
  brand: "Dior",
  rating: 4.9,
  ratingCount: 1500,
  views: 9000,
  isBestSeller: true,
  tags: ["perfume"],
  isFavorite: false,
  description: "Əfsanə kişi ətiri."
},

// 20) Creed Aventus — 1 şəkil
{
  id: 20,
  name: "Creed Aventus",
  price: 349,
  images: [
    "https://images.unsplash.com/photo-1601924582971-c0eac389f87f?auto=format&w=800&q=80"
  ],
  categoryId: 3,
  subCategoryId: 7,
  brand: "Creed",
  rating: 4.8,
  ratingCount: 900,
  views: 7500,
  tags: ["niche"],
  isFavorite: false,
  description: "Premium niş kateqoriya parfüm."
},

// 21) Versace Dylan Blue — 2 şəkil
{
  id: 21,
  name: "Versace Dylan Blue",
  price: 129,
  images: [
    "https://images.unsplash.com/photo-1600185365483-26d7a6f5e01c?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&w=800&q=80"
  ],
  categoryId: 3,
  subCategoryId: 7,
  brand: "Versace",
  rating: 4.7,
  ratingCount: 620,
  views: 5000,
  isFavorite: false,
  description: "Fresh və blue tərzli kişi ətri."
},


// ============================================
// MAKİYAJ – (22–24)
// ============================================

// 22) Maybelline Mascara — 2 şəkil
{
  id: 22,
  name: "Maybelline Mascara",
  price: 19,
  images: [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&w=800&q=80"
  ],
  categoryId: 3,
  subCategoryId: 8,
  brand: "Maybelline",
  rating: 4.6,
  ratingCount: 300,
  views: 2700,
  tags: ["mascara"],
  isFavorite: false,
  description: "Həcmləndirici premium mascara."
},

// 23) L'Oréal Lipstick — 1 şəkil
{
  id: 23,
  name: "L'Oréal Lipstick",
  price: 15,
  images: [
    "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&w=800&q=80"
  ],
  categoryId: 3,
  subCategoryId: 8,
  brand: "L'Oréal",
  rating: 4.5,
  ratingCount: 280,
  views: 2600,
  isNew: true,
  isFavorite: false,
  description: "Qalıcı və yumşaq dodaq boyası."
},

// 24) Fenty Highlighter — 3 şəkil
{
  id: 24,
  name: "Fenty Highlighter",
  price: 49,
  images: [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&w=800&q=80"
  ],
  categoryId: 3,
  subCategoryId: 8,
  brand: "Fenty",
  rating: 4.8,
  ratingCount: 350,
  views: 3400,
  badge: "Premium",
  isFavorite: false,
  description: "Rihanna imzalı highlighter."
},


// ============================================
// DƏRİ BAXIMI – (25–27)
// ============================================

// 25) Cerave Moisturizer — 1 şəkil
{
  id: 25,
  name: "Cerave Moisturizer",
  price: 22,
  images: [
    "https://images.unsplash.com/photo-1585386959984-a4155224a1f6?auto=format&w=800&q=80"
  ],
  categoryId: 3,
  subCategoryId: 9,
  brand: "Cerave",
  rating: 4.7,
  ratingCount: 410,
  views: 3100,
  isFavorite: false,
  description: "Dəri baryerini yeniləyən nəmləndirici."
},

// 26) La Roche Serum — 2 şəkil
{
  id: 26,
  name: "La Roche Posay Serum",
  price: 35,
  images: [
    "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1601924582971-c0eac389f87f?auto=format&w=800&q=80"
  ],
  categoryId: 3,
  subCategoryId: 9,
  brand: "La Roche-Posay",
  rating: 4.8,
  ratingCount: 500,
  views: 4000,
  isFavorite: false,
  description: "Hipersensitiv dəri üçün ideal."
},

// 27) The Ordinary Niacinamide — 1 şəkil
{
  id: 27,
  name: "The Ordinary Niacinamide",
  price: 18,
  images: [
    "https://images.unsplash.com/photo-1600185365483-26d7a6f5e01c?auto=format&w=800&q=80"
  ],
  categoryId: 3,
  subCategoryId: 9,
  brand: "The Ordinary",
  rating: 4.6,
  ratingCount: 350,
  views: 2200,
  isFavorite: false,
  description: "10% niacinamide ilə məsamə azaldır."
},


// ============================================
// MODA — KİŞİ (28–30)
// ============================================

// 28) Kişi Köynək — 2 şəkil
{
  id: 28,
  name: "Kişi Köynək",
  price: 39,
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1520975922111-4442c9024ab1?auto=format&w=800&q=80"
  ],
  categoryId: 4,
  subCategoryId: 10,
  rating: 4.6,
  ratingCount: 200,
  views: 1500,
  isFavorite: false,
  description: "Gündəlik kişi köynəyi."
},

// 29) Kişi Şalvar — 1 şəkil
{
  id: 29,
  name: "Kişi Şalvar",
  price: 49,
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&w=800&q=80"
  ],
  categoryId: 4,
  subCategoryId: 10,
  rating: 4.5,
  ratingCount: 180,
  views: 1200,
  isFavorite: false,
  description: "Rahat və gündəlik istifadə üçün."
},

// 30) Kişi Sviter — 2 şəkil
{
  id: 30,
  name: "Kişi Sviter",
  price: 59,
  images: [
    "https://images.unsplash.com/photo-1535043934128-cf0b28d52f85?auto=format&w=800&q=80",
    "https://images.unsplash.com/photo-1520975922111-4442c9024ab1?auto=format&w=800&q=80"
  ],
  categoryId: 4,
  subCategoryId: 10,
  rating: 4.7,
  ratingCount: 160,
  views: 1100,
  isFavorite: false,
  description: "Qış üçün isti və rahat sviter."
},




  ];



  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id) || null;
  }

}
