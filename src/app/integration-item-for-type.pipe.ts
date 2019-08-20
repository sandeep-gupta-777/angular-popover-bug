import { Pipe, PipeTransform } from '@angular/core';
import {Select} from '@ngxs/store';
import {UtilityService} from './utility.service';
import {Observable} from 'rxjs';
import {IIntegrationMasterListItem} from '../interfaces/integration-option';
import {IAppState} from './ngxs/app.state';

@Pipe({
  name: 'integrationItemForType'
})
export class IntegrationItemForTypePipe implements PipeTransform {

  masterIntegrationList: IIntegrationMasterListItem[];
  @Select() app$: Observable<IAppState>;
  constructor(private utilityService: UtilityService) {
    this.app$.subscribe((appState) => {
      this.masterIntegrationList = appState.masterIntegrationList;
    });
  }
  transform(type: string): any {
    const integrationItems =   this.masterIntegrationList
      .filter((masterIntegrationItem) => masterIntegrationItem.type === type);
      // .map(masterIntegrationItem => masterIntegrationItem.key);
    return integrationItems;
  }

}
