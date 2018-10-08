(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bot-detail-bot-detail-module"],{

/***/ "./src/app/core/bot-detail/bot-detail-header/bot-detail-header.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-detail-header/bot-detail-header.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p>{{bot|json}}</p>-->\r\n\r\n<div class=\"row-bot-detail-header d-flex align-items-center my-1\">\r\n  <img style=\"width: 32px;height: 32px\" class=\"rounded-circle\" [src]=\"bot.logo\" alt=\"\">\r\n  <div class=\"name\">\r\n    <div class=\"heading mb-0\">{{bot.name}}</div>\r\n  </div>\r\n  <i class=\"fa fa-users\" *ngIf=\"bot && bot.is_manager\" style=\"font-size: 16px\"></i>\r\n  <div class=\"d-flex align-items-center\">\r\n    <i class=\"fa fa-circle dark-green\"></i>\r\n    <div>Active(v{{bot.active_version.version}})</div>\r\n  </div>\r\n  <div class=\"text-theme-normal mr-3\">\r\n    <span class=\"text-muted\">Created by :</span>{{bot.created_by}} <span class=\"text-muted\">on</span>{{bot.created_at|date}}\r\n  </div>\r\n  <div class=\"text-theme-normal \">\r\n    <span class=\"text-muted\">Last Updated By :</span>{{bot.updated_by}} <span class=\"text-muted\">on</span>{{bot.updated_at|date}}\r\n  </div>\r\n  <!--<div class=\"active-button px-1 border-right d-flex justify-content-center align-items-center\">-->\r\n  <!--Active({{bot.active_version_id}})-->\r\n  <!--</div>-->\r\n  <div class=\"ml-auto\"></div>\r\n  <!--<img *ngFor=\"let keys of myObject.keys(bot.integrations)\" style=\"width: 28px;height: 28px\"-->\r\n  <!--src=\"http://www.pngmart.com/files/3/Weather-PNG-HD.png\" alt=\"\">-->\r\n\r\n  <!--<img *ngFor=\"let integrationsMasterListItem of ((bot.integrations|integrationLogos|async))\"-->\r\n  <!--[src]=\"integrationsMasterListItem?.icon\"-->\r\n  <!--class=\"logo-image\"-->\r\n  <!--style=\"width: 18px;height: 18px\"-->\r\n  <!--alt=\"\">-->\r\n\r\n\r\n  <span *myIf=\"myETabNames.integration_icons\">\r\n    <img *ngFor=\"let integrationsMasterListItem of ((bot.integrations|integrationLogos:'only_channel'|async))\" [src]=\"integrationsMasterListItem?.icon\"\r\n      class=\"logo-image \" style=\"width: 16px;height: 16px\" alt=\"\">\r\n    <img id=\"id\" *ngFor=\"let integrationsMasterListItem of ((bot.integrations|integrationLogos:'no_channel'|async))\"\r\n      [src]=\"integrationsMasterListItem?.icon\" class=\"logo-image \" style=\"width: 16px;height: 16px\" alt=\"\">\r\n  </span>\r\n  <span *ngIf=\"myObject.keys(bot.integrations).length>4\" class=\"more\">\r\n    +{{myObject.keys(bot.integrations).length-4}} More\r\n  </span>\r\n  <div class=\"headerDivider mx-2\"></div>\r\n  <div class=\"d-flex preview-box align-items-center\" (click)=\"openBot()\" *ngIf=\"bot.bot_type === 'chatbot'\">\r\n    <i class=\"fa fa-comment-o cursor-pointer\" style=\"font-size: 15px\"></i>\r\n    <span class=\"action\">Preview</span>\r\n  </div>\r\n  <div class=\"d-flex preview-box align-items-center\" (click)=\"refreshBotDetails()\" *myIf=\"myETabNames.update_bot_button\">\r\n    <i class=\"fa fa-refresh cursor-pointer\" style=\"font-size: 15px\" [ngClass]=\"{'fa-spin':showSpinIcon}\"></i>\r\n    <span class=\"action\">Cancel</span>\r\n    <!---->\r\n  </div>\r\n  <button class=\"btn btn-theme-primary\" (click)=\"openActiveBotChangedModal(activeVersionChangedTemplate)\" *myIf=\"myETabNames.update_bot_button\">Update Bot</button>\r\n  <div class=\"btn-group p-2\" dropdown placement=\"top left\" *myIf=\"myETabNames.bot_header_ellipsis\">\r\n    <i dropdownToggle class=\"fa fa-ellipsis-v cursor-pointer p-1\" style=\"font-size: 20px\"></i>\r\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n      <li role=\"menuitem\">\r\n        <a class=\"dropdown-item cursor-pointer\" (click)=\"utilityService.copyToClipboard(bot.bot_access_token)\">Copy\r\n          Access Token</a>\r\n      </li>\r\n      <li role=\"menuitem\">\r\n        <a class=\"dropdown-item cursor-pointer\" (click)=\"utilityService.copyToClipboard(bot.enterprise_id)\">Copy\r\n          Enterprise ID</a>\r\n      </li>\r\n      <!--<li role=\"menuitem\">-->\r\n      <!--<a class=\"dropdown-item\">Make Bot Active</a>-->\r\n      <!--</li>-->\r\n      <li role=\"menuitem\" *myIf=\"myETabNames.delete_bot\">\r\n        <a class=\"dropdown-item cursor-pointer\" (click)=\"openModal(template)\">Delete</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- <ng-template #template>\r\n  <div class=\"modal-header bg-danger\">\r\n    <h4 class=\"modal-title heading pull-left text-white\">Delete: <strong>{{bot.name }}</strong> ?</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\" class=\"text-white\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-white text-dark\">\r\n    <p class=\"mb-3\">Do you confirm the Deletion? This is a permanent and irreversible change</p>\r\n    <button class=\"btn btn-theme-secondary-outline mr-2\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button class=\"btn btn-theme-danger\" (click)=\"deleteBot()\">Delete</button>\r\n  </div>\r\n</ng-template> -->\r\n\r\n<ng-template #template>\r\n  <div class=\"danger-modal center-modal\">\r\n    <div class=\"top-dec\"></div>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title mb-2\" style=\"display: flex;justify-content: start;\">Delete bot&nbsp;{{ bot.name}}&nbsp;\r\n        ?</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body pt-0\">\r\n      <form #form=\"ngForm\">\r\n        <div class=\"text-center my-1\">\r\n          <p class=\"mb-3\">Do you confirm the Deletion? This is a permanent and irreversible change</p>\r\n\r\n        </div>\r\n        <button class=\"btn btn-theme-secondary-outline mr-2\" (click)=\"modalRef.hide()\">Cancel</button>\r\n        <button class=\" btn btn-theme-danger\" (click)=\"deleteBot()\">Delete</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #activeVersionChangedTemplate>\r\n  <div class=\"danger-modal\">\r\n    <div class=\"top-dec\"></div>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title mb-2\" style=\"display: flex;justify-content: start;\">Active version changed</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body pt-0\">\r\n      <form #form=\"ngForm\">\r\n        <div class=\"text-center my-1\">\r\n          <p class=\"mb-3\">If you update the bot your currently selected version will be the new Active version.</p>\r\n\r\n        </div>\r\n        <button class=\"btn btn-theme-secondary-outline mr-2\" (click)=\"modalRef.hide()\">Cancel</button>\r\n        <button class=\" btn btn-theme-danger\" (click)=\"updateBot()\">Update</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-detail-header/bot-detail-header.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-detail-header/bot-detail-header.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n  .danger-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #b14250; }\n  .danger-modal .modal-header {\n    color: #474747; }\n  .danger-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n  .danger-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n  .row-bot-detail-header {\n  height: 40px; }\n  .row-bot-detail-header *:not(.fa) {\n    font-size: 11px;\n    line-height: 1.45;\n    font-weight: 400;\n    color: black;\n    font-family: \"Helvetica\", sans-serif; }\n  .row-bot-detail-header *:not(.fa) strong {\n      font-weight: bold;\n      color: #474747 !important; }\n  .row-bot-detail-header .fa-undo {\n    color: #00abd3 !important; }\n  .row-bot-detail-header * {\n    margin-right: 5px; }\n  .row-bot-detail-header .name div {\n    color: #474747;\n    font-weight: bold; }\n  .row-bot-detail-header strong {\n    color: #4a4a4a !important; }\n  .row-bot-detail-header .active-button {\n    height: 24px;\n    border-radius: 2px;\n    background-color: #509005;\n    font-size: 11px;\n    line-height: 1.45;\n    font-weight: 300;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif;\n    color: white; }\n  .row-bot-detail-header .fa:not(.fa-circle) {\n    color: #9b9b9b; }\n  .row-bot-detail-header .dark-green {\n    color: #8cd82f; }\n  .row-bot-detail-header .more {\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #00abd3;\n    font-family: \"Helvetica\", sans-serif; }\n  .row-bot-detail-header .headerDivider {\n    border-left: 1px solid #9e9e9e;\n    height: 85%; }\n  .logo-image {\n  margin-right: 2px;\n  margin-left: 2px; }\n  .dropdown-menu {\n  left: -100px !important; }\n  .dropdown-menu > li > .dropdown-item {\n    font-size: 13px; }\n  .preview-box {\n  cursor: pointer; }\n  .preview-box * {\n    color: #00abd3 !important; }\n  .preview-box .action {\n    font-size: 13px; }\n  .no-channel-integrations:first-child {\n  border-left: 1px solid #e0e0e0;\n  padding-left: 4px;\n  width: 20px !important; }\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-detail-header/bot-detail-header.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-detail-header/bot-detail-header.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BotDetailHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotDetailHeaderComponent", function() { return BotDetailHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chat/ngxs/chat.action */ "./src/app/chat/ngxs/chat.action.ts");
/* harmony import */ var _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../interfaces/chat-session-state */ "./src/interfaces/chat-session-state.ts");
/* harmony import */ var _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../view-bots/ngxs/view-bot.action */ "./src/app/core/view-bots/ngxs/view-bot.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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











var BotDetailHeaderComponent = /** @class */ (function () {
    function BotDetailHeaderComponent(store, serverService, router, utilityService, modalService, constantsService) {
        this.store = store;
        this.serverService = serverService;
        this.router = router;
        this.utilityService = utilityService;
        this.modalService = modalService;
        this.constantsService = constantsService;
        this.myObject = Object;
        this.myETabNames = _constants_service__WEBPACK_IMPORTED_MODULE_3__["ETabNames"];
        this.showSpinIcon = false;
        this.refreshBotDetails$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BotDetailHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggeduserenterpriseinfo$.subscribe(function (enterpriseProfileInfo) {
            _this.enterprise_unique_name = enterpriseProfileInfo.enterprise_unique_name;
        });
    };
    BotDetailHeaderComponent.prototype.openBot = function () {
        this.store.dispatch([
            new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_6__["SetCurrentBotDetailsAndResetChatStateIfBotMismatch"]({
                bot: __assign({}, this.bot, { enterprise_unique_name: this.enterprise_unique_name })
            }),
            new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_6__["ToggleChatWindow"]({ open: true }),
            new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_6__["ChangeFrameAction"]({ frameEnabled: _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_7__["EChatFrame"].WELCOME_BOX })
        ]);
        // this.store.dispatch([
        //   // new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        //   //   bot:this.bot
        //   // }),
        //   new ToggleChatWindow({open: true}),
        //   // new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX})
        // ]).subscribe(()=>{
        //   this.router.navigate(['/core/botdetail/chatbot/',this.bot.id], {
        //     queryParams: {preview: true, bot_unique_name: this.bot.bot_unique_name, enterprise_unique_name: this.enterprise_unique_name}
        //   });
        // })
    };
    BotDetailHeaderComponent.prototype.updateBot = function () {
        var _this = this;
        try {
            this.modalRef.hide();
        }
        catch (e) {
            console.log(e);
        }
        this.bot.active_version_id = this.bot.store_selected_version;
        var bot = this.utilityService.performFormValidationBeforeSaving(this.bot);
        if (!bot)
            return;
        var url = this.constantsService.updateBotUrl(this.bot.id);
        var headerData = {
            'bot-access-token': this.bot.bot_access_token
        };
        if (this.bot.store_selected_version && this.bot.store_selected_version !== this.bot.active_version_id) {
            if (!confirm('active version has been changed'))
                return;
            this.bot.active_version_id = this.bot.store_selected_version;
        }
        var body = this.constantsService.updateBotSerializer(this.bot);
        if (!body.logo) {
            body.logo = 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png';
        }
        this.serverService.makePutReq({ url: url, body: body, headerData: headerData })
            .subscribe(function (updatedBot) {
            _this.store.dispatch([
                new _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_8__["UpdateBotInfoByIdInBotInBotList"]({ botId: _this.bot.id, data: updatedBot })
            ]);
            _this.utilityService.showSuccessToaster('Bot updated');
        });
    };
    BotDetailHeaderComponent.prototype.refreshBotDetails = function () {
        var _this = this;
        this.showSpinIcon = true;
        setTimeout(function () {
            _this.showSpinIcon = false;
        }, 2000);
        this.refreshBotDetails$.emit();
    };
    BotDetailHeaderComponent.prototype.deleteBot = function () {
        var _this = this;
        this.modalRef.hide();
        var url = this.constantsService.getDeleteBotUrl(this.bot.id);
        var headerData = {
            'bot-access-token': this.bot.bot_access_token
        };
        this.serverService.makeDeleteReq({ url: url, headerData: headerData })
            .subscribe(function (value) {
            _this.serverService.getNSetBotList()
                .subscribe(function () {
                _this.router.navigate(['']);
                _this.utilityService.showSuccessToaster('Bot deleted');
            });
        });
    };
    BotDetailHeaderComponent.prototype.openActiveBotChangedModal = function (template) {
        if (this.bot.store_selected_version && this.bot.store_selected_version !== this.bot.active_version_id) {
            // if (!confirm('active version has been changed')) return;
            this.modalRef = this.modalService.show(template, { class: 'center-modal' });
        }
        else {
            this.updateBot();
        }
    };
    BotDetailHeaderComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'center-modal' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BotDetailHeaderComponent.prototype, "bot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BotDetailHeaderComponent.prototype, "refreshBotDetails$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"])
    ], BotDetailHeaderComponent.prototype, "loggeduserenterpriseinfo$", void 0);
    BotDetailHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bot-detail-header',
            template: __webpack_require__(/*! ./bot-detail-header.component.html */ "./src/app/core/bot-detail/bot-detail-header/bot-detail-header.component.html"),
            styles: [__webpack_require__(/*! ./bot-detail-header.component.scss */ "./src/app/core/bot-detail/bot-detail-header/bot-detail-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]])
    ], BotDetailHeaderComponent);
    return BotDetailHeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/bot-detail-wrapper.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-detail-wrapper.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<router-outlet></router-outlet>\r\n<!--<app-code-based-bot-detail></app-code-based-bot-detail>-->\r\n<!--<app-pipeline-based-bot-detail></app-pipeline-based-bot-detail>-->\r\n\r\n<!-- <input type=\"text\" [(ngModal)] = \"decryptReason\"> -->\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-detail-wrapper.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-detail-wrapper.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/bot-detail/bot-detail-wrapper.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-detail-wrapper.component.ts ***!
  \*****************************************************************/
/*! exports provided: BotDetailWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotDetailWrapperComponent", function() { return BotDetailWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server.service */ "./src/app/server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BotDetailWrapperComponent = /** @class */ (function () {
    // @Select() botlist$: Observable<ViewBotStateModel>;
    function BotDetailWrapperComponent(activatedRoute, constantsService, serverService, store) {
        this.activatedRoute = activatedRoute;
        this.constantsService = constantsService;
        this.serverService = serverService;
        this.store = store;
    }
    BotDetailWrapperComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        /*
        *THE WHOLE THINGS IS REQUIRED BECAUSE OF CYCLE
        *https://stackoverflow.com/questions/52245779/how-to-avoid-loops-in-ngrx-or-ngxs
        * */
        // let botIdStr = this.activatedRoute.snapshot.firstChild.paramMap.get('id');
        // if(botIdStr){
        //   this.botlist$.pipe(first()).subscribe((viewBotStateModel:ViewBotStateModel)=>{
        //     let bot = viewBotStateModel.allBotList.find(bot=>bot.id === Number(botIdStr));
        //     let url = this.constantsService.getSpecificBotByBotTokenUrl();
        //     let headerData:IHeaderData = {
        //       "bot-access-token": bot.bot_access_token
        //     };
        //     this.serverService.makeGetReq({url, headerData})
        //       .subscribe((value:{objects:IBot[]})=>{
        //
        //           let updatedBot = value.objects[0];
        //           this.store.dispatch([
        //             new UpdateBotInfoByIdInBotInBotList({data:updatedBot, botId:updatedBot.id})
        //           ])
        //       });
        //   })
        // }
    };
    BotDetailWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bot-detail-wrapper',
            template: __webpack_require__(/*! ./bot-detail-wrapper.component.html */ "./src/app/core/bot-detail/bot-detail-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./bot-detail-wrapper.component.scss */ "./src/app/core/bot-detail/bot-detail-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"],
            _server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], BotDetailWrapperComponent);
    return BotDetailWrapperComponent;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/bot-detail.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/bot-detail/bot-detail.module.ts ***!
  \******************************************************/
/*! exports provided: BotDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotDetailModule", function() { return BotDetailModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _aim_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../aim.service */ "./src/app/aim.service.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _pipeline_based_bot_detail_pipeline_based_bot_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipeline-based-bot-detail/pipeline-based-bot-detail.component */ "./src/app/core/bot-detail/pipeline-based-bot-detail/pipeline-based-bot-detail.component.ts");
/* harmony import */ var _code_based_bot_detail_code_based_bot_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./code-based-bot-detail/code-based-bot-detail.component */ "./src/app/core/bot-detail/code-based-bot-detail/code-based-bot-detail.component.ts");
/* harmony import */ var _bot_detail_header_bot_detail_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bot-detail-header/bot-detail-header.component */ "./src/app/core/bot-detail/bot-detail-header/bot-detail-header.component.ts");
/* harmony import */ var _bot_detail_wrapper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bot-detail-wrapper.component */ "./src/app/core/bot-detail/bot-detail-wrapper.component.ts");
/* harmony import */ var _bot_testing_bot_testing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bot-testing/bot-testing.component */ "./src/app/core/bot-detail/bot-testing/bot-testing.component.ts");
/* harmony import */ var _bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bot-sessions/bot-sessions.component */ "./src/app/core/bot-detail/bot-sessions/bot-sessions.component.ts");
/* harmony import */ var _bot_sessions_session_detail_model_session_detail_model_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bot-sessions/session-detail-model/session-detail-model.component */ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-detail-model.component.ts");
/* harmony import */ var _consumers_consumers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./consumers/consumers.component */ "./src/app/core/bot-detail/consumers/consumers.component.ts");
/* harmony import */ var _bot_sessions_session_detail_model_session_message_session_message_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bot-sessions/session-detail-model/session-message/session-message.component */ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-message/session-message.component.ts");
/* harmony import */ var _bot_sessions_session_detail_model_session_tabs_details_session_tabs_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component */ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component.ts");
/* harmony import */ var _pipeline_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../pipeline-filter.pipe */ "./src/app/pipeline-filter.pipe.ts");
/* harmony import */ var _session_session_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./session/session.component */ "./src/app/core/bot-detail/session/session.component.ts");
/* harmony import */ var _buildbot_build_code_based_bot_architecture_pipeline_pipeline_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../buildbot/build-code-based-bot/architecture/pipeline/pipeline.component */ "./src/app/core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component.ts");
/* harmony import */ var _buildbot_build_code_based_bot_architecture_code_code_input_code_input_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../buildbot/build-code-based-bot/architecture/code/code-input/code-input.component */ "./src/app/core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.component.ts");
/* harmony import */ var _buildbot_build_code_based_bot_architecture_integration_integration_option_list_integration_option_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component */ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component.ts");
/* harmony import */ var _buildbot_build_code_based_bot_architecture_integration_integration_item_integration_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component */ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component.ts");
/* harmony import */ var _draggable_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../draggable.directive */ "./src/app/draggable.directive.ts");
/* harmony import */ var _drop_target_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../drop-target.directive */ "./src/app/drop-target.directive.ts");
/* harmony import */ var _buildbot_build_code_based_bot_architecture_knowledge_base_wrapper_knowledge_base_wrapper_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component */ "./src/app/core/buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component.ts");
/* harmony import */ var _consumers_limit_object_arrays_string_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./consumers/limit-object-arrays-string.pipe */ "./src/app/core/bot-detail/consumers/limit-object-arrays-string.pipe.ts");
/* harmony import */ var _consumers_consumer_fullscreen_wrapper_consumer_fullscreen_wrapper_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component */ "./src/app/core/bot-detail/consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component.ts");
/* harmony import */ var _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../view-bots/view-bots.component */ "./src/app/core/view-bots/view-bots.component.ts");
/* harmony import */ var _auth_gaurd_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../auth-gaurd.service */ "./src/app/auth-gaurd.service.ts");
/* harmony import */ var _buildbot_build_code_based_bot_architecture_integration_integration_option_list_requiredIfOneFilledValidator_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../buildbot/build-code-based-bot/architecture/integration/integration-option-list/requiredIfOneFilledValidator.directive */ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/requiredIfOneFilledValidator.directive.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _rich_media_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../rich-media.module */ "./src/app/rich-media.module.ts");
/* harmony import */ var _session_data_to_rich_media_serializer_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../session-data-to-rich-media-serializer.pipe */ "./src/app/session-data-to-rich-media-serializer.pipe.ts");
/* harmony import */ var _buildbot_build_code_based_bot_architecture_integration_integration_option_list_display_name_for_key_integration_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../buildbot/build-code-based-bot/architecture/integration/integration-option-list/display-name-for-key-integration.pipe */ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/display-name-for-key-integration.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import {DragAndDropModule} from 'angular-draggable-droppable';
// import {NgxsModule} from '@ngxs/store';
// import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
// import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
// import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
































