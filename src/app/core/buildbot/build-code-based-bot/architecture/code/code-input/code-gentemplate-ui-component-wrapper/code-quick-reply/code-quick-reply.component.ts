import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IQuickReplyItem} from '../../code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';

export enum EQuickReplyTypes {
  text = 'text',
  location = 'location',
  email = 'email',
  phone = 'phone',
}

export enum EQuickReplySubTabsType {
  payload = 'payload',
  url= 'url',
}

@Component({
  selector: 'app-code-quick-reply',
  templateUrl: './code-quick-reply.component.html',
  styleUrls: ['./code-quick-reply.component.scss'],
})
export class CodeQuickReplyComponent implements OnInit, AfterViewInit {
  myEQuickReplyTypes = EQuickReplyTypes;
  myEQuickReplySubTabsType = EQuickReplySubTabsType;
  textType: string = EQuickReplySubTabsType.payload;
  content_type: string;
  @Input() quick_reply: IQuickReplyItem;
  @ViewChild('quickReplyForm') quickReplyForm: NgForm;
  @Output() hideQuickReplyDropdown$ = new EventEmitter();
  @Output() deleteQuickReply$ = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

    this.content_type = this.quick_reply.content_type;
    this.textType = this.quick_reply.textType || EQuickReplySubTabsType.payload;
  }

  tabChanged(selectedTab) {
    this.content_type = selectedTab;
    // this.quickReplyForm.form.patchValue(this.quick_reply);

  }

  subTabChanged(selectedSubTab) {
    this.textType = selectedSubTab;
    setTimeout(()=>{
      // this.quickReplyForm.form.patchValue(this.quick_reply);;
    });
  }

  removeAllKeysFromObjectUnlessMentioned(newQuickReplyFormValue, excludedKeys:string[]){
    for(let key in newQuickReplyFormValue){
      let doesKeyExistsInExcludedArr = excludedKeys.findIndex(value => key===value) !== -1;
      if(!doesKeyExistsInExcludedArr ){
        delete newQuickReplyFormValue[key];
      }
    }
    return newQuickReplyFormValue;
  }

  saveQuickReplyForm(quickReplyForm) {
    debugger;
    let {textType,content_type} = quickReplyForm.value;
    let excludedKeys:string[] = [];
    let newQuickReplyFormValue = JSON.parse(JSON.stringify(quickReplyForm.value));
    if(content_type===EQuickReplyTypes.phone || content_type=== EQuickReplyTypes.email){
      excludedKeys = ['content_type','title'];
    }else if(content_type===EQuickReplyTypes.text){
      excludedKeys = ['content_type','title','payload', 'url', ''];
    }else if(content_type===EQuickReplyTypes.location){
      excludedKeys = ['content_type','title','icon'];
    }
    newQuickReplyFormValue = this.removeAllKeysFromObjectUnlessMentioned(newQuickReplyFormValue, excludedKeys);

    // if(textType === EQuickReplySubTabsType.payload){
    //   newQuickReplyFormValue = {...quickReplyForm.value, url:""};
    // }else if(textType === EQuickReplySubTabsType.url) {
    //   newQuickReplyFormValue = {...quickReplyForm.value, payload:""};
    // }

    // if(content_type !== EQuickReplyTypes.location){
    //   newQuickReplyFormValue.icon = "";
    // }

    this.removeAllKeysFromObjectUnlessMentioned(this.quick_reply,[]);
    Object.assign(this.quick_reply, newQuickReplyFormValue);
    this.quickReplyForm.form.patchValue(newQuickReplyFormValue);
    setTimeout(() => {
      this.hideQuickReplyDropdown$.emit();
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.quickReplyForm.form.patchValue(this.quick_reply);
    });
  }

}
