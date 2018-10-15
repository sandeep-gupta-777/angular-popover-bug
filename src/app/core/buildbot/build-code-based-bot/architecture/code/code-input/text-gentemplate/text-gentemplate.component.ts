import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-gentemplate',
  templateUrl: './text-gentemplate.component.html',
  styleUrls: ['./text-gentemplate.component.scss']
})
export class TextGentemplateComponent implements OnInit {

  constructor() { }
  @Input() variants : string[];
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
  deleteVariant(index){
    this.variants.splice(index,1);
  }
  addVarient(index){
    this.variants.push("");
  }
  
  ngOnInit() {
  }
  
}
