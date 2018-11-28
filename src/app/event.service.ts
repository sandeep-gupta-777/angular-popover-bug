import {EventEmitter, Injectable} from '@angular/core';

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

  rerenderHandsonTable$ = new EventEmitter();

  constructor() {
  }
}
