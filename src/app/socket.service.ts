import {EventEmitter, Injectable} from '@angular/core';

declare const io: any;

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  static isInitDone = false;
  static train$ = new EventEmitter();
  static preview$ = new EventEmitter();

  constructor() {
  }

  private socket;

  initAllEvents() {
    this.socket.on('train', (data) => {
      console.log('socket event train :-)');
      SocketService.train$.emit(data);
    });

    this.socket.on('preview', (data) => {
      console.log('preview event train :-)');
      SocketService.preview$.emit(data);
    });
  }

  initializeSocketConnection(socketData) {
    if (!SocketService.isInitDone) {
      const url = 'https://imi-bot-middleware.herokuapp.com';
      this.socket = io(url, {query: `data=${JSON.stringify(socketData)}`});
      this.socket.on('connect', () => {
        console.log('Client has connected to the server!');
        this.initAllEvents();
      });
      SocketService.isInitDone = true;
    }
  }


}
