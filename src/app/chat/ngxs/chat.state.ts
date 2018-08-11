import {Action, State, StateContext} from '@ngxs/store';
import {ConstantsService} from '../../constants.service';
import {AddMessagesToRoom, ChangeFrameAction, ResetChatState, SetCurrentBotID, SetCurrentRoomID, ToggleChatWindow} from './chat.action';
import {EChatFrame, IChatSessionState, IRoomData} from '../../../interfaces/chat-session-state';
import {isNullOrUndefined} from 'util';


export const defaultChatState = {
  frameEnabled: EChatFrame.WELCOME_BOX,
  opened: false,
  currentRoomId: null,
  currentBotDetails: null,
  rooms: []
};


@State<IChatSessionState>({
  name: 'chatsessionstate',
  defaults: defaultChatState
})


//same as reducer
export class ChatSessionStateReducer {

  constructor(private constantsService: ConstantsService) {
  }

  @Action(ToggleChatWindow)
  closeChatWindow({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: ToggleChatWindow) {
    let state: IChatSessionState = getState();
    setState({...state, opened: payload.open});
  }

  @Action(ChangeFrameAction)
  changeFrame({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: ChangeFrameAction) {
    let state: IChatSessionState = getState();
    patchState({...state, frameEnabled: payload.frameEnabled});
  }

  @Action(SetCurrentRoomID)
  setCurrentRoomID({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetCurrentRoomID) {
    let state: IChatSessionState = getState();
    patchState({...state, currentRoomId: payload.id});
  }

  @Action(SetCurrentBotID)
  setCurrentBotID({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetCurrentBotID) {
    let state = getState();
    let bot_token: string;
    let bot_name: string;
    let botId: number = payload.bot_id;
    let bot_logo:string;
    /*find token for a given timePeriod*/
    if (!payload.bot) {
      state.rooms.forEach((room) => {
        if (room.bot_id === botId) {
          bot_token = room.bot_access_token;
          bot_name = room.selectedAvatar.name;
        }
      });
    }else {
      bot_token = payload.bot.bot_access_token;
      bot_name = payload.bot.name;
      bot_logo = payload.bot.logo;
    }
    patchState({
      ...state,
      currentBotDetails: {
        id: botId,
        token: bot_token,
        name: bot_name,
        logo:bot_logo
      }
    });
  }

  @Action(AddMessagesToRoom)
  addMessagesToRoom({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AddMessagesToRoom) {
    let state = getState();
    let rooms = state.rooms;
    let roomid = payload.id;
    let room: IRoomData = (rooms && (rooms.find((room) => room.id === roomid)));
    if (!room) {
      room = {
        id: roomid,
        bot_id: payload.bot_id,
        'messageList': [],
        selectedAvatar: payload.selectedAvatar,
        bot_access_token: payload.bot_access_token
      };
      if (!state.rooms) state.rooms = [];
      state.rooms.push(room);
    }

    room.messageList = [...room.messageList, ...payload.messageList];
    state.currentBotDetails = {
      ...state.currentBotDetails,
      id: payload.bot_id,
      token: payload.bot_access_token,
    };

    setState({...state});

  }

  @Action(ResetChatState)
  resetChatState({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>) {
    let state: IChatSessionState = getState();
    setState({...defaultChatState});
  }


}
