import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BotSessionSmartTableModal} from '../bot-sessions/bot-session-smart-table-modal';
import {MlIntentsSmartTableModal} from './ml-intents-smart-table-modal';
import {ConstantsService} from '../../../constants.service';
import {IBot} from '../../interfaces/IBot';
import {intentMock} from './intent-mock';
import {IIntent} from '../../../typings/intents';
import {Popover} from '../../../popover/popover.service';

@Component({
  selector: 'app-ml-intents',
  templateUrl: './ml-intents.component.html',
  styleUrls: ['./ml-intents.component.scss']
})
export class MlIntentsComponent implements OnInit {
  sessionsSmartTableDataModal: MlIntentsSmartTableModal;
  intents = intentMock.objects;
  view: 'table' | 'detail' = 'detail';
  selectedIntent: any = this.intents[0];
  @Input() bot: IBot;

  constructor(
    private constantsService: ConstantsService,
    private popper: Popover
  ) {
  }

  ngOnInit() {

    this.sessionsSmartTableDataModal = this.tableDataFactory();
    this.sessionsSmartTableDataModal.refreshData(this.intents);
  }

  tableDataFactory() {
    const tableDataModel = new MlIntentsSmartTableModal(this.intents,
      this.constantsService.SMART_TABLE_INTENT_TABLE_DATA_META_DICT_TEMPLATE,
      {constantsService: this.constantsService, bot: this.bot});
    return tableDataModel;
  }

  intentClickedHandler(intentTableRowData) {

    this.view = 'detail';
    this.selectedIntent = intentTableRowData.data;
  }

  textSelected(e) {
    var selection;

    if (window.getSelection) {
      selection = window.getSelection();
    } else if ((<any>document).selection) {
      selection = (<any>document).selection.createRange();
    }

    // selection.toString() !== '' && alert('"' + selection.toString() + '" was selected at ' + e.pageX + '/' + e.pageY);
    this.replaceSelectedText(selection);
  }

  replaceSelectedText(selection) {
    var obj = {
      'cmd': 'insertHTML',
      'val': '&lt;h3&gt;Life is great!&lt;/h3&gt;',
      'icon': 'code',
      'desc': 'Inserts an HTML string at the insertion point (deletes selection). Requires a valid HTML string to be passed in as a value argument. (Not supported by Internet Explorer.)'
    };
    debugger;
    // var selection = document.selection.createRange();
    if (selection === '') {
      return;
    }
    document.execCommand(obj.cmd, false, `
<span class="bg-red bg-red2 bg-red1">
    ${selection.toString()}
    <div class="cancel">
          <form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Favorite food" value="Sushi">
  </mat-form-field>

  <mat-form-field class="example-full-width">
    <textarea matInput placeholder="Leave a comment"></textarea>
  </mat-form-field>
</form>
    </div>

<span>`);
    console.log('asdasd');
    // alert();
  }

  show(content: TemplateRef<any>, origin) {
    const ref = this.popper.open<{ skills: number[] }>({
      // content,
      content: 'Hello world2!',
      // content: InsidePopoverComponent,
      origin: document.querySelector('#test11'),
      width: '200px',
      data: {
        skills: [1, 2, 3]
      }
    });

    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });

  }


}
