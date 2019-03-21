import {Action, State, StateContext, Store} from "@ngxs/store";
import {ConstantsService} from "../../../../../../../constants.service";
import {
  GetVersionsFail,
  GetVersionsInit$,
  GetVersionsSuccess$,
  UpdateVersion,
  AddForkedVersion,
  SaveVersion$,
  SetSelectedVersion,
  ValidateCodeInit$,
  CreateForkedVersion$,
  SaveVersionSuccess,
  SetDiff,
  UpdateVersionLocal
} from "./code-input.action";
import {SetStateFromLocalStorageAction} from "../../../../../../../ngxs/app.action";
import {CodeInputService} from "../code-input.service";
import {IBotVersionData, IBotVersionResult} from "../../../../../../interfaces/IBot";
import {catchError, map, tap} from "rxjs/operators";
import {version} from "punycode";
import {LoggingService} from "../../../../../../../logging.service";
import {UpdateVersionInfoByIdInBot} from "../../../../../../view-bots/ngxs/view-bot.action";
import {UtilityService} from "../../../../../../../utility.service";
import {IVersionDiffMap} from "../../../../../../../../interfaces/code-input";

export interface ICodeInputState {
  versions_pristine: IBotVersionData[],
  versions: IBotVersionData[],
  diff: IVersionDiffMap
  botId: number,
  selectedVersion: IBotVersionData
}

const codeInputState: ICodeInputState = {
  versions: [],
  versions_pristine: [],
  diff: {},
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
            new SetSelectedVersion({id: selectedVersion.id})
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
    /*TODO: if I dont clone they will be the same array
    * so any change in one will be reflected in other as well
    * */
    patchState({
      versions: UtilityService.cloneObj(payload.versions),
      versions_pristine: UtilityService.cloneObj(payload.versions)
    });
  }

  @Action(GetVersionsFail)
  getVersionsFail({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: GetVersionsFail) {
    /*TODO: not implemented yet*/
    // patchState({Versions: payload.Versions})
  }

  @Action(SetDiff)
  SetDiff({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: SetDiff) {
    let state = getState();
    let id = payload.version.id;
    let version_pristine = state.versions_pristine.find(v => v.id === id);
    let version = state.versions.find(v => v.id === id);
    let diff = CodeInputService.calculateDiff(version, version_pristine);
    patchState({diff: {...state.diff, [id]: diff}});
  }

  @Action(UpdateVersionLocal)
  UpdateVersionLocal({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: UpdateVersionLocal) {
    let state = getState();
    let index = state.versions.findIndex((version) => version.id === payload.version.id);
    state.versions[index] = {
      ...(state.versions[index] || {}),
      ...payload.version
    };
    patchState({...state});
  }


  @Action(SaveVersionSuccess)
  SaveVersionSuccess({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: SaveVersionSuccess) {
    let state = getState();
    let index = state.versions.findIndex((version) => version.id === payload.version.id);
    let index_pristine = state.versions_pristine.findIndex((version) => version.id === payload.version.id);
    console.log('BEFORE::', state.versions[3].updated_fields);
    state.versions[index] = {
      ...payload.version
    };
    state.versions_pristine[index_pristine] = {
      ...payload.version
    };

    state.versions = [...state.versions];
    state.versions_pristine = [...state.versions_pristine];
    console.log('AFTER::', state.versions[3].updated_fields);
    this.utilityService.showSuccessToaster('New Versions saved');
    patchState({...state});
  }

  @Action(AddForkedVersion)
  AddVersion({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: AddForkedVersion) {
    let state = getState();
    patchState({
      versions: [...state.versions, payload.version],
      versions_pristine: [...state.versions, payload.version]
    });
  }


  @Action(SetSelectedVersion)
  SetSelectedVersion({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: SetSelectedVersion) {
    let state = getState();
    /*SOME FUCKUP HERE*/
    state.selectedVersion = {
      ...(state.selectedVersion || {}),
      ...state.versions.find(version => version.id === payload.id)
    };
    patchState(state);
  }

  @Action(SaveVersion$)
  SaveVersion$({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: SaveVersion$) {
    this.codeInputService.saveVersion(payload.bot, payload.version)
      .pipe(tap((updatedVersion: IBotVersionData) => {
        this.store.dispatch([
          new SaveVersionSuccess({bot: payload.bot, version: updatedVersion}),
        ])
          .subscribe(() => {
            this.store.dispatch(new SetSelectedVersion({id: updatedVersion.id}));
            this.store.dispatch(new SetDiff({version:updatedVersion}))
          });
      }))
      .subscribe();
  }

  @Action(CreateForkedVersion$)
  CreateForkedVersion$({patchState, setState, getState, dispatch,}: StateContext<ICodeInputState>, {payload}: CreateForkedVersion$) {
    this.codeInputService.createNewVersion(payload.bot, payload.version)
      .pipe(tap((updatedVersion: IBotVersionData) => {
        this.store.dispatch([
          new AddForkedVersion({botId: payload.bot.id, version: updatedVersion}),
          new SetSelectedVersion({id: updatedVersion.id})/*TODO: SetSelectedVersion: see changeSelectedVersionHandler() in component */
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
              this.store.dispatch([new SaveVersion$({bot, version})]);
            }
          }
        }
      }))
      .subscribe();
  }
}
