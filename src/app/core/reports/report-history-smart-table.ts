import {AbstractSmartTable} from '../../smart-table/smart-table';
import {ConstantsService} from '../../constants.service';
import {IBot} from '../interfaces/IBot';
import {ISessionItem} from '../../../interfaces/sessions';


export class ReportHistorySmartTable extends AbstractSmartTable {

  private bot: IBot;
  private _tableData = [];
  private constantsService: ConstantsService;

  constructor(rawData, metaData, dependency?: { constantsService: ConstantsService, bot: IBot }) {
    super(rawData, metaData, dependency);
    if(dependency){
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

  private customTransformSessionDataForMaterialTable(session: ISessionItem[]) {
    let data =  this.transformDataForMaterialTable(session, this.metaData);

    // this.tableData_history = this.transformDataForMaterialTable(data, this.getTableDataMetaDict_reportHistory());
    return data.map((sessionsDataForTableItem) => {
      let additonalColumns: any = {};
      /*actions*/
      additonalColumns['Actions'] = sessionsDataForTableItem['Actions'];
      additonalColumns['Actions'].value = [];
      additonalColumns['Actions'].value.push({show: true,
        name: 'download',
        iconName: 'save_alt'
      });
      return {...sessionsDataForTableItem, ...additonalColumns};
    });
  }

}