import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssessPageRoutingModule } from './assess-routing.module';

import { AssessPage } from './assess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssessPageRoutingModule
  ],
  declarations: [AssessPage]
})
export class AssessPageModule {}
