// import {Component, Input, OnInit} from '@angular/core';
// import {IBot} from "../../../interfaces/IBot";
// import {IEntitiesItem, IIntentsItem} from "../../../interfaces/mlBots";
// import {MlEntitesSmartTable} from "../ml-entities/ml-entites-smart-table";
// import {MlIntentsSmartTable} from "./ml-intents-smart-table";
// import {ConstantsService} from "../../../../constants.service";
// import {DatePipe} from "@angular/common";
//
// @Component({
//   selector: 'app-ml-intents1',
//   templateUrl: './ml-intents.component.html',
//   styleUrls: ['./ml-intents.component.scss']
// })
// export class MlIntentsComponent implements OnInit {
//
//   constructor(
//     private constantsService : ConstantsService,
//     private datePipe: DatePipe,
//   ) { }
//   currentPage = 1;
//   pageSize = 10;
//   isReloading = false;
//   totalIntentsLength = 10;
//   mlIntentsSmartTableObj: MlIntentsSmartTable;
//   @Input() bot:IBot
//   _intentData : IIntentsItem[];
//   @Input() set intentData( value : IIntentsItem[]){
//
//     if(value){
//       this.currentPage = 1;
//       this.totalIntentsLength = value.length;
//       this._intentData = value;
//       let sliceData = this._intentData.slice((this.currentPage-1)*10 , (this.currentPage)*10);
//       this.mlIntentsSmartTableObj = new MlIntentsSmartTable(sliceData, this.getTableDataMetaDict(), {datePipe: this.datePipe});
//       this.mlIntentsSmartTableObj.initializeTableData(sliceData );
//     }
//   }
//   ngOnInit() {
//   }
//   getTableDataMetaDict(): any {
//     return this.constantsService.SMART_TABLE_ML_INTENTS_TEMPLATE ;
//   }
//   goToPage(val) {
//     this.currentPage = val.page;
//     if(this._intentData){
//       let sliceData = this._intentData.slice((this.currentPage-1)*10 , (this.currentPage)*10);
//       this.mlIntentsSmartTableObj = new MlIntentsSmartTable(sliceData, this.getTableDataMetaDict(), {datePipe: this.datePipe});
//       this.mlIntentsSmartTableObj.initializeTableData(sliceData );
//     }
//   }
// }
