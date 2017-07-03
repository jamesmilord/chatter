webpackJsonp([1,5],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 109;


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(123);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(26);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(202),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_chat_service__ = __webpack_require__(26);
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

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__(203),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ChatComponent);

var _a, _b;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__(26);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-sign-in',
        template: __webpack_require__(204),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignInComponent);

var _a, _b;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ 123:
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

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/*\r\n * Masthead for nav\r\n */\r\n\r\n.blog-masthead {\r\n  background-color: #428bca;\r\n  box-shadow: inset 0 -2px 5px rgba(0,0,0,.1);\r\n}\r\n\r\n/* Nav links */\r\n.blog-nav-item {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  font-weight: 500;\r\n  color: #cdddeb;\r\n}\r\n.blog-nav-item:hover,\r\n.blog-nav-item:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Active state gets a caret at the bottom */\r\n.blog-nav .active {\r\n  color: #fff;\r\n}\r\n.blog-nav .active:after {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: -5px;\r\n  vertical-align: middle;\r\n  content: \" \";\r\n  border-right: 5px solid transparent;\r\n  border-bottom: 5px solid;\r\n  border-left: 5px solid transparent;\r\n}\r\n\r\n\r\n.on{\r\n  color: #15ee32;\r\n}\r\n\r\n.onlineUsers {\r\n  display: none;\r\n  float: right;\r\n  margin-right: 10px;\r\n\r\n}\r\n\r\nli{\r\n  margin-top: 10px;\r\n}\r\n\r\n.alink {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n@media(max-width: 1080px) {\r\n.onlineUsers{\r\n  display: unset;\r\n}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "em {\r\n  color: red;\r\n}\r\n\r\n.dialog,\r\n.users{\r\n  height: 500px;\r\n\r\n}\r\n\r\n.row{\r\n\r\n}\r\n\r\n.insidebox1{\r\n  margin-top: 15px;\r\n  height: 466px;\r\n  overflow-y: scroll;\r\n}\r\n textarea {\r\n   width: 550px;\r\n   height: 100px;\r\n }\r\n\r\n button{\r\n   font-size: 30px;\r\n   float: left;\r\n }\r\n\r\n .box1{\r\n   border: 1px solid black;\r\n   border-radius: 5px;\r\n   margin-top: 20px;\r\n }\r\n\r\n .insidebox2{\r\n   height: 300px;\r\n   overflow-y: auto;\r\n }\r\n\r\n i{\r\n   margin-right: 4px;\r\n   font-size: 30px;\r\n   margin-bottom: 4px;\r\n }\r\n\r\n .on{\r\n   color: #15ee32;\r\n }\r\n\r\n\r\n .time{\r\n   color: #080254;\r\n   font-style: italic;\r\n   font-size: 10px;\r\n   margin-left: 150px;\r\n }\r\n\r\n .center{\r\n   text-align: center;\r\n }\r\n\r\n @media(max-width: 1080px) {\r\n   .users{\r\n     display: none;\r\n   }\r\n\r\n   textarea {\r\n     width: 350px;\r\n     height: 70px;\r\n   }\r\n\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".instruction{\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-masthead\">\n<div class=\"container\">\n  <nav class=\"blog-nav\">\n    <a class=\"blog-nav-item active\" href=\"/\"><strong>Chatter</strong></a>\n    <li class=\"nav navbar-nav onlineUsers\" *ngIf=\"isValid\"><a class=\"alink\"><em class=\"on\">online </em>Users</a></li>\n  </nav>\n</div>\n</div>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid box1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-10  dialog\">\r\n      <div class=\"well insidebox1\" id=\"box\">\r\n        <div class=\"textWrapper\" *ngFor=\"let message of messages\">\r\n          <em>{{message.username}}</em>:{{message.text}}\r\n          <p class=\"time\">{{time}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-2 users\">\r\n      <h2><small><em class=\"on\">online </em></small>users</h2>\r\n      <div class=\"well insidebox2\">\r\n        <div *ngFor=\"let user of onlineUsers\">\r\n          {{user}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <h1>{{username}}</h1>\r\n\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 center\">\r\n      <textarea type=\"text\" placeholder=\"Enter message\" [(ngModel)]=\"message\" name=\"message\" value=\"\" (keyup.enter)=\"sendMessage()\" ></textarea>\r\n    </div>\r\n    <div class=\"col-lg-6 center\">\r\n      <button type=\"button\" name=\"button\" class=\"btn btn-primary\" (click)=\"sendMessage()\">Send</button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<div id=\"login-overlay\" class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\" id=\"myModalLabel\">Welcome to Chatter</h4>\n          </div>\n          <div class=\"modal-body\">\n              <div class=\"row\">\n                  <div class=\"col-xs-6\">\n                      <div class=\"well\">\n                          <div class=\"form-group\">\n                              <label for=\"username\" class=\"control-label\">Username</label>\n                              <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\" value=\"\" aria-describedby=\"passwordHelpInline\" title=\"Please enter you username\" placeholder=\"Username\">\n                               <small id=\"passwordHelpInline\" class=\"text-muted\"></small>\n                          </div>\n                          <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"setUsername()\">Enter Chat</button>\n                      </div>\n                  </div>\n                  <div class=\"col-xs-6 instruction\">\n                      <p class=\"lead\">Please enter a username in order to chat</p>\n                      <p><a href=\"https://github.com/jamesmilord/chatter\" target=\"_blank\">project source code</a></p>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });


var ChatService = (function () {
    function ChatService() {
        this.url = 'http://chatter-55.herokuapp.com:80';
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

},[252]);
//# sourceMappingURL=main.bundle.js.map