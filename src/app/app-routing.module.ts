import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hometabs',
    pathMatch: 'full'
  },
  {
    path: 'hometabs',
    loadChildren: () => import('./pages/home/hometabs/hometabs.module').then(m => m.HometabsPageModule)
  },
  {
    path: 'callcenter',
    loadChildren: () => import('./pages/home/callcenter/callcenter.module').then( m => m.CallcenterPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/home/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'newrequest',
    loadChildren: () => import('./pages/newrequest/newrequest.module').then( m => m.NewrequestPageModule)
  },
  {
    path: 'requestlist',
    loadChildren: () => import('./pages/requestlist/requestlist.module').then( m => m.RequestlistPageModule)
  },
  {
    path: 'approvals',
    loadChildren: () => import('./pages/approvals/approvals.module').then( m => m.ApprovalsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
