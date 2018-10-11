(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./analysis2/analysis2.module": [
		"./src/app/core/analysis2/analysis2.module.ts",
		"analysis2-analysis2-module~bot-detail-bot-detail-module~core-core-module~view-bots-view-bots-module",
		"analysis2-analysis2-module"
	],
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"./bot-detail/bot-detail.module": [
		"./src/app/core/bot-detail/bot-detail.module.ts",
		"analysis2-analysis2-module~bot-detail-bot-detail-module~core-core-module~view-bots-view-bots-module",
		"bot-detail-bot-detail-module~core-core-module",
		"bot-detail-bot-detail-module"
	],
	"./core/core.module": [
		"./src/app/core/core.module.ts",
		"analysis2-analysis2-module~bot-detail-bot-detail-module~core-core-module~view-bots-view-bots-module",
		"bot-detail-bot-detail-module~core-core-module",
		"core-core-module"
	],
	"./view-bots/view-bots.module": [
		"./src/app/core/view-bots/view-bots.module.ts",
		"analysis2-analysis2-module~bot-detail-bot-detail-module~core-core-module~view-bots-view-bots-module",
		"view-bots-view-bots-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<progressbar\r\n  *ngIf=\"showProgressbar\"\r\n  [value]=\"progressVal\"\r\n  [animate]=\"true\"\r\n  style=\"position: fixed; right: 0px; top: 0px;z-index:300000000\"></progressbar>\r\n<router-outlet></router-outlet>\r\n<div *ngIf=\"!isFullScreenPreview\" style=\"position: fixed; right: 0px; bottom: 0px;z-index:102\">\r\n  <app-chat-wrapper></app-chat-wrapper>\r\n</div>\r\n\r\n\r\n<!--<ng-container *ngIf=\"loadingRouteConfig\">-->\r\n  <!--&lt;!&ndash;<app-imi-loader></app-imi-loader>&ndash;&gt;-->\r\n  <!--<i class=\"fa fa-spin\"></i>-->\r\n<!--</ng-container>-->\r\n\r\n<app-backend-dev></app-backend-dev>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .toast {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n\n.toast-container .toast:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .toast,\n.toast-container.toast-bottom-center .toast {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .toast,\n.toast-container.toast-bottom-full-width .toast {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .toast.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n\nbody {\n  background: #333;\n  color: #ddd; }\n\nh1 {\n  color: white;\n  font-size: 2.25em;\n  text-align: center;\n  margin-top: 1em;\n  margin-bottom: 2em;\n  text-shadow: 0px 2px 0px black; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.progressVal = 0;
        this.showProgressbar = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("tesging 1");
        this.app$.subscribe(function (app) {
            if (app.progressbar.loading) {
                _this.showProgressbar = true;
                _this.currentIntervalRef && clearInterval(_this.currentIntervalRef);
                _this.progressVal = app.progressbar.value;
                // this.progressVal = 0;
                _this.currentIntervalRef = setInterval(function () {
                    if (_this.progressVal < 80)
                        ++_this.progressVal;
                    else {
                        _this.progressVal = _this.progressVal + 0.2;
                    }
                }, 200);
            }
            else {
                setTimeout(function () {
                    _this.progressVal = 100;
                    _this.currentIntervalRef && clearInterval(_this.currentIntervalRef);
                    setTimeout(function () {
                        _this.showProgressbar = false;
                    }, 500);
                }, 0);
            }
        });
        // this.router.events.subscribe((data) => {
        //   if (data instanceof RoutesRecognized) {
        //     this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
        //     ;
        //   }
        // });
        this.router.events.subscribe(function (data) {
            if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RoutesRecognized"]) {
                _this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
                _this.bot_unique_name = data.state.root.firstChild.queryParamMap.get('bot_unique_name');
                _this.enterprise_unique_name = data.state.root.firstChild.queryParamMap.get('enterprise_unique_name');
            }
            if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                /*lazy loading*/
                _this.loadingRouteConfig = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                _this.loadingRouteConfig = false;
            }
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AppComponent.prototype, "app$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('carousel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "carousel", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/fesm5/ngxs-logger-plugin.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngxs_app_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngxs/app.state */ "./src/app/ngxs/app.state.ts");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/storage-plugin */ "./node_modules/@ngxs/storage-plugin/fesm5/ngxs-storage-plugin.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/not-found/not-found.component */ "./src/app/core/not-found/not-found.component.ts");
/* harmony import */ var _drag_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drag.service */ "./src/app/drag.service.ts");
/* harmony import */ var _auth_ngxs_auth_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/ngxs/auth.state */ "./src/app/auth/ngxs/auth.state.ts");
/* harmony import */ var _core_enterpriseprofile_ngxs_enterpriseprofile_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/enterpriseprofile/ngxs/enterpriseprofile.state */ "./src/app/core/enterpriseprofile/ngxs/enterpriseprofile.state.ts");
/* harmony import */ var _core_view_bots_ngxs_view_bot_state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/view-bots/ngxs/view-bot.state */ "./src/app/core/view-bots/ngxs/view-bot.state.ts");
/* harmony import */ var _chat_ngxs_chat_state__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chat/ngxs/chat.state */ "./src/app/chat/ngxs/chat.state.ts");
/* harmony import */ var _core_buildbot_ngxs_buildbot_state__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/buildbot/ngxs/buildbot.state */ "./src/app/core/buildbot/ngxs/buildbot.state.ts");
/* harmony import */ var _core_analysis2_ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/analysis2/ngxs/analysis.state */ "./src/app/core/analysis2/ngxs/analysis.state.ts");
/* harmony import */ var _core_reports_ngxs_reports_state__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/reports/ngxs/reports.state */ "./src/app/core/reports/ngxs/reports.state.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_gaurd_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth-gaurd.service */ "./src/app/auth-gaurd.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _not_authorised_not_authorised_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./not-authorised/not-authorised.component */ "./src/app/not-authorised/not-authorised.component.ts");
/* harmony import */ var _chat_chat_wrapper_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./chat/chat-wrapper.component */ "./src/app/chat/chat-wrapper.component.ts");
/* harmony import */ var _chat_rooms_and_convo_panel_chat_message_list_chatroom_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./chat/rooms-and-convo-panel/chat-message-list/chatroom.component */ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chatroom.component.ts");
/* harmony import */ var _chat_rooms_and_convo_panel_chat_room_list_chat_item_chat_item_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component */ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component.ts");
/* harmony import */ var _chat_rooms_and_convo_panel_chat_room_list_chat_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./chat/rooms-and-convo-panel/chat-room-list/chat-list.component */ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-list.component.ts");
/* harmony import */ var _chat_rooms_and_convo_panel_chat_message_list_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component */ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component.ts");
/* harmony import */ var _chat_rooms_and_convo_panel_chat_window_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./chat/rooms-and-convo-panel/chat-window.component */ "./src/app/chat/rooms-and-convo-panel/chat-window.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chat_bot_welcome_panel_bot_welcome_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./chat/bot-welcome-panel/bot-welcome.component */ "./src/app/chat/bot-welcome-panel/bot-welcome.component.ts");
/* harmony import */ var ng2_click_outside__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng2-click-outside */ "./node_modules/ng2-click-outside/lib/index.js");
/* harmony import */ var ng2_click_outside__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ng2_click_outside__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _chat_carousel_bot_thinking_bubble_bot_thinking_bubble_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./chat/carousel/bot-thinking-bubble/bot-thinking-bubble.component */ "./src/app/chat/carousel/bot-thinking-bubble/bot-thinking-bubble.component.ts");
/* harmony import */ var _rich_media_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./rich-media.module */ "./src/app/rich-media.module.ts");
/* harmony import */ var _filter_array_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./filter-array.pipe */ "./src/app/filter-array.pipe.ts");
/* harmony import */ var _ms_to_hh_mm_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ms-to-hh-mm.pipe */ "./src/app/ms-to-hh-mm.pipe.ts");
/* harmony import */ var _backend_dev_backend_dev_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./backend-dev/backend-dev.component */ "./src/app/backend-dev/backend-dev.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































// import {CodeEditorComponent} from './core/buildbot/build-code-based-bot/architecture/code/code-editor/code-editor.component';
var routes = [
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'core', loadChildren: './core/core.module#CoreModule', canLoad: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_24__["AuthGaurdService"]] },
    { path: 'preview', component: _chat_chat_wrapper_component__WEBPACK_IMPORTED_MODULE_27__["ChatWrapperComponent"], data: { isFullScreenPreview: true } },
    // {path: 'preview', component: NotFoundComponent, data: {isFullScreenPreview: true}},
    { path: 'denied', component: _not_authorised_not_authorised_component__WEBPACK_IMPORTED_MODULE_26__["NotAuthorisedComponent"] },
    { path: '', redirectTo: "core/viewbots/chatbot", pathMatch: "full" },
    { path: '**', component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
                _not_authorised_not_authorised_component__WEBPACK_IMPORTED_MODULE_26__["NotAuthorisedComponent"],
                // ChatWrapperComponent,
                _ms_to_hh_mm_pipe__WEBPACK_IMPORTED_MODULE_39__["MsToHhMmPipe"],
                _chat_chat_wrapper_component__WEBPACK_IMPORTED_MODULE_27__["ChatWrapperComponent"],
                _chat_rooms_and_convo_panel_chat_window_component__WEBPACK_IMPORTED_MODULE_32__["ChatWindowComponent"],
                _chat_rooms_and_convo_panel_chat_message_list_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_31__["ChatMessageComponent"],
                _chat_rooms_and_convo_panel_chat_room_list_chat_list_component__WEBPACK_IMPORTED_MODULE_30__["ChatListComponent"],
                _chat_rooms_and_convo_panel_chat_room_list_chat_item_chat_item_component__WEBPACK_IMPORTED_MODULE_29__["ChatItemComponent"],
                _chat_rooms_and_convo_panel_chat_message_list_chatroom_component__WEBPACK_IMPORTED_MODULE_28__["ChatroomComponent"],
                _filter_array_pipe__WEBPACK_IMPORTED_MODULE_38__["FilterArrayPipe"],
                _chat_carousel_bot_thinking_bubble_bot_thinking_bubble_component__WEBPACK_IMPORTED_MODULE_36__["BotThinkingBubbleComponent"],
                _chat_bot_welcome_panel_bot_welcome_component__WEBPACK_IMPORTED_MODULE_34__["BotWelcomeComponent"],
                _backend_dev_backend_dev_component__WEBPACK_IMPORTED_MODULE_40__["BackendDevComponent"],
            ],
            // exports:[
            //   CardCarouselComponent,
            //   QuickReplyComponent,
            // ],
            imports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
                _rich_media_module__WEBPACK_IMPORTED_MODULE_37__["RichMediaModule"],
                // BrowserModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
                // BsDropdownModule.forRoot(),
                // TabsModule.forRoot(),
                // AceEditorModule,
                // UiSwitchModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"],
                // DragAndDropModule.forRoot(),
                // ChartModule,asdsads
                _ngxs_store__WEBPACK_IMPORTED_MODULE_12__["NgxsModule"].forRoot([
                    _auth_ngxs_auth_state__WEBPACK_IMPORTED_MODULE_15__["AuthStateReducer"],
                    _ngxs_app_state__WEBPACK_IMPORTED_MODULE_7__["AppStateReducer"],
                    _core_enterpriseprofile_ngxs_enterpriseprofile_state__WEBPACK_IMPORTED_MODULE_16__["EnterpriseprofileStateReducer"],
                    _core_view_bots_ngxs_view_bot_state__WEBPACK_IMPORTED_MODULE_17__["ViewBotStateReducer"],
                    _chat_ngxs_chat_state__WEBPACK_IMPORTED_MODULE_18__["ChatSessionStateReducer"],
                    _core_buildbot_ngxs_buildbot_state__WEBPACK_IMPORTED_MODULE_19__["BotCreationStateReducer"],
                    _core_analysis2_ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_20__["AnalysisStateReducer2"],
                    _core_reports_ngxs_reports_state__WEBPACK_IMPORTED_MODULE_21__["ReportsStateReducer"],
                ]),
                _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsStoragePluginModule"].forRoot(),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__["NgxsLoggerPluginModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ng2_click_outside__WEBPACK_IMPORTED_MODULE_35__["ClickOutsideModule"],
                // DragulaModule,
                // HotTableModule,
                // Ng2CompleterModule,
                // Ng2SmartTableModule,
                // BsDatepickerModule.forRoot(),
                // ModalModule.forRoot(),
                // TooltipModule.forRoot(),
                // BrowserAnimationsModule, // required animations module
                // ToastrModule.forRoot(), // ToastrModule added,
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ProgressbarModule"].forRoot(),
                // ClickOutsideModule,
                //
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production })
                /*custom modules*/
                // AuthModule,
                // CoreModule
            ],
            providers: [_server_service__WEBPACK_IMPORTED_MODULE_9__["ServerService"], _drag_service__WEBPACK_IMPORTED_MODULE_14__["DragService"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-gaurd.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-gaurd.service.ts ***!
  \***************************************/
/*! exports provided: AuthGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function() { return AuthGaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGaurdService = /** @class */ (function () {
    function AuthGaurdService(router) {
        this.router = router;
    }
    AuthGaurdService.prototype.canActivate = function () {
        var _this = this;
        return this.loggeduser$.map(function (value) {
            if (value && value.user != null) {
                return true;
            }
            else {
                _this.router.navigate(['auth', 'login']);
                return false;
            }
        });
    };
    AuthGaurdService.prototype.canActivateChild = function () {
        var _this = this;
        return this.loggeduser$.map(function (value) {
            if (value.user != null) {
                return true;
            }
            else {
                _this.router.navigate(['auth', 'login']);
                return false;
            }
        });
    };
    AuthGaurdService.prototype.canLoad = function (route) {
        var _this = this;
        // return true;
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
    ], AuthGaurdService.prototype, "loggeduser$", void 0);
    AuthGaurdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGaurdService);
    return AuthGaurdService;
}());



/***/ }),

/***/ "./src/app/auth/ngxs/auth.action.ts":
/*!******************************************!*\
  !*** ./src/app/auth/ngxs/auth.action.ts ***!
  \******************************************/
/*! exports provided: SetUserAction, ResetAuthToDefaultState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserAction", function() { return SetUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetAuthToDefaultState", function() { return ResetAuthToDefaultState; });
var SetUserAction = /** @class */ (function () {
    function SetUserAction(payload) {
        this.payload = payload;
    }
    SetUserAction.type = '[login] set user';
    return SetUserAction;
}());

var ResetAuthToDefaultState = /** @class */ (function () {
    function ResetAuthToDefaultState() {
    }
    ResetAuthToDefaultState.type = '[login] reset user';
    return ResetAuthToDefaultState;
}());



/***/ }),

/***/ "./src/app/auth/ngxs/auth.state.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/ngxs/auth.state.ts ***!
  \*****************************************/
/*! exports provided: AuthStateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStateReducer", function() { return AuthStateReducer; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.action */ "./src/app/auth/ngxs/auth.action.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants.service */ "./src/app/constants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_auth_action__WEBPACK_IMPORTED_MODULE_1__["SetUserAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _auth_action__WEBPACK_IMPORTED_MODULE_1__["SetUserAction"]]),
        __metadata("design:returntype", void 0)
    ], AuthStateReducer.prototype, "setUser", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_auth_action__WEBPACK_IMPORTED_MODULE_1__["ResetAuthToDefaultState"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthStateReducer.prototype, "resetAuthToDefaultState", null);
    AuthStateReducer = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'loggeduser',
            defaults: initialState
        })
        //same as reducer
        ,
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"]])
    ], AuthStateReducer);
    return AuthStateReducer;
}());



/***/ }),

/***/ "./src/app/backend-dev/backend-dev.component.html":
/*!********************************************************!*\
  !*** ./src/app/backend-dev/backend-dev.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-end\" *ngIf=\"showBackendRootUrlButton\">\r\n  <input type=\"text\" [(ngModel)]=\"backend_root_url\" name=\"x\">\r\n  <button class=\"btn btn-theme-primary mx-1\"\r\n          (click)=\"changeUrl()\">Change Backend root url</button>\r\n</div>\r\n\r\n<!--<ng-template #Primarytemplate>-->\r\n  <!--<div class=\"primary-modal\">-->\r\n    <!--<div class=\"top-dec\"></div>-->\r\n    <!--<div class=\"modal-header\">-->\r\n      <!--<h4 class=\"modal-title mb-2\"> Change Backend Root</h4>-->\r\n      <!--<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">-->\r\n        <!--<span aria-hidden=\"true\">&times;</span>-->\r\n      <!--</button>-->\r\n\r\n    <!--</div>-->\r\n\r\n    <!--<div class=\"modal-body\">-->\r\n      <!--<form class=\"row\" #password_form=\"ngForm\">-->\r\n\r\n        <!--<div class=\"col-md-12\">-->\r\n          <!--<label for=\"\" class=\"mr-1\">Url</label>-->\r\n          <!--<input type=\"text\" [(ngModel)]=\"backend_root_url\" name=\"x\">-->\r\n        <!--</div>-->\r\n\r\n        <!--<div class=\"col-md-12\">-->\r\n         <!--<button class=\"btn btn-theme-primary\" (click)=\"changeUrl()\">Save</button>-->\r\n        <!--</div>-->\r\n      <!--</form>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</ng-template>-->\r\n"

/***/ }),

/***/ "./src/app/backend-dev/backend-dev.component.scss":
/*!********************************************************!*\
  !*** ./src/app/backend-dev/backend-dev.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n  .primary-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #00abd3; }\n  .primary-modal .modal-header {\n    color: #474747; }\n  .primary-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n  .primary-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n  .primary-modal .modal-body .fa {\n  font-size: 48px;\n  color: #00abd3;\n  padding: 10px 0px; }\n"

/***/ }),

/***/ "./src/app/backend-dev/backend-dev.component.ts":
/*!******************************************************!*\
  !*** ./src/app/backend-dev/backend-dev.component.ts ***!
  \******************************************************/
/*! exports provided: BackendDevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendDevComponent", function() { return BackendDevComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ngxs/app.action */ "./src/app/ngxs/app.action.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BackendDevComponent = /** @class */ (function () {
    function BackendDevComponent(
    // private modalService: BsModalService,
    utilityService, activatedRoute, router, store) {
        this.utilityService = utilityService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.store = store;
        this.showBackendRootUrlButton = false;
    }
    BackendDevComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (data) {
            if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["RoutesRecognized"]) {
                _this.showBackendRootUrlButton = !!data.state.root.firstChild.queryParamMap.get('burl');
                _this.store.dispatch([
                    new _ngxs_app_action__WEBPACK_IMPORTED_MODULE_2__["SetShowBackendURlRoot"]({ showBackendURlRoot: _this.showBackendRootUrlButton })
                ]);
            }
        });
        this.app$.subscribe(function (value) {
            _this.showBackendRootUrlButton = value.showBackendUrlRootButton;
            _this.backend_root_url = value.backendUrlRoot;
        });
    };
    BackendDevComponent.prototype.openChangePasswordModal = function (template) {
        // this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    };
    BackendDevComponent.prototype.changeUrl = function () {
        var _this = this;
        this.store.dispatch([
            new _ngxs_app_action__WEBPACK_IMPORTED_MODULE_2__["SetBackendURlRoot"]({ url: this.backend_root_url })
        ])
            .subscribe(function (value) {
            _this.utilityService.showSuccessToaster("Backend root url changed");
            // this.modalRef.hide();
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BackendDevComponent.prototype, "app$", void 0);
    BackendDevComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-backend-dev',
            template: __webpack_require__(/*! ./backend-dev.component.html */ "./src/app/backend-dev/backend-dev.component.html"),
            styles: [__webpack_require__(/*! ./backend-dev.component.scss */ "./src/app/backend-dev/backend-dev.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], BackendDevComponent);
    return BackendDevComponent;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server.service */ "./src/app/server.service.ts");
/* harmony import */ var _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/ngxs/chat.action */ "./src/app/chat/ngxs/chat.action.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility.service */ "./src/app/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatService = /** @class */ (function () {
    function ChatService(store, serverService, utilityService, constantsService) {
        this.store = store;
        this.serverService = serverService;
        this.utilityService = utilityService;
        this.constantsService = constantsService;
    }
    ChatService.prototype.sendHumanMessageToBotServer = function (botDetails, consumerDetails, messageByHuman, frameEnabled) {
        var _this = this;
        var url = this.constantsService.getStartNewChatLoginUrl();
        var body /*: ISendApiRequestPayload */ = {
            'consumer': consumerDetails,
            'type': 'human',
            'msg': messageByHuman || 'hi',
            'platform': 'web'
        };
        var headerData = {
            'bot-access-token': botDetails.bot_access_token,
            'auth-token': null,
            'user-access-token': null
        };
        this.store.dispatch(new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_3__["ToggleChatWindow"]({ open: true }));
        if (frameEnabled)
            this.navigate(frameEnabled);
        return this.serverService.makePostReq({ url: url, body: body, headerData: headerData, dontShowProgressBar: true })
            .do(function (response) {
            /*recieved chat reply from bot*/
            var generatedMessages = response.generated_msg;
            var serializedMessages = _this.utilityService.serializeGeneratedMessagesToPreviewMessages(generatedMessages);
            // let serializedMessages: IMessageData[] = generatedMessages.map((message: IGeneratedMessageItem) => {
            //   /*check if media is the key
            //   * if yes, return {message_type:media[0].type, ...message}
            //   * else return it as tet
            //   * */
            //
            //   // this.utilityService.getActiveVersionInBot()
            //
            //
            //   if(Object.keys(message)[0] === "media"){
            //     return {
            //       messageMediatype:message.media[0].type,//
            //       ...message,
            //       time: this.utilityService.getCurrentTimeInHHMM(),
            //       text:EBotMessageMediaType.image,//this is for preview of last message in chat room list
            //       sourceType: 'bot'
            //     }
            //   }else if(Object.keys(message)[0] === "quick_reply"){
            //
            //     return {
            //       messageMediatype:EBotMessageMediaType.quickReply,//
            //       ...message,
            //       time: this.utilityService.getCurrentTimeInHHMM(),
            //       text:(<any>message).quick_reply.text || EBotMessageMediaType.quickReply,//this is for preview of last message in chat room list
            //       sourceType: 'bot'
            //     }
            //   }
            //
            //   /*if message type = text*/
            //   return {
            //     text: message.text,
            //     time: this.utilityService.getCurrentTimeInHHMM(),
            //     sourceType: 'bot',,
            //     messageMediatype:EBotMessageMediaType.text
            //   };
            // });
            _this.store.dispatch([
                new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_3__["AddMessagesToRoomByRoomId"]({
                    id: response.room.id,
                    consumer_id: response.room.consumer_id,
                    messageList: serializedMessages,
                }),
                new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_3__["ChangeBotIsThinkingDisplayByRoomId"]({ roomId: response.room.id, shouldShowBotIsThinking: false })
                // new AttachRoomIdToRoomByUId({room_id: response.room.id, uid})
            ]);
            _this.store.dispatch(new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_3__["SetLastTemplateKeyToRoomByRoomId"]({ lastTemplateKey: response.templateKey, room_id: response.room.id }));
            // this.store.dispatch(new SetCurrentRoomID({id: response.room.id}));
            // this.store.dispatch(new SetCurrentBotID({bot_id: response.room.bot_id}));
        });
    };
    ChatService.prototype.navigate = function (frameEnabled) {
        this.store.dispatch(new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_3__["ChangeFrameAction"]({ frameEnabled: frameEnabled }));
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/chat/bot-welcome-panel/bot-welcome.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/chat/bot-welcome-panel/bot-welcome.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"d-flex justify-content-center px-2 flex-wrap align-content-center\" style=\"height: 100%\">\r\n  <h4 class=\"welcome-heading w-100\">{{currentBot.heading|| 'I dont have a heading' }}</h4>\r\n  <p class=\"welcome-title w-100\">{{currentBot.description|slice:0:200}}</p>\r\n  <button class=\"btn-theme-primary cursor-pointer\" (click)=\"startNewChat()\">Start a new chat\r\n  </button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/bot-welcome-panel/bot-welcome.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/chat/bot-welcome-panel/bot-welcome.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-heading {\n  font-size: 20px;\n  line-height: 20px;\n  font-weight: 400;\n  color: #00abd3;\n  font-family: \"Helvetica\", sans-serif; }\n\n.welcome-title {\n  font-size: 11px;\n  line-height: 13px;\n  font-weight: 400;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif; }\n"

/***/ }),

/***/ "./src/app/chat/bot-welcome-panel/bot-welcome.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/chat/bot-welcome-panel/bot-welcome.component.ts ***!
  \*****************************************************************/
/*! exports provided: BotWelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotWelcomeComponent", function() { return BotWelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces/chat-session-state */ "./src/interfaces/chat-session-state.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility.service */ "./src/app/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BotWelcomeComponent = /** @class */ (function () {
    function BotWelcomeComponent(utilityService) {
        this.utilityService = utilityService;
        this.startnewchat$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myEChatFrame = _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__["EChatFrame"];
        this.navigateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BotWelcomeComponent.prototype.ngOnInit = function () {
        // this.chatsessionstate$.subscribe((chatSessionState: IChatSessionState) => {
        //   this.bot_id = chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.id;
        //   if (!this.bot_id) return;
        //   this.botlist$.subscribe((value) => {
        //     this.currentBot = value.allBotList.find(value => value.id === this.bot_id);
        //   });
        // });
    };
    BotWelcomeComponent.prototype.startNewChat = function () {
        this.startnewchat$.emit({
            consumerDetails: { uid: this.utilityService.createRandomUid() },
            bot: this.currentBot
        });
    };
    BotWelcomeComponent.prototype.navigate = function (frame) {
        this.navigateEvent.emit(frame);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], BotWelcomeComponent.prototype, "botlist$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], BotWelcomeComponent.prototype, "chatsessionstate$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BotWelcomeComponent.prototype, "startnewchat$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BotWelcomeComponent.prototype, "currentBot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotWelcomeComponent.prototype, "navigateEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BotWelcomeComponent.prototype, "bot_id", void 0);
    BotWelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bot-welcome',
            template: __webpack_require__(/*! ./bot-welcome.component.html */ "./src/app/chat/bot-welcome-panel/bot-welcome.component.html"),
            styles: [__webpack_require__(/*! ./bot-welcome.component.scss */ "./src/app/chat/bot-welcome-panel/bot-welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])
    ], BotWelcomeComponent);
    return BotWelcomeComponent;
}());



/***/ }),

/***/ "./src/app/chat/carousel/bot-thinking-bubble/bot-thinking-bubble.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/chat/carousel/bot-thinking-bubble/bot-thinking-bubble.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center\">\r\n  <i class=\"fa fa-circle mr-1\" [ngClass]=\"{'text-theme-dark-chat-bubble':randomNumber===1,'text-theme-secondary-chat-bubble':randomNumber!==1}\"></i>\r\n  <i class=\"fa fa-circle mr-1\" [ngClass]=\"{'text-theme-dark-chat-bubble':randomNumber===2,'text-theme-secondary-chat-bubble':randomNumber!==2}\"></i>\r\n  <i class=\"fa fa-circle mr-1\" [ngClass]=\"{'text-theme-dark-chat-bubble':randomNumber===3,'text-theme-secondary-chat-bubble':randomNumber!==3}\"></i>\r\n  <span style=\"color: #9e9e9e;\">Bot is typing</span>\r\n</div>\r\n<!---->\r\n"

/***/ }),

/***/ "./src/app/chat/carousel/bot-thinking-bubble/bot-thinking-bubble.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/chat/carousel/bot-thinking-bubble/bot-thinking-bubble.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa {\n  margin-right: 2px;\n  font-size: 10px; }\n\n.text-theme-dark-chat-bubble {\n  color: #474747; }\n\n.text-theme-secondary-chat-bubble {\n  color: #9e9e9e; }\n"

/***/ }),

/***/ "./src/app/chat/carousel/bot-thinking-bubble/bot-thinking-bubble.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/chat/carousel/bot-thinking-bubble/bot-thinking-bubble.component.ts ***!
  \************************************************************************************/
