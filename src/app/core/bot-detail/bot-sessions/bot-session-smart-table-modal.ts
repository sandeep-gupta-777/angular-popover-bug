import {ISessionItem} from '../../../../interfaces/sessions';
import {IBot} from '../../interfaces/IBot';
import {ConstantsService} from '../../../constants.service';
import {AbstractSmartTable} from '../../../smart-table/smart-table';

export class BotSessionSmartTableModal extends AbstractSmartTable {

  private bot: IBot;
  private _tableData = [];
  private constantsService: ConstantsService;

  constructor(rawData, metaData, dependency: { constantsService: ConstantsService, bot: IBot }) {
    super(rawData, metaData, dependency);
    this.bot = dependency.bot;
    this.constantsService = dependency.constantsService;
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

      /*adding two additional columns 1) actions and 2)channels*/
      const additonalColumns: any = {
        'Metadata': sessionsDataForTableItem['Metadata'],
        Channels: sessionsDataForTableItem['Channels'],
      };

      additonalColumns['Metadata'].value = additonalColumns['Metadata'].value || [];
      additonalColumns['Channels'].value = additonalColumns['Channels'].value || [];
      /*actions*/
      // additonalColumns['Metadata'].value.push({show: true, name: 'download', class: 'fa fa-download'});

      const originalSessionData = sessionsDataForTableItem['originalSessionData'];
      /*TODO: also check if the user has access to decrypt api*/
      if (originalSessionData['sendtoagent']) {
        additonalColumns['Metadata'].value.push({
          show: true,
          name: 'Sent to agent',
          iconName: 'headset',
          class: 'headset-mic'
        });
      }
      if (originalSessionData['error']) {
        additonalColumns['Metadata'].value.push({
          show: true,
          name: 'Error',
          iconName: 'error_outline',
          class: 'error_outline'
        });
      }
      if (this.bot.advanced_data_protection && !originalSessionData['data_encrypted']) {
        additonalColumns['Metadata'].value.push({
          show: true,
          name: 'Decrypted',
          iconName: 'lock_open',
          class: 'lock_open'
        });
      }
      const negativeFeedbackCount: number = originalSessionData['feedback_count'] && originalSessionData['feedback_count']['downvote'];
      if (negativeFeedbackCount && negativeFeedbackCount > 0) {
        const name = `${negativeFeedbackCount} downvote${negativeFeedbackCount > 1 ? 's' : ''}`;
        additonalColumns['Metadata'].value.push({
          show: true,
          name: name,
          iconName: 'thumb_down',
          class: 'thumb_down'
        });
      }

      const is_test: number = originalSessionData['is_test'];
      if (is_test) {
        additonalColumns['Metadata'].value.push({
          show: true,
          name: 'Test session',
          iconName: 'build',
          class: 'build'
        });
      }

      // additonalColumns['Metadata'].value = `<mat-icon>search</mat-icon>`;//TODO: in future do this but via dynamic components

      /*channels*/
      additonalColumns['Channels'].searchValue = sessionsDataForTableItem['Channels'].value.join();
      additonalColumns['Channels'].value = (sessionsDataForTableItem.Channels['value'].map((channelName) => {
        return {
          name: channelName,
          src: this.dependency.constantsService.getIntegrationIconForChannelName(channelName).icon// 'https://s3-eu-west-1.amazonaws.com/imibot-dev/integrations/web.png'
        };
      }));
      return {...sessionsDataForTableItem, ...additonalColumns};
    });


    return sessionsDataForTable;
  }

}
