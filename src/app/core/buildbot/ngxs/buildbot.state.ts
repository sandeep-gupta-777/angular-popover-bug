import {Action, State, StateContext} from '@ngxs/store';
import {
  IAvatar,
  IAvatarList, IBasicInfo,
  IBotConfig,
  ICode,
  ICustomners,
  IIntegration,
  IPipeline, IUnselectedPipeline,
  pipelineData
} from '../../../../interfaces/bot-creation';
import {
  SaveAvatorInfo,
  SaveBasicInfo,
  SaveCodeInfo,
  SaveCustomnersInfo,
  SaveIntegrationInfo,
  SavePipeLineInfo
} from './buildbot.action';
import {ConstantsService} from '../../../constants.service';
import {buildPath} from 'selenium-webdriver/http';
import {IAIModule} from '../../../../interfaces/ai-module';


export interface IBotCreationState {
  codeBased: {
    basicInfo: IBasicInfo,
    avatars: IAvatar[],
    pipeline: IAIModule[],
    /*TODO: change the intgerface here*/
    unselected_pipeline: IAIModule[]
    customners: ICustomners,
    code: ICode,
    integration: IIntegration,
    botConfig: IBotConfig,
  }
  pipeLineBased: {
    botCreationState: IBotCreationState,
    basicInfo: IBasicInfo,
    avatar: IAvatar,
    avatarList: IAvatarList,
    pipeline: IPipeline,
    ipelineData: pipelineData,
    customners: ICustomners,
    code: ICode,
    integration: IIntegration,
    botConfig: IBotConfig,
  }
}

@State<IBotCreationState>({
  name: 'botcreationstate',
  defaults: {
    codeBased: null,
    pipeLineBased: null
  }
})

export class BotCreationStateReducer {

  constructor(private constantsService: ConstantsService) {
  }

  @Action(SaveBasicInfo)
  closeChatWindow({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveBasicInfo) {
    let state: IBotCreationState = getState();
    let x = {
      ...state, codeBased: {
        ...state.codeBased,
        basicInfo: payload.data
      }
    };
    console.log(x);
    setState(x);
  }

  @Action(SaveAvatorInfo)
  saveAvatorInfo({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveAvatorInfo) {
    let state: IBotCreationState = getState();
    patchState({
      codeBased: {
        ...state.codeBased,
        avatars: payload.data.avatars
      }
    });
  }

  @Action(SavePipeLineInfo)
  savePipeLineInfo({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SavePipeLineInfo) {
    let state: IBotCreationState = getState();
    patchState({
      codeBased: {
        ...state.codeBased,
        pipeline: payload.data.pipeline,
        unselected_pipeline: payload.data.unselectedPipeline
      }
    });
  }

  @Action(SaveCustomnersInfo)
  saveCustomnersInfo({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveCustomnersInfo) {
    let state: IBotCreationState = getState();
    setState({...state});
  }

  @Action(SaveCodeInfo)
  saveCodeInfo({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveCodeInfo) {
    let state: IBotCreationState = getState();
    patchState({
      codeBased: {
        ...state.codeBased,
        code: {...state.codeBased.code, ...payload.data}
      }
    });
  }

  @Action(SaveIntegrationInfo)
  SaveIntegrationInfo({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveIntegrationInfo) {
    let state: IBotCreationState = getState();
    patchState({
      codeBased: {
        ...state.codeBased,
        integration: {...state.codeBased.integration, ...payload.data}
      }
    });
    // setState({...state});
  }


}
