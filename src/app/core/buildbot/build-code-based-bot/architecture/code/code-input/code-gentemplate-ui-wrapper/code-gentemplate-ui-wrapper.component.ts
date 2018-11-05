import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {EBotVersionTabs} from '../code-input.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {NgForm} from '@angular/forms';
import {UtilityService} from '../../../../../../../utility.service';

export interface ICarousalItem {
  'image_url': string,
  'button': [{ 'type': string, 'title': string, 'payload': string }],
  'title': string,
  /*custom added*/
  description?: string,
}

export interface IQuickReplyItem {
  'content_type': 'text',
  'title': string,
  'payload': string
  /*custom fields*/
  textType?: string;//payload, url
}

export interface IOutputItem {
  text?: string[],
  code?: string,
  include?: string[],
  generic_template?: { 'elements': ICarousalItem[] }[],
  'quick_reply': [{
    'text': string,
    'quick_replies': [
      IQuickReplyItem
      ]
  }]

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
  @ViewChild('channelSelectorForm') channelSelectorForm:NgForm;

  modalRef;
  selectedChannelOfGenTemplate;
  @Input() bot;
  @Input() templateKeyDict;
  channelNameList;
  @Input() selectedTemplateKeyOutputIndex;
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
  ) {
  }

  ngOnInit() {
    try {
      this.templateKeyDictClone = this.utilityService.createDeepClone(this.templateKeyDict);
      this.selectedTemplateKeyInLeftSideBar = Object.keys(this.templateKeyDict)[0];
      this.channelSelectorForm.form.patchValue({name:'all'});
    }catch (e) {
      console.log(e);
    }
  }

  isTemplateKeyOutputUnparsable() {


    return this.activeTab === this.myEBotVersionTabs.generation_templates &&
      this.templateKeyDict &&
      typeof this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar] === 'string';
  }


  updateSelectedTemplateKeyValue(codeStr: string) {
    console.log("sadasads");
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar] = codeStr;
  }

  selectedListCopyModel(IntentSelectionModal) {
    this.modalRef = this.modalService.show(IntentSelectionModal, {class: 'modal-lg'});
  }

  addCodeUnit() {

    debugger
    let codeUnit = {
      'include': this.createIncludesArray(),
      'code': ['Write ur text here .....']
    };
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(codeUnit);
    setTimeout(() => this.scrollToBottom());
  }

  addQuickReplyUnit() {
    let quickReplyUnit = {
      'include': this.createIncludesArray(),
      'quick_reply': [{
        'text': 'Would you like us to activate this ?',
        'quick_replies': [{'content_type': 'text', 'title': 'Yes', 'payload': 'yes'},
          {'content_type': 'text', 'title': 'No', 'payload': 'no'}]
      }]
    };
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(quickReplyUnit);
    setTimeout(() => this.scrollToBottom());

  }

  addImageCaraosalUnit() {
    let caraosalUnit = {
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
    let textUnit = {
      'include': this.createIncludesArray(),
      'text': ['']
    };
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(textUnit);
    setTimeout(() => this.scrollToBottom());

  }

  createIncludesArray(){
    return Array.isArray(this.channelNameList)? ['web', ...this.channelNameList]: ['web'];;
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

      let arr1 = document.getElementsByClassName('gentemplateItem');
      let x = arr1[arr1.length - 1];
      x.scrollIntoView();


    } catch (err) {
      console.log(err);
    }
  }


  selectedListDelete() {
    this.selectedTemplateKeyOutputIndex.sort((a, b) => b - a);
    for (let i of this.selectedTemplateKeyOutputIndex) {
      this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].splice(i, 1);
    }
    this.selectedTemplateKeyOutputIndex = [];
  }


  selectedListCopy(modelGenTempNameForm: NgForm) {

    let selectedTemplateKeyObject = modelGenTempNameForm.value;
    /*Example: selectedTemplateKeyObject  = {A1:true, A2:false}*/
    let selectedGenTempObjList = [];
    for (let i of this.selectedTemplateKeyOutputIndex) {
      selectedGenTempObjList.push(this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][i]);
    }

    let selectedIntentDestinationKeys = Object.keys(selectedTemplateKeyObject).filter((key) => selectedTemplateKeyObject[key]);
    for (let key of selectedIntentDestinationKeys) {
      this.templateKeyDict[key].push(...selectedGenTempObjList);
    }
    this.selectedTemplateKeyOutputIndex = [];
    this.modalRef.hide();
  }


  selectedListDuplicate() {
    for (let i of this.selectedTemplateKeyOutputIndex) {
      this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(JSON.parse(JSON.stringify(this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][i])));
    }
    this.selectedTemplateKeyOutputIndex = [];
  }

  copyModalTemplateSearchKeyword: string = '';

  selectAllCheckBoxesInCopyTemplateForm(form: NgForm) {
    let formVal = form.value;
    for (let key in formVal) {
      formVal[key] = true;
    }
    form.form.patchValue(formVal);
  }

  deleteGentemplate(e) {
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].splice(e, 1);
    // console.log(this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar]);
  }

  moveUpGentempate(e) {
    var temp = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e] = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e - 1];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e - 1] = temp;
  }

  moveDownGentempate(e) {
    if (this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].length == e + 1) {
      console.log('just dot do that , U know Y');
      return;
    }
    var temp = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e] = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e + 1];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e + 1] = temp;
  }

  createNewTemplatekey() {
    let isTemplateKeyUnique = !Object.keys(this.templateKeyDict).find((key) => key === this.newTemplateKey);
    if (!isTemplateKeyUnique) {
      this.templateKeyCreationError = 'This template key already exists';
      return;
    }
    let intentUnit = {};
    intentUnit[this.newTemplateKey] = [{
      'text': [''],
      'include': this.createIncludesArray(),
    }];
    // this.templateKeyDict = {...this.templateKeyDict, ...intentUnit};
    this.templateKeyDict =  Object.assign(this.templateKeyDict, intentUnit);
    this.modalRef.hide();
    this.selectedTemplateKeyInLeftSideBar = this.newTemplateKey;
    this.newTemplateKey = '';
  }

  selectGentempate(e) {
    let i = JSON.parse(e);
    if (i.select) {
      this.selectedTemplateKeyOutputIndex.push(i.index);
    }
    if (!(i.select)) {
      var index = this.selectedTemplateKeyOutputIndex.indexOf(i.index);
      if (index > -1) {
        this.selectedTemplateKeyOutputIndex.splice(index, 1);
      }
    }
  }

  editTemplateKey(templateKeyEditForm) {
    let {old_key, new_key} = templateKeyEditForm.value;
    this.utilityService.renameKeyInObject(this.templateKeyDict, old_key, new_key);
    this.selectedTemplateKeyInLeftSideBar = new_key;
    this.modalRef.hide();
  }

  openDeleteTemplateKeyModal(deleteTemplateKeyModal) {
    this.modalRef = this.modalService.show(deleteTemplateKeyModal);
  }

  openEditTemplateKeyModal(EditTemplateKeyModal) {
    this.modalRef = this.modalService.show(EditTemplateKeyModal);
  }

  openNewIntentModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-w-30vw'});
    return;
  }

  deleteTemplateKey(tempKey) {
    delete this.templateKeyDict[tempKey];
    this.utilityService.showSuccessToaster('Template key deleted!');
    this.modalRef.hide();
  }

  ngOnDestroy() {
    this.convertUiDictToGenTemplateCode$.emit(this.templateKeyDict);
  }

  ngAfterViewInit(){
    this.channelSelectorForm.form.valueChanges.subscribe((value)=>{
      this.selectedChannelOfGenTemplate = value;
    });
  }
  test() {
    // console.log(this.selectedVersion);
    // console.log(this.bot.store_bot_versions);
    console.log(this.templateKeyDict);
  }
}
