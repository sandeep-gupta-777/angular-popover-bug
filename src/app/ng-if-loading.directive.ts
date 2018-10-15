// import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
// import {LoadingComponent} from './loading/loading.component';
//
// @Directive({
//   selector: '[appNgIfLoading]'
// })
// export class NgIfLoadingDirective {
//
//   constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
//
//   @Input() set appNgIfLoading(allow: boolean){
//     if (allow) {
//       // If condition is true add template to DOM
//       this.viewContainer.createEmbeddedView(this.templateRef);;
//     } else {
//       // Else remove template from DOM
//       // this.viewContainer.createEmbeddedView(LoadingComponent);
//
//     }
//
//   }
//
// }
