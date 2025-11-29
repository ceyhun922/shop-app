import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// LAYOUT
import { HeaderComponent } from './layout/header/header.component';
import { SidebarCategoriesComponent } from './layout/sidebar-categories/sidebar-categories.component';
import { InfoBarComponent } from './layout/info-bar/info-bar.component';
import { CityModalComponent } from './layout/city-modal/city-modal.component';
import { CatalogMenuComponent } from './layout/catalog-menu/catalog-menu.component';

// HOME
import { HomeSliderComponent } from './pages/home/home-slider/home-slider.component';
import { RightBannersComponent } from './pages/home/right-banners/right-banners.component';
import { DealsOfDayComponent } from './pages/home/components/deals-of-day/deals-of-day.component';
import { HomeComponent } from './pages/home/home.component';

// PRODUCTS
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductTopCategoriesComponent } from './shared/product-top-categories/product-top-categories.component';
import { ProductFilterSidebarComponent } from './shared/product-filter-sidebar/product-filter-sidebar.component';
import { ProductFilterSortBarComponent } from './shared/product-filter-sort-bar/product-filter-sort-bar.component';
import { SearchComponent } from './layout/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarCategoriesComponent,
    InfoBarComponent,
    CityModalComponent,
    CatalogMenuComponent,
    HomeSliderComponent,
    RightBannersComponent,
    DealsOfDayComponent,
    ProductCardComponent,
    ProductListComponent,
    HomeComponent,
    ProductFilterSidebarComponent,

    // ⭐ BUNU ƏLAVƏ ET
    ProductTopCategoriesComponent,
     ProductFilterSidebarComponent,
     ProductFilterSortBarComponent,
     SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
