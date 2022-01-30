import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestlistPage } from './requestlist.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  {
    path: '',
    component: RequestlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), Ng2SearchPipeModule],
  exports: [RouterModule],
})
export class RequestlistPageRoutingModule { }
