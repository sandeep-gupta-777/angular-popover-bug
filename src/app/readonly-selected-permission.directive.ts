import {Directive, ElementRef, Input} from '@angular/core';
import {ConstantsService, } from './constants.service';
import {PermissionService} from './permission.service';

@Directive({
  selector: '[readonlyselectedroles]'
})
export class HighlightDirective {
  constructor(
    private el: ElementRef,
    private constantsService: ConstantsService,
    private permissionService: PermissionService
  ) {}

  @Input() set readonlyselectedroles(tabNameInfo: any/*EAllActions|EAllActions[]*/) {/*tabNameInfo can be one tabname string or array of tabname strings*/

    if (!tabNameInfo) { console.error('tabNameInfo is null or undefined'); }
    let isDenied = true;

    if (Array.isArray(tabNameInfo)) {
      tabNameInfo.forEach((tab) => {
        isDenied = isDenied && this.permissionService.isTabAccessDenied(tab);
      });
    } else {
      isDenied = this.permissionService.isTabAccessDenied(tabNameInfo); //false;//this.constantsService.isTabAccessDenied(tabName);
    }

    if (isDenied) {
      this.el.nativeElement.disabled = true;
      this.el.nativeElement.classList.add('cursor-pointer-event-none');
    }
  }
}
