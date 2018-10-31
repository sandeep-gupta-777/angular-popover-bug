import { Pipe, PipeTransform } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IIntegrationMasterListItem} from '../interfaces/integration-option';
import {IAppState} from './ngxs/app.state';
import {UtilityService} from './utility.service';

@Pipe({
  name: 'typeForIntegrationType'
})
export class TypeForIntegrationTypePipe implements PipeTransform {

  masterIntegrationList:IIntegrationMasterListItem[];
  @Select() app$: Observable<IAppState>;
  constructor(private utilityService:UtilityService){
    this.app$.subscribe((appState)=>{
      this.masterIntegrationList = appState.masterIntegrationList;
    })
  }
  transform(integration_type: any, args?: any): any {
    let types:string[] =   this.masterIntegrationList
      .filter((masterIntegrationItem)=>masterIntegrationItem.integration_type===integration_type)
      .map((masterIntegrationItem)=>masterIntegrationItem.type);

    return this.utilityService.deDupPrimitiveArray(types);

  }


}
