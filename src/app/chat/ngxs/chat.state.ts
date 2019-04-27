import {Action, State, StateContext} from '@ngxs/store';
import {ConstantsService} from '../../constants.service';
import {
  AddNewRoom,
  // AddMessagesToRoomByUId,
  ChangeFrameAction,
  ResetChatState,
  SetCurrentBotDetailsAndResetChatStateIfBotMismatch,
  SetCurrentUId,
  SetCurrentRoomID,
  ToggleChatWindow,
  // AttachRoomIdToRoomByUId,
  // SetLastTemplateKeyToRoomByUId,
  DeleteChatRoomsByBotId,
  AddMessagesToRoomByRoomId,
  SetLastTemplateKeyToRoomByRoomId, SetConsumerDetail, ChangeBotIsThinkingDisplayByRoomId, UpdateBotMessage
} from './chat.action';
import {EChatFrame, IChatSessionState, IRoomData} from '../../../interfaces/chat-session-state';
import {MyToasterService} from "../../my-toaster.service";

export const defaultChatState: IChatSessionState = {
  frameEnabled: EChatFrame.WELCOME_BOX,
  opened: false,
  currentRoomId: null,
  currentBotDetails: null,
  currentUId: null,
  rooms: null,
  consumerDetails: null
};

export interface IConsumerDetails {
  name?: string;
  phone?: string;
  email?: string;
  facebook_id?: string;
  uid?: string;
}

@State<IChatSessionState>({
  name: 'chatsessionstate',
  defaults: defaultChatState
})


//same as reducer
export class ChatSessionStateReducer {

  constructor(private constantsService: ConstantsService,
              private myToasterService: MyToasterService) {
  }

  @Action(ToggleChatWindow)
  closeChatWindow({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: ToggleChatWindow) {
    const state: IChatSessionState = getState();
    setState({...state, opened: payload.open});
  }
  @Action(ChangeBotIsThinkingDisplayByRoomId)
  showBotIsThinkingInRoomId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: ChangeBotIsThinkingDisplayByRoomId) {
    const state: IChatSessionState = getState();
    const room  = state.rooms.find((room) => room.id === payload.roomId);
    room.showBotIsThinking = payload.shouldShowBotIsThinking;
    setState({...state});
  }

