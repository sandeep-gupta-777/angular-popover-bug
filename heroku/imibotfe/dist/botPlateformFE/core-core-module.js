(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-core-module"],{

/***/ "./src/app/access-gaurd.service.ts":
/*!*****************************************!*\
  !*** ./src/app/access-gaurd.service.ts ***!
  \*****************************************/
/*! exports provided: AccessGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessGaurdService", function() { return AccessGaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants.service */ "./src/app/constants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccessGaurdService = /** @class */ (function () {
    function AccessGaurdService(router, constantsService, activatedRoute) {
        this.router = router;
        this.constantsService = constantsService;
        this.activatedRoute = activatedRoute;
    }
    AccessGaurdService.prototype.canActivate = function (route, state) {
        // return true;
        var _this = this;
        return this.loggeduser$.map(function (value) {
            return _this.shouldAllowAccess(value, route);
        });
    };
    AccessGaurdService.prototype.shouldAllowAccess = function (value, route) {
        if (value && value.user != null) {
            var routeName = route.data["routeName"];
            if (!this.constantsService.isRouteAccessDenied(routeName)) {
                return true;
            }
            else {
                this.router.navigate(['/denied']);
            }
        }
        else {
            this.router.navigate(['auth', 'login']);
            return false;
        }
    };
    AccessGaurdService.prototype.canActivateChild = function (route, state) {
        var _this = this;
        return this.loggeduser$.map(function (value) {
            return _this.shouldAllowAccess(value, route);
        });
    };
    AccessGaurdService.prototype.canLoad = function (route) {
        var _this = this;
        return this.loggeduser$.map(function (value) {
            if (value.user != null) {
                return true;
            }
            else {
                _this.router.navigate(['auth', 'login']);
                return false;
            }
        }).take(1);
        /*OMG:
        *What does it means for an observable to complete
        * https://github.com/angular/angular/issues/9613*/
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AccessGaurdService.prototype, "loggeduser$", void 0);
    AccessGaurdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AccessGaurdService);
    return AccessGaurdService;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  signup works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat-preview-new-page/chat-preview-new-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/chat/chat-preview-new-page/chat-preview-new-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat-preview-new-page/chat-preview-new-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/chat/chat-preview-new-page/chat-preview-new-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat-preview-new-page/chat-preview-new-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/chat/chat-preview-new-page/chat-preview-new-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChatPreviewNewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPreviewNewPageComponent", function() { return ChatPreviewNewPageComponent; });
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

var ChatPreviewNewPageComponent = /** @class */ (function () {
    function ChatPreviewNewPageComponent() {
    }
    ChatPreviewNewPageComponent.prototype.ngOnInit = function () {
    };
    ChatPreviewNewPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-preview-new-page',
            template: __webpack_require__(/*! ./chat-preview-new-page.component.html */ "./src/app/chat/chat-preview-new-page/chat-preview-new-page.component.html"),
            styles: [__webpack_require__(/*! ./chat-preview-new-page.component.scss */ "./src/app/chat/chat-preview-new-page/chat-preview-new-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatPreviewNewPageComponent);
    return ChatPreviewNewPageComponent;
}());



/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/build-code-based-bot.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/build-code-based-bot.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"d-flex justify-content-between bg-white align-items-center my-2 shadow-theme\" style=\"padding: 16px 36px;\">-->\r\n  <!--<h4 class=\"m-0\">Create Bot</h4>-->\r\n  <!--<button class=\"btn btn-theme-primary\" (click)=\"createBot()\">Create Bot</button>-->\r\n<!--</div>-->\r\n<!--<div class=\"shadow-theme\">-->\r\n  <!--<app-bot-config  (datachanged$)=\"datachanged($event)\" [bot]=\"bot\"></app-bot-config>-->\r\n<!--</div>-->\r\n<!--&lt;!&ndash;&ndash;&gt;-->\r\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/build-code-based-bot.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/build-code-based-bot.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box; }\n\na {\n  text-decoration: none !important;\n  font-size: 13px;\n  color: black;\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #666;\n  font-family: \"Helvetica\", sans-serif; }\n\n.card, .card-header {\n  border: none; }\n\n.nav-link {\n  border: none;\n  border-bottom: 1px solid transparent; }\n\n.nav-link:hover, .nav-link:hover {\n    border: none; }\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/build-code-based-bot.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/build-code-based-bot.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BuildCodeBasedBotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildCodeBasedBotComponent", function() { return BuildCodeBasedBotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _bot_detail_bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../bot-detail/bot-sessions/bot-sessions.component */ "./src/app/core/bot-detail/bot-sessions/bot-sessions.component.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _ngxs_buildbot_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ngxs/buildbot.action */ "./src/app/core/buildbot/ngxs/buildbot.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BuildCodeBasedBotComponent = /** @class */ (function () {
    function BuildCodeBasedBotComponent(activatedRoute, serverService, utilityService, constantsService, router, store) {
        this.activatedRoute = activatedRoute;
        this.serverService = serverService;
        this.utilityService = utilityService;
        this.constantsService = constantsService;
        this.router = router;
        this.store = store;
        this.selectedTab = "architecture";
        this.showConfig = true;
        this.selectedChannel = 'all';
        this.selectedDurationDisplayName = 'Monthly';
        this.selectedSideBarTab = 'pipeline';
        this.activeTab = 'basic';
        this.bot = {};
    }
    BuildCodeBasedBotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('tab') || 'basic'; //todo: not a robust code
        this.botcreationstate$.subscribe(function (value) {
            if (!value || !value.codeBased)
                return;
            _this.bot = value.codeBased;
        });
        this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab') || 'pipeline';
    };
    BuildCodeBasedBotComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        console.log(this.activeTab);
    };
    BuildCodeBasedBotComponent.prototype.tabChanged = function (tab) {
        this.selectedTab = tab;
    };
    BuildCodeBasedBotComponent.prototype.createBot = function () {
        var _this = this;
        var url = this.constantsService.getCreateNewBot();
        this.serverService.makePostReq({ url: url, body: this.bot })
            .subscribe(function (value) {
            console.log();
            _this.store.dispatch([new _ngxs_buildbot_action__WEBPACK_IMPORTED_MODULE_8__["ResetBuildBotToDefault"]()]);
        });
    };
    BuildCodeBasedBotComponent.prototype.datachanged = function (data) {
        console.log("::::::::::::::::::");
        // this.store.dispatch([
        //   new SaveNewBotInfo_CodeBased({data:data})
        // ]);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BuildCodeBasedBotComponent.prototype, "botcreationstate$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(function (state) { return state.botlist.codeBasedBotList; }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BuildCodeBasedBotComponent.prototype, "codeBasedBotList$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_bot_detail_bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_6__["BotSessionsComponent"]),
        __metadata("design:type", _bot_detail_bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_6__["BotSessionsComponent"])
    ], BuildCodeBasedBotComponent.prototype, "sessionChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BuildCodeBasedBotComponent.prototype, "bot", void 0);
    BuildCodeBasedBotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-build-code-based-bot',
            template: __webpack_require__(/*! ./build-code-based-bot.component.html */ "./src/app/core/buildbot/build-code-based-bot/build-code-based-bot.component.html"),
            styles: [__webpack_require__(/*! ./build-code-based-bot.component.scss */ "./src/app/core/buildbot/build-code-based-bot/build-code-based-bot.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_7__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], BuildCodeBasedBotComponent);
    return BuildCodeBasedBotComponent;
}());



/***/ }),

/***/ "./src/app/core/buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"d-flex justify-content-between bg-white align-items-center my-2\" style=\"padding: 16px 36px;\">-->\r\n  <!--<h4 class=\"m-0\">Create Bot</h4>-->\r\n  <!--<button class=\"btn btn-theme-primary\" (click)=\"createBot()\">Create Bot</button>-->\r\n<!--</div>-->\r\n<!--<app-bot-config (datachanged$)=\"datachanged($event)\" [bot]=\"bot\"></app-bot-config>-->\r\n\r\n<!--&lt;!&ndash;<div class=\"row m-0 mt-3 p-3 bg-white\">&ndash;&gt;-->\r\n  <!--&lt;!&ndash;<div class=\"col-12\">&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<ul class=\"nav nav-tabs theme-tabbing mb-2\">&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<li class=\"nav-item\" [ngClass]=\"{'tab-active':selectedTab==='architecture'}\">&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<a class=\"nav-link heading\" [routerLink]=\"['.']\"&ndash;&gt;-->\r\n           <!--&lt;!&ndash;queryParamsHandling=\"merge\"&ndash;&gt;-->\r\n           <!--&lt;!&ndash;replaceUrl=\"true\"&ndash;&gt;-->\r\n           <!--&lt;!&ndash;(click)=\"tabChanged('architecture')\"&ndash;&gt;-->\r\n           <!--&lt;!&ndash;[queryParams]=\"{build:'architecture'}\"><strong>Bot Architecture</strong></a>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;</li>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;</ul>&ndash;&gt;-->\r\n\r\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n  <!--&lt;!&ndash;&lt;!&ndash; tab end &ndash;&gt;&ndash;&gt;-->\r\n  <!--&lt;!&ndash;&lt;!&ndash; architr start &ndash;&gt;&ndash;&gt;-->\r\n  <!--&lt;!&ndash;<div class=\"col-12 architeture-body\">&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<div class=\"d-flex row-body bg-white mt-2\">&ndash;&gt;-->\r\n\r\n      <!--&lt;!&ndash;<div class=\"side-bar  border-right\">&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<div class=\"sidebar-content\">&ndash;&gt;-->\r\n          <!--&lt;!&ndash;<a routerLink=\".\"&ndash;&gt;-->\r\n             <!--&lt;!&ndash;[queryParams]=\"{'build-tab':'pipeline'}\"&ndash;&gt;-->\r\n             <!--&lt;!&ndash;queryParamsHandling=\"merge\"&ndash;&gt;-->\r\n             <!--&lt;!&ndash;[ngClass]=\"{'font-weight-bold':selectedSideBarTab==='pipeline'}\"&ndash;&gt;-->\r\n             <!--&lt;!&ndash;(click)=\"selectedSideBarTab='pipeline'\"&ndash;&gt;-->\r\n             <!--&lt;!&ndash;class=\"tab-theme font-weight-bold\">Pipeline&ndash;&gt;-->\r\n          <!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;<div routerLink=\".\"&ndash;&gt;-->\r\n               <!--&lt;!&ndash;[queryParams]=\"{'build-tab':'knowledge'}\"&ndash;&gt;-->\r\n               <!--&lt;!&ndash;queryParamsHandling=\"merge\"&ndash;&gt;-->\r\n               <!--&lt;!&ndash;[ngClass]=\"{'font-weight-bold':selectedSideBarTab==='knowledge'}\"&ndash;&gt;-->\r\n               <!--&lt;!&ndash;(click)=\"selectedSideBarTab='knowledge'\"&ndash;&gt;-->\r\n               <!--&lt;!&ndash;class=\"tab-theme\">Knowledge base&ndash;&gt;-->\r\n          <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;&lt;!&ndash;<div routerLink=\".\"&ndash;&gt;&ndash;&gt;-->\r\n               <!--&lt;!&ndash;&lt;!&ndash;[queryParams]=\"{'build-tab':'code'}\"&ndash;&gt;&ndash;&gt;-->\r\n               <!--&lt;!&ndash;&lt;!&ndash;queryParamsHandling=\"merge\"&ndash;&gt;&ndash;&gt;-->\r\n               <!--&lt;!&ndash;&lt;!&ndash;[ngClass]=\"{'font-weight-bold':selectedSideBarTab==='code'}\"&ndash;&gt;&ndash;&gt;-->\r\n               <!--&lt;!&ndash;&lt;!&ndash;(click)=\"selectedSideBarTab='code'\"&ndash;&gt;&ndash;&gt;-->\r\n               <!--&lt;!&ndash;&lt;!&ndash;class=\"tab-theme\">Code&ndash;&gt;&ndash;&gt;-->\r\n          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->\r\n          <!--&lt;!&ndash;&lt;!&ndash;<div routerLink=\".\"&ndash;&gt;&ndash;&gt;-->\r\n               <!--&lt;!&ndash;&lt;!&ndash;[queryParams]=\"{'build-tab':'integration'}\"&ndash;&gt;&ndash;&gt;-->\r\n               <!--&lt;!&ndash;&lt;!&ndash;queryParamsHandling=\"merge\"&ndash;&gt;&ndash;&gt;-->\r\n               <!--&lt;!&ndash;&lt;!&ndash;[ngClass]=\"{'font-weight-bold':selectedSideBarTab==='integration'}\"&ndash;&gt;&ndash;&gt;-->\r\n               <!--&lt;!&ndash;&lt;!&ndash;(click)=\"selectedSideBarTab='integration'\"&ndash;&gt;&ndash;&gt;-->\r\n               <!--&lt;!&ndash;&lt;!&ndash;class=\"tab-theme\">Integration&ndash;&gt;&ndash;&gt;-->\r\n          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->\r\n        <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n      <!--&lt;!&ndash;<div class=\"p-2\" style=\"width: 85%; min-height: 250px\">&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<app-pipeline (datachanged$)=\"datachanged($event)\" *ngIf=\"selectedSideBarTab==='pipeline'\"></app-pipeline>&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<app-knowledge-base *ngIf=\"selectedSideBarTab==='knowledge'\"></app-knowledge-base>&ndash;&gt;-->\r\n        <!--&lt;!&ndash;&lt;!&ndash;<div class=\"d-flex justify-content-center align-items-center\"&ndash;&gt;&ndash;&gt;-->\r\n             <!--&lt;!&ndash;&lt;!&ndash;style=\"height: 100%\"&ndash;&gt;&ndash;&gt;-->\r\n             <!--&lt;!&ndash;&lt;!&ndash;*ngIf=\"selectedSideBarTab==='knowledge' || selectedSideBarTab==='code'\">&ndash;&gt;&ndash;&gt;-->\r\n          <!--&lt;!&ndash;&lt;!&ndash;<h4 class=\"text-muted\">Please create the bot to enable this section</h4>&ndash;&gt;&ndash;&gt;-->\r\n        <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->\r\n\r\n        <!--&lt;!&ndash;&lt;!&ndash;<app-code-input *ngIf=\"selectedSideBarTab==='code'\"></app-code-input>&ndash;&gt;&ndash;&gt;-->\r\n        <!--&lt;!&ndash;&lt;!&ndash;<app-integration-option-list (datachanged$)=\"datachanged($event)\" *ngIf=\"selectedSideBarTab==='integration'\"></app-integration-option-list>&ndash;&gt;&ndash;&gt;-->\r\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box; }\n\na {\n  text-decoration: none !important;\n  font-size: 13px;\n  color: black;\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #666;\n  font-family: \"Helvetica\", sans-serif; }\n\n.card, .card-header {\n  border: none; }\n\n.nav-link {\n  border: none;\n  border-bottom: 1px solid transparent; }\n\n.nav-link:hover, .nav-link:hover {\n    border: none; }\n"

/***/ }),

