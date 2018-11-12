import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {IMessageData} from '../../../../interfaces/chat-session-state';
import {ActivatedRoute} from '@angular/router';
import {ELogType, LoggingService} from '../../../logging.service';

declare var $: any;

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() isFullScreenPreview = false;
  _messageData: IMessageData;
  @Input() isParentSessionsModal = false;
  itemCountIsNotCausingOverflow = false;
  @Input() set messageData(messageDataValue: IMessageData) {

    this._messageData = messageDataValue;
  }
  @Output() sendMessageToBotServer$ = new EventEmitter();
  carasolItemShownInOneScreen = 2;
  totalItemsInCarasol: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    // this.isFullScreenPreview = this.activatedRoute.snapshot.data.isFullScreenPreview;
    this.carasolItemShownInOneScreen = this.isFullScreenPreview ? 4 : 2;
    this.totalItemsInCarasol = this._messageData.media.length;
  }

  sendMessageToBotServer(mediaItem: { title: string, type: string, url: string, buttons: { payload: string, title: string, type: string }[] }) {
    try {
      this.sendMessageToBotServer$.emit(mediaItem.buttons[0].payload || 'NO_PAYLOAD');
    } catch (e) {
      this.sendMessageToBotServer$.emit('NO_PAYLOAD');
      LoggingService.error(e);
    }
  }

  @ViewChild('leftLst') leftLstElementRef: ElementRef;
  @ViewChild('rightLst') rightLstElementRef: ElementRef;
  ngAfterViewInit() {

    $(document).ready(() => {
      const CardCarouselComponent_this = this;
      const itemsMainDiv = ('.MultiCarousel');
      const itemsDiv = ('.MultiCarousel-inner');
      let itemWidth: any = '';

      // $('.leftLst, .rightLst').click(function () {

      const sideControlsClickHandler = function ($event) {
        const condition = $(this).hasClass('leftLst');
        if (condition) {
          click(0, this);
        } else {
          click(1, this);
        }

        $event.stopPropagation();
      };

      this.rightLstElementRef && $(this.rightLstElementRef.nativeElement).click(sideControlsClickHandler);
      this.leftLstElementRef && $(this.leftLstElementRef.nativeElement).click(sideControlsClickHandler);

      ResCarouselSize();

      $(window).resize(function () {
        ResCarouselSize();
      });

      //this function define the size of the items
      function ResCarouselSize() {

        let incno = 0;
        const dataItems = ('data-items');
        const itemClass = ('.item');
        let id = 0;
        let btnParentSb = '';
        let itemsSplit: any = '';
        const sampwidth = $(itemsMainDiv).width();
        const bodyWidth = $('body').width();
        $(itemsDiv).each(function () {

          id = id + 1;
          const itemNumbers = $(this).find(itemClass).length;
          btnParentSb = $(this).parent().attr(dataItems);
          itemsSplit = btnParentSb.split(',');
          $(this).parent().attr('id', 'MultiCarousel' + id);



          if (bodyWidth >= 1200) {
            // incno = this.carasolItemShownInOneScreen;//itemsSplit[3];
            itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          } else if (bodyWidth >= 992) {
            incno = itemsSplit[2];
            itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          } else if (bodyWidth >= 768) {
            incno = itemsSplit[1];
            itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          } else {
            incno = itemsSplit[0];
            itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          }
          $(this).css({'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers});
          $(this).find(itemClass).each(function () {
            $(this).outerWidth(itemWidth);
          });

          $('.leftLst').addClass('over');
          $('.rightLst').removeClass('over');

        });
      }


      //this function used to move the items
      function ResCarousel(e, el, s) {
        const leftBtn = ('.leftLst');
        const rightBtn = ('.rightLst');
        let translateXval: any = '';
        const divStyle = $(el + ' ' + itemsDiv).css('transform');
        const values = divStyle.match(/-?[\d\.]+/g);
        const xds: any = Math.abs(values[4]);
        if (e == 0) {
          translateXval = parseInt(xds) - (<any>parseInt)(itemWidth * s);
          $(el + ' ' + rightBtn).removeClass('over');

          if (translateXval <= itemWidth / 2) {
            translateXval = 0;
            $(el + ' ' + leftBtn).addClass('over');
          }
        } else if (e == 1) {
          const itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
          translateXval = parseInt(xds) + (<any>parseInt)(itemWidth * s);
          $(el + ' ' + leftBtn).removeClass('over');

          if (translateXval >= itemsCondition - itemWidth / 2) {
            translateXval = itemsCondition;
            $(el + ' ' + rightBtn).addClass('over');
          }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
      }

      //It is used to get some elements from btn
      function click(ell, ee) {
        const Parent = '#' + $(ee).parent().attr('id');
        const slide = $(Parent).attr('data-slide');
        ResCarousel(ell, Parent, slide);
      }

    });
  }

  ngOnDestroy(): void {

  }

}
