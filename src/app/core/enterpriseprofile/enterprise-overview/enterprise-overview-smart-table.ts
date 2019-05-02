import {AbstractSmartTable} from '../../../smart-table/smart-table';
import {ConstantsService} from '../../../constants.service';
import {IBot} from '../../interfaces/IBot';
import {ISessionItem} from '../../../../interfaces/sessions';


export class EnterpriseOverviewSmartTable extends AbstractSmartTable {

  private bot: IBot;
  private _tableData = [];
  private constantsService: ConstantsService;

  constructor(rawData, metaData, dependency?: { constantsService: ConstantsService, bot: IBot }) {
    super(rawData, metaData, dependency);
    if (dependency) {
      this.bot = dependency.bot;
      this.constantsService = dependency.constantsService;
    }
  }

  get tableData() {
    return this._tableData;
  }

  set tableData(val) {
    alert('ConsumerSmartTableModal: use refreshData instead');
    throw 'ConsumerSmartTableModal: use refreshData instead';
  }

  initializeTableData(data: any, tableDataMetaDict: any): void {
    if (this.rawData) {
      this._tableData = this.customTransformSessionDataForMaterialTable(this.rawData);
    }
  }

  refreshData(rawData) {
    this.rawData = rawData;
    this._tableData = this.customTransformSessionDataForMaterialTable(rawData);
  }

  private customTransformSessionDataForMaterialTable(data: ISessionItem[]) {
    let tableDataMetaDict = this.metaData;
    if (!data) {
      return null;
    }
    if (data.length == 0) {
      return null;
    }
    // @ts-ignore
    if (data.length == 1 && data[0] == {}) {
      return null;
    }
    //
    let x = data.map((consumerTableDataItem) => {
      let obj: any = {};
      //

      for (let key in tableDataMetaDict) {
        //||

        if (key == 'key') {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: `<div class="d-flex cursor-pointer">
                        <mat-icon class="material-icons color-primary" style="position: absolute;left: -20px; font-size:13px" data-value="${consumerTableDataItem[key]}">file_copy_outline</mat-icon>
                        <span>${consumerTableDataItem[key]}</span>
                     </div>`,
            searchValue: consumerTableDataItem[key]
          };
        } else if (key == 'description') {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: consumerTableDataItem[key],
            searchValue: consumerTableDataItem[key]
          };
        } else if (key == 'created_at' || key == 'expired_at') {
          if (consumerTableDataItem[key]) {
            let time = new Date(consumerTableDataItem[key]);
            obj[tableDataMetaDict[key].displayValue] = {
              ...tableDataMetaDict[key],
              originalKey: key,
              value: time.getDate() + " " + time.toLocaleString('en-us', {month: 'short'}) + " " + time.getFullYear().toString().substr(-2),
              searchValue: time.getDate() + " " + time.toLocaleString('en-us', {month: 'short'}) + " " + time.getFullYear().toString().substr(-2)
            };
          } else {
            obj[tableDataMetaDict[key].displayValue] = {
              ...tableDataMetaDict[key],
              originalKey: key,
              value: "No Data",
              searchValue: "No Data"
            };
          }

        } else if (key == 'actions') {

          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: [{show: true, name: 'expire', class: 'fa fa-minus-circle color-danger'}],
            searchValue: consumerTableDataItem[key]
          };
        } else {

          if (consumerTableDataItem[key]) {
            obj[tableDataMetaDict[key].displayValue] = {
              ...tableDataMetaDict[key],
              originalKey: key,
              value: consumerTableDataItem[key],
              searchValue: consumerTableDataItem[key]
            };
          } else {
            obj[tableDataMetaDict[key].displayValue] = {
              ...tableDataMetaDict[key],
              originalKey: key,
              value: "No Data",
              searchValue: "No Data"
            };
          }


        }


      }
      obj.originalSessionData = consumerTableDataItem;
      return obj;
    });
    //
    return x;
  }

}

