import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../interfaces/IBot';

@Component({
  selector: 'app-ml-reply',
  templateUrl: './ml-reply.component.html',
  styleUrls: ['./ml-reply.component.scss']
})
export class MlReplyComponent implements OnInit {


  @Input() bot: IBot;

  constructor() {
  }

  ngOnInit() {
  }

}
