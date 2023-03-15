import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isBefore, format } from 'date-fns';

const jwt = new JwtHelperService();

class DecodedToken {
  exp?: number;
  user_id?: number;
  username?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api/';
  private decodedToken: any;

  constructor(private readonly http: HttpClient) {
    this.decodedToken =
      JSON.parse(localStorage.getItem('auth_meta') || '{}') ||
      new DecodedToken();
  }

  public register(userData: any): Observable<any> {
    const URI = this.baseUrl + 'users/register/';
    return this.http.post(URI, userData);
  }

  public login(userData: any): Observable<any> {
    const URI = this.baseUrl + 'auth/login/';

    return this.http.post(URI, userData).pipe(
      tap((token: any) => {
        this.saveToken(token['access']);
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('auth_tkn');
    localStorage.removeItem('auth_meta');

    this.decodedToken = new DecodedToken();
  }

  private saveToken(token: any): Observable<any> {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));

    return token;
  }

  public isAuthenticated(): boolean {
    return isBefore(new Date(), new Date(this.decodedToken.exp * 1000));
  }
}
