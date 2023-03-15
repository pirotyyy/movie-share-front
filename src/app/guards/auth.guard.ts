import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private url?: string;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.url = state.url;
    if (this.auth.isAuthenticated()) {
      return this.authState();
    }
    return this.notAuthState();
  }

  private authState(): boolean {
    if (this.isLoginOrRegisterOrHome()) {
      this.router.navigate(['/post/list']);
      return false;
    }
    return true;
  }

  private notAuthState(): boolean {
    if (this.isLoginOrRegisterOrHome()) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

  private isLoginOrRegisterOrHome(): boolean {
    if (
      this.url?.includes('/auth/login') ||
      this.url?.includes('/auth/register')
    ) {
      return true;
    }
    return false;
  }
}
