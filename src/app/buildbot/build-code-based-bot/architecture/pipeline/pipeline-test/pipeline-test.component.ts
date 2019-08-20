import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../../../../core/interfaces/IBot';

@Component({
  selector: 'app-pipeline-test',
  templateUrl: './pipeline-test.component.html',
  styleUrls: ['./pipeline-test.component.scss']
})
export class PipelineTestComponent implements OnInit {

  constructor() { }
  @Input() bot: IBot;
  testResponse:any = {};
  ngOnInit() {
  }

}
