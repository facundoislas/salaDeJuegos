(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/error/error.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/error/error.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>error works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/home/home.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/home/home.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>home works!</p>\n\n<a routerLink=\"/quienSoy\">Quien Soy</a><br>\n\n<a routerLink=\"/login\">Login</a><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/login/login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/login/login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("login");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/quien-soy/quien-soy.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/quien-soy/quien-soy.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fondo\">\n    <div class=\"aboutus-section\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-md-3 col-sm-6 col-xs-12\">\n                  <div class=\"aboutus\">\n                      <h2 class=\"aboutus-title\">Sobre Mi</h2>\n                      <p class=\"aboutus-text\">Soy Facundo Islas, estudiante de la carrera de tecnicatura en programacion en la Universidad Tecnologica Nacional (UTN), curso 4B </p>\n                      <p class=\"aboutus-text\">Para ver mi repositorio podes hacer click en el siguiente boton</p>\n                      <a class=\"aboutus-more\" href=\"http://www.github.com/facundoislas\" target=\"blank\">Mi Github</a>\n                  </div>\n              </div>\n              <div class=\"col-md-3 col-sm-6 col-xs-12\">\n                  <div class=\"aboutus-banner\">\n                    <img src=\"./assets/imagenes/quiensoy.JPG\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\n                  </div>\n              </div>\n              <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"feature\"><br><br><br>\n                      <div class=\"feature-box\">\n                          <div class=\"clearfix\">\n                              <div class=\"iconset\">\n                                  <span class=\"glyphicon glyphicon-cog icon\"></span>\n                              </div>\n                              <div class=\"feature-content\">\n                                  <h4>Mi Juego: Adivina la provincia</h4>\n                                  <p>El juego consiste en adivinar la provincia a partir de una imagen en pantalla, entre\n                                    4 opciones.\n                                  </p>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"feature-box\">\n                          <div class=\"clearfix\">\n                              <div class=\"iconset\">\n                                  <span class=\"glyphicon glyphicon-cog icon\"></span>\n                              </div>\n                              <div class=\"feature-content\">\n                                  <h4>Objetivo</h4>\n                                  <p>Saber cuanto conoces de geografía Argentina a partir de reconocer monumentos historicos o paisajes.</p>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"feature-box\">\n                          \n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Vistas/juego/juego.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Vistas/juego/juego.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--label>nombre</label><input type=\"text\" [(ngModel)]=\"this.usuario.nombre\"><br>\n<label>apellido</label><input type=\"text\" [(ngModel)]=\"this.usuario.apellido\"><br>\n<input type=\"text\" [value]=\"variable2\"\nngModel para capturar y mostrar el valor>\n<input type=\"text\" [(ngModel)]=\"this.variable2\">\n<p>{{this.variable2}}</p>\n<input type=\"button\" value=\"boton\"(click)=\"this.usuario.mostrar()\"-->\n\n<a routerLink=\"/login\">login</a><br>\n<a routerLink=\"/bienvenido\">Bienvenido</a><br>\n<a routerLink=\"/cualquiera\">boton</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--p>Hola Mundo</p>\n\n<label>Edad 1: </label><input type=\"number\" [(ngModel)]=\"this.edadUno\"><br>\n<label>Edad 2: </label><input type=\"number\" [(ngModel)]=\"this.edadDos\"><br>\n\n<input type=\"button\" value=\"Calcular\" (click)=\"this.calcular()\"><br><br>\n\n<div *ngIf=\"this.resultadoSuma\">\n<label>Suma: </label><input type=\"number\" [(ngModel)]=\"this.resultadoSuma\"><br>\n<label>Promedio: </label><input type=\"number\" [(ngModel)]=\"this.resultadoProm\"><br><br>\n\n<input type=\"button\" value=\"Limpiar cuadro de Textos\" (click)=\"this.limpiar()\"><br><br>\n</div-->\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/Componentes/error/error.component.css":
/*!*******************************************************!*\
  !*** ./src/app/Componentes/error/error.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudGVzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/Componentes/error/error.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Componentes/error/error.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/Componentes/error/error.component.css")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/Componentes/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Componentes/home/home.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudGVzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/Componentes/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Componentes/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/Componentes/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/Componentes/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/Componentes/login/login.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/Componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/Componentes/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/Componentes/quien-soy/quien-soy.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Componentes/quien-soy/quien-soy.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*.imagenDeQuienSoy{\r\n    width: 100%;\r\n   \r\n    }\r\nbody {\r\n    font: 20px Montserrat, sans-serif;\r\n    line-height: 1.8;\r\n    color: #f5f6f7;\r\n}\r\np {font-size: 16px;}\r\n.margin {margin-bottom: 45px;}\r\n.bg-1 { \r\n    background-color: #1abc9c; /* Green \r\n    color: #ffffff;\r\n}\r\n.bg-2 { \r\n    background-color: #474e5d; /* Dark Blue \r\n    color: #ffffff;\r\n}\r\n.bg-3 { \r\n    background-color: #ffffff; /* White \r\n    color: #555555;\r\n}\r\n.bg-4 { \r\n    background-color: #2f2f2f; /* Black Gray \r\n    color: #fff;\r\n}\r\n.container-fluid {\r\n    padding-top: 70px;\r\n    padding-bottom: 70px;\r\n}\r\n.navbar {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n}\r\n.navbar-nav  li a:hover {\r\n    color: #1abc9c !important;\r\n}\r\n*/\r\n.fondo{\r\n\r\n    /*background-image: url(\".../../../docs/assets/imagenes/slider-bg-2.jpg\");\r\n    margin-top: -60px;*/\r\n    background-color: black;\r\n  }\r\nbody {\r\n    font-family: 'Roboto';font-size: 16px;\r\n}\r\n.aboutus-section {\r\n    padding: 90px 0;\r\n}\r\n.aboutus-title {\r\n    font-size: 30px;\r\n    letter-spacing: 0;\r\n    line-height: 32px;\r\n    margin: 0 0 39px;\r\n    padding: 0 0 11px;\r\n    position: relative;\r\n    text-transform: uppercase;\r\n    color: chartreuse;\r\n    text-align: center;\r\n}\r\n.aboutus-title::after {\r\n    background: #fdb801 none repeat scroll 0 0;\r\n    bottom: 0;\r\n    content: \"\";\r\n    height: 10px;\r\n    left: 0;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n.aboutus-text {\r\n    color: #ced5ec;\r\n    font-size: 20px;\r\n    line-height: 22px;\r\n    margin: 0 0 35px;\r\n}\r\na:hover, a:active {\r\n    color: #ffb901;\r\n    text-decoration: none;\r\n    outline: 0;\r\n}\r\n.aboutus-more {\r\n    border: 1px solid #fdb801;\r\n    border-radius: 25px;\r\n    color: #fdb801;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    letter-spacing: 0;\r\n    padding: 7px 20px;\r\n    text-transform: uppercase;\r\n    margin-left: 20%;\r\n}\r\n.feature .feature-box .iconset {\r\n    background: transparent none repeat scroll 0 0;\r\n    float: left;\r\n    position: relative;\r\n    width: 6%;\r\n}\r\n.feature{\r\n    margin-left: 20%;\r\n}\r\n.feature .feature-box .feature-content h4 {\r\n    color: chartreuse;\r\n    font-size: 18px;\r\n    letter-spacing: 0;\r\n    line-height: 22px;\r\n    margin: 0 0 0px;\r\n}\r\n.feature .feature-box .feature-content {\r\n    float: left;\r\n    width: 78%;\r\n}\r\n.feature .feature-box .feature-content h4 {\r\n    color: chartreuse;\r\n    font-size: 18px;\r\n    letter-spacing: 0;\r\n    line-height: 22px;\r\n    margin: 0 0 5px;\r\n}\r\n.feature .feature-box .feature-content p {\r\n    color: #cee409;\r\n    font-size: 20px;\r\n\r\n}\r\n.icon {\r\n    color : #f4b841;\r\n    padding:0px;\r\n    font-size:40px;\r\n    border: 1px solid #fdb801;\r\n    border-radius: 100px;\r\n    color: #fdb801;\r\n    font-size: 28px;\r\n    height: 70px;\r\n    line-height: 70px;\r\n    text-align: center;\r\n    width: 70px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkNDO0FBQ0Q7O0lBRUk7dUJBQ21CO0lBQ25CLHVCQUF1QjtFQUN6QjtBQUVGO0lBQ0kscUJBQXFCLENBQUMsZUFBZTtBQUN6QztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFHQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRlcy9xdWllbi1zb3kvcXVpZW4tc295LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5pbWFnZW5EZVF1aWVuU295e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIFxyXG4gICAgfVxyXG5ib2R5IHtcclxuICAgIGZvbnQ6IDIwcHggTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBjb2xvcjogI2Y1ZjZmNztcclxufVxyXG5wIHtmb250LXNpemU6IDE2cHg7fVxyXG4ubWFyZ2luIHttYXJnaW4tYm90dG9tOiA0NXB4O31cclxuLmJnLTEgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7IC8qIEdyZWVuIFxyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmJnLTIgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7IC8qIERhcmsgQmx1ZSBcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5iZy0zIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSBcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcbi5iZy00IHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmOyAvKiBCbGFjayBHcmF5IFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG59XHJcbi5uYXZiYXIge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxufVxyXG4ubmF2YmFyLW5hdiAgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzFhYmM5YyAhaW1wb3J0YW50O1xyXG59XHJcbiovXHJcbi5mb25kb3tcclxuXHJcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLi8uLi8uLi9kb2NzL2Fzc2V0cy9pbWFnZW5lcy9zbGlkZXItYmctMi5qcGdcIik7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5hYm91dHVzLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogOTBweCAwO1xyXG59XHJcbi5hYm91dHVzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW46IDAgMCAzOXB4O1xyXG4gICAgcGFkZGluZzogMCAwIDExcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IGNoYXJ0cmV1c2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFib3V0dXMtdGl0bGU6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZGI4MDEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFib3V0dXMtdGV4dCB7XHJcbiAgICBjb2xvcjogI2NlZDVlYztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMzVweDtcclxufVxyXG5cclxuYTpob3ZlciwgYTphY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmI5MDE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbi5hYm91dHVzLW1vcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZkYjgwMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBjb2xvcjogI2ZkYjgwMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5pY29uc2V0IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA2JTtcclxufVxyXG4uZmVhdHVyZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcblxyXG4uZmVhdHVyZSAuZmVhdHVyZS1ib3ggLmZlYXR1cmUtY29udGVudCBoNCB7XHJcbiAgICBjb2xvcjogY2hhcnRyZXVzZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW46IDAgMCAwcHg7XHJcbn1cclxuXHJcblxyXG4uZmVhdHVyZSAuZmVhdHVyZS1ib3ggLmZlYXR1cmUtY29udGVudCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3OCU7XHJcbn1cclxuLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5mZWF0dXJlLWNvbnRlbnQgaDQge1xyXG4gICAgY29sb3I6IGNoYXJ0cmV1c2U7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwIDAgNXB4O1xyXG59XHJcbi5mZWF0dXJlIC5mZWF0dXJlLWJveCAuZmVhdHVyZS1jb250ZW50IHAge1xyXG4gICAgY29sb3I6ICNjZWU0MDk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcbi5pY29uIHtcclxuICAgIGNvbG9yIDogI2Y0Yjg0MTtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmRiODAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBjb2xvcjogI2ZkYjgwMTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Componentes/quien-soy/quien-soy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuienSoyComponent = class QuienSoyComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuienSoyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quien-soy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quien-soy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Componentes/quien-soy/quien-soy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quien-soy.component.css */ "./src/app/Componentes/quien-soy/quien-soy.component.css")).default]
    })
], QuienSoyComponent);



