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
<<<<<<< HEAD

=======
      
>>>>>>> 2e73ee006c78016ff42c899982a3e1273bbf2c23
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