var routes = [
    {
        path: '', component: _bot_detail_wrapper_component__WEBPACK_IMPORTED_MODULE_12__["BotDetailWrapperComponent"], canActivateChild: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_31__["AuthGaurdService"]], children: [
            { path: _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_30__["EBotType"].chatbot + "/:id", component: _code_based_bot_detail_code_based_bot_detail_component__WEBPACK_IMPORTED_MODULE_10__["CodeBasedBotDetailComponent"], data: { bot_type: _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_30__["EBotType"].chatbot } },
            { path: _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_30__["EBotType"].intelligent + "/:id", component: _pipeline_based_bot_detail_pipeline_based_bot_detail_component__WEBPACK_IMPORTED_MODULE_9__["PipelineBasedBotDetailComponent"], data: { bot_type: _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_30__["EBotType"].intelligent } },
            { path: ':id/consumer', component: _consumers_consumer_fullscreen_wrapper_consumer_fullscreen_wrapper_component__WEBPACK_IMPORTED_MODULE_29__["ConsumerFullscreenWrapperComponent"], data: { isFullscreen: true } },
        ]
    }
];
var BotDetailModule = /** @class */ (function () {
    function BotDetailModule() {
    }
    BotDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _session_data_to_rich_media_serializer_pipe__WEBPACK_IMPORTED_MODULE_35__["SessionDataToRichMediaSerializerPipe"],
                _code_based_bot_detail_code_based_bot_detail_component__WEBPACK_IMPORTED_MODULE_10__["CodeBasedBotDetailComponent"],
                _pipeline_based_bot_detail_pipeline_based_bot_detail_component__WEBPACK_IMPORTED_MODULE_9__["PipelineBasedBotDetailComponent"],
                _bot_detail_header_bot_detail_header_component__WEBPACK_IMPORTED_MODULE_11__["BotDetailHeaderComponent"],
                _bot_detail_wrapper_component__WEBPACK_IMPORTED_MODULE_12__["BotDetailWrapperComponent"],
                _bot_testing_bot_testing_component__WEBPACK_IMPORTED_MODULE_13__["BotTestingComponent"],
                _bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_14__["BotSessionsComponent"],
                _bot_sessions_session_detail_model_session_detail_model_component__WEBPACK_IMPORTED_MODULE_15__["SessionDetailModelComponent"],
                _consumers_consumers_component__WEBPACK_IMPORTED_MODULE_16__["ConsumersComponent"],
                _bot_sessions_session_detail_model_session_detail_model_component__WEBPACK_IMPORTED_MODULE_15__["SessionDetailModelComponent"],
                _bot_sessions_session_detail_model_session_tabs_details_session_tabs_details_component__WEBPACK_IMPORTED_MODULE_18__["SessionTabsDetailsComponent"],
                _bot_sessions_session_detail_model_session_message_session_message_component__WEBPACK_IMPORTED_MODULE_17__["SessionMessageComponent"],
                _buildbot_build_code_based_bot_architecture_pipeline_pipeline_component__WEBPACK_IMPORTED_MODULE_21__["PipelineComponent"],
                _pipeline_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["PipelineFilterPipe"],
                _session_session_component__WEBPACK_IMPORTED_MODULE_20__["SessionComponent"],
                _buildbot_build_code_based_bot_architecture_code_code_input_code_input_component__WEBPACK_IMPORTED_MODULE_22__["CodeInputComponent"],
                _buildbot_build_code_based_bot_architecture_integration_integration_option_list_integration_option_list_component__WEBPACK_IMPORTED_MODULE_23__["IntegrationOptionListComponent"],
                _buildbot_build_code_based_bot_architecture_integration_integration_item_integration_item_component__WEBPACK_IMPORTED_MODULE_24__["IntegrationItemComponent"],
                _draggable_directive__WEBPACK_IMPORTED_MODULE_25__["DraggableDirective"],
                _drop_target_directive__WEBPACK_IMPORTED_MODULE_26__["DropTargetDirective"],
                _buildbot_build_code_based_bot_architecture_knowledge_base_wrapper_knowledge_base_wrapper_component__WEBPACK_IMPORTED_MODULE_27__["KnowledgeBaseWrapperComponent"],
                _buildbot_build_code_based_bot_architecture_integration_integration_option_list_display_name_for_key_integration_pipe__WEBPACK_IMPORTED_MODULE_36__["DisplayNameForKeyIntegrationPipe"],
                _consumers_limit_object_arrays_string_pipe__WEBPACK_IMPORTED_MODULE_28__["LimitObjectArraysStringPipe"],
                _consumers_consumer_fullscreen_wrapper_consumer_fullscreen_wrapper_component__WEBPACK_IMPORTED_MODULE_29__["ConsumerFullscreenWrapperComponent"],
                /*after lazy loading*/
                _buildbot_build_code_based_bot_architecture_integration_integration_option_list_requiredIfOneFilledValidator_directive__WEBPACK_IMPORTED_MODULE_32__["RequiredIfOneFilledValidator"]
            ],
            imports: [
                _rich_media_module__WEBPACK_IMPORTED_MODULE_34__["RichMediaModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_33__["DragulaModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                // DragAndDropModule.forRoot(),
                // NgxsModule.forFeature([]),
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
            ],
            providers: [_aim_service__WEBPACK_IMPORTED_MODULE_7__["AimService"]]
        })
    ], BotDetailModule);
    return BotDetailModule;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-detail-model.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/session-detail-model/session-detail-model.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header d-flex  justify-content-between align-items-center\">\r\n          <!--<p>{{indexOfCurrentRowSelected+''+pageNumberOfCurrentRowSelected}}</p>-->\r\n          <div class=\"d-flex \">\r\n            <i class=\"fa fa-angle-left pr-2 cursor-pointer\"\r\n               [ngClass]=\"{invisible:indexOfCurrentRowSelected<=0 && pageNumberOfCurrentRowSelected<=1}\"\r\n               (click)=\"selectPrevRow.emit()\"></i>\r\n            <!-- <i class=\"fa fa-angle-right cursor-pointer\" [ngClass]=\"{invisible:showNextButton}\" -->\r\n            <i class=\"fa fa-angle-right cursor-pointer\"\r\n               (click)=\"selectNextRow.emit()\"></i>\r\n          </div>\r\n\r\n          <div class=\"d-flex  align-items-center justify-content-center\">\r\n            <i class=\"fa fa-refresh mr-2 cursor-pointer\" [ngClass]=\"{'fa-spin':showSpinIcon}\"  (click)=\"loadSessionById(_session.id);\"></i>\r\n            <div class=\"d-flex  flex-column align-items-start align-content-start\">\r\n              <span class=\"secondary\">Last updated at</span>\r\n              <span class=\"primary\">{{_session.updated_at|date:'mediumDate'}}</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"d-flex  flex-column\">\r\n            <span class=\"secondary\">Total Messages</span>\r\n            <span class=\"primary16\">{{sessionMessageData?.length}}</span>\r\n          </div>\r\n\r\n          <div class=\"d-flex  flex-column\">\r\n            <span class=\"secondary\">Sent to agent</span>\r\n            <span class=\"primary16\">false</span>\r\n          </div>\r\n\r\n          <div class=\" \">\r\n            <div class=\"d-flex justify-content-center\">\r\n              <div class=\"secondary  font-weight-bold\">Room ID:</div>\r\n              <div class=\"secondary \">{{_session.id}}</div>\r\n            </div>\r\n            <!---->\r\n            <div class=\"d-flex\">\r\n              <div class=\"secondary font-weight-bold\">Consumer ID:</div>\r\n              <div class=\"secondary\">{{_session.consumer_id}}</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div (click)=\"closeModel$.emit()\"><i class=\"fa fa-times cursor-pointer\"></i></div>\r\n          <!---->\r\n        </div>\r\n        <div class=\"card-body p-0\" style=\"height: 80vh\">\r\n          <div class=\"row mx-0 p-0 py-2\" style=\"height: 100%\">\r\n\r\n            <div class=\"col-6 pl-0 pr-0 pb-3 border-right\">\r\n              <!--search input starts-->\r\n              <div class=\"container \">\r\n                <div class=\"row py-2 border-bottom\">\r\n                  <div class=\"col-8\">\r\n                    <div class=\"input-group border p-1\"\r\n                         style=\"height: 32px;border-radius: 2px!important;position: relative\">\r\n                      <input class=\"form-control py-2 border-0\" [ngModel]=\"messageSearchKeyword\"\r\n                             (ngModelChange)=performSearch($event)\r\n                             (keyup.enter)=\"goToNextSearchResult(messageSearchKeyword)\"\r\n                             (keyup.shift.enter)=\"goToPreviousSearchResult(messageSearchKeyword)\"\r\n                             id=\"search-session-model\" type=\"search\"\r\n                             placeholder=\"search\">\r\n                      <!--<i class=\"fa fa-angle-down text-dark\"-->\r\n                         <!--style=\"font-size: 18px;position: absolute; right: 10px;top: 6px; z-index: 10 \"></i>-->\r\n                      <i class=\"fa fa-search\"\r\n                         style=\"font-size: 18px;position: absolute; left: 10px;top: 6px;color: #e0e0e0;z-index: 10\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!--search input ends-->\r\n                <div class=\"row m-0 my-2 pr-1 align-items-start align-content-start\"\r\n                     style=\"height: 65vh;overflow-y: scroll;overflow-x: hidden;\">\r\n                  <div class=\"col-12 px-0 border-hover-txn\"\r\n                       *ngFor=\"let txnConversationItems of sessionMessageDataCopy|serializeSessionMessage|filterObjectArray:messageSearchKeyword; let i=index\"\r\n                       [ngClass]=\"{'border-selected-txn':txnConversationItems.transaction_id === transactionIdSelectedInModel,\r\n                        'border-unselected-txn':txnConversationItems.transaction_id !== transactionIdSelectedInModel}\">\r\n                    <app-session-message [txnConversationItems]=\"txnConversationItems\"\r\n                                         (messageClickedEvent$)=\"transactionIdChangedInModel($event)\"></app-session-message>\r\n                  </div>\r\n                  <div *ngIf=\"!sessionMessageDataCopy || sessionMessageData.length===0\" class=\"col-12 align-self-stretch d-flex justify-content-center align-items-center\">\r\n                    <p class=\"text-muted\">No Messages to show</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--</div>-->\r\n            <div class=\"col-6 d-flex flex-column\">\r\n              <ul class=\"nav nav-tabs my-2 pb-0\">\r\n                <!--TODO: *ngIf=\"bot.child_bots && bot.child_bots.length>0\" below-->\r\n                <li class=\"nav-item px-0\" >\r\n                  <a class=\"nav-link p-0 mr-2\" [ngClass]=\"{'tab-active':activeTab==='manager_bot'}\"\r\n                     (click)=\"tabClicked('manager_bot')\"><strong>TRANSACTION INFO</strong></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link p-0\" [ngClass]=\"{'tab-active':activeTab==='active_bot'}\"\r\n                     (click)=\"tabClicked('active_bot')\" *ngIf=\"bot.is_manager\"><strong>ACTIVE BOT</strong></a>\r\n                </li>\r\n                <li class=\"nav-item ml-auto\">\r\n                  <a class=\"nav-link p-0 mr-2\" [ngClass]=\"{'tab-active':activeTab==='final_df'}\"\r\n                     (click)=\"tabClicked('final_df')\"><strong>FINAL DF</strong></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link p-0\" [ngClass]=\"{'tab-active':activeTab==='datastore'}\"\r\n                     (click)=\"tabClicked('datastore')\"><strong>DATASTORE</strong></a>\r\n                </li>\r\n              </ul>\r\n              <!--<div class=\"d-flex justify-content-center flex-grow-1 py-2\">-->\r\n              <!--<pre class=\"code-text bg-dark\" style=\"width: 90%;overflow: scroll; color: white;\">-->\r\n              <!--{{codeText|json}}-->\r\n              <!--</pre>-->\r\n              <!--</div>-->\r\n              <!--<app-code-editor [text]=\"codeText?(codeText|json):''\"></app-code-editor>-->\r\n              <!--<app-code-editor [text]=\"codeText?(codeText|json):''\"></app-code-editor>-->\r\n              <!--<textarea [value]=\"codeText?(codeText|json):''\" style=\"width: 100%; height: 100%\"></textarea>-->\r\n              <pre class=\"p-2\" style=\"width: 100%; height: 100%; background-color: #000055; color: white\">{{codeText?(codeText|json):''}}</pre>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-detail-model.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/session-detail-model/session-detail-model.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header {\n  background-color: #00abd3; }\n\n.fa {\n  font-size: 22px;\n  color: white; }\n\n.fa-refresh, .fa-times {\n  font-size: 16px; }\n\n.primary16 {\n  height: 16px;\n  font-family: Helvetica;\n  font-size: 13px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff; }\n\n.primary {\n  height: 14px;\n  font-family: Helvetica;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff; }\n\n.secondary {\n  font-family: Helvetica;\n  font-size: 10px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff; }\n\nspan {\n  margin: 0; }\n\n#search-session-model {\n  border: none;\n  border-color: inherit;\n  box-shadow: none;\n  outline: none;\n  padding-left: 30px;\n  /*todo: this doesn't seem right*/\n  outline: none; }\n\n.nav-link {\n  border: none; }\n\n.nav {\n  border: none; }\n\na {\n  text-decoration: none !important;\n  font-size: 10px;\n  color: black; }\n\n.indicate {\n  height: 34px;\n  font-family: Helvetica;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #9e9e9e; }\n\n.border-hover-txn:hover {\n  border-left: 4px solid #e0e0e0; }\n\n.border-selected-txn {\n  border-left: 4px solid #00abd3 !important; }\n\n.border-unselected-txn {\n  border-left: 4px solid transparent; }\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-detail-model.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/session-detail-model/session-detail-model.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SessionDetailModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailModelComponent", function() { return SessionDetailModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionDetailModelComponent = /** @class */ (function () {
    // finalDFPanelData;
    // dataStorePanelData;
    function SessionDetailModelComponent(constantsService, utilityService, serverService) {
        this.constantsService = constantsService;
        this.utilityService = utilityService;
        this.serverService = serverService;
        this.searchEnterPressedCount = 0;
        this.selectNextRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectPrevRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeModel$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPrevButton = false;
        this.messageSearchKeyword = '';
        this.activeTab = 'manager_bot'; // = 'manager_bot' | 'active_bot'|'final_df'|'datastore';
        this.showSpinIcon = false;
    }
    Object.defineProperty(SessionDetailModelComponent.prototype, "session", {
        set: function (_session) {
            var _this = this;
            this._session = _session;
            if (_session && _session.id)
                setTimeout(function () {
                    _this.loadSessionById(_session.id);
                });
        },
        enumerable: true,
        configurable: true
    });
    ;
    SessionDetailModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.botlist$.subscribe(function (value) {
            _this.allBotList = value.allBotList;
        });
        // this.loadSessionById(this._session.id);
    };
    SessionDetailModelComponent.prototype.loadSessionById = function (id) {
        var _this = this;
        this.showSpinIcon = true;
        this.url = this.constantsService.getSessionsMessageUrl(id);
        this.sessionMessageData$ = this.serverService.makeGetReq({
            url: this.url,
            headerData: { 'bot-access-token': this.bot.bot_access_token }
        });
        this.sessionMessageData$.subscribe(function (value) {
            if (!value)
                return;
            _this.totalMessagesCount = value.meta.total_count;
            _this.sessionMessageData = value.objects;
            _this.sessionMessageDataCopy = _this.sessionMessageData.slice();
            _this.showSpinIcon = false;
        });
        this.tabClicked(this.activeTab);
    };
    SessionDetailModelComponent.prototype.transactionIdChangedInModel = function (txnId) {
        var _this = this;
        this.transactionIdSelectedInModel = txnId;
        /*This data will show under Manager Bot*/
        var messageDataForGiveTxnId = this.sessionMessageData.find(function (message) {
            return message.transaction_id === txnId;
        });
        var botMessageDataForGiveTxnId = this.sessionMessageData.find(function (message) {
            return (message.transaction_id === txnId && message.user_type === "bot");
        });
        // this.sessionMessageDataCopy = [...this.sessionMessageData];
        this.sessionMessageDataCopy = this.sessionMessageData;
        this.managerPanelData = {
            'generatedDf': messageDataForGiveTxnId.generated_df,
            'generatedMsg': messageDataForGiveTxnId.generated_msg,
            'message': messageDataForGiveTxnId.message,
            'messageStore': botMessageDataForGiveTxnId.message_store
        };
        ;
        var activeBotId = botMessageDataForGiveTxnId.message_store.activeBotId;
        var activeBotRoomId = botMessageDataForGiveTxnId.message_store.activeBotRoomId;
        this.activeBotPanelData = botMessageDataForGiveTxnId.message_store;
        if (activeBotId) {
            var activeBotAccessTokenId = this.allBotList.find(function (bot) { return bot.id === activeBotId; }).bot_access_token;
            var headerData_1 = {
                "bot-access-token": activeBotAccessTokenId
            };
            var surl_1 = this.constantsService.getSessionsByIdUrl(activeBotRoomId);
            this.serverService.makeGetReq({ url: surl_1, headerData: headerData_1 })
                .subscribe(function (newSession) {
                var murl = _this.constantsService.getSessionsMessageUrl(newSession.id);
                _this.serverService.makeGetReq({ url: surl_1, headerData: headerData_1 })
                    .subscribe(function (value) {
                    var activeBotMessage = value.objects.find(function (message) { return message.transaction_id === _this.transactionIdSelectedInModel; });
                    _this.activeBotPanelData = {
                        'generatedDf': activeBotMessage.generated_df,
                        'generatedMsg': activeBotMessage.generated_msg,
                        'message': activeBotMessage.message,
                    };
                });
            });
        }
        this.tabClicked(this.activeTab);
    };
    SessionDetailModelComponent.prototype.tabClicked = function (active) {
        this.activeTab = active;
        switch (active) {
            case 'manager_bot': {
                this.codeText = this.managerPanelData;
                break;
            }
            case 'active_bot': {
                this.codeText = this.activeBotPanelData;
                break;
            }
            case 'final_df': {
                this.codeText = this.finalDfState;
                break;
            }
            case 'datastore': {
                this.codeText = this.sessionDataStore;
                break;
            }
        }
    };
    SessionDetailModelComponent.prototype.selectNextPreviousRow = function () {
    };
    SessionDetailModelComponent.prototype.scroll = function (txnId) {
        var ele = document.getElementsByClassName(txnId)[0];
        console.log(ele);
        if (!ele && this.searchEnterPressedCount > 0) {
            this.utilityService.showSuccessToaster('Reached end of list');
        }
        if (ele) {
            ele.scrollIntoView();
            return true;
        }
        return false;
    };
    SessionDetailModelComponent.prototype.goToNextSearchResult = function (messageSearchKeyword) {
        if (this.searchEnterPressedCount !== 0) {
            ++this.searchEnterPressedCount;
        }
        if (this.searchEnterPressedCount < 0)
            this.searchEnterPressedCount = 0;
        var elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, this.searchEnterPressedCount);
        if (!elementDataToScroll) {
            --this.searchEnterPressedCount;
            return;
        }
        var txnId = elementDataToScroll.transaction_id;
        if (elementDataToScroll) {
            var didScrollOccur = this.scroll(txnId);
            if (!didScrollOccur)
                --this.searchEnterPressedCount;
            this.transactionIdChangedInModel(txnId);
        }
        if (this.searchEnterPressedCount === 0) {
            ++this.searchEnterPressedCount;
        }
    };
    SessionDetailModelComponent.prototype.goToPreviousSearchResult = function (messageSearchKeyword) {
        --this.searchEnterPressedCount;
        var elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, this.searchEnterPressedCount);
        if (!elementDataToScroll) {
            --this.searchEnterPressedCount;
            return;
        }
        if (this.searchEnterPressedCount < 0)
            this.searchEnterPressedCount = 0;
        if (elementDataToScroll) {
            var didScrollOccur = this.scroll(elementDataToScroll.transaction_id);
            this.transactionIdChangedInModel(elementDataToScroll.transaction_id);
        }
    };
    SessionDetailModelComponent.prototype.performSearch = function (messageSearchKeyword) {
        this.searchEnterPressedCount = 0;
        this.messageSearchKeyword = messageSearchKeyword = messageSearchKeyword.trim();
        if (messageSearchKeyword === '')
            return;
        this.sessionMessageDataCopy = this.sessionMessageData.slice();
        /*find transaction id of first matched text*/
        var elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, 0);
        elementDataToScroll && this.scroll(elementDataToScroll.transaction_id);
    };
    SessionDetailModelComponent.prototype.findElementDataBySearchKeyWord = function (messageSearchKeyword, index) {
        var _this = this;
        var elementsDataToScroll = this.sessionMessageData.filter(function (objItem) {
            /*find if messageSearchKeyword exists in message or message[0].text as substring */
            console.log(_this.messageSearchKeyword);
            var isMatch;
            try {
                /*searching for txn id match*/
                isMatch = objItem.transaction_id.toUpperCase().includes(messageSearchKeyword.toUpperCase());
                if (isMatch)
                    return isMatch;
            }
            catch (e) { }
            try {
                /*searching for human message match*/
                isMatch = objItem.message.toUpperCase().includes(messageSearchKeyword.toUpperCase());
                if (isMatch)
                    return isMatch;
            }
            catch (e) { }
            try {
                /*searching for bot messages match*/
                for (var _i = 0, _a = objItem.message; _i < _a.length; _i++) {
                    var msg = _a[_i];
                    isMatch = msg.text.toUpperCase().includes(messageSearchKeyword.toUpperCase());
                    if (isMatch)
                        return isMatch;
                }
            }
            catch (e) { }
        });
        return elementsDataToScroll[index];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SessionDetailModelComponent.prototype, "session", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SessionDetailModelComponent.prototype, "bot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SessionDetailModelComponent.prototype, "finalDfState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SessionDetailModelComponent.prototype, "sessionDataStore", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SessionDetailModelComponent.prototype, "selectNextRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SessionDetailModelComponent.prototype, "selectPrevRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SessionDetailModelComponent.prototype, "closeModel$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SessionDetailModelComponent.prototype, "showPrevButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SessionDetailModelComponent.prototype, "pageNumberOfCurrentRowSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SessionDetailModelComponent.prototype, "indexOfCurrentRowSelected", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], SessionDetailModelComponent.prototype, "botlist$", void 0);
    SessionDetailModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-session-detail-model',
            template: __webpack_require__(/*! ./session-detail-model.component.html */ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-detail-model.component.html"),
            styles: [__webpack_require__(/*! ./session-detail-model.component.scss */ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-detail-model.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
            _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]])
    ], SessionDetailModelComponent);
    return SessionDetailModelComponent;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-message/session-message.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/session-detail-model/session-message/session-message.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cursor-pointer\" [ngClass]=\"txnId\" (click)=\"messageClickedEvent$.emit(txnId)\">\r\n  <!--<div class=\"cursor-pointer\" [ngClass]=\"txnId\">-->\r\n  <i class=\"meta-text cursor-pointer pl-1\" (click)=\"utilityService.copyToClipboard(txnId)\"\r\n     [innerHtml]=\"'txnId:'+ txnId_highlighting\">\r\n  </i>\r\n  <div *ngFor=\"let sessionMessage of sessionMessageItems\">\r\n\r\n    <div *ngIf=\"sessionMessage && sessionMessage.user_type==='human'\">\r\n      <!--<div class=\"row reverse-flex-row my-1\">-->\r\n      <div class=\"row my-1\">\r\n        <!--<div class=\"col-1 text-left p-0\">-->\r\n        <!--<img class=\"\" src=\"http://logok.org/wp-content/uploads/2014/04/Citi-logo-880x660.png\"-->\r\n        <!--style=\"width: 32px;height: 32px\" alt=\"\">-->\r\n        <!--</div>-->\r\n        <div class=\"col-10 p-0\">\r\n          <div class=\"message p-2 bg-message-human\" style=\"display: inline-block\">\r\n            <!--<span class=\"message-text \">{{sessionMessageData.message}}</span>-->\r\n            <span class=\"message-text\" [innerHtml]=\"sessionMessage.message\"></span>\r\n            <div class=\"time text-right\">10:42 PM</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"sessionMessage && sessionMessage.user_type==='bot'\">\r\n      <div *ngIf=\"myArray.isArray(sessionMessage.message); else messageIsStringNotObjectTemplate\">\r\n        <!--TODO:HACK:: sometimes data from backend is not {text:\"hi\"} but just \"hi\"-->\r\n        <div class=\"row flex-row-reverse\" *ngFor=\"let message of sessionMessage.message\">\r\n          <!--bot text reply starts-->\r\n          <div class=\"col-10 p-0 pb-1 text-right\" *ngIf=\"message.text\">\r\n            <!--<div class=\"col-12 p-1 text-right p-0\" *ngIf=\"message.text\">-->\r\n            <div class=\"message p-2 bg-message-bot\" style=\"display: inline-block\">\r\n              <span class=\"message-text\" [innerHtml]=\"message.text\"></span>\r\n              <div class=\"time text-right\">10:42 PM</div>\r\n            </div>\r\n          </div>\r\n          <!--bot text reply ends-->\r\n\r\n          <!--bot rich media reply starts-->\r\n          <app-card-carousel\r\n            [isParentSessionsModal]=\"true\"\r\n            style=\"width: 100%!important;\"\r\n            [messageData]=\"message\"\r\n            *ngIf=\"message && message.media\">\r\n          </app-card-carousel>\r\n          <app-quick-reply\r\n            [isParentSessionsModal]=\"true\"\r\n            [messageData]=\"message\"\r\n            *ngIf=\"message && message.quick_reply\">\r\n          </app-quick-reply>\r\n          <!--bot rich media reply ends-->\r\n\r\n        </div>\r\n      </div>\r\n      <ng-template #messageIsStringNotObjectTemplate>\r\n        <div class=\"col-12 p-1 text-right p-0\">\r\n          <div class=\"message p-2 bg-message-bot\" style=\"display: inline-block\">\r\n            <span class=\"message-text\" [innerHtml]=\"'hi'\"></span>\r\n            <div class=\"time text-right\">10:42 PM</div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n    </div>\r\n\r\n    <!--<p>{{(sessionMessage|json)}}</p>-->\r\n    <!--<app-card-carousel  [messageData]=\"sessionMessage|sessionDataToRichMediaSerializer\"></app-card-carousel>-->\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-message/session-message.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/session-detail-model/session-message/session-message.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reverse-flex-row {\n  display: flex;\n  flex-direction: row-reverse; }\n\n.row {\n  margin: 0;\n  /*overriding bootstrap*/ }\n\n.message {\n  font-size: 13px;\n  line-height: 20px;\n  font-weight: 400;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif;\n  border-radius: 2px; }\n\n.message .time {\n    font-size: 9px;\n    line-height: 13px;\n    font-weight: 400;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif; }\n\n.text-highlight {\n  background-color: yellow;\n  color: #474747; }\n\n.message-text .text-highlight {\n  background-color: yellow;\n  color: #474747; }\n\n.meta-text {\n  font-size: 9px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-message/session-message.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/session-detail-model/session-message/session-message.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: SessionMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionMessageComponent", function() { return SessionMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility.service */ "./src/app/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionMessageComponent = /** @class */ (function () {
    function SessionMessageComponent(utilityService) {
        this.utilityService = utilityService;
        this.messageClickedEvent$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myArray = Array;
        this.myObject = Object;
    }
    Object.defineProperty(SessionMessageComponent.prototype, "txnConversationItems", {
        set: function (txnConversationItemsValue) {
            this._txnConversationItems = txnConversationItemsValue;
        },
        enumerable: true,
        configurable: true
    });
    SessionMessageComponent.prototype.ngOnInit = function () {
        this.sessionMessageItems = this._txnConversationItems.convoList;
        console.log(this.sessionMessageItems);
        this.txnId = this._txnConversationItems.transaction_id;
        this.txnId_highlighting = this._txnConversationItems.transaction_id_highlighting || this.txnId;
        // this.sessionMessageData.user_type;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SessionMessageComponent.prototype, "txnConversationItems", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SessionMessageComponent.prototype, "messageClickedEvent$", void 0);
    SessionMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-session-message',
            template: __webpack_require__(/*! ./session-message.component.html */ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-message/session-message.component.html"),
            styles: [__webpack_require__(/*! ./session-message.component.scss */ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-message/session-message.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])
    ], SessionMessageComponent);
    return SessionMessageComponent;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"col-12  d-flex justify-content-between\">-->\r\n  <!--<p class=\"flex-shrink-0 font-weight-bold\" style=\"font-size: 16px\">Transaction data frame</p>-->\r\n  <!--<div class=\"input-group border bg-white p-1 flex-shrink-1 flex-grow-0\"-->\r\n       <!--style=\"height: 32px; border-radius: 2px!important;position: relative; flex-basis: 150px\">-->\r\n    <!--<input class=\"f-control py-2 border-0\" id=\"search-session-model\" type=\"search\" style=\"font-size: 13px\"-->\r\n           <!--placeholder=\"search\">-->\r\n    <!--<i class=\"fa fa-search\"-->\r\n       <!--style=\"font-size: 15px;position: absolute; left: 10px;top: 6px;color: #e0e0e0;z-index: 10\"></i>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n<div class=\"container\">\r\n  <div>bgjkgjkh</div>\r\n  <div class=\"row\">\r\n    <app-code-editor [text]=\"'hi'\"></app-code-editor>\r\n    <app-code-editor class=\"bg-dark\" ></app-code-editor>\r\n    <app-code-editor [text]=\"'hisadad'\"></app-code-editor>\r\n  </div>\r\n</div>\r\n<!---->\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search-session-model {\n  border: none;\n  border-color: inherit;\n  box-shadow: none;\n  outline: none;\n  padding-left: 30px;\n  /*todo: this doesn't seem right*/\n  outline: none; }\n  #search-session-model ::-webkit-input-placeholder {\n    font-size: 13px; }\n  #search-session-model :-ms-input-placeholder {\n    font-size: 13px; }\n  #search-session-model ::-ms-input-placeholder {\n    font-size: 13px; }\n  #search-session-model ::placeholder {\n    font-size: 13px; }\n  li {\n  margin-left: 30px; }\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: SessionTabsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionTabsDetailsComponent", function() { return SessionTabsDetailsComponent; });
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

