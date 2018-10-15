import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-gentemplate',
  templateUrl: './text-gentemplate.component.html',
  styleUrls: ['./text-gentemplate.component.scss']
})
export class TextGentemplateComponent implements OnInit {

  // @Input() variants : string[] ;
   _variants : string[] ;
  @Input() set variants (variantsVal: string[]){
    this._variants = variantsVal;
    this.variantsIter = [...this._variants];
  }
  constructor() { }
  variantsIter: string[] ;
  deleteVariant(index){
    this._variants.splice(index,1);
    console.log("sdasdas das das dadas",index);
    console.log(this._variants);
  }
  addVarient(index){
    this._variants.push("");
    this.variantsIter = [...this._variants];
  }
  ngOnInit() {
  }

}
