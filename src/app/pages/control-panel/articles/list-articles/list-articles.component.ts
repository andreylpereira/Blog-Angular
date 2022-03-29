import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
/* Model */
import Article from 'src/app/models/articles.model';
/* Services */
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss'],
})
export class ListArticlesComponent implements OnInit {
  a: number = 1;
  @Input() articles: Observable<Article[]> | undefined;

  constructor(
    private router: Router,
    private articlesService: ArticlesService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {}

  goCreateArticle() {
    this.router.navigate(['/admin/control-panel/articles/new']);
  }

  goUpdateArticle(_id: any) {
    this.router.navigate([`/admin/control-panel/articles/${_id}/edit`]);
  }

  deleteArticle(_id: any) {
    this.articlesService.deleteArticle(_id);
    location.reload();
  }
}
