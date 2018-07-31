import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from '../interfaces/user';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {IHeaderData} from '../../../interfaces/header-data';
import {SetUserAction} from '../../auth/ngxs/auth.action';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Select() loggeduser$: Observable<{user:IUser}>;
  @ViewChild('form') f:HTMLFormElement;
  loggeduser:IUser;

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private store:Store ) { }

  ngOnInit() {
    this.loggeduser$.subscribe((loggeduser)=>{
      this.loggeduser = loggeduser.user;;
    })
  }

  updateProfile(){
    let url:string = this.constantsService.getUserUpdateUrl();
    let body = {...this.loggeduser, ...this.f.value};
    let headerData:IHeaderData  = {"content-type": 'application/json'}
    this.serverService.makePutReq({url, body,headerData})
      .subscribe((value: IUser)=>{
        console.log(value);
        let updatedUser:IUser =  {...this.loggeduser, ...value}
        this.store.dispatch([
          new SetUserAction({user:updatedUser})
        ])
      })
  }

}
