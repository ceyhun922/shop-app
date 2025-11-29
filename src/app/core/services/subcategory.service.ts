import { Injectable } from "@angular/core";
import { SubCategory } from "../models/subcategory";

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

private subs: SubCategory[] = [

  // TELEFONLAR → 6
  { id: 601, name: "iPhone", slug: "iphone", categoryId: 6 },
  { id: 602, name: "Samsung", slug: "samsung", categoryId: 6 },
  { id: 603, name: "Xiaomi", slug: "xiaomi", categoryId: 6 },
  { id: 604, name: "Huawie", slug: "Huawie", categoryId: 6 },

  // KOMPYUTERLƏR → 8
  { id: 801, name: "Notbuklar", slug: "laptops", categoryId: 8 },
  { id: 802, name: "Masaüstü PC", slug: "desktop", categoryId: 8 },
  { id: 803, name: "Monitorlar", slug: "monitors", categoryId: 8 },

  // MƏİŞƏT TEXNIKASI → 7
  { id: 704, name: "Mətbəx üçün kiçik texnika", slug: "kitchen-small", categoryId: 7 },
  { id: 705, name: "Ev üçün texnika", slug: "home-small", categoryId: 7 },

  // DÜKAN BAZARLIQ → 4
  { id: 401, name: "Meyvə və tərəvəz", slug: "fruits", categoryId: 4 },
  { id: 403, name: "Süd məhsulları", slug: "milk", categoryId: 4 },
  { id: 404, name: "Toyuq və ət", slug: "chicken", categoryId: 4 }
];

  getByCategory(categoryId: number): SubCategory[] {
    return this.subs.filter(s => s.categoryId === categoryId);
  }

  getAll(): SubCategory[] {
    return this.subs;
  }
}
