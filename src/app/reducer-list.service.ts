import {AuthStateReducer} from "./auth/ngxs/auth.state";
import {AppStateReducer} from "./ngxs/app.state";
import {EnterpriseprofileStateReducer} from "./core/enterpriseprofile/ngxs/enterpriseprofile.state";
import {ViewBotStateReducer} from "./core/view-bots/ngxs/view-bot.state";
import {ChatSessionStateReducer} from "./chat/ngxs/chat.state";
import {BotCreationStateReducer} from "./core/buildbot/ngxs/buildbot.state";
import {AnalysisStateReducer2} from "./core/analysis2/ngxs/analysis.state";
import {ReportsStateReducer} from "./core/reports/ngxs/reports.state";
import {VersionStateReducer} from "./core/buildbot/build-code-based-bot/architecture/code/code-input/ngxs/code-input.state";

export class ReducerListService {
  static list = [
    AuthStateReducer,
    AppStateReducer,
    EnterpriseprofileStateReducer,
    ViewBotStateReducer,
    // ChatSessionStateReducer,
    BotCreationStateReducer,
    AnalysisStateReducer2,
    ReportsStateReducer,
  ]
}