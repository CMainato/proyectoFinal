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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var _songs_modal_songs_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../songs-modal/songs-modal.page */ "./src/app/songs-modal/songs-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let HomePage = class HomePage {
    constructor(musicService, modalController, loadingController) {
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
    ionViewDidEnter() {
        this.musicService.getNewReleases().then(newReleases => {
            this.newReleases = this.favorites = newReleases.albums.items;
        });
        this.artists = this.musicService.getArtists();
    }
    play(song) {
        const previewUrl = song ? song.preview_url : this.currentSong.preview_url;
        this.song = new Audio(previewUrl);
        this.song.addEventListener("timeupdate", () => {
            this.newTime = (this.song.currentTime * (this.song.duration / 10)) / 100;
        });
        this.song.play();
        this.song.currentTime = this.pausedTime;
        this.playing = true;
    }
    pause() {
        if (this.song) {
            this.song.pause();
        }
        this.pausedTime = this.song.currentTime;
        this.playing = false;
    }
    reset() {
        if (this.playing) {
            this.song.pause();
        }
        this.newTime = this.pausedTime = this.song.currentTime = 0;
        this.playing = false;
    }
    markAsFavourite() {
        this.song.favourite = true;
        // Implement some backend logic here
    }
    markAsNonFavourite() {
        this.song.favourite = false;
        // Implement some backend logic here
    }
    parseTime(time = "0.00") {
        if (time) {
            const partTime = parseInt(time.toString().split(".")[0], 10);
            let minutes = Math.floor(partTime / 60).toString();
            if (minutes.length == 1) {
                minutes = "0" + minutes;
            }
            let seconds = (partTime % 60).toString();
            if (seconds.length == 1) {
                seconds = "0" + seconds;
            }
            return minutes + ":" + seconds;
        }
    }
    showSongs(artist) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: "Cargando las canciones del artista"
            });
            yield loading.present();
            const songs = yield this.musicService.getArtistTopTracks(artist.id);
            const modal = yield this.modalController.create({
                component: _songs_modal_songs_modal_page__WEBPACK_IMPORTED_MODULE_3__["SongsModalPage"],
                componentProps: {
                    songs: songs.tracks,
                    artist: artist.name
                }
            });
            loading.dismiss();
            modal.onDidDismiss().then(dataReturned => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    if (dataReturned) {
                        //Play a la canción!
                        this.newTime = 0;
                        this.reset();
                        this.currentSong = this.dataReturned;
                        // delayIntencional
                        setTimeout(() => {
                            this.play(this.dataReturned);
                        }, 200);
                    }
                }
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map