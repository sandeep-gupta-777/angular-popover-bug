import {Component, Input, OnInit} from '@angular/core';
import {IPipelineItemV2} from '../core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
import {EventService} from '../event.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {

  show = false;
  _doExpand = false;
  @Input() set doExpand(_doExpand){
    this._doExpand = _doExpand;
    this.show = _doExpand;
  };
  @Input() data: IPipelineItemV2;
  constructor() { }

  ngOnInit() {
    EventService.toggleAllPipeLineModules
        .subscribe((show)=>{
          this.show = show;
        });
  }

}
