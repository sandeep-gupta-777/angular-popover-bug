import {EventEmitter, Injectable} from '@angular/core';
import {Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private removeCodeMirrorHistory$ = new EventEmitter();

  getRemoveCodeMirrorHistory$() {
    return this.removeCodeMirrorHistory$;
  }

  emitRemoveCodeMirrorHistoryEvent(source: string) {
    this.removeCodeMirrorHistory$.emit(source);
  }

  static progressBar$ = new EventEmitter<{loading: boolean, value: number }>();
  static disableSaveButton_codeInput$ = new EventEmitter<boolean>();

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

  constructor() {
  }
}
