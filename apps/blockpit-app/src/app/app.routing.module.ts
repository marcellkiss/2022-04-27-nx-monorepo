import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PerformanceComponent } from './performance/performance.component';
import { TableComponent } from './performance/table.component';

const routes: Route[] = [
  // {
  //   path: '',
  //   redirectTo: '/transaction',
  // },
  {
    path: '',
    loadChildren: async () =>
      (await import('@blockpit-nx-example/transaction/shell'))
        .TransactionShellModule,

    // (await import('@ev-customer-portal/frontend/evp/shell')).EvpShellModule
    // loadChildren: import(`@blockpit-nx-example/transaction/shell`).then((lib) => {
    //   return lib.
    // })
  },
  {
    path: 'report',
    loadChildren: async () => {
      return (await import('@blockpit-nx-example/report/shell'))
        .ReportShellModule;
    },
  },
  {
    path: 'performance',
    component: PerformanceComponent,
  },
];

@NgModule({
  declarations: [PerformanceComponent, TableComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
