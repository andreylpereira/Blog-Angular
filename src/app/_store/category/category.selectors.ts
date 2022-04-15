import { createSelector, createFeatureSelector } from '@ngrx/store';
import Category from 'src/app/models/category.model';


export const selectCategories = createFeatureSelector<Category[]>('categories');
