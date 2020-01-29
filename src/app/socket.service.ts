import {EventEmitter, Injectable} from '@angular/core';
import {take} from 'rxjs/operators';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAuthState} from './auth/ngxs/auth.state';
import {environment} from '../environments/environment';
import {UtilityService} from './utility.service';
import {EventService} from './event.service';

declare const io: any;

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  @Select() loggeduser$: Observable<IAuthState>;
  static isInitDone = false;
  static train$ = new EventEmitter();
  static preview$ = new EventEmitter();

  constructor(
    private utilityService: UtilityService,
  ) {
  }

  private socket;

  initAllEvents() {

    this.socket.on('train', (data) => {
      console.log('train', data);
      SocketService.train$.emit(data);
    });

    this.socket.on('deploy_jenkins', (data) => {
      console.log('deploy_jenkins', data);
      const branch: string = data.branch;
      let deployHost;
      if (branch === 'develop') {
        deployHost = 'dev.imibot';
      } else if (branch === 'staging') {
        deployHost = 'staging.imibot';
      }
      if (environment.backend_root.includes(deployHost) || location.host.includes('localhost')) {
        EventService.deploy_jenkins$.emit();
        this.utilityService.showSuccessToaster((`${branch.toLocaleUpperCase()}: ` + 'New deployment started'), 7000);
      }
    });

    this.socket.on('preview', (data) => {
      debugger;
      console.log('preview event train :-)');
      SocketService.preview$.emit(data);
    });
  }

  destroySocket() {
    this.socket && this.socket.destroy();
  }

  initializeSocketConnection(socketData) {
    if (!SocketService.isInitDone) {
      const url = 'https://rtm.imibot.ai';
      // const url = 'https://imi-bot-middleware.herokuapp.com';
      // const url = 'http://localhost:3000';
      this.socket = io(url, {query: `data=${JSON.stringify(socketData)}`});
      this.socket.on('connect', () => {
        console.log('Client has connected to the server!');
        if (!SocketService.isInitDone) {
          this.initAllEvents();
          SocketService.isInitDone = true;
        }
      });
    }
  }

  initializeSocketNow() {

    let data;
    this.loggeduser$.pipe(take(1)).subscribe((value) => {
      data = {
        'connectionConfig': {
          'namespace': 'BOT',
          'enterprise_id': value.user.enterprise_id,
          socket_key: value.user.socket_key
        },
        'imi_bot_middleware_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVGhpcyBpcyBJTUkgQk9UIG1pZGRsZXdhcmUiLCJpYXQiOjE1Njc4ODc5MTAsImV4cCI6NDE1OTg4NzkxMH0.dYbMaf8HYMD5K532p7DpHN0cmru-JKMjst-WS9zi7u8'
      };
      this.initializeSocketConnection(data);
    });
  }


}
