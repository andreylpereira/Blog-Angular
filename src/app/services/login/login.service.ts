import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
/* Model */
import Login from '../../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly url: string;

  private user: {
    id: number;
    firstName: string;
    lastName: string;
    token: string;
  } = {
    id: 0,
    firstName: '',
    lastName: '',
    token: '',
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.url = 'http://localhost:8080/admin/authenticate';
  }

  login(user: Login) {
    return this.http.post<Login>(this.url, user).subscribe({
      next: (res: any) => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        this.router.navigate(['/home']);
        this.toastr.success(res.message, res.title, {
          timeOut: 2000,
        });
      },
      error: (err: any) => {
        this.toastr.error(err.error.message, err.error.title, {
          timeOut: 2000,
        });
      },
    });
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.toastr.success('Logout efetuado com sucesso.', 'Sucesso!', {
      timeOut: 2000,
    });
    this.router.navigate(['/logout']);
  }

  getUser() {
    const session: any = localStorage.getItem('currentUser');
    const data = JSON.parse(session);
    if (data !== null) {
      this.user.id = data.id;
      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.token = data.token;
      return this.user;
    } else {
      return null;
    }
  }
}
