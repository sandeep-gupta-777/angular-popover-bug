(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analysis2-analysis2-module"],{

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-engagement1/analysis2-engagement1.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-engagement1/analysis2-engagement1.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Tabbing starts-->\r\n<ul class=\"nav nav-tabs my-2 theme-tabbing\">\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.userLoyalty}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.userLoyalty)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.userLoyalty}\"><strong>USER LOYALTY\r\n    </strong></a>\r\n  </li>\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.roomDuration}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.roomDuration)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.roomDuration}\"><strong>SESSION DURATION\r\n    </strong></a>\r\n  </li>\r\n</ul>\r\n<!--Tabbing ends-->\r\n\r\n\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.userLoyalty\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_USER_LOYALTY\">\r\n</app-chart>\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.roomDuration\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_USER_LOYALTY\">\r\n</app-chart>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-engagement1/analysis2-engagement1.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-engagement1/analysis2-engagement1.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-engagement1/analysis2-engagement1.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-engagement1/analysis2-engagement1.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: Analysis2Engagement1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2Engagement1Component", function() { return Analysis2Engagement1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ngxs/analysis.state */ "./src/app/core/analysis2/ngxs/analysis.state.ts");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Analysis2Engagement1Component = /** @class */ (function () {
    function Analysis2Engagement1Component(constantsService, activatedRoute, store, utilityService) {
        this.constantsService = constantsService;
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.utilityService = utilityService;
        this.myEAnalysis2TypesEnum = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_5__["EAnalysis2TypesEnum"];
        this.activeTab = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_5__["EAnalysis2TypesEnum"].userLoyalty;
        this.series_Messages = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_Users = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
    }
    Analysis2Engagement1Component.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        if (this.activeTab) {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: this.activeTab }
            }));
        }
    };
    Analysis2Engagement1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
        this.tabClicked(this.activeTab);
        this.analytics2GraphData$
            .subscribe(function (value) {
            try {
                var granularity = value.analysisHeaderData.granularity;
                var granularity_ms = _this.utilityService.convertGranularityStrToMs(granularity);
                _this.chartValue =
                    _this.utilityService.convertDateTimeGraph(value[_this.activeTab], "labels", new Date(value.analysisHeaderData.startdate).getTime(), granularity_ms);
            }
            catch (e) {
                console.log(e);
            }
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_4__["AnalysisStateReducer2"].getAnalytics2GraphData),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], Analysis2Engagement1Component.prototype, "analytics2GraphData$", void 0);
    Analysis2Engagement1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-engagement1',
            template: __webpack_require__(/*! ./analysis2-engagement1.component.html */ "./src/app/core/analysis2/according-to-old-ui/analysis2-engagement1/analysis2-engagement1.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-engagement1.component.scss */ "./src/app/core/analysis2/according-to-old-ui/analysis2-engagement1/analysis2-engagement1.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]])
    ], Analysis2Engagement1Component);
    return Analysis2Engagement1Component;
}());



