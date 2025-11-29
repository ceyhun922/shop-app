import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

private categories: Category[] = [
  { id: 1, name: "Telefonlar", icon: "📱", slug: "telefonlar" },
  { id: 2, name: "Kompyuterlər", icon: "💻", slug: "komputerler" },
  { id: 3, name: "Məişət texnikası", icon: "🔌", slug: "meiset" },
  { id: 4, name: "Geyim", icon: "👕", slug: "geyim" },
  { id: 5, name: "Aksesuarlar", icon: "🎧", slug: "aksesuar" }
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