/***/ "./src/app/core/buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: BuildPipelineBasedBotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildPipelineBasedBotComponent", function() { return BuildPipelineBasedBotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bot_detail_bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bot-detail/bot-sessions/bot-sessions.component */ "./src/app/core/bot-detail/bot-sessions/bot-sessions.component.ts");
/* harmony import */ var _ngxs_buildbot_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngxs/buildbot.action */ "./src/app/core/buildbot/ngxs/buildbot.action.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BuildPipelineBasedBotComponent = /** @class */ (function () {
    function BuildPipelineBasedBotComponent(activatedRoute, serverService, utilityService, constantsService, store) {
        this.activatedRoute = activatedRoute;
        this.serverService = serverService;
        this.utilityService = utilityService;
        this.constantsService = constantsService;
        this.store = store;
        this.selectedTab = "architecture";
        this.showConfig = true;
        this.selectedChannel = 'all';
        this.selectedDurationDisplayName = 'Monthly';
        this.selectedSideBarTab = 'pipeline';
        this.activeTab = 'basic';
        this.bot = {};
    }
    BuildPipelineBasedBotComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('tab') || 'basic'; //todo: not a robust code
        this.botcreationstate$.subscribe(function (value) {
            // console.log('test');
            if (!value || !value.pipeLineBased)
                return;
            _this.bot = value.pipeLineBased;
        });
        this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab') || 'pipeline';
    };
    BuildPipelineBasedBotComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
    };
    BuildPipelineBasedBotComponent.prototype.tabChanged = function (tab) {
        this.selectedTab = tab;
    };
    BuildPipelineBasedBotComponent.prototype.createBot = function () {
        var url = this.constantsService.getCreateNewBot();
        this.serverService.makePostReq({ url: url, body: this.bot })
            .subscribe(function (value) {
        });
    };
    BuildPipelineBasedBotComponent.prototype.datachanged = function (data) {
        // ;
        this.store.dispatch([
            new _ngxs_buildbot_action__WEBPACK_IMPORTED_MODULE_3__["SaveNewBotInfo_PipelineBased"]({ data: data })
        ]);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])
    ], BuildPipelineBasedBotComponent.prototype, "botcreationstate$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_bot_detail_bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_2__["BotSessionsComponent"]),
        __metadata("design:type", _bot_detail_bot_sessions_bot_sessions_component__WEBPACK_IMPORTED_MODULE_2__["BotSessionsComponent"])
    ], BuildPipelineBasedBotComponent.prototype, "sessionChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BuildPipelineBasedBotComponent.prototype, "bot", void 0);
    BuildPipelineBasedBotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-build-pipeline-based-bot',
            template: __webpack_require__(/*! ./build-pipeline-based-bot.component.html */ "./src/app/core/buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component.html"),
            styles: [__webpack_require__(/*! ./build-pipeline-based-bot.component.scss */ "./src/app/core/buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _server_service__WEBPACK_IMPORTED_MODULE_6__["ServerService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_8__["ConstantsService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], BuildPipelineBasedBotComponent);
    return BuildPipelineBasedBotComponent;
}());



/***/ }),

/***/ "./src/app/core/buildbot/buildbot-wrapper.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/buildbot/buildbot-wrapper.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"my-3\">-->\r\n  <!--<router-outlet class=\"my-5\"></router-outlet>-->\r\n<!--</div>-->\r\n\r\n\r\n\r\n\r\n<div class=\"my-3\">\r\n  <div class=\"d-flex bg-white align-items-center my-2 shadow-theme\" style=\"padding: 16px 36px;\">\r\n    <h4 class=\"m-0\">Create Bot </h4>\r\n    <button class=\"btn btn-theme-secondary-outline ml-auto mr-1\" (click)=\"navigateToDashboard()\">Cancel</button>\r\n    <button class=\"btn btn-theme-primary\" (click)=\"createBot()\">Create Bot</button>\r\n  </div>\r\n  <div class=\"shadow-theme p-2 bg-white\">\r\n    <app-bot-config  (datachanged$)=\"datachanged($event)\" [bot]=\"bot\"></app-bot-config>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/buildbot/buildbot-wrapper.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/buildbot/buildbot-wrapper.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card, .card-header {\n  border: none; }\n"

/***/ }),

/***/ "./src/app/core/buildbot/buildbot-wrapper.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/buildbot/buildbot-wrapper.component.ts ***!
  \*************************************************************/
/*! exports provided: BuildbotWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildbotWrapperComponent", function() { return BuildbotWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_buildbot_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngxs/buildbot.action */ "./src/app/core/buildbot/ngxs/buildbot.action.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view-bots/ngxs/view-bot.action */ "./src/app/core/view-bots/ngxs/view-bot.action.ts");
/* harmony import */ var _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view-bots/view-bots.component */ "./src/app/core/view-bots/view-bots.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BuildbotWrapperComponent = /** @class */ (function () {
    function BuildbotWrapperComponent(activatedRoute, router, serverService, utilityService, constantsService, store) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.serverService = serverService;
        this.utilityService = utilityService;
        this.constantsService = constantsService;
        this.store = store;
        this.bot = {};
    }
    BuildbotWrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bot_type = this.activatedRoute.snapshot.queryParamMap.get('bot_type');
        this.botcreationstate$.subscribe(function (value) {
            /*TODO: this is a  hack to avoid loops*/
            if (!value)
                return;
            if (_this.bot_type === _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_9__["EBotType"].chatbot && value.codeBased) {
                _this.bot = value.codeBased;
            }
            else if (_this.bot_type === _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_9__["EBotType"].intelligent && value.pipeLineBased) {
                _this.bot = value.pipeLineBased;
            }
        });
    };
    BuildbotWrapperComponent.prototype.createBot = function () {
        var _this = this;
        var bot = this.utilityService.performFormValidationBeforeSaving(this.bot);
        if (!bot)
            return;
        var url = this.constantsService.getCreateNewBot();
        if (!bot) {
            console.error("there is no bot type in url");
        }
        bot.bot_type = this.bot_type;
        if (!this.bot.logo) {
            this.bot.logo = "https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png";
        }
        this.serverService.makePostReq({ url: url, body: bot })
            .subscribe(function (createdBot) {
            _this.store.dispatch([
                new _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_8__["AddNewBotInAllBotList"]({ bot: createdBot }),
                new _ngxs_buildbot_action__WEBPACK_IMPORTED_MODULE_1__["ResetBuildBotToDefault"]()
            ]).subscribe(function () {
                _this.router.navigate(["/core/botdetail/" + _this.bot_type + "/" + createdBot.id]);
            });
            _this.utilityService.showSuccessToaster('Bot Created');
            console.log("test");
        });
    };
    BuildbotWrapperComponent.prototype.datachanged = function (data) {
        var bot_type = this.activatedRoute.snapshot.queryParamMap.get('bot_type');
        if (bot_type === _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_9__["EBotType"].chatbot) {
            this.store.dispatch([
                new _ngxs_buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveNewBotInfo_CodeBased"]({ data: data })
            ]);
        }
        else {
            this.store.dispatch([
                new _ngxs_buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveNewBotInfo_PipelineBased"]({ data: data })
            ]);
        }
    };
    BuildbotWrapperComponent.prototype.navigateToDashboard = function () {
        this.router.navigate([""]);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BuildbotWrapperComponent.prototype, "botcreationstate$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(function (state) { return state.botlist.codeBasedBotList; }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BuildbotWrapperComponent.prototype, "codeBasedBotList$", void 0);
    BuildbotWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buildbot-wrapper',
            template: __webpack_require__(/*! ./buildbot-wrapper.component.html */ "./src/app/core/buildbot/buildbot-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./buildbot-wrapper.component.scss */ "./src/app/core/buildbot/buildbot-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], BuildbotWrapperComponent);
    return BuildbotWrapperComponent;
}());



/***/ }),

/***/ "./src/app/core/core-wrapper.component.html":
/*!**************************************************!*\
  !*** ./src/app/core/core-wrapper.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"shadow-theme\">-->\r\n<!--<app-header></app-header>-->\r\n<!--</div>-->\r\n<!---->\r\n\r\n<!--<div class=\"container\">-->\r\n<!--<div class=\"row\">-->\r\n<!--<div class=\"col-12\">-->\r\n<!--<router-outlet></router-outlet>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n\r\n<!--<progressbar [value]=\"55\" [animate]=\"true\"></progressbar>-->\r\n\r\n<div class=\"grid-container \">\r\n  <app-header class=\"grid-header\"></app-header>\r\n  <div class=\"grid-body \">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n<div class=\"mt-2\">\r\n  <app-footer></app-footer>\r\n</div>\r\n\r\n<!---->\r\n"

/***/ }),

/***/ "./src/app/core/core-wrapper.component.scss":
/*!**************************************************!*\
  !*** ./src/app/core/core-wrapper.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1% (1fr)[12] 1%;\n      grid-template-columns: 1% repeat(12, 1fr) 1%;\n  -ms-grid-rows: 56px minmax(80vh, 1fr);\n      grid-template-rows: 56px minmax(80vh, 1fr); }\n\n.grid-header {\n  grid-column: 1 / -1; }\n\n.grid-body {\n  -ms-grid-row: 2;\n  -ms-grid-row-span: 1;\n  grid-row: 2 / 3;\n  grid-column: 2/-2; }\n"

/***/ }),

/***/ "./src/app/core/core-wrapper.component.ts":
/*!************************************************!*\
  !*** ./src/app/core/core-wrapper.component.ts ***!
  \************************************************/
/*! exports provided: CoreWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreWrapperComponent", function() { return CoreWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ngxs/app.action */ "./src/app/ngxs/app.action.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants.service */ "./src/app/constants.service.ts");
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






var CoreWrapperComponent = /** @class */ (function () {
    function CoreWrapperComponent(router, serverService, store, constantsService) {
        this.router = router;
        this.serverService = serverService;
        this.store = store;
        this.constantsService = constantsService;
    }
    CoreWrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (data) {
            if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RoutesRecognized"]) {
                _this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
            }
        });
        var allActionsUrl = this.constantsService.getAllActionsUrl();
        this.serverService.makeGetReq({ url: allActionsUrl })
            .subscribe(function (value) {
            _this.store.dispatch([
                new _ngxs_app_action__WEBPACK_IMPORTED_MODULE_2__["SetMasterProfilePermissions"]({ masterProfilePermissions: value.objects })
            ]);
            _this.constantsService.setPermissionsDeniedMap(value.objects);
        });
    };
    CoreWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-core-wrapper',
            template: __webpack_require__(/*! ./core-wrapper.component.html */ "./src/app/core/core-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./core-wrapper.component.scss */ "./src/app/core/core-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]])
    ], CoreWrapperComponent);
    return CoreWrapperComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-wrapper.component */ "./src/app/core/core-wrapper.component.ts");
/* harmony import */ var _customner_create_customner_create_customner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customner/create-customner/create-customner.component */ "./src/app/core/customner/create-customner/create-customner.component.ts");
/* harmony import */ var _enterpriseprofile_enterpriseprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enterpriseprofile/enterpriseprofile.component */ "./src/app/core/enterpriseprofile/enterpriseprofile.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/core/profile/profile.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/core/reports/reports.component.ts");
/* harmony import */ var _reports_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports/report-details/report-details.component */ "./src/app/core/reports/report-details/report-details.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/core/documentation/documentation.component.ts");
/* harmony import */ var _buildbot_buildbot_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buildbot/buildbot-wrapper.component */ "./src/app/core/buildbot/buildbot-wrapper.component.ts");
/* harmony import */ var _buildbot_build_code_based_bot_build_code_based_bot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buildbot/build-code-based-bot/build-code-based-bot.component */ "./src/app/core/buildbot/build-code-based-bot/build-code-based-bot.component.ts");
/* harmony import */ var _buildbot_build_pipeline_based_bot_build_pipeline_based_bot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component */ "./src/app/core/buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_fragment_active_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../router-fragment-active.directive */ "./src/app/router-fragment-active.directive.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _pipeline_test_pipeline_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pipeline-test/pipeline-test.component */ "./src/app/pipeline-test/pipeline-test.component.ts");
/* harmony import */ var _scroller_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../scroller.directive */ "./src/app/scroller.directive.ts");
/* harmony import */ var _reports_report_details_report_display_report_display_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reports/report-details/report-display/report-display.component */ "./src/app/core/reports/report-details/report-display/report-display.component.ts");
/* harmony import */ var _reports_report_details_report_controls_report_controls_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reports/report-details/report-controls/report-controls.component */ "./src/app/core/reports/report-details/report-controls/report-controls.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _chat_chat_preview_new_page_chat_preview_new_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../chat/chat-preview-new-page/chat-preview-new-page.component */ "./src/app/chat/chat-preview-new-page/chat-preview-new-page.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _aim_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../aim.service */ "./src/app/aim.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _customner_view_customner_view_customner_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./customner/view-customner/view-customner.component */ "./src/app/core/customner/view-customner/view-customner.component.ts");
/* harmony import */ var _auth_gaurd_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../auth-gaurd.service */ "./src/app/auth-gaurd.service.ts");
/* harmony import */ var _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./view-bots/view-bots.component */ "./src/app/core/view-bots/view-bots.component.ts");
/* harmony import */ var _access_gaurd_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../access-gaurd.service */ "./src/app/access-gaurd.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../constants.service */ "./src/app/constants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import {BotWelcomeComponent} from '../chat/bot-welcome-panel/bot-welcome.component';

// import {ChatWindowComponent} from '../chat/rooms-and-convo-panel/chat-window.component';
// import {ChatWrapperComponent} from '../chat/chat-wrapper.component';
// import {ChatMessageComponent} from '../chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component';
// import {ChatListComponent} from '../chat/rooms-and-convo-panel/chat-room-list/chat-list.component';
// import {ChatItemComponent} from '../chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component';
// import {ChatroomComponent} from '../chat/rooms-and-convo-panel/chat-message-list/chatroom.component';







// import {DragAndDropModule} from 'angular-draggable-droppable';








// import {CardCarouselComponent} from '../chat/carousel/card-carousel/card-carousel.component';
// import {QuickReplyComponent} from '../chat/carousel/quick-reply/quick-reply.component';


