import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Article from 'src/app/models/articles.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  readonly url;
  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:8080/articles';
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }
}
