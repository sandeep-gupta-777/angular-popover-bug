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
    //   console.log(args);
    // });

    this.buildBotType = this.activatedRoute.snapshot.data['buildBot'];
    this.pipeLine = this._bot && this._bot.pipelines || [];

    let url = this.constantsService.getAllPipelineModuleUrl();
    this.app$.subscribe((appState:IAppState)=>{
      this.aiModules = [
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 1,
          input_params: {},
          library: 'spacy',
          module: 'ner',
          resource_uri: '/api/v1/pipelinemodule/1/',
          unique_name: 'Spacy NER',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 2,
          input_params: {},
          library: 'spacy',
          module: 'maintheme',
          resource_uri: '/api/v1/pipelinemodule/2/',
          unique_name: 'Main Theme',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 3,
          input_params: {},
          library: 'dandelion',
          module: 'ner',
          resource_uri: '/api/v1/pipelinemodule/3/',
          unique_name: 'Dandelion NER',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {
            output_language: 'Output language'
          },
          id: 4,
          input_params: {
            output_language: 'en'
          },
          library: 'google',
          module: 'language_translate',
          resource_uri: '/api/v1/pipelinemodule/4/',
          unique_name: 'Google Translate',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': true,
          display_values: {},
          id: 5,
          input_params: {},
          library: 'azure',
          module: 'spell_check',
          resource_uri: '/api/v1/pipelinemodule/5/',
          unique_name: 'Azure Spell Check',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 6,
          input_params: {},
          library: 'google',
          module: 'parsetree',
          resource_uri: '/api/v1/pipelinemodule/6/',
          unique_name: 'Google Parse Tree',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': true,
          display_values: {},
          id: 7,
          input_params: {},
          library: 'botman',
          module: 'custom_ners',
          resource_uri: '/api/v1/pipelinemodule/7/',
          unique_name: 'IMIbot Custom NER',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': true,
          display_values: {},
          id: 8,
          input_params: {},
          library: 'botman',
          module: 'commonsense',
          resource_uri: '/api/v1/pipelinemodule/8/',
          unique_name: 'IMIbot Common Sense',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 9,
          input_params: {},
          library: 'botman',
          module: 'numbers',
          resource_uri: '/api/v1/pipelinemodule/9/',
          unique_name: 'IMIbot Numbers Recognition',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 10,
          input_params: {},
          library: 'spacy',
          module: 'quesdetect',
          resource_uri: '/api/v1/pipelinemodule/10/',
          unique_name: 'Spacy Question Detection',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {
            image_type: 'Natural Image'
          },
          id: 11,
          input_params: {
            image_type: 'natural_image'
          },
          library: 'google',
          module: 'ocr',
          resource_uri: '/api/v1/pipelinemodule/11/',
          unique_name: 'Google OCR',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 12,
          input_params: {
            model_type: 'mitie_sklearn'
          },
          library: 'smalltalk',
          module: 'rasanlp',
          resource_uri: '/api/v1/pipelinemodule/12/',
          unique_name: 'RASA CommonSense',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': true,
          display_values: {},
          id: 13,
          input_params: {},
          library: 'spacy',
          module: 'pos',
          resource_uri: '/api/v1/pipelinemodule/13/',
          unique_name: 'Spacy Parts of Speech',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 14,
          input_params: {},
          library: 'spacy',
          module: 'parsetree',
          resource_uri: '/api/v1/pipelinemodule/14/',
          unique_name: 'Spacy Parse Tree',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 15,
          input_params: {},
          library: 'botman',
          module: 'spell_check',
          resource_uri: '/api/v1/pipelinemodule/15/',
          unique_name: 'IMIbot Spell Check',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 16,
          input_params: {},
          library: 'botman',
          module: 'profanity_filter',
          resource_uri: '/api/v1/pipelinemodule/16/',
          unique_name: 'IMIbot Profanity Filter',
          updated_at: 1535705344000
        },
        {
          contextual: true,
          created_at: 1535705344000,
          'default': false,
          display_values: {
            wit_access_token: 'Wit Access token'
          },
          id: 17,
          input_params: {
            wit_access_token: ''
          },
          library: 'wit',
          module: 'witnlp',
          resource_uri: '/api/v1/pipelinemodule/17/',
          unique_name: 'Wit.ai',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 18,
          input_params: {},
          library: 'spacy',
          module: 'word_tokenization',
          resource_uri: '/api/v1/pipelinemodule/18/',
          unique_name: 'Spacy Word Tokenization',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': true,
          display_values: {},
          id: 19,
          input_params: {},
          library: 'nltk',
          module: 'sentence_tokenization',
          resource_uri: '/api/v1/pipelinemodule/19/',
          unique_name: 'NLTK Sentence Tokenization',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 20,
          input_params: {},
          library: 'spacy',
          module: 'sentence_tokenization',
          resource_uri: '/api/v1/pipelinemodule/20/',
          unique_name: 'Spacy Sentence Tokenization',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 21,
          input_params: {},
          library: 'botman',
          module: 'lemmatization',
          resource_uri: '/api/v1/pipelinemodule/21/',
          unique_name: 'Botman Lemmatization',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 22,
          input_params: {},
          library: 'spacy',
          module: 'lemmatization',
          resource_uri: '/api/v1/pipelinemodule/22/',
          unique_name: 'Spacy Lemmatization',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 23,
          input_params: {},
          library: 'google',
          module: 'lemmatization',
          resource_uri: '/api/v1/pipelinemodule/23/',
          unique_name: 'Google Lemmatization',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 24,
          input_params: {},
          library: 'spacy',
          module: 'chunking',
          resource_uri: '/api/v1/pipelinemodule/24/',
          unique_name: 'Spacy Chunking',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 25,
          input_params: {},
          library: 'google',
          module: 'sentiment',
          resource_uri: '/api/v1/pipelinemodule/25/',
          unique_name: 'Google Sentiment Analysis',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 26,
          input_params: {},
          library: 'botman',
          module: 'sentiment',
          resource_uri: '/api/v1/pipelinemodule/26/',
          unique_name: ' IMIbot Sentiment Analysis',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {
            filetype: 'Output format'
          },
          id: 27,
          input_params: {
            filetype: ''
          },
          library: 'azure',
          module: 'texttospeech',
          resource_uri: '/api/v1/pipelinemodule/27/',
          unique_name: 'Azure Text to Speech',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {
            filetype: 'Output format'
          },
          id: 28,
          input_params: {
            filetype: ''
          },
          library: 'amazon',
          module: 'texttospeech',
          resource_uri: '/api/v1/pipelinemodule/28/',
          unique_name: 'Amazon Text to Speech',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {
            filetype: 'Output format'
          },
          id: 29,
          input_params: {
            filetype: ''
          },
          library: 'google',
          module: 'texttospeech',
          resource_uri: '/api/v1/pipelinemodule/29/',
          unique_name: 'Google Text to Speech',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 30,
          input_params: {},
          library: 'google',
          module: 'speechtotext',
          resource_uri: '/api/v1/pipelinemodule/30/',
          unique_name: 'Google Speech to Text',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': true,
          display_values: {},
          id: 31,
          input_params: {},
          library: 'nltk',
          module: 'word_tokenization',
          resource_uri: '/api/v1/pipelinemodule/31/',
          unique_name: 'NLTK Word Tokenization',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 32,
          input_params: {},
          library: 'google',
          module: 'pos',
          resource_uri: '/api/v1/pipelinemodule/32/',
          unique_name: 'Google Parts of Speech',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {
            extra_info: 'extra information',
            future: 'Future'
          },
          id: 33,
          input_params: {
            extra_info: false,
            future: true
          },
          library: 'botman',
          module: 'timedate',
          resource_uri: '/api/v1/pipelinemodule/33/',
          unique_name: 'IMIbot Date Time Recognition',
          updated_at: 1535705344000
        },
        {
          contextual: false,
          created_at: 1535705344000,
          'default': false,
          display_values: {},
          id: 34,
          input_params: {},
          library: 'botman',
          module: 'units',
          resource_uri: '/api/v1/pipelinemodule/34/',
          unique_name: 'IMIbot Units Recognition',
          updated_at: 1535705344000
        },
        {
          contextual: true,
          created_at: 1535705344000,
          'default': false,
          display_values: {
            api_ai_access_token: 'api.ai access token'
          },
          id: 35,
          input_params: {
            api_ai_access_token: ''
          },
          library: 'apiai',
          module: 'apiainlp',
          resource_uri: '/api/v1/pipelinemodule/35/',
          unique_name: 'API.ai',
          updated_at: 1535705344000
        }
      ]
      // appState.masterPipelineItems;
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
    //
    console.log('do check', this.pipeLine);
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
    console.log(this.pipeLine);
    console.log(this.aiModules);
  }
  openCreateBotModal(template: TemplateRef<any>,pipeline:IPipelineItem) {
    this.selectedPipeline = pipeline;
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  test(){
    console.log(this.pipeLine);
  }


}
