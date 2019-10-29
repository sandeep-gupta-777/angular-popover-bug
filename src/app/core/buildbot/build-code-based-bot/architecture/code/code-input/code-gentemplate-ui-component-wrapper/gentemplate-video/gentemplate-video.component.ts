import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../../../../../../interfaces/IBot';
import {IOutputItem} from '../../code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';

@Component({
  selector: 'app-gentemplate-video',
  templateUrl: './gentemplate-video.component.html',
  styleUrls: ['./gentemplate-video.component.scss']
})
export class GentemplateVideoComponent implements OnInit {
  @Input() bot: IBot;
  @Input() outputItem: IOutputItem;
  constructor() { }

  ngOnInit() {
  }

}
