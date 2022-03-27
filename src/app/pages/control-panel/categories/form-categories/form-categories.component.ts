import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-form-categories',
  templateUrl: './form-categories.component.html',
  styleUrls: ['./form-categories.component.scss']
})
export class FormCategoriesComponent implements OnInit {

  public _route: string;
  public _id: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._route = this.router.url;
    this.route.params.subscribe((params: Params) => (this._id = params['id']));
  }

  ngOnInit(): void { }

  public categoryForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
  });

  createCategory() {
    let category = {
      title: this.categoryForm.get('title')?.value,
    };

    if (this.categoryForm.valid) {
      this.categoriesService.createCategory(category)
      this.categoryForm.reset();
    } else {
      console.log('error');

    }
  }

  updateCategory() {
    let category = {
      id: this._id,
      title: this.categoryForm.get('title')?.value,
    };

    if (this.categoryForm.valid) {
      this.categoriesService.updateCategory(category)
      this.categoryForm.reset();
    } else {
      console.log('error');

    }
  }
}