/*! exports provided: BotThinkingBubbleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotThinkingBubbleComponent", function() { return BotThinkingBubbleComponent; });
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

var BotThinkingBubbleComponent = /** @class */ (function () {
    function BotThinkingBubbleComponent() {
        this.randomNumber = 1;
    }
    BotThinkingBubbleComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.randomNumber = _this.randomNumber > 3 ? 1 : _this.randomNumber + 1;
        }, 400);
    };
    BotThinkingBubbleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bot-thinking-bubble',
            template: __webpack_require__(/*! ./bot-thinking-bubble.component.html */ "./src/app/chat/carousel/bot-thinking-bubble/bot-thinking-bubble.component.html"),
            styles: [__webpack_require__(/*! ./bot-thinking-bubble.component.scss */ "./src/app/chat/carousel/bot-thinking-bubble/bot-thinking-bubble.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BotThinkingBubbleComponent);
    return BotThinkingBubbleComponent;
}());



/***/ }),

/***/ "./src/app/chat/carousel/card-carousel/card-carousel.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/chat/carousel/card-carousel/card-carousel.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!--SOURCE: https://bootsnipp.com/snippets/zDQkr-->\r\n  <div class=\"row\">\r\n    <!--<div class=\"MultiCarousel\" data-items=\"1,3,5,6\" data-slide=\"1\" id=\"MultiCarousel\"  data-interval=\"1000\">-->\r\n    <div class=\"MultiCarousel\" data-items=\"2,2,2,2\" data-slide=\"1\" id=\"MultiCarousel\" data-interval=\"1000\">\r\n      <!--TODO: ngclass below is a hack; improve it-->\r\n      <div class=\"MultiCarousel-inner\" [ngClass]=\"{'float-right':isParentSessionsModal && (totalItemsInCarasol<carasolItemShownInOneScreen)}\">\r\n        <!--carasol item starts-->\r\n        <div class=\"item p-1\" style=\"border-radius: 2px\" *ngFor=\"let mediaItem of _messageData.media\">\r\n          <div class=\"card m-0 shadow-theme \">\r\n            <!--<div class=\"card-header bg-white p-1\" style=\"color: #474747\">Featured</div>-->\r\n            <div [ngStyle]=\"{'background-image': 'url('+ mediaItem.url+')'}\"\r\n                 class=\"card-img-top\"\r\n                 style=\"height: 150px;\">\r\n              <!--<img class=\"img-fluid\"-->\r\n              <!--[src]=\"mediaItem.url\"-->\r\n              <!--alt=\"Card image cap\">-->\r\n            </div>\r\n            <!--<div class=\"card-body\"></div>-->\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item p-2 limit-three-lines cursor-pointer\">{{mediaItem.title|| \"No_Title\"}}</li>\r\n              <li (click)=\"sendMessageToBotServer(mediaItem)\" class=\"list-group-item p-2 cursor-pointer\">\r\n                {{mediaItem.buttons && mediaItem.buttons[0].title || \"No_Title\"}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!--carasol item starts-->\r\n\r\n      </div>\r\n      <button *ngIf=\"totalItemsInCarasol>carasolItemShownInOneScreen\" class=\"btn btn-info leftLst\" #leftLst><i\r\n        class=\"fa p-1 fa-angle-left\"></i></button>\r\n      <button *ngIf=\"totalItemsInCarasol>carasolItemShownInOneScreen\" class=\"btn btn-info rightLst\" #rightLst><i\r\n        class=\"fa p-1 fa-angle-right\"></i></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/chat/carousel/card-carousel/card-carousel.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/chat/carousel/card-carousel/card-carousel.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".MultiCarousel {\n  float: left;\n  overflow: hidden;\n  padding: 15px;\n  width: 100%;\n  position: relative; }\n\n.MultiCarousel .MultiCarousel-inner {\n  transition: 1s ease all;\n  float: left; }\n\n.MultiCarousel .MultiCarousel-inner .item {\n  float: left; }\n\n.MultiCarousel .MultiCarousel-inner .item > div {\n  text-align: center;\n  margin: 5px;\n  background: #f1f1f1;\n  color: #666; }\n\n.MultiCarousel .leftLst, .MultiCarousel .rightLst {\n  position: absolute;\n  border-radius: 50%;\n  top: calc(50% - 20px);\n  background-color: #00abd3;\n  border: none; }\n\n.MultiCarousel .leftLst {\n  left: 0; }\n\n.MultiCarousel .rightLst {\n  right: 0; }\n\n.MultiCarousel .leftLst.over, .MultiCarousel .rightLst.over {\n  pointer-events: none;\n  background: #ccc; }\n\n.card-img-top {\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.limit-three-lines {\n  box-sizing: content-box;\n  overflow: hidden;\n  height: 60px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/chat/carousel/card-carousel/card-carousel.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/chat/carousel/card-carousel/card-carousel.component.ts ***!
  \************************************************************************/
/*! exports provided: CardCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCarouselComponent", function() { return CardCarouselComponent; });
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


var CardCarouselComponent = /** @class */ (function () {
    function CardCarouselComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.isFullScreenPreview = false;
        this.isParentSessionsModal = false;
        this.itemCountIsNotCausingOverflow = false;
        this.sendMessageToBotServer$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.carasolItemShownInOneScreen = 2;
    }
    Object.defineProperty(CardCarouselComponent.prototype, "messageData", {
        set: function (messageDataValue) {
            this._messageData = messageDataValue;
        },
        enumerable: true,
        configurable: true
    });
    CardCarouselComponent.prototype.ngOnInit = function () {
        // this.isFullScreenPreview = this.activatedRoute.snapshot.data.isFullScreenPreview;
        this.carasolItemShownInOneScreen = this.isFullScreenPreview ? 4 : 2;
        this.totalItemsInCarasol = this._messageData.media.length;
    };
    CardCarouselComponent.prototype.sendMessageToBotServer = function (mediaItem) {
        try {
            this.sendMessageToBotServer$.emit(mediaItem.buttons[0].payload || 'NO_PAYLOAD');
        }
        catch (e) {
            this.sendMessageToBotServer$.emit('NO_PAYLOAD');
            console.log(e);
        }
    };
    CardCarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(document).ready(function () {
            var CardCarouselComponent_this = _this;
            var itemsMainDiv = ('.MultiCarousel');
            var itemsDiv = ('.MultiCarousel-inner');
            var itemWidth = '';
            // $('.leftLst, .rightLst').click(function () {
            var sideControlsClickHandler = function ($event) {
                var condition = $(this).hasClass('leftLst');
                if (condition)
                    click(0, this);
                else
                    click(1, this);
                $event.stopPropagation();
            };
            _this.rightLstElementRef && $(_this.rightLstElementRef.nativeElement).click(sideControlsClickHandler);
            _this.leftLstElementRef && $(_this.leftLstElementRef.nativeElement).click(sideControlsClickHandler);
            ResCarouselSize();
            $(window).resize(function () {
                ResCarouselSize();
            });
            //this function define the size of the items
            function ResCarouselSize() {
                var incno = 0;
                var dataItems = ('data-items');
                var itemClass = ('.item');
                var id = 0;
                var btnParentSb = '';
                var itemsSplit = '';
                var sampwidth = $(itemsMainDiv).width();
                var bodyWidth = $('body').width();
                $(itemsDiv).each(function () {
                    id = id + 1;
                    var itemNumbers = $(this).find(itemClass).length;
                    btnParentSb = $(this).parent().attr(dataItems);
                    itemsSplit = btnParentSb.split(',');
                    $(this).parent().attr('id', 'MultiCarousel' + id);
                    if (bodyWidth >= 1200) {
                        // incno = this.carasolItemShownInOneScreen;//itemsSplit[3];
                        itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
                    }
                    else if (bodyWidth >= 992) {
                        incno = itemsSplit[2];
                        itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
                    }
                    else if (bodyWidth >= 768) {
                        incno = itemsSplit[1];
                        itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
                    }
                    else {
                        incno = itemsSplit[0];
                        itemWidth = sampwidth / CardCarouselComponent_this.carasolItemShownInOneScreen;
                    }
                    $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
                    $(this).find(itemClass).each(function () {
                        $(this).outerWidth(itemWidth);
                    });
                    $('.leftLst').addClass('over');
                    $('.rightLst').removeClass('over');
                });
            }
            //this function used to move the items
            function ResCarousel(e, el, s) {
                var leftBtn = ('.leftLst');
                var rightBtn = ('.rightLst');
                var translateXval = '';
                var divStyle = $(el + ' ' + itemsDiv).css('transform');
                var values = divStyle.match(/-?[\d\.]+/g);
                var xds = Math.abs(values[4]);
                if (e == 0) {
                    translateXval = parseInt(xds) - parseInt(itemWidth * s);
                    $(el + ' ' + rightBtn).removeClass('over');
                    if (translateXval <= itemWidth / 2) {
                        translateXval = 0;
                        $(el + ' ' + leftBtn).addClass('over');
                    }
                }
                else if (e == 1) {
                    var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                    translateXval = parseInt(xds) + parseInt(itemWidth * s);
                    $(el + ' ' + leftBtn).removeClass('over');
                    if (translateXval >= itemsCondition - itemWidth / 2) {
                        translateXval = itemsCondition;
                        $(el + ' ' + rightBtn).addClass('over');
                    }
                }
                $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
            }
            //It is used to get some elements from btn
            function click(ell, ee) {
                var Parent = '#' + $(ee).parent().attr('id');
                var slide = $(Parent).attr('data-slide');
                ResCarousel(ell, Parent, slide);
            }
        });
    };
    CardCarouselComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardCarouselComponent.prototype, "isFullScreenPreview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardCarouselComponent.prototype, "isParentSessionsModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CardCarouselComponent.prototype, "messageData", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardCarouselComponent.prototype, "sendMessageToBotServer$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('leftLst'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardCarouselComponent.prototype, "leftLstElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rightLst'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardCarouselComponent.prototype, "rightLstElementRef", void 0);
    CardCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-carousel',
            template: __webpack_require__(/*! ./card-carousel.component.html */ "./src/app/chat/carousel/card-carousel/card-carousel.component.html"),
            styles: [__webpack_require__(/*! ./card-carousel.component.scss */ "./src/app/chat/carousel/card-carousel/card-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CardCarouselComponent);
    return CardCarouselComponent;
}());



/***/ }),

/***/ "./src/app/chat/carousel/quick-reply/quick-reply.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/chat/carousel/quick-reply/quick-reply.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"row mx-0 d-flex justify-content-start flex-shrink-0 flex-grow-0 flex-wrap\"\r\n  [ngClass]=\"{'w-75':isFullScreenPreview, 'flex-row-reverse':isParentSessionsModal}\">\r\n  <!--<div class=\"flex-grow-0 flex-shrink-0\" style=\"flex-basis: 40px\"></div>-->\r\n  <div class=\"col-10 bg-message-bot p-2\" [ngClass]=\"{'text-right':isParentSessionsModal}\">\r\n    <p class=\"mb-1\" style=\"flex-basis: 100%;\" *ngIf=\"messageData.text!==myEBotMessageMediaType.quickReply\">\r\n      {{messageData.text||messageData.quick_reply.text}}\r\n    </p>\r\n    <!--TODO: messageData.text is for chat message (refactor...its not required) and messageData.quick_reply.text session...improve this-->\r\n    <button *ngFor=\"let item of messageData.quick_reply.quick_replies\"\r\n            (click)=\"sendMessageToBotServer$.emit(item.payload)\"\r\n            class=\"btn btn-theme-secondary-outline mr-2 mb-1\">\r\n      {{item.title}}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!---->\r\n"

/***/ }),

/***/ "./src/app/chat/carousel/quick-reply/quick-reply.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/chat/carousel/quick-reply/quick-reply.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/carousel/quick-reply/quick-reply.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/chat/carousel/quick-reply/quick-reply.component.ts ***!
  \********************************************************************/
/*! exports provided: QuickReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickReplyComponent", function() { return QuickReplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../interfaces/chat-session-state */ "./src/interfaces/chat-session-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuickReplyComponent = /** @class */ (function () {
    function QuickReplyComponent() {
        this.isFullScreenPreview = false;
        this.isParentSessionsModal = false;
        this.myEBotMessageMediaType = _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_1__["EBotMessageMediaType"];
        this.sendMessageToBotServer$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.carasolItemShownInOneScreen = 2;
    }
    QuickReplyComponent.prototype.ngOnInit = function () {
        console.log(this.messageData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuickReplyComponent.prototype, "isFullScreenPreview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuickReplyComponent.prototype, "messageData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuickReplyComponent.prototype, "isParentSessionsModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuickReplyComponent.prototype, "sendMessageToBotServer$", void 0);
    QuickReplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quick-reply',
            template: __webpack_require__(/*! ./quick-reply.component.html */ "./src/app/chat/carousel/quick-reply/quick-reply.component.html"),
            styles: [__webpack_require__(/*! ./quick-reply.component.scss */ "./src/app/chat/carousel/quick-reply/quick-reply.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuickReplyComponent);
    return QuickReplyComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat-wrapper.component.html":
/*!**************************************************!*\
  !*** ./src/app/chat/chat-wrapper.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--corner chat box started-->\r\n<div *ngIf=\"!isFullScreenPreview && currentBot\">\r\n  <div class=\"chat-grid text-center\" *ngIf=\"(windowOpen && (loggeduser$|async).user)\">\r\n    <div class=\"header d-flex align-items-center px-3 position-relative\">\r\n      <i class=\"fa fa-arrow-left cursor-pointer\" (click)=\"navigate(myEChatFrame.CHAT_LIST)\"\r\n         [hidden]=\"frameEnabled===myEChatFrame.CHAT_LIST\"></i>\r\n      <span class=\"center-absolute\">{{chatWindowTitle}}</span>\r\n      <a class=\"ml-auto\" [routerLink]=\"['/preview']\"\r\n         [queryParams]=\"{bot_unique_name:currentBot.bot_unique_name,enterprise_unique_name:enterprise_unique_name}\"\r\n         target=\"_blank\"><i\r\n        class=\"fa fa-external-link\"></i></a>\r\n\r\n      <div class=\"btn-group p-2\" #dropdown=\"bs-dropdown\" [autoClose]=\"false\" dropdown (clickOutside)=\"dropdown.hide()\">\r\n        <div dropdownToggle class=\"user cursor-pointer\"><i class=\"fa fa-user\"></i></div>\r\n\r\n        <form *dropdownMenu class=\"dropdown-menu dropdown-menu-left p-3\" role=\"menu\" #form=\"ngForm\"\r\n              (ngSubmit)=\"saveConsumerDetails(form.value)\"\r\n              style=\"width: 240px\">\r\n          <p class=\"heading mb-2\">Edit Customer</p>\r\n          <div class=\"form-group\">\r\n            <label>UserName</label>\r\n            <input type=\"text\" required email class=\"form-control\" [ngModel]=\"customConsumerDetails?.username\"\r\n                   name=\"username\" aria-describedby=\"emailHelp\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Phone</label>\r\n            <input type=\"text\" required email class=\"form-control\" [ngModel]=\"customConsumerDetails?.phone\" name=\"phone\"\r\n                   aria-describedby=\"emailHelp\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"email\" required email class=\"form-control\" [ngModel]=\"customConsumerDetails?.email\"\r\n                   name=\"email\" aria-describedby=\"emailHelp\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Facebook ID</label>\r\n            <input type=\"text\" required email class=\"form-control\" [ngModel]=\"customConsumerDetails?.facebook_id\"\r\n                   name=\"facebook_id\" aria-describedby=\"emailHelp\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>UID</label>\r\n            <input type=\"text\" required email class=\"form-control\" [ngModel]=\"customConsumerDetails?.uid\" name=\"uid\"\r\n                   aria-describedby=\"emailHelp\">\r\n          </div>\r\n          <button type=\"submit\" class=\"btn-block btn-theme-primary my-3\" (click)=\"dropdown.hide()\">Save Changes</button>\r\n        </form>\r\n      </div>\r\n\r\n      <i class=\"fa fa-minus cursor-pointer\" (click)=\"closeChatWindow()\"></i>\r\n    </div>\r\n    <div class=\"body p-0 border-left border-right\"\r\n         [ngClass]=\"{'make-body-occupy-footer':frameEnabled!==myEChatFrame.CHAT_BOX}\">\r\n      <!--<p>{{frameEnabled}}</p>-->\r\n      <app-bot-welcome\r\n        [currentBot]=\"currentBot\"\r\n        (startnewchat$)=\"startNewChat($event)\" [bot_id]=\"welcomeScreenBotId\"\r\n        *ngIf=\"frameEnabled === myEChatFrame.WELCOME_BOX\"></app-bot-welcome>\r\n      <app-chat-list class=\"mt-4\"\r\n                     [currentBot]=\"currentBot\"\r\n                     *ngIf=\"frameEnabled===myEChatFrame.CHAT_LIST\"\r\n                     (createCustomRoom$)=\"createCustomRoom()\"\r\n                     (createNewRoom$)=\"startNewChat($event)\"\r\n      ></app-chat-list>\r\n      <app-chat-window *ngIf=\"frameEnabled===myEChatFrame.CHAT_BOX && this.messageData\"\r\n                       [selectedAvatar]=\"selectedAvatar\"\r\n                       [room]=\"currentRoom\"\r\n                       [showBotIsThinking]=\"showBotIsThinking\"\r\n                       (sendMessageByHuman$)=\"sendMessageByHuman($event)\"\r\n                       [messageDataArray]=\"messageData\"></app-chat-window>\r\n    </div>\r\n\r\n    <!--&lt;!&ndash;text input starts&ndash;&gt;-->\r\n    <!--<div class=\"footer px-3 d-flex align-items-center justify-content-between text-muted\"-->\r\n    <!--*ngIf=\"frameEnabled===myEChatFrame.CHAT_BOX\">-->\r\n    <!--<input class=\"px-2\" placeholder=\"say something...\" type=\"text\" [(ngModel)]=\"messageByHuman\" (keyup.enter)=\"sendMessageByHuman(messageByHuman)\">-->\r\n    <!--<span class=\"icon\"><i class=\"fa fa-send cursor-pointer\" (click)=\"sendMessageByHuman(messageByHuman)\"></i></span>-->\r\n    <!--</div>-->\r\n    <!--&lt;!&ndash;text input ends&ndash;&gt;-->\r\n  </div>\r\n\r\n</div>\r\n<!--corner chat box ends-->\r\n\r\n<!--tool tip starts-->\r\n<div class=\"d-flex justify-content-end cursor-pointer float-on-hover-animation\" (click)=\"toggleChatWindow()\"\r\n     style=\"height: 45px; width: 60px\"\r\n     *ngIf=\"!windowOpen && currentBot\">\r\n  <div class=\"speech-bubble\">\r\n    <div class=\"stick-wrapper\">\r\n      <div class=\"stick\"></div>\r\n      <div class=\"stick\"></div>\r\n      <div class=\"stick\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--tool tip ends-->\r\n\r\n<!--===============FULL SCREEN BELOW===================-->\r\n<div *ngIf=\"isFullScreenPreview\" class=\"grid-chat-preview-full-screen\">\r\n  <div class=\"header1 bg-theme-primary px-3 d-flex align-items-center\">\r\n    <img class=\"logo-md mr-2 rounded-circle\"\r\n         src=\"{{enterprise_logo||'https://hm.imimg.com/imhome_gifs/indiamart-og1.jpg'}}\" alt=\"\"\r\n         style=\"border-radius: 50%;\">\r\n    <div class=\"d-flex flex-column text-white\">\r\n      <div>{{user_first_name}}</div>\r\n      <div class=\"font-11\">{{user_email}}</div>\r\n    </div>\r\n    <div class=\"btn-group p-2 ml-auto\" #dropdown=\"bs-dropdown\" [autoClose]=\"false\" dropdown\r\n         (clickOutside)=\"dropdown.hide()\">\r\n      <div dropdownToggle class=\"user cursor-pointer text-white\"><i class=\"fa fa-user\"></i></div>\r\n\r\n      <form *dropdownMenu class=\"dropdown-menu dropdown-menu-left p-3\" role=\"menu\" #form=\"ngForm\"\r\n            (ngSubmit)=\"saveConsumerDetails(form.value)\"\r\n            style=\"width: 240px\">\r\n        <p class=\"heading mb-2\">Edit Customer</p>\r\n        <div class=\"form-group\">\r\n          <label>UserName</label>\r\n          <input type=\"text\" required email class=\"form-control\" [ngModel]=\"customConsumerDetails?.username\"\r\n                 name=\"username\" aria-describedby=\"emailHelp\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Phone</label>\r\n          <input type=\"text\" required email class=\"form-control\" [ngModel]=\"customConsumerDetails?.phone\" name=\"phone\"\r\n                 aria-describedby=\"emailHelp\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Email</label>\r\n          <input type=\"email\" required email class=\"form-control\" [ngModel]=\"customConsumerDetails?.email\" name=\"email\"\r\n                 aria-describedby=\"emailHelp\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Facebook ID</label>\r\n          <input type=\"text\" required email class=\"form-control\" [ngModel]=\"customConsumerDetails?.facebook_id\"\r\n                 name=\"facebook_id\" aria-describedby=\"emailHelp\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>UID</label>\r\n          <input type=\"text\" required email class=\"form-control\" [ngModel]=\"customConsumerDetails?.uid\" name=\"uid\"\r\n                 aria-describedby=\"emailHelp\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn-block btn-theme-primary my-3\" (click)=\"dropdown.hide()\">Save Changes</button>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"header2 px-3 bg-theme-primary d-flex align-items-center\">\r\n    <!--<img class=\"logo-md\" src=\"https://image.flaticon.com/icons/svg/17/17004.svg\" alt=\"\">-->\r\n    <img *ngIf=\"currentBot\" class=\"logo-md mr-2 rounded-circle\"\r\n         [src]=\"currentBot.logo||'https://image.flaticon.com/icons/svg/17/17004.svg'\">\r\n    <div *ngIf=\"currentBot\" class=\"d-flex flex-column text-white\">\r\n      <div>{{currentBot.name}}</div>\r\n      <!--<div class=\"font-11\">{{currentBot.description}}</div>-->\r\n    </div>\r\n    <!---->\r\n    <!--<div class=\"room-details ml-auto\">-->\r\n    <!--<div *ngIf=\"currentRoom\" [style.visibility]=\"currentRoom.id?'visible':'hidden'\"-->\r\n         <!--class=\"d-flex flex-column align-items-end ml-auto mr-4 text-white\">-->\r\n      <!--<div>Room ID:</div>-->\r\n      <!--<div class=\"font-11\">{{currentRoom.id}}</div>-->\r\n    <!--</div>-->\r\n    <div class=\"ml-auto\"></div>\r\n    <div *ngIf=\"currentRoom && currentRoom.lastTemplateKey\" class=\"d-flex mr-3 flex-column align-items-end text-white\">\r\n      <div>Last template triggered:</div>\r\n      <div class=\"font-11\">{{currentRoom.lastTemplateKey}}</div>\r\n    </div>\r\n    <div *ngIf=\"currentRoom && currentRoom.uid\" class=\"d-flex  flex-column align-items-end text-white\">\r\n      <div>Room UID:</div>\r\n      <div class=\"font-11\">{{currentRoom.uid}}</div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"chat-rooms\">\r\n    <app-chat-list class=\"mt-4\"\r\n                   (createCustomRoom$)=\"createCustomRoom()\"\r\n                   (createNewRoom$)=\"startNewChat($event)\"></app-chat-list>\r\n  </div>\r\n  <div class=\"chat\">\r\n    <app-chat-window\r\n      [selectedAvatar]=\"selectedAvatar\"\r\n      [showBotIsThinking]=\"showBotIsThinking\"\r\n      [room]=\"currentRoom\"\r\n      (sendMessageByHuman$)=\"sendMessageByHuman($event)\"\r\n      [messageDataArray]=\"messageData\">\r\n    </app-chat-window>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!---->\r\n"

/***/ }),

/***/ "./src/app/chat/chat-wrapper.component.scss":
/*!**************************************************!*\
  !*** ./src/app/chat/chat-wrapper.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header {\n  background-color: #00abd3;\n  flex-shrink: 0;\n  color: white; }\n\n.card-body {\n  overflow-y: hidden; }\n\n.card-footer {\n  height: 45px;\n  border-top: 1px solid #00abd3;\n  position: relative; }\n\n.card-footer input {\n    height: 80%;\n    width: 100%;\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    border: none;\n    border-color: inherit;\n    box-shadow: none;\n    outline: none; }\n\n.card-footer .icon {\n    color: #00abd3; }\n\n/*NEW CSS BELOW*/\n\n.chat-grid {\n  height: 475px;\n  width: 376px;\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n      -ms-grid-rows: 56px 1fr;\n      grid-template-rows: 56px 1fr;\n      grid-template-areas: 'h'\r 'b'; }\n\n.chat-grid .header {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: h;\n    background-color: #00abd3;\n    flex-shrink: 0;\n    color: white; }\n\n.chat-grid .header .user {\n      height: 32px;\n      width: 32px;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n\n.chat-grid .header .fa-times {\n      font-size: 20px; }\n\n.chat-grid .header .fa {\n      color: white; }\n\n.chat-grid .body {\n    -ms-grid-row: 2;\n    -ms-grid-column: 1;\n    grid-area: b;\n    background-color: white;\n    overflow-y: hidden; }\n\n.dropdown-menu-left {\n  /*TODO: Find a better way to do this*/\n  left: -200px !important; }\n\nform {\n  border-radius: 2px; }\n\nform label {\n    font-size: 11px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    margin: 0; }\n\nform .form-control {\n    border: none;\n    border-color: inherit;\n    box-shadow: none;\n    outline: none;\n    border-bottom: 1px solid #e0e0e0;\n    border-radius: 0;\n    font-size: 11px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif; }\n\n/*FULL SCRENN BELOW*/\n\n.grid-chat-preview-full-screen {\n  height: 100vh;\n  overflow-y: hidden;\n  background-color: white;\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-columns: 1fr 2fr;\n      grid-template-columns: 1fr 2fr;\n      -ms-grid-rows: 60px 1fr;\n      grid-template-rows: 60px 1fr;\n      grid-template-areas: 'h1 h2'\r 'room chat'; }\n\n.grid-chat-preview-full-screen .chat-rooms {\n    -ms-grid-row: 2;\n    -ms-grid-column: 1;\n    grid-area: room; }\n\n.grid-chat-preview-full-screen .header1 {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: h1; }\n\n.grid-chat-preview-full-screen .header2 {\n    -ms-grid-row: 1;\n    -ms-grid-column: 2;\n    grid-area: h2; }\n\n.grid-chat-preview-full-screen .chat {\n    -ms-grid-row: 2;\n    -ms-grid-column: 2;\n    grid-area: chat;\n    overflow-y: hidden; }\n\n.make-body-occupy-footer {\n  padding-bottom: 20px;\n  overflow-y: hidden;\n  grid-row: 2/-1 !important;\n  border-bottom: 9px solid #00abd3; }\n\n.font-11 {\n  font-size: 11px;\n  line-height: 5px;\n  margin-top: 4px; }\n"

/***/ }),

/***/ "./src/app/chat/chat-wrapper.component.ts":
/*!************************************************!*\
  !*** ./src/app/chat/chat-wrapper.component.ts ***!
  \************************************************/
/*! exports provided: ChatWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWrapperComponent", function() { return ChatWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/chat-session-state */ "./src/interfaces/chat-session-state.ts");
/* harmony import */ var _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngxs/chat.action */ "./src/app/chat/ngxs/chat.action.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utility.service */ "./src/app/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChatWrapperComponent = /** @class */ (function () {
    function ChatWrapperComponent(store, serverService, constantsService, chatService, activatedRoute, utilityService, route) {
        this.store = store;
        this.serverService = serverService;
        this.constantsService = constantsService;
        this.chatService = chatService;
        this.activatedRoute = activatedRoute;
        this.utilityService = utilityService;
        this.route = route;
        this.frameEnabled = _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__["EChatFrame"].WELCOME_BOX;
        this.myEChatFrame = _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__["EChatFrame"]; //This is required to use enums in template, we can't use enums direactly in templates
        this.windowOpen = false;
        this.messageData = null;
        this.chatWindowTitle = 'Start Chat';
        this.messageByHuman = '';
        this.enterprise_logo = 'https://hm.imimg.com/imhome_gifs/indiamart-og1.jpg';
        this.showBotIsThinking = false;
    }
    ChatWrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('inside chat-wrapper');
        this.loggeduser$.subscribe(function (loggeduser) {
            try {
                _this.user_first_name = loggeduser.user.first_name || 'Anonymous User';
                _this.user_email = loggeduser.user.email;
            }
            catch (e) {
                _this.user_first_name = 'Anonymous User';
                console.log(e);
            }
        });
        this.isFullScreenPreview = this.activatedRoute.snapshot.data.isFullScreenPreview;
        if (this.isFullScreenPreview) {
            this.activatedRoute.queryParamMap.subscribe(function (queryparam) {
                var welcomeScreenBotIdStr = queryparam.get('preview');
                var enterprise_unique_name = queryparam.get('enterprise_unique_name');
                var bot_unique_name = queryparam.get('bot_unique_name');
                if (!bot_unique_name || !enterprise_unique_name)
                    return;
                _this.enterprise_unique_name = enterprise_unique_name;
                if (enterprise_unique_name && bot_unique_name && bot_unique_name) {
                    _this.serverService.getNSetChatPreviewBot(bot_unique_name, enterprise_unique_name);
                }
            });
        }
        this.route.events.subscribe(function (data) {
            /*This is to access route data from non-subtree component
            * see: https://github.com/angular/angular/issues/11812
            * */
            if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["RoutesRecognized"]) {
                _this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
            }
        });
        this.chatsessionstate$.subscribe(function (chatSessionState) {
            try {
                _this.windowOpen = chatSessionState.opened;
                if (!chatSessionState)
                    return;
                var hasPreviewBotChanged = chatSessionState.currentBotDetails &&
                    (!_this.currentBot || _this.currentBot.id !== chatSessionState.currentBotDetails.id);
                var hasPreviewRoomChanged = chatSessionState.currentRoomId &&
                    (!_this.currentRoom || (_this.currentRoom.id !== chatSessionState.currentRoomId));
                _this.showBotIsThinking = _this.currentRoom && _this.currentRoom.showBotIsThinking;
                if (hasPreviewRoomChanged || hasPreviewBotChanged) {
                    _this.serverService.initializeIMIConnect(chatSessionState.currentBotDetails, chatSessionState.currentRoomId);
                }
                _this.currentBot = chatSessionState.currentBotDetails; /**/
                if (_this.currentBot) {
                    _this.enterprise_unique_name = _this.currentBot.enterprise_unique_name;
                    _this.bot_access_token = _this.currentBot.bot_access_token; //this.currentRoom && this.currentRoom.bot_access_token || currentBot.bot_access_token;
                    _this.chatWindowTitle = chatSessionState.currentBotDetails.name;
                }
                if (chatSessionState.currentRoomId) {
                    _this.currentRoom = chatSessionState.rooms.find(function (room) { return room.id === chatSessionState.currentRoomId; });
                    _this.messageData = _this.currentRoom && _this.currentRoom.messageList;
                    _this.selectedAvatar = _this.currentRoom && _this.currentRoom.selectedAvatar;
                }
                _this.frameEnabled = chatSessionState.frameEnabled;
                if (chatSessionState.consumerDetails) {
                    _this.customConsumerDetails = chatSessionState.consumerDetails;
                    _this.current_uid = chatSessionState.consumerDetails.uid;
                }
                else {
                    _this.current_uid = chatSessionState.currentUId;
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    };
    ChatWrapperComponent.prototype.openPreviewTab = function () {
        // window.open(`https://www.google.com`, "_blank");
    };
    ChatWrapperComponent.prototype.createCustomRoom = function () {
        var doesAtleastOneConsumerKeyHasValue = false;
        if (!this.customConsumerDetails) {
            this.utilityService.showErrorToaster('Please set custom Consumer details');
            return;
        }
        for (var key in this.customConsumerDetails) {
            doesAtleastOneConsumerKeyHasValue = doesAtleastOneConsumerKeyHasValue || this.customConsumerDetails[key];
        }
        if (!doesAtleastOneConsumerKeyHasValue) {
            this.utilityService.showErrorToaster('Please set custom Consumer details');
        }
        else {
            this.startNewChat({
                consumerDetails: this.customConsumerDetails,
                bot: this.currentBot,
                isCustomRoom: true
            });
        }
    };
    /*this is called when bot preview button or create a custom room button is clicked*/
    ChatWrapperComponent.prototype.startNewChat = function (startNewChatData) {
        var _this = this;
        startNewChatData.bot = startNewChatData.bot ? startNewChatData.bot : this.currentBot; //todo: is it really required?
        /*========================Creation of chat room using Send API===============================*/
        /*FLOW:
        * 1. Post send api to server with first message=> will get back consent message and room id
        * 2. create a new room using room id
        * */
        this.serverService.startANewChatUsingSendApi(startNewChatData)
            .subscribe(function (value) {
            /*
            *A new room has been created. Now if the room belongs to IMI Connect bot,
            *initialize IMI Connect integration
            * */
            _this.serverService.initializeIMIConnect(startNewChatData.bot, value.room.id);
            /*1. create a new room with room id
             *2. add message to the room: consent message */
            var roomMessages = _this.utilityService.serializeServerValueToChatRoomMessages(value);
            _this.store.dispatch([
                new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["AddNewRoom"]({
                    id: value.room.id,
                    consumer_id: value.room.consumer_id,
                    consumerDetails: startNewChatData.consumerDetails,
                    messageList: roomMessages,
                    bot_access_token: _this.currentBot.bot_access_token,
                    uid: startNewChatData.consumerDetails.uid,
                    selectedAvatar: value.room.selected_avatar,
                    bot_id: _this.currentBot.id,
                    created_at: value.room.created_at,
                    isCustomRoom: startNewChatData.isCustomRoom
                }),
                new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["ChangeFrameAction"]({ frameEnabled: _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__["EChatFrame"].CHAT_BOX }),
                new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["SetCurrentRoomID"]({ id: value.room.id }),
                new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["ChangeBotIsThinkingDisplayByRoomId"]({ roomId: value.room.id, shouldShowBotIsThinking: false }),
            ]);
        });
    };
    ChatWrapperComponent.prototype.logForm = function (consumerFormValue) {
        console.log(consumerFormValue);
        this.store.dispatch([
            new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["SetConsumerDetail"](consumerFormValue)
        ]);
    };
    ChatWrapperComponent.prototype.navigate = function (frame) {
        this.chatService.navigate(frame);
    };
    ChatWrapperComponent.prototype.closeChatWindow = function () {
        this.store.dispatch(new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["ToggleChatWindow"]({ open: false }));
    };
    // sendMessageByHuman(messageByHuman: string) {
    ChatWrapperComponent.prototype.sendMessageByHuman = function (messageData) {
        var _this = this;
        console.log('sending message by human');
        // this.showBotIsThinking = true;
        var messageByHuman = messageData.messageByHuman;
        var room = messageData.room;
        if (messageByHuman.trim() === '')
            return;
        this.store.dispatch([new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["AddMessagesToRoomByRoomId"]({
                id: room.id,
                messageList: [{
                        text: messageByHuman,
                        sourceType: 'human',
                        messageMediatype: _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__["EBotMessageMediaType"].text,
                        time: Date.now() //this.utilityService.getCurrentTimeInHHMM()
                    }],
            }),
            new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["ChangeBotIsThinkingDisplayByRoomId"]({ shouldShowBotIsThinking: true, roomId: messageData.room.id })
        ])
            .subscribe(function () {
            /*
     * Before starting a new chat, we need to check if the currentBot has imiconnect
     * integration is on or not, its not on=> use send API
     * if its on => use IMI connect
     * */
            var shouldStartChatViaImiConnectSDK = false;
            try {
                var botImiConnectIntegrationInfo = _this.currentBot.integrations.fulfillment_provider_details.imiconnect;
                shouldStartChatViaImiConnectSDK = botImiConnectIntegrationInfo &&
                    botImiConnectIntegrationInfo.enabled &&
                    (botImiConnectIntegrationInfo.send_via_connect === "true");
            }
            catch (e) {
                console.log(e);
            }
            /*========================Creation of chat room using IMI CONNECT===============================*/
            if (shouldStartChatViaImiConnectSDK) {
                _this.serverService.sendHumanMessageViaImiConnect(_this.currentRoom, _this.currentBot, messageByHuman);
                return;
            }
            _this.chatService.sendHumanMessageToBotServer({
                bot_access_token: room.bot_access_token,
                id: room.id
            }, messageData.room.consumerDetails, messageByHuman, _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__["EChatFrame"].CHAT_BOX)
                .subscribe(function () {
                _this.showBotIsThinking = false;
            }, function (error) {
                _this.showBotIsThinking = false;
            });
        });
    };
    ChatWrapperComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log(err);
        }
    };
    ChatWrapperComponent.prototype.toggleChatWindow = function () {
        this.store.dispatch([
            new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["ToggleChatWindow"]({ open: true })
        ]);
    };
    ChatWrapperComponent.prototype.saveConsumerDetails = function (value) {
        var _this = this;
        this.store.dispatch([new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["SetConsumerDetail"](value)])
            .subscribe(function () {
            _this.utilityService.showSuccessToaster('Saved');
            _this.createCustomRoom();
            // this.store.dispatch([new ChangeFrameAction({frameEnabled: 1})]);
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ChatWrapperComponent.prototype, "chatsessionstate$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ChatWrapperComponent.prototype, "loggeduser$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ChatWrapperComponent.prototype, "botlist$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ChatWrapperComponent.prototype, "loggeduserenterpriseinfo$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatWrapperComponent.prototype, "myScrollContainer", void 0);
    ChatWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-wrapper',
            template: __webpack_require__(/*! ./chat-wrapper.component.html */ "./src/app/chat/chat-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./chat-wrapper.component.scss */ "./src/app/chat/chat-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"],
            _chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], ChatWrapperComponent);
    return ChatWrapperComponent;
}());



/***/ }),

