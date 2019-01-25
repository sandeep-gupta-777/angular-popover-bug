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
import {EFormValidationErrors, UtilityService} from '../../../../../utility.service';
import {DragulaService} from 'ng2-dragula';
import {LoggingService} from '../../../../../logging.service';
import {NgForm} from '@angular/forms';
import {ModalImplementer} from '../../../../../modal-implementer';
import {MatDialog} from '@angular/material';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {EventService} from '../../../../../event.service';


export interface IPipelineItemV2 {
  description: string,
  display_values: string,
  id: string,
  unique_name: string,
  pipeline_modules: IPipelineItem[]
}

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss'],
  providers: [DragulaService]
})
export class PipelineComponent extends ModalImplementer implements OnInit {

  allMatExpansionExpanded = false;
  masterModuleCount: number;
  panelOpenState = false;
  myObject = Object;
  pipeLineSrc: string = 'assets/img/pipeline-no-hover-drag.svg';
  _bot: IBot;
  @Input() set bot(botData: IBot) {
    this._bot = botData;
    this.pipeLine = this._bot && this._bot.pipelines || [];
    this.filterAiModules();
  }

  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Select() app$: Observable<IAppState>;
  iterableDiffer;
  pipeLine: IPipelineItem[] = [];
  aiModules: IPipelineItem[] = null;
  selectedPipeline: IPipelineItem;
  searchKeyword: string;
  buildBotType: any;
  @Output() datachanged$ = new EventEmitter();
  pipelineModulesV2List: IPipelineItemV2[];

  constructor(
      private aimService: AimService,
      private objectArrayCrudService: ObjectArrayCrudService,
      private _iterableDiffers: IterableDiffers,
      private activatedRoute: ActivatedRoute,
      private constantsService: ConstantsService,
      private serverService: ServerService,
      public utilityService: UtilityService,
      private dragulaService: DragulaService,
      public matDialog: MatDialog,
      private store: Store) {
    super(utilityService, matDialog);
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  countMasterModules(pipelineModulesV2List: IPipelineItemV2[]) {

    return this.pipelineModulesV2List.reduce((aggregate, pipelineModulesV2Item) => {
      return aggregate + pipelineModulesV2Item.pipeline_modules.length;
    }, 0);
  }

  mergeInputParams() {
    this.pipelineModulesV2List.forEach((pipelineModulesV2) => {
      pipelineModulesV2.pipeline_modules.forEach((masterPipelineItem) => {
        let index: number = this.pipeLine.findIndex((pipeLineItem) => {
          return masterPipelineItem.unique_name === pipeLineItem.unique_name;
        });
        if (index !== -1)
          masterPipelineItem.input_params = {...masterPipelineItem.input_params, ...this.pipeLine[index].input_params};
      });
    });
  }

// /pipeline.component.ts
  ngOnInit() {
    this.buildBotType = this.activatedRoute.snapshot.data['buildBot'];

    this.pipeLine = this._bot.pipelines || [];

    let url = this.constantsService.getAllPipelineModuleUrl();
    this.app$.subscribe((appState: IAppState) => {
      this.aiModules = this.utilityService.createDeepClone(appState.masterPipelineItems);
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
    //       let masterPipelineItem = masterPipelineItems.find(el => el.id === pipelineItem.id);
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
    //   const x = !this.pipeLine.find(pipelineItem => pipelineItem.id === aiModule.id);
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

    this.datachanged$.emit({pipelines: this.pipeLine, isAllPipelineModulesInputParamsArePopulated, ...isPipelineValidObj});
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
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pipeLine, event.previousIndex, event.currentIndex);
  }

  addPipelineItemToPipeline(pipelineItem: IPipelineItem) {
    this.pipeLine.push(pipelineItem);
  }

  removePipelineItemFromPipeline(index: number) {
    this.pipeLine.splice(index, 1);
  }

  toggleExpandAllModules() {

    if(!this.allMatExpansionExpanded){//collapse all
      this.pipelineModulesV2List.forEach((value, index)=>{
          this._expandedPipelineModules[value.id] = true;
      });
    }else {//collapse all
      this._expandedPipelineModules = {};
    }
    this._expandedPipelineModules = {...this._expandedPipelineModules};
    this.allMatExpansionExpanded = !this.allMatExpansionExpanded;
  }

  log() {
    console.log(this.pipeLine);
  }

  _expandedPipelineModules = {};
  // get expandedPipelineModules (){
  //   return this._expandedPipelineModules;
  // }
  togglePipelineModule(i) {
    this._expandedPipelineModules[i] = !this._expandedPipelineModules[i];
    this._expandedPipelineModules = {...this._expandedPipelineModules};
  }


}
