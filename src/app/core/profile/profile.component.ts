import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IUser} from '../interfaces/user';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {SetUser} from '../../auth/ngxs/auth.action';
import {UtilityService} from '../../utility.service';
import {NgForm} from '@angular/forms';
import {ModalImplementer} from '../../modal-implementer';
import {MatDialog} from '@angular/material';
import {EAllActions} from '../../typings/enum';
import {LoggingService} from '../../logging.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends ModalImplementer implements OnInit, OnDestroy {

  myEAllActions = EAllActions;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  @ViewChild('form') f: HTMLFormElement;
  @ViewChild('password_form') passwordForm: NgForm;
  showPasswordChangeForm = true;
  loggeduser: IUser;
  passwordErrorStr: string;

  new_password;
  new_password_confirm;
  old_password;

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    public utilityService: UtilityService,
    public matDialog: MatDialog,
    private store: Store) {
    super(utilityService, matDialog);
  }

  ngOnInit() {
    this.loggeduser$.subscribe((loggeduser) => {
      this.loggeduser = loggeduser.user;
    });

  }

  updateProfile() {
    if (!this.f.valid) {
      this.utilityService.showErrorToaster('Please fill valid values');
      return;
    }
    const url: string = this.constantsService.getUserUpdateUrl(this.loggeduser.id);
    //  ;
    //  let body = {...this.loggeduser, ...this.f.value};
    const body = this.f.value;
    this.serverService.makePutReq({url, body})
      .subscribe((value: IUser) => {
        const updatedUser: IUser = {...this.loggeduser, ...value};
        this.utilityService.showSuccessToaster('Updated profile');
        this.store.dispatch([
          new SetUser({user: updatedUser, is_loggedIn: true})
        ]);
      });
  }

  openChangePasswordModal(template: TemplateRef<any>) {
    this.showPasswordChangeForm = true;

    this.openPrimaryModal(template)
      .then(() => {
        this.old_password = this.new_password = this.new_password_confirm = '';
      });
  }

  changePassword() {
    // TODO: make use of forms here instead
    //  ;
    //  if(this.passwordForm.valid){
    const changePasswordUrl = this.constantsService.updatePassword();
    //    let formData =  this.passwordForm.value;
    //    formData.new_password_confirm && delete formData.new_password_confirm;
    if (this.old_password && this.new_password && this.new_password === this.new_password_confirm) {
      const body = {
        old_password: this.old_password,
        new_password: this.new_password
      };
      this.serverService.makePostReq({url: changePasswordUrl, body})
        .subscribe((value: { 'error': boolean, 'message': string }) => {

          if (!value.error) {
            this.showPasswordChangeForm = false; // show success message
            try {
              this.dialogRefWrapper.ref.close();
            } catch (e) {
              console.log(e);
            }
          } else {

            //  this.flashErrorMessage(value.message);
            this.showPasswordChangeForm = true; // show form again
            this.new_password_confirm = this.new_password = this.old_password = '';
            //  return;
          }
          //  setTimeout(() => {
          //    this.showPasswordChangeForm = true; // show form again
          //    this.new_password_confirm = this.new_password = this.old_password = '';
          //  }, 3000);
        });
    } else if (this.new_password !== this.new_password_confirm) {
      this.flashErrorMessage('passwords dont match');

    } else {
      this.flashErrorMessage('form not valid');
    }

    //  }
  }

  flashErrorMessage(message) {
    this.passwordErrorStr = message;
    setTimeout(() => {
      this.passwordErrorStr = '';

    }, 3000);
  }

  ngOnDestroy(): void {
    try {
      this.dialogRefWrapper.ref.close();
    } catch (e) {
      LoggingService.error(e);
    }
  }

}
