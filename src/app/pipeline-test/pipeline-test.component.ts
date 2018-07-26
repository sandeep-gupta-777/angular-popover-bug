import {Component, OnInit} from '@angular/core';
import {DragulaService} from 'ng2-dragula';

@Component({
  selector: 'app-pipeline-test',
  templateUrl: './pipeline-test.component.html',
  styleUrls: ['./pipeline-test.component.scss']
})
export class PipelineTestComponent implements OnInit {
  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('third-bag', {
      removeOnSpill: true
    });
  }

  ngOnInit() {
  }

  items1=[1,2,3,4,5,5,3,6]
  items2=[0,0,9,0,9,0]

  options: any = {
    removeOnSpill: true
  }

  click(){
    console.log(this.items1, this.items2);
  }
}
