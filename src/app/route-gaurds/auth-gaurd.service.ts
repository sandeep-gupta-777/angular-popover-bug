import {ENgxsStogareKey} from '../typings/enum';

export class AuthGaurdService{

  static doesAuthTokenExists() {
    try {/*TODO: implement it better*/
      return !!JSON.parse(localStorage.getItem(ENgxsStogareKey.IMI_BOT_STORAGE_KEY)).loggeduser.user;
    } catch (e) {
      return false;;
    }
  }

}
