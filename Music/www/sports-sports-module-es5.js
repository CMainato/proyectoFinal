(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sports-sports-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sports/sports.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sports/sports.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\r\n  <ion-toolbar text-center >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-avatar class=\"header-avatar\">\r\n        <img src=\"assets/img/user.jpg\" alt=\"User Image\" />\r\n      </ion-avatar>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>\r\n      <img src=\"assets/img/logo.png\" alt=\"Platzi Logo\" height=\"32px\" />\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding color =\"black\">\r\n\r\n  \r\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255347.01839045493!2d-78.43053819999999!3d-0.18659435000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1600393729787!5m2!1ses!2sec\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\r\n  <ion-searchbar color =\"dark\"\r\n    [(ngModel)]=\"searchTerm\"\r\n    (ionChange)=\"setFilteredItems()\"\r\n  ></ion-searchbar>\r\n  <div *ngIf=\"searching\" class=\"spinner-container\" text-center>\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n  <ion-virtual-scroll [items]=\"items\" approxItemHeight=\"50px\">\r\n    <ion-item *virtualItem=\"let item\">\r\n      {{ item.name }}\r\n      <ion-icon\r\n        *ngIf=\"!item.playing\"\r\n        name=\"play\"\r\n        slot=\"end\"\r\n        (click)=\"play(item)\"\r\n      ></ion-icon>\r\n      <ion-icon\r\n        *ngIf=\"item.playing\"\r\n        name=\"pause\"\r\n        slot=\"end\"\r\n        (click)=\"pause(item)\"\r\n      ></ion-icon>\r\n      <ion-spinner *ngIf=\"item.playing\" name=\"dots\" slot=\"end\"></ion-spinner>\r\n    </ion-item>\r\n  </ion-virtual-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/sports/sports.module.ts":
/*!*****************************************!*\
  !*** ./src/app/sports/sports.module.ts ***!
  \*****************************************/
/*! exports provided: SportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPageModule", function() { return SportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sports.page */ "./src/app/sports/sports.page.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");








var routes = [
    {
        path: "",
        component: _sports_page__WEBPACK_IMPORTED_MODULE_6__["SportsPage"]
    }
];
var SportsPageModule = /** @class */ (function () {
    function SportsPageModule() {
    }
    SportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sports_page__WEBPACK_IMPORTED_MODULE_6__["SportsPage"]]
        })
    ], SportsPageModule);
    return SportsPageModule;
}());



/***/ }),

/***/ "./src/app/sports/sports.page.scss":
/*!*****************************************!*\
  !*** ./src/app/sports/sports.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzL0M6XFxVc2Vyc1xcdXN1YXJpb1xcRG9jdW1lbnRzXFxUb3BpY29zIEVzcGVjaWFsZXNcXHByb3llY3RvXFxNdXNpYy9zcmNcXGFwcFxcc3BvcnRzXFxzcG9ydHMucGFnZS5zY3NzIiwic3JjL2FwcC9zcG9ydHMvc3BvcnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Nwb3J0cy9zcG9ydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iLCJhZ20tbWFwIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sports/sports.page.ts":
/*!***************************************!*\
  !*** ./src/app/sports/sports.page.ts ***!
  \***************************************/
/*! exports provided: SportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPage", function() { return SportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");




var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Geolocation;
var SportsPage = /** @class */ (function () {
    function SportsPage(musicService) {
        this.musicService = musicService;
        this.coordinates = [];
        this.defaultZoom = 14;
        this.searchTerm = "";
        this.searching = false;
    }
    SportsPage.prototype.ionViewDidEnter = function () {
        this.getCurrentPosition();
        this.watchPosition();
    };
    SportsPage.prototype.getCurrentPosition = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coordinates;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Geolocation.getCurrentPosition()];
                    case 1:
                        coordinates = _a.sent();
                        this.currentCenter = {
                            lat: coordinates.coords.latitude,
                            lng: coordinates.coords.longitude
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    SportsPage.prototype.watchPosition = function () {
        var _this = this;
        Geolocation.watchPosition({}, function (position) {
            _this.currentCenter = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            _this.coordinates.push({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
    };
    SportsPage.prototype.setFilteredItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searching = true;
                        if (!this.searchTerm) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.musicService.searchTracks(this.searchTerm)];
                    case 1:
                        response = _a.sent();
                        this.items = response.tracks.items.filter(function (e) { return e.preview_url; });
                        return [3 /*break*/, 3];
                    case 2:
                        this.items = [];
                        _a.label = 3;
                    case 3:
                        this.searching = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SportsPage.prototype.play = function (song) {
        console.log(song);
        if (this.audioSong) {
            this.audioSong.pause();
        }
        var currentSong = this.items.filter(function (e) { return e.playing; });
        if (currentSong[0]) {
            currentSong[0].playing = false;
        }
        song.playing = true;
        this.audioSong = new Audio(song.preview_url);
        this.audioSong.play();
    };
    SportsPage.prototype.pause = function (song) {
        this.audioSong.pause();
        song.playing = false;
    };
    SportsPage.ctorParameters = function () { return [
        { type: _services_music_service__WEBPACK_IMPORTED_MODULE_3__["MusicService"] }
    ]; };
    SportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sports",
            template: __webpack_require__(/*! raw-loader!./sports.page.html */ "./node_modules/raw-loader/index.js!./src/app/sports/sports.page.html"),
            styles: [__webpack_require__(/*! ./sports.page.scss */ "./src/app/sports/sports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_music_service__WEBPACK_IMPORTED_MODULE_3__["MusicService"]])
    ], SportsPage);
    return SportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=sports-sports-module-es5.js.map