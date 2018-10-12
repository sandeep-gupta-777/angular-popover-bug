import { Pipe, PipeTransform } from '@angular/core';
import {NgControl} from '@angular/forms';

@Pipe({
  name: 'errorDescription'
})
export class ErrorDescriptionPipe implements PipeTransform {

  transform(ngControl: NgControl, args?: any): any {

    return null;
  }

}
