import {Component, Input, OnInit} from '@angular/core';
import {IQuickReplyItem} from '../core/buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';

@Component({
  selector: 'app-code-quick-reply-button-wrapper',
  templateUrl: './code-quick-reply-button-wrapper.component.html',
  styleUrls: ['./code-quick-reply-button-wrapper.component.scss']
})
export class CodeQuickReplyButtonWrapperComponent implements OnInit {

  openDropdown = false;
  @Input() quick_reply: IQuickReplyItem;
  constructor() { }

  ngOnInit() {
  }

}
