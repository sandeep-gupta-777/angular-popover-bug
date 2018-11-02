import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IOutputItem} from '../../code-input.component';


@Component({
  selector: 'app-code-gentemplate',
  templateUrl: './code-gentemplate.component.html',
  styleUrls: ['./code-gentemplate.component.scss']
})
export class CodeGentemplateComponent implements OnInit {

  constructor() {
  }

  outputItem: IOutputItem;
  @Input() set _outputItem(val){
    this.outputItem =   val;
    this.outputItemClone = {...val};
  }
  @Input() channelNameList : string[];
  outputItemClone: IOutputItem;
  @Input() myIndex: number;

  @Input() set selectedTemplateKeyOutputIndex(selectedTemplateKeyOutputIndex: number[]) {

    if (this.selectedTemplateKeyOutputIndex && this.selectedTemplateKeyOutputIndex.length === 0) {
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
    console.log("helloosadasdasdas");
    this.outputItem = Object.assign(this.outputItem, JSON.parse(data));
  }
  removeThisChannel(channel:string){
    let isChannelPresent = this.outputItemClone.include.find(e => e === channel);
    if(isChannelPresent){
      this.outputItemClone.include = this.outputItemClone.include.filter(e => e !== channel);
    }
    else{
      this.outputItemClone.include.push(channel);
    }
  }
  imgOpacity(channel : string) {
    let isChannelPresent = this.outputItemClone.include.find(e => e === channel);
    if(isChannelPresent){
      return true;
    }
    else{
      return false;
    }
  }

}
