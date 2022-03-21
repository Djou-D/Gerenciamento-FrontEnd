import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntercepterAuthService {

  constructor(private loginService: LoginService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    const basicAuthHeaderString = this.loginService.getAuthenticatedToken();
    const username = this.loginService.getAuthenticatedUser()

    if (this.loginService && username) {
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString!
        }
      });
    }
    return next.handle(request);
    }
}