/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-events/analysis2-events.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-events/analysis2-events.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Tabbing starts-->\r\n<ul class=\"nav nav-tabs my-2 theme-tabbing\">\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.topgenerationtemplates}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.topgenerationtemplates)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.topgenerationtemplates}\"><strong>SESSION ANALYSIS\r\n    </strong></a>\r\n  </li>\r\n</ul>\r\n<!--Tabbing ends-->\r\n\r\n\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.topgenerationtemplates\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-events/analysis2-events.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-events/analysis2-events.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-events/analysis2-events.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-events/analysis2-events.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: Analysis2EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2EventsComponent", function() { return Analysis2EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
/* harmony import */ var _ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ngxs/analysis.state */ "./src/app/core/analysis2/ngxs/analysis.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Analysis2EventsComponent = /** @class */ (function () {
    function Analysis2EventsComponent(constantsService, activatedRoute, store, utilityService) {
        this.constantsService = constantsService;
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.utilityService = utilityService;
        this.myEAnalysis2TypesEnum = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"];
        this.activeTab = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"].topgenerationtemplates;
        this.highchartData = [{
                name: 'Maximum',
                data: [4, 5, 8, 12, 10, 6, 22, 3]
            }, {
                name: 'Average',
                data: [2, 2.5, 6.2, 4.4, 8, 4, 12.4, 1.3]
            }, {
                name: 'Minimum',
                data: [1, 2, 1, 2, 1, 2, 1, 1]
            }];
        this.series_Messages = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_Users = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
    }
    Analysis2EventsComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        if (this.activeTab) {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: this.activeTab }
            }));
        }
    };
    Analysis2EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
        this.tabClicked(this.activeTab);
        this.analytics2GraphData$
            .subscribe(function (value) {
            try {
                var granularity = value.analysisHeaderData.granularity;
                var granularity_ms = _this.utilityService.convertGranularityStrToMs(granularity);
                _this.chartValue =
                    _this.utilityService.createChartValueForBarGraph(value[_this.activeTab]);
            }
            catch (e) {
                console.log(e);
            }
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_5__["AnalysisStateReducer2"].getAnalytics2GraphData),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], Analysis2EventsComponent.prototype, "analytics2GraphData$", void 0);
    Analysis2EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-events',
            template: __webpack_require__(/*! ./analysis2-events.component.html */ "./src/app/core/analysis2/according-to-old-ui/analysis2-events/analysis2-events.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-events.component.scss */ "./src/app/core/analysis2/according-to-old-ui/analysis2-events/analysis2-events.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], Analysis2EventsComponent);
    return Analysis2EventsComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-messages/analysis2-messages.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-messages/analysis2-messages.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Tabbing starts-->\r\n<ul class=\"nav nav-tabs my-2 theme-tabbing\">\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.totalMessages}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.totalMessages)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.totalMessages}\"><strong>MESSAGE ANALYSIS\r\n    </strong></a>\r\n  </li>\r\n</ul>\r\n<!--Tabbing ends-->\r\n\r\n\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.totalMessages\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-messages/analysis2-messages.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-messages/analysis2-messages.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-messages/analysis2-messages.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-messages/analysis2-messages.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: Analysis2MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2MessagesComponent", function() { return Analysis2MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
/* harmony import */ var _ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ngxs/analysis.state */ "./src/app/core/analysis2/ngxs/analysis.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Analysis2MessagesComponent = /** @class */ (function () {
    function Analysis2MessagesComponent(constantsService, activatedRoute, store, utilityService) {
        this.constantsService = constantsService;
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.utilityService = utilityService;
        this.myEAnalysis2TypesEnum = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"];
        this.activeTab = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"].totalMessages;
        this.highchartData = [{
                name: 'Maximum',
                data: [4, 5, 8, 12, 10, 6, 22, 3]
            }, {
                name: 'Average',
                data: [2, 2.5, 6.2, 4.4, 8, 4, 12.4, 1.3]
            }, {
                name: 'Minimum',
                data: [1, 2, 1, 2, 1, 2, 1, 1]
            }];
        this.series_Messages = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_Users = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
    }
    Analysis2MessagesComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        if (this.activeTab) {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: this.activeTab }
            }));
        }
    };
    Analysis2MessagesComponent.prototype.ngOnInit = function () {
        // this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
        // this.tabClicked(this.activeTab);
        // // this.analysisstate2$
        // this.analytics2GraphData$
        //   .subscribe((value)=>{
        //     try{
        //       this.highchartData = this.u.convert(value[this.activeTab],"labels","Date");
        //     }catch (e) {
        //       console.log(e);
        //     }
        //
        //   })
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
        this.tabClicked(this.activeTab);
        this.analytics2GraphData$
            .subscribe(function (value) {
            try {
                var granularity = value.analysisHeaderData.granularity;
                var granularity_ms = _this.utilityService.convertGranularityStrToMs(granularity);
                _this.chartValue =
                    _this.utilityService.convertDateTimeGraph(value[_this.activeTab], "labels", new Date(value.analysisHeaderData.startdate).getTime(), granularity_ms);
            }
            catch (e) {
                console.log(e);
            }
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_5__["AnalysisStateReducer2"].getAnalytics2GraphData),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], Analysis2MessagesComponent.prototype, "analytics2GraphData$", void 0);
    Analysis2MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-messages',
            template: __webpack_require__(/*! ./analysis2-messages.component.html */ "./src/app/core/analysis2/according-to-old-ui/analysis2-messages/analysis2-messages.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-messages.component.scss */ "./src/app/core/analysis2/according-to-old-ui/analysis2-messages/analysis2-messages.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], Analysis2MessagesComponent);
    return Analysis2MessagesComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-platform/analysis2-platform.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-platform/analysis2-platform.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Tabbing starts-->\r\n<ul class=\"nav nav-tabs my-2 theme-tabbing\">\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.channelWiseSessions}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.channelWiseSessions)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.channelWiseSessions}\"><strong>SESSION ACROSS CHANNELS\r\n    </strong></a>\r\n  </li>\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.channelWiseAverageSessionTime}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.channelWiseAverageSessionTime)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.channelWiseAverageSessionTime}\"><strong>SESSION TIME</strong></a>\r\n  </li>\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.channelWiseFlowsPerSession}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.channelWiseFlowsPerSession)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.channelWiseFlowsPerSession}\"><strong>FLOWS</strong></a>\r\n  </li>\r\n</ul>\r\n<!--Tabbing ends-->\r\n\r\n\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.channelWiseSessions\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.channelWiseAverageSessionTime\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.channelWiseFlowsPerSession\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-platform/analysis2-platform.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-platform/analysis2-platform.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-platform/analysis2-platform.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-platform/analysis2-platform.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: Analysis2PlatformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2PlatformComponent", function() { return Analysis2PlatformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
/* harmony import */ var _ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ngxs/analysis.state */ "./src/app/core/analysis2/ngxs/analysis.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Analysis2PlatformComponent = /** @class */ (function () {
    function Analysis2PlatformComponent(constantsService, activatedRoute, store, utilityService) {
        this.constantsService = constantsService;
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.utilityService = utilityService;
        this.myEAnalysis2TypesEnum = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"];
        this.activeTab = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"].channelWiseSessions;
        this.highchartData = [{
                name: 'Maximum',
                data: [4, 5, 8, 12, 10, 6, 22, 3]
            }, {
                name: 'Average',
                data: [2, 2.5, 6.2, 4.4, 8, 4, 12.4, 1.3]
            }, {
                name: 'Minimum',
                data: [1, 2, 1, 2, 1, 2, 1, 1]
            }];
        this.series_Messages = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_Users = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
    }
    Analysis2PlatformComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        if (this.activeTab) {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: this.activeTab }
            }));
        }
    };
    Analysis2PlatformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
        this.tabClicked(this.activeTab);
        this.analytics2GraphData$
            .subscribe(function (value) {
            try {
                var granularity = value.analysisHeaderData.granularity;
                var granularity_ms = _this.utilityService.convertGranularityStrToMs(granularity);
                _this.chartValue =
                    _this.utilityService.convertDateTimeGraph(value[_this.activeTab], "labels", new Date(value.analysisHeaderData.startdate).getTime(), granularity_ms);
            }
            catch (e) {
                console.log(e);
            }
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_5__["AnalysisStateReducer2"].getAnalytics2GraphData),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], Analysis2PlatformComponent.prototype, "analytics2GraphData$", void 0);
    Analysis2PlatformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-platform',
            template: __webpack_require__(/*! ./analysis2-platform.component.html */ "./src/app/core/analysis2/according-to-old-ui/analysis2-platform/analysis2-platform.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-platform.component.scss */ "./src/app/core/analysis2/according-to-old-ui/analysis2-platform/analysis2-platform.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], Analysis2PlatformComponent);
    return Analysis2PlatformComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-usage/analysis2-usage.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-usage/analysis2-usage.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Tabbing starts-->\r\n<ul class=\"nav nav-tabs my-2 theme-tabbing\">\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.usagetracking}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.usagetracking)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.usagetracking}\"><strong>USAGE STATISTICS\r\n    </strong></a>\r\n  </li>\r\n</ul>\r\n<!--Tabbing ends-->\r\n\r\n\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.usagetracking\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-usage/analysis2-usage.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-usage/analysis2-usage.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analysis2-usage/analysis2-usage.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analysis2-usage/analysis2-usage.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: Analysis2UsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2UsageComponent", function() { return Analysis2UsageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
/* harmony import */ var _ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ngxs/analysis.state */ "./src/app/core/analysis2/ngxs/analysis.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Analysis2UsageComponent = /** @class */ (function () {
    function Analysis2UsageComponent(constantsService, activatedRoute, store, utilityService) {
        this.constantsService = constantsService;
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.utilityService = utilityService;
        this.myEAnalysis2TypesEnum = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"];
        this.activeTab = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"].usagetracking;
        this.highchartData = [{
                name: 'Maximum',
                data: [4, 5, 8, 12, 10, 6, 22, 3]
            }, {
                name: 'Average',
                data: [2, 2.5, 6.2, 4.4, 8, 4, 12.4, 1.3]
            }, {
                name: 'Minimum',
                data: [1, 2, 1, 2, 1, 2, 1, 1]
            }];
        this.series_Messages = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_Users = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
    }
    Analysis2UsageComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        if (this.activeTab) {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: this.activeTab }
            }));
        }
    };
    Analysis2UsageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
        this.tabClicked(this.activeTab);
        this.analytics2GraphData$
            .subscribe(function (value) {
            try {
                var granularity = value.analysisHeaderData.granularity;
                var granularity_ms = _this.utilityService.convertGranularityStrToMs(granularity);
                _this.chartValue =
                    _this.utilityService.convertDateTimeGraph(value[_this.activeTab], "labels", new Date(value.analysisHeaderData.startdate).getTime(), granularity_ms);
            }
            catch (e) {
                console.log(e);
            }
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_5__["AnalysisStateReducer2"].getAnalytics2GraphData),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], Analysis2UsageComponent.prototype, "analytics2GraphData$", void 0);
    Analysis2UsageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-usage',
            template: __webpack_require__(/*! ./analysis2-usage.component.html */ "./src/app/core/analysis2/according-to-old-ui/analysis2-usage/analysis2-usage.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-usage.component.scss */ "./src/app/core/analysis2/according-to-old-ui/analysis2-usage/analysis2-usage.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], Analysis2UsageComponent);
    return Analysis2UsageComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analytics2-sessions/analytics2-sessions.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analytics2-sessions/analytics2-sessions.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Tabbing starts-->\r\n<ul class=\"nav nav-tabs my-2 theme-tabbing\">\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n         [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.totalSessions}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.totalSessions)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.totalSessions}\"><strong>SESSION ANALYSIS\r\n    </strong></a>\r\n  </li>\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.averageRoomTime}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.averageRoomTime)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.averageRoomTime}\"><strong>SESSION DURATION</strong></a>\r\n  </li>\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.totalFlows}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.totalFlows)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.totalFlows}\"><strong>ACTIVE FLOWS</strong></a>\r\n  </li>\r\n</ul>\r\n<!--Tabbing ends-->\r\n\r\n\r\n<!--<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnumAnalysis2TypesEnum.totalSessions\"-->\r\n           <!--[data]=\"highchartData\"-->\r\n           <!--[chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"-->\r\n           <!--[highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">-->\r\n<!--</app-chart>-->\r\n<!--<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.averageRoomTime\"-->\r\n           <!--[data]=\"highchartData\"-->\r\n           <!--[chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"-->\r\n           <!--[highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">-->\r\n<!--</app-chart>-->\r\n<!--<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.totalFlows\"-->\r\n           <!--[data]=\"highchartData\"-->\r\n           <!--[chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"-->\r\n           <!--[highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">-->\r\n<!--</app-chart>-->\r\n\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.totalSessions\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.averageRoomTime\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.totalFlows\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analytics2-sessions/analytics2-sessions.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analytics2-sessions/analytics2-sessions.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analytics2-sessions/analytics2-sessions.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analytics2-sessions/analytics2-sessions.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: Analytics2SessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analytics2SessionsComponent", function() { return Analytics2SessionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
/* harmony import */ var _ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ngxs/analysis.state */ "./src/app/core/analysis2/ngxs/analysis.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Analytics2SessionsComponent = /** @class */ (function () {
    function Analytics2SessionsComponent(constantsService, activatedRoute, store, utilityService) {
        this.constantsService = constantsService;
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.utilityService = utilityService;
        this.myEAnalysis2TypesEnum = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"];
        this.activeTab = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"].totalSessions;
        this.highchartData = [{
                name: 'Maximum',
                data: [4, 5, 8, 12, 10, 6, 22, 3]
            }, {
                name: 'Average',
                data: [2, 2.5, 6.2, 4.4, 8, 4, 12.4, 1.3]
            }, {
                name: 'Minimum',
                data: [1, 2, 1, 2, 1, 2, 1, 1]
            }];
        this.series_Messages = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_Users = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
    }
    Analytics2SessionsComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        if (this.activeTab) {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: this.activeTab }
            }));
        }
    };
    Analytics2SessionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
        this.tabClicked(this.activeTab);
        this.analytics2GraphData$
            .subscribe(function (value) {
            try {
                var granularity = value.analysisHeaderData.granularity;
                var granularity_ms = _this.utilityService.convertGranularityStrToMs(granularity);
                _this.chartValue =
                    _this.utilityService.convertDateTimeGraph(value[_this.activeTab], "labels", new Date(value.analysisHeaderData.startdate).getTime(), granularity_ms);
            }
            catch (e) {
                console.log(e);
            }
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_5__["AnalysisStateReducer2"].getAnalytics2GraphData),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], Analytics2SessionsComponent.prototype, "analytics2GraphData$", void 0);
    Analytics2SessionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics2-sessions',
            template: __webpack_require__(/*! ./analytics2-sessions.component.html */ "./src/app/core/analysis2/according-to-old-ui/analytics2-sessions/analytics2-sessions.component.html"),
            styles: [__webpack_require__(/*! ./analytics2-sessions.component.scss */ "./src/app/core/analysis2/according-to-old-ui/analytics2-sessions/analytics2-sessions.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], Analytics2SessionsComponent);
    return Analytics2SessionsComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analytics2-users/analytics2-users.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analytics2-users/analytics2-users.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Tabbing starts-->\r\n<ul class=\"nav nav-tabs my-2 theme-tabbing\">\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{activeTab:myEAnalysis2TypesEnum.userAcquisition}\"\r\n       (click)=\"tabClicked(myEAnalysis2TypesEnum.userAcquisition)\"\r\n       [ngClass]=\"{'tab-active':activeTab===myEAnalysis2TypesEnum.userAcquisition}\"><strong>USER ACQUISITION</strong></a>\r\n  </li>\r\n</ul>\r\n<!--Tabbing ends-->\r\n\r\n\r\n<!--<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.userAcquisition\"-->\r\n           <!--[data]=\"series_Sessions\"-->\r\n           <!--[chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"-->\r\n           <!--[highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">-->\r\n<!--</app-chart>-->\r\n<!---->\r\n<app-chart *ngIf=\"activeTab===myEAnalysis2TypesEnum.userAcquisition\"\r\n           [chartValue]=\"chartValue\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analytics2-users/analytics2-users.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analytics2-users/analytics2-users.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/analysis2/according-to-old-ui/analytics2-users/analytics2-users.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/core/analysis2/according-to-old-ui/analytics2-users/analytics2-users.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: Analytics2UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analytics2UsersComponent", function() { return Analytics2UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ngxs/analysis.state */ "./src/app/core/analysis2/ngxs/analysis.state.ts");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Analytics2UsersComponent = /** @class */ (function () {
    function Analytics2UsersComponent(constantsService, activatedRoute, route, store, utilityService) {
        this.constantsService = constantsService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.store = store;
        this.utilityService = utilityService;
        this.myEAnalysis2TypesEnum = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"];
        this.activeTab = _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_4__["EAnalysis2TypesEnum"].userAcquisition;
        //   = [{
        //   name: 'Maximum',
        //   data: [4, 5, 8, 12, 10, 6, 22, 3]
        // }, {
        //   name: 'Average',
        //   data: [2, 2.5, 6.2, 4.4, 8, 4, 12.4, 1.3]
        // }, {
        //   name: 'Minimum',
        //   data: [1, 2, 1, 2, 1, 2, 1, 1]
        // }];
        this.series_Messages = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_Users = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
    }
    Analytics2UsersComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        // this.route.ac/
        if (this.activeTab) {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_8__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: this.activeTab }
            }));
        }
    };
    Analytics2UsersComponent.prototype.ngOnInit = function () {
        // // alert();
        // this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || EAnalysis2TypesEnum.userAcquisition;
        // this.tabClicked(this.activeTab);
        // // this.analysisstate2$
        // this.analytics2GraphData$
        //   // .debounceTime(1000)/*TODO: this is a fix; because can't stop listing to header*/
        //   .subscribe((value)=>{
        //     //
        //     // this.series_Sessions = this.utilityService.convert(value.userAcquisition,"labels","Date") ;
        //     // this.chartValue
        //     //   = this.utilityService.appendChartValueAndSeries(this.series_Sessions,this.constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT);
        //     try{
        //       // this.highchartData = this.utilityService.convert(value[this.activeTab],"labels","Date");
        //       // if(this.activeTab === this.myEAnalysis2TypesEnum.totalRooms){labelType = "Time"}
        //       this.highchartData = <any>this.utilityService.convert_xAxisText(value[this.activeTab],"labels") ;
        //       this.chartValue
        //         = this.utilityService.appendChartValueAndSeries(this.highchartData,this.constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT);
        //     }catch (e) {
        //       console.log(e);
        //     }
        //   })
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
        this.tabClicked(this.activeTab);
        this.analytics2GraphData$
            .subscribe(function (value) {
            try {
                var granularity = value.analysisHeaderData.granularity;
                var granularity_ms = _this.utilityService.convertGranularityStrToMs(granularity);
                _this.chartValue =
                    _this.utilityService.convertDateTimeGraph(value[_this.activeTab], "labels", new Date(value.analysisHeaderData.startdate).getTime(), granularity_ms);
            }
            catch (e) {
                // console.log(e);
            }
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_7__["AnalysisStateReducer2"].getAnalytics2GraphData),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], Analytics2UsersComponent.prototype, "analytics2GraphData$", void 0);
    Analytics2UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics2-users',
            template: __webpack_require__(/*! ./analytics2-users.component.html */ "./src/app/core/analysis2/according-to-old-ui/analytics2-users/analytics2-users.component.html"),
            styles: [__webpack_require__(/*! ./analytics2-users.component.scss */ "./src/app/core/analysis2/according-to-old-ui/analytics2-users/analytics2-users.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], Analytics2UsersComponent);
    return Analytics2UsersComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/analysis2-body/analysis2-body.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-body/analysis2-body.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"d-flex row-body bg-white border mt-4\">-->\r\n\r\n  <!--<div class=\"side-bar  border-right\">-->\r\n    <!--<div class=\"side-bar-content\">-->\r\n      <!--<a [routerLink]=\"['/core','analytics2']\" routerLinkActive=\"font-weight-bold\" class=\"heading  my-3\">Analytics</a>-->\r\n      <!--<a [routerLink]=\"['/core','analytics2','overview']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">Overview</a>-->\r\n      <!--<a [routerLink]=\"['/core','analytics2','volume']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">Volume</a>-->\r\n      <!--<a [routerLink]=\"['/core','analytics2','performance']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">Performance</a>-->\r\n      <!--<a [routerLink]=\"['/core','analytics2','engagement']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">Engagement</a>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--<div class=\"flex-grow-1\">-->\r\n    <!--<router-outlet style=\"flex-grow: 1\"></router-outlet>-->\r\n  <!--</div>-->\r\n  <!--&lt;!&ndash;<app-analysis2-overview></app-analysis2-overview>&ndash;&gt;-->\r\n\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-body/analysis2-body.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-body/analysis2-body.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-body {\n  height: 85%; }\n  .row-body .side-bar {\n    flex-basis: 13%;\n    flex-shrink: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .row-body .side-bar .side-bar-content {\n      display: flex;\n      flex-direction: column; }\n  .row-body .heading {\n    font-size: 16px;\n    line-height: 13px;\n    font-weight: 700;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif; }\n"

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-body/analysis2-body.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-body/analysis2-body.component.ts ***!
  \***************************************************************************/
/*! exports provided: Analysis2BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2BodyComponent", function() { return Analysis2BodyComponent; });
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

var Analysis2BodyComponent = /** @class */ (function () {
    function Analysis2BodyComponent() {
    }
    Analysis2BodyComponent.prototype.ngOnInit = function () {
    };
    Analysis2BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-body',
            template: __webpack_require__(/*! ./analysis2-body.component.html */ "./src/app/core/analysis2/analysis2-body/analysis2-body.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-body.component.scss */ "./src/app/core/analysis2/analysis2-body/analysis2-body.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Analysis2BodyComponent);
    return Analysis2BodyComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/analysis2-engagement/analysis2-engagement.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-engagement/analysis2-engagement.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---->\r\n<!--Tabbing starts-->\r\n<ul class=\"nav nav-tabs my-2 theme-tabbing\">\r\n  <!-- <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{eng:'Sessions'}\"\r\n       (click)=\"tabClicked('Sessions')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='Sessions'}\"><strong>Sessions per user</strong></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{eng:'Messages'}\"\r\n       (click)=\"tabClicked('Messages')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='Messages'}\"><strong>Messages per session</strong></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" queryParamsHandling=\"merge\" replaceUrl=\"true\"\r\n       [queryParams]=\"{eng:'Time'}\"\r\n       (click)=\"tabClicked('Time')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='Time'}\"><strong>Time per session</strong></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" queryParamsHandling=\"merge\" replaceUrl=\"true\"\r\n       [queryParams]=\"{eng:'channel_Wise_Sessions'}\"\r\n       (click)=\"tabClicked('channel_Wise_Sessions')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='channel_Wise_Sessions'}\"><strong>ChannelWise Sessions</strong></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" queryParamsHandling=\"merge\" replaceUrl=\"true\"\r\n       [queryParams]=\"{eng:'channel_Wise_Users'}\"\r\n       (click)=\"tabClicked('channel_Wise_Users')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='channel_Wise_Users'}\"><strong>ChannelWise Users</strong></a>\r\n  </li> -->\r\n\r\n  <!-- added now -->\r\n  <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{vol:'Users'}\"\r\n       (click)=\"tabClicked('Users')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='Users'}\"><strong>Users</strong></a>\r\n  </li>\r\n</ul>\r\n<!--Tabbing ends-->\r\n\r\n\r\n<app-chart *ngIf=\"activeTab==='Sessions'\" [data]=\"series_Sessions\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\"></app-chart>\r\n\r\n<app-chart *ngIf=\"activeTab==='Messages'\" [data]=\"series_Messages\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED\">\r\n</app-chart>\r\n\r\n<app-chart *ngIf=\"activeTab==='Time'\" [data]=\"series_Time\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED\">\r\n</app-chart>\r\n\r\n<app-chart *ngIf=\"activeTab==='channel_Wise_Sessions'\" [data]=\"series_ChannelWiseSessions\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED\">\r\n</app-chart>\r\n<app-chart *ngIf=\"activeTab==='channel_Wise_Users'\" [data]=\"series_ChannelWiseUsers\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED\">\r\n</app-chart>\r\n<!-- added now -->\r\n<app-chart *ngIf=\"activeTab==='Users'\" [data]=\"series_Users\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n          </app-chart>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-engagement/analysis2-engagement.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-engagement/analysis2-engagement.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-engagement/analysis2-engagement.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-engagement/analysis2-engagement.component.ts ***!
  \***************************************************************************************/
/*! exports provided: Analysis2EngagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2EngagementComponent", function() { return Analysis2EngagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _node_modules_ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Analysis2EngagementComponent = /** @class */ (function () {
    function Analysis2EngagementComponent(constantsService, activatedRoute, store, u) {
        this.constantsService = constantsService;
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.u = u;
        this.activeTab = 'Sessions';
        this.series_Sessions = [{
                name: 'Maximum',
                data: [4, 5, 8, 12, 10, 6, 22, 3]
            }, {
                name: 'Average',
                data: [2, 2.5, 6.2, 4.4, 8, 4, 12.4, 1.3]
            }, {
                name: 'Minimum',
                data: [1, 2, 1, 2, 1, 2, 1, 1]
            }];
        this.series_Messages = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_Users = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
    }
    Analysis2EngagementComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        if (this.activeTab === 'Sessions') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_7__["EAnalysis2TypesEnum"].userLoyalty }
            }));
        }
        if (this.activeTab === 'Time') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_7__["EAnalysis2TypesEnum"].channelWiseAverageSessionTime }
            }));
        }
        if (this.activeTab === 'channel_Wise_Sessions') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_7__["EAnalysis2TypesEnum"].channelWiseSessions }
            }));
        }
        if (this.activeTab === 'channel_Wise_Users') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_7__["EAnalysis2TypesEnum"].channelWiseUsers }
            }));
        }
        // added now
        if (this.activeTab === 'Users') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_7__["EAnalysis2TypesEnum"].userAcquisition }
            }));
        }
    };
    Analysis2EngagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('perf') || 'Users';
        this.analysisstate2$
            .subscribe(function (value) {
            // ;
            if (value.userLoyalty) {
                _this.series_Sessions = _this.u.convert(value.userLoyalty, "labels", "String");
            }
            if (value.channelWiseAverageSessionTime) {
                _this.series_Time = _this.u.convert(value.channelWiseAverageSessionTime, "labels", "Date");
            }
            if (value.channelWiseSessions) {
                _this.series_ChannelWiseSessions = _this.u.convert(value.channelWiseSessions, "labels", "Date");
            }
            if (value.channelWiseUsers) {
                _this.series_ChannelWiseUsers = _this.u.convert(value.channelWiseUsers, "labels", "Date");
            }
            // added now
            if (value.userAcquisition) {
                _this.series_Users = _this.u.convert(value.userAcquisition, "labels", "Date");
            }
        });
    };
    __decorate([
        Object(_node_modules_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(),
        __metadata("design:type", _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], Analysis2EngagementComponent.prototype, "analysisstate2$", void 0);
    Analysis2EngagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-engagement',
            template: __webpack_require__(/*! ./analysis2-engagement.component.html */ "./src/app/core/analysis2/analysis2-engagement/analysis2-engagement.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-engagement.component.scss */ "./src/app/core/analysis2/analysis2-engagement/analysis2-engagement.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _node_modules_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]])
    ], Analysis2EngagementComponent);
    return Analysis2EngagementComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/analysis2-header/analysis2-header.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-header/analysis2-header.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button (click)=\"click1()\">click</button>-->\r\n<form ngNativeValidate\r\n      [ngClass]=\"{'':errorMessage}\"\r\n      class=\" d-flex align-items-center analysis2-header-row position-relative\" #form=\"ngForm\">\r\n\r\n\r\n  <div class=\"heading ml-4\">Filter Data</div>\r\n\r\n  <div class=\"form-group m-0 mr-4 ml-auto\">\r\n    <label for=\"\">Bot</label>\r\n    <select class=\"concept1\" [ngModel] required name=\"botId\">\r\n      <option *ngFor=\"let bot of codebasedBotList; let i = index;\" [selected]=\"i===0\" type=\"button\" [value]=\"bot.id\">{{bot.name}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group m-0 mr-4 \">\r\n    <label for=\"\">Channel</label>\r\n    <select  [ngModel] required name=\"platform\">\r\n      <option *ngFor=\"let channel of channelList\"  type=\"button\" [value]=\"channel.name\">{{channel.displayName}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group m-0 mr-4\">\r\n      <label for=\"\">Time Range</label>\r\n    <input type=\"text\"\r\n           placeholder=\"Start Date\"\r\n           style=\"width: 100px;\"\r\n           name=\"startdate\"\r\n           [(ngModel)]=\"startdate\"\r\n           required\r\n           readonly\r\n           bsDatepicker\r\n           [bsConfig]=\"datePickerConfig\">\r\n  </div>\r\n  <div class=\"form-group m-0 mr-4\">\r\n    <input type=\"text\"\r\n           style=\"width: 100px;\"\r\n           placeholder=\"End Date\"\r\n           name=\"enddate\"\r\n           [(ngModel)]=\"enddate\"\r\n           bsDatepicker\r\n           readonly\r\n           [maxDate]=\"maxDate\"\r\n           [bsConfig]=\"datePickerConfig\">\r\n  </div>\r\n\r\n  <div class=\"form-group m-0 mr-4\">\r\n    <label for=\"\">Granularity</label>\r\n    <select  [(ngModel)]=\"granularity\" required name=\"granularity\">\r\n      <option *ngFor=\"let granularity of granularityList\"  type=\"button\" [value]=\"granularity\">{{granularity}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"text-right\" style=\"position: absolute; left: 0;right: 0; bottom: 0\">\r\n    <i  *ngIf=\"errorMessage\" class=\"text-danger mr-4\" style=\"font-size: 11px\">{{errorMessage}}</i>\r\n  </div>\r\n\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-header/analysis2-header.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-header/analysis2-header.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".analysis2-header-row {\n  background-color: white;\n  height: 100%; }\n  .analysis2-header-row .heading {\n    font-size: 16px;\n    line-height: 13px;\n    font-weight: 700;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif; }\n  .analysis2-header-row label {\n    margin-right: 10px;\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 400;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif; }\n  .analysis2-header-row select, .analysis2-header-row input {\n    height: 32px;\n    width: 130px;\n    border-radius: 2px;\n    padding-left: 5px;\n    border: solid 1px #e0e0e0;\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 400;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif;\n    outline: none; }\n"

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-header/analysis2-header.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-header/analysis2-header.component.ts ***!
  \*******************************************************************************/
/*! exports provided: Analysis2HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2HeaderComponent", function() { return Analysis2HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ngxs/analysis.state */ "./src/app/core/analysis2/ngxs/analysis.state.ts");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../view-bots/view-bots.component */ "./src/app/core/view-bots/view-bots.component.ts");
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












