import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'integrationInputKeysFilter'
})
export class IntegrationInputKeysFilterPipe implements PipeTransform {

  transform(arr: any, args?: any): any {
    return Object.keys(arr).filter(key => key !== 'enabled');

  }

}
