import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ControlPanelRoutingModule } from './control-panel-routing';
import { ControlPanelComponent } from './control-panel.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
/* Components */
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormCategoriesComponent } from './categories/form-categories/form-categories.component';
import { FormArticlesComponent } from './articles/form-articles/form-articles.component';
/* Editor */
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    ControlPanelComponent,
    RegisterComponent,
    ListArticlesComponent,
    ListCategoriesComponent,
    FormCategoriesComponent,
    FormArticlesComponent,
  ],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgxPaginationModule,
    EditorModule,
  ],
})
export class ControlPanelModule {}
