(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-bots-view-bots-module"],{

/***/ "./src/app/core/view-bots/bot-preview-card/bot-preview-card.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/core/view-bots/bot-preview-card/bot-preview-card.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Template for modal-->\r\n<ng-template #template>\r\n    <div class=\"danger-modal\">\r\n      <div class=\"top-dec\"></div>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title mb-2\" style=\"display: flex;justify-content: start;\">Delete bot&nbsp;{{bot.name}}&nbsp;\r\n          ?</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"modal-body pt-0\">\r\n        <form #form=\"ngForm\">\r\n          <div class=\"text-center my-1\">\r\n            <p class=\"mb-3\">Do you confirm the Deletion? This is a permanent and irreversible change</p>\r\n\r\n          </div>\r\n          <button class=\"btn btn-theme-secondary-outline mr-2\" (click)=\"modalRef.hide()\">Cancel</button>\r\n          <button class=\" btn btn-theme-danger\" (click)=\"deleteBot()\">Delete</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n<!-- <ng-template #template>\r\n  <div class=\"modal-header bg-danger\">\r\n    <h4 class=\"modal-title heading pull-left text-white\">Delete: <strong>{{bot.name}}</strong>?</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\" class=\"text-white\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body bg-white text-dark\">\r\n    <p class=\"mb-3\">Do you confirm the Deletion? This is a permanent and irreversible change</p>\r\n    <button class=\"btn btn-theme-secondary-outline mr-2\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button class=\"btn btn-theme-danger\" (click)=\"deleteBot()\">Delete</button>\r\n  </div>\r\n</ng-template> -->\r\n\r\n<!--============================== Following is unbinded html for css tests ==============================-->\r\n<!---->\r\n<!--<div class=\"card mb-2\">-->\r\n<!--&lt;!&ndash;card starts&ndash;&gt;-->\r\n<!--<div class=\"card-header\">-->\r\n<!--<div class=\"row\">-->\r\n\r\n<!--<div class=\"col-md-2 col-sm-2 col-12\">-->\r\n<!--<img class=\"timePeriod-logo\" src=\"http://www.pngmart.com/files/3/Weather-PNG-HD.png\">-->\r\n<!--</div>-->\r\n\r\n<!--<div class=\"col-md-10 col-sm-10 col-12 \">-->\r\n<!--<div class=\"d-flex m-0 pb-0\">-->\r\n<!--<p class=\"timePeriod-name m-0\"><strong class=\"ng-binding\">Weathery</strong></p>-->\r\n<!--<i class=\"fa fa-trash ml-auto\"></i>-->\r\n<!--</div>-->\r\n<!--<p class=\"timePeriod-title\" title=\"I have done a PHD...\">I have done a PHD...</p>-->\r\n<!--<p class=\"timePeriod-created\">Created On : Oct 12, 2017</p>-->\r\n<!--<p class=\"timePeriod-updated\">Last Updated On : Jun 5, 2018</p>-->\r\n<!--</div>-->\r\n\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"card-body d-flex pb-0\">-->\r\n<!--<button class=\"btn-theme-primary ml-auto\">Preview Bot</button>-->\r\n<!--</div>-->\r\n<!--<div class=\"card-footer d-flex justify-content-between\">-->\r\n<!--<div class=\"copy\"><i class=\"fa fa-copy\"></i>Access Token</div>-->\r\n<!--<div class=\"copy\"><i class=\"fa fa-copy\"></i>Enterprise ID</div>-->\r\n\r\n<!--</div>-->\r\n<!--</div>-->\r\n\r\n\r\n<!--================NEW DESIGN==================-->\r\n<!-- <div class=\"grid-bot-preview bg-white shadow-theme\">\r\n  <div class=\"top d-flex border-bottom cursor-pointer\"\r\n       (click)=\"router.navigate(['core/botdetail/'+parentRoute+'/'+ bot.id])\">\r\n    <div class=\"mr-2\">\r\n      <img class=\"logo-md rounded-circle\" [src]=\"bot.logo\" alt=\"\">\r\n    </div>\r\n    <div class=\"d-flex flex-column\">\r\n      <div class=\"heading\">{{bot.name}}</div>\r\n      <div class=\"description limit-oneline\">{{bot.description}}\r\n      </div>\r\n    </div>\r\n    <i class=\"fa fa-users ml-auto\" [hidden]=\"bot.child_bots.length===0\" style=\"color: #9b9b9b\"></i>\r\n  </div>\r\n  <div class=\"bot\" style=\"position: relative\">\r\n    <div class=\"positioned-wrapper\">\r\n      <button\r\n        (click)=\"openBot()\"\r\n        class=\"btn btn-theme-primary center-absolute\">Preview\r\n      </button>\r\n      <div class=\"btn-group p-2\" dropdown style=\"position: absolute; right:2%;top: 2%;\">\r\n        <i dropdownToggle class=\"fa fa-ellipsis-v p-1\"></i>\r\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n          <li role=\"menuitem\">\r\n            <a class=\"dropdown-item cursor-pointer\" (click)=\"utilityService.copyToClipboard(bot.bot_access_token)\" >Copy Access Token</a>\r\n          </li>\r\n          <li role=\"menuitem\">\r\n            <a class=\"dropdown-item cursor-pointer\" (click)=\"utilityService.copyToClipboard(bot.enterprise_id)\">Copy Enterprise ID</a>\r\n          </li>\r\n          <li role=\"menuitem\">\r\n            <a class=\"dropdown-item\">Make Bot Active</a>\r\n          </li>\r\n          <li role=\"menuitem\">\r\n            <a class=\"dropdown-item\" (click)=\"openModal(template)\">Delete</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n    -->\r\n<!-- <div class=\"unique-name mt-2\">Bot Unique Name : <strong>{{bot.bot_unique_name}}</strong></div>\r\n    <div class=\"date-protection mb-3\">Advance Data Protection :\r\n      <strong>{{bot.advanced_data_protection?\"ON\":\"OFF\"}}</strong></div>\r\n    <div class=\"d-flex bot-strip align-items-center\">\r\n      <div class=\"pr-1 \" [ngClass]=\"{'border-right':(bot.integrations|integrationImageCount)>0}\">\r\n        <div class=\"active-button px-1 border-right d-flex justify-content-center align-items-center\">Active\r\n          ({{bot.active_version_id}})\r\n        </div>\r\n      </div>\r\n      <img *ngFor=\"let integrationsMasterListItem of ((bot.integrations|integrationLogos|async)|slice:0:5)\"\r\n           [src]=\"'https://imibot.ai'+integrationsMasterListItem?.icon\"\r\n           class=\"logo-image\"\r\n           style=\"width: 16px;height: 16px\"\r\n           alt=\"\">\r\n\r\n      <span *ngIf=\"(bot.integrations|integrationImageCount)>4\"\r\n            class=\"more ml-auto\">+{{(bot.integrations|integrationImageCount)-4}} More</span>\r\n    </div>\r\n  </div> -->\r\n<!---->\r\n<!-- </div> -->\r\n<!--===============New New Design ==========================-->\r\n<div class=\"wrapper cursor-pointer\" (click)=\"navigateToBotDetailPage($event)\">\r\n  <div class=\"grid-bot-preview-two bg-white shadow-theme\">\r\n    <div class=\"header-border-bottom\"></div><!--just for border-->\r\n    <!--header starts-->\r\n    <div class=\"grid-bot-preview-version header header-border-bottom  d-flex\">\r\n      <!--<div class=\"header\">-->\r\n        <div class=\"span-wrapper\" *ngIf=\"bot.bot_type === 'chatbot'\">\r\n          <i class=\"fa fa-circle\"></i>\r\n        </div>\r\n        <!--<div class = \"ml-1 \" style=\"align-self: center\" *ngIf=\"bot.bot_type !== 'intelligent'\">-->\r\n            <!--Active-->\r\n          <!--</div>-->\r\n        <div class = \"ml-1 \" style=\"align-self: center\" *ngIf=\"bot.bot_type === 'chatbot'\">\r\n<!--<<<<<<< HEAD-->\r\n          <!--Active(v{{bot.active_version.version}})-->\r\n        <!--</div>-->\r\n      <!--<div class=\"ml-auto\"></div>-->\r\n      <!--<div [hidden]=\"bot.bot_type !== 'chatbot'\" class = \"ml-1\" style=\"align-self: center\">-->\r\n        <!--Latest(v{{bot.latest_version.version}})-->\r\n<!--=======-->\r\n          Active(v{{bot.active_version.version || 0}})\r\n        </div>\r\n      <div class=\"ml-auto\" style=\"align-self: center\" >\r\n        <div class = \" show-on-parent-hover\" style=\"align-self: center\" *ngIf=\"bot.bot_type === 'chatbot'\">\r\n          Latest(v{{bot.latest_version.version || 0}})\r\n        </div>\r\n          <div class=\"btn-group click-save-wrapper\" dropdown style=\"align-self: center; font-size: 18px;padding:0;\">\r\n            <i dropdownToggle class=\"fa fa-ellipsis-v click-save-wrapper px-2\"></i>\r\n            <ul *dropdownMenu class=\"dropdown-menu click-save-wrapper\" role=\"menu\">\r\n              <li role=\"menuitem\">\r\n                <a class=\"dropdown-item cursor-pointer click-save-wrapper\" (click)=\"utilityService.copyToClipboard(bot.bot_access_token)\" >Copy Access Token</a>\r\n              </li>\r\n              <li role=\"menuitem\">\r\n                <a class=\"dropdown-item cursor-pointer click-save-wrapper\" (click)=\"utilityService.copyToClipboard(bot.enterprise_id)\">Copy Enterprise ID</a>\r\n              </li>\r\n              <!-- <li role=\"menuitem\">\r\n                <a class=\"dropdown-item\">Make Bot Active</a>\r\n              </li> -->\r\n              <li role=\"menuitem\" *myIf=\"myETabNames.architecture_tab\">\r\n                <a class=\"dropdown-item click-save-wrapper\" (click)=\"openModal(template)\">Delete</a>\r\n              </li>\r\n            </ul>\r\n<!--&gt;>>>>>> b57d07d44a83fa8a33cad4ce66dff433fb840a27-->\r\n      </div>\r\n        </div>\r\n      <!--</div>-->\r\n    </div>\r\n    <!--header ends-->\r\n    <div class=\"\"></div><!--just for border-->\r\n\r\n    <div class=\"ml-2 grid-bot-preview-img grid-bot-preview-second-row main-logo-wrapper\">\r\n      <img class=\"logo-md rounded-circle\" [src]=\"bot.logo\" alt=\"\">\r\n    </div>\r\n    <div class=\"grid-bot-preview-name details1 text-theme-secondary\">\r\n      <div class=\"heading\">{{(bot.name|slice:0:36)+(bot.name.length>36?\"...\":\"\")}}</div>\r\n      <div class=\"description mt-1\">{{bot.description}}</div>\r\n    </div>\r\n    <div class=\"grid-bot-preview-details grid-bot-preview-third-row details2 pl-2\" style=\"align-self: center\">\r\n      <div class=\"\">Unique Name : {{(bot.bot_unique_name|slice:0:36)+(bot.bot_unique_name.length>36?\"...\":\"\")}}</div>\r\n      <div class=\"\">Last Updated By : {{bot.updated_by}} on {{bot.updated_at|date:'mediumDate'}}</div>\r\n    </div>\r\n    <div class=\"icon2 d-flex justify-content-center\">\r\n      <i class=\"fa fa-users\" style=\"color: #9e9e9e;\" *ngIf=\"bot.child_bots && bot.child_bots.length>0\"></i>\r\n    </div>\r\n\r\n    <div class=\"grid-bot-preview-forth-row d-flex flex-row-reverse bot-strip align-items-center p-2 footer\">\r\n      <!-- <span *ngIf=\"(bot.integrations|integrationImageCount)>4\" class=\"more ml-auto\">+{{(bot.integrations|integrationImageCount)}} More</span> -->\r\n\r\n      <img *ngFor=\"let integrationsMasterListItem of ((bot.integrations|integrationLogos:'no_channel'|async))\" [src]=\"integrationsMasterListItem?.icon\"\r\n           class=\"logo-image no-channel-integrations\" style=\"width: 16px;height: 16px\" alt=\"\">\r\n      <img *ngFor=\"let integrationsMasterListItem of ((bot.integrations|integrationLogos:'only_channel'|async))\" [src]=\"integrationsMasterListItem?.icon\"\r\n           class=\"logo-image \" style=\"width: 16px;height: 16px\" alt=\"\">\r\n      <div *ngIf=\"bot.bot_type == 'chatbot'\" (click)=\"previewBot()\" class=\"show-on-parent-hover mr-auto click-save-wrapper cursor-pointer text-sm\">Preview</div>\r\n      <button (click)=\"navigateToBotDetailPage($event)\" class=\"show-on-parent-hover  btn btn-theme-primary px-3 mr-2 \"  [ngClass]=\"{'mr-auto': bot.bot_type !== 'chatbot'}\">Edit\r\n      </button>\r\n<!---->\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/view-bots/bot-preview-card/bot-preview-card.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/core/view-bots/bot-preview-card/bot-preview-card.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger-modal {\n  background-color: white;\n  margin-top: 0;\n  border-radius: 4px;\n  font-family: Helvetica; }\n  .danger-modal .top-dec {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 10px;\n    background-color: #b14250; }\n  .danger-modal .modal-header {\n    color: #474747; }\n  .danger-modal .modal-header .modal-title {\n      width: 100%;\n      font-size: 20px;\n      text-align: center;\n      color: #474747; }\n  .danger-modal .modal-body {\n    color: #474747;\n    font-size: 12px;\n    text-align: center;\n    padding-bottom: 10px; }\n  .wrapper {\n  border: solid 2px transparent;\n  border-radius: 2px;\n  transition: .4s; }\n  .wrapper:hover {\n    border: solid 2px #e0e0e0;\n    border-radius: 2px; }\n  .wrapper:hover .show-on-parent-hover {\n      display: inline-block;\n      opacity: 1; }\n  .show-on-parent-hover {\n  display: inline-block;\n  opacity: 0;\n  transition: .4s; }\n  .grid-bot-preview-two {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  height: 176px;\n      -ms-grid-columns: 16px 56px 1fr 36px 10px;\n      grid-template-columns: 16px 56px 1fr 36px 10px;\n      -ms-grid-rows: 28px 64px 1fr 48px;\n      grid-template-rows: 28px 64px 1fr 48px;\n  font-family: Helvetica;\n      grid-template-areas: 'mlt header1 header1 header1 header1'\r 'ml icon1 details1 icon2 mr'\r 'ml details2 details2 details2 mr'\r 'ml footer footer footer mr';\n  border-radius: 2px; }\n  .grid-bot-preview-two .text-theme-secondary .description {\n    color: #9e9e9e; }\n  .grid-bot-preview-two .text-sm {\n    font-size: 11px; }\n  .grid-bot-preview-two .header {\n    -ms-grid-row: 1;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 4;\n    grid-area: header1; }\n  .grid-bot-preview-two .main-logo-wrapper {\n    -ms-grid-row: 2;\n    -ms-grid-column: 2;\n    grid-area: icon1;\n    padding-top: 10px; }\n  .grid-bot-preview-two .icon2 {\n    -ms-grid-row: 2;\n    -ms-grid-column: 4;\n    grid-area: icon2;\n    font-size: 17px;\n    padding-top: 16px;\n    color: #474747; }\n  .grid-bot-preview-two .details1 {\n    -ms-grid-row: 2;\n    -ms-grid-column: 3;\n    grid-area: details1;\n    padding-top: 12px; }\n  .grid-bot-preview-two .details2 {\n    -ms-grid-row: 3;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 3;\n    grid-area: details2;\n    padding-left: 5px; }\n  .grid-bot-preview-two .footer {\n    -ms-grid-row: 4;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 3;\n    grid-area: footer; }\n  .grid-bot-preview-two .fa-ellipsis-v {\n    color: #9e9e9e;\n    padding: 0px; }\n  .header-border-bottom {\n  border-bottom: solid 2px #e0e0e0; }\n  .grid-bot-preview-second-row {\n  -ms-grid-row: 2;\n  -ms-grid-row-span: 1;\n  grid-row: 2 / 3; }\n  .grid-bot-preview-version {\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  grid-column: 1 / 4;\n  font-family: Helvetica; }\n  .grid-bot-preview-version .span-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n  .grid-bot-preview-version .fa-circle {\n    color: #34bc6e;\n    font-size: 8px;\n    -ms-grid-row-align: end;\n        align-self: end; }\n  .grid-bot-preview-img {\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 1;\n  grid-column: 1 / 2; }\n  .grid-bot-preview-details {\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 2;\n  grid-column: 2 / 4;\n  font-size: 11px;\n  color: #474747; }\n  .grid-bot-preview-details div {\n    font-size: 11px; }\n  .grid-bot-preview-name {\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 1;\n  grid-column: 2 / 3;\n  overflow: hidden; }\n  .grid-bot-preview-third-row {\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 1;\n  grid-row: 3 / 4; }\n  .grid-bot-preview-forth-row {\n  -ms-grid-row: 4;\n  -ms-grid-row-span: 1;\n  grid-row: 4 / 5;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 4;\n  grid-column: 1 / 5; }\n  .grid-bot-preview-forth-row button {\n    height: 24px !important; }\n  .grid-bot-preview-forth-row div {\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #00abd3;\n    font-family: \"Helvetica\", sans-serif; }\n  .description {\n  font-size: 11px;\n  line-height: 1.09;\n  font-weight: 300;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif;\n  overflow: hidden;\n  height: 23px; }\n  .unique-name, .date-protection, .active-button {\n  font-size: 11px;\n  line-height: 1.45;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n  .unique-name strong, .date-protection strong, .active-button strong {\n    font-weight: bold; }\n  .active-button {\n  height: 24px;\n  min-width: 70px;\n  border-radius: 2px;\n  background-color: #509005;\n  color: white; }\n  .more {\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 300;\n  color: #00abd3;\n  font-family: \"Helvetica\", sans-serif; }\n  .positioned-wrapper {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(244, 244, 244, 0.8);\n  opacity: 0; }\n  .positioned-wrapper:hover {\n    -webkit-animation-name: bottom-up;\n            animation-name: bottom-up;\n    -webkit-animation-duration: .5s;\n            animation-duration: .5s;\n    -webkit-animation-fill-mode: backwards;\n            animation-fill-mode: backwards;\n    opacity: 1; }\n  @-webkit-keyframes bottom-up {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @keyframes bottom-up {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  .logo-image {\n  margin-right: 2px;\n  margin-left: 2px; }\n  .dropdown-menu {\n  position: absolute;\n  left: -140px !important; }\n  .limit-oneline {\n  max-width: 185px; }\n  .no-channel-integrations:first-child {\n  border-left: 1px solid #e0e0e0;\n  padding-left: 4px;\n  width: 20px !important; }\n  .click-save-wrapper {\n  padding: 6px;\n  font-size: 13px !important; }\n"

/***/ }),