var SessionTabsDetailsComponent = /** @class */ (function () {
    function SessionTabsDetailsComponent() {
    }
    SessionTabsDetailsComponent.prototype.ngOnInit = function () {
    };
    SessionTabsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-session-tabs-details',
            template: __webpack_require__(/*! ./session-tabs-details.component.html */ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component.html"),
            styles: [__webpack_require__(/*! ./session-tabs-details.component.scss */ "./src/app/core/bot-detail/bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SessionTabsDetailsComponent);
    return SessionTabsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/bot-testing/bot-testing.component.html":
/*!************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-testing/bot-testing.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex-column-custom justify-content-end mb-3\">\r\n  <div class=\"d-flex align-items-center justify-content-end\">\r\n    <!-- <i class=\"fa fa-plus pr-4\"></i>\r\n    <i class=\"fa fa-minus pr-4\"></i> -->\r\n    <button class=\"btn-theme-primary-outline mr-2\" (click)=\"exportToCSV()\">Export to CSV</button>\r\n    <button class=\"btn-theme-primary mr-2\" (click)=\"updateTC()\" *ngIf=\"isData && tableChanged\">Update test Case</button>\r\n    <button class=\"btn-theme-primary mr-2\" (click)=\"createTC()\" *ngIf=\"!isData && tableChanged\">Create test Case\r\n    </button>\r\n    <button class=\"btn-theme-danger mr-2\" (click)=\"beginTest(Primarytemplat)\" *ngIf=\"cancelTestFlag\">Cancel Test\r\n    </button>\r\n    <button class=\"btn-theme-primary mr-2\" (click)=\"beginTest(Primarytemplat)\" *ngIf=\"!cancelTestFlag\">Begin Test\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!--<div [hidden]=\"!testCaseData\" (change)=\"onTableChange()\" class=\"d-flex-column-custom flex-grow-1\">-->\r\n<app-handsontable\r\n  [hidden]=\"!testCaseData\"\r\n  (change)=\"onTableChange()\"\r\n  [testData]=\"testCaseData\"\r\n  [columns]=\"handontable_column\"\r\n  [colHeaders]=\"handontable_colHeaders\"\r\n  (rowChanged$)=\"onTableChange()\"\r\n>\r\n</app-handsontable>\r\n\r\n<!--<app-handsontable [columns]=\"handontable_column\" [colHeaders]=\"handontable_colHeaders\"></app-handsontable>-->\r\n<!--</div>-->\r\n<!--<app-handsontable [columns]=\"handontable_column\" [colHeaders]=\"handontable_colHeaders\"></app-handsontable>-->\r\n\r\n<ng-template #Primarytemplat>\r\n  <div class=\"danger-modal\">\r\n    <div class=\"top-dec\"></div>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title mb-2\" style=\"display: flex;justify-content: start;\">Test is already running</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-body pt-0\">\r\n      <div>\r\n        <p>Do you want to stop the Testing process?</p>\r\n        <button class=\"btn-theme-primary\" (click)=\"stopTest();modalRef.hide()\">Stop Test</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-testing/bot-testing.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-testing/bot-testing.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n  .danger-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #b14250; }\n  .danger-modal .modal-header {\n    color: #474747; }\n  .danger-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n  .danger-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n  .app-handsontable {\n  display: block;\n  overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/core/bot-detail/bot-testing/bot-testing.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/bot-detail/bot-testing/bot-testing.component.ts ***!
  \**********************************************************************/
/*! exports provided: BotTestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotTestingComponent", function() { return BotTestingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BotTestingComponent = /** @class */ (function () {
    function BotTestingComponent(serverService, modalService, constantsService, utilityService, store) {
        this.serverService = serverService;
        this.modalService = modalService;
        this.constantsService = constantsService;
        this.utilityService = utilityService;
        this.store = store;
        this.testCaseData = [["", "", ""]];
        this.testCasesUrl = this.constantsService.getBotTestingUrl();
        this.stopTestUrl = this.constantsService.stopTestUrl();
        this.isData = false;
        this.tableChanged = false;
    }
    BotTestingComponent.prototype.exportToCSV = function () {
        var csvData = this.testCaseData;
        var csvColumn = [1, 2, 3];
        this.utilityService.downloadArrayAsCSV(csvData, csvColumn);
    };
    BotTestingComponent.prototype.click = function () {
        this.utilityService.downloadArrayAsCSV([], {});
    };
    BotTestingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.makeGetReq({
            url: this.testCasesUrl,
            headerData: { 'bot-access-token': this.bot.bot_access_token }
        })
            .subscribe(function (value) {
            if (value.objects.length === 0) {
                _this.isData = false;
            }
            else {
                _this.isData = true;
                var testCaseData = value.objects[0].data;
                var testCaseDataForBot = value.objects.find(function (testcase) {
                    return testcase.bot_id === _this.bot.id;
                });
                _this.testCaseData =
                    (testCaseDataForBot && testCaseDataForBot.data && testCaseDataForBot.data.length > 0) ? testCaseDataForBot.data : [['NO_TEST_DATA', 'NO_TEST_DATA', 'NO_TEST_DATA']];
                // this.testCaseId = value.objects[0].id;
                _this.testCaseId = testCaseDataForBot && testCaseDataForBot.id;
                // }
            }
        });
        this.handontable_colHeaders = this.constantsService.HANDSON_TABLE_BOT_TESTING_colHeaders;
        this.handontable_column = this.constantsService.HANDSON_TABLE_BOT_TESTING_columns;
    };
    BotTestingComponent.prototype.onTableChange = function () {
        this.tableChanged = true;
    };
    BotTestingComponent.prototype.createTC = function () {
        var _this = this;
        console.log(this.testCaseData);
        this.serverService.makePostReq({
            url: this.testCasesUrl,
            headerData: { 'bot-access-token': this.bot.bot_access_token },
            body: {
                "status": "IDLE",
                "data": this.testCaseData
                //   .map((testCaseItem:[ string, string, string ])=>{
                //     /*
                //     *This is to remove third item of testcase array
                //     * Not sure of needed
                //     * */
                //   return [testCaseItem[0], testCaseItem[1]]
                // })
            }
        }).subscribe(function (value) {
            _this.utilityService.showSuccessToaster('Test cases created');
            _this.isData = true;
            _this.tableChanged = false;
        });
    };
    BotTestingComponent.prototype.updateTC = function () {
        var _this = this;
        // ;
        this.serverService.makePutReq({
            url: this.testCasesUrl + (this.testCaseId + "/"),
            headerData: { 'bot-access-token': this.bot.bot_access_token },
            body: {
                'status': 'IDLE',
                'data': this.testCaseData
            }
        }).subscribe(function (value) {
            _this.utilityService.showSuccessToaster('Test cases updated');
            _this.isData = true;
            _this.tableChanged = false;
        });
    };
    BotTestingComponent.prototype.beginTest = function (Primarytemplat) {
        var _this = this;
        this.cancelTestFlag = true;
        this.serverService.makeGetReq({
            url: this.testCasesUrl,
            headerData: { 'bot-access-token': this.bot.bot_access_token }
        }).subscribe(function (value) {
            if (value.objects[0].status === 'RUNNING') {
                _this.cancelTestFlag = true;
                _this.openCreateBotModal(Primarytemplat);
            }
            else {
                _this.serverService.makeGetReq({
                    url: _this.testCasesUrl + 'oneclicktesting/',
                    headerData: { 'bot-access-token': _this.bot.bot_access_token }
                })
                    .subscribe(function (value) {
                    _this.testCaseData = value.data;
                    _this.cancelTestFlag = false;
                });
            }
        });
    };
    BotTestingComponent.prototype.removeNullRowsFromTableData = function (arr) {
    };
    BotTestingComponent.prototype.openCreateBotModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    };
    BotTestingComponent.prototype.stopTest = function () {
        var _this = this;
        this.serverService.makeGetReq({
            url: this.stopTestUrl,
            headerData: { 'bot-access-token': this.bot.bot_access_token }
        })
            .subscribe(function (value) {
            _this.cancelTestFlag = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BotTestingComponent.prototype, "bot", void 0);
    BotTestingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bot-testing',
            template: __webpack_require__(/*! ./bot-testing.component.html */ "./src/app/core/bot-detail/bot-testing/bot-testing.component.html"),
            styles: [__webpack_require__(/*! ./bot-testing.component.scss */ "./src/app/core/bot-detail/bot-testing/bot-testing.component.scss")]
        }),
        __metadata("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], BotTestingComponent);
    return BotTestingComponent;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/code-based-bot-detail/code-based-bot-detail.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/core/bot-detail/code-based-bot-detail/code-based-bot-detail.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  [ngClass]=\"{'bot-detail-grid-architecture-full-screen':isArchitectureFullScreen,'bot-detail-grid':!isArchitectureFullScreen}\"\r\n  *ngIf=\"bot\">\r\n\r\n  <div class=\"header\" *ngIf=\"!isArchitectureFullScreen\">\r\n    <app-bot-detail-header [bot]=\"bot\" (refreshBotDetails$)=\"refreshBotDetails()\"></app-bot-detail-header>\r\n  </div>\r\n  <div class=\"d-flex-column-last-child-flex-grow-1 config bg-white px-3 py-3 shadow-theme\" *ngIf=\"!isArchitectureFullScreen\">\r\n    <div class=\"d-flex-column-last-child-flex-grow-1 text-theme-normal justify-content-center\">\r\n      <div class=\"d-flex justify-content-between px-3\">\r\n\r\n        <div class=\"heading\" style=\"font-size: 14px !important;\">Bot Configuration</div>\r\n        <div *ngIf=\"!showConfig\" class=\"d-flex mx-4 justify-content-between align-items-center flex-grow-1\">\r\n          <div>Bot Unique Name : <strong>{{bot.bot_unique_name}}</strong></div>\r\n          <div>Session Time : <strong>{{bot.room_persistence_time}} min</strong></div>\r\n          <div>Advance Data Protection : <strong>{{bot.advanced_data_protection}}</strong></div>\r\n          <div>Data Retention Period : <strong>{{bot.data_persistence_period}} Days</strong></div>\r\n          <div>Blank Consent : <strong>{{bot.blanket_consent}}</strong></div>\r\n        </div>\r\n        <div class=\"cursor-pointer\"\r\n             (click)=\"togglePanel()\">\r\n          <i class=\"fa\" [ngClass]=\"{'fa-angle-up':showConfig, 'fa-angle-down':!showConfig}\"\r\n             style=\"font-size: 20px; line-height: 12px\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <app-bot-config (datachanged$)=\"datachanged($event)\" *ngIf=\"showConfig\" [bot]=\"(bot)\"></app-bot-config>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!--============= REDESIGN=================-->\r\n\r\n  <div class=\"flex-column shadow-theme architecture bg-white p-1 px-2 my align-content-start\"\r\n       *myIf=\"myETabNames.lower_panel_bot_detail\">\r\n    <!--tabs start-->\r\n    <div class=\"px-2\">\r\n      <ul class=\"nav nav-tabs border-none theme-tabbing mb-1 bg-white\">\r\n        <li *myIf=\"myETabNames.architecture_tab\" class=\"nav-item\"\r\n            [ngClass]=\"{'tab-active':selectedTab==='architecture'}\">\r\n          <a class=\"nav-link heading\" [routerLink]=\"['.']\"\r\n             queryParamsHandling=\"merge\"\r\n             replaceUrl=\"true\"\r\n             (click)=\"tabChanged('architecture')\"\r\n             [queryParams]=\"{build:'architecture'}\"><strong>Architecture</strong></a>\r\n        </li>\r\n        <li *myIf=\"myETabNames.testing\" class=\"nav-item\" [ngClass]=\"{'tab-active':selectedTab==='testing'}\">\r\n          <a class=\"nav-link heading\" [routerLink]=\"['.']\"\r\n             queryParamsHandling=\"merge\"\r\n             replaceUrl=\"true\"\r\n             (click)=\"tabChanged('testing')\"\r\n             [queryParams]=\"{build:'testing'}\"><strong>Testing</strong></a>\r\n        </li>\r\n        <li *myIf=\"myETabNames.sessions\" class=\"nav-item\" [ngClass]=\"{'tab-active':selectedTab==='sessions'}\">\r\n          <a class=\"nav-link heading\" [routerLink]=\"['.']\"\r\n             queryParamsHandling=\"merge\"\r\n             replaceUrl=\"true\"\r\n             (click)=\"tabChanged('sessions')\"\r\n             [queryParams]=\"{build:'sessions'}\"><strong>Sessions</strong></a>\r\n        </li>\r\n        <li *myIf=\"myETabNames.consumers\" class=\"nav-item\" [ngClass]=\"{'tab-active':selectedTab==='consumer'}\">\r\n          <a class=\"nav-link heading\" [routerLink]=\"['.']\"\r\n             queryParamsHandling=\"merge\"\r\n             replaceUrl=\"true\"\r\n             (click)=\"tabChanged('consumer')\"\r\n             [queryParams]=\"{build:'consumer'}\"><strong>Consumers</strong></a>\r\n        </li>\r\n        <li class=\"nav-item ml-auto\">\r\n          <a class=\"nav-link heading\"\r\n             [routerLink]=\"['.']\"\r\n             queryParamsHandling=\"merge\"\r\n             replaceUrl=\"true\"\r\n             [queryParams]=\"{isArchitectureFullScreen:!isArchitectureFullScreen}\">\r\n            <i class=\"fa\"\r\n               [ngClass]=\"{'fa-window-restore':isArchitectureFullScreen, 'fa-expand':!isArchitectureFullScreen}\"></i>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n    <!--tabs end-->\r\n    <!---->\r\n    <!--architeture starts-->\r\n    <div class=\"col-12 p-0\" style=\"height: 85%\" *ngIf=\"selectedTab==='architecture' &&  bot \">\r\n      <div class=\"col-12 architeture-body\" style=\"overflow-y: auto;height: 100%\" *myIf=\"myETabNames.architecture_items\">\r\n        <div class=\"d-flex row-body bg-white \" style=\"height: 98%\">\r\n          <!--TODO: 98% to avoid scroll bar; use grid instead-->\r\n          <!--side bar starts-->\r\n          <div class=\"side-bar  border-right\">\r\n            <div class=\"sidebar-content\">\r\n              <a routerLink=\".\"\r\n                 [queryParams]=\"{'build-tab':'pipeline'}\"\r\n                 queryParamsHandling=\"merge\"\r\n                 [ngClass]=\"{'font-weight-bold':selectedSideBarTab==='pipeline'}\"\r\n                 (click)=\"selectedSideBarTab='pipeline'\"\r\n                 class=\"tab-theme font-weight-bold\">Pipeline\r\n              </a>\r\n              <div routerLink=\".\"\r\n                   [queryParams]=\"{'build-tab':'knowledge'}\"\r\n                   queryParamsHandling=\"merge\"\r\n                   [ngClass]=\"{'font-weight-bold':selectedSideBarTab==='knowledge'}\"\r\n                   (click)=\"selectedSideBarTab='knowledge'\"\r\n                   class=\"tab-theme\">Knowledge base\r\n              </div>\r\n              <div routerLink=\".\"\r\n                   [queryParams]=\"{'build-tab':'code'}\"\r\n                   queryParamsHandling=\"merge\"\r\n                   [ngClass]=\"{'font-weight-bold':selectedSideBarTab==='code'}\"\r\n                   (click)=\"selectedSideBarTab='code'\"\r\n                   class=\"tab-theme\">Code\r\n              </div>\r\n              <div routerLink=\".\"\r\n                   [queryParams]=\"{'build-tab':'integration'}\"\r\n                   queryParamsHandling=\"merge\"\r\n                   [ngClass]=\"{'font-weight-bold':selectedSideBarTab==='integration'}\"\r\n                   (click)=\"selectedSideBarTab='integration'\"\r\n                   class=\"tab-theme\">Integrations\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--side bar ends-->\r\n\r\n          <div class=\"px-2 pt-2 pb-0 d-flex  w-100\">\r\n            <app-pipeline\r\n              (datachanged$)=\"datachanged($event)\" *ngIf=\"selectedSideBarTab==='pipeline'\"\r\n                          [bot]=\"bot\"></app-pipeline>\r\n            <!--<app-knowledge-base (datachanged$)=\"datachanged($event)\" *ngIf=\"selectedSideBarTab==='knowledge'\"-->\r\n            <!--[bot]=\"bot\"></app-knowledge-base>-->\r\n            <app-knowledge-base-wrapper [bot]=\"bot\"\r\n                                        *ngIf=\"selectedSideBarTab==='knowledge'\"></app-knowledge-base-wrapper>\r\n\r\n            <app-code-input (datachanged$)=\"datachanged($event)\" *ngIf=\"selectedSideBarTab==='code'\"\r\n                            [bot]=\"bot\"></app-code-input>\r\n            <app-integration-option-list (datachanged$)=\"datachanged($event)\" *ngIf=\"selectedSideBarTab==='integration'\"\r\n                                         [bot]=\"bot\"></app-integration-option-list>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <!--architeture ends-->\r\n\r\n    <div class=\"p-0 d-flex d-flex-column-custom  flex-grow-1\"  *ngIf=\"selectedTab==='testing'\">\r\n      <app-bot-testing class=\" d-flex-column-custom flex-grow-1\" [bot]=\"bot\"></app-bot-testing>\r\n    </div>\r\n\r\n    <div class=\"col-12 scroll-wrapper\" *ngIf=\"selectedTab==='sessions'\">\r\n      <app-bot-sessions [id]=\"bot.id\" [bot]=\"bot\"></app-bot-sessions>\r\n    </div>\r\n\r\n    <div class=\"d-flex-column-last-child-flex-grow-1 scroll-wrapper\" *ngIf=\"selectedTab==='consumer'\">\r\n      <app-consumers class=\"d-flex-column-last-child-flex-grow-1 \" [id]=\"bot.id\" [bot]=\"bot\"></app-consumers>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<app-imi-loader *ngIf=\"!bot\"></app-imi-loader>\r\n\r\n<ng-template #placeholder>\r\n  <div class=\"row row-details\">\r\n    <div class=\"col-2  d-flex flex-column align-items-center justify-content-start\">\r\n      <i class=\"fa fa-area-chart p-0\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Total Session</span>\r\n    </div>\r\n    <div class=\"col-2 pb-5 d-flex flex-column align-items-center\">\r\n      <i class=\"fa fa-users\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Total Users</span>\r\n    </div>\r\n    <div class=\"col-2 d-flex flex-column align-items-center\">\r\n      <i class=\"fa fa-envelope\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Total Messages</span>\r\n    </div>\r\n    <div class=\"col-2 d-flex flex-column align-items-center\">\r\n      <i class=\"fa fa-exchange\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Average Message Per Session</span>\r\n    </div>\r\n    <div class=\"col-2 d-flex flex-column align-items-center\">\r\n      <i class=\"fa fa-clock-o\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Total Time Spent(hh:mm)</span>\r\n    </div>\r\n    <div class=\"col-2 d-flex flex-column align-items-center\">\r\n      <i class=\"fa fa-hourglass\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Time Spent Per Session (hh:mm)</span>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/code-based-bot-detail/code-based-bot-detail.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/core/bot-detail/code-based-bot-detail/code-based-bot-detail.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bot-detail-grid {\n  display: -ms-grid;\n  display: grid;\n  height: 100vh;\n      -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n      -ms-grid-rows: 40px 8px auto 8px 1fr;\n      grid-template-rows: 40px auto 1fr;\n  grid-gap: 8px;\n      grid-template-areas: 'header' 'config' 'architecture'; }\n  .bot-detail-grid .header {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: header; }\n  .bot-detail-grid .config {\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    grid-area: config; }\n  .bot-detail-grid .architecture {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: architecture;\n    overflow-y: auto; }\n  .bot-detail-grid-architecture-full-screen {\n  display: -ms-grid;\n  display: grid;\n  height: calc(100vh - 76px);\n      -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n      -ms-grid-rows: minmax(60vh, 1fr);\n      grid-template-rows: minmax(60vh, 1fr);\n  grid-gap: 8px;\n  margin-top: 10px;\n      grid-template-areas: 'architecture'; }\n  .bot-detail-grid-architecture-full-screen .architecture {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: architecture; }\n  .row-details .fa {\n  font-size: 30px;\n  font-weight: 400;\n  height: 40px;\n  color: #00abd3; }\n  .label {\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 400;\n  color: #56627c;\n  font-family: \"Helvetica\", sans-serif; }\n  .title {\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 700;\n  color: #56627c;\n  font-family: \"Helvetica\", sans-serif; }\n  .description {\n  font-size: 11px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif;\n  text-align: center; }\n  #channel-selector {\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n  .architeture-body {\n  height: 85%; }\n  .architeture-body .side-bar {\n    width: 12.5%;\n    padding-right: 0px; }\n  .architeture-body .tab {\n    height: 32px;\n    display: flex;\n    align-items: center;\n    padding: 6px;\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif;\n    cursor: pointer; }\n  .architeture-body .tab:hover {\n      background-color: #f7f7f7; }\n  .scroll-wrapper {\n  overflow-y: auto; }\n  app-knowledge-base-wrapper, app-code-input, app-integration-option-list {\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n  display: block; }\n  app-integration-option-list {\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/core/bot-detail/code-based-bot-detail/code-based-bot-detail.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/core/bot-detail/code-based-bot-detail/code-based-bot-detail.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CodeBasedBotDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBasedBotDetailComponent", function() { return CodeBasedBotDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bot-sessions/bot-sessions.component */ "./src/app/core/bot-detail/bot-sessions/bot-sessions.component.ts");
/* harmony import */ var _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../view-bots/ngxs/view-bot.action */ "./src/app/core/view-bots/ngxs/view-bot.action.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
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










var CodeBasedBotDetailComponent = /** @class */ (function () {
    function CodeBasedBotDetailComponent(activatedRoute, router, serverService, store, constantsService, utilityService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.serverService = serverService;
        this.store = store;
        this.constantsService = constantsService;
        this.utilityService = utilityService;
        this.myETabNames = _constants_service__WEBPACK_IMPORTED_MODULE_9__["ETabNames"];
        this.isArchitectureFullScreen = false;
        this.selectedTab = 'architecture';
        this.showConfig = true;
        this.selectedChannel = 'all';
        this.selectedDurationDisplayName = 'Monthly';
        this.selectedSideBarTab = 'pipeline';
    }
    CodeBasedBotDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.loggeduser$.take(1).subscribe((loggedUserState:IAuthState)=>{
        var roleName = this.constantsService.loggedUser.role.name;
        if (roleName === _constants_service__WEBPACK_IMPORTED_MODULE_9__["ERoleName"].Admin || roleName === _constants_service__WEBPACK_IMPORTED_MODULE_9__["ERoleName"]['Bot Developer']) {
            this.selectedTab = 'architecture';
        }
        else if (roleName === _constants_service__WEBPACK_IMPORTED_MODULE_9__["ERoleName"].Tester) {
            this.selectedTab = 'testing';
        }
        else {
            this.selectedTab = 'sessions';
        }
        // });
        var isArchitectureFullScreen = this.activatedRoute.snapshot.queryParamMap.get('isArchitectureFullScreen');
        this.isArchitectureFullScreen = isArchitectureFullScreen === 'true';
        var showConfigStr = this.activatedRoute.snapshot.queryParamMap.get('show-config');
        this.showConfig = (showConfigStr === 'true' || showConfigStr == undefined);
        this.bot_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        /*TODO: replace this code by writing proper selector*/
        this.selectedTab = this.activatedRoute.snapshot.queryParamMap.get('build') || this.selectedTab;
        /*this.bot$ = */
        this.botlist$.subscribe(function (botListState) {
            if (botListState.allBotList)
                _this.bot = botListState.allBotList.find(function (bot) {
                    return bot.id === _this.bot_id;
                });
            console.log("Bot Opened", _this.bot);
            return _this.bot;
        });
        this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab') || 'pipeline';
        this.start_date = this.utilityService.getPriorDate(0);
        this.end_date = this.utilityService.getPriorDate(30);
        this.getOverviewInfo();
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.isArchitectureFullScreen = queryParams['isArchitectureFullScreen'] === 'true';
        });
    };
    CodeBasedBotDetailComponent.prototype.refreshBotDetails = function () {
        this.serverService.fetchSpecificBotFromServerAndUpdateBotList(this.bot);
        // let getBotByTokenUrl = this.constantsService.getSpecificBotByBotTokenUrl();
        // let headerData: IHeaderData = {
        //   'bot-access-token': this.bot.bot_access_token
        // };
        // this.serverService.makeGetReq<{ objects: IBot[] }>({url: getBotByTokenUrl, headerData})
        //   .subscribe((val) => {
        //
        //     let bot: IBot = val.objects.find((bot) => {
        //
        //       return bot.id === this.bot.id;
        //     });
        //     this.store.dispatch([
        //       new UpdateBotInfoByIdInBotInBotList({data: bot, botId: this.bot.id})
        //     ]);
        //   });
    };
    CodeBasedBotDetailComponent.prototype.selectedChannelChanged = function (channel, name) {
        this.selectedChannelDisplayName = name;
        this.selectedChannel = channel;
        this.getOverviewInfo();
    };
    CodeBasedBotDetailComponent.prototype.selectedDurationChanged = function (priordays, name) {
        this.selectedDurationDisplayName = name;
        this.start_date = this.utilityService.getPriorDate(0);
        this.end_date = this.utilityService.getPriorDate(priordays);
        this.getOverviewInfo();
    };
    CodeBasedBotDetailComponent.prototype.getOverviewInfo = function () {
        /*TODO: improve below by adding all the fields*/
        this.overviewInfo$ = this.serverService.getOverviewInfo({
            bot_id: this.bot_id,
            platform: this.selectedChannel,
            start_date: this.start_date,
            end_date: this.end_date
        });
    };
    CodeBasedBotDetailComponent.prototype.refreshSession = function () {
        this.sessionChild.refreshSession();
    };
    CodeBasedBotDetailComponent.prototype.tabChanged = function (tab) {
        this.selectedTab = tab;
    };
    CodeBasedBotDetailComponent.prototype.datachanged = function (data) {
        ;
        this.store.dispatch([
            new _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_8__["UpdateBotInfoByIdInBotInBotList"]({ data: data, botId: this.bot_id })
        ]);
    };
    CodeBasedBotDetailComponent.prototype.togglePanel = function () {
        this.showConfig = !this.showConfig;
        // this.router.navigate(['.'], {queryParams:{'show-config':this.showConfig}});
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: __assign({}, this.activatedRoute.snapshot.queryParams, { 'show-config': this.showConfig })
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], CodeBasedBotDetailComponent.prototype, "botlist$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_7__["BotSessionsComponent"]),
        __metadata("design:type", _bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_7__["BotSessionsComponent"])
    ], CodeBasedBotDetailComponent.prototype, "sessionChild", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], CodeBasedBotDetailComponent.prototype, "loggeduser$", void 0);
    CodeBasedBotDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-code-based-bot-detail',
            template: __webpack_require__(/*! ./code-based-bot-detail.component.html */ "./src/app/core/bot-detail/code-based-bot-detail/code-based-bot-detail.component.html"),
            styles: [__webpack_require__(/*! ./code-based-bot-detail.component.scss */ "./src/app/core/bot-detail/code-based-bot-detail/code-based-bot-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _constants_service__WEBPACK_IMPORTED_MODULE_9__["ConstantsService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]])
    ], CodeBasedBotDetailComponent);
    return CodeBasedBotDetailComponent;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-white p-3 mt-4 shadow-theme\">\r\n  <app-consumers></app-consumers>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/bot-detail/consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ConsumerFullscreenWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerFullscreenWrapperComponent", function() { return ConsumerFullscreenWrapperComponent; });
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

