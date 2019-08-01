import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {LoadJsService} from './core/load-js.service';

@Injectable()
export class ScriptsLoadResolver implements Resolve<Observable<string>> {
  constructor() {
  }

  resolve() {
    return fromPromise(LoadJsService.load());
  }
}
