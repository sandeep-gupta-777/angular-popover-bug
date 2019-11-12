import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ETemplateResponseType} from '../../../../../../../../typings/gentemplate';

@Component({
  selector: 'app-gentemplate-sidebar',
  templateUrl: './gentemplate-sidebar.component.html',
  styleUrls: ['./gentemplate-sidebar.component.scss']
})
export class GentemplateSidebarComponent implements OnInit {
  ETemplateResponseType = ETemplateResponseType;
  @Input() templateKey = '';

  constructor() {
  }

  @Output() genTemplateTypeClicked$ = new EventEmitter();

  ngOnInit() {
  }

  genTemplateTypeClicked(tab) {
    if (this.templateKey === 'Welcome message' && tab === ETemplateResponseType.code) {
      return;
    }
    this.genTemplateTypeClicked$.emit(tab);
  }
}
