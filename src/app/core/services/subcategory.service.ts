import { Injectable } from "@angular/core";
import { SubCategory } from "../models/subcategory";

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

private subs: SubCategory[] = [
  // Elektronika
  { id: 1, name: "Smartfonlar", slug: "smartfonlar", categoryId: 1 },
  { id: 2, name: "Noutbuklar", slug: "noutbuklar", categoryId: 1 },
  { id: 3, name: "Televizorlar", slug: "televizorlar", categoryId: 1 },

  // Ev & Yaşam
  { id: 4, name: "Mətbəx", slug: "metbex", categoryId: 2 },
  { id: 5, name: "Mebel", slug: "mebel", categoryId: 2 },
  { id: 6, name: "Dekor", slug: "dekor", categoryId: 2 },

  // Gözəllik & Baxım
  { id: 7, name: "Parfüm", slug: "parfum", categoryId: 3 },
  { id: 8, name: "Makiyaj", slug: "makiyaj", categoryId: 3 },
  { id: 9, name: "Dəri Baxımı", slug: "deri-baximi", categoryId: 3 },

  // Moda
  { id: 10, name: "Kişi Geyim", slug: "kisi-geyim", categoryId: 4 },
  { id: 11, name: "Qadın Geyim", slug: "qadin-geyim", categoryId: 4 },
  { id: 12, name: "Ayaqqabılar", slug: "ayaqqabilar", categoryId: 4 },

  // Bağ & Alətlər
  { id: 13, name: "Elektrik Alətləri", slug: "elektrik-aletleri", categoryId: 5 },
  { id: 14, name: "Bağ Avadanlıqları", slug: "bag-avadanliqlari", categoryId: 5 },
  { id: 15, name: "Mühəndislik Alətləri", slug: "muhendislik-aletleri", categoryId: 5 }
];




  getByCategory(categoryId: number): SubCategory[] {
    return this.subs.filter(s => s.categoryId === categoryId);
  }

  getAll(): SubCategory[] {
    return this.subs;
  }
}
