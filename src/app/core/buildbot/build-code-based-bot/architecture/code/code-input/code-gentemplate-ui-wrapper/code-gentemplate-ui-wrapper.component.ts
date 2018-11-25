import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {EBotVersionTabs} from '../code-input.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {NgForm} from '@angular/forms';
import {UtilityService} from '../../../../../../../utility.service';
import {ModalConfirmComponent} from '../../../../../../../modal-confirm/modal-confirm.component';
import {MatDialog} from '@angular/material';
import {GentemplateEditKeyComponent} from '../code-gentemplate-ui-component-wrapper/gentemplate-edit-key/gentemplate-edit-key.component';

export interface ICarousalItem {
  'image_url': string;
  'button': [{ 'type': string, 'title': string, 'payload': string }];
  'title': string;
  /*custom added*/
  subtitle?: string;
}

export interface IQuickReplyItem {
  'content_type': 'text';
  'title': string;
  'payload': string;
  /*custom fields*/
  textType?: string; //payload, url
}

export interface IOutputItem {
  text?: string[];
  code?: string;
  include?: string[];
  generic_template?: { 'elements': ICarousalItem[] }[];
  'quick_reply': [{
    'text': string,
    'quick_replies': [
      IQuickReplyItem
      ]
  }];

}


@Component({
  selector: 'app-code-gentemplate-ui-wrapper',
  templateUrl: './code-gentemplate-ui-wrapper.component.html',
  styleUrls: ['./code-gentemplate-ui-wrapper.component.scss']
})
export class CodeGentemplateUiWrapperComponent implements OnInit, OnDestroy {

  myEBotVersionTabs = EBotVersionTabs;
  myObject = Object;
  @Input() activeTab;
  @Input() channelList;
  newTemplateKey: string;
  templateKeyCreationError = '';
  @ViewChild('channelSelectorForm') channelSelectorForm: NgForm;

  modalRefWrapper = {ref:null};
  selectedChannelOfGenTemplate;
  @Input() bot;
  @Input() templateKeyDict;
  channelNameList;
  // @Input() selectedTemplateKeyOutputIndex;
  selectedTemplateKeyOutputIndex = [];
  selectedTemplateKeyInLeftSideBar;
  // @Output() deleteGentemplate = new EventEmitter;
  // @Output() moveUpGentempate = new EventEmitter;
  // @Output() moveDownGentempate = new EventEmitter;
  // @Output() selectGentempate = new EventEmitter;
  @Output() openNewIntentModal$ = new EventEmitter;
  @Output() openEditTemplateKeyModal$ = new EventEmitter();
  @Output() openDeleteTemplateKeyModal$ = new EventEmitter();
  @Output() convertUiDictToGenTemplateCode$ = new EventEmitter();
  templateKeySearchKeyword: string;
  templateKeyDictClone;

  constructor(
    private modalService: BsModalService,
    private utilityService: UtilityService,
    private matDialog: MatDialog,
  ) {
  }

  ngOnInit() {
    try {
      this.templateKeyDictClone = this.utilityService.createDeepClone(this.templateKeyDict);
      this.selectedTemplateKeyInLeftSideBar = Object.keys(this.templateKeyDict)[0];
      this.channelSelectorForm.form.patchValue({name: 'all'});
      this.channelNameList = this.channelList.map((channel) => {
        return channel.name;
      }).filter(e => e !== 'all');
    } catch (e) {
      console.log(e);
    }
  }

