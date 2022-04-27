import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '@blockpit-nx-example/design-system/atoms';
import { FeatureOverviewComponent } from './feature-overview.component';
import { MoleculesModule } from '@blockpit-nx-example/design-system/molecules';

@NgModule({
    declarations: [ FeatureOverviewComponent ],
    imports: [
        CommonModule,
        AtomsModule,
        MoleculesModule
    ],
    exports: [ FeatureOverviewComponent ],
    providers: [],
})
export class FeatureOverviewModule {}