/***/ }),

/***/ "./src/app/Entidades/usuario.ts":
/*!**************************************!*\
  !*** ./src/app/Entidades/usuario.ts ***!
  \**************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Usuario {
}


/***/ }),

/***/ "./src/app/Vistas/juego/juego.component.css":
/*!**************************************************!*\
  !*** ./src/app/Vistas/juego/juego.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Zpc3Rhcy9qdWVnby9qdWVnby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/Vistas/juego/juego.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Vistas/juego/juego.component.ts ***!
  \*************************************************/
/*! exports provided: JuegoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoComponent", function() { return JuegoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Entidades_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Entidades/usuario */ "./src/app/Entidades/usuario.ts");



let JuegoComponent = class JuegoComponent {
    constructor() {
        this.usuario = new src_app_Entidades_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.variable = '';
        this.variable2 = '';
    }
    ngOnInit() {
        this.variable = "facundo";
        this.variable2 = "Ezequiel";
        console.log(this.variable);
    }
    Aceptar() {
        /**console.log(this.usuario.nombre);
        console.log(this.usuario.apellido);**/
        console.log(this.usuario);
    }
};
JuegoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-juego',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./juego.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Vistas/juego/juego.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./juego.component.css */ "./src/app/Vistas/juego/juego.component.css")).default]
    })
], JuegoComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Componentes_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Componentes/error/error.component */ "./src/app/Componentes/error/error.component.ts");
/* harmony import */ var _Componentes_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Componentes/home/home.component */ "./src/app/Componentes/home/home.component.ts");
/* harmony import */ var _Componentes_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Componentes/login/login.component */ "./src/app/Componentes/login/login.component.ts");
/* harmony import */ var _Componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Componentes/quien-soy/quien-soy.component */ "./src/app/Componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _Vistas_juego_juego_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Vistas/juego/juego.component */ "./src/app/Vistas/juego/juego.component.ts");








