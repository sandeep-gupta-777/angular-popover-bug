import {Component, OnInit, Input, EventEmitter, Output, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {IOutputItem} from '../code-input.component';

@Component({
  selector: 'app-text-gentemplate',
  templateUrl: './text-gentemplate.component.html',
  styleUrls: ['./text-gentemplate.component.scss']
})
export class TextGentemplateComponent implements OnInit, AfterViewInit {

  // @Input() variants : string[] ;
  _variants: string[];
  @Input() outputItem: IOutputItem;
  @Input() myIndex: number;
  @Input() channelNameList: string[];
  @Input() totalResponseTemplateComponentCount: number;
  @Output() deleteTemplate: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempUp: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempDown: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('textarea') textarea:ElementRef;

  @Input() set variants(variantsVal: string[]) {
    this._variants = variantsVal;
    this.variantsIter = [...this._variants];
  }


  @Input() set selectedTemplateKeyOutputIndex(selectedTemplateKeyOutputIndex: number[]) {
    /*when parent components empty selectedTemplateKeyOutputIndex array,
     *we should turn this.selected to false
     */
    if (selectedTemplateKeyOutputIndex && selectedTemplateKeyOutputIndex.length === 0) {
      this.selected = false;
    }
  }

  constructor() {
  }

  variantsIter: string[];

  deleteVariant(index) {
    this._variants.splice(index, 1);
    console.log('sdasdas das das dadas', index);
    console.log(this._variants);
  }

  // @Input() variants : string[];

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

  addVarient() {
    this._variants.push('');
    this.variantsIter = [...this._variants];
  }

  onSelected(b) {
    this.selectionChanged.emit(JSON.stringify({
      select: b,
      index: this.myIndex
    }));
  }


  removeThisChannel(channel: string) {
    let isChannelPresent = this.outputItem.include.find(e => e === channel);
    if (isChannelPresent) {
      this.outputItem.include = this.outputItem.include.filter(e => e !== channel);
    }
    else {
      this.outputItem.include.push(channel);
    }
  }

  imgOpacity(channel: string) {
    let isChannelPresent = this.outputItem.include.find(e => e === channel);
    if (isChannelPresent) {
      return true;
    }
    else {
      return false;
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.textarea.nativeElement.focus();
  }

}