var Analysis2HeaderComponent = /** @class */ (function () {
    function Analysis2HeaderComponent(store, serverService, constantsService, route, activatedRoute, utilityService) {
        this.store = store;
        this.serverService = serverService;
        this.constantsService = constantsService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.utilityService = utilityService;
        this.codebasedBotList = [];
        this.maxDate = new Date();
        this.granularityList = [
            'hour', 'day', 'month', 'year'
        ];
        this.startdate = new Date(new Date().setDate(new Date().getDate() - 30));
        this.enddate = new Date();
        this.granularity = 'day';
        this.datePickerConfig = this.constantsService.DATE_PICKER_CONFIG;
        this.channelList = this.constantsService.CHANNEL_LIST;
        this.errorMessage = null;
    }
    Object.defineProperty(Analysis2HeaderComponent.prototype, "allbotList", {
        set: function (_allbotList) {
            if (!_allbotList)
                return;
            this._allbotList = _allbotList;
            this.codebasedBotList = this._allbotList.filter(function (bot) { return bot.bot_type === _view_bots_view_bots_component__WEBPACK_IMPORTED_MODULE_11__["EBotType"].chatbot; });
            if (this.f && _allbotList && _allbotList.length > 0)
                this.f.form.patchValue({ botId: this._allbotList[0].id, platform: this.channelList[0].name });
        },
        enumerable: true,
        configurable: true
    });
    Analysis2HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*
        * form contains the header data, Whenever form changes,
        * update the header data in store
        * */
        this.formChangesSub = this.f.form.valueChanges
            .debounceTime(1000)
            .subscribe(function (formData) {
            console.log(_this.f);
            if (_this.utilityService.areTwoJSObjectSame(_this.formData, formData))
                return;
            _this.formData = formData;
            if (!_this.f.valid)
                return;
            var selectedBot = _this._allbotList.find(function (bot) { return bot.id === Number(_this.f.value.botId); });
            // this.route.navigate(["." ], {queryParams:{granularity:this.f.value.granularity} , relativeTo: this.activatedRoute});
            var analysisHeaderData = __assign({ 'bot-access-token': selectedBot.bot_access_token, platform: 'web' }, formData);
            _this.store.dispatch([new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["ResetAnalytics2GraphData"]()])
                .subscribe(function () {
                _this.store.dispatch([
                    new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetAnalysis2HeaderData"]({ analysisHeaderData: analysisHeaderData })
                ]);
            });
        });
        //
        /*
        *Whenever the header data changes, make get request for analytics data
        * and when analytics data arrives, save in store again its "type"
        * */
        this.loggeduserSub = this.loggeduser$.subscribe(function (loggeduser) {
            _this.loggeduser = loggeduser;
        });
        this.analytics2HeaderDataSub = this.analytics2HeaderData$.subscribe(function (analytics2HeaderData) {
            /*move this code to dedicated service*/
            try {
                _this.f.form.patchValue(analytics2HeaderData);
                var url_1 = _this.constantsService.getAnalyticsUrl();
                var headerData_1 = __assign({}, analytics2HeaderData, { 'auth-token': _this.loggeduser.user.auth_token, 'user-access-token': _this.loggeduser.user.user_access_token, startdate: _this.utilityService.convertDateObjectStringToDDMMYY(analytics2HeaderData.startdate), enddate: _this.utilityService.convertDateObjectStringToDDMMYY(analytics2HeaderData.enddate) });
                //asdas
                if (!_this.utilityService.areAllValesDefined(headerData_1))
                    return;
                if (_this.utilityService.areTwoJSObjectSame(_this.analytics2HeaderData, analytics2HeaderData))
                    return;
                _this.store.dispatch([new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["ResetAnalytics2GraphData"]()])
                    .debounceTime(1000)
                    .subscribe(function () {
                    var isHeaderValid = _this.isHeaderValid(analytics2HeaderData.startdate, analytics2HeaderData.enddate, analytics2HeaderData.granularity);
                    if (!isHeaderValid)
                        return;
                    _this.analytics2HeaderData = analytics2HeaderData;
                    _this.store.dispatch([new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["ResetAnalytics2GraphData"]()]);
                    // this.makeGetReqSub && this.makeGetReqSub.unsubscribe();//todo: better use .
                    _this.makeGetReqSub = _this.serverService.makeGetReq({ url: url_1, headerData: headerData_1 })
                        .take(1)
                        .subscribe(function (response) {
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].overviewinfo) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetOverviewInfoData"]({ data: responseCopy.objects[0].output }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].channelWiseFlowsPerSession) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetChannelWiseFlowsPerSession"]({ data: responseCopy.objects[0].output.channelWiseFlowsPerSession }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].userAcquisition) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetUserAcquisition"]({ data: responseCopy.objects[0].output.userAcquisition }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].totalMessages) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetTotalMessages"]({ data: responseCopy.objects[0].output.messagesinfo }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].averageRoomTime) {
                            ;
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetAverageRoomTime"]({ data: responseCopy.objects[0].output.averageRoomTime }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].userLoyalty) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetUserLoyalty"]({ data: responseCopy.objects[0].output.userLoyalty }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].channelWiseAverageSessionTime) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetChannelWiseAverageSessionTime"]({ data: responseCopy.objects[0].output.channelWiseAverageSessionTime }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].totalFlows) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetTotalFlows"]({ data: responseCopy.objects[0].output.totalFlows }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].totalFlows) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetTotalFlows"]({ data: responseCopy.objects[0].output.totalFlows }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].flowsPerRoom) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetFlowsPerRoom"]({ data: responseCopy.objects[0].output.flowsPerRoom }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].totalRooms) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetTotalRooms"]({ data: responseCopy.objects[0].output.totalRooms }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].roomDuration) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetRoomDuration"]({ data: responseCopy.objects[0].output.roomDuration }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].channelWiseSessions) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetChannelWiseSessions"]({ data: responseCopy.objects[0].output.channelWiseSessions }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].channelWiseUsers) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetChannelWiseUsers"]({ data: responseCopy.objects[0].output.channelWiseUsers }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].usagetracking) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["SetUsagetrackingInfo"]({ data: responseCopy.objects[0].output[_interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].usagetracking] }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].topgenerationtemplates) {
                            var responseCopy = response;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["Topgenerationtemplates"]({ data: responseCopy.objects[0].output[_interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].topgenerationtemplates] }));
                        }
                        if (headerData_1.type === _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_9__["EAnalysis2TypesEnum"].totalSessions) {
                            var responseCopy = response;
                            ;
                            _this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["TotalSessions"]({ data: responseCopy.objects[0].output['messagesinfo'] }));
                        }
                    });
                });
            }
            catch (e) {
                console.log(e);
                // this.utilityService.showErrorToaster(e);
            }
        });
    };
    Analysis2HeaderComponent.prototype.isHeaderValid = function (startDate, endDate, granularity) {
        var startDate = new Date(startDate);
        var endDate = new Date(endDate);
        var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (startDate > endDate) {
            this.errorMessage = 'start date is larger than end date';
            return false;
        }
        if (diffDays > 30 && granularity === 'hour') {
            this.errorMessage = 'Granularity hour is not allowed for time range higher than 1 month';
            return false;
        }
        this.errorMessage = null;
        return true;
    };
    Analysis2HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.f.controls.botId.valueChanges.subscribe(function (data) {
                if (!_this.f.value.botId)
                    return;
                var selectedBot = _this._allbotList.find(function (bot) { return bot.id === Number(_this.f.value.botId); });
                if (selectedBot) {
                    _this.channelList =
                        Object.keys(selectedBot.integrations.channels).filter(function (integrationKey) {
                            return selectedBot.integrations.channels[integrationKey].enabled;
                        }).map(function (integrationKey) {
                            return {
                                name: integrationKey,
                                displayName: integrationKey
                            };
                        });
                    _this.channelList.push({
                        name: 'web',
                        displayName: 'web'
                    });
                    _this.channelList.unshift({ name: 'all', displayName: 'All Channels' });
                }
            });
            if (_this._allbotList)
                _this.f.form.patchValue({ botId: _this._allbotList[0].id, platform: _this.channelList[0].name });
        }, 0);
    };
    Analysis2HeaderComponent.prototype.click1 = function () {
        console.log(this.f);
    };
    Analysis2HeaderComponent.prototype.ngOnDestroy = function () {
        this.analytics2HeaderDataSub && this.analytics2HeaderDataSub.unsubscribe();
        this.loggeduser && this.loggeduserSub.unsubscribe();
        this.formChangesSub && this.formChangesSub.unsubscribe();
        this.makeGetReqSub && this.makeGetReqSub.unsubscribe();
        this.store.dispatch([new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["ResetAnalytics2HeaderData"](), new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_5__["ResetAnalytics2GraphData"]()]);
        // this.store.dispatch([]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Analysis2HeaderComponent.prototype, "allbotList", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], Analysis2HeaderComponent.prototype, "f", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_ngxs_analysis_state__WEBPACK_IMPORTED_MODULE_8__["AnalysisStateReducer2"].getAnalytics2HeaderData),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], Analysis2HeaderComponent.prototype, "analytics2HeaderData$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], Analysis2HeaderComponent.prototype, "loggeduser$", void 0);
    Analysis2HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-header',
            template: __webpack_require__(/*! ./analysis2-header.component.html */ "./src/app/core/analysis2/analysis2-header/analysis2-header.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-header.component.scss */ "./src/app/core/analysis2/analysis2-header/analysis2-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _server_service__WEBPACK_IMPORTED_MODULE_6__["ServerService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]])
    ], Analysis2HeaderComponent);
    return Analysis2HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/analysis2-overview/analysis2-overview.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-overview/analysis2-overview.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"(data$|async) as data\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 header d-flex align-items-center\">\r\n      <div class=\"heading mb-0\">\r\n        Summery\r\n      </div>\r\n      <div class=\"pl-1 text-muted\"> (Compared over previous range)</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row display-data-row\">\r\n    <!--q1 starts-->\r\n    <div class=\"col-6 border-right border-bottom pb-5\">\r\n      <div class=\"heading mb-12\">Total Session</div>\r\n      <div class=\"font-20 mb-32\">{{data.totalSessions}}</div>\r\n      <div class=\"d-flex justify-content-between font-20 mb-2\">\r\n        <div>40%</div>\r\n        <div>20%</div>\r\n        <div>20%</div>\r\n      </div>\r\n      <div class=\"d-flex justify-content-between\">\r\n        <div>Completed by bot</div>\r\n        <div>Agent Handover</div>\r\n        <div>User Abandoned</div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--q2 starts-->\r\n    <div class=\"col-6 border-bottom\">\r\n      <div class=\"heading mb-12\">Total Users</div>\r\n      <div class=\"font-26 mb-32\">{{data.totalUsers}}</div>\r\n      <div class=\"d-flex justify-content-between mb-2\">\r\n        <div class=\"d-flex flex-column align-items-center\">\r\n          <div class=\"font-20 mb-2\">40%</div>\r\n          <div>New</div>\r\n        </div>\r\n        <div class=\"d-flex flex-column align-items-center\">\r\n          <div class=\"font-20 mb-2\">60%</div>\r\n          <div>Returning</div>\r\n        </div>\r\n        <div class=\"d-flex flex-column align-items-center\">\r\n          <div class=\"font-20 mb-2\">345k</div>\r\n          <div>Message exchanges</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--q3 starts-->\r\n    <div class=\"col-6 border-right q3\">\r\n      <div class=\"row m-0 \">\r\n        <div class=\"col-6 p-0 heading mb-12\">Avg time spent on bot(h:m)</div>\r\n        <div class=\"col-6 p-0 heading mb-12\">Avg session per user</div>\r\n      </div>\r\n      <div class=\"row m-0 mb-32\">\r\n        <div class=\"col-6 p-0 font-26\">{{data.averageTime.hours+':'+data.averageTime.minutes}}</div>\r\n        <div class=\"col-6 p-0 font-26\">\r\n          <div>2.4</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row m-0\">\r\n        <div class=\"col-12 p-0 heading mb-12\">Total time spent(h:m)</div>\r\n        <div class=\"col-12 p-0 font-26\">{{data.totalTime.hours+':'+data.totalTime.minutes}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--q4 starts-->\r\n    <div class=\"col-6 q4\">\r\n\r\n      <div class=\"row m-0\">\r\n        <div class=\"col-6 p-0 heading mb-12\">Top flows triggered</div>\r\n        <div class=\"col-6 p-0 heading mb-12\">\r\n            <div>Top template keys triggered</div>\r\n        </div>\r\n        <div class=\"row m-0\">\r\n          <div class=\"col-5 mb-32 p-0 d-flex justify-content-between\">\r\n            <span>Do_you_deliver</span>\r\n            <span class=\"font-20\">2%</span>\r\n          </div>\r\n          <div class=\"col-1 mb-32\"></div>\r\n          <div class=\"col-6 p-0 d-flex justify-content-between\">\r\n            <span>Do_you_deliver</span>\r\n            <span class=\"font-20\">2%</span>\r\n          </div>\r\n          <div class=\"col-5 p-0 d-flex justify-content-between\">\r\n            <span>Do_you_deliver</span>\r\n            <span class=\"font-20\">2%</span>\r\n          </div>\r\n          <div class=\"col-1\"></div>\r\n          <div class=\"col-6 p-0 d-flex justify-content-between\">\r\n            <span>Do_you_deliver</span>\r\n            <span class=\"font-20\">2%</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-overview/analysis2-overview.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-overview/analysis2-overview.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 47px; }\n\n.heading {\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 700;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n\n.display-data-row {\n  padding-right: 23px;\n  padding-left: 23px;\n  padding-top: 23px;\n  padding-bottom: 23px; }\n\n.q3, .q4 {\n  padding-top: 23px; }\n\n.font-26 {\n  font-size: 20px;\n  line-height: 16px;\n  font-weight: 400;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n\n.font-20 {\n  font-size: 20px;\n  line-height: 16px;\n  font-weight: 300;\n  color: #474747;\n  font-family: \"Helvetica\", sans-serif; }\n\n.mb-32 {\n  margin-bottom: 32px !important; }\n\n.mb-12 {\n  margin-bottom: 12px !important; }\n"

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-overview/analysis2-overview.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-overview/analysis2-overview.component.ts ***!
  \***********************************************************************************/
/*! exports provided: Analysis2OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2OverviewComponent", function() { return Analysis2OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Analysis2OverviewComponent = /** @class */ (function () {
    function Analysis2OverviewComponent(serverService, constantsService, utilityService, store) {
        this.serverService = serverService;
        this.constantsService = constantsService;
        this.utilityService = utilityService;
        this.store = store;
    }
    Analysis2OverviewComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
            analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_7__["EAnalysis2TypesEnum"].overviewinfo }
        }));
        this.data$ = this.analysisstate2$.map(function (analysisState) {
            return analysisState.overviewInfo;
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], Analysis2OverviewComponent.prototype, "analysisstate2$", void 0);
    Analysis2OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-overview',
            template: __webpack_require__(/*! ./analysis2-overview.component.html */ "./src/app/core/analysis2/analysis2-overview/analysis2-overview.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-overview.component.scss */ "./src/app/core/analysis2/analysis2-overview/analysis2-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], Analysis2OverviewComponent);
    return Analysis2OverviewComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/analysis2-performance/analysis2-performance.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-performance/analysis2-performance.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--TODO: create a directive for tabbing-->\r\n<!--Tabbing starts-->\r\n<ul class=\"nav nav-tabs my-2 theme-tabbing\">\r\n  <!-- <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{perf:'sessions'}\"\r\n       (click)=\"tabClicked('sessions')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='sessions'}\"><strong>Sessions wise</strong></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{perf:'template'}\"\r\n       (click)=\"tabClicked('template')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='template'}\"><strong>Template key</strong></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" queryParamsHandling=\"merge\" replaceUrl=\"true\"\r\n       [queryParams]=\"{perf:'flows'}\"\r\n       (click)=\"tabClicked('flows')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='flows'}\"><strong>Flows triggered</strong></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" queryParamsHandling=\"merge\" replaceUrl=\"true\"\r\n       [queryParams]=\"{perf:'flows_per_room'}\"\r\n       (click)=\"tabClicked('flows_per_room')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='flows_per_room'}\"><strong>Flows Per Room</strong></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" queryParamsHandling=\"merge\" replaceUrl=\"true\"\r\n       [queryParams]=\"{perf:'total_rooms'}\"\r\n       (click)=\"tabClicked('total_rooms')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='total_rooms'}\"><strong>Total Rooms</strong></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" queryParamsHandling=\"merge\" replaceUrl=\"true\"\r\n       [queryParams]=\"{perf:'room_duration'}\"\r\n       (click)=\"tabClicked('room_duration')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='room_duration'}\"><strong>Room Duration</strong></a>\r\n  </li> -->\r\n  <!-- added now -->\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" queryParamsHandling=\"merge\" replaceUrl=\"true\"\r\n       [queryParams]=\"{vol:'Messages'}\"\r\n       (click)=\"tabClicked('Messages')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='Messages'}\">\r\n       <strong>Messages</strong></a>\r\n  </li>\r\n</ul>\r\n<!--Tabbing ends-->\r\n\r\n\r\n<app-chart *ngIf=\"activeTab==='sessions'\" [data]=\"series_sessions\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\"></app-chart>\r\n\r\n<app-chart *ngIf=\"activeTab==='template'\" [data]=\"series_template\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED\">\r\n</app-chart>\r\n\r\n<app-chart *ngIf=\"activeTab==='flows'\" [data]=\"series_flows\"\r\n[chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n[highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n\r\n<app-chart *ngIf=\"activeTab==='flows_per_room'\" [data]=\"series_flows_per_room\"\r\n[chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n[highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n\r\n<app-chart *ngIf=\"activeTab==='total_rooms'\" [data]=\"series_total_rooms\"\r\n[chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n[highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n\r\n<app-chart *ngIf=\"activeTab==='room_duration'\" [data]=\"series_room_duration\"\r\n[chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n[highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n\r\n<!-- added now -->\r\n<app-chart *ngIf=\"activeTab==='Messages'\" [data]=\"series_Messages\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-performance/analysis2-performance.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-performance/analysis2-performance.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-performance/analysis2-performance.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-performance/analysis2-performance.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: Analysis2PerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2PerformanceComponent", function() { return Analysis2PerformanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _node_modules_ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Analysis2PerformanceComponent = /** @class */ (function () {
    function Analysis2PerformanceComponent(constantsService, activatedRoute, store, u) {
        this.constantsService = constantsService;
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.u = u;
        this.activeTab = "sessions";
        this.series_sessions = [{
                name: 'Handled by bot',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Handled by agent',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'User abandoned',
                data: [3, 4, 4, 2, 5]
            }];
        this.series_template = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_flows_per_room = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_Messages = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
    }
    Analysis2PerformanceComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        if (this.activeTab === 'template') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].topgenerationtemplates }
            }));
        }
        ;
        if (this.activeTab === 'flows') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].totalFlows }
            }));
        }
        if (this.activeTab === 'flows_per_room') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].flowsPerRoom }
            }));
        }
        if (this.activeTab === 'total_rooms') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].totalRooms }
            }));
        }
        if (this.activeTab === 'room_duration') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].roomDuration }
            }));
        }
        //added now
        if (this.activeTab === 'Messages') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_6__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].totalMessages }
            }));
        }
    };
    Analysis2PerformanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('perf') || 'Messages';
        this.analysisstate2$
            .subscribe(function (value) {
            // ;
            if (value.topgenerationtemplates) {
                _this.series_template = _this.u.convert(value.topgenerationtemplates, "labels", "Date");
            }
            ;
            if (value.totalFlows) {
                _this.series_flows = _this.u.convert(value.totalFlows, "labels", "Date");
            }
            if (value.flowsPerRoom) {
                _this.series_flows_per_room = _this.u.convert(value.flowsPerRoom, "labels", "Date");
            }
            if (value.totalRooms) {
                _this.series_total_rooms = _this.u.convert(value.totalRooms, "labels", "Date");
            }
            if (value.roomDuration) {
                _this.series_room_duration = _this.u.convert(value.roomDuration, "labels", "String");
            }
            //added now
            if (value.totalMessages) {
                _this.series_Messages = _this.u.convert(value.totalMessages, "labels", "Date");
            }
        });
    };
    __decorate([
        Object(_node_modules_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(),
        __metadata("design:type", _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], Analysis2PerformanceComponent.prototype, "analysisstate2$", void 0);
    Analysis2PerformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-performance',
            template: __webpack_require__(/*! ./analysis2-performance.component.html */ "./src/app/core/analysis2/analysis2-performance/analysis2-performance.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-performance.component.scss */ "./src/app/core/analysis2/analysis2-performance/analysis2-performance.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _node_modules_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]])
    ], Analysis2PerformanceComponent);
    return Analysis2PerformanceComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/analysis2-volume/analysis2-volume.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-volume/analysis2-volume.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---->\r\n<!--Tabbing starts-->\r\n<ul class=\"nav nav-tabs my-2 theme-tabbing\">\r\n  <!-- <li class=\"nav-item ml-3\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{vol:'Users'}\"\r\n       (click)=\"tabClicked('Users')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='Users'}\"><strong>Users</strong></a>\r\n  </li> -->\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\"\r\n       queryParamsHandling=\"merge\"\r\n       replaceUrl=\"true\"\r\n       [queryParams]=\"{vol:'Sessions'}\"\r\n       (click)=\"tabClicked('Sessions')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='Sessions'}\"><strong>Sessions Analysis</strong></a>\r\n  </li>\r\n  <!-- for now -->\r\n  <!-- <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" queryParamsHandling=\"merge\" replaceUrl=\"true\"\r\n       [queryParams]=\"{vol:'Messages'}\"\r\n       (click)=\"tabClicked('Messages')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='Messages'}\">\r\n       <strong>Messages</strong></a>\r\n  </li> -->\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" queryParamsHandling=\"merge\" replaceUrl=\"true\"\r\n       [queryParams]=\"{vol:'Time'}\"\r\n       (click)=\"tabClicked('Time')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='Time'}\"><strong>Session Duration</strong></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" queryParamsHandling=\"merge\" replaceUrl=\"true\"\r\n       [queryParams]=\"{perf:'flows'}\"\r\n       (click)=\"tabClicked('flows')\"\r\n       [ngClass]=\"{'tab-active':activeTab==='flows'}\"><strong>Active Flows</strong></a>\r\n  </li>\r\n</ul>\r\n<!--Tabbing ends-->\r\n\r\n\r\n<app-chart *ngIf=\"activeTab==='Sessions'\" [data]=\"series_Sessions\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n          </app-chart>\r\n\r\n<app-chart *ngIf=\"activeTab==='Messages'\" [data]=\"series_Messages\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n</app-chart>\r\n\r\n<app-chart *ngIf=\"activeTab==='Time'\" [data]=\"series_Time\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED\">\r\n</app-chart>\r\n<app-chart *ngIf=\"activeTab==='Users'\" [data]=\"series_Users\"\r\n           [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n           [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n          </app-chart>\r\n<app-chart *ngIf=\"activeTab==='flows'\" [data]=\"series_flows\"\r\n          [chartValue]=\"constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT\"\r\n          [highChartThemeValue]=\"constantsService.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE\">\r\n          </app-chart>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-volume/analysis2-volume.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-volume/analysis2-volume.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-volume/analysis2-volume.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-volume/analysis2-volume.component.ts ***!
  \*******************************************************************************/
