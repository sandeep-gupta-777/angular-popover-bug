import {Component, OnInit, ViewChild} from '@angular/core';
import {ServerService} from '../../server.service';
import {ConstantsService, ERoleName} from '../../constants.service';
import {IUser} from '../../core/interfaces/user';
import {Store} from '@ngxs/store';
import {SetUserAction} from '../ngxs/auth.action';
import {IHeaderData} from '../../../interfaces/header-data';
import {Router} from '@angular/router';
import {UtilityService} from '../../utility.service';
import {IEnterpriseProfileInfo} from '../../../interfaces/enterprise-profile';
import {SetEnterpriseInfoAction} from '../../core/enterpriseprofile/ngxs/enterpriseprofile.action';
import {SetBackendURlRoot} from '../../ngxs/app.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  panelActive = 'login';
  errorMessage = '';

  disabeLoginButton = false;
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private utilityService: UtilityService,
    private store: Store) {
  }


  @ViewChild('heroForm') f: HTMLFormElement;

  ngOnInit() {
    // this.store.dispatch()
    this.serverService.makeGetReq({url:'/static/config.json', noValidateUser:true})
      .subscribe(((value:{"backend_url":string,"version":string})=>{
        // {"backend_url":"https://dev.imibot.ai/","version":"1.0.0"}
        this.store.dispatch([
          new SetBackendURlRoot({url: value.backend_url})
        ]);
      }));
  }

  flashErrorMessage(message:string, time_ms:number=3000){
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, time_ms);
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

    this.flashErrorMessage("Reaching out to the server", 100000);
    let headerData: IHeaderData ={
      "auth-token":null,
      'user-access-token':null
    };
    this.serverService.makePostReq<IUser>({url: loginUrl, body, headerData})
      .subscribe((user:IUser) => {

        this.disabeLoginButton =true;
        this.flashErrorMessage("Logged in. Taking you to home page", 100000);
        // this.constantsService.setPermissionsDeniedMap(user.role.permissions.actions);
        this.store.dispatch([
            new SetUserAction({user}),
          ]).subscribe(()=>{
          this.serverService.getNSetBotList()
            .subscribe(()=>{"bot list fetched from login page"});
          this.serverService.getNSetIntegrationList();
          if(user.role.name===ERoleName.Analyst){
              this.router.navigate(['/core/analytics2/users']);
            }else {
              this.router.navigate(['.']);
            }
          });

          let enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(user.enterprise_id);
          this.serverService.makeGetReq<IEnterpriseProfileInfo>({url: enterpriseProfileUrl})
          .subscribe((value: IEnterpriseProfileInfo) => {

            this.store.dispatch([
              new SetEnterpriseInfoAction({enterpriseInfo: value})
            ]);
          });
        },
        ()=>{
          this.flashErrorMessage("Login failed. Please try again", 100000);
        }
      );
  }

  showPanel(panel) {
    this.panelActive = panel;
  }
};
