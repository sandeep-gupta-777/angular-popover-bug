import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToHhmm'
})
export class MsToHhMmPipe implements PipeTransform {

  constructor() {

  }

  getCurrentTimeInHHMM(ms) {
    const date = new Date(ms);
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return hours + ':' + minutes;
  }

  transform(time_ms: any, args?: any): any {
    debugger;
    return this.getCurrentTimeInHHMM(time_ms);
  }

}
