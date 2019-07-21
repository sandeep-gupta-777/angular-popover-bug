import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {IMessageData} from '../../../../interfaces/chat-session-state';
import {ActivatedRoute} from '@angular/router';
import {LoggingService} from '../../../logging.service';

declare var $: any;

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() isFullScreenPreview = false;
  @Input() isParentSessionsModal = false;
  itemCountIsNotCausingOverflow = false;
  @Input() feedback;

  @Input() set messageData(messageDataValue: IMessageData) {

    this._messageData = messageDataValue;
  }

  @Output() sendMessageToBotServer$ = new EventEmitter();
  @ViewChild('MultiCarousel') MultiCarousel: ElementRef;
  @ViewChild('MultiCarouselInner') MultiCarouselInner: ElementRef;
  @ViewChildren('caraosalItem') caraosalItem: QueryList<ElementRef>;
  @ViewChild('leftLst') leftLstElementRef: ElementRef;
  @ViewChild('rightLst') rightLstElementRef: ElementRef;

  carasolItemShownInOneScreen = 2;
  totalItemsInCarasol: number;
  carasolItems: any[];
  _messageData: IMessageData;
  itemWidth: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    //  this.isFullScreenPreview = this.activatedRoute.snapshot.data.isFullScreenPreview;
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


  ngAfterViewInit() {

    const self = this;
    self.carasolItems = self.caraosalItem.toArray();

    $(document).ready(() => {
      const CardCarouselComponent_this = this;
      //  const itemsMainDiv = ('.MultiCarousel');
      const MultiCarousel = this.MultiCarousel.nativeElement; // ('.MultiCarousel');
      const MultiCarouselInner = this.MultiCarouselInner.nativeElement; // ('.MultiCarousel-inner');
      //  const itemsDiv = ('.MultiCarousel-inner');
      let itemWidth: any = '';

      //  $('.leftLst, .rightLst').click(function () {

      const sideControlsClickHandler = function ($event) {
        const condition = $(this).hasClass('leftLst');

        if (condition) {
          click(0, this);
        } else {
          click(1, this);
        }

        $event.stopPropagation();
      };

      if (this.rightLstElementRef) {
        $(this.rightLstElementRef.nativeElement).click(sideControlsClickHandler);
      }
      if (this.leftLstElementRef) {
        $(this.leftLstElementRef.nativeElement).click(sideControlsClickHandler);
      }

      ResCarouselSize();

      $(window).resize(function () {
        ResCarouselSize();
      });

      // this function define the size of the items
      function ResCarouselSize() {

        let incno = 0;
        const dataItems = ('data-items');
        const itemClass = ('.item');
        let id = 0;
        let btnParentSb = '';
        let itemsSplit: any = '';
        const sampwidth = $(MultiCarousel).width(); // $(itemsMainDiv).width();
        const bodyWidth = $('body').width();
        //  $(itemsDiv).each(function () {
        $(MultiCarouselInner).each(function () {

          id = id + 1;
          const itemNumbers = self.carasolItems.length; // $(this).find(itemClass).length;
          btnParentSb = $(this).parent().attr(dataItems);
          itemsSplit = btnParentSb.split(',');
          $(this).parent().attr('id', 'MultiCarousel' + id);

          itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          if (bodyWidth >= 1200) {
            //  incno = this.carasolItemShownInOneScreen;// itemsSplit[3];
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
          //  self.itemWidth = itemWidth;

          $(this).css({'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers});
          //  $(this).find(itemClass).each(function () {
          //    $(this).outerWidth(itemWidth);
          //  });

          $(self.MultiCarouselInner.nativeElement).find(('.item')).each(function () {
            $(this).outerWidth(itemWidth);
          });

          $('.leftLst').addClass('over');
          $('.rightLst').removeClass('over');

        });
      }


      // this function used to move the items
      function ResCarousel(e) {
        const s = 1;
        const leftBtn = ('.leftLst');
        const rightBtn = ('.rightLst');
        let translateXval: any = '';
        const divStyle = $(MultiCarouselInner).css('transform');
        const values = divStyle.match(/-?[\d\.]+/g);
        const xds: any = Math.abs(values[4]);
        if (e === 0) {
          translateXval = parseInt(xds, 10) - (<any>parseInt)(itemWidth * s);
          $(rightBtn).removeClass('over');
          //  $(self.rightLstElementRef.nativeElement).removeClass('over');

          if (translateXval <= itemWidth / 2) {
            translateXval = 0;
            $(leftBtn).addClass('over');
            //  $(self.rightLstElementRef.nativeElement).addClass('over');
          }
        } else if (e === 1) {
          const itemsCondition = $(MultiCarouselInner).width() - $(MultiCarousel).width();
          translateXval = parseInt(xds, 10) + (<any>parseInt)(itemWidth * s);
          $(leftBtn).removeClass('over');
          //  $(self.leftLstElementRef.nativeElement).removeClass('over');

          if (translateXval >= itemsCondition - itemWidth / 2) {
            translateXval = itemsCondition;
            $(rightBtn).addClass('over');
            //  $(self.rightLstElementRef.nativeElement).addClass('over');
          }
        }
        $(MultiCarouselInner).css('transform', 'translateX(' + -translateXval + 'px)');
      }

      // It is used to get some elements from btn
      function click(ell, ee) {
        const Parent = '#' + $(ee).parent().attr('id');
        const slide = $(Parent).attr('data-slide');
        //  ResCarousel(ell, Parent, slide);
        ResCarousel(ell);
      }

    });
  }

  ngOnDestroy(): void {

  }

}
