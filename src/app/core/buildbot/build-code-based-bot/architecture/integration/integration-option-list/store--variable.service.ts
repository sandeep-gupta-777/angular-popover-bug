import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {IAppState} from '../../../../../../ngxs/app.state';
import {IIntegrationMasterListItem} from '../../../../../../../interfaces/integration-option';

export interface IStore {
  reportItem: any,
  botcreationstate: any,
  chatsessionstate: any,
  analysisstate2: any,
  app: any,
  botlist: any,
  loggeduser: any,
  loggeduserenterpriseinfo: any,
}

@Injectable({
  providedIn: 'root'
})
export class StoreVariableService {
  storeState: IStore=null;

  constructor(private store: Store) {
    this.store
      .subscribe((state) => {
          this.storeState = state;
        }
      );
  }

  getApp(){
    if(this.storeState){
      return this.storeState.app;
    }
    return null;
  }
}
