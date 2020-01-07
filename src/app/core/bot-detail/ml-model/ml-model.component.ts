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
import {SocketService} from '../../../socket.service';
import {ModalConfirmComponent} from '../../../modal-confirm/modal-confirm.component';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';
import {EAllActions} from '../../../typings/enum';
import {MlReplyService} from '../ml-reply/ml-reply.service';
import {FormsService} from '../../../forms.service';

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
    private activatedRoute: ActivatedRoute,
    private mlReplyService: MlReplyService
  ) {
  }

  @Input() bot: IBot;
  view = 'table';
  intentList: IIntent[] = [];
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
  myESplashScreens = ESplashScreens;
  myEAllActions = EAllActions;
  responceState: string;

  ngOnInit() {
    this.view = (!!this.activatedRoute.snapshot.queryParams['intent_id']) ? 'detail' : 'table';
    this.getAndSetMlCorpusMiniData();
    this.getAndSetMlIntent();
    this.creatModalForm();
    this.setMLEntityTypes();
    this.setMLEntityList();
    this.subscribeToGetTrainedDataFormSocket();
    this.getResponceState();
  }

  subscribeToGetTrainedDataFormSocket() {
    SocketService.train$.pipe(takeUntil(this.destroy)).subscribe((payload: any) => {
      if (payload && this.bot.id === payload.bot_id) {
        this.corpusMiniObj.state = payload.status;
      }
    });
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
      'entity_name': ['', [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator(), this.noWhitespaceValidator]],
      'entity_value': '',
      'entity_id': ''
    }, {validator: this.validationOfEntityModal});
  }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {'whitespace': true};
  }

  setMLEntityTypes() {
    let url = this.constantsService.getMLEntityTypes();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    this.serverService.makeGetReq({url, headerData}).subscribe((value) => {
      this.entity_types = value.entity_types;
    });
  }

  loading_entities = false;
  loading_intents = false;

  setMLEntityList() {
    const url = this.constantsService.getEntityList();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    // let colorList = JSON.parse(JSON.s);
    this.loading_entities = true;
    this.serverService.makeGetReq({url, headerData}).subscribe((value) => {
      this.loading_entities = false;
      this.entityList = value.objects;
      this.entityList.sort((a, b) => {
        if (a.updated_at > b.updated_at) {
          return -1;
        } else if (a.updated_at < b.updated_at) {
          return 1;
        } else {
          return 0;
        }
      });
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
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    this.loading_intents = true;
    this.serverService.makeGetReq({url, headerData}).subscribe((val: any) => {
      this.getAndSetMlCorpusMiniData();
      this.intentList = val.objects;
      this.intentList.sort((a, b) => {
        if (a.updated_at > b.updated_at) {
          return -1;
        } else if (a.updated_at < b.updated_at) {
          return 1;
        } else {
          return 0;
        }
      });
      // this.entityList = val.objects[0].entities;
      this.loading_intents = false;
      const intent_id = this.activatedRoute.snapshot.queryParams.intent_id;

      if (intent_id) {
        this.selectedIntent = this.intentList.find(e => e.intent_id === intent_id);
      }
    });
  }

  getAndSetMlCorpusMiniData() {
    let url = this.constantsService.getMLDefaultCorpusMiniData();

    // let url = this.constantsService.getMLDefaultCorpus();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    this.serverService.makeGetReq({url, headerData}).subscribe((val) => {
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
      'color': this.utilityService.getRandomColor()
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
    this.entityUpdateService(url, body).subscribe((val) => {
      this.view = 'table';
    });
  }

  entityUpdateService(url, body) {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    return this.serverService.makePostReq({headerData, url, body})
      .pipe(map((val: any) => {
          // this.view = 'table';
          this.getAndSetMlCorpusMiniData();
          if (body.entity_id) {
            for (var i = 0; i < this.entityList.length; i++) {
              if (this.entityList[i].entity_id === body.entity_id) {
                this.entityList.splice(i, 1);
                break;
              }
            }
            this.entityList = [val.updated_entity, ...this.entityList];
            this.utilityService.showSuccessToaster(`Entity updated successfully`);
          } else {
            this.entityList = [val.new_entity, ...this.entityList];
            this.utilityService.showSuccessToaster(`Entity created successfully`);
          }
          EventService.entityListUpdated$.emit({entityList: this.entityList, new_entity: val.new_entity});
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
      'bot-access-token': ServerService.getBotTokenById(this.bot)
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
      if (!group.get('entity_value').value) {
        return {error: true};
      }

      const isWhitespace = (group.get('entity_value').value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : {'whitespace': true};
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

  trainMLBotsModal() {
    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: `Continue`,
        message: 'Leave a comment about why you are training the bot so that it can be tracked in the bot’s history.',
        title: `Train knowledge base`,
        isActionButtonDanger: false,
        //inputDescription: 'Comment',
        formGroup: this.formBuilder.group({
          inputData: ['', [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({
            min: 1,
            max: 2000
          })]]
        })
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        this.trainMLBots(data);
      }
    });
  }

  trainMLBots(str) {

    const url = this.constantsService.trainMlBotUrl();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    const body = {
      'bot_id': this.bot.id,
      'description': str
    };
    this.serverService.makePostReq({url, body, headerData})
      .subscribe(() => {
        this.myToasterService.showSuccessToaster('Training started');
        this.getAndSetMlCorpusMiniData();
      });
  }

  getResponceState() {
    let url = this.constantsService.getMLResponceStateMiniData();

    // let url = this.constantsService.getMLDefaultCorpus();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    this.serverService.makeGetReq({url, headerData}).subscribe((val) => {
      this.responceState = val.state;
    });
  }

  // make live stuff
  makeBothCorpusLive() {
    this.makeLiveCorpus();
    this.makeResponseLive();
  }

  makeResponseLive() {
    this.mlReplyService.makeResponseLive(this.bot, {comment: 'test'})
      .subscribe((test) => {
        this.dialogRefWrapper.ref.close();
      });
  }

  openMakeLiveCorpusModal(template) {
    if (this.responceState === 'saved') {
      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    } else {
      this.makeLiveCorpus();
    }
  }

  makeLiveCorpus() {

    const url = this.constantsService.makeMLCorpusLiveUrl();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    const body = {'corpus_id': this.corpusMiniObj.id};
    this.serverService.makePostReq({url, body, headerData})
      .subscribe(() => {
        this.myToasterService.showSuccessToaster('Made live successfully');
        this.getAndSetMlCorpusMiniData();
        this.dialogRefWrapper.ref.close();
      });
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

    intent = {...intent};
    delete intent.created_at;
    delete intent.updated_at;
    let url;
    const header: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
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

      this.utilityService.showSuccessToaster(`Intent ${(!intent.intent_id) ? 'created' : 'updated'} successfully`);
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

  async deleteIntent(intent: IIntent) {
    const data = await this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: 'Delete',
        message: 'This action cannot be undone. Are you sure you wish to delete?',
        title: `Delete ${intent.name}?`,
        isActionButtonDanger: true,
        inputDescription: null,
        closeButtonText: 'Keep intent'
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    });

    if (!data) {
      return;
    }

    const url = this.constantsService.deleteIntents(intent.intent_id);
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };

    // this.loading = true;
    const body = {
      'intent_id': intent.intent_id
    };
    this.serverService.makePostReq({url, headerData, body})
      .subscribe(() => {
        // this.loading = false;
        this.utilityService.showSuccessToaster(`Intent ${intent.name} deleted`);
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
