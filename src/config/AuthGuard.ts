import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');

    if (!token && state.url !== '/login' && state.url !== '/register') {
      this.router.navigate(['/login']);
      return false;
    }

    if (token && (state.url === '/login' || state.url === '/register')) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }

}
