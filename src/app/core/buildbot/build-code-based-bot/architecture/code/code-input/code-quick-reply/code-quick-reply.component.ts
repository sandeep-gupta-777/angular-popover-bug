import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IQuickReplyItem} from '../code-input.component';
import {NgForm} from '@angular/forms';

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
  styleUrls: ['./code-quick-reply.component.scss']
})
export class CodeQuickReplyComponent implements OnInit, AfterViewInit {
  myEQuickReplyTypes = EQuickReplyTypes;
  myEQuickReplySubTabsType = EQuickReplySubTabsType;
  selectedSubTab:string = EQuickReplySubTabsType.payload;
  selectedTab: string = EQuickReplyTypes.text;
  @Input() quick_reply:IQuickReplyItem;
  @ViewChild('quickReplyForm') quickReplyForm: NgForm;
  @Output() hideQuickReplyDropdown$ = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  tabChanged(selectedTab) {
    this.selectedTab = selectedTab;
    this.quickReplyForm.form.patchValue(this.quick_reply);

  }

  subTabChanged(selectedSubTab) {
    this.selectedSubTab = selectedSubTab;
    this.quickReplyForm.form.patchValue(this.quick_reply);
  }

  saveQuickReplyForm(quickReplyForm){
    console.log(quickReplyForm.value);
    Object.assign(this.quick_reply, quickReplyForm.value);
    setTimeout(()=>{
      this.hideQuickReplyDropdown$.emit()
    });
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.quickReplyForm.form.patchValue(this.quick_reply);
    });
  }

}
