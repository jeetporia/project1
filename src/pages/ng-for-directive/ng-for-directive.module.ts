import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgForDirectivePage } from './ng-for-directive';

@NgModule({
  declarations: [
    NgForDirectivePage,
  ],
  imports: [
    IonicPageModule.forChild(NgForDirectivePage),
  ],
})
export class NgForDirectivePageModule {}
