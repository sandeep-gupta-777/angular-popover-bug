import {AbstractSmartTable} from 'src/app/smart-table/smart-table';
import {ICorpus} from "../../../interfaces/faqbots";

export class MlEntitesSmartTable extends AbstractSmartTable {
  constructor(rawData, metaData, protected dependency) {
    super(rawData, metaData, dependency);

  }

  tableData = [];

  initializeTableData(corpusList: ICorpus[]): void {
    if (this.rawData) {
      this.rawData = corpusList;
      this.tableData = this.customTransformArticleHistoryDataForMaterialTable(this.rawData);

    }
  }

  refreshData(corpusList: ICorpus[]) {
    this.rawData = corpusList;
    this.tableData = this.customTransformArticleHistoryDataForMaterialTable(this.rawData);
  }

  customTransformArticleHistoryDataForMaterialTable(data: any[]) {
    const tableDataMetaDict = this.metaData;
    const modifiedTableData = data.map((corpusTableDataItem, index) => {
      // "color": string,
      //   "created_at": number,
      //   "data": { "values": { "synonyms": string[], "value": string }[] },
      // "intent_id": string,
      //   "name": string,
      //   "system_entity": boolean,
      //   "type": string,
      //   "updated_at": number
      const obj: any = {};
      for (const key in tableDataMetaDict) {
        if (key === 'name') {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: `<strong>${corpusTableDataItem[key]}</strong>`,
            searchValue: corpusTableDataItem[key]
          };
        } else if (key === 'type') {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: corpusTableDataItem[key],
            searchValue: corpusTableDataItem[key]
          };
        }
        else if (key === 'updated_at') {
          const date = new Date(corpusTableDataItem[key]);
          //+ ' by ' + corpusTableDataItem['updated_by'],
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: this.dependency.datePipe.transform(date, 'd MMM') + '\' ' + this.dependency.datePipe.transform(date, 'yy') + ', ' + this.dependency.datePipe.transform(date, 'shortTime'),
            searchValue: this.dependency.datePipe.transform(date, 'date') + corpusTableDataItem['updated_by']
          };
        } else if (key === 'actions') {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            skipXssValidation: true,
            value: [{
              show: true,
              name: 'edit',
              iconName: 'build',
              class: 'build'
            },{
              show: true,
              name: 'delete',
              iconName: 'delete',
              class: 'delete'
            }],
            searchValue: corpusTableDataItem[key]
          };
        }

      }
      obj.originalSessionData = corpusTableDataItem;
      return obj;
    });
    return modifiedTableData;
  }


}
