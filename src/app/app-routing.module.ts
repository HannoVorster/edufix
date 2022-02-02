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
    loadChildren: () => import('./pages/home/callcenter/callcenter.module').then(m => m.CallcenterPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/home/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'newrequest',
    loadChildren: () => import('./pages/newrequest/newrequest.module').then(m => m.NewrequestPageModule)
  },
  {
    path: 'requestlist',
    loadChildren: () => import('./pages/requestlist/requestlist.module').then(m => m.RequestlistPageModule)
  },
  {
    path: 'approvals',
    loadChildren: () => import('./pages/approvals/approvals.module').then(m => m.ApprovalsPageModule)
  },
  {
    path: 'detailedtabs',
    loadChildren: () => import('./pages/detailed/detailedtabs/detailedtabs.module').then(m => m.DetailedtabsPageModule)
  },
  {
    path: 'contractor',
    loadChildren: () => import('./pages/detailed/contractor/contractor.module').then(m => m.ContractorPageModule)
  },
  {
    path: 'inspect',
    loadChildren: () => import('./pages/detailed/inspect/inspect.module').then(m => m.InspectPageModule)
  },
  {
    path: 'signoff',
    loadChildren: () => import('./pages/detailed/signoff/signoff.module').then(m => m.SignoffPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./pages/detailed/invoice/invoice.module').then(m => m.InvoicePageModule)
  },
  {
    path: 'assess/:id',
    loadChildren: () => import('./pages/assess/assess.module').then(m => m.AssessPageModule)
  },
  {
    path: 'approve/:id',
    loadChildren: () => import('./pages/approve/approve.module').then(m => m.ApprovePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
