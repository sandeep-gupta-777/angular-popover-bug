import {Injectable} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Injectable()
export class BreakpointService {

  constructor(private breakpointObserver: BreakpointObserver){}
  /*Good source: https://stackblitz.com/edit/cdk-breakpoint-observer-so?file=app%2Fhome%2Fhome.component.ts*/
  get isMobile() {
    return this.breakpointObserver.isMatched('(max-width: 767px)');
  }
}