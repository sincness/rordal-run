
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from '../services/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class BuyGuard implements CanActivate {
  constructor(private cookie: CookieService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const purchase = this.cookie.get('purchase');      
      if (purchase) return true;
      this.router.navigate(['/reservation'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  
}