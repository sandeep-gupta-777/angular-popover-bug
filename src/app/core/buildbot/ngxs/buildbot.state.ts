import {Action, State, StateContext} from '@ngxs/store';
import {
  IAvatar,
  IAvatarList, IBasicInfo,
  IBotConfig,
  ICustomners,
  IIntegration,
  IPipeline, IUnselectedPipeline,
  pipelineData
} from '../../../../interfaces/bot-creation';
import {
  SaveAvatorInfo,
  SaveNewBotInfo_CodeBased,
  SaveDataManagment,
  SaveCodeInfo,
  SaveCustomnersInfo,
  SaveIntegrationInfo,
  SavePipeLineInfo, SaveNewBotInfo_PipelineBased, ResetBuildBotToDefault,
} from './buildbot.action';
import {ConstantsService} from '../../../constants.service';
import {buildPath} from 'selenium-webdriver/http';
import {IPipelineItem} from '../../../../interfaces/ai-module';
import {IBot, IBotCreation} from '../../interfaces/IBot';
import {EFormValidationErrors} from '../../../utility.service';


export interface IBotCreationState {
  codeBased: IBot,
  pipeLineBased: IBot
}


let defaultCodeBasedBotState = {
  logo:'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
  room_persistence_time:240,
  data_persistence_period:30,
  transactions_per_pricing_unit:30
};
defaultCodeBasedBotState[EFormValidationErrors.form_validation_basic_info]=false;
defaultCodeBasedBotState[EFormValidationErrors.form_validation_avator]=false;
let defaultPipeLineBasedBotState={...defaultCodeBasedBotState};
delete defaultPipeLineBasedBotState[EFormValidationErrors.form_validation_avator]
const defaultBuildBotState = {
  codeBased: defaultCodeBasedBotState,
  pipeLineBased: defaultPipeLineBasedBotState
};

@State<IBotCreationState>({
  name: 'botcreationstate',
  defaults: defaultBuildBotState
})

export class BotCreationStateReducer {

  constructor(private constantsService: ConstantsService) {
  }

  @Action(SaveNewBotInfo_CodeBased)
  saveBasicInfo({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveNewBotInfo_CodeBased) {
    let state: IBotCreationState = getState();
    let x = {
      ...state,
      codeBased: {
        ...state.codeBased,
        ...payload.data
      }
    };
    setState(x);
  }

  @Action(SaveNewBotInfo_PipelineBased)
  saveNewBotInfoPipelineBased({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveNewBotInfo_PipelineBased) {
    let state: IBotCreationState = getState();
    let x = {
      ...state,
      pipeLineBased: {
        ...state.pipeLineBased,
        ...payload.data
      }
    };
    setState(x);
  }

  @Action(SaveDataManagment)
  saveDataManagment({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveDataManagment) {
    let state: IBotCreationState = getState();
    let x = {
      ...state,
      codeBased: {
        ...state.codeBased,
        ...payload.data
      }
    };
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
        // pipeline: payload.data.pipeline,
        // unselected_pipeline: payload.data.unselectedPipeline
      }
    });
  }

  @Action(SaveCustomnersInfo)
  saveCustomnersInfo({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveCustomnersInfo) {
    let state: IBotCreationState = getState();
    setState({...state});
  }

  // @Action(SaveCodeInfo)
  // saveCodeInfo({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveCodeInfo) {
  //   // ;
  //   let state: IBotCreationState = getState();
  //   patchState({
  //     codeBased: {
  //       ...state.codeBased,
  //       code: {
  //         ...state.codeBased.code
  //         , ...payload.data.code
  //
  //       }
  //     }
  //   });
  // }

  @Action(SaveIntegrationInfo)
  SaveIntegrationInfo({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveIntegrationInfo) {
    let state: IBotCreationState = getState();
    patchState({
      codeBased: {
        ...state.codeBased,
        // integration: {...state.codeBased.integration, ...payload.data}
      }
    });
    // setState({...state});
  }

  @Action(ResetBuildBotToDefault)
  resetBuildBotToDefault({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>) {
    let state: IBotCreationState = getState();
    patchState(defaultBuildBotState);
  }


}
