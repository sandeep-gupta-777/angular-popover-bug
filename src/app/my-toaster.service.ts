import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ReloadSnackbarComponent} from './reload-snackbar/reload-snackbar.component';

@Injectable()
export class MyToasterService {
  constructor(public snackBar: MatSnackBar) {


  }

  showErrorToaster(message: string, sec = 4) {

    try {
      this.snackBar.open(message || 'Some error occurred', '', {
        duration: (sec * 1000) || 2000,
        panelClass: ['bg-danger-snackbar'],
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    } catch (e) {
      console.log(e);
    }
    // if (typeof message === 'string') {
    //   // this.toastr.error(message, null, {positionClass: 'toast-top-right', timeOut: sec * 1000});
    //   this.snackBar.open(message, '', {
    //     duration: (sec * 1000)||2000,
    //     panelClass:["bg-success"]
    //   });
    //   return;
    // } else {
    //   this.snackBar.open(message.message, '', {
    //     duration: (sec * 1000)||2000,
    //     panelClass:["bg-success"]
    //   });
    //   this.toastr.error(message.message, null, {positionClass: 'toast-top-right', timeOut: sec * 1000});
    // }
  }

  showSuccessToaster(message) {
    // this.toastr.success(message, null, {positionClass: 'toast-top-right', timeOut: 2000});
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['bg-success'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  showInfoToaster() {
    // this.toastr.success(message, null, {positionClass: 'toast-top-right', timeOut: 2000});
    const dialogRefWrapper = this.snackBar.openFromComponent(ReloadSnackbarComponent, {
      duration: 100000000,
      panelClass: ['reload-info-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
      data: {
        preClose: () => {
          dialogRefWrapper.dismiss();
        }
      }
    });
  }

}