// import {HighlightDirective} from '../readonly-selected-permission.directive';
// import { IntegrationNameFormatterPipe } from './buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-name-formatter.pipe';
var routes = [
    {
        path: '',
        component: _core_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["CoreWrapperComponent"],
        canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_28__["AuthGaurdService"]],
        canActivateChild: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_28__["AuthGaurdService"], _access_gaurd_service__WEBPACK_IMPORTED_MODULE_30__["AccessGaurdService"]],
        children: [
            {
                path: 'viewbots', loadChildren: './view-bots/view-bots.module#ViewBotsModule', canLoad: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_28__["AuthGaurdService"]]
            },
            {
                path: 'botdetail', loadChildren: './bot-detail/bot-detail.module#BotDetailModule', canLoad: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_28__["AuthGaurdService"]]
            },
            {
                path: 'analytics2', loadChildren: './analysis2/analysis2.module#Analysis2Module', canLoad: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_28__["AuthGaurdService"]]
            },
            { path: 'customner', component: _customner_view_customner_view_customner_component__WEBPACK_IMPORTED_MODULE_27__["ViewCustomnerComponent"], data: { routeName: _constants_service__WEBPACK_IMPORTED_MODULE_31__["ERouteNames"].customner }, canActivate: [] },
            { path: 'customner/create', component: _customner_create_customner_create_customner_component__WEBPACK_IMPORTED_MODULE_2__["CreateCustomnerComponent"], canActivate: [] },
            { path: 'enterpriseprofile', component: _enterpriseprofile_enterpriseprofile_component__WEBPACK_IMPORTED_MODULE_3__["EnterpriseprofileComponent"], data: { routeName: _constants_service__WEBPACK_IMPORTED_MODULE_31__["ERouteNames"].enterprise_profile }, canActivate: [] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
            { path: 'reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_5__["ReportsComponent"], data: { routeName: _constants_service__WEBPACK_IMPORTED_MODULE_31__["ERouteNames"].report } },
            { path: 'reports/edit/:_id', component: _reports_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_6__["ReportDetailsComponent"], data: { routeName: _constants_service__WEBPACK_IMPORTED_MODULE_31__["ERouteNames"].report } },
            { path: 'reports/create', component: _reports_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_6__["ReportDetailsComponent"], data: { name: _constants_service__WEBPACK_IMPORTED_MODULE_31__["ERouteNames"].create_report } },
            { path: 'documentation', component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_7__["DocumentationComponent"], canActivate: [] },
            {
                path: 'buildbot', component: _buildbot_buildbot_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["BuildbotWrapperComponent"], children: [
                    { path: _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_29__["EBotType"].chatbot, component: _buildbot_build_code_based_bot_build_code_based_bot_component__WEBPACK_IMPORTED_MODULE_9__["BuildCodeBasedBotComponent"], data: { buildBot: _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_29__["EBotType"].chatbot } },
                    { path: 'intelligent', component: _buildbot_build_pipeline_based_bot_build_pipeline_based_bot_component__WEBPACK_IMPORTED_MODULE_10__["BuildPipelineBasedBotComponent"], data: { buildBot: 'pipeLineBased' } },
                ]
            },
        ],
    },
    // {path: 'preview/:id', component: ChatWrapperComponent, data: {isFullScreenPreview: true}, canActivate:[AuthGaurdService]},
    { path: '', redirectTo: "core/viewbots/" + _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_29__["EBotType"].chatbot, pathMatch: 'full' },
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
                _buildbot_build_code_based_bot_build_code_based_bot_component__WEBPACK_IMPORTED_MODULE_9__["BuildCodeBasedBotComponent"],
                _buildbot_build_pipeline_based_bot_build_pipeline_based_bot_component__WEBPACK_IMPORTED_MODULE_10__["BuildPipelineBasedBotComponent"],
                _router_fragment_active_directive__WEBPACK_IMPORTED_MODULE_12__["RouterFragmentActiveDirective"],
                _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_7__["DocumentationComponent"],
                _customner_view_customner_view_customner_component__WEBPACK_IMPORTED_MODULE_27__["ViewCustomnerComponent"],
                _customner_create_customner_create_customner_component__WEBPACK_IMPORTED_MODULE_2__["CreateCustomnerComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _enterpriseprofile_enterpriseprofile_component__WEBPACK_IMPORTED_MODULE_3__["EnterpriseprofileComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_5__["ReportsComponent"],
                _core_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["CoreWrapperComponent"],
                _buildbot_buildbot_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["BuildbotWrapperComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _pipeline_test_pipeline_test_component__WEBPACK_IMPORTED_MODULE_14__["PipelineTestComponent"],
                _scroller_directive__WEBPACK_IMPORTED_MODULE_15__["ScrollerDirective"],
                _reports_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_6__["ReportDetailsComponent"],
                // BotWelcomeComponent,
                _reports_report_details_report_display_report_display_component__WEBPACK_IMPORTED_MODULE_16__["ReportDisplayComponent"],
                _reports_report_details_report_controls_report_controls_component__WEBPACK_IMPORTED_MODULE_17__["ReportControlsComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_18__["TestComponent"],
                _chat_chat_preview_new_page_chat_preview_new_page_component__WEBPACK_IMPORTED_MODULE_19__["ChatPreviewNewPageComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_25__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                // DragAndDropModule.forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"],
            ],
            providers: [_aim_service__WEBPACK_IMPORTED_MODULE_23__["AimService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/customner/create-customner/create-customner.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/core/customner/create-customner/create-customner.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 d-flex justify-content-between\" >\r\n    <div class=\"btn btn-primary cursor-pointer\">Go Back</div>\r\n    <div class=\"right\">\r\n      <span>Concept Key</span>\r\n      <input type=\"text\">\r\n      <span>Concept Type</span>\r\n      <div class=\"btn-group\"  dropdown>\r\n        <button class=\"btn btn-primary\" dropdownToggle> {{conceptType}}</button>\r\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"conceptTypeChanged('single')\" >single match</a></li>\r\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"conceptTypeChanged('double')\" >double match</a></li>\r\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"conceptTypeChanged('metadata')\" >with metadata</a></li>\r\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"conceptTypeChanged('database')\" >database</a></li>\r\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"conceptTypeChanged('regex')\" >regex</a></li>\r\n        </ul>\r\n      </div>\r\n      <button class=\"btn btn-sucess\">Create</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12\" *ngIf=\"conceptType==='regex'\">\r\n    <textarea name=\"\"  id=\"\" cols=\"30\" rows=\"10\" style=\"width: 100%;\"></textarea>\r\n  </div>\r\n  <div class=\"col-12\"  *ngIf=\"conceptType==='single' || conceptType==='double' || conceptType==='metadata'\">\r\n    <app-code-editor></app-code-editor>\r\n  </div>\r\n</div>\r\n<!---->\r\n"

/***/ }),

/***/ "./src/app/core/customner/create-customner/create-customner.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/core/customner/create-customner/create-customner.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/customner/create-customner/create-customner.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/customner/create-customner/create-customner.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateCustomnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomnerComponent", function() { return CreateCustomnerComponent; });
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

var CreateCustomnerComponent = /** @class */ (function () {
    function CreateCustomnerComponent() {
        this.conceptType = "single";
    }
    CreateCustomnerComponent.prototype.ngOnInit = function () {
    };
    CreateCustomnerComponent.prototype.conceptTypeChanged = function (newConceptType) {
        this.conceptType = newConceptType;
    };
    CreateCustomnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-customner',
            template: __webpack_require__(/*! ./create-customner.component.html */ "./src/app/core/customner/create-customner/create-customner.component.html"),
            styles: [__webpack_require__(/*! ./create-customner.component.scss */ "./src/app/core/customner/create-customner/create-customner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateCustomnerComponent);
    return CreateCustomnerComponent;
}());



/***/ }),

/***/ "./src/app/core/customner/view-customner/view-customner.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/core/customner/view-customner/view-customner.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0 mt-3 p-1 bg-white\">\r\n  <div class=\"col-12 mt-4\">\r\n    <h4 > </h4>\r\n  </div>\r\n  <div class=\"col-12\" style=\"min-height: 450px\">\r\n    <app-knowledge-base\r\n      class=\"h-100\"\r\n      [custumNerDataForSmartTable]=\"custumNerDataForSmartTable\"\r\n      (updateOrSaveParentNers$)=\"updateOrSaveCustomNer($event)\"\r\n      (pageChanged$)=\"pageChanged$($event)\"\r\n      [totalRecords]=\"totalRecords\"\r\n      [recordsPerPage]=\"recordsPerPage\"\r\n      (deleteNer$)=\"deleteNer($event)\"\r\n      [currentPageNumber]=\"currentPageNumber\"\r\n      [settings]=\"settings\"\r\n    ></app-knowledge-base>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/customner/view-customner/view-customner.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/core/customner/view-customner/view-customner.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-knowledge-base {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/core/customner/view-customner/view-customner.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/customner/view-customner/view-customner.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewCustomnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomnerComponent", function() { return ViewCustomnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_app_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ngxs/app.action */ "./src/app/ngxs/app.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _buildbot_build_code_based_bot_architecture_knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base.component */ "./src/app/core/buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base.component.ts");
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









var ViewCustomnerComponent = /** @class */ (function () {
    function ViewCustomnerComponent(store, serverService, activatedRoute, router, utilityService, constantsService) {
        this.store = store;
        this.serverService = serverService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utilityService = utilityService;
        this.constantsService = constantsService;
        this.recordsPerPage = 15;
        this.settings = {
            columns: {
                key: {
                    title: 'Concept Key'
                },
                ner_type: {
                    title: 'Type'
                },
            },
            pager: {
                display: false
            },
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            rowClassFunction: function (row) {
                if (row.data.highlight) {
                    return 'hightlight-created-row';
                    //   return 'score negative'; // Color from row with negative in score
                    // } else if (row.data.type === '(+)') {
                    //   return 'score positive';
                }
                return '';
            }
        };
        this.totalRecords = 10;
        this.currentPageNumber = 1;
    }
    ViewCustomnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentPageNumber = Number(this.activatedRoute.snapshot.queryParamMap.get('page') || '1');
        this.app$.subscribe(function (value) {
            _this.custumNerDataForSmartTable = value.enterpriseNerData;
        });
        this.recordsPerPage = this.utilityService.getSmartTableRowCountPerPageByViewportHeight();
        this.fetchNers(this.recordsPerPage, this.currentPageNumber - 1);
    };
    ViewCustomnerComponent.prototype.pageChanged$ = function (currentPageNumber) {
        this.router.navigate(['.'], { queryParams: { page: currentPageNumber }, relativeTo: this.activatedRoute });
        this.currentPageNumber = currentPageNumber;
        this.fetchNers(this.recordsPerPage, currentPageNumber - 1);
    };
    ViewCustomnerComponent.prototype.fetchNers = function (limit, offset) {
        var _this = this;
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        var getEnterpriseNerUrl = this.constantsService.getEnterpriseNer(limit, (offset * this.recordsPerPage));
        this.serverService.makeGetReq({ url: getEnterpriseNerUrl })
            .subscribe(function (value) {
            _this.totalRecords = value.meta.total_count;
            _this.custumNerDataForSmartTable = value.objects;
            _this.store.dispatch([
                new _ngxs_app_action__WEBPACK_IMPORTED_MODULE_5__["SetEnterpriseNerData"]({ enterpriseNerData: _this.custumNerDataForSmartTable })
            ]);
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
                if (values.objects.length > 0) {
                    _this.custumNerDataForSmartTable.push(values.objects[0]);
                    _this.custumNerDataForSmartTable = _this.custumNerDataForSmartTable.slice();
                }
            });
        });
    };
    ViewCustomnerComponent.prototype.updateOrSaveCustomNer = function (selectedOrNewRowData) {
        var _this = this;
        this.serverService.updateOrSaveCustomNer(selectedOrNewRowData)
            .subscribe(function (value) {
            // (<any>this.custumNerDataForSmartTable).push({...value,highlight:true});
            var indexToUpdate;
            if (value && value.id)
                indexToUpdate = _this.custumNerDataForSmartTable.findIndex(function (custumNerDataForSmartTableItem) { return custumNerDataForSmartTableItem.id === value.id; });
            if (indexToUpdate >= 0)
                _this.custumNerDataForSmartTable[indexToUpdate] = __assign({}, _this.custumNerDataForSmartTable[indexToUpdate], value, { highlight: true });
            else {
                _this.custumNerDataForSmartTable.push(__assign({}, value, { highlight: true }));
            }
            _this.addQueryParamsInCurrentRoute({ ner_id: value.id });
            _this.utilityService.showSuccessToaster('Saved customner');
        });
    };
    ViewCustomnerComponent.prototype.addQueryParamsInCurrentRoute = function (queryParamObj) {
        this.router.navigate(['.'], {
            queryParams: queryParamObj,
            relativeTo: this.activatedRoute,
        });
    };
    ViewCustomnerComponent.prototype.deleteNer = function (ner_id) {
        var _this = this;
        this.serverService.deleteNer(ner_id)
            .subscribe(function () {
            _this.utilityService.showSuccessToaster('Deleted customner');
            _this.router.navigate(["/core/customner"]);
            var indexToBeDeleted = _this.custumNerDataForSmartTable.findIndex(function (nerObj) { return nerObj.id == ner_id; });
            if (indexToBeDeleted !== -1)
                _this.custumNerDataForSmartTable.splice(indexToBeDeleted, 1);
            _this.knowledgeBaseComponent.showNerSmartTable();
            _this.custumNerDataForSmartTable = _this.custumNerDataForSmartTable.slice();
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ViewCustomnerComponent.prototype, "loggeduser$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ViewCustomnerComponent.prototype, "app$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_buildbot_build_code_based_bot_architecture_knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_8__["KnowledgeBaseComponent"]),
        __metadata("design:type", _buildbot_build_code_based_bot_architecture_knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_8__["KnowledgeBaseComponent"])
    ], ViewCustomnerComponent.prototype, "knowledgeBaseComponent", void 0);
    ViewCustomnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-customner',
            template: __webpack_require__(/*! ./view-customner.component.html */ "./src/app/core/customner/view-customner/view-customner.component.html"),
            styles: [__webpack_require__(/*! ./view-customner.component.scss */ "./src/app/core/customner/view-customner/view-customner.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]])
    ], ViewCustomnerComponent);
    return ViewCustomnerComponent;
}());



/***/ }),

/***/ "./src/app/core/documentation/documentation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/documentation/documentation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row pt-4\">-->\r\n  <!--<div class=\"col-4\">-->\r\n\r\n    <!--<div class=\"card p-3 shadow-theme\">-->\r\n      <!--<div class=\"card-header\">-->\r\n        <!--<h4>User Guide</h4>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"d-flex justify-content-center\"><img class=\"card-img-top\"-->\r\n                                                      <!--src=\"https://imibot.ai/assets/img/userguide-200x200.png\"-->\r\n                                                      <!--alt=\"Card image cap\"></div>-->\r\n      <!--<div class=\"card-body d-flex justify-content-center flex-wrap\">-->\r\n        <!--<h5 class=\"card-title\">User Guide</h5>-->\r\n        <!--<p class=\"card-text  text-center\">An all-in-one Guide to understand basic Bot building</p>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"card-footer  d-flex justify-content-center\">-->\r\n        <!--<button class=\"btn btn-theme-success\"><i class=\"fa fa-download\"></i>Download</button>-->\r\n\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n\r\n  <!--</div>-->\r\n  <!--<div class=\"col-4\">-->\r\n\r\n    <!--<div class=\"card p-3 shadow-theme\">-->\r\n      <!--<div class=\"\">-->\r\n        <!--<h4>User Guide</h4>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"d-flex justify-content-center\"><img class=\"card-img-top\"-->\r\n                                                      <!--src=\"https://dev.imibot.ai/assets/img/apilinks-200x200.png\"-->\r\n                                                      <!--alt=\"Card image cap\"></div>-->\r\n      <!--<div class=\"d-flex justify-content-center flex-wrap\">-->\r\n        <!--<h5 class=\"\">SWAGGER API</h5>-->\r\n        <!--<p class=\"text-center\">Documentation for all accessible APIs on the IMIBot Framework</p>-->\r\n      <!--</div>-->\r\n      <!--<div class=\" d-flex justify-content-between\">-->\r\n        <!--<button class=\"btn btn-theme-success\"><i class=\"fa fa-link\"></i>App Server</button>-->\r\n        <!--<button class=\"btn btn-theme-success\"><i class=\"fa fa-link\"></i>Intelligence</button>-->\r\n\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n\r\n  <!--</div>-->\r\n  <!--<div class=\"grid-card\">-->\r\n\r\n    <!--<div class=\" p-3 shadow-theme\">-->\r\n      <!--<div class=\"\">-->\r\n        <!--<h4>User Guide</h4>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"d-flex justify-content-center\"><img class=\"\"-->\r\n                                                      <!--src=\"https://dev.imibot.ai/assets/img/tutorials-200x200.png\"-->\r\n                                                      <!--alt=\"Card image cap\"></div>-->\r\n      <!--<div class=\"d-flex justify-content-center flex-wrap\">-->\r\n        <!--<h5 class=\"\">User Guide</h5>-->\r\n        <!--<p class=\"text-center\">An all-in-one Guide to understand basic Bot building</p>-->\r\n      <!--</div>-->\r\n      <!--<div class=\" d-flex justify-content-center\">-->\r\n        <!--<button class=\"btn btn-theme-success\"><i class=\"fa fa-link\"></i>Url</button>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n\r\n  <!--</div>-->\r\n\r\n\r\n<!--</div>-->\r\n\r\n\r\n<div class=\"grid-documentation\">\r\n  <!--1st card starts-->\r\n  <div class=\"grid-card shadow-theme \">\r\n    <div class=\"header\">\r\n      <h4>USER GUIDE</h4>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <img src=\"https://imibot.ai/assets/img/userguide-200x200.png\"\r\n           alt=\"Card image cap\"></div>\r\n    <div class=\"d-flex justify-content-center flex-wrap align-content-center\">\r\n      <h5 class=\"\">User Guide</h5>\r\n      <p class=\"text-center\">An all-in-one Guide to understand basic Bot building</p>\r\n    </div>\r\n    <div class=\" d-flex justify-content-center\">\r\n      <button class=\"btn btn-theme-success\"><i class=\"fa fa-download\"></i>Download</button>\r\n\r\n    </div>\r\n  </div>\r\n  <!--1st card ends-->\r\n  <!--2nd card starts-->\r\n\r\n  <div class=\"grid-card shadow-theme \">\r\n    <div class=\"header\">\r\n      <h4>API DOCUMENTATION</h4>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <img src=\"https://dev.imibot.ai/assets/img/apilinks-200x200.png\"\r\n           alt=\"Card image cap\"></div>\r\n    <div class=\"d-flex justify-content-center flex-wrap align-content-center\">\r\n      <h5 class=\"\">SWAGGER API</h5>\r\n      <p class=\"text-center\">Documentation for all accessible APIs on the IMIBot Framework</p>\r\n    </div>\r\n    <div class=\" d-flex justify-content-around\">\r\n      <button class=\"btn btn-theme-success\"><i class=\"fa fa-link\"></i>App Server</button>\r\n      <button class=\"btn btn-theme-success\"><i class=\"fa fa-link\"></i>Intelligence</button>\r\n    </div>\r\n  </div>\r\n  <!--2nd card ends-->\r\n\r\n  <!--3rd card starts-->\r\n  <div class=\"grid-card shadow-theme \">\r\n    <div class=\"header\">\r\n      <h4>BOT TUTORIALS</h4>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\"><img\r\n      src=\"https://dev.imibot.ai/assets/img/tutorials-200x200.png\"\r\n      alt=\"Card image cap\"></div>\r\n    <div class=\"d-flex justify-content-center flex-wrap align-content-center\">\r\n      <h5 class=\"\">Tutorials</h5>\r\n      <p class=\"text-center\">Documents and Guides to get you started with building BOTs!</p>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <button class=\"btn btn-theme-success\"><i class=\"fa fa-link\"></i>Url</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!--3rd card ends-->\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/documentation/documentation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/documentation/documentation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-documentation {\n  margin-top: 20px;\n  display: -ms-grid;\n  display: grid;\n  height: 80vh;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr;\n  grid-column-gap: 20px; }\n  .grid-documentation .grid-card {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-rows: 1.5fr 4fr 2fr 1fr;\n        grid-template-rows: 1.5fr 4fr 2fr 1fr;\n    background-color: white; }\n  .grid-documentation .grid-card .header {\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n  .fa {\n  padding-right: 10px; }\n"

