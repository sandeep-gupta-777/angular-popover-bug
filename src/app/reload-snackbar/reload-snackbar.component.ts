import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-reload-snackbar',
  templateUrl: './reload-snackbar.component.html',
  styleUrls: ['./reload-snackbar.component.scss']
})
export class ReloadSnackbarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

  ngOnInit() {
  }

  reloadHandler() {
    location.reload();
    this.data.preClose();
  }

  ignoreHandler() {
    this.data.preClose();
  }

}
