import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EBotType, ViewBotsComponent} from './view-bots.component';
import {BsDropdownModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Ng2CompleterModule} from 'ng2-completer';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DragService} from '../../drag.service';
import {AimService} from '../../aim.service';
import {SortBotsPipe} from '../../sort-bots.pipe';
import {BotPreviewCardComponent} from './bot-preview-card/bot-preview-card.component';
import {SharedModule} from '../../shared.module';
import {RichMediaModule} from '../../rich-media.module';
import {BotPreviewCardListComponent} from './bot-preview-card-list/bot-preview-card-list.component';
import {MyMaterialModule} from '../../material.module';
import { CreateBotDialogComponent } from './create-bot-dialog/create-bot-dialog.component';

const routes: Route[] = [
  {path: '', component: ViewBotsComponent}
];

@NgModule({
  declarations: [
    ViewBotsComponent,
    BotPreviewCardListComponent,
    BotPreviewCardComponent,
    SortBotsPipe,
    CreateBotDialogComponent,

  ],
  entryComponents: [
    CreateBotDialogComponent
  ],
  imports: [
    MyMaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    SharedModule,
    RichMediaModule,
    HttpClientModule,
    Ng2CompleterModule,
    Ng2SmartTableModule,
    ModalModule.forRoot(),
  ],
  providers: [DragService, AimService]
})
export class ViewBotsModule {
}
