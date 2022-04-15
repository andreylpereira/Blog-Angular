import { createAction, props } from '@ngrx/store';
import Article from 'src/app/models/articles.model';

export const addArticle = createAction(
  '[Article List] Add Article',
  props<{ article: Article }>()
);

export const removeArticle = createAction(
  '[Article List] Remove Article',
  props<{ id: number }>()
);

export const updateArticle = createAction(
  '[Article List] Update Article',
  props<{ article: Article }>()
);

export const retrievedArticleList = createAction(
  '[Article List] Retrieve Article Success',
  props<{ articles: Article[] }>()
);
