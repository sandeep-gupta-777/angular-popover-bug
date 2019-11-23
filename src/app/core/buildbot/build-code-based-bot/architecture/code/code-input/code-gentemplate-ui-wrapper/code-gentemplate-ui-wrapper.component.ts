import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {UtilityService} from '../../../../../../../utility.service';
import {ModalConfirmComponent} from '../../../../../../../modal-confirm/modal-confirm.component';
import {MatDialog} from '@angular/material';
import {GentemplateEditKeyComponent} from '../code-gentemplate-ui-component-wrapper/gentemplate-edit-key/gentemplate-edit-key.component';
import {EBotVersionTabs} from '../../../../../../../../interfaces/code-input';
import {ETemplateResponseType} from '../../../../../../../typings/gentemplate';
import {IMLResponse} from '../../../../../../../typings/reply';
import {ConstantsService} from '../../../../../../../constants.service';

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
  textType?: string; // payload, url
}

export interface IOutputItem {
  type: string;
  text?: string[];
  code?: string;
  function_code?: [string];
  include?: string[];
  audio: { url: '' };
  video: { url: '' };
  file: { url: '' };
  image: { url: '' };
  media?: any;
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
export class CodeGentemplateUiWrapperComponent implements OnInit, OnDestroy, AfterViewInit {

  myEBotVersionTabs = EBotVersionTabs;
  myObject = Object;

  @Input() defaultTemplateKeys: string[];
  @Input() headingAsSelectedTemplateKey: string;
  @Input() hideChannelDropdown = false;
  @Input() activeTab;
  @Input() channelList;
  newTemplateKey: string;
  templateKeyCreationError = '';
  @ViewChild('channelSelectorForm') channelSelectorForm: NgForm;
  copyModalTemplateSearchKeyword = '';
  modalRefWrapper = {ref: null};
  selectedChannelOfGenTemplate;
  @Input() bot;
  _templateKeyDict;
  @Input() set templateKeyDict(val) {

    setTimeout(() => {
      this._templateKeyDict = val;

      const keys = Object.keys(this._templateKeyDict);
      // if (!this.selectedTemplateKeyInLeftSideBar && keys && !keys.find(key => key === this.selectedTemplateKeyInLeftSideBar)) {
        this.updateSelectedTemplateKey(Object.keys(this._templateKeyDict)[0]);
        this.mode = this._response.templates[this.selectedTemplateKeyInLeftSideBar] && this._response.templates[this.selectedTemplateKeyInLeftSideBar].response_type;
      // }
    }, 0);
  }

  channelNameList;
  dynamicLogicForm: FormGroup;
  //  @Input() selectedTemplateKeyOutputIndex;
  selectedTemplateKeyOutputIndex = [];
  selectedTemplateKeyInLeftSideBar;
  //  @Output() deleteGentemplate = new EventEmitter;
  //  @Output() moveUpGentempate = new EventEmitter;
  //  @Output() moveDownGentempate = new EventEmitter;
  //  @Output() selectGentempate = new EventEmitter;
  @Output() openNewIntentModal$ = new EventEmitter;
  @Output() modeChanged$ = new EventEmitter;
  @Output() dynamicLogicChanged$ = new EventEmitter;
  @Output() openEditTemplateKeyModal$ = new EventEmitter();
  @Output() openDeleteTemplateKeyModal$ = new EventEmitter();
  @Output() convertUiDictToGenTemplateCode$ = new EventEmitter();
  mode = 'rich';

  _response: IMLResponse;
  selectedResponseItem;

  @Input() set response(response: IMLResponse) {

    this._response = response;
    this.selectedResponseItem = this._response.templates[this.selectedTemplateKeyInLeftSideBar];
  }

  @Input() showModeSelect = false;
  templateKeySearchKeyword: string;
  templateKeyDictClone;

  constructor(
    private utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
  ) {
  }

  ngOnInit() {
    let logicText = '';
    if (this.selectedTemplateKeyInLeftSideBar) {
      logicText = this._response.templates[this.selectedTemplateKeyInLeftSideBar] && this._response.templates[this.selectedTemplateKeyInLeftSideBar].logic;
    }
    this.dynamicLogicForm = this.formBuilder.group({code: logicText});
    this.dynamicLogicForm.valueChanges.subscribe((data) => {
      console.log();
      if (this._response.templates[this.selectedTemplateKeyInLeftSideBar]) {
        this._response.templates[this.selectedTemplateKeyInLeftSideBar].logic = data.code;
      }
    });
    this.selectedResponseItem = this._response.templates[this.selectedTemplateKeyInLeftSideBar];

    try {
      this.templateKeyDictClone = UtilityService.cloneObj(this._templateKeyDict);

      this.channelSelectorForm.form.patchValue({name: 'all'});
      this.channelNameList = this.channelList.map((channel) => {
        return channel.name;
      }).filter(e => e !== 'all');
    } catch (e) {
      console.log(e);
    }
  }

