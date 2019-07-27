import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IApi, IApiCollection} from '../interfaces';
import {EHttpVerb} from '../enums';
import {EventService} from '../../event.service';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IDevState} from '../ngxs/dev.state';
import {AddApi, ResetDevState} from '../ngxs/dev.actions';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dev-wrapper',
  template: `
    <section class="dev-wrapper-section">
      <app-api-doc [showDoc]="true" [apiList]="apiList" class="api-list api-list-doc"></app-api-doc>
      <app-postman-form [apiDetails]="selectedApi" class="app-postman-form"></app-postman-form>
      <app-api-doc (deleteHistory$)="deleteHistoryHandler()" [showHistory]="true" [apiHistoryList]="appHistoryList"
                   class="api-list api-list-history"></app-api-doc>
    </section>
    <div style="position: fixed; left: 40px; bottom: 40px; cursor: pointer">
      <span (click)="location.back()" class="fa fa-external-link"></span>
    </div>
  `,
  styleUrls: ['./dev-wrapper.component.scss']
})
export class DevWrapperComponent implements OnInit {

  apiList: IApiCollection[];
  appHistoryList: IApi[];
  selectedApi: IApi = {url: 'test', method: EHttpVerb.GET, name: 'test', headers: {}, body: {}};
  @Select() dev$: Observable<IDevState>;
  constructor(private changeDetectorRef: ChangeDetectorRef, private store: Store, public location: Location) {
  }

  ngOnInit() {
    this.dev$.subscribe((devState) => {
      if (!devState) {
        return;
      }
      this.appHistoryList = devState.list;
    });
    EventService.selectedApiChanged$.subscribe((api) => {
      this.selectedApi = api;
    });
    this.apiList = [];
  }

  deleteHistoryHandler() {
    this.store.dispatch(new ResetDevState());
  }
}
