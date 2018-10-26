import {Component, OnInit} from '@angular/core';

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
export class CodeQuickReplyComponent implements OnInit {
  myEQuickReplyTypes = EQuickReplyTypes;
  myEQuickReplySubTabsType = EQuickReplySubTabsType;
  selectedSubTab:string = EQuickReplySubTabsType.payload;
  selectedTab: string = EQuickReplyTypes.text;

  constructor() {
  }

  ngOnInit() {
  }

  tabChanged(selectedTab) {
    this.selectedTab = selectedTab;
  }

  subTabChanged(selectedSubTab) {
    this.selectedSubTab = selectedSubTab;
  }

  saveQuickReplyForm(quickReplyForm){
    console.log(quickReplyForm.value);
  }

}
