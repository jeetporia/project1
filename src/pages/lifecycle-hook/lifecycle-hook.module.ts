import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifecycleHookPage } from './lifecycle-hook';

@NgModule({
  declarations: [
    LifecycleHookPage,
  ],
  imports: [
    IonicPageModule.forChild(LifecycleHookPage),
  ],
})
export class LifecycleHookPageModule {}