/***/ "./src/app/core/view-bots/bot-preview-card/bot-preview-card.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/view-bots/bot-preview-card/bot-preview-card.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BotPreviewCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotPreviewCardComponent", function() { return BotPreviewCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../interfaces/chat-session-state */ "./src/interfaces/chat-session-state.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chat/ngxs/chat.action */ "./src/app/chat/ngxs/chat.action.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
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











var BotPreviewCardComponent = /** @class */ (function () {
    function BotPreviewCardComponent(utilityService, chatService, modalService, activatedRoute, router, constantsService, serverService, store) {
        this.utilityService = utilityService;
        this.chatService = chatService;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.constantsService = constantsService;
        this.serverService = serverService;
        this.store = store;
        this.myObject = Object;
        this.myETabNames = _constants_service__WEBPACK_IMPORTED_MODULE_9__["ETabNames"];
    }
    BotPreviewCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggeduserenterpriseinfo$.subscribe(function (enterpriseProfileInfo) {
            _this.enterprise_unique_name = enterpriseProfileInfo.enterprise_unique_name;
        });
        this.parentRoute = this.activatedRoute.snapshot.data.route;
        this.chatsessionstate$.subscribe(function (chatSessionState) {
            if (chatSessionState && chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.id)
                _this.currentChatPreviewBotId = chatSessionState.currentBotDetails.id;
            _this.currentUid = chatSessionState.currentUId;
            _this.customConsumerDetails = chatSessionState.consumerDetails;
        });
        this.loggeduser$.subscribe(function (authState) {
            _this.role = authState.user.role.name;
        });
    };
    BotPreviewCardComponent.prototype.copy = function (text, element) {
        this.utilityService.copyToClipboard(text);
        setTimeout(function () {
            element.hide();
        }, 1000);
    };
    BotPreviewCardComponent.prototype.previewBot = function () {
        console.log("Bot Preview clicked");
        // if(log)http://localhost:4200/core/botdetail/chatbot/20?build=testing
        /*if a new bot is being opened=> clear previous chat state*/
        // if (this.bot.id !== (this.currentChatPreviewBotId && this.currentChatPreviewBotId)) {
        // this.store.dispatch([
        // nezw ToggleChatWindow({open: true}),
        // new SetCurrentUId({uid: (this.customConsumerDetails && this.customConsumerDetails.uid) || String(Date.now())}),
        // ]).subscribe(() => {
        this.store.dispatch([
            new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_8__["SetCurrentBotDetailsAndResetChatStateIfBotMismatch"]({
                bot: __assign({}, this.bot, { enterprise_unique_name: this.enterprise_unique_name })
            }),
            new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_8__["ToggleChatWindow"]({ open: true }),
            new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_8__["ChangeFrameAction"]({ frameEnabled: _interfaces_chat_session_state__WEBPACK_IMPORTED_MODULE_4__["EChatFrame"].WELCOME_BOX })
        ]);
        // .subscribe(()=>{
        // this.router.navigate(['/core/viewbots/chatbot'], {
        //   queryParams: {preview: true, bot_unique_name: this.bot.bot_unique_name, enterprise_unique_name: this.enterprise_unique_name}
        // });
        // });
        // });
        // }
        // if (this.currentChatPreviewBotId && this.bot.id !== this.currentChatPreviewBotId) {
        //   this.store.dispatch([
        //     new ResetChatState()
        //   ]).subscribe(() => {
        //     /*TODO: code repeat; refactor the code*/
        //     this.store.dispatch([
        //       // new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX}),
        //       new ToggleChatWindow({open: true}),
        //     ]).subscribe(() => {
        //       this.store.dispatch([
        //         new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        //           id: this.bot.id,
        //           name: this.bot.name,
        //           bot_access_token: this.bot.bot_access_token,
        //           logo: this.bot.logo,
        //           bot_unique_name: this.bot.bot_unique_name,
        //           integrations:this.bot.integrations
        //         }),
        //         new SetCurrentUId({uid: (this.customConsumerDetails && this.customConsumerDetails.uid) || String(Date.now())}),
        //       ]).subscribe(() => {
        //         this.router.navigate(['/core/viewbots/chatbot'],
        //           {queryParams: {preview: true,bot_unique_name:this.bot.bot_unique_name,enterprise_unique_name:this.enterprise_unique_name}});
        //       });
        //     });
        //   });
        // } else {
        //   this.store.dispatch([
        //     new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX}),
        //     new ToggleChatWindow({open: true}),
        //   ]).subscribe(() => {
        //     this.store.dispatch([
        //       new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        //         id: this.bot.id,
        //         name: this.bot.name,
        //         bot_access_token: this.bot.bot_access_token,
        //         bot_unique_name: this.bot.bot_unique_name,
        //         logo: this.bot.logo,
        //         integrations:this.bot.integrations
        //       }),
        //       new SetCurrentUId({uid: (this.customConsumerDetails && this.customConsumerDetails.uid) || String(Date.now())}),
        //     ]);
        //   });
        // }
    };
    BotPreviewCardComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    BotPreviewCardComponent.prototype.deleteBot = function () {
        var _this = this;
        this.modalRef.hide();
        var url = this.constantsService.getDeleteBotUrl(this.bot.id);
        var headerData = {
            'bot-access-token': this.bot.bot_access_token
        };
        this.serverService.makeDeleteReq({ url: url, headerData: headerData })
            .subscribe(function (value) {
            _this.serverService.getNSetBotList().subscribe(function () {
                _this.utilityService.showSuccessToaster('Bot deleted');
                _this.store.dispatch([
                    new _chat_ngxs_chat_action__WEBPACK_IMPORTED_MODULE_8__["DeleteChatRoomsByBotId"]({ id: _this.bot.id })
                ]);
            });
        });
    };
    BotPreviewCardComponent.prototype.navigateToBotDetailPage = function (event) {
        if (!event.target.classList.contains('click-save-wrapper')) {
            this.router.navigate(['core/botdetail/' + this.parentRoute + '/' + this.bot.id]);
            /*TODO:improve it*/
            if (_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERoleName"].Tester === this.role) {
                // this.router.navigate(['/core/viewbots/chatbot'], {queryParams:{preview:this.bot.id,build:"testing"}});
                this.router.navigate(['core/botdetail/' + this.parentRoute + '/' + this.bot.id], {
                    queryParams: {
                        preview: this.bot.id,
                        build: 'testing'
                    }
                });
                /*TODO:improve it*/
            }
            else {
                this.router.navigate(['core/botdetail/' + this.parentRoute + '/' + this.bot.id]);
                /*TODO:improve it*/
            }
        }
    };
    BotPreviewCardComponent.prototype.openBotDetailsPage = function () {
        // this.router.navigate(['core/botdetail/'+parentRoute+'/'+ bot.id])
        ;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BotPreviewCardComponent.prototype, "bot", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], BotPreviewCardComponent.prototype, "loggeduser$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], BotPreviewCardComponent.prototype, "chatsessionstate$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], BotPreviewCardComponent.prototype, "loggeduserenterpriseinfo$", void 0);
    BotPreviewCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bot-preview-card',
            template: __webpack_require__(/*! ./bot-preview-card.component.html */ "./src/app/core/view-bots/bot-preview-card/bot-preview-card.component.html"),
            styles: [__webpack_require__(/*! ./bot-preview-card.component.scss */ "./src/app/core/view-bots/bot-preview-card/bot-preview-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
            _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _constants_service__WEBPACK_IMPORTED_MODULE_9__["ConstantsService"],
            _server_service__WEBPACK_IMPORTED_MODULE_10__["ServerService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], BotPreviewCardComponent);
    return BotPreviewCardComponent;
}());



/***/ }),

