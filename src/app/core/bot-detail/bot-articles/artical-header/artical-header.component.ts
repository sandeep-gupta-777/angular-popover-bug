import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICorpus } from 'src/app/core/interfaces/faqbots';
import { EAllActions } from 'src/app/typings/enum';
import {SocketService} from "../../../../socket.service";
import {UtilityService} from "../../../../utility.service";
import {IBot} from "../../../interfaces/IBot";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-artical-header',
  templateUrl: './artical-header.component.html',
  styleUrls: ['./artical-header.component.scss']
})
export class ArticalHeaderComponent implements OnInit {

  constructor(
    private utilityService : UtilityService
  ) { }
  myEAllActions = EAllActions;
  @Input() bot: IBot;
  @Input() corpus: ICorpus;
  @Output() train = new EventEmitter();
  @Output() makeLive = new EventEmitter();
  @Output() refreshTraining = new EventEmitter();
  destroy = new EventEmitter();
  ngOnInit() {
    SocketService.train$.pipe(takeUntil(this.destroy)).subscribe((payload:any)=>{
      if(payload && this.bot.id === payload.bot_id){
        this.corpus.state = payload.status;
      }
    })
  }
  trainOrMakeLive() {
    if (this.corpus.state === 'saved') {
      this.train.emit();
    }
    if (this.corpus.state === 'trained') {
      // make LIve
      this.makeLive.emit();
    }
  }
  ngOnDestroy(): void {
    try {
      this.destroy.next(true);
      this.destroy.unsubscribe();
    } catch (e) {
      console.log(e);
    }
  }
  refreshTrainingClicked(){
    this.refreshTraining.emit();
  }
}
