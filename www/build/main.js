webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdf_storage_pdf_storage__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
var HomePage = /** @class */ (function () {
    function HomePage(pdfProvider, plt, loadingCtrl, userProvider, menu, modalCtrl, navCtrl) {
        this.pdfProvider = pdfProvider;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.isSearch = false;
        this.isNotFound = false;
        this.flagSearch = false;
        this.items = [];
        this.outBtnKG = false;
        this.colorBtnKG = true;
        this.colorBtnLB = false;
        this.outBtnLB = true;
        this.loader = this.loadingMensaje("");
        this.loader.present();
        this.showMenu();
        this.loader.dismiss();
    }
    HomePage.prototype.changeWeight = function (num, event, fab) {
        // presiono btnOutLB
        if (num == 1) {
            this.colorBtnKG = true;
            this.outBtnKG = false;
            this.colorBtnLB = false;
            this.outBtnLB = true;
            this.getSearch();
            fab.close();
        }
        else if (num == 2) {
            this.colorBtnKG = false;
            this.outBtnKG = true;
            this.colorBtnLB = true;
            this.outBtnLB = false;
            this.getSearch();
            fab.close();
        }
        fab.close();
    };
    HomePage.prototype.ionViewWillUnload = function () {
        this.userProvider.clearUserSearch();
    };
    HomePage.prototype.openModalSearch = function () {
        var _this = this;
        setTimeout(function () {
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
            modal.present();
            modal.onDidDismiss(function () {
                _this.loader = _this.loadingMensaje("Buscando..");
                _this.flagSearch = _this.userProvider.getFlagEmptySearch();
                console.log(_this.flagSearch);
                if (_this.flagSearch) {
                    _this.isSearch = false;
                }
                else {
                    _this.loader.present();
                    _this.searchResult = _this.userProvider.getWeighing();
                    if (_this.searchResult) {
                        _this.isSearch = true;
                        _this.isNotFound = false;
                    }
                    if (_this.isEmptyObject(_this.searchResult)) {
                        console.log();
                        _this.isNotFound = true;
                        _this.isSearch = false;
                    }
                    _this.loader.dismiss();
                }
            });
        }, 500);
    };
    HomePage.prototype.getSearch = function () {
        this.searchResult = this.userProvider.getWeighing();
    };
    HomePage.prototype.showMenu = function () {
        this.menu.enable(true);
    };
    HomePage.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    HomePage.prototype.loadingMensaje = function (message) {
        return this.loadingCtrl.create({
            content: message,
        });
    };
    HomePage.prototype.downloadPdf = function (fab) {
        this.loader = this.loadingMensaje('Construyendo Pdf...');
        this.pdfProvider.setInstacePdf(this.userProvider.getUser());
        if (this.plt.is('cordova')) {
            //abre dependiendo del dispositivo
            this.pdfProvider.opened();
        }
        else {
            this.pdfProvider.download(this.searchResult);
            //this.pdfObj.download();
            fab.close();
            this.loader.dismiss();
        }
    };
    HomePage.prototype.closeFab = function (event, fab) {
        fab.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], HomePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fab'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* FabContainer */])
    ], HomePage.prototype, "fab", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/bakke/Documents/Git/app_banxass_ionic/src/pages/home/home.html"*/'<ion-header no-border>\n  <ion-navbar color="agrosoft_blue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title center>Agrosoft</ion-title>\n    <ion-buttons end>\n      <button (click)="openModalSearch()" ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding #content >\n  <div (pan)="closeFab($event, fab)" class="scroll-search-result" *ngIf="isSearch" text-center>\n    <ion-list id="title-header-list" *ngIf="colorBtnKG" no-lines >\n      <ion-item-divider class="header" ion-affix [content]="content">\n        Empacadora 1\n      </ion-item-divider>\n      <ion-item *ngFor="let item of searchResult">\n        <ion-icon ios="ios-pricetag" md="md-pricetag" item-start></ion-icon>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <h2>Peso: {{ item.WEIGHT }} [Kg]</h2>\n              <h3>\n                Etiqueta: {{ item.CODE_TAG }}\n              </h3>\n            </ion-col>\n            <ion-col>\n              <ion-note  item-end>\n                {{ item.REGISTER_DATE | amDateFormat: \'YYYY-MM-DD\'}}\n              </ion-note>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    <ion-list id="title-header-list" *ngIf="colorBtnKG" no-lines >\n      <ion-item-divider ion-affix [content]="content">\n        Empacadora 2\n      </ion-item-divider>\n      <ion-item *ngFor="let item of searchResult">\n        <ion-icon ios="ios-pricetag" md="md-pricetag" item-start></ion-icon>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <h2>Peso: {{ item.WEIGHT}} [Kg]</h2>\n              <h3>\n                Etiqueta: {{ item.CODE_TAG }}\n              </h3>\n            </ion-col>\n            <ion-col>\n              <ion-note  item-end>\n                {{ item.REGISTER_DATE | amDateFormat: \'YYYY-MM-DD\'}}\n              </ion-note>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    \n    <ion-list id="title-header-list" *ngIf="colorBtnLB" no-lines >\n      <ion-item-divider ion-affix [content]="content">\n        Empacadora 1\n      </ion-item-divider>\n      <ion-item *ngFor="let item of searchResult">\n        <ion-icon ios="ios-pricetag" md="md-pricetag" item-start></ion-icon>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <h2>Peso: {{ item.WEIGHT*2.2  | number : \'1.2-2\'  }} [Lb]</h2>\n              <h3>\n                Etiqueta: {{ item.CODE_TAG }}\n              </h3>\n            </ion-col>\n            <ion-col>\n              <ion-note  item-end>\n                {{ item.REGISTER_DATE | amDateFormat: \'YYYY-MM-DD\'}}\n              </ion-note>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    <ion-list id="title-header-list" *ngIf="colorBtnLB" no-lines >\n      <ion-item-divider ion-affix [content]="content">\n        Empacadora 2\n      </ion-item-divider>\n      <ion-item *ngFor="let item of searchResult">\n        <ion-icon ios="ios-pricetag" md="md-pricetag" item-start></ion-icon>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <h2>Peso: {{ item.WEIGHT*2.2  | number : \'1.2-2\'  }} [Lb]</h2>\n              <h3>\n                Etiqueta: {{ item.CODE_TAG }}\n              </h3>\n            </ion-col>\n            <ion-col>\n              <ion-note  item-end>\n                {{ item.REGISTER_DATE | amDateFormat: \'YYYY-MM-DD\'}}\n              </ion-note>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-fab [hideFabOnscroll]=\'content\' *ngIf="isSearch" #fab right bottom>\n    <button ion-fab color="agrosoft_blue">\n      <ion-icon ios="ios-cog" md="md-cog"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button (click)="changeWeight(1,$event, fab)" *ngIf="outBtnKG" ion-fab >Kg</button>\n      <button (click)="changeWeight(1,$event, fab)" *ngIf="colorBtnKG" color="agrosoft_blue" ion-fab>Kg</button>\n      <button (click)="changeWeight(2,$event, fab)" *ngIf="colorBtnLB" color="agrosoft_blue" ion-fab>Lb</button>\n      <button (click)="changeWeight(2,$event, fab)" *ngIf="outBtnLB" ion-fab>Lb</button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button (click)="downloadPdf(fab)" ion-fab>\n        <ion-icon ios="ios-document" md="md-document"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n  \n  <div *ngIf="!isSearch && !isNotFound" id="search">\n    <button (click)="openModalSearch()" clear scolor="light" ion-button> \n      <div class="center-big-icon">\n        <ion-icon  class="search-result-icon" ios="ios-search" md="md-search"></ion-icon>\n        <div class="text-icon">\n          <span class="search-text">\n            No hay datos aún<br>\n            ¡Toca para Consultar un Pesaje!\n          </span>\n        </div>\n      </div>\n    </button>\n  </div>\n\n  <div *ngIf="isNotFound" id="search">\n    <button  (click)="openModalSearch()" clear scolor="light" ion-button> \n      <div class="center-big-icon">\n        <ion-icon class="search-result-icon" ios="ios-close-circle" md="md-close-circle"></ion-icon>\n        <div class="text-icon">\n          <span class="search-text">\n            No se han encontrado datos<br>\n            ¡Vuelva a intentar con otra fecha!\n          </span>\n        </div>\n      </div>      \n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/bakke/Documents/Git/app_banxass_ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_pdf_storage_pdf_storage__["a" /* PdfStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(userProvider, gv, http) {
        this.userProvider = userProvider;
        this.gv = gv;
        this.http = http;
        this.user = {
            CLIENT: "",
            USER: ""
        };
        this.loggedIn = false;
        console.log('Hello AuthProvider Provider');
        this.reqOpts = this._initializeReqOpts(this.reqOpts);
        this.reqOpts = this._addStandardHeaders(this.reqOpts.headers);
    }
    AuthProvider.prototype._addStandardHeaders = function (header) {
        header = header.append('Content-Type', 'application/json');
        header = header.append('Accept', 'application/json');
        return header;
    };
    AuthProvider.prototype._initializeReqOpts = function (reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        return reqOpts;
    };
    AuthProvider.prototype.loginUser = function (formLogin) {
        var _this = this;
        return this.http.post("" + this.gv.getApiLogin() + "", formLogin.value, this.reqOpts)
            .map(function (data) {
            if (data['logIn']) {
                _this.loggedIn = false;
                return _this.loggedIn;
            }
            _this.userProvider.saveDataDevice(data);
            _this.loggedIn = true;
            return _this.loggedIn;
        }, function (error) {
            console.log(error);
            _this.loggedIn = false;
            return _this.loggedIn;
        });
    };
    AuthProvider.prototype.logOut = function () {
        var _this = this;
        this.user.CLIENT = this.userProvider.getClient();
        this.user.USER = this.userProvider.getUser();
        return this.http.post("" + this.gv.getApiLogOut() + "", this.user, this.reqOpts)
            .map(function (data) {
            _this.userProvider.removeDataDevice();
            _this.loggedIn = false;
            //console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, menu, authProvider, loadingCtrl, navCtrl, loginBuilder) {
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.loginBuilder = loginBuilder;
        this.hideMenu();
        this.createFormLogin();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.createFormLogin = function () {
        this.formLogin = this.loginBuilder.group({
            CLIENT: ['bakke', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            USER: ['bakamedi', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            PASSWORD: ['123456', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loader = this.loadingMensaje('Iniciando Sesion Espere...');
        this.loader.present();
        this.authProvider.loginUser(this.formLogin).subscribe(function (logged) {
            if (logged) {
                setTimeout(function () {
                    _this.loader.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {}, { animate: true }); // GO TO HOME PAGE
                }, 2000);
            }
            else {
                _this.loader.dismiss();
                _this.alert("Este usuario ya esta Logeado en otro dispositivo");
            }
        }, function (error) {
            _this.loader.dismiss();
            _this.alert("Usuario o Contraseña invalida");
            console.log(error);
        });
    };
    LoginPage.prototype.hideMenu = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.alert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            message: message,
            buttons: ['ok']
        });
        alert.present();
    };
    LoginPage.prototype.loadingMensaje = function (message) {
        return this.loadingCtrl.create({
            content: message,
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/bakke/Documents/Git/app_banxass_ionic/src/pages/login/login.html"*/'<ion-header>\n	\n</ion-header>\n\n<div class="background">\n\n</div>\n<ion-content>\n  <ion-grid class="grid">\n    <ion-row justify-content-center align-items-center>\n      <ion-col class="col-logo" col-10>\n        <h1 class="title" text-center>\n          AGROSOFT\n        </h1>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center align-items-center>\n      <ion-col class="col-form" col-12>\n        <form [formGroup]="formLogin" (ngSubmit)="login()">\n          <ion-list no-line>  \n            <ion-card>\n              <ion-item>\n                <ion-icon item-start ios="ios-person" md="md-person"></ion-icon>\n                <ion-label>Usuario</ion-label>\n                <ion-input formControlName="USER" type="text"></ion-input>\n              </ion-item>\n            </ion-card>\n            <ion-card>\n              <ion-item>\n                <ion-icon item-start ios="ios-key" md="md-key"></ion-icon>\n                <ion-label>Contraseña</ion-label>\n                <ion-input formControlName="PASSWORD" type="password"></ion-input>\n              </ion-item>\n            </ion-card>\n            <button class="button-login" [disabled]="!formLogin.valid" type="submit" ion-button full>Iniciar Sesión</button>\n          </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/bakke/Documents/Git/app_banxass_ionic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_list_session_list__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_weighing_weighing__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(weighingProvider, userProvider, navCtrl, viewCtrl, searchBuilder) {
        this.weighingProvider = weighingProvider;
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.searchBuilder = searchBuilder;
        this.createFormSearch("");
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
        this.session = this.userProvider.getSessionUserString();
    };
    SearchPage.prototype.ionViewCanEnter = function () {
        this.formSearch.value["SESSION"] = this.userProvider.getSessionUserString();
        this.createFormSearch(this.userProvider.getSessionUserString());
        this.session = this.userProvider.getSessionUserString();
    };
    SearchPage.prototype.ionViewDidLeave = function () {
        this.userProvider.setSessionName("Buscar una Sesion");
    };
    SearchPage.prototype.createFormSearch = function (session) {
        if (session === 'Buscar una Sesion') {
            session = "";
        }
        this.formSearch = this.searchBuilder.group({
            SESSION: [session, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            START_DATE: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            END_DATE: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            TYPE: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.search = function () {
        var _this = this;
        console.log(this.formSearch.value);
        this.userProvider.setflagEmptySearch(false);
        this.weighingProvider.getWeighing(this.formSearch).subscribe(function (weighing) {
            _this.userProvider.setWeighing(weighing);
            console.log(weighing);
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.pop();
    };
    SearchPage.prototype.selectSession = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__session_list_session_list__["a" /* SessionListPage */]);
    };
    SearchPage.prototype.goBackPage = function () {
        this.userProvider.setflagEmptySearch(true);
        this.navCtrl.pop();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/home/bakke/Documents/Git/app_banxass_ionic/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-toolbar color="agrosoft_blue">\n    <ion-title>\n      Búsqueda\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancelar</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="search_form" padding>\n  <form [formGroup]="formSearch">\n    <ion-list no-lines>\n      \n      <button (click)="selectSession()" ion-item>\n        <ion-icon item-start ios="ios-search" md="md-search"></ion-icon>\n        Sesión\n        <ion-note class="session_text" item-end>\n            {{session}}\n        </ion-note>\n      </button> \n  \n      <ion-item>\n        <ion-icon item-start ios="ios-calendar" md="md-calendar"></ion-icon>\n        <ion-label>Fecha Desde</ion-label>\n        <ion-datetime formControlName="START_DATE" displayFormat="DD/MM/YYYY"></ion-datetime>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon item-start ios="ios-calendar" md="md-calendar"></ion-icon>\n        <ion-label>Fecha Hasta</ion-label>\n        <ion-datetime formControlName="END_DATE" displayFormat="DD/MM/YYYY"></ion-datetime>\n      </ion-item>\n    \n      <ion-item>\n        <ion-icon item-start ios="ios-pricetag" md="md-pricetag"></ion-icon>\n        <ion-label>Etiqueta</ion-label>\n        <ion-input class="etiqueta_input" formControlName="TYPE" type="text"></ion-input>\n      </ion-item>\n  \n      <button (click)="search()" [disabled]="!formSearch.valid" type="submit" ion-button full color="agrosoft_blue">Buscar</button>\n      <div class="separator"></div>\n    </ion-list>\n  </form>\n  <button (click)="goBackPage()" ion-button full color="light">Cancelar</button>\n</ion-content>\n'/*ion-inline-end:"/home/bakke/Documents/Git/app_banxass_ionic/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_weighing_weighing__["a" /* WeighingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SessionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SessionListPage = /** @class */ (function () {
    function SessionListPage(loadingCtrl, userProvider, sessionProvider, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        this.sessionProvider = sessionProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sessionsList = undefined;
        this.existResult = false;
        this.loader = this.loadingMensaje("Cargando Sesiones..");
        this.loader.present();
        this.getSessions();
        this.loader.dismiss();
    }
    SessionListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SessionListPage');
    };
    SessionListPage.prototype.getSessions = function () {
        var _this = this;
        this.sessionProvider.getSessions().subscribe(function (sessions) {
            if (sessions != undefined) {
                _this.existResult = true;
                _this.sessionsList = sessions;
            }
            console.log(sessions);
        }, function (error) {
            console.log(error);
        });
    };
    SessionListPage.prototype.selectSession = function (session) {
        console.log(session.NAME);
        this.userProvider.setSessionUser(session);
        this.navCtrl.pop();
    };
    SessionListPage.prototype.loadingMensaje = function (message) {
        return this.loadingCtrl.create({
            content: message,
        });
    };
    SessionListPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SessionListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-session-list',template:/*ion-inline-start:"/home/bakke/Documents/Git/app_banxass_ionic/src/pages/session-list/session-list.html"*/'<!--\n  Generated template for the SessionListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="agrosoft_blue">\n    <ion-title>Sesiones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines *ngIf="existResult">\n    <button (click)="selectSession(session)" ion-item *ngFor="let session of sessionsList">\n      <ion-icon ios="ios-cube" md="md-cube" item-start></ion-icon>\n      <h2>Nombre: {{session.NAME}}</h2>\n      <h3>Tipo: {{ session.TYPE }}</h3>\n      <p>Desde : {{ session.START_DATE | amDateFormat: \'YYYY-MM-DD\' }}  Hasta : {{ session.END_DATE | amDateFormat: \'YYYY-MM-DD\' }}</p>\n    </button>\n  </ion-list>\n  <div *ngIf="!existResult" class="session-not-found">\n    <button (click)="goBack()" clear scolor="light" ion-button>\n      <ion-icon ios="ios-list-box" md="md-list-box"></ion-icon>\n      <br>\n      <span class="search-text">\n        <br>\n          No hay Sessiones Aún<br>\n          ¡Toca para Volver!\n      </span>\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/bakke/Documents/Git/app_banxass_ionic/src/pages/session-list/session-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], SessionListPage);
    return SessionListPage;
}());

//# sourceMappingURL=session-list.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		562,
		2
	],
	"../pages/search/search.module": [
		563,
		1
	],
	"../pages/session-list/session-list.module": [
		564,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SessionProvider = /** @class */ (function () {
    function SessionProvider(userProvider, gv, http) {
        this.userProvider = userProvider;
        this.gv = gv;
        this.http = http;
        console.log('Hello SessionProvider Provider');
        this.reqOpts = this._initializeReqOpts(this.reqOpts);
        this.reqOpts = this._addStandardHeaders(this.reqOpts.headers);
    }
    SessionProvider.prototype._addStandardHeaders = function (header) {
        header = header.append('Content-Type', 'application/json');
        header = header.append('Accept', 'application/json');
        return header;
    };
    SessionProvider.prototype._initializeReqOpts = function (reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        return reqOpts;
    };
    SessionProvider.prototype.getSessions = function () {
        return this.http.get("" + this.gv.getApiSession() + "/" + this.userProvider.getUserToken(), this.reqOpts)
            .map(function (data) {
            return data;
        }, function (error) {
            console.log(error);
        });
    };
    SessionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SessionProvider);
    return SessionProvider;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeighingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the WeighingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WeighingProvider = /** @class */ (function () {
    function WeighingProvider(gv, http) {
        this.gv = gv;
        this.http = http;
        console.log('Hello WeighingProvider Provider');
        this.reqOpts = this._initializeReqOpts(this.reqOpts);
        this.reqOpts = this._addStandardHeaders(this.reqOpts.headers);
    }
    WeighingProvider.prototype._addStandardHeaders = function (header) {
        header = header.append('Content-Type', 'application/json');
        header = header.append('Accept', 'application/json');
        return header;
    };
    WeighingProvider.prototype._initializeReqOpts = function (reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        return reqOpts;
    };
    WeighingProvider.prototype.getWeighing = function (formWeighing) {
        return this.http.post("" + this.gv.getApiWeighingGet() + "", formWeighing.value, this.reqOpts)
            .map(function (data) {
            return data;
        }, function (error) {
            console.log(error);
        });
    };
    WeighingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WeighingProvider);
    return WeighingProvider;
}());

//# sourceMappingURL=weighing.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_opener__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
/*
  Generated class for the PdfStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PdfStorageProvider = /** @class */ (function () {
    function PdfStorageProvider(file, fileOpener) {
        this.file = file;
        this.fileOpener = fileOpener;
        this.pdfObj = null;
        this.title = "AGROSOFT";
        this.dateNow = new Date().toTimeString();
        this.index = "#";
        this.column1 = "CODE_PACKAGING";
        this.column2 = "CODE_TAG";
        this.column3 = "WEIGHT";
        this.column4 = "REGISTER_DATE";
    }
    PdfStorageProvider.prototype.setInstacePdf = function (userName) {
        this.docFile = {
            content: [
                { text: this.title, style: 'header' },
                { text: this.dateNow, alignment: 'right' },
                { text: 'Hecho por ' + userName + '', style: 'subheader' },
                { table: {
                        headerRows: 1,
                        widths: [20, 'auto', 100, 50, 'auto'],
                        body: [
                            [
                                { text: this.index, bold: true },
                                { text: this.column1, bold: true },
                                { text: this.column2, bold: true },
                                { text: this.column3, bold: true },
                                { text: this.column4, bold: true }
                            ]
                        ]
                    }
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                row: {
                    italic: true,
                    alignment: 'center',
                    width: '50%'
                }
            }
        };
    };
    PdfStorageProvider.prototype.createRowOfTable = function (searchResult) {
        for (var i = 0; i < searchResult.length; i++) {
            var rowTable = [
                '' + i,
                searchResult[i].CODE_PACKAGING,
                searchResult[i].CODE_TAG,
                searchResult[i].WEIGHT,
                searchResult[i].REGISTER_DATE
            ];
            this.docFile.content[3].table.body.push(rowTable);
        }
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default.a.createPdf(this.docFile);
    };
    PdfStorageProvider.prototype.cleanDoc = function () {
        this.pdfObj = null;
        this.docFile = null;
    };
    PdfStorageProvider.prototype.opened = function () {
        var _this = this;
        this.pdfObj.getBuffer(function (buffer) {
            var blob = new Blob([buffer], { type: 'application/pdf' });
            // Save the PDF to the data Directory of our App
            _this.file.writeFile(_this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(function (fileEntry) {
                // Open the PDf with the correct OS tools
                _this.fileOpener.open(_this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
            });
        });
    };
    PdfStorageProvider.prototype.download = function (searchResult) {
        this.createRowOfTable(searchResult);
        this.pdfObj.download();
        this.cleanDoc();
    };
    PdfStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_opener__["a" /* FileOpener */]])
    ], PdfStorageProvider);
    return PdfStorageProvider;
}());

//# sourceMappingURL=pdf-storage.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(401);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_global_global__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_session_list_session_list__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_session_session__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_weighing_weighing__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_pdf_storage_pdf_storage__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_moment__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_opener__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ion_affix__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_hide_fab_onscroll__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_connectivity_connectivity__ = __webpack_require__(560);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Pages





// Providers






// Externs Library






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_session_list_session_list__["a" /* SessionListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_20_ion_affix__["a" /* IonAffixModule */],
                __WEBPACK_IMPORTED_MODULE_21_ionic_hide_fab_onscroll__["a" /* HideFabOnscrollModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/session-list/session-list.module#SessionListPageModule', name: 'SessionListPage', segment: 'session-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_session_list_session_list__["a" /* SessionListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_session_session__["a" /* SessionProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_weighing_weighing__["a" /* WeighingProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_22__providers_connectivity_connectivity__["a" /* ConnectivityProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_pdf_storage_pdf_storage__["a" /* PdfStorageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider() {
        this.userKey = 'USER';
        this.clientKey = 'CLIENT';
        this.userToken = 'TOKEN_USER';
        this.userSessionName = 'SESSION_NAME';
        this.userSessionStart = 'SESSION_START_DATE';
        this.userSessionEnd = 'SESSION_END_DATE';
        this.userSessionType = 'SESSION_TYPE';
        this.userSearchWei = 'WEIGHING';
        this.searchResult = [];
        this.flagSearch = false;
        console.log('Hello UserProvider Provider');
    }
    // guarda datos en el dispositovo
    UserProvider.prototype.saveDataDevice = function (data) {
        localStorage.setItem(this.userKey, data["user"].USER);
        localStorage.setItem(this.clientKey, data["user"].CLIENT);
        localStorage.setItem(this.userSessionName, "Buscar una Sesion");
        localStorage.setItem(this.userToken, data["token"]);
    };
    // al cerrar sesion se borra los datos dentro del dipositivo
    UserProvider.prototype.removeDataDevice = function () {
        localStorage.removeItem(this.userKey);
        localStorage.removeItem(this.clientKey);
        localStorage.removeItem(this.userSessionName);
        localStorage.removeItem(this.userToken);
        localStorage.removeItem(this.userSessionStart);
        localStorage.removeItem(this.userSessionEnd);
        localStorage.removeItem(this.userSessionType);
        localStorage.removeItem(this.userSearchWei);
        this.searchResult = [];
        this.flagSearch = false;
    };
    UserProvider.prototype.verifyUser = function () {
        if (localStorage.getItem(this.userKey) && localStorage.getItem(this.clientKey)) {
            return true;
        }
        else {
            return false;
        }
    };
    UserProvider.prototype.getClient = function () {
        return localStorage.getItem(this.clientKey);
    };
    UserProvider.prototype.getUser = function () {
        return localStorage.getItem(this.userKey);
    };
    UserProvider.prototype.getSessionUserString = function () {
        return localStorage.getItem(this.userSessionName);
    };
    UserProvider.prototype.getUserToken = function () {
        return localStorage.getItem(this.userToken);
    };
    UserProvider.prototype.setSessionName = function (sessionName) {
        localStorage.setItem(this.userSessionName, sessionName);
    };
    UserProvider.prototype.setSessionUser = function (userTempSession) {
        localStorage.setItem(this.userSessionName, userTempSession.NAME);
        localStorage.setItem(this.userSessionStart, userTempSession.START_DATE);
        localStorage.setItem(this.userSessionEnd, userTempSession.END_DATE);
        localStorage.setItem(this.userSessionType, userTempSession.TYPE);
    };
    UserProvider.prototype.setWeighing = function (searchWeighing) {
        this.searchResult = searchWeighing;
    };
    UserProvider.prototype.getWeighing = function () {
        return this.searchResult;
    };
    UserProvider.prototype.clearUserSearch = function () {
        this.searchResult = [];
    };
    UserProvider.prototype.setflagEmptySearch = function (flag) {
        this.flagSearch = flag;
    };
    UserProvider.prototype.getFlagEmptySearch = function () {
        return this.flagSearch;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(userProvider, alertCtrl, loadingCtrl, authProvider, platform, statusBar, splashScreen) {
        var _this = this;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.initApp();
        });
    }
    MyApp.prototype.initializePages = function () {
        this.pages = [
            { title: 'Búsqueda', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'search' },
        ];
    };
    MyApp.prototype.setPage = function (p) {
        this.nav.setRoot(p.component);
    };
    MyApp.prototype.initApp = function () {
        this.initializePages();
        this.setProfileName();
        this.checkPreviousAuthorization();
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    };
    MyApp.prototype.checkPreviousAuthorization = function () {
        var _this = this;
        this.loader = this.loadingMessage("Espere..");
        setTimeout(function () {
            if (localStorage.getItem('USER')) {
                _this.setProfileName();
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], {}, { animate: true });
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
            _this.loader.dismiss();
        }, 0);
    };
    MyApp.prototype.logOut = function () {
        var _this = this;
        this.loader = this.loadingMessage('Cerrando Sesión Espere...');
        this.loader.present().then(function () {
            _this.authProvider.logOut().subscribe(function () {
                setTimeout(function () {
                    _this.userName = "";
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], {}, { animate: true });
                    _this.nav.popToRoot();
                    _this.loader.dismiss();
                }, 2000);
            }, function (error) {
                console.log(error);
                _this.loader.dismiss();
            });
        });
    };
    MyApp.prototype.loadingMessage = function (message) {
        return this.loadingCtrl.create({
            content: message,
        });
    };
    MyApp.prototype.alertMessage = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alerta',
            message: '¿Está seguro que desea cerrar la sesión?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function (data) {
                        _this.logOut();
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.setProfileName = function () {
        this.userName = this.userProvider.getUser();
    };
    MyApp.prototype.openMenu = function () {
        this.setProfileName();
    };
    MyApp.prototype.swipeEvent = function (event) {
        this.setProfileName();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/bakke/Documents/Git/app_banxass_ionic/src/app/app.html"*/'\n<ion-menu [content]="content">\n	<ion-content class="color-menu">\n		<ion-list>\n			<ion-item color="agrosoft_blue">\n				<ion-avatar item-start>\n					<img src="../assets/imgs/profile.png">\n				</ion-avatar>\n				<h2>{{ userName }}</h2>\n			</ion-item>\n		</ion-list>\n		<ion-list no-lines>\n			<button color="agrosoft_blue" menuClose ion-item *ngFor="let p of pages" (click)="setPage(p)">\n					{{p.title}}\n				<ion-icon item-end ios="ios-{{p.icon}}" md="md-{{p.icon}}"></ion-icon>\n			</button>\n			<button color="agrosoft_blue" menuClose (click)="alertMessage()" ion-item>\n					Cerrar Sesión\n				<ion-icon item-end  ios="ios-log-out" md="md-log-out"></ion-icon>\n			</button>\n		</ion-list>\n	</ion-content>\n</ion-menu>\n\n<ion-nav (swipe)="swipeEvent($event)" (click)="openMenu()" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>        \n'/*ion-inline-end:"/home/bakke/Documents/Git/app_banxass_ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 241,
	"./af.js": 241,
	"./ar": 242,
	"./ar-dz": 243,
	"./ar-dz.js": 243,
	"./ar-kw": 244,
	"./ar-kw.js": 244,
	"./ar-ly": 245,
	"./ar-ly.js": 245,
	"./ar-ma": 246,
	"./ar-ma.js": 246,
	"./ar-sa": 247,
	"./ar-sa.js": 247,
	"./ar-tn": 248,
	"./ar-tn.js": 248,
	"./ar.js": 242,
	"./az": 249,
	"./az.js": 249,
	"./be": 250,
	"./be.js": 250,
	"./bg": 251,
	"./bg.js": 251,
	"./bm": 252,
	"./bm.js": 252,
	"./bn": 253,
	"./bn.js": 253,
	"./bo": 254,
	"./bo.js": 254,
	"./br": 255,
	"./br.js": 255,
	"./bs": 256,
	"./bs.js": 256,
	"./ca": 257,
	"./ca.js": 257,
	"./cs": 258,
	"./cs.js": 258,
	"./cv": 259,
	"./cv.js": 259,
	"./cy": 260,
	"./cy.js": 260,
	"./da": 261,
	"./da.js": 261,
	"./de": 262,
	"./de-at": 263,
	"./de-at.js": 263,
	"./de-ch": 264,
	"./de-ch.js": 264,
	"./de.js": 262,
	"./dv": 265,
	"./dv.js": 265,
	"./el": 266,
	"./el.js": 266,
	"./en-au": 267,
	"./en-au.js": 267,
	"./en-ca": 268,
	"./en-ca.js": 268,
	"./en-gb": 269,
	"./en-gb.js": 269,
	"./en-ie": 270,
	"./en-ie.js": 270,
	"./en-il": 271,
	"./en-il.js": 271,
	"./en-nz": 272,
	"./en-nz.js": 272,
	"./eo": 273,
	"./eo.js": 273,
	"./es": 274,
	"./es-do": 275,
	"./es-do.js": 275,
	"./es-us": 276,
	"./es-us.js": 276,
	"./es.js": 274,
	"./et": 277,
	"./et.js": 277,
	"./eu": 278,
	"./eu.js": 278,
	"./fa": 279,
	"./fa.js": 279,
	"./fi": 280,
	"./fi.js": 280,
	"./fo": 281,
	"./fo.js": 281,
	"./fr": 282,
	"./fr-ca": 283,
	"./fr-ca.js": 283,
	"./fr-ch": 284,
	"./fr-ch.js": 284,
	"./fr.js": 282,
	"./fy": 285,
	"./fy.js": 285,
	"./gd": 286,
	"./gd.js": 286,
	"./gl": 287,
	"./gl.js": 287,
	"./gom-latn": 288,
	"./gom-latn.js": 288,
	"./gu": 289,
	"./gu.js": 289,
	"./he": 290,
	"./he.js": 290,
	"./hi": 291,
	"./hi.js": 291,
	"./hr": 292,
	"./hr.js": 292,
	"./hu": 293,
	"./hu.js": 293,
	"./hy-am": 294,
	"./hy-am.js": 294,
	"./id": 295,
	"./id.js": 295,
	"./is": 296,
	"./is.js": 296,
	"./it": 297,
	"./it.js": 297,
	"./ja": 298,
	"./ja.js": 298,
	"./jv": 299,
	"./jv.js": 299,
	"./ka": 300,
	"./ka.js": 300,
	"./kk": 301,
	"./kk.js": 301,
	"./km": 302,
	"./km.js": 302,
	"./kn": 303,
	"./kn.js": 303,
	"./ko": 304,
	"./ko.js": 304,
	"./ky": 305,
	"./ky.js": 305,
	"./lb": 306,
	"./lb.js": 306,
	"./lo": 307,
	"./lo.js": 307,
	"./lt": 308,
	"./lt.js": 308,
	"./lv": 309,
	"./lv.js": 309,
	"./me": 310,
	"./me.js": 310,
	"./mi": 311,
	"./mi.js": 311,
	"./mk": 312,
	"./mk.js": 312,
	"./ml": 313,
	"./ml.js": 313,
	"./mn": 314,
	"./mn.js": 314,
	"./mr": 315,
	"./mr.js": 315,
	"./ms": 316,
	"./ms-my": 317,
	"./ms-my.js": 317,
	"./ms.js": 316,
	"./mt": 318,
	"./mt.js": 318,
	"./my": 319,
	"./my.js": 319,
	"./nb": 320,
	"./nb.js": 320,
	"./ne": 321,
	"./ne.js": 321,
	"./nl": 322,
	"./nl-be": 323,
	"./nl-be.js": 323,
	"./nl.js": 322,
	"./nn": 324,
	"./nn.js": 324,
	"./pa-in": 325,
	"./pa-in.js": 325,
	"./pl": 326,
	"./pl.js": 326,
	"./pt": 327,
	"./pt-br": 328,
	"./pt-br.js": 328,
	"./pt.js": 327,
	"./ro": 329,
	"./ro.js": 329,
	"./ru": 330,
	"./ru.js": 330,
	"./sd": 331,
	"./sd.js": 331,
	"./se": 332,
	"./se.js": 332,
	"./si": 333,
	"./si.js": 333,
	"./sk": 334,
	"./sk.js": 334,
	"./sl": 335,
	"./sl.js": 335,
	"./sq": 336,
	"./sq.js": 336,
	"./sr": 337,
	"./sr-cyrl": 338,
	"./sr-cyrl.js": 338,
	"./sr.js": 337,
	"./ss": 339,
	"./ss.js": 339,
	"./sv": 340,
	"./sv.js": 340,
	"./sw": 341,
	"./sw.js": 341,
	"./ta": 342,
	"./ta.js": 342,
	"./te": 343,
	"./te.js": 343,
	"./tet": 344,
	"./tet.js": 344,
	"./tg": 345,
	"./tg.js": 345,
	"./th": 346,
	"./th.js": 346,
	"./tl-ph": 347,
	"./tl-ph.js": 347,
	"./tlh": 348,
	"./tlh.js": 348,
	"./tr": 349,
	"./tr.js": 349,
	"./tzl": 350,
	"./tzl.js": 350,
	"./tzm": 351,
	"./tzm-latn": 352,
	"./tzm-latn.js": 352,
	"./tzm.js": 351,
	"./ug-cn": 353,
	"./ug-cn.js": 353,
	"./uk": 354,
	"./uk.js": 354,
	"./ur": 355,
	"./ur.js": 355,
	"./uz": 356,
	"./uz-latn": 357,
	"./uz-latn.js": 357,
	"./uz.js": 356,
	"./vi": 358,
	"./vi.js": 358,
	"./x-pseudo": 359,
	"./x-pseudo.js": 359,
	"./yo": 360,
	"./yo.js": 360,
	"./zh-cn": 361,
	"./zh-cn.js": 361,
	"./zh-hk": 362,
	"./zh-hk.js": 362,
	"./zh-tw": 363,
	"./zh-tw.js": 363
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 452;

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ConnectivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
var ConnectivityProvider = /** @class */ (function () {
    function ConnectivityProvider(alertCtrl, network, eventCtrl) {
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.eventCtrl = eventCtrl;
        console.log('Hello NetworkProvider Provider');
        this.previousStatus = ConnectionStatusEnum.Online;
    }
    ConnectivityProvider.prototype.initializeNetworkEvents = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Online) {
                _this.eventCtrl.publish('network:offline');
                _this.alertCtrl.create();
                //console.log("off");
            }
            _this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Offline) {
                _this.eventCtrl.publish('network:online');
                _this.alertCtrl.create();
                //console.log("on");
            }
            _this.previousStatus = ConnectionStatusEnum.Online;
        });
    };
    ConnectivityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Events */]])
    ], ConnectivityProvider);
    return ConnectivityProvider;
}());

//# sourceMappingURL=connectivity.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
        this.url = "http://localhost:3000/api/";
        this.apiAuth = "auth/";
        this.apiUser = "user/";
        this.apiSession = "session/";
        this.apiWeighing = "weighing/";
        this.login = "login_user";
        this.logOut = "log_out_user";
        this.usersType = "users_type";
        this.sessionGet = "get_sessions";
        this.weighingGet = "get_weighing";
        console.log('Hello GlobalProvider Provider');
    }
    GlobalProvider.prototype.getApiLogin = function () {
        return this.url + "" + this.apiAuth + "" + this.login;
    };
    GlobalProvider.prototype.getApiLogOut = function () {
        return this.url + "" + this.apiAuth + "" + this.logOut;
    };
    GlobalProvider.prototype.getApiUserType = function () {
        return this.url + "" + this.apiUser + "" + this.usersType;
    };
    GlobalProvider.prototype.getApiSession = function () {
        return this.url + "" + this.apiSession + "" + this.sessionGet;
    };
    GlobalProvider.prototype.getApiWeighingGet = function () {
        return this.url + "" + this.apiWeighing + "" + this.weighingGet;
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ })

},[393]);
//# sourceMappingURL=main.js.map