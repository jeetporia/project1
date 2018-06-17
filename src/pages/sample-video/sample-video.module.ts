import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleVideoPage } from './sample-video';

@NgModule({
  declarations: [
    SampleVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(SampleVideoPage),
  ],
})
export class SampleVideoPageModule {}