/***/ "./src/app/core/view-bots/view-bots.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/view-bots/view-bots.module.ts ***!
  \****************************************************/
/*! exports provided: ViewBotsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBotsModule", function() { return ViewBotsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_bots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-bots.component */ "./src/app/core/view-bots/view-bots.component.ts");
/* harmony import */ var _view_code_based_bot_view_code_based_bot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-code-based-bot/view-code-based-bot.component */ "./src/app/core/view-bots/view-code-based-bot/view-code-based-bot.component.ts");
/* harmony import */ var _view_pipeline_based_bots_view_pipeline_based_bots_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-pipeline-based-bots/view-pipeline-based-bots.component */ "./src/app/core/view-bots/view-pipeline-based-bots/view-pipeline-based-bots.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _drag_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../drag.service */ "./src/app/drag.service.ts");
/* harmony import */ var _aim_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../aim.service */ "./src/app/aim.service.ts");
/* harmony import */ var _sort_object_array_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../sort-object-array.pipe */ "./src/app/sort-object-array.pipe.ts");
/* harmony import */ var _bot_preview_card_bot_preview_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bot-preview-card/bot-preview-card.component */ "./src/app/core/view-bots/bot-preview-card/bot-preview-card.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _auth_gaurd_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../auth-gaurd.service */ "./src/app/auth-gaurd.service.ts");
/* harmony import */ var _rich_media_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../rich-media.module */ "./src/app/rich-media.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import {DragAndDropModule} from 'angular-draggable-droppable';
// import {NgxsModule} from '@ngxs/store';
// import {ViewBotStateReducer} from './ngxs/view-bot.state';
// import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
// import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
// import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';