var ConsumerFullscreenWrapperComponent = /** @class */ (function () {
    function ConsumerFullscreenWrapperComponent() {
    }
    ConsumerFullscreenWrapperComponent.prototype.ngOnInit = function () {
    };
    ConsumerFullscreenWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consumer-fullscreen-wrapper',
            template: __webpack_require__(/*! ./consumer-fullscreen-wrapper.component.html */ "./src/app/core/bot-detail/consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./consumer-fullscreen-wrapper.component.scss */ "./src/app/core/bot-detail/consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsumerFullscreenWrapperComponent);
    return ConsumerFullscreenWrapperComponent;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/consumers/consumers.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/bot-detail/consumers/consumers.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!--<div class=\"d-flex justify-content-end align-items-center my-2\">-->\r\n    <!--<div><i class=\"fa fa-refresh pr-2 cursor-pointer\" style=\"font-size: 19px\" (click)=\"reloadData()\"></i></div>-->\r\n    <!--&lt;!&ndash; <div *ngIf=\"!isFullscreen\"><i class=\"fa fa-external-link pr-2 cursor-pointer\" style=\"font-size: 19px\" (click)=\"goFullScreen()\"></i></div> &ndash;&gt;-->\r\n  <!--</div>-->\r\n\r\n  <app-smart-table\r\n    class=\"d-flex-column-last-child-flex-grow-1\"\r\n    [totalRecords]=\"totalRecords\"\r\n    (pageChanged$)=\"pageChanged($event)\"\r\n    [data]=\"(consumerTableData)|limitObjectArraysString\"\r\n    [showRefreshButton]=\"true\"\r\n    (refreshData$)=\"reloadData()\"\r\n    [settings]=\"smartTableSettings_Consumers\"\r\n    (customActionEvents)=\"customActionEventsTriggeredInSessionsTable($event,Primarytemplat)\"\r\n    [showSearchInDbButton]=\"true\"\r\n    (performSearchInDB$)=\"performSearchInDbForConsumer($event)\">\r\n  </app-smart-table>\r\n\r\n  <ng-template #Primarytemplat>\r\n      <div class=\"primary-modal\">\r\n        <div class=\"top-dec\"></div>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title mb-2\" style=\"display: flex;justify-content: start;\">Reason for decryption</h4>\r\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-body pt-0\">\r\n         <!-- <div>\r\n           <input type=\"text\" [(ngModel)] = \"decryptReason\">\r\n           <button class=\"btn-theme-primary\" (click)=\"decryptSubmit();modalRef.hide()\">Submit</button>\r\n         </div> -->\r\n         <form #form=\"ngForm\">\r\n          <div class=\"text-center my-1\">\r\n            <label for=\"\" class=\"mr-1\">Reason</label>\r\n            <input autofocus type=\"text\" required style=\"border-radius: 0px !important;\" [(ngModel)] = \"decryptReason\" name=\"decryptReason\">\r\n          </div>\r\n          <button [disabled]=\"!form.valid\" class=\" btn btn-theme-success-sm\" (click)=\"decryptSubmit();modalRef.hide()\">Submit</button>\r\n        </form>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/consumers/consumers.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/core/bot-detail/consumers/consumers.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa {\n  color: #9e9e9e; }\n\n.primary-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n\n.primary-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #00abd3; }\n\n.primary-modal .modal-header {\n    color: #474747; }\n\n.primary-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n\n.primary-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n\n.danger-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n\n.danger-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #b14250; }\n\n.danger-modal .modal-header {\n    color: #474747; }\n\n.danger-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n\n.danger-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/core/bot-detail/consumers/consumers.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/bot-detail/consumers/consumers.component.ts ***!
  \******************************************************************/
/*! exports provided: ConsumersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumersComponent", function() { return ConsumersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
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







var ConsumersComponent = /** @class */ (function () {
    function ConsumersComponent(serverService, constantsService, router, activatedRoute, modalService, store) {
        this.serverService = serverService;
        this.constantsService = constantsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.store = store;
        this.smartTableSettings_Consumers = this.constantsService.SMART_TABLE_CONSUMER_SETTING;
    }
    ConsumersComponent.prototype.reloadData = function () {
        this.loadConsumerData();
    };
    ConsumersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bot_id =
            Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.isFullscreen = this.activatedRoute.snapshot.data['isFullscreen'];
        this.botlist$.subscribe(function (viewBotState) {
            _this.bot = viewBotState.allBotList.find(function (bot) { return bot.id === _this.bot_id; });
        });
        this.loadConsumerData();
    };
    ConsumersComponent.prototype.pageChanged = function (selectedPage) {
        this.loadConsumerData(10, (selectedPage - 1) * 10);
    };
    ConsumersComponent.prototype.loadConsumerData = function (limit, offset) {
        var _this = this;
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        var url = this.constantsService.getBotConsumerUrl(limit, offset);
        this.serverService
            .makeGetReq({ url: url, headerData: { 'bot-access-token': this.bot.bot_access_token } })
            .map(function (value) {
            _this.totalRecords = value.meta.total_count;
            return __assign({}, value, { objects: value.objects.map(function (result) {
                    // let modified_update_at = (new Date(result.updated_at)).toDateString();
                    return __assign({}, result);
                }) });
        }).subscribe(function (value) {
            _this.consumerTableData = value.objects;
        });
    };
    ConsumersComponent.prototype.goFullScreen = function () {
        this.router.navigate(["core/botdetail/" + this.bot_id + "/consumer"]);
        // http://localhost:4200/core/botdetail/27/consumer
    };
    ConsumersComponent.prototype.customActionEventsTriggeredInSessionsTable = function (data, Primarytemplat) {
        if (data.action === 'decrypt') {
            /*use dcrypt api*/
            this.consumerItemToBeDecrypted = data.data;
            this.openCreateBotModal(Primarytemplat);
        }
    };
    ConsumersComponent.prototype.decryptSubmit = function () {
        var _this = this;
        var headerData = {
            "bot-access-token": this.bot.bot_access_token
        };
        var body = { "consumer_id": this.consumerItemToBeDecrypted.id, "decrypt_audit_type": "consumer", "message": this.decryptReason };
        var url = this.constantsService.getDecryptUrl();
        this.serverService.makePostReq({ headerData: headerData, body: body, url: url })
            .subscribe(function () {
            _this.decryptReason = "";
            var url = _this.constantsService.getBotConsumerByIdUrl(_this.consumerItemToBeDecrypted.id);
            _this.serverService
                .makeGetReq({ url: url, headerData: { 'bot-access-token': _this.bot.bot_access_token } })
                .map(function (result) {
                var modified_update_at = (new Date(result.updated_at)).toDateString();
                return __assign({}, result, { updated_at: modified_update_at });
            })
                .subscribe(function (value) {
                _this.consumersDecrypted = value;
                var index = _this.consumerTableData.findIndex(function (value) { return value.id === _this.consumerItemToBeDecrypted.id; });
                _this.consumerTableData[index] = _this.consumersDecrypted;
                _this.consumerTableData = _this.consumerTableData.slice();
            });
        });
    };
    ConsumersComponent.prototype.performSearchInDbForConsumer = function (data) {
        var _this = this;
        ;
        var url = this.constantsService.getBotConsumerByIdUrl(data["ID"]);
        this.serverService
            .makeGetReq({ url: url, headerData: { 'bot-access-token': this.bot.bot_access_token } })
            .subscribe(function (consumer) {
            _this.consumerTableData.push(consumer);
            _this.consumerTableData = _this.consumerTableData.slice();
        });
    };
    ConsumersComponent.prototype.openCreateBotModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConsumersComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConsumersComponent.prototype, "bot", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ConsumersComponent.prototype, "botlist$", void 0);
    ConsumersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consumers',
            template: __webpack_require__(/*! ./consumers.component.html */ "./src/app/core/bot-detail/consumers/consumers.component.html"),
            styles: [__webpack_require__(/*! ./consumers.component.scss */ "./src/app/core/bot-detail/consumers/consumers.component.scss")]
        }),
        __metadata("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ConsumersComponent);
    return ConsumersComponent;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/consumers/limit-object-arrays-string.pipe.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/bot-detail/consumers/limit-object-arrays-string.pipe.ts ***!
  \******************************************************************************/
/*! exports provided: LimitObjectArraysStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitObjectArraysStringPipe", function() { return LimitObjectArraysStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LimitObjectArraysStringPipe = /** @class */ (function () {
    function LimitObjectArraysStringPipe() {
    }
    LimitObjectArraysStringPipe.prototype.transform = function (consumerResults, args) {
        if (!consumerResults)
            return;
        consumerResults = JSON.parse(JSON.stringify(consumerResults));
        var x = consumerResults.map(function (consumer) {
            for (var key in consumer) {
                if (consumer[key] && consumer[key].length && consumer[key].length > 32)
                    consumer[key] = consumer[key].substring(1, 15) + '...';
            }
            return consumer;
        });
        return x;
    };
    LimitObjectArraysStringPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'limitObjectArraysString'
        })
    ], LimitObjectArraysStringPipe);
    return LimitObjectArraysStringPipe;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/pipeline-based-bot-detail/pipeline-based-bot-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/pipeline-based-bot-detail/pipeline-based-bot-detail.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"bot-detail-grid\" *ngIf=\"bot\">-->\r\n  <!--&lt;!&ndash;<div >&ndash;&gt;-->\r\n\r\n  <!--<div class=\"header\">-->\r\n    <!--<app-bot-detail-header [bot]=\"bot\" (refreshBotDetails$)=\"refreshBotDetails()\"></app-bot-detail-header>-->\r\n  <!--</div>-->\r\n\r\n  <!--<div class=\"row config bg-white pb-2 pt-3 shadow-theme\">-->\r\n    <!--&lt;!&ndash;&ndash;&gt;-->\r\n    <!--<div class=\"col-12 text-theme-normal\">-->\r\n      <!--&lt;!&ndash; <div class=\"col-12 d-flex justify-content-between px-3 pb-1\" (click)=\"showConfig=!showConfig\"> &ndash;&gt;-->\r\n      <!--<div class=\"col-12 d-flex justify-content-between px-3 pb-1\" >-->\r\n\r\n        <!--<div class=\"heading\" style=\"font-size: 14px !important;\">Bot Configuration</div>-->\r\n        <!--<div *ngIf=\"!showConfig\" class=\"d-flex mx-4 justify-content-between align-items-center flex-grow-1\">-->\r\n          <!--<div>Bot Unique Name : <strong>{{bot.bot_unique_name}}</strong></div>-->\r\n          <!--<div>Session Time : <strong>{{bot.room_persistence_time}} min</strong></div>-->\r\n          <!--<div>Advance Data Protection : <strong>{{bot.advanced_data_protection}}</strong></div>-->\r\n          <!--<div>Data Retention Period : <strong>{{bot.data_persistence_period}} Days</strong></div>-->\r\n          <!--<div>Blank Consent : <strong>{{bot.blanket_consent}}</strong></div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"cursor-pointer\"-->\r\n             <!--(click)=\"togglePanel()\">-->\r\n          <!--<i class=\"fa\" [ngClass]=\"{'fa-angle-up':showConfig, 'fa-angle-down':!showConfig}\"-->\r\n             <!--style=\"font-size: 20px; line-height: 12px\"></i>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n\r\n      <!--<app-bot-config (datachanged$)=\"datachanged($event)\" *ngIf=\"showConfig\" [bot]=\"(bot)\"></app-bot-config>-->\r\n\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--&lt;!&ndash;============= REDESIGN=================&ndash;&gt;-->\r\n\r\n  <!--<div class=\"row shadow-theme architecture bg-white p-1 px-2 my align-content-start\" *myIf=\"myETabNames.lower_panel_bot_detail\">-->\r\n    <!--&lt;!&ndash;tabs start&ndash;&gt;-->\r\n    <!--<div class=\"col-12  px-2\">-->\r\n      <!--<ul class=\"nav nav-tabs theme-tabbing mb-1 bg-white\" >-->\r\n        <!--<li *myIf=\"myETabNames.architecture_tab\" class=\"nav-item\" [ngClass]=\"{'tab-active':selectedTab==='architecture'}\">-->\r\n          <!--<a class=\"nav-link heading\" [routerLink]=\"['.']\"-->\r\n             <!--queryParamsHandling=\"merge\"-->\r\n             <!--replaceUrl=\"true\"-->\r\n             <!--(click)=\"tabChanged('architecture')\"-->\r\n             <!--[queryParams]=\"{build:'architecture'}\"><strong>Architecture</strong></a>-->\r\n        <!--</li>-->\r\n      <!--</ul>-->\r\n\r\n    <!--</div>-->\r\n    <!--&lt;!&ndash;tabs end&ndash;&gt;-->\r\n\r\n    <!--&lt;!&ndash;architeture starts&ndash;&gt;-->\r\n    <!--<div class=\"col-12 p-0\" style=\"height: 90%\" *ngIf=\"selectedTab==='architecture' &&  bot \" >-->\r\n      <!--<div class=\"col-12 architeture-body\" style=\"overflow-y: auto;height: 100%\" *myIf=\"myETabNames.lower_panel_bot_detail\">-->\r\n        <!--<div class=\"d-flex row-body bg-white \" style=\"height: 98%\">&lt;!&ndash;TODO: 98% to avoid scroll bar; use grid instead&ndash;&gt;-->\r\n          <!--&lt;!&ndash;side bar starts&ndash;&gt;-->\r\n          <!--<div class=\"side-bar  border-right\">-->\r\n            <!--<div class=\"sidebar-content\">-->\r\n              <!--<a routerLink=\".\"-->\r\n                 <!--[queryParams]=\"{'build-tab':'pipeline'}\"-->\r\n                 <!--queryParamsHandling=\"merge\"-->\r\n                 <!--[ngClass]=\"{'font-weight-bold':selectedSideBarTab==='pipeline'}\"-->\r\n                 <!--(click)=\"selectedSideBarTab='pipeline'\"-->\r\n                 <!--class=\"tab-theme font-weight-bold\">Pipeline-->\r\n              <!--</a>-->\r\n              <!--<div routerLink=\".\"-->\r\n                   <!--[queryParams]=\"{'build-tab':'knowledge'}\"-->\r\n                   <!--queryParamsHandling=\"merge\"-->\r\n                   <!--[ngClass]=\"{'font-weight-bold':selectedSideBarTab==='knowledge'}\"-->\r\n                   <!--(click)=\"selectedSideBarTab='knowledge'\"-->\r\n                   <!--class=\"tab-theme\">Knowledge base-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n          <!--&lt;!&ndash;side bar ends&ndash;&gt;-->\r\n\r\n          <!--<div class=\"px-2 pt-2 pb-0 d-flex  w-100\">-->\r\n            <!--<app-pipeline (datachanged$)=\"datachanged($event)\" *ngIf=\"selectedSideBarTab==='pipeline'\"-->\r\n                          <!--[bot]=\"bot\"></app-pipeline>-->\r\n            <!--<app-knowledge-base-wrapper [bot]=\"bot\" *ngIf=\"selectedSideBarTab==='knowledge'\"></app-knowledge-base-wrapper>-->\r\n          <!--</div>-->\r\n\r\n        <!--</div>-->\r\n\r\n      <!--</div>-->\r\n\r\n    <!--</div>-->\r\n    <!--&lt;!&ndash;architeture ends&ndash;&gt;-->\r\n\r\n  <!--</div>-->\r\n\r\n<!--</div>-->\r\n\r\n<!--<ng-template #placeholder>-->\r\n  <!--<div class=\"row row-details\">-->\r\n    <!--<div class=\"col-2  d-flex flex-column align-items-center justify-content-start\">-->\r\n      <!--<i class=\"fa fa-area-chart p-0\"></i>-->\r\n      <!--<span class=\"number\">0</span>-->\r\n      <!--<span class=\"description\">Total Session</span>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"col-2 pb-5 d-flex flex-column align-items-center\">-->\r\n      <!--<i class=\"fa fa-users\"></i>-->\r\n      <!--<span class=\"number\">0</span>-->\r\n      <!--<span class=\"description\">Total Users</span>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"col-2 d-flex flex-column align-items-center\">-->\r\n      <!--<i class=\"fa fa-envelope\"></i>-->\r\n      <!--<span class=\"number\">0</span>-->\r\n      <!--<span class=\"description\">Total Messages</span>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"col-2 d-flex flex-column align-items-center\">-->\r\n      <!--<i class=\"fa fa-exchange\"></i>-->\r\n      <!--<span class=\"number\">0</span>-->\r\n      <!--<span class=\"description\">Average Message Per Session</span>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"col-2 d-flex flex-column align-items-center\">-->\r\n      <!--<i class=\"fa fa-clock-o\"></i>-->\r\n      <!--<span class=\"number\">0</span>-->\r\n      <!--<span class=\"description\">Total Time Spent(hh:mm)</span>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"col-2 d-flex flex-column align-items-center\">-->\r\n      <!--<i class=\"fa fa-hourglass\"></i>-->\r\n      <!--<span class=\"number\">0</span>-->\r\n      <!--<span class=\"description\">Time Spent Per Session (hh:mm)</span>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</ng-template>-->\r\n\r\n<!--copied from code based bot below-->\r\n<!---->\r\n<div\r\n  [ngClass]=\"{'bot-detail-grid-architecture-full-screen':isArchitectureFullScreen,'bot-detail-grid':!isArchitectureFullScreen}\"\r\n  *ngIf=\"bot\">\r\n\r\n  <div class=\"header\" *ngIf=\"!isArchitectureFullScreen\">\r\n    <app-bot-detail-header [bot]=\"bot\" (refreshBotDetails$)=\"refreshBotDetails()\"></app-bot-detail-header>\r\n  </div>\r\n  <div class=\"d-flex-column-last-child-flex-grow-1 config bg-white px-3 py-3 shadow-theme\" *ngIf=\"!isArchitectureFullScreen\">\r\n    <div class=\"d-flex-column-last-child-flex-grow-1 text-theme-normal justify-content-center\">\r\n      <div class=\"d-flex justify-content-between px-3\">\r\n\r\n        <div class=\"heading\" style=\"font-size: 14px !important;\">Bot Configuration</div>\r\n        <div *ngIf=\"!showConfig\" class=\"d-flex mx-4 justify-content-between align-items-center flex-grow-1\">\r\n          <div>Bot Unique Name : <strong>{{bot.bot_unique_name}}</strong></div>\r\n          <div>Session Time : <strong>{{bot.room_persistence_time}} min</strong></div>\r\n          <div>Advance Data Protection : <strong>{{bot.advanced_data_protection}}</strong></div>\r\n          <div>Data Retention Period : <strong>{{bot.data_persistence_period}} Days</strong></div>\r\n          <div>Blank Consent : <strong>{{bot.blanket_consent}}</strong></div>\r\n        </div>\r\n        <div class=\"cursor-pointer\"\r\n             (click)=\"togglePanel()\">\r\n          <i class=\"fa\" [ngClass]=\"{'fa-angle-up':showConfig, 'fa-angle-down':!showConfig}\"\r\n             style=\"font-size: 20px; line-height: 12px\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <app-bot-config (datachanged$)=\"datachanged($event)\" *ngIf=\"showConfig\" [bot]=\"(bot)\"></app-bot-config>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!--============= REDESIGN=================-->\r\n\r\n  <div class=\"flex-column shadow-theme architecture bg-white p-1 px-2 my align-content-start\"\r\n       *myIf=\"myETabNames.lower_panel_bot_detail\">\r\n    <!--tabs start-->\r\n    <div class=\"px-2\">\r\n      <ul class=\"nav nav-tabs border-none theme-tabbing mb-1 bg-white\">\r\n        <li *myIf=\"myETabNames.architecture_tab\" class=\"nav-item\"\r\n            [ngClass]=\"{'tab-active':selectedTab==='architecture'}\">\r\n          <a class=\"nav-link heading\" [routerLink]=\"['.']\"\r\n             queryParamsHandling=\"merge\"\r\n             replaceUrl=\"true\"\r\n             (click)=\"tabChanged('architecture')\"\r\n             [queryParams]=\"{build:'architecture'}\"><strong>Architecture</strong></a>\r\n        </li>\r\n        <li class=\"nav-item ml-auto\">\r\n          <a class=\"nav-link heading\"\r\n             [routerLink]=\"['.']\"\r\n             queryParamsHandling=\"merge\"\r\n             replaceUrl=\"true\"\r\n             [queryParams]=\"{isArchitectureFullScreen:!isArchitectureFullScreen}\">\r\n            <i class=\"fa\"\r\n               [ngClass]=\"{'fa-window-restore':isArchitectureFullScreen, 'fa-expand':!isArchitectureFullScreen}\"></i>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n    <!--tabs end-->\r\n    <!---->\r\n    <!--architeture starts-->\r\n    <div class=\"col-12 p-0\" style=\"height: 85%\" *ngIf=\"selectedTab==='architecture' &&  bot \">\r\n      <div class=\"col-12 architeture-body\" style=\"overflow-y: auto;height: 100%\" *myIf=\"myETabNames.architecture_items\">\r\n        <div class=\"d-flex row-body bg-white \" style=\"height: 98%\">\r\n          <!--TODO: 98% to avoid scroll bar; use grid instead-->\r\n          <!--side bar starts-->\r\n          <div class=\"side-bar  border-right\">\r\n            <div class=\"sidebar-content\">\r\n              <a routerLink=\".\"\r\n                 [queryParams]=\"{'build-tab':'pipeline'}\"\r\n                 queryParamsHandling=\"merge\"\r\n                 [ngClass]=\"{'font-weight-bold':selectedSideBarTab==='pipeline'}\"\r\n                 (click)=\"selectedSideBarTab='pipeline'\"\r\n                 class=\"tab-theme font-weight-bold\">Pipeline\r\n              </a>\r\n              <div routerLink=\".\"\r\n                   [queryParams]=\"{'build-tab':'knowledge'}\"\r\n                   queryParamsHandling=\"merge\"\r\n                   [ngClass]=\"{'font-weight-bold':selectedSideBarTab==='knowledge'}\"\r\n                   (click)=\"selectedSideBarTab='knowledge'\"\r\n                   class=\"tab-theme\">Knowledge base\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--side bar ends-->\r\n\r\n          <div class=\"px-2 pt-2 pb-0 d-flex  w-100\">\r\n            <app-pipeline\r\n              (datachanged$)=\"datachanged($event)\" *ngIf=\"selectedSideBarTab==='pipeline'\"\r\n              [bot]=\"bot\"></app-pipeline>\r\n            <!--<app-knowledge-base (datachanged$)=\"datachanged($event)\" *ngIf=\"selectedSideBarTab==='knowledge'\"-->\r\n            <!--[bot]=\"bot\"></app-knowledge-base>-->\r\n            <app-knowledge-base-wrapper [bot]=\"bot\"\r\n                                        *ngIf=\"selectedSideBarTab==='knowledge'\"></app-knowledge-base-wrapper>\r\n\r\n            <!--<app-code-input (datachanged$)=\"datachanged($event)\" *ngIf=\"selectedSideBarTab==='code'\"-->\r\n                            <!--[bot]=\"bot\"></app-code-input>-->\r\n            <!--<app-integration-option-list (datachanged$)=\"datachanged($event)\" *ngIf=\"selectedSideBarTab==='integration'\"-->\r\n                                         <!--[bot]=\"bot\"></app-integration-option-list>-->\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <!--architeture ends-->\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<app-imi-loader *ngIf=\"!bot\"></app-imi-loader>\r\n\r\n<ng-template #placeholder>\r\n  <div class=\"row row-details\">\r\n    <div class=\"col-2  d-flex flex-column align-items-center justify-content-start\">\r\n      <i class=\"fa fa-area-chart p-0\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Total Session</span>\r\n    </div>\r\n    <div class=\"col-2 pb-5 d-flex flex-column align-items-center\">\r\n      <i class=\"fa fa-users\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Total Users</span>\r\n    </div>\r\n    <div class=\"col-2 d-flex flex-column align-items-center\">\r\n      <i class=\"fa fa-envelope\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Total Messages</span>\r\n    </div>\r\n    <div class=\"col-2 d-flex flex-column align-items-center\">\r\n      <i class=\"fa fa-exchange\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Average Message Per Session</span>\r\n    </div>\r\n    <div class=\"col-2 d-flex flex-column align-items-center\">\r\n      <i class=\"fa fa-clock-o\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Total Time Spent(hh:mm)</span>\r\n    </div>\r\n    <div class=\"col-2 d-flex flex-column align-items-center\">\r\n      <i class=\"fa fa-hourglass\"></i>\r\n      <span class=\"number\">0</span>\r\n      <span class=\"description\">Time Spent Per Session (hh:mm)</span>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/pipeline-based-bot-detail/pipeline-based-bot-detail.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/pipeline-based-bot-detail/pipeline-based-bot-detail.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bot-detail-grid {\n  display: -ms-grid;\n  display: grid;\n  height: 100vh;\n      -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n      -ms-grid-rows: 40px 8px auto 8px minmax(60vh, 1fr);\n      grid-template-rows: 40px auto minmax(60vh, 1fr);\n  grid-gap: 8px;\n      grid-template-areas: 'header'\r 'config'\r 'architecture'; }\n  .bot-detail-grid .header {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: header; }\n  .bot-detail-grid .config {\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    grid-area: config; }\n  .bot-detail-grid .architecture {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: architecture; }\n  .row-details .fa {\n  font-size: 30px;\n  font-weight: 400;\n  height: 40px;\n  color: #00abd3; }\n  .label {\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 400;\n  color: #56627c;\n  font-family: \"Helvetica\", sans-serif; }\n  .title {\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 700;\n  color: #56627c;\n  font-family: \"Helvetica\", sans-serif; }\n  .description {\n  font-size: 11px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif;\n  text-align: center; }\n  #channel-selector {\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n  .architeture-body {\n  height: 85%; }\n  .architeture-body .side-bar {\n    width: 12.5%;\n    padding-right: 0px; }\n  .architeture-body .tab {\n    height: 32px;\n    display: flex;\n    align-items: center;\n    padding: 6px;\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif;\n    cursor: pointer; }\n  .architeture-body .tab:hover {\n      background-color: #f7f7f7; }\n  .scroll-wrapper {\n  overflow-y: scroll;\n  height: 90%; }\n  app-knowledge-base-wrapper, app-code-input, app-integration-option-list, app-bot-testing {\n  height: 100%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  width: 100%;\n  display: block; }\n  app-integration-option-list {\n  display: flex; }\n  .bot-detail-grid-architecture-full-screen {\n  display: -ms-grid;\n  display: grid;\n  height: calc(100vh - 76px);\n      -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n      -ms-grid-rows: minmax(60vh, 1fr);\n      grid-template-rows: minmax(60vh, 1fr);\n  grid-gap: 8px;\n  margin-top: 10px;\n      grid-template-areas: 'architecture'; }\n  .bot-detail-grid-architecture-full-screen .architecture {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: architecture; }\n"