  /*
  * getTemplateDict:
  * TODO: temporary:
  * will be called by parent
  * */
  getTemplateDict() {
    return this._templateKeyDict;
  }

  isTemplateKeyOutputUnparsable() {
    return this.activeTab === this.myEBotVersionTabs.generation_templates &&
      this._templateKeyDict &&
      typeof this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar] === 'string';
  }


  updateSelectedTemplateKeyValue(codeStr: string) {
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar] = codeStr;
  }

  async selectedListCopyModel(IntentSelectionModal) {
    //  this.modalRefWrapper = this.modalService.show(IntentSelectionModal, {class: 'modal-lg'});

    this.copyModalTemplateSearchKeyword = '';
    const data = await this.utilityService.openDialog({
      dialog: this.matDialog,
      component: IntentSelectionModal,
      data: null,
      classStr: 'primary-modal-header-border',
      dialogRefWrapper: this.modalRefWrapper
    });

    if (data) {
      //  this.deleteTemplateKey(tempKey);
    }
  }

  genTemplateTypeClicked(tab: string) {

    if (tab === 'text') {
      this.addTextUnit();
    } else if (tab === 'carousel') {
      this.addImageCaraosalUnit();
    } else if (tab === 'quick_reply') {
      this.addQuickReplyUnit();
    } else if (tab === 'code_input') {
      this.addCodeUnit();
    } else if (tab === ETemplateResponseType.image) {
      this.addImageUnit();
    } else if (tab === ETemplateResponseType.audio) {
      this.addAudioUnit();
    } else if (tab === ETemplateResponseType.video) {
      this.addVideoUnit();
    } else if (tab === ETemplateResponseType.file) {
      this.addFileUnit();
    } else if (tab === ETemplateResponseType.code) {
      this.addCodeSnippetUnit();
    }
  }

  addCodeUnit() {
    const codeUnit = {
      'include': this.createIncludesArray(),
      'code': ['Write ur text here .....'],
    };
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(codeUnit);
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
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(quickReplyUnit);
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
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(caraosalUnit);
    setTimeout(() => this.scrollToBottom());

  }

  addTextUnit() {
    const textUnit = {
      'include': this.createIncludesArray(),
      'text': ['']
    };
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(textUnit);
    setTimeout(() => this.scrollToBottom());

  }

  addVideoUnit() {
    const unit = {
      'include': this.createIncludesArray(),
      'video': [{'url': ConstantsService.getDefaultUrls().video}]
      // 'media': [{
      //   'video_url': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      // }]
    };
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(unit);
    setTimeout(() => this.scrollToBottom());

  }

  addAudioUnit() {
    const unit = {
      'include': this.createIncludesArray(),
      'audio': [{'url': ConstantsService.getDefaultUrls().audio}]
      // 'media': [{
      //   'audio_url': 'https://freesound.org/data/previews/347/347557_2247456-lq.mp3',
      // }]
    };
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(unit);
    setTimeout(() => this.scrollToBottom());
  }

  addImageUnit() {
    const unit = {
      'include': this.createIncludesArray(),
      'image': [{'url': ConstantsService.getDefaultUrls().image}]
      // 'media': [{
      //   'image_url': 'http://pluspng.com/img-png/google-logo-png-open-2000.png',
      // }]
    };
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(unit);
    setTimeout(() => this.scrollToBottom());
  }

  addFileUnit() {
    const unit = {
      'include': this.createIncludesArray(),
      'file': [{'url': ConstantsService.getDefaultUrls().file}]
    };
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(unit);
    setTimeout(() => this.scrollToBottom());
  }

  addCodeSnippetUnit() {
    const unit = {
      'include': this.createIncludesArray(),
      'function_code': ['']
    };
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(unit);
    setTimeout(() => this.scrollToBottom());
  }

  createIncludesArray() {
    return Array.isArray(this.channelNameList) ? ['web', ...this.channelNameList] : ['web'];

  }

  scrollToBottom(): void {

    try {
      /*TODO: use ViewChildren instead of class name.
      * TODO: put animation here*/
      //  this.genTempGridItemGrid.nativeElement.scrollTop = this.genTempGridItemGrid.nativeElement.scrollHeight -500;
      //  let arr = this.gentemplateItems.toArray();
      //  let lastItem = arr[arr.length-1]
      //  lastItem.nativeElement.scrollIntoView();
      //  console.log(lastItem.nativeElement);

      const arr1 = document.getElementsByClassName('gentemplateItem');
      const x = arr1[arr1.length - 1];
      // x.scrollIntoView();


    } catch (err) {
      console.log(err);
    }
  }


  selectedListDelete() {
    this.selectedTemplateKeyOutputIndex.sort((a, b) => b - a);
    for (const i of this.selectedTemplateKeyOutputIndex) {
      this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].splice(i, 1);
    }
    this.selectedTemplateKeyOutputIndex = [];
  }


  selectedListCopy(modelGenTempNameForm: NgForm) {

    const selectedTemplateKeyObject = modelGenTempNameForm.value;
    /*Example: selectedTemplateKeyObject  = {A1:true, A2:false}*/
    const selectedGenTempObjList = [];
    for (const i of this.selectedTemplateKeyOutputIndex) {
      selectedGenTempObjList.push(this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar][i]);
    }

    const selectedIntentDestinationKeys = Object.keys(selectedTemplateKeyObject).filter((key) => selectedTemplateKeyObject[key]);
    for (const key of selectedIntentDestinationKeys) {
      //  this._templateKeyDict[key].push(...selectedGenTempObjList);
      this._templateKeyDict[key].push(...JSON.parse(JSON.stringify(selectedGenTempObjList)));
    }
    this.selectedTemplateKeyOutputIndex = [];
    this.modalRefWrapper.ref.close();
  }


  selectedListDuplicate() {

    for (const i of this.selectedTemplateKeyOutputIndex) {
      this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(JSON.parse(JSON.stringify(this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar][i])));
    }
    this.selectedTemplateKeyOutputIndex = [];
  }


  selectAllCheckBoxesInCopyTemplateForm(form: NgForm) {
    const formVal = form.value;
    for (const key of Object.keys(formVal)) {
      formVal[key] = true;
    }
    form.form.patchValue(formVal);
  }

  deleteGentemplate(e) {
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].splice(e, 1);
    //  console.log(this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar]);
  }

  moveUpGentempate(e) {
    const temp = this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e];
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e] = this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e - 1];
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e - 1] = temp;
  }

  moveDownGentempate(e) {
    if (this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar].length === e + 1) {
      console.log('just dot do that , U know Y');
      return;
    }
    const temp = this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e];
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e] = this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e + 1];
    this._templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e + 1] = temp;
  }

  createNewTemplatekey() {

    this.newTemplateKey = this.newTemplateKey.trim();
    const isTemplateKeyUnique = !Object.keys(this._templateKeyDict).find((key) => key === this.newTemplateKey);
    if (!isTemplateKeyUnique || !this.newTemplateKey) {
      this.templateKeyCreationError = 'This template key already exists';
      this.utilityService.showErrorToaster(this.templateKeyCreationError);
      return;
    } else if (Object.keys(this._templateKeyDict).length === 0 && this.newTemplateKey === 'else') {
      this.templateKeyCreationError = 'Can not create ELSE template key now';
      this.utilityService.showErrorToaster(this.templateKeyCreationError);
      return;
    }
    this.templateKeyCreationError = '';
    const intentUnit = {};
    intentUnit[this.newTemplateKey] = [{
      'text': [''],
      'include': this.createIncludesArray(),
    }];
    //  this._templateKeyDict = {...this._templateKeyDict, ...intentUnit};
    this._templateKeyDict = Object.assign(this._templateKeyDict, intentUnit);
    this.modalRefWrapper.ref.close();
    this.updateSelectedTemplateKey(this.newTemplateKey);
    this.newTemplateKey = '';
  }

  updateSelectedTemplateKey(newTemplateKey) {

    this.selectedTemplateKeyInLeftSideBar = newTemplateKey;
    const code = this._response.templates[this.selectedTemplateKeyInLeftSideBar] &&
      this._response.templates[this.selectedTemplateKeyInLeftSideBar].logic;//response_type
    if (newTemplateKey === 'first_message') {
      this.mode = 'rich';
    }
    if (this._response.templates[this.selectedTemplateKeyInLeftSideBar]) {
      this.mode = this._response.templates[this.selectedTemplateKeyInLeftSideBar].response_type;
    }
    this.dynamicLogicForm && this.dynamicLogicForm.patchValue({code});
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
    //  const new_key = templateKeyEditForm.value;
    const doesNewKeyAlreadyExistsInTemplateKeyDict = Object.keys(this._templateKeyDict).find(key => new_key === key);
    if (doesNewKeyAlreadyExistsInTemplateKeyDict) {
      this.templateKeyCreationError = 'Template Key name already exists';
      this.utilityService.showErrorToaster(this.templateKeyCreationError);
      return;
    } else if (!new_key.trim()) {
      this.templateKeyCreationError = 'Template Key can\'t be empty';
      this.utilityService.showErrorToaster(this.templateKeyCreationError);
      return;
    }
    this.utilityService.renameKeyInObject(this._templateKeyDict, old_key, new_key);
    this.updateSelectedTemplateKey(new_key);
    this.modalRefWrapper.ref.close();
  }

  //  openDeleteTemplateKeyModal(deleteTemplateKeyModal) {
  //    this.modalRefWrapper = this.modalService.show(deleteTemplateKeyModal);
  //  }

  async openDeleteTemplateKeyModal(tempKey) {
    const data = await this.utilityService.openDialog({
      dialog: this.matDialog,
      component: ModalConfirmComponent,
      data: {
        title: `Delete template key: ${tempKey}?`,
        message: 'This action cannot be undone. Are you sure you wish to delete?',
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

  //  openEditTemplateKeyModal(EditTemplateKeyModal) {
  //    this.modalRefWrapper = this.modalService.show(EditTemplateKeyModal);
  //  }

  async openNewIntentModal() {
    this.showCreateOrEditTemplateKeyModel('Create template key', null, true).then((data) => {
      if (data) {

        this.newTemplateKey = data;
        this.createNewTemplatekey();
        this.utilityService.showSuccessToaster('Template key created');
      }
    });

    //  this.utilityService.openDialog({
    //    component: template,
    //    dialog: this.matDialog,
    //    classStr: 'primary-modal-header-border',
    //    dialogRefWrapper: this.dialogRefWrapper
    //  });
  }

  showCreateOrEditTemplateKeyModel(title: string, value = '', isNew = false) {
    const dialogRefWrapper = this.modalRefWrapper;
    //  this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    const formGroup = this.formBuilder.group({
      inputData: [value, (formControl: FormControl) => {
        if (!formControl.value || !formControl.value.trim || !formControl.value.trim()) {
          return {
            error: 'Template key required'
          };
        }
        if (Object.keys(this._templateKeyDict).find((key) => key === formControl.value)) {
          return {
            error: 'Template key already exists'
          };
        }
      }]
    });
    return this.utilityService.openDialog({
      dialogRefWrapper: dialogRefWrapper,
      classStr: 'primary-modal-header-border',
      data: {
        actionButtonText: `${isNew ? 'Create' : 'Edit'}`,
        message: null,
        formGroup,
        title,
        isActionButtonDanger: false,
        templateKeyDict: this._templateKeyDict
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    });
  }

  async openEditTemplateKeyModal(tempKey) {

    // const data = await this.utilityService.openDialog({
    //   dialog: this.matDialog,
    //   component: GentemplateEditKeyComponent,
    //   data: {
    //     old_key: tempKey,
    //     templateKeyDict: this._templateKeyDict
    //   },
    //   dialogRefWrapper: this.modalRefWrapper,
    //   classStr: 'primary-modal-header-border'
    // });

    this.showCreateOrEditTemplateKeyModel('Edit template key', tempKey)
      .then((data) => {
        this.editTemplateKey({old_key: tempKey, new_key: data});
      });
  }

  //  openNewIntentModal(template) {
  //    this.modalRefWrapper = this.modalService.show(template, {class: 'modal-w-30vw'});
  //    return;
  //  }

  deleteTemplateKey(tempKey) {
    const isELseTemplateKeyPresent = Object.keys(this._templateKeyDict).find(key => 'else' === key);
    if (Object.keys(this._templateKeyDict).length === 2 && tempKey !== 'else' && !!isELseTemplateKeyPresent) {
      this.templateKeyCreationError = 'Can\'t delete this template because ELSE template key will only be remaining';
      this.utilityService.showErrorToaster(this.templateKeyCreationError);
      return;
    }
    delete this._templateKeyDict[tempKey];
    this.updateSelectedTemplateKey(Object.keys(this._templateKeyDict)[0]);
    this.modalRefWrapper.ref.close();
  }

  ngOnDestroy() {
    this.convertUiDictToGenTemplateCode$.emit(this._templateKeyDict);
    this.selectedTemplateKeyOutputIndex = [];
  }

  ngAfterViewInit() {
    this.channelSelectorForm && this.channelSelectorForm.form.valueChanges.subscribe((value) => {
      this.selectedChannelOfGenTemplate = value;
    });
  }

  test() {
    //  console.log(this.selectedVersion_st);
    //  console.log(this.bot.store_bot_versions);
    console.log(this._templateKeyDict);
  }

  modeChangeHandler(mode) {

    this.modeChanged$.emit(mode);
    this._response.templates[this.selectedTemplateKeyInLeftSideBar].response_type = mode;
    this.mode = mode;
  }
}
