(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth-wrapper.component.html":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-wrapper.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth-wrapper.component.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-wrapper.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth-wrapper.component.ts":
/*!************************************************!*\
  !*** ./src/app/auth/auth-wrapper.component.ts ***!
  \************************************************/
/*! exports provided: AuthWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthWrapperComponent", function() { return AuthWrapperComponent; });
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

var AuthWrapperComponent = /** @class */ (function () {
    function AuthWrapperComponent() {
    }
    AuthWrapperComponent.prototype.ngOnInit = function () {
    };
    AuthWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-wrapper',
            template: __webpack_require__(/*! ./auth-wrapper.component.html */ "./src/app/auth/auth-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./auth-wrapper.component.scss */ "./src/app/auth/auth-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthWrapperComponent);
    return AuthWrapperComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-wrapper.component */ "./src/app/auth/auth-wrapper.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_gaurd_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login-gaurd.service */ "./src/app/login-gaurd.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], canActivate: [_login_gaurd_service__WEBPACK_IMPORTED_MODULE_7__["LoginGaurdService"]] },
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
                _auth_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["AuthWrapperComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                // NgxsModule.forFeature([
                //   AuthStateReducer,
                // ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ],
            providers: [_login_gaurd_service__WEBPACK_IMPORTED_MODULE_7__["LoginGaurdService"]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container-fluid bg-white\">\r\n  <!--<router-outlet></router-outlet>-->\r\n  <img src=\"https://imibot.ai/assets/img/login_page.png\" class=\"fixed-top sticky-logo\" alt=\"\">\r\n  <div class=\"container\">\r\n    <div class=\"row login-row string p-0 m-0 bg-white\">\r\n\r\n      <div class=\"col-5 col-lg-5 col-xl-5 imi-logo-box d-flex flex-column align-items-center\">\r\n        <div class=\"mt-auto\">\r\n          <img class=\"imi-logo\" src=\"https://imibot.ai/assets/img/IMI_logo.png\" alt=\"\">\r\n        </div>\r\n        <p class=\"mb-auto tagline\">The bot building platform for your enterprise</p>\r\n      </div>\r\n      <div *ngIf=\"panelActive==='login'\" class=\"col-5 col-lg-5 col-xl-5  login-form-box\">\r\n        <div class=\"col-12 string d-flex justify-content-center align-items-center\">\r\n          <p  class=\"title pb-4\">Sign in</p>\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-center align-items-center\">\r\n          <form class=\"login-form\" (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" required email class=\"form-control\" ngModel name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"password\" class=\"form-control\" name=\"password\" ngModel required placeholder=\"Enter Password\">\r\n            </div>\r\n            <div class=\"d-flex justify-content-between\">\r\n              <!--<label for=\"\"><input type=\"checkbox2\"> Remember Me</label>-->\r\n              <label class=\"container-chekbox text-dark\">Remember me\r\n                <input type=\"checkbox\" checked=\"checked\">\r\n                <span class=\"checkmark\"></span>\r\n              </label>\r\n              <div hidden class=\"cursor-pointer\" (click)=\"showPanel('forgot')\">Forgot Password?</div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn-block  mt-3 mb-2\" [disabled]=\"disabeLoginButton\" [ngClass]=\"{'btn-theme-primary':!disabeLoginButton, 'btn-theme-disabled':disabeLoginButton}\" >Submit</button>\r\n            <i  class=\"text-danger my-2\" style=\"height: 15px\" [ngClass]=\"{'visible':errorMessage}\">{{errorMessage}}</i>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"panelActive==='reset-via-email'\" class=\"col-5 col-lg-5 col-xl-5  login-form-box\">\r\n        <div class=\"col-12 string d-flex justify-content-center align-items-center\">\r\n          <p  class=\"title pb-4\">Forgot Password?</p>\r\n        </div>\r\n        <div class=\"col-12 mb-3 text-theme-normal text-center\" style=\"color: #9e9e9e\">\r\n          Enter your email address below and we’ll send you a\r\n          link to create a new password.\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-center align-items-center\">\r\n          <form class=\"login-form \" (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" required email class=\"form-control\" ngModel name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn-block btn-theme-primary my-3\">Request Reset Link</button>\r\n            <div class=\"text-center cursor-pointer\" (click)=\"panelActive='login'\">back to sign in</div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"panelActive==='reset-password'\" class=\"col-5 col-lg-5 col-xl-5  login-form-box\">\r\n        <div class=\"col-12 string d-flex justify-content-center align-items-center\">\r\n          <p  class=\"title pb-4\">Reset Password?</p>\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-center align-items-center\">\r\n          <form class=\"login-form \" (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <input type=\"password\" required password class=\"form-control\" ngModel name=\"password\" aria-describedby=\"passwordHelp\" placeholder=\"Enter password\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"password\" required password class=\"form-control\" ngModel name=\"confirm\" aria-describedby=\"passwordHelp\" placeholder=\"Confirm password\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn-block btn-theme-primary my-3\">Reset</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"panelActive==='email-reset-link-notify'\" class=\"col-5 forgot-password-container d-flex flex-column align-items-center\">\r\n        <div class=\"checkmark border-circle\">\r\n          <i class=\"fa fa-check\"></i>\r\n        </div>\r\n        <div class=\"hero-text\">Password Reset Email Sent</div>\r\n        <div class=\"text-center\" style=\"width: 70%\">\r\n          An email has been sent to your email address,\r\n          <strong>xxxx.x@imimobile.com</strong> . Follow directions\r\n          to reset your password.\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"panelActive==='password-reset-notify'\" class=\"col-5 forgot-password-container d-flex flex-column align-items-center\">\r\n        <div class=\"checkmark border-circle\">\r\n          <i class=\"fa fa-check\"></i>\r\n        </div>\r\n        <div class=\"hero-text\">Password Updated Successfully</div>\r\n        <div class=\"text-center\" style=\"width: 70%\">\r\n          Your password has been saved. Please use your\r\n          new password to sign in\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-row {\n  height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .login-row .imi-logo-box {\n    height: 70vh;\n    border-right: 2px solid #e0e0e0; }\n  .login-row .imi-logo-box .imi-logo {\n      height: 70px;\n      width: 241px;\n      margin-bottom: 20px; }\n  .login-row .imi-logo-box .tagline {\n      font-size: 20px;\n      line-height: 22px;\n      font-weight: 300;\n      color: #56627c;\n      font-family: \"Helvetica\", sans-serif; }\n  .login-row .login-form {\n    width: 80%;\n    font-size: 13px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #9e9e9e;\n    font-family: \"Helvetica\", sans-serif; }\n  .login-row .title {\n    font-size: 24px;\n    line-height: 13px;\n    font-weight: 300;\n    color: #00abd3;\n    font-family: \"Helvetica\", sans-serif;\n    text-align: center; }\n  .login-row .form-control {\n    border: none;\n    border-color: inherit;\n    box-shadow: none;\n    outline: none;\n    border-bottom: 1px solid #e0e0e0;\n    border-radius: 0; }\n  .login-row .btn-theme-primary {\n    height: 34px !important;\n    font-size: 14px;\n    background-color: #00abd3 !important; }\n  .hero-text {\n  font-size: 24px;\n  line-height: 16px;\n  font-weight: 300;\n  color: #00abd3;\n  font-family: \"Helvetica\", sans-serif;\n  margin-bottom: 8px; }\n  .forgot-password-container {\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: 300;\n  color: #9e9e9e;\n  font-family: \"Helvetica\", sans-serif; }\n  .forgot-password-container strong {\n    font-weight: 700;\n    color: #4a4a4a; }\n  .forgot-password-container .checkmark {\n    width: 48px;\n    height: 48px;\n    display: flex;\n    border-radius: 50%;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #c9e16a;\n    margin-bottom: 27px; }\n  .forgot-password-container .checkmark .fa {\n      color: #9dc406;\n      font-size: 20px; }\n  .disabled-button {\n  opacity: 0.5;\n  background-color: #9e9e9e !important; }\n  .container-fluid {\n  height: 100vh; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants.service */ "./src/app/constants.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngxs/auth.action */ "./src/app/auth/ngxs/auth.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility.service */ "./src/app/utility.service.ts");
/* harmony import */ var _core_enterpriseprofile_ngxs_enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/enterpriseprofile/ngxs/enterpriseprofile.action */ "./src/app/core/enterpriseprofile/ngxs/enterpriseprofile.action.ts");
/* harmony import */ var _ngxs_app_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ngxs/app.action */ "./src/app/ngxs/app.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(serverService, constantsService, router, utilityService, store) {
        this.serverService = serverService;
        this.constantsService = constantsService;
        this.router = router;
        this.utilityService = utilityService;
        this.store = store;
        this.panelActive = 'login';
        this.errorMessage = '';
        this.disabeLoginButton = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.store.dispatch()
        this.serverService.makeGetReq({ url: '/static/config.json', noValidateUser: true })
            .subscribe((function (value) {
            // {"backend_url":"https://dev.imibot.ai/","version":"1.0.0"}
            _this.store.dispatch([
                new _ngxs_app_action__WEBPACK_IMPORTED_MODULE_8__["SetBackendURlRoot"]({ url: value.backend_url })
            ]);
        }));
    };
    LoginComponent.prototype.flashErrorMessage = function (message, time_ms) {
        var _this = this;
        if (time_ms === void 0) { time_ms = 3000; }
        this.errorMessage = message;
        setTimeout(function () {
            _this.errorMessage = '';
        }, time_ms);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var loginData = this.f.value;
        var loginUrl = this.constantsService.getLoginUrl();
        // let headerData:IHeaderData = {'api-key': '54asdkj1209nksnda',"content-type":'application/x-www-f-urlencoded'};
        // let body = {
        //
        //   // "email":"ayeshreddy.k@imimobile.com",
        //   // "password":"Botwoman@123!"
        //   "email": "imibotadmin@imimobile.com",
        //   "password": "Botwoman@123!"
        // };
        var body;
        if (this.f.valid) {
            body = this.f.value;
        }
        else {
            this.flashErrorMessage("Details not valid");
            return;
        }
        this.flashErrorMessage("Reaching out to the server", 100000);
        var headerData = {
            "auth-token": null,
            'user-access-token': null
        };
        this.serverService.makePostReq({ url: loginUrl, body: body, headerData: headerData })
            .subscribe(function (user) {
            _this.disabeLoginButton = true;
            _this.flashErrorMessage("Logged in. Taking you to home page", 100000);
            // this.constantsService.setPermissionsDeniedMap(user.role.permissions.actions);
            _this.store.dispatch([
                new _ngxs_auth_action__WEBPACK_IMPORTED_MODULE_4__["SetUserAction"]({ user: user }),
            ]).subscribe(function () {
                _this.serverService.getNSetBotList()
                    .subscribe(function () {
                    "bot list fetched from login page";
                });
                _this.serverService.getNSetIntegrationList();
                if (user.role.name === _constants_service__WEBPACK_IMPORTED_MODULE_2__["ERoleName"].Analyst) {
                    _this.router.navigate(['/core/analytics2/users']);
                }
                else {
                    _this.router.navigate(['.']);
                }
            });
            var enterpriseProfileUrl = _this.constantsService.getEnterpriseUrl(user.enterprise_id);
            _this.serverService.makeGetReq({ url: enterpriseProfileUrl })
                .subscribe(function (value) {
                _this.store.dispatch([
                    new _core_enterpriseprofile_ngxs_enterpriseprofile_action__WEBPACK_IMPORTED_MODULE_7__["SetEnterpriseInfoAction"]({ enterpriseInfo: value })
                ]);
            });
        }, function () {
            _this.flashErrorMessage("Login failed. Please try again", 100000);
        });
    };
    LoginComponent.prototype.showPanel = function (panel) {
        this.panelActive = panel;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('heroForm'),
        __metadata("design:type", HTMLFormElement)
    ], LoginComponent.prototype, "f", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"],
            _constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());

;


/***/ }),

/***/ "./src/app/login-gaurd.service.ts":
/*!****************************************!*\
  !*** ./src/app/login-gaurd.service.ts ***!
  \****************************************/
/*! exports provided: LoginGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGaurdService", function() { return LoginGaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginGaurdService = /** @class */ (function () {
    function LoginGaurdService(router) {
        this.router = router;
    }
    LoginGaurdService.prototype.canActivate = function () {
        var _this = this;
        return this.loggeduser$.map(function (value) {
            if (value.user == null) {
                return true;
            }
            else {
                _this.router.navigate(['.']);
                return false;
            }
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], LoginGaurdService.prototype, "loggeduser$", void 0);
    LoginGaurdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGaurdService);
    return LoginGaurdService;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map