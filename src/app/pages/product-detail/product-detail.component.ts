import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/core/models/product";
import { ProductService } from "src/app/core/services/product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  activeIndex = 0;

  zoomActive = false;
  lensX = 0;
  lensY = 0;

  zoomOrigin = "50% 50%"; // sağda zoom mərkəzi

  constructor(private route: ActivatedRoute, private ps: ProductService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.product = this.ps.getProductById(id)!;

    if (!this.product.images || this.product.images.length === 0) {
      this.product.images = ["assets/no-image.png"];
    }
  }

  setActive(i: number) {
    this.activeIndex = i;
  }


  onZoom(event: MouseEvent) {
  this.zoomActive = true;

  const box = (event.currentTarget as HTMLElement).getBoundingClientRect();

  this.lensX = event.clientX - box.left - 70;
  this.lensY = event.clientY - box.top - 70;

  const percentX = ((event.clientX - box.left) / box.width) * 100;
  const percentY = ((event.clientY - box.top) / box.height) * 100;
  this.zoomOrigin = `${percentX}% ${percentY}%`;
}

stopZoom() {
  this.zoomActive = false;
}


  toggleFav() {
    this.product.isFavorite = !this.product.isFavorite;
  }

  addToCart() {
    console.log("Added:", this.product.name);
  }
}
