import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

private categories: Category[] = [
  { id: 1, name: "Elektronika", slug: "elektronika", icon: "⚡" },
  { id: 2, name: "Ev & Yaşam", slug: "ev-yasam", icon: "🏡" },
  { id: 3, name: "Gözəllik & Baxım", slug: "gozellik-baxim", icon: "💄" },
  { id: 4, name: "Moda", slug: "moda", icon: "👗" },
  { id: 5, name: "Bağ & Alətlər", slug: "bag-aletler", icon: "🛠" }
];


  // ================================
  // GET ALL
  // ================================
  getAll(): Category[] {
    return this.categories;
  }

  // ================================
  // GET BY ID
  // ================================
  getById(id: number): Category | undefined {
    return this.categories.find(c => c.id === id);
  }

  // ================================
  // GET BY SLUG  (telefonlar, geyim vs.)
  // ================================
  getBySlug(slug: string): Category | undefined {
    return this.categories.find(c => c.slug === slug);
  }
}