  isTemplateKeyOutputUnparsable() {
    return this.activeTab === this.myEBotVersionTabs.generation_templates &&
      this.templateKeyDict &&
      typeof this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar] === 'string';
  }


  updateSelectedTemplateKeyValue(codeStr: string) {
    console.log('sadasads');
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar] = codeStr;
  }

  async selectedListCopyModel(IntentSelectionModal) {
    // this.modalRefWrapper = this.modalService.show(IntentSelectionModal, {class: 'modal-lg'});


    let data = await this.utilityService.openDialog({
      dialog: this.matDialog,
      component: IntentSelectionModal,
      data: null,
      classStr: 'primary-modal-header-border',
      dialogRefWrapper: this.modalRefWrapper
    });

    if (data) {
      // this.deleteTemplateKey(tempKey);
    }
  }

  addCodeUnit() {


    const codeUnit = {
      'include': this.createIncludesArray(),
      'code': ['Write ur text here .....']
    };
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(codeUnit);
    setTimeout(() => this.scrollToBottom());
  }

  addQuickReplyUnit() {
    const quickReplyUnit = {
      'include': this.createIncludesArray(),
      'quick_reply': [{
        'text': 'Would you like us to activate this ?',
        'quick_replies': []
      }]
    };
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(quickReplyUnit);
    setTimeout(() => this.scrollToBottom());

  }

  clearNewTemplateKeyData() {

    this.modalRefWrapper.ref.close();
    this.newTemplateKey = '';
    this.templateKeyCreationError = '';
  }

  addImageCaraosalUnit() {
    const caraosalUnit = {
      'include': this.createIncludesArray(),
      'generic_template': [{
        'elements': [{
          'image_url': 'https://s3-us-west-2.amazonaws.com/o2bot/image/carousel_pay_bills.jpg',
          'button': [{'type': 'postback', 'title': 'Renew Now', 'payload': 'expire'}],
          'title': 'Contract Renewal'
        }]
      }]
    };
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(caraosalUnit);
    setTimeout(() => this.scrollToBottom());

  }

  addTextUnit() {
    const textUnit = {
      'include': this.createIncludesArray(),
      'text': ['']
    };
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(textUnit);
    setTimeout(() => this.scrollToBottom());

  }

  createIncludesArray() {
    return Array.isArray(this.channelNameList) ? ['web', ...this.channelNameList] : ['web'];
    ;
  }

  scrollToBottom(): void {

    try {
      /*TODO: use ViewChildren instead of class name.
      * TODO: put animation here*/
      // this.genTempGridItemGrid.nativeElement.scrollTop = this.genTempGridItemGrid.nativeElement.scrollHeight -500;
      // let arr = this.gentemplateItems.toArray();
      // let lastItem = arr[arr.length-1]
      // lastItem.nativeElement.scrollIntoView();
      // console.log(lastItem.nativeElement);

      const arr1 = document.getElementsByClassName('gentemplateItem');
      const x = arr1[arr1.length - 1];
      x.scrollIntoView();


    } catch (err) {
      console.log(err);
    }
  }


  selectedListDelete() {
    this.selectedTemplateKeyOutputIndex.sort((a, b) => b - a);
    for (const i of this.selectedTemplateKeyOutputIndex) {
      this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].splice(i, 1);
    }
    this.selectedTemplateKeyOutputIndex = [];
  }


  selectedListCopy(modelGenTempNameForm: NgForm) {

    const selectedTemplateKeyObject = modelGenTempNameForm.value;
    /*Example: selectedTemplateKeyObject  = {A1:true, A2:false}*/
    const selectedGenTempObjList = [];
    for (const i of this.selectedTemplateKeyOutputIndex) {
      selectedGenTempObjList.push(this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][i]);
    }

    const selectedIntentDestinationKeys = Object.keys(selectedTemplateKeyObject).filter((key) => selectedTemplateKeyObject[key]);
    for (const key of selectedIntentDestinationKeys) {
      // this.templateKeyDict[key].push(...selectedGenTempObjList);
      this.templateKeyDict[key].push(...JSON.parse(JSON.stringify(selectedGenTempObjList)));
    }
    this.selectedTemplateKeyOutputIndex = [];
    this.modalRefWrapper.ref.close();
  }


  selectedListDuplicate() {

    for (let i of this.selectedTemplateKeyOutputIndex) {
      this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(JSON.parse(JSON.stringify(this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][i])));
    }
    this.selectedTemplateKeyOutputIndex = [];
  }

  copyModalTemplateSearchKeyword = '';

  selectAllCheckBoxesInCopyTemplateForm(form: NgForm) {
    const formVal = form.value;
    for (const key in formVal) {
      formVal[key] = true;
    }
    form.form.patchValue(formVal);
  }

  deleteGentemplate(e) {
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].splice(e, 1);
    // console.log(this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar]);
  }

  moveUpGentempate(e) {
    const temp = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e] = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e - 1];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e - 1] = temp;
  }

  moveDownGentempate(e) {
    if (this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].length == e + 1) {
      console.log('just dot do that , U know Y');
      return;
    }
    const temp = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e] = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e + 1];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e + 1] = temp;
  }

  createNewTemplatekey() {
    this.newTemplateKey = this.newTemplateKey.trim();
    const isTemplateKeyUnique = !Object.keys(this.templateKeyDict).find((key) => key === this.newTemplateKey);
    if (!isTemplateKeyUnique || !this.newTemplateKey) {
      this.templateKeyCreationError = 'This template key already exists';
      return;
    }
    this.templateKeyCreationError = '';
    const intentUnit = {};
    intentUnit[this.newTemplateKey] = [{
      'text': [''],
      'include': this.createIncludesArray(),
    }];
    // this.templateKeyDict = {...this.templateKeyDict, ...intentUnit};
    this.templateKeyDict = Object.assign(this.templateKeyDict, intentUnit);
    this.modalRefWrapper.ref.close();
    this.selectedTemplateKeyInLeftSideBar = this.newTemplateKey;
    this.newTemplateKey = '';
  }

  selectGentempate(e) {
    const i = JSON.parse(e);
    if (i.select) {
      this.selectedTemplateKeyOutputIndex.push(i.index);
    }
    if (!(i.select)) {
      const index = this.selectedTemplateKeyOutputIndex.indexOf(i.index);
      if (index > -1) {
        this.selectedTemplateKeyOutputIndex.splice(index, 1);
      }
    }
  }

  editTemplateKey({old_key, new_key}) {
    // const new_key = templateKeyEditForm.value;
    let doesNewKeyAlreadyExistsInTemplateKeyDict = Object.keys(this.templateKeyDict).find(key => new_key === key);
    if (doesNewKeyAlreadyExistsInTemplateKeyDict) {
      this.templateKeyCreationError = 'Template Key name already exists';
      return;
    } else if (!new_key.trim()) {
      this.templateKeyCreationError = 'Template Key can\'t be empty';
      return;
    }
    this.utilityService.renameKeyInObject(this.templateKeyDict, old_key, new_key);
    this.selectedTemplateKeyInLeftSideBar = new_key;
    this.modalRefWrapper.ref.close();
  }

  // openDeleteTemplateKeyModal(deleteTemplateKeyModal) {
  //   this.modalRefWrapper = this.modalService.show(deleteTemplateKeyModal);
  // }

  async openDeleteTemplateKeyModal(tempKey) {
    let data = await this.utilityService.openDialog({
      dialog: this.matDialog,
      component: ModalConfirmComponent,
      data: {
        title: `Delete template key: ${tempKey}?`,
        message: 'This action cannot be undone.Are you sure you wish to continue?',
        actionButtonText: 'Delete',
        isActionButtonDanger: true,
      },
      dialogRefWrapper: this.modalRefWrapper,
      classStr: 'danger-modal-header-border'
    });

    if (data) {
      this.deleteTemplateKey(tempKey);
    }
  }

  // openEditTemplateKeyModal(EditTemplateKeyModal) {
  //   this.modalRefWrapper = this.modalService.show(EditTemplateKeyModal);
  // }

  async openNewIntentModal(IntentModal) {
    let dialogRefWrapper = {ref:this.modalRefWrapper};
    let dataPromise$ = this.utilityService.openDialog({
      dialog: this.matDialog,
      component: IntentModal,
      data: null,
      dialogRefWrapper,
      classStr: 'primary-modal-header-border'
    });

    let data = await dataPromise$;

    if (data) {
      // this.editTemplateKey({old_key:tempKey, new_key:data});
    }
  }

  async openEditTemplateKeyModal(tempKey) {
    let data = await this.utilityService.openDialog({
      dialog: this.matDialog,
      component: GentemplateEditKeyComponent,
      data: {
        old_key:tempKey,
        templateKeyDict: this.templateKeyDict
      },
      dialogRefWrapper: this.modalRefWrapper,
      classStr: 'primary-modal-header-border'
    });

    if (data) {
      this.editTemplateKey({old_key:tempKey, new_key:data});
    }
  }

  // openNewIntentModal(template) {
  //   this.modalRefWrapper = this.modalService.show(template, {class: 'modal-w-30vw'});
  //   return;
  // }

  deleteTemplateKey(tempKey) {
    delete this.templateKeyDict[tempKey];
    this.utilityService.showSuccessToaster('Template key deleted!');
    this.modalRefWrapper.ref.close();
  }

  ngOnDestroy() {
    this.convertUiDictToGenTemplateCode$.emit(this.templateKeyDict);
    this.selectedTemplateKeyOutputIndex = [];
  }

  ngAfterViewInit() {
    this.channelSelectorForm.form.valueChanges.subscribe((value) => {
      this.selectedChannelOfGenTemplate = value;
    });
  }

  test() {
    // console.log(this.selectedVersion);
    // console.log(this.bot.store_bot_versions);
    console.log(this.templateKeyDict);
  }
}
