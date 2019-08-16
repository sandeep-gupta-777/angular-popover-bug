import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gentemplate-sidebar',
  templateUrl: './gentemplate-sidebar.component.html',
  styleUrls: ['./gentemplate-sidebar.component.scss']
})
export class GentemplateSidebarComponent implements OnInit {

  constructor() { }
  @Output() genTemplateTypeClicked$ = new EventEmitter();
  ngOnInit() {
  }
  genTemplateTypeClicked(tab){
    this.genTemplateTypeClicked$.emit(tab);
  }
}
