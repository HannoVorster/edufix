import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailedtabsPageRoutingModule } from './detailedtabs-routing.module';

import { DetailedtabsPage } from './detailedtabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailedtabsPageRoutingModule
  ],
  declarations: [DetailedtabsPage]
})
export class DetailedtabsPageModule {}
