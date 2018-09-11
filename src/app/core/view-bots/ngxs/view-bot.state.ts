import {Action, Selector, State, StateContext} from '@ngxs/store';
import {
  ResetBotListAction,
  SetCodeBasedBotListAction,
  SetPipeLineBasedBotListAction,
  SaveVersionInfoInBot,
  UpdateBotInfoByIdInBotInBotList, SetAllBotListAction, AddNewBotInAllBotList
} from './view-bot.action';
import {IBot} from '../../interfaces/IBot';
import {ActivatedRoute} from '@angular/router';


export interface ViewBotStateModel {
  codeBasedBotList?: IBot[];
  pipelineBasedBotList?: IBot[];
  allBotList: IBot[];
}

@State<ViewBotStateModel>({
  name: 'botlist',
  defaults: {
    codeBasedBotList: null,
    pipelineBasedBotList: null,
    allBotList: null
  }
})

//same as reducer
export class ViewBotStateReducer {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  @Action(SetAllBotListAction)
  setAllBotListAction({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>, {payload}: SetAllBotListAction) {
    let state = getState();
    patchState({
      // codeBasedBotList: payload.botList,
      allBotList: [...payload.botList]
    });
  }

  @Action(AddNewBotInAllBotList)
  addNewBotInAllBotList({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>, {payload}: AddNewBotInAllBotList) {
    let state = getState();
    let allBotList = state.allBotList.push(payload.bot);
    patchState({
      allBotList: [...state.allBotList]
    });
  }

  @Action(SetCodeBasedBotListAction)
  setCodebasedBotList({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>, {payload}: SetCodeBasedBotListAction) {
    let state = getState();
    patchState({
      codeBasedBotList: payload.botList,
      // allBotList: [...(state.codeBasedBotList || []), ...(state.pipelineBasedBotList || []), ...payload.botList]
    });
  }

  @Action(SetPipeLineBasedBotListAction)
  setPipelineBasedBotList({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>, {payload}: SetPipeLineBasedBotListAction) {
    let state = getState();
    patchState({
      pipelineBasedBotList: payload.botList,
      // allBotList: [...(state.codeBasedBotList || []), ...(state.pipelineBasedBotList || []), ...payload.botList]
    });
  }

  @Action(ResetBotListAction)
  resetBotList({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>) {
    setState({
      codeBasedBotList: null,
      pipelineBasedBotList: null,
      allBotList: null
    });
  }

  @Action(SaveVersionInfoInBot)
  saveVersionInfoInBot({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>,
                       {payload}: SaveVersionInfoInBot) {
    let state: ViewBotStateModel = getState();
    let bot: IBot = state.allBotList.find((bot) => bot.id === payload.botId);

    bot.store_bot_versions = payload.data;
    setState({...state});
  }

  @Action(UpdateBotInfoByIdInBotInBotList)
  updateBotInfoByIdInBotInBotList({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>,
                       {payload}: UpdateBotInfoByIdInBotInBotList) {
    let state: ViewBotStateModel = getState();
    state.allBotList = state.allBotList.map((bot) => {
      if(bot.id === payload.botId){
        return {...bot, ...payload.data}
      }else {
        return bot;
      }
      // return  ? {...bot, ...payload.data} : bot;
    });
    setState({...state});
  }

  static getCodeBased(x) {
    return x.botlist.codeBasedBotList;
  }

  static getPipelineBased(x) {
    // ;
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

