import {Component, EventEmitter, Input, IterableDiffers, OnInit, Output, TemplateRef} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {IBot} from '../../../../interfaces/IBot';
import {IPipelineItem} from '../../../../../../interfaces/ai-module';
import {AimService} from '../../../../../aim.service';
import {ObjectArrayCrudService} from '../../../../../object-array-crud.service';
import {SaveNewBotInfo_CodeBased, SavePipeLineInfo} from '../../../ngxs/buildbot.action';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {IBotCreationState} from '../../../ngxs/buildbot.state';
import {IAppState} from '../../../../../ngxs/app.state';
import {ConstantsService} from '../../../../../constants.service';
import {ServerService} from '../../../../../server.service';
import {SetPipelineModuleMasterData} from '../../../../../ngxs/app.action';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {

  myObject = Object;
  // @Input() bot: IBot;
  _bot: IBot;
  @Input() set bot(botData: IBot) {
    this._bot = botData;
    this.pipeLine = this._bot && this._bot.pipelines || [];
  }

  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Select() app$: Observable<IAppState>;
  iterableDiffer;
  pipeLine: any[] = [];
  aiModules: IPipelineItem[] = [];
  selectedPipeline: IPipelineItem;
  searchKeyword: string;
  buildBotType: any;
  modalRef: BsModalRef;
  
  @Output() datachanged$ = new EventEmitter();

  constructor(
    private aimService: AimService,
    private objectArrayCrudService: ObjectArrayCrudService,
    private _iterableDiffers: IterableDiffers,
    private activatedRoute: ActivatedRoute,
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private modalService: BsModalService,
    private store: Store) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    this.buildBotType = this.activatedRoute.snapshot.data['buildBot'];
    this.pipeLine = this._bot && this._bot.pipelines || [];

    let url = this.constantsService.getAllPipelineModuleUrl();
    this.serverService.makeGetReq<{objects:IPipelineItem[]}>({url})
      .subscribe(value => {
        this.store.dispatch([
          new SetPipelineModuleMasterData({masterPipelineItems: value.objects})
        ]);
      });

    this.app$.subscribe((appState:IAppState)=>{
      this.aiModules = appState.masterPipelineItems;
    });
    // this.aimService.getModules()
    //   .subscribe((value: IPipelineItem[]) => {
    //     this.aiModules = value;
    //   });
    if (this.buildBotType) {
      this.botcreationstate$.subscribe((botcreationstate) => {
        this.pipeLine = botcreationstate &&
          botcreationstate[this.buildBotType] &&
          botcreationstate[this.buildBotType].pipelines || [];
      });
    }
  };

  ngDoCheck() {
    // if (!this.pipeLine || this.pipeLine.length === 0) return;
    let changes = this.iterableDiffer.diff(this.pipeLine);
    if (changes) {
      // if(this.buildBotType){
      //   this.store.dispatch([
      //     new SaveNewBotInfo_CodeBased({data: {pipelines: this.pipeLine}})
      //   ]);
      //   return;
      // }
      this.datachanged$.emit({pipelines: this.pipeLine});
      // this.store.dispatch([
      //   new SavePipeLineInfo({data: {pipeline: this.pipeLine, unselectedPipeline: this.aiModules}})
      // ]);
    }
  }
  openCreateBotModal(template: TemplateRef<any>,pipeline:IPipelineItem) {
    this.selectedPipeline = pipeline;
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }
}
