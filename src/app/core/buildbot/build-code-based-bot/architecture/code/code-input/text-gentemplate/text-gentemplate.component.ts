import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-gentemplate',
  templateUrl: './text-gentemplate.component.html',
  styleUrls: ['./text-gentemplate.component.scss']
})
export class TextGentemplateComponent implements OnInit {

  constructor() { }
  @Input() variants : string[] ;
  deleteVariant(index){
    this.variants.splice(index,1);
    console.log("sdasdas das das dadas",index);
    console.log(this.variants);
  }
  addVarient(index){
    this.variants.push("");
  }
  ngOnInit() {
  }
  
}
