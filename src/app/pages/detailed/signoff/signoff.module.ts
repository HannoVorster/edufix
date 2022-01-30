import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignoffPageRoutingModule } from './signoff-routing.module';

import { SignoffPage } from './signoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignoffPageRoutingModule
  ],
  declarations: [SignoffPage]
})
export class SignoffPageModule {}
