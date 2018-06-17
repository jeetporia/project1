import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgForTrackbyPage } from './ng-for-trackby';

@NgModule({
  declarations: [
    NgForTrackbyPage,
  ],
  imports: [
    IonicPageModule.forChild(NgForTrackbyPage),
  ],
})
export class NgForTrackbyPageModule {}
