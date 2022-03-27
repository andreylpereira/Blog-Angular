import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Category from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
})
export class ListCategoriesComponent implements OnInit {
  @Input() categories: Observable<Category[]> | undefined;
  c: number = 1;
  constructor(
    private router: Router,
    private categoriesService: CategoriesService
  ) {}
  @Output() updateCategory = new EventEmitter<number>();

  ngOnInit(): void {}

  goEditCategory(_id: any) {
    this.router.navigate([`admin/control-panel/categories/${_id}/edit`]);
  }

  goCreateCategory() {
    this.router.navigate(['admin/control-panel/categories/new']);
  }

  deleteCategory(_id: any) {
    console.log(_id);
  }
}
