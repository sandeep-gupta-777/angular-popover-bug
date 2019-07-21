import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTopAndBottomAndGetAsArray'
})
export class RemoveTopAndBottomAndGetAsArrayPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const lines = value.split('<br>');
    //
    lines.splice(0, 1);
    lines.splice(-1, 1);
    return lines;
  }

}