/***/ }),

/***/ "./src/app/core/documentation/documentation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/documentation/documentation.component.ts ***!
  \***************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
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

var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/core/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/core/documentation/documentation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/core/enterpriseprofile/enterpriseprofile.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/enterpriseprofile/enterpriseprofile.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"row mt-3 pb-3 bg-white profile-row shadow-theme\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n\r\n      <div\r\n        class=\"card-header pt-4 mb-4 pb-0 bg-white d-flex justify-content-between justify-content-center align-items-center\">\r\n        <h4>Enterprise Profile</h4>\r\n        <div>\r\n          <button class=\"btn-theme-primary\" (click)=\"updateEnterpriseProfile()\">Update</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</header>\r\n<div *ngIf=\"(loggeduserenterpriseinfoMap$|async) as loggeduserenterpriseinfo\">\r\n\r\n  <section class=\"row basic-row bg-white\">\r\n    <div class=\"col-3 logo-wrapper-col p-5\">\r\n      <div class=\"logo-wrapper\">\r\n        <img [src]=\"loggeduserenterpriseinfo.logo\" alt=\"\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <h4 class=\"form-title\">Basic</h4>\r\n      <form  class=\"basic-info-form\" #form=\"ngForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Company Name</label>\r\n              <input type=\"text\" class=\"form-control\" [ngModel]=\"loggeduserenterpriseinfo.name\" name=\"name\" required>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"alterEgo\">Industry</label>\r\n              <input type=\"text\" class=\"form-control\" [ngModel]=\"loggeduserenterpriseinfo.industry\" name=\"industry\">\r\n            </div>\r\n            <!---->\r\n            <div class=\"form-group\">\r\n              <label for=\"alterEgo\">Logo Url</label>\r\n              <input type=\"text\" class=\"form-control\" [ngModel]=\"loggeduserenterpriseinfo.logo\" name=\"logo\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"alterEgo\">Email</label>\r\n              <input type=\"text\" class=\"form-control\" [ngModel]=\"loggeduserenterpriseinfo.email\" name=\"email\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"alterEgo\">Website Url</label>\r\n              <input type=\"text\" class=\"form-control\" [ngModel]=\"loggeduserenterpriseinfo.websiteUrl\" name=\"websiteUrl\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h4 class=\"form-title\">Advanced</h4>\r\n        <div class=\"row\">\r\n          <div class=\"col-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Enterprise Unique Name</label>\r\n              <input type=\"text\" class=\"form-control\" required [ngModel]=\"loggeduserenterpriseinfo.enterprise_unique_name\" name=\"enterpriseUniqueName\" readonly>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"alterEgo\">Tier Group</label>\r\n              <input type=\"number\" class=\"form-control\" [ngModel]=\"loggeduserenterpriseinfo.tier_group\" disabled name=\"tier_group\" >\r\n            </div>\r\n          </div>\r\n          <div class=\"col-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"alterEgo\">Log Retention Period</label>\r\n              <input type=\"text\" class=\"form-control\" [ngModel]=\"loggeduserenterpriseinfo.log_retention_period\" name=\"log_retention_period\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n  <!---->\r\n\r\n  <header class=\"row mt-3 bg-white profile-row\" *ngIf=\"role==='Admin'\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div\r\n          class=\"card-header pt-4 mb-4 pb-0 bg-white d-flex justify-content-between justify-content-center align-items-center\">\r\n          <h4>Enterprise Users</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <div class=\"row pb-3 bg-white profile-row\" *ngIf=\"role==='Admin'\">\r\n    <div class=\"col-12\">\r\n      <app-smart-table [data]=\"loggeduserenterpriseinfo.enterpriseusers|serializeEnterpriseprofileData\"\r\n                       [settings]=\"smartTableSettings_Enterpise_profiles\">\r\n      </app-smart-table>\r\n    </div>\r\n\r\n  </div>\r\n  <!--<section class=\"row enterprise-profile-info-row bg-white\" *ngIf=\"role==='Admin'\">-->\r\n    <!--<div class=\"col-12\">-->\r\n      <!--<table class=\"table\">-->\r\n        <!--<thead class=\"\">-->\r\n        <!--<tr>-->\r\n          <!--<th scope=\"col\">#</th>-->\r\n          <!--<th scope=\"col\">Name</th>-->\r\n          <!--<th scope=\"col\">Email</th>-->\r\n          <!--<th scope=\"col\">Created At</th>-->\r\n          <!--<th scope=\"col\">Updated At</th>-->\r\n          <!--<th scope=\"col\">Permissions</th>-->\r\n        <!--</tr>-->\r\n        <!--</thead>-->\r\n        <!--<tbody>-->\r\n        <!--<tr *ngFor=\"let enterpriseuser of loggeduserenterpriseinfo.enterpriseusers\">-->\r\n          <!--<td>1</td>-->\r\n          <!--<td>{{enterpriseuser.first_name}}</td>-->\r\n          <!--<td>{{enterpriseuser.email}}</td>-->\r\n          <!--<td>{{enterpriseuser.created_at|date}}</td>-->\r\n          <!--<td>{{enterpriseuser.updated_at|date}}</td>-->\r\n          <!--<td> empty</td>-->\r\n        <!--</tr>-->\r\n        <!--</tbody>-->\r\n      <!--</table>-->\r\n    <!--</div>-->\r\n  <!--</section>-->\r\n\r\n</div>\r\n\r\n\r\n<!--<app-smart-table [data]=\"loggeduserenterpriseinfo.enterpriseusers\"-->\r\n                 <!--[settings]=\"smartTableSettings_Enterpise_profiles\">-->\r\n<!--</app-smart-table>-->\r\n"

/***/ }),

/***/ "./src/app/core/enterpriseprofile/enterpriseprofile.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/core/enterpriseprofile/enterpriseprofile.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic-row .logo-wrapper {\n  height: 200px;\n  width: 200px;\n  border-radius: 100px;\n  border: 1px dotted #e0e0e0;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .basic-row .logo-wrapper img {\n    width: 90%; }\n  .basic-info-form label {\n  font-size: 11px;\n  line-height: 16px;\n  font-weight: 400;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n  .basic-info-form input {\n  padding: 2px;\n  margin-top: 0;\n  margin-left: 1px;\n  border: none;\n  border-color: inherit;\n  box-shadow: none;\n  outline: none;\n  border-bottom: 1px solid #e0e0e0;\n  border-radius: 0; }\n  form input {\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 400;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif; }\n  ::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n  font-size: 11px;\n  line-height: 16px;\n  font-weight: 400;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif;\n  padding: 0; }\n  :-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n  font-size: 11px;\n  line-height: 16px;\n  font-weight: 400;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif;\n  padding: 0; }\n  ::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n  font-size: 11px;\n  line-height: 16px;\n  font-weight: 400;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif;\n  padding: 0; }\n  ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n  font-size: 11px;\n  line-height: 16px;\n  font-weight: 400;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif;\n  padding: 0; }\n  .form-title {\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: 700;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n  .form-group {\n  padding-bottom: 5px; }\n  th, td {\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 400;\n  color: #666;\n  font-family: \"Helvetica\", sans-serif; }\n"

/***/ }),

/***/ "./src/app/core/enterpriseprofile/enterpriseprofile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/enterpriseprofile/enterpriseprofile.component.ts ***!
  \***********************************************************************/
/*! exports provided: EnterpriseprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseprofileComponent", function() { return EnterpriseprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngxs/enterpriseprofile.action */ "./src/app/core/enterpriseprofile/ngxs/enterpriseprofile.action.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility.service */ "./src/app/utility.service.ts");
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







var EnterpriseprofileComponent = /** @class */ (function () {
    function EnterpriseprofileComponent(store, constantsService, utilityService, serverService) {
        this.store = store;
        this.constantsService = constantsService;
        this.utilityService = utilityService;
        this.serverService = serverService;
        this.smartTableSettings_Enterpise_profiles = this.constantsService.SMART_TABLE_ENTERPISE_USERS_SETTING;
    }
    EnterpriseprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggeduser$.subscribe(function (_a) {
            var user = _a.user;
            _this.userid = user.id;
            _this.role = user.role.name;
            _this.enterpriseId = user.enterprise_id; //enterprise_id
            var enterpriseProfileUrl = _this.constantsService.getEnterpriseUrl(_this.enterpriseId);
            _this.serverService.makeGetReq({ url: enterpriseProfileUrl })
                .subscribe(function (value) {
                _this.store.dispatch([
                    new _ngxs_enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_5__["SetEnterpriseInfoAction"]({ enterpriseInfo: value })
                ]);
            });
            if (_this.role === 'Admin') {
                var enterpriseUsersUrl = _this.constantsService.getEnterpriseUsersUrl();
                _this.serverService.makeGetReq({ url: enterpriseUsersUrl })
                    .subscribe(function (value) {
                    _this.store.dispatch([
                        new _ngxs_enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_5__["SetEnterpriseUsersAction"]({ enterpriseUsers: value.objects })
                    ]);
                });
            }
        });
        this.loggeduserenterpriseinfoMap$ =
            this.loggeduserenterpriseinfo$
                .map(function (value) {
                return __assign({}, value, { enterpriseusers: value.enterpriseusers.map(function (enterpriseuser) {
                        return __assign({}, enterpriseuser, { created_at: new Date(enterpriseuser.created_at).toLocaleDateString(), updated_at: new Date(enterpriseuser.updated_at).toLocaleDateString() });
                    }) });
            });
        // .subscribe((value) => {
        // this.loggeduserenterpriseinfo = value;
        // ;
        // });
        // let headerData: IHeaderData = {'content-type': 'application/json'};
        // let enterpriseUsersUrl = this.constantsService.getEnterpriseUsersUrl();
        // this.serverService.makeGetReq<{users:IEnterpriseUser[]}>({url: enterpriseUsersUrl, headerData})
        //   .subscribe((enterpriseUsers) => {
        //     this.store.dispatch([
        //       new SetEnterpriseUsersAction({enterpriseUsers: enterpriseUsers.users})
        //     ]);
        //   });
    };
    EnterpriseprofileComponent.prototype.updateEnterpriseProfile = function () {
        var _this = this;
        var formData = this.f.value;
        var body = __assign({}, this.loggeduserenterpriseinfo, formData);
        var url = this.constantsService.getEnterpriseUrl(this.enterpriseId);
        var headerData = { 'content-type': 'application/json' };
        this.serverService.makePutReq({ url: url, body: body, headerData: headerData })
            .subscribe(function () {
            _this.utilityService.showSuccessToaster('Updated enterprise profile');
            _this.store.dispatch([
                new _ngxs_enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_5__["SetEnterpriseInfoAction"]({ enterpriseInfo: body }),
            ]);
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], EnterpriseprofileComponent.prototype, "loggeduser$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], EnterpriseprofileComponent.prototype, "loggeduserenterpriseinfo$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", HTMLFormElement)
    ], EnterpriseprofileComponent.prototype, "f", void 0);
    EnterpriseprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enterpriseprofile',
            template: __webpack_require__(/*! ./enterpriseprofile.component.html */ "./src/app/core/enterpriseprofile/enterpriseprofile.component.html"),
            styles: [__webpack_require__(/*! ./enterpriseprofile.component.scss */ "./src/app/core/enterpriseprofile/enterpriseprofile.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"],
            _server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]])
    ], EnterpriseprofileComponent);
    return EnterpriseprofileComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header-container shadow-theme\">\r\n\r\n  <div class=\"box box-logo\" style=\"position: absolute; top: 0; bottom: 0; z-index: 40;\">\r\n    <a routerLink=\"/\" style=\"padding-top: 9px;\"><img class=\"box-logo__image\" src=\"https://imibot.ai/assets/img/IMI_logo.png\" alt=\"\"></a>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-8 header-container__left  bg-white d-flex align-items-end\" >\r\n      <!--TODO: THIS IMAGE IS INVISIBLE; REMOVE IT ALTOGETHER-->\r\n      <div class=\"box box-logo invisible\">\r\n        <a routerLink=\"/\"><img class=\"box-logo__image\" src=\"https://imibot.ai/assets/img/IMI_logo.png\" alt=\"\"></a>\r\n      </div>\r\n\r\n      <!--<div class=\"box box-search\">-->\r\n      <!--<input class=\"box-search__input\" type=\"search\" placeholder=\"Search...\">-->\r\n      <!--</div>-->\r\n\r\n      <div class=\"box box-tools d-flex align-items-center\">\r\n\r\n        <!--<div class=\"btn-group p-2\" dropdown>-->\r\n        <!--<i dropdownToggle class=\"fa fa-plus\"></i>-->\r\n        <!--<ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">-->\r\n        <!--<li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['buildbot','codebased']\">Code Based Bot</a></li>-->\r\n        <!--<li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['buildbot','intelligent']\">Pipeline Based Bot</a>-->\r\n        <!--</li>-->\r\n        <!--</ul>-->\r\n        <!--</div>-->\r\n        <a class=\"header-nav\" [routerLink]=\"'/core/viewbots/'+myEBotType.chatbot\"><i class=\"fa fa-home\"></i>Bot Dashboard</a>\r\n        <a class=\"header-nav\" routerLink=\"customner\" *myIf=\"myETabNames.enterprise_profile\"><i class=\"fa fa-graduation-cap\"></i>Knowledge Base</a>\r\n        <!--<a class=\"header-nav\" routerLink=\"documentation\"><i class=\"fa fa-file\"></i>Documentation</a>-->\r\n\r\n        <!--<div class=\"btn-group\" dropdown>-->\r\n        <a class=\"header-nav\" routerLink=\"analytics2\" *myIf=\"myETabNames.analytics2\"><i dropdownToggle class=\"fa fa-bar-chart\"></i>Analytics</a>\r\n        <!--<i dropdownToggle class=\"fa fa-bar-chart\"></i>-->\r\n        <!--<ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">-->\r\n        <!--<li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['analytics','overview']\">Overview</a></li>-->\r\n        <!--<li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['analytics','users']\">Users</a></li>-->\r\n        <!--<li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['analytics','sessions']\">Sessions</a></li>-->\r\n        <!--<li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['analytics','messages']\">Messages</a></li>-->\r\n        <!--<li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['analytics','platforms']\">Platform</a></li>-->\r\n        <!--<li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['analytics','events']\">Events</a></li>-->\r\n        <!--<li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['analytics','engagement']\">Engagement</a></li>-->\r\n        <!--<li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['analytics','usage']\">Usage</a></li>-->\r\n        <!--</ul>-->\r\n        <!--</div>-->\r\n        <a *myIf=\"myETabNames.report\" class=\"header-nav\" routerLink=\"reports\"><i class=\"fa fa-list\"></i>Reports</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 d-flex align-items-center\" >\r\n      <div class=\"d-flex header-container__right align-items-center ml-auto \">\r\n        <div class=\"box box-details-personal d-flex flex-column\">\r\n          <span class=\"box-details-personal__name  pr-0\">{{(loggeduser$|async).user.first_name +\" \"+ (loggeduser$|async).user.last_name}}</span>\r\n          <span class=\"box-details-personal__designation text-theme-muted pt-1 text-right\">{{(loggeduser$|async).user.role.name}}</span>\r\n        </div>\r\n\r\n        <div class=\"box d-flex \">\r\n    <span class=\"box-details__logo\">\r\n      <img class=\"img-fluid rounded-circle\" style=\"width: 32px\"\r\n           [src]=\"logoSrc\" alt=\"\">\r\n    </span>\r\n          <div class=\"btn-group\" dropdown>\r\n            <span dropdownToggle class=\"box-details__dropdown d-flex align-items-center\"><i class=\"fa fa-chevron-down\"></i></span>\r\n            <ul *dropdownMenu  class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n              <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['profile']\">Profile</a></li>\r\n              <li role=\"menuitem\"><a class=\"dropdown-item cursor-pointer\" (click)=\"logout()\">Signout</a></li>\r\n              <li class=\"divider dropdown-divider\" *myIf=\"myETabNames.enterprise_profile\"></li>\r\n              <li role=\"menuitem\"><a class=\"dropdown-item\" *myIf=\"myETabNames.enterprise_profile\" [routerLink]=\"['enterpriseprofile']\">Enterprise Profile</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  height: 56px;\n  background-color: white;\n  position: fixed;\n  z-index: 115;\n  left: 0;\n  right: 0; }\n  .header-container .header-container__left {\n    padding-bottom: 15px;\n    padding-top: 9px;\n    padding-right: 28px; }\n  .header-container .header-nav {\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    text-decoration: none; }\n  .header-container .header-nav .fa {\n      font-size: 15px;\n      color: inherit !important; }\n  .header-container .header-nav:hover {\n      color: #00abd3 !important; }\n  .header-container .box-logo {\n    width: 180px;\n    border-right: solid 1px #e0e0e0;\n    display: flex;\n    justify-content: center; }\n  .header-container .box-logo .box-logo__image {\n      height: 32px !important; }\n  .header-container .box-search {\n    width: 40%; }\n  .header-container .box-search .box-search__input {\n      border: none;\n      width: 100%; }\n  .header-container .box-search .box-search__input:focus {\n      border: none;\n      border-color: inherit;\n      box-shadow: none;\n      outline: none; }\n  .header-container .box-details-personal {\n    font-size: 16px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif;\n    border-right: 1px solid #e0e0e0; }\n  .header-container .box-details-personal .box-details-personal__designation {\n      color: #9e9e9e; }\n  .header-container .box-details__logo, .header-container .box-details__orgname {\n    padding-right: 10px; }\n  .fa {\n  font-size: 14px;\n  margin-right: 8px;\n  color: #474747;\n  cursor: pointer; }\n  ::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(158, 158, 158, 0.41);\n  opacity: 1;\n  /* Firefox */ }\n  :-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(158, 158, 158, 0.41);\n  opacity: 1;\n  /* Firefox */ }\n  ::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(158, 158, 158, 0.41);\n  opacity: 1;\n  /* Firefox */ }\n  ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(158, 158, 158, 0.41);\n  opacity: 1;\n  /* Firefox */ }\n  .header-nav {\n  margin-right: 22px;\n  color: #474747 !important; }\n  .header-nav .fa {\n    color: #9e9e9e !important; }\n  .btn-group > ul > li :hover {\n  color: #00abd3 !important; }\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_app_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ngxs/app.action */ "./src/app/ngxs/app.action.ts");
