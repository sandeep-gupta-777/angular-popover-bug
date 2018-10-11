(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bot-detail-bot-detail-module~core-core-module"],{

/***/ "./src/app/core/bot-detail/bot-sessions/bot-sessions.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/bot-sessions.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sessions\">\r\n  <app-smart-table [data]=\"sessions\"\r\n                   [totalRecords]=\"totalSessionRecords\"\r\n                   (customActionEvents)=\"customActionEventsTriggeredInSessionsTable($event,reasonForDecryptionTemplate)\"\r\n                   (rowClicked$)=\"sessionTableRowClicked($event, sessionDetailTemplate, reasonForDecryptionTemplate)\"\r\n                   (pageChanged$)=\"loadSessionTableDataForGivenPage($event)\"\r\n                   [showSearchInDbButton]=\"true\"\r\n                   (refreshData$)=\"loadSmartTableSessionData()\"\r\n                   [showRefreshButton]=\"true\"\r\n                   (performSearchInDB$)=\"performSearchInDbForSession($event)\"\r\n                   [settings]=\"smartTableSettings_Sessions\"></app-smart-table>\r\n</div>\r\n\r\n\r\n<ng-template #sessionDetailTemplate>\r\n  <div class=\"row\" style=\"width: 100%\">\r\n    <div class=\"col-12\">\r\n      <app-session-detail-model\r\n        [session]=\"selectedRow_Session\"\r\n        [bot]=\"bot\"\r\n        (selectNextRow)=\"selectNextRow()\"\r\n        (closeModel$)=\"modalRef.hide()\"\r\n        (selectPrevRow)=\"selectPrevRow()\"\r\n        [pageNumberOfCurrentRowSelected]=\"pageNumberOfCurrentRowSelected\"\r\n        [indexOfCurrentRowSelected]=\"indexOfCurrentRowSelected\"\r\n        [finalDfState]=\"selectedRow_Session.df_state\"\r\n        [sessionDataStore]=\"selectedRow_Session.data_store\">\r\n      </app-session-detail-model>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<!---->\r\n<ng-template #reasonForDecryptionTemplate>\r\n  <div class=\"primary-modal\">\r\n    <div class=\"top-dec\"></div>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title mb-2\" style=\"display: flex;justify-content: start;\">Reason for decryption</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body pt-0\">\r\n     <form #form=\"ngForm\">\r\n       <div class=\"text-center my-1\">\r\n         <label for=\"\" class=\"mr-1\">Reason</label>\r\n         <input type=\"text\" required style=\"border-radius: 0px !important;\" [(ngModel)] = \"decryptReason\" name=\"decryptReason\">\r\n       </div>\r\n       <button [disabled]=\"!form.valid\" class=\" btn btn-theme-success-sm\" (click)=\"decryptSubmit(sessionItemToBeDecrypted.id);modalRef.hide()\">Submit</button>\r\n     </form>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-sessions/bot-sessions.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/bot-sessions.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n  .danger-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #b14250; }\n  .danger-modal .modal-header {\n    color: #474747; }\n  .danger-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n  .danger-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n  .primary-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n  .primary-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #00abd3; }\n  .primary-modal .modal-header {\n    color: #474747; }\n  .primary-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n  .primary-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-sessions/bot-sessions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/bot-sessions.component.ts ***!
  \************************************************************************/
/*! exports provided: BotSessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotSessionsComponent", function() { return BotSessionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../smart-table/smart-table.component */ "./src/app/smart-table/smart-table.component.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BotSessionsComponent = /** @class */ (function () {
    function BotSessionsComponent(serverService, utilityService, constantsService, store, modalService) {
        this.serverService = serverService;
        this.utilityService = utilityService;
        this.constantsService = constantsService;
        this.store = store;
        this.modalService = modalService;
        this.test = 'asdasdsd';
        this.smartTableSettings_Sessions = this.constantsService.SMART_TABLE_SESSIONS_SETTING;
        this.selectedRow_number = 0;
        this.totalSessionRecords = 0;
        this.pageNumberOfCurrentRowSelected = 1;
    }
    BotSessionsComponent.prototype.ngOnInit = function () {
        this.loadSmartTableSessionData();
        // this.loadSessionTableDataForGivenPage(1);
        // this.sessions$ = this.serverService.makeGetReq<ISessions>({ url: this.url, headerData: { 'bot-access-token': this.bot.bot_access_token } });
        // this.sessions$
        //   .map((value) => {
        //     return {
        //       ...value,
        //       objects: value.objects.map((result) => {
        //         let modified_update_at = (new Date(result.updated_at)).toDateString();
        //         return { ...result, updated_at: modified_update_at };
        //       })
        //     };
        //   })
        //   .subscribe((value) => {
        //     if (!value) return;
        //     this.totalSessionRecords = value.meta.total_count;
        //     this.sessions = value.objects;
        //   });
    };
    /*todo: implement it better way*/
    BotSessionsComponent.prototype.refreshSession = function () {
        var _this = this;
        this.url = this.constantsService.getBotSessionsUrl(10, 0);
        this.refreshSessions$ = this.serverService.makeGetReq({ url: this.url });
        this.refreshSessions$.subscribe(function (value) {
            _this.sessions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
        });
    };
    BotSessionsComponent.prototype.loadSmartTableSessionData = function () {
        this.loadSessionTableDataForGivenPage(this.pageNumberOfCurrentRowSelected);
        // this.sessions$ = this.serverService.makeGetReq<ISessions>({ url: this.url, headerData: { 'bot-access-token': this.bot.bot_access_token } });
        // this.sessions$
        //   .map((value) => {
        //     return {
        //       ...value,
        //       objects: value.objects.map((result) => {
        //         let modified_update_at = (new Date(result.updated_at)).toDateString();
        //         return { ...result, updated_at: modified_update_at };
        //       })
        //     };
        //   })
        //   .subscribe((value) => {
        //     if (!value) return;
        //     this.totalSessionRecords = value.meta.total_count;
        //     this.sessions = value.objects;
        //   });
    };
    BotSessionsComponent.prototype.sessionTableRowClicked = function (eventData, template, reasonForDecryptionTemplate) {
        var _this = this;
        var isEncrypted;
        /*
          * TODO: there is a data_encrypted key it the row itself. Can we use it?
        * Why do we need to go fetch first message to see if its decrypted or not?
        * */
        if (eventData.data.data_encrypted) {
            // this.sessionItemToBeDecrypted = eventData.data;
            // this.openSessionRowDecryptModal(reasonForDecryptionTemplate);
            this.openSessionRowDecryptModal(this.reasonForDecryptionTemplate, eventData.data);
        }
        else {
            this.loadSessionMessagesById(eventData.data.id)
                .subscribe(function (value) {
                _this.selectedRow_Session = _this.sessions.find(function (session) { return session.id === eventData.data.id; });
                // (<any>this.selectedRow_Session).highlight = true;
                if (_this.indexOfCurrentRowSelected !== undefined)
                    _this.sessions[_this.indexOfCurrentRowSelected].highlight = false;
                _this.indexOfCurrentRowSelected = _this.sessions.findIndex(function (session) {
                    return _this.selectedRow_Session.id === session.id;
                });
                _this.sessions[_this.indexOfCurrentRowSelected].highlight = true;
                // this.openModal(template);
                _this.openModal(_this.sessionDetailTemplate);
            });
        }
    };
    BotSessionsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-xlg' });
    };
    BotSessionsComponent.prototype.loadSessionTableDataForGivenPage = function (pageNumber) {
        var _this = this;
        this.pageNumberOfCurrentRowSelected = pageNumber;
        this.url = this.constantsService.getBotSessionsUrl(10, (pageNumber - 1) * 10);
        var headerData = {
            'bot-access-token': this.bot.bot_access_token
        };
        this.serverService.makeGetReq({ url: this.url, headerData: headerData })
            .subscribe(function (value) {
            _this.totalSessionRecords = value.meta.total_count;
            _this.selectedRow_Session = value.objects[_this.selectedRow_number || 0];
            _this.sessions = value.objects;
            // if (this.indexOfCurrentRowSelected !== undefined && this.sessions[this.indexOfCurrentRowSelected].isEncrypted === false) {
            //   this.sessions[this.indexOfCurrentRowSelected].highlight = true;
            // } else {
            //   try {
            //     this.modalRef.hide();
            //   } catch (e) {
            //     console.error(e);
            //   }
            //   // this.sessionTableRowClicked({data: this.sessions[this.indexOfCurrentRowSelected]});
            // }
        });
    };
    BotSessionsComponent.prototype.selectNextRow = function () {
        var _this = this;
        // this.selectedRow_Session
        var newSelectedRow_Session; // = {...this.selectedRow_Session};
        if (this.indexOfCurrentRowSelected !== undefined)
            this.sessions[this.indexOfCurrentRowSelected].highlight = false;
        var currentIndex = this.sessions.findIndex(function (session) {
            // return this.selectedRow_Session.id === session.id;
            return _this.selectedRow_Session.id === session.id;
        });
        if (currentIndex <= this.sessions.length - 2) {
            newSelectedRow_Session = this.sessions[++currentIndex];
            this.indexOfCurrentRowSelected = currentIndex;
            this.sessions[this.indexOfCurrentRowSelected].highlight = true;
            if (newSelectedRow_Session.data_encrypted) {
                // this.customActionEventsTriggeredInSessionsTable({data:selectedRow_SessionClone,action:'decrypt',source:null});
                this.preOpenDecryptionModal();
            }
            else {
                this.selectedRow_Session = newSelectedRow_Session;
            }
        }
        else {
            this.smartTableComponent.goToNextPage();
            this.selectedRow_number = 0;
            this.indexOfCurrentRowSelected = 0;
        }
        // if (this.indexOfCurrentRowSelected !== undefined)
        //   this.sessions[this.indexOfCurrentRowSelected].highlight = true;
    };
    BotSessionsComponent.prototype.preOpenDecryptionModal = function () {
        this.modalRef.hide();
        var sessionToBeDecrypted = this.sessions[this.indexOfCurrentRowSelected];
        this.openSessionRowDecryptModal(this.reasonForDecryptionTemplate, sessionToBeDecrypted);
        return;
    };
    BotSessionsComponent.prototype.selectPrevRow = function () {
        var _this = this;
        if (this.indexOfCurrentRowSelected !== undefined)
            this.sessions[this.indexOfCurrentRowSelected].highlight = false;
        var currentIndex = this.sessions.findIndex(function (session) {
            return _this.selectedRow_Session.id === session.id;
        });
        this.indexOfCurrentRowSelected = currentIndex;
        var newSelectedRow_Session;
        if (currentIndex >= 1) {
            newSelectedRow_Session = this.sessions[--currentIndex];
            this.indexOfCurrentRowSelected = currentIndex;
            this.sessions[this.indexOfCurrentRowSelected].highlight = true;
            if (newSelectedRow_Session.data_encrypted) {
                // this.customActionEventsTriggeredInSessionsTable({data:selectedRow_SessionClone,action:'decrypt',source:null});
                this.preOpenDecryptionModal();
            }
            else {
                this.selectedRow_Session = newSelectedRow_Session;
            }
        }
        else {
            this.smartTableComponent.goToPrevPage();
            this.selectedRow_number = 9;
            this.indexOfCurrentRowSelected = 9;
        }
        if (this.indexOfCurrentRowSelected !== undefined)
            this.sessions[this.indexOfCurrentRowSelected].highlight = true;
    };
    BotSessionsComponent.prototype.customActionEventsTriggeredInSessionsTable = function (data, Primarytemplate) {
        var _this = this;
        if (data.action === 'download') {
            /*download the conversation for the record*/
            this.loadSessionMessagesById(data.data.id)
                .subscribe(function (value) {
                var dataToDownload = value.objects;
                if (dataToDownload.length === 0) {
                    dataToDownload = [{ name: 'No Data' }];
                    _this.utilityService.downloadArrayAsCSV(dataToDownload, { name: 'No Data' });
                }
                else {
                    _this.utilityService.downloadArrayAsCSV(dataToDownload);
                }
            });
        }
        if (data.action === 'decrypt') {
            /*use dcrypt api*/
            var sessionItemToBeDecrypted = data.data;
            this.openSessionRowDecryptModal(Primarytemplate, sessionItemToBeDecrypted);
        }
    };
    BotSessionsComponent.prototype.decryptSubmit = function (sessionTobeDecryptedId) {
        var _this = this;
        var headerData = {
            'bot-access-token': this.bot.bot_access_token
        };
        var body = { 'room_id': sessionTobeDecryptedId, 'decrypt_audit_type': 'room', 'message': this.decryptReason };
        var url = this.constantsService.getDecryptUrl();
        this.serverService.makePostReq({ headerData: headerData, body: body, url: url })
            .subscribe(function () {
            _this.decryptReason = null;
            var surl = _this.constantsService.getSessionsByIdUrl(sessionTobeDecryptedId);
            _this.serverService.makeGetReq({ url: surl, headerData: headerData })
                .subscribe(function (newSession) {
                var del = _this.sessions.findIndex(function (session) { return session.id === sessionTobeDecryptedId; });
                _this.sessions[del] = __assign({}, newSession);
                _this.sessions = _this.sessions.slice();
            });
        });
    };
    BotSessionsComponent.prototype.openSessionRowDecryptModal = function (template, sessionToBeDecrypted) {
        this.sessionItemToBeDecrypted = sessionToBeDecrypted;
        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    };
    BotSessionsComponent.prototype.loadSessionMessagesById = function (id) {
        this.url = this.constantsService.getSessionsMessageUrl(id);
        return this.serverService.makeGetReq({
            url: this.url,
            headerData: { 'bot-access-token': this.bot.bot_access_token }
        });
    };
    BotSessionsComponent.prototype.loadSessionById = function (id) {
        // this.url = this.constantsService.getSessionsMessageUrl(id);
        this.url = this.constantsService.getSessionsByIdUrl(id);
        return this.serverService.makeGetReq({
            url: this.url,
            headerData: { 'bot-access-token': this.bot.bot_access_token }
        });
    };
    BotSessionsComponent.prototype.performSearchInDbForSession = function (data) {
        var _this = this;
        this.loadSessionById(data['Room ID'])
            .subscribe(function (session) {
            _this.sessions.push(session);
            _this.sessions = _this.sessions.slice();
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(function (state) { return state.botlist.codeBasedBotList; }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BotSessionsComponent.prototype, "codeBasedBotList$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BotSessionsComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BotSessionsComponent.prototype, "bot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_6__["SmartTableComponent"]),
        __metadata("design:type", _smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_6__["SmartTableComponent"])
    ], BotSessionsComponent.prototype, "smartTableComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reasonForDecryptionTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], BotSessionsComponent.prototype, "reasonForDecryptionTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sessionDetailTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], BotSessionsComponent.prototype, "sessionDetailTemplate", void 0);
    BotSessionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bot-sessions',
            template: __webpack_require__(/*! ./bot-sessions.component.html */ "./src/app/core/bot-detail/bot-sessions/bot-sessions.component.html"),
            styles: [__webpack_require__(/*! ./bot-sessions.component.scss */ "./src/app/core/bot-detail/bot-sessions/bot-sessions.component.scss")]
        }),
        __metadata("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
    ], BotSessionsComponent);
    return BotSessionsComponent;
}());



