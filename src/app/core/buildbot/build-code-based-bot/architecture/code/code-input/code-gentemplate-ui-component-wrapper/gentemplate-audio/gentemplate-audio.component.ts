import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../../../../../../interfaces/IBot';
import {IOutputItem} from '../../code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';

@Component({
  selector: 'app-gentemplate-audio',
  templateUrl: './gentemplate-audio.component.html',
  styleUrls: ['./gentemplate-audio.component.scss']
})
export class GentemplateAudioComponent implements OnInit {
  @Input() bot: IBot;
  @Input() outputItem: IOutputItem;
  constructor() { }

  ngOnInit() {
  }

}
