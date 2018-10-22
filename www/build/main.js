webpackJsonp([3],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(82);
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
                _this.loader.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {}, { animate: true }); // GO TO HOME PAGE
                //console.log(localStorage.getItem('USER'));
                //console.log(logged);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/bakke/Documentos/Git/BanaXassApp/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon text-name="menu"></ion-icon>\n		</button>\n		<ion-title center></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <ion-col class="col-logo" col-10>\n        <h1 text-center>\n          AGROSOFT\n        </h1>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center align-items-center>\n      <ion-col col-12>\n        <ion-card>\n          <form [formGroup]="formLogin" (ngSubmit)="login()">\n            <ion-list no-line>  \n\n              <ion-item>\n                <ion-label>Cliente</ion-label>\n                <ion-input formControlName="CLIENT" type="text"></ion-input>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label>Usuario</ion-label>\n                <ion-input formControlName="USER" type="text"></ion-input>\n              </ion-item>\n            \n              <ion-item>\n                <ion-label>Contrasena</ion-label>\n                <ion-input formControlName="PASSWORD" type="password"></ion-input>\n              </ion-item>\n\n              <button [disabled]="!formLogin.valid" type="submit" ion-button full round>Iniciar Sesion</button>\n            </ion-list>\n          </form>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/bakke/Documentos/Git/BanaXassApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_list_session_list__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(46);
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
    function SearchPage(userProvider, navCtrl, viewCtrl, searchBuilder) {
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
        this.userProvider.setSessionUserString("Buscar una Sesion");
    };
    SearchPage.prototype.createFormSearch = function (session) {
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
        console.log(this.formSearch.value);
        this.navCtrl.pop();
    };
    SearchPage.prototype.selectSession = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__session_list_session_list__["a" /* SessionListPage */]);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/bakke/Documentos/Git/BanaXassApp/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Busqueda\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="formSearch">\n    <ion-list no-line>\n\n      <button (click)="selectSession()" ion-item>\n        Sesion\n        <ion-note class="session_text" item-end>\n            {{session}}\n        </ion-note>\n      </button> \n  \n      <ion-item>\n          <ion-label>Fecha Desde</ion-label>\n          <ion-datetime formControlName="START_DATE" displayFormat="MM/DD/YYYY"></ion-datetime>\n      </ion-item>\n  \n      <ion-item>\n          <ion-label>Fecha Hasta</ion-label>\n          <ion-datetime formControlName="END_DATE" displayFormat="MM/DD/YYYY"></ion-datetime>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>Etiqueta</ion-label>\n        <ion-input class="etiqueta_input" formControlName="TYPE" type="text"></ion-input>\n      </ion-item>\n  \n      <button (click)="search()" [disabled]="!formSearch.valid" type="submit" ion-button full round>Buscar</button>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/bakke/Documentos/Git/BanaXassApp/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_list_user_list__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(46);
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
    function SessionListPage(loadingCtrl, userProvider, userListProvider, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        this.userListProvider = userListProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = this.loadingMensaje("Cargando Usuarios..");
        this.loader.present();
        this.getUsers();
        this.loader.dismiss();
    }
    SessionListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SessionListPage');
    };
    SessionListPage.prototype.getUsers = function () {
        var _this = this;
        this.userListProvider.getUserByType().subscribe(function (users) {
            _this.usersList = users;
            console.log(users);
        }, function (error) {
            console.log(error);
        });
    };
    SessionListPage.prototype.selectUser = function (user) {
        console.log(user.CLIENT);
        this.userProvider.setSessionUserString(user.CLIENT);
        this.navCtrl.pop();
    };
    SessionListPage.prototype.loadingMensaje = function (message) {
        return this.loadingCtrl.create({
            content: message,
        });
    };
    SessionListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-session-list',template:/*ion-inline-start:"/home/bakke/Documentos/Git/BanaXassApp/src/pages/session-list/session-list.html"*/'<!--\n  Generated template for the SessionListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sesiones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list >\n    <button (click)="selectUser(user)" ion-item *ngFor="let user of usersList">\n      <h2>Cliente: {{user.CLIENT}}</h2>\n      <div class="item-status" item-end text-center>\n        <p> Usuario : {{ user.USER }}</p>\n      </div>   \n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/bakke/Documentos/Git/BanaXassApp/src/pages/session-list/session-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_list_user_list__["a" /* UserListProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SessionListPage);
    return SessionListPage;
}());

//# sourceMappingURL=session-list.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		282,
		2
	],
	"../pages/search/search.module": [
		283,
		1
	],
	"../pages/session-list/session-list.module": [
		284,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
  Generated class for the UserListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserListProvider = /** @class */ (function () {
    //private options:RequestOptions = new RequestOptions({headers: this.headers });
    function UserListProvider(gv, http) {
        this.gv = gv;
        this.http = http;
        console.log('Hello AuthProvider Provider');
        this.reqOpts = this._initializeReqOpts(this.reqOpts);
        this.reqOpts = this._addStandardHeaders(this.reqOpts.headers);
    }
    UserListProvider.prototype._addStandardHeaders = function (header) {
        header = header.append('Content-Type', 'application/json');
        header = header.append('Accept', 'application/json');
        return header;
    };
    UserListProvider.prototype._initializeReqOpts = function (reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        return reqOpts;
    };
    UserListProvider.prototype.getUserByType = function () {
        return this.http.get("" + this.gv.getApiUserType(), this.reqOpts)
            .map(function (data) {
            console.log(data);
            return data;
        }, function (error) {
            console.log(error);
        });
    };
    UserListProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserListProvider);
    return UserListProvider;
}());

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_user__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_global_global__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_session_list_session_list__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_user_list_user_list__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/session-list/session-list.module#SessionListPageModule', name: 'SessionListPage', segment: 'session-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_user_list_user_list__["a" /* UserListProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(82);
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
    function MyApp(alertCtrl, loadingCtrl, authProvider, platform, statusBar, splashScreen) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        //rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.checkPreviousAuthorization();
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.checkPreviousAuthorization = function () {
        //console.log("AAAAAAAAAAAAAAAAAAAAA");
        console.log(this.authProvider.isLoggedIn());
        if (localStorage.getItem('USER')) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        }
    };
    MyApp.prototype.logOut = function () {
        var _this = this;
        this.loader = this.loadingMessage('Cerrando Sesión Espere...');
        this.loader.present().then(function () {
            _this.authProvider.logOut().subscribe(function () {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
                _this.nav.popToRoot();
                //console.log(response);
            }, function (error) {
                console.log(error);
            });
        });
        this.loader.dismiss();
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
            message: '¿Está seguro que desea cerrar la sesión',
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/bakke/Documentos/Git/BanaXassApp/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar color="heimdall-blue-strong">\n        <ion-title text-center>Menú</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list no-lines>\n        <button menuClose (click)="alertMessage()" ion-item>\n            <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n            Cerrar Sesión\n        </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>        \n\n'/*ion-inline-end:"/home/bakke/Documentos/Git/BanaXassApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
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
        this.userSessionKey = 'SESSION_TEMP';
        console.log('Hello UserProvider Provider');
    }
    // guarda datos en el dispositovo
    UserProvider.prototype.saveDataDevice = function (data) {
        console.log(data);
        localStorage.setItem(this.userKey, data.USER);
        localStorage.setItem(this.clientKey, data.CLIENT);
        localStorage.setItem(this.userSessionKey, "Buscar una Sesion");
    };
    // cerrar sesion
    UserProvider.prototype.removeDataDevice = function () {
        localStorage.removeItem(this.userKey);
        localStorage.removeItem(this.clientKey);
        localStorage.removeItem(this.userSessionKey);
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
        return localStorage.getItem(this.userSessionKey);
    };
    UserProvider.prototype.setSessionUserString = function (userTempSession) {
        localStorage.setItem(this.userSessionKey, userTempSession);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(menu, modalCtrl, navCtrl) {
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.showMenu();
    }
    HomePage.prototype.openModalSearch = function () {
        console.log('modal');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    HomePage.prototype.showMenu = function () {
        this.menu.enable(true);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/bakke/Documentos/Git/BanaXassApp/src/pages/home/home.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Agrosoft\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button (click)="openModalSearch()" ion-button small full color="light">\n    <ion-icon name="search"></ion-icon>\n    Empezar una Busqueda\n  </button>\n  <ion-list>\n    <ion-item>\n      <h2>Emapacadora: text</h2>\n      <h3>Peso: text</h3>\n      <ion-row>\n        <ion-col>\n          <ion-note>\n            Etiqueta: text\n          </ion-note>\n        </ion-col>\n        <ion-col center text-center>\n          <ion-note>\n            12/12/2018          \n          </ion-note>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/bakke/Documentos/Git/BanaXassApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 81:
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
        this.login = "login_user";
        this.logOut = "log_out_user";
        this.usersType = "users_type";
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
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(162);
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
    //private options:RequestOptions = new RequestOptions({headers: this.headers });
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
        console.log(this.gv.getApiLogin());
        return this.http.post("" + this.gv.getApiLogin() + "", formLogin.value, this.reqOpts)
            .map(function (data) {
            console.log(data);
            if (data['logIn']) {
                _this.loggedIn = false;
                return _this.loggedIn;
            }
            _this.userProvider.saveDataDevice(data);
            _this.loggedIn = true;
            console.log("------------------");
            console.log(_this.loggedIn);
            console.log("------------------");
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
            console.log("------------------");
            console.log(_this.loggedIn);
            console.log("------------------");
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map