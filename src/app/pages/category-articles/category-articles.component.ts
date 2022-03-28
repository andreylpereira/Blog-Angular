import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import Article from 'src/app/models/articles.model';
import Category from 'src/app/models/category.model';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-category-articles',
  templateUrl: './category-articles.component.html',
  styleUrls: ['./category-articles.component.scss'],
})
export class CategoryArticlesComponent implements OnInit {
  articles$!: Observable<Article[]>;
  categories$!: Observable<Category[]>;
  public _id: any;

  constructor(
    private categoriesService: CategoriesService,
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => (this._id = params['id']));
  }

  ngOnInit(): void {
    this.getCategories();
    this.getArticlesByCategoryId(this._id);
  }

  getCategories() {
    this.categories$ = this.categoriesService.getCategories();
  }

  getArticlesByCategoryId(_id: any) {
    this.articles$ = this.articlesService.getArticlesByCategoryId(_id);
  }
}
