import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICorpus } from 'src/app/core/interfaces/faqbots';

@Component({
  selector: 'app-artical-header',
  templateUrl: './artical-header.component.html',
  styleUrls: ['./artical-header.component.scss']
})
export class ArticalHeaderComponent implements OnInit {

  constructor() { }
  @Input() corpus : ICorpus;
  @Output() train = new EventEmitter();
  @Output() makeLive = new EventEmitter();
  ngOnInit() {
  }
  trainOrMakeLive(){
    if(this.corpus.state == 'saved'){
      this.train.emit()
    }
    if(this.corpus.state == 'trained'){
      // make LIve
      this.makeLive.emit();
    }
  }
}
