import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  getCategories() {
    return [
      // sonra JSON ilə dəyişəcəyik
    ];
  }

  getBanners() {
    return [
      "assets/banners/big1.png",
      "assets/banners/big2.png",
    ];
  }
}
