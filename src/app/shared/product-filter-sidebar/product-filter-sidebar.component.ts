import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { SubCategoryService } from 'src/app/core/services/subcategory.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-filter-sidebar',
  templateUrl: './product-filter-sidebar.component.html',
  styleUrls: ['./product-filter-sidebar.component.scss']
})
export class ProductFilterSidebarComponent implements OnInit {

  // PANEL Açıq/bağlı
  openCat = true;
  openSub = true;
  openBrand = true;
  openPrice = true;

  // CATEGORY
  categories: any[] = [];
  filteredCategories: any[] = [];
  catSearch = "";

  // SUBCATEGORY
  subCategories: any[] = [];
  filteredSubCategories: any[] = [];
  subSearch = "";

  // BRAND
  brands: any[] = [];
  filteredBrands: any[] = [];
  brandSearch = "";

  // PRICE
  minPrice: number | null = null;
  maxPrice: number | null = null;

  constructor(
    private catService: CategoryService,
    private subService: SubCategoryService,
    private prodService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // CATEGORIES
    this.categories = this.catService.getAll().map(c => ({
      ...c,
      selected: false
    }));
    this.filteredCategories = [...this.categories];

    // SUBCATEGORIES
    this.subCategories = this.subService.getAll().map(s => ({
      ...s,
      selected: false
    }));
    this.filteredSubCategories = [...this.subCategories];

    // BRANDS (unique)
    this.brands = [...new Set(
      this.prodService.getAllProducts().map(p => p.brand)
    )]
      .filter(Boolean)
      .map(b => ({ name: b, selected: false }));

    this.filteredBrands = [...this.brands];

    // URL sync
    this.route.queryParams.subscribe(params => {

      // CATEGORY SYNC
      const catIds = params['categoryId']?.split(',') ?? [];
      this.categories.forEach(c => c.selected = catIds.includes(String(c.id)));

      // SUBCATEGORY SYNC
      const subIds = params['subId']?.split(',') ?? [];
      this.subCategories.forEach(s => s.selected = subIds.includes(String(s.id)));

      // BRAND SYNC
      const brandList = params['brand']?.split(',') ?? [];
      this.brands.forEach(b => b.selected = brandList.includes(b.name));

      // PRICE SYNC
      this.minPrice = params['min'] ? Number(params['min']) : null;
      this.maxPrice = params['max'] ? Number(params['max']) : null;

      this.filterCategories();
      this.filterSubCategories();
      this.filterBrands();
    });
    

  }

  // PANEL toggle
  toggle(section: string) {
    if (section === 'cat') this.openCat = !this.openCat;
    if (section === 'sub') this.openSub = !this.openSub;
    if (section === 'brand') this.openBrand = !this.openBrand;
    if (section === 'price') this.openPrice = !this.openPrice;
  }


  // FILTER SEARCH INPUT
  filterCategories() {
    const t = this.catSearch.toLowerCase();
    this.filteredCategories = this.categories.filter(c =>
      c.name.toLowerCase().includes(t)
    );
  }
  filterSubCategories() {
    const t = this.subSearch.toLowerCase();
    this.filteredSubCategories = this.subCategories.filter(s =>
      s.name.toLowerCase().includes(t)
    );
  }
  filterBrands() {
    const t = this.brandSearch.toLowerCase();
    this.filteredBrands = this.brands.filter(b =>
      b.name.toLowerCase().includes(t)
    );
  }


  // ======================================================
  //            MASTER FILTER APPLY (ALL)
  // ======================================================
  applyFilter() {

    const selectedCats = this.categories.filter(c => c.selected).map(c => c.id);
    const selectedSubs = this.subCategories.filter(s => s.selected).map(s => s.id);
    const selectedBrands = this.brands.filter(b => b.selected).map(b => b.name);

    const params: any = {};

    if (selectedCats.length) params.categoryId = selectedCats.join(',');
    if (selectedSubs.length) params.subId = selectedSubs.join(',');
    if (selectedBrands.length) params.brand = selectedBrands.join(',');

    if (this.minPrice !== null) params.min = this.minPrice;
    if (this.maxPrice !== null) params.max = this.maxPrice;

    // Heç nə seçilməyibsə → FILTER RESET
    const nothing =
      selectedCats.length === 0 &&
      selectedSubs.length === 0 &&
      selectedBrands.length === 0 &&
      this.minPrice === null &&
      this.maxPrice === null;

    if (nothing) {
      this.router.navigate(['/products']);
      return;
    }

    this.router.navigate(['/products'], {
      queryParamsHandling: 'merge',
      queryParams: params
    });
  }


  // ======================================================
  //              PRICE FILTER (ONLY PRICE)
  // ======================================================
  applyPriceFilter() {

    // min > max → düzəlt
    if (this.minPrice !== null && this.maxPrice !== null && this.minPrice > this.maxPrice) {
      const t = this.minPrice;
      this.minPrice = this.maxPrice;
      this.maxPrice = t;
    }

    this.applyFilter(); // <-- ən düzgün, bütün filterləri bir yerdə update edir
  }

}
