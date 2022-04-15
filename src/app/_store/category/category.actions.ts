import { createAction, props } from '@ngrx/store';
import Category from 'src/app/models/category.model';

export const addCategory = createAction(
  '[Category List] Add Category',
  props<{ category: Category }>()
);

export const removeCategory = createAction(
  '[Category List] Remove Category',
  props<{ _id: string }>()
);

export const updateCategory = createAction(
  '[Category List] Update Category',
  props<{ category: Category }>()
);

export const retrievedCategoryList = createAction(
  '[Category List] Retrieve Category Success',
  props<{ categories: Category[] }>()
);
