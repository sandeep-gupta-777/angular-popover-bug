import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IBot} from '../core/interfaces/IBot';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private router:Router) { }
  _bot: IBot;
  @Input() set bot(botData: IBot) {
    // debugger;
    this._bot = botData;
  }

  ngOnInit() {
  }


}
