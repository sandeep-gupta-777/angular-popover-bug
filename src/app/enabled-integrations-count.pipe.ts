import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enabledIntegrationsCount'
})
export class EnabledIntegrationsCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
