import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-menu',
  templateUrl: './catalog-menu.component.html',
  styleUrls: ['./catalog-menu.component.scss']
})
export class CatalogMenuComponent {

  active: any = null;

  categories = [
    { 
      name: "Black Friday 2025", 
      icon: "🏷️",
      subs: ["Meyvə və tərəvəz", "Sosis və kolbasalar", "Süd məhsulları", "Çörək məhsulları"]
    },
    {
      name: "Telefonlar və aksesuarlar",
      icon: "📱",
      subs: ["Smartfonlar", "Qulaqcıqlar", "Adapterlər", "PowerBank"]
    }
  ];

  close() {
    this.active = null;
  }
}
