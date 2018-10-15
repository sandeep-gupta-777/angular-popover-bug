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
import {EFormValidationErrors, UtilityService} from '../../../../../utility.service';
import {DragulaService} from 'ng2-dragula';
import {LoggingService} from '../../../../../logging.service';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss'],
  providers:[DragulaService]
})
export class PipelineComponent implements OnInit {

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
  @Input() aiModules: IPipelineItem[] = null;
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
    private utilityService: UtilityService,
    private dragulaService: DragulaService,
    private store: Store) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }
  vamps = [
    { name: "Bad Vamp" },
    { name: "Petrovitch the Slain" },
    { name: "Bob of the Everglades" },
    { name: "The Optimistic Reaper" }
  ];

  vamps2 = [
    { name: "Dracula" },
    { name: "Kurz" },
    { name: "Vladislav" },
    { name: "Deacon" }
  ];

  ngOnInit() {
    // use these if you want

    // this.dragulaService.createGroup("VAMPIRES", {
    //   // ...
    // });
    //
    // this.dragulaService.dropModel("VAMPIRES").subscribe(args => {
    //   LoggingService.log(args);
    // });

    this.buildBotType = this.activatedRoute.snapshot.data['buildBot'];
    this.pipeLine = this._bot && this._bot.pipelines || [];

    let url = this.constantsService.getAllPipelineModuleUrl();
    this.app$.subscribe((appState:IAppState)=>{
      this.aiModules =
      appState.masterPipelineItems;
      this.filterAiModules()
    });
    this.serverService.makeGetReq<{objects:IPipelineItem[]}>({url})
      .subscribe(value => {
        this.store.dispatch([
          new SetPipelineModuleMasterData({masterPipelineItems: value.objects})
        ]);
      });

    this.modalService.onHidden.subscribe((reason: string) => {
      this.prepareAndDispatch();
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

  filterAiModules(){
    if(!this.pipeLine || !this.aiModules) return;
    this.aiModules = this.aiModules.filter((aiModule)=>{
      let x= !this.pipeLine.find(pipelineItem=>pipelineItem.id===aiModule.id);
      return x;
    });
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.pipeLine);
    if (changes) {
      this.prepareAndDispatch();
    }
  }

  prepareAndDispatch(){
    let isAllPipelineModulesInputParamsArePopulated = this.utilityService.checkIfAllPipelineInputParamsArePopulated(this.pipeLine);
    let isPipelineValidObj = {};
    isPipelineValidObj[EFormValidationErrors.form_validation_pipeline] =isAllPipelineModulesInputParamsArePopulated;
    /*if there is change: check if all settings are populated*/

    this.datachanged$.emit({pipelines: this.pipeLine,isAllPipelineModulesInputParamsArePopulated, ...isPipelineValidObj});
  }

  printArr(){
    LoggingService.log(this.pipeLine);
    LoggingService.log(this.aiModules);
  }
  openCreateBotModal(template: TemplateRef<any>,pipeline:IPipelineItem) {
    this.selectedPipeline = pipeline;
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  test(){
    LoggingService.log(this.pipeLine);
  }


}
