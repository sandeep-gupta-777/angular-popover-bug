import {Action, Selector, State, StateContext} from '@ngxs/store';
import {IBot} from '../../interfaces/IBot';
import {IEnterpriseProfileInfo} from '../../../../interfaces/enterprise-profile';
import {SetEnterpriseInfoAction, SetEnterpriseUsersAction} from './enterpriseprofile.action';
import {IEnterpriseUser} from '../../interfaces/enterprise-users';


@State<IEnterpriseProfileInfo>({
  name:'loggeduserenterpriseinfo',
  defaults: {
    "_id": 'loading',
    "created_at": 'loading',
    "email": 'loading',
    "enterpriseUniqueName": 'loading',
    "industry": 'loading',
    "logo": 'loading',
    "name": 'loading',
    "phone": 'loading',
    "tier": 'loading',
    "updated_at": 'loading',
    "updated_by": 'loading',
    "websiteUrl": 'loading',
    "enterpriseusers":[]
  }
})

export class EnterpriseprofileStateReducer {

  @Action(SetEnterpriseInfoAction)
  SetEnterpriseInfo({patchState, setState, getState,dispatch}:StateContext<IEnterpriseProfileInfo>, {payload} : SetEnterpriseInfoAction){
    patchState(payload.enterpriseInfo);
  }

  @Action(SetEnterpriseUsersAction)
  setEnterpriseUsers({patchState, setState, getState,dispatch}:StateContext<IEnterpriseProfileInfo>, {payload} : SetEnterpriseUsersAction){
    patchState({enterpriseusers:payload.enterpriseUsers});
  }
}
