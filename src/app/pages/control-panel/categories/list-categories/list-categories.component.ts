import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
/* Model */
import Category from 'src/app/models/category.model';
/* Service */
import { CategoriesService } from 'src/app/services/categories/categories.service';

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
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  @Output() updateCategory = new EventEmitter<number>();

  ngOnInit(): void {}

  goUpdateCategory(_id: any) {
    this.router.navigate([`admin/control-panel/categories/${_id}/edit`]);
  }

  goCreateCategory() {
    this.router.navigate(['admin/control-panel/categories/new']);
  }

  deleteCategory(_id: any) {
    this.categoriesService.deleteCategory(_id);
    location.reload();
  }
}
