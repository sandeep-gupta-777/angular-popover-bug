import {UtilityService} from './utility.service';

export abstract class ModalImplementer{
  public dialogRefWrapper = {ref:null};
  public abstract matDialog;
  public utilityService;
  constructor(utilityService:UtilityService, matDialog) {}

  public openPrimaryModal(IntentModal) {

    return this.utilityService.openDialog({
      dialog: this.matDialog,
      component: IntentModal,
      data: null,
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'primary-modal-header-border'
    });
  }

  openDangerModal(IntentModal, classStr?: {class:string}) {
    return this.utilityService.openDialog({
      dialog: this.matDialog,
      component: IntentModal,
      data: null,
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border'
    });
  }


}
