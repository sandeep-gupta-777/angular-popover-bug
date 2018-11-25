import {
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
import {IMessageData} from '../../../../../../../../../interfaces/chat-session-state';
import {LoggingService} from '../../../../../../../../logging.service';
import {NgForm} from '@angular/forms';
import {ICarousalItem, IOutputItem} from '../../code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';

declare var $: any;

enum ECarasoulMoveDirection {
  left = 'left',
  right = 'right',
}

@Component({
  selector: 'app-code-input-caraosal',
  templateUrl: './code-input-caraosal.component.html',
  styleUrls: ['./code-input-caraosal.component.scss']
})
export class CodeInputCaraosalComponent implements OnInit, OnDestroy {

  showOverlay:boolean;
  @ViewChild('mainInput') mainInput: ElementRef;
  @Input() outputItem: IOutputItem;
  @Input() isFullScreenPreview = false;
  @Input() isParentSessionsModal = false;
  @Input() myIndex: number;
  @Input() channelNameList: string[];
  @Input() totalResponseTemplateComponentCount: number;
  @Output() deleteTemplate: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempUp: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempDown: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() sendMessageToBotServer$ = new EventEmitter();
  carasolItems: any[];
  @ViewChildren('caraosalItem') caraosalItem: QueryList<ElementRef>;
  @ViewChild('leftLst') leftLstElementRef: ElementRef;
  @ViewChild('rightLst') rightLstElementRef: ElementRef;
  @ViewChild('MultiCarousel') MultiCarousel: ElementRef;
  @ViewChild('MultiCarouselInner') MultiCarouselInner: ElementRef;
  @ViewChild('addNewCarasolPlaceholder') addNewCarasolPlaceholder: ElementRef;

  @ViewChild('carauoselForm') caraoselForm: NgForm;
  itemWidth;
  disableAddNewCarasolItem = false;
  _messageData: IMessageData;
  myECarasoulMoveDirection = ECarasoulMoveDirection;
  selected: boolean;

  @Input() set selectedTemplateKeyOutputIndex(selectedTemplateKeyOutputIndex: number[]) {
    /*when parent components empty selectedTemplateKeyOutputIndex array,
   *we should turn this.selected to false
   */
    if (selectedTemplateKeyOutputIndex && selectedTemplateKeyOutputIndex.length === 0) {
      this.selected = false;
    }
  }

  @Input() set messageData(messageDataValue: IMessageData) {
    this._messageData = messageDataValue;
  }

  carasolItemShownInOneScreen: number;
  totalItemsInCarasol: number;
  MultiCarouselWidth: number;
  controlsClickedCount = 0;

  removeThisChannel(channel: string) {
    const isChannelPresent = this.outputItem.include.find(e => e === channel);
    if (isChannelPresent) {
      this.outputItem.include = this.outputItem.include.filter(e => e !== channel);
    } else {
      this.outputItem.include.push(channel);
    }
  }

  imgOpacity(channel: string) {
    const isChannelPresent = this.outputItem.include.find(e => e === channel);
    if (isChannelPresent) {
      return true;
    } else {
      return false;
    }
  }

  moveUp(i) {
    this.moveTempUp.emit(i);
  }

  moveDown(i) {
    this.moveTempDown.emit(i);
  }

  ngOnInit() {
    this.carasolItemShownInOneScreen = 1.5; //this.isFullScreenPreview ? 4 : 2;
    this.totalItemsInCarasol = 2; //this._messageData.media.length;

  }

  sendMessageToBotServer(mediaItem: { title: string, type: string, url: string, buttons: { payload: string, title: string, type: string }[] }) {
    try {
      this.sendMessageToBotServer$.emit(mediaItem.buttons[0].payload || 'NO_PAYLOAD');
    } catch (e) {
      this.sendMessageToBotServer$.emit('NO_PAYLOAD');
      LoggingService.error(e);
    }
  }

  deleteCarasolItem(index) {
    const carasolItems = this.outputItem.generic_template[0].elements;
    if (index === carasolItems.length - 1) {
      // --this.controlsClickedCount;
      this.slideCarousel(ECarasoulMoveDirection.left);
    }
    if (carasolItems.length === 1) {
      this.bringAddNewCarasolPlaceholderAtCenter();
    }
    carasolItems.splice(index, 1);

    return;
  }

  x = 0;

  duplicateCarasolItem(index) {
    const carasolItems = this.outputItem.generic_template[0].elements;
    const itemToBeDuplicated = carasolItems[index];
    carasolItems.splice(index, 0, itemToBeDuplicated);
    this.recalculateWidthForCaraousalItems();
  }

  recalculateWidthForCaraousalItems() {
    const self = this;

    setTimeout(() => {/*first add item, then in next tick force .item with recalculation*/
      $(this.MultiCarouselInner.nativeElement).find(('.item')).each(function () {
        $(this).outerWidth(self.itemWidth);
      });
      // ;

      // setTimeout(() => {/*first add item, then in next tick force .item with recalculation*/
      //   this.carasolItems.forEach((item) => {
      //     console.log(item)
      //     $(item.nav).outerWidth(self.itemWidth);
      //   });
      //   this.controlsClickedCount = 0;
      // });


      this.slideCarousel(ECarasoulMoveDirection.right);
    });
  }

  resetCarasolSlide() {
    // $('.MultiCarousel-inner').css('transform', 'translateX(' + ((this.MultiCarouselWidth - this.itemWidth) / 2) + 'px)');
    $(this.MultiCarouselInner.nativeElement).css('transform', 'translateX(' + ((this.MultiCarouselWidth - this.itemWidth) / 2) + 'px)');
  }

  bringAddNewCarasolPlaceholderAtCenter() {
    $(this.MultiCarouselInner.nativeElement).css('transform', 'translateX(' + ((this.MultiCarouselWidth - (this.itemWidth / 3)) / 2) + 'px)');
  }

  delete(i) {
    this.deleteTemplate.emit(i);
  }

  onSelected(b) {
    this.selectionChanged.emit(JSON.stringify({
      select: b,
      index: this.myIndex
    }));
  }

  ResCarouselSize1;

  ngAfterViewInit() {

    console.log('===================ngAfterViewInit===============================================');
    // this.mainInput.nativeElement.focus();

    const self = this;
    self.carasolItems = self.caraosalItem.toArray();

    $(document).ready(() => {
      const CardCarouselComponent_this = this;
      const MultiCarousel = this.MultiCarousel.nativeElement; //('.MultiCarousel');
      const MultiCarouselInner = this.MultiCarouselInner.nativeElement; //('.MultiCarousel-inner');
      let itemWidth: any = '';
      let itemNumbers: any = '';
      let sampwidth: any = '';

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

      setTimeout(() => {
        ResCarouselSize();
      });

      $(window).resize(function () {
        self.x = 1;
        setTimeout(() => {
          ResCarouselSize();
        });
      });

      //this function define the size of the items
      function ResCarouselSize() {

        self.controlsClickedCount = 0;
        // var incno = 0;
        // var dataItems = ('data-items');
        console.log(self.caraosalItem.toArray());

        var itemClass = ('.item');
        let id = 0;
        // var btnParentSb = '';
        // var itemsSplit: any = '';
        self.MultiCarouselWidth = sampwidth = $(MultiCarousel).width();
        if (!sampwidth) {

        }
        console.log(sampwidth, '=============');

        // var bodyWidth = $('body').width();
        $(MultiCarouselInner).each(function () {

          id = id + 1;
          // itemNumbers = $(this).find(itemClass).length;
          itemNumbers = self.carasolItems.length;
          // btnParentSb = $(this).parent().attr(dataItems);
          // itemsSplit = btnParentSb.split(',');
          $(this).parent().attr('id', 'MultiCarousel' + id);

          itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;

          // if (bodyWidth >= 1200) {
          //   // incno = this.carasolItemShownInOneScreen;//itemsSplit[3];
          //   itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          // }
          // else if (bodyWidth >= 992) {
          //   incno = itemsSplit[2];
          //   itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          // }
          // else if (bodyWidth >= 768) {
          //   incno = itemsSplit[1];
          //   itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          // }
          // else {
          //   incno = itemsSplit[0];
          //   itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
          // }
          self.itemWidth = itemWidth;
          console.log(sampwidth, itemWidth);
          $(this).css({'transform': 'translateX(0px)', 'width': 10 + itemWidth * itemNumbers});
          /*TODO; 10 is a hack; remove it*/
          $(self.MultiCarouselInner.nativeElement).css('transform', 'translateX(' + ((sampwidth - itemWidth) / 2) + 'px)');
          $(this).find(itemClass).each(function () {
            $(this).outerWidth(itemWidth);
          });
          // self.carasolItems.forEach((item) => {
          //   $(item.nativeElement).outerWidth(itemWidth);
          // });

          // $('.leftLst').addClass('over');
          // $('.rightLst').removeClass('over');

        });
      }

      self.ResCarouselSize1 = ResCarouselSize;


      //this function used to move the items
      self.slideCarousel = function slideCarousel(direction: ECarasoulMoveDirection) {
        // alert("sider");

        if (self.outputItem.generic_template[0].elements.length === 1) {
          self.resetCarasolSlide();
          self.controlsClickedCount = 0;
          return;
        } else if (self.outputItem.generic_template[0].elements.length === 0) {
          self.bringAddNewCarasolPlaceholderAtCenter();
        }

        if (direction == ECarasoulMoveDirection.left) {
          $(MultiCarouselInner).css('transform', 'translateX(' + (currentSlideLength() + itemWidth) + 'px)');
          --self.controlsClickedCount;
        }
        if (direction === ECarasoulMoveDirection.right) {
          $(MultiCarouselInner).css('transform', 'translateX(' + (currentSlideLength() - itemWidth) + 'px)');
          ++self.controlsClickedCount;
        }

        self.disableAddNewCarasolItem = false;

        // if(self.controlsClickedCount === self.outputItem.generic_template[0].elements.length){
        //   --self.controlsClickedCount;;
        // }
      };


      function currentSlideLength() {
        const divStyle = $(MultiCarouselInner).css('transform');
        const values = divStyle.match(/-?[\d\.]+/g);
        const slideLength: number = parseFloat(values[4]); //xds = length by which carousal has been moved
        console.log(slideLength);
        return slideLength;
      }

    });
  }

  slideCarousel: Function;

  swapCarasolItems(initialIndex, finalIndex) {
    const carasolItems = this.outputItem.generic_template[0].elements;
    [carasolItems[initialIndex], carasolItems[finalIndex]] = [carasolItems[finalIndex], carasolItems[initialIndex]];
  }

  ngOnDestroy(): void {

  }

  pushNewCarasolItem() {
    this.disableAddNewCarasolItem =true;
    const carasolItems = this.outputItem.generic_template[0].elements;
    const emptyCaraosalItem: ICarousalItem = {
      'image_url': 'https://s3-us-west-2.amazonaws.com/o2bot/image/carousel_pay_bills.jpg',
      'button': [{'type': 'postback', 'title': 'Renew Now', 'payload': 'expire'}],
      'title': 'Contract Renewal'
    };
    carasolItems.push(emptyCaraosalItem);
    this.recalculateWidthForCaraousalItems();
  }

  saveButtonConfig(btnConfigForm: NgForm, i: number, buttonIndex: number, activeDropdownButtonIndex) {
    console.log(btnConfigForm.value);

    this.outputItem.generic_template[0].elements[i].button[buttonIndex] = btnConfigForm.value;
    activeDropdownButtonIndex.value = -1;
  }

  ngAfterViewChecked() {
    //TODO: this is being called many times, check it
    // console.log('=================ngAfterViewChecked====================');
    if (this.x) {

      this.ResCarouselSize1();
      this.x = 0;
    }
  }

  addNewButtonToCarasol(carasolItemIndex) {
    this.outputItem.generic_template[0].elements[carasolItemIndex].button.push({
      'type': 'postback',
      'title': 'BUTTON_NAME',
      'payload': 'expire'
    });
    console.log(this.outputItem.generic_template[0].elements[carasolItemIndex]);
  }

  deleteCaraousalButton(carouselIndex, buttonIndex){
    try {
      this.outputItem.generic_template[0].elements[carouselIndex].button.splice(buttonIndex,1);
    }catch (e) {
      console.log(e);
    }
  }

  changeActiveButtonIndex(activeDropdownButtonIndex,buttonIndex){
    setTimeout(()=>{
      activeDropdownButtonIndex.value = buttonIndex;
    })
  }

test(){
    alert();
}



}