var routes = [
    {
        path: '', component: _view_bots_component__WEBPACK_IMPORTED_MODULE_3__["ViewBotsComponent"], canActivateChild: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthGaurdService"]], children: [
            { path: _view_bots_component__WEBPACK_IMPORTED_MODULE_3__["EBotType"].chatbot, component: _view_code_based_bot_view_code_based_bot_component__WEBPACK_IMPORTED_MODULE_4__["ViewCodeBasedBotComponent"], data: { route: _view_bots_component__WEBPACK_IMPORTED_MODULE_3__["EBotType"].chatbot } },
            { path: _view_bots_component__WEBPACK_IMPORTED_MODULE_3__["EBotType"].intelligent, component: _view_pipeline_based_bots_view_pipeline_based_bots_component__WEBPACK_IMPORTED_MODULE_5__["ViewPipelineBasedBotsComponent"], data: { route: _view_bots_component__WEBPACK_IMPORTED_MODULE_3__["EBotType"].intelligent } },
        ]
    }
];
var ViewBotsModule = /** @class */ (function () {
    function ViewBotsModule() {
    }
    ViewBotsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _view_bots_component__WEBPACK_IMPORTED_MODULE_3__["ViewBotsComponent"],
                _view_code_based_bot_view_code_based_bot_component__WEBPACK_IMPORTED_MODULE_4__["ViewCodeBasedBotComponent"],
                _view_pipeline_based_bots_view_pipeline_based_bots_component__WEBPACK_IMPORTED_MODULE_5__["ViewPipelineBasedBotsComponent"],
                _bot_preview_card_bot_preview_card_component__WEBPACK_IMPORTED_MODULE_14__["BotPreviewCardComponent"],
                _sort_object_array_pipe__WEBPACK_IMPORTED_MODULE_13__["SortObjectArrayPipe"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                // DragAndDropModule.forRoot(),
                // NgxsModule.forFeature([
                //   ViewBotStateReducer,
                // ]),
                // NgxsStoragePluginModule.forRoot(),
                // NgxsReduxDevtoolsPluginModule.forRoot(),
                // NgxsLoggerPluginModule.forRoot(),
                _shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _rich_media_module__WEBPACK_IMPORTED_MODULE_17__["RichMediaModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ng2_completer__WEBPACK_IMPORTED_MODULE_9__["Ng2CompleterModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["Ng2SmartTableModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            ],
            providers: [_drag_service__WEBPACK_IMPORTED_MODULE_11__["DragService"], _aim_service__WEBPACK_IMPORTED_MODULE_12__["AimService"]]
        })
    ], ViewBotsModule);
    return ViewBotsModule;
}());



