import { Pipe, PipeTransform } from '@angular/core';
import {UtilityService} from './utility.service';
import {FormControl} from '@angular/forms';

@Pipe({
  name: 'checkImageValidity'
})
export class CheckImageValidityPipe implements PipeTransform {


  constructor(private utilityService:UtilityService) {
  }

  transform(url: string): any {
    console.log();
    let x =  !this.utilityService.imageUrlHavingValidExtnError(new FormControl(url)) &&
      !this.utilityService.imageUrlHttpsError(new FormControl(url))
    return x;
  }

}
