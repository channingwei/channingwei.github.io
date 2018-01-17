import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PopUpService } from './service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { Container, ContainerHostDirective } from './base/index';
// import {
//     DialogContainerComponent,
//     DialogComponent,
//     ToastContainerComponent,
//     ToastComponent,
//     LoadContainerComponent,
//     LoadComponent
// } from './interface/index';

@NgModule({
	declarations: [
		// ContainerHostDirective,

		// DialogComponent,
		// DialogContainerComponent,

		// ToastContainerComponent,
		// ToastComponent,

		// LoadContainerComponent,
		// LoadComponent
	],
	imports: [BrowserAnimationsModule, CommonModule],
	exports: [],
	providers: [/*PopUpService, Container*/],
	entryComponents: [
		// DialogComponent,
		// DialogContainerComponent,

		// ToastContainerComponent,
		// ToastComponent,

		// LoadContainerComponent,
		// LoadComponent
	]
})
export class KuoModule { }
