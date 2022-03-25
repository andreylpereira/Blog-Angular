import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ControlPanelModule } from 'src/app/pages/control-panel/control-panel.module';
/* Components */
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, AboutComponent],
  exports: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule, ControlPanelModule],
})
export class PagesModule {}
