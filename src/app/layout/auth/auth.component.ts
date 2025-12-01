import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
   activeTab: 'login' | 'register' = 'login';
  gender: 'f' | 'm' | null = null;

  setTab(tab: 'login' | 'register') {
    this.activeTab = tab;
  }

  setGender(g: 'f' | 'm') {
    this.gender = g;
  }
}
