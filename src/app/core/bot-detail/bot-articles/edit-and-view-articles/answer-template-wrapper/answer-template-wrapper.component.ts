import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {CodeInputService} from '../../../../buildbot/build-code-based-bot/architecture/code/code-input/code-input.service';
import {ETemplateResponseType} from "../../../../../typings/gentemplate";
import {ConstantsService} from '../../../../../constants.service';

@Component({
  selector: 'app-answer-template-wrapper',
  templateUrl: './answer-template-wrapper.component.html',
  styleUrls: ['./answer-template-wrapper.component.scss']
})
export class AnswerTemplateWrapperComponent implements OnInit {

  constructor() {
  }

  channelList: { name: string, displayName: string }[] = [];
  @Input() answerObject;
  @Input() bot: IBot;

  ngOnInit() {
    this.channelList = CodeInputService.createChannelList(this.bot);
    if (!this.answerObject[0].include) {
      this.answerObject[0].include = ['web'];
    }
  }

  genTemplateTypeClicked(tab: string) {

    if (tab === 'text') {
      this.addTextUnit();
    } else if (tab === 'carousel') {
      this.addImageCaraosalUnit();
    } else if (tab === 'quick_reply') {
      this.addQuickReplyUnit();
    } else if (tab === 'code_input') {
      this.addCodeUnit();
    }else if (tab === ETemplateResponseType.image) {
      this.addImageUnit();
    } else if (tab === ETemplateResponseType.audio) {
      this.addAudioUnit();
    } else if (tab === ETemplateResponseType.video) {
      this.addVideoUnit();
    } else if (tab === ETemplateResponseType.file) {
      this.addFileUnit();
    } else if(tab === ETemplateResponseType.code){
      this.addCodeSnippetUnit();
    }
  }

  addCodeUnit() {
    const codeUnit = {
      'include': ['web'],
      'code': ['Write ur text here .....']
    };
    this.answerObject.push(codeUnit);
    setTimeout(() => this.scrollToBottom());
  }

  addQuickReplyUnit() {
    const quickReplyUnit = {
      'include': ['web'],
      'quick_reply': [{
        'text': 'Would you like us to activate this ?',
        'quick_replies': []
      }]
    };
    this.answerObject.push(quickReplyUnit);
    setTimeout(() => this.scrollToBottom());
  }

  addImageCaraosalUnit() {
    const caraosalUnit = {
      'include': ['web'],
      'generic_template': [{
        'elements': [{
          'image_url': 'https://s3-us-west-2.amazonaws.com/o2bot/image/carousel_pay_bills.jpg',
          'button': [{'type': 'postback', 'title': 'Renew Now', 'payload': 'expire'}],
          'title': 'Contract Renewal'
        }]
      }]
    };
    this.answerObject.push(caraosalUnit);
    setTimeout(() => this.scrollToBottom());
  }

  addTextUnit() {
    const textUnit = {
      'include': ['web'],
      'text': ['']
    };
    this.answerObject.push(textUnit);
    setTimeout(() => this.scrollToBottom());
  }

  addImageUnit() {
    const unit = {
      'include': ['web'],
      'image': [{'url': ConstantsService.getDefaultUrls().image}]
    };
    this.answerObject.push(unit);
    setTimeout(() => this.scrollToBottom());
  }

  addFileUnit() {
    const unit = {
      'include': ['web'],
      'file': [{'url': ConstantsService.getDefaultUrls().file}]
    };
    this.answerObject.push(unit);
    setTimeout(() => this.scrollToBottom());
  }
  addCodeSnippetUnit() {
    const unit = {
      'include':  ['web'],
      'function_code': 'code',
    };
    this.answerObject.push(unit);
    setTimeout(() => this.scrollToBottom());
  }
  addVideoUnit() {
    const unit = {
      'include': ['web'],
      'video': [{'url': ConstantsService.getDefaultUrls().video}]
    };
    this.answerObject.push(unit);
    setTimeout(() => this.scrollToBottom());
  }

  addAudioUnit() {
    const unit = {
      'include': ['web'],
      'audio': [{'url': ConstantsService.getDefaultUrls().audio}]
    };
    this.answerObject.push(unit);
    setTimeout(() => this.scrollToBottom());
  }

  deleteGentemplate(e) {
    this.answerObject.splice(e, 1);
  }

  moveUpGentempate(e) {
    const temp = this.answerObject[e];
    this.answerObject[e] = this.answerObject[e - 1];
    this.answerObject[e - 1] = temp;
  }

  moveDownGentempate(e) {
    if (this.answerObject.length === e + 1) {
      console.log('just dot do that , U know Y');
      return;
    }
    const temp = this.answerObject[e];
    this.answerObject[e] = this.answerObject[e + 1];
    this.answerObject[e + 1] = temp;
  }

  scrollToBottom(): void {
    try {
      /*TODO: use ViewChildren instead of class name.
      * TODO: put animation here*/
      //  this.genTempGridItemGrid.nativeElement.scrollTop = this.genTempGridItemGrid.nativeElement.scrollHeight -500;
      //  let arr = this.gentemplateItems.toArray();
      //  let lastItem = arr[arr.length-1]
      //  lastItem.nativeElement.scrollIntoView();
      //  console.log(lastItem.nativeElement);
      const arr1 = document.getElementsByClassName('gentemplateItem');
      const x = arr1[arr1.length - 1];
      x.scrollIntoView();
    } catch (err) {
      console.log(err);
    }
  }
}
