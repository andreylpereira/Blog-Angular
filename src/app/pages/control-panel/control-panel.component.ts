import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
/* Store */
import { Store } from '@ngrx/store';
import { retrievedArticleList } from 'src/app/_store/articles/article.actions';
import { retrievedCategoryList } from 'src/app/_store/category/category.actions';
import { selectArticles } from './../../_store/articles/article.selectors';
import { selectCategories } from 'src/app/_store/category/category.selectors';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
  articles$ = this.store.select(selectArticles);
  categories$ = this.store.select(selectCategories);

  constructor(
    private categoriesService: CategoriesService,
    private articlesService: ArticlesService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getArticles();
  }

  getCategories() {
    this.categoriesService
      .getCategories()
      .subscribe((categories) =>
        this.store.dispatch(retrievedCategoryList({ categories }))
      );
  }

  getArticles() {
    this.articlesService
      .getArticles()
      .subscribe((articles) =>
        this.store.dispatch(retrievedArticleList({ articles }))
      );
  }
}
