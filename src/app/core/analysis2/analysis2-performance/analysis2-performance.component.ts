import {Component, OnInit} from '@angular/core';
import {ConstantsService} from '../../../constants.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-analysis2-performance',
  templateUrl: './analysis2-performance.component.html',
  styleUrls: ['./analysis2-performance.component.scss']
})
export class Analysis2PerformanceComponent implements OnInit {
  activeTab: string = "sessions";
  series_sessions:any[] = [{
    name: 'Handled by bot',
    data: [5, 3, 4, 7, 2]
  }, {
    name: 'Handled by agent',
    data: [2, 2, 3, 2, 1]
  }, {
    name: 'User abandoned',
    data: [3, 4, 4, 2, 5]
  }];
  series_template:any[] = [{
    name: 'Triggered',
    data: [5, 3, 4, 7, 2]
  }];
  series_flows:any[];

  constructor(
    public constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute,
    ) {}

  tabClicked(activeTab:string) {
    this.activeTab = activeTab;
  }

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('perf') || 'sessions';
  }

}