/***/ }),

/***/ "./src/app/core/bot-detail/pipeline-based-bot-detail/pipeline-based-bot-detail.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/core/bot-detail/pipeline-based-bot-detail/pipeline-based-bot-detail.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PipelineBasedBotDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineBasedBotDetailComponent", function() { return PipelineBasedBotDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view-bots/ngxs/view-bot.action */ "./src/app/core/view-bots/ngxs/view-bot.action.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bot-sessions/bot-sessions.component */ "./src/app/core/bot-detail/bot-sessions/bot-sessions.component.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
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









var PipelineBasedBotDetailComponent = /** @class */ (function () {
    function PipelineBasedBotDetailComponent(router, activatedRoute, serverService, store, utilityService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.serverService = serverService;
        this.store = store;
        this.utilityService = utilityService;
        this.myETabNames = _constants_service__WEBPACK_IMPORTED_MODULE_8__["ETabNames"];
        this.isArchitectureFullScreen = false;
        this.selectedTab = "architecture";
        this.showConfig = true;
        this.selectedChannel = 'all';
        this.selectedDurationDisplayName = 'Monthly';
        this.selectedSideBarTab = 'pipeline';
    }
    PipelineBasedBotDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isArchitectureFullScreen = this.activatedRoute.snapshot.queryParamMap.get('isArchitectureFullScreen');
        this.isArchitectureFullScreen = isArchitectureFullScreen === 'true';
        this.bot_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        /*TODO: replace this code by writing proper selector*/
        this.selectedTab = this.activatedRoute.snapshot.queryParamMap.get('build') || "architecture";
        this.botlist$.subscribe(function (botlist) {
            _this.bot = botlist.allBotList.find(function (bot) {
                return bot.id === _this.bot_id; //
            });
        });
        this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab') || 'pipeline';
        this.start_date = this.utilityService.getPriorDate(0);
        this.end_date = this.utilityService.getPriorDate(30);
        this.getOverviewInfo();
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.isArchitectureFullScreen = queryParams['isArchitectureFullScreen'] === 'true';
        });
    };
    PipelineBasedBotDetailComponent.prototype.selectedChannelChanged = function (channel, name) {
        this.selectedChannelDisplayName = name;
        this.selectedChannel = channel;
        this.getOverviewInfo();
    };
    PipelineBasedBotDetailComponent.prototype.selectedDurationChanged = function (priordays, name) {
        this.selectedDurationDisplayName = name;
        this.start_date = this.utilityService.getPriorDate(0);
        this.end_date = this.utilityService.getPriorDate(priordays);
        this.getOverviewInfo();
    };
    PipelineBasedBotDetailComponent.prototype.getOverviewInfo = function () {
        /*TODO: improve below by adding all the fields*/
        this.overviewInfo$ = this.serverService.getOverviewInfo({
            bot_id: this.bot_id,
            platform: this.selectedChannel,
            start_date: this.start_date,
            end_date: this.end_date
        });
    };
    PipelineBasedBotDetailComponent.prototype.refreshSession = function () {
        this.sessionChild.refreshSession();
    };
    PipelineBasedBotDetailComponent.prototype.tabChanged = function (tab) {
        this.selectedTab = tab;
    };
    PipelineBasedBotDetailComponent.prototype.datachanged = function (data) {
        this.store.dispatch([
            new _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_1__["UpdateBotInfoByIdInBotInBotList"]({ data: data, botId: this.bot_id })
        ]);
    };
    PipelineBasedBotDetailComponent.prototype.refreshBotDetails = function () {
        this.serverService.fetchSpecificBotFromServerAndUpdateBotList(this.bot);
    };
    PipelineBasedBotDetailComponent.prototype.togglePanel = function () {
        /*TODO: this code is repeated in code-based-bot-detail.component.ts, put it in a service*/
        this.showConfig = !this.showConfig;
        // this.router.navigate(['.'], {queryParams:{'show-config':this.showConfig}});
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: __assign({}, this.activatedRoute.snapshot.queryParams, { 'show-config': this.showConfig })
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], PipelineBasedBotDetailComponent.prototype, "botlist$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_3__["BotSessionsComponent"]),
        __metadata("design:type", _bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_3__["BotSessionsComponent"])
    ], PipelineBasedBotDetailComponent.prototype, "sessionChild", void 0);
    PipelineBasedBotDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pipeline-based-bot-detail',
            template: __webpack_require__(/*! ./pipeline-based-bot-detail.component.html */ "./src/app/core/bot-detail/pipeline-based-bot-detail/pipeline-based-bot-detail.component.html"),
            styles: [__webpack_require__(/*! ./pipeline-based-bot-detail.component.scss */ "./src/app/core/bot-detail/pipeline-based-bot-detail/pipeline-based-bot-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
    ], PipelineBasedBotDetailComponent);
    return PipelineBasedBotDetailComponent;
}());



/***/ }),

/***/ "./src/app/core/bot-detail/session/session.component.html":
/*!****************************************************************!*\
  !*** ./src/app/core/bot-detail/session/session.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  session works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/bot-detail/session/session.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/core/bot-detail/session/session.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/bot-detail/session/session.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/bot-detail/session/session.component.ts ***!
  \**************************************************************/
