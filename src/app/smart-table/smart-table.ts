


export abstract class AbstractSmartTable {

  abstract tableData;
  abstract initializeTableData(data: any, tableDataMetaDict: any): void;
  abstract refreshData(rawData: any): void;

  constructor(protected rawData, protected metaData, protected dependency) {}


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
      const obj: any = {};
      for (const key in tableDataMetaDict) {
        obj[tableDataMetaDict[key].displayValue] = {
          ...tableDataMetaDict[key],
          originalKey: key,
          value: consumerTableDataItem[key],
          searchValue: consumerTableDataItem[key]
        };
      }

      obj.originalSessionData = consumerTableDataItem;
      return obj;
    });
  }
}
