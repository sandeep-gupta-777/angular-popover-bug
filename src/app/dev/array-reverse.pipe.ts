import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverseArr' })

export class ReverseArrayPipe implements PipeTransform {
  transform(value) {
    if(!value){
      return [];
    }
    return value.slice().reverse();
  }
}