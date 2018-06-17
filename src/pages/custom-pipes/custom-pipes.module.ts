import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomPipesPage } from './custom-pipes';

@NgModule({
  declarations: [
    CustomPipesPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomPipesPage),
  ],
})
export class CustomPipesPageModule {}
