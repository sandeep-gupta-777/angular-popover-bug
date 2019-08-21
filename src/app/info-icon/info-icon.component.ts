import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-icon',
  template: `
      <span style="width: 14px;height: 14px;display: inline-flex;background-color: #e0e0e0;border-radius: 50%;justify-content: center;align-items: center;" matTooltip="{{text}}">i</span>
  `,
  styles: []
})
export class InfoIconComponent implements OnInit {

  @Input() text: string;
  constructor() {
  }

  ngOnInit() {
  }

}