const routes = [
    { path: 'juego', component: _Vistas_juego_juego_component__WEBPACK_IMPORTED_MODULE_7__["JuegoComponent"] },
    { path: 'quienSoy', component: _Componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_6__["QuienSoyComponent"] },
    { path: 'login', component: _Componentes_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '', component: _Componentes_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    //para cualquier ruta ingresa a este path
    { path: '**', component: _Componentes_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] } //siempre tiene que ir ultimo
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'salaDeJuegos';
    }
    ngOnInit() {
        //localStorage.setItem("numero1","Facu");
    }
    calcular() {
        this.resultadoSuma = this.edadUno + this.edadDos;
        this.resultadoProm = this.resultadoSuma / 2;
        console.log(this.edadUno, this.edadDos, this.resultadoProm, this.resultadoSuma);
    }
    limpiar() {
        this.edadUno = null;
        this.edadDos = null;
        this.resultadoProm = null;
        this.resultadoSuma = null;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Vistas_juego_juego_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vistas/juego/juego.component */ "./src/app/Vistas/juego/juego.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Componentes/login/login.component */ "./src/app/Componentes/login/login.component.ts");
/* harmony import */ var _Componentes_error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Componentes/error/error.component */ "./src/app/Componentes/error/error.component.ts");
/* harmony import */ var _Componentes_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Componentes/home/home.component */ "./src/app/Componentes/home/home.component.ts");
/* harmony import */ var _Componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Componentes/quien-soy/quien-soy.component */ "./src/app/Componentes/quien-soy/quien-soy.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _Vistas_juego_juego_component__WEBPACK_IMPORTED_MODULE_5__["JuegoComponent"],
            _Componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _Componentes_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
            _Componentes_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _Componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_10__["QuienSoyComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nuestra PC\salaDeJuegos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map