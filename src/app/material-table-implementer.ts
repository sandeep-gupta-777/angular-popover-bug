import {IConsumerItem} from '../interfaces/consumer';

/**
* @deprecated Use AbstractSmartTable. Example: BotSessionSmartTableModal
* */
export abstract class MaterialTableImplementer {
  abstract tableData;
  abstract getTableDataMetaDict():any;
  abstract initializeTableData(data:any, tableDataMetaDict:any):void;

  /*
  * transformDataForMaterialTable(data) takes in raw data, for example [{roomId:1, show:false}]
  * and convert it to a form which is consumable by Material table, for example:
  * [{ID: {
      originalKey: 'roomId',
      value: 1,
      type: 'number',
      displayValue: 'ID',
      search: true,
      searchValue: true,
    },
    ,show: {
      originalKey: 'show',
      value: false,
      type: 'boolean',
      displayValue: 'Show',
      search: true,
      searchValue: true
    }]
  *
  * */
  transformDataForMaterialTable(data: any[], tableDataMetaDict) {
    return data.map((consumerTableDataItem) => {
      let obj:any = {};
      for (let key in tableDataMetaDict) {
        obj[tableDataMetaDict[key].displayValue] = {
          ...tableDataMetaDict[key],
          originalKey:key,
          value: consumerTableDataItem[key],
          searchValue: consumerTableDataItem[key]
        };
      }

      obj.originalSessionData = consumerTableDataItem;
      return obj;
    });
  }
}
