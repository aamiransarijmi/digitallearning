import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private appService: AppService) {}

  isLoggedIn(): boolean {
    if (sessionStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  login(username: any) {
    this.router.navigate(['/dashboard']);
    sessionStorage.setItem('user', username.name);
    this.appService.showSnake('Login Successfully');
    setTimeout(() => {
      this.appService.closeSnake();
    }, 2000);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
    this.appService.showSnake('Logout Successfully');
    setTimeout(() => {
      this.appService.closeSnake();
    }, 2000);
  }
}
