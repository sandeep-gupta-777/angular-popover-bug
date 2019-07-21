import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {ServerService} from '../../server.service';
import {UtilityService} from '../../utility.service';
import {IApi} from '../interfaces';
import {EHttpVerb} from '../enums';
import {DevService} from '../dev.service';
import {IHeaderData} from '../../../interfaces/header-data';
import {finalize} from 'rxjs/operators';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IDevState} from '../ngxs/dev.state';
import {DevVariableService} from '../dev-variable.service';

@Component({
  selector: 'app-postman-form',
  templateUrl: './postman-form.component.html',
  styleUrls: ['./postman-form.component.scss']
})
export class PostmanFormComponent implements OnInit {

  @ViewChild('httpForm') httpForm: NgForm;
  selectedIndex = 0;
  _apiDetails: IApi;
  @Input() set apiDetails(val: IApi) {

    this._apiDetails = val;
    DevVariableService.highlightedRowId = this._apiDetails.id;
    if (this.postManForm) {
      this.postManForm.patchValue(this.devService.prePostmanPatchTransform(val));
    }
  }

  @Select() dev$: Observable<IDevState>;
  myEHttpVerb = EHttpVerb;
  postManForm: FormGroup;
  loading = false;

  constructor(
    public serverService: ServerService,
    public utilityService: UtilityService,
    private devService: DevService
  ) {
  }

  httpValue;

  ngOnInit() {
    const header: IHeaderData = {
      'user-access-token': this.serverService.X_AXIS_TOKEN,
      'auth-token': this.serverService.AUTH_TOKEN
    };
    this._apiDetails.headers = header;
    this.postManForm = this.devService.createPostmanForm(this.devService.prePostmanPatchTransform(this._apiDetails));
    this.postManForm.valueChanges.subscribe((data) => {
      // if(data.response){
      //   this.selectedIndex = 2;
      // }
    });
    this.dev$.subscribe((devState) => {
      if (!devState) {
        return;
      }
      /*patch form with latest value*/
      if (devState.list.length > 1) {
        this.apiDetails = devState.list[devState.list.length - 1];

      }

    });
  }

  makeHttpReq() {
    this.loading = true;
    const formData = this.postManForm.value;
    let functionToCall, body, headerData;

    if (this.postManForm.get('method').value === EHttpVerb.GET) {
      functionToCall = 'makeGetReq';
    }
    if (this.postManForm.get('method').value === EHttpVerb.POST) {
      functionToCall = 'makePostReq';
    }
    if (this.postManForm.get('method').value === EHttpVerb.PUT) {
      functionToCall = 'makePutReq';
    }
    if (this.postManForm.get('method').value === EHttpVerb.DELETE) {
      functionToCall = 'makeDeleteReq';
    }

    try {
      body = JSON.parse(formData.body);
    } catch (e) {
      alert('body is unparsaable');
      return;
    }
    try {
      if (!formData.headers || !(formData.headers.trim())) {
        headerData = {
          'auth-token': null,
          'user-access-token': null,
          'content-type': null
        };
      } else {
        headerData = JSON.parse(formData.headers);
        if (!headerData['auth-token']) {
          headerData['auth-token'] = null;
        }
        if (!headerData['user-access-token']) {
          headerData['user-access-token'] = null;
        }
        if (!headerData['content-type']) {
          headerData['content-type'] = null;
        }
      }
    } catch (e) {
      alert('header is unparsaable');
      this.loading = false;
      return;
    }
    this.serverService[functionToCall]({url: formData.url, body: formData.body, headerData})
      .pipe(finalize(() => {
        this.loading = false;
        this.selectedIndex = 2;
      }))
      .subscribe((val) => {
        console.log(val);
        this.httpValue = val;
      }, (err) => {
        this.httpValue = err;
      });
  }

}
