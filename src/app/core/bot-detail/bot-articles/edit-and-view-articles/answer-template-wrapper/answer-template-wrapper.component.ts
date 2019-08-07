import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-answer-template-wrapper',
  templateUrl: './answer-template-wrapper.component.html',
  styleUrls: ['./answer-template-wrapper.component.scss']
})
export class AnswerTemplateWrapperComponent implements OnInit {

  constructor() { }
  selectedTemplateKeyOutputIndex = [];
  channelList = [ { "name": "all", "displayName": "All" }, { "name": "facebook", "displayName": "facebook" }, { "name": "skype", "displayName": "skype" } ];
  @Input() answerObject;
  ngOnInit() {
    if( !this.answerObject[0].include ){
      this.answerObject[0].include = ['web'];
    }
  }
  genTemplateTypeClicked(tab:string){
    debugger;
      if (tab === 'text') {
        this.addTextUnit();
      } else if (tab === 'carousel') {
        this.addImageCaraosalUnit();
      } else if (tab === 'quick_reply') {
        this.addQuickReplyUnit();
      } else if (tab === 'code_input') {
        this.addCodeUnit();
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
          'image_url': 'https:// s3-us-west-2.amazonaws.com/o2bot/image/carousel_pay_bills.jpg',
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
    this.answerObject = [...this.answerObject]
    setTimeout(() => this.scrollToBottom());

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
