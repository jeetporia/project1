import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngularComponentsPage } from './angular-components';

@NgModule({
  declarations: [
    AngularComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AngularComponentsPage),
  ],
})
export class AngularComponentsPageModule {}
