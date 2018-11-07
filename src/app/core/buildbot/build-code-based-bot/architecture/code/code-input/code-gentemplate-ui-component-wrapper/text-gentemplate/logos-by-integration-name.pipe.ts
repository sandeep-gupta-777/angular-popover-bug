import { Pipe, PipeTransform } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAppState} from '../../../../../../../../ngxs/app.state';
import {IIntegrationMasterListItem, IMasterIntegrationResult} from '../../../../../../../../../interfaces/integration-option';

@Pipe({
  name: 'logosByIntegrationName'
})
export class LogosByIntegrationNamePipe implements PipeTransform {

  @Select() app$: Observable<IAppState>;
  masterIntegrationList: IIntegrationMasterListItem[];
  constructor() {
    this.app$.subscribe((appState) => {
      this.masterIntegrationList = appState.masterIntegrationList;
    });
  }

  transform(integrationName: string): any {


    let x;
    try {
      x =  this.masterIntegrationList.find((integrationMasterListItem) => {
        return integrationMasterListItem.unique_name.toUpperCase() === integrationName.toUpperCase();
      });
    } catch (e) {
      console.log(e);
    }

    return x;
  }

}
