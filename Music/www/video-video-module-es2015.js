(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/video/video.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video/video.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\r\n  <ion-toolbar text-center >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-avatar class=\"header-avatar\">\r\n        <img src=\"assets/img/user.jpg\" alt=\"User Image\" />\r\n      </ion-avatar>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>\r\n      <img src=\"assets/img/logo.png\" alt=\"Platzi Logo\" height=\"32px\" />\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-buttons (click)=\"dismiss()\" float-right padding-top padding-end>\r\n    <ion-icon slot=\"icon-only\" name=\"close\" color=\"light\"></ion-icon>\r\n  </ion-buttons>\r\n\r\n  <ion-row class=\"ion-align-items-center rowSection\">\r\n    <iframe\r\n      [src]=\"sanitizer.bypassSecurityTrustResourceUrl(videourl)\"\r\n      allow=\"autoplay;\"\r\n      frameborder=\"0\"\r\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n      allowfullscreen\r\n    ></iframe>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/video/video.module.ts":
/*!***************************************!*\
  !*** ./src/app/video/video.module.ts ***!
  \***************************************/
/*! exports provided: VideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/video/video.page.ts");







const routes = [
    {
        path: '',
        component: _video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]
    }
];
let VideoPageModule = class VideoPageModule {
};
VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
    })
], VideoPageModule);



/***/ }),

/***/ "./src/app/video/video.page.scss":
/*!***************************************!*\
  !*** ./src/app/video/video.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #000;\n}\n\n.rowSection {\n  height: 88%;\n  width: 100%;\n}\n\n.rowSection iframe {\n  width: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  iframe {\n    height: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vQzpcXFVzZXJzXFx1c3VhcmlvXFxEb2N1bWVudHNcXFRvcGljb3MgRXNwZWNpYWxlc1xccHJveWVjdG9cXE11c2ljL3NyY1xcYXBwXFx2aWRlb1xcdmlkZW8ucGFnZS5zY3NzIiwic3JjL2FwcC92aWRlby92aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNFRjs7QURERTtFQUNFLFdBQUE7QUNHSjs7QURBQTtFQUNFO0lBQ0UsYUFBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWRlby92aWRlby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcbi5yb3dTZWN0aW9uIHtcclxuICBoZWlnaHQ6IDg4JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBpZnJhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaWZyYW1lIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4ucm93U2VjdGlvbiB7XG4gIGhlaWdodDogODglO1xuICB3aWR0aDogMTAwJTtcbn1cbi5yb3dTZWN0aW9uIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBpZnJhbWUge1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/video/video.page.ts":
/*!*************************************!*\
  !*** ./src/app/video/video.page.ts ***!
  \*************************************/
/*! exports provided: VideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPage", function() { return VideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let VideoPage = class VideoPage {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.videourl = "https://www.youtube.com/embed/UAlRf9qf9d0"; // The phantom agony!!!
    }
    dismiss() {
        //Implement you logic to dismiss here
    }
};
VideoPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
VideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-video",
        template: __webpack_require__(/*! raw-loader!./video.page.html */ "./node_modules/raw-loader/index.js!./src/app/video/video.page.html"),
        styles: [__webpack_require__(/*! ./video.page.scss */ "./src/app/video/video.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], VideoPage);



/***/ })

}]);
//# sourceMappingURL=video-video-module-es2015.js.map