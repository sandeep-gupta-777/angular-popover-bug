"use strict";
exports.__esModule = true;
var SetUserAction = /** @class */ (function () {
    function SetUserAction(payload) {
        this.payload = payload;
    }
    SetUserAction.type = '[login] set user';
    return SetUserAction;
}());
exports.SetUserAction = SetUserAction;
var ResetAuthToDefaultState = /** @class */ (function () {
    function ResetAuthToDefaultState() {
    }
    ResetAuthToDefaultState.type = '[login] reset user';
    return ResetAuthToDefaultState;
}());
exports.ResetAuthToDefaultState = ResetAuthToDefaultState;
