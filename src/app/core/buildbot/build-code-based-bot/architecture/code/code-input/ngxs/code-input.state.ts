import {Action, State, StateContext, Store} from '@ngxs/store';
import {ConstantsService} from '../../../../../../../constants.service';
import {
  GetVersionsFail,
  GetVersionsInit$,
  GetVersionsSuccess$,
  UpdateVersion,
  AddForkedVersion,
  SaveVersion$,
  SetSelectedVersion,
  ValidateCode_flow$,
  CreateForkedVersion$,
  SaveVersionSuccess,
  SetDiff,
  UpdateVersionLocal, SetBotId, ResetVersionState, SetErrorMap, ValidateCodeText, ValidateCode_flow_ActivateVersion$
} from './code-input.action';
import {SetStateFromLocalStorageAction} from '../../../../../../../ngxs/app.action';
import {CodeInputService} from '../code-input.service';
import {IBot, IBotVersionData, IBotVersionResult, ICodeVersionValidation} from '../../../../../../interfaces/IBot';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {version} from 'punycode';
import {LoggingService} from '../../../../../../../logging.service';
import {UpdateVersionInfoByIdInBot} from '../../../../../../view-bots/ngxs/view-bot.action';
import {UtilityService} from '../../../../../../../utility.service';
import {IBotVersionErrorMap, IVersionDiffMap} from '../../../../../../../../interfaces/code-input';
import {SaveAvatorInfo} from '../../../../../ngxs/buildbot.action';
import {of} from 'rxjs';

export interface ICodeInputState {
  versions_pristine: IBotVersionData[];
  versions: IBotVersionData[];
  diff: IVersionDiffMap;
  botId: number;
  selectedVersion: IBotVersionData;
  errorMap: IBotVersionErrorMap;
}

const codeInputState: ICodeInputState = {
  versions: [],
  versions_pristine: [],
  diff: {},
  selectedVersion: null,
  botId: 0,
  errorMap: {},
};

@State<ICodeInputState>({
  name: 'version',
  defaults: codeInputState
})
export class VersionStateReducer {

  constructor(private codeInputService: CodeInputService, private store: Store, private utilityService: UtilityService) {
  }

