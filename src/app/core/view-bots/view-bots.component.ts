import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {IBot} from '../interfaces/IBot';
import {Select, Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewBotStateModel} from './ngxs/view-bot.state';
import {RouteHelperService} from '../../route-helper.service';
import {MatDialog} from '@angular/material';
import {CreateBotDialogComponent} from './create-bot-dialog/create-bot-dialog.component';
import {EBotType, UtilityService} from '../../utility.service';
import {ModalImplementer} from '../../modal-implementer';
import {EAllActions} from '../../typings/enum';

@Component({
  selector: 'app-view-bots',
  templateUrl: './view-bots.component.html',
  styleUrls: ['./view-bots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewBotsComponent extends ModalImplementer implements OnInit, AfterViewInit, OnDestroy {

  myEBotType = EBotType;
  botList$: Observable<IBot[]>;
  activeTab: string;
  showPopover = false;
  myEAllActions = EAllActions;
  disableCreateNewBotTooltip = true;
  reloaded = false; /* TODO: shoaib...dont hide bot while reloading...let loading happen in background like it used to be*/
  botListSub: Subscription;

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public utilityService: UtilityService,
    public matDialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store) {
    super(utilityService, matDialog);
  }

  @Select() botlist$: Observable<ViewBotStateModel>;
  codeBasedBotList: IBot[];
  pipelineBasedBotList: IBot[];
  searchBasedBotList: IBot[];

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
        if (!botType) {
          return;
        }
        this.router.navigate([`/core/buildbot`], {queryParams: {bot_type: botType}});
      });
  }

  ngOnInit() {


    this.activeTab = RouteHelperService.getQueryParams(this.activatedRoute, 'type') || EBotType.chatbot;
    window.scrollTo(0, 0);
    this.serverService.getNSetBotList()
      .subscribe(() => {
        this.reloaded = true;
      });
    this.botListSub = this.botlist$
      .subscribe((allBotListState) => {
        if (!allBotListState.allBotList) {
          return;
        }
        this.codeBasedBotList = allBotListState.allBotList.filter(bot => bot.bot_type === EBotType.chatbot);
        this.pipelineBasedBotList = allBotListState.allBotList.filter(bot => bot.bot_type === EBotType.intelligent);
        this.searchBasedBotList = allBotListState.allBotList.filter(bot => bot.bot_type === EBotType.faqbot);

        this.changeDetectorRef.detectChanges();
        // this.searchBasedBotList = allBotListState.allBotList.filter(bot => bot.bot_type === EBotType.faqbot);

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

  test($event) {
    console.log($event);
  }

  ngOnDestroy(): void {
    if (this.botListSub) {
      this.botListSub.unsubscribe();
    }
  }
}
