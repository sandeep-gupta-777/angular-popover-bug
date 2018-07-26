import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-build-pipeline-based-bot',
  templateUrl: './build-pipeline-based-bot.component.html',
  styleUrls: ['./build-pipeline-based-bot.component.scss']
})
export class BuildPipelineBasedBotComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  activeTab:string;
  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.fragment//todo: not a robust code
  }

  tabClicked(activeTab:string){
    this.activeTab = activeTab;
  }

}
