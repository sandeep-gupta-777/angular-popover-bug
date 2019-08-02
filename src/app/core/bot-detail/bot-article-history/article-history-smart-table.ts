import { AbstractSmartTable } from 'src/app/smart-table/smart-table';
import { ICorpus } from '../../interfaces/faqbots';

export class ArticleHistorySmartTable extends AbstractSmartTable {
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
            const obj: any = {};
            for (const key in tableDataMetaDict) {
                if (key === 'description') {
                    const exclamationIconHTML = `<span class="fa fa-circle color-green icon-postion" title="Corpus is live"></span>`;
                    obj[tableDataMetaDict[key].displayValue] = {
                        ...tableDataMetaDict[key],
                        originalKey: key,
                        value: `<span class="email-wrapper">
                        ${(corpusTableDataItem.state === 'live') ? exclamationIconHTML : ''}
                        <span>${corpusTableDataItem[key]}</span>
                    </span>`,
                        searchValue: corpusTableDataItem[key]
                    };
                } else if (key === 'updated_at') {
                    const date = new Date(corpusTableDataItem[key]);
                    obj[tableDataMetaDict[key].displayValue] = {
                        ...tableDataMetaDict[key],
                        originalKey: key,
                        value: this.dependency.datePipe.transform(date, 'd MMM') + '\' ' + this.dependency.datePipe.transform(date, 'yy') + ', ' + this.dependency.datePipe.transform(date, 'shortTime') + ' by ' + corpusTableDataItem['updated_by'],
                        searchValue: this.dependency.datePipe.transform(date, 'date') + corpusTableDataItem['updated_by']
                    };
                } else if (key === 'actions') {
                    obj[tableDataMetaDict[key].displayValue] = {
                        ...tableDataMetaDict[key],
                        originalKey: key,
                        value: `<div class="dropdown table-dropdown">

  <i class="fa fa-angle-down arrow-circle"></i>
  <div class=" px-0 dropdown-content ${index > 5 ? 'location-bottom' : 'location'}">
    ${(corpusTableDataItem.state != 'live') ? `<p class = "onHoverChangeColor m-0 px-2 py-1" data-cy="dropdown_makelive_${index}_${corpusTableDataItem.id}"><mat-icon class = "mat-icon material-icons" >arrow_upward</mat-icon> Make live</p>` : ''}
    <p class = "onHoverChangeColor m-0 px-2 py-1" data-cy="dropdown_edit_${index}_${corpusTableDataItem.id}"><mat-icon class = "mat-icon material-icons">edit</mat-icon> Edit</p>
    <hr>
    <p class = "onHoverChangeColor m-0 px-2 py-1" data-cy="dropdown_preview_${index}_${corpusTableDataItem.id}"><mat-icon class = "mat-icon material-icons">chat_bubble</mat-icon> Preview</p>
    <p class = "onHoverChangeColor m-0 px-2 py-1" data-cy="dropdown_download_${index}_${corpusTableDataItem.id}"><mat-icon class = "mat-icon material-icons pt-10">get_app</mat-icon> Download</p>
  </div>
</div>`,
                        searchValue: ''
                    };
                }

            }
            obj.originalSessionData = corpusTableDataItem;
            return obj;
        });
        return modifiedTableData;
    }


}
