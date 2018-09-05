import {Action, State, StateContext} from '@ngxs/store';
import {ConstantsService} from '../../constants.service';
import {
  AddNewRoom,
  // AddMessagesToRoomByUId,
  ChangeFrameAction,
  ResetChatState,
  SetCurrentBotDetails,
  SetCurrentUId,
  SetCurrentRoomID,
  ToggleChatWindow,
  // AttachRoomIdToRoomByUId,
  // SetLastTemplateKeyToRoomByUId,
  DeleteChatRoomsByBotId,
  AddMessagesToRoomByRoomId,
  SetLastTemplateKeyToRoomByRoomId, SetConsumerDetail
} from './chat.action';
import {EChatFrame, IChatSessionState, IRoomData} from '../../../interfaces/chat-session-state';
export const defaultChatState:IChatSessionState = {
  frameEnabled: EChatFrame.WELCOME_BOX,
  opened: false,
  currentRoomId: null,
  currentBotDetails: null,
  currentUId: null,
  rooms: null,
  consumerDetails:null
};

export interface IConsumerDetails {username?: string, phone?: string, email?: string, facebook_id?: string, uid?: string}

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
  @Action(SetConsumerDetail)
  setConsumerDetail({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetConsumerDetail) {
    let state: IChatSessionState = getState();
    patchState({consumerDetails: payload});
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

  @Action(SetCurrentBotDetails)
  setCurrentBotID(
    {patchState, setState, getState, dispatch}: StateContext<IChatSessionState>,
                  {payload}: SetCurrentBotDetails) {

    patchState({currentBotDetails: payload});
  }

  @Action(AddNewRoom)
  addNewRoom({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AddNewRoom) {
    let state = getState();
    let rooms = state.rooms;
    let room = payload;
    if (!state.rooms) state.rooms = [];
    state.rooms.push(room);
  }

  // @Action(AddMessagesToRoomByUId)
  // addMessagesToRoom({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AddMessagesToRoomByUId) {
  //   let state = getState();
  //   let rooms = state.rooms;
  //   let room_id =payload.id;
  //   let room: IRoomData = (rooms && (rooms.find((room) => room.id === room_id)));
  //
  //   room.messageList = [...room.messageList, ...payload.messageList];
  //   // state.currentBotDetails = {
  //   //   ...state.currentBotDetails,
  //   //   id: payload.bot_id,
  //   //   token: payload.bot_access_token,
  //   // };
  //   setState({...state});
  //
  // }

  @Action(AddMessagesToRoomByRoomId)
  addMessagesToRoomByRoomId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AddMessagesToRoomByRoomId) {
    let state = getState();
    let rooms = state.rooms;
    let room_id =payload.id;

    let room: IRoomData = (rooms && (rooms.find((room) => room.id === room_id)));

    room.messageList = [...room.messageList, ...payload.messageList];
    setState({...state});
  }

  // @Action(AttachRoomIdToRoomByUId)
  // attachRoomIdToRoomByUId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AttachRoomIdToRoomByUId) {
  //   let state = getState();
  //   let rooms = state.rooms;
  //   let uId =payload.uid;
  //   let room: IRoomData = (rooms && (rooms.find((room) => room.uid === uId)));
  //   room.id = payload.room_id;
  //   setState({...state});
  //
  // }

  @Action(SetLastTemplateKeyToRoomByRoomId)
  SetLastTemplateKeyToRoomByRoomId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetLastTemplateKeyToRoomByRoomId) {
    let state = getState();
    let rooms = state.rooms;
    let room_id =payload.room_id;

    let room: IRoomData = (rooms && (rooms.find((room) => room.id === room_id)));
    room.lastTemplateKey = payload.lastTemplateKey;
    setState({...state});
  }

  @Action(ResetChatState)
  resetChatState({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>) {
    let state: IChatSessionState = getState();
    let x = defaultChatState;

    setState(x);
  }

  @Action(DeleteChatRoomsByBotId)
  deleteRoomsByBotId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: DeleteChatRoomsByBotId) {
    let state = getState();
    let rooms = state.rooms;
    let botId =payload.id;
    rooms && (rooms.forEach((room, index) => {
      if(room.id=== botId){
        rooms.splice(index, 1);
      }
    }));
    setState({...state});
  }


}
