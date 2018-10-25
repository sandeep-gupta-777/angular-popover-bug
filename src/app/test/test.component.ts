import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IBot} from '../core/interfaces/IBot';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private router: Router) {
  }

  _bot: IBot;
  @Input() set bot(botData: IBot) {
    // ;
    this._bot = botData;
  }

  ngOnInit() {
  }

  x = [{
    'include': ['facebook', 'skype', 'line', 'viber', 'web'],
    'text': ['I can help you with the following : ']
  }, {
    'generic_template': [{
      'elements': [{
        'image_url': 'https://s3-us-west-2.amazonaws.com/o2bot/image/carousel_travel_img.jpg',
        'button': [{'type': 'postback', 'title': 'Add Now', 'payload': 'travel'}],
        'title': 'Travel Bolt Ons'
      }, {
        'image_url': 'https://s3-us-west-2.amazonaws.com/o2bot/image/carousel_newcontract.jpg',
        'button': [{'type': 'postback', 'title': 'Renew Now', 'payload': 'expire'}],
        'title': 'Contract Renewal'
      }, {
        'image_url': 'https://s3-us-west-2.amazonaws.com/o2bot/image/carousel_pay_bills.jpg',
        'button': [{'type': 'postback', 'title': 'Ask Now', 'payload': 'bill too high'}],
        'title': 'Bill Related Issues'
      }, {
        'image_url': 'https://s3-us-west-2.amazonaws.com/telcobot/images/carousel_changecontracts.jpg',
        'button': [{'type': 'postback', 'title': 'Block Now', 'payload': 'block'}],
        'title': 'Block SIM'
      }]
    }]
  }];


}
