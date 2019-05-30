import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoggingService} from '../../logging.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
              private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    LoggingService.log(this.activatedRoute);
  }

}
