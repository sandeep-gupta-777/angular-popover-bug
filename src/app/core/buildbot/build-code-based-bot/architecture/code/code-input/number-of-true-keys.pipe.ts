import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numberOfTrueKeys'
})
export class NumberOfTrueKeysPipe implements PipeTransform {

  transform(obj: any): any {
    let numberOfTrueKeys = 0;
    try {
      for (const key of Object.keys(obj)) {
        if (obj[key]) {
          ++numberOfTrueKeys;
        }
      }
    } catch (e) {
      console.log(e);
    }
    return numberOfTrueKeys;

  }
}
