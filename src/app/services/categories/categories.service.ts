import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Category from '../../models/category.model'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  readonly url;
  constructor(private http: HttpClient) {
      this.url = 'http://localhost:8080/categories'
     }


    getCategories(): Observable<Category[]> {
      return this.http.get<Category[]>(this.url);
    }
}
