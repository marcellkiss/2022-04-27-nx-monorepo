import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FeatureOverviewComponent, FeatureOverviewModule } from '@blockpit-nx-example/transaction/feature-overview';

const routes: Route[] = [
  {
    component: FeatureOverviewComponent,
    path: '',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureOverviewModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class TransactionShellRoutingModule {}