import Article from "src/app/models/articles.model";
import Category from "src/app/models/category.model";

export interface AppState {
  categories: Category[];
  articles: Article[];
}
