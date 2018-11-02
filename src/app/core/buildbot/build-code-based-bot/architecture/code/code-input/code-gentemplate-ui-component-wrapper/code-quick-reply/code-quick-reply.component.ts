import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IQuickReplyItem} from '../../code-input.component';
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
  textType:string = EQuickReplySubTabsType.payload;
  content_type: string;
  @Input() quick_reply:IQuickReplyItem;
  @ViewChild('quickReplyForm') quickReplyForm: NgForm;
  @Output() hideQuickReplyDropdown$ = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

    this.content_type = this.quick_reply.content_type;
    this.textType = this.quick_reply.textType|| EQuickReplySubTabsType.payload;
  }

  tabChanged(selectedTab) {
    this.content_type = selectedTab;
    this.quickReplyForm.form.patchValue(this.quick_reply);

  }

  subTabChanged(selectedSubTab) {
    this.textType = selectedSubTab;
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
