import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Article from 'src/app/models/articles.model';
import Category from 'src/app/models/category.model';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  articles$!: Observable<Article[]>;
  categories$!: Observable<Category[]>;

  constructor(private categoriesService: CategoriesService, private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getArticles();
  }


  getCategories() {
    this.categories$ = this.categoriesService.getCategories();
  }

  getArticles() {
    this.articles$ = this.articlesService.getArticles();
  }
}
