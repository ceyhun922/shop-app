import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module"; // ⭐ ROUTING BURDADIR

import { AppComponent } from "./app.component";

// LAYOUT
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarCategoriesComponent } from "./layout/sidebar-categories/sidebar-categories.component";
import { InfoBarComponent } from "./layout/info-bar/info-bar.component";
import { CityModalComponent } from "./layout/city-modal/city-modal.component";
import { CatalogMenuComponent } from "./layout/catalog-menu/catalog-menu.component";
import { SearchComponent } from "./layout/search/search.component";

// HOME
import { HomeComponent } from "./pages/home/home.component";
import { HomeSliderComponent } from "./pages/home/home-slider/home-slider.component";
import { RightBannersComponent } from "./pages/home/right-banners/right-banners.component";
import { DealsOfDayComponent } from "./pages/home/components/deals-of-day/deals-of-day.component";

// PRODUCTS
import { ProductCardComponent } from "./shared/product-card/product-card.component";
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";

import { ProductFilterSidebarComponent } from "./shared/product-filter-sidebar/product-filter-sidebar.component";
import { ProductFilterSortBarComponent } from "./shared/product-filter-sort-bar/product-filter-sort-bar.component";
import { ProductTopCategoriesComponent } from "./shared/product-top-categories/product-top-categories.component";
import { HomeBannerComponent } from './pages/home/home-banner/home-banner.component';
import { AuthComponent } from './layout/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,

    // layout
    HeaderComponent,
    SidebarCategoriesComponent,
    InfoBarComponent,
    CityModalComponent,
    CatalogMenuComponent,
    SearchComponent,

    // home
    HomeComponent,
    HomeSliderComponent,
    RightBannersComponent,
    DealsOfDayComponent,

    // products
    ProductCardComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterSidebarComponent,
    ProductFilterSortBarComponent,
    ProductTopCategoriesComponent,
    HomeBannerComponent,
    AuthComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,  // ⭐ ngIf/ngFor/ngStyle BURDAN GƏLİR
    FormsModule,
    AppRoutingModule // ⭐ ROUTING BURDAN GƏLİR
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
