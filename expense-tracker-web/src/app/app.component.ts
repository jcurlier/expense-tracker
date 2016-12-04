import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from './shared/sdk/index';
import { BASE_URL, API_VERSION } from './shared/base.url';
import { UserApi } from './shared/sdk/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  constructor(private userApi: UserApi, private router: Router) { 
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.userApi.isAuthenticated();
  }

  isAdmin() {
    return localStorage.getItem('role') === 'admin';
  }

  logout() {

    this.userApi.logout()
      .subscribe(
        () => {
            localStorage.removeItem('role');
            this.router.navigateByUrl('/login');
        },
        error => {
          alert('logout failed');
        }
      );
  }
}