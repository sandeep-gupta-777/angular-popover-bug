import {Directive, Input, ElementRef, TemplateRef, ViewContainerRef} from '@angular/core';
import {UtilityService} from './utility.service';
import {ConstantsService, EAllActions} from './constants.service';
import {PermissionService} from './permission.service';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective {

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionService
  ) {
  }

  @Input() set myIf(tabNameInfo: any/*EAllActions|EAllActions[]*/) {/*tabNameInfo can be one tabname string or array of tabname strings*/
    /*TODO: make it accept array as well*/
    // let isDenied:boolean =  this.constantsService.isAccessDeniedDynamic(tabName);
    // let isDenied:boolean =  this.constantsService.isTabAccessDenied(tabName);
    let isDenied: boolean = true;
    // ;

    if (Array.isArray(tabNameInfo)) {
      tabNameInfo.forEach((tab) => {
        isDenied = isDenied && this.permissionService.isTabAccessDenied(tab);
      });
    } else {
      isDenied = this.permissionService.isTabAccessDenied(tabNameInfo);//false;//this.constantsService.isTabAccessDenied(tabName);

    }
    if (!isDenied) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