/***/ "./src/app/chat/ngxs/chat.action.ts":
/*!******************************************!*\
  !*** ./src/app/chat/ngxs/chat.action.ts ***!
  \******************************************/
/*! exports provided: ToggleChatWindow, ChangeFrameAction, ChangeBotIsThinkingDisplayByRoomId, AddNewRoom, AddMessagesToRoomByRoomId, SetLastTemplateKeyToRoomByRoomId, SetCurrentRoomID, SetConsumerDetail, SetCurrentBotDetailsAndResetChatStateIfBotMismatch, SetCurrentUId, ResetChatState, DeleteChatRoomsByBotId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleChatWindow", function() { return ToggleChatWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeFrameAction", function() { return ChangeFrameAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeBotIsThinkingDisplayByRoomId", function() { return ChangeBotIsThinkingDisplayByRoomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewRoom", function() { return AddNewRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMessagesToRoomByRoomId", function() { return AddMessagesToRoomByRoomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLastTemplateKeyToRoomByRoomId", function() { return SetLastTemplateKeyToRoomByRoomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentRoomID", function() { return SetCurrentRoomID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetConsumerDetail", function() { return SetConsumerDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentBotDetailsAndResetChatStateIfBotMismatch", function() { return SetCurrentBotDetailsAndResetChatStateIfBotMismatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentUId", function() { return SetCurrentUId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetChatState", function() { return ResetChatState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteChatRoomsByBotId", function() { return DeleteChatRoomsByBotId; });
var ToggleChatWindow = /** @class */ (function () {
    function ToggleChatWindow(payload) {
        this.payload = payload;
    }
    ToggleChatWindow.type = '[chat-widdow] set toggle';
    return ToggleChatWindow;
}());

var ChangeFrameAction = /** @class */ (function () {
    function ChangeFrameAction(payload) {
        this.payload = payload;
    }
    ChangeFrameAction.type = '[chat-widdow] update frame';
    return ChangeFrameAction;
}());

var ChangeBotIsThinkingDisplayByRoomId = /** @class */ (function () {
    function ChangeBotIsThinkingDisplayByRoomId(payload) {
        this.payload = payload;
    }
    ChangeBotIsThinkingDisplayByRoomId.type = '[chat-widdow] set ShowBotIsThinkingInRoomId';
    return ChangeBotIsThinkingDisplayByRoomId;
}());

var AddNewRoom = /** @class */ (function () {
    function AddNewRoom(payload) {
        this.payload = payload;
    }
    AddNewRoom.type = '[chat-widdow] update AddNewRoom';
    return AddNewRoom;
}());

// export class AddMessagesToRoomByUId {
//   static readonly type = '[chat-widdow] update AddMessagesToRoom';
//   constructor(public payload: IRoomData) {}
// }
var AddMessagesToRoomByRoomId = /** @class */ (function () {
    function AddMessagesToRoomByRoomId(payload) {
        this.payload = payload;
    }
    AddMessagesToRoomByRoomId.type = '[chat-widdow] update AddMessagesToRoomByRoomId';
    return AddMessagesToRoomByRoomId;
}());

// export class AttachRoomIdToRoomByUId {
//   static readonly type = '[chat-widdow] update AttachRoomIdToRoomByUId';
//   constructor(public payload: {room_id:number, uid:string}) {}
// }
// export class SetLastTemplateKeyToRoomByUId {
//   static readonly type = '[chat-widdow] update SetLastTemplateKeyToRoomByUId';
//   constructor(public payload: {lastTemplateKey:string, uid:string}) {}
// }
var SetLastTemplateKeyToRoomByRoomId = /** @class */ (function () {
    function SetLastTemplateKeyToRoomByRoomId(payload) {
        this.payload = payload;
    }
    SetLastTemplateKeyToRoomByRoomId.type = '[chat-widdow] update SetLastTemplateKeyToRoomByRoomId';
    return SetLastTemplateKeyToRoomByRoomId;
}());

var SetCurrentRoomID = /** @class */ (function () {
    function SetCurrentRoomID(payload) {
        this.payload = payload;
    }
    SetCurrentRoomID.type = '[chat-widdow] set SetCurrentRoomID';
    return SetCurrentRoomID;
}());

var SetConsumerDetail = /** @class */ (function () {
    function SetConsumerDetail(payload) {
        this.payload = payload;
    }
    SetConsumerDetail.type = '[chat-widdow] set SetConsumerDetail';
    return SetConsumerDetail;
}());

var SetCurrentBotDetailsAndResetChatStateIfBotMismatch = /** @class */ (function () {
    function SetCurrentBotDetailsAndResetChatStateIfBotMismatch(payload) {
        this.payload = payload;
    }
    SetCurrentBotDetailsAndResetChatStateIfBotMismatch.type = '[chat-widdow] set SetCurrentBotID';
    return SetCurrentBotDetailsAndResetChatStateIfBotMismatch;
}());

var SetCurrentUId = /** @class */ (function () {
    function SetCurrentUId(payload) {
        this.payload = payload;
    }
    SetCurrentUId.type = '[chat-widdow] set SetCurrentConsumerId';
    return SetCurrentUId;
}());

var ResetChatState = /** @class */ (function () {
    function ResetChatState() {
    }
    ResetChatState.type = '[chat-widdow] reset ResetChatState';
    return ResetChatState;
}());

var DeleteChatRoomsByBotId = /** @class */ (function () {
    function DeleteChatRoomsByBotId(payload) {
        this.payload = payload;
    }
    DeleteChatRoomsByBotId.type = '[chat-widdow] delete deleteRoomsByBotId';
    return DeleteChatRoomsByBotId;
}());



/***/ }),

/***/ "./src/app/chat/ngxs/chat.state.ts":
/*!*****************************************!*\
  !*** ./src/app/chat/ngxs/chat.state.ts ***!
  \*****************************************/
/*! exports provided: defaultChatState, ChatSessionStateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultChatState", function() { return defaultChatState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSessionStateReducer", function() { return ChatSessionStateReducer; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _chat_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.action */ "./src/app/chat/ngxs/chat.action.ts");
/* harmony import */ var _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces/chat-session-state */ "./src/interfaces/chat-session-state.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility.service */ "./src/app/utility.service.ts");
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





var defaultChatState = {
    frameEnabled: _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__["EChatFrame"].WELCOME_BOX,
    opened: false,
    currentRoomId: null,
    currentBotDetails: null,
    currentUId: null,
    rooms: null,
    consumerDetails: null
};
var ChatSessionStateReducer = /** @class */ (function () {
    function ChatSessionStateReducer(constantsService, utilityService) {
        this.constantsService = constantsService;
        this.utilityService = utilityService;
    }
    ChatSessionStateReducer.prototype.closeChatWindow = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        setState(__assign({}, state, { opened: payload.open }));
    };
    ChatSessionStateReducer.prototype.showBotIsThinkingInRoomId = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var room = state.rooms.find(function (room) { return room.id === payload.roomId; });
        room.showBotIsThinking = payload.shouldShowBotIsThinking;
        setState(__assign({}, state));
    };
    ChatSessionStateReducer.prototype.setConsumerDetail = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ consumerDetails: payload });
    };
    ChatSessionStateReducer.prototype.changeFrame = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState(__assign({}, state, { frameEnabled: payload.frameEnabled }));
    };
    ChatSessionStateReducer.prototype.setCurrentRoomID = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState(__assign({}, state, { currentRoomId: payload.id }));
    };
    ChatSessionStateReducer.prototype.setCurrentConsumerId = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState(__assign({}, state, { currentUId: payload.uid }));
    };
    ChatSessionStateReducer.prototype.setCurrentBotDetailsAndResetIfBotMismatch = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var isOpened = state.opened;
        var currentBot = getState().currentBotDetails;
        if (payload.bot.id !== (currentBot && currentBot.id)) {
            dispatch([
                new _chat_action__WEBPACK_IMPORTED_MODULE_2__["ResetChatState"]()
            ]).subscribe(function () {
                patchState({ currentBotDetails: payload.bot, opened: isOpened }); //restoring bot opened state
            });
        }
        else {
            patchState({ currentBotDetails: payload.bot });
        }
    };
    ChatSessionStateReducer.prototype.addNewRoom = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var rooms = state.rooms;
        var room = payload;
        if (!state.rooms)
            state.rooms = rooms = [];
        /*first check if room id already */
        var doesRoomAlreadyExist_index;
        doesRoomAlreadyExist_index = rooms.findIndex(function (room) { return room.id === payload.id; });
        if (!doesRoomAlreadyExist_index || doesRoomAlreadyExist_index === -1) {
            state.rooms.push(room);
        }
        else {
            this.utilityService.showErrorToaster("Room with room id " + payload.id + " already exists");
        }
    };
    // @Action(AddMessagesToRoomByUId)
    // addMessagesToRoom({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AddMessagesToRoomByUId) {
    //   let state = getState();
    //   let rooms = state.rooms;
    //   let room_id =payload.id;
    //   let room: IRoomData = (rooms && (rooms.find((room) => room.id === room_id)));
    //
    //   room.messageList = [...room.messageList, ...payload.messageList];
    //   // state.currentBotDetails = {
    //   //   ...state.currentBotDetails,
    //   //   id: payload.bot_id,
    //   //   token: payload.bot_access_token,
    //   // };
    //   setState({...state});
    //
    // }
    ChatSessionStateReducer.prototype.addMessagesToRoomByRoomId = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var rooms = state.rooms;
        var room_id = payload.id;
        var room = (rooms && (rooms.find(function (room) { return room.id === room_id; })));
        if (!room) {
            /*room is not found, this means session is expired. So search by consumer id*/
            var consumer_id_1 = payload.consumer_id;
            room = (rooms && (rooms.find(function (room) { return room.consumer_id === consumer_id_1; })));
            if (room) {
                this.utilityService.showSuccessToaster('Previous session expired. New session created');
                room.id = payload.id;
                dispatch([
                    new _chat_action__WEBPACK_IMPORTED_MODULE_2__["SetCurrentRoomID"]({ id: room.id })
                ]);
                room.messageList.push({ sourceType: 'session_expired', messageMediatype: null, time: null, text: null });
            }
        }
        room.messageList = room.messageList.concat(payload.messageList);
        setState(__assign({}, state));
    };
    // @Action(AttachRoomIdToRoomByUId)
    // attachRoomIdToRoomByUId({patchState, setState, getState, dispatch}: StateContext<IChatSessionState>, {payload}: AttachRoomIdToRoomByUId) {
    //   let state = getState();
    //   let rooms = state.rooms;
    //   let uId =payload.uid;
    //   let room: IRoomData = (rooms && (rooms.find((room) => room.uid === uId)));
    //   room.id = payload.room_id;
    //   setState({...state});
    //
    // }
    ChatSessionStateReducer.prototype.SetLastTemplateKeyToRoomByRoomId = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var rooms = state.rooms;
        var room_id = payload.room_id;
        var room = (rooms && (rooms.find(function (room) { return room.id === room_id; })));
        room.lastTemplateKey = payload.lastTemplateKey;
        setState(__assign({}, state));
    };
    ChatSessionStateReducer.prototype.resetChatState = function (_a) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var state = getState();
        var x = defaultChatState;
        setState(x);
    };
    ChatSessionStateReducer.prototype.deleteRoomsByBotId = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var rooms = state.rooms;
        var botId = payload.id;
        /*
        * As of now there can be only one current bot in the application.
        * The moment a new current bot is selected (via preview), all info of previous current bot is deleted
        * This means if a bot is deleted, and if that bot is also "currentBot", we can just reset the whole state
        * */
        if (botId === state.currentBotDetails.id) {
            dispatch([new _chat_action__WEBPACK_IMPORTED_MODULE_2__["ResetChatState"]()]);
        }
        // rooms && (rooms.forEach((room, index) => {
        //   if (room.id === botId) {
        //     rooms.splice(index, 1);
        //   }
        // }));
        // setState({...state});
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["ToggleChatWindow"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _chat_action__WEBPACK_IMPORTED_MODULE_2__["ToggleChatWindow"]]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "closeChatWindow", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["ChangeBotIsThinkingDisplayByRoomId"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _chat_action__WEBPACK_IMPORTED_MODULE_2__["ChangeBotIsThinkingDisplayByRoomId"]]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "showBotIsThinkingInRoomId", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["SetConsumerDetail"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _chat_action__WEBPACK_IMPORTED_MODULE_2__["SetConsumerDetail"]]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "setConsumerDetail", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["ChangeFrameAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _chat_action__WEBPACK_IMPORTED_MODULE_2__["ChangeFrameAction"]]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "changeFrame", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["SetCurrentRoomID"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _chat_action__WEBPACK_IMPORTED_MODULE_2__["SetCurrentRoomID"]]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "setCurrentRoomID", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["SetCurrentUId"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _chat_action__WEBPACK_IMPORTED_MODULE_2__["SetCurrentUId"]]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "setCurrentConsumerId", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["SetCurrentBotDetailsAndResetChatStateIfBotMismatch"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _chat_action__WEBPACK_IMPORTED_MODULE_2__["SetCurrentBotDetailsAndResetChatStateIfBotMismatch"]]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "setCurrentBotDetailsAndResetIfBotMismatch", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["AddNewRoom"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _chat_action__WEBPACK_IMPORTED_MODULE_2__["AddNewRoom"]]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "addNewRoom", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["AddMessagesToRoomByRoomId"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _chat_action__WEBPACK_IMPORTED_MODULE_2__["AddMessagesToRoomByRoomId"]]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "addMessagesToRoomByRoomId", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["SetLastTemplateKeyToRoomByRoomId"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _chat_action__WEBPACK_IMPORTED_MODULE_2__["SetLastTemplateKeyToRoomByRoomId"]]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "SetLastTemplateKeyToRoomByRoomId", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["ResetChatState"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "resetChatState", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_chat_action__WEBPACK_IMPORTED_MODULE_2__["DeleteChatRoomsByBotId"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _chat_action__WEBPACK_IMPORTED_MODULE_2__["DeleteChatRoomsByBotId"]]),
        __metadata("design:returntype", void 0)
    ], ChatSessionStateReducer.prototype, "deleteRoomsByBotId", null);
    ChatSessionStateReducer = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'chatsessionstate',
            defaults: defaultChatState
        })
        //same as reducer
        ,
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])
    ], ChatSessionStateReducer);
    return ChatSessionStateReducer;
}());



/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--chat bubbles for text message started-->\r\n<div class=\"row mt-1 style-children-scrollbar-x\"\r\n     [ngClass]=\"{'reverse-flex-row':messageData?.sourceType==='human'}\"\r\n     *ngIf=\"messageData.messageMediatype === myEBotMessageMediaType.text && messageData.sourceType!=='session_expired'\">\r\n  <div class=\"p-0 text-center\" style=\"width: 40px\">\r\n    <img class=\"rounded-circle\"\r\n         [src]=\"messageData?.sourceType==='bot'?selectedAvatar?.imageUrl:'https://image.flaticon.com/icons/svg/17/17004.svg'\"\r\n         style=\"width: 32px;height: 32px\" alt=\"\">\r\n  </div>\r\n  <div class=\"col-10 text-left p-0\" [ngClass]=\"{'reverse-flex-row':messageData?.sourceType==='human'}\">\r\n    <div class=\"message p-2\"\r\n         [ngClass]=\"{'bg-message-bot':messageData?.sourceType==='bot','bg-message-human':messageData?.sourceType==='human'}\"\r\n         style=\"display: inline-block; overflow-x: auto\">\r\n      <span class=\"message-text\" [innerHtml]=\"messageData?.text\"></span>\r\n      <div class=\"time text-right\">{{(messageData?.time|msToHhmm)||'no time info'}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--chat bubbles for text message ends-->\r\n\r\n<!--<p>{{messageData|json}}</p>-->\r\n\r\n<div class=\"row mt-1 style-children-scrollbar-x\" *ngIf=\"messageData.messageMediatype !== myEBotMessageMediaType.text && messageData.sourceType!=='session_expired'\">\r\n  <div class=\"p-0 text-center\" style=\"width: 40px\">\r\n    <img class=\"rounded-circle\"\r\n         [src]=\"messageData?.sourceType==='bot'?selectedAvatar?.imageUrl:'https://image.flaticon.com/icons/svg/17/17004.svg'\"\r\n         style=\"width: 32px;height: 32px\" alt=\"\">\r\n  </div>\r\n  <div class=\"col-10 text-left p-0 \"\r\n       style=\"overflow-x: auto\"\r\n       *ngIf=\"messageData.messageMediatype===myEBotMessageMediaType.image\">\r\n    <app-card-carousel\r\n      [isFullScreenPreview]=\"isFullScreenPreview\"\r\n      [messageData]=\"messageData\"\r\n      (sendMessageToBotServer$)=\"sendMessageToBotServer$.emit($event)\"\r\n    ></app-card-carousel>\r\n  </div>\r\n  <!--<p *ngIf=\"messageData.messageMediatype===myEBotMessageMediaType.quickReply\">hello</p>-->\r\n  <!---->\r\n  <div class=\"col-10 text-left px-0\"\r\n       *ngIf=\"messageData.messageMediatype===myEBotMessageMediaType.quickReply\">\r\n    <!--<div class=\"d-inline-block\">-->\r\n      <app-quick-reply\r\n        style=\"overflow-x: auto; width: 100%\"\r\n        [isFullScreenPreview]=\"isFullScreenPreview\"\r\n        [messageData]=\"messageData\"\r\n        (sendMessageToBotServer$)=\"sendMessageToBotServer$.emit($event)\"\r\n      ></app-quick-reply>\r\n    <!--</div>-->\r\n  </div>\r\n  <div class=\"col-10 text-left p-0 d-flex\"\r\n       *ngIf=\"messageData.messageMediatype===myEBotMessageMediaType.bot_thinking\">\r\n    <div class=\"bg-message-bot d-flex align-items-center px-2\">\r\n      <app-bot-thinking-bubble class=\"d-block\"></app-bot-thinking-bubble>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--chat bubbles for media message started-->\r\n<!--<app-card-carousel-->\r\n<!--*ngIf=\"messageData.messageMediatype===myEBotMessageMediaType.image\"-->\r\n<!--[messageData]=\"messageData\"-->\r\n<!--(sendMessageToBotServer$)=\"sendMessageToBotServer$.emit($event)\"-->\r\n<!--&gt;</app-card-carousel>-->\r\n\r\n<!--<app-quick-reply-->\r\n<!--*ngIf=\"messageData.messageMediatype===myEBotMessageMediaType.quickReply\"-->\r\n<!--[messageData]=\"messageData\"-->\r\n<!--(sendMessageToBotServer$)=\"sendMessageToBotServer$.emit($event)\"-->\r\n<!--&gt;</app-quick-reply>-->\r\n\r\n\r\n<!--chat bubbles for media message ends-->\r\n\r\n\r\n<div class=\"row d-flex align-items-center session-expire-info-row\" *ngIf=\"messageData.sourceType==='session_expired'\">\r\n  <hr>\r\n  <i class=\"px-2\">New session started</i>\r\n  <hr>\r\n</div>\r\n\r\n\r\n<!--carousal starts-->\r\n"

