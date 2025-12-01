import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit, OnDestroy {

  banners = [
    "assets/banners/banner1.gif",
    "assets/banners/banner2.webp",
    "assets/banners/right1.webp",
    "assets/banners/right2.webp",
    "assets/banners/right3.webp",

  ];

  current = 0;
  interval: any;

  ngOnInit(): void {
    // AUTO SLIDE (4 saniyə)
    this.interval = setInterval(() => this.next(), 4000);
  }

  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval);
  }

  next() {
    this.current = (this.current + 1) % this.banners.length;
  }

  prev() {
    this.current =
      (this.current - 1 + this.banners.length) % this.banners.length;
  }

  goTo(i: number) {
    this.current = i;
  }

}
