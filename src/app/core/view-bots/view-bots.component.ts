import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {ServerService} from '../../server.service';
import {ConstantsService, EAllActions} from '../../constants.service';
import {IBot} from '../interfaces/IBot';
import {IHeaderData} from '../../../interfaces/header-data';
import {Select, Store} from '@ngxs/store';
import {SetCodeBasedBotListAction, SetPipeLineBasedBotListAction} from './ngxs/view-bot.action';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {LoggingService} from '../../logging.service';
import {ViewBotStateModel} from './ngxs/view-bot.state';
import {RouteHelperService} from '../../route-helper.service';
import {MatDialog} from '@angular/material';
import {CreateBotDialogComponent} from './create-bot-dialog/create-bot-dialog.component';
import {EBotType} from '../../utility.service';

@Component({
  selector: 'app-view-bots',
  templateUrl: './view-bots.component.html',
  styleUrls: ['./view-bots.component.scss']
})
export class ViewBotsComponent implements OnInit, AfterViewInit {

  myEBotType = EBotType;
  botList$: Observable<IBot[]>;
  activeTab: string;
  showPopover = false;
  modalRef: BsModalRef;
  myEAllActions = EAllActions;

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
    public dialog: MatDialog,
    private store: Store) {
  }

  @Select() botlist$: Observable<ViewBotStateModel>;
  codeBasedBotList: IBot[];
  pipelineBasedBotList: IBot[];

  name  = 'sadas';
  animal= 'horse';

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateBotDialogComponent, {
      data: {name: this.name, animal: this.animal},
      panelClass: "primary-modal-header-border"
    });

    dialogRef.afterClosed().subscribe((botType:string) => {
      if(!botType)return;
      this.router.navigate([`/core/buildbot`], {queryParams:{bot_type:botType}});
    });
  }

  ngOnInit() {
    this.activeTab = RouteHelperService.getQueryParams(this.activatedRoute, 'type') || EBotType.chatbot;
    window.scrollTo(0, 0);
    this.serverService.getNSetBotList()
      .subscribe(() => {
        LoggingService.log('bot list fetched from view bots page');
      });
    this.botlist$
      .subscribe((allBotListState) => {

        if (!allBotListState.allBotList) return;
        this.codeBasedBotList = allBotListState.allBotList.filter(bot => bot.bot_type === EBotType.chatbot);
        this.pipelineBasedBotList = allBotListState.allBotList.filter(bot => bot.bot_type === EBotType.intelligent);
        setTimeout(()=>{
          if (this.doShowPopover(this.activeTab)) this.pop.show();
        },1000)
      });
  }

  openCreateBotModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }

  navigate(bot_type) {
    this.modalRef.hide();
    RouteHelperService.navigateToUrl(this.router, {url: 'core/buildbot', queryParams: {bot_type: bot_type}});
  }

  @ViewChild('pop') pop;
  tabClicked(activeTab) {
    this.activeTab = activeTab;
    RouteHelperService.navigateToUrl(this.router, {url: '/core/viewbots', queryParams: {'type': activeTab}});
    this.doShowPopover(activeTab) ? this.pop.show() : this.pop.hide();
  }

  ngAfterViewInit(){
  }

  doShowPopover(activeTab) {
    return activeTab === EBotType.chatbot && this.codeBasedBotList && this.codeBasedBotList.length === 0
      || (activeTab === EBotType.intelligent && this.pipelineBasedBotList && this.pipelineBasedBotList.length === 0);
  }

  test($event){
    console.log($event);
  }
}
