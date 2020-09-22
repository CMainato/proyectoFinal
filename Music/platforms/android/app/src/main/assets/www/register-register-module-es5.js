(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header padding color=\"dark\">\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goToLoginPage()\">\r\n        <ion-icon name=\"md-arrow-back\" size=\"large\" color=\"success\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-footer padding>\r\n  <figure text-center>\r\n    <img src=\"assets/img/logo.png\" alt=\"Platzi Logo\" width=\"100px\" />\r\n  </figure>\r\n  <form\r\n    class=\"form\"\r\n    [formGroup]=\"validations_form\"\r\n    (ngSubmit)=\"tryRegister(validations_form.value)\"\r\n  >\r\n    <ion-item color=\"dark\">\r\n      <ion-label position=\"floating\" color=\"success\">Nombre</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"firstname\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.firstname\">\r\n        <div\r\n          class=\"error-message\"\r\n          *ngIf=\"\r\n            validations_form.get('firstname').hasError(validation.type) &&\r\n            (validations_form.get('firstname').dirty ||\r\n              validations_form.get('firstname').touched)\r\n          \"\r\n        >\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    <ion-item color=\"dark\">\r\n      <ion-label position=\"floating\" color=\"success\">Apellido</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.lastname\">\r\n        <div\r\n          class=\"error-message\"\r\n          *ngIf=\"\r\n            validations_form.get('lastname').hasError(validation.type) &&\r\n            (validations_form.get('lastname').dirty ||\r\n              validations_form.get('lastname').touched)\r\n          \"\r\n        >\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    <ion-item color=\"dark\">\r\n      <ion-label position=\"floating\" color=\"success\">Email</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n        <div\r\n          class=\"error-message\"\r\n          *ngIf=\"\r\n            validations_form.get('email').hasError(validation.type) &&\r\n            (validations_form.get('email').dirty ||\r\n              validations_form.get('email').touched)\r\n          \"\r\n        >\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-item color=\"dark\">\r\n      <ion-label position=\"floating\" color=\"success\">Contraseña</ion-label>\r\n      <ion-input\r\n        type=\"password\"\r\n        formControlName=\"password\"\r\n        class=\"form-controll\"\r\n        required\r\n      ></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n        <div\r\n          class=\"error-message\"\r\n          *ngIf=\"\r\n            validations_form.get('password').hasError(validation.type) &&\r\n            (validations_form.get('password').dirty ||\r\n              validations_form.get('password').touched)\r\n          \"\r\n        >\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-button\r\n      shape=\"round\"\r\n      class=\"submit-btn button-block\"\r\n      color=\"success\"\r\n      type=\"submit\"\r\n      [disabled]=\"!validations_form.valid\"\r\n      >Register</ion-button\r\n    >\r\n    <label class=\"error-message\">{{ errorMessage }}</label>\r\n    <label class=\"success-message\">{{ successMessage }}</label>\r\n  </form>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: "",
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background-image: none;\n}\n\n.submit-btn {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n.header-ios ion-toolbar {\n  --border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFx1c3VhcmlvXFxEb2N1bWVudHNcXFRvcGljb3MgRXNwZWNpYWxlc1xccHJveWVjdG9cXE11c2ljL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQ6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuLnN1Ym1pdC1idG4ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcbiIsIi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = "";
        this.successMessage = "";
        this.validation_messages = {
            email: [
                { type: "required", message: "El email es requerido" },
                { type: "pattern", message: "Ingresa un email válido." }
            ],
            password: [
                { type: "required", message: "La contraseña es obligatoria." },
                {
                    type: "minlength",
                    message: "La contraseña debe tener al menos 5 caracteres."
                }
            ],
            lastname: [
                { type: "required", message: "El apellido es requerido." },
                {
                    type: "minlength",
                    message: "El apellido debe tener mínimo tres letras."
                }
            ],
            firstname: [
                { type: "required", message: "El nombre es requerido." },
                {
                    type: "minlength",
                    message: "El nombre debe tener mínimo tres letras."
                }
            ]
        };
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
    }
    RegisterPage.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService
            .registerUser(value)
            .then(function (a) {
            console.log(a);
            _this.errorMessage = "";
            _this.successMessage = "Tu cuenta se ha creado con éxito.";
            setTimeout(function () {
                _this.navCtrl.navigateForward("/login");
            }, 1000);
        })
            .catch(function (error) {
            _this.errorMessage = error;
            _this.successMessage = "";
        });
    };
    RegisterPage.prototype.goToLoginPage = function () {
        this.navCtrl.navigateBack("/login");
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map