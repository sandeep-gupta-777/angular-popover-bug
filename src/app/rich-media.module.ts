import {NgModule} from '@angular/core';
import {CardCarouselComponent} from './chat/carousel/card-carousel/card-carousel.component';
import {QuickReplyComponent} from './chat/carousel/quick-reply/quick-reply.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CardCarouselComponent,
    QuickReplyComponent,
  ],
  exports:[
    CardCarouselComponent,
    QuickReplyComponent,
  ],
  imports:[
    CommonModule
  ]
})
export class RichMediaModule{

}
