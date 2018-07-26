import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[scroller]',
})
export class ScrollerDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer) {
    let lastScrollTop = -1;
    renderer.listen(elRef.nativeElement, 'wheel', (e) => {
      console.log('event', e);
      console.log('scrollTop', elRef.nativeElement.scrollTop);
      console.log('lastScrollTop', lastScrollTop);

      if (elRef.nativeElement.scrollTop == lastScrollTop && e.deltaY > 0) {
        e = e || window.event;
        if (e.preventDefault)
          e.preventDefault();
        e.returnValue = false;
      }
      else if (elRef.nativeElement.scrollTop == 0) {
        lastScrollTop = -1;
      }
      else {
        lastScrollTop = elRef.nativeElement.scrollTop;
      }


    })
  }

}
