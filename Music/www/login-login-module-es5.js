(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-footer padding>\r\n  <figure text-center>\r\n    <img src=\"assets/img/logo.png\" alt=\"Platzi Logo\" width=\"100px\" />\r\n  </figure>\r\n\r\n  <form\r\n    class=\"form\"\r\n    [formGroup]=\"validations_form\"\r\n    (ngSubmit)=\"loginUser(validations_form.value)\"\r\n  >\r\n    <ion-item color=\"dark\">\r\n      <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\r\n      <ion-icon name=\"mail-open\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n        <div\r\n          class=\"error-message\"\r\n          *ngIf=\"\r\n            validations_form.get('email').hasError(validation.type) &&\r\n            (validations_form.get('email').dirty ||\r\n              validations_form.get('email').touched)\r\n          \"\r\n        >\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-item color=\"dark\">\r\n      <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\r\n      <ion-icon name=\"lock\" slot=\"start\"></ion-icon>\r\n      <ion-input\r\n        type=\"password\"\r\n        formControlName=\"password\"\r\n        class=\"form-controll\"\r\n        required\r\n      ></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n        <div\r\n          class=\"error-message\"\r\n          *ngIf=\"\r\n            validations_form.get('password').hasError(validation.type) &&\r\n            (validations_form.get('password').dirty ||\r\n              validations_form.get('password').touched)\r\n          \"\r\n        >\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-button\r\n      color=\"success\"\r\n      shape=\"round\"\r\n      class=\"submit-btn button-block\"\r\n      type=\"submit\"\r\n      [disabled]=\"!validations_form.valid\"\r\n      >Log In</ion-button\r\n    >\r\n\r\n    <label class=\"error-message\">{{ errorMessage }}</label>\r\n  </form>\r\n</ion-footer>\r\n<ion-footer padding>\r\n  <ion-button\r\n    color=\"success\"\r\n    shape=\"round\"\r\n    fill=\"outline\"\r\n    class=\"button-block\"\r\n    type=\"submit\"\r\n    (click)=\"goToRegisterPage()\"\r\n    >Click para registrar</ion-button\r\n  >\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        // Rutas Hijas
        path: "",
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submit-btn {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\nion-footer {\n  height: 190px;\n}\n\nion-footer > ion-button {\n  vertical-align: middle;\n  margin: 36px 0 36px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFx1c3VhcmlvXFxEb2N1bWVudHNcXFRvcGljb3MgRXNwZWNpYWxlc1xccHJveWVjdG9cXE11c2ljL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0LWJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIGhlaWdodDogMTkwcHg7XHJcbn1cclxuaW9uLWZvb3RlciA+IGlvbi1idXR0b24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luOiAzNnB4IDAgMzZweCAwO1xyXG59XHJcbiIsIi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGhlaWdodDogMTkwcHg7XG59XG5cbmlvbi1mb290ZXIgPiBpb24tYnV0dG9uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAzNnB4IDAgMzZweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, formBuilder, storage) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.errorMessage = "";
        this.validation_messages = {
            email: [
                { type: "required", message: "El email es requerido." },
                { type: "pattern", message: "Por favor ingrese un email válido" }
            ],
            password: [
                { type: "required", message: "El password es requerido." },
                {
                    type: "minlength",
                    message: "El password debe tener al menos 5 caracteres"
                }
            ]
        };
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
    }
    LoginPage.prototype.loginUser = function (value) {
        var _this = this;
        this.authService
            .loginUser(value)
            .then(function (user) {
            if (user) {
                _this.errorMessage = "";
                _this.storage.set("isLogged", true);
                _this.storage.set("currentUser", user);
                _this.navCtrl.navigateForward("/menu/tabs/home");
            }
            else {
                _this.errorMessage = "Usuario no existe";
            }
        })
            .catch(function (error) {
            _this.errorMessage = error;
        });
    };
    LoginPage.prototype.goToRegisterPage = function () {
        this.navCtrl.navigateForward("/register");
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map