/* harmony import */ var _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chat/ngxs/chat.action */ "./src/app/chat/ngxs/chat.action.ts");
/* harmony import */ var _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-bots/ngxs/view-bot.action */ "./src/app/core/view-bots/ngxs/view-bot.action.ts");
/* harmony import */ var _auth_ngxs_auth_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/ngxs/auth.action */ "./src/app/auth/ngxs/auth.action.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _enterpriseprofile_ngxs_enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enterpriseprofile/ngxs/enterpriseprofile.action */ "./src/app/core/enterpriseprofile/ngxs/enterpriseprofile.action.ts");
/* harmony import */ var _buildbot_ngxs_buildbot_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../buildbot/ngxs/buildbot.action */ "./src/app/core/buildbot/ngxs/buildbot.action.ts");
/* harmony import */ var _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../view-bots/view-bots.component */ "./src/app/core/view-bots/view-bots.component.ts");
/* harmony import */ var _analysis2_ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../analysis2/ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utility.service */ "./src/app/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store, serverService, activatedRoute, constantsService, utilityService, router) {
        this.store = store;
        this.serverService = serverService;
        this.activatedRoute = activatedRoute;
        this.constantsService = constantsService;
        this.utilityService = utilityService;
        this.router = router;
        this.logoSrc = 'https://hm.imimg.com/imhome_gifs/indiamart-og1.jpg';
        this.myEBotType = _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_12__["EBotType"];
        this.myETabNames = _constants_service__WEBPACK_IMPORTED_MODULE_8__["ETabNames"];
        this.myEAPermissionsDynamic = _constants_service__WEBPACK_IMPORTED_MODULE_8__["EAPermissionsDynamic"];
        this.isFullScreen = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*this.app$Subscription = */ this.app$.subscribe(function (app) {
            /*every time this callback runs remove all previous setTimeOuts*/
            var autoLogOutTime = app.autoLogoutTime;
            if (autoLogOutTime) {
                /*If autoLogOutTime hasn't changed, return
                * else clear previous timeouts, and create a new one
                * */
                if (_this.autoLogOutTime === autoLogOutTime)
                    return;
                _this.autoLogOutTime = autoLogOutTime;
                _this.logoutSetTimeoutRef && clearTimeout(_this.logoutSetTimeoutRef);
                /*creating a new Timeout*/
                _this.logoutSetTimeoutRef = setTimeout(function () {
                    _this.logoutSetTimeoutRef && clearTimeout(_this.logoutSetTimeoutRef);
                    try {
                        _this.app$Subscription && _this.app$Subscription.unsubscribe();
                    }
                    catch (e) {
                        console.log(e); /*TODO: find out whats wrong with app$Subscription*/
                    }
                    console.log('============================autologout============================');
                    _this.logout();
                    document.location.reload(); /*To destroy all timeouts just in case*/
                }, (autoLogOutTime - Date.now()));
            }
        });
        this.loggeduser$.subscribe(function (value) {
        });
        this.loggeduserenterpriseinfo$.subscribe(function (enterpriseProfileInfo) {
            ;
            _this.logoSrc = enterpriseProfileInfo.logo || _this.logoSrc;
        });
        // this.activatedRoute.queryParams.subscribe((queryParams)=>{
        //   ;
        //   this.isFullScreen = queryParams['isArchitectureFullScreen']==='true'
        // })
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        // this.store.reset({});
        this.url = this.constantsService.getLogoutUrl();
        this.serverService.makeGetReq({ url: this.url })
            .subscribe(function (v) {
            _this.utilityService.showSuccessToaster('Logged Out');
        });
        this.store.dispatch([
            new _view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_6__["ResetBotListAction"](),
            new _auth_ngxs_auth_action__WEBPACK_IMPORTED_MODULE_7__["ResetAuthToDefaultState"](),
            new _enterpriseprofile_ngxs_enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_10__["ResetEnterpriseUsersAction"](),
            new _buildbot_ngxs_buildbot_action__WEBPACK_IMPORTED_MODULE_11__["ResetBuildBotToDefault"](),
            new _analysis2_ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_13__["ResetAnalytics2GraphData"](),
            new _analysis2_ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_13__["ResetAnalytics2HeaderData"](),
            new _ngxs_app_action__WEBPACK_IMPORTED_MODULE_4__["ResetAppState"]()
        ]).subscribe(function () {
            _this.store.dispatch([new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_5__["ResetChatState"]()]);
        });
        this.serverService.removeTokens();
        this.router.navigate(['auth', 'login']);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], HeaderComponent.prototype, "loggeduser$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], HeaderComponent.prototype, "loggeduserenterpriseinfo$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], HeaderComponent.prototype, "app$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"])
    ], HeaderComponent.prototype, "app$Subscription", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _server_service__WEBPACK_IMPORTED_MODULE_9__["ServerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _constants_service__WEBPACK_IMPORTED_MODULE_8__["ConstantsService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_14__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(loggeduser$|async) as loggedUser\" class=\"row my-3 pb-3 bg-white profile-row\">\r\n  <div class=\"profile-header col-12 p-0 pb-2 d-flex justify-content-between align-items-center\">\r\n    <h4 class=\" m-0 profile-heading-text\">Profile Information</h4>\r\n    <button class=\"btn btn-theme-primary ml-auto mr-1\" (click)=\"openChangePasswordModal(Primarytemplate)\">Change\r\n      Password\r\n    </button>\r\n    <button class=\"btn-theme-primary\" *myIf=\"myETabNames.update_profile\" (click)=\"updateProfile()\">Update</button>\r\n  </div>\r\n\r\n  <form class=\"row\" #form=\"ngForm\">\r\n    <div class=\"col-12\">\r\n      <h5 class=\"px-4\">Basic</h5>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <label for=\"\" class=\"pl-5 ml-5\">First Name:</label>\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <input class=\"edit-input value\" type=\"text\" [ngModel]=\"loggedUser.user.first_name\" required name=\"first_name\">\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <label for=\"\" class=\"pl-5 ml-5\">Last Name:</label>\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <input class=\"edit-input value\" type=\"text\" [ngModel]=\"loggedUser.user.last_name\" required name=\"last_name\">\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <label for=\"\" class=\"pl-5 ml-5\">Email:</label>\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <span class=\"value non-editable\">{{loggedUser.user.email}}</span>\r\n    </div>\r\n  </form>\r\n  <!---->\r\n  <section class=\"row my-2\">\r\n    <div class=\"col-12\">\r\n      <h5 class=\"px-4\">Advanced</h5>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <label for=\"\" class=\"pl-5 ml-5 pr-4\">Role:</label>\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <span class=\"value non-editable \">{{loggedUser.user.role.name}}</span>\r\n    </div>\r\n    <div class=\"col-3 d-flex \" style=\"overflow-x: hidden\">\r\n      <label for=\"\" class=\"pl-5 ml-5 pr-4 pt-1\">Action Permission:</label>\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <div>\r\n        <span\r\n          class=\"text-info\"><strong>{{loggedUser?.user?.role?.permissions?.actions?.length===0?'All':loggedUser?.user?.role?.permissions?.actions?.length}}</strong> Action permissions</span>\r\n        <div class=\"permissions-box p-2 \">\r\n        <span class=\"badge badge-secondary mr-1 mb-2\"\r\n              *ngFor=\"let perm of (loggedUser.user.role.permissions.actions|profilePermissionIdToName|async)\">{{perm}}\r\n      </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n</div>\r\n\r\n<ng-template #Primarytemplate>\r\n  <div class=\"primary-modal\">\r\n    <div class=\"top-dec\"></div>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title mb-2\"> Change Password</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <form *ngIf=\"showPasswordChangeForm\" class=\"row\" #password_form=\"ngForm\">\r\n\r\n        <div class=\"col-md-12\">\r\n          <label for=\"\">Old Password</label>\r\n          <input type=\"password\" [(ngModel)]=\"old_password\" name=\"old_password\">\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <hr>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <label for=\"\">New Password</label>\r\n          <input type=\"password\" [(ngModel)]=\"new_password\" name=\"new_password\">\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <label for=\"\">Confirm Password</label>\r\n          <input type=\"password\" [(ngModel)]=\"new_password_confirm\" name=\"new_password_confirm\">\r\n        </div>\r\n        <div class=\"col-md-12 p-0 m-0\" style=\"height: 25px\">\r\n          <p class=\"text-danger text-secondary m-0\">{{passwordErrorStr?passwordErrorStr:''}}</p>\r\n        </div>\r\n        <div class=\"col-md-12 d-flex flex-row-reverse justify-content-center\"><!--todo: hack-->\r\n          <button type=\"submit\" class=\"btn btn-theme-primary\" (click)=\"changePassword()\">Modify</button>\r\n          <button class=\"btn btn-theme-primary-outline mr-1\" (click)=\"modalRef.hide()\">Cancel</button>\r\n          <!--<button class=\"btn btn-theme-primary\" (click)=\"changePassword()\">Submit</button>-->\r\n        </div>\r\n\r\n      </form>\r\n      <div class=\"row\" *ngIf=\"!showPasswordChangeForm\">\r\n        <div class=\"col-md-12\">\r\n          <i class=\"fa fa-check-circle\"></i>\r\n        </div>\r\n        <!--<div class=\"col-md-12 light-text\"></div>-->\r\n        <div class=\"col-md-12\"><strong>Password Changed Successfully</strong></div>\r\n        <!--<div class=\"col-md-12\">9:00 AM</div>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/core/profile/profile.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/profile/profile.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-row {\n  padding: 20px 32px; }\n  .profile-row label {\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 700;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif;\n    width: 220px; }\n  .profile-row .profile-header {\n    border-bottom: 1px solid #e0e0e0;\n    margin-bottom: 40px; }\n  .profile-row .non-editable {\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 400;\n    color: #949494;\n    font-family: \"Helvetica\", sans-serif; }\n  .profile-row input.value {\n    border: none;\n    border-color: inherit;\n    box-shadow: none;\n    outline: none;\n    border-bottom: 1px solid #e0e0e0; }\n  .perm-list {\n  padding: 6px;\n  margin-left: 200px;\n  background-color: #e0e0e0;\n  font-size: 14px; }\n  .perm-list .badge-secondary {\n    margin: 3px;\n    padding: 4px; }\n  .password-row .label {\n  font-size: 11px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n  .password-row input {\n  border: none;\n  border-color: inherit;\n  box-shadow: none;\n  outline: none;\n  border-bottom: 1px solid #e0e0e0; }\n  .profile-heading-text {\n  font-size: 20px;\n  line-height: 13px;\n  font-weight: 700;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n  .primary-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n  .primary-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #00abd3; }\n  .primary-modal .modal-header {\n    color: #474747; }\n  .primary-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n  .primary-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n  .primary-modal .modal-body .fa {\n  font-size: 48px;\n  color: #00abd3;\n  padding: 10px 0px; }\n  .danger-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n  .danger-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #b14250; }\n  .danger-modal .modal-header {\n    color: #474747; }\n  .danger-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n  .danger-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n  .modal-body label {\n  width: 120px; }\n  .modal-body input {\n  border-radius: 2px;\n  border: solid 1px #e0e0e0;\n  height: 28px;\n  width: 150px;\n  padding: 0px 8px; }\n  .modal-body hr {\n  border-color: #e0e0e0; }\n  .permissions-box {\n  display: flex;\n  align-items: start;\n  flex-wrap: wrap;\n  background-color: #e0e0e0;\n  height: 200px;\n  width: 100%;\n  border-radius: 2px;\n  align-content: start; }\n  .profile-grid {\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-columns: 1fr 1fr 1fr 10fr;\n      grid-template-columns: 1fr 1fr 1fr 10fr;\n      grid-template-areas: 'heading1 heading1 heading1 heading1'\r '. label1 .      value1'\r '. label2 .      value2'\r '. label3 .      value3'\r 'heading2 heading2 heading2 heading2'\r '. label4 .      value4'\r '. label5 .      value5'\r '. label6 .      value6'; }\n"

/***/ }),

/***/ "./src/app/core/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _auth_ngxs_auth_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/ngxs/auth.action */ "./src/app/auth/ngxs/auth.action.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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









