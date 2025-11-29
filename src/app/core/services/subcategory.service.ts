import { Injectable } from "@angular/core";
import { SubCategory } from "../models/subcategory";

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

private subs: SubCategory[] = [
  // 1 — TELEFONLAR
  { id: 101, name: "iPhone", slug: "iphone", categoryId: 1 },
  { id: 102, name: "Samsung", slug: "samsung", categoryId: 1 },
  { id: 103, name: "Xiaomi", slug: "xiaomi", categoryId: 1 },
  { id: 104, name: "Huawei", slug: "huawei", categoryId: 1 },
  { id: 105, name: "Realme", slug: "realme", categoryId: 1 },

  // 2 — KOMPÜTERLƏR
  { id: 201, name: "Notbuklar", slug: "laptops", categoryId: 2 },
  { id: 202, name: "Masaüstü PC", slug: "desktops", categoryId: 2 },
  { id: 203, name: "Monitorlar", slug: "monitors", categoryId: 2 },
  { id: 204, name: "Gaming PC", slug: "gaming-pc", categoryId: 2 },
  { id: 205, name: "PC aksessuarları", slug: "pc-accessories", categoryId: 2 },

  // 3 — MƏİŞƏT TEXNIKASI
  { id: 301, name: "Mətbəx texnikası", slug: "kitchen", categoryId: 3 },
  { id: 302, name: "Ev təmizliyi", slug: "cleaning", categoryId: 3 },
  { id: 303, name: "İsitmə & Soyutma", slug: "climate", categoryId: 3 },
  { id: 304, name: "Paltaryuyan", slug: "washing", categoryId: 3 },
  { id: 305, name: "Qabyuyan", slug: "dishwasher", categoryId: 3 },

  // 4 — GEYIM
  { id: 401, name: "Kişi geyimləri", slug: "men", categoryId: 4 },
  { id: 402, name: "Qadın geyimləri", slug: "women", categoryId: 4 },
  { id: 403, name: "Uşaq geyimləri", slug: "kids", categoryId: 4 },
  { id: 404, name: "Ayaqqabılar", slug: "shoes", categoryId: 4 },
  { id: 405, name: "Aksesuarlar", slug: "fashion-accessories", categoryId: 4 },

  // 5 — AKSESUARLAR
  { id: 501, name: "Qulaqlıqlar", slug: "headphones", categoryId: 5 },
  { id: 502, name: "Powerbank", slug: "powerbank", categoryId: 5 },
  { id: 503, name: "Smart saatlar", slug: "smartwatch", categoryId: 5 },
  { id: 504, name: "Telefon aksesuarları", slug: "phone-accessories", categoryId: 5 },
  { id: 505, name: "Kabel & Adapterlər", slug: "cables", categoryId: 5 }
];




  getByCategory(categoryId: number): SubCategory[] {
    return this.subs.filter(s => s.categoryId === categoryId);
  }

  getAll(): SubCategory[] {
    return this.subs;
  }
}
