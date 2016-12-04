import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { UserApi } from './shared/sdk/services';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userApi: UserApi, private router: Router) {
      
  }

  canActivate() {
    // If user is not logged in we'll send them to the homepage 
    if (!this.userApi.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}