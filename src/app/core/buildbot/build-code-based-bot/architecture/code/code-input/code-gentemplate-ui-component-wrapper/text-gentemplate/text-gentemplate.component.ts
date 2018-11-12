import {Component, OnInit, Input, EventEmitter, Output, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {IOutputItem} from '../../code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';

@Component({
  selector: 'app-text-gentemplate',
  templateUrl: './text-gentemplate.component.html',
  styleUrls: ['./text-gentemplate.component.scss']
})
export class TextGentemplateComponent implements OnInit, AfterViewInit {

  _variants: string[];
  variantsIter: string[];
  selected: boolean;
  userErrorMessage:string = "";

  @Input() outputItem: IOutputItem;
  @ViewChild('textarea') textarea: ElementRef;
  @Input() set variants(variantsVal: string[]) {
    this._variants = variantsVal;
    this.variantsIter = [...this._variants];
  }
  @Input() set selectedTemplateKeyOutputIndex(selectedTemplateKeyOutputIndex: number[]) {
    /*when parent components empty selectedTemplateKeyOutputIndex array,
     *we should turn this.selected to false
     */
    if (selectedTemplateKeyOutputIndex && selectedTemplateKeyOutputIndex.length === 0) {
      this.selected = false;
    }
  }

  constructor() {}


  deleteVariant(index) {
    this._variants.splice(index, 1);
    console.log('sdasdas das das dadas', index);
    console.log(this._variants);
  }


  addVariant() {
    this.userErrorMessage = "";
    let isAnyVarientIsEmpty = this._variants.findIndex((val)=>val.trim()==='') !== -1;
    /*TODO: implement it using form validator*/
    if(isAnyVarientIsEmpty){
      this.userErrorMessage = "Some variants are empty";
      setTimeout(()=>{
        this.userErrorMessage = "";
      },3000);
      return;
    }
    this._variants.push('');
    this.variantsIter = [...this._variants];
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // this.textarea.nativeElement.focus();
  }

}