/*! exports provided: Analysis2VolumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2VolumeComponent", function() { return Analysis2VolumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../interfaces/Analytics2/analysis2-types */ "./src/interfaces/Analytics2/analysis2-types.ts");
/* harmony import */ var _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngxs/analysis.action */ "./src/app/core/analysis2/ngxs/analysis.action.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility.service */ "./src/app/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Analysis2VolumeComponent = /** @class */ (function () {
    function Analysis2VolumeComponent(constantsService, activatedRoute, store, u) {
        this.constantsService = constantsService;
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.u = u;
        // data$: Observable<IChannelWiseFlowsPerSessionItem[]>;
        this.activeTab = 'Sessions';
        this.series_Sessions = [{
                name: 'Maximum',
                data: [4, 5, 8, 12, 10, 6, 22, 3]
            }, {
                name: 'Average',
                data: [2, 2.5, 6.2, 4.4, 8, 4, 12.4, 1.3]
            }, {
                name: 'Minimum',
                data: [1, 2, 1, 2, 1, 2, 1, 1]
            }];
        this.series_Messages = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_Users = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
        this.series_Time = [{
                name: 'Triggered',
                data: [5, 3, 4, 7, 2]
            }];
    }
    Analysis2VolumeComponent.prototype.tabClicked = function (activeTab) {
        this.activeTab = activeTab;
        if (this.activeTab === 'Sessions') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_4__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].channelWiseFlowsPerSession }
            }));
        }
        if (this.activeTab === 'Users') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_4__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].userAcquisition }
            }));
        }
        if (this.activeTab === 'Messages') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_4__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].totalMessages }
            }));
        }
        if (this.activeTab === 'Time') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_4__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].averageRoomTime }
            }));
        }
        //adding new now
        if (this.activeTab === 'flows') {
            this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_4__["SetAnalysis2HeaderData"]({
                analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].totalFlows }
            }));
        }
    };
    Analysis2VolumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('vol') || 'Sessions';
        this.store.dispatch(new _ngxs_analysis_action__WEBPACK_IMPORTED_MODULE_4__["SetAnalysis2HeaderData"]({
            analysisHeaderData: { type: _interfaces_Analytics2_analysis2_types__WEBPACK_IMPORTED_MODULE_3__["EAnalysis2TypesEnum"].channelWiseFlowsPerSession }
        }));
        this.analysisstate2$
            .subscribe(function (value) {
            if (value.channelWiseFlowsPerSession) {
                _this.series_Sessions = _this.u.convert(value.channelWiseFlowsPerSession, "labels", "Date");
            }
            if (value.userAcquisition) {
                _this.series_Users = _this.u.convert(value.userAcquisition, "labels", "Date");
            }
            if (value.totalMessages) {
                _this.series_Messages = _this.u.convert(value.totalMessages, "labels", "Date");
            }
            if (value.averageRoomTime) {
                _this.series_Time = _this.u.convert(value.averageRoomTime, "labels", "Date");
            }
            //addeing extra to anylisis now
            if (value.totalFlows) {
                _this.series_flows = _this.u.convert(value.totalFlows, "labels", "Date");
            }
        });
        // this.analysisstate2$
        // .subscribe((value)=>{
        //   ;
        // let y  = this.u.convert(value.channelWiseFlowsPerSession,"labels") ;
        //   this.series_Sessions = y;
        //
        // })
        // .map((analysisState) => {
        //   ;
        // let x =  this.u.convert(analysisState.channelWiseFlowsPerSession,"labels") ;
        // });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], Analysis2VolumeComponent.prototype, "analysisstate2$", void 0);
    Analysis2VolumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-volume',
            template: __webpack_require__(/*! ./analysis2-volume.component.html */ "./src/app/core/analysis2/analysis2-volume/analysis2-volume.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-volume.component.scss */ "./src/app/core/analysis2/analysis2-volume/analysis2-volume.component.scss")]
        }),
        __metadata("design:paramtypes", [_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]])
    ], Analysis2VolumeComponent);
    return Analysis2VolumeComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/analysis2-wrapper/analysis2-wrapper.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-wrapper/analysis2-wrapper.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-analysis2\">\r\n  <app-analysis2-header [allbotList]=\"(allBotList$|async)\" class=\"header border\"></app-analysis2-header>\r\n  <app-analysis2-body class=\"body\"></app-analysis2-body>\r\n\r\n  <div class=\"body\">\r\n    <div class=\"d-flex row-body bg-white border mt-4\">\r\n\r\n      <div class=\"side-bar  border-right\">\r\n        <div class=\"side-bar-content\">\r\n          <a [routerLink]=\"['/core','analytics2']\" routerLinkActive=\"font-weight-bold\" class=\"heading  my-3\">Analytics</a>\r\n          <!--<a [routerLink]=\"['/core','analytics2','overview']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">Overview</a>-->\r\n          <!--<a [routerLink]=\"['/core','analytics2','volume']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">Sessions</a>-->\r\n          <!--<a [routerLink]=\"['/core','analytics2','performance']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">Performance</a>&lt;!&ndash; Performance was &ndash;&gt;-->\r\n          <!--<a [routerLink]=\"['/core','analytics2','engagement']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">engaggment</a> &lt;!&ndash; engaggment was &ndash;&gt;-->\r\n          <!--according to old UI-->\r\n          <a [routerLink]=\"['/core','analytics2','users']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">\r\n            Users</a> <!-- engaggment was -->\r\n          <a [routerLink]=\"['/core','analytics2','sessions']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">\r\n            Sessions\r\n          </a>\r\n          <a [routerLink]=\"['/core','analytics2','messages']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">\r\n            Messages\r\n          </a>\r\n          <a [routerLink]=\"['/core','analytics2','platform']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">\r\n            Platform\r\n          </a>\r\n          <a [routerLink]=\"['/core','analytics2','events']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">\r\n            Events\r\n          </a>\r\n          <a [routerLink]=\"['/core','analytics2','engagement']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">\r\n            Engagement\r\n          </a>\r\n          <a [routerLink]=\"['/core','analytics2','usage']\" routerLinkActive=\"font-weight-bold\" class=\"tab-theme mb-3\">\r\n            Usage\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-grow-1\">\r\n        <router-outlet style=\"flex-grow: 1\"></router-outlet>\r\n      </div>\r\n      <!--<app-analysis2-overview></app-analysis2-overview>-->\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-wrapper/analysis2-wrapper.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-wrapper/analysis2-wrapper.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-analysis2 {\n  padding: 26px;\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n      -ms-grid-rows: 80px 600px;\n      grid-template-rows: 80px 600px;\n      grid-template-areas: \"h\"\r \"b\"; }\n  .grid-analysis2 .header {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: h; }\n  .grid-analysis2 .body {\n    -ms-grid-row: 2;\n    -ms-grid-column: 1;\n    grid-area: b; }\n  .row-body {\n  height: 85%; }\n  .row-body .side-bar {\n    flex-basis: 13%;\n    flex-shrink: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .row-body .side-bar .side-bar-content {\n      display: flex;\n      flex-direction: column; }\n  .row-body .heading {\n    font-size: 16px;\n    line-height: 13px;\n    font-weight: 700;\n    color: #474747;\n    font-family: \"Helvetica\", sans-serif; }\n"

