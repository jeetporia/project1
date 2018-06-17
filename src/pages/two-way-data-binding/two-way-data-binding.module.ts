import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwoWayDataBindingPage } from './two-way-data-binding';

@NgModule({
  declarations: [
    TwoWayDataBindingPage,
  ],
  imports: [
    IonicPageModule.forChild(TwoWayDataBindingPage),
  ],
})
export class TwoWayDataBindingPageModule {}
