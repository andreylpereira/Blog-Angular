import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import {
  JwtHelperService,
  JWT_OPTIONS,
} from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from 'src/app/pages/pages.module';
import { ControlPanelRoutingModule } from './pages/control-panel/control-panel-routing';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/_helpers/auth.interceptor';
import { categoriesReducer } from 'src/app/_store/category/category.reducer';
import { StoreModule } from '@ngrx/store';
import { articlesReducer } from 'src/app/_store/articles/article.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ControlPanelRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({ categories: categoriesReducer,
      articles: articlesReducer }),
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
