import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Select, Store} from '@ngxs/store';
import {SetBackendURlRoot} from '../ngxs/app.action';
import {Observable} from 'rxjs';
import {IAuthState} from '../auth/ngxs/auth.state';
import {IAppState} from '../ngxs/app.state';

@Component({
  selector: 'app-backend-dev',
  templateUrl: './backend-dev.component.html',
  styleUrls: ['./backend-dev.component.scss']
})
export class BackendDevComponent implements OnInit {

  constructor(
    private modalService: BsModalService,
    private store: Store,
  ) { }
  modalRef: BsModalRef;
  backend_root_url:string;

  @Select() app$:Observable<IAppState>;
  ngOnInit() {
    this.app$.subscribe((value)=>{
      ;
      this.backend_root_url = value.backendUrlRoot;
    });
  }

  openChangePasswordModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }

  changeUrl(){
    this.store.dispatch([
      new SetBackendURlRoot({url:this.backend_root_url})
    ])
  }

}
