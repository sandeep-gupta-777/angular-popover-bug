import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/user';
import {Router} from '@angular/router';
import {ResetStoreToDefault} from '../../ngxs/app.action';
import {ResetChatState} from '../../chat/ngxs/chat.action';
import {ResetBotListAction} from '../view-bots/ngxs/view-bot.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Select() loggeduser$: Observable<{user:IUser}>;
  constructor(private store: Store, private router:Router) { }

  ngOnInit() {
    this.loggeduser$.subscribe((value)=>{
    })
  }

  logout(){
    localStorage.clear();
    this.store.reset({});
    this.store.dispatch([
      new ResetChatState(),
      new ResetBotListAction()
    ]);
    this.router.navigate(['auth','login']);

  }

}
