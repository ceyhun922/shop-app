import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;

  hoverIndex = 0;

  constructor(private router: Router) {}

  // hover başlayanda
  onHoverStart() {
    if (!this.product.images || this.product.images.length === 0) return;
    this.hoverIndex = 0;
    this.startHoverLoop();
  }

  // hover bitəndə sıfırlayırıq
  onHoverEnd() {
    this.hoverIndex = 0;
    clearInterval(this.interval);
  }

  interval: any;

  startHoverLoop() {
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      if (!this.product.images) return;

      this.hoverIndex++;
      if (this.hoverIndex >= this.product.images.length) {
        this.hoverIndex = 0;
      }
    }, 600); // hər 800ms bir şəkil dəyişir
  }

  get displayImage() {
    if (this.product.images && this.product.images.length > 0) {
      return this.product.images[this.hoverIndex];
    }
    return this.product.image;
  }

  toggleFavorite(event: MouseEvent) {
    event.stopPropagation();
    this.product.isFavorite = !this.product.isFavorite;
  }

  goToDetail() {
    this.router.navigate(['/product', this.product.id]);
  }
}
