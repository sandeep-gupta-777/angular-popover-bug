import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IUser} from '../interfaces/user';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {IHeaderData} from '../../../interfaces/header-data';
import {SetUserAction} from '../../auth/ngxs/auth.action';
import {UtilityService} from '../../utility.service';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {NgForm} from '@angular/forms';
import {SetMasterProfilePermissions} from '../../ngxs/app.action';
import {IProfilePermission} from '../../../interfaces/profile-action-permission';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @ViewChild('form') f: HTMLFormElement;
  @ViewChild('password_form') passwordForm: NgForm;
  showPasswordChangeForm = true;
  loggeduser: IUser;
  modalRef: BsModalRef;
  passwordErrorStr: string;

  new_password;
  new_password_confirm;
  old_password;

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private modalService: BsModalService,
    private store: Store) {
  }

  ngOnInit() {
    this.loggeduser$.subscribe((loggeduser) => {
      this.loggeduser = loggeduser.user;
    });

    let allActionsUrl = this.constantsService.getAllActionsUrl();
    this.serverService.makeGetReq<{meta:any, objects:IProfilePermission[]}>({url:allActionsUrl})
      .subscribe(({objects})=>{
        this.store.dispatch([
          new SetMasterProfilePermissions({masterProfilePermissions: objects})
        ]);
      })
  }

  updateProfile() {
    if (!this.f.valid) {
      this.utilityService.showErrorToaster(new Error('please fill valid values'));
      return;
    }
    let url: string = this.constantsService.getUserUpdateUrl(this.loggeduser.id);
    // ;
    // let body = {...this.loggeduser, ...this.f.value};
    let body = this.f.value;
    this.serverService.makePutReq({url, body})
      .subscribe((value: IUser) => {
        let updatedUser: IUser = {...this.loggeduser, ...value};
        this.store.dispatch([
          new SetUserAction({user: updatedUser})
        ]);
      });
  }

  openChangePasswordModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});

  }

  changePassword() {
    //TODO: make use of forms here instead
    // ;
    // if(this.passwordForm.valid){
    let changePasswordUrl = this.constantsService.updatePassword();
    //   let formData =  this.passwordForm.value;
    //   formData.new_password_confirm && delete formData.new_password_confirm;
    if (this.old_password && this.new_password && this.new_password === this.new_password_confirm) {
      let body = {
        old_password: this.old_password,
        new_password: this.new_password
      };
      this.serverService.makePostReq({url: changePasswordUrl, body})
        .subscribe((value: { 'error': boolean, 'message': string }) => {
          if (value.error) {
            this.flashErrorMessage(value.message);
            return;
          }
          this.showPasswordChangeForm = false;//show success message
          setTimeout(() => {
            this.showPasswordChangeForm = true;//show form again
            this.new_password_confirm = this.new_password = this.old_password = '';
          }, 3000);
        });
    } else if (this.new_password !== this.new_password_confirm) {
      this.flashErrorMessage('passwords dont match');

    } else {
      this.flashErrorMessage('form not valid');
    }

    // }
  }

  flashErrorMessage(message) {
    this.passwordErrorStr = message;
    setTimeout(() => {
      this.passwordErrorStr = '';

    }, 3000);
  }

}
