import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../chat.service';
import {ServerService} from '../../server.service';
import {UtilityService} from '../../utility.service';
import {Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantsService} from '../../constants.service';

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
    console.log(this.activatedRoute);
  }

}
