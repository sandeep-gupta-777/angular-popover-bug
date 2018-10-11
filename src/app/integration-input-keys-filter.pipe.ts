import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'integrationInputKeysFilter'
})
export class IntegrationInputKeysFilterPipe implements PipeTransform {

  transform(arr: any, args?: any): any {
    console.log(arr)
    return Object.keys(arr).filter(key=>key!=='enabled')

  }

}
