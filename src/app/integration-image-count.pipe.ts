import { Pipe, PipeTransform } from '@angular/core';
import {IIntegrationOption} from '../interfaces/integration-option';

@Pipe({
  name: 'integrationImageCount'
})
export class IntegrationImageCountPipe implements PipeTransform {

  transform(integrationOption: IIntegrationOption, args?: any): any {
    let integrations = {
      ...integrationOption.channels,
      ...integrationOption.fulfillment_provider_details,
      ...integrationOption.ccsp_details,
    };
    for(let key in integrations){
      if(!integrations[key].enabled){
        delete integrations[key];
      }
    }
    return Object.keys(integrations).length;
  }

}
