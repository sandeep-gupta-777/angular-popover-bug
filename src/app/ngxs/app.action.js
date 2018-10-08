"use strict";
exports.__esModule = true;
var SetStateFromLocalStorageAction = /** @class */ (function () {
    function SetStateFromLocalStorageAction(payload) {
        this.payload = payload;
    }
    SetStateFromLocalStorageAction.type = '[app] set state from localstorage';
    return SetStateFromLocalStorageAction;
}());
exports.SetStateFromLocalStorageAction = SetStateFromLocalStorageAction;
var SetLastSateUpdatedTimeAction = /** @class */ (function () {
    function SetLastSateUpdatedTimeAction(payload) {
        this.payload = payload;
    }
    SetLastSateUpdatedTimeAction.type = '[app] set last state updated';
    return SetLastSateUpdatedTimeAction;
}());
exports.SetLastSateUpdatedTimeAction = SetLastSateUpdatedTimeAction;
var ResetStoreToDefault = /** @class */ (function () {
    function ResetStoreToDefault() {
    }
    ResetStoreToDefault.type = '[app] reset ResetStoreToDefault';
    return ResetStoreToDefault;
}());
exports.ResetStoreToDefault = ResetStoreToDefault;
var SetProgressValue = /** @class */ (function () {
    function SetProgressValue(payload) {
        this.payload = payload;
    }
    SetProgressValue.type = '[app] set SetProgressValue';
    return SetProgressValue;
}());
exports.SetProgressValue = SetProgressValue;
var SetMasterIntegrationsList = /** @class */ (function () {
    function SetMasterIntegrationsList(payload) {
        this.payload = payload;
    }
    SetMasterIntegrationsList.type = '[app] set SetMasterIntegrationsList';
    return SetMasterIntegrationsList;
}());
exports.SetMasterIntegrationsList = SetMasterIntegrationsList;
var SetMasterProfilePermissions = /** @class */ (function () {
    function SetMasterProfilePermissions(payload) {
        this.payload = payload;
    }
    SetMasterProfilePermissions.type = '[app] set SetProfilePermissions';
    return SetMasterProfilePermissions;
}());
exports.SetMasterProfilePermissions = SetMasterProfilePermissions;
var SetBackendURlRoot = /** @class */ (function () {
    function SetBackendURlRoot(payload) {
        this.payload = payload;
    }
    SetBackendURlRoot.type = '[app] set SetBackendURlRoot';
    return SetBackendURlRoot;
}());
exports.SetBackendURlRoot = SetBackendURlRoot;
var SetShowBackendURlRoot = /** @class */ (function () {
    function SetShowBackendURlRoot(payload) {
        this.payload = payload;
    }
    SetShowBackendURlRoot.type = '[app] set SetShowBackendURlRoot ';
    return SetShowBackendURlRoot;
}());
exports.SetShowBackendURlRoot = SetShowBackendURlRoot;
var SetEnterpriseNerData = /** @class */ (function () {
    function SetEnterpriseNerData(payload) {
        this.payload = payload;
    }
    SetEnterpriseNerData.type = '[app] set SetEnterpriseNERs';
    return SetEnterpriseNerData;
}());
exports.SetEnterpriseNerData = SetEnterpriseNerData;
var SetPipelineModuleMasterData = /** @class */ (function () {
    function SetPipelineModuleMasterData(payload) {
        this.payload = payload;
    }
    SetPipelineModuleMasterData.type = '[app] set SetPipelineModuleMasterData';
    return SetPipelineModuleMasterData;
}());
exports.SetPipelineModuleMasterData = SetPipelineModuleMasterData;
var ResetAppState = /** @class */ (function () {
    function ResetAppState() {
    }
    ResetAppState.type = '[app] set ReSetAppState';
    return ResetAppState;
}());
exports.ResetAppState = ResetAppState;
var SetAutoLogoutTime = /** @class */ (function () {
    function SetAutoLogoutTime(payload) {
        this.payload = payload;
    }
    SetAutoLogoutTime.type = '[app] set setAutoLogoutTime';
    return SetAutoLogoutTime;
}());
exports.SetAutoLogoutTime = SetAutoLogoutTime;
