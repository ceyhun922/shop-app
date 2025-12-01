import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../core/models/product';
import { ProductService } from '../../core/services/product.service';
import { SubCategoryService } from '../../core/services/subcategory.service';
import { CategoryService } from '../../core/services/category.service';
import { SortService } from 'src/app/core/services/sort.service';

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
    private router: Router,
    private categoryService: CategoryService,
    private subService: SubCategoryService,
    private sortService: SortService
  ) {}

  ngOnInit(): void {

    // 🔥 1) bütün məhsullar
    this.products = this.ps.getAllProducts();

    // 🔥 2) queryParams-ları dinlə
    this.route.queryParams.subscribe(params => {

      let result = [...this.products]; // copy

      // =====================================================
      // 0) Category slug ( /products?category=komputerler )
      // =====================================================
      if (params["category"]) {
        const cat = this.categoryService.getBySlug(params["category"]);
        if (cat) {
          result = result.filter(p => p.categoryId === cat.id);
        }
      }

      // =====================================================
      // 0.1) Subcategory slug ( /products?sub=laptops )
      // =====================================================
      if (params["sub"]) {
        const sub = this.subService.getAll().find(s => s.slug === params["sub"]);
        if (sub) {
          result = result.filter(p => p.subCategoryId === sub.id);
        }
      }

      // =====================================================
      // 1) Multi Category ( /products?categoryId=1,2,3 )
      // =====================================================
      if (params['categoryId']) {
        const ids = params['categoryId']
          .split(',')
          .map((x: string) => Number(x));

        result = result.filter(p => ids.includes(p.categoryId));
      }

      // =====================================================
      // 2) Multi SubCategory ( /products?subId=5,7 )
      // =====================================================
      if (params['subId']) {
        const subIds = params['subId']
          .split(',')
          .map((x: string) => Number(x));

        result = result.filter(p => subIds.includes(p.subCategoryId));
      }

      // =====================================================
      // 3) Brand ( /products?brand=Apple,Samsung )
      // =====================================================
      if (params['brand']) {
        const brands = params['brand']
          .split(',')
          .map((b: string) => b.toLowerCase());

        result = result.filter(p =>
          p.brand && brands.includes(p.brand.toLowerCase())
        );
      }

      // =====================================================
      // 4) Price Range (min/max)
      // =====================================================
      if (params['min']) result = result.filter(p => p.price >= Number(params['min']));
      if (params['max']) result = result.filter(p => p.price <= Number(params['max']));

      // =====================================================
      // 5) SEARCH
      // =====================================================
      const search = params["search"]?.toString().trim().toLowerCase() || "";
      this.searchValue = search;

      if (search.length > 0) {
        result = result.filter(p =>
          p.name.toLowerCase().includes(search) ||
          (p.brand && p.brand.toLowerCase().includes(search))
        );
      }

      // =====================================================
      // 6) SORT (ƏN VACİB HİSSƏ)
      // =====================================================
      if (params['sort']) {
        const sortKey = params['sort'];
        const opt = this.sortService.getAll().find(s => s.key === sortKey);

        if (opt) {

          // ⭐ normal ASC/DESC sort
          if (opt.type !== 'none' && opt.field) {
            const field = opt.field!;
            result.sort((a: any, b: any) => {
              if (opt.type === 'asc') return a[field] - b[field];
              if (opt.type === 'desc') return b[field] - a[field];
              return 0;
            });
          }

          // ⭐ xüsusi sortlar
          if (sortKey === 'top') {
            result = result.filter(p => p.tags?.includes("top"));
          }

          if (sortKey === 'new') {
            result = result.filter(p => p.tags?.includes("new"));
          }
        }
      }

      // =====================================================
      // FINAL NƏTİCƏ
      // =====================================================
      this.filteredProducts = result;

      // SEARCH highlight
      setTimeout(() => {
        const el = document.querySelector(".search-highlight");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);

    });
  }

  // ============================================================
  // SORT BAR → URL yenilə (sortChanged event)
  // ============================================================
  onSort(key: string) {
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: { sort: key }
    });
  }

}