/***/ }),

/***/ "./src/app/core/analysis2/analysis2-wrapper/analysis2-wrapper.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/core/analysis2/analysis2-wrapper/analysis2-wrapper.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Analysis2WrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2WrapperComponent", function() { return Analysis2WrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Analysis2WrapperComponent = /** @class */ (function () {
    function Analysis2WrapperComponent() {
    }
    Analysis2WrapperComponent.prototype.ngOnInit = function () {
        this.allBotList$ = this.botlist$.map(function (value) { return value.allBotList; });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], Analysis2WrapperComponent.prototype, "botlist$", void 0);
    Analysis2WrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis2-wrapper',
            template: __webpack_require__(/*! ./analysis2-wrapper.component.html */ "./src/app/core/analysis2/analysis2-wrapper/analysis2-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./analysis2-wrapper.component.scss */ "./src/app/core/analysis2/analysis2-wrapper/analysis2-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Analysis2WrapperComponent);
    return Analysis2WrapperComponent;
}());



/***/ }),

/***/ "./src/app/core/analysis2/analysis2.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/analysis2/analysis2.module.ts ***!
  \****************************************************/
/*! exports provided: Analysis2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analysis2Module", function() { return Analysis2Module; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _drag_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../drag.service */ "./src/app/drag.service.ts");
/* harmony import */ var _aim_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../aim.service */ "./src/app/aim.service.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _analysis2_wrapper_analysis2_wrapper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./analysis2-wrapper/analysis2-wrapper.component */ "./src/app/core/analysis2/analysis2-wrapper/analysis2-wrapper.component.ts");
/* harmony import */ var _analysis2_volume_analysis2_volume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./analysis2-volume/analysis2-volume.component */ "./src/app/core/analysis2/analysis2-volume/analysis2-volume.component.ts");
/* harmony import */ var _analysis2_performance_analysis2_performance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./analysis2-performance/analysis2-performance.component */ "./src/app/core/analysis2/analysis2-performance/analysis2-performance.component.ts");
/* harmony import */ var _analysis2_overview_analysis2_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./analysis2-overview/analysis2-overview.component */ "./src/app/core/analysis2/analysis2-overview/analysis2-overview.component.ts");
/* harmony import */ var _analysis2_engagement_analysis2_engagement_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./analysis2-engagement/analysis2-engagement.component */ "./src/app/core/analysis2/analysis2-engagement/analysis2-engagement.component.ts");
/* harmony import */ var _analysis2_header_analysis2_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./analysis2-header/analysis2-header.component */ "./src/app/core/analysis2/analysis2-header/analysis2-header.component.ts");
/* harmony import */ var _analysis2_body_analysis2_body_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./analysis2-body/analysis2-body.component */ "./src/app/core/analysis2/analysis2-body/analysis2-body.component.ts");
/* harmony import */ var _according_to_old_ui_analytics2_users_analytics2_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./according-to-old-ui/analytics2-users/analytics2-users.component */ "./src/app/core/analysis2/according-to-old-ui/analytics2-users/analytics2-users.component.ts");
/* harmony import */ var _according_to_old_ui_analytics2_sessions_analytics2_sessions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./according-to-old-ui/analytics2-sessions/analytics2-sessions.component */ "./src/app/core/analysis2/according-to-old-ui/analytics2-sessions/analytics2-sessions.component.ts");
/* harmony import */ var _according_to_old_ui_analysis2_messages_analysis2_messages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./according-to-old-ui/analysis2-messages/analysis2-messages.component */ "./src/app/core/analysis2/according-to-old-ui/analysis2-messages/analysis2-messages.component.ts");
/* harmony import */ var _according_to_old_ui_analysis2_platform_analysis2_platform_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./according-to-old-ui/analysis2-platform/analysis2-platform.component */ "./src/app/core/analysis2/according-to-old-ui/analysis2-platform/analysis2-platform.component.ts");
/* harmony import */ var _according_to_old_ui_analysis2_events_analysis2_events_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./according-to-old-ui/analysis2-events/analysis2-events.component */ "./src/app/core/analysis2/according-to-old-ui/analysis2-events/analysis2-events.component.ts");
/* harmony import */ var _according_to_old_ui_analysis2_usage_analysis2_usage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./according-to-old-ui/analysis2-usage/analysis2-usage.component */ "./src/app/core/analysis2/according-to-old-ui/analysis2-usage/analysis2-usage.component.ts");
/* harmony import */ var _according_to_old_ui_analysis2_engagement1_analysis2_engagement1_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./according-to-old-ui/analysis2-engagement1/analysis2-engagement1.component */ "./src/app/core/analysis2/according-to-old-ui/analysis2-engagement1/analysis2-engagement1.component.ts");
/* harmony import */ var _auth_gaurd_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../auth-gaurd.service */ "./src/app/auth-gaurd.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import {DragAndDropModule} from 'angular-draggable-droppable';
// import {NgxsModule} from '@ngxs/store';



















