import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IOutputItem} from '../code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';

@Component({
  selector: 'app-code-gentemplate-ui-component-wrapper',
  templateUrl: './code-gentemplate-ui-component-wrapper.component.html',
  styleUrls: ['./code-gentemplate-ui-component-wrapper.component.scss']
})
export class CodeGentemplateUiComponentWrapperComponent implements OnInit {

  _variants: string[];
  channelNameList: string[];
  @Input() outputItem: IOutputItem;
  outputItemClone: IOutputItem;
  @Input() myIndex: number;
  @Input() channelList: {name: string}[];
  @Input() totalResponseTemplateComponentCount: number;
  @Output() deleteTemplate: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempUp: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempDown: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();
  variantsIter: string[];
  selected: boolean;

  constructor() {
  }

  @Input() set selectedTemplateKeyOutputIndex(selectedTemplateKeyOutputIndex: number[]) {
    /*when parent components empty selectedTemplateKeyOutputIndex array,
     *we should turn this.selected to false
     */
    if (selectedTemplateKeyOutputIndex && selectedTemplateKeyOutputIndex.length === 0) {
      this.selected = false;
    }
  }

  delete(i) {
    this.deleteTemplate.emit(i);
    this.selectionChanged.emit(JSON.stringify({
      select: false,
      index: this.myIndex
    }));
  }

  moveUp(i) {
    this.moveTempUp.emit(i);
    this.selectionChanged.emit(JSON.stringify({
      select: false,
      index: this.myIndex
    }));
    this.selectionChanged.emit(JSON.stringify({
      select: true,
      index: this.myIndex+1
    }));
  }

  moveDown(i) {
    this.moveTempDown.emit(i);
    this.selectionChanged.emit(JSON.stringify({
      select: false,
      index: this.myIndex
    }));
    this.selectionChanged.emit(JSON.stringify({
      select: true,
      index: this.myIndex-1
    }));
  }

  addVarient() {
    this._variants.push('');
    this.variantsIter = [...this._variants];
  }

  onSelected(isSelected:boolean) {
    debugger;
    this.selectionChanged.emit(JSON.stringify({
      select: isSelected,
      index: this.myIndex
    }));
  }

  removeThisChannel(channel: string) {
    const isChannelPresent = this.outputItem.include.find(e => e === channel);
    if (isChannelPresent) {
      this.outputItem.include = this.outputItem.include.filter(e => e !== channel);
    } else {
      this.outputItem.include.push(channel);
    }
    this.outputItemClone = {...this.outputItem};
  }

  imgOpacity(channel: string) {
    try {
      return this.outputItem.include.find(e => e === channel);
    } catch (e) {
      console.log(e);
    }
  }

  ngOnInit() {

    this.channelNameList = this.channelList.filter(e => e.name !== 'all').map(e => e.name);
  }

  isTemplateKeyOutputUnparsable() {
    return typeof this.outputItem === 'string';
  }

}
