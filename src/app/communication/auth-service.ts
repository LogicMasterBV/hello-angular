import {computed, Injectable, signal, Signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _username = signal<string | null>(null);
  username = this._username.asReadonly();
  isLoggedIn = computed(() => this.username() != null);
  login(newUsername: string): void {
    this._username.set(newUsername);
  }
  logout() {
    this._username.set(null);
  }
}
