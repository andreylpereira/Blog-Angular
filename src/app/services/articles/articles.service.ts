import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import Article from 'src/app/models/articles.model';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  readonly url;
  private options: any;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.url = 'http://localhost:8080';
    this.options = this.loginService.options();
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.url}/articles`);
  }

  getArticle(_id: any) {
    return this.http.get<Article>(`${this.url}/categories/${_id}/article`);
  }

  getArticlesByCategory() {
    return this.http.get<Article[]>(`${this.url}/categories/:id/articles`);
  }

  createArticle(article: Article) {
    return this.http
      .post<Article>(`${this.url}/admin/articles/save`, article, this.options)
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
        },
      });
  }

  updateArticle(article: Article) {
    return this.http
      .put<Article>(`${this.url}/admin/articles/update`, article, this.options)
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
        },
      });
  }

  deleteArticle(_id: string) {
    return this.http
      .delete<any>(`${this.url}/admin/articles/${_id}/delete`, this.options)
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
        },
      });
  }
}
