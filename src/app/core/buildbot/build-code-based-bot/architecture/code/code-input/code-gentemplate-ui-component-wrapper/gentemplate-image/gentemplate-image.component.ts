import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../../../../../../interfaces/IBot';
import {IOutputItem} from '../../code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';

@Component({
  selector: 'app-gentemplate-image',
  templateUrl: './gentemplate-image.component.html',
  styleUrls: ['./gentemplate-image.component.scss']
})
export class GentemplateImageComponent implements OnInit {

  @Input() bot: IBot;
  @Input() outputItem: IOutputItem;
  constructor() { }
  ngOnInit() {
  }

}