var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(serverService, constantsService, utilityService, modalService, store) {
        this.serverService = serverService;
        this.constantsService = constantsService;
        this.utilityService = utilityService;
        this.modalService = modalService;
        this.store = store;
        this.myETabNames = _constants_service__WEBPACK_IMPORTED_MODULE_4__["ETabNames"];
        this.showPasswordChangeForm = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggeduser$.subscribe(function (loggeduser) {
            _this.loggeduser = loggeduser.user;
        });
        // let allActionsUrl = this.constantsService.getAllActionsUrl();
        // this.serverService.makeGetReq<{ meta: any, objects: IProfilePermission[] }>({url: allActionsUrl})
        //   .subscribe(({objects}) => {
        //     this.store.dispatch([
        //       new SetMasterProfilePermissions({masterProfilePermissions: objects})
        //     ]);
        //   });
        this.modalService.onHidden.subscribe(function (reason) {
            _this.old_password = _this.new_password = _this.new_password_confirm = '';
        });
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        if (!this.f.valid) {
            this.utilityService.showErrorToaster(new Error('Please fill valid values'));
            return;
        }
        var url = this.constantsService.getUserUpdateUrl(this.loggeduser.id);
        // ;
        // let body = {...this.loggeduser, ...this.f.value};
        var body = this.f.value;
        this.serverService.makePutReq({ url: url, body: body })
            .subscribe(function (value) {
            var updatedUser = __assign({}, _this.loggeduser, value);
            _this.utilityService.showSuccessToaster('Updated profile');
            _this.store.dispatch([
                new _auth_ngxs_auth_action__WEBPACK_IMPORTED_MODULE_5__["SetUserAction"]({ user: updatedUser })
            ]);
        });
    };
    ProfileComponent.prototype.openChangePasswordModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    };
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        //TODO: make use of forms here instead
        // ;
        // if(this.passwordForm.valid){
        var changePasswordUrl = this.constantsService.updatePassword();
        //   let formData =  this.passwordForm.value;
        //   formData.new_password_confirm && delete formData.new_password_confirm;
        if (this.old_password && this.new_password && this.new_password === this.new_password_confirm) {
            var body = {
                old_password: this.old_password,
                new_password: this.new_password
            };
            this.serverService.makePostReq({ url: changePasswordUrl, body: body })
                .subscribe(function (value) {
                if (value.error) {
                    _this.flashErrorMessage(value.message);
                    return;
                }
                _this.showPasswordChangeForm = false; //show success message
                setTimeout(function () {
                    _this.showPasswordChangeForm = true; //show form again
                    _this.new_password_confirm = _this.new_password = _this.old_password = '';
                }, 3000);
            });
        }
        else if (this.new_password !== this.new_password_confirm) {
            this.flashErrorMessage('passwords dont match');
        }
        else {
            this.flashErrorMessage('form not valid');
        }
        // }
    };
    ProfileComponent.prototype.flashErrorMessage = function (message) {
        var _this = this;
        this.passwordErrorStr = message;
        setTimeout(function () {
            _this.passwordErrorStr = '';
        }, 3000);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ProfileComponent.prototype, "loggeduser$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", HTMLFormElement)
    ], ProfileComponent.prototype, "f", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('password_form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"])
    ], ProfileComponent.prototype, "passwordForm", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/core/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/core/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/core/reports/report-details/report-controls/report-controls.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/core/reports/report-details/report-controls/report-controls.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button (click)=\"click()\">click1</button>-->\r\n<form class=\"row report-detail-row\" #form=\"ngForm\">\r\n  <div class=\"col-6\">\r\n    <div class=\"select-theme-primary\">\r\n      <label for=\"\" class=\"Bot required\">Bot</label>\r\n      <select class=\"concept1\" type=\"number\" [ngModel] required name=\"bot_id\" #select>\r\n        <option *ngFor=\"let bot of codebasedBotList let i = index;\" [selected]=\"i===0\" [value]=\"bot.id\">\r\n          {{bot.name}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-6\">\r\n    <div class=\"select-theme-primary\">\r\n      <label for=\"\" class=\"required required\">Report type</label>\r\n      <select class=\"concept1\">\r\n        <option value=\"single_match\">Messages</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6 mt-3\">\r\n    <label for=\"\" class=\"required m-0 pr-3 mb-2\">Output format</label>\r\n    <div class=\"btn-group\" role=\"group\">\r\n      <label (click)=\"filetype='csv'\"\r\n             [ngClass]=\"{'btn-theme-primary': filetype==='csv', 'btn-theme-secondary-outline':filetype==='pdf'}\"\r\n             for=\"csv\" class=\"btn d-flex align-items-center \">CSV</label>\r\n      <label\r\n        disabled\r\n        [ngClass]=\"{'btn-theme-primary': filetype==='pdf', 'btn-theme-secondary-outline':filetype==='csv'}\"\r\n        for=\"pdf\" class=\"btn d-flex align-items-center\">PDF</label>\r\n      <input type=\"radio\" [ngModel]=\"filetype\" required [checked]=\"true\" id=\"csv\" name=\"filetype\" value=\"csv\" hidden>\r\n      <input disabled type=\"radio\" [ngModel]=\"filetype\" required id=\"pdf\" name=\"filetype\" value=\"pdf\" hidden>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-5 mt-3 d-flex align-items-center \">\r\n    <!--<p>{{report_id}}</p>-->\r\n    <div class=\"d-flex mt-2 align-items-center\" *ngIf=\"report_id\">\r\n      <label for=\"\" class=\"required m-0 pr-3\">Status</label>\r\n      <ui-switch class=\"m-0 pt-2\" [(ngModel)]=\"isactive\" required name=\"isactive\" style=\"border:none\"\r\n                 size=\"small\"></ui-switch>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-6 mt-4\">\r\n    <div class=\"select-theme-primary\">\r\n      <label for=\"\" class=\"required \">Frequency</label>\r\n      <select class=\"concept1\" ngModel required name=\"frequency\">\r\n        <option value=\"daily\">Daily</option>\r\n        <option value=\"weekly\">Weekly</option>\r\n        <option value=\"bi-weekly\">Bi-weekly</option>\r\n        <option value=\"monthly\">Monthly</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-5 mt-4\">\r\n    <div class=\"select-theme-primary\">\r\n      <label for=\"\" class=\"required \">Time</label>\r\n      <input type=\"text\"\r\n             placeholder=\"Timepicker\"\r\n             autocomplete=\"off\"\r\n             class=\"form-control time-input1 date-input\"\r\n             name=\"start_time\"\r\n             id=\"start_time\" required\r\n             [(ngModel)]=\"start_time\"\r\n      >\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-12 mt-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-4 form-group\">\r\n        <label for=\"\" class=\"required \" style=\"width: 100%\">Select Date</label>\r\n        <input type=\"text\"\r\n               placeholder=\"Datepicker\"\r\n               class=\"form-control date-input\"\r\n               [(ngModel)]=\"startdate\"\r\n               [minDate]=\"today\"\r\n               required\r\n               name=\"startdate\"\r\n               bsDatepicker [bsConfig]=\"datePickerConfig\">\r\n      </div>\r\n    </div>\r\n<!---->\r\n  </div>\r\n\r\n  <div class=\"row m-0 p-0\" ngModelGroup='delivery'>\r\n    <div class=\"col-12\">\r\n      <div class=\"\" style=\"width: 100%; color: #474747\">Delivery Mode</div>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <ul class=\"nav nav-tabs my-2\">\r\n        <input type=\"text\" ngModel name=\"delivery_type\" hidden>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [ngClass]=\"{'tab-active':deliveryMode==='sftp'}\"\r\n             (click)=\"navigate('sftp')\"><strong>SFTP</strong></a>\r\n        </li>\r\n        <li class=\"nav-item\" disabled>\r\n          <a class=\"nav-link\" [ngClass]=\"{'tab-active':deliveryMode==='email'}\" (click)=\"navigate('email')\"><strong>Email</strong></a>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"row m-0\" [hidden]=\"deliveryMode!=='email'\" ngModelGroup='email'>\r\n      <div class=\"col-8 text-report \">\r\n        Schedule emails for multiple recipients, separate with semi-colon(;)\r\n      </div>\r\n      <div class=\"col-4 text-right \">\r\n        <ui-switch disabled ngModel name=\"enabled\" class=\"pt-2\" style=\"border:none\" size=\"small\"></ui-switch>\r\n      </div>\r\n      <fieldset disabled class=\"col-12 \">\r\n        <div class=\"col-10 mt-2 border-left\">\r\n          <div class=\"text-report pb-2\">Recipients</div>\r\n          <textarea ngModel name=\"recipients\" class=\"p-2\" style=\"width: 100%; height: 90px\"></textarea>\r\n        </div>\r\n      </fieldset>\r\n    </div>\r\n\r\n    <div class=\"row m-0 \" [hidden]=\"deliveryMode!=='sftp'\" ngModelGroup='sftp'>\r\n      <div class=\"col-12 d-flex justify-content-between align-items-center\">\r\n        <div class=\"text-report \">Push reports to a secure location as scheduled</div>\r\n        <ui-switch [(ngModel)]=\"isSftpReportEnabled\" name=\"enabled\" class=\"pt-2\" style=\"border:none\" size=\"small\"></ui-switch>\r\n      </div>\r\n\r\n      <fieldset [disabled]=\"!isSftpReportEnabled\" class=\"col-12 \">\r\n        <div class=\"co-10 border-left pl-3 mt-2 sftp-grid\">\r\n          <label for=\"\" class=\" m-0\">IP Address</label>\r\n          <label for=\"\" class=\" m-0\">Port</label>\r\n          <input class=\"input-material mb-3\" type=\"text\" ngModel name=\"ip\">\r\n          <input class=\"input-material mb-3\" type=\"text\" ngModel name=\"port\">\r\n          <label for=\"\" class=\" m-0\">Username</label>\r\n          <label for=\"\" class=\" m-0\">Password</label>\r\n          <input class=\"input-material mb-3\" type=\"text\" ngModel name=\"username\">\r\n          <input class=\"input-material mb-3\" type=\"password\" name=\"password\">\r\n          <label for=\"\" class=\" m-0\">Upload directory</label>\r\n          <!--<button class=\"btn btn-theme-primary-outline upload-private-key-button\">Upload private key</button>-->\r\n          <label for=\"uploadInput\" class=\"btn btn-theme-secondary-outline upload-private-key-button\">Upload File\r\n            <input type=\"file\"\r\n                   hidden\r\n                   id=\"uploadInput\"\r\n                   (change)='openFile(uploadInput);uploadInput.value=null'\r\n                   accept='text/plain' multiple\r\n                   #uploadInput>\r\n          </label>\r\n          <input class=\"input-material\" [(ngModel)]=\"privateKey\" type=\"password\" ngModel name=\"directory\">\r\n        </div>\r\n      </fieldset>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/core/reports/report-details/report-controls/report-controls.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/core/reports/report-details/report-controls/report-controls.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-theme-primary select {\n  font-family: Helvetica;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #9e9e9e;\n  max-width: 100% !important;\n  height: 32px !important;\n  border-radius: 2px;\n  border: solid 1px #e0e0e0;\n  padding: 8px; }\n  .select-theme-primary select:focus {\n    outline: none; }\n  .report-detail-row label {\n  display: block;\n  font-size: 11px;\n  color: #9e9e9e;\n  margin-right: 4px; }\n  .date-input {\n  height: 32px !important;\n  border-radius: 2px;\n  font-size: 12px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif; }\n  .date-input::-webkit-input-placeholder {\n    font-size: 12px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif; }\n  .date-input:-ms-input-placeholder {\n    font-size: 12px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif; }\n  .date-input::-ms-input-placeholder {\n    font-size: 12px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif; }\n  .date-input::placeholder {\n    font-size: 12px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif; }\n  .nav-link {\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif;\n  color: #474747 !important; }\n  .text-report {\n  font-size: 11px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n  textarea {\n  border: solid 1px #e0e0e0;\n  font-size: 11px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n  textarea:focus {\n    outline: none; }\n  .sftp-grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 40% 40%;\n      grid-template-columns: 40% 40%;\n  -ms-grid-rows: auto;\n      grid-template-rows: auto;\n  align-items: end;\n  grid-column-gap: 25px; }\n  .sftp-grid .Bot {\n    margin-bottom: 0 !important; }\n  .sftp-grid input {\n    padding: 4px;\n    color: #9e9e9e; }\n  .sftp-grid .upload-private-key-button {\n    grid-row: auto/ span 2; }\n  .input-material {\n  padding: 0;\n  margin-top: 0;\n  margin-left: 1px;\n  border: none;\n  border-color: inherit;\n  box-shadow: none;\n  outline: none;\n  border-bottom: 1px solid #e0e0e0;\n  background-color: transparent;\n  border-radius: 0; }\n  .input-material::-webkit-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n  .input-material:-ms-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n  .input-material::-ms-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n  .input-material::placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    opacity: 1;\n    /* Firefox */\n    font-size: 11px;\n    line-height: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    padding: 0; }\n"

/***/ }),

/***/ "./src/app/core/reports/report-details/report-controls/report-controls.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/core/reports/report-details/report-controls/report-controls.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ReportControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportControlsComponent", function() { return ReportControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _temp_variable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../temp-variable.service */ "./src/app/temp-variable.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../view-bots/view-bots.component */ "./src/app/core/view-bots/view-bots.component.ts");
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










var ReportControlsComponent = /** @class */ (function () {
    function ReportControlsComponent(store, utilityService, tempVariableService, serverService, activatedRoute, router, constantsService) {
        this.store = store;
        this.utilityService = utilityService;
        this.tempVariableService = tempVariableService;
        this.serverService = serverService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.constantsService = constantsService;
        this.isactive = false;
        this.botlist = [];
        this.today = new Date();
        this.filetype = 'csv';
        this.deliveryMode = 'sftp';
        this.startdate = new Date();
        // test = false;
        // start_date = new Date();
        this.isSftpReportEnabled = false;
        this.datePickerConfig = Object.assign({}, {
            'containerClass': 'theme-dark-blue',
            'dateInputFormat': 'DD/MM/YYYY',
        });
    }
    ReportControlsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(document).ready(function () {
            $('input.time-input1').timepicker({ defaultTime: '9', scrollbar: true, timeFormat: 'HH:mm' });
        });
        if (this.activatedRoute.snapshot.data["name"] === 'create_report') {
            setTimeout(function () {
                _this.f.form.patchValue({ bot_id: _this.botlist[0].id, frequency: 'daily' });
            }, 0);
        }
    };
    ReportControlsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParamMap.subscribe(function (queryParams) {
            _this.deliveryMode = queryParams.params['deliveryMode'] || _this.deliveryMode;
        });
        var _id = this.report_id = this.activatedRoute.snapshot.paramMap.get('_id');
        this.botlist$.subscribe(function (value) {
            _this.botlist = value.allBotList.slice();
            _this.codebasedBotList = _this.botlist.filter(function (bot) { return bot.bot_type === _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_9__["EBotType"].chatbot; });
            setTimeout(function () {
                // this.reportFormData.startdate = this.utilityService.convertDateObjectStringToDDMMYY(new Date(this.reportFormData.startdate));
                // if (this.reportFormData) this.f.f.patchValue(this.reportFormData);
                //
                if (_id && _id !== 'new') {
                    var url = _this.constantsService.getReportsEditInfo(_id);
                    _this.serverService.makeGetReq({ url: url })
                        .subscribe(function (value) {
                        try {
                            var formDataSerialized = __assign({}, value, { delivery: {
                                    sftp: value.delivery.find(function (item) { return item.delivery_type === 'sftp'; }),
                                    email: value.delivery.find(function (item) { return item.delivery_type === 'email'; })
                                } });
                            // delete value.startdate;
                            if (value)
                                _this.f.form.patchValue(formDataSerialized);
                            _this.startdate = new Date(value.startdate);
                            // let start_time:string  = (<any>document).getElementById("start_time").value;
                            var hh = new Date(value.startdate).getHours().toString();
                            var mm = new Date(value.startdate).getMinutes().toString();
                            if (mm.length === 1)
                                mm = '0' + mm;
                            if (hh.length === 1)
                                hh = '0' + hh;
                            document.getElementById("start_time").value = hh + ':' + mm;
                        }
                        catch (e) {
                            console.log(e);
                        }
                        // this.f.f.patchValue({startdate:value.startdate});
                        // this.f.f.patchValue({startdate:value.startdate});//This will only accept mmddyyyy format...
                    });
                    // } else if(_id==='new') {
                    //   this.reportFormData.startdate = this.utilityService.convertDateObjectStringToDDMMYY(new Date(this.reportFormData.startdate));
                    //   if (this.reportFormData && !_id) this.f.f.patchValue(this.reportFormData);
                }
            }, 0);
        });
        this.f.valueChanges.debounceTime(1000).subscribe(function (data) {
            // if (!this.f.dirty) return;
            ;
            /*TODO: VERY BAD FIX; USE REACTIVE FORM INSTEAD*/
            // data.delivery = [data.delivery];
            data = __assign({}, _this.servervalue, data);
            _this.reportFormData = __assign({}, data);
            /*if its not a new subscription, dont store in store*/
            // if(_id==='new') this.store.dispatch(new SetReportFormAction({reportItem: data}));
        });
    };
    ReportControlsComponent.prototype.selectedBotChanged = function (bot) {
    };
    ReportControlsComponent.prototype.getReportControlFormData = function () {
        var _this = this;
        this.reportFormData.botName = this.botlist.find(function (bot) { return bot.id == _this.reportFormData.bot_id; }).name;
        this.reportFormData = __assign({}, this.reportFormData);
        var start_time = document.getElementById("start_time").value;
        var start_time_arr = start_time.split(':');
        var hh = Number(start_time_arr[0]);
        var mm = Number(start_time_arr[1]);
        if (!this.reportFormData.filetype) {
            this.reportFormData.filetype = 'csv';
        }
        this.reportFormData.startdate
            = new Date(this.reportFormData.startdate).setHours(hh, mm, 0, 0);
        return this.reportFormData;
    };
    ReportControlsComponent.prototype.click = function () {
        console.log(this.f.value);
        console.log(this.start_time);
    };
    ReportControlsComponent.prototype.openFile = function (inputEl) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.utilityService.readInputFileAsText(inputEl)];
                    case 1:
                        _a.privateKey = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ReportControlsComponent.prototype.navigate = function (deliveryMode) {
        this.router.navigate([], { queryParams: { deliveryMode: deliveryMode } });
        // deliveryMode='email'
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ReportControlsComponent.prototype, "botlist$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ReportControlsComponent.prototype, "f", void 0);
    ReportControlsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-controls',
            template: __webpack_require__(/*! ./report-controls.component.html */ "./src/app/core/reports/report-details/report-controls/report-controls.component.html"),
            styles: [__webpack_require__(/*! ./report-controls.component.scss */ "./src/app/core/reports/report-details/report-controls/report-controls.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
            _temp_variable_service__WEBPACK_IMPORTED_MODULE_5__["TempVariableService"],
            _server_service__WEBPACK_IMPORTED_MODULE_6__["ServerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _constants_service__WEBPACK_IMPORTED_MODULE_7__["ConstantsService"]])
    ], ReportControlsComponent);
    return ReportControlsComponent;
}());



