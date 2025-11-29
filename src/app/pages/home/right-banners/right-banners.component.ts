import { Component } from '@angular/core';

@Component({
  selector: 'app-right-banners',
  templateUrl: './right-banners.component.html',
  styleUrls: ['./right-banners.component.scss']
})
export class RightBannersComponent {
  banners = [
    "assets/banners/right1.webp",
    "assets/banners/right2.webp",
    "assets/banners/right3.webp"
  ];
}
