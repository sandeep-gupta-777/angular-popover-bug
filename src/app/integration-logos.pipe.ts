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
    debugger;
    /*remove the integration key if its not enabled*/
    for (let key in integrations) {

        try{
          if(!integrations[key].enabled){
            delete integrations[key]
          }
        }catch (e) {
          console.log(e);
        }

      // for (let key in integrations[integration]){
      //   try{
      //     if(!integrations[integration][key].enabled){
      //       delete integrations[integration][key]
      //     }
      //   }catch (e) {
      //     console.log(e);
      //   }
      // }
    }

    debugger;
    if(!Object.keys(integrations) || Object.keys(integrations).length ===0) return;
    return this.app$.map((value)=>{
      let integrationsMasterList = value.masterIntegrationList;
      let arr = Object.keys(integrations).map((key)=>{
        let x =  integrationsMasterList.find((integrationsMasterListItem)=>{
          // console.log(integrationsMasterListItem.unique_name.toUpperCase(), key.toUpperCase());
          return integrationsMasterListItem.unique_name.toUpperCase() === key.toUpperCase();
        });
        return x;
      });
      return arr;
    });

  }

}
