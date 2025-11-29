import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchFocus: boolean = false;

  catalogVisible = false;
  cityVisible = false;

  showCatalog() {
    this.catalogVisible = true;
  }

  hideCatalog() {
    this.catalogVisible = false;
  }

  toggleCity() {
    this.cityVisible = !this.cityVisible;
  }
}
