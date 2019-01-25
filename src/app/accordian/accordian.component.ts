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
  @Input() doExpand = false;
  @Input() data: IPipelineItemV2;
  constructor() { }

  ngOnInit() {
    EventService.toggleAllPipeLineModules
        .subscribe((show: any) => {
          this.show = show;
        });
  }

}
