import { Component, OnInit } from '@angular/core';
/* Services */
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false;
  public user: string = '';

  constructor(
    private loginService: LoginService,
    private authGuardService: AuthGuardService,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authGuardService.isAuthenticated();

    let getUser = this.loginService.getUser();
    this.user = `${getUser.firstName} ${getUser.lastName}`;
  }



  logOut() {
    this.loginService.logOut();
  }
}
