import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewBotsComponent} from './view-bots.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DragService} from '../../drag.service';
import {AimService} from '../../aim.service';
import {SortBotsPipe} from '../../sort-bots.pipe';
import {BotPreviewCardComponent} from './bot-preview-card/bot-preview-card.component';
import {SharedModule} from '../../shared.module';
import {RichMediaModule} from '../../rich-media.module';
import {BotPreviewCardListComponent} from './bot-preview-card-list/bot-preview-card-list.component';
import {MyMaterialModule} from '../../my-material.module';
import { CreateBotDialogComponent } from './create-bot-dialog/create-bot-dialog.component';
import {HeaderComponent} from '../header/header.component';
import {PersonNamePipe} from '../../person-name.pipe';

const routes: Route[] = [
  {path: '', component: ViewBotsComponent}
];

@NgModule({
  declarations: [
    ViewBotsComponent,
    BotPreviewCardListComponent,
    BotPreviewCardComponent,
    PersonNamePipe,
    SortBotsPipe,
    CreateBotDialogComponent,
    // HeaderComponent

  ],
  entryComponents: [
    CreateBotDialogComponent
  ],
  imports: [
    MyMaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
    RichMediaModule,
    HttpClientModule,
  ],
  providers: [DragService, AimService]
})
export class ViewBotsModule {
}
