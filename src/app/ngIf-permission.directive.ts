import {Directive, Input, ElementRef, TemplateRef, ViewContainerRef} from '@angular/core';
import {PermissionService} from './permission.service';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionService
  ) {
  }
  useOrOperation = false;
  @Input('appMyIfUseOrOperation') set appMyIfUseOrOperation(val){
    this.useOrOperation = val;
  };
  @Input() set appMyIf(tabNameInfo: any/*EAllActions|EAllActions[]*/) {/*tabNameInfo can be one tabname string or array of tabname strings*/
    /*TODO: make it accept array as well*/
    // let isDenied:boolean =  this.constantsService.isAccessDeniedDynamic(tabName);
    // let isDenied:boolean =  this.constantsService.isTabAccessDenied(tabName);
     
    setTimeout(()=>{
      let isDenied = true;
      // ;


      if (Array.isArray(tabNameInfo) ) {
        if( this.useOrOperation) {
          isDenied = false;
          tabNameInfo.forEach((tab) => {
            isDenied = isDenied || this.permissionService.isTabAccessDenied(tab);
          });
        }else{
          tabNameInfo.forEach((tab) => {
            isDenied = isDenied && this.permissionService.isTabAccessDenied(tab);
          });
        }
      }else {
        isDenied = this.permissionService.isTabAccessDenied(tabNameInfo); // false;//this.constantsService.isTabAccessDenied(tabName);

      }
      if (!isDenied) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    },0)
  }
}
