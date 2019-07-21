import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IOutputItem} from '../../code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';
import {UtilityService} from '../../../../../../../../utility.service';


@Component({
  selector: 'app-code-gentemplate',
  templateUrl: './code-gentemplate.component.html',
  styleUrls: ['./code-gentemplate.component.scss']
})
export class CodeGentemplateComponent implements OnInit {

  constructor(private utilityService: UtilityService) {
  }
  showJsonInvalidError;

  outputItem: IOutputItem;
  @Input() set _outputItem(val: IOutputItem) {
    this.outputItem =   val;
    this.outputItemClone = {...val};
  }
  @Input() channelNameList: string[];
  outputItemClone: IOutputItem = null;
  @Input() myIndex: number;

  @Input() set selectedTemplateKeyOutputIndex(selectedTemplateKeyOutputIndexVal: number[]) {
    if (selectedTemplateKeyOutputIndexVal && selectedTemplateKeyOutputIndexVal.length === 0) {
      this.selected = false;
    }
  }

  @Input() totalResponseTemplateComponentCount: number;
  @Output() deleteTemplate: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempUp: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempDown: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();

  selected: boolean;

  delete(i) {
    this.deleteTemplate.emit(i);
  }

  moveUp(i) {
    this.moveTempUp.emit(i);
  }

  moveDown(i) {
    this.moveTempDown.emit(i);
  }

  onSelected(data) {
    this.selectionChanged.emit(JSON.stringify({
      select: data,
      index: this.myIndex
    }));
  }


  ngOnInit() {
    this.outputItemClone = {...this.outputItem};
  }

  codeEditorTextCHanged(data) {
    console.log();
    try {
      const newCodeStr_parsed = JSON.parse(data);
      this.utilityService.emptyObjectWithoutChaningRef(this.outputItem);
      this.outputItem = Object.assign(this.outputItem, newCodeStr_parsed);
      this.showJsonInvalidError = false;
    } catch (e) {
      this.showJsonInvalidError = true;
      console.log(e);
    }
  }
  removeThisChannel(channel: string) {
    const isChannelPresent = this.outputItemClone.include.find(e => e === channel);
    if (isChannelPresent) {
      this.outputItemClone.include = this.outputItemClone.include.filter(e => e !== channel);
    } else {
      this.outputItemClone.include.push(channel);
    }
  }
  imgOpacity(channel: string) {
    return !!this.outputItemClone.include.find(e => e === channel);
  }

}
