import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IBot} from '../../interfaces/IBot';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IBotConfig} from '../../../../interfaces/bot-creation';
import {IBotCreationState} from '../ngxs/buildbot.state';

@Component({
  selector: 'app-build-code-based-bot',
  templateUrl: './build-code-based-bot.component.html',
  styleUrls: ['./build-code-based-bot.component.scss']
})
export class BuildCodeBasedBotComponent implements OnInit {

  @Select() botcreationstate$: Observable<IBotCreationState>;
  constructor(private activatedRoute:ActivatedRoute) { }
  activeTab:string = 'basic';
  @Input() bot = {};

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('tab') || 'basic'; //todo: not a robust code
    this.botcreationstate$.subscribe((value)=>{
      // console.log('test');
      if(!value || !value.codeBased) return;
      this.bot = {
        ...value.codeBased.basicInfo,
        avatars: value.codeBased.avatars,
        pipeline: value.codeBased.pipeline,
        unselected_pipeline: value.codeBased.unselected_pipeline,
        ...value.codeBased.customners,
        ...value.codeBased.code,
        ...value.codeBased.integration,
        ...value.codeBased.botConfig,
      };
    })
  }

  tabClicked(activeTab:string){
    this.activeTab = activeTab;
    console.log(this.activeTab);
  }

}
