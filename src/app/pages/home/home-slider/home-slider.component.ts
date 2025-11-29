import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  current = 0;

  slides = [
    "assets/banners/big1.webp", 
    "assets/banners/big2.webp",
    "assets/banners/big3.webp"
  ];

  ngOnInit() {
    setInterval(() => {
      this.current = (this.current + 1) % this.slides.length;
    }, 3000);
  }
}
