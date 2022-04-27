import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ReportFeatureGenerateComponent } from '@blockpit-nx-example/report/feature-generate';

const routes: Route[] = [
	{
		path: '',
		component: ReportFeatureGenerateComponent
	}
];

@NgModule({
	declarations: [],
	imports: [ CommonModule, RouterModule.forChild(routes) ],
	exports: [],
	providers: [],
})
export class ReportShellRoutingModule {}
