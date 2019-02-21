import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {ServerService} from '../../server.service';
import {ConstantsService, EAllActions} from '../../constants.service';
import {IBot} from '../interfaces/IBot';
import {Select, Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {LoggingService} from '../../logging.service';
import {ViewBotStateModel} from './ngxs/view-bot.state';
import {RouteHelperService} from '../../route-helper.service';
import {MatDialog} from '@angular/material';
import {CreateBotDialogComponent} from './create-bot-dialog/create-bot-dialog.component';
import {EBotType, UtilityService} from '../../utility.service';
import {ModalImplementer} from '../../modal-implementer';

@Component({
  selector: 'app-view-bots',
  templateUrl: './view-bots.component.html',
  styleUrls: ['./view-bots.component.scss']
})
export class ViewBotsComponent extends ModalImplementer implements OnInit, AfterViewInit {

  myEBotType = EBotType;
  botList$: Observable<IBot[]>;
  activeTab: string;
  showPopover = false;
  myEAllActions = EAllActions;
  disableCreateNewBotTooltip = true;
  reloaded : boolean = false;
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public utilityService: UtilityService,
    public matDialog: MatDialog,
    private store: Store) {
    super(utilityService, matDialog);
  }

  @Select() botlist$: Observable<ViewBotStateModel>;
  codeBasedBotList: IBot[];
  pipelineBasedBotList: IBot[];

  name = 'sadas';
  animal = 'horse';

  openDialog(): void {
    // this.utilityService.openDialog({
    //   matDialog: this.matDialog,
    //   component: CreateBotDialogComponent,
    //   data: null,
    //   classStr: 'primary-modal-header-border'
    // })
    this.openPrimaryModal(CreateBotDialogComponent)
      .then((botType) => {
        if (!botType) return;
        this.router.navigate([`/core/buildbot`], {queryParams: {bot_type: botType}});
      });
  }

  ngOnInit() {


    this.activeTab = RouteHelperService.getQueryParams(this.activatedRoute, 'type') || EBotType.chatbot;
    window.scrollTo(0, 0);
    this.serverService.getNSetBotList()
      .subscribe(() => {
        LoggingService.log('bot list fetched from view bots page');
        this.reloaded = true;
      });
    this.botlist$
      .subscribe((allBotListState) => {

        if (!allBotListState.allBotList) return;
        this.codeBasedBotList = allBotListState.allBotList.filter(bot => bot.bot_type === EBotType.chatbot);
        this.pipelineBasedBotList = allBotListState.allBotList.filter(bot => bot.bot_type === EBotType.intelligent);
      });
  }

  // openInputParamModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  // }

  navigate(bot_type) {
    RouteHelperService.navigateToUrl(this.router, {url: 'core/buildbot', queryParams: {bot_type: bot_type}});
  }

  // @ViewChild('tooltip') pop;

  tabClicked(activeTab) {
    this.activeTab = activeTab;
    RouteHelperService.navigateToUrl(this.router, {url: '/core/viewbots', queryParams: {'type': activeTab}});
  }

  ngAfterViewInit() {
  }

  // doShowPopover(activeTab) {
  //   return activeTab === EBotType.chatbot && this.codeBasedBotList && this.codeBasedBotList.length === 0
  //     || (activeTab === EBotType.intelligent && this.pipelineBasedBotList && this.pipelineBasedBotList.length === 0);
  // }

  test($event) {
    console.log($event);
  }
}
