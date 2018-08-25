import { Pipe, PipeTransform } from '@angular/core';
import {IIntegrationOption, IMasterIntegration} from '../interfaces/integration-option';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAppState} from './ngxs/app.state';

@Pipe({
  name: 'integrationLogos'
})
export class IntegrationLogosPipe implements PipeTransform {

  @Select() app$:Observable<IAppState>;
  transform(integrationOption: IIntegrationOption, args?: any): any {
    let integrations = {
      ...integrationOption.channels,
      ...integrationOption.fulfillment_provider_details,
      ...integrationOption.ccsp_details,
    };
    if(!Object.keys(integrations) || Object.keys(integrations).length ===0) return;
    return this.app$.map((value)=>{
      let integrationsMasterList = value.masterIntegrationList;
      let arr = Object.keys(integrations).map((key)=>{
        let x =  integrationsMasterList.find((integrationsMasterListItem)=>{
          return integrationsMasterListItem.unique_name.toUpperCase() === key.toUpperCase();
        });
        return x;
      });
      return arr;
    });

  }

}
