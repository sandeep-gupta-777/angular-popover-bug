import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPipelineItem} from '../../../../../../../interfaces/ai-module';
import {pipelineData} from '../../../../../../../interfaces/bot-creation';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {

  @Input() tableData: {pipeline_modules:IPipelineItem[]};
  pipeline_modules: IPipelineItem[];
  @Input() set searchKeyword(val){
    if(!val) {
      this.pipeline_modules = this.tableData && this.tableData.pipeline_modules;
      return;
    };
    this.pipeline_modules = this.tableData.pipeline_modules.filter((item)=>{
      return item.library.toLowerCase().includes(val.toLowerCase());
    });
    if(this.pipeline_modules.length===0){
      this.pipeline_modules = this.tableData.pipeline_modules;
    }
  }
  @Output() openInputParamModalBeforeAdd$ = new EventEmitter();
  @Output() add$ = new EventEmitter();
  @Output() settingsClicked$ = new EventEmitter();
  myObject = Object;
  // @Output() add$ = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.pipeline_modules = this.tableData.pipeline_modules;
  }

  log(x){
    console.log(x);
  }

}
