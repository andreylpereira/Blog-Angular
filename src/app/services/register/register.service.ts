import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
/* Model */
import User from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
readonly url;
  constructor(private http: HttpClient, private router: Router,
    private toastr: ToastrService) {
    this.url = 'http://localhost:8080/admin/create'
  }

  register(user: User) {
    return this.http.post(this.url, user).subscribe({
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
      }
    });
  }
}
