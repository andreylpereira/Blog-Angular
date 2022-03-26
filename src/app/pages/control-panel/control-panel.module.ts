import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ControlPanelRoutingModule } from './control-panel-routing';
import { ControlPanelComponent } from './control-panel.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ControlPanelComponent, RegisterComponent, ListArticlesComponent, ListCategoriesComponent],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    ReactiveFormsModule, HttpClientModule, SharedModule, NgxPaginationModule
  ]
})
export class ControlPanelModule { }
