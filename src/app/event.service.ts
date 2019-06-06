import {EventEmitter, Injectable} from '@angular/core';
import {Subscriber} from 'rxjs';
import {IBot} from './core/interfaces/IBot';
import {IApi} from "./dev/interfaces";

@Injectable()
export class EventService {

  private removeCodeMirrorHistory$ = new EventEmitter();
  public static codeValidationErrorOnUpdate$ = new EventEmitter();

  getRemoveCodeMirrorHistory$() {
    return this.removeCodeMirrorHistory$;
  }

  emitRemoveCodeMirrorHistoryEvent(source: string) {
    this.removeCodeMirrorHistory$.emit(source);
  }

  static logout$ = new EventEmitter();

  static progressBar$ = new EventEmitter<{loading: boolean, value: number }>();
  static disableSaveButton_codeInput$ = new EventEmitter<boolean>();
  static toggleAllPipeLineModules = new EventEmitter<boolean>();
  static botUpdatedInServer$ = new EventEmitter<IBot>();
  static kbRefresh$ = new EventEmitter<IBot>();
  static startANewChat$ = new EventEmitter<{bot:IBot, consumerDetails:any}>();
  static reportFormIsValid = new EventEmitter<Boolean>();
  static unsubscribeInComponent(component){
    for (const key in component) {
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
  static selectedApiChanged$ = new EventEmitter<IApi>();



  rerenderHandsonTable$ = new EventEmitter();
  static knowledgeBaseData$ = new EventEmitter();
  reloadSessionTable$ = new EventEmitter();

  constructor() {
  }

  static updateBotinit$ = new EventEmitter();
  static createConceptFullScreen$ = new EventEmitter();
  static botDataDirty$ = new EventEmitter<{[index:string]:boolean}>();
}
