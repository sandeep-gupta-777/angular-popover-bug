import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {IAppState} from '../../../../../../ngxs/app.state';
import {IIntegrationMasterListItem} from '../../../../../../../interfaces/integration-option';

@Injectable({
  providedIn: 'root'
})
export class StoreVariableService {
  @Select() private app$: Observable<IAppState>;
  masterIntegrationList:IIntegrationMasterListItem[];
  masterIntegration_IntegrationKeyDisplayNameMap;
  constructor() {
    this.app$.take(4).subscribe((value) => {/*TODO: why its not working for take(2)??*/
      if(!value)return;
      this.masterIntegrationList = value.masterIntegrationList;
    });
  }


}
