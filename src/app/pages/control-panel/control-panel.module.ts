import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ControlPanelRoutingModule } from './control-panel-routing';
import { ControlPanelComponent } from './control-panel.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ControlPanelComponent, RegisterComponent],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    ReactiveFormsModule, HttpClientModule, SharedModule
  ]
})
export class ControlPanelModule { }
