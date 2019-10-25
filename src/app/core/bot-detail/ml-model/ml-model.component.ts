import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {IHeaderData} from '../../../../interfaces/header-data';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
import {IEntitiesItem, IIntentsItem, IMLCorpusResult} from '../../interfaces/mlBots';
import {is} from 'tslint-sonarts/lib/utils/nodes';
import {UtilityService} from '../../../utility.service';
import {MatDialog} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {intentMock} from '../ml-intents/intent-mock';
import {IIntent} from '../../../typings/intents';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {MyToasterService} from '../../../my-toaster.service';
import {tap} from 'rxjs/operators';
import {subscribeOn} from "rxjs/operators";

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
  selectedTabIndex: number = 0;
  dialogRefWrapper = {ref: null};
  entity_types: any[];
  modalForm: FormGroup;
  selectedIntent: IIntent = {};
  EditMode: string = "";
  edittingData: IEntitiesItem;

  ngOnInit() {
    this.view = (!!this.activatedRoute.snapshot.queryParams['intent_id']) ? 'detail' : 'table';
    this.getAndSetMlCorpus();
    this.creatModalForm();
    this.setMLEntityTypes();
    this.setMLEntityList();

  }

  creatModalForm() {
    this.modalForm = this.formBuilder.group({
      'entity_type': ["", Validators.required],
      'entity_name': ["", Validators.required],
      'entity_value': "",
      'entity_id': ""
    }, {validator: this.validationOfEntityModal})
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

  setMLEntityList() {
    const url = this.constantsService.getEntityList();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.serverService.makeGetReq({url, headerData}).subscribe((value) => {
      this.entityList = value.objects;
      this.entityList = this.entityList.map((entity) => {
        const color = ('#' + (Math.random() * 0xFFFFFF << 0).toString(16));
      debugger;
        return {
          ...entity,
          color
        };
      });
    });
  }

  loading = false;

  getAndSetMlCorpus() {
    // let url = this.constantsService.getMLCorpus();
    const url = this.constantsService.getIntents();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.loading = true;
    this.serverService.makeGetReq({url, headerData}).subscribe((val: any) => {
      this.intentList = val.objects;
      // this.entityList = val.objects[0].entities;
      this.loading = false;
      const intent_id = this.activatedRoute.snapshot.queryParams.intent_id;

      if (intent_id) {
        this.selectedIntent = this.intentList.find(e => e.intent_id === intent_id);
      }
    });
  }

  addNewIntentOrEntity(isIntent, template: TemplateRef<any>) {
    if (isIntent === 0) {
      this.viewChanged(this.view = 'detail');
    }
    if (isIntent === 1) {
      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    }
  }

  submitEntityForm(EntityObj) {
    let url = this.constantsService.creatMLEntity();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
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
              'synonyms': [EntityObj.entity_value]
            }
          ]
        };
    }

    this.serverService.makePostReq({headerData, url, body}).subscribe((val: any) => {
      this.entityList = [val.new_entity, ...this.entityList,];
      this.utilityService.showSuccessToaster('New entity added');
    });
    if (EntityObj.entity_id) {
      url = this.constantsService.updateMLEntity();
      body['entity_id'] = EntityObj.entity_id;
    } else {
      url = this.constantsService.creatMLEntity();
    }
    this.serverService.makePostReq({headerData, url, body}).subscribe((val: any) => {
      if (EntityObj.entity_id) {
        for (var i = 0; i < this.entityList.length; i++) {
          if (this.entityList[i].entity_id === EntityObj.entity_id) {
            this.entityList.splice(i, 1);
            break;
          }
        }
        this.entityList = [val.updated_entity, ...this.entityList];
        this.utilityService.showSuccessToaster("Entity updated");
      } else {
        this.entityList = [val.new_entity, ...this.entityList]
        this.utilityService.showSuccessToaster("New entity added");
      }

    })
  }

  editEntityClicked(data, template) {
  debugger;
    let x = data.data.type == 'custom' ? data.data.data.values[0].value : "";
    if (!x) {
      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
      setTimeout(() => {
        this.modalForm.patchValue(
          {
            'entity_type': data.data.type,
            'entity_name': data.data.name,
            'entity_value': data.data.type == 'regex' ?
              data.data.data.pattern :
              (data.data.type == 'custom' ? data.data.data.values[0].value : ""),
            'entity_id': data.data.entity_id
          })
      });
    } else {
      this.EditMode = 'entity';
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
        this.utilityService.showSuccessToaster("Entity deleted");
      })
  }
  validationOfEntityModal(group: FormGroup){
    let type =  group.get('entity_type').value;
    if(type === 'regex' || type === 'custom') {
      return group.get('entity_value').value ? null : {error : true} ;
    }
    return null;
  }

  selectedIntentChanged(intent: IIntent) {

  }

  saveAndTrainHandler(intent: IIntent) {
    this.saveOrUpdateIntentHandler(intent).subscribe(() => {
      const url = this.constantsService.trainMlBotUrl();
      const headerData: IHeaderData = {
        'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    }
      const body = {'bot_id': this.bot.id};
      this.serverService.makePostReq({url, body, headerData})
        .subscribe(() => {
          this.myToasterService.showSuccessToaster('training started');
        });
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

  viewChanged(view) {
    setTimeout(() => {
      this.view = view;
      let intent_id = null;

      if (view === 'detail') {
        intent_id = this.selectedIntent.intent_id;
      } else {
        this.selectedIntent = null;
        this.getAndSetMlCorpus();
      }
      this.router.navigate([`core/botdetail/mlbot/${this.bot.id}`], {
        queryParams: {
          build: 'ml_model',
          intent_id
        },
      });
    });
  }
}
