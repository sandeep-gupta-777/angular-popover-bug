import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spliceEllipsis'
})
export class SpliceEllipsisPipe implements PipeTransform {

  transform(str: string, length:number, ellipsis:boolean): any {
    if(!str){
      return '';
    }
    if(str.length<length){
      return str;
    }
    return str.slice(0, length) + "...";
  }

}
