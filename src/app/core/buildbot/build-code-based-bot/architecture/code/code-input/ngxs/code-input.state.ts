import {Action, State, StateContext, Store} from "@ngxs/store";
import {ConstantsService} from "../../../../../../../constants.service";
import {
  GetVersionsFail,
  GetVersionsInit$,
  GetVersionsSuccess$,
  UpdateVersion,
  AddForkedVersion,
  SaveVersion$, SetSelectedVersion, ValidateCodeInit$, CreateForkedVersion$, SaveVersionSuccess
} from "./code-input.action";
import {SetStateFromLocalStorageAction} from "../../../../../../../ngxs/app.action";
import {CodeInputService} from "../code-input.service";
import {IBotVersionData, IBotVersionResult} from "../../../../../../interfaces/IBot";
import {catchError, map, tap} from "rxjs/operators";
import {version} from "punycode";
import {LoggingService} from "../../../../../../../logging.service";
import {UpdateVersionInfoByIdInBot} from "../../../../../../view-bots/ngxs/view-bot.action";
import {UtilityService} from "../../../../../../../utility.service";

export interface ICodeInputState {
  versions: IBotVersionData[],
  botId: number,
  selectedVersion: IBotVersionData
}

const codeInputState: ICodeInputState = {
  versions: [],
  selectedVersion: null,
  botId: 0
};

@State<ICodeInputState>({
  name: 'version',
  defaults: codeInputState
})
export class VersionStateReducer {

  constructor(private codeInputService: CodeInputService, private store: Store, private utilityService: UtilityService) {
  }

  @Action(GetVersionsInit$)
  getVersionListInit({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: GetVersionsInit$) {
    let bot = payload.bot;

    this.codeInputService.getAllVersions(bot.id, payload.bot_access_token)
      .pipe(tap((versionResults) => {
          let versions = versionResults.objects;
          let selectedVersion = CodeInputService.getVersion(versions, bot.active_version_id) || versions[0];


          CodeInputService.getVersion(versions, bot.active_version_id);
          this.store.dispatch([
            new GetVersionsSuccess$({botId: bot.id, versions: versions}),
            new SetSelectedVersion({id:selectedVersion.id})
          ]);
        }, catchError((err) => {
          return this.store.dispatch(new GetVersionsFail({botId: bot.id, message: err.message}));
        })
        )
      )
      .subscribe()
  }


  @Action(GetVersionsSuccess$)
  getVersionListSuccess({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: GetVersionsSuccess$) {
    patchState({versions: payload.versions})
  }

  @Action(GetVersionsFail)
  getVersionsFail({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: GetVersionsFail) {
    /*TODO: not implemented yet*/
    // patchState({Versions: payload.Versions})
  }


  @Action(UpdateVersion)
  updateVersion({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: UpdateVersion) {
    let state = getState();
    let oldVersion = state.versions.find((version) => version.id === payload.version.id);
    Object.assign(oldVersion, payload.version);/*TODO: will it cause problem?*/
    patchState({...state});
  }

  @Action(AddForkedVersion)
  AddVersion({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: AddForkedVersion) {
    let state = getState();

    patchState({versions: [...state.versions, payload.version]});
  }


  @Action(SetSelectedVersion)
  SetSelectedVersion({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: SetSelectedVersion) {
    let state = getState();

    patchState({selectedVersion: state.versions.find(version => version.id === payload.id)});
  }

  @Action(SaveVersion$)
  SaveVersion$({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: SaveVersion$) {
    this.codeInputService.saveVersion(payload.bot, payload.version)
      .pipe(tap((updatedVersion: IBotVersionData) => {
        this.store.dispatch([
          new UpdateVersion({version: updatedVersion, botId: payload.bot.id}),
          new SetSelectedVersion({id: updatedVersion.id}),
          new SaveVersionSuccess({bot: payload.bot, version: updatedVersion}),
        ]);

      }))
      .subscribe();
  }

  @Action(CreateForkedVersion$)
  CreateForkedVersion$({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: CreateForkedVersion$) {
    this.codeInputService.createNewVersion(payload.bot, payload.version)
      .pipe(tap((updatedVersion: IBotVersionData) => {
        this.store.dispatch([
          new AddForkedVersion({botId: payload.bot.id, version: updatedVersion}),
          new SetSelectedVersion({id: updatedVersion.id})/*TODO: SetSelectedVersion: see changeSelectedVersion() in component */
        ]);
        this.utilityService.showSuccessToaster('New Versions forked');
      }))
      .subscribe();
  }


  @Action(ValidateCodeInit$)
  ValidateCodeInit({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: ValidateCodeInit$) {
    let bot = payload.bot;
    let version = payload.version;

    this.codeInputService.validateCode$(payload.bot, payload.version)
      .pipe(tap(async (validationResult: IBotVersionData) => {

        if (CodeInputService.validationPassed(validationResult)) {
          this.store.dispatch([new SaveVersion$({bot, version})]);
        } else {
          if (bot.active_version_id === version.id) {
            this.codeInputService.showForkDialog()
              .then((data) => {
                if (data) {
                  this.codeInputService.openForkNewVersionModal();
                }
              })
          } else {
            let data = await this.codeInputService.showSaveWithErrorDialog();

            if (data) {
              setTimeout(() => this.utilityService.showErrorToaster('Your code has error. But it will be saved as its not active'), 2000);
              // this.selectedVersion_st.updated_fields = this.selectedVersion_st.changed_fields;
              // this.selectedVersion_st.changed_fields = {
              //   'df_template': false,
              //   'df_rules': false,
              //   'generation_rules': false,
              //   'generation_template': false,
              //   'workflows': false
              // };
              this.store.dispatch([new SaveVersion$({bot, version})]);
            }
          }
        }
      }))
      .subscribe();
  }
}
