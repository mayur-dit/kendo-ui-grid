import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {CookieService} from 'ngx-cookie-service';
import {ConstantService} from './constant.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private cookieService: CookieService,
              private router: Router,
              private constantService: ConstantService) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.constantService.g_user && this.constantService.g_user.username) {
      return true;
    } else {
      this.router.navigate(['auth', 'login']);
      return false;
    }
  }
}
