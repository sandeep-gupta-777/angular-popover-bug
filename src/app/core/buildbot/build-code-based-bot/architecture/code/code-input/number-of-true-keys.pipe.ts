import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numberOfTrueKeys'
})
export class NumberOfTrueKeysPipe implements PipeTransform {

  transform(obj: any): any {
    let numberOfTrueKeys: number = 0;
    try {
      for (let key of Object.keys(obj)) {
        obj[key] && ++numberOfTrueKeys;
      }
    }catch (e) {
      console.log(e)
    }
    return numberOfTrueKeys;

  }
}
