import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NestedComponentsPage } from './nested-components';

@NgModule({
  declarations: [
    NestedComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(NestedComponentsPage),
  ],
})
export class NestedComponentsPageModule {}
