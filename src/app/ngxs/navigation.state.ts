import {Action, Actions, ofAction, State, StateContext} from '@ngxs/store';
import {Router} from '@angular/router';
import {NavigateAction} from './navigation.action';
import {NgZone} from '@angular/core';

export interface INavigationState{
  previousRoute:string;
  currentRoute:string;
  nextRoute:string;

}

@State<INavigationState>({
  name:'router',
  defaults:{
    currentRoute:'',
    nextRoute:'',
    previousRoute:''
  }
})


export class NavigationStateReducer {
  constructor(private router:Router, private zone:NgZone){}

  @Action(NavigateAction)
  async changeRoute(context:StateContext<INavigationState>, action: NavigateAction){
    const path:string = action.payload.route;
    this.zone.run(() => this.router.navigate([path]));
    context.patchState({nextRoute:path});
  }
}

// export class RouterState {
//   constructor(private router: Router, private action$: Actions) {
//     this.action$
//       .pipe(ofAction(Navigate))
//       .subscribe(({payload})=>{this.router.navigate([payload])});
//   }
// }
//
