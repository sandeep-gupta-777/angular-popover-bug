"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var store_1 = require("@ngxs/store");
var app_action_1 = require("./app.action");
var appDefaultState = {
    lastUpdated: 0,
    progressbar: {
        show: false,
        loading: false,
        value: 0
    },
    masterIntegrationList: null,
    masterProfilePermissions: null,
    backendUrlRoot: 'http://staging.imibot.ai/',
    showBackendUrlRootButton: false,
    enterpriseNerData: [],
    masterPipelineItems: null,
    autoLogoutTime: Date.now() + 3600 * 1000
};
;
var AppStateReducer = /** @class */ (function () {
    function AppStateReducer(constantsService, store) {
        this.constantsService = constantsService;
        this.store = store;
    }
    AppStateReducer.prototype.setUsername = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        console.log('resetting state', getState());
    };
    // @Action(ResetStoreToDefault)
    // resetStoreToDefault({patchState, setState, getState, dispatch,}: StateContext<any>) {
    //   this.store.reset(appDefaultState);
    //   console.log('resetting state', getState());
    // }
    AppStateReducer.prototype.SetProgressValue = function (_a, payload) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        // this.store.reset(appDefaultState);
        // console.log('resetting state', getState());
        patchState({ progressbar: payload.payload.progressbar });
    };
    AppStateReducer.prototype.setMasterIntegrationsList = function (_a, payload) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        patchState({ masterIntegrationList: payload.payload.masterIntegrationList });
    };
    AppStateReducer.prototype.setMasterProfilePermissions = function (_a, payload) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        patchState({ masterProfilePermissions: payload.payload.masterProfilePermissions });
    };
    AppStateReducer.prototype.setBackendURlRoot = function (_a, payload) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        patchState({ backendUrlRoot: payload.payload.url });
    };
    AppStateReducer.prototype.setShowBackendURlRoot = function (_a, payload) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        patchState({ showBackendUrlRootButton: payload.payload.showBackendURlRoot });
    };
    AppStateReducer.prototype.setEnterpriseNerData = function (_a, payload) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        patchState({ enterpriseNerData: payload.payload.enterpriseNerData });
    };
    AppStateReducer.prototype.setPipelineModuleMasterData = function (_a, payload) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        patchState({ masterPipelineItems: payload.payload.masterPipelineItems });
    };
    AppStateReducer.prototype.setAutoLogoutTime = function (_a, payload) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        patchState({ autoLogoutTime: payload.payload.time });
    };
    AppStateReducer.prototype.resetAppState = function (_a, payload) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        patchState(appDefaultState);
    };
    __decorate([
        store_1.Action(app_action_1.SetStateFromLocalStorageAction)
    ], AppStateReducer.prototype, "setUsername");
    __decorate([
        store_1.Action(app_action_1.SetProgressValue)
    ], AppStateReducer.prototype, "SetProgressValue");
    __decorate([
        store_1.Action(app_action_1.SetMasterIntegrationsList)
    ], AppStateReducer.prototype, "setMasterIntegrationsList");
    __decorate([
        store_1.Action(app_action_1.SetMasterProfilePermissions)
    ], AppStateReducer.prototype, "setMasterProfilePermissions");
    __decorate([
        store_1.Action(app_action_1.SetBackendURlRoot)
    ], AppStateReducer.prototype, "setBackendURlRoot");
    __decorate([
        store_1.Action(app_action_1.SetShowBackendURlRoot)
    ], AppStateReducer.prototype, "setShowBackendURlRoot");
    __decorate([
        store_1.Action(app_action_1.SetEnterpriseNerData)
    ], AppStateReducer.prototype, "setEnterpriseNerData");
    __decorate([
        store_1.Action(app_action_1.SetPipelineModuleMasterData)
    ], AppStateReducer.prototype, "setPipelineModuleMasterData");
    __decorate([
        store_1.Action(app_action_1.SetAutoLogoutTime)
    ], AppStateReducer.prototype, "setAutoLogoutTime");
    __decorate([
        store_1.Action(app_action_1.ResetAppState)
    ], AppStateReducer.prototype, "resetAppState");
    AppStateReducer = __decorate([
        store_1.State({
            name: 'app',
            defaults: appDefaultState
        }) //same as reducer
    ], AppStateReducer);
    return AppStateReducer;
}());
exports.AppStateReducer = AppStateReducer;
