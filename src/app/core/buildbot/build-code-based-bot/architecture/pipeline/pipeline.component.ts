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

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss'],
  providers: [DragulaService]
})
export class PipelineComponent extends ModalImplementer implements OnInit {

  myObject = Object;
  // @Input() bot: IBot;
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

  ngOnInit() {
    this.buildBotType = this.activatedRoute.snapshot.data['buildBot'];
      
    this.pipeLine =  [];

    let url = this.constantsService.getAllPipelineModuleUrl();
    this.app$.subscribe((appState: IAppState) => {
      this.aiModules = this.utilityService.createDeepClone(appState.masterPipelineItems);
      this.filterAiModules();
    });
    this.serverService.makeGetReq<{ objects: IPipelineItem[] }>({url})
      .subscribe(value => {
        let masterPipelineItems = value.objects;
        this.store.dispatch([
          new SetPipelineModuleMasterData({masterPipelineItems: value.objects})
        ]);
        this.pipeLine = this.pipeLine.map((pipelineItem: IPipelineItem) => {
          let masterPipelineItem = masterPipelineItems.find(el => el.id === pipelineItem.id);
          return {...masterPipelineItem, ...pipelineItem};
        });
      });

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
    if (!this.pipeLine || !this.aiModules) {
      return;
    }
    this.aiModules = this.aiModules.filter((aiModule) => {
      const x = !this.pipeLine.find(pipelineItem => pipelineItem.id === aiModule.id);
      return x;
    });
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.pipeLine);
    if (changes) {
      this.prepareAndDispatch();
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

  openCreateBotModal(template: TemplateRef<any>, pipeline: IPipelineItem) {
    this.selectedPipeline = pipeline;
    // this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.openPrimaryModal(template);
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

}
