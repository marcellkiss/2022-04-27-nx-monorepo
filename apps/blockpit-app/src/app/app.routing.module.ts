import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

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
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
