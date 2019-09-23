import {EventEmitter, Injectable} from '@angular/core';

declare const io: any;

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  static train$ = new EventEmitter();

  constructor() {
  }

  private socket;

  initAllEvents() {
    this.socket.on('train', (data) => {
      console.log('socket event train :-)');
      SocketService.train$.emit(data);
    });
  }

  initializeSocketConnection(socketData) {
    let url = 'https://imi-bot-middleware.herokuapp.com';
    this.socket = io(url, {query: `data=${JSON.stringify(socketData)}`});
    this.socket.on('connect', () => {
      console.log('Client has connected to the server!');
      this.initAllEvents();
    });
  }


}
