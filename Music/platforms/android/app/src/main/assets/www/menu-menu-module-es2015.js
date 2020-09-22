(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane >\r\n  <ion-menu contentId=\"content\" side=\"end\">\r\n    <ion-header mode=\"md\">\r\n      <ion-toolbar color=\"danger\">\r\n        <ion-title>Menu</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button icon-only (click)=\"closeMenu()\">\r\n            <ion-icon name=\"md-arrow-back\" size=\"large\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content padding color=\"dark\">\r\n      <ion-list color=\"dark\" lines=\"none\">\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\r\n          <ion-item\r\n            [routerLink]=\"p.url\"\r\n            routerDirection=\"root\"\r\n            [class.active-item]=\"selectedPath.startsWith(p.url)\"\r\n            color=\"dark\"\r\n            lines=\"none\"\r\n          >\r\n            <ion-label>\r\n              {{ p.title }}\r\n            </ion-label>\r\n            <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-item tappable color=\"dark\" lines=\"none\" (click)=\"logout()\">\r\n          <ion-icon name=\"log-out\" color=\"dark\" slot=\"start\"></ion-icon>\r\n          Salir\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\r\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");







const routes = [
    {
        path: "",
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            {
                path: "tabs",
                loadChildren: "../tabs/tabs.module#TabsPageModule"
            },
            {
                path: "settings",
                loadChildren: "../settings/settings.module#SettingsPageModule"
            }
        ]
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background-image: none;\n}\n\nion-toolbar,\nion-header,\nion-title,\nion-buttons {\n  height: 80px;\n}\n\n.header-ios ion-toolbar {\n  --border-width: 0;\n}\n\nion-list {\n  background-color: var(--ion-color-dark);\n}\n\nion-item {\n  height: 60px;\n}\n\n.title-ios {\n  padding-left: 20px;\n  text-align: left;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXHVzdWFyaW9cXERvY3VtZW50c1xcVG9waWNvcyBFc3BlY2lhbGVzXFxwcm95ZWN0b1xcTXVzaWMvc3JjXFxhcHBcXG1lbnVcXG1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURDQTs7OztFQUlFLFlBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx1Q0FBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcbmlvbi10b29sYmFyLFxyXG5pb24taGVhZGVyLFxyXG5pb24tdGl0bGUsXHJcbmlvbi1idXR0b25zIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcclxuICAtLWJvcmRlci13aWR0aDogMDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4udGl0bGUtaW9zIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn0iLCIuaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIsXG5pb24taGVhZGVyLFxuaW9uLXRpdGxlLFxuaW9uLWJ1dHRvbnMge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG5pb24taXRlbSB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnRpdGxlLWlvcyB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let MenuPage = class MenuPage {
    constructor(router, storage, navCtrl, menu) {
        this.router = router;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.pages = [
            {
                title: "Configuraciones",
                url: "/menu/settings",
                icon: "settings"
            }
        ];
        this.selectedPath = "";
    }
    closeMenu() {
        this.menu.close();
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.set("isLogged", false);
            this.storage.remove("currentUser");
            this.navCtrl.navigateRoot("login");
        });
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-menu",
        template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html"),
        styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map