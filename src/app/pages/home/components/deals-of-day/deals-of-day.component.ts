import { Component } from '@angular/core';

@Component({
  selector: 'app-deals-of-day',
  templateUrl: './deals-of-day.component.html',
  styleUrls: ['./deals-of-day.component.scss']
})
export class DealsOfDayComponent {

  products = [
    {
      label: 'Black Friday',
      tag: 'Ən çox satılan',
      discount: 36,
      price: 899.90,
      oldPrice: 1399.00,
      installment: '149.99 ₼ x 6 ay',
      title: 'Elektrik samokat Xiaomi Electric Scooter 5 Black',
      rating: 4,
      ratingCount: 4,
      img: 'assets/products/scooter.png'
    },
    {
      discount: 53,
      price: 329.89,
      oldPrice: 699.00,
      installment: '18.33 ₼ x 18 ay',
      title: 'Avtomaqnitola Pioneer MVH-S520BT',
      rating: 4,
      ratingCount: 4,
      img: 'assets/products/pioneer.png'
    },
    {
      discount: 35,
      price: 649.90,
      oldPrice: 999.00,
      installment: '108.32 ₼ x 6 ay',
      title: 'Monitor 34" Xiaomi G34WQi ME3L',
      rating: 5,
      ratingCount: 13,
      img: 'assets/products/monitor.png'
    },
    {
      tag: 'Ən çox satılan',
      discount: 45,
      price: 109.99,
      oldPrice: 199.00,
      installment: '6.12 ₼ x 18 ay',
      title: 'Avtomobil maqnitofonu Pioneer MVH-85U',
      rating: 4,
      ratingCount: 8,
      img: 'assets/products/car-radio.png'
    },
    {
      discount: 26,
      price: 259.90,
      oldPrice: 350.00,
      installment: '86.64 ₼ x 3 ay',
      title: 'Mikrodalğalı soba LG MS2535GIB.BBKQCIS',
      rating: 4,
      ratingCount: 9,
      img: 'assets/products/microwave.png'
    }
  ];

}
