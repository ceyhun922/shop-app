import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;

  toggleFavorite(event: MouseEvent) {
    event.stopPropagation();
    this.product.isFavorite = !this.product.isFavorite;
  }

  addToCart(event: MouseEvent) {
    event.stopPropagation();
    console.log("Səbətə əlavə edildi:", this.product.name);
  }

}
