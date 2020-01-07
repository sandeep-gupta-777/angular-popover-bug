import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  IterableDiffers,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {IBot} from '../../../../interfaces/IBot';
import {IPipelineItem} from '../../../../../../interfaces/ai-module';
import {AimService} from '../../../../../aim.service';
import {ObjectArrayCrudService} from '../../../../../object-array-crud.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {IBotCreationState} from '../../../ngxs/buildbot.state';
import {IAppState} from '../../../../../ngxs/app.state';
import {ConstantsService} from '../../../../../constants.service';
import {ServerService} from '../../../../../server.service';
import {EFormValidationErrors, UtilityService} from '../../../../../utility.service';
import {LoggingService} from '../../../../../logging.service';
import {NgForm} from '@angular/forms';
import {ModalImplementer} from '../../../../../modal-implementer';
import {MatDialog} from '@angular/material';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {EventService} from '../../../../../event.service';
import {ModalConfirmComponent} from 'src/app/modal-confirm/modal-confirm.component';
import {ELoadingStatus} from '../../../../../button-wrapper/button-wrapper.component';


export interface IPipelineItemV2 {
  description: string;
  display_values: string;
  id: string;
  unique_name: string;
  pipeline_modules: IPipelineItem[];
}

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss'],
})
export class PipelineComponent extends ModalImplementer implements OnInit, OnDestroy, DoCheck {

  constructor(
    private objectArrayCrudService: ObjectArrayCrudService,
    private _iterableDiffers: IterableDiffers,
    private activatedRoute: ActivatedRoute,
    private constantsService: ConstantsService,
    private aimService: AimService,
    private serverService: ServerService,
    public utilityService: UtilityService,
    public matDialog: MatDialog,
    private store: Store) {
    super(utilityService, matDialog);
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }
  tag = 'PipelineComponent';
  allMatExpansionExpanded = false;
  masterModuleCount: number;
  panelOpenState = false;
  myObject = Object;
  pipeLineSrc = 'assets/img/pipeline-no-hover-drag.svg';
  _bot: IBot;
  @Output() initDone$ = new EventEmitter<PipelineComponent>();
  @Input() bot: IBot;
  // @Input() set bot(botData: IBot) {
  //   this.bot = botData;
  //   this.pipeLine = this.bot && this.bot.pipelines || [];
  //   this.filterAiModules();
  // }

  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Select() app$: Observable<IAppState>;
  iterableDiffer;
  pipeLine: IPipelineItem[] = [];
  aiModules: IPipelineItem[] = null;
  selectedPipeline: IPipelineItem;
  searchKeyword: string;
  buildBotType: any;
  // @Output() datachanged$ = new EventEmitter();
  @Output() botData$ = new EventEmitter();
  pipelineModulesV2List: IPipelineItemV2[];

  _expandedPipelineModules = {};

  updateBotStatus: ELoadingStatus = ELoadingStatus.default;
  updateBotStatusText = '';

  countMasterModules(pipelineModulesV2List: IPipelineItemV2[]) {

    return this.pipelineModulesV2List.reduce((aggregate, pipelineModulesV2Item) => {
      return aggregate + pipelineModulesV2Item.pipeline_modules.length;
    }, 0);
  }

  mergeInputParams() {
    this.pipelineModulesV2List.forEach((pipelineModulesV2) => {
      pipelineModulesV2.pipeline_modules.forEach((masterPipelineItem) => {
        const index: number = this.pipeLine.findIndex((pipeLineItem) => {
          return masterPipelineItem.unique_name === pipeLineItem.unique_name;
        });
        if (index !== -1) {
          masterPipelineItem.input_params = {...masterPipelineItem.input_params, ...this.pipeLine[index].input_params};
        }
      });
    });
  }

  botInitHandler(botData) {
    this._bot = botData;
    this.pipeLine = [...this._bot && this._bot.pipelines] || [];
    this.initDone$.emit(this);
    this.filterAiModules();
  }

// /pipeline.component.ts
  ngOnInit() {

    this.botInitHandler(this.bot);
    EventService.botUpdatedInServer$.subscribe((botData) => {
      this.botInitHandler(botData);
    });

    this.buildBotType = this.activatedRoute.snapshot.data['buildBot'];

    // this.pipeLine = [...this._bot.pipelines] || [];
    this.constantsService.getAllPipelineModuleUrl();
    this.app$.subscribe((appState: IAppState) => {

      // this.aiModules = this.utilityService.createDeepClone(appState.masterPipelineItems);
      this.pipelineModulesV2List = this.utilityService.createDeepClone(appState.pipelineModulesV2List);
      this.masterModuleCount = this.countMasterModules(this.pipelineModulesV2List);
      this.filterAiModules();
      this.mergeInputParams();
    });
    // this.serverService.makeGetReq<{ objects: IPipelineItem[] }>({url})
    //   .subscribe(value => {
    //     let masterPipelineItems = value.objects;
    //     this.store.dispatch([
    //       new SetPipelineModuleMasterData({masterPipelineItems: value.objects})
    //     ]);
    //     this.pipeLine = this.pipeLine.map((pipelineItem: IPipelineItem) => {
    //       let masterPipelineItem = masterPipelineItems.find(el => el.roomId === pipelineItem.roomId);
    //       return {...masterPipelineItem, ...pipelineItem};
    //     });
    //   });

    // this.modalService.onHidden.subscribe((reason: string) => {
    //   this.prepareAndDispatch();
    // });


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
  }

