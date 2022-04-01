import { LoginService } from '../services/login/login.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const user = this.loginService.getUser();
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + user?.token,
      },
    });
    return next.handle(req);
  }
}
