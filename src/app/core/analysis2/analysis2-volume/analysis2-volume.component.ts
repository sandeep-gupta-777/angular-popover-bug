import { Component, OnInit } from '@angular/core';
import {ConstantsService} from '../../../constants.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-analysis2-volume',
  templateUrl: './analysis2-volume.component.html',
  styleUrls: ['./analysis2-volume.component.scss']
})
export class Analysis2VolumeComponent implements OnInit {

  activeTab: string = 'Sessions';
  series_Sessions: any[] = [{
    name: 'Maximum',
    data: [4, 5, 8, 12, 10, 6, 22, 3]
  }, {
    name: 'Average',
    data: [2, 2.5, 6.2, 4.4, 8, 4, 12.4, 1.3]
  }, {
    name: 'Minimum',
    data: [1, 2, 1, 2, 1, 2, 1, 1]
  }];
  series_Messages: any[] = [{
    name: 'Triggered',
    data: [5, 3, 4, 7, 2]
  }];
  series_Time: any[];

  constructor(
    public constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
  }

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('perf') || 'Sessions';
  }


}
