import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscroreToSpaceDelimitor'
})
export class UnderscroreToSpaceDelimitorPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value.split('_').join(" ");
  }

}
