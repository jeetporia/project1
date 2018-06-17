import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StylingPage } from './styling';

@NgModule({
  declarations: [
    StylingPage,
  ],
  imports: [
    IonicPageModule.forChild(StylingPage),
  ],
})
export class StylingPageModule {}
