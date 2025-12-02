import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  mode: 'login' | 'register' | 'phone' | 'reset' = 'login';

  email: string = "";
  password: string = "";
  phone: string = "";
  gsmPrefix: string = "+90";

  setTab(tab: 'login' | 'register') {
    this.mode = tab;
  }

  goReset() {
    this.mode = 'reset';
  }

  backToLogin() {
    this.mode = 'login';
  }

  goPhoneLogin() {
    this.mode = 'phone';
  }

  goEmailLogin() {
    this.mode = 'login';
  }
}
