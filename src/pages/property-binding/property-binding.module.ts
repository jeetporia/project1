import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyBindingPage } from './property-binding';

@NgModule({
  declarations: [
    PropertyBindingPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyBindingPage),
  ],
})
export class PropertyBindingPageModule {}
