import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IMessageData} from '../../../../../../../../interfaces/chat-session-state';
import {LoggingService} from '../../../../../../../logging.service';
import {ActivatedRoute} from '@angular/router';

declare var $: any;

enum ECarasoulMoveDirection{
  left = "left",
  right = "right",
}

@Component({
  selector: 'app-code-input-caraosal',
  templateUrl: './code-input-caraosal.component.html',
  styleUrls: ['./code-input-caraosal.component.scss']
})
export class CodeInputCaraosalComponent implements OnInit {

    myECarasoulMoveDirection = ECarasoulMoveDirection;
  @Input() isFullScreenPreview = false;
  _messageData: IMessageData;
  @Input() isParentSessionsModal = false;
  itemCountIsNotCausingOverflow = false;

  @Input() set messageData(messageDataValue: IMessageData) {

    this._messageData = messageDataValue;
  }

  @Output() sendMessageToBotServer$ = new EventEmitter();
  carasolItemShownInOneScreen: number;
  totalItemsInCarasol: number;
  controlsClickedCount: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    // this.isFullScreenPreview = this.activatedRoute.snapshot.data.isFullScreenPreview;
    this.carasolItemShownInOneScreen = 1;//this.isFullScreenPreview ? 4 : 2;
    this.totalItemsInCarasol = 2;//this._messageData.media.length;
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
  itemWidth;

  ngAfterViewInit() {
    let self = this;

    $(document).ready(() => {
      let CardCarouselComponent_this = this;
      var itemsMainDiv = ('.MultiCarousel');
      var itemsDiv = ('.MultiCarousel-inner');
      var itemWidth: any = '';
      var itemNumbers: any = '';
      var sampwidth: any = '';

      // $('.leftLst, .rightLst').click(function () {

      // let sideControlsClickHandler = function ($event) {
      //   let condition = $('#MultiCarousel').hasClass('leftLst');
      //   if (condition)
      //     click(0, this);
      //   else
      //     click(1, this);
      //
      //   $event.stopPropagation();
      // };

      // this.rightLstElementRef && $(this.rightLstElementRef.nativeElement).click(sideControlsClickHandler);
      // this.leftLstElementRef && $(this.leftLstElementRef.nativeElement).click(sideControlsClickHandler);

      ResCarouselSize();

      $(window).resize(function () {
        ResCarouselSize();
      });

      //this function define the size of the items
      function ResCarouselSize() {

        var incno = 0;
        var dataItems = ('data-items');
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit: any = '';
        sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {

          id = id + 1;
          itemNumbers = $(this).find(itemClass).length;
          btnParentSb = $(this).parent().attr(dataItems);
          itemsSplit = btnParentSb.split(',');
          $(this).parent().attr('id', 'MultiCarousel' + id);

          if (bodyWidth >= 1200) {
            // incno = this.carasolItemShownInOneScreen;//itemsSplit[3];
            itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          }
          else if (bodyWidth >= 992) {
            incno = itemsSplit[2];
            itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          }
          else if (bodyWidth >= 768) {
            incno = itemsSplit[1];
            itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          }
          else {
            incno = itemsSplit[0];
            itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          }
          self.itemWidth = itemWidth;
          itemWidth = itemWidth * 0.5;//
          console.log(sampwidth, itemWidth);
          $(this).css({'transform': 'translateX(0px)', 'width': 10 + itemWidth * itemNumbers});
          /*TODO; 10 is a hack; remove it*/
          $('.MultiCarousel-inner').css('transform', 'translateX(' + ((sampwidth - itemWidth) / 2) + 'px)');
          $(this).find(itemClass).each(function () {
            $(this).outerWidth(itemWidth);
          });

          $('.leftLst').addClass('over');
          $('.rightLst').removeClass('over');

        });
      }


      //this function used to move the items
      self.moveCarasol = function ResCarousel(direction:ECarasoulMoveDirection) {
        if (direction == ECarasoulMoveDirection.left) {
          $(itemsDiv).css('transform', 'translateX(' + (currentSlideLength() + itemWidth) + 'px)');
          --self.controlsClickedCount;
        }
        if (direction === ECarasoulMoveDirection.right) {
          $(itemsDiv).css('transform', 'translateX(' + (currentSlideLength() - itemWidth) + 'px)');
          ++self.controlsClickedCount;
        }
      }


      function currentSlideLength() {
        var divStyle = $(itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var slideLength: number = parseFloat(values[4]);//xds = length by which carousal has been moved
        console.log(slideLength);
        return slideLength;
      }

    });
  }

  moveCarasol:Function;
  ngOnDestroy(): void {

  }

}