/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reverse-flex-row {\n  display: flex;\n  flex-direction: row-reverse; }\n\n.row {\n  margin: 0;\n  /*overriding bootstrap*/ }\n\n.bg-message-human {\n  background-color: #00abd3; }\n\n.bg-message-human .time, .bg-message-human .message-text {\n    color: white !important; }\n\n.message {\n  font-size: 13px;\n  line-height: 20px;\n  font-weight: 400;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif;\n  border-radius: 1px; }\n\n.message .time {\n    font-size: 9px;\n    line-height: 13px;\n    font-weight: 400;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif; }\n\n.session-expire-info-row hr {\n  flex-grow: 1; }\n\n.session-expire-info-row * {\n  color: #9e9e9e; }\n"

/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ChatMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function() { return ChatMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../interfaces/chat-session-state */ "./src/interfaces/chat-session-state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatMessageComponent = /** @class */ (function () {
    function ChatMessageComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.myEBotMessageMediaType = _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_1__["EBotMessageMediaType"];
        this.messageData = {
            text: 'this is a test',
            time: Date.now(),
            sourceType: "bot",
            messageMediatype: null
        };
        this.isFullScreenPreview = false;
        this.sendMessageToBotServer$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.messageData);
        this.isFullScreenPreview = location.pathname === '/preview'; //this.activatedRoute.snapshot.data['isFullScreenPreview'];
        this.router.events.subscribe(function (data) {
            if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]) {
                _this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatMessageComponent.prototype, "selectedAvatar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatMessageComponent.prototype, "messageData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatMessageComponent.prototype, "sendMessageToBotServer$", void 0);
    ChatMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-message',
            template: __webpack_require__(/*! ./chat-message.component.html */ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component.html"),
            styles: [__webpack_require__(/*! ./chat-message.component.scss */ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());



/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chatroom.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-message-list/chatroom.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-chat-sessionMessageData></app-chat-sessionMessageData>-->\r\n"

/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chatroom.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-message-list/chatroom.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chatroom.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-message-list/chatroom.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
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

var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent() {
    }
    ChatroomComponent.prototype.ngOnInit = function () {
    };
    ChatroomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! ./chatroom.component.html */ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chatroom.component.html"),
            styles: [__webpack_require__(/*! ./chatroom.component.scss */ "./src/app/chat/rooms-and-convo-panel/chat-message-list/chatroom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-1 mt-1 position-relative\" [ngClass]=\"{'bg-theme-primary':currentRoomId === room.id}\">\r\n  <div class=\"p-2 col-2\" style=\"text-align: center\">\r\n    <img [src]=\"room?.selectedAvatar?.imageUrl\"\r\n         class=\"rounded-circle\"\r\n         style=\"width: 36px;height: 36px\" alt=\"\">\r\n  </div>\r\n  <div class=\"col-10 p-1 text-left message-wrapper\" >\r\n    <div class=\"message p-2 cursor-pointer\" (click)=\"openChatRoom()\">\r\n      <div class=\"d-flex justify-content-between \">\r\n        <div class=\"message-text \">{{room.id}}</div>\r\n        <div class=\"time\">{{room.messageList[room.messageList.length-1].time|msToHhmm}}</div>\r\n        <!--<div class=\"time\">{{room.created_at}}</div>-->\r\n      </div>\r\n      <div class=\"message-text limit-oneline\">{{room.messageList[room.messageList.length-1].text}}</div>\r\n      <i style=\"position: absolute; bottom: 5px; right: 5px\" class=\"fa fa-user\" *ngIf=\"room.isCustomRoom\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!---->\r\n"

/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0; }\n\n.message-wrapper {\n  background-color: #f7f7f7; }\n\n.message {\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 400;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif;\n  border-radius: 1px; }\n\n.message .message-text {\n    font-size: 11px; }\n\n.message .time {\n    font-size: 9px;\n    line-height: 13px;\n    font-weight: 400;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif; }\n"

/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ChatItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatItemComponent", function() { return ChatItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../interfaces/chat-session-state */ "./src/interfaces/chat-session-state.ts");
/* harmony import */ var _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ngxs/chat.action */ "./src/app/chat/ngxs/chat.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatItemComponent = /** @class */ (function () {
    function ChatItemComponent(store) {
        this.store = store;
    }
    ChatItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatsessionstate$.subscribe(function (chatSessionState) {
            _this.currentRoomId = chatSessionState.currentRoomId;
        });
    };
    ChatItemComponent.prototype.openChatRoom = function () {
        this.store.dispatch([
            new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["SetCurrentRoomID"]({ id: this.room.id }),
            new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["SetCurrentUId"]({ uid: this.room.uid }),
            // new SetCurrentBotDetails({bot_id:this.room.bot_id}),
            new _ngxs_chat_action__WEBPACK_IMPORTED_MODULE_4__["ChangeFrameAction"]({ frameEnabled: _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_3__["EChatFrame"].CHAT_BOX })
        ]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatItemComponent.prototype, "room", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChatItemComponent.prototype, "currentUid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChatItemComponent.prototype, "currentRoomId", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ChatItemComponent.prototype, "chatsessionstate$", void 0);
    ChatItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-item',
            template: __webpack_require__(/*! ./chat-item.component.html */ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component.html"),
            styles: [__webpack_require__(/*! ./chat-item.component.scss */ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ChatItemComponent);
    return ChatItemComponent;
}());



/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"mb-2\" style=\"overflow-y: scroll;overflow-x: hidden; height: 100%; position: relative\">\r\n  <div *ngIf=\"rooms\">\r\n    <app-chat-item\r\n      *ngFor=\"let room of rooms;\" [room]=\"room\"\r\n      [currentUid]=\"chatsessionstate.currentUId\">\r\n    </app-chat-item>\r\n  </div>\r\n  <div class=\"d-flex justify-content-center pb-1\" style=\"position: absolute; bottom: 0; left: 0; right: 0;z-index: 10\">\r\n    <!--<button class=\"btn btn-theme-secondary-outline mr-1\" (click)=\"createCustomRoom()\" >Create Custom Room</button>-->\r\n    <button class=\"btn btn-theme-secondary-outline\" (click)=\"startNewRoom()\">Start New Room</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatListComponent = /** @class */ (function () {
    function ChatListComponent() {
        this.navigateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createCustomRoom$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createNewRoom$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChatListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatsessionstate$.subscribe(function (chatSessionState) {
            if (!chatSessionState || !chatSessionState.rooms)
                return;
            _this.chatsessionstate = chatSessionState;
            var x = _this.rooms = chatSessionState.rooms.sort(function (obj1, obj2) {
                return obj2.messageList[obj2.messageList.length - 1].time - obj1.messageList[obj1.messageList.length - 1].time;
            });
            _this.rooms = _this.rooms.slice();
            // this.bot_id = chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.id;
            // if (!this.bot_id) return;
            // this.botlist$.subscribe((value) => {
            //   this.currentBot = value.allBotList.find(value => value.id === this.bot_id);
            // });
        });
    };
    ChatListComponent.prototype.createCustomRoom = function () {
        this.createCustomRoom$.emit();
    };
    ChatListComponent.prototype.startNewRoom = function () {
        var details = {
            consumerDetails: {
                uid: Date.now().toString()
            },
            bot: this.currentBot
        };
        this.createNewRoom$.emit(details);
    };
    ChatListComponent.prototype.navigate = function (frame) {
        this.navigateEvent.emit(frame);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatListComponent.prototype, "currentBot", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ChatListComponent.prototype, "botlist$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ChatListComponent.prototype, "chatsessionstate$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ChatListComponent.prototype, "navigateEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatListComponent.prototype, "createCustomRoom$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatListComponent.prototype, "createNewRoom$", void 0);
    ChatListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-list',
            template: __webpack_require__(/*! ./chat-list.component.html */ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-list.component.html"),
            styles: [__webpack_require__(/*! ./chat-list.component.scss */ "./src/app/chat/rooms-and-convo-panel/chat-room-list/chat-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatListComponent);
    return ChatListComponent;
}());



/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-window.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-window.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #scrollMe class=\"d-flex flex-column mb-1\" style=\"overflow-y: scroll;overflow-x: hidden; height: calc(100% - 50px);position: relative\">\r\n  <app-chat-message\r\n    (sendMessageToBotServer$)=\"sendMessageByHuman($event)\"\r\n    class=\"mx-2\"\r\n    [selectedAvatar]=\"selectedAvatar\"\r\n    *ngFor=\"let messageData of _messageDataArray\"\r\n    [messageData]=\"messageData\">\r\n  </app-chat-message>\r\n  <div *ngIf=\"!_messageDataArray\" class=\"w-100 h-100 d-flex align-items-center justify-content-center\">\r\n    <p class=\"text-muted\">Click start a new Room to start conversation</p>\r\n  </div>\r\n  <div *ngIf=\"showBotIsThinking\" class=\"mt-auto\">\r\n    <app-chat-message\r\n      (sendMessageToBotServer$)=\"sendMessageByHuman($event)\"\r\n      class=\"mx-2\"\r\n      [selectedAvatar]=\"selectedAvatar\"\r\n      *ngFor=\"let messageData of botIsThinkingMessageDataArray\"\r\n      [messageData]=\"messageData\">\r\n    </app-chat-message>\r\n  </div>\r\n</div>\r\n<!--<div class=\"footer px-3 py-1 d-flex align-items-center justify-content-between text-muted\" style=\"height: 13%\">-->\r\n<!--<input class=\"px-2\" placeholder=\"say something...\" type=\"text\">-->\r\n<!--<span class=\"icon\"><i class=\"fa fa-send cursor-pointer\"></i></span>-->\r\n<!--</div>-->\r\n<!--text input starts-->\r\n<div *ngIf=\"_messageDataArray\" class=\"footer d-flex align-items-center text-muted\" style=\"height: 45px\">\r\n  <input class=\"chat-input px-2 flex-grow-1\" placeholder=\"Chat with the bot ...\" autofocus [(ngModel)]=\"messageByHuman\" type=\"text\"\r\n         (keyup.enter)=\"sendMessageByHuman(messageByHuman)\">\r\n  <div class=\"d-flex justify-content-center px-2\">\r\n    <span class=\"icon\"><i class=\"fa fa-send cursor-pointer\" (click)=\"sendMessageByHuman(messageByHuman)\"></i></span>\r\n  </div>\r\n</div>\r\n<!--text input ends-->\r\n"

/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-window.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-window.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  grid-area: f;\n  position: relative;\n  padding: 3px 10px;\n  background-color: #ececec; }\n  .footer input {\n    height: 80%;\n    width: 90%;\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 400;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif;\n    border-radius: 4px;\n    border: none;\n    border-color: inherit;\n    box-shadow: none;\n    outline: none; }\n  .footer input::-webkit-input-placeholder {\n      color: #dadada !important; }\n  .footer input:-ms-input-placeholder {\n      color: #dadada !important; }\n  .footer input::-ms-input-placeholder {\n      color: #dadada !important; }\n  .footer input::placeholder {\n      color: #dadada !important; }\n  .footer .icon {\n    color: #00abd3;\n    font-size: 25px; }\n  app-chat-message {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/chat/rooms-and-convo-panel/chat-window.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/chat/rooms-and-convo-panel/chat-window.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../interfaces/chat-session-state */ "./src/interfaces/chat-session-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatWindowComponent = /** @class */ (function () {
    function ChatWindowComponent() {
        this.botIsThinkingMessageDataArray = [
            {
                sourceType: 'bot',
                messageMediatype: _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_1__["EBotMessageMediaType"].bot_thinking,
                time: null
            }
        ];
        this.showBotIsThinking = false;
        this.sendMessageByHuman$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myEChatFrame = _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_1__["EChatFrame"];
    }
    Object.defineProperty(ChatWindowComponent.prototype, "messageDataArray", {
        set: function (value) {
            var _this = this;
            this._messageDataArray = value;
            console.log('scrolling');
            setTimeout(function () { return _this.scrollToBottom(); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    ChatWindowComponent.prototype.ngOnInit = function () {
    };
    ChatWindowComponent.prototype.scrollToBottom = function () {
        try {
            console.log(this.myScrollContainer);
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatWindowComponent.prototype.sendMessageByHuman = function (message) {
        this.sendMessageByHuman$.emit({ messageByHuman: message, room: this.room });
        this.messageByHuman = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChatWindowComponent.prototype, "_messageDataArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatWindowComponent.prototype, "selectedAvatar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatWindowComponent.prototype, "room", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ChatWindowComponent.prototype, "showBotIsThinking", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ChatWindowComponent.prototype, "messageDataArray", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatWindowComponent.prototype, "sendMessageByHuman$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatWindowComponent.prototype, "myScrollContainer", void 0);
    ChatWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-window',
            template: __webpack_require__(/*! ./chat-window.component.html */ "./src/app/chat/rooms-and-convo-panel/chat-window.component.html"),
            styles: [__webpack_require__(/*! ./chat-window.component.scss */ "./src/app/chat/rooms-and-convo-panel/chat-window.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());



/***/ }),

/***/ "./src/app/constants.service.ts":
/*!**************************************!*\
  !*** ./src/app/constants.service.ts ***!
  \**************************************/
/*! exports provided: ERouteNames, EAPINames, ETabNames, ERoleName, EAPermissionsDynamic, ConstantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERouteNames", function() { return ERouteNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAPINames", function() { return EAPINames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETabNames", function() { return ETabNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERoleName", function() { return ERoleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAPermissionsDynamic", function() { return EAPermissionsDynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsService", function() { return ConstantsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
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





var ERouteNames;
(function (ERouteNames) {
    ERouteNames["customner"] = "customner";
    ERouteNames["report"] = "report";
    ERouteNames["create_report"] = "create_report";
    ERouteNames["enterprise_profile"] = "enterprise_profile";
    ERouteNames["analytics2"] = "analytics2";
    ERouteNames["consumer"] = "consumer";
    ERouteNames["sessions"] = "sessions";
})(ERouteNames || (ERouteNames = {}));
var EAPINames;
(function (EAPINames) {
    EAPINames["integration_master"] = "api/v1/integrations/";
    EAPINames["enterprise"] = "enterprise/";
})(EAPINames || (EAPINames = {}));
var ETabNames;
(function (ETabNames) {
    ETabNames["customner"] = "customner";
    ETabNames["create_bot"] = "create_bot";
    ETabNames["knowledgeBase"] = "knowledgeBase";
    ETabNames["enterprise_profile"] = "enterprise_profile";
    ETabNames["architecture_tab"] = "architecture_tab";
    ETabNames["delete_bot"] = "delete_bot";
    ETabNames["architecture_items"] = "architecture_items";
    ETabNames["lower_panel_bot_detail"] = "lower_panel_bot_detail";
    ETabNames["lower_panel_tabs"] = "lower_panel_tabs";
    ETabNames["architecture_panel_pipeline"] = "architecture_panel";
    ETabNames["update_bot_button"] = "update_bot_button";
    ETabNames["bot_header_ellipsis"] = "bot_header_ellipsis";
    ETabNames["bot_header_reset"] = "bot_header_reset";
    ETabNames["integration_icons"] = "integration_icons";
    ETabNames["action_items"] = "fa_action_icons";
    ETabNames["forms"] = "forms";
    ETabNames["UI_SWITCH"] = "UI_SWITCH";
    ETabNames["report"] = "report";
    ETabNames["analytics2"] = "analytics2";
    ETabNames["pipeline"] = "pipeline";
    ETabNames["knowledgebase"] = "knowledgebase";
    ETabNames["botversion"] = "botversion";
    ETabNames["sessions"] = "sessions";
    ETabNames["consumers"] = "consumers";
    ETabNames["update_profile"] = "update_profile";
    ETabNames["testing"] = "testing";
})(ETabNames || (ETabNames = {}));
var ERoleName;
(function (ERoleName) {
    ERoleName["Admin"] = "Admin";
    ERoleName["Bot Developer"] = "Bot Developer";
    ERoleName["Analyst"] = "Analyst";
    ERoleName["Tester"] = "Tester";
})(ERoleName || (ERoleName = {}));
var EAPermissionsDynamic;
(function (EAPermissionsDynamic) {
    EAPermissionsDynamic["Get Bots"] = "Get Bots";
    EAPermissionsDynamic["Create Bots"] = "Create Bots";
    EAPermissionsDynamic["Update Bots"] = "Update Bots";
    EAPermissionsDynamic["Delete Bots"] = "Delete Bots";
    EAPermissionsDynamic["Get Bots Anonymous"] = "Get Bots Anonymous";
    EAPermissionsDynamic["Get Enterpise Knowledge base"] = "Get Enterpise Knowledge base";
    EAPermissionsDynamic["Create Enterprise Knowledge base"] = "Create Enterprise Knowledge base";
    EAPermissionsDynamic["Update Enterprise Knowledge base"] = "Update Enterprise Knowledge base";
    EAPermissionsDynamic["Delete Enterprise Knowledge base"] = "Delete Enterprise Knowledge base";
    EAPermissionsDynamic["Create Bot Versioning"] = "Create Bot Versioning";
    EAPermissionsDynamic["GET Bot Versioning"] = "GET Bot Versioning";
    EAPermissionsDynamic["Update Bot Versioning"] = "Update Bot Versioning";
    EAPermissionsDynamic["Delete Bot Versioning"] = "Delete Bot Versioning";
    EAPermissionsDynamic["Create Role"] = "Create Role";
    EAPermissionsDynamic["Get Role"] = "Get Role";
    EAPermissionsDynamic["Update Role"] = "Update Role";
    EAPermissionsDynamic["Delete Role"] = "Delete Role";
    EAPermissionsDynamic["Create User"] = "Create User";
    EAPermissionsDynamic["Get User"] = "Get User";
    EAPermissionsDynamic["Update User"] = "Update User";
    EAPermissionsDynamic["Get Consumers"] = "Get Consumers";
    EAPermissionsDynamic["Get Sessions"] = "Get Sessions";
    EAPermissionsDynamic["Analytics"] = "Analytics";
    EAPermissionsDynamic["Get Bot Testcases"] = "Get Bot Testcases";
    EAPermissionsDynamic["Create Bot Testcases"] = "Create Bot Testcases";
    EAPermissionsDynamic["Update Bot Testcases"] = "Update Bot Testcases";
    EAPermissionsDynamic["Delete Bot Testcases"] = "Delete Bot Testcases";
    EAPermissionsDynamic["Get Integrations"] = "Get Integrations";
    EAPermissionsDynamic["Get Pipeline Module"] = "Get Pipeline Module";
    EAPermissionsDynamic["Create Reports"] = "Create Reports";
    EAPermissionsDynamic["Get Reports"] = "Get Reports";
    EAPermissionsDynamic["Update Reports"] = "Update Reports";
    EAPermissionsDynamic["Delete Reports"] = "Delete Reports";
    EAPermissionsDynamic["Get Report History"] = "Get Report History";
    EAPermissionsDynamic["Get Enterprise"] = "Get Enterprise";
    EAPermissionsDynamic["Update Enterprise"] = "Update Enterprise";
    EAPermissionsDynamic["Delete User"] = "Delete User";
    EAPermissionsDynamic["Get Report Types"] = "Get Report Types";
    EAPermissionsDynamic["Send API"] = "Send API";
    EAPermissionsDynamic["Get Messages"] = "Get Messages";
    EAPermissionsDynamic["Get Actions"] = "Get Actions";
    EAPermissionsDynamic["Close Room"] = "Close Room";
    EAPermissionsDynamic["agent_close"] = "agent_close";
    EAPermissionsDynamic["Anonymize Conversation"] = "Anonymize Conversation";
    EAPermissionsDynamic["Post dfRules Debug"] = "Post dfRules Debug";
    EAPermissionsDynamic["Post genRules Debug"] = "Post genRules Debug";
    EAPermissionsDynamic["Post genTemplate Debug"] = "Post genTemplate Debug";
    EAPermissionsDynamic["Post Workflow Debug"] = "Post Workflow Debug";
    EAPermissionsDynamic["Workflow Webhook"] = "Workflow Webhook";
    EAPermissionsDynamic["Facebook Webhook"] = "Facebook Webhook";
    EAPermissionsDynamic["Backward Compatible Message API"] = "Backward Compatible Message API";
    EAPermissionsDynamic["Intelligence API Webhook"] = "Intelligence API Webhook";
    EAPermissionsDynamic["Delete Consumer"] = "Delete Consumer";
    EAPermissionsDynamic["Create Decrypt Audit"] = "Create Decrypt Audit";
    EAPermissionsDynamic["erase consumer"] = "erase consumer";
    EAPermissionsDynamic["Exec Reports"] = "Exec Reports";
    EAPermissionsDynamic["Download Reports"] = "Download Reports";
    EAPermissionsDynamic["Skype API"] = "Skype API";
    EAPermissionsDynamic["Update Password"] = "Update Password";
    EAPermissionsDynamic["Get Bot Knowledge base"] = "Get Bot Knowledge base";
    EAPermissionsDynamic["Create Bot Knowledge base"] = "Create Bot Knowledge base";
    EAPermissionsDynamic["Update Bot Knowledge base"] = "Update Bot Knowledge base";
    EAPermissionsDynamic["Delete Bot Knowledge base"] = "Delete Bot Knowledge base";
})(EAPermissionsDynamic || (EAPermissionsDynamic = {}));
// import {IGlobalState} from '../interfaces/global-state';
var ConstantsService = /** @class */ (function () {
    function ConstantsService(datePipe) {
        var _this = this;
        this.datePipe = datePipe;
        this.allPermissions = {};
        //   [
        //   'Get Bots',
        //   'Create Bots',
        //   'Update Bots',
        //   'Delete Bots',
        //   'Get Bots Anonymous',
        //   'Get Enterpise Knowledge base',
        //   'Create Enterprise Knowledge base',
        //   'Update Enterprise Knowledge base',
        //   'Delete Enterprise Knowledge base',
        //   'Create Bot Versioning',
        //   'GET Bot Versioning',
        //   'Update Bot Versioning',
        //   'Delete Bot Versioning',
        //   'Create Role',
        //   'Get Role',
        //   'Update Role',
        //   'Delete Role',
        //   'Create User',
        //   'Get User',
        //   'Update User',
        //   'Get Consumers',
        //   'Get Sessions',
        //   'Analytics',
        //   'Get Bot Testcases',
        //   'Create Bot Testcases',
        //   'Update Bot Testcases',
        //   'Delete Bot Testcases',
        //   'Get Integrations',
        //   'Get Pipeline Module',
        //   'Create Reports',
        //   'Get Reports',
        //   'Update Reports',
        //   'Delete Reports',
        //   'Get Report History',
        //   'Get Enterprise',
        //   'Update Enterprise',
        //   'Delete User',
        //   'Get Report Types',
        //   'Send API',
        //   'Get Messages',
        //   'Get Actions',
        //   'Close Room',
        //   'agent_close',
        //   'Anonymize Conversation',
        //   'Post dfRules Debug',
        //   'Post genRules Debug',
        //   'Post genTemplate Debug',
        //   'Post Workflow Debug',
        //   'Workflow Webhook',
        //   'Facebook Webhook',
        //   'Backward Compatible Message API',
        //   'Intelligence API Webhook',
        //   'Delete Consumer',
        //   'Create Decrypt Audit',
        //   'Anonymize Conversation',
        //   'erase consumer',
        //   'Exec Reports',
        //   'Download Reports',
        //   'Skype API',
        //   'Update Password',
        //   'Get Bot Knowledge base',
        //   'Create Bot Knowledge base',
        //   'Update Bot Knowledge base',
        //   'Delete Bot Knowledge base'
        // ];
        this.permissionsDeniedMap = {
            'Admin': {
                route: [],
                module: [],
                tab: [],
                api: [],
            },
            'Analyst': {
                route: [ERouteNames.customner,
                    ERouteNames.enterprise_profile,
                    ERouteNames.report,
                    ERouteNames.create_report,
                ],
                module: [],
                tab: [
                    ETabNames.enterprise_profile,
                    ETabNames.customner,
                    ETabNames.architecture_tab,
                    ETabNames.bot_header_ellipsis,
                    ETabNames.knowledgeBase,
                    ETabNames.update_bot_button,
                    ETabNames.bot_header_reset,
                    ETabNames.architecture_items,
                    ETabNames.integration_icons,
                    ETabNames.forms,
                    ETabNames.action_items,
                    ETabNames.UI_SWITCH,
                    ETabNames.report,
                    // ETabNames.analytics2,
                    ETabNames.testing,
                    ETabNames.pipeline,
                    ETabNames.knowledgebase,
                    ETabNames.botversion,
                    // ETabNames.update_profile,
                    ETabNames.create_bot,
                ],
                api: [
                    EAPINames.integration_master,
                    EAPINames.enterprise,
                ]
            },
            'Bot Developer': {
                route: [
                    ERouteNames.enterprise_profile,
                ],
                module: [],
                tab: [
                    ETabNames.enterprise_profile,
                ],
                api: [EAPINames.enterprise]
            },
            'Tester': {
                route: [
                    ERouteNames.customner,
                    ERouteNames.enterprise_profile,
                    ERouteNames.report,
                ],
                module: [],
                tab: [
                    ETabNames.enterprise_profile,
                    ETabNames.customner,
                    ETabNames.create_bot,
                    ETabNames.architecture_tab,
                    ETabNames.delete_bot,
                    // ETabNames.lower_panel_bot_detail,
                    ETabNames.architecture_panel_pipeline,
                    ETabNames.bot_header_ellipsis,
                    ETabNames.knowledgeBase,
                    ETabNames.update_bot_button,
                    ETabNames.bot_header_reset,
                    ETabNames.consumers,
                    // ETabNames.integration_icons,
                    ETabNames.forms,
                    ETabNames.action_items,
                    ETabNames.UI_SWITCH,
                    ETabNames.report,
                    ETabNames.analytics2,
                ],
                api: [
                    EAPINames.integration_master,
                    EAPINames.enterprise,
                ]
            }
        };
        this.NEW_BOT_VERSION_TEMPLATE = {
            'bot_id': 0,
            'comment': '',
            'df_rules': '',
            'df_template': '',
            'generation_rules': '',
            'generation_templates': '',
            'id': -1,
            'workflow': '',
            'updated_fields': {
                'df_template': false,
                'df_rules': false,
                'generation_rules': false,
                'generation_template': false,
                'workflows': false
            },
            'forked_from': -1,
        };
        this.BACKEND_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].url; //'https://dev.imibot.ai/';//'http://10.0.27.176:8000/';
        this.BACKEND_URL_LOGIN = "" + this.BACKEND_URL + 'api/v1/user/login/';
        this.BACKEND_URL_ENTERPRISE_USERS = "" + this.BACKEND_URL + 'users/enterprise/';
        this.BACKEND_USER_UPDATE_URL = "" + this.BACKEND_URL + 'user/'; //https://dev.imibot.ai/user/5a030aa9b050705bd0ca5a45
        this.BACKEND_USER_CODE_BASED_BOT_LIST = "" + this.BACKEND_URL + 'integrations'; //https://dev.imibot.ai/integrations
        this.BACKEND_USER_PIPELINE_BASED_BOT_LIST = "" + this.BACKEND_URL + 'api/v1/bot/'; //https://dev.imibot.ai/bots
        this.CHANNEL_LIST = [
            { name: 'all', displayName: 'All Channels' },
            { name: 'facebook', displayName: 'Facebook' },
            { name: 'web', displayName: 'WebChat' },
            { name: 'alexa', displayName: 'Alexa' }
        ];
        this.TIME_GRANULARITY_LIST = [
            { name: 'hour', displayName: 'Hour' },
            { name: 'day', displayName: 'Day' },
            { name: 'week', displayName: 'Week' },
            { name: 'month', displayName: 'Month' },
            { name: 'year', displayName: 'Year' }
        ];
        this.DATE_PICKER_CONFIG = Object.assign({}, {
            'containerClass': 'theme-dark-blue',
            'dateInputFormat': 'DD/MM/YYYY',
        });
        //localstorage keys
        this.LOCALSTORAGE_APP_STATE = 'LOCALSTORAGE_APP_STATE';
        this.LOCALSTORAGE_LAST_STATE_UPDATED = 'LOCALSTORAGE_LAST_STATE_UPDATED';
        //settings for smart table
        this.SMART_TABLE_CONSUMER_SETTING = {
            columns: {
                id: {
                    title: 'ID',
                    width: '120px',
                },
                name: {
                    title: 'Name',
                    filter: false
                },
                phone: {
                    title: 'Phone',
                    filter: false
                },
                facebook_id: {
                    title: 'Facebook ID',
                    width: '120px',
                    filter: false
                },
                skype_id: {
                    title: 'Skype ID',
                    width: '120px',
                    filter: false
                },
                uid: {
                    title: 'UID',
                    width: '120px',
                    filter: false
                },
                email: {
                    title: 'Email',
                    filter: false
                },
                updated_at: {
                    title: 'Updated At',
                    width: '150px',
                    filter: false,
                    valuePrepareFunction: function (date) {
                        // var raw = new Date(date);
                        var formatted = new Date(date).toJSON().slice(0, 10).split('-').reverse().join('/'); //this.datePipe.transform(raw, 'd/m/yy');
                        return formatted;
                    }
                },
            },
            // hideSubHeader: true
            actions: {
                edit: false,
                add: false,
                delete: false,
                position: 'right',
                custom: [
                    { name: 'decrypt', title: "<i class=\"fa fa-lock text-dark\"></i>" }
                ],
                width: '150px',
            },
            rowClassFunction: function (row) {
                if (row.data.data_encrypted === false) {
                    return 'hightlight-decrypted';
                    ;
                }
                return '';
            }
        };
        this.SMART_TABLE_SESSIONS_SETTING = {
            columns: {
                id: {
                    title: 'Room ID',
                    width: '150px'
                },
                consumer_id: {
                    title: 'Consumer ID',
                    width: '150px'
                },
                total_message_count: {
                    title: 'Messages',
                    width: '150px'
                },
                updated_at: {
                    title: 'Updated At',
                    valuePrepareFunction: function (date) {
                        var raw = new Date(date);
                        var formatted = _this.datePipe.transform(raw, 'medium');
                        return formatted;
                    }
                },
                sendtoagent: {
                    title: 'Sent to Agent'
                }
            },
            // hideSubHeader: true
            // actions: {
            //   add: true,
            //   edit: true,
            //   delete: false
            // },
            actions: {
                edit: false,
                add: false,
                delete: false,
                position: 'right',
                custom: [
                    { name: 'download', title: "<i  class=\"fa fa-download pr-2 text-dark\"></i>" },
                    { name: 'decrypt', title: "<i class=\"fa fa-lock text-dark\"></i>" },
                ],
            },
            pager: {
                display: false,
                perPage: 5
            },
            rowClassFunction: function (row) {
                if (row.data.highlight && !row.data.data_encrypted === false) {
                    return 'hightlight-created-row';
                    //   return 'score negative'; // Color from row with negative in score
                    // } else if (row.data.type === '(+)') {
                    //   return 'score positive';
                }
                if (row.data.highlight && row.data.data_encrypted === false) {
                    return 'hightlight-created-row hightlight-decrypted';
                }
                if (!row.data.highlight && row.data.data_encrypted === false) {
                    return 'hightlight-decrypted';
                }
                return '';
            }
        };
        this.SMART_TABLE_ENTERPISE_USERS_SETTING = {
            columns: {
                first_name: {
                    title: 'First Name'
                },
                email: {
                    title: 'Email'
                },
                // 'messages.length': {
                //   title: 'Messages'
                // },
                'role': {
                    title: 'Role'
                },
                'permissions': {
                    title: 'Permissions'
                },
                created_at: {
                    title: 'Created At'
                },
                updated_at: {
                    title: 'Updated At'
                }
            },
            // hideSubHeader: true
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            pager: {
                display: false,
                perPage: 5
            }
        };
        this.SMART_TABLE_KNOWLEDGEBASE_SETTING = {
            columns: {
                key: {
                    title: 'Concept Key'
                },
                ner_type: {
                    title: 'Type'
                },
                conflict_policy: {
                    title: 'Override Policy'
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
        this.HANDSON_TABLE_BOT_TESTING_colHeaders = ['Message', 'Expected Template', 'Status', 'Generated Template', 'RoomId', 'TransactionId'];
        this.HANDSON_TABLE_BOT_TESTING_columns = [
            { data: 0, type: 'text', },
            { data: 1, type: 'text', },
            { data: 2, type: 'text', readOnly: true },
            { data: 3, type: 'text', readOnly: true },
            { data: 4, type: 'text', readOnly: true },
            { data: 5, type: 'text', readOnly: true },
        ];
        this.HANDSON_TABLE_KNOWLEDGE_BASE_SETTING = {
            cells: function (row, col) {
                /*To make first row highlighted*/
                /*https://docs.handsontable.com/5.0.2/demo-conditional-formatting.html*/
                var cellProperties = {};
                // var data = this.instance.getData();
                if (row === 0) {
                    cellProperties['renderer'] = function (instance, td, row, col, prop, value, cellProperties) {
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.style.fontWeight = 'bold';
                    }; // uses function directly
                }
                return cellProperties;
            }
        };
        this.HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders = ['', '', ''];
        this.HANDSON_TABLE_KNOWLEDGE_BASE_columns = [];
        this.HIGHCHART_CHARTVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Session Handling'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'percent'
                },
                series: {
                    pointStart: Date.UTC(2018, 6, 20),
                    pointInterval: 24 * 3600 * 1000
                }
            }
        };
        this.HIGHCHART_THEMEVALUE_ANALYTICS_USER_LOYALTY = {
            chart: {
                style: {
                    fontFamily: 'helvetica'
                }
            },
            colors: ['#5392ff', '#71cddd', '#34bc6e', '#95d13c', '#ffb000', '#fe8500', '#ff509e', '#9b82f3']
        };
        this.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE = {
            chart: {
                style: {
                    fontFamily: 'helvetica'
                }
            },
            colors: ['#5392ff', '#71cddd', '#34bc6e', '#95d13c', '#ffb000', '#fe8500', '#ff509e', '#9b82f3']
        };
        this.HIGHCHART_CHARTVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED = {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Flow 1', 'Flow 2', 'Flow 3', 'Flow 4', 'Flow 5']
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>'
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            }
        };
        this.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED = {
            chart: {
                style: {
                    fontFamily: 'helvetica'
                }
            },
            colors: ['#5392ff', '#71cddd', '#34bc6e', '#95d13c', '#ffb000', '#fe8500', '#ff509e', '#9b82f3']
        };
        this.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT = {
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            // xAxis: {
            //   type: 'datetime'
            // },
            yAxis: {
                title: {
                    text: '',
                    rotation: -90,
                    margin: 10,
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'right',
                verticalAlign: 'bottom'
            },
            tooltip: {
                shared: true
            },
        };
        this.HIGHCHART_CHARTVALUE_USER_LOYALTY = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Stacked column chart'
            },
            xAxis: {
                categories: ['Apples1', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: 'white'
                    }
                }
            },
            series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2]
                }]
        };
        this.integrationOptionListTemplate = {
            ccsp_details: {
                debug: {
                    debugurl: '',
                    enabled: false
                },
                imichat: {
                    'access-token': '',
                    domain: '',
                    enabled: false,
                    'service-key': ''
                }
            },
            channels: {
                alexa: {
                    enabled: false,
                    skillId: ''
                },
                facebook: {
                    enabled: false,
                    'facebook-token': '',
                    id: ''
                },
                skype: {
                    client_id: '',
                    client_secret: '',
                    'skype-page-name': '',
                    enabled: false
                },
                'viber': {
                    'enabled': false,
                    'bot_name': '',
                    'bot_auth_token': '',
                    'bot_avatar': ''
                },
                'web': {
                    'enabled': false,
                    'speech_model': '',
                    'speech_tts': '',
                    'speech_url': ''
                },
                'line': {
                    'enabled': false,
                    skillId: ''
                }
            },
            fulfillment_provider_details: {
                imiconnect: {
                    appId: '',
                    appSecret: '',
                    enabled: false,
                    serviceKey: '',
                    streamName: '',
                    send_via_connect: ''
                }
            }
        };
        this.app$.subscribe(function (value) {
            if (!value)
                return;
            _this.BACKEND_URL = (value && value.backendUrlRoot) || 'https://dev.imibot.ai/';
        });
        this.loggeduser$.subscribe(function (loggedUser) {
            if (loggedUser && loggedUser.user) {
                _this.loggedUser = loggedUser.user;
                _this.allowedPermissionIdsToCurrentRole = _this.loggedUser.role.permissions.actions;
            }
        });
    }
    ConstantsService.prototype.setPermissionsDeniedMap = function (allPermissions) {
        var _this = this;
        try {
            if (this.allowedPermissionIdsToCurrentRole.length === 0) {
                this.forbiddenPermsDynamic = {};
                return;
            }
        }
        catch (e) {
            console.log(e);
        }
        /*initializing allPermissions*/
        allPermissions.forEach(function (perm) {
            _this.allPermissions[perm.id] = perm.name;
            _this.allPermissions[perm.name] = perm.id;
        });
        this.forbiddenPermsDynamic = this.allPermissions;
        this.allowedPermissionIdsToCurrentRole.forEach(function (currentPermId) {
            /*remove allowed permission from all permissions*/
            var permName = _this.allPermissions[currentPermId];
            delete _this.forbiddenPermsDynamic[currentPermId];
            delete _this.forbiddenPermsDynamic[permName];
        });
    };
    ConstantsService.prototype.getNewBotVersionTemplate = function (botId) {
        this.NEW_BOT_VERSION_TEMPLATE.bot_id = botId;
        return this.NEW_BOT_VERSION_TEMPLATE;
    };
    ConstantsService.prototype.isRouteAccessDenied = function (routeName) {
        var role = this.loggedUser.role.name;
        var deniedRoutes = this.permissionsDeniedMap[role].route;
        var isRouteAccessDenied = deniedRoutes.find(function (route) {
            return route === routeName;
        });
        return isRouteAccessDenied;
    };
    ConstantsService.prototype.isTabAccessDenied = function (tabName) {
        if (!tabName)
            return false;
        var role = this.loggedUser.role.name;
        var deniedTabs = this.permissionsDeniedMap[role].tab;
        var isTabAccessDenied = deniedTabs.find(function (route) {
            return route === tabName;
        });
        return !!isTabAccessDenied;
    };
    ConstantsService.prototype.isAccessDeniedDynamic = function (tabName) {
        if (!tabName || !this.forbiddenPermsDynamic)
            return false;
        // let role = this.loggedUser.role.name;
        // let deniedTabs = this.permissionsDeniedMap[role].tab;
        var isTabAccessDenied = Object.keys(this.forbiddenPermsDynamic).find(function (perm) {
            return perm === tabName;
        });
        return !!isTabAccessDenied;
    };
    ConstantsService.prototype.isApiAccessDenied = function (apiUrl) {
        if (!apiUrl)
            return false;
        var role = this.loggedUser.role.name;
        var deniedApi = this.permissionsDeniedMap[role].api;
        var isApiAccessDenied = deniedApi.find(function (route) {
            return apiUrl.includes(route);
        });
        var x = !!isApiAccessDenied;
        return x;
    };
    ConstantsService.prototype.getLoginUrl = function () {
        return this.BACKEND_URL + 'api/v1/user/login/';
    };
    ConstantsService.prototype.setLoggedUser = function (loggedUser) {
        this.loggedUser = loggedUser;
    };
    ConstantsService.prototype.getUserUpdateUrl = function (enterprise_UserId) {
        return this.BACKEND_URL + ("api/v1/user/" + enterprise_UserId + "/"); //{{url}}/user/{{Enterprise_UserId}}
    };
    ConstantsService.prototype.getEnterpriseUrl = function (enterpriseId) {
        // return this.BACKEND_URL + `api/v1/enterprise/${enterpriseId}/`;// + enterpriseId+'/'; //https://dev.imibot.ai/enterprise/59b0f043378feb000d7c9d13
        return this.BACKEND_URL + ("api/v1/enterprise/" + enterpriseId + "/"); // + enterpriseId+'/'; //https://dev.imibot.ai/enterprise/59b0f043378feb000d7c9d13
    };
    ConstantsService.prototype.stopTestUrl = function () {
        return this.BACKEND_URL + "api/v1/bottestcases/canceltesting/"; // https://dev.imibot.ai/api/v1/bottestcases/canceltesting/
    };
    ConstantsService.prototype.getEnterpriseUsersUrl = function () {
        return this.BACKEND_URL + 'api/v1/user/enterpriseusers/'; //https://dev.imibot.ai/api/v1/user/enterpriseusers/
    };
    ConstantsService.prototype.getBotListUrl = function () {
        // return this.BACKEND_USER_PIPELINE_BASED_BOT_LIST + 'api/v1/bot/';
        return this.BACKEND_URL + 'api/v1/bot/?limit=1000';
    };
    ConstantsService.prototype.getLogoutUrl = function () {
        // http://localhost:8000/api/v1/logout/;
        return this.BACKEND_URL + 'api/v1/logout/';
    };
    ConstantsService.prototype.getNSetChatPreviewBotUrl = function (bot_unique_name, enterprise_unique_name) {
        // http://localhost:8000/api/v1/logout/;
        return this.BACKEND_URL + ("api/v1/bot/preview/?bot_unique_name=" + bot_unique_name + "&enterprise_unique_name=" + enterprise_unique_name);
    };
    ConstantsService.prototype.getMasterIntegrationsList = function () {
        return this.BACKEND_URL + 'api/v1/integrations/';
    };
    // getCodebasedBotListUrl() {
    //   return this.BACKEND_USER_CODE_BASED_BOT_LIST;
    //   return this.BACKEND_URL + 'api/v1/integrations/';
    //
    // }
    ConstantsService.prototype.getOverViewInfoUrl = function () {
        return this.BACKEND_URL + 'analytics/overviewinfo/'; //https://dev.imibot.ai/analytics/overviewinfo;
    };
    ConstantsService.prototype.getUserAcquisitionUrl = function () {
        return this.BACKEND_URL + 'analytics/userAcquisition/'; //https://dev.imibot.ai/analytics/userAcquisition
    };
    ConstantsService.prototype.getAverageRoomTimeUrl = function () {
        return this.BACKEND_URL + 'analytics/averageRoomTime/'; //https://dev.imibot.ai/analytics/averageRoomTime
    };
    ConstantsService.prototype.getTotalFlowsUrl = function () {
        return this.BACKEND_URL + 'analytics/totalFlows/'; //https://dev.imibot.ai/analytics/totalFlows
    };
    ConstantsService.prototype.getTotalSessionsUrl = function () {
        return this.BACKEND_URL + 'analytics/totalSessions/'; //https://dev.imibot.ai/analytics/totalSessions
    };
    ConstantsService.prototype.getSessionsByIdUrl = function (id) {
        return this.BACKEND_URL + ("api/v1/room/" + id + "/"); //https://dev.imibot.ai/api/v1/room/9913/
    };
    ConstantsService.prototype.getSessionsMessageUrl = function (room_id) {
        return this.BACKEND_URL + ("api/v1/message/?room_id=" + room_id + "&limit=1000"); //https://dev.imibot.ai/api/v1/message/?room_id=60
    };
    ConstantsService.prototype.getTotalMessagesUrl = function () {
        return this.BACKEND_URL + 'analytics/totalMessages/'; //https://dev.imibot.ai/analytics/totalMessages
    };
    ConstantsService.prototype.getMessagesByTemplateKeyUrl = function () {
        return this.BACKEND_URL + 'analytics/messagesByTemplateKey/'; //https://dev.imibot.ai/analytics/messagesByTemplateKey
    };
    /*analytics channel urls below*/
    ConstantsService.prototype.getChannelWiseUsersUrl = function () {
        return this.BACKEND_URL + 'analytics/channelWiseUsers/'; //https://dev.imibot.ai/analytics/channelWiseUsers
    };
    ConstantsService.prototype.getChannelWiseSessionsUrl = function () {
        return this.BACKEND_URL + 'analytics/channelWiseSessions/'; //https://dev.imibot.ai/analytics/channelWiseSessions
    };
    ConstantsService.prototype.getChannelWiseFlowsPerSessionUrl = function () {
        return this.BACKEND_URL + 'analytics/channelWiseFlowsPerSession/'; //https://dev.imibot.ai/analytics/channelWiseFlowsPerSession
    };
    ConstantsService.prototype.getChannelWiseAverageSessionTimeUrl = function () {
        return this.BACKEND_URL + 'analytics/channelWiseAverageSessionTime/'; //https://dev.imibot.ai/analytics/channelWiseAverageSessionTime
    };
    ConstantsService.prototype.getReportUrl = function (limit, offset) {
        if (limit === void 0) { limit = 1; }
        if (offset === void 0) { offset = 10; }
        return this.BACKEND_URL + ("api/v1/reports?limit=" + limit + "&offset=" + offset); //{{url}}/reports?limit=1&offset=10
    };
    ConstantsService.prototype.getReportHistoryUrl = function (limit, offset) {
        if (limit === void 0) { limit = 1; }
        if (offset === void 0) { offset = 10; }
        return this.BACKEND_URL + ("api/v1/reporthistory?limit=" + limit + "&offset=" + offset); //https://dev.imibot.ai/reporthistory?limit=1&offset=10
    };
    ConstantsService.prototype.getReportDeleteUrl = function (report_id) {
        return this.BACKEND_URL + ("api/v1/reports/" + report_id + "/"); //http://dev.imibot.ai/api/v1/reports/1/
    };
    ConstantsService.prototype.getDownloadReportHistoryByIdUrl = function (id) {
        return this.BACKEND_URL + ("api/v1/reporthistory/downloadreports/?id=" + id); //http://localhost:8000/api/v1/reporthistory/downloadreports/?id=10
    };
    ConstantsService.prototype.geReportTypesUrl = function () {
        return this.BACKEND_URL + 'api/v1/reporttypes/'; // http://dev.imibot.ai/api/v1/reporttypes
    };
    ConstantsService.prototype.getReportsEditInfo = function (_id) {
        return this.BACKEND_URL + 'api/v1/reports/' + _id + '/'; //  https://dev.imibot.ai/reports/5b335b127c15580059c13fc5
    };
    ConstantsService.prototype.getSaveReportsEditInfo = function (_id) {
        return this.BACKEND_URL + ("api/v1/reports/" + _id); //  http://dev.imibot.ai/api/v1/reports/1/
    };
    ConstantsService.prototype.getCreateReportUrl = function () {
        return this.BACKEND_URL + "api/v1/reports/"; //  http://dev.imibot.ai/api/v1/reports
    };
    ConstantsService.prototype.getAllVersionsByBotId = function () {
        return this.BACKEND_URL + 'api/v1/botversioning/?limit=1000'; //"http://localhost:8000/api/v1/botversioning"
    };
    ConstantsService.prototype.getSaveVersionByBotId = function (id) {
        return this.BACKEND_URL + ("api/v1/botversioning/" + id); //https://dev.imibot.ai/api/v1/botversioning/9/
    };
    ConstantsService.prototype.getCreateNewVersionByBotId = function (id) {
        return this.BACKEND_URL + "api/v1/botversioning/"; //https://dev.imibot.ai/api/v1/botversioning/9/
    };
    ConstantsService.prototype.getCreateNewBot = function () {
        return this.BACKEND_URL + "api/v1/bot/"; //https://dev.imibot.ai/api/v1/bot/
    };
    ConstantsService.prototype.getBotTestingUrl = function () {
        return this.BACKEND_URL + 'api/v1/bottestcases/'; //https://dev.imibot.ai/api/v1/bottestcases/
    };
    ConstantsService.prototype.getBotConsumerUrl = function (limit, offset) {
        return this.BACKEND_URL + ("api/v1/consumer/?limit=" + limit + "&offset=" + offset); //https://localhost:8000/api/v1/consumer/?limit=1&offset=0
    };
    ConstantsService.prototype.getBotConsumerByIdUrl = function (id) {
        return this.BACKEND_URL + ("api/v1/consumer/" + id); //https://dev.imibot.ai/api/v1/consumer/2320/
    };
    ConstantsService.prototype.getAllActionsUrl = function () {
        return this.BACKEND_URL + "api/v1/actions/?limit=100"; //https://dev.imibot.ai/api/v1/actions/
    };
    ConstantsService.prototype.getDeleteBotUrl = function (id) {
        return this.BACKEND_URL + ("api/v1/bot/" + id); //http://localhost:8000/api/v1/bot/66/
    };
    ConstantsService.prototype.getDecryptUrl = function () {
        return this.BACKEND_URL + "api/v1/decrypt_audit/"; ///api/v1/decrypt_audit/
    };
    ConstantsService.prototype.getSpecificBotByBotTokenUrl = function () {
        return this.BACKEND_URL + "api/v1/bot/?limit=1000"; //https://dev.imibot.ai/api/v1/bot/
    };
    ConstantsService.prototype.getBotSessionsUrl = function (limit, offset) {
        return this.BACKEND_URL + ("api/v1/room/?limit=" + limit + "&offset=" + offset + "&order_by=-id"); //https://dev.imibot.ai/aip/v1/room
    };
    ConstantsService.prototype.getStartNewChatLoginUrl = function () {
        return this.BACKEND_URL + 'api/v1/webhook/web/'; //'send';
    };
    ConstantsService.prototype.getAllBotVersionByBotIdUrl = function (bot_id) {
        return this.BACKEND_URL + ("api/v1/botversioning/?bot_id=" + bot_id); //http://localhost:8000/api/v1/botversioning/?bot_id=2
    };
    ConstantsService.prototype.getCustomBotNER = function (limit, offset) {
        return this.BACKEND_URL + ("api/v1/customner/?limit=" + limit + "&offset=" + offset); //https://dev.imibot.ai/api/v1/customner/
    };
    ConstantsService.prototype.updateOrDeleteCustomBotNER = function (custom_ner_id) {
        return this.BACKEND_URL + ("api/v1/customner/" + custom_ner_id); //https://dev.imibot.ai/api/v1/customner/13/
    };
    ConstantsService.prototype.updateBotUrl = function (bot_id) {
        return this.BACKEND_URL + ("api/v1/bot/" + bot_id); //https://dev.imibot.ai/api/v1/bot/13/
    };
    ConstantsService.prototype.createNewCustomBotNER = function () {
        return this.BACKEND_URL + "api/v1/customner/"; //https://dev.imibot.ai/api/v1/customner/
    };
    /*Pipeline*/
    ConstantsService.prototype.getAllPipelineModuleUrl = function () {
        return this.BACKEND_URL + "api/v1/pipelinemodule/?limit=200&offset=0"; //https://dev.imibot.ai/api/v1/pipelinemodule/
    };
    /*Enterprise NER*/
    ConstantsService.prototype.getEnterpriseNer = function (limit, offset) {
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        return this.BACKEND_URL + ("api/v1/customner/?type=enterprise&limit=" + limit + "&offset=" + offset); //https://dev.imibot.ai/api/v1/customner/
    };
    ConstantsService.prototype.getEnterpriseNerById = function (id) {
        return this.BACKEND_URL + ("api/v1/customner/?type=enterprise&id=" + id); //https://dev.imibot.ai/api/v1/customner/
    };
    ConstantsService.prototype.getCustomNerById = function (id) {
        return this.BACKEND_URL + ("api/v1/customner/?id=" + id); //dev.imibot.ai/api/v1/customner/?id=13
    };
    ConstantsService.prototype.getAnalyticsUrl = function () {
        return this.BACKEND_URL + 'api/v1/analytics/'; //https://dev.imibot.ai/api/v1/analytics/
    };
    ConstantsService.prototype.updateOrDeleteEnterpriseNer = function (id) {
        return this.BACKEND_URL + ("api/v1/customner/" + id); //https://dev.imibot.ai/api/v1/customner/12/
    };
    ConstantsService.prototype.createEnterpriseNer = function () {
    };
    ConstantsService.prototype.updatePassword = function () {
        return this.BACKEND_URL + 'api/v1/user/updatepassword/'; //https:dev.imibot.ai/api/v1/user/updatepassword///
    };
    ConstantsService.prototype.updateBotSerializer = function (bot) {
        var clone = __assign({}, bot);
        var not_keys = [
            'bot_access_token',
            'created_at',
            'created_by',
            'enterprise_id',
            'id',
            'store_bot_versions',
            'updated_at',
            'updated_by'
        ];
        not_keys.forEach(function (key) {
            delete clone[key];
        });
        return clone;
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ConstantsService.prototype, "app$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ConstantsService.prototype, "loggeduser$", void 0);
    ConstantsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], ConstantsService);
    return ConstantsService;
}());



/***/ }),

/***/ "./src/app/core/analysis2/ngxs/analysis.action.ts":
/*!********************************************************!*\
  !*** ./src/app/core/analysis2/ngxs/analysis.action.ts ***!
  \********************************************************/
/*! exports provided: SetAnalysis2HeaderData, SetOverviewInfoData, SetChannelWiseFlowsPerSession, SetUserAcquisition, SetTotalMessages, SetAverageRoomTime, SetUserLoyalty, SetChannelWiseAverageSessionTime, SetTotalFlows, SetFlowsPerRoom, SetTotalRooms, SetRoomDuration, SetChannelWiseSessions, SetChannelWiseUsers, SetUsagetrackingInfo, Topgenerationtemplates, TotalSessions, ResetAnalytics2GraphData, ResetAnalytics2HeaderData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAnalysis2HeaderData", function() { return SetAnalysis2HeaderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetOverviewInfoData", function() { return SetOverviewInfoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetChannelWiseFlowsPerSession", function() { return SetChannelWiseFlowsPerSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserAcquisition", function() { return SetUserAcquisition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTotalMessages", function() { return SetTotalMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAverageRoomTime", function() { return SetAverageRoomTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserLoyalty", function() { return SetUserLoyalty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetChannelWiseAverageSessionTime", function() { return SetChannelWiseAverageSessionTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTotalFlows", function() { return SetTotalFlows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFlowsPerRoom", function() { return SetFlowsPerRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTotalRooms", function() { return SetTotalRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRoomDuration", function() { return SetRoomDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetChannelWiseSessions", function() { return SetChannelWiseSessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetChannelWiseUsers", function() { return SetChannelWiseUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUsagetrackingInfo", function() { return SetUsagetrackingInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topgenerationtemplates", function() { return Topgenerationtemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalSessions", function() { return TotalSessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetAnalytics2GraphData", function() { return ResetAnalytics2GraphData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetAnalytics2HeaderData", function() { return ResetAnalytics2HeaderData; });
var SetAnalysis2HeaderData = /** @class */ (function () {
    function SetAnalysis2HeaderData(payload) {
        this.payload = payload;
    }
    SetAnalysis2HeaderData.type = '[analytics2] SetAnalysis2HeaderData';
    return SetAnalysis2HeaderData;
}());

var SetOverviewInfoData = /** @class */ (function () {
    function SetOverviewInfoData(payload) {
        this.payload = payload;
    }
    SetOverviewInfoData.type = '[analytics2] SetOverviewInfoData';
    return SetOverviewInfoData;
}());

var SetChannelWiseFlowsPerSession = /** @class */ (function () {
    function SetChannelWiseFlowsPerSession(payload) {
        this.payload = payload;
    }
    SetChannelWiseFlowsPerSession.type = '[analytics2] SetChannelWiseFlowsPerSession';
    return SetChannelWiseFlowsPerSession;
}());

var SetUserAcquisition = /** @class */ (function () {
    function SetUserAcquisition(payload) {
        this.payload = payload;
    }
    SetUserAcquisition.type = '[analytics2] SetUserAcquisition';
    return SetUserAcquisition;
}());

var SetTotalMessages = /** @class */ (function () {
    function SetTotalMessages(payload) {
        this.payload = payload;
    }
    SetTotalMessages.type = '[analytics2] SetTotalMessages';
    return SetTotalMessages;
}());

var SetAverageRoomTime = /** @class */ (function () {
    function SetAverageRoomTime(payload) {
        this.payload = payload;
    }
    SetAverageRoomTime.type = '[analytics2] SetAverageRoomTime';
    return SetAverageRoomTime;
}());

var SetUserLoyalty = /** @class */ (function () {
    function SetUserLoyalty(payload) {
        this.payload = payload;
    }
    SetUserLoyalty.type = '[analytics2] SetUserLoyalty';
    return SetUserLoyalty;
}());

var SetChannelWiseAverageSessionTime = /** @class */ (function () {
    function SetChannelWiseAverageSessionTime(payload) {
        this.payload = payload;
    }
    SetChannelWiseAverageSessionTime.type = '[analytics2] SetChannelWiseAverageSessionTime';
    return SetChannelWiseAverageSessionTime;
}());

var SetTotalFlows = /** @class */ (function () {
    function SetTotalFlows(payload) {
        this.payload = payload;
    }
    SetTotalFlows.type = '[analytics2] SetTotalFlows';
    return SetTotalFlows;
}());

var SetFlowsPerRoom = /** @class */ (function () {
    function SetFlowsPerRoom(payload) {
        this.payload = payload;
    }
    SetFlowsPerRoom.type = '[analytics2] SetFlowsPerRoom';
    return SetFlowsPerRoom;
}());

var SetTotalRooms = /** @class */ (function () {
    function SetTotalRooms(payload) {
        this.payload = payload;
    }
    SetTotalRooms.type = '[analytics2] SetTotalRooms';
    return SetTotalRooms;
}());

var SetRoomDuration = /** @class */ (function () {
    function SetRoomDuration(payload) {
        this.payload = payload;
    }
    SetRoomDuration.type = '[analytics2] SetRoomDuration';
    return SetRoomDuration;
}());

var SetChannelWiseSessions = /** @class */ (function () {
    function SetChannelWiseSessions(payload) {
        this.payload = payload;
    }
    SetChannelWiseSessions.type = '[analytics2] SetChannelWiseSessions';
    return SetChannelWiseSessions;
}());

var SetChannelWiseUsers = /** @class */ (function () {
    function SetChannelWiseUsers(payload) {
        this.payload = payload;
    }
    SetChannelWiseUsers.type = '[analytics2] SetChannelWiseUsers';
    return SetChannelWiseUsers;
}());

var SetUsagetrackingInfo = /** @class */ (function () {
    function SetUsagetrackingInfo(payload) {
        this.payload = payload;
    }
    SetUsagetrackingInfo.type = '[analytics2] SetUsagetrackingInfo';
    return SetUsagetrackingInfo;
}());

var Topgenerationtemplates = /** @class */ (function () {
    function Topgenerationtemplates(payload) {
        this.payload = payload;
    }
    Topgenerationtemplates.type = '[analytics2] Topgenerationtemplates';
    return Topgenerationtemplates;
}());

var TotalSessions = /** @class */ (function () {
    function TotalSessions(payload) {
        this.payload = payload;
    }
    TotalSessions.type = '[analytics2] TotalSessions';
    return TotalSessions;
}());

var ResetAnalytics2GraphData = /** @class */ (function () {
    function ResetAnalytics2GraphData() {
    }
    ResetAnalytics2GraphData.type = '[analytics2] ResetAnalytics2Data';
    return ResetAnalytics2GraphData;
}());

var ResetAnalytics2HeaderData = /** @class */ (function () {
    function ResetAnalytics2HeaderData() {
    }
    ResetAnalytics2HeaderData.type = '[analytics2] ResetAnalytics2HeaderData';
    return ResetAnalytics2HeaderData;
}());



/***/ }),

/***/ "./src/app/core/analysis2/ngxs/analysis.state.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/analysis2/ngxs/analysis.state.ts ***!
  \*******************************************************/
/*! exports provided: AnalysisStateReducer2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisStateReducer2", function() { return AnalysisStateReducer2; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _analysis_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
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


var defaultAnalytics2 = {
    analysisHeaderData: null,
    overviewInfo: null,
    channelWiseFlowsPerSession: null,
    userAcquisition: null,
    totalMessages: null,
    averageRoomTime: null,
    totalFlows: null,
    userLoyalty: null,
    channelWiseAverageSessionTime: null,
    topgenerationtemplates: null,
    totalSessions: null,
    flowsPerRoom: null,
    totalRooms: null,
    roomDuration: null,
    channelWiseSessions: null,
    channelWiseUsers: null,
    usagetracking: null
};
var AnalysisStateReducer2 = /** @class */ (function () {
    function AnalysisStateReducer2() {
    }
    AnalysisStateReducer2.prototype.setAnalysis2HeaderData = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        if (state) {
            patchState({ analysisHeaderData: __assign({}, state.analysisHeaderData, payload.analysisHeaderData) });
        }
        else {
            patchState({ analysisHeaderData: payload.analysisHeaderData });
        }
    };
    AnalysisStateReducer2.prototype.setOverviewInfoData = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ overviewInfo: payload.data });
    };
    AnalysisStateReducer2.prototype.setVolumUserData = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ channelWiseFlowsPerSession: payload.data });
    };
    AnalysisStateReducer2.prototype.setUserAcquisition = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ userAcquisition: payload.data });
    };
    AnalysisStateReducer2.prototype.setTotalMessages = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ totalMessages: payload.data });
    };
    AnalysisStateReducer2.prototype.setAverageRoomTime = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ averageRoomTime: payload.data });
    };
    AnalysisStateReducer2.prototype.setUserLoyalty = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ userLoyalty: payload.data });
    };
    AnalysisStateReducer2.prototype.setChannelWiseAverageSessionTime = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ channelWiseAverageSessionTime: payload.data });
    };
    AnalysisStateReducer2.prototype.setTotalFlows = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ totalFlows: payload.data });
    };
    AnalysisStateReducer2.prototype.setFlowsPerRoom = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ flowsPerRoom: payload.data });
    };
    AnalysisStateReducer2.prototype.setTotalRooms = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ totalRooms: payload.data });
    };
    AnalysisStateReducer2.prototype.setRoomDuration = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ roomDuration: payload.data });
    };
    AnalysisStateReducer2.prototype.setChannelWiseSessions = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ channelWiseSessions: payload.data });
    };
    AnalysisStateReducer2.prototype.setChannelWiseUsers = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ channelWiseUsers: payload.data });
    };
    AnalysisStateReducer2.prototype.setUsagetrackingInfo = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ usagetracking: payload.data });
    };
    AnalysisStateReducer2.prototype.topgenerationtemplates = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ topgenerationtemplates: payload.data });
    };
    AnalysisStateReducer2.prototype.TotalSessions = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({ totalSessions: payload.data });
    };
    AnalysisStateReducer2.prototype.resetAnalytics2Data = function (_a) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var state = getState();
        patchState(__assign({}, defaultAnalytics2, { analysisHeaderData: state.analysisHeaderData }));
    };
    AnalysisStateReducer2.prototype.resetAnalytics2HeaderData = function (_a) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var state = getState();
        patchState({ analysisHeaderData: null });
    };
    AnalysisStateReducer2.getAnalytics2HeaderData = function (state) {
        return state.analysisstate2.analysisHeaderData;
    };
    AnalysisStateReducer2.getAnalytics2GraphData = function (state) {
        return __assign({}, state.analysisstate2);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetAnalysis2HeaderData"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetAnalysis2HeaderData"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setAnalysis2HeaderData", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetOverviewInfoData"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetOverviewInfoData"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setOverviewInfoData", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetChannelWiseFlowsPerSession"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetChannelWiseFlowsPerSession"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setVolumUserData", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetUserAcquisition"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetUserAcquisition"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setUserAcquisition", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetTotalMessages"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetTotalMessages"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setTotalMessages", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetAverageRoomTime"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetAverageRoomTime"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setAverageRoomTime", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetUserLoyalty"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetUserLoyalty"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setUserLoyalty", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetChannelWiseAverageSessionTime"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetChannelWiseAverageSessionTime"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setChannelWiseAverageSessionTime", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetTotalFlows"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetTotalFlows"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setTotalFlows", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetFlowsPerRoom"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetFlowsPerRoom"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setFlowsPerRoom", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetTotalRooms"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetTotalRooms"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setTotalRooms", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetRoomDuration"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetRoomDuration"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setRoomDuration", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetChannelWiseSessions"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetChannelWiseSessions"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setChannelWiseSessions", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetChannelWiseUsers"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetChannelWiseUsers"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setChannelWiseUsers", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetUsagetrackingInfo"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["SetUsagetrackingInfo"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "setUsagetrackingInfo", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["Topgenerationtemplates"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["Topgenerationtemplates"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "topgenerationtemplates", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["TotalSessions"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _analysis_action__WEBPACK_IMPORTED_MODULE_1__["TotalSessions"]]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "TotalSessions", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["ResetAnalytics2GraphData"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "resetAnalytics2Data", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_analysis_action__WEBPACK_IMPORTED_MODULE_1__["ResetAnalytics2HeaderData"]) /*only for logout*/,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AnalysisStateReducer2.prototype, "resetAnalytics2HeaderData", null);
    AnalysisStateReducer2 = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'analysisstate2',
            defaults: defaultAnalytics2
        })
    ], AnalysisStateReducer2);
    return AnalysisStateReducer2;
}());



