import {EventEmitter, Injectable} from '@angular/core';
import {Subscriber} from 'rxjs';
import {IBot} from './core/interfaces/IBot';
import {IApi} from './dev/interfaces';
import {ICorpus} from './core/interfaces/faqbots';
import {IEntitiesItem} from './core/interfaces/mlBots';

@Injectable()
export class EventService {

  constructor() {
  }

  public static codeValidationErrorOnUpdate$ = new EventEmitter();

  static logout$ = new EventEmitter();
  static newEntityCreated$ = new EventEmitter();

  static progressBar$ = new EventEmitter<{ loading: boolean, value: number }>();
  static disableSaveButton_codeInput$ = new EventEmitter<boolean>();
  static toggleAllPipeLineModules = new EventEmitter<boolean>();
  static botUpdatedInServer$ = new EventEmitter<IBot>();
  static kbRefresh$ = new EventEmitter<IBot>();
  static startANewChat$ = new EventEmitter<{ bot: IBot, consumerDetails: any }>();
  static entityListUpdated$ = new EventEmitter<{entityList: IEntitiesItem[], new_entity: IEntitiesItem}>();
  static appEntityMarkingUpdate$ = new EventEmitter();

  static startANewChat(data: { bot: IBot, consumerDetails: any }) {
    EventService.startANewChat$.emit(data);
  }

  static reportFormIsValid = new EventEmitter<boolean>();
  static faqHeaderSearchBarReloadData = new EventEmitter<ICorpus>();
  static selectedApiChanged$ = new EventEmitter<IApi>();
  static knowledgeBaseData$ = new EventEmitter();

  static updateBotinit$ = new EventEmitter();
  static createConceptFullScreen$ = new EventEmitter();
  static botDataDirty$ = new EventEmitter<{ [index: string]: boolean }>();

  private removeCodeMirrorHistory$ = new EventEmitter();


  rerenderHandsonTable$ = new EventEmitter();
  reloadSessionTable$ = new EventEmitter();

  static unsubscribeInComponent(component) {
    for (const key of Object.keys(component)) {
      try {
        if (component[key] instanceof Subscriber) {
          component[key].unsubscribe();
          console.log('unsub done');
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  getRemoveCodeMirrorHistory$() {
    return this.removeCodeMirrorHistory$;
  }

  emitRemoveCodeMirrorHistoryEvent(source: string) {
    this.removeCodeMirrorHistory$.emit(source);
  }
}
