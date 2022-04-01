import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ControlPanelModule } from 'src/app/pages/control-panel/control-panel.module';
import { NgxPaginationModule } from 'ngx-pagination';
/* Components */
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { ArticlesComponent } from './home/articles/articles.component';
import { CategoryArticlesComponent } from './category-articles/category-articles.component';
import { DetailArticleComponent } from './home/detail-article/detail-article.component'
/* Pipe */
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';

@NgModule({
  declarations: [LoginComponent, HomeComponent, AboutComponent, CategoriesComponent, ArticlesComponent, CategoryArticlesComponent, SafeHtmlPipe, DetailArticleComponent],
  exports: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule, ControlPanelModule, NgxPaginationModule]
})
export class PagesModule {}
