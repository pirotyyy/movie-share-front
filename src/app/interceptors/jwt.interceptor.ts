import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('auth_tkn');
    if (token) {
      const req = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: 'JWT ' + token,
        },
      });
      return next.handle(req);
    }
    return next.handle(request);
  }
}
