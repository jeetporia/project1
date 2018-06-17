import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContainerNestedComponentsPage } from './container-nested-components';

@NgModule({
  declarations: [
    ContainerNestedComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContainerNestedComponentsPage),
  ],
})
export class ContainerNestedComponentsPageModule {}
