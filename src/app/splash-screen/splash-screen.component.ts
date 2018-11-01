import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export enum ESplashScreens {
  consumers='consumers.svg',
  imageForCodeBots='imageForCodeBots.svg',
  knowledge_base='knowledge base.svg',
  pipeline_bots_empty='pipeline bots empty.svg',
  sessions='sessions.svg',
  testing='testing.svg',
}

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  @Input() imageHRef;
  @Input() headingText:string;
  @Input() descriptionText:string;

  myESplashScreens = ESplashScreens;
  @Output() buttonClicked = new EventEmitter();
  @Input() buttonText;
  constructor() { }

  ngOnInit() {
  }

}
