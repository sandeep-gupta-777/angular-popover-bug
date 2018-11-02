import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IOutputItem} from '../core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.component';

@Component({
  selector: 'app-code-quick-reply-wrapper',
  templateUrl: './code-quick-reply-wrapper.component.html',
  styleUrls: ['./code-quick-reply-wrapper.component.scss']
})
export class CodeQuickReplyWrapperComponent implements OnInit, AfterViewInit {

  constructor() { }
  @Input() outputItem: IOutputItem;
  @Input() isFullScreenPreview = false;
  @Input() isParentSessionsModal = false;
  @Input() set selectedTemplateKeyOutputIndex(val:number[]){
    /*when parent components empty selectedTemplateKeyOutputIndex array,
     *we should turn this.selected to false
     */
    if(val.length===0){
      this.selected = false;
    }
  }
  @Input() myIndex: number;
  @Input() channelNameList: string[];
  @Input() totalResponseTemplateComponentCount: number;
  @Output() deleteTemplate: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempUp: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempDown: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() sendMessageToBotServer$ = new EventEmitter();

  @ViewChild('mainInput') mainInput: ElementRef;
  selected;
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

  pushNewQuickReply(){
    this.outputItem.quick_reply[0].quick_replies.push({'content_type': 'text', 'title': 'No', 'payload': 'no'})
  }

  delete(i) {
    this.deleteTemplate.emit(i);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.mainInput.nativeElement.focus();
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

  imgOpacity(channel : string) {
    let isChannelPresent = this.outputItem.include.find(e => e === channel);
    if(isChannelPresent){
      return true;
    }
    else{
      return false;
    }
  }

}
