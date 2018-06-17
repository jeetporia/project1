import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentInputPropertyPage } from './component-input-property';

@NgModule({
  declarations: [
    ComponentInputPropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentInputPropertyPage),
  ],
})
export class ComponentInputPropertyPageModule {}
