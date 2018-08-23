import {Action, Selector, State, StateContext} from '@ngxs/store';
import {IBot} from '../../interfaces/IBot';
import {IEnterpriseProfileInfo} from '../../../../interfaces/enterprise-profile';
import {SetEnterpriseInfoAction, SetEnterpriseUsersAction} from './enterpriseprofile.action';
import {IEnterpriseUser} from '../../interfaces/enterprise-users';


@State<Partial<IEnterpriseProfileInfo>>({
  name: 'loggeduserenterpriseinfo',
  defaults: {
    'id': '',
    'created_at': '',
    // "email": '',
    'enterprise_unique_name': '',
    // "industry": '',
    'logo': '',
    'name': '',
    // "phone": '',
    // "tier": '',
    'updated_at': '',
    'updated_by': null,
    // "websiteUrl": '',
    // "enterpriseusers":[]
  }
})

export class EnterpriseprofileStateReducer {

  @Action(SetEnterpriseInfoAction)
  SetEnterpriseInfo({patchState, setState, getState, dispatch}: StateContext<IEnterpriseProfileInfo>, {payload}: SetEnterpriseInfoAction) {
    patchState(payload.enterpriseInfo);
  }

  @Action(SetEnterpriseUsersAction)
  setEnterpriseUsers({patchState, setState, getState, dispatch}: StateContext<IEnterpriseProfileInfo>, {payload}: SetEnterpriseUsersAction) {
    patchState({enterpriseusers: payload.enterpriseUsers});
  }
}
