import { Pipe, PipeTransform } from '@angular/core';
import {IAppState} from '../../../../../../ngxs/app.state';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {IIntegrationMasterListItem} from '../../../../../../../interfaces/integration-option';

@Pipe({
  name: 'integrationNameFormatter'
})
export class IntegrationNameFormatterPipe implements PipeTransform {
  masterIntegrationList: IIntegrationMasterListItem[];
  @Select() app$: Observable<IAppState>;
  constructor() {
    this.app$.subscribe((appState) => {
      this.masterIntegrationList = appState.masterIntegrationList;
    });
  }
  transform(integration_type: any, args?: any): any {
    const masterIntegrationItem =   this.masterIntegrationList.find((masterIntegrationItem) => masterIntegrationItem.integration_type === integration_type);
    return masterIntegrationItem.type;
  }

}
