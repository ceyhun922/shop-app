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
    }, 700); // hər 700ms bir şəkil dəyişir
  }

  get displayImage() {
    if (this.product.images && this.product.images.length > 0) {
      return this.product.images[this.hoverIndex];
    }
    return this.product.image;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.product.images || this.product.images.length === 0) return;

    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;  // mouse X
    const width = rect.width;

    const part = width / this.product.images.length;

    // hansı hissədədirsə o şəkil
    this.hoverIndex = Math.floor(x / part);

    if (this.hoverIndex >= this.product.images.length) {
      this.hoverIndex = this.product.images.length - 1;
    }
  }

  onMouseLeave() {
    this.hoverIndex = 0;
  }

  // FAVORITE
  toggleFavorite(event: MouseEvent) {
    event.stopPropagation();
    this.product.isFavorite = !this.product.isFavorite;
  }


  goToDetail() {
    this.router.navigate(['/product', this.product.id]);
  }
}
