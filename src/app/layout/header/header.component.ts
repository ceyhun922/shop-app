import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @HostListener('document:click', ['$event'])
closeOnOutside(e: any) {
  const inside = e.target.closest('.login-popup');
  const button = e.target.closest('.login-btn');

  if (!inside && !button) {
    this.loginOpen = false;
  }
}
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

  loginOpen = false;




}
