import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-gentemplate',
  templateUrl: './code-gentemplate.component.html',
  styleUrls: ['./code-gentemplate.component.scss']
})
export class CodeGentemplateComponent implements OnInit {

  constructor() { }
  @Input() intentCode : object ;
  
  ngOnInit() {
  }

}
