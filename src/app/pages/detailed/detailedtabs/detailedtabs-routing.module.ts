import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedtabsPage } from './detailedtabs.page';

const routes: Routes = [
  {
    path: '',
    component: DetailedtabsPage,
    children: [
      {
        path: 'contractor/:id',
        loadChildren: () => import('../contractor/contractor.module').then(m => m.ContractorPageModule)
      },
      {
        path: 'inspect',
        loadChildren: () => import('../inspect/inspect.module').then(m => m.InspectPageModule)
      },
      {
        path: 'signoff',
        loadChildren: () => import('../signoff/signoff.module').then(m => m.SignoffPageModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('../invoice/invoice.module').then(m => m.InvoicePageModule)
      },
      {
        path: '',
        redirectTo: '/detailedtabs/contractor',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/detailedtabs/contractor',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedtabsPageRoutingModule { }
