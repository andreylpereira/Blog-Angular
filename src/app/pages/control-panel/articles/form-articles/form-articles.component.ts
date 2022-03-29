import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
/* Models */
import Article from 'src/app/models/articles.model';
import Category from 'src/app/models/category.model';
/* Services */
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-form-articles',
  templateUrl: './form-articles.component.html',
  styleUrls: ['./form-articles.component.scss'],
})
export class FormArticlesComponent implements OnInit {
  public user: string | undefined;
  public _route: string;
  public _id: number = 0;
  public article: Article = {
    title: '',
    body: '',
    category: 0,
    author: '',
  };
  categories$!: Observable<Category[]>;

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private articlesService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._route = this.router.url;
    this.route.params.subscribe((params: Params) => (this._id = params['id']));

    if (
      this.router.url !== '/admin/control-panel/articles/new' &&
      this._id !== null
    ) {
    }
  }

  ngOnInit(): void {
    this.getCategories();
    this.getArticle();
  }

  getArticle() {
    this.articlesService.getArticle(this._id).subscribe((article) => {
      this.article = article;
      this.articleForm.controls['title'].setValue(this.article.title);
      this.articleForm.controls['body'].setValue(this.article.body);
    });
  }

  getCategories() {
    this.categories$ = this.categoriesService.getCategories();
  }

  articleForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    body: ['', [Validators.required]],
    category: [0, [Validators.required]],
  });

  getAuthor() {
    let getUser = this.loginService.getUser();
    if (getUser) {
      this.user = `${getUser.firstName} ${getUser.lastName}`;
      return this.user;
    } else {
      return 'Anônimo';
    }
  }

  createArticle() {
    let author = this.getAuthor();
    let article: Article = {
      title: this.articleForm.get('title')?.value,
      body: this.articleForm.get('body')?.value,
      category: this.articleForm.get('category')?.value,
      author: author,
    };

    this.articlesService.createArticle(article);
  }

  updateArticle() {
    let author = this.getAuthor();
    let article: Article = {
      id: this._id,
      title: this.articleForm.get('title')?.value,
      body: this.articleForm.get('body')?.value,
      category: this.articleForm.get('category')?.value,
      author: author,
    };

    if (this.articleForm.get('category')?.value === 0) {
      (article.id = this._id),
        (article.title = this.articleForm.get('title')?.value),
        (article.body = this.articleForm.get('body')?.value),
        (article.title = this.articleForm.get('title')?.value),
        (article.category = this.article.category);
    }
    this.articlesService.updateArticle(article);
  }
}