/***/ }),

/***/ "./src/app/core/reports/report-details/report-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/core/reports/report-details/report-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container px-5 pb-5 my-3 bg-white shadow-theme\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-4 py-3 d-flex align-items-center \" style=\"border-bottom: solid 2px #e0e0e0;\">\r\n      <a class=\"p-0 h4 cursor-pointer\" [routerLink]=\"['/core','reports']\" ><i class=\"fa fa-angle-left pr-2\"></i></a>\r\n      <a class=\"p-0 h4 \">Subscribe to Report</a>\r\n      <button class=\"btn btn-theme-primary-outline ml-auto mr-3\" routerLink=\"/core/reports\">Cancel</button>\r\n      <button class=\"btn btn-theme-primary\" *ngIf=\"!report_id\" (click)=\"updateReport(Primarytemplate, unsubscribeTemplate)\">Create</button>\r\n      <button class=\"btn btn-theme-primary\" *ngIf=\"report_id\" (click)=\"updateReport(Primarytemplate, unsubscribeTemplate)\">Update</button>\r\n      <i class=\"fa fa-trash cursor-pointer\" *ngIf=\"report_id\" (click)=\"showReportDeleteModel(reportDeleteTemplate)\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-5 pr-5 border-right\">\r\n      <!--<app-report-controls [reportFormData]=\"reportFormData\"></app-report-controls>-->\r\n      <app-report-controls ></app-report-controls>\r\n    </div>\r\n    <div class=\"col-7 d-flex\">\r\n      <app-report-display class=\"d-flex\" style=\"width: 100%\"></app-report-display>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--===================Templates Down===================-->\r\n<ng-template #Primarytemplate>\r\n  <div class=\"primary-modal\">\r\n    <div class = \"top-dec\"></div>\r\n    <div class=\"modal-header\" >\r\n      <h4 class=\"modal-title\"> Subscribed successfully</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <div class =\"row\">\r\n        <div class=\"col-md-12\">\r\n          You have subscribed to <strong>messages</strong> report for\r\n          <strong>{{reportFormData.botName}}</strong> bot in a <strong>{{reportFormData.filetype}}</strong> format,which is scheduled\r\n          <strong>{{reportFormData.frequency}}</strong> at <strong>{{reportFormData.startdate|date:'shortTime'}} </strong>via\r\n          <strong *ngIf=\"!reportFormData?.delivery[1].enabled\">{{reportFormData?.delivery[0]?.delivery_type}}</strong>\r\n          <strong *ngIf=\"reportFormData?.delivery[1].enabled\">{{reportFormData?.delivery[1]?.delivery_type}}</strong>\r\n        </div>\r\n        <div class  = \"col-md-12\">\r\n          <i class=\"fa fa-check-circle\" ></i>\r\n        </div>\r\n        <div class = \"col-md-12 light-text\">The next delivery is scheduled on</div>\r\n        <div class=\"col-md-12\"><strong>{{reportFormData.startdate|date:'mediumDate'}}</strong></div>\r\n        <div class=\"col-md-12\">{{reportFormData.startdate|date:'shortTime'}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!---->\r\n</ng-template>\r\n\r\n\r\n\r\n<ng-template #reportDeleteTemplate>\r\n\r\n  <div class=\"danger-modal center-modal\">\r\n    <div class=\"top-dec\"></div>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title mb-2\" style=\"display: flex;justify-content: start;\">Delete Report?</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body pt-0\">\r\n      <form #form=\"ngForm\">\r\n        <div class=\"text-center my-1\">\r\n          <p class=\"mb-3\">This will delete the report and all it’s instances from history\r\n            will also be removed. Are you sure you want to delete it?</p>\r\n        </div>\r\n        <button class=\"btn btn-theme-secondary-outline mr-2\" (click)=\"modalRef.hide()\">Cancel</button>\r\n        <button class=\" btn btn-theme-danger\" (click)=\"deleteReport()\">Delete</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ng-template>\r\n\r\n<ng-template #unsubscribeTemplate>\r\n  <div class=\"danger-modal\">\r\n    <div class = \"top-dec\"></div>\r\n    <div class=\"modal-header\" >\r\n      <h4 class=\"modal-title\"> Unsubscribed successfully</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <div class =\"row\">\r\n        <div class=\"col-md-12 mb-2\">You have subscribed to <strong>messages</strong> report for\r\n          <strong>{{reportFormData.botName}}</strong> bot in a <strong>{{reportFormData.filetype}}</strong>\r\n          format,which is scheduled  <strong>{{reportFormData.frequency}}</strong> at <strong>\r\n            {{reportFormData.startdate|date:'shortTime'}} </strong>via\r\n          <strong *ngIf=\"!reportFormData?.delivery[1].enabled\">{{reportFormData?.delivery[0]?.delivery_type}}</strong>\r\n          <strong *ngIf=\"reportFormData?.delivery[1].enabled\">{{reportFormData?.delivery[1]?.delivery_type}}</strong>\r\n        </div>\r\n        <div class=\"col-md-12\">You can subscribe to it later if you need from configure tab later</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<!---->\r\n"

/***/ }),

/***/ "./src/app/core/reports/report-details/report-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/core/reports/report-details/report-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h4 {\n  font-size: 16px;\n  line-height: 13px;\n  font-weight: 700;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n\n.light-text {\n  color: #9e9e9e; }\n\n.primary-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n\n.primary-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #00abd3; }\n\n.primary-modal .modal-header {\n    color: #474747; }\n\n.primary-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n\n.primary-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n\n.primary-modal .modal-body .fa {\n  font-size: 48px;\n  color: #00abd3;\n  padding: 10px 0px; }\n\n.danger-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n\n.danger-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #b14250; }\n\n.danger-modal .modal-header {\n    color: #474747; }\n\n.danger-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n\n.danger-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n\n.fa-trash {\n  font-size: 22px;\n  color: #00abd3;\n  padding-left: 5px; }\n"

/***/ }),

/***/ "./src/app/core/reports/report-details/report-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/reports/report-details/report-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReportDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDetailsComponent", function() { return ReportDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _report_controls_report_controls_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-controls/report-controls.component */ "./src/app/core/reports/report-details/report-controls/report-controls.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
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




// import {validate} from 'codelyzer/walkerFactory/walkerFn';



// import * as moment from 'moment';


var ReportDetailsComponent = /** @class */ (function () {
    function ReportDetailsComponent(activatedRoute, utilityService, router, serverService, constantsService, modalService) {
        this.activatedRoute = activatedRoute;
        this.utilityService = utilityService;
        this.router = router;
        this.serverService = serverService;
        this.constantsService = constantsService;
        this.modalService = modalService;
    }
    ReportDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.report_id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
        this.botlist$.subscribe(function (botListState) {
            _this.allBotList = botListState.allBotList;
        });
        // this.reportItem$.subscribe((value)=>{
        //   this.reportFormData = value.formData;
        // })
    };
    ReportDetailsComponent.prototype.showReportDeleteModel = function (unsubscribeTemplate) {
        this.modalRef = this.modalService.show(unsubscribeTemplate, { class: 'center-modal' });
    };
    ReportDetailsComponent.prototype.deleteReport = function () {
        var _this = this;
        var deleteReportUrl = this.constantsService.getReportDeleteUrl(this.report_id);
        this.serverService.makeDeleteReq({ url: deleteReportUrl })
            .subscribe(function () {
            _this.utilityService.showSuccessToaster("Report deleted");
            _this.modalRef.hide();
            _this.router.navigate(['/core/reports']);
        });
    };
    ReportDetailsComponent.prototype.updateReport = function (subscribeTemplate, unsubscribeTemplate) {
        var _this = this;
        //
        this.reportFormData = JSON.parse(JSON.stringify(this.reportControlsComponent.getReportControlFormData()));
        // let timeNow = (new Date()).toString();
        var _id_str = this.activatedRoute.snapshot.paramMap.get('_id');
        this.reportFormData.id = _id_str ? Number(_id_str) : null;
        this.reportFormData.startdate = (new Date(this.reportFormData.startdate)).getTime();
        this.reportFormData.delivery = [__assign({}, this.reportFormData.delivery['sftp'], { delivery_type: 'sftp' }), __assign({}, this.reportFormData.delivery['email'], { delivery_type: 'email' })];
        this.reportFormData.updated_at = new Date().toISOString();
        var url;
        this.report_id ?
            url = this.constantsService.getSaveReportsEditInfo(this.reportFormData.id)
            : url = this.constantsService.getCreateReportUrl();
        var body = __assign({}, this.reportFormData);
        delete body.created_at;
        delete body.updated_at;
        delete body.botName;
        // delete body.id;
        // body.isactive = true;
        body.reporttype_id = 1;
        body.bot_id = Number(body.bot_id);
        // delete body.delivery;
        // delete body.startdate;/*TODO: temporary; since date is not working*/
        if (body.id) {
            //
            this.serverService.makePutReq({ url: url, body: body })
                .subscribe(function (value) {
                if (value.isactive)
                    _this.modalRef = _this.modalService.show(subscribeTemplate, { class: 'modal-md' });
                else {
                    _this.modalRef = _this.modalService.show(unsubscribeTemplate, { class: 'modal-md' });
                }
            });
        }
        else {
            delete body.id;
            var report_bot = this.allBotList.find(function (bot) { return bot.id == body.bot_id; });
            var headerData = { "bot-access-token": report_bot.bot_access_token };
            this.serverService.makePostReq({ url: url, body: body, headerData: headerData })
                .subscribe(function (value) {
                _this.router.navigate(["core/reports/edit/" + value.id]);
                _this.modalRef = _this.modalService.show(subscribeTemplate, { class: 'modal-md' });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_controls_report_controls_component__WEBPACK_IMPORTED_MODULE_1__["ReportControlsComponent"]),
        __metadata("design:type", _report_controls_report_controls_component__WEBPACK_IMPORTED_MODULE_1__["ReportControlsComponent"])
    ], ReportDetailsComponent.prototype, "reportControlsComponent", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ReportDetailsComponent.prototype, "reportItem$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ReportDetailsComponent.prototype, "botlist$", void 0);
    ReportDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-details',
            template: __webpack_require__(/*! ./report-details.component.html */ "./src/app/core/reports/report-details/report-details.component.html"),
            styles: [__webpack_require__(/*! ./report-details.component.scss */ "./src/app/core/reports/report-details/report-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]])
    ], ReportDetailsComponent);
    return ReportDetailsComponent;
}());



/***/ }),

/***/ "./src/app/core/reports/report-details/report-display/report-display.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/core/reports/report-details/report-display/report-display.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row mt-3\">-->\r\n  <!--<div class=\"col-12 my-2 text-report d-flex\">-->\r\n    <!--<span>Message:</span>-->\r\n    <!--<span>This report consists the raw data of all the messages exchanged by user and the bot with the fields of transaction ID, message sent by, date and time.</span>-->\r\n  <!--</div>-->\r\n\r\n  <!--<div class=\"col-12 my-3 text-report d-flex justify-content-between\">-->\r\n    <!--<span>Preview</span>-->\r\n    <!--<div style=\"color: #0291b2\">-->\r\n      <!--<span class=\"pr-3\"><i class=\"fa fa-download pr-1\"></i>Download</span>-->\r\n      <!--<span><i class=\"fa fa-link pr-1\"></i>Copy Link</span>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--<div class=\"col-12\">-->\r\n    <!--<table class=\"\" style=\"width: 100%!important;\">-->\r\n      <!--<thead class=\"border-bottom-custom\">-->\r\n      <!--<tr>-->\r\n        <!--<th scope=\"col\">Transaction Id</th>-->\r\n        <!--<th scope=\"col\">Message</th>-->\r\n        <!--<th scope=\"col\">Sent By</th>-->\r\n        <!--<th scope=\"col\">Detail</th>-->\r\n      <!--</tr>-->\r\n      <!--</thead>-->\r\n      <!--<tbody>-->\r\n      <!--<tr>-->\r\n        <!--<td>1</td>-->\r\n        <!--<td class=\"text-left\">Hey, the temperature in hyderabad is 24C. You can go out and explore the city</td>-->\r\n        <!--<td class=\"text\">hello</td>-->\r\n      <!--</tr>-->\r\n      <!--</tbody>-->\r\n    <!--</table>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n<div class=\"row\" style=\"width: 100%\">\r\n  <div class=\"col-12 d-flex justify-content-center align-items-center\">\r\n    <span class=\"text-muted\">No preview Available</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/reports/report-details/report-display/report-display.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/core/reports/report-details/report-display/report-display.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-report {\n  font-size: 11px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n\ntable th {\n  width: 96px;\n  height: 18px;\n  font-family: Helvetica;\n  font-size: 13px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.38;\n  letter-spacing: 0.4px;\n  color: #474747; }\n\ntable td {\n  width: 181px;\n  height: 14px;\n  font-family: Helvetica;\n  font-size: 11px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.27;\n  letter-spacing: normal;\n  color: #474747; }\n\ntable .border-bottom-custom {\n  border-bottom: solid 2px #e0e0e0 !important; }\n"

/***/ }),

/***/ "./src/app/core/reports/report-details/report-display/report-display.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/core/reports/report-details/report-display/report-display.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ReportDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDisplayComponent", function() { return ReportDisplayComponent; });
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

var ReportDisplayComponent = /** @class */ (function () {
    function ReportDisplayComponent() {
    }
    ReportDisplayComponent.prototype.ngOnInit = function () {
    };
    ReportDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-display',
            template: __webpack_require__(/*! ./report-display.component.html */ "./src/app/core/reports/report-details/report-display/report-display.component.html"),
            styles: [__webpack_require__(/*! ./report-display.component.scss */ "./src/app/core/reports/report-details/report-display/report-display.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportDisplayComponent);
    return ReportDisplayComponent;
}());



/***/ }),

