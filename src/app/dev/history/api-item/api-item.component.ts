import {Component, Input, OnInit} from '@angular/core';
import {IApi, IApiCollection} from '../../interfaces';
import {EventService} from '../../../event.service';
import {DevVariableService} from '../../dev-variable.service';

@Component({
  selector: 'app-api-item',
  template: `
    <div class="api-item-section__details"
         [ngClass]="{'text-danger':api.response_code>=400}"
         (click)="apiClickHandler()">
      <span class="verb" [matTooltip]="'code: ' + (api.response_code||'waiting')">{{api.method}}</span>
      <span class="name" [ngClass]="{'text-bold':myDevVariableService.highlightedRowId === api.id}" [title]="api.url">{{api.name || api.url}}</span>
    </div>
  `,
  styleUrls: ['./api-item.component.scss']
})
export class ApiItemComponent implements OnInit {

  @Input() api: IApi;
  @Input() highlighted: boolean;
  myDevVariableService = DevVariableService;

  constructor() {
  }

  ngOnInit() {
  }

  apiClickHandler() {
    EventService.selectedApiChanged$.emit(this.api);
  }

}
