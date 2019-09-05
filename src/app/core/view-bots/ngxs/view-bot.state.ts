import {Action, Selector, State, StateContext} from '@ngxs/store';
import {
  ResetBotListAction,
  SetCodeBasedBotListAction,
  SetPipeLineBasedBotListAction,
  SaveVersionInfoInBot,
  UpdateBotInfoByIdInBotInBotList, SetAllBotListAction, AddNewBotInAllBotList, UpdateVersionInfoByIdInBot
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

// same as reducer
export class ViewBotStateReducer {

  constructor(private activatedRoute: ActivatedRoute) {

  }

  static getCodeBased(x) {
    return x.botlist.botList;
  }

  static getPipelineBased(x) {
    // ;
    return x.botlist.pipelineBasedBotList;
  }

  @Action(SetAllBotListAction)
  setAllBotListAction({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>, {payload}: SetAllBotListAction) {
    debugger;
    const state = getState();
    const newBotList = payload.botList;
    const oldBotList = state.allBotList;
    if (Array.isArray(oldBotList)) {
      newBotList.forEach((newBot, index) => {
        const oldBot: IBot = oldBotList.find((bot) => bot.id === newBot.id);
        newBotList[index] = {...oldBot, ...newBot};
      });
    }


    patchState({
      // botList: payload.botList,
      allBotList: newBotList
    });
  }

  @Action(AddNewBotInAllBotList)
  addNewBotInAllBotList({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>, {payload}: AddNewBotInAllBotList) {
    const state = getState();
    patchState({
      allBotList: [...state.allBotList]
    });
  }

  @Action(SetCodeBasedBotListAction)
  setCodebasedBotList({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>, {payload}: SetCodeBasedBotListAction) {
    patchState({
      codeBasedBotList: payload.botList,
    });
  }

  @Action(SetPipeLineBasedBotListAction)
  setPipelineBasedBotList({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>, {payload}: SetPipeLineBasedBotListAction) {
    patchState({
      pipelineBasedBotList: payload.botList,
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

    const state: ViewBotStateModel = getState();
    const bot: IBot = state.allBotList.find((bot_temp) => bot_temp.id === payload.botId);
    // "updated_fields"?: {
    //   "df_template"?: boolean,
    //   "df_rules"?: boolean,
    //   "generation_rules"?: boolean,
    //   "generation_template"?: boolean,
    //   "workflows"?: boolean
    // }
    const versionList = payload.data;
    // Versions.forEach(Versions => {
    //   Versions.store_updated_fields = {
    //     "df_template": false,
    //     "df_rules": false,
    //     "generation_rules": false,
    //     "generation_template": false,
    //     "workflows": false
    //   }
    // });
    // Versions = {...Versions}

    bot.store_bot_versions = versionList;

    setState({...state});
  }

  @Action(UpdateVersionInfoByIdInBot)
  updateVersionInfoByIdInBot({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>,
                             {payload}: UpdateVersionInfoByIdInBot) {
    const state: ViewBotStateModel = getState();
    const bot: IBot = state.allBotList.find((bot_temp) => bot_temp.id === payload.botId);

    const store_bot_versions = bot.store_bot_versions || (bot.store_bot_versions = []);
    const index = store_bot_versions.findIndex((version) => version.id === payload.data.id);
    // index =  index===-1?0:index;
    if (index !== -1) {
      store_bot_versions[index] = {...store_bot_versions[index], ...payload.data};
    } else {
      store_bot_versions.push(payload.data);
    }
    setState({...state});
  }

  @Action(UpdateBotInfoByIdInBotInBotList)
  updateBotInfoByIdInBotInBotList({patchState, setState, getState, dispatch}: StateContext<ViewBotStateModel>,
                                  {payload}: UpdateBotInfoByIdInBotInBotList) {
    const state: ViewBotStateModel = getState();

    const allBotList_new = state.allBotList.map((bot) => {
      if (bot.id === payload.botId) {
        return {...bot, ...payload.data};
      } else {
        return bot;
      }
      // return  ? {...bot, ...payload.data} : bot;
    });

    patchState({allBotList: allBotList_new});
  }

  // static getBotById(state){
  //   let roomId = this.ac
  //   // return x.botlist.pipelineBasedBotList.;
  //   return x.botlist.pipelineBasedBotList.filter(timePeriod => timePeriod._id === )
  //
  //   for(let i=0; i< x.botlist.pipelineBasedBotList.length; ++i){
  //     let timePeriod = x.botlist.pipelineBasedBotList[i];
  //     if(timePeriod._id === roomId) return timePeriod
  //   }
  //
  //   for(let i=0; i< x.botlist.botList.length; ++i){
  //     let timePeriod = x.botlist.botList[i];
  //     if(timePeriod._id === roomId) return timePeriod
  //   }
  // }

}

