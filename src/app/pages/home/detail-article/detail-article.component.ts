import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
/* Model */
import Article from 'src/app/models/articles.model';
/* Service */
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  public article!: Article;
  public _slug: any;
  constructor(private articlesService: ArticlesService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => (this._slug = params['slug']));
    this.articlesService.getArticleBySlug(this._slug).subscribe(article => {
      this.article = article;
    })
  }

}
