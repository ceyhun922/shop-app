import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/models/product';
import { ProductService } from '../../core/services/product.service';
import { SubCategoryService } from '../../core/services/subcategory.service';
import { SortService } from 'src/app/core/services/sort.service';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  searchValue: string = "";

  constructor(
    private ps: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private subService: SubCategoryService,
    private sortService: SortService
  ) {}

  ngOnInit(): void {

    // 🔥 Bütün məhsullar
    this.products = this.ps.getAllProducts();

    // 🔥 QUERY PARAMLARI DİNLƏ
    this.route.queryParams.subscribe(params => {

      let result = [...this.products];

      // ==============================
      // 1) MULTI CATEGORY (categoryId=1,2,3)
      // ==============================
      if (params['categoryId']) {
        const ids = params['categoryId']
          .split(',')
          .map((x: string) => Number(x));

        result = result.filter(p => ids.includes(p.categoryId));
      }

      // ==============================
      // 2) MULTI SUB CATEGORY (subId=5,7)
      // ==============================
      if (params['subId']) {
        const subIds = params['subId']
          .split(',')
          .map((x: string) => Number(x));

        result = result.filter(p => subIds.includes(p.subCategoryId));
      }

      // ==============================
      // 3) MULTI BRAND (brand=Apple,Samsung)
      // ==============================
      if (params['brand']) {
        const brands = params['brand'].split(',').map((b: string) => b.toLowerCase());
        result = result.filter(p => p.brand && brands.includes(p.brand.toLowerCase()));
      }

      // ==============================
      // 4) PRICE RANGE (min=10&max=100)
      // ==============================
      if (params['min']) {
        result = result.filter(p => p.price >= Number(params['min']));
      }

      if (params['max']) {
        result = result.filter(p => p.price <= Number(params['max']));
      }

      // ==============================
      // 5) SEARCH
      // ==============================
      const search = params["search"]?.toString().trim().toLowerCase() || "";
      this.searchValue = search;

      if (search.length > 0) {
        result = result.filter(p =>
          p.name.toLowerCase().includes(search) ||
          (p.brand && p.brand.toLowerCase().includes(search))
        );
      }

      // ==============================
      // NƏTİCƏYİ TƏYİN ET
      // ==============================
      this.filteredProducts = result;

      // ==============================
      // SEARCH → HIGHLIGHT SCROLL
      // ==============================
      setTimeout(() => {
        const el = document.querySelector(".search-highlight");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);

    });

  }
}
