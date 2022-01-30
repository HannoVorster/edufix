import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignoffPage } from './signoff.page';

const routes: Routes = [
  {
    path: '',
    component: SignoffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignoffPageRoutingModule {}
