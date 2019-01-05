webpackJsonp([1,5],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 112;


/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(126);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(chatService) {
        this.chatService = chatService;
        this.isValid = false;
        this.username = null;
        if (this.username != null) {
            this.isValid = true;
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this.username = this.chatService.getUsername();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(204),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_chat_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_6__chat_chat_component__["a" /* ChatComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in_component__["a" /* SignInComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_chat_service__["a" /* ChatService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = (function () {
    function ChatComponent(chatService, router) {
        this.chatService = chatService;
        this.router = router;
        this.messages = [];
        this.username = null;
        this.onlineUsers = [];
        this.time = null;
        this.typing = null;
    }
    ChatComponent.prototype.sendMessage = function () {
        this.chatService.sendMessage(this.message, this.username);
        this.message = '';
    };
    ChatComponent.prototype.broadcast = function () {
        this.chatService.broadcasted(this.username);
        console.log('broadcasted');
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.chatService.getMessages().subscribe(function (message) {
            _this.time = new Date().toLocaleTimeString();
            _this.messages.push(message);
        });
        this.connection = this.chatService.userIsTyping().subscribe(function (typing) {
            console.log(typing);
        });
        this.username = this.chatService.getUsername();
        this.onlineUsers.push(this.username);
        if (!this.username) {
            this.router.navigate(['/']);
        }
        if (this.username) {
            window.setInterval(function () {
                var elem = document.getElementById('box');
                elem.scrollTop = elem.scrollHeight;
            }, 5000);
        }
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__(205),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ChatComponent);

var _a, _b;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = (function () {
    function SignInComponent(chatService, router) {
        this.chatService = chatService;
        this.router = router;
        this.username = null;
    }
    SignInComponent.prototype.setUsername = function () {
        if (this.username) {
            this.chatService.setUsername(this.username);
            this.router.navigate(['/chat']);
        }
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-sign-in',
        template: __webpack_require__(206),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignInComponent);

var _a, _b;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "/*\n * Masthead for nav\n */\n\n.blog-masthead {\n  background-color: #428bca;\n  box-shadow: inset 0 -2px 5px rgba(0,0,0,.1);\n}\n\n/* Nav links */\n.blog-nav-item {\n  position: relative;\n  display: inline-block;\n  padding: 10px;\n  font-weight: 500;\n  color: #cdddeb;\n}\n.blog-nav-item:hover,\n.blog-nav-item:focus {\n  color: #fff;\n  text-decoration: none;\n}\n\n/* Active state gets a caret at the bottom */\n.blog-nav .active {\n  color: #fff;\n}\n.blog-nav .active:after {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 0;\n  margin-left: -5px;\n  vertical-align: middle;\n  content: \" \";\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid;\n  border-left: 5px solid transparent;\n}\n\n\n.on{\n  color: #15ee32;\n}\n\n.onlineUsers {\n  display: none;\n  float: right;\n  margin-right: 10px;\n\n}\n\nli{\n  margin-top: 10px;\n}\n\n.alink {\n  color: white;\n  text-decoration: none;\n}\n\n@media(max-width: 1080px) {\n.onlineUsers{\n  display: unset;\n}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "em {\n  color: red;\n}\n\n.dialog,\n.users{\n  height: 500px;\n\n}\n\n.insidebox1{\n  margin-top: 15px;\n  height: 466px;\n  overflow-y: scroll;\n}\n textarea {\n   width: 550px;\n   height: 100px;\n }\n\n button{\n   font-size: 30px;\n   float: left;\n }\n\n .box1{\n   border: 1px solid black;\n   border-radius: 5px;\n   margin-top: 20px;\n }\n\n .insidebox2{\n   height: 300px;\n   overflow-y: auto;\n }\n\n i{\n   margin-right: 4px;\n   font-size: 30px;\n   margin-bottom: 4px;\n }\n\n .on{\n   color: #15ee32;\n }\n\n\n .time{\n   color: #080254;\n   font-style: italic;\n   font-size: 10px;\n   margin-left: 150px;\n }\n\n .center{\n   text-align: center;\n }\n\n @media(max-width: 1080px) {\n   .users{\n     display: none;\n   }\n\n   textarea {\n     width: 350px;\n     height: 70px;\n   }\n\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, ".instruction{\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-masthead\">\n<div class=\"container\">\n  <nav class=\"blog-nav\">\n    <a class=\"blog-nav-item active\" href=\"/\"><strong>Chatter</strong></a>\n    <li class=\"nav navbar-nav onlineUsers\" *ngIf=\"isValid\"><a class=\"alink\"><em class=\"on\">online </em>Users</a></li>\n  </nav>\n</div>\n</div>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid box1\">\n  <div class=\"row\">\n    <div class=\"col-lg-10  dialog\">\n      <div class=\"well insidebox1\" id=\"box\">\n        <div class=\"textWrapper\" *ngFor=\"let message of messages\">\n          <em>{{message.username}}</em>:{{message.text}}\n          <p class=\"time\">{{time}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-2 users\">\n      <h2><small><em class=\"on\">online </em></small>users</h2>\n      <div class=\"well insidebox2\">\n        <div *ngFor=\"let user of onlineUsers\">\n          {{user}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <h1>{{username}}</h1>\n\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 center\">\n      <textarea type=\"text\" placeholder=\"Enter message\" [(ngModel)]=\"message\" name=\"message\" value=\"\" (keyup.enter)=\"sendMessage()\" ></textarea>\n    </div>\n    <div class=\"col-lg-6 center\">\n      <button type=\"button\" name=\"button\" class=\"btn btn-primary\" (click)=\"sendMessage()\">Send</button>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div id=\"login-overlay\" class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\" id=\"myModalLabel\">Welcome to Chatter</h4>\n          </div>\n          <div class=\"modal-body\">\n              <div class=\"row\">\n                  <div class=\"col-xs-6\">\n                      <div class=\"well\">\n                          <div class=\"form-group\">\n                              <label for=\"username\" class=\"control-label\">Username</label>\n                              <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\" value=\"\" aria-describedby=\"passwordHelpInline\" title=\"Please enter you username\" placeholder=\"Username\">\n                               <small id=\"passwordHelpInline\" class=\"text-muted\"></small>\n                          </div>\n                          <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"setUsername()\">Enter Chat</button>\n                      </div>\n                  </div>\n                  <div class=\"col-xs-6 instruction\">\n                      <p class=\"lead\">Please enter a username in order to chat</p>\n                      <p><a href=\"https://github.com/jamesmilord/chatter\" target=\"_blank\">project source code</a></p>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(113);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });


var ChatService = (function () {
    function ChatService() {
        this.url = 'https://chatter-55.herokuapp.com:80';
        this.onlineUsers = [];
    }
    ChatService.prototype.sendMessage = function (message, username) {
        this.socket.emit('add-message', message, username);
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatService.prototype.setUsername = function (username) {
        this.username = username;
    };
    ChatService.prototype.getUsername = function () {
        return this.username;
    };
    ChatService.prototype.broadcasted = function (usertype) {
        this.socket.emit('typing', usertype);
    };
    ChatService.prototype.userIsTyping = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('typing', function (data) {
                observer.next(data);
            });
        });
        console.log('here');
        return observable;
    };
    return ChatService;
}());

//# sourceMappingURL=chat.service.js.map

/***/ })

},[272]);
//# sourceMappingURL=main.bundle.js.map