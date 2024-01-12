import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isLoggedIn()) {
      if (state.url === '/login') {
        this.router.navigate(['/dashboard']);
        return false;
      }
      return true;
    } else {
      if (state.url === '/login') {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}
