import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../../../../../../interfaces/IBot';
import {IOutputItem} from '../../code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';

@Component({
  selector: 'app-gentemplate-file',
  templateUrl: './gentemplate-file.component.html',
  styleUrls: ['./gentemplate-file.component.scss']
})
export class GentemplateFileComponent implements OnInit {
  @Input() bot: IBot;
  @Input() outputItem: IOutputItem;
  constructor() { }

  ngOnInit() {
  }

}
