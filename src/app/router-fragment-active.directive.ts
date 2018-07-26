import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Directive({
  selector: '[appRouterQueryParamActive]'
})
export class RouterFragmentActiveDirective implements OnInit{

  tabParamValue:string;
  classList:DOMTokenList;
  @Input() set appRouterQueryParamActive(tabParamValue){
    this.tabParamValue =tabParamValue;
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.queryParamMap);
    this.activatedRoute.queryParamMap.subscribe((paramMap)=>{
      let tabParamValue:string;
      // console.log('in directive');
      if(paramMap.get('tab') === this.tabParamValue) this.classList.add('tab-active');
      else{
        this.classList.remove('tab-active')
      }
    });
  }

  constructor(private element: ElementRef, private activatedRoute:ActivatedRoute) {
    this.classList = this.element.nativeElement.classList;
  }

}
