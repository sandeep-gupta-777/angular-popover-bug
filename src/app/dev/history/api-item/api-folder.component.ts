import {Component, Input, OnInit} from '@angular/core';
import {IApi, IApiCollection} from '../../interfaces';

@Component({
  selector: 'app-api-folder',
  template: `
    <section class="main">
      <div class="api-item-section">
        <div class="api-item-section__folder" (click)="showApi=!showApi">
          <span class="fa fa-folder-o"></span>
          <span class="name">{{apiCollection.folder}}</span>
        </div>
        <ng-container *ngIf="showApi">
          <div *ngFor="let api of apiCollection.apiList">
            <app-api-item [api]="api" ></app-api-item>
          </div>
        </ng-container>
      </div>
    </section>

  `,
  styleUrls: ['./api-folder.component.scss']
})
export class ApiFolderComponent implements OnInit {

  @Input() apiCollection: IApiCollection;
  showApi = false;

  constructor() {
  }

  ngOnInit() {
  }

}
