import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/models/product';
import { ProductService } from '../../core/services/product.service';
import { CategoryService } from '../../core/services/category.service';
import { SubCategoryService } from '../../core/services/subcategory.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  selectedSort: string = "recommended";

  constructor(
    private ps: ProductService,
    private route: ActivatedRoute,
    private catService: CategoryService,
    private subService: SubCategoryService
  ) {}

  ngOnInit(): void {

    // bütün məhsullar
    this.products = this.ps.getAllProducts();

    // QUERY PARAMLARI DİNAMİK OXU
    this.route.queryParams.subscribe(params => {

      const catId = Number(params['categoryId']);
      const subId = Number(params['subId']);

      const catSlug = params['category'];
      const subSlug = params['sub'];

      // default → bütün məhsullar
      let result = [...this.products];

      // --------------------------
      // 1️⃣ CATEGORY FILTER (ID və ya SLUG)
      // --------------------------
      if (catId) {
        result = result.filter(p => p.categoryId === catId);
      }
      else if (catSlug) {
        const cat = this.catService.getBySlug(catSlug);
        if (cat) {
          result = result.filter(p => p.categoryId === cat.id);
        }
      }

      // --------------------------
      // 2️⃣ SUBCATEGORY FILTER (ID və ya SLUG)
      // --------------------------
      if (subId) {
        result = result.filter(p => p.subCategoryId === subId);
      }
      else if (subSlug) {
        const sub = this.subService.getAll().find(s => s.slug === subSlug);
        if (sub) {
          result = result.filter(p => p.subCategoryId === sub.id);
        }
      }

      this.filteredProducts = result;
      console.log("Filtered:", result);
    });

  }

  // --------------------------
  // SORTING
  // --------------------------
  sortProducts() {
    switch (this.selectedSort) {

      case "low":
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;

      case "high":
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;

      case "new":
        this.filteredProducts = this.filteredProducts.filter(p => p.isNew);
        break;

      case "top":
        this.filteredProducts = this.filteredProducts.filter(p => p.isBestSeller);
        break;

      case "rated":
        this.filteredProducts.sort((a, b) => b.ratingCount - a.ratingCount);
        break;

      default:
        // recommended → əsas məhsullar siyahısı
        this.filteredProducts = [...this.products];
    }
  }

}
