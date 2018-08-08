import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngxs/store';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {IBot} from '../../../../interfaces/IBot';
import {ServerService} from '../../../../../server.service';
import {ConstantsService} from '../../../../../constants.service';
import {UtilityService} from '../../../../../utility.service';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {

  @Input() bot: IBot;
  @ViewChild('form') f: HTMLFormElement;
  settings;
  data=[];
  codeText: string;
  showTable = true;
  /*new concept*/
  key;
  nerType;
  conflict_policy;
  modalRef: BsModalRef;
  handontable_column;
  handontable_colHeaders;
  handontableData=[];

  /*TODO: use model instead of ngif;else*/
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private utilityService:UtilityService,
    private store: Store) {

  }

  ngOnInit() {
    console.log(this.bot);
    this.settings = this.constantsService.SMART_TABLE_KNOWLEDGEBASE_SETTING;
    // this.data = this.bot.customNers || [];//comperror:
    this.data.push({key: 'sadasd', nerType: 'asdasd', conflict_policy: 'override'});
    this.handontable_colHeaders = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders;
    this.handontable_column = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_columns;
  }

  createConceptHandler() {
    this.data.push(this.f.value);
    console.log(this.data);
  }

  async openFile(inputEl) {
    this.codeText= await this.utilityService.readInputFileAsText(inputEl)
  }

  rowClicked($event) {
    this.showTable = false;
    console.log($event.data);
    this.codeText = $event.data.values && $event.data.values.join();
    this.nerType = $event.data.nerType;
    this.key = $event.data.key;
    this.conflict_policy = $event.data.conflict_policy;
    // this.handontableData = $event.data.values;

    if(this.nerType==='database'){
      let arr:{key: string, payload: string, title: string}[] = $event.data.values;
      this.handontableData = arr.map((value)=>{
        return [value.key,value.payload, value.title]
      });
      this.codeText = null;
      console.log(arr);
    }else {
      this.handontableData = null;
    }
  }


}
