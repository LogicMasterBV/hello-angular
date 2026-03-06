import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '../auth-service';
import {inject} from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  auth: AuthService = inject(AuthService);
}
