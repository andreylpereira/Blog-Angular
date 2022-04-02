import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
/* Model */
import Category from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  readonly url;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.url = 'http://localhost:8080';
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/categories`);
  }


  createCategory(category: Category) {
    return this.http
      .post<Category>(
        `${this.url}/admin/categories/save`,
        category
      )
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['/admin/control-panel']);
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

  updateCategory(category: Category) {
    return this.http
      .put<Category>(
        `${this.url}/admin/categories/update`,
        category
      )
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['/admin/control-panel']);
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

  deleteCategory(_id: string) {
    return this.http
      .delete<any>(`${this.url}/admin/categories/${_id}/delete`)
      .subscribe({
        next: (res: any) => {
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