// import {AnalysisStateReducer2} from './ngxs/analysis.state';
var routes = [
    {
        path: '', component: _analysis2_wrapper_analysis2_wrapper_component__WEBPACK_IMPORTED_MODULE_9__["Analysis2WrapperComponent"], canActivateChild: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_23__["AuthGaurdService"]], children: [
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            // {path: 'overview', component: Analysis2OverviewComponent},
            { path: 'overview', component: _analysis2_overview_analysis2_overview_component__WEBPACK_IMPORTED_MODULE_12__["Analysis2OverviewComponent"] },
            { path: 'volume', component: _analysis2_volume_analysis2_volume_component__WEBPACK_IMPORTED_MODULE_10__["Analysis2VolumeComponent"] },
            { path: 'performance', component: _analysis2_performance_analysis2_performance_component__WEBPACK_IMPORTED_MODULE_11__["Analysis2PerformanceComponent"] },
            { path: 'engagement', component: _according_to_old_ui_analysis2_engagement1_analysis2_engagement1_component__WEBPACK_IMPORTED_MODULE_22__["Analysis2Engagement1Component"] },
            /*Analytics2: According to old UI*/
            { path: 'users', component: _according_to_old_ui_analytics2_users_analytics2_users_component__WEBPACK_IMPORTED_MODULE_16__["Analytics2UsersComponent"] },
            { path: 'sessions', component: _according_to_old_ui_analytics2_sessions_analytics2_sessions_component__WEBPACK_IMPORTED_MODULE_17__["Analytics2SessionsComponent"] },
            { path: 'messages', component: _according_to_old_ui_analysis2_messages_analysis2_messages_component__WEBPACK_IMPORTED_MODULE_18__["Analysis2MessagesComponent"] },
            { path: 'platform', component: _according_to_old_ui_analysis2_platform_analysis2_platform_component__WEBPACK_IMPORTED_MODULE_19__["Analysis2PlatformComponent"] },
            { path: 'events', component: _according_to_old_ui_analysis2_events_analysis2_events_component__WEBPACK_IMPORTED_MODULE_20__["Analysis2EventsComponent"] },
            { path: 'engagement', component: _analysis2_engagement_analysis2_engagement_component__WEBPACK_IMPORTED_MODULE_13__["Analysis2EngagementComponent"] },
            { path: 'usage', component: _according_to_old_ui_analysis2_usage_analysis2_usage_component__WEBPACK_IMPORTED_MODULE_21__["Analysis2UsageComponent"] },
        ]
    }
];
var Analysis2Module = /** @class */ (function () {
    function Analysis2Module() {
    }
    Analysis2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _analysis2_wrapper_analysis2_wrapper_component__WEBPACK_IMPORTED_MODULE_9__["Analysis2WrapperComponent"],
                _analysis2_header_analysis2_header_component__WEBPACK_IMPORTED_MODULE_14__["Analysis2HeaderComponent"],
                _analysis2_body_analysis2_body_component__WEBPACK_IMPORTED_MODULE_15__["Analysis2BodyComponent"],
                _analysis2_overview_analysis2_overview_component__WEBPACK_IMPORTED_MODULE_12__["Analysis2OverviewComponent"],
                _analysis2_volume_analysis2_volume_component__WEBPACK_IMPORTED_MODULE_10__["Analysis2VolumeComponent"],
                _analysis2_performance_analysis2_performance_component__WEBPACK_IMPORTED_MODULE_11__["Analysis2PerformanceComponent"],
                _analysis2_engagement_analysis2_engagement_component__WEBPACK_IMPORTED_MODULE_13__["Analysis2EngagementComponent"],
                _according_to_old_ui_analytics2_users_analytics2_users_component__WEBPACK_IMPORTED_MODULE_16__["Analytics2UsersComponent"],
                _according_to_old_ui_analytics2_sessions_analytics2_sessions_component__WEBPACK_IMPORTED_MODULE_17__["Analytics2SessionsComponent"],
                _according_to_old_ui_analysis2_messages_analysis2_messages_component__WEBPACK_IMPORTED_MODULE_18__["Analysis2MessagesComponent"],
                _according_to_old_ui_analysis2_platform_analysis2_platform_component__WEBPACK_IMPORTED_MODULE_19__["Analysis2PlatformComponent"],
                _according_to_old_ui_analysis2_events_analysis2_events_component__WEBPACK_IMPORTED_MODULE_20__["Analysis2EventsComponent"],
                _according_to_old_ui_analysis2_usage_analysis2_usage_component__WEBPACK_IMPORTED_MODULE_21__["Analysis2UsageComponent"],
                _according_to_old_ui_analysis2_engagement1_analysis2_engagement1_component__WEBPACK_IMPORTED_MODULE_22__["Analysis2Engagement1Component"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                // DragAndDropModule.forRoot(),
                // NgxsModule.forFeature([
                //   AnalysisStateReducer2
                // ]),
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                // Ng2SmartTableModule,
                // ModalModule.forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot()
            ],
            providers: [_drag_service__WEBPACK_IMPORTED_MODULE_6__["DragService"], _aim_service__WEBPACK_IMPORTED_MODULE_7__["AimService"]]
        })
    ], Analysis2Module);
    return Analysis2Module;
}());



