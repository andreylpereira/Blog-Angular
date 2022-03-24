import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class PagesModule {}