/***/ }),

/***/ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/store--variable.service.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/store--variable.service.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: StoreVariableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreVariableService", function() { return StoreVariableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreVariableService = /** @class */ (function () {
    function StoreVariableService(store) {
        var _this = this;
        this.store = store;
        this.storeState = null;
        this.store
            .subscribe(function (state) {
            _this.storeState = state;
        });
    }
    StoreVariableService.prototype.getApp = function () {
        if (this.storeState) {
            return this.storeState.app;
        }
        return null;
    };
    StoreVariableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], StoreVariableService);
    return StoreVariableService;
}());



/***/ }),

/***/ "./src/app/core/buildbot/ngxs/buildbot.action.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/buildbot/ngxs/buildbot.action.ts ***!
  \*******************************************************/
/*! exports provided: SaveNewBotInfo_CodeBased, SaveNewBotInfo_PipelineBased, SaveDataManagment, SaveAvatorInfo, SavePipeLineInfo, SaveCustomnersInfo, SaveCodeInfo, SaveIntegrationInfo, ResetBuildBotToDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveNewBotInfo_CodeBased", function() { return SaveNewBotInfo_CodeBased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveNewBotInfo_PipelineBased", function() { return SaveNewBotInfo_PipelineBased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDataManagment", function() { return SaveDataManagment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAvatorInfo", function() { return SaveAvatorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavePipeLineInfo", function() { return SavePipeLineInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveCustomnersInfo", function() { return SaveCustomnersInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveCodeInfo", function() { return SaveCodeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveIntegrationInfo", function() { return SaveIntegrationInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetBuildBotToDefault", function() { return ResetBuildBotToDefault; });
var SaveNewBotInfo_CodeBased = /** @class */ (function () {
    function SaveNewBotInfo_CodeBased(payload) {
        this.payload = payload;
    }
    SaveNewBotInfo_CodeBased.type = '[build-bots] set new codebased bot info1';
    return SaveNewBotInfo_CodeBased;
}());