  filterAiModules() {

    if (!this.pipeLine || !this.pipelineModulesV2List) {
      return;
    }
    // this.aiModules = this.aiModules.filter((aiModule) => {
    //   const x = !this.pipeLine.find(pipelineItem => pipelineItem.roomId === aiModule.roomId);
    //   return x;
    // });

    this.pipelineModulesV2List.forEach((pipelineModulesV2) => {
      pipelineModulesV2.pipeline_modules.forEach((masterPipelineItem) => {
        masterPipelineItem.is_added = !!this.pipeLine.find((pipeLineItem) => {
          return masterPipelineItem.unique_name === pipeLineItem.unique_name;
        });
      });
    });
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.pipeLine);
    if (changes) {
      // this.prepareAndDispatch();
      this.filterAiModules();
    }
  }

  prepareAndDispatch() {

    const isAllPipelineModulesInputParamsArePopulated = this.utilityService.checkIfAllPipelineInputParamsArePopulated(this.pipeLine);
    const isPipelineValidObj = {};
    isPipelineValidObj[EFormValidationErrors.form_validation_pipeline] = isAllPipelineModulesInputParamsArePopulated;
    /*if there is change: check if all settings are populated*/

    // this.datachanged$.emit({pipelines: this.pipeLine, isAllPipelineModulesInputParamsArePopulated, ...isPipelineValidObj});
  }

  printArr() {
    LoggingService.log(this.pipeLine);
    LoggingService.log(this.aiModules);
  }

  async openInputParamModal(template: TemplateRef<any>, pipeline: IPipelineItem, addPipelineItemToPipeline?: boolean) {


    this.selectedPipeline = pipeline;
    // this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.openPrimaryModal(template)
      .then((closedWithSubmitClick: boolean) => {
        if (addPipelineItemToPipeline && closedWithSubmitClick) {
          this.addPipelineItemToPipeline(pipeline);
        }
      });
  }

  test() {
    LoggingService.log(this.pipeLine);
  }

  submitPipeline(Pipelineform: NgForm) {
    if (Pipelineform.valid) {
      console.log(Pipelineform.value);
      this.selectedPipeline.input_params = Pipelineform.value;
      const index = this.pipeLine.findIndex(item => item.id === this.selectedPipeline.id);
      if (index === -1) {
        this.addPipelineItemToPipeline(this.selectedPipeline);
      } else {
        this.pipeLine[index] =  this.selectedPipeline;
      }
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pipeLine, event.previousIndex, event.currentIndex);
  }

  addPipelineItemToPipeline(pipelineItem: IPipelineItem) {
    console.log('=========>', pipelineItem);

    const pipeLineTemp = this.pipeLine.filter(item => {
      return item.id !== pipelineItem.id;
    });
    this.pipeLine = pipeLineTemp;
    this.pipeLine.push(pipelineItem);
    this.botData$.emit(this.pipeLine);
  }

  ngOnDestroy() {

    this.botData$.emit(this._bot);
  }

  removePipelineItemFromPipelineModal(index: number, aiModuleId: number) {

    const pipelineModules = this.pipelineModulesV2List;
    const displayNamePipeline = pipelineModules.find((wrapper) => {
      return !!wrapper.pipeline_modules.find((module) => {
        return module.id === aiModuleId;
      });
    });
    // let displayNamePipeline = displayNamePipelineArray.find((pipeline)=>{
    //   return pipeline.id === aiModuleId;
    // })
    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: `Remove module`,
        message: 'Are you sure you want to remove the selected module from your pipeline?',
        title: `Remove ${displayNamePipeline.display_values}`,
        isActionButtonDanger: true
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        this.removePipelineItemFromPipeline(index);
      }
    });
  }

  removePipelineItemFromPipeline(index: number) {
    console.log(this.pipeLine);
    this.pipeLine.splice(index, 1);
    this.botData$.emit({pipelines: this.pipeLine});
    console.log(this.pipeLine);

  }

  toggleExpandAllModules() {

    if (!this.allMatExpansionExpanded) {// collapse all
      this.pipelineModulesV2List.forEach((value, index) => {
        this._expandedPipelineModules[value.id] = true;
      });
    } else {// collapse all
      this._expandedPipelineModules = {};
    }
    this._expandedPipelineModules = {...this._expandedPipelineModules};

    this.allMatExpansionExpanded = !this.allMatExpansionExpanded;
  }

  log() {
    console.log(this.pipeLine);
  }
  // get expandedPipelineModules (){
  //   return this._expandedPipelineModules;
  // }
  togglePipelineModule(i) {
    this._expandedPipelineModules[i] = !this._expandedPipelineModules[i];
    this._expandedPipelineModules = {...this._expandedPipelineModules};
  }

  updateBot() {
    // EventService.updateBotinit$.emit();
    const bot: IBot = {pipelines: this.pipeLine, id: this._bot.id, bot_access_token: ServerService.getBotTokenById(this.bot)};
    this.updateBotStatus = ELoadingStatus.loading;
    this.serverService.updateBot(bot).subscribe(() => {
      this.updateBotStatus = ELoadingStatus.success;
      this.updateBotStatusText = 'suceess';
    });
  }


}
