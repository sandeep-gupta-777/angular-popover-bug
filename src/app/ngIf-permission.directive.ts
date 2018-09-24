import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import {UtilityService} from './utility.service';
import {ConstantsService} from './constants.service';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective {

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private constantsService: ConstantsService
  ) {
  }

  @Input()
  set myIf(tabName) {
    let isDenied:boolean =  this.constantsService.isTabAccessDenied(tabName);
    if(!isDenied) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
