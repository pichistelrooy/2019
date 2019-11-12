import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private UserService : UserService,private route: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      let url : string = state.url
      return this.checkLogin(url)
  }

  checkLogin(url : string) : boolean {
    console.log('Esta logueado: ' + this.UserService)
    if(this.UserService.token) { return true }
    this.UserService.redirectUrl = url;
    this.route.navigate(['/login']);
    return false;
  }
  
}