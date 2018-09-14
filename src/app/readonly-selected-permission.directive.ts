import {Directive, ElementRef} from '@angular/core';
import {UtilityService} from './utility.service';
import {ConstantsService, ETabNames} from './constants.service';

@Directive({
  selector: '[readonlyselectedroles]'
})
export class HighlightDirective {
  constructor(
    el: ElementRef,
    private constantsService: ConstantsService
  ) {


    let isDenied: boolean = this.constantsService.isTabAccessDenied(ETabNames.forms);
    if (isDenied) {
      el.nativeElement.disabled = true;
    }
  }
}
