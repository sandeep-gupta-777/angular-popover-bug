import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {Store} from '@ngxs/store';
import {SaveCodeInfo} from '../../../ngxs/buildbot.action';
<<<<<<< HEAD
import {ServerService} from '../../../../../server.service';
import {ConstantsService} from '../../../../../constants.service';
=======
import { ServerService } from '../../../../../server.service';
import { ConstantsService } from '../../../../../constants.service';
>>>>>>> 362dee1aa404e6c099cabdb92a1a069177a5d196

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss']
})
export class CodeInputComponent implements OnInit {

  activeTab: string = 'dfTemplate';
  @Input() bot: IBot;
  dfTemplate;
  dfRules;
  generationRules;
  generationTemplates;
  workflows;
  editorCode;
  showVersionList:false;

  constructor(
<<<<<<< HEAD
    private store:Store,
    private constantsService: ConstantsService,
    private serverService: ServerService,
=======
    private store:Store, 
    private serverService:ServerService, 
    private constantsService:ConstantsService
>>>>>>> 362dee1aa404e6c099cabdb92a1a069177a5d196
  ) {}

  ngOnInit() {
    this.editorCode = this.bot.dfTemplate;
    this.dfTemplate = this.bot.dfTemplate;
    this.dfRules = this.bot.dfRules;
    this.generationRules = this.bot.generationRules;
    this.generationTemplates = this.bot.generationTemplates;
<<<<<<< HEAD

    /*AJAX for bot versioning by id*/
    let url = this.constantsService.getAllBotVersionByBotIdUrl(this.bot._id);
    this.serverService.makeGetReq({url})
      .subscribe((value)=>{
        debugger;
        console.log(value);
      })
=======
    // this.workflows = this.timePeriod.workflows;
    let url = this.constantsService.getAllVersionsByBotId(this.bot._id);
    this.serverService.makeGetReq({url})
      .subscribe((value)=>{
        console.log(value);
      });
    
>>>>>>> 362dee1aa404e6c099cabdb92a1a069177a5d196
  }

  tabClicked(activeTab: string) {
    console.log('tab clicked');
    this.activeTab = activeTab;
    if (this.activeTab=== 'dfTemplate') {
      this.editorCode = this.dfTemplate;
    } else if (this.activeTab=== 'dfRules') {
      this.editorCode = this.dfRules;
    } else if (this.activeTab=== 'generationRules') {
      this.editorCode = this.generationRules;
    } else if (this.activeTab=== 'generationTemplates') {
      this.editorCode = this.generationTemplates;
    } else if (this.activeTab=== 'workflows') {
      this.editorCode = this.workflows;
    }
    this.editorCode = this.bot[this.activeTab];
    console.log(this.editorCode);
  }

  saveText(code:string){
    let objectTobeSaved = {};
    objectTobeSaved[this.activeTab] = code;
    this.store.dispatch([
      new SaveCodeInfo({data: objectTobeSaved})
    ])
  }
}
