import { Component } from '@angular/core';

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html',
  styleUrls: ['./city-modal.component.scss']
})
export class CityModalComponent {

  cities = [
    "Bakı","Gəncə","Naxçıvan","Sumqayıt","Şirvan","Mingəçevir","Lənkəran",
    "Quba","Qusar","İmişli","Ağsu","Ağdam","Salyan","Şəki","Lerik"
  ];

  select(c: string) {
    localStorage.setItem("city", c);
    window.location.reload();
  }

  close() {
    document.querySelector('app-city-modal')?.remove();
  }
}
