import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
  // @Input() variants : string[];
  @Input() myIndex : number;
  @Output() deleteTemplate: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempUp: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempDown: EventEmitter<string> = new EventEmitter<string>();

  delete(i){
    this.deleteTemplate.emit(i);
  }
  moveUp(i){
    this.moveTempUp.emit(i);
  }
  moveDown(i){
    this.moveTempDown.emit(i);
  }
  // deleteVariant(index){
  //   this.variants.splice(index,1);
  // }
  addVarient(index){
    this._variants.push("");
    this.variantsIter = [...this._variants];
  }

  ngOnInit() {
  }

}
