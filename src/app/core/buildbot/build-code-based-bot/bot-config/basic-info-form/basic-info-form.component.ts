import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import 'rxjs/add/operator/debounceTime';
import {Store, Select} from '@ngxs/store';
import {SaveNewBotInfo_CodeBased} from '../../../ngxs/buildbot.action';
import {IBasicInfo} from '../../../../../../interfaces/bot-creation';
import { Observable } from 'rxjs';
import { ViewBotStateModel } from '../../../../view-bots/ngxs/view-bot.state';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit, AfterViewInit {
  @Select() botlist$: Observable<ViewBotStateModel>;
  allbotList$:Observable<IBot[]>;
  @Input() bot:IBot;
  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();
  @ViewChild('form') f:NgForm;
  isManager:boolean;
  constructor(private store:Store) {}


  ngOnInit() {
    this.isManager = this.bot && this.bot.child_bots.length === 0;
    this.allbotList$ = this.botlist$.map((botlist)=>{
      return botlist.allBotList;
    })
  }

  ngAfterViewInit(): void {
    if(this.bot) setTimeout(()=>{this.f.form.patchValue(this.bot)},0);
    this.f.valueChanges.debounceTime(1000).subscribe((data:Partial<IBot>) => {
      console.log(this.f);
      if(!this.f.dirty) return;
      this.datachanged$.emit(data);
    });
  }

  addChildBot(childBot): void {
    this.bot.child_bots.push(childBot.id);
  }

  removeChildBot(childBotId): void{
    for(let i=0; i<this.bot.child_bots.length;i++){
      if(this.bot.child_bots[i] === childBotId){
        this.bot.child_bots.splice(i,1);
      }
    }
  }
  wannaDisable(childBotId): boolean{
    for(let i=0; i<this.bot.child_bots.length;i++){
      if(this.bot.child_bots[i] === childBotId){
        return true;
      }
    }
    return false;
  }
}


