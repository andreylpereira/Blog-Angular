import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}

  isAuthenticated(): boolean {
    const session: any = localStorage.getItem('currentUser');
    const data = JSON.parse(session);

    if (data) {
      const token = data.token;

      if (typeof token == 'string') {
        return !this.jwtHelper.isTokenExpired(token);
      }
      return false;
    }
    return false;
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
