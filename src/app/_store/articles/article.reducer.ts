import { createReducer, on } from '@ngrx/store';
import { retrievedArticleList } from './article.actions'
import Article from 'src/app/models/articles.model'

export const initialState: Article[] = [];

export const articlesReducer = createReducer(
  initialState,
  on(retrievedArticleList, (state, { articles }) => articles)
);
