import { AbstractSmartTable } from "src/app/smart-table/smart-table";
import { ICorpus } from "../../interfaces/faqbots";

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
        let tableDataMetaDict = this.metaData;
        let modifiedTableData = data.map((corpusTableDataItem, index) => {
            let obj: any = {};
            for (let key in tableDataMetaDict) {
                if (key == 'description') {
                    let exclamationIconHTML = `<i class="fa fa-circle color-green icon-postion" title="Corpus is live"></i>`;
                    obj[tableDataMetaDict[key].displayValue] = {
                        ...tableDataMetaDict[key],
                        originalKey: key,
                        value: `<span class="email-wrapper">
                        ${(corpusTableDataItem.state == 'live') ?exclamationIconHTML:''}
                        <span>${corpusTableDataItem[key]}</span>
                    </span>`,
                        searchValue: corpusTableDataItem[key]
                    };
                } else if (key == 'updated_at') {
                    const date = new Date(corpusTableDataItem[key]);
                    obj[tableDataMetaDict[key].displayValue] = {
                        ...tableDataMetaDict[key],
                        originalKey: key,
                        value: this.dependency.datePipe.transform(date,'d MMM')+'\' '+this.dependency.datePipe.transform(date,'yy')+', '+ this.dependency.datePipe.transform(date,'shortTime') + ' by '+ corpusTableDataItem['updated_by'],
                        searchValue: this.dependency.datePipe.transform(date,'date')+ corpusTableDataItem['updated_by']
                    };
                } else if (key == 'actions') {
                    obj[tableDataMetaDict[key].displayValue] = {
                        ...tableDataMetaDict[key],
                        originalKey: key,
                        value: `<div class="dropdown table-dropdown">
  <i class="fa fa-angle-down arrow-circle"></i>
  <div class="dropdown-content px-0">
    ${(corpusTableDataItem.state != 'live') ?`<p class = "onHoverChangeColor m-0 px-2 py-1" data-cy="dropdown_makelive_${index}_${corpusTableDataItem.id}"><i class="fa fa-upload"></i> Make live</p>`:''}
    <p class = "onHoverChangeColor m-0 px-2 py-1" data-cy="dropdown_edit_${index}_${corpusTableDataItem.id}"><i class="fa fa-edit"></i> Edit</p>
    <hr>
    <p class = "onHoverChangeColor m-0 px-2 py-1" data-cy="dropdown_preview_${index}_${corpusTableDataItem.id}"> <i class="fa fa-edit"></i> Preview</p>
    <p class = "onHoverChangeColor m-0 px-2 py-1" data-cy="dropdown_download_${index}_${corpusTableDataItem.id}"> <i class="fa fa-download"></i> Download</p>
  </div>
</div>`,
                        searchValue: ''
                    };
                }

            }
            obj.originalSessionData = corpusTableDataItem;
            return obj;
        });
        // let modifiedTableData2 = modifiedTableData.map((tableGataItem) => {
        //     let exclamationIconHTML = `<i class="fa fa-exclamation-triangle color-yellow" title="User not verified"></i>`;
        //     tableGataItem['Email ID'].value = `
        //           <span class="email-wrapper">
        //               ${!tableGataItem.originalSessionData.enterprises[0].is_active?exclamationIconHTML:''}
        //               <span>${tableGataItem['Email ID'].value}</span>
        //           </span>`;
        //     // tableGataItem.Actions.value = tableGataItem.Actions.value || [];
        //     // tableGataItem.Actions.value.push({show: true, name: 'modify', class: 'fa fa-edit mr-3 color-primary'});
        //     // tableGataItem.Actions.value.push({show: true, name: 'remove', class: 'fa fa-trash mr-3 color-danger'});


        //     return tableGataItem;
        //   });
        return modifiedTableData;
    }


}