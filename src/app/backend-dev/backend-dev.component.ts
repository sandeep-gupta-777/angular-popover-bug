import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Select, Store} from '@ngxs/store';
import {SetBackendURlRoot, SetShowBackendURlRoot} from '../ngxs/app.action';
import {Observable} from 'rxjs';
import {IAuthState} from '../auth/ngxs/auth.state';
import {IAppState} from '../ngxs/app.state';
import {UtilityService} from '../utility.service';
import {ActivatedRoute, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RoutesRecognized} from '@angular/router';

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
  ) { }
  // modalRef: BsModalRef;
  backend_root_url: string;
  showBackendRootUrlButton = false;

  @Select() app$: Observable<IAppState>;
  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {

        this.showBackendRootUrlButton = !!data.state.root.firstChild.queryParamMap.get('burl');
        this.store.dispatch([
          new SetShowBackendURlRoot({showBackendURlRoot: this.showBackendRootUrlButton})
        ]);
      }
    });
    this.app$.subscribe((value) => {
      this.showBackendRootUrlButton = value.showBackendUrlRootButton;
      this.backend_root_url = value.backendUrlRoot;
    });
  }

  openChangePasswordModal(template: TemplateRef<any>) {
    // this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }

  changeUrl() {
    this.store.dispatch([
      new SetBackendURlRoot({url: this.backend_root_url})
    ])
      .subscribe((value) => {
        this.utilityService.showSuccessToaster('Backend root url changed');
        // this.modalRef.hide();
      });
  }

    clearLocalstorageAndReload() {
    localStorage.clear();
    location.reload();
  }

}
