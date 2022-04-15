import { createReducer, on } from '@ngrx/store';
import { removeCategory, retrievedCategoryList } from './category.actions';
import Category from 'src/app/models/category.model';

export const initialState: Category[] = [];

export const categoriesReducer = createReducer(
  initialState,
  on(retrievedCategoryList, (state, { categories }) => categories),
  on(removeCategory, (state, { _id }) => state.filter((id) => id !== _id))
);
