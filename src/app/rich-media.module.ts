import {NgModule} from '@angular/core';
import {CardCarouselComponent} from './chat/carousel/card-carousel/card-carousel.component';
import {QuickReplyComponent} from './chat/carousel/quick-reply/quick-reply.component';
import {CommonModule} from '@angular/common';
import {ImiLoaderComponent} from './imi-loader/imi-loader.component';

@NgModule({
  declarations: [
    CardCarouselComponent,
    QuickReplyComponent,
    ImiLoaderComponent
  ],
  exports: [
    CardCarouselComponent,
    QuickReplyComponent,
    ImiLoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RichMediaModule {

}
