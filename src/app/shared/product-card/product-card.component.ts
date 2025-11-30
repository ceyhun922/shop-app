import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;

  hoverIndex = 0;
  isHovering = false;

  constructor(private router: Router) {}

  // ALWAYS SAFE IMAGES
  get safeImages(): string[] {
    return this.product.images ?? [];
  }

  startHover() {
    if (this.safeImages.length > 1) {
      this.isHovering = true;
    }
  }

  stopHover() {
    this.isHovering = false;
    this.hoverIndex = 0;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isHovering || this.safeImages.length <= 1) return;

    const wrap = (event.currentTarget as HTMLElement)
      .querySelector('.image-wrap') as HTMLElement;
    if (!wrap) return;

    const width = wrap.clientWidth;
    const x = event.offsetX;

    const count = this.safeImages.length;
    const index = Math.floor((x / width) * count);

    this.hoverIndex = Math.max(0, Math.min(count - 1, index));
  }

  hoverDot(i: number) {
    this.hoverIndex = i;
  }

  toggleFavorite(event: MouseEvent) {
    event.stopPropagation();
    this.product.isFavorite = !this.product.isFavorite;
  }

  goToDetail() {
    this.router.navigate(['/product', this.product.id]);
  }
}