/***/ }),

/***/ "./src/app/object-array-crud.service.ts":
/*!**********************************************!*\
  !*** ./src/app/object-array-crud.service.ts ***!
  \**********************************************/
/*! exports provided: ObjectArrayCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectArrayCrudService", function() { return ObjectArrayCrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ObjectArrayCrudService = /** @class */ (function () {
    function ObjectArrayCrudService() {
    }
    // removeItemById(array:IAIModule[], id:string):IAIModule[]{
    //   if(!array || !id ) return;
    //   for(let i=0;i<array.length;++i){
    //     if(array[i].id == id ){
    //       array.splice(i,1);
    //     }
    //   }
    // }
    // pushUniqueById(array:IAIModule[], obj:IAIModule):IAIModule[]{
    //   if(!array || !obj || !obj.id ) return;
    //
    //   let objId = obj.id;
    //   for(let i=0;i<array.length;++i){
    //     if(array[i].id === obj ){
    //       return;
    //     }
    //   }
    //   array.push(obj);
    //   return array;
    // }
    ObjectArrayCrudService.prototype.getObjectItemByKeyValuePair = function (array, obj) {
        var key = Object.keys(obj)[0];
        var value = obj[key];
        var x = array.find(function (item) {
            return item[key] === value;
        });
        return x;
    };
    ObjectArrayCrudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ObjectArrayCrudService);
    return ObjectArrayCrudService;
}());



/***/ })

}]);
//# sourceMappingURL=bot-detail-bot-detail-module~core-core-module.js.map