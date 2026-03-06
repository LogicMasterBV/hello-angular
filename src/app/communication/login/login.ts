import { Component } from '@angular/core';
import { inject } from '@angular/core';
import {AuthService} from '../auth-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  newUsername: string = '';
  auth: AuthService = inject(AuthService);
  login() {
    this.auth.login(this.newUsername);
  }
  logout(){
    this.auth.logout();
  }
}
