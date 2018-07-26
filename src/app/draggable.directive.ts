import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {DragService} from './drag.service';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  constructor(private dragService: DragService) {
  }

  @HostBinding('draggable')
  get draggable() {
    return true;
  }

  @Input()
  set appDraggable(options: DraggableOptions) {
    console.log('directive set');
    if (options) {
      this.options = options;
    }
  }

  private options: DraggableOptions = {};

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    console.log('startttttttt')
    const { zone = 'zone', data = {} } = this.options;

    this.dragService.startDrag(zone);

    event.dataTransfer.setData('Text', JSON.stringify(data));
  }

}

export interface DraggableOptions {
  zone?: string;
  data?: any;
}