/***/ }),

/***/ "./src/app/core/view-bots/view-code-based-bot/view-code-based-bot.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/core/view-bots/view-code-based-bot/view-code-based-bot.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-bot-preview\" style=\"min-height: 80vh\"\r\n     *ngIf=\"(codeBasedBotList$|async|sortObjectArray) as codeBasedBotList; else loaderTemplate\">\r\n  <app-bot-preview-card *ngFor=\"let bot of codeBasedBotList|sortObjectArray\" [bot]=bot></app-bot-preview-card>\r\n</div>\r\n\r\n<ng-template #loaderTemplate>\r\n\r\n  <app-imi-loader></app-imi-loader>\r\n</ng-template>\r\n<!---->\r\n"

/***/ }),

/***/ "./src/app/core/view-bots/view-code-based-bot/view-code-based-bot.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/core/view-bots/view-code-based-bot/view-code-based-bot.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-bot-preview {\n  display: -ms-grid;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  justify-content: center;\n  align-content: start; }\n"

/***/ }),

/***/ "./src/app/core/view-bots/view-code-based-bot/view-code-based-bot.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/core/view-bots/view-code-based-bot/view-code-based-bot.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ViewCodeBasedBotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCodeBasedBotComponent", function() { return ViewCodeBasedBotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { map } from 'rxjs/operators';

var ViewCodeBasedBotComponent = /** @class */ (function () {
    function ViewCodeBasedBotComponent(store) {
        this.store = store;
    }
    ViewCodeBasedBotComponent.prototype.ngOnInit = function () {
        this.codeBasedBotList$ = this.botlist$
            .do(function (value) { return value; })
            .map(function (value) { return value.allBotList && value.allBotList.filter(function (bot) { return bot.bot_type === 'chatbot'; }); });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ViewCodeBasedBotComponent.prototype, "botlist$", void 0);
    ViewCodeBasedBotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-code-based-bot',
            template: __webpack_require__(/*! ./view-code-based-bot.component.html */ "./src/app/core/view-bots/view-code-based-bot/view-code-based-bot.component.html"),
            styles: [__webpack_require__(/*! ./view-code-based-bot.component.scss */ "./src/app/core/view-bots/view-code-based-bot/view-code-based-bot.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ViewCodeBasedBotComponent);
    return ViewCodeBasedBotComponent;
}());



/***/ }),

/***/ "./src/app/core/view-bots/view-pipeline-based-bots/view-pipeline-based-bots.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/core/view-bots/view-pipeline-based-bots/view-pipeline-based-bots.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-bot-preview\" *ngIf=\"(pipelineBasedBotList$|async) as pipelineBasedBotList\">\r\n  <app-bot-preview-card *ngFor=\"let bot of pipelineBasedBotList|sortObjectArray\" [bot] = bot></app-bot-preview-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/view-bots/view-pipeline-based-bots/view-pipeline-based-bots.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/core/view-bots/view-pipeline-based-bots/view-pipeline-based-bots.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-bot-preview {\n  display: -ms-grid;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/core/view-bots/view-pipeline-based-bots/view-pipeline-based-bots.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/core/view-bots/view-pipeline-based-bots/view-pipeline-based-bots.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ViewPipelineBasedBotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPipelineBasedBotsComponent", function() { return ViewPipelineBasedBotsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _view_bots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-bots.component */ "./src/app/core/view-bots/view-bots.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewPipelineBasedBotsComponent = /** @class */ (function () {
    function ViewPipelineBasedBotsComponent(store) {
        this.store = store;
    }
    ViewPipelineBasedBotsComponent.prototype.ngOnDestroy = function () {
    };
    ViewPipelineBasedBotsComponent.prototype.ngOnInit = function () {
        this.pipelineBasedBotList$ = this.botlist$
            .do(function (value) { return value; })
            .map(function (value) {
            var x = value.allBotList && value.allBotList.filter(function (bot) { return bot.bot_type === _view_bots_component__WEBPACK_IMPORTED_MODULE_3__["EBotType"].intelligent; });
            debugger;
            return x;
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ViewPipelineBasedBotsComponent.prototype, "botlist$", void 0);
    ViewPipelineBasedBotsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-pipeline-based-bots',
            template: __webpack_require__(/*! ./view-pipeline-based-bots.component.html */ "./src/app/core/view-bots/view-pipeline-based-bots/view-pipeline-based-bots.component.html"),
            styles: [__webpack_require__(/*! ./view-pipeline-based-bots.component.scss */ "./src/app/core/view-bots/view-pipeline-based-bots/view-pipeline-based-bots.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ViewPipelineBasedBotsComponent);
    return ViewPipelineBasedBotsComponent;
}());



/***/ }),

/***/ "./src/app/sort-object-array.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/sort-object-array.pipe.ts ***!
  \*******************************************/
/*! exports provided: SortObjectArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortObjectArrayPipe", function() { return SortObjectArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortObjectArrayPipe = /** @class */ (function () {
    function SortObjectArrayPipe() {
    }
    /*TODO: make it more generic, as of now its just sorting by created by*/
    SortObjectArrayPipe.prototype.transform = function (botList, args) {
        if (!botList)
            return;
        return botList.sort(function (bot1, bot2) {
            return bot1.created_at > bot2.created_at ? -1 : 1;
        });
    };
    SortObjectArrayPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortObjectArray'
        })
    ], SortObjectArrayPipe);
    return SortObjectArrayPipe;
}());



/***/ })

}]);
//# sourceMappingURL=view-bots-view-bots-module.js.map