/***/ "./src/app/core/reports/reports.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/reports/reports.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mx-0  mt-2 pb-5 bg-white shadow-theme\">\r\n  <div class=\"col-12 py-2 border-bottom\">\r\n    <div class=\"pl-2 font-weight-bold\" style=\"font-size: 20px; color: #474747\">Reports</div>\r\n  </div>\r\n\r\n  <div class=\"col-12\">\r\n    <div class=\"card-body\">\r\n      <ul class=\"nav nav-tabs my-2\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\"\r\n             [routerLink]=\"['/core/reports']\"\r\n             [queryParams]=\"{activeTab:'configure'}\"\r\n             (click)=\"tabClicked('configure')\"\r\n             [ngClass]=\"{'active' : activeTab ==='configure'}\"><strong>Configure</strong></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\"\r\n             [routerLink]=\"['/core/reports']\"\r\n             [queryParams]=\"{activeTab:'history'}\"\r\n             (click)=\"tabClicked('history')\"\r\n             [ngClass]=\"{'active' : activeTab ==='history'}\"><strong>History</strong></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n<!---->\r\n  <div class=\"col-12\" [hidden]=\"activeTab==='history'\">\r\n    <div class=\"col-12 d-flex justify-content-end pb-2\">\r\n      <button class=\"btn btn-theme-primary\" (click)=\"navigateTocreateNewReport()\">New Report</button>\r\n    </div>\r\n\r\n    <div class=\"col-12\">\r\n      <app-smart-table\r\n        [data]=\"reportSmartTableData\"\r\n        (rowClicked$)=\"goToReportEditComponent($event)\"\r\n        [totalRecords]=\"totalReportRecords\"\r\n        (pageChanged$)=\"reportTablePageChanged($event)\"\r\n        [settings]=\"SMART_TABLE_REPORTS_SETTING\">\r\n      </app-smart-table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12 mt-2\" [hidden]=\"activeTab==='configure'\">\r\n    <div class=\"col-12\">\r\n      <app-smart-table\r\n        [data]=\"reportHistorySmartTableData\"\r\n        (pageChanged$)=\"reportHistoryTablePageChanged($event)\"\r\n        [totalRecords]=\"totalReportRecords\"\r\n        (customActionEvents)=\"customActionEventsTriggeredInSessionsTable($event)\"\r\n        [settings]=\"SMART_TABLE_REPORT_HISTORY_SETTING\"></app-smart-table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--<p>{{reportSmartTableData|json}}</p>-->\r\n"

/***/ }),

/***/ "./src/app/core/reports/reports.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/reports/reports.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  border-color: white !important;\n  border-bottom: 2px solid #00abd3 !important; }\n\na {\n  text-decoration: none !important;\n  font-size: 13px;\n  color: black; }\n\ninput {\n  width: 100%; }\n\n/*todo: there is an issue with centering text*/\n\n.table td {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/core/reports/reports.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/reports/reports.component.ts ***!
  \***************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _object_array_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../object-array-crud.service */ "./src/app/object-array-crud.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _smart_table_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../smart-table-settings.service */ "./src/app/smart-table-settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _temp_variable_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../temp-variable.service */ "./src/app/temp-variable.service.ts");
/* harmony import */ var _ngxs_reports_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ngxs/reports.action */ "./src/app/core/reports/ngxs/reports.action.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utility.service */ "./src/app/utility.service.ts");
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











var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(constantsService, serverService, objectArrayCrudService, smartTableSettingsService, tempVariableService, router, activatedRoute, utilityService, store) {
        this.constantsService = constantsService;
        this.serverService = serverService;
        this.objectArrayCrudService = objectArrayCrudService;
        this.smartTableSettingsService = smartTableSettingsService;
        this.tempVariableService = tempVariableService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.utilityService = utilityService;
        this.store = store;
        this.reportSmartTableData = [];
        this.reportHistorySmartTableData = [];
        this.SMART_TABLE_REPORTS_SETTING = this.smartTableSettingsService.SMART_TABLE_REPORTS_SETTING;
        this.SMART_TABLE_REPORT_HISTORY_SETTING = this.smartTableSettingsService.SMART_TABLE_REPORTS_HISTORY_SETTING;
        this.activeTab = 'configure';
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
        var reportTypeUrl = this.constantsService.geReportTypesUrl();
        this.serverService.makeGetReq({ url: reportTypeUrl })
            .subscribe(function (reportTypes) {
            _this.reportTypes = reportTypes;
            _this.loadReports(10, 0);
            _this.loadReportHistory(10, 0);
        });
    };
    ReportsComponent.prototype.loadReportHistory = function (limit, offset) {
        var _this = this;
        var reportHistoryUrl = this.constantsService.getReportHistoryUrl(limit, offset);
        this.serverService.makeGetReq({ url: reportHistoryUrl })
            .subscribe(function (reportHistory) {
            _this.totalHistoryReportRecords = reportHistory.meta.total_count;
            /*Making reportItem$ history data*/
            reportHistory.objects.forEach(function (reportHistoryItem) {
                _this.botlist$.subscribe(function (botList) {
                    var listOfAllBots = botList.allBotList;
                    _this.reportHistorySmartTableData.push(__assign({}, reportHistoryItem, { bot: _this.objectArrayCrudService.getObjectItemByKeyValuePair(listOfAllBots, { id: reportHistoryItem.bot_id }).name, name: _this.objectArrayCrudService.getObjectItemByKeyValuePair(_this.reportTypes.objects, { id: reportHistoryItem.reporttype_id }).name, created_at: reportHistoryItem.created_at }));
                    _this.reportHistorySmartTableData = _this.reportHistorySmartTableData.slice();
                });
            });
        });
    };
    ReportsComponent.prototype.reportHistoryTablePageChanged = function (page) {
        this.reportHistorySmartTableData = [];
        this.loadReportHistory(10, (page - 1) * 10);
    };
    ReportsComponent.prototype.customActionEventsTriggeredInSessionsTable = function (smartTableCustomEventData) {
        var _this = this;
        var url = this.constantsService.getDownloadReportHistoryByIdUrl(smartTableCustomEventData.data.id);
        this.serverService.makeGetReqToDownloadFiles({ url: url })
            .subscribe(function (value) {
            /*To download the blob: https://stackoverflow.com/questions/19327749/javascript-blob-filename-without-link*/
            var fileName = "report_history_for_bot_id_" + smartTableCustomEventData.data.bot_id + ".csv";
            _this.utilityService.downloadText(value, fileName);
            // var saveData = (function () {
            //   var a:any = document.createElement("a");
            //   document.body.appendChild(a);
            //   a.style = "display: none";
            //   return function (data, fileName) {
            //     var blob = new Blob([value], {type: "octet/stream"}),
            //       url = window.URL.createObjectURL(blob);
            //     a.href = url;
            //     a.download = fileName;
            //     a.click();
            //     window.URL.revokeObjectURL(url);
            //   };
            // }());
            //
            // // var data = { x: 42, s: "hello, world", d: new Date() },
            //
            // saveData(null, fileName);
            // console.log(value);
            // this.utilityService.downloadArrayAsCSV(value, "asdsad");
        });
    };
    ReportsComponent.prototype.loadReports = function (limit, offset) {
        var _this = this;
        var reportUrl = this.constantsService.getReportUrl(limit, offset);
        this.serverService.makeGetReq({ url: reportUrl })
            .subscribe(function (results) {
            _this.totalReportRecords = results.meta.total_count;
            /*Making reportItem$ data*/
            results.objects.forEach(function (report) {
                _this.botlist$_sub = _this.botlist$.subscribe(function (value) {
                    var listOfAllBots = value.allBotList;
                    try {
                        _this.reportSmartTableData.push(__assign({}, report, { bot: _this.objectArrayCrudService.getObjectItemByKeyValuePair(listOfAllBots, { id: report.bot_id }).name, id: report.id, name: _this.objectArrayCrudService.getObjectItemByKeyValuePair(_this.reportTypes.objects, { id: report.reporttype_id }).name, frequency: report.frequency, last_jobId: report.last_job_id, nextreportgenerated: (new Date(report.nextreportgenerated).toDateString()), isactive: report.isactive }));
                    }
                    catch (e) {
                        console.log(e);
                        // this.utilityService.showErrorToaster(`Can't show the report for botid: ${report.bot_id}. This bot is either deleted or your access maybe been revoked.`,5 );
                    }
                    _this.reportSmartTableData = _this.reportSmartTableData.slice();
                });
            });
        });
        ;
    };
    ReportsComponent.prototype.reportTablePageChanged = function (page) {
        this.reportSmartTableData = [];
        this.loadReports(10, (page - 1) * 10);
    };
    ReportsComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
    };
    ReportsComponent.prototype.goToReportEditComponent = function (eventData) {
        // ;
        this.store.dispatch(new _ngxs_reports_action__WEBPACK_IMPORTED_MODULE_9__["SetCurrentEditedReportAction"]({ reportItem: eventData.data }));
        this.tempVariableService.reportRowClicked = eventData.data;
        this.router.navigate(['/core', 'reports', 'edit', eventData.data.id]);
    };
    ReportsComponent.prototype.navigateTocreateNewReport = function () {
        this.router.navigate(['core', 'reports', 'create']);
    };
    ReportsComponent.prototype.ngOnDestroy = function () {
        this.botlist$_sub && this.botlist$_sub.unsubscribe();
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], ReportsComponent.prototype, "botlist$", void 0);
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/core/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/core/reports/reports.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
            _object_array_crud_service__WEBPACK_IMPORTED_MODULE_3__["ObjectArrayCrudService"],
            _smart_table_settings_service__WEBPACK_IMPORTED_MODULE_6__["SmartTableSettingsService"],
            _temp_variable_service__WEBPACK_IMPORTED_MODULE_8__["TempVariableService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<p class=\"text-muted d-flex justify-content-center mb-0\" style=\"font-size: 12px\">\r\n  Ⓒ 2018 IMImobile   |   Version 2.0.0\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pipeline-test/pipeline-test.component.html":
/*!************************************************************!*\
  !*** ./src/app/pipeline-test/pipeline-test.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>-->\r\n  <!--<div class='wrapper'>-->\r\n    <!--<div class='container' [dragula]='\"first-bag\"' [dragulaOptions]=\"options\" [dragulaModel]='items1'>-->\r\n      <!--<div *ngFor=\"let i of items1\">You can move these elements between these two containers</div>-->\r\n    <!--</div>-->\r\n\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n\r\n<!--<div class=\"container\">-->\r\n  <!--<div class=\"row\">-->\r\n    <!--<div class=\"col-6\"></div>-->\r\n    <!--<div class=\"col-6\">-->\r\n\r\n      <!--<div class='container1' [dragula]='\"first-bag\"' [dragulaOptions]=\"options\" [dragulaModel]='items2'>-->\r\n        <!--<div *ngFor=\"let i of items2\">This is the default use case. You only need to specify the containers you want to use</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n"

/***/ }),

/***/ "./src/app/pipeline-test/pipeline-test.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pipeline-test/pipeline-test.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pipeline-test/pipeline-test.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pipeline-test/pipeline-test.component.ts ***!
  \**********************************************************/
/*! exports provided: PipelineTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineTestComponent", function() { return PipelineTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PipelineTestComponent = /** @class */ (function () {
    function PipelineTestComponent(dragulaService) {
        this.dragulaService = dragulaService;
        this.items1 = [1, 2, 3, 4, 5, 5, 3, 6];
        this.items2 = [0, 0, 9, 0, 9, 0];
        this.options = {
            removeOnSpill: true
        };
        // dragulaService.setOptions('third-bag', {
        //   removeOnSpill: true
        // });
    }
    PipelineTestComponent.prototype.ngOnInit = function () {
    };
    PipelineTestComponent.prototype.click = function () {
        console.log(this.items1, this.items2);
    };
    PipelineTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pipeline-test',
            template: __webpack_require__(/*! ./pipeline-test.component.html */ "./src/app/pipeline-test/pipeline-test.component.html"),
            styles: [__webpack_require__(/*! ./pipeline-test.component.scss */ "./src/app/pipeline-test/pipeline-test.component.scss")]
        }),
        __metadata("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"]])
    ], PipelineTestComponent);
    return PipelineTestComponent;
}());



/***/ }),

/***/ "./src/app/router-fragment-active.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/router-fragment-active.directive.ts ***!
  \*****************************************************/
/*! exports provided: RouterFragmentActiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterFragmentActiveDirective", function() { return RouterFragmentActiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouterFragmentActiveDirective = /** @class */ (function () {
    function RouterFragmentActiveDirective(element, activatedRoute) {
        this.element = element;
        this.activatedRoute = activatedRoute;
        this.classList = this.element.nativeElement.classList;
    }
    Object.defineProperty(RouterFragmentActiveDirective.prototype, "appRouterQueryParamActive", {
        set: function (tabParamValue) {
            this.tabParamValue = tabParamValue;
        },
        enumerable: true,
        configurable: true
    });
    RouterFragmentActiveDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParamMap.subscribe(function (paramMap) {
            var tabParamValue;
            if (paramMap.get('tab') === _this.tabParamValue)
                _this.classList.add('tab-active');
            else {
                _this.classList.remove('tab-active');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RouterFragmentActiveDirective.prototype, "appRouterQueryParamActive", null);
    RouterFragmentActiveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appRouterQueryParamActive]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RouterFragmentActiveDirective);
    return RouterFragmentActiveDirective;
}());



/***/ }),

/***/ "./src/app/scroller.directive.ts":
/*!***************************************!*\
  !*** ./src/app/scroller.directive.ts ***!
  \***************************************/
/*! exports provided: ScrollerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerDirective", function() { return ScrollerDirective; });
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

var ScrollerDirective = /** @class */ (function () {
    function ScrollerDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        var lastScrollTop = -1;
        renderer.listen(elRef.nativeElement, 'wheel', function (e) {
            if (elRef.nativeElement.scrollTop == lastScrollTop && e.deltaY > 0) {
                e = e || window.event;
                if (e.preventDefault)
                    e.preventDefault();
                e.returnValue = false;
            }
            else if (elRef.nativeElement.scrollTop == 0) {
                lastScrollTop = -1;
            }
            else {
                lastScrollTop = elRef.nativeElement.scrollTop;
            }
        });
    }
    ScrollerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[scroller]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], ScrollerDirective);
    return ScrollerDirective;
}());



/***/ }),

/***/ "./src/app/smart-table-settings.service.ts":
/*!*************************************************!*\
  !*** ./src/app/smart-table-settings.service.ts ***!
  \*************************************************/
/*! exports provided: SmartTableSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartTableSettingsService", function() { return SmartTableSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmartTableSettingsService = /** @class */ (function () {
    function SmartTableSettingsService(datePipe) {
        var _this = this;
        this.datePipe = datePipe;
        this.SMART_TABLE_REPORTS_SETTING = {
            columns: {
                bot: {
                    title: 'Bot'
                },
                name: {
                    title: 'Report Type'
                },
                frequency: {
                    title: 'Frequency'
                },
                last_jobId: {
                    title: 'Last job run'
                },
                nextreportgenerated: {
                    title: 'Next scheduled date'
                },
                isactive: {
                    title: 'Active'
                },
            },
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            pager: {
                display: false,
                perPage: 10
            }
        };
        this.SMART_TABLE_REPORTS_HISTORY_SETTING = {
            columns: {
                bot: {
                    title: 'Bot'
                },
                name: {
                    title: 'Report Type'
                },
                created_at: {
                    title: 'Generated Date',
                    valuePrepareFunction: function (date) {
                        var raw = new Date(date);
                        var formatted = _this.datePipe.transform(raw, 'fullDate');
                        return formatted;
                    }
                }
            },
            actions: {
                add: false,
                edit: false,
                delete: false,
                position: 'right',
                custom: [
                    { name: 'download', title: "<i class=\"fa fa-download text-dark\"></i>" }
                ],
            },
            pager: {
                display: false,
                perPage: 10
            },
        };
    }
    SmartTableSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], SmartTableSettingsService);
    return SmartTableSettingsService;
}());



/***/ }),

/***/ "./src/app/temp-variable.service.ts":
/*!******************************************!*\
  !*** ./src/app/temp-variable.service.ts ***!
  \******************************************/
/*! exports provided: TempVariableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempVariableService", function() { return TempVariableService; });
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

var TempVariableService = /** @class */ (function () {
    function TempVariableService() {
    }
    TempVariableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TempVariableService);
    return TempVariableService;
}());



/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{_bot.name}}\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent(router) {
        this.router = router;
    }
    Object.defineProperty(TestComponent.prototype, "bot", {
        set: function (botData) {
            // ;
            this._bot = botData;
        },
        enumerable: true,
        configurable: true
    });
    TestComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TestComponent.prototype, "bot", null);
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ })

}]);
//# sourceMappingURL=core-core-module.js.map