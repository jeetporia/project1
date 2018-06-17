import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttributeBindingPage } from './attribute-binding';

@NgModule({
  declarations: [
    AttributeBindingPage,
  ],
  imports: [
    IonicPageModule.forChild(AttributeBindingPage),
  ],
})
export class AttributeBindingPageModule {}
