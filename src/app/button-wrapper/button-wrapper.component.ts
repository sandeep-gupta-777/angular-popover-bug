import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BreakpointService} from '../core/breakpoint.service';

export enum ELoadingStatus {
  default,
  loading,
  success,
  error
}

@Component({
  selector: 'app-button-wrapper',
  templateUrl: './button-wrapper.component.html',
  styleUrls: ['./button-wrapper.component.scss']
})
export class ButtonWrapperComponent implements OnInit {

  @Input() disabled;
  @Input() isMatFlatButton = true;
  @Input() icon;
  @Input() text;
  @Input() toolTipText;
  @Output() btnClick = new EventEmitter();
  @ViewChild('tooltip') tooltip;

  myELoadingState = ELoadingStatus;
  color;
  borderColor = '#e0e0e0';
  _status: ELoadingStatus = ELoadingStatus.default;
  @Input() set status(val) {
    if (!val || val === ELoadingStatus.default ) {
      this._status = ELoadingStatus.default;
      return;
    }
    if (val === ELoadingStatus.loading) {
      this._status = val;
    } else {
      const borderColor = this.borderColor;
      this._status = val;
      this.borderColor = val;
      setTimeout(() => this.tooltip.show());
      this.borderColor = val === ELoadingStatus.success ? 'green' : 'red';
      setTimeout(() => {
        /*reset*/
        this.status = ELoadingStatus.default;
        this.borderColor = borderColor;
        this.tooltip.hide();
        this.toolTipText = '';
      }, 3000);
    }
  }
  constructor(public breakpointService: BreakpointService) { }

  ngOnInit() {

  }

}
