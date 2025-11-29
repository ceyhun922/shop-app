import { Component } from '@angular/core';

@Component({
  selector: 'app-product-top-categories',
  templateUrl: './product-top-categories.component.html',
  styleUrls: ['./product-top-categories.component.scss']
})
export class ProductTopCategoriesComponent {

  categories = [
    { name: 'Telefonlar', icon: '📱' },
    { name: 'Komputerlər', icon: '💻' },
    { name: 'Smart Saat', icon: '⌚' },
    { name: 'Audio', icon: '🎧' },
    { name: 'TV', icon: '📺' },
  ];

}
