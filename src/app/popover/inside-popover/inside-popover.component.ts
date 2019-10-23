import { Component } from '@angular/core';
import {PopoverRef} from '../popover-ref';

@Component({
  templateUrl: './inside-popover.component.html',
  styleUrls: ['./inside-popover.component.css']
})
export class InsidePopoverComponent {
  skills;
  constructor(private popoverRef: PopoverRef) {
    debugger;
    this.skills = this.popoverRef.data.skills;
  }

  close() {
    this.popoverRef.close({ id: 1 });
  }

}