/***/ }),

/***/ "./src/interfaces/Analytics2/analysis2-types.ts":
/*!******************************************************!*\
  !*** ./src/interfaces/Analytics2/analysis2-types.ts ***!
  \******************************************************/
/*! exports provided: EAnalysis2TypesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAnalysis2TypesEnum", function() { return EAnalysis2TypesEnum; });
var EAnalysis2TypesEnum;
(function (EAnalysis2TypesEnum) {
    EAnalysis2TypesEnum["averageRoomTime"] = "averageRoomTime";
    EAnalysis2TypesEnum["usagetracking"] = "usagetracking";
    EAnalysis2TypesEnum["medianConversationLengthOfRooms"] = "medianConversationLengthOfRooms";
    EAnalysis2TypesEnum["totalFlows"] = "totalFlows";
    EAnalysis2TypesEnum["flowsPerRoom"] = "flowsPerRoom";
    EAnalysis2TypesEnum["totalRooms"] = "totalRooms";
    EAnalysis2TypesEnum["totalSessions"] = "totalSessions";
    EAnalysis2TypesEnum["totalTimeOfRooms"] = "totalTimeOfRooms";
    EAnalysis2TypesEnum["overviewinfo"] = "overviewinfo";
    EAnalysis2TypesEnum["transactioninfo"] = "transactioninfo";
    EAnalysis2TypesEnum["userLoyalty"] = "userLoyalty";
    EAnalysis2TypesEnum["roomDuration"] = "roomDuration";
    EAnalysis2TypesEnum["topgenerationtemplates"] = "topgenerationtemplates";
    EAnalysis2TypesEnum["totalMessages"] = "totalMessages";
    EAnalysis2TypesEnum["userAcquisition"] = "userAcquisition";
    EAnalysis2TypesEnum["messagesByTemplateKey"] = "messagesByTemplateKey";
    EAnalysis2TypesEnum["channelWiseUsers"] = "channelWiseUsers";
    EAnalysis2TypesEnum["channelWiseAverageSessionTime"] = "channelWiseAverageSessionTime";
    EAnalysis2TypesEnum["channelWiseSessions"] = "channelWiseSessions";
    EAnalysis2TypesEnum["channelWiseFlowsPerSession"] = "channelWiseFlowsPerSession"; //done in volume-sessions
})(EAnalysis2TypesEnum || (EAnalysis2TypesEnum = {}));


/***/ })

}]);
//# sourceMappingURL=analysis2-analysis2-module.js.map