  @Action(SetConsumerDetail)
  setConsumerDetail({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetConsumerDetail) {
    const state: IChatSessionState = getState();
    patchState({consumerDetails: payload});
  }

  @Action(ChangeFrameAction)
  changeFrame({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: ChangeFrameAction) {
    const state: IChatSessionState = getState();
    patchState({...state, frameEnabled: payload.frameEnabled});
  }

  @Action(SetCurrentRoomID)
  setCurrentRoomID({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetCurrentRoomID) {
    const state: IChatSessionState = getState();
    patchState({...state, currentRoomId: payload.id});
  }

  @Action(UpdateBotMessage)
  updateBotMessage({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: UpdateBotMessage) {
    const state: IChatSessionState = getState();
    let room = state.rooms.find((room)=>room.id === payload.room_id);
    let index = room.messageList.findIndex((message)=>message.bot_message_id === payload.bot_message_id);
    room.messageList[index] = {
      ...room.messageList[index],
      feedback: payload.feedback
    };
    patchState({rooms: state.rooms});
  }


  @Action(SetCurrentUId)
  setCurrentConsumerId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetCurrentUId) {
    const state: IChatSessionState = getState();
    patchState({...state, currentUId: payload.uid});
  }

  @Action(SetCurrentBotDetailsAndResetChatStateIfBotMismatch)
  setCurrentBotDetailsAndResetIfBotMismatch(
    {patchState, setState, getState, dispatch}: StateContext<IChatSessionState>,
    {payload}: SetCurrentBotDetailsAndResetChatStateIfBotMismatch) {

    const state = getState();
    const isOpened = state.opened;
    const currentBot = getState().currentBotDetails;
    if (payload.bot.id !== (currentBot && currentBot.id)) {
     dispatch([
       new ResetChatState()
     ]).subscribe(() => {
       patchState({currentBotDetails: payload.bot, opened: isOpened}); //restoring bot opened state
     });
    } else {
      patchState({currentBotDetails: payload.bot});
    }

  }

  @Action(AddNewRoom)
  addNewRoom({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AddNewRoom) {
    const state = getState();
    let rooms = state.rooms;
    const room = payload;
    if (!state.rooms) { state.rooms = rooms = []; }
    /*first check if room roomId already */
    let doesRoomAlreadyExist_index;
    doesRoomAlreadyExist_index = rooms.findIndex(room => room.id === payload.id);
    if (!doesRoomAlreadyExist_index || doesRoomAlreadyExist_index === -1) {
      state.rooms.push(room);
    } else {
      this.myToasterService.showErrorToaster(`Room with room id ${payload.id} already exists`);
    }
  }

  // @Action(AddMessagesToRoomByUId)
  // addMessagesToRoom({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AddMessagesToRoomByUId) {
  //   let state = getState();
  //   let rooms = state.rooms;
  //   let room_id =payload.roomId;
  //   let room: IRoomData = (rooms && (rooms.find((room) => room.roomId === room_id)));
  //
  //   room.messageList = [...room.messageList, ...payload.messageList];
  //   // state.currentBotDetails = {
  //   //   ...state.currentBotDetails,
  //   //   roomId: payload.bot_id,
  //   //   token: payload.bot_access_token,
  //   // };
  //   setState({...state});
  //
  // }

  @Action(AddMessagesToRoomByRoomId)
  addMessagesToRoomByRoomId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AddMessagesToRoomByRoomId) {
    const state = getState();
    const rooms = state.rooms;
    const room_id = payload.id;

    let room: IRoomData = (rooms && (rooms.find((room) => room.id === room_id)));
    if (!room) {
      /*room is not found, this means session is expired. So search by consumer roomId*/
      const consumer_id = payload.consumer_id;
      room = (rooms && (rooms.find((room) => room.consumer_id === consumer_id)));
      if (room) {
        this.myToasterService.showSuccessToaster('Previous session expired. New session created');
        room.id = payload.id;
        dispatch([
          new SetCurrentRoomID({id: room.id})
        ]);
        room.messageList.push({sourceType: 'session_expired', messageMediatype: null, time: null, text: null, bot_message_id:null});
      }
    }
    room.messageList = [...room.messageList, ...payload.messageList];
    setState({...state});
  }

  // @Action(AttachRoomIdToRoomByUId)
  // attachRoomIdToRoomByUId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AttachRoomIdToRoomByUId) {
  //   let state = getState();
  //   let rooms = state.rooms;
  //   let uId =payload.uid;
  //   let room: IRoomData = (rooms && (rooms.find((room) => room.uid === uId)));
  //   room.roomId = payload.room_id;
  //   setState({...state});
  //
  // }

  @Action(SetLastTemplateKeyToRoomByRoomId)
  SetLastTemplateKeyToRoomByRoomId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: SetLastTemplateKeyToRoomByRoomId) {
    const state = getState();
    const rooms = state.rooms;
    const room_id = payload.room_id;

    const room: IRoomData = (rooms && (rooms.find((room) => room.id === room_id)));
    room.lastTemplateKey = payload.lastTemplateKey;
    setState({...state});
  }

  @Action(ResetChatState)
  resetChatState({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>) {
    const state: IChatSessionState = getState();
    const x = defaultChatState;

    setState(x);
  }

  @Action(DeleteChatRoomsByBotId)
  deleteRoomsByBotId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: DeleteChatRoomsByBotId) {
    const state = getState();
    const rooms = state.rooms;
    const botId = payload.id;
    /*
    * As of now there can be only one current bot in the application.
    * The moment a new current bot is selected (via preview), all info of previous current bot is deleted
    * This means if a bot is deleted, and if that bot is also "bot", we can just reset the whole state
    * */
    if (botId === state.currentBotDetails.id) {
      dispatch([new ResetChatState()]);
    }
    // rooms && (rooms.forEach((room, index) => {
    //   if (room.roomId === botId) {
    //     rooms.splice(index, 1);
    //   }
    // }));
    // setState({...state});
  }




}
