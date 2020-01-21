import {Component, OnInit, TemplateRef} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {SetBackendURlRoot, SetShowBackendURlRoot} from '../ngxs/app.action';
import {Observable} from 'rxjs';
import {IAppState} from '../ngxs/app.state';
import {UtilityService} from '../utility.service';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-backend-dev',
  templateUrl: './backend-dev.component.html',
  styleUrls: ['./backend-dev.component.scss']
})
export class BackendDevComponent implements OnInit {

  constructor(
    // private modalService: BsModalService,
    private utilityService: UtilityService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
  }

  // modalRefWrapper: BsModalRef;
  backend_root_url: string;
  showBackendRootUrlButton = false;

  @Select() app$: Observable<IAppState>;

  ngOnInit() {
    this.showBackendRootUrlButton = location.href.includes('burl');
    this.app$.subscribe((value) => {
      this.backend_root_url = value.backendUrlRoot;
    });
  }

  openChangePasswordModal(template: TemplateRef<any>) {
    // this.modalRefWrapper = this.modalService.show(template, {class: 'modal-md'});
  }

  changeUrl() {
    this.store.dispatch([
      new SetBackendURlRoot({url: this.backend_root_url})
    ])
      .subscribe((value) => {
        this.utilityService.showSuccessToaster('Backend root url changed');
      });
  }

  clearLocalstorageAndReload() {
    localStorage.clear();
    location.reload();
  }

}
