"use strict";
exports.__esModule = true;
var SetCodeBasedBotListAction = /** @class */ (function () {
    function SetCodeBasedBotListAction(payload) {
        this.payload = payload;
    }
    SetCodeBasedBotListAction.type = '[view-bots] set code-based-timePeriod-list';
    return SetCodeBasedBotListAction;
}());
exports.SetCodeBasedBotListAction = SetCodeBasedBotListAction;
var SetAllBotListAction = /** @class */ (function () {
    function SetAllBotListAction(payload) {
        this.payload = payload;
    }
    SetAllBotListAction.type = '[view-bots] set SetAllBotListAction';
    return SetAllBotListAction;
}());
exports.SetAllBotListAction = SetAllBotListAction;
var AddNewBotInAllBotList = /** @class */ (function () {
    function AddNewBotInAllBotList(payload) {
        this.payload = payload;
    }
    AddNewBotInAllBotList.type = '[view-bots] set AddNewBotInAllBotList';
    return AddNewBotInAllBotList;
}());
exports.AddNewBotInAllBotList = AddNewBotInAllBotList;
var SetPipeLineBasedBotListAction = /** @class */ (function () {
    function SetPipeLineBasedBotListAction(payload) {
        this.payload = payload;
    }
    SetPipeLineBasedBotListAction.type = '[view-bots] set pipeline-based-list';
    return SetPipeLineBasedBotListAction;
}());
exports.SetPipeLineBasedBotListAction = SetPipeLineBasedBotListAction;
var ResetBotListAction = /** @class */ (function () {
    function ResetBotListAction() {
    }
    ResetBotListAction.type = '[view-bots] reset ResetBotListAction';
    return ResetBotListAction;
}());
exports.ResetBotListAction = ResetBotListAction;
var SaveVersionInfoInBot = /** @class */ (function () {
    function SaveVersionInfoInBot(payload) {
        this.payload = payload;
    }
    SaveVersionInfoInBot.type = '[build-bots] set version info in bot';
    return SaveVersionInfoInBot;
}());
exports.SaveVersionInfoInBot = SaveVersionInfoInBot;
var UpdateVersionInfoByIdInBot = /** @class */ (function () {
    function UpdateVersionInfoByIdInBot(payload) {
        this.payload = payload;
    }
    UpdateVersionInfoByIdInBot.type = '[build-bots] update version info in bot';
    return UpdateVersionInfoByIdInBot;
}());
exports.UpdateVersionInfoByIdInBot = UpdateVersionInfoByIdInBot;
var UpdateBotInfoByIdInBotInBotList = /** @class */ (function () {
    function UpdateBotInfoByIdInBotInBotList(payload) {
        this.payload = payload;
    }
    UpdateBotInfoByIdInBotInBotList.type = '[build-bots] set info in bot inj botlist';
    return UpdateBotInfoByIdInBotInBotList;
}());
exports.UpdateBotInfoByIdInBotInBotList = UpdateBotInfoByIdInBotInBotList;
