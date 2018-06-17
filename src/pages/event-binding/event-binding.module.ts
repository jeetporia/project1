import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventBindingPage } from './event-binding';

@NgModule({
  declarations: [
    EventBindingPage,
  ],
  imports: [
    IonicPageModule.forChild(EventBindingPage),
  ],
})
export class EventBindingPageModule {}