  @Action(GetVersionsInit$)
  getVersionListInit({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: GetVersionsInit$) {
    const bot = payload.bot;

    this.codeInputService.getAllVersions(bot.id, payload.bot_access_token)
      .pipe(tap((versionResults) => {
          const versions = versionResults.objects;
          const selectedVersion = CodeInputService.getVersion(versions, bot.active_version_id) || versions[0];
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
      .subscribe();
  }

  @Action(SetErrorMap)
  SetErrorMap({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: SetErrorMap) {
    const state = getState();
    const versionId = payload.id;
    const x  = {
      ...state,
      errorMap: {
        ...state.errorMap,
        [versionId]: {
          ...state.errorMap[versionId],
          ...payload.validation
        }
      }
    };

    patchState(x);
  }

  @Action(GetVersionsSuccess$)
  getVersionListSuccess({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: GetVersionsSuccess$) {
    /*TODO: if I dont clone they will be the same array
    * so any change in one will be reflected in other as well
    * */

    patchState({
      versions: UtilityService.cloneObj(payload.versions),
      versions_pristine: UtilityService.cloneObj(payload.versions)
    });
  }

  @Action(GetVersionsFail)
  getVersionsFail({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: GetVersionsFail) {
    /*TODO: not implemented yet*/
    // patchState({Versions: payload.Versions})
  }

  @Action(SetDiff)
  SetDiff({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: SetDiff) {
    const state = getState();
    const id = payload.version.id;

    const version_pristine = state.versions_pristine.find(v => v.id === id);
    const version_temp = state.versions.find(v => v.id === id);
    const diff = CodeInputService.calculateDiff(version_temp, version_pristine);
    patchState({diff: {...state.diff, [id]: diff}});
    return of(1);
  }

  @Action(UpdateVersionLocal)
  UpdateVersionLocal({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: UpdateVersionLocal) {
    const state = getState();
    const index = state.versions.findIndex((version_temp) => version_temp.id === payload.version.id);
    state.versions[index] = {
      ...(state.versions[index] || {}),
      ...payload.version
    };
    patchState({...state});
  }


  @Action(SaveVersionSuccess)
  SaveVersionSuccess({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: SaveVersionSuccess) {
    const state = getState();
    const index = state.versions.findIndex((version_temp) => version_temp.id === payload.version.id);
    const index_pristine = state.versions_pristine.findIndex((version_temp) => version_temp.id === payload.version.id);
    state.versions[index] = {
      ...payload.version
    };
    state.versions_pristine[index_pristine] = {
      ...payload.version
    };

    state.versions = [...state.versions];
    state.versions_pristine = [...state.versions_pristine];
    this.utilityService.showSuccessToaster('New Version saved');
    patchState({...state});
  }

  @Action(AddForkedVersion)
  AddVersion({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: AddForkedVersion) {
    const state = getState();

    const x = {
      versions: [...state.versions, payload.version],
      versions_pristine: [...state.versions_pristine, payload.version]
    };
    console.log(x);
    patchState(x);
  }


  @Action(SetSelectedVersion)
  SetSelectedVersion({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: SetSelectedVersion) {
    const state = getState();
    /*SOME FUCKUP HERE*/
    state.selectedVersion = {
      ...(state.selectedVersion || {}),
      ...state.versions.find(version_temp => version_temp.id === payload.id)
    };
    patchState(state);
  }

  @Action(SetBotId)
  SetBotId({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: SetBotId) {
    let state = getState();
    /*SOME FUCKUP HERE*/
    state = {
      ...state,
      botId: payload.bot.id
    };
    patchState(state);
  }

  @Action(ResetVersionState)
  ResetVersionState({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>) {
    setState(codeInputState);
  }

  @Action(SaveVersion$)
  SaveVersion$({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: SaveVersion$) {
    let updatedVersion;
    return this.codeInputService.saveVersion(payload.bot, payload.version)
      .pipe(switchMap((updatedVersion1: IBotVersionData) => {
          updatedVersion = updatedVersion1;

          return this.store.dispatch([
            new SaveVersionSuccess({bot: payload.bot, version: updatedVersion}),
          ]);
        }),

        switchMap((payload_temp) => {

          return this.store.dispatch(
            [
              new SetDiff({version: updatedVersion}),
              new SetSelectedVersion({id: updatedVersion.id})
            ])
            ;
        }));
  }

  @Action(CreateForkedVersion$)
  CreateForkedVersion$({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: CreateForkedVersion$) {
    this.codeInputService.createNewVersion(payload.bot, payload.version)
      .pipe(tap((updatedVersion: IBotVersionData) => {
        this.store.dispatch([
          new AddForkedVersion({botId: payload.bot.id, version: updatedVersion}),
          new SetSelectedVersion({id: updatedVersion.id})/*TODO: SetSelectedVersion: see changeSelectedVersionHandler() in component */
        ]);
        this.utilityService.showSuccessToaster('New Version forked');
      }))
      .subscribe();
  }


  @Action(ValidateCodeText)
  validateCodeText({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: ValidateCodeText) {

    return this.codeInputService.validateCode$(payload.bot, payload.version)
      .pipe(tap(async (validationResult: ICodeVersionValidation) => {
        let errorMapItem = CodeInputService.initializeValidationItem();
        if (!CodeInputService.validationPassed(validationResult)) {
          errorMapItem = {...errorMapItem, ...validationResult};
        }
        this.store.dispatch(new SetErrorMap({validation: errorMapItem, id: payload.version.id}));
      }));
  }


  @Action(ValidateCode_flow$)
  ValidateCodeInit({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: ValidateCode_flow$) {
    const bot = payload.bot;
    const version_temp = payload.version;
    this.codeInputService.validateCode$(payload.bot, payload.version)
      .pipe(tap(async (validationResult: ICodeVersionValidation) => {

        if (CodeInputService.validationPassed(validationResult)) {
          this.store.dispatch([new SaveVersion$({bot, version: version_temp})]);
        } else {
          if (bot.active_version_id === version_temp.id) {
            this.codeInputService.showForkDialog()
              .then((data) => {
                if (data) {
                  this.codeInputService.openForkNewVersionModal();
                }
              });
          } else {
            const data = await this.codeInputService.showSaveWithErrorDialog();

            if (data) {
              // setTimeout(() => this.utilityService.showErrorToaster('Your code has error. But it will be saved as its not active'), 2000);
              this.store.dispatch([new SaveVersion$({bot, version: version_temp})]);
            }
          }
        }
        let validation = CodeInputService.initializeValidationItem();
        validation = {
          ...validation,
          ...validationResult
        };
        this.store.dispatch(new SetErrorMap({validation: validation, id: payload.version.id, }));
      }))
      .subscribe();
  }


  @Action(ValidateCode_flow_ActivateVersion$)
  validateCode_flow_ActivateVersion$({patchState, setState, getState, dispatch, }: StateContext<ICodeInputState>, {payload}: ValidateCode_flow_ActivateVersion$) {
    const bot = payload.bot;
    const version_temp = payload.version;
    this.codeInputService.validateCode$(payload.bot, payload.version)
      .pipe(tap(async (validationResult: ICodeVersionValidation) => {

        if (CodeInputService.validationPassed(validationResult)) {
          this.store.dispatch([new SaveVersion$({bot, version: version_temp})]);
          this.codeInputService.activateVersion(payload.bot, payload.version.id).subscribe(); /*TODO:1.use switch map 2. make an action for this*/
        } else {

          setTimeout(() => this.utilityService.showErrorToaster('Plase correct errors in code before activating it'));
        }
        let validation = CodeInputService.initializeValidationItem();
        validation = {
          ...validation,
          ...validationResult
        };
        this.store.dispatch(new SetErrorMap({validation: validation, id: payload.version.id, }));
      }))
      .subscribe();
  }
}
