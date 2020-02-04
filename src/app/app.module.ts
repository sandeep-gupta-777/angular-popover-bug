import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {InsidePopoverComponent} from './popover/inside-popover/inside-popover.component';
import {ApplicationRef, NgModule} from '@angular/core';
import {PopoverComponent1} from './popover/popover-component1.component';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    InsidePopoverComponent,
    PopoverComponent1
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopoverComponent1, InsidePopoverComponent],

})
export class AppModule {
}
