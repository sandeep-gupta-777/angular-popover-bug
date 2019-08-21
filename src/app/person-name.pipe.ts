import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personName'
})
export class PersonNamePipe implements PipeTransform {

  transform(name: string, args?: any): any {
    if (!name) {
      return '';
    }
    const nameSplits = name.split(' ');
    const firstName = nameSplits[0];
    const lastName = nameSplits.length >= 2 && nameSplits[1];
    return firstName + ' ' + lastName[0];
  }

}
