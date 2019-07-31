import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {DragService} from './drag.service';

@Directive({
  selector: '[appDropTarget]'
})
export class DropTargetDirective {


  @Input()
  set myDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }

  @Output() drop = new EventEmitter();

  private options: DropTargetOptions = {};

  // @HostListener('dragenter', ['$event']);
  // @HostListener('dragover', ['$event']);

  constructor(private dragService: DragService) {
  }

  onDragOver(event) {
    const {zone = 'zone'} = this.options;

    if (this.dragService.accepts(zone)) {
      event.preventDefault();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const data = JSON.parse(event.dataTransfer.getData('Text'));

    this.drop.next(data);
  }

}

export interface DropTargetOptions {
  zone?: string;
}
