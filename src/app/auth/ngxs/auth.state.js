"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var store_1 = require("@ngxs/store");
var auth_action_1 = require("./auth.action");
var initialState = {
    user: null
};
var AuthStateReducer = /** @class */ (function () {
    function AuthStateReducer(constantsService) {
        this.constantsService = constantsService;
    }
    AuthStateReducer.prototype.setUser = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        patchState({ user: payload.user });
        this.constantsService.setLoggedUser(payload.user);
    };
    AuthStateReducer.prototype.resetAuthToDefaultState = function (_a) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        patchState({ user: null });
    };
    __decorate([
        store_1.Action(auth_action_1.SetUserAction)
    ], AuthStateReducer.prototype, "setUser");
    __decorate([
        store_1.Action(auth_action_1.ResetAuthToDefaultState)
    ], AuthStateReducer.prototype, "resetAuthToDefaultState");
    AuthStateReducer = __decorate([
        store_1.State({
            name: 'loggeduser',
            defaults: initialState
        })
        //same as reducer
    ], AuthStateReducer);
    return AuthStateReducer;
}());
exports.AuthStateReducer = AuthStateReducer;
