import {ISessionItem} from '../../../../interfaces/sessions';
import {IBot} from '../../interfaces/IBot';
import {ConstantsService} from '../../../constants.service';
import {AbstractSmartTable} from '../../../smart-table/smart-table';

export class ConsumerSmartTableModal extends AbstractSmartTable {

  private bot: IBot;
  private _tableData = [];
  private constantsService: ConstantsService;

  constructor(rawData, metaData, dependency: { constantsService: ConstantsService, bot: IBot }) {
    super(rawData, metaData, dependency);
    this.bot = dependency.bot;
    this.constantsService = dependency.constantsService;
  }

  get tableData() {
    return this._tableData;
  }

  set tableData(val) {

    //alert('ConsumerSmartTableModal: use refreshData instead');
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
    const tableData = this.transformDataForMaterialTable(session, this.metaData);
    tableData.forEach((tableRow) => {
      const additonalColumns: any = {
        Actions: tableRow['Actions'],
      };

      additonalColumns['Actions'].value = additonalColumns['Actions'].value || [];
      console.log('131312312', tableRow['originalSessionData']);
      if (tableRow['originalSessionData']['data_encrypted']) {
        // additonalColumns['Actions'].value.push({show: true, name: 'decrypt', class: 'fa fa-lock'});

        additonalColumns['Actions'].value.push({
          show: true,
          name: 'decrypt',
          iconName: 'lock',
          class: 'lock'
        });
      }

      return {...tableRow, ...additonalColumns};
    });
    return tableData;
  }

}
