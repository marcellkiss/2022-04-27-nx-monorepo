import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '@blockpit-nx-example/design-system/atoms';
import { MoleculesModule } from '@blockpit-nx-example/design-system/molecules';
import { FeatureOverviewComponent } from './feature-overview.component';

@NgModule({
  declarations: [FeatureOverviewComponent],
  imports: [CommonModule, AtomsModule, MoleculesModule, RouterModule],
  exports: [FeatureOverviewComponent],
  providers: [],
})
export class FeatureOverviewModule {}
