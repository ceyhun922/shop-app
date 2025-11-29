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

  ngOnInit() {
    this.hoverIndex = 0;
  }

  // ============================
  //  AKTİV ŞƏKİL
  // ============================
  get currentImage() {
    if (this.product.images && this.product.images.length > 0) {
      return this.product.images[this.hoverIndex];
    }
    return "";
  }

  // ============================
  // HOVER START
  // ============================
  startHover() {
    if (this.product.images && this.product.images.length > 1) {
      this.isHovering = true;
    }
  }

  // ============================
  // HOVER END
  // ============================
  stopHover() {
    this.isHovering = false;
    this.hoverIndex = 0;
  }

  // ============================
  // MOUSE MOVE → ŞƏKİL DƏYİŞ
  // ============================
  onMouseMove(event: MouseEvent) {
    if (!this.isHovering) return;
    if (!this.product.images) return;

    const element = event.target as HTMLElement;
    const width = element.clientWidth;
    const x = event.offsetX;

    const totalImgs = this.product.images.length;

    const percent = x / width;
    const index = Math.floor(percent * totalImgs);

    this.hoverIndex = Math.min(totalImgs - 1, Math.max(0, index));
  }

  // ============================
  // FAVORITE
  // ============================
  toggleFavorite(event: MouseEvent) {
    event.stopPropagation();
    this.product.isFavorite = !this.product.isFavorite;
  }

  // ============================
  // DETAIL PAGE
  // ============================
  goToDetail() {
    this.router.navigate(['/product', this.product.id]);
  }
}
