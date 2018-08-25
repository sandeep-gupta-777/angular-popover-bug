
import {IEnterpriseProfileInfo} from '../../../../interfaces/enterprise-profile';
import {IEnterpriseUser} from '../../interfaces/enterprise-users';

export class SetEnterpriseInfoAction {
  static readonly type = '[view-bots] set enterpriseinfo';
  constructor(public payload:{enterpriseInfo:IEnterpriseProfileInfo }){

  }
}

export class SetEnterpriseUsersAction {
  static readonly type = '[enterprise-users] set enterpriseusers';
  constructor(public payload:{enterpriseUsers:IEnterpriseUser[]}){}
}

export class ResetEnterpriseUsersAction {
  static readonly type = '[enterprise-users] set ResetEnterpriseUsersAction';
  constructor(){}
}
