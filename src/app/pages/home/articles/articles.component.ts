import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Article from 'src/app/models/articles.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  a: number = 1;
  @Input() articles: Observable<Article[]> | undefined;
  constructor() {}

  ngOnInit(): void {}
}
