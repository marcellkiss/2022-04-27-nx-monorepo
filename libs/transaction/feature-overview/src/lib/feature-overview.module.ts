import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '@blockpit-nx-example/design-system/atoms';
import { FeatureOverviewComponent } from './feature-overview.component';

@NgModule({
    declarations: [ FeatureOverviewComponent ],
    imports: [ CommonModule, AtomsModule ],
    exports: [ FeatureOverviewComponent ],
    providers: [],
})
export class FeatureOverviewModule {}