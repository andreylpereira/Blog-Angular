import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Category from 'src/app/models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input() categories: Observable<Category[]> | undefined;
  c: number = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCategoryArticles(_id: any) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([`/category/${_id}/articles`]));
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
