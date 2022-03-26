import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Category from 'src/app/models/category.model';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
})
export class ListCategoriesComponent implements OnInit {
  @Input() categories: Observable<Category[]> | undefined;
  c: number = 1;
  constructor() {}

  ngOnInit(): void {}
}
