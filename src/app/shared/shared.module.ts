import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ControlPanelRoutingModule } from 'src/app/pages/control-panel/control-panel-routing';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, ControlPanelRoutingModule],
})
export class SharedModule {}