var SaveNewBotInfo_PipelineBased = /** @class */ (function () {
    function SaveNewBotInfo_PipelineBased(payload) {
        this.payload = payload;
    }
    SaveNewBotInfo_PipelineBased.type = '[build-bots] set new pipeline based bot info';
    return SaveNewBotInfo_PipelineBased;
}());

var SaveDataManagment = /** @class */ (function () {
    function SaveDataManagment(payload) {
        this.payload = payload;
    }
    SaveDataManagment.type = '[build-bots] set data management info';
    return SaveDataManagment;
}());

var SaveAvatorInfo = /** @class */ (function () {
    function SaveAvatorInfo(payload) {
        this.payload = payload;
    }
    SaveAvatorInfo.type = '[build-bots] set Avator info';
    return SaveAvatorInfo;
}());

var SavePipeLineInfo = /** @class */ (function () {
    function SavePipeLineInfo(payload) {
        this.payload = payload;
    }
    SavePipeLineInfo.type = '[build-bots] set PipeLine info';
    return SavePipeLineInfo;
}());

var SaveCustomnersInfo = /** @class */ (function () {
    function SaveCustomnersInfo(payload) {
        this.payload = payload;
    }
    SaveCustomnersInfo.type = '[build-bots] set Customners info';
    return SaveCustomnersInfo;
}());

var SaveCodeInfo = /** @class */ (function () {
    function SaveCodeInfo(payload) {
        this.payload = payload;
    }
    SaveCodeInfo.type = '[build-bots] set Code info';
    return SaveCodeInfo;
}());

var SaveIntegrationInfo = /** @class */ (function () {
    function SaveIntegrationInfo(payload) {
        this.payload = payload;
    }
    SaveIntegrationInfo.type = '[build-bots] set Integration info';
    return SaveIntegrationInfo;
}());

var ResetBuildBotToDefault = /** @class */ (function () {
    function ResetBuildBotToDefault() {
    }
    ResetBuildBotToDefault.type = '[build-bots] set Integration info';
    return ResetBuildBotToDefault;
}());



/***/ }),

/***/ "./src/app/core/buildbot/ngxs/buildbot.state.ts":
/*!******************************************************!*\
  !*** ./src/app/core/buildbot/ngxs/buildbot.state.ts ***!
  \******************************************************/
/*! exports provided: BotCreationStateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotCreationStateReducer", function() { return BotCreationStateReducer; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _buildbot_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildbot.action */ "./src/app/core/buildbot/ngxs/buildbot.action.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
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




var defaultCodeBasedBotState = {
    logo: 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
    room_persistence_time: 240,
    data_persistence_period: 30,
    transactions_per_pricing_unit: 30
};
defaultCodeBasedBotState[_utility_service__WEBPACK_IMPORTED_MODULE_3__["EFormValidationErrors"].form_validation_basic_info] = false;
defaultCodeBasedBotState[_utility_service__WEBPACK_IMPORTED_MODULE_3__["EFormValidationErrors"].form_validation_avator] = false;
var defaultPipeLineBasedBotState = __assign({}, defaultCodeBasedBotState);
delete defaultPipeLineBasedBotState[_utility_service__WEBPACK_IMPORTED_MODULE_3__["EFormValidationErrors"].form_validation_avator];
var defaultBuildBotState = {
    codeBased: defaultCodeBasedBotState,
    pipeLineBased: defaultPipeLineBasedBotState
};
var BotCreationStateReducer = /** @class */ (function () {
    function BotCreationStateReducer(constantsService) {
        this.constantsService = constantsService;
    }
    BotCreationStateReducer.prototype.saveBasicInfo = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var x = __assign({}, state, { codeBased: __assign({}, state.codeBased, payload.data) });
        setState(x);
    };
    BotCreationStateReducer.prototype.saveNewBotInfoPipelineBased = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var x = __assign({}, state, { pipeLineBased: __assign({}, state.pipeLineBased, payload.data) });
        setState(x);
    };
    BotCreationStateReducer.prototype.saveDataManagment = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var x = __assign({}, state, { codeBased: __assign({}, state.codeBased, payload.data) });
        setState(x);
    };
    BotCreationStateReducer.prototype.saveAvatorInfo = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({
            codeBased: __assign({}, state.codeBased, { avatars: payload.data.avatars })
        });
    };
    BotCreationStateReducer.prototype.savePipeLineInfo = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({
            codeBased: __assign({}, state.codeBased)
        });
    };
    BotCreationStateReducer.prototype.saveCustomnersInfo = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        setState(__assign({}, state));
    };
    // @Action(SaveCodeInfo)
    // saveCodeInfo({patchState, setState, getState, dispatch}: StateContext<IBotCreationState>, {payload}: SaveCodeInfo) {
    //   // ;
    //   let state: IBotCreationState = getState();
    //   patchState({
    //     codeBased: {
    //       ...state.codeBased,
    //       code: {
    //         ...state.codeBased.code
    //         , ...payload.data.code
    //
    //       }
    //     }
    //   });
    // }
    BotCreationStateReducer.prototype.SaveIntegrationInfo = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({
            codeBased: __assign({}, state.codeBased)
        });
        // setState({...state});
    };
    BotCreationStateReducer.prototype.resetBuildBotToDefault = function (_a) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var state = getState();
        patchState(defaultBuildBotState);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveNewBotInfo_CodeBased"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveNewBotInfo_CodeBased"]]),
        __metadata("design:returntype", void 0)
    ], BotCreationStateReducer.prototype, "saveBasicInfo", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveNewBotInfo_PipelineBased"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveNewBotInfo_PipelineBased"]]),
        __metadata("design:returntype", void 0)
    ], BotCreationStateReducer.prototype, "saveNewBotInfoPipelineBased", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveDataManagment"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveDataManagment"]]),
        __metadata("design:returntype", void 0)
    ], BotCreationStateReducer.prototype, "saveDataManagment", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveAvatorInfo"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveAvatorInfo"]]),
        __metadata("design:returntype", void 0)
    ], BotCreationStateReducer.prototype, "saveAvatorInfo", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SavePipeLineInfo"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SavePipeLineInfo"]]),
        __metadata("design:returntype", void 0)
    ], BotCreationStateReducer.prototype, "savePipeLineInfo", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveCustomnersInfo"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveCustomnersInfo"]]),
        __metadata("design:returntype", void 0)
    ], BotCreationStateReducer.prototype, "saveCustomnersInfo", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveIntegrationInfo"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _buildbot_action__WEBPACK_IMPORTED_MODULE_1__["SaveIntegrationInfo"]]),
        __metadata("design:returntype", void 0)
    ], BotCreationStateReducer.prototype, "SaveIntegrationInfo", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_buildbot_action__WEBPACK_IMPORTED_MODULE_1__["ResetBuildBotToDefault"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BotCreationStateReducer.prototype, "resetBuildBotToDefault", null);
    BotCreationStateReducer = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'botcreationstate',
            defaults: defaultBuildBotState
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"]])
    ], BotCreationStateReducer);
    return BotCreationStateReducer;
}());



/***/ }),

/***/ "./src/app/core/enterpriseprofile/ngxs/enterpriseprofile.action.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/enterpriseprofile/ngxs/enterpriseprofile.action.ts ***!
  \*************************************************************************/
/*! exports provided: SetEnterpriseInfoAction, SetEnterpriseUsersAction, ResetEnterpriseUsersAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEnterpriseInfoAction", function() { return SetEnterpriseInfoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEnterpriseUsersAction", function() { return SetEnterpriseUsersAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetEnterpriseUsersAction", function() { return ResetEnterpriseUsersAction; });
var SetEnterpriseInfoAction = /** @class */ (function () {
    function SetEnterpriseInfoAction(payload) {
        this.payload = payload;
    }
    SetEnterpriseInfoAction.type = '[view-bots] set enterpriseinfo';
    return SetEnterpriseInfoAction;
}());

var SetEnterpriseUsersAction = /** @class */ (function () {
    function SetEnterpriseUsersAction(payload) {
        this.payload = payload;
    }
    SetEnterpriseUsersAction.type = '[enterprise-users] set enterpriseusers';
    return SetEnterpriseUsersAction;
}());

var ResetEnterpriseUsersAction = /** @class */ (function () {
    function ResetEnterpriseUsersAction() {
    }
    ResetEnterpriseUsersAction.type = '[enterprise-users] set ResetEnterpriseUsersAction';
    return ResetEnterpriseUsersAction;
}());



/***/ }),

/***/ "./src/app/core/enterpriseprofile/ngxs/enterpriseprofile.state.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/enterpriseprofile/ngxs/enterpriseprofile.state.ts ***!
  \************************************************************************/
/*! exports provided: EnterpriseprofileStateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseprofileStateReducer", function() { return EnterpriseprofileStateReducer; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enterpriseprofile.action */ "./src/app/core/enterpriseprofile/ngxs/enterpriseprofile.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var initialState = {
    'id': '',
    enterpriseUniqueName: '',
    'created_at': '',
    "email": '',
    'enterprise_unique_name': '',
    "industry": '',
    'logo': '',
    'name': '',
    "phone": '',
    "tier": '',
    'updated_at': '',
    'updated_by': null,
    "websiteUrl": '',
    "enterpriseusers": [],
    'tier_group': null,
    'log_retention_period': '',
    'secret_key': '',
};
var EnterpriseprofileStateReducer = /** @class */ (function () {
    function EnterpriseprofileStateReducer() {
    }
    EnterpriseprofileStateReducer.prototype.SetEnterpriseInfo = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        patchState(payload.enterpriseInfo);
    };
    EnterpriseprofileStateReducer.prototype.setEnterpriseUsers = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        patchState({ enterpriseusers: payload.enterpriseUsers });
    };
    EnterpriseprofileStateReducer.prototype.resetEnterpriseUsersAction = function (_a) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        setState(initialState);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_1__["SetEnterpriseInfoAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_1__["SetEnterpriseInfoAction"]]),
        __metadata("design:returntype", void 0)
    ], EnterpriseprofileStateReducer.prototype, "SetEnterpriseInfo", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_1__["SetEnterpriseUsersAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_1__["SetEnterpriseUsersAction"]]),
        __metadata("design:returntype", void 0)
    ], EnterpriseprofileStateReducer.prototype, "setEnterpriseUsers", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_1__["ResetEnterpriseUsersAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EnterpriseprofileStateReducer.prototype, "resetEnterpriseUsersAction", null);
    EnterpriseprofileStateReducer = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'loggeduserenterpriseinfo',
            defaults: initialState
        })
    ], EnterpriseprofileStateReducer);
    return EnterpriseprofileStateReducer;
}());



/***/ }),

/***/ "./src/app/core/not-found/not-found.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\r\n  <h1>404.Not Found</h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        console.log(this.activatedRoute);
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/core/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/core/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/reports/ngxs/reports.action.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/reports/ngxs/reports.action.ts ***!
  \*****************************************************/
/*! exports provided: SetReportFormAction, SetCurrentEditedReportAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetReportFormAction", function() { return SetReportFormAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentEditedReportAction", function() { return SetCurrentEditedReportAction; });
var SetReportFormAction = /** @class */ (function () {
    function SetReportFormAction(payload) {
        this.payload = payload;
    }
    SetReportFormAction.type = '[reports] set reportItem$ f ';
    return SetReportFormAction;
}());

var SetCurrentEditedReportAction = /** @class */ (function () {
    function SetCurrentEditedReportAction(payload) {
        this.payload = payload;
    }
    SetCurrentEditedReportAction.type = '[reports] set SetCurrentEditedReportAction ';
    return SetCurrentEditedReportAction;
}());



/***/ }),

/***/ "./src/app/core/reports/ngxs/reports.state.ts":
/*!****************************************************!*\
  !*** ./src/app/core/reports/ngxs/reports.state.ts ***!
  \****************************************************/
/*! exports provided: ReportsStateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsStateReducer", function() { return ReportsStateReducer; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _reports_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.action */ "./src/app/core/reports/ngxs/reports.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportsStateReducer = /** @class */ (function () {
    //same as reducer
    function ReportsStateReducer() {
    }
    ReportsStateReducer.prototype.setCodebasedBotList = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        patchState({ formData: payload.reportItem });
    };
    ReportsStateReducer.prototype.setCurrentEditedReportAction = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        patchState({ currentEditedReport: payload.reportItem });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_reports_action__WEBPACK_IMPORTED_MODULE_1__["SetCurrentEditedReportAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _reports_action__WEBPACK_IMPORTED_MODULE_1__["SetCurrentEditedReportAction"]]),
        __metadata("design:returntype", void 0)
    ], ReportsStateReducer.prototype, "setCodebasedBotList", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_reports_action__WEBPACK_IMPORTED_MODULE_1__["SetCurrentEditedReportAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _reports_action__WEBPACK_IMPORTED_MODULE_1__["SetCurrentEditedReportAction"]]),
        __metadata("design:returntype", void 0)
    ], ReportsStateReducer.prototype, "setCurrentEditedReportAction", null);
    ReportsStateReducer = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'reportItem',
            defaults: {
                formData: null,
                currentEditedReport: null
            }
        })
        //same as reducer
    ], ReportsStateReducer);
    return ReportsStateReducer;
}());



/***/ }),

/***/ "./src/app/core/view-bots/ngxs/view-bot.action.ts":
/*!********************************************************!*\
  !*** ./src/app/core/view-bots/ngxs/view-bot.action.ts ***!
  \********************************************************/
/*! exports provided: SetCodeBasedBotListAction, SetAllBotListAction, AddNewBotInAllBotList, SetPipeLineBasedBotListAction, ResetBotListAction, SaveVersionInfoInBot, UpdateVersionInfoByIdInBot, UpdateBotInfoByIdInBotInBotList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCodeBasedBotListAction", function() { return SetCodeBasedBotListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAllBotListAction", function() { return SetAllBotListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewBotInAllBotList", function() { return AddNewBotInAllBotList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPipeLineBasedBotListAction", function() { return SetPipeLineBasedBotListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetBotListAction", function() { return ResetBotListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveVersionInfoInBot", function() { return SaveVersionInfoInBot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVersionInfoByIdInBot", function() { return UpdateVersionInfoByIdInBot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBotInfoByIdInBotInBotList", function() { return UpdateBotInfoByIdInBotInBotList; });
var SetCodeBasedBotListAction = /** @class */ (function () {
    function SetCodeBasedBotListAction(payload) {
        this.payload = payload;
    }
    SetCodeBasedBotListAction.type = '[view-bots] set code-based-timePeriod-list';
    return SetCodeBasedBotListAction;
}());

var SetAllBotListAction = /** @class */ (function () {
    function SetAllBotListAction(payload) {
        this.payload = payload;
    }
    SetAllBotListAction.type = '[view-bots] set SetAllBotListAction';
    return SetAllBotListAction;
}());

var AddNewBotInAllBotList = /** @class */ (function () {
    function AddNewBotInAllBotList(payload) {
        this.payload = payload;
    }
    AddNewBotInAllBotList.type = '[view-bots] set AddNewBotInAllBotList';
    return AddNewBotInAllBotList;
}());

var SetPipeLineBasedBotListAction = /** @class */ (function () {
    function SetPipeLineBasedBotListAction(payload) {
        this.payload = payload;
    }
    SetPipeLineBasedBotListAction.type = '[view-bots] set pipeline-based-list';
    return SetPipeLineBasedBotListAction;
}());

var ResetBotListAction = /** @class */ (function () {
    function ResetBotListAction() {
    }
    ResetBotListAction.type = '[view-bots] reset ResetBotListAction';
    return ResetBotListAction;
}());

var SaveVersionInfoInBot = /** @class */ (function () {
    function SaveVersionInfoInBot(payload) {
        this.payload = payload;
    }
    SaveVersionInfoInBot.type = '[build-bots] set version info in bot';
    return SaveVersionInfoInBot;
}());

var UpdateVersionInfoByIdInBot = /** @class */ (function () {
    function UpdateVersionInfoByIdInBot(payload) {
        this.payload = payload;
    }
    UpdateVersionInfoByIdInBot.type = '[build-bots] update version info in bot';
    return UpdateVersionInfoByIdInBot;
}());

var UpdateBotInfoByIdInBotInBotList = /** @class */ (function () {
    function UpdateBotInfoByIdInBotInBotList(payload) {
        this.payload = payload;
    }
    UpdateBotInfoByIdInBotInBotList.type = '[build-bots] set info in bot inj botlist';
    return UpdateBotInfoByIdInBotInBotList;
}());



/***/ }),

/***/ "./src/app/core/view-bots/ngxs/view-bot.state.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/view-bots/ngxs/view-bot.state.ts ***!
  \*******************************************************/
/*! exports provided: ViewBotStateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBotStateReducer", function() { return ViewBotStateReducer; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _view_bot_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-bot.action */ "./src/app/core/view-bots/ngxs/view-bot.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



