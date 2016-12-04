import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from './../shared/sdk/index';
import { BASE_URL, API_VERSION } from './../shared/base.url';
import { Router } from '@angular/router';
import { User, AccessToken } from '../shared/sdk/models';
import { UserApi } from '../shared/sdk/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(private userApi: UserApi, private router: Router) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  ngOnInit() {
  }

  login(username, password) {

    this.user.email = username;
    this.user.password = password;
    
    this.userApi.login(this.user , { rememberMe: false})
      .subscribe(
        (token: AccessToken) => {
          this.userApi.getRoles(token.userId).subscribe(
            (roles) => {
              if (roles && roles.length > 0 && roles[0] === 'admin') {
                localStorage.setItem('role', 'admin');
              } else {
                localStorage.setItem('role', 'user');
              }

              this.router.navigateByUrl('/expenses');
            },
              error => {
                alert('get roles failed');
              }
            );
        },
        error => {
          alert('login failed');
        }
      );
  }
}
