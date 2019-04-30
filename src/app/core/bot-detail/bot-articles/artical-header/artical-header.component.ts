import { Component, OnInit, Input } from '@angular/core';
import { ICorpus } from 'src/app/core/interfaces/faqbots';

@Component({
  selector: 'app-artical-header',
  templateUrl: './artical-header.component.html',
  styleUrls: ['./artical-header.component.scss']
})
export class ArticalHeaderComponent implements OnInit {

  constructor() { }
  @Input() corpus : ICorpus;
  ngOnInit() {
  }

}
