import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Category from 'src/app/models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categories: Observable<Category[]> | undefined;
  c: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
