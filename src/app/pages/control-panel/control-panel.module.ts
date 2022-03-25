import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ControlPanelRoutingModule } from './control-panel-routing';
import { ControlPanelComponent } from './control-panel.component';



@NgModule({
  declarations: [ControlPanelComponent],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    SharedModule
  ]
})
export class ControlPanelModule { }
