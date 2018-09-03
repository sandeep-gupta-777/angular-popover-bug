import {Component, OnInit, ViewChild} from '@angular/core';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {IUser} from '../../core/interfaces/user';
import {Store} from '@ngxs/store';
import {SetUserAction} from '../ngxs/auth.action';
import {IHeaderData} from '../../../interfaces/header-data';
import {Router} from '@angular/router';
import {UtilityService} from '../../utility.service';
import {IEnterpriseProfileInfo} from '../../../interfaces/enterprise-profile';
import {SetEnterpriseInfoAction} from '../../core/enterpriseprofile/ngxs/enterpriseprofile.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  panelActive = 'login';
  errorMessage = '';

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private utilityService: UtilityService,
    private store: Store) {
  }


  @ViewChild('heroForm') f: HTMLFormElement;

  ngOnInit() {
  }

  flashErrorMessage(message:string){
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }

  onSubmit() {
    let loginData = this.f.value;
    let loginUrl = this.constantsService.getLoginUrl();
    // let headerData:IHeaderData = {'api-key': '54asdkj1209nksnda',"content-type":'application/x-www-f-urlencoded'};
    // let body = {
    //
    //   // "email":"ayeshreddy.k@imimobile.com",
    //   // "password":"Botwoman@123!"
    //   "email": "imibotadmin@imimobile.com",
    //   "password": "Botwoman@123!"
    // };
    let body;
    if (this.f.valid) {

      body = this.f.value;
    } else {
      this.flashErrorMessage("Details not valid");
      return;
    }


    let headerData: IHeaderData ={
      "auth-token":null,
      'user-access-token':null
    };
    this.serverService.makePostReq<IUser>({url: loginUrl, body, headerData})
      .subscribe((user) => {
        this.flashErrorMessage("Logged in. Taking you to home page");
        this.store.dispatch([
            new SetUserAction({user}),
          ]).subscribe(()=>{
            this.router.navigate(['/']);
          });
          let enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(user.enterprise_id);
          this.serverService.makeGetReq<IEnterpriseProfileInfo>({url: enterpriseProfileUrl})
          .subscribe((value: IEnterpriseProfileInfo) => {

            this.store.dispatch([
              new SetEnterpriseInfoAction({enterpriseInfo: value})
            ]);
          });
        }
      );
  }

  showPanel(panel) {
    this.panelActive = panel;
  }
};
