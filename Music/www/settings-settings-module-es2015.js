(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title></ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button icon-only (click)=\"goHome()\">\r\n        <ion-icon name=\"md-arrow-back\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content text-center>\r\n  <div *ngIf=\"user\" class=\"success-background\">\r\n    <ion-avatar (click)=\"takePicture()\">\r\n      <img [src]=\"userImage\" alt=\"User Image\" *ngIf=\"!photo\" />\r\n      <img [src]=\"photo\" alt=\"User Image\" *ngIf=\"photo\" />\r\n    </ion-avatar>\r\n    <h1 text-center>{{ user.firstname + \" \" + user.lastname }}</h1>\r\n    <h2 text-center>{{ user.email }}</h2>\r\n    <ion-grid>\r\n      <ion-row align-items-center text-center class=\"row-header\">\r\n        <ion-col>140</ion-col>\r\n        <ion-col>2k</ion-col>\r\n        <ion-col>500</ion-col>\r\n      </ion-row>\r\n      <ion-row align-items-center text-center>\r\n        <ion-col>Artistas</ion-col>\r\n        <ion-col>Seguidores</ion-col>\r\n        <ion-col>Canciones</ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <ion-list lines=\"none\" color=\"danger\">\r\n    <ion-item>\r\n      Cuenta\r\n    </ion-item>\r\n    <ion-item>Favoritos</ion-item>\r\n    <ion-item>Playlists</ion-item>\r\n    <ion-item>Deportes</ion-item>\r\n    <ion-item>Localidades</ion-item>\r\n    <ion-item>Tracking</ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-ios ion-toolbar {\n  --border-width: 0;\n}\n\nion-avatar {\n  text-align: center;\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n}\n\nh1 {\n  margin-bottom: 0;\n}\n\nh2 {\n  margin-top: 0;\n  font-size: 16px;\n  margin-bottom: 32px;\n}\n\n.row-header {\n  font-size: 32px;\n  font-weight: bold;\n}\n\n.success-background {\n  background-color: var(--ion-color-dark);\n  color: var(--ion-color-light);\n  padding-bottom: 32px;\n}\n\nion-list {\n  margin-top: 32px;\n}\n\nion-item {\n  --color: var(--ion-color-primary);\n  padding: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvQzpcXFVzZXJzXFx1c3VhcmlvXFxEb2N1bWVudHNcXFRvcGljb3MgRXNwZWNpYWxlc1xccHJveWVjdG9cXE11c2ljL3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QURGQTtFQUNFLHVDQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQ0tGOztBREhBO0VBQ0UsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcblxyXG5pb24tYXZhdGFyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuaDEge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuLnJvdy1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc3VjY2Vzcy1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxufSIsIi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi1hdmF0YXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaDIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi5yb3ctaGVhZGVyIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1Y2Nlc3MtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAwLjVlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let SettingsPage = class SettingsPage {
    constructor(storage, navCtrl, sanitizer) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.userImage = "assets/img/user.jpg";
    }
    ionViewWillEnter() {
        this.storage.get("currentUser").then(value => {
            this.user = value;
        });
    }
    goHome() {
        this.navCtrl.navigateBack("/menu/tabs/home");
    }
    takePicture() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const image = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraResultType"].DataUrl,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Camera
            });
            this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.dataUrl);
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-settings",
        template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
        styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map