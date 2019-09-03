import {Component, EventEmitter, Input, isDevMode, OnInit, Output} from '@angular/core';

export enum ESplashScreens {
  consumers= 'consumers.svg',
  imageForCodeBots= 'imageForCodeBots.svg',
  knowledge_base= 'knowledge_base.svg',
  pipeline_bots_empty= 'pipeline_bots_empty.svg',
  QandA_bots_empty= 'QandA_bots_empty.svg',
  sessions= 'sessions.svg',
  testing= 'testing.svg',
  rolesCreate = 'rolesCreate.svg',
  curation_all_resolved = 'curation-all-resolved.svg',
  Lode_More_Issues = 'LodeMoreIssues.svg',
  search = 'search.svg'
}

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
})
export class SplashScreenComponent implements OnInit {

  @Input() imageHRef;
  @Input() headingText: string;
  @Input() descriptionText: string;

  myESplashScreens = ESplashScreens;
  @Output() buttonClicked = new EventEmitter();
  @Input() buttonText;
  root = '';
  constructor() { }

  ngOnInit() {
    // this.root = isDevMode() ? '/':'/';
  }

}
