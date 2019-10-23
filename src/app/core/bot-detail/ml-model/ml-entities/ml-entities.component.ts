import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MlEntitesSmartTable} from "./ml-entites-smart-table";
import {ConstantsService} from "../../../../constants.service";
import {ServerService} from "../../../../server.service";
import {IHeaderData} from "../../../../../interfaces/header-data";
import {IBot} from "../../../interfaces/IBot";
import {IEntitiesItem} from "../../../interfaces/mlBots";
import {DatePipe} from "@angular/common";
import {ModalConfirmComponent} from "../../../../modal-confirm/modal-confirm.component";
import {UtilityService} from "../../../../utility.service";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-ml-entities',
  templateUrl: './ml-entities.component.html',
  styleUrls: ['./ml-entities.component.scss']
})
export class MlEntitiesComponent implements OnInit {

  constructor(
    private constantsService : ConstantsService,
    private serverService : ServerService,
    private datePipe: DatePipe,
    private utilityService: UtilityService,
    private matDialog : MatDialog,
  ) { }
  currentPage = 1;
  pageSize = 10;
  isReloading = false;
  totalEntitiesLength;
  mlEntitesSmartTableObj: MlEntitesSmartTable;
  @Input() bot:IBot;
  _entitiesData:IEntitiesItem[];
  dialogRefWrapper = {ref: null};
  @Output() editEntity = new EventEmitter()
  @Input() set entitiesData( value : IEntitiesItem[]){
  debugger;
    if(value){
      this.currentPage = 1;
      this.totalEntitiesLength = value.length;
      this._entitiesData = value;
      let sliceData = this._entitiesData.slice((this.currentPage-1)*10 , (this.currentPage)*10);
      this.mlEntitesSmartTableObj = new MlEntitesSmartTable(sliceData, this.getTableDataMetaDict(), {datePipe: this.datePipe});
      this.mlEntitesSmartTableObj.initializeTableData(sliceData);
    }
  }
  ngOnInit() {


  }
  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_ML_ENTITIES_TEMPLATE ;
  }
  goToPage(val) {
    debugger;
    this.currentPage = val.page;
    if(this._entitiesData){
      let sliceData = this._entitiesData.slice((this.currentPage-1)*10 , (this.currentPage)*10);
      this.mlEntitesSmartTableObj.initializeTableData(sliceData);
    }
  }
  customActionEventsTriggeredInSessionsTable(data: { action: string, data: any, source: any }) {
    debugger
    if (data.action === 'delete') {
      let usertoDelete = data.data;
      this.utilityService.openDialog({
        dialogRefWrapper: this.dialogRefWrapper,
        classStr: 'danger-modal-header-border',
        data: {
          actionButtonText: 'Remove',
          message: `All the instances with in every utterance for this intent in which the entity is used will be removed. Do you wish to remove?`,
          title: 'Remove entity?',
          isActionButtonDanger: true
        },
        dialog: this.matDialog,
        component: ModalConfirmComponent
      }).then((data_temp) => {
        if (data_temp) {

        }
      });
      //  this.openDeletModal(enterpriseDeleteModal);
    }
    if (data.action === 'edit') {
        this.editEntity.emit(data);
    }
  }
}
