(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["library-library-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/library/library.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/library/library.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar text-center >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-avatar class=\"header-avatar\">\r\n        <img src=\"assets/img/user.jpg\" alt=\"User Image\" />\r\n      </ion-avatar>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>\r\n      <img src=\"assets/img/logo.png\" alt=\"Platzi Logo\" height=\"32px\" />\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding color =\"black\"> \r\n\r\n<iframe src=\"https://open.spotify.com/embed/playlist/37i9dQZF1DX4oL1xd4OWmV\" width=\"330\" height=\"320\" frameborder=\"0\"\r\nallowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n<iframe src=\"https://open.spotify.com/embed/playlist/37i9dQZF1DX4pUKG1kS0Ac\" width=\"330\" height=\"320\" frameborder=\"0\"\r\nallowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n<iframe src=\"https://open.spotify.com/embed/playlist/37i9dQZF1DX4o1oenSJRJd\" width=\"330\" height=\"320\" frameborder=\"0\"\r\nallowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/library/library.module.ts":
/*!*******************************************!*\
  !*** ./src/app/library/library.module.ts ***!
  \*******************************************/
/*! exports provided: LibraryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryPageModule", function() { return LibraryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _library_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./library.page */ "./src/app/library/library.page.ts");







const routes = [
    {
        path: '',
        component: _library_page__WEBPACK_IMPORTED_MODULE_6__["LibraryPage"]
    }
];
let LibraryPageModule = class LibraryPageModule {
};
LibraryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_library_page__WEBPACK_IMPORTED_MODULE_6__["LibraryPage"]]
    })
], LibraryPageModule);



/***/ }),

/***/ "./src/app/library/library.page.scss":
/*!*******************************************!*\
  !*** ./src/app/library/library.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 800px;\n  height: 400px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9DOlxcVXNlcnNcXHVzdWFyaW9cXERvY3VtZW50c1xcVG9waWNvcyBFc3BlY2lhbGVzXFxwcm95ZWN0b1xcTXVzaWMvc3JjXFxhcHBcXGxpYnJhcnlcXGxpYnJhcnkucGFnZS5zY3NzIiwic3JjL2FwcC9saWJyYXJ5L2xpYnJhcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L2xpYnJhcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1le1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gICIsImlmcmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/library/library.page.ts":
/*!*****************************************!*\
  !*** ./src/app/library/library.page.ts ***!
  \*****************************************/
/*! exports provided: LibraryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryPage", function() { return LibraryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LibraryPage = class LibraryPage {
    constructor() { }
    ngOnInit() {
    }
};
LibraryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-library',
        template: __webpack_require__(/*! raw-loader!./library.page.html */ "./node_modules/raw-loader/index.js!./src/app/library/library.page.html"),
        styles: [__webpack_require__(/*! ./library.page.scss */ "./src/app/library/library.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LibraryPage);



/***/ })

}]);
//# sourceMappingURL=library-library-module-es2015.js.map