/*! exports provided: SessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionComponent", function() { return SessionComponent; });
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

var SessionComponent = /** @class */ (function () {
    function SessionComponent() {
    }
    SessionComponent.prototype.ngOnInit = function () {
    };
    SessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-session',
            template: __webpack_require__(/*! ./session.component.html */ "./src/app/core/bot-detail/session/session.component.html"),
            styles: [__webpack_require__(/*! ./session.component.scss */ "./src/app/core/bot-detail/session/session.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SessionComponent);
    return SessionComponent;
}());



/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-grid\">\r\n  <div class=\"row row-version my-2 m-0\" style=\"position: relative\" (clickOutside)=\"showVersionList = false\">\r\n    <div class=\"col-6 p-0\" [ngClass]=\"{'bg-theme-secondary':!selectedVersion}\">\r\n      <div *ngIf=\"selectedVersion\"\r\n           class=\"d-flex align-items-center flex-bot-versioning-toaster border-theme-secondary\">\r\n        <div class=\"version-active-label\" *ngIf=\"selectedVersion\"\r\n             [ngClass]=\"{'bg-label-active':selectedVersion?.id === activeVersion?.id,'bg-label-inactive':selectedVersion?.id !== activeVersion?.id}\">\r\n          <div>{{selectedVersion.id === (activeVersion && activeVersion.id)?'Active':'Inactive'}}</div>\r\n        </div>\r\n        <!--<button *ngIf=\"selectedVersion?.id === activeVersion?.id\" class=\"btn btn-theme-primary mr-1\"-->\r\n        <!--style=\"flex-basis: 56px\">Active-->\r\n        <!--</button>-->\r\n        <!--<button-->\r\n        <!--*ngIf=\"selectedVersion?.id !== activeVersion?.id\" class=\"btn btn-theme-dark mr-1\"-->\r\n        <!--style=\"flex-basis: 56px\">Inactive-->\r\n        <!--</button>-->\r\n        <div class=\"count mx-1 flex-shrink-0 flex-grow-0\">{{selectedVersion.version}}</div>\r\n        <div class=\"forked mr-1 pl-1\" *ngIf=\"selectedVersion.forked_from !== 0\">Forked from version\r\n          {{selectedVersion.forked_from}}\r\n        </div>\r\n        <div class=\"forked mr-1 pl-1\" *ngIf=\"selectedVersion.forked_from === 0\">Default created version\r\n        </div>\r\n        <div class=\"update d-flex flex-column mr-1 justify-content-center\">\r\n          <div>Last update</div>\r\n          <div class=\"d-flex justify-content-left pt-1\" *ngIf=\"selectedVersion\">\r\n            <!-- <i class=\"fa fa-circle\"\r\n               [ngClass]=\"{'text-danger':selectedVersion.updated_fields['df_template'], 'dark-green':activeTab==='df_template'}\"></i> -->\r\n               <i class=\"fa fa-circle\"\r\n               [ngClass]=\"{'text-danger':selectedVersion.changed_fields['df_template'], 'dark-green':selectedVersion.updated_fields['df_template']}\"></i>\r\n            <i class=\"fa fa-circle\"\r\n               [ngClass]=\"{'text-danger':selectedVersion.changed_fields['df_rules'], 'dark-green':selectedVersion.updated_fields['df_rules']}\"></i>\r\n            <i class=\"fa fa-circle\"\r\n               [ngClass]=\"{'text-danger':selectedVersion.changed_fields['generation_rules'], 'dark-green':selectedVersion.updated_fields['generation_rules']}\"></i>\r\n            <i class=\"fa fa-circle\"\r\n               [ngClass]=\"{'text-danger':selectedVersion.changed_fields['generation_templates'], 'dark-green':selectedVersion.updated_fields['generation_templates']}\"></i>\r\n            <i class=\"fa fa-circle\"\r\n               [ngClass]=\"{'text-danger':selectedVersion.changed_fields['workflow'], 'dark-green':selectedVersion.updated_fields['workflow']}\"></i>\r\n          </div>\r\n          <!--<form class=\"d-flex\">-->\r\n          <!--<input type=\"radio\" name=\"optradio\" checked>-->\r\n          <!--<input type=\"radio\" name=\"optradio\">-->\r\n          <!--<input type=\"radio\" name=\"optradio\">-->\r\n          <!--<input type=\"radio\" name=\"optradio\">-->\r\n          <!--<input type=\"radio\" name=\"optradio\">-->\r\n          <!--</form>-->\r\n        </div>\r\n        <div class=\"insert mr-1\"\r\n             [popover]=\"selectedVersion && selectedVersion.comment\"\r\n             placement=\"bottom\"\r\n             triggers=\"mouseenter:mouseleave\">{{selectedVersion.comment.length>70?(((selectedVersion.comment)|slice:0:100) +\"...\"):selectedVersion?.comment}}\r\n          <!--<div class=\"insert mr-1\">{{(selectedVersion.comment)|slice:0:100}}-->\r\n        </div>\r\n        <!---->\r\n        <i (click)=\"showVersionList= !showVersionList\"\r\n           *ngIf=\"bot.store_bot_versions.length > 1\"\r\n           class=\"fa py-2 px-3 bg-theme-primary text-white ml-auto cursor-pointer\"\r\n           [ngClass]=\"{'fa-angle-up':showVersionList, 'fa-angle-down':!showVersionList}\"\r\n           style=\"height: 100%\"></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <button [disabled]=\"!selectedVersion\"\r\n              class=\"btn btn-theme-primary-outline mr-1\"\r\n              (click)=\"saveSelectedVersion()\">\r\n        {{(!bot.store_bot_versions || !bot.store_bot_versions.length || bot.store_bot_versions.length>0)?\"Save\":\"Create\"}}\r\n        version\r\n      </button>\r\n      <!--SHOAIB, I DONT UNDERSTAND WHY FOLLOWING WAS DONE-->\r\n      <!--<button class=\"btn btn-theme-primary-outline\" *ngIf=\"selectedVersion\"-->\r\n              <!--[disabled]=\"!bot.store_bot_versions || bot.store_bot_versions.length===0\"-->\r\n              <!--(click)=\"openForkNewVersionModal(Primarytemplate)\">-->\r\n              <!--{{(selectedVersion.changed_fields['df_template'] || selectedVersion.changed_fields['df_rules']  ||-->\r\n               <!--selectedVersion.changed_fields['generation_rules'] || selectedVersion.changed_fields['generation_templates'] ||-->\r\n               <!--selectedVersion.changed_fields['workflow'])?\"Save as new version\":\"Create new version\"}}-->\r\n      <!--</button>-->\r\n      <button class=\"btn btn-theme-primary-outline\" *ngIf=\"selectedVersion\"\r\n              [disabled]=\"!bot.store_bot_versions || bot.store_bot_versions.length===0\"\r\n              (click)=\"openForkNewVersionModal(Primarytemplate)\">\r\n        Fork new version\r\n      </button>\r\n    </div>\r\n    <div class=\"row row-flex-bot-versioning-toaster border-theme-secondary  border-top-0 mx-0\"\r\n         *ngIf=\"showVersionList\" style=\"max-height: 50vh; overflow-y: scroll\">\r\n      <div class=\"col-12 py-1 px-0 cursor-pointer hover-change-background border-bottom-theme-secondary\"\r\n           *ngFor=\"let version of bot.store_bot_versions | filterActiveBot:selectedVersion.id\">\r\n        <div class=\"d-flex align-items-center flex-bot-versioning-toaster\"\r\n             (click)=\"changeSelectedVersion(version); showVersionList = false; tabClicked('df_template');\">\r\n          <!--<div class=\"active-label-text\">{{(version.id === (activeVersion && activeVersion.id))?'Active':'Inactive'}}</div>-->\r\n          <!--<p>{{activeVersion|json}}</p>-->\r\n          <div class=\"version-active-label\">\r\n            <div>{{version.id === (activeVersion && activeVersion.id)?'Active':'Inactive'}}</div>\r\n          </div>\r\n          <!--<div class=\"active-label-text\">{{version.id +\"\"+activeVersion.id }}</div>-->\r\n          <div class=\"count mr-1\">{{version.version}}</div>\r\n          <div class=\"forked mr-1 pl-1\" *ngIf=\"version.forked_from !== 0\">Forked from version\r\n            {{version.forked_from}}\r\n          </div>\r\n          <div class=\"forked mr-1 pl-1\" *ngIf=\"version.forked_from === 0\">Default created version\r\n          </div>\r\n          <!-- <div class=\"forked mr-1 pl-1\" [style.visibility]=\"version.forked_from>0 ? 'visible' : 'hidden'\">Forked from version\r\n            {{version.forked_from}}\r\n          </div> -->\r\n          <div class=\"update d-flex flex-column mr-1 justify-content-center\" *ngIf=\"version\">\r\n            <div class=\"mr-1\">Last update</div>\r\n            <div class = \"justify-content-left pt-1\">\r\n              <i class=\"fa fa-circle\"\r\n                 [ngClass]=\"{'dark-green':version.updated_fields['df_template']}\"></i>\r\n              <i class=\"fa fa-circle\"\r\n                 [ngClass]=\"{'dark-green':version.updated_fields['df_rules']}\"></i>\r\n              <i class=\"fa fa-circle\"\r\n                 [ngClass]=\"{'dark-green':version.updated_fields['generation_rules']}\"></i>\r\n              <i class=\"fa fa-circle\"\r\n                 [ngClass]=\"{'dark-green':version.updated_fields['generation_templates']}\"></i>\r\n              <i class=\"fa fa-circle\"\r\n                 [ngClass]=\"{'dark-green':version.updated_fields['workflow']}\"></i>\r\n\r\n            </div>\r\n            <!--<form>-->\r\n            <!--<input type=\"radio\" [checked]=\"false\">-->\r\n            <!--<input type=\"radio\">-->\r\n            <!--<input type=\"radio\">-->\r\n            <!--<input type=\"radio\">-->\r\n            <!--<input type=\"radio\">-->\r\n            <!--</form>-->\r\n          </div>\r\n          <div class=\"insert mr-1\" >{{version.comment.length>70?(((version.comment)|slice:0:100) +\"...\"):version?.comment}}\r\n          </div>\r\n          <i class=\" py-2 px-3 \"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-tabs\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card \">\r\n\r\n\r\n        <!--tabs start-->\r\n        <div class=\"card-body p-0 mr-4\">\r\n          <ul class=\"nav nav-tabs theme-tabbing\">\r\n            <li class=\"nav-item\" [ngClass]=\"{'tab-active': activeTab===myEBotVersionTabs.df_template}\">\r\n              <a class=\"nav-link text-theme-normal\"\r\n                 (click)=\"tabClicked(myEBotVersionTabs.df_template)\">DF Template</a>\r\n            </li>\r\n            <li class=\"nav-item\" [ngClass]=\"{'tab-active': activeTab===myEBotVersionTabs.df_rules}\">\r\n              <a class=\"nav-link text-theme-normal\" (click)=\"tabClicked(myEBotVersionTabs.df_rules)\">DF\r\n                Rules</a>\r\n            </li>\r\n            <li class=\"nav-item text-theme-normal\" [ngClass]=\"{'tab-active': activeTab===myEBotVersionTabs.generation_rules}\">\r\n              <a class=\"nav-link\"\r\n                 (click)=\"tabClicked(myEBotVersionTabs.generation_rules)\">Generation Rules</a>\r\n            </li>\r\n            <li class=\"nav-item text-theme-normal\" [ngClass]=\"{'tab-active': activeTab===myEBotVersionTabs.generation_templates}\">\r\n              <a class=\"nav-link\"\r\n                 (click)=\"tabClicked(myEBotVersionTabs.generation_templates)\">Generation Template</a>\r\n            </li>\r\n            <li class=\"nav-item text-theme-normal\" [ngClass]=\"{'tab-active': activeTab===myEBotVersionTabs.workflow}\">\r\n              <a class=\"nav-link\"\r\n                 (click)=\"tabClicked(myEBotVersionTabs.workflow)\">Workflows</a>\r\n            </li>\r\n          </ul>\r\n\r\n          <!--tabs end-->\r\n\r\n          <!--code editor starts-->\r\n          <!--todo: make this row independent-->\r\n          <!--<div class=\"row pl-3 genTempGrid pt-2\" *ngIf=\"activeTab === 'generationTemplates'\">-->\r\n            <!--<div class=\"genTempGridItem intent-header\">-->\r\n              <!--<div class=\"text-bold\">Intent Header</div>-->\r\n              <!--<input type=\"text\" placeholder=\"Search Intent\">-->\r\n\r\n              <!--&lt;!&ndash; these div's will come from *ngFor &ndash;&gt;-->\r\n              <!--<div class=\"p-1\" *ngFor=\"let x of intentList\">{{x.name}}</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"genTempGridItem\">-->\r\n              <!--<div class=\"col-12 pt-2 d-flex justify-content-end\">-->\r\n                <!--<label for=\"uploadInput\" class=\"btn btn-theme-primary-outline\">Upload File-->\r\n                  <!--<input type=\"file\"-->\r\n                         <!--hidden-->\r\n                         <!--id=\"uploadInput\"-->\r\n                         <!--accept='text/plain' multiple-->\r\n                         <!--(change)='openFile(uploadInput);uploadInput.value=null'-->\r\n                         <!--#uploadInput>-->\r\n                <!--</label>-->\r\n              <!--</div>-->\r\n              <!--&lt;!&ndash;&ndash;&gt;-->\r\n              <!--<div class=\"col-12 \">-->\r\n                <!--<app-code-editor [text]=\"editorCode\" (textChangedEvent)=\"saveText($event)\"></app-code-editor>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"genTempGridItem bot-templates\">-->\r\n              <!--<ul>-->\r\n                <!--<li class=\"bot-template-heading\">-->\r\n                  <!--<div class=\"text-bold\">Bot Response Template</div>-->\r\n                  <!--<div class=\"text-lite\">Drag & Drop elements to add to response</div>-->\r\n                <!--</li>-->\r\n                <!--<li>-->\r\n                  <!--<i class=\"fa fa-users\"></i>-->\r\n                  <!--Textie-->\r\n                <!--</li>-->\r\n                <!--<li>-->\r\n                  <!--<i class=\"fa fa-users\"></i>-->\r\n                  <!--Textie-->\r\n                <!--</li>-->\r\n                <!--<li>-->\r\n                  <!--<i class=\"fa fa-users\"></i>-->\r\n                  <!--Textie-->\r\n                <!--</li>-->\r\n                <!--<li>-->\r\n                  <!--<i class=\"fa fa-users\"></i>-->\r\n                  <!--Textie-->\r\n                <!--</li>-->\r\n                <!--<li>-->\r\n                  <!--<i class=\"fa fa-users\"></i>-->\r\n                  <!--Textie-->\r\n                <!--</li>-->\r\n                <!--<li>-->\r\n                  <!--<i class=\"fa fa-users\"></i>-->\r\n                  <!--Textie-->\r\n                <!--</li>-->\r\n                <!--<li>-->\r\n                  <!--<i class=\"fa fa-users\"></i>-->\r\n                  <!--Textie-->\r\n                <!--</li>-->\r\n              <!--</ul>-->\r\n              <!--&lt;!&ndash; <div class=\"template-heading\">-->\r\n                <!--<div>Bot Response Templates</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"bot-templates\">-->\r\n                <!--<i class=\"fa fa-users\" style=\"font-size: 12px\"></i>-->\r\n                <!--dasdasd das das da sda-->\r\n              <!--</div>-->\r\n              <!--<div class=\"bot-templates\"></div>-->\r\n              <!--<div class=\"bot-templates\"></div>-->\r\n              <!--<div class=\"bot-templates\"></div>-->\r\n              <!--<div class=\"bot-templates\"></div>-->\r\n              <!--<div class=\"bot-templates\"></div>-->\r\n              <!--<div class=\"bot-templates\"></div> &ndash;&gt;-->\r\n\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--<div class=\"code-editor-row code-editor-row-min position-relative\" *ngIf=\"showConfig\">-->\r\n        <!--<app-code-editor [hidden]=\"activeTab!==myEBotVersionTabs.df_template\" [text]=\"editorCodeObj[myEBotVersionTabs.df_template]\" (textChangedEvent)=\"saveText($event)\"></app-code-editor>-->\r\n        <!--<app-code-editor [hidden]=\"activeTab!==myEBotVersionTabs.df_rules\" [text]=\"editorCodeObj[myEBotVersionTabs.df_rules]\" (textChangedEvent)=\"saveText($event)\"></app-code-editor>-->\r\n        <!--<app-code-editor [hidden]=\"activeTab!==myEBotVersionTabs.generation_rules\" [text]=\"editorCodeObj[myEBotVersionTabs.generation_rules]\" (textChangedEvent)=\"saveText($event)\"></app-code-editor>-->\r\n        <!--<app-code-editor [hidden]=\"activeTab!==myEBotVersionTabs.generation_templates\" [text]=\"editorCodeObj[myEBotVersionTabs.generation_templates]\" (textChangedEvent)=\"saveText($event)\"></app-code-editor>-->\r\n        <!--<app-code-editor [hidden]=\"activeTab!==myEBotVersionTabs.workflow\" [text]=\"editorCodeObj[myEBotVersionTabs.workflow]\" (textChangedEvent)=\"saveText($event)\"></app-code-editor>-->\r\n  <!--</div>-->\r\n  <div class=\"code-editor-row code-editor-row-max position-relative\">\r\n        <app-code-editor [hidden]=\"activeTab!==myEBotVersionTabs.df_template\" [text]=\"editorCodeObj[myEBotVersionTabs.df_template]\" (textChangedEvent)=\"saveText($event)\"></app-code-editor>\r\n        <app-code-editor [hidden]=\"activeTab!==myEBotVersionTabs.df_rules\" [text]=\"editorCodeObj[myEBotVersionTabs.df_rules]\" (textChangedEvent)=\"saveText($event)\"></app-code-editor>\r\n        <app-code-editor [hidden]=\"activeTab!==myEBotVersionTabs.generation_rules\" [text]=\"editorCodeObj[myEBotVersionTabs.generation_rules]\" (textChangedEvent)=\"saveText($event)\"></app-code-editor>\r\n        <app-code-editor [hidden]=\"activeTab!==myEBotVersionTabs.generation_templates\" [text]=\"editorCodeObj[myEBotVersionTabs.generation_templates]\" (textChangedEvent)=\"saveText($event)\"></app-code-editor>\r\n        <app-code-editor [hidden]=\"activeTab!==myEBotVersionTabs.workflow\" [text]=\"editorCodeObj[myEBotVersionTabs.workflow]\" (textChangedEvent)=\"saveText($event)\"></app-code-editor>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<!--fork new version modal starts-->\r\n<ng-template #Primarytemplate>\r\n  <div class=\"primary-modal\">\r\n    <div class=\"top-dec\"></div>\r\n    <div class=\"modal-header\" style=\"display: block!important;\">\r\n      <div class=\"d-flex\">\r\n        <h4 class=\"modal-title mb-2\"> Fork to a new version</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <p>By default it will be saved and not be made active. You need to update changes to make it active.</p>\r\n\r\n        <!--<button type=\"button\" class=\"close pull-right p-2\" aria-label=\"Close\" (click)=\"modalRef.hide()\">-->\r\n            <!--<span aria-hidden=\"true\">&times;</span>-->\r\n          <!--</button>-->\r\n      <!--<h4 class=\"modal-title mb-2\"> Fork to a new version</h4>-->\r\n      <!--<p>It will not be made active by default but saved. You need to update changes to make it active</p>-->\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <form class=\"row\" #fork_new_version_form=\"ngForm\">\r\n\r\n        <div class=\"col-md-3 d-flex justify-content-end\">\r\n          <label for=\"\">Fork from</label>\r\n        </div>\r\n        <!---->\r\n        <div class=\"col-md-9 px-0 d-flex justify-content-start\">\r\n          <!--<input type=\"password\" [(ngModel)]=\"forked_From\" name=\"old_password\">-->\r\n          <select class=\"concept1\" [(ngModel)]=\"forked_version_number\" required type=\"number\" name=\"version_id\" #select>\r\n            <option type=\"button\" *ngFor=\"let version of bot.store_bot_versions\">\r\n              <button>{{version.version}}</button>\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-3 my-2\">\r\n          <label for=\"\">Comments on the new version</label>\r\n        </div>\r\n        <div class=\"col-md-9 px-0 d-flex justify-content-start my-2\">\r\n          <textarea type=\"text\" style=\"width: 100%\" [(ngModel)]=\"forked_comments\" name=\"comment\"></textarea>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <p *ngIf=\"errorMessage\" class=\"text-danger\">{{errorMessage}}</p>\r\n          <button class=\"btn btn-theme-primary-outline mr-1\" (click)=\"modalRef.hide()\">Cancel</button>\r\n          <!--<button class=\"btn btn-theme-primary\" (click)=\"forkNewVersion()\">-->\r\n            <!--{{(selectedVersion.changed_fields['df_template'] || selectedVersion.changed_fields['df_rules']  ||-->\r\n               <!--selectedVersion.changed_fields['generation_rules'] || selectedVersion.changed_fields['generation_templates'] ||-->\r\n               <!--selectedVersion.changed_fields['workflow'])?\"Save as new version\":\"Create new version\"}}-->\r\n          <!--</button>-->\r\n\r\n          <button class=\"btn btn-theme-primary\" (click)=\"forkNewVersion()\">\r\n            Fork\r\n          </button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<!--fork new version modal end-->\r\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .code-editor-row-min .CodeMirror, ::ng-deep .code-editor-row-min .CodeMirror-scroll {\n  width: 100% !important;\n  height: 100% !important; }\n\n::ng-deep .code-editor-row-max .CodeMirror, ::ng-deep .code-editor-row-max .CodeMirror-scroll {\n  width: 100% !important;\n  height: 100% !important; }\n\n.card {\n  border: none; }\n\n.active {\n  border-color: white !important;\n  border-bottom: 2px solid #00abd3 !important; }\n\n.nav-link {\n  font-size: 12px; }\n\n.row-flex-bot-versioning-toaster {\n  background-color: white;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 20;\n  width: 50%; }\n\n.text-bold {\n  font-size: 13px;\n  font-weight: bold;\n  color: #474747; }\n\n.text-lite {\n  font-size: 11px;\n  color: #9e9e9e; }\n\n.genTempGrid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 2.5fr 1fr;\n      grid-template-columns: 1fr 2.5fr 1fr;\n  background-color: #f7f7f7; }\n\n.intent-header {\n  background-color: #ffffff; }\n\n.intent-header .text-bold {\n    padding: 4px; }\n\n.intent-header input {\n    margin: 4px;\n    height: 25px;\n    border-radius: 2px;\n    width: 95%;\n    border: solid 1px #e0e0e0;\n    padding-left: 8px; }\n\n.bot-templates {\n  border-left: solid 1px #e0e0e0; }\n\n.bot-templates ul {\n    list-style-type: none;\n    padding: 0;\n    padding-right: 30px;\n    padding-left: 15px; }\n\n.bot-templates ul > li {\n      color: #474747;\n      background-color: #ffffff;\n      height: 40px;\n      margin-bottom: 8px;\n      border-radius: 2px;\n      list-style-type: none;\n      display: flex;\n      align-items: center;\n      padding: 5px; }\n\n.bot-templates ul > li .fa {\n        font-size: 12px;\n        margin-right: 8px; }\n\n.bot-templates ul .bot-template-heading {\n      flex-direction: column;\n      height: auto; }\n\n.bot-templates ul .bot-template-heading {\n      background-color: #f7f7f7; }\n\n.flex-bot-versioning-toaster {\n  height: 32px;\n  width: 100%; }\n\n.flex-bot-versioning-toaster .bg-label-active {\n    background-color: #00abd3;\n    color: white; }\n\n.flex-bot-versioning-toaster .bg-label-inactive {\n    background-color: #474747;\n    color: white; }\n\n.flex-bot-versioning-toaster .count {\n    text-align: left;\n    font-size: 20px;\n    line-height: 24px;\n    font-weight: 700;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif; }\n\n.flex-bot-versioning-toaster form {\n    display: flex;\n    justify-content: center; }\n\n.flex-bot-versioning-toaster input[type=radio] {\n    width: 6px;\n    margin-right: 3px; }\n\n.flex-bot-versioning-toaster .forked, .flex-bot-versioning-toaster .update, .flex-bot-versioning-toaster .update > div {\n    text-align: left;\n    font-size: 11px;\n    line-height: 10px;\n    font-weight: 700;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif;\n    flex-shrink: 0;\n    flex-grow: 0; }\n\n.flex-bot-versioning-toaster .forked {\n    flex-basis: 84px; }\n\n.flex-bot-versioning-toaster .update {\n    flex-basis: 80px;\n    text-align: center;\n    -ms-grid-row-align: stretch;\n        align-self: stretch; }\n\n.flex-bot-versioning-toaster .update .fa {\n      margin-right: 2px;\n      color: #bebebe;\n      font-size: 7px; }\n\n.flex-bot-versioning-toaster .update .dark-green {\n      color: #8cd82f; }\n\n.flex-bot-versioning-toaster .insert {\n    font-size: 11px;\n    line-height: 13px;\n    font-weight: 400;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif; }\n\n.primary-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n\n.primary-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #00abd3; }\n\n.primary-modal .modal-header {\n    color: #474747; }\n\n.primary-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n\n.primary-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n\n.primary-modal .modal-body .fa {\n  font-size: 48px;\n  color: #00abd3;\n  padding: 10px 0px; }\n\n.danger-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n\n.danger-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #b14250; }\n\n.danger-modal .modal-header {\n    color: #474747; }\n\n.danger-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n\n.danger-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n\n.modal-body {\n  padding: 25px 20px !important; }\n\n.modal-body label {\n    font-size: 11px; }\n\n.modal-body input {\n    border-radius: 2px;\n    border: solid 1px #e0e0e0;\n    height: 28px;\n    width: 150px;\n    padding: 0px 8px; }\n\n.modal-body hr {\n    border-color: #e0e0e0; }\n\n.version-active-label {\n  align-self: stretch;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-basis: 60px;\n  flex-shrink: 0;\n  flex-grow: 0; }\n\n.hover-change-background:hover {\n  background-color: #ededed; }\n\napp-code-editor {\n  height: 100%;\n  width: 80vw;\n  display: flex; }\n\n.container-grid {\n  height: 100%;\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n      -ms-grid-rows: auto auto 1fr;\n      grid-template-rows: auto auto 1fr;\n      grid-template-areas: 'version' 'tabs' 'editor'; }\n\n.container-grid .row-version {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: version; }\n\n.container-grid .row-tabs {\n    -ms-grid-row: 2;\n    -ms-grid-column: 1;\n    grid-area: tabs; }\n\n.container-grid .code-editor-row {\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    grid-area: editor; }\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EBotVersionTabs, CodeInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBotVersionTabs", function() { return EBotVersionTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeInputComponent", function() { return CodeInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../view-bots/ngxs/view-bot.action */ "./src/app/core/view-bots/ngxs/view-bot.action.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../code-editor/code-editor.component */ "./src/app/core/buildbot/build-code-based-bot/architecture/code/code-editor/code-editor.component.ts");
/* harmony import */ var _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../view-bots/view-bots.component */ "./src/app/core/view-bots/view-bots.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../event.service */ "./src/app/event.service.ts");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var EBotVersionTabs;
(function (EBotVersionTabs) {
    EBotVersionTabs["df_template"] = "df_template";
    EBotVersionTabs["df_rules"] = "df_rules";
    EBotVersionTabs["generation_rules"] = "generation_rules";
    EBotVersionTabs["generation_templates"] = "generation_templates";
    EBotVersionTabs["workflow"] = "workflow";
})(EBotVersionTabs || (EBotVersionTabs = {}));
var CodeInputComponent = /** @class */ (function () {
    function CodeInputComponent(store, serverService, constantsService, eventService, utilityService, router, activatedRoute, modalService) {
        this.store = store;
        this.serverService = serverService;
        this.constantsService = constantsService;
        this.eventService = eventService;
        this.utilityService = utilityService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.showConfig = true;
        this.myEBotVersionTabs = EBotVersionTabs;
        this.activeTab = 'df_template';
        this.datachanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // editorCodeObj:{text:string} = {text:""};
        this.editorCodeObj = {
            'df_template': { text: '' },
            'df_rules': { text: '' },
            'generation_rules': { text: '' },
            'generation_templates': { text: '' },
            'workflow': { text: '' },
        };
        this.showVersionList = false;
    }
    CodeInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (queryParam) {
            /*when upper panel minimizes or maximizes, change lower panel height accordingly*/
            var showConfigStr = _this.activatedRoute.snapshot.queryParamMap.get('show-config');
            _this.showConfig = (showConfigStr === 'true' || showConfigStr == undefined);
        });
        // let url = this.constantsService.getAllVersionsByBotId();
        // let botId = this.bot.id;
        // this.serverService.makeGetReq<IBotVersionResult>({url, headerData: {'bot-access-token': this.bot.bot_access_token}})
        //   .subscribe((botVersionResult) => {
        //     this.store.dispatch([
        //       new SaveVersionInfoInBot({data: botVersionResult.objects, botId: this.bot.id})
        //     ]);
        //   });
        this.serverService.getAllVersionOfBotFromServerAndStoreInBotInBotList(this.bot.id, this.bot.bot_access_token);
        this.botlist$_sub = this.botlist$.subscribe(function (value) {
            _this.utilityService.getActiveVersionInBot(_this.bot);
            // let activeVersion = this.bot.store_bot_versions && this.bot.store_bot_versions.find((BotVersion) => {
            //   return this.bot.active_version_id === BotVersion.id;
            // });
            /*
            * if active version exists, selected version =active version
            * otherwise, selected version = first version, if that exists
            * */
            var activeVersion = _this.activeVersion = _this.utilityService.getActiveVersionInBot(_this.bot);
            if (_this.selectedVersion)
                _this.selectedVersion = _this.selectedVersion;
            else
                _this.selectedVersion = activeVersion ? activeVersion : (_this.bot.store_bot_versions && _this.bot.store_bot_versions.length && _this.bot.store_bot_versions[0]);
            _this.forked_version_number = _this.selectedVersion && _this.selectedVersion.version;
            // if (!activeVersion) {
            //   try {
            //     this.selectedVersion = this.bot.store_bot_versions[0];
            //   } catch (e) {
            //     console.log(e);
            //   }
            // }
            // if (!this.selectedVersion) {
            // this.selectedVersion = activeVersion;
            _this.activeTab = _this.activatedRoute.snapshot.queryParamMap.get('code-tab') || EBotVersionTabs.df_template;
            // }
            _this.bot.store_selected_version = _this.selectedVersion && _this.selectedVersion.id;
            _this.tabClicked(_this.activeTab);
        }, function (err) {
            console.log(err);
        });
    };
    CodeInputComponent.prototype.openFile = function (inputEl) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.editorCodeObj[this.activeTab];
                        return [4 /*yield*/, this.utilityService.readInputFileAsText(inputEl)];
                    case 1:
                        _a.text = _b.sent();
                        this.editorCodeObj[this.activeTab] = __assign({}, this.editorCodeObj[this.activeTab]);
                        return [2 /*return*/];
                }
            });
        });
    };
    CodeInputComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        /*TODO: We dont need code here... just replace it with selectedVersion. Also we dont need ICode interface*/
        if (this.selectedVersion) {
            this.editorCodeObj[this.activeTab].text = this.selectedVersion[this.activeTab];
            this.editorCodeObj[this.activeTab] = __assign({}, this.editorCodeObj[this.activeTab]);
        }
        this.router.navigate(["core/botdetail/" + _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_10__["EBotType"].chatbot + "/", this.bot.id], {
            queryParams: { 'code-tab': activeTab },
            queryParamsHandling: 'merge',
            replaceUrl: true
        });
    };
    CodeInputComponent.prototype.saveText = function (codeStr) {
        /*
        *at this point some changes have been made to selected version's codeText
        * */
        var _this = this;
        if (this.selectedVersion && this.selectedVersion.id) {
            var selectedVersion_pristine = this.bot.store_bot_versions && this.bot.store_bot_versions.find(function (version) { return version.id === _this.selectedVersion.id; });
            var codeTextPristine = selectedVersion_pristine[this.activeTab];
            if (!this.selectedVersion.changed_fields[this.activeTab])
                this.selectedVersion.changed_fields[this.activeTab] = codeStr !== codeTextPristine;
            this.selectedVersion[this.activeTab] = codeStr;
        }
        else {
            /*we are creating a new version*/
            /*find bot version with id = -1*/
            var new_version = this.bot.store_bot_versions && this.bot.store_bot_versions.find(function (version) { return version.id === -1; });
            if (!new_version) {
                new_version = this.constantsService.getNewBotVersionTemplate(this.bot.id);
                if (!this.bot.store_bot_versions) {
                    this.bot.store_bot_versions = [];
                }
                this.bot.store_bot_versions.push(new_version);
            }
            this.selectedVersion = new_version;
            this.selectedVersion[this.activeTab] = codeStr;
        }
        /*comparing old code text to new*/
    };
    CodeInputComponent.prototype.saveSelectedVersion = function () {
        var _this = this;
        var headerData = {
            'bot-access-token': this.bot.bot_access_token
        };
        this.selectedVersion.updated_fields = this.selectedVersion.changed_fields;
        this.selectedVersion.changed_fields = {
            "df_template": false,
            "df_rules": false,
            "generation_rules": false,
            "generation_template": false,
            "workflows": false
        };
        if (this.selectedVersion.id && this.selectedVersion.id !== -1) {
            var url = this.constantsService.getSaveVersionByBotId(this.bot.id);
            this.serverService.makePutReq({ url: url, body: this.selectedVersion, headerData: headerData })
                .subscribe(function (value) {
                _this.selectedVersion = Object.assign(_this.selectedVersion, value);
                console.log(_this.bot.store_bot_versions);
                _this.store.dispatch([
                    new _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_4__["UpdateVersionInfoByIdInBot"]({ data: value, botId: _this.bot.id })
                ]);
                _this.utilityService.showSuccessToaster('New version saved');
            });
        }
        else {
            var url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
            var body = this.selectedVersion;
            delete body.id;
            delete body.resource_uri;
            delete body.forked_from;
            /*remove version id = -1, from store*/
            this.bot.store_bot_versions.length = 0;
            this.serverService.makePostReq({ url: url, body: body, headerData: headerData })
                .subscribe(function (forkedVersion) {
                console.log(forkedVersion);
                _this.selectedVersion = forkedVersion;
                _this.utilityService.showSuccessToaster('New version forked');
                _this.store.dispatch([
                    new _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_4__["UpdateVersionInfoByIdInBot"]({ data: forkedVersion, botId: _this.bot.id })
                ]);
                // this.ngOnInit();
                /*TODO: implement it correctly*/
            });
        }
    };
    CodeInputComponent.prototype.openForkNewVersionModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
        return;
        // let headerData: IHeaderData = {
        //   'bot-access-token': this.bot.bot_access_token
        // };
        // let url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
        // // this.selectedVersion.version=12;
        //
        // delete this.selectedVersion.id;
        // delete this.selectedVersion.resource_uri;
        // delete this.selectedVersion.resource_uri;
        //
        // this.serverService.makePostReq({url, body: this.selectedVersion, headerData})
        //   .subscribe((forkedVersion: IBotVersionData) => {
        //     console.log(forkedVersion);
        //     this.selectedVersion = forkedVersion;
        //     this.utilityService.showSuccessToaster('new version forked successfully!')
        //     ;
        //     this.ngOnInit();
        //     /*TODO: implement it correctly*/
        //   });
    };
    CodeInputComponent.prototype.forkNewVersion = function () {
        var _this = this;
        if (!this.forked_version_number) {
            this.flashErrorMessage('Please select version id');
            return;
        }
        this.modalRef.hide();
        var forkedVersionInfo = this.bot.store_bot_versions.find(function (versions) { return versions.version == _this.forked_version_number; });
        forkedVersionInfo = __assign({}, forkedVersionInfo);
        forkedVersionInfo.updated_fields = forkedVersionInfo.changed_fields;
        forkedVersionInfo.changed_fields = {
            "df_template": false,
            "df_rules": false,
            "generation_rules": false,
            "generation_template": false,
            "workflows": false
        };
        forkedVersionInfo.comment = this.forked_comments;
        forkedVersionInfo.forked_from = this.forked_version_number;
        var headerData = {
            'bot-access-token': this.bot.bot_access_token
        };
        var url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
        delete forkedVersionInfo.id;
        delete forkedVersionInfo.resource_uri;
        delete forkedVersionInfo.resource_uri;
        this.serverService.makePostReq({ url: url, body: forkedVersionInfo, headerData: headerData })
            .subscribe(function (forkedVersion) {
            console.log(forkedVersion);
            _this.bot.store_bot_versions.push(forkedVersion);
            _this.utilityService.showSuccessToaster('New version forked');
            _this.forked_comments = '';
            _this.forked_version_number = null;
            _this.store.dispatch([
                new _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_4__["UpdateVersionInfoByIdInBot"]({ botId: _this.bot.id, data: forkedVersion })
            ]).subscribe(function () {
                _this.changeSelectedVersion(forkedVersion);
                // this.selectedVersion = forkedVersion;
            });
            // this.ngOnInit();
            /*TODO: implement it correctly*/
        });
    };
    CodeInputComponent.prototype.changeSelectedVersion = function (version) {
        this.bot.store_selected_version = version.id;
        this.selectedVersion = version;
        this.forked_version_number = this.selectedVersion.version;
        this.tabClicked(this.activeTab);
    };
    CodeInputComponent.prototype.toggleVersionList = function () {
        return this.showVersionList = !this.showVersionList;
    };
    CodeInputComponent.prototype.flashErrorMessage = function (message) {
        var _this = this;
        this.errorMessage = message;
        setTimeout(function () {
            _this.errorMessage = '';
        }, 3000);
    };
    CodeInputComponent.prototype.ngOnDestroy = function () {
        this.botlist$_sub && this.botlist$_sub.unsubscribe();
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], CodeInputComponent.prototype, "botlist$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], CodeInputComponent.prototype, "botcreationstate$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeInputComponent.prototype, "bot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CodeInputComponent.prototype, "datachanged$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_9__["CodeEditorComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CodeInputComponent.prototype, "codeEditorComponent", void 0);
    CodeInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-code-input',
            template: __webpack_require__(/*! ./code-input.component.html */ "./src/app/core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.component.html"),
            styles: [__webpack_require__(/*! ./code-input.component.scss */ "./src/app/core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"],
            _event_service__WEBPACK_IMPORTED_MODULE_11__["EventService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]])
    ], CodeInputComponent);
    return CodeInputComponent;
}());



/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-2\">\r\n  <div class=\"card-body d-flex justify-content-between justify-content-center\">\r\n    <div class=\"org-detail d-flex justify-content-center\">\r\n      <img style=\"height: 20px\" class=\"pr-2\" src=\"https://dev.imibot.ai/assets/img/app/integrations/imiconnect.png\"\r\n           alt=\"\">\r\n      <span class=\"lead-text\">IMICONNECT</span>\r\n    </div>\r\n    <div class=\"switch\">\r\n      <ui-switch size=\"small\" switchColor=\"white\" style=\"height: 10px\" defaultBgColor=\"grey\" (change)=\"onChange($event)\"\r\n                 [checked]=\"false\"></ui-switch>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row d-flex justify-content-center\">\r\n  <div class=\"col-11\">\r\n    <div [hidden]=\"isActive\" class=\"form-context\">\r\n      <div class=\"form-group\">\r\n        <label>App id</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter app id\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>App id</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter app id\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>App id</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter app id\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: none; }\n  .card .card-body {\n    border-bottom: 1px solid rgba(128, 128, 128, 0.72); }\n  .form-context label {\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 400;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n  .form-context input {\n  padding: 0;\n  margin-top: 0;\n  margin-left: 1px;\n  border: none;\n  border-color: inherit;\n  box-shadow: none;\n  outline: none;\n  border-bottom: 1px solid #e0e0e0;\n  border-radius: 0; }\n  .form-context input::-webkit-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n  .form-context input:-ms-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n  .form-context input::-ms-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n  .form-context input::placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n  .form-context .lead-text {\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 400;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif; }\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: IntegrationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationItemComponent", function() { return IntegrationItemComponent; });
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

var IntegrationItemComponent = /** @class */ (function () {
    function IntegrationItemComponent() {
    }
    IntegrationItemComponent.prototype.ngOnInit = function () {
    };
    IntegrationItemComponent.prototype.onChange = function ($event) {
        this.isActive = $event;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IntegrationItemComponent.prototype, "orgName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], IntegrationItemComponent.prototype, "formFields", void 0);
    IntegrationItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-integration-item',
            template: __webpack_require__(/*! ./integration-item.component.html */ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component.html"),
            styles: [__webpack_require__(/*! ./integration-item.component.scss */ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntegrationItemComponent);
    return IntegrationItemComponent;
}());



/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/display-name-for-key-integration.pipe.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/display-name-for-key-integration.pipe.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: DisplayNameForKeyIntegrationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayNameForKeyIntegrationPipe", function() { return DisplayNameForKeyIntegrationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility.service */ "./src/app/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayNameForKeyIntegrationPipe = /** @class */ (function () {
    function DisplayNameForKeyIntegrationPipe(utilityService) {
        this.utilityService = utilityService;
    }
    DisplayNameForKeyIntegrationPipe.prototype.transform = function (key, args) {
        return this.utilityService.getDisplayNameForKey_Integration(key);
        // return key;
    };
    DisplayNameForKeyIntegrationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'displayNameForKeyIntegration'
        }),
        __metadata("design:paramtypes", [_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])
    ], DisplayNameForKeyIntegrationPipe);
    return DisplayNameForKeyIntegrationPipe;
}());



/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button (click)=\"click()\">click()</button>-->\r\n<!--<form #test=\"ngForm\">-->\r\n  <!--<ui-switch type=\"checkbox\" size=\"small\" ngModel [checked]=\"false\"  name=\"enabled\" ></ui-switch>-->\r\n<!--</form>-->\r\n<form class=\"grid-integrations form-theme\" style=\"width: 100%; overflow-y: auto\" #form_new=\"ngForm\">\r\n\r\n  <div *ngFor=\"let form_value_key of myObject.keys(formValue)\"\r\n       class=\"grid-integration-groups px-4 mb-3\"\r\n       ngModelGroup=\"{{form_value_key}}\">\r\n    <div class=\"integration-heading\">{{form_value_key|integrationNameFormatter|titlecase}}</div>\r\n    <div\r\n      *ngFor=\"let integration_keys of myObject.keys(formValue[form_value_key])\"\r\n      requiredIfOneFilledValidator\r\n      ngModelGroup=\"{{integration_keys}}\"\r\n      class=\"border px-3\">\r\n      <div class=\"d-flex justify-content-center align-items-center\" style=\"height: 90px\">\r\n        <img\r\n             style=\"height: 16px; width: 16px\"\r\n             [src]=\"getLogo(integration_keys)\"\r\n             alt=\"\">\r\n        <div class=\"heading my-0 mx-2\">{{integration_keys.toUpperCase()}}</div>\r\n        <ui-switch size=\"small\" [checked]=\"false\" ngModel name=\"enabled\" (change)=\"onSwitchChange(formValueFinal[form_value_key][integration_keys])\"></ui-switch>\r\n      </div>\r\n      <div [hidden]=\"!formValueFinal[form_value_key][integration_keys]['enabled']\" >\r\n        <div *ngFor=\"let integration_input_keys of formValue[form_value_key][integration_keys]|integrationInputKeysFilter\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">{{integration_input_keys|displayNameForKeyIntegration}}</label>\r\n            <input ngModel type=\"text\"\r\n                   class=\"form-control\"\r\n                   [name]=\"integration_input_keys\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[requiredifonefilledvalidator].ng-invalid {\n  border: 1px solid red !important; }\n\n.ngModelGroup-border {\n  padding: 1px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-radius: 2px;\n  margin-bottom: 8px;\n  border: 1px solid rgba(128, 128, 128, 0.72); }\n\n.grid-integrations label {\n  color: #00abd3; }\n\n.grid-integration-groups {\n  display: -ms-grid;\n  display: grid;\n  align-items: start;\n  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));\n  grid-column-gap: 1%;\n  grid-row-gap: 20px;\n  justify-content: center; }\n\n.integration-heading {\n  grid-column: 1/-1;\n  font-weight: bold;\n  color: #474747;\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: IntegrationOptionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationOptionListComponent", function() { return IntegrationOptionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility.service */ "./src/app/utility.service.ts");
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







var IntegrationOptionListComponent = /** @class */ (function () {
    function IntegrationOptionListComponent(store, activatedRoute, constantsService) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.constantsService = constantsService;
        this.enable = false;
        this.datachanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myObject = Object;
        this.masterIntegrationListSerialized = [];
    }
    IntegrationOptionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app$.subscribe(function (value) {
            _this.masterIntegrationList = value.masterIntegrationList;
        });
        this.routeParent = this.activatedRoute.snapshot.data;
        if (this.bot) {
            this.formValue = this.bot.integrations;
        }
        else if (this.routeParent['buildBot']) {
            this.botcreationstate$.subscribe(function (botCreationState) {
                _this.formValue = botCreationState.codeBased.integrations;
            });
        }
        // this.formValueFinal = this.constantsService.integrationOptionListTemplate;
        // this.formValueFinal =  this.bot.integrations;
        this.masterIntegrationList.forEach(function (integrationItem) {
            var integration_type_key = integrationItem.integration_type;
            var integration_name_key = integrationItem.key;
            var tempObj = {};
            tempObj[integration_name_key] = integrationItem.inputs.reduce(function (aggregate, value) {
                var obj = {};
                obj[value.param_name] = '';
                return __assign({}, aggregate, obj);
            }, { enabled: false });
            if (_this.masterIntegrationListSerialized[integration_type_key]) {
                _this.masterIntegrationListSerialized[integration_type_key] = __assign({}, _this.masterIntegrationListSerialized[integration_type_key], tempObj);
            }
            else {
                _this.masterIntegrationListSerialized[integration_type_key] = __assign({}, tempObj);
            }
        });
        this.formValue =
            this.formValueFinal = {
                channels: __assign({}, this.masterIntegrationListSerialized['channels'], this.formValue.channels),
                ccsp_details: __assign({}, this.masterIntegrationListSerialized['ccsp_details'], this.formValue.ccsp_details),
                fulfillment_provider_details: __assign({}, this.masterIntegrationListSerialized['fulfillment_provider_details'], this.formValue.fulfillment_provider_details)
            };
    };
    IntegrationOptionListComponent.prototype.getLogo = function (key) {
        var matchedMasterIntegration = this.masterIntegrationList.find(function (masterIntegrationItem) {
            return masterIntegrationItem.key === key;
        });
        return matchedMasterIntegration.icon;
    };
    IntegrationOptionListComponent.prototype.onChange = function ($event) {
        this.isActive = $event;
    };
    IntegrationOptionListComponent.prototype.click = function () {
        console.log(this.formValue);
        console.log(this.test);
        console.log(this.test_new.value);
    };
    // test = false;
    IntegrationOptionListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.f_new.form.patchValue(_this.formValueFinal);
        });
        this.f_new.valueChanges.debounceTime(1000).subscribe(function (integrationInfo) {
            if (!_this.f_new.dirty)
                return;
            var formValidityObj = {};
            formValidityObj[_utility_service__WEBPACK_IMPORTED_MODULE_6__["EFormValidationErrors"].form_validation_integration] = _this.f_new && _this.f_new.valid;
            _this.datachanged$.emit(__assign({ integrations: integrationInfo }, formValidityObj));
            // if (this.routeParent['buildBot'])
            //   this.store.dispatch([
            //     new SaveBasicInfo({data: {integrations: integrationInfo}})
            //   ]);
        });
        // this.f_new.valueChanges.subscribe((value)=>{
        //   ;
        //   // if(value)
        //     this.formValueFinal = value;
        // })
    };
    IntegrationOptionListComponent.prototype.onSwitchChange = function (obj) {
        obj.enabled = !obj.enabled;
    };
    IntegrationOptionListComponent.prototype.click1 = function () {
        console.log(this.f_new.value);
        console.log(this.formValueFinal);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IntegrationOptionListComponent.prototype, "bot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], IntegrationOptionListComponent.prototype, "f", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form_new'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], IntegrationOptionListComponent.prototype, "f_new", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('test'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], IntegrationOptionListComponent.prototype, "test_new", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], IntegrationOptionListComponent.prototype, "botcreationstate$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], IntegrationOptionListComponent.prototype, "datachanged$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], IntegrationOptionListComponent.prototype, "app$", void 0);
    IntegrationOptionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-integration-option-list',
            template: __webpack_require__(/*! ./integration-option-list.component.html */ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component.html"),
            styles: [__webpack_require__(/*! ./integration-option-list.component.scss */ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component.scss")],
            host: {
                "[style.display]": "'block'",
                "[style.height.percent]": "100",
                "[style.overflow]": "scroll",
            }
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]])
    ], IntegrationOptionListComponent);
    return IntegrationOptionListComponent;
}());



/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/requiredIfOneFilledValidator.directive.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/requiredIfOneFilledValidator.directive.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: RequiredIfOneFilledValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredIfOneFilledValidator", function() { return RequiredIfOneFilledValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RequiredIfOneFilledValidator = /** @class */ (function () {
    function RequiredIfOneFilledValidator() {
    }
    RequiredIfOneFilledValidator_1 = RequiredIfOneFilledValidator;
    RequiredIfOneFilledValidator.prototype.validate = function (group) {
        var controls = group.controls;
        var formData = group.value;
        if (formData.enabled) {
            for (var key in formData) {
                if (!formData[key])
                    return { required: true };
            }
        }
        return null;
        // const controlNames = Object.keys(controls);
        // controlNames.shift();//enabled is not counted
        // const filledCount = controlNames.filter(name => !!controls[name].value).length
        //
        // return filledCount > 0 && filledCount < controlNames.length ? { required: true } : null;
    };
    RequiredIfOneFilledValidator = RequiredIfOneFilledValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ngModelGroup][requiredIfOneFilledValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RequiredIfOneFilledValidator_1; }),
                    multi: true
                }]
        })
    ], RequiredIfOneFilledValidator);
    return RequiredIfOneFilledValidator;
    var RequiredIfOneFilledValidator_1;
}());



