import {Component, OnInit, ViewChild} from '@angular/core';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {IUser} from '../../core/interfaces/user';
import {Store} from '@ngxs/store';
import {SetUserAction} from '../ngxs/auth.action';
import {NavigateAction} from '../../ngxs/navigation.action';
import {IHeaderData} from '../../../interfaces/header-data';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UtilityService} from '../../utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private utilityService:UtilityService,
    private store: Store) { }


  @ViewChild('heroForm') f : HTMLFormElement;

  ngOnInit() {
  }

  onSubmit(){
    let loginData = this.f.value;
    let loginUrl = this.constantsService.BACKEND_URL_LOGIN
    let headerData:IHeaderData = {'api-key': '54asdkj1209nksnda',"content-type":'application/x-www-form-urlencoded'};
    console.log(loginData);
    let body =  new URLSearchParams();
    body.set('email', 'demos@imimobile.com');
    body.set('password', 'Botwoman@123!');
    let bodystr = body.toString();

    this.serverService.makePostReq<IUser>({url:loginUrl, body:bodystr, headerData})
      .subscribe((user)=>{
        console.log(user);

        this.store.dispatch([
          new SetUserAction({user}),
          // new NavigateAction({route:'/'})
        ]);
          this.router.navigate(['/']);
      }
      )

  }

};
