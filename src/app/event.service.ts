import {EventEmitter, Injectable} from '@angular/core';
import {Subscriber} from 'rxjs';
import {IBot} from './core/interfaces/IBot';
import {ESideBarTab} from './core/bot-detail/code-based-bot-detail/code-based-bot-detail.component';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private removeCodeMirrorHistory$ = new EventEmitter();
  public static codeValidationErrorOnUpdate$ = new EventEmitter();

  getRemoveCodeMirrorHistory$() {
    return this.removeCodeMirrorHistory$;
  }

  emitRemoveCodeMirrorHistoryEvent(source: string) {
    this.removeCodeMirrorHistory$.emit(source);
  }

  static progressBar$ = new EventEmitter<{loading: boolean, value: number }>();
  static disableSaveButton_codeInput$ = new EventEmitter<boolean>();
  static toggleAllPipeLineModules = new EventEmitter<boolean>();
  static botUpdatedInServer$ = new EventEmitter<IBot>();
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



  rerenderHandsonTable$ = new EventEmitter();
  reloadSessionTable$ = new EventEmitter();

  constructor() {
  }

  static updateBotinit$ = new EventEmitter();
  static createConceptFullScreen$ = new EventEmitter();
  static botDataDirty$ = new EventEmitter<{[index:string]:boolean}>();
}
