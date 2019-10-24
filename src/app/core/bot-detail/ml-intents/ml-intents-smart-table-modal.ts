import {ISessionItem} from '../../../../interfaces/sessions';
import {IBot} from '../../interfaces/IBot';
import {ConstantsService} from '../../../constants.service';
import {AbstractSmartTable} from '../../../smart-table/smart-table';

export class MlIntentsSmartTableModal extends AbstractSmartTable {

  private bot: IBot;
  private _tableData = [];
  private constantsService: ConstantsService;

  constructor(rawData, metaData, dependency: { constantsService: ConstantsService, bot: IBot }) {
    super(rawData, metaData, dependency);
  }

  /*
  * TODO: this is a hack
  * Ideally, we should have getTableData() instead of get tableData().
  * Problem with getTableData(): since getTableData() is a function Change detection will call it in each CD cycle
  * Problem get tableData(): We can't restrict user to not set tableData directly.
  *   As of now we are alerting the user and throwing error
  * Final solution to be implemented in future: On push CD
  * */
  get tableData() {
    return this._tableData;
  }

  set tableData(val) {

    //alert('BotSessionSmartTableModal: use refreshData instead');
    throw 'BotSessionSmartTableModal: use refreshData instead';

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
    let sessionsDataForTable = this.transformDataForMaterialTable(session, this.metaData);
    sessionsDataForTable = sessionsDataForTable.map((sessionsDataForTableItem) => {
      sessionsDataForTableItem.Utterances.value = sessionsDataForTableItem.originalSessionData.utterances.length;
      return sessionsDataForTableItem;
    });


    return sessionsDataForTable;
  }

}
