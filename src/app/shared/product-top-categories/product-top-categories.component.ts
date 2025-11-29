import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/core/models/category";
import { CategoryService } from "src/app/core/services/category.service";
import { ProductService } from "src/app/core/services/product.service";


@Component({
  selector: 'app-product-top-categories',
  templateUrl: './product-top-categories.component.html',
  styleUrls: ['./product-top-categories.component.scss']
})
export class ProductTopCategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {

    const allCategories = this.categoryService.getAll();
    const allProducts = this.productService.getAllProducts();

    // 🔥 məhsulu olan kateqoriyalar:
    this.categories = allCategories.filter(cat =>
      allProducts.some(p => p.categoryId === cat.id)
    );
  }
}
