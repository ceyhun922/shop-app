import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { SubCategory } from 'src/app/core/models/subcategory';
import { CategoryService } from 'src/app/core/services/category.service';
import { SubCategoryService } from 'src/app/core/services/subcategory.service';

@Component({
  selector: 'app-sidebar-categories',
  templateUrl: './sidebar-categories.component.html',
  styleUrls: ['./sidebar-categories.component.scss']
})
export class SidebarCategoriesComponent implements OnInit {

  categories: Category[] = [];
  subs: SubCategory[] = [];

  showAll = false;
  activeCategory: Category | null = null;
  panelTop: number = 0;
  lock = false;

  constructor(
    private categoryService: CategoryService,
    private subService: SubCategoryService
  ) {}

  ngOnInit(): void {
    // KATEQORİYALARI SERVİSDƏN ÇƏKİRİK
    this.categories = this.categoryService.getAll();
  }

  get visibleCategories() {
    return this.showAll ? this.categories : this.categories.slice(0, 12);
  }

  toggleAll() {
    this.showAll = !this.showAll;
  }

openCategory(cat: Category, event: MouseEvent) {
  this.activeCategory = cat;

  // ⬇⬇⬇ Əsas düzəliş — TS-ə deyirik ki id boş deyil
  this.subs = this.subService.getByCategory(cat.id!);

  const target = event.target as HTMLElement;
  this.panelTop =
    target.getBoundingClientRect().top -
    target.parentElement!.getBoundingClientRect().top;

  this.lock = true;
  setTimeout(() => (this.lock = false), 80);
}


  closePanel() {
    if (!this.lock) this.activeCategory = null;
  }

  closeAll() {
    if (!this.lock) this.activeCategory = null;
  }
}
