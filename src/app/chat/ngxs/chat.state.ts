import {IUser} from '../../core/interfaces/user';
import {Action, State, StateContext} from '@ngxs/store';
import {ConstantsService} from '../../constants.service';
import {AddMessagesToRoom, ChangeFrameAction, ResetChatState, SetCurrentBotID, SetCurrentRoomID, ToggleChatWindow} from './chat.action';
import {EChatFrame, IChatSessionState, IRoomData} from '../../../interfaces/chat-session-state';
import {isNullOrUndefined} from 'util';


export const defaultChatState = {
  frameEnabled: EChatFrame.WELCOME_BOX,
  opened: false,
  currentRoomId: null,
  currentBotDetails:null,
  rooms: []
}


@State<IChatSessionState>({
  name: 'chatsessionstate',
  defaults: defaultChatState
})


//same as reducer
export class ChatSessionStateReducer {

  constructor(private constantsService: ConstantsService) {}

  @Action(ToggleChatWindow)
  closeChatWindow({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: ToggleChatWindow) {
    let state:IChatSessionState = getState();
    setState({...state ,opened: payload.open});
  }

  @Action(ChangeFrameAction)
  changeFrame({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: ChangeFrameAction) {
    let state:IChatSessionState = getState();
    patchState({...state,frameEnabled: payload.frameEnabled});
  }

  @Action(SetCurrentRoomID)
  setCurrentRoomID({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetCurrentRoomID) {
    let state:IChatSessionState = getState();
    patchState({...state,currentRoomId: payload._id});
  }

  @Action(SetCurrentBotID)
  setCurrentBotID({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetCurrentBotID) {
    let state  = getState();
    let bot_token:string;
    let bot_name:string;
    let botId:string = payload.botId ;
    /*find token for a given timePeriod*/
    state.rooms.forEach((room)=> {
      if(room.botId === botId){
        bot_token = room.botToken;
        bot_name = room.selectedAvatar.name;
      }
    });
    patchState({
      ...state,
      currentBotDetails: {
        _id: botId,
        token: bot_token,
        name:bot_name
      }
    });
  }

  @Action(AddMessagesToRoom)
  addMessagesToRoom({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AddMessagesToRoom) {
    let state = getState();
    let rooms = state.rooms;
    let roomid = payload._id;
    let room: IRoomData = (rooms && (rooms.find((room) => room._id === roomid)));
    if (!room) {
      room = {
        _id: roomid,
        'botId': payload.botId,
        'messageList': [],
        selectedAvatar: payload.selectedAvatar,
        botToken:payload.botToken
      };
      if (!state.rooms) state.rooms = [];
      state.rooms.push(room);
    }

    room.messageList = [...room.messageList, ...payload.messageList];
    state.currentBotDetails = {
      ...state.currentBotDetails,
      _id: payload.botId,
      token:payload.botToken,
    };

    setState({...state});

  }

  @Action(ResetChatState)
  resetChatState({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>) {
    let state:IChatSessionState = getState();
    setState({...defaultChatState});
  }


}
