import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-pipeline-test',
  templateUrl: './pipeline-test.component.html',
  styleUrls: ['./pipeline-test.component.scss']
})
export class PipelineTestComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

  items1 = [1, 2, 3, 4, 5, 5, 3, 6];
  items2 = [0, 0, 9, 0, 9, 0];

  options: any = {
    removeOnSpill: true
  };

  click() {
  }
}
