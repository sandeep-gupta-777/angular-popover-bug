
export class AuthGaurdService{

  static doesAuthTokenExists() {
    try {/*TODO: implement it better*/
      return !!JSON.parse(localStorage.getItem('@@STATE')).loggeduser.user.auth_token;
    } catch (e) {
      return false;;
    }
  }

}
