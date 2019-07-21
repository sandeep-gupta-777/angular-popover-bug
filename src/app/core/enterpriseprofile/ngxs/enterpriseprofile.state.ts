import {Action, Selector, State, StateContext} from '@ngxs/store';
import {IEnterpriseProfileInfo} from '../../../../interfaces/enterprise-profile';
import {ResetEnterpriseUsersAction, SetEnterpriseInfoAction, SetEnterpriseUsersAction, SetEnterpriseServiceKeyAction} from './enterpriseprofile.action';

const initialState = {
  'id': '',
  enterpriseUniqueName: '',
  'created_at': '',
  'email': '',
  'enterprise_unique_name': '',
  'industry': '',
  'logo': '',
  'name': '',
  'phone': '',
  'tier': '',
  'updated_at': '',
  'updated_by': null,
  'websiteUrl': '',
  'enterpriseusers': [],
  'tier_group': null,
  'log_retention_period': '',
  'secret_key': '',

};
@State<Partial<IEnterpriseProfileInfo>>({
  name: 'loggeduserenterpriseinfo',
  defaults: initialState
})

export class EnterpriseprofileStateReducer {

  @Action(SetEnterpriseInfoAction)
  SetEnterpriseInfo({patchState, setState, getState, dispatch}: StateContext<IEnterpriseProfileInfo>, {payload}: SetEnterpriseInfoAction) {
    patchState(payload.enterpriseInfo);
  }

  // shoaib
  @Action(SetEnterpriseUsersAction)
  setEnterpriseUsers({patchState, setState, getState, dispatch}: StateContext<IEnterpriseProfileInfo>, {payload}: SetEnterpriseUsersAction) {
    //
    // alert("reducer");
    patchState({enterpriseusers: payload.enterpriseUsers});
  }

  @Action(SetEnterpriseServiceKeyAction)
  setEnterpriseServiceKeyAction({patchState, setState, getState, dispatch}: StateContext<IEnterpriseProfileInfo>, {payload}: SetEnterpriseServiceKeyAction) {

    // alert("reducer");
    patchState({service_key: payload.service_key});
  }

  @Action(ResetEnterpriseUsersAction)
  resetEnterpriseUsersAction({patchState, setState, getState, dispatch}: StateContext<IEnterpriseProfileInfo>) {
    setState(<any>initialState);
  }
}
