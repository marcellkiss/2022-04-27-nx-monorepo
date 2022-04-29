import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `FEATURE OVERVIEW <bp-button></bp-button> <br />
    <bp-button-group></bp-button-group>
    <br />
    <br />
    <a [routerLink]="['/report']">Go To Reports</a>`,
  styles: [``],
})
export class FeatureOverviewComponent {}
