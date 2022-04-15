import { createSelector, createFeatureSelector } from '@ngrx/store';
import Article from 'src/app/models/articles.model';


export const selectArticles = createFeatureSelector<Article[]>('articles');
