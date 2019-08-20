import {AbstractSmartTable} from '../../../smart-table/smart-table';
import {ConstantsService} from '../../../constants.service';
import {IBot} from '../../interfaces/IBot';
import {IEnterpriseUser} from '../../interfaces/enterprise-users';


export class EnterpriseUserSmartTable extends AbstractSmartTable {
  private bot: IBot;
  private _tableData = [];
  private constantsService: ConstantsService;
  private roleMap;

  initializeTableData(data: any, tableDataMetaDict: any): void {
    if (this.rawData) {
      this._tableData = this.customTransformSessionDataForMaterialTable(this.rawData);
    }
  }

  constructor(rawData, metaData, protected dependency: { roleMap: any, enterpriseId: number }) {
    super(rawData, metaData, dependency);
    if (dependency) {
      this.roleMap = dependency.roleMap;
    }
  }

  get tableData() {
    return this._tableData;
  }

  set tableData(val) {
    alert('ConsumerSmartTableModal: use refreshData instead');
    throw new Error('ConsumerSmartTableModal: use refreshData instead');
  }

  updateDependency(dependency) {
    this.dependency = {...this.dependency, ...dependency};
    this.roleMap = this.dependency.roleMap;
    this.render();
  }

  refreshData(eterpriseUserData: IEnterpriseUser[]) {
    this.rawData = eterpriseUserData;
    this._tableData = this.customTransformSessionDataForMaterialTable(eterpriseUserData);
  }

  render() {
    this.refreshData(this.rawData);
  }

  roleIdToRoleName(roleId: number) {
    if (this.roleMap) {
      const thisRole = this.roleMap.find(role => role.id === roleId);
      if (thisRole) {
        return thisRole.name;
      } else {
        return 'Custom role';
      }
    }
  }

  customTransformSessionDataForMaterialTable(data: any[]) {
    const tableDataMetaDict = this.metaData;

    const modifiedTableData = data.map((consumerTableDataItem) => {
      const obj: any = {};
      const thisUsersEnterperise = consumerTableDataItem.enterprises.find(value => value.enterprise_id === this.dependency.enterpriseId);


      for (const key in tableDataMetaDict) {

        if (key === 'role_id') {
          const roleName = this.roleIdToRoleName(thisUsersEnterperise[key]);
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: roleName,
            searchValue: roleName
          };
        } else if (key === 'bots') {

          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: thisUsersEnterperise[key].length,
            searchValue: thisUsersEnterperise[key].length
          };
        } else {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: consumerTableDataItem[key],
            searchValue: consumerTableDataItem[key]
          };
        }
      }
      obj.originalSessionData = consumerTableDataItem;
      return obj;
    });

    const modifiedTableData2 = modifiedTableData.map((tableGataItem) => {
      const exclamationIconHTML = `<span class="fa fa-exclamation-triangle color-yellow" title="User not verified"></span>`;
      tableGataItem['Email ID'].value = `
              <span class="email-wrapper">
                  ${!tableGataItem.originalSessionData.enterprises[0].is_active ? exclamationIconHTML : ''}
                  <span>${tableGataItem['Email ID'].value}</span>
              </span>`;
      tableGataItem.Actions.value = tableGataItem.Actions.value || [];
      tableGataItem.Actions.value.push({show: true, name: 'modify', class: 'fa fa-edit mr-3 color-primary'});
      tableGataItem.Actions.value.push({show: true, name: 'remove', class: 'fa fa-trash mr-3 color-danger'});


      return tableGataItem;
    });
    return modifiedTableData2;
  }

}

