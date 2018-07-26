import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ResetBotListAction, SetCodeBasedBotListAction, SetPipeLineBasedBotListAction} from './view-bot.action';
import {IBot} from '../../interfaces/IBot';
import {ActivatedRoute} from '@angular/router';


export interface ViewBotStateModel {
  codeBasedBotList?: IBot[];
  pipelineBasedBotList?: IBot[];
}

@State<ViewBotStateModel>({
  name:'botlist',
  defaults:{
    codeBasedBotList:null,
    pipelineBasedBotList:null
  }
})

//same as reducer
export class ViewBotStateReducer{

  constructor(private activatedRoute:ActivatedRoute){console.log("ViewBotStateReducer")}
  @Action(SetCodeBasedBotListAction)
  setCodebasedBotList({patchState, setState, getState,dispatch}:StateContext<ViewBotStateModel>, {payload} : SetCodeBasedBotListAction){
    console.log("SetCodeBasedBotListAction");
    patchState({codeBasedBotList: payload.botList});
  }

  @Action(SetPipeLineBasedBotListAction)
  setPipelineBasedBotList({patchState, setState, getState,dispatch}:StateContext<ViewBotStateModel>, {payload} : SetPipeLineBasedBotListAction){
    console.log("SetPipeLineBasedBotListAction");
    patchState({pipelineBasedBotList: payload.botList});
  }

  @Action(ResetBotListAction)
  resetBotList({patchState, setState, getState,dispatch}:StateContext<ViewBotStateModel>){
    setState({
      codeBasedBotList:null,
      pipelineBasedBotList:null
    });
  }

  static getCodeBased(x){
    console.log("ngxs getCodeBased");
    return x.botlist.codeBasedBotList;
  }
  static getPipelineBased(x){
    console.log("ngxs getPipelineBased");
    return x.botlist.pipelineBasedBotList;
  }
  // static getBotById(state){
  //   let id = this.ac
  //   // return x.botlist.pipelineBasedBotList.;
  //   return x.botlist.pipelineBasedBotList.filter(timePeriod => timePeriod._id === )
  //
  //   for(let i=0; i< x.botlist.pipelineBasedBotList.length; ++i){
  //     let timePeriod = x.botlist.pipelineBasedBotList[i];
  //     if(timePeriod._id === id) return timePeriod
  //   }
  //
  //   for(let i=0; i< x.botlist.codeBasedBotList.length; ++i){
  //     let timePeriod = x.botlist.codeBasedBotList[i];
  //     if(timePeriod._id === id) return timePeriod
  //   }
  // }

}

