import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
/* Model */
import Article from 'src/app/models/articles.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  a: number = 1;
  @Input() articles: Observable<Article[]> | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetailArticle(_slug: any) {
    this.router.navigate([`/articles/${_slug}`])
  }
}
