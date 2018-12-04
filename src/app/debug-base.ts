import {isDevMode, OnDestroy, OnInit} from '@angular/core';
import {Subscriber} from 'rxjs';

export class DebugBase implements OnDestroy {

  me: string;
  constructor() {
    if (isDevMode()) {
      this.me = this.constructor.name;
    }

  }

  log() {
    if (isDevMode()) {
      console.log(this);
    }
  }

  destroy(componentObj) {

    for (const key in componentObj) {
      try {
        if (componentObj[key] instanceof Subscriber) {
          componentObj[key].unsubscribe();
          console.log('unsub done');
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  ngOnDestroy() {
    this.destroy(this);
  }

}
