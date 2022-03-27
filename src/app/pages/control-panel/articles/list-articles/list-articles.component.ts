import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Article from 'src/app/models/articles.model';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {

  a: number = 1;
  @Input() articles: Observable<Article[]> | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
