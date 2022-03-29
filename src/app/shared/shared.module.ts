import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelRoutingModule } from 'src/app/pages/control-panel/control-panel-routing';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, ControlPanelRoutingModule],
})
export class SharedModule {}
