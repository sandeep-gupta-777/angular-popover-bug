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
    // let headerData:IHeaderData = {'api-key': '54asdkj1209nksnda',"content-type":'application/x-www-form-urlencoded'};
    let body = {
      "email":"ayeshreddy.k@imimobile.com",
      "password":"Botwoman@123!"
    };


    this.serverService.makePostReq<IUser>({url:loginUrl, body})
      .subscribe((user)=>{
        this.store.dispatch([
          new SetUserAction({user}),
          // new NavigateAction({route:'/'})
        ]);
          this.router.navigate(['/']);
      }
      )

  }

};
