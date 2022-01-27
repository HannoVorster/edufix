import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HometabsPage } from './hometabs.page';

const routes: Routes = [
  {
    path: '',
    component: HometabsPage,
    children: [
      {
        path: 'callcenter',
        loadChildren: () => import('../callcenter/callcenter.module').then(m => m.CallcenterPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/hometabs/callcenter',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/hometabs/callcenter',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HometabsPageRoutingModule { }