var ViewBotStateReducer = /** @class */ (function () {
    function ViewBotStateReducer(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ViewBotStateReducer.prototype.setAllBotListAction = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({
            // codeBasedBotList: payload.botList,
            allBotList: payload.botList.slice()
        });
    };
    ViewBotStateReducer.prototype.addNewBotInAllBotList = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var allBotList = state.allBotList.push(payload.bot);
        patchState({
            allBotList: state.allBotList.slice()
        });
    };
    ViewBotStateReducer.prototype.setCodebasedBotList = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({
            codeBasedBotList: payload.botList,
        });
    };
    ViewBotStateReducer.prototype.setPipelineBasedBotList = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        patchState({
            pipelineBasedBotList: payload.botList,
        });
    };
    ViewBotStateReducer.prototype.resetBotList = function (_a) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        setState({
            codeBasedBotList: null,
            pipelineBasedBotList: null,
            allBotList: null
        });
    };
    ViewBotStateReducer.prototype.saveVersionInfoInBot = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var bot = state.allBotList.find(function (bot) { return bot.id === payload.botId; });
        // "updated_fields"?: {
        //   "df_template"?: boolean,
        //   "df_rules"?: boolean,
        //   "generation_rules"?: boolean,
        //   "generation_template"?: boolean,
        //   "workflows"?: boolean
        // }
        var versionList = payload.data;
        // versionList.forEach(version => {
        //   version.store_updated_fields = {
        //     "df_template": false,
        //     "df_rules": false,
        //     "generation_rules": false,
        //     "generation_template": false,
        //     "workflows": false
        //   }
        // });
        // versionList = {...versionList}
        bot.store_bot_versions = versionList;
        setState(__assign({}, state));
    };
    ViewBotStateReducer.prototype.updateVersionInfoByIdInBot = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        var bot = state.allBotList.find(function (bot) { return bot.id === payload.botId; });
        var store_bot_versions = bot.store_bot_versions || (bot.store_bot_versions = []);
        var index = store_bot_versions.findIndex(function (version) { return version.id === payload.data.id; });
        // index =  index===-1?0:index;
        if (index !== -1) {
            store_bot_versions[index] = __assign({}, store_bot_versions[index], payload.data);
        }
        else {
            store_bot_versions.push(payload.data);
        }
        setState(__assign({}, state));
    };
    ViewBotStateReducer.prototype.updateBotInfoByIdInBotInBotList = function (_a, _b) {
        var patchState = _a.patchState, setState = _a.setState, getState = _a.getState, dispatch = _a.dispatch;
        var payload = _b.payload;
        var state = getState();
        state.allBotList = state.allBotList.map(function (bot) {
            if (bot.id === payload.botId) {
                return __assign({}, bot, payload.data);
            }
            else {
                return bot;
            }
            // return  ? {...bot, ...payload.data} : bot;
        });
        setState(__assign({}, state));
    };
    ViewBotStateReducer.getCodeBased = function (x) {
        return x.botlist.codeBasedBotList;
    };
    ViewBotStateReducer.getPipelineBased = function (x) {
        // ;
        return x.botlist.pipelineBasedBotList;
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_view_bot_action__WEBPACK_IMPORTED_MODULE_1__["SetAllBotListAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _view_bot_action__WEBPACK_IMPORTED_MODULE_1__["SetAllBotListAction"]]),
        __metadata("design:returntype", void 0)
    ], ViewBotStateReducer.prototype, "setAllBotListAction", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_view_bot_action__WEBPACK_IMPORTED_MODULE_1__["AddNewBotInAllBotList"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _view_bot_action__WEBPACK_IMPORTED_MODULE_1__["AddNewBotInAllBotList"]]),
        __metadata("design:returntype", void 0)
    ], ViewBotStateReducer.prototype, "addNewBotInAllBotList", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_view_bot_action__WEBPACK_IMPORTED_MODULE_1__["SetCodeBasedBotListAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _view_bot_action__WEBPACK_IMPORTED_MODULE_1__["SetCodeBasedBotListAction"]]),
        __metadata("design:returntype", void 0)
    ], ViewBotStateReducer.prototype, "setCodebasedBotList", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_view_bot_action__WEBPACK_IMPORTED_MODULE_1__["SetPipeLineBasedBotListAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _view_bot_action__WEBPACK_IMPORTED_MODULE_1__["SetPipeLineBasedBotListAction"]]),
        __metadata("design:returntype", void 0)
    ], ViewBotStateReducer.prototype, "setPipelineBasedBotList", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_view_bot_action__WEBPACK_IMPORTED_MODULE_1__["ResetBotListAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ViewBotStateReducer.prototype, "resetBotList", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_view_bot_action__WEBPACK_IMPORTED_MODULE_1__["SaveVersionInfoInBot"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _view_bot_action__WEBPACK_IMPORTED_MODULE_1__["SaveVersionInfoInBot"]]),
        __metadata("design:returntype", void 0)
    ], ViewBotStateReducer.prototype, "saveVersionInfoInBot", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_view_bot_action__WEBPACK_IMPORTED_MODULE_1__["UpdateVersionInfoByIdInBot"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _view_bot_action__WEBPACK_IMPORTED_MODULE_1__["UpdateVersionInfoByIdInBot"]]),
        __metadata("design:returntype", void 0)
    ], ViewBotStateReducer.prototype, "updateVersionInfoByIdInBot", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_view_bot_action__WEBPACK_IMPORTED_MODULE_1__["UpdateBotInfoByIdInBotInBotList"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _view_bot_action__WEBPACK_IMPORTED_MODULE_1__["UpdateBotInfoByIdInBotInBotList"]]),
        __metadata("design:returntype", void 0)
    ], ViewBotStateReducer.prototype, "updateBotInfoByIdInBotInBotList", null);
    ViewBotStateReducer = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'botlist',
            defaults: {
                codeBasedBotList: null,
                pipelineBasedBotList: null,
                allBotList: null
            }
        })
        //same as reducer
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewBotStateReducer);
    return ViewBotStateReducer;
}());



/***/ }),

/***/ "./src/app/drag.service.ts":
/*!*********************************!*\
  !*** ./src/app/drag.service.ts ***!
  \*********************************/
/*! exports provided: DragService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragService", function() { return DragService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragService = /** @class */ (function () {
    function DragService() {
    }
    DragService.prototype.startDrag = function (zone) {
        this.zone = zone;
    };
    DragService.prototype.accepts = function (zone) {
        return zone == this.zone;
    };
    DragService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DragService);
    return DragService;
}());



/***/ }),

/***/ "./src/app/filter-array.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/filter-array.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterArrayPipe", function() { return FilterArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterArrayPipe = /** @class */ (function () {
    function FilterArrayPipe() {
    }
    FilterArrayPipe.prototype.transform = function (arr, key) {
        return arr.sort(function (obj1, obj2) {
            return obj2[key] - obj1[key];
        });
    };
    FilterArrayPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterArray'
        })
    ], FilterArrayPipe);
    return FilterArrayPipe;
}());



/***/ }),

/***/ "./src/app/imi-loader/imi-loader.component.html":
/*!******************************************************!*\
  !*** ./src/app/imi-loader/imi-loader.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-centered-box\" style=\"position: fixed; left: 0; right: 0;top: 0; bottom: 0 \">\r\n  <div class=\"content\">\r\n    <div class=\"loader-circle\"></div>\r\n    <div class=\"loader-line-mask\">\r\n      <div class=\"loader-line\"></div>\r\n    </div>\r\n    <img src=\"https://staging.imibot.ai/static/favicon.ico\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/imi-loader/imi-loader.component.scss":
/*!******************************************************!*\
  !*** ./src/app/imi-loader/imi-loader.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vertical-centered-box:after {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: -0.25em; }\n\n.vertical-centered-box .content {\n  box-sizing: border-box;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: left;\n  font-size: 0; }\n\n* {\n  transition: all 0.3s; }\n\n.loader-circle {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 80%;\n  height: 80%;\n  border-radius: 50%;\n  margin-left: -60px;\n  margin-top: -60px; }\n\n.loader-line-mask {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 60px;\n  height: 120px;\n  margin-left: -60px;\n  margin-top: -60px;\n  overflow: hidden;\n  -webkit-transform-origin: 60px 60px;\n  transform-origin: 60px 60px;\n  -webkit-mask-image: -webkit-linear-gradient(top, #ffffff, rgba(255, 255, 255, 0));\n  -webkit-animation: rotate 1.2s infinite linear;\n  animation: rotate 1.2s infinite linear; }\n\n.loader-line-mask .loader-line {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 2px #02BDE8; }\n\nlesshat-selector {\n  -lh-property: 0; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n[not-existing] {\n  zoom: 1; }\n\nlesshat-selector {\n  -lh-property: 0; }\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.25; } }\n\n@keyframes fade {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.25; } }\n\n[not-existing] {\n  zoom: 1; }\n\nlesshat-selector {\n  -lh-property: 0; }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n[not-existing] {\n  zoom: 1; }\n"

/***/ }),

/***/ "./src/app/imi-loader/imi-loader.component.ts":
/*!****************************************************!*\
  !*** ./src/app/imi-loader/imi-loader.component.ts ***!
  \****************************************************/
/*! exports provided: ImiLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImiLoaderComponent", function() { return ImiLoaderComponent; });
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

var ImiLoaderComponent = /** @class */ (function () {
    function ImiLoaderComponent() {
    }
    ImiLoaderComponent.prototype.ngOnInit = function () {
    };
    ImiLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-imi-loader',
            template: __webpack_require__(/*! ./imi-loader.component.html */ "./src/app/imi-loader/imi-loader.component.html"),
            styles: [__webpack_require__(/*! ./imi-loader.component.scss */ "./src/app/imi-loader/imi-loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImiLoaderComponent);
    return ImiLoaderComponent;
}());



/***/ }),

/***/ "./src/app/ms-to-hh-mm.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/ms-to-hh-mm.pipe.ts ***!
  \*************************************/
/*! exports provided: MsToHhMmPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsToHhMmPipe", function() { return MsToHhMmPipe; });
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

var MsToHhMmPipe = /** @class */ (function () {
    function MsToHhMmPipe() {
    }
    MsToHhMmPipe.prototype.getCurrentTimeInHHMM = function (ms) {
        var date = new Date(ms);
        var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        return hours + ':' + minutes;
    };
    ;
    MsToHhMmPipe.prototype.transform = function (time_ms, args) {
        return this.getCurrentTimeInHHMM(time_ms);
    };
    MsToHhMmPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'msToHhmm'
        }),
        __metadata("design:paramtypes", [])
    ], MsToHhMmPipe);
    return MsToHhMmPipe;
}());



/***/ }),

/***/ "./src/app/ngxs/app.action.ts":
/*!************************************!*\
  !*** ./src/app/ngxs/app.action.ts ***!
  \************************************/
/*! exports provided: SetStateFromLocalStorageAction, SetLastSateUpdatedTimeAction, ResetStoreToDefault, SetProgressValue, SetMasterIntegrationsList, SetMasterProfilePermissions, SetBackendURlRoot, SetShowBackendURlRoot, SetEnterpriseNerData, SetPipelineModuleMasterData, ResetAppState, SetAutoLogoutTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStateFromLocalStorageAction", function() { return SetStateFromLocalStorageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLastSateUpdatedTimeAction", function() { return SetLastSateUpdatedTimeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetStoreToDefault", function() { return ResetStoreToDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetProgressValue", function() { return SetProgressValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMasterIntegrationsList", function() { return SetMasterIntegrationsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMasterProfilePermissions", function() { return SetMasterProfilePermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetBackendURlRoot", function() { return SetBackendURlRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetShowBackendURlRoot", function() { return SetShowBackendURlRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEnterpriseNerData", function() { return SetEnterpriseNerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPipelineModuleMasterData", function() { return SetPipelineModuleMasterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetAppState", function() { return ResetAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAutoLogoutTime", function() { return SetAutoLogoutTime; });
var SetStateFromLocalStorageAction = /** @class */ (function () {
    function SetStateFromLocalStorageAction(payload) {
        this.payload = payload;
    }
    SetStateFromLocalStorageAction.type = '[app] set state from localstorage';
    return SetStateFromLocalStorageAction;
}());

var SetLastSateUpdatedTimeAction = /** @class */ (function () {
    function SetLastSateUpdatedTimeAction(payload) {
        this.payload = payload;
    }
    SetLastSateUpdatedTimeAction.type = '[app] set last state updated';
    return SetLastSateUpdatedTimeAction;
}());

var ResetStoreToDefault = /** @class */ (function () {
    function ResetStoreToDefault() {
    }
    ResetStoreToDefault.type = '[app] reset ResetStoreToDefault';
    return ResetStoreToDefault;
}());

var SetProgressValue = /** @class */ (function () {
    function SetProgressValue(payload) {
        this.payload = payload;
    }
    SetProgressValue.type = '[app] set SetProgressValue';
    return SetProgressValue;
}());

var SetMasterIntegrationsList = /** @class */ (function () {
    function SetMasterIntegrationsList(payload) {
        this.payload = payload;
    }
    SetMasterIntegrationsList.type = '[app] set SetMasterIntegrationsList';
    return SetMasterIntegrationsList;
}());

var SetMasterProfilePermissions = /** @class */ (function () {
    function SetMasterProfilePermissions(payload) {
        this.payload = payload;
    }
    SetMasterProfilePermissions.type = '[app] set SetProfilePermissions';
    return SetMasterProfilePermissions;
}());

var SetBackendURlRoot = /** @class */ (function () {
    function SetBackendURlRoot(payload) {
        this.payload = payload;
    }
    SetBackendURlRoot.type = '[app] set SetBackendURlRoot';
    return SetBackendURlRoot;
}());

var SetShowBackendURlRoot = /** @class */ (function () {
    function SetShowBackendURlRoot(payload) {
        this.payload = payload;
    }
    SetShowBackendURlRoot.type = '[app] set SetShowBackendURlRoot ';
    return SetShowBackendURlRoot;
}());

var SetEnterpriseNerData = /** @class */ (function () {
    function SetEnterpriseNerData(payload) {
        this.payload = payload;
    }
    SetEnterpriseNerData.type = '[app] set SetEnterpriseNERs';
    return SetEnterpriseNerData;
}());

var SetPipelineModuleMasterData = /** @class */ (function () {
    function SetPipelineModuleMasterData(payload) {
        this.payload = payload;
    }
    SetPipelineModuleMasterData.type = '[app] set SetPipelineModuleMasterData';
    return SetPipelineModuleMasterData;
}());

var ResetAppState = /** @class */ (function () {
    function ResetAppState() {
    }
    ResetAppState.type = '[app] set ReSetAppState';
    return ResetAppState;
}());

var SetAutoLogoutTime = /** @class */ (function () {
    function SetAutoLogoutTime(payload) {
        this.payload = payload;
    }
    SetAutoLogoutTime.type = '[app] set setAutoLogoutTime';
    return SetAutoLogoutTime;
}());



/***/ }),

/***/ "./src/app/ngxs/app.state.ts":
/*!***********************************!*\
  !*** ./src/app/ngxs/app.state.ts ***!
  \***********************************/
/*! exports provided: AppStateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStateReducer", function() { return AppStateReducer; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.action */ "./src/app/ngxs/app.action.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.service */ "./src/app/constants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var appDefaultState = {
    lastUpdated: 0,
    progressbar: {
        show: false,
        loading: false,
        value: 0
    },
    masterIntegrationList: null,
    masterProfilePermissions: null,
    backendUrlRoot: 'https://staging.imibot.ai/',
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
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetStateFromLocalStorageAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_action__WEBPACK_IMPORTED_MODULE_1__["SetStateFromLocalStorageAction"]]),
        __metadata("design:returntype", void 0)
    ], AppStateReducer.prototype, "setUsername", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetProgressValue"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_action__WEBPACK_IMPORTED_MODULE_1__["SetProgressValue"]]),
        __metadata("design:returntype", void 0)
    ], AppStateReducer.prototype, "SetProgressValue", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetMasterIntegrationsList"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_action__WEBPACK_IMPORTED_MODULE_1__["SetMasterIntegrationsList"]]),
        __metadata("design:returntype", void 0)
    ], AppStateReducer.prototype, "setMasterIntegrationsList", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetMasterProfilePermissions"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_action__WEBPACK_IMPORTED_MODULE_1__["SetMasterProfilePermissions"]]),
        __metadata("design:returntype", void 0)
    ], AppStateReducer.prototype, "setMasterProfilePermissions", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetBackendURlRoot"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_action__WEBPACK_IMPORTED_MODULE_1__["SetBackendURlRoot"]]),
        __metadata("design:returntype", void 0)
    ], AppStateReducer.prototype, "setBackendURlRoot", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetShowBackendURlRoot"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_action__WEBPACK_IMPORTED_MODULE_1__["SetShowBackendURlRoot"]]),
        __metadata("design:returntype", void 0)
    ], AppStateReducer.prototype, "setShowBackendURlRoot", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetEnterpriseNerData"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_action__WEBPACK_IMPORTED_MODULE_1__["SetEnterpriseNerData"]]),
        __metadata("design:returntype", void 0)
    ], AppStateReducer.prototype, "setEnterpriseNerData", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetPipelineModuleMasterData"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_action__WEBPACK_IMPORTED_MODULE_1__["SetPipelineModuleMasterData"]]),
        __metadata("design:returntype", void 0)
    ], AppStateReducer.prototype, "setPipelineModuleMasterData", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetAutoLogoutTime"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_action__WEBPACK_IMPORTED_MODULE_1__["SetAutoLogoutTime"]]),
        __metadata("design:returntype", void 0)
    ], AppStateReducer.prototype, "setAutoLogoutTime", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["ResetAppState"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_action__WEBPACK_IMPORTED_MODULE_1__["ResetAppState"]]),
        __metadata("design:returntype", void 0)
    ], AppStateReducer.prototype, "resetAppState", null);
    AppStateReducer = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'app',
            defaults: appDefaultState
        }) //same as reducer
        ,
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Store"]])
    ], AppStateReducer);
    return AppStateReducer;
}());



/***/ }),

/***/ "./src/app/not-authorised/not-authorised.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-authorised/not-authorised.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\r\n  <h1>Not Authorized</h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/not-authorised/not-authorised.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/not-authorised/not-authorised.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-authorised/not-authorised.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-authorised/not-authorised.component.ts ***!
  \************************************************************/
/*! exports provided: NotAuthorisedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthorisedComponent", function() { return NotAuthorisedComponent; });
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

var NotAuthorisedComponent = /** @class */ (function () {
    function NotAuthorisedComponent() {
    }
    NotAuthorisedComponent.prototype.ngOnInit = function () {
    };
    NotAuthorisedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-authorised',
            template: __webpack_require__(/*! ./not-authorised.component.html */ "./src/app/not-authorised/not-authorised.component.html"),
            styles: [__webpack_require__(/*! ./not-authorised.component.scss */ "./src/app/not-authorised/not-authorised.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotAuthorisedComponent);
    return NotAuthorisedComponent;
}());



/***/ }),

/***/ "./src/app/rich-media.module.ts":
/*!**************************************!*\
  !*** ./src/app/rich-media.module.ts ***!
  \**************************************/
/*! exports provided: RichMediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichMediaModule", function() { return RichMediaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_carousel_card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat/carousel/card-carousel/card-carousel.component */ "./src/app/chat/carousel/card-carousel/card-carousel.component.ts");
/* harmony import */ var _chat_carousel_quick_reply_quick_reply_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/carousel/quick-reply/quick-reply.component */ "./src/app/chat/carousel/quick-reply/quick-reply.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _imi_loader_imi_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imi-loader/imi-loader.component */ "./src/app/imi-loader/imi-loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RichMediaModule = /** @class */ (function () {
    function RichMediaModule() {
    }
    RichMediaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _chat_carousel_card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CardCarouselComponent"],
                _chat_carousel_quick_reply_quick_reply_component__WEBPACK_IMPORTED_MODULE_2__["QuickReplyComponent"],
                _imi_loader_imi_loader_component__WEBPACK_IMPORTED_MODULE_4__["ImiLoaderComponent"]
            ],
            exports: [
                _chat_carousel_card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CardCarouselComponent"],
                _chat_carousel_quick_reply_quick_reply_component__WEBPACK_IMPORTED_MODULE_2__["QuickReplyComponent"],
                _imi_loader_imi_loader_component__WEBPACK_IMPORTED_MODULE_4__["ImiLoaderComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ]
        })
    ], RichMediaModule);
    return RichMediaModule;
}());



/***/ }),

/***/ "./src/app/server.service.ts":
/*!***********************************!*\
  !*** ./src/app/server.service.ts ***!
  \***********************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/observable/throw */ "./node_modules/rxjs-compat/_esm5/observable/throw.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _core_view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/view-bots/ngxs/view-bot.action */ "./src/app/core/view-bots/ngxs/view-bot.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_app_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ngxs/app.action */ "./src/app/ngxs/app.action.ts");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat/ngxs/chat.action */ "./src/app/chat/ngxs/chat.action.ts");
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
