/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-knowledge-base\r\n  (updateOrSaveParentNers$)=\"updateOrSaveCustomNer($event)\"\r\n  (pageChanged$)=\"pageChanged($event)\"\r\n  [custumNerDataForSmartTable]=\"custumNerDataForSmartTable\"\r\n  [currentPageNumber]=\"currentPageNumber\"\r\n  [totalRecords]=\"totalRecords\"\r\n  (deleteNer$)=\"deleteNer($event)\"\r\n  >\r\n</app-knowledge-base>\r\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-knowledge-base {\n  display: block;\n  height: 100%;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: KnowledgeBaseWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseWrapperComponent", function() { return KnowledgeBaseWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../view-bots/view-bots.component */ "./src/app/core/view-bots/view-bots.component.ts");
/* harmony import */ var _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../knowledge-base/knowledge-base.component */ "./src/app/core/buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base.component.ts");
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









var KnowledgeBaseWrapperComponent = /** @class */ (function () {
    function KnowledgeBaseWrapperComponent(store, serverService, activatedRoute, router, utilityService, constantsService) {
        this.store = store;
        this.serverService = serverService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utilityService = utilityService;
        this.constantsService = constantsService;
        this.settings = this.constantsService.SMART_TABLE_KNOWLEDGEBASE_SETTING;
        this.totalRecords = 10;
        this.currentPageNumber = 1;
    }
    KnowledgeBaseWrapperComponent.prototype.ngOnInit = function () {
        this.currentPageNumber = Number(this.activatedRoute.snapshot.queryParamMap.get('page') || '1');
        this.fetchNers(10, this.currentPageNumber - 1);
    };
    KnowledgeBaseWrapperComponent.prototype.pageChanged = function (currentPageNumber) {
        this.router.navigate(['.'], {
            queryParams: { page: currentPageNumber },
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute
        });
        this.currentPageNumber = currentPageNumber;
        this.fetchNers(10, currentPageNumber - 1);
    };
    KnowledgeBaseWrapperComponent.prototype.fetchNers = function (limit, offset) {
        var _this = this;
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        var url = this.constantsService.getCustomBotNER(limit, (offset * 10));
        var headerData = { 'bot-access-token': this.bot.bot_access_token };
        this.serverService.makeGetReq({ url: url, headerData: headerData })
            .subscribe(function (value) {
            _this.totalRecords = value.meta.total_count;
            _this.custumNerDataForSmartTable = value.objects;
            /*For selected ner*/
            var selectedNerId = _this.activatedRoute.snapshot.queryParamMap.get('ner_id');
            if (!selectedNerId)
                return;
            var getNerByIdUrl = _this.constantsService.getCustomNerById(selectedNerId);
            var doesSelectedNerExistsIn_custumNerDataForSmartTable = _this.custumNerDataForSmartTable.find(function (item) { return item.id === Number(selectedNerId); });
            if (doesSelectedNerExistsIn_custumNerDataForSmartTable)
                return;
            _this.serverService.makeGetReq({ url: getNerByIdUrl })
                .subscribe(function (values) {
                if (values.length > 0) {
                    _this.custumNerDataForSmartTable.push(values[0]);
                }
            });
        });
    };
    KnowledgeBaseWrapperComponent.prototype.updateOrSaveCustomNer = function (selectedOrNewRowData) {
        var _this = this;
        this.serverService.updateOrSaveCustomNer(selectedOrNewRowData, this.bot)
            .subscribe(function (value) {
            var doesNerExistsInSmartTable = _this.custumNerDataForSmartTable.find(function (nerObj) { return nerObj.id === value.id; });
            if (!doesNerExistsInSmartTable)
                _this.custumNerDataForSmartTable.push(__assign({}, value, { highlight: true }));
            _this.addQueryParamsInCurrentRoute({ ner_id: value.id });
            _this.utilityService.showSuccessToaster('Customner saved');
        });
    };
    //   let body: ICustomNerItem;
    //   let headerData: IHeaderData = {'bot-access-token': this.bot.bot_access_token};
    //   let url, methodStr;
    //   if (selectedOrNewRowData && selectedOrNewRowData.id) {/*update customner*/
    //     url = this.constantsService.updateCustomBotNER(selectedOrNewRowData.id);
    //     methodStr = 'makePutReq';
    //     body = {
    //       values: selectedOrNewRowData.values,
    //       column_headers: selectedOrNewRowData.column_headers
    //     };
    //   } else {/*create a new customner*/
    //     url = this.constantsService.createNewCustomBotNER();
    //     methodStr = 'makePostReq';
    //     body = selectedOrNewRowData;
    //   }
    //   this.serverService[methodStr]({url, body, headerData})
    //     .subscribe((value) => {
    //       console.log(value);
    //       this.utilityService.showSuccessToaster('Successfully saved');
    //     });
    // }
    KnowledgeBaseWrapperComponent.prototype.addQueryParamsInCurrentRoute = function (queryParamObj) {
        this.router.navigate(['.'], {
            queryParams: queryParamObj,
            relativeTo: this.activatedRoute,
            // skipLocationChange: true,/*not working*/
            queryParamsHandling: 'merge'
        });
    };
    KnowledgeBaseWrapperComponent.prototype.deleteNer = function (ner_id) {
        var _this = this;
        this.serverService.deleteNer(ner_id, this.bot)
            .subscribe(function () {
            _this.utilityService.showSuccessToaster('Customner deleted');
            _this.router.navigate(["/core/botdetail/" + _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_7__["EBotType"].chatbot + "/" + _this.bot.id], {
                queryParams: {
                    'build-tab': 'knowledge',
                    'showNerTable': true
                }
            });
            var indexToBeDeleted = _this.custumNerDataForSmartTable.findIndex(function (nerObj) { return nerObj.id == ner_id; });
            if (indexToBeDeleted !== -1)
                _this.custumNerDataForSmartTable.splice(indexToBeDeleted, 1);
            _this.knowledgeBaseComponent.showNerSmartTable();
            _this.custumNerDataForSmartTable = _this.custumNerDataForSmartTable.slice();
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], KnowledgeBaseWrapperComponent.prototype, "loggeduser$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], KnowledgeBaseWrapperComponent.prototype, "bot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_8__["KnowledgeBaseComponent"]),
        __metadata("design:type", _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_8__["KnowledgeBaseComponent"])
    ], KnowledgeBaseWrapperComponent.prototype, "knowledgeBaseComponent", void 0);
    KnowledgeBaseWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-knowledge-base-wrapper',
            template: __webpack_require__(/*! ./knowledge-base-wrapper.component.html */ "./src/app/core/buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./knowledge-base-wrapper.component.scss */ "./src/app/core/buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]])
    ], KnowledgeBaseWrapperComponent);
    return KnowledgeBaseWrapperComponent;
}());



/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p>{{pipeLine|json}}</p>-->\r\n<!--<button (click)=\"test()\">test</button>-->\r\n<div class=\"row m-0\" style=\"height: 100%;\">\r\n  <div style=\"height: 10%\" class=\"col-12 mb-1 d-flex p-0 justify-content-between\">\r\n    <p class=\"text-theme-secondary my-2 col-8\">Drag and drop modules from 'Available Intelligence Modules' to 'Bot Intelligence\r\n      Pipeline' and vice versa</p>\r\n    <div class=\"search-theme-input-with-search col-4\">\r\n      <span class=\"fa fa-search\"></span>\r\n      <input type=\"search\" placeholder=\"Filter Modules\" [(ngModel)]=\"searchKeyword\" class=\"border\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-8\" style=\"height:90%;overflow-y: scroll\" *ngIf=\"aiModules\">\r\n    <h4 class=\"heading mb-2 mt-3\">Available Intelligence Modules({{aiModules && aiModules.length}})</h4>\r\n    <ul class=\"aim-list  px-0 d-flex align-items-start align-content-start flex-row flex-wrap\"\r\n        [dragula]='\"first-bag\"' [(dragulaModel)]='aiModules'>\r\n      <li class=\"border module-box mb-2 px-2 mr-1\"\r\n          *ngFor=\"let aiModule of (aiModules|pipelineFilter:searchKeyword); let i of index\">\r\n        {{aiModule.unique_name}}\r\n        <div>\r\n          <i *ngIf=\"aiModule && aiModule.input_params && myObject.keys(aiModule.input_params).length>0\" (click) = \"openCreateBotModal(Primarytemplat,aiModule);\" class=\"fa fa-cog pl-1\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-4 pipeline-wrapper d-flex flex-column\" *ngIf=\"aiModules\" style=\"height: 90%;overflow-y: auto\">\r\n    <!--<div class=\"col-12 border pr-0 pipeline d-flex flex-column\" style=\"height: 90%;overflow-y: scroll\">-->\r\n      <h4 class=\"heading mb-2 mt-3\">Bot Intelligence Pipeline ({{pipeLine && pipeLine.length}})</h4>\r\n      <div class=\"flex-grow-1\"  [dragula]='\"first-bag\"' [(dragulaModel)]='pipeLine'>\r\n        <div *ngFor=\"let aiModule of (pipeLine|pipelineFilter:searchKeyword);let targetIndexNew = index\">\r\n          <div class=\"border mb-2 mr-3 module-box border-danger\"\r\n               [ngClass]=\"{'bg-grey':aiModule.$$hashKey==='PLACE_HOLDER', 'border-danger':!utilityService.checkIfAllPipelineInputParamsArePopulated([aiModule])}\">\r\n            {{aiModule.unique_name||aiModule.id}}\r\n            <div>\r\n              <i *ngIf=\" aiModule && aiModule.input_params && myObject.keys(aiModule.input_params).length>0\" (click) = \"openCreateBotModal(Primarytemplat,aiModule);\" class=\"fa fa-cog pl-1\" aria-hidden=\"true\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <!--</div>-->\r\n</div>\r\n\r\n<ng-template #Primarytemplat>\r\n  <div class=\"primary-modal\">\r\n    <div class=\"top-dec\"></div>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" style=\"display: flex;justify-content: start;\">{{selectedPipeline.unique_name}}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-body pt-0\">\r\n     <div *ngFor=\"let Key of myObject.keys(selectedPipeline.input_params)\" class=\"d-flex align-items-center justify-content-center my-2\">\r\n       <label class=\"mb-0 mr-1\">{{Key|integrationNameFormatter|titlecase }}</label>\r\n       <input type=\"text\" class=\"input-material\" [(ngModel)] = \"selectedPipeline.input_params[Key]\">\r\n     </div>\r\n      <button class=\"btn btn-theme-success-sm\" (click)=\"modalRef.hide()\">Submit</button>\r\n\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<!--<div class=\"flex\">-->\r\n  <!--<div class=\"container \" dragula=\"VAMPIRES\" [(dragulaModel)]=\"vamps\">-->\r\n    <!--<div class=\"vamp\" *ngFor=\"let vamp of vamps\">{{ vamp.name }}</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--<div class=\"container \" dragula=\"VAMPIRES\" [(dragulaModel)]=\"vamps2\">-->\r\n    <!--<div class=\"vamp\" *ngFor=\"let vamp of vamps2\">{{ vamp.name }}</div>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n  .primary-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #00abd3; }\n  .primary-modal .modal-header {\n    color: #474747; }\n  .primary-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n  .primary-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n  #search-aim:focus {\n  box-shadow: none;\n  outline: 1px solid #4db1a7;\n  background: #fff; }\n  * {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box; }\n  .heading {\n  font-size: 16px; }\n  .aim-list, .pipeline-wrapper {\n  overflow: auto; }\n  .pipeline {\n  height: 100%; }\n  ul {\n  list-style-type: none; }\n  .bg-grey {\n  background-color: #dddddd; }\n  .module-box {\n  height: 32px;\n  font-size: 13px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer; }\n  .module-box .fa {\n    color: #9e9e9e; }\n  input::-webkit-input-placeholder {\n  opacity: .5; }\n  input:-ms-input-placeholder {\n  opacity: .5; }\n  input::-ms-input-placeholder {\n  opacity: .5; }\n  input::placeholder {\n  opacity: .5; }\n  /*========*/\n  label {\n  display: block;\n  font-size: 11px;\n  color: #9e9e9e;\n  margin-right: 4px; }\n  .input-modal {\n  padding: 0 2px;\n  margin-top: 0;\n  margin-left: 1px;\n  border: none;\n  border-color: inherit;\n  box-shadow: none;\n  outline: none;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px; }\n  .input-modal::-webkit-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n  .input-modal:-ms-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n  .input-modal::-ms-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n  .input-modal::placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PipelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineComponent", function() { return PipelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _aim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../aim.service */ "./src/app/aim.service.ts");
/* harmony import */ var _object_array_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../object-array-crud.service */ "./src/app/object-array-crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _ngxs_app_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../ngxs/app.action */ "./src/app/ngxs/app.action.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_11__);
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












var PipelineComponent = /** @class */ (function () {
    function PipelineComponent(aimService, objectArrayCrudService, _iterableDiffers, activatedRoute, constantsService, serverService, modalService, utilityService, dragulaService, store) {
        this.aimService = aimService;
        this.objectArrayCrudService = objectArrayCrudService;
        this._iterableDiffers = _iterableDiffers;
        this.activatedRoute = activatedRoute;
        this.constantsService = constantsService;
        this.serverService = serverService;
        this.modalService = modalService;
        this.utilityService = utilityService;
        this.dragulaService = dragulaService;
        this.store = store;
        this.myObject = Object;
        this.pipeLine = [];
        this.aiModules = null;
        this.datachanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vamps = [
            { name: "Bad Vamp" },
            { name: "Petrovitch the Slain" },
            { name: "Bob of the Everglades" },
            { name: "The Optimistic Reaper" }
        ];
        this.vamps2 = [
            { name: "Dracula" },
            { name: "Kurz" },
            { name: "Vladislav" },
            { name: "Deacon" }
        ];
        this.iterableDiffer = this._iterableDiffers.find([]).create(null);
    }
    Object.defineProperty(PipelineComponent.prototype, "bot", {
        set: function (botData) {
            this._bot = botData;
            this.pipeLine = this._bot && this._bot.pipelines || [];
            this.filterAiModules();
        },
        enumerable: true,
        configurable: true
    });
    PipelineComponent.prototype.ngOnInit = function () {
        // use these if you want
        var _this = this;
        // this.dragulaService.createGroup("VAMPIRES", {
        //   // ...
        // });
        //
        // this.dragulaService.dropModel("VAMPIRES").subscribe(args => {
        //   console.log(args);
        // });
        this.buildBotType = this.activatedRoute.snapshot.data['buildBot'];
        this.pipeLine = this._bot && this._bot.pipelines || [];
        var url = this.constantsService.getAllPipelineModuleUrl();
        this.app$.subscribe(function (appState) {
            _this.aiModules =
                appState.masterPipelineItems;
            _this.filterAiModules();
        });
        this.serverService.makeGetReq({ url: url })
            .subscribe(function (value) {
            _this.store.dispatch([
                new _ngxs_app_action__WEBPACK_IMPORTED_MODULE_8__["SetPipelineModuleMasterData"]({ masterPipelineItems: value.objects })
            ]);
        });
        this.modalService.onHidden.subscribe(function (reason) {
            _this.prepareAndDispatch();
        });
        // this.aimService.getModules()
        //   .subscribe((value: IPipelineItem[]) => {
        //     this.aiModules = value;
        //   });
        if (this.buildBotType) {
            this.botcreationstate$.subscribe(function (botcreationstate) {
                _this.pipeLine = botcreationstate &&
                    botcreationstate[_this.buildBotType] &&
                    botcreationstate[_this.buildBotType].pipelines || [];
            });
        }
    };
    ;
    PipelineComponent.prototype.filterAiModules = function () {
        var _this = this;
        if (!this.pipeLine || !this.aiModules)
            return;
        this.aiModules = this.aiModules.filter(function (aiModule) {
            var x = !_this.pipeLine.find(function (pipelineItem) { return pipelineItem.id === aiModule.id; });
            return x;
        });
    };
    PipelineComponent.prototype.ngDoCheck = function () {
        //
        console.log('do check', this.pipeLine);
        var changes = this.iterableDiffer.diff(this.pipeLine);
        if (changes) {
            this.prepareAndDispatch();
        }
    };
    PipelineComponent.prototype.prepareAndDispatch = function () {
        var isAllPipelineModulesInputParamsArePopulated = this.utilityService.checkIfAllPipelineInputParamsArePopulated(this.pipeLine);
        var isPipelineValidObj = {};
        isPipelineValidObj[_utility_service__WEBPACK_IMPORTED_MODULE_10__["EFormValidationErrors"].form_validation_pipeline] = isAllPipelineModulesInputParamsArePopulated;
        /*if there is change: check if all settings are populated*/
        this.datachanged$.emit(__assign({ pipelines: this.pipeLine, isAllPipelineModulesInputParamsArePopulated: isAllPipelineModulesInputParamsArePopulated }, isPipelineValidObj));
    };
    PipelineComponent.prototype.printArr = function () {
        console.log(this.pipeLine);
        console.log(this.aiModules);
    };
    PipelineComponent.prototype.openCreateBotModal = function (template, pipeline) {
        this.selectedPipeline = pipeline;
        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    };
    PipelineComponent.prototype.test = function () {
        console.log(this.pipeLine);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PipelineComponent.prototype, "bot", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], PipelineComponent.prototype, "botcreationstate$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], PipelineComponent.prototype, "app$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PipelineComponent.prototype, "aiModules", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PipelineComponent.prototype, "datachanged$", void 0);
    PipelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pipeline',
            template: __webpack_require__(/*! ./pipeline.component.html */ "./src/app/core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component.html"),
            styles: [__webpack_require__(/*! ./pipeline.component.scss */ "./src/app/core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component.scss")],
            providers: [ng2_dragula__WEBPACK_IMPORTED_MODULE_11__["DragulaService"]]
        }),
        __metadata("design:paramtypes", [_aim_service__WEBPACK_IMPORTED_MODULE_2__["AimService"],
            _object_array_crud_service__WEBPACK_IMPORTED_MODULE_3__["ObjectArrayCrudService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"],
            _server_service__WEBPACK_IMPORTED_MODULE_7__["ServerService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"],
            ng2_dragula__WEBPACK_IMPORTED_MODULE_11__["DragulaService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], PipelineComponent);
    return PipelineComponent;
}());



/***/ }),

/***/ "./src/app/draggable.directive.ts":
/*!****************************************!*\
  !*** ./src/app/draggable.directive.ts ***!
  \****************************************/
/*! exports provided: DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag.service */ "./src/app/drag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(dragService) {
        this.dragService = dragService;
        this.options = {};
    }
    Object.defineProperty(DraggableDirective.prototype, "draggable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "appDraggable", {
        set: function (options) {
            if (options) {
                this.options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.onDragStart = function (event) {
        var _a = this.options, _b = _a.zone, zone = _b === void 0 ? 'zone' : _b, _c = _a.data, data = _c === void 0 ? {} : _c;
        this.dragService.startDrag(zone);
        event.dataTransfer.setData('Text', JSON.stringify(data));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('draggable'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DraggableDirective.prototype, "draggable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DraggableDirective.prototype, "appDraggable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onDragStart", null);
    DraggableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDraggable]'
        }),
        __metadata("design:paramtypes", [_drag_service__WEBPACK_IMPORTED_MODULE_1__["DragService"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "./src/app/drop-target.directive.ts":
/*!******************************************!*\
  !*** ./src/app/drop-target.directive.ts ***!
  \******************************************/
/*! exports provided: DropTargetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropTargetDirective", function() { return DropTargetDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag.service */ "./src/app/drag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropTargetDirective = /** @class */ (function () {
    function DropTargetDirective(dragService) {
        this.dragService = dragService;
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = {};
    }
    Object.defineProperty(DropTargetDirective.prototype, "myDropTarget", {
        set: function (options) {
            if (options) {
                this.options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    DropTargetDirective.prototype.onDragOver = function (event) {
        var _a = this.options.zone, zone = _a === void 0 ? 'zone' : _a;
        if (this.dragService.accepts(zone)) {
            event.preventDefault();
        }
    };
    DropTargetDirective.prototype.onDrop = function (event) {
        var data = JSON.parse(event.dataTransfer.getData('Text'));
        this.drop.next(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DropTargetDirective.prototype, "myDropTarget", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('myDrop'),
        __metadata("design:type", Object)
    ], DropTargetDirective.prototype, "drop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragenter', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropTargetDirective.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropTargetDirective.prototype, "onDrop", null);
    DropTargetDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropTarget]'
        }),
        __metadata("design:paramtypes", [_drag_service__WEBPACK_IMPORTED_MODULE_1__["DragService"]])
    ], DropTargetDirective);
    return DropTargetDirective;
}());



/***/ }),

/***/ "./src/app/event.service.ts":
/*!**********************************!*\
  !*** ./src/app/event.service.ts ***!
  \**********************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
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

var EventService = /** @class */ (function () {
    function EventService() {
        this.removeCodeMirrorHistory$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EventService.prototype.getRemoveCodeMirrorHistory$ = function () {
        return this.removeCodeMirrorHistory$;
    };
    EventService.prototype.emitRemoveCodeMirrorHistoryEvent = function (source) {
        this.removeCodeMirrorHistory$.emit(source);
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/pipeline-filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipeline-filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: PipelineFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineFilterPipe", function() { return PipelineFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PipelineFilterPipe = /** @class */ (function () {
    function PipelineFilterPipe() {
    }
    PipelineFilterPipe.prototype.transform = function (items, keyword) {
        // ;
        keyword = keyword && keyword.trim();
        if (!keyword || keyword === "")
            return items;
        return items.filter(function (item) {
            return item.unique_name.toLowerCase().includes(keyword.toLowerCase());
        });
    };
    PipelineFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pipelineFilter'
        })
    ], PipelineFilterPipe);
    return PipelineFilterPipe;
}());



/***/ }),

/***/ "./src/app/session-data-to-rich-media-serializer.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/session-data-to-rich-media-serializer.pipe.ts ***!
  \***************************************************************/
/*! exports provided: SessionDataToRichMediaSerializerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDataToRichMediaSerializerPipe", function() { return SessionDataToRichMediaSerializerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SessionDataToRichMediaSerializerPipe = /** @class */ (function () {
    function SessionDataToRichMediaSerializerPipe() {
    }
    SessionDataToRichMediaSerializerPipe.prototype.transform = function (sessionData, args) {
        return sessionData.media;
        // return sessionData;
    };
    SessionDataToRichMediaSerializerPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sessionDataToRichMediaSerializer'
        })
    ], SessionDataToRichMediaSerializerPipe);
    return SessionDataToRichMediaSerializerPipe;
}());



/***/ })

}]);
//# sourceMappingURL=bot-detail-bot-detail-module.js.map