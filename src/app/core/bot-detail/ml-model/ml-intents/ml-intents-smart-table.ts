
import {ICorpus} from "../../../interfaces/faqbots";
import {AbstractSmartTable} from "../../../../smart-table/smart-table";

export class MlIntentsSmartTable extends AbstractSmartTable {
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
      // "created_at": number,
      //   "entities": any[],
      //   "intent_id": string,
      //   "name": string,
      //   "reset_state": boolean,
      //   "template_key": string,
      //   "updated_at": number,
      //   "utterances": { "entities": string[], "utterance": string }[]
      const obj: any = {};
      for (const key in tableDataMetaDict) {
        if (key === 'name') {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: `<strong>${corpusTableDataItem[key]}</strong>`,
            searchValue: corpusTableDataItem[key]
          };
        } else if (key === 'utterances') {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: corpusTableDataItem[key].length,
            searchValue: corpusTableDataItem[key].length
          };
        } else if (key === 'template_key') {
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
        }
      }
      obj.originalSessionData = corpusTableDataItem;
      return obj;
    });
    return modifiedTableData;
  }


}
