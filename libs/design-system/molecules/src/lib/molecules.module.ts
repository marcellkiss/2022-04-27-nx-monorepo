import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from './button-group.component';
import { AtomsModule } from '@blockpit-nx-example/design-system/atoms';

@NgModule({
    declarations: [ ButtonGroupComponent ],
    imports: [ CommonModule, AtomsModule ],
    exports: [ ButtonGroupComponent ],
    providers: [],
})
export class MoleculesModule {}