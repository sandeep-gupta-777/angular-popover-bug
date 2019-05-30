import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IApi, IApiCollection} from "../interfaces";

@Component({
  selector: 'app-api-doc',
  template: `
    <section class="main" [ngClass]="{'border-right':showDoc, 'border-left':showHistory}">
      <header class="theme-section__header" style="margin-bottom: 12px; text-align: center; position: relative">
        <h4>{{!showHistory?'Collection':'History'}}</h4>
        <i (click)="deleteHistoryHandler()" *ngIf="showHistory" class="fa fa-trash" style="position: absolute;right: 10px;top: 0;transform: translateY(26%);"></i>
      </header>
      <mat-form-field class="api-search-input" style="padding-left: 8px">
        <input matInput placeholder="Search" #search>
        <button mat-button matSuffix>
          <mat-icon>search</mat-icon>
        </button> 
      </mat-form-field>
      <ng-container *ngIf="showDoc">
        <div *ngFor="let api of (apiList|apiFilter: search.value)">
          <app-api-folder [apiCollection]="api"></app-api-folder >
        </div>
      </ng-container>
      <ng-container *ngIf="showHistory">
        <div *ngFor="let api of (apiHistoryList|apiListFilter: search.value|reverseArr); let i = index">
          <app-api-item [api]="api"></app-api-item>
        </div>
      </ng-container>
    </section>
  `,
  styleUrls: ['./api-doc.component.scss']
})
export class ApiDocComponent implements OnInit {

  @Input() apiList: IApiCollection[];
  @Input() apiHistoryList: IApi[];
  @Input() showDoc;
  @Input() showHistory;
  @Output() deleteHistory$ = new EventEmitter();
  highlightedIndex = 0;
  constructor() { }

  ngOnInit() {

  }
  deleteHistoryHandler(){
    this.deleteHistory$.emit();
  }
}
