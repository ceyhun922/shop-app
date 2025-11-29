import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit
} from '@angular/core';

import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { CategoryService } from 'src/app/core/services/category.service';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
Swiper.use([Navigation]);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {

  popupOpen = false;
  searchText = "";
  typingTimer: any;

  popularTags = [
    "iphone", "samsung", "macbook", "airpods",
    "tv", "parfum", "kreslo", "xalça"
  ];

  recentSearches: string[] = [];

  liveCategories: any[] = [];
  liveBrands: string[] = [];
  liveProducts: any[] = [];

  popularProducts = [
    { image: "assets/products/iphone12.png", name: "The Purest Solutions", price: 28.65 },
    { image: "assets/products/iphone12.png", name: "The Ceel Dökülmə", price: 24.87 },
    { image: "assets/products/iphone12.png", name: "Parfum Set", price: 19.99 },
    { image: "assets/products/iphone12.png", name: "Face Cream", price: 12.90 }
  ];

  constructor(
    private eRef: ElementRef,
    private prodService: ProductService,
    private catService: CategoryService,
    private router: Router
  ) {
    this.loadRecent();
  }

  // ==========================
  // POPUP AÇ / BAĞLA
  // ==========================
  openPopup() {
    this.popupOpen = true;
    this.initPopularSlider();
  }

  keepOpen(event: Event) {
    event.stopPropagation();
  }

  @HostListener("document:click", ["$event"])
  closePopup(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.popupOpen = false;
    }
  }

  // ==========================
  // CLEAR INPUT
  // ==========================
  clearInput() {
    this.searchText = "";
    this.liveCategories = [];
    this.liveBrands = [];
    this.liveProducts = [];
  }

  // ==========================
  // TYPING + 300ms DEBOUNCE
  // ==========================
  onTyping() {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.searchLive();
    }, 300);
  }

  // ==========================
  // CANLI SEARCH
  // ==========================
  searchLive() {
    const q = this.searchText.toLowerCase().trim();
    if (!q) return;

    this.liveCategories = this.catService.getAll()
      .filter(c => c.name.toLowerCase().includes(q));

    this.liveBrands = this.prodService.getAllProducts()
      .map(p => p.brand)
      .filter((b): b is string => !!b)
      .filter(b => b.toLowerCase().includes(q));

    this.liveProducts = this.prodService.getAllProducts()
      .filter(p => p.name.toLowerCase().includes(q))
      .slice(0, 6);
  }

  // ==========================
  // SEARCH → PRODUCTS PAGE
  // ==========================
  triggerSearch() {
    if (this.searchText.trim()) {
      this.goToSearch(this.searchText);
    }
  }

  goToSearch(value: string) {
    this.saveRecent(value);
    this.router.navigate(['/products'], {
      queryParams: { search: value }
    });
    this.popupOpen = false;
  }

  

  // ==========================
  // LOCAL STORAGE — RECENT SEARCH
  // ==========================
  loadRecent() {
    const s = localStorage.getItem("recentSearch");
    this.recentSearches = s ? JSON.parse(s) : [];
  }

  saveRecent(v: string) {
    this.recentSearches = [
      v,
      ...this.recentSearches.filter(x => x !== v)
    ].slice(0, 8);

    localStorage.setItem("recentSearch", JSON.stringify(this.recentSearches));
  }

  removeRecent(i: number) {
    this.recentSearches.splice(i, 1);
    localStorage.setItem("recentSearch", JSON.stringify(this.recentSearches));
  }

  clearAllRecent() {
    this.recentSearches = [];
    localStorage.removeItem("recentSearch");
  }

  applyRecent(v: string) {
    this.searchText = v;
    this.goToSearch(v);
  }

  applyPopular(v: string) {
    this.searchText = v;
    this.goToSearch(v);
  }

  previewProduct: any = null;

showPreview(p: any) {
  this.previewProduct = p;
}

hidePreview() {
  this.previewProduct = null;
}

goToCategory(cat: any) {
  this.popupOpen = false;

  this.router.navigate(['/products'], {
    queryParams: { categoryId: cat.id }
  });
}

goToBrand(brand: string) {
  this.popupOpen = false;

  this.router.navigate(['/products'], {
    queryParams: { search: brand }
  });
}

goToProduct(id: number) {
  this.popupOpen = false;

  this.router.navigate(['/product', id]);
}


  // ==========================
  // SLIDER
  // ==========================
  ngAfterViewInit() {
    this.initPopularSlider();
  }

  initPopularSlider() {
    setTimeout(() => {
      new Swiper('.popular-swiper', {
        slidesPerView: 2.3,
        spaceBetween: 16,
        navigation: {
          nextEl: '.popular-next',
          prevEl: '.popular-prev'
        }
      });
    }, 50);
  }
}