var ServerService = /** @class */ (function () {
    function ServerService(httpClient, utilityService, store, router, constantsService) {
        var _this = this;
        this.httpClient = httpClient;
        this.utilityService = utilityService;
        this.store = store;
        this.router = router;
        this.constantsService = constantsService;
        this.X_AXIS_TOKEN = null;
        this.AUTH_TOKEN = null;
        this.isLoggedIn = false;
        this.loggeduser$.subscribe(function (value) {
            if (!value || !value.user)
                return;
            _this.AUTH_TOKEN = value.user.auth_token && value.user.auth_token;
            _this.X_AXIS_TOKEN = value.user.user_access_token && value.user.user_access_token;
        });
    }
    ;
    ServerService.prototype.removeTokens = function () {
        this.X_AXIS_TOKEN = null;
        this.AUTH_TOKEN = null;
    };
    ServerService.prototype.createHeaders = function (headerData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        var tokenData = {};
        tokenData = { 'user-access-token': this.X_AXIS_TOKEN };
        tokenData = __assign({}, tokenData, { 'auth-token': this.AUTH_TOKEN });
        tokenData = __assign({}, tokenData, { 'content-type': 'application/json' });
        headerData = __assign({}, tokenData, headerData);
        if (headerData)
            for (var key in headerData) {
                /*don't set header data for undefined values*/
                headerData[key] && (headers = headers.set(key, headerData[key]));
            }
        return headers;
    };
    ServerService.prototype.showErrorMessageForErrorTrue = function (errorObj) {
        if (errorObj.error) {
            this.utilityService.showErrorToaster(errorObj.message);
            return true;
        }
        return false;
    };
    ServerService.prototype.makeGetReq = function (reqObj) {
        var _this = this;
        if (!reqObj.noValidateUser && this.constantsService.isApiAccessDenied(reqObj.url)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('api access not allowed');
        }
        var headers = this.createHeaders(reqObj.headerData);
        this.changeProgressBar(true, 0);
        return this.httpClient.get(reqObj.url, { headers: headers })
            .map(function (value) {
            if (value && value.error) {
                _this.showErrorMessageForErrorTrue(value);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(value);
            }
            else {
                return value;
            }
        })
            .do(function (value) {
            _this.changeProgressBar(false, 100);
            _this.IncreaseAutoLogoutTime();
        })
            .catch(function (e, caught) {
            console.log(e);
            _this.showErrorMessageForErrorTrue(e);
            _this.changeProgressBar(false, 100);
            _this.utilityService.showErrorToaster(e);
            return Object(rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_5__["_throw"])('error');
        });
    };
    ServerService.prototype.makeGetReqToDownloadFiles = function (reqObj) {
        var _this = this;
        var headers = this.createHeaders(reqObj.headerData);
        this.changeProgressBar(true, 0);
        return this.httpClient.get(reqObj.url, { headers: headers, responseType: 'text' })
            .map(function (value) {
            if (value && value.error) {
                _this.showErrorMessageForErrorTrue(value);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(value);
            }
            else {
                return value;
            }
        })
            .do(function (value) {
            _this.changeProgressBar(false, 100);
            _this.IncreaseAutoLogoutTime();
        })
            .catch(function (e) {
            console.log(e);
            _this.changeProgressBar(false, 100);
            _this.utilityService.showErrorToaster(e);
            return Object(rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_5__["_throw"])('error');
        });
    };
    ServerService.prototype.makeDeleteReq = function (reqObj) {
        var _this = this;
        var headers = this.createHeaders(reqObj.headerData);
        this.changeProgressBar(true, 0);
        return this.httpClient.delete(reqObj.url, { headers: headers })
            .map(function (value) {
            if (value && value.error) {
                _this.showErrorMessageForErrorTrue(value);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(value);
            }
            else {
                return value;
            }
        })
            .do(function (value) {
            _this.changeProgressBar(false, 100);
            _this.IncreaseAutoLogoutTime();
        })
            .catch(function (e, caught) {
            console.log(e);
            _this.showErrorMessageForErrorTrue(e);
            _this.changeProgressBar(false, 100);
            _this.utilityService.showErrorToaster(e);
            return Object(rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_5__["_throw"])('error');
        });
    };
    ServerService.prototype.makePostReq = function (reqObj) {
        var _this = this;
        var headers = this.createHeaders(reqObj.headerData);
        if (!reqObj.dontShowProgressBar) {
            this.changeProgressBar(true, 0);
        }
        return this.httpClient.post(reqObj.url, reqObj.body, { headers: headers })
            .map(function (value) {
            if (value && value.error) {
                _this.showErrorMessageForErrorTrue(value);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(value);
            }
            else {
                return value;
            }
        })
            .do(function (value) {
            _this.IncreaseAutoLogoutTime();
            if (!reqObj.dontShowProgressBar)
                _this.changeProgressBar(false, 100);
        })
            .catch(function (e, caught) {
            console.log(e);
            _this.showErrorMessageForErrorTrue(e);
            _this.changeProgressBar(false, 100);
            _this.utilityService.showErrorToaster(e);
            return Object(rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_5__["_throw"])('error');
        });
    };
    ServerService.prototype.makePutReq = function (reqObj) {
        var _this = this;
        var headers = this.createHeaders(reqObj.headerData);
        this.changeProgressBar(true, 0);
        return this.httpClient.put(reqObj.url, JSON.stringify(reqObj.body), { headers: headers })
            .map(function (value) {
            ;
            if (value && value.error) {
                _this.showErrorMessageForErrorTrue(value);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(value);
            }
            else {
                return value;
            }
        })
            .do(function (value) {
            _this.IncreaseAutoLogoutTime();
            _this.changeProgressBar(false, 100);
        })
            .catch(function (e, caught) {
            _this.showErrorMessageForErrorTrue(e.error) || _this.showErrorMessageForErrorTrue(e);
            _this.changeProgressBar(false, 100);
            return Object(rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_5__["_throw"])('error');
        });
    };
    ServerService.prototype.fetchSpecificBotFromServerAndUpdateBotList = function (bot) {
        var _this = this;
        var getBotByTokenUrl = this.constantsService.getSpecificBotByBotTokenUrl();
        var headerData = {
            'bot-access-token': bot.bot_access_token
        };
        this.makeGetReq({ url: getBotByTokenUrl, headerData: headerData })
            .subscribe(function (val) {
            var bot = val.objects.find(function (bot) {
                return bot.id === bot.id;
            });
            _this.store.dispatch([
                new _core_view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_8__["UpdateBotInfoByIdInBotInBotList"]({ data: bot, botId: bot.id })
            ]);
        });
    };
    ServerService.prototype.getOverviewInfo = function (body) {
        var url = this.constantsService.getOverViewInfoUrl();
        return this.makePostReq({ url: url, body: body });
    };
    ServerService.prototype.IncreaseAutoLogoutTime = function () {
        var autoLogoutInterval = 3600 * 1000; //3600*1000
        this.store.dispatch([
            new _ngxs_app_action__WEBPACK_IMPORTED_MODULE_10__["SetAutoLogoutTime"]({ time: Date.now() + autoLogoutInterval })
        ]);
    };
    ServerService.prototype.getNSetBotList = function (noValidateUser) {
        var _this = this;
        var url = this.constantsService.getBotListUrl();
        var headerData = { 'content-type': 'application/json' };
        return this.makeGetReq({ url: url, headerData: headerData, noValidateUser: noValidateUser })
            .do(function (botResult) {
            // let codeBasedBotList: IBot[] = [];
            // let pipelineBasedBotList: IBot[] = [];
            // botResult.objects.forEach((bot) => {
            //   bot.bot_type !== 'genbot' ? codeBasedBotList.push(bot) : pipelineBasedBotList.push(bot);
            // });
            _this.store.dispatch(new _core_view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_8__["SetAllBotListAction"]({ botList: botResult.objects }));
            // this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
            // this.store.dispatch(new SetCodeBasedBotListAction({botList: codeBasedBotList}));
        });
    };
    ServerService.prototype.getNSetChatPreviewBot = function (bot_unique_name, enterprise_unique_name) {
        var _this = this;
        // if (!this.currentBot || (this.currentBot && this.currentBot.bot_unique_name !== this.bot_unique_name)) {
        //   let enterprise_unique_name = this.activatedRoute.snapshot.queryParams['enterprise_unique_name'];//testingbot
        //   if (!this.bot_unique_name) return;
        var url = this.constantsService.getNSetChatPreviewBotUrl(bot_unique_name, enterprise_unique_name);
        this.makeGetReq({ url: url, noValidateUser: true })
            .subscribe(function (bot) {
            // this.user_first_name = bot.enterprise_name;
            // this.enterprise_logo = bot.enterprise_logo;
            // this.user_email =bot.enterprise_name;
            _this.store.dispatch([
                new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_14__["SetCurrentBotDetailsAndResetChatStateIfBotMismatch"]({ bot: bot }),
            ]);
        });
    };
    ServerService.prototype.getNSetIntegrationList = function () {
        var _this = this;
        var url = this.constantsService.getMasterIntegrationsList();
        return this.makeGetReq({ url: url })
            .do(function (value) {
            // this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
            // this.store.dispatch(new SetCodeBasedBotListAction({botList: codeBasedBotList}));
        })
            .subscribe(function (value) {
            _this.store.dispatch([
                new _ngxs_app_action__WEBPACK_IMPORTED_MODULE_10__["SetMasterIntegrationsList"]({
                    masterIntegrationList: value.objects
                })
            ]);
        });
    };
    ServerService.prototype.changeProgressBar = function (loading, value) {
        this.store.dispatch([
            new _ngxs_app_action__WEBPACK_IMPORTED_MODULE_10__["SetProgressValue"]({
                progressbar: {
                    loading: loading,
                    value: value
                }
            })
        ]);
    };
    ServerService.prototype.updateOrSaveCustomNer = function (selectedOrNewRowData, bot) {
        var body;
        var headerData = { 'bot-access-token': bot && bot.bot_access_token };
        var url, methodStr;
        if (selectedOrNewRowData && selectedOrNewRowData.id) {
            url = this.constantsService.updateOrDeleteCustomBotNER(selectedOrNewRowData.id);
            methodStr = 'makePutReq';
            body = __assign({ values: selectedOrNewRowData.values, column_headers: selectedOrNewRowData.column_headers }, selectedOrNewRowData);
        }
        else {
            url = this.constantsService.createNewCustomBotNER();
            methodStr = 'makePostReq';
            body = selectedOrNewRowData;
        }
        return this[methodStr]({ url: url, body: body, headerData: headerData });
    };
    ServerService.prototype.deleteNer = function (ner_id, bot) {
        var body;
        var url, headerData;
        if (bot) {
            url = this.constantsService.updateOrDeleteCustomBotNER(ner_id);
            headerData = {
                'bot-access-token': (bot && bot.bot_access_token) || null
            };
        }
        else {
            url = this.constantsService.updateOrDeleteEnterpriseNer(ner_id);
        }
        return this.makeDeleteReq({ url: url, headerData: headerData });
    };
    ServerService.prototype.getAllVersionOfBotFromServerAndStoreInBotInBotList = function (botId, bot_access_token) {
        var _this = this;
        var url = this.constantsService.getAllVersionsByBotId();
        // let botId = this.bot.id;
        this.makeGetReq({ url: url, headerData: { 'bot-access-token': bot_access_token } })
            .subscribe(function (botVersionResult) {
            botVersionResult.objects.forEach(function (version) {
                version.changed_fields = {
                    "df_template": false,
                    "df_rules": false,
                    "generation_rules": false,
                    "generation_template": false,
                    "workflows": false
                };
            });
            _this.store.dispatch([
                new _core_view_bots_ngxs_view_bot_action__WEBPACK_IMPORTED_MODULE_8__["SaveVersionInfoInBot"]({ data: botVersionResult.objects, botId: botId })
            ]);
        });
    };
    ServerService.prototype.initializeIMIConnect = function (previewBot, currentRoomId) {
        var _this = this;
        if (this.currentRoomId === currentRoomId && this.currentPreviewBot === previewBot) {
            return;
        }
        else {
            try {
                IMI.IMIconnect.shutdown();
            }
            catch (e) {
                console.log(e);
            }
        }
        this.currentRoomId = currentRoomId;
        this.currentPreviewBot = previewBot;
        // this.currentPreviewBot = previewBot;
        /*TODO: make initialization happen only once*/
        var imiConnectIntegrationDetails;
        try {
            imiConnectIntegrationDetails = previewBot.integrations.fulfillment_provider_details.imiconnect;
            if (!imiConnectIntegrationDetails.enabled || !imiConnectIntegrationDetails.send_via_connect) {
                console.log('this is not an imiconnect bot...');
                return;
            }
        }
        catch (e) {
            console.log('this is not an imiconnect bot');
            return;
        }
        var appId = imiConnectIntegrationDetails.appId; //'GS23064017';
        var appSecret = imiConnectIntegrationDetails.appSecret; //'uZi6B5Zg';
        // var streamName = "bot";
        var serviceKey = imiConnectIntegrationDetails.serviceKey; //'3b8f6470-5e56-11e8-bf0b-0213261164bb';//'f6e50f7b-2bfd-11e8-bf0b-0213261164bb';
        var userId = currentRoomId + '_hellothisissandeep1231312';
        var config = new IMI.ICConfig(appId, appSecret);
        var messaging = IMI.ICMessaging.getInstance();
        console.info("========initializing connection with imiconnect with following details");
        console.log('appId= ' + appId + '\n', 'appSecret= ' + appSecret + '\n', 'serviceKey= ' + serviceKey + '\n', 'userId= ' + userId + '\n');
        var prepareMessage = function (messageObj) {
            console.info('============================message from IMICONNECT Has been recieved============================', messageObj);
            var generatedMessagesStr = messageObj.message;
            var generatedMessages;
            try {
                generatedMessages = JSON.parse(generatedMessagesStr);
            }
            catch (e) {
                console.error('Unable to parse json from IMIConnect callback', generatedMessagesStr);
                console.error('Assuming its a string');
                generatedMessages = [{ text: generatedMessagesStr }];
            }
            var serializedMessages = _this.utilityService.serializeGeneratedMessagesToPreviewMessages(generatedMessages);
            _this.store.dispatch([
                new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_14__["AddMessagesToRoomByRoomId"]({
                    id: currentRoomId,
                    messageList: serializedMessages
                }),
                new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_14__["ChangeBotIsThinkingDisplayByRoomId"]({ roomId: currentRoomId, shouldShowBotIsThinking: false }),
            ]);
        };
        var msgCallBack = {
            onConnectionStatusChanged: function (statuscode) {
                console.log("msgCallBack,onConnectionStatusChanged", statuscode);
                var statusMessage = null;
                if (statuscode == 2) {
                    statusMessage = 'Connected';
                }
                else if (statuscode == 6) {
                    statusMessage = 'Error while connecting';
                }
                else {
                    statusMessage = 'Not Connected';
                }
            },
            onMessageReceived: function (message) {
                prepareMessage(message);
                if (message.getType() === IMI.ICMessageType.Message) {
                    var callback = {
                        onFailure: function (err) {
                            console.log('failed to get topics:');
                            //handleFailure(err);
                        }
                    };
                    messaging.setMessageAsRead(message.getTransactionId(), callback);
                }
            }
        };
        messaging.setICMessagingReceiver(msgCallBack);
        var deviceId = IMI.ICDeviceProfile.getDefaultDeviceId();
        IMI.IMIconnect.startup(config);
        IMI.IMIconnect.registerListener({
            onFailure: function () {
                console.log('token got expired...');
            }
        });
        var regcallback = {
            onSuccess: function (msg) {
                try {
                    messaging.connect();
                    console.log('onSuccess: reg');
                }
                catch (ex) {
                    console.log(ex);
                }
            },
            onFailure: function (err) {
                console.log('Registration failed');
            }
        };
        var deviceProfile = new IMI.ICDeviceProfile(deviceId, userId);
        console.log('IMI.IMIconnect.isRegistered()' + IMI.IMIconnect.isRegistered());
        IMI.IMIconnect.register(deviceProfile, regcallback);
        // //send message
        //     var pubcallback = {
        //       onSuccess: function () {
        //         console.log("message sent");
        //
        //       },
        //       onFailure: function (errormsg) {
        //         console.log("failed to send message");
        //       }
        //
        //     };
        //
        //     var message = new IMI.ICMessage();
        //     message.setMessage("Hello this is sample message");
        //
        //     var thread = new IMI.ICThread();
        //     thread.setId("bot");
        //     thread.setTitle("bot");
        //     thread.setStreamName(streamName);
        //
        //     message.setThread(thread);
        //     messaging.publishMessage(message, pubcallback);
        this.messaging = messaging;
    };
    ServerService.prototype.sendHumanMessageViaImiConnect = function (currentRoom, currentBot, messageByHuman) {
        var streamName; //'gsureg';
        try {
            streamName = currentBot.integrations.fulfillment_provider_details.imiconnect.streamName;
        }
        catch (e) {
            console.log(e);
        }
        // this.currentRoom = currentRoom;
        //send message
        var pubcallback = {
            onSuccess: function () {
                console.log('message sent');
            },
            onFailure: function (errormsg) {
                console.log('failed to send message');
            }
        };
        var message = new IMI.ICMessage();
        message.setMessage(messageByHuman);
        var thread = new IMI.ICThread();
        thread.setId('bot');
        thread.setTitle('bot');
        thread.setStreamName(streamName);
        message.setThread(thread);
        this.messaging.publishMessage(message, pubcallback);
    };
    ServerService.prototype.startANewChatUsingSendApi = function (startNewChatData) {
        var url = this.constantsService.getStartNewChatLoginUrl();
        var headerData = {
            'bot-access-token': startNewChatData.bot.bot_access_token,
            'auth-token': null,
            'user-access-token': null,
            'content-type': 'application/json'
        };
        var body /*: ISendApiRequestPayload */ = {
            'type': 'bot',
            'msg': 'hi',
            'platform': 'web',
            // 'consumer': {
            //   'uid': this.current_uid,
            // },
            'consumer': startNewChatData.consumerDetails
        };
        return this.makePostReq({ url: url, body: body, headerData: headerData });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ServerService.prototype, "loggeduser$", void 0);
    ServerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "./src/app/utility.service.ts":
/*!************************************!*\
  !*** ./src/app/utility.service.ts ***!
  \************************************/
/*! exports provided: EFormValidationErrors, UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFormValidationErrors", function() { return EFormValidationErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var download_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! download-csv */ "./node_modules/download-csv/index.js");
/* harmony import */ var download_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(download_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interfaces/chat-session-state */ "./src/interfaces/chat-session-state.ts");
/* harmony import */ var _core_buildbot_build_code_based_bot_architecture_integration_integration_option_list_store_variable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/store--variable.service */ "./src/app/core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/store--variable.service.ts");
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


var EFormValidationErrors;
(function (EFormValidationErrors) {
    EFormValidationErrors["form_validation_basic_info"] = "form_validation_basic_info";
    EFormValidationErrors["form_validation_integration"] = "form_validation_integration";
    EFormValidationErrors["form_validation_pipeline"] = "form_validation_pipeline";
    EFormValidationErrors["form_validation_avator"] = "form_validation_avator";
    EFormValidationErrors["form_validation_data_management"] = "form_validation_data_management";
})(EFormValidationErrors || (EFormValidationErrors = {}));
// import import downloadCsv from 'download-csv'; from 'download-csv';




var UtilityService = /** @class */ (function () {
    function UtilityService(toastr, router, activatedRoute, storeVariableService) {
        this.toastr = toastr;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.storeVariableService = storeVariableService;
        this.RANDOM_IMAGE_URLS = [
            "https://robohash.org/StarDroid.png",
            "https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png",
            "https://robohash.org/SmartDroid.png",
            "https://robohash.org/SilverDroid.png",
            "https://robohash.org/IntelliBot.png",
            "https://robohash.org/SmartBot.png",
            "https://robohash.org/SilverDroid.png",
            "https://robohash.org/SilverDroid.png",
        ];
        this.masterIntegration_IntegrationKeyDisplayNameMap = null;
    }
    UtilityService.prototype.getRandomAvatorUrl = function () {
        var avatorArrLength = this.RANDOM_IMAGE_URLS.length;
        var randomNumber = Math.floor(Math.random() * avatorArrLength);
        return this.RANDOM_IMAGE_URLS[randomNumber];
    };
    UtilityService.prototype.getSmartTableRowCountPerPageByViewportHeight = function () {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        ;
        if (h < 700) {
            return 10;
        }
        else if (h > 700 && h < 1000) {
            return 15;
        }
        else if (h > 1000) {
            return 20;
        }
        return 10;
    };
    UtilityService.prototype.getDisplayNameForKey_Integration = function (key) {
        var masterIntegrationList = this.storeVariableService.getApp().masterIntegrationList;
        if (!this.masterIntegration_IntegrationKeyDisplayNameMap) {
            this.masterIntegration_IntegrationKeyDisplayNameMap = masterIntegrationList.reduce(function (accumulator, currentVal) {
                var x = currentVal.inputs.reduce(function (accObj, currObj) {
                    accObj[currObj.param_name] = currObj.display_text;
                    return accObj;
                }, {});
                return __assign({}, accumulator, x);
            }, {});
        }
        return this.masterIntegration_IntegrationKeyDisplayNameMap[key];
    };
    UtilityService.prototype.getActiveVersionInBot = function (bot) {
        return bot.store_bot_versions && bot.store_bot_versions.find(function (BotVersion) {
            return bot.active_version_id === BotVersion.id;
        });
    };
    UtilityService.prototype.serializeGeneratedMessagesToPreviewMessages = function (generatedMessage) {
        return generatedMessage.map(function (message) {
            /*check if media is the key
            * if yes, return {message_type:media[0].type, ...message}
            * else return it as tet
            * */
            // this.utilityService.getActiveVersionInBot()
            if (Object.keys(message)[0] === "media") {
                return __assign({ messageMediatype: message.media[0].type }, message, { time: Date.now(), text: _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_4__["EBotMessageMediaType"].image, sourceType: 'bot' });
            }
            else if (Object.keys(message)[0] === "quick_reply") {
                return __assign({ messageMediatype: _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_4__["EBotMessageMediaType"].quickReply }, message, { time: Date.now(), text: message.quick_reply.text || _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_4__["EBotMessageMediaType"].quickReply, sourceType: 'bot' });
            }
            /*if message type = text*/
            return {
                text: message.text,
                time: Date.now(),
                sourceType: 'bot',
                messageMediatype: _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_4__["EBotMessageMediaType"].text
            };
        });
    };
    UtilityService.prototype.readInputFileAsText = function (inputElement) {
        return new Promise(function (resolve, reject) {
            var input = inputElement; //event.target;
            var _loop_1 = function (index) {
                var reader = new FileReader();
                reader.onload = function () {
                    // this 'text' is the content of the file
                    var text = reader.result;
                    // this.editorCode= text;
                    resolve(text);
                };
                reader.readAsText(input.files[index]);
            };
            for (var index = 0; index < input.files.length; index++) {
                _loop_1(index);
            }
        });
    };
    UtilityService.prototype.getPriorDate = function (days_before) {
        var today = new Date(Date.now() - days_before * 24 * 3600 * 1000);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return (today = dd + '/' + mm + '/' + yyyy);
    };
    UtilityService.prototype.convertDateObjectStringToDDMMYY = function (dateStr) {
        if (dateStr === void 0) { dateStr = ''; }
        var today = dateStr ? new Date(dateStr) : new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return (today = dd + '/' + mm + '/' + yyyy);
    };
    UtilityService.prototype.convertDateObjectStringToMMDDYY = function (dateStr) {
        var today = new Date(dateStr);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return (today = mm + '/' + dd + '/' + yyyy);
    };
    UtilityService.prototype.convertMsToSec = function (ms) {
        // return ms/?
    };
    UtilityService.prototype.copyToClipboard = function (text) {
        if (window.clipboardData && window.clipboardData.setData) {
            // IE specific code path to prevent textarea being shown while dialog is visible.
            return window.clipboardData.setData('Text', text);
        }
        else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
            var textarea = document.createElement('textarea');
            textarea.textContent = text;
            textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                this.showSuccessToaster('Copied');
                return document.execCommand('copy'); // Security exception may be thrown by some browsers.
            }
            catch (ex) {
                console.warn('Copy to clipboard failed.', ex);
                return false;
            }
            finally {
                document.body.removeChild(textarea);
            }
        }
    };
    UtilityService.prototype.findDataByName = function (convertedData, name) {
        for (var i = 0; i < convertedData.length; ++i) {
            if (convertedData[i].name === name)
                return convertedData[i].data;
        }
    };
    UtilityService.prototype.createChartValueForBarGraph = function (rawData, chartValue) {
        /*
        * example output:
        * [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }]
        * */
        var template = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Stacked column chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: 'white'
                    }
                }
            },
            series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2]
                }]
        };
        var categories = rawData.map(function (dataItem) { return dataItem.labels; });
        var seriesData = rawData.map(function (dataItem) { return dataItem.result; });
        template.xAxis.categories = categories;
        template.series[0].data = seriesData;
        template.series[0].name = 'test';
        return template;
    };
    UtilityService.prototype.appendChartValueAndSeries = function (xAndYValues, chartValue) {
        return __assign({}, chartValue, xAndYValues);
    };
    UtilityService.prototype.convertDateTimeGraph = function (rawData, xAxisLabel, startTime_ms, //Date.UTC(2010, 0, 2),
    granularity_Ms // one day
    ) {
        var _this = this;
        if (startTime_ms === void 0) { startTime_ms = Date.UTC(2010, 0, 2); }
        if (granularity_Ms === void 0) { granularity_Ms = 24 * 3600 * 1000; } // one day
        if (!rawData)
            return;
        var template = {
            xAxis: {
                type: 'datetime'
            },
            plotOptions: {
                series: {
                    pointStart: startTime_ms,
                    pointInterval: granularity_Ms //24*3600*1000  // one day
                }
            },
            series: [{
                    name: 'sandeep',
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                }, {
                    name: 'gupta',
                    data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2]
                }]
        };
        // let categoriesString = rawData.map((dataItem) => dataItem.labels);
        var seriesArr = [];
        /*initialize the seriesArr*/
        Object.keys(rawData[0]).forEach(function (value) {
            if (value === 'labels')
                return;
            seriesArr.push({
                name: value,
                data: [] //[(xi,y1i)]
            });
        });
        /*now loop over rawData and fill convertedData's data array*/
        rawData.forEach(function (obj) {
            Object.keys(obj).forEach(function (key) {
                if (key === xAxisLabel)
                    return;
                var data = _this.findDataByName(seriesArr, key);
                // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
                data.push(obj[key]); //pushing a new coordinate
            });
        });
        template.series = seriesArr;
        console.log(template, '========================================');
        return template;
    };
    UtilityService.prototype.convert_xAxisText = function (rawData, xAxisLabel) {
        var _this = this;
        var categoriesString = rawData.map(function (dataItem) { return dataItem.labels; });
        var seriesArr = [];
        /*initialize the convertedData*/
        Object.keys(rawData[0]).forEach(function (value) {
            if (value === 'labels')
                return;
            seriesArr.push({
                name: value,
                data: [] //[(xi,y1i)]
            });
        });
        /*now loop over rawData and fill convertedData's data array*/
        rawData.forEach(function (obj) {
            Object.keys(obj).forEach(function (key) {
                if (key === xAxisLabel)
                    return;
                var data = _this.findDataByName(seriesArr, key);
                // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
                data.push(obj[key]); //pushing a new coordinate
            });
        });
        var template = {
            xAxis: {
                categories: categoriesString,
                tickInterval: 1,
                labels: {
                    enabled: true
                }
            },
            series: seriesArr
        };
        return template;
    };
    UtilityService.prototype.convert = function (rawData, xAxisLabel, labelType) {
        var _this = this;
        var convertedData = [];
        /*initialize the convertedData*/
        Object.keys(rawData[0]).forEach(function (value) {
            if (value === 'labels')
                return;
            convertedData.push({
                name: value,
                data: [] //[(xi,y1i)]
            });
        });
        if (labelType === 'Time') {
            /*now loop over rawData and fill convertedData's data array*/
            rawData.forEach(function (obj) {
                Object.keys(obj).forEach(function (key) {
                    if (key === xAxisLabel)
                        return;
                    var data = _this.findDataByName(convertedData, key);
                    // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
                    var dateStr_ddmmyyyy = obj[xAxisLabel];
                    var hh = dateStr_ddmmyyyy.split(':')[1];
                    var mm = dateStr_ddmmyyyy.split(':')[0];
                    var ms = hh * 3600 * 1000 + mm * 60 * 1000;
                    if (data)
                        data.push([ms, obj[key]]); //pushing a new coordinate
                });
            });
        }
        if (labelType === 'Date') {
            /*now loop over rawData and fill convertedData's data array*/
            rawData.forEach(function (obj) {
                Object.keys(obj).forEach(function (key) {
                    if (key === xAxisLabel)
                        return;
                    var data = _this.findDataByName(convertedData, key);
                    // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
                    var dateStr_ddmmyyyy = obj[xAxisLabel];
                    var dd = dateStr_ddmmyyyy.split('-')[2];
                    var mm = dateStr_ddmmyyyy.split('-')[1];
                    var yyyy = dateStr_ddmmyyyy.split('-')[0];
                    var dateStr_mmddyyyy = mm + "/" + dd + "/" + yyyy;
                    var ms = Date.parse(dateStr_mmddyyyy);
                    if (data)
                        data.push([ms, obj[key]]); //pushing a new coordinate
                });
            });
        }
        if (labelType === 'String') {
            rawData.forEach(function (obj) {
                Object.keys(obj).forEach(function (key) {
                    if (key === xAxisLabel)
                        return;
                    var data = _this.findDataByName(convertedData, key);
                    // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
                    // let dateStr_ddmmyyyy = obj[xAxisLabel];
                    // let hh = dateStr_ddmmyyyy.split(':')[1];
                    // let mm = dateStr_ddmmyyyy.split(':')[0];
                    // let ms = hh*3600*1000 + mm*60*1000;
                    if (data)
                        data.push([obj[xAxisLabel], obj[key]]); //pushing a new coordinate
                });
            });
        }
        return convertedData;
    };
    UtilityService.prototype.createDeepClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    UtilityService.prototype.showErrorToaster = function (message, sec) {
        if (sec === void 0) { sec = 2; }
        if (typeof message === 'string') {
            this.toastr.error(message, null, { positionClass: 'toast-top-right', timeOut: sec * 1000 });
            return;
        }
        else {
            this.toastr.error(message.message, null, { positionClass: 'toast-top-right', timeOut: sec * 1000 });
        }
    };
    UtilityService.prototype.showInfoToaster = function (message) {
        this.toastr.info(message, null, { positionClass: 'toast-top-right', timeOut: 2000 });
    };
    UtilityService.prototype.showSuccessToaster = function (message) {
        this.toastr.success(message, null, { positionClass: 'toast-top-right', timeOut: 2000 });
    };
    UtilityService.prototype.createRandomUid = function () {
        return Date.now();
    };
    UtilityService.prototype.convertGranularityStrToMs = function (granularity) {
        if (granularity === 'hour') {
            return 3600 * 1000;
        }
        if (granularity === 'day') {
            return 24 * 3600 * 1000;
        }
        if (granularity === 'month') {
            return 30 * 24 * 3600 * 1000;
        }
        if (granularity === 'year') {
            return 365 * 24 * 3600 * 1000;
        }
        // if(granularity==='day'){
        //   return 24*3600*1000;
        // }
    };
    UtilityService.prototype.createRandomString = function (length) {
        if (length === void 0) { length = 10; }
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    UtilityService.prototype.getCurrentTimeInHHMM = function () {
        var date = new Date();
        var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        return hours + ':' + minutes;
    };
    ;
    UtilityService.prototype.downloadText = function (text, filename) {
        var saveData = (function () {
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            return function (data, fileName) {
                var blob = new Blob([text], { type: "octet/stream" }), url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = fileName;
                a.click();
                window.URL.revokeObjectURL(url);
            };
        }());
        // var data = { x: 42, s: "hello, world", d: new Date() },
        saveData(null, filename);
        // console.log(value);
    };
    UtilityService.prototype.downloadArrayAsCSV = function (data, columns) {
        // data = [
        //  { name: 'test1', score: 1, level: 'Z' },
        //  { name: 'test2', score: 2 },
        //  { name: 'test3', score: 3 },
        //  { name: 'test4', score: 4 },
        // ];
        //
        // columns = { name: '姓名', score: '分数' };
        if (data === void 0) { data = []; }
        if (columns === void 0) { columns = {}; }
        download_csv__WEBPACK_IMPORTED_MODULE_2___default()(data, columns);
    };
    UtilityService.prototype.areAllAvatorValesDefined = function (headerObj) {
        for (var key in headerObj) {
            if (headerObj[key] == null || headerObj[key] === "")
                return false;
        }
        return true;
    };
    UtilityService.prototype.areAllValesDefined = function (headerObj) {
        var headerDataTemplate = {
            "bot-access-token": null,
            type: null,
            enddate: null,
            startdate: null,
            "auth-token": null,
            "user-access-token": null,
            granularity: null
        };
        headerObj = __assign({}, headerDataTemplate, headerObj);
        for (var key in headerObj) {
            if (headerObj[key] == null || headerObj[key] === "")
                return false;
        }
        return true;
    };
    UtilityService.prototype.addQueryParamsInCurrentRoute = function (queryParamObj) {
        this.router.navigate(['.'], { queryParams: queryParamObj, relativeTo: this.activatedRoute });
    };
    UtilityService.prototype.areTwoJSObjectSame = function (obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    };
    UtilityService.prototype.getGlobalErrorMap = function () {
        var errorObj = {};
        errorObj[EFormValidationErrors.form_validation_basic_info] = "Basic info form is not valid";
        errorObj[EFormValidationErrors.form_validation_integration] = "Integration form is not valid";
        errorObj[EFormValidationErrors.form_validation_pipeline] = "Pipeline is not valid";
        errorObj[EFormValidationErrors.form_validation_avator] = "Avators are either invalid or empty";
        errorObj[EFormValidationErrors.form_validation_data_management] = "Data Management form is invalid";
        return errorObj;
    };
    UtilityService.prototype.getErrorMessageForValidationKey = function (key) {
        var errorMap = this.getGlobalErrorMap();
        return errorMap[key];
    };
    UtilityService.prototype.checkIfAllPipelineInputParamsArePopulated = function (pipeline) {
        var inputParamsObj = pipeline.reduce(function (inputParamsObj, pipelineItem) {
            return __assign({}, inputParamsObj, pipelineItem.input_params);
        }, {});
        for (var param in inputParamsObj) {
            if (inputParamsObj[param] == null) {
                return false;
            }
        }
        return true;
    };
    UtilityService.prototype.performFormValidationBeforeSaving = function (obj) {
        var objShallowClone = __assign({}, obj);
        var validation_Keys = Object.keys(objShallowClone).filter(function (key) {
            return key.includes('form_validation_');
        });
        for (var _i = 0, validation_Keys_1 = validation_Keys; _i < validation_Keys_1.length; _i++) {
            var key = validation_Keys_1[_i];
            if (!objShallowClone[key]) {
                var errorMessage = this.getErrorMessageForValidationKey(key);
                this.showErrorToaster(errorMessage);
                return null;
            }
            delete objShallowClone[key];
        }
        return objShallowClone;
    };
    UtilityService.prototype.serializeServerValueToChatRoomMessages = function (value) {
        var roomMessages = value.generated_msg.map(function (item) {
            return {
                text: item.text,
                sourceType: 'bot',
                messageMediatype: _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_4__["EBotMessageMediaType"].text,
                time: Date.now() //this.getCurrentTimeInHHMM()/*todo: change it to real time*/
            };
        });
        return roomMessages;
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_buildbot_build_code_based_bot_architecture_integration_integration_option_list_store_variable_service__WEBPACK_IMPORTED_MODULE_5__["StoreVariableService"]])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    url: 'http://localhost:3000/api'
    // url : 'https://staging.imibot.ai/api'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/interfaces/chat-session-state.ts":
/*!**********************************************!*\
  !*** ./src/interfaces/chat-session-state.ts ***!
  \**********************************************/
/*! exports provided: EChatFrame, EBotMessageMediaType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EChatFrame", function() { return EChatFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBotMessageMediaType", function() { return EBotMessageMediaType; });
var EChatFrame;
(function (EChatFrame) {
    EChatFrame["WELCOME_BOX"] = "WELCOME_BOX";
    EChatFrame["CHAT_LIST"] = "CHAT_LIST";
    EChatFrame["CHAT_BOX"] = "CHAT_BOX";
})(EChatFrame || (EChatFrame = {}));
var EBotMessageMediaType;
(function (EBotMessageMediaType) {
    EBotMessageMediaType["image"] = "image";
    EBotMessageMediaType["text"] = "text";
    EBotMessageMediaType["quickReply"] = "quickReply";
    EBotMessageMediaType["bot_thinking"] = "bot_thinking";
})(EBotMessageMediaType || (EBotMessageMediaType = {}));


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shoaib.m\Documents\ang-frontend\bot_platform-fe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map