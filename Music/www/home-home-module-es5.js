(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  >\r\n    <ion-toolbar text-center >\r\n      <ion-buttons slot=\"start\">\r\n        <ion-avatar class=\"header-avatar\">\r\n          <img src=\"assets/img/user.jpg\" alt=\"User Image\" />\r\n        </ion-avatar>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title text-center>\r\n        <img src=\"assets/img/logo.png\" alt=\"Platzi Logo\" height=\"32px\" />\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content > \r\n\r\n<iframe src=\"https://open.spotify.com/embed/playlist/37i9dQZF1DX4oL1xd4OWmV\"  frameborder=\"0\"\r\nallowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 900px;\n  height: 1000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHVzdWFyaW9cXERvY3VtZW50c1xcVG9waWNvcyBFc3BlY2lhbGVzXFxwcm95ZWN0b1xcTXVzaWMvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG59XHJcbiIsImlmcmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogOTAwcHg7XG4gIGhlaWdodDogMTAwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var _songs_modal_songs_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../songs-modal/songs-modal.page */ "./src/app/songs-modal/songs-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var HomePage = /** @class */ (function () {
    function HomePage(musicService, modalController, loadingController) {
        this.musicService = musicService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.slideOpts = {
            initialSlide: 3,
            slidesPerView: 4,
            centeredSlides: true,
            speed: 400
        };
        this.newReleases = [];
        this.artists = [];
        this.favorites = [];
        this.song = {};
        this.newTime = 0;
        this.pausedTime = 0;
        this.playing = false;
        this.currentSong = {};
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.musicService.getNewReleases().then(function (newReleases) {
            _this.newReleases = _this.favorites = newReleases.albums.items;
        });
        this.artists = this.musicService.getArtists();
    };
    HomePage.prototype.play = function (song) {
        var _this = this;
        var previewUrl = song ? song.preview_url : this.currentSong.preview_url;
        this.song = new Audio(previewUrl);
        this.song.addEventListener("timeupdate", function () {
            _this.newTime = (_this.song.currentTime * (_this.song.duration / 10)) / 100;
        });
        this.song.play();
        this.song.currentTime = this.pausedTime;
        this.playing = true;
    };
    HomePage.prototype.pause = function () {
        if (this.song) {
            this.song.pause();
        }
        this.pausedTime = this.song.currentTime;
        this.playing = false;
    };
    HomePage.prototype.reset = function () {
        if (this.playing) {
            this.song.pause();
        }
        this.newTime = this.pausedTime = this.song.currentTime = 0;
        this.playing = false;
    };
    HomePage.prototype.markAsFavourite = function () {
        this.song.favourite = true;
        // Implement some backend logic here
    };
    HomePage.prototype.markAsNonFavourite = function () {
        this.song.favourite = false;
        // Implement some backend logic here
    };
    HomePage.prototype.parseTime = function (time) {
        if (time === void 0) { time = "0.00"; }
        if (time) {
            var partTime = parseInt(time.toString().split(".")[0], 10);
            var minutes = Math.floor(partTime / 60).toString();
            if (minutes.length == 1) {
                minutes = "0" + minutes;
            }
            var seconds = (partTime % 60).toString();
            if (seconds.length == 1) {
                seconds = "0" + seconds;
            }
            return minutes + ":" + seconds;
        }
    };
    HomePage.prototype.showSongs = function (artist) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, songs, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: "Cargando las canciones del artista"
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.musicService.getArtistTopTracks(artist.id)];
                    case 3:
                        songs = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _songs_modal_songs_modal_page__WEBPACK_IMPORTED_MODULE_3__["SongsModalPage"],
                                componentProps: {
                                    songs: songs.tracks,
                                    artist: artist.name
                                }
                            })];
                    case 4:
                        modal = _a.sent();
                        loading.dismiss();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                _this.dataReturned = dataReturned.data;
                                if (dataReturned) {
                                    //Play a la canción!
                                    _this.newTime = 0;
                                    _this.reset();
                                    _this.currentSong = _this.dataReturned;
                                    // delayIntencional
                                    setTimeout(function () {
                                        _this.play(_this.dataReturned);
                                    }, 200);
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map