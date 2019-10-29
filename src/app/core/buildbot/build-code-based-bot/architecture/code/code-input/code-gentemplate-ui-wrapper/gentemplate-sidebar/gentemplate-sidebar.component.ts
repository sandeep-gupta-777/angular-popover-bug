import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ETemplateResponseType} from '../../../../../../../../typings/gentemplate';

@Component({
  selector: 'app-gentemplate-sidebar',
  templateUrl: './gentemplate-sidebar.component.html',
  styleUrls: ['./gentemplate-sidebar.component.scss']
})
export class GentemplateSidebarComponent implements OnInit {
  ETemplateResponseType = ETemplateResponseType;
  constructor() { }
  @Output() genTemplateTypeClicked$ = new EventEmitter();
  ngOnInit() {
  }
  genTemplateTypeClicked(tab){
    this.genTemplateTypeClicked$.emit(tab);
  }
}
