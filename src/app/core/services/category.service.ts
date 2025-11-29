import { Injectable } from "@angular/core";
import { Category } from "../models/category";

@Injectable({ providedIn: 'root' })
export class CategoryService {

  private categories: Category[] = [
    { id: 6, slug: "telefonlar", name: "Telefonlar", icon: "📱" },
    { id: 8, slug: "komputerler", name: "Kompyuterlər", icon: "💻" },
    { id: 7, slug: "meiset", name: "Məişət texnikası", icon: "🔌" },
    { id: 4, slug: "market", name: "Dükan bazarlıq", icon: "🛒" },
    { id: 9, slug: "tv", name: "TV - Audio", icon: "📺" },
    { id: 1, slug: "geiyim", name: "Geyim", icon: "👕" },
    { id: 2, slug: "idman", name: "Idman", icon: "🏋️‍♂️" },
    { id: 3, slug: "mebel", name: "Mebel", icon: "🛋️" },
    { id: 5, slug: "usaq", name: "Uşaq məhsulları", icon: "🍼" },
    { id: 10, slug: "avto", name: "Avto məhsullar", icon: "🚗" },
  ];

  getAll() { return this.categories; }
  getBySlug(slug: string) {
    return this.categories.find(c => c.slug === slug);
  }
}
