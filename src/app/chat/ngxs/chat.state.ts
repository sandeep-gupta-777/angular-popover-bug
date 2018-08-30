import {Action, State, StateContext} from '@ngxs/store';
import {ConstantsService} from '../../constants.service';
import {
  AddNewRoom,
  AddMessagesToRoomByUId,
  ChangeFrameAction,
  ResetChatState,
  SetCurrentBotID,
  SetCurrentUId,
  SetCurrentRoomID,
  ToggleChatWindow, AttachRoomIdToRoomByUId, SetLastTemplateKeyToRoomByUId
} from './chat.action';
import {EChatFrame, IChatSessionState, IRoomData} from '../../../interfaces/chat-session-state';
import {isNullOrUndefined} from 'util';


export const defaultChatState:IChatSessionState = {
  frameEnabled: EChatFrame.WELCOME_BOX,
  opened: false,
  currentRoomId: null,
  currentBotDetails: null,
  currentUId: null,
  rooms: [],
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
  @Action(SetCurrentUId)
  setCurrentConsumerId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetCurrentUId) {
    let state: IChatSessionState = getState();
    patchState({...state, currentUId: payload.uid});
  }

  @Action(SetCurrentBotID)
  setCurrentBotID(
    {patchState, setState, getState, dispatch}: StateContext<IChatSessionState>,
                  {payload}: SetCurrentBotID) {
    let state = getState();
    let bot_token: string;
    let bot_name: string;
    let botId: number = payload.bot_id;
    let bot_logo:string;
    ;
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

  @Action(AddNewRoom)
  addNewRoom({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AddNewRoom) {
    let state = getState();
    let rooms = state.rooms;
    let room = payload;
    if (!state.rooms) state.rooms = [];
    state.rooms.push(room);
  }

  @Action(AddMessagesToRoomByUId)
  addMessagesToRoom({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AddMessagesToRoomByUId) {
    let state = getState();
    let rooms = state.rooms;
    // ;
    let uId =payload.uid;
    // let roomid = payload.id;
    let room: IRoomData = (rooms && (rooms.find((room) => room.uid === uId)));
    // if (!room) {
    //   room = {
    //     id: roomid,
    //     bot_id: payload.bot_id,
    //     'messageList': [],
    //     uid: payload.uid,
    //     selectedAvatar: payload.selectedAvatar,
    //     bot_access_token: payload.bot_access_token
    //   };
    //   if (!state.rooms) state.rooms = [];
    //   state.rooms.push(room);
    // }

    room.messageList = [...room.messageList, ...payload.messageList];
    state.currentBotDetails = {
      ...state.currentBotDetails,
      id: payload.bot_id,
      token: payload.bot_access_token,
    };

    setState({...state});

  }

  @Action(AttachRoomIdToRoomByUId)
  attachRoomIdToRoomByUId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AttachRoomIdToRoomByUId) {
    let state = getState();
    let rooms = state.rooms;
    let uId =payload.uid;
    let room: IRoomData = (rooms && (rooms.find((room) => room.uid === uId)));
    room.id = payload.room_id;
    setState({...state});

  }

  @Action(SetLastTemplateKeyToRoomByUId)
  SetLastTemplateKeyToRoomByUId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetLastTemplateKeyToRoomByUId) {
    let state = getState();
    let rooms = state.rooms;
    let uId =payload.uid;
    let room: IRoomData = (rooms && (rooms.find((room) => room.uid === uId)));
    room.lastTemplateKey = payload.lastTemplateKey;
    setState({...state});
  }

  @Action(ResetChatState)
  resetChatState({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>) {
    let state: IChatSessionState = getState();
    setState({...defaultChatState});
  }


}
