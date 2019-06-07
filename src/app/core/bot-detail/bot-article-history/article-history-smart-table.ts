import { AbstractSmartTable } from "src/app/smart-table/smart-table";

export class ArticleHistorySmartTable extends AbstractSmartTable{
    tableData: any;
    constructor(rawData, metaData, protected dependency) {
        super(rawData, metaData, dependency);
        
      }

    _tableData = [];    
    initializeTableData(data: any, tableDataMetaDict: any): void {
        if (this.rawData) {
            this._tableData = this.customTransformArticleHistoryDataForMaterialTable(this.rawData);
          }
    }
    refreshData(rawData: any): void {
        throw new Error("Method not implemented.");
    }


}