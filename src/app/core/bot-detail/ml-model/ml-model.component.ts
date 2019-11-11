import {Component, EventEmitter, Input, OnInit, TemplateRef} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {IHeaderData} from '../../../../interfaces/header-data';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
import {IEntitiesItem, IIntentsItem, IMLCorpus, IMLCorpusResult} from '../../interfaces/mlBots';
import {is} from 'tslint-sonarts/lib/utils/nodes';
import {UtilityService} from '../../../utility.service';
import {MatDialog} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {intentMock} from '../ml-intents/intent-mock';
import {IIntent} from '../../../typings/intents';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {MyToasterService} from '../../../my-toaster.service';
import {map, takeUntil, tap} from 'rxjs/operators';
import {EventService} from '../../../event.service';
import {MlService} from './ml.service';
import {SocketService} from "../../../socket.service";
import {ModalConfirmComponent} from "../../../modal-confirm/modal-confirm.component";

@Component({
  selector: 'app-ml-model',
  templateUrl: './ml-model.component.html',
  styleUrls: ['./ml-model.component.scss']
})
export class MLModelComponent implements OnInit {

  constructor(
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private myToasterService: MyToasterService,
    private utilityService: UtilityService,
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  @Input() bot: IBot;
  view = 'table';
  intentList: IIntent[];
  entityList: IEntitiesItem[];
  corpusMiniObj;
  selectedTabIndex: number = 0;
  dialogRefWrapper = {ref: null};
  entity_types: any[];
  modalForm: FormGroup;
  selectedIntent: IIntent = this.selectedIntentInit();
  edittingData;
  destroy = new EventEmitter();
  IEntitiesItem;

  ngOnInit() {
    this.view = (!!this.activatedRoute.snapshot.queryParams['intent_id']) ? 'detail' : 'table';
    this.getAndSetMlCorpusMiniData();
    this.getAndSetMlIntent();
    this.creatModalForm();
    this.setMLEntityTypes();
    this.setMLEntityList();
    this.subscribeToGetTrainedDataFormSocket();
  }
  subscribeToGetTrainedDataFormSocket(){
    SocketService.train$.pipe(takeUntil(this.destroy)).subscribe((payload:any)=>{
      if(payload && this.bot.id === payload.bot_id){
        this.corpusMiniObj.state = payload.status;
      }
    })
  }
  selectedIntentInit() {
    return {
      entities: [],
      utterances: []
    };
  }

  creatModalForm() {
    this.modalForm = this.formBuilder.group({
      'entity_type': ['', [Validators.required]],
      'entity_name': ['', [Validators.required,this.noWhitespaceValidator]],
      'entity_value': '' ,
      'entity_id': ''
    }, {validator: this.validationOfEntityModal});
  }
  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
  setMLEntityTypes() {
    let url = this.constantsService.getMLEntityTypes();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.serverService.makeGetReq({url, headerData}).subscribe((value) => {
      this.entity_types = value.entity_types;
    });
  }
  loading = false;
  setMLEntityList() {
    const url = this.constantsService.getEntityList();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    // let colorList = JSON.parse(JSON.s);
    this.loading = true;
    this.serverService.makeGetReq({url, headerData}).subscribe((value) => {
      this.loading = false;
      this.entityList = value.objects;
      this.entityList = this.entityList.map((entity) => {
        const color = this.utilityService.getRandomColor();
        return {
          ...entity,
          color: entity.color || color
        };
      });
      MlService.entityList = this.entityList;
    });
  }



  getAndSetMlIntent(page = 1) {
    const offset = (page - 1) * 10;
    const url = this.constantsService.getIntents();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.loading = true;
    this.serverService.makeGetReq({url, headerData}).subscribe((val: any) => {
      this.getAndSetMlCorpusMiniData();
      this.intentList = val.objects;
      // this.entityList = val.objects[0].entities;
      this.loading = false;
      const intent_id = this.activatedRoute.snapshot.queryParams.intent_id;

      if (intent_id) {
        this.selectedIntent = this.intentList.find(e => e.intent_id === intent_id);
      }
    });
  }
  getAndSetMlCorpusMiniData(){
    let url = this.constantsService.getMLDefaultCorpusMiniData();

    // let url = this.constantsService.getMLDefaultCorpus();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.serverService.makeGetReq({url, headerData}).subscribe((val ) => {
      this.corpusMiniObj = val;
    });
  }
  addNewIntentOrEntity(isIntent: number, template: TemplateRef<any>) {
    if (isIntent === 0) {
      this.viewChanged(this.view = 'detail');
    }
    if (isIntent === 1) {
      this.modalForm.reset();
      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    }
  }

  submitEntityForm(EntityObj) {
    let url = this.constantsService.creatMLEntity();
    let body = {
      'name': EntityObj.entity_name,
      'type': EntityObj.entity_type,
      'data': {},
      'color': ''
    };
    if (EntityObj.entity_type === 'regex') {
      body['data'] = {'pattern': EntityObj.entity_value};
    }
    if (EntityObj.entity_type === 'custom') {
      body['data'] =
        {
          'values': [
            {
              'value': EntityObj.entity_value,
              'synonyms': []
            }
          ]
        };
    }
    // this.serverService.makePostReq({headerData, url, body}).subscribe((val: any) => {
    //   this.entityList = [val.new_entity, ...this.entityList,];
    //   this.utilityService.showSuccessToaster('New entity added');
    // });
    if (EntityObj.entity_id) {
      url = this.constantsService.updateMLEntity();
      body['entity_id'] = EntityObj.entity_id;
    } else {
      url = this.constantsService.creatMLEntity();
    }
    this.entityUpdateService(url, body).subscribe();
  }

  saveAndTrainCustomEntity(body) {
    let url = this.constantsService.updateMLEntity();
    this.entityUpdateService(url, body).subscribe(val => {
      this.view = 'table';
      this.trainMLBots(`Updated ml Entity of modal id ${this.corpusMiniObj.id}`);
    },
      error => {
        this.view = 'table';
        this.trainMLBots(`Updated ml Entity of modal id ${this.corpusMiniObj.id}`);
      });
  }

  saveCustomEntity(body) {
    let url = this.constantsService.updateMLEntity();
    this.entityUpdateService(url, body).subscribe((val)=>{
      this.view = 'table';
    });
  }

  entityUpdateService(url, body) {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    return this.serverService.makePostReq({headerData, url, body})
      .pipe(map((val: any) => {
          // this.view = 'table';
          this.getAndSetMlCorpusMiniData()
          if (body.entity_id) {
            for (var i = 0; i < this.entityList.length; i++) {
              if (this.entityList[i].entity_id === body.entity_id) {
                this.entityList.splice(i, 1);
                break;
              }
            }
            this.entityList = [val.updated_entity, ...this.entityList];
            this.utilityService.showSuccessToaster(`Updated ${val.updated_entity.name} entity`);
          } else {
            this.entityList = [val.new_entity, ...this.entityList];
            this.utilityService.showSuccessToaster(`Created ${val.new_entity.name} entity`);
          }
          EventService.entityListUpdated$.emit(this.entityList);
        })
      );
  }

  editEntityClicked(data, template) {

    let x = data.data.type == 'custom' ? data.data.data.values[0].value : '';
    if (!x) {
      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
      setTimeout(() => {
        this.modalForm.patchValue(
          {
            'entity_type': data.data.type,
            'entity_name': data.data.name,
            'entity_value': data.data.type == 'regex' ?
              data.data.data.pattern :
              (data.data.type == 'custom' ? data.data.data.values[0].value : ''),
            'entity_id': data.data.entity_id
          });
      });
    } else {
      this.view = 'entity';
      this.edittingData = data.data;

    }
  }

  deleteEntityClicked(data) {
    let url = this.constantsService.deleteMLEntity();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    let body = {'entity_id': data.data.entity_id};
    this.serverService.makePostReq({headerData, url, body})
      .subscribe((val) => {
        for (var i = 0; i < this.entityList.length; i++) {
          if (this.entityList[i].entity_id === body.entity_id) {
            this.entityList.splice(i, 1);
            break;
          }
        }
        this.entityList = [...this.entityList];
        MlService.entityList = this.entityList;
        this.getAndSetMlCorpusMiniData();
        this.utilityService.showSuccessToaster('Entity deleted');
        this.view = 'table';
      });
  }

  validationOfEntityModal(group: FormGroup) {
    let type = group.get('entity_type').value;
    if (type === 'regex' || type === 'custom') {
      if(!group.get('entity_value').value){
        return {error: true}
      }

      const isWhitespace = (group.get('entity_value').value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
    }
    return null;
  }

  selectedIntentChanged(intent: IIntent) {

  }
  toDisplayValue(value: string) {
    const pieces = value.split('_');
    const j = pieces[0].charAt(0).toUpperCase();
    pieces[0] = j + pieces[0].substr(1).toLowerCase();
    return pieces.join(' ');
  }
  trainMLBotsModal(){
    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: `Continue`,
        message: 'Leave a comment about why you are training the bot so that it can be tracked in the bot’s history.',
        title: `Train knowledge base`,
        isActionButtonDanger: false,
        inputDescription: 'Comment'
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        this.trainMLBots(data);
      }
    });
  }
  trainMLBots(str){

    const url = this.constantsService.trainMlBotUrl();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    const body = {
      'bot_id': this.bot.id,
      'description': str
    };
    this.serverService.makePostReq({url, body, headerData})
      .subscribe(() => {
        this.myToasterService.showSuccessToaster('Training started');
        this.getAndSetMlCorpusMiniData()
      });
  }
  makeLiveMLBots(){

    const url = this.constantsService.makeMLCorpusLiveUrl();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    const body = {'corpus_id': this.corpusMiniObj.id};
    this.serverService.makePostReq({url, body, headerData})
      .subscribe(() => {
        this.myToasterService.showSuccessToaster('Bot made live');
        this.getAndSetMlCorpusMiniData();
      });
  }
  trainOrMakeLiveMLBotsClicked() {
    if (this.corpusMiniObj.state === 'saved') {
      this.trainMLBotsModal();
    }
    if (this.corpusMiniObj.state === 'trained') {
      this.makeLiveMLBots();
    }
  }

  saveAndTrainHandler(intent: IIntent) {
    this.saveOrUpdateIntentHandler(intent).subscribe(() => {
      this.trainMLBots(`Updated ml Intent of modal id ${this.corpusMiniObj.id}`);
    });
  }

  saveOrUpdateIntent(intent: IIntent) {
    this.saveOrUpdateIntentHandler(intent).subscribe();
  }

  saveOrUpdateIntentHandler(intent: IIntent): Observable<any> {

    console.log('sadasda');
    intent = {...intent};
    delete intent.created_at;
    delete intent.updated_at;
    let url;
    const header: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    let obs;
    if (intent.intent_id) {
      // obs = this.serverService.makePutReq({url, body: intent, headerData: header});
      url = this.constantsService.updateIntentUrl();
    } else {
      url = this.constantsService.createIntentUrl();
    }
    obs = this.serverService.makePostReq({url, body: intent, headerData: header});
    return obs.pipe(tap((res: any) => {
      this.getAndSetMlCorpusMiniData();
      this.utilityService.showSuccessToaster(`Intent ${(!intent.name) ? 'created' : 'updated'} successfully`);
      const newIntent = res.new_intent || res.updated_intent;
      this.router.navigate([`core/botdetail/mlbot/${this.bot.id}`], {
        queryParams: {
          intent_id: newIntent.intent_id,
          build: 'ml_model'
        }
      });
      this.selectedIntent = newIntent;
    }));
  }

  loadIntent(page) {
    this.getAndSetMlIntent(page);
  }

  viewChanged(view) {
    setTimeout(() => {
      this.view = view;
      let intent_id = null;

      if (view === 'detail') {
        intent_id = this.selectedIntent && this.selectedIntent.intent_id;
      } else {
        this.selectedIntent = this.selectedIntentInit();
        this.getAndSetMlIntent();
      }
      this.router.navigate([`core/botdetail/mlbot/${this.bot.id}`], {
        queryParams: {
          build: 'ml_model',
          intent_id
        },
      });
    });
  }

  deleteIntent(intent: IIntent) {
    const url = this.constantsService.deleteIntents(intent.intent_id);
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };

    // this.loading = true;
    const body = {
      'intent_id': intent.intent_id
    };
    this.serverService.makePostReq({url, headerData, body})
      .subscribe(() => {
        // this.loading = false;
        this.getAndSetMlCorpusMiniData();
        this.viewChanged('table');
      });
  }
  ngOnDestroy(): void {
    try {
      this.destroy.next(true);
      this.destroy.unsubscribe();
    } catch (e) {
      console.log(e);
    }
  }
}
