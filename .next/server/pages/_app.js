(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Auth.tsx":
/*!*********************************!*\
  !*** ./src/components/Auth.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/jwt */ "./src/lib/jwt.ts");
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/store */ "./src/lib/store.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);







const Auth = ({
  children
}) => {
  const {
    0: initiated,
    1: setInitiated
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const updateUser = (0,_lib_store__WEBPACK_IMPORTED_MODULE_2__.useUserState)(state => state.updateUser);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    (async () => {
      if ((0,_lib_jwt__WEBPACK_IMPORTED_MODULE_1__.isTokenInLocalStorage)()) {
        const jwt = (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_1__.getJwtPayloadFromToken)();

        if (!(0,_lib_jwt__WEBPACK_IMPORTED_MODULE_1__.isJwtExpired)(jwt)) {
          const token = localStorage.getItem('token');
          (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = `Bearer ${token}`;
          await updateUser();
          setInitiated(true);
        } else setInitiated(true);
      } else setInitiated(true);
    })();
  }, [updateUser]);
  return initiated ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: children
  }, void 0, false) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./src/lib/constants.ts":
/*!******************************!*\
  !*** ./src/lib/constants.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRIVACY_POLICY_URI": function() { return /* binding */ PRIVACY_POLICY_URI; },
/* harmony export */   "TERMS_OF_SERVICE_URI": function() { return /* binding */ TERMS_OF_SERVICE_URI; },
/* harmony export */   "BACKEND_URI": function() { return /* binding */ BACKEND_URI; },
/* harmony export */   "GOOGLE_CLIENT_ID": function() { return /* binding */ GOOGLE_CLIENT_ID; }
/* harmony export */ });
const PRIVACY_POLICY_URI = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const TERMS_OF_SERVICE_URI = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const BACKEND_URI = "http://localhost:8080/api";
const GOOGLE_CLIENT_ID = "598590342870-o55o6agktuu61n3dlgamu0d4lju0fdk2.apps.googleusercontent.com";
if (!BACKEND_URI) throw new Error('BACKEND_URI env is undefined');
if (!GOOGLE_CLIENT_ID) throw new Error('GOOGLE_CLIENT_ID env is undefined');

/***/ }),

/***/ "./src/lib/fetchApi.ts":
/*!*****************************!*\
  !*** ./src/lib/fetchApi.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUser": function() { return /* binding */ fetchUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/lib/constants.ts");
/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redirect */ "./src/lib/redirect.ts");



async function fetchUser() {
  try {
    const {
      data: user
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_constants__WEBPACK_IMPORTED_MODULE_1__.BACKEND_URI}/users`);
    return user;
  } catch (error) {
    (0,_redirect__WEBPACK_IMPORTED_MODULE_2__.redirectToError)("function fetchUser - can't fetch user data");
  }
}

/***/ }),

/***/ "./src/lib/jwt.ts":
/*!************************!*\
  !*** ./src/lib/jwt.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isJwtExpired": function() { return /* binding */ isJwtExpired; },
/* harmony export */   "setTokenInLocalStorage": function() { return /* binding */ setTokenInLocalStorage; },
/* harmony export */   "isTokenInLocalStorage": function() { return /* binding */ isTokenInLocalStorage; },
/* harmony export */   "getJwtPayloadFromToken": function() { return /* binding */ getJwtPayloadFromToken; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/lib/constants.ts");
/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect */ "./src/lib/redirect.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/lib/store.ts");





function isJwtExpired(jwt) {
  const now = Date.now().valueOf() / 1000;

  if (typeof jwt.exp !== 'undefined' && jwt.exp < now) {
    return true;
  }

  return false;
}
async function setTokenInLocalStorage(googleTokenId) {
  try {
    const {
      data: token
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_constants__WEBPACK_IMPORTED_MODULE_2__.BACKEND_URI}/auth/google`, {
      tokenId: googleTokenId
    });
    const jwtPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
    console.log(jwtPayload);
    (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.Authorization) = `Bearer ${token}`;
    localStorage.setItem('token', token);
    await _store__WEBPACK_IMPORTED_MODULE_4__.useUserState.getState().getUser();
  } catch (error) {
    console.log(error);
    (0,_redirect__WEBPACK_IMPORTED_MODULE_3__.redirectToError)('setTokenInLocalStorage error');
  }
}
function isTokenInLocalStorage() {
  const token = localStorage.getItem('token');
  if (token) return true;
  return false;
}
function getJwtPayloadFromToken() {
  const token = localStorage.getItem('token');

  if (token) {
    const jwtPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
    return jwtPayload;
  }

  return undefined;
}

/***/ }),

/***/ "./src/lib/redirect.ts":
/*!*****************************!*\
  !*** ./src/lib/redirect.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redirectToError": function() { return /* binding */ redirectToError; },
/* harmony export */   "redirectToLogin": function() { return /* binding */ redirectToLogin; }
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

function redirectToError(text) {
  next_router__WEBPACK_IMPORTED_MODULE_0___default().push(`error?text=${text}`);
}
function redirectToLogin() {
  next_router__WEBPACK_IMPORTED_MODULE_0___default().push('login');
}

/***/ }),

/***/ "./src/lib/store.ts":
/*!**************************!*\
  !*** ./src/lib/store.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAuthStore": function() { return /* binding */ useAuthStore; },
/* harmony export */   "useUserState": function() { return /* binding */ useUserState; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ "zustand");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/lib/constants.ts");
/* harmony import */ var _fetchApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchApi */ "./src/lib/fetchApi.ts");




const useAuthStore = zustand__WEBPACK_IMPORTED_MODULE_1___default()(set => ({
  auth: {
    loading: false
  },
  setLoading: loading => set({
    auth: {
      loading: loading
    }
  })
}));
const useUserState = zustand__WEBPACK_IMPORTED_MODULE_1___default()(set => ({
  user: undefined,
  getUser: async () => {
    const {
      data: user
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_constants__WEBPACK_IMPORTED_MODULE_2__.BACKEND_URI}/users`);
    set({
      user: user
    });
  },
  updateUser: async () => {
    const user = await (0,_fetchApi__WEBPACK_IMPORTED_MODULE_3__.fetchUser)();
    set({
      user: user
    });
  },
  deleteUser: () => {
    set({
      user: undefined
    });
  }
}));

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Auth */ "./src/components/Auth.tsx");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\Octavian\\Desktop\\Dev\\calendar-frontend-typescript\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on('routeChangeStart', () => {
    nprogress__WEBPACK_IMPORTED_MODULE_7___default().start();
  });
  next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_7___default().done());
  next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_7___default().done());
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "PlanITLY"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
        integrity: "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",
        crossOrigin: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Auth__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.CssBaseline, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__.StylesProvider, {
        injectFirst: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("jwt-decode");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9zcmMvY29tcG9uZW50cy9BdXRoLnRzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9zcmMvbGliL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9uZXh0anMvLi9zcmMvbGliL2ZldGNoQXBpLnRzIiwid2VicGFjazovL25leHRqcy8uL3NyYy9saWIvand0LnRzIiwid2VicGFjazovL25leHRqcy8uL3NyYy9saWIvcmVkaXJlY3QudHMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vc3JjL2xpYi9zdG9yZS50cyIsIndlYnBhY2s6Ly9uZXh0anMvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInp1c3RhbmRcIiJdLCJuYW1lcyI6WyJBdXRoIiwiY2hpbGRyZW4iLCJpbml0aWF0ZWQiLCJzZXRJbml0aWF0ZWQiLCJ1c2VTdGF0ZSIsInVwZGF0ZVVzZXIiLCJ1c2VVc2VyU3RhdGUiLCJzdGF0ZSIsInVzZUVmZmVjdCIsImlzVG9rZW5JbkxvY2FsU3RvcmFnZSIsImp3dCIsImdldEp3dFBheWxvYWRGcm9tVG9rZW4iLCJpc0p3dEV4cGlyZWQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJheGlvcyIsIlBSSVZBQ1lfUE9MSUNZX1VSSSIsIlRFUk1TX09GX1NFUlZJQ0VfVVJJIiwiQkFDS0VORF9VUkkiLCJwcm9jZXNzIiwiR09PR0xFX0NMSUVOVF9JRCIsIkVycm9yIiwiZmV0Y2hVc2VyIiwiZGF0YSIsInVzZXIiLCJlcnJvciIsInJlZGlyZWN0VG9FcnJvciIsIm5vdyIsIkRhdGUiLCJ2YWx1ZU9mIiwiZXhwIiwic2V0VG9rZW5JbkxvY2FsU3RvcmFnZSIsImdvb2dsZVRva2VuSWQiLCJ0b2tlbklkIiwiand0UGF5bG9hZCIsImp3dERlY29kZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiZ2V0VXNlciIsInVuZGVmaW5lZCIsInRleHQiLCJyb3V0ZXIiLCJyZWRpcmVjdFRvTG9naW4iLCJ1c2VBdXRoU3RvcmUiLCJjcmVhdGUiLCJzZXQiLCJhdXRoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkZWxldGVVc2VyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJucHJvZ3Jlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBS0E7QUFDQTtBQUNBOztBQU1BLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUE2QztBQUN4RCxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUVBLFFBQU1DLFVBQVUsR0FBR0Msd0RBQVksQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNGLFVBQWhCLENBQS9CO0FBRUFHLGtEQUFTLENBQUMsTUFBTTtBQUNkLEtBQUMsWUFBWTtBQUNYLFVBQUlDLCtEQUFxQixFQUF6QixFQUE2QjtBQUMzQixjQUFNQyxHQUFHLEdBQUdDLGdFQUFzQixFQUFsQzs7QUFDQSxZQUFJLENBQUNDLHNEQUFZLENB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REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBLGtCQURGO0FBeUJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0QsK0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKd3RQYXlsb2FkIGZyb20gJ0AvaW50ZXJmYWNlcy9qd3RQYXlsb2FkJztcbmltcG9ydCB7XG4gIGdldEp3dFBheWxvYWRGcm9tVG9rZW4sXG4gIGlzSnd0RXhwaXJlZCxcbiAgaXNUb2tlbkluTG9jYWxTdG9yYWdlLFxufSBmcm9tICdAL2xpYi9qd3QnO1xuaW1wb3J0IHsgdXNlVXNlclN0YXRlIH0gZnJvbSAnQC9saWIvc3RvcmUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W107XG59XG5cbmNvbnN0IEF1dGggPSAoeyBjaGlsZHJlbiB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IFtpbml0aWF0ZWQsIHNldEluaXRpYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdXBkYXRlVXNlciA9IHVzZVVzZXJTdGF0ZShzdGF0ZSA9PiBzdGF0ZS51cGRhdGVVc2VyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoaXNUb2tlbkluTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgICAgY29uc3Qgand0ID0gZ2V0Snd0UGF5bG9hZEZyb21Ub2tlbigpIGFzIEp3dFBheWxvYWQ7XG4gICAgICAgIGlmICghaXNKd3RFeHBpcmVkKGp3dCkpIHtcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIGFzIHN0cmluZztcblxuICAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dG9rZW59YDtcblxuICAgICAgICAgIGF3YWl0IHVwZGF0ZVVzZXIoKTtcbiAgICAgICAgICBzZXRJbml0aWF0ZWQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBzZXRJbml0aWF0ZWQodHJ1ZSk7XG4gICAgICB9IGVsc2Ugc2V0SW5pdGlhdGVkKHRydWUpO1xuICAgIH0pKCk7XG4gIH0sIFt1cGRhdGVVc2VyXSk7XG5cbiAgcmV0dXJuIGluaXRpYXRlZCA/IDw+e2NoaWxkcmVufTwvPiA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoO1xuIiwiZXhwb3J0IGNvbnN0IFBSSVZBQ1lfUE9MSUNZX1VSSSA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRJztcbmV4cG9ydCBjb25zdCBURVJNU19PRl9TRVJWSUNFX1VSSSA9XG4gICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRJztcblxuZXhwb3J0IGNvbnN0IEJBQ0tFTkRfVVJJID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkkgYXMgc3RyaW5nO1xuZXhwb3J0IGNvbnN0IEdPT0dMRV9DTElFTlRfSUQgPSBwcm9jZXNzLmVudlxuICAuTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVF9JRCBhcyBzdHJpbmc7XG5cbmlmICghQkFDS0VORF9VUkkpIHRocm93IG5ldyBFcnJvcignQkFDS0VORF9VUkkgZW52IGlzIHVuZGVmaW5lZCcpO1xuaWYgKCFHT09HTEVfQ0xJRU5UX0lEKSB0aHJvdyBuZXcgRXJyb3IoJ0dPT0dMRV9DTElFTlRfSUQgZW52IGlzIHVuZGVmaW5lZCcpO1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnQC9pbnRlcmZhY2VzL3VzZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEJBQ0tFTkRfVVJJIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUb0Vycm9yIH0gZnJvbSAnLi9yZWRpcmVjdCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXIoKTogUHJvbWlzZTxVc2VyIHwgdW5kZWZpbmVkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhOiB1c2VyIH0gPSBhd2FpdCBheGlvcy5nZXQ8VXNlcj4oYCR7QkFDS0VORF9VUkl9L3VzZXJzYCk7XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWRpcmVjdFRvRXJyb3IoXCJmdW5jdGlvbiBmZXRjaFVzZXIgLSBjYW4ndCBmZXRjaCB1c2VyIGRhdGFcIik7XG4gIH1cbn1cbiIsImltcG9ydCBKd3RQYXlsb2FkIGZyb20gJ0AvaW50ZXJmYWNlcy9qd3RQYXlsb2FkJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IHsgQkFDS0VORF9VUkkgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvRXJyb3IgfSBmcm9tICcuL3JlZGlyZWN0JztcbmltcG9ydCB7IHVzZVVzZXJTdGF0ZSB9IGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNKd3RFeHBpcmVkKGp3dDogSnd0UGF5bG9hZCk6IGJvb2xlYW4ge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpLnZhbHVlT2YoKSAvIDEwMDA7XG5cbiAgaWYgKHR5cGVvZiBqd3QuZXhwICE9PSAndW5kZWZpbmVkJyAmJiBqd3QuZXhwIDwgbm93KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRUb2tlbkluTG9jYWxTdG9yYWdlKFxuICBnb29nbGVUb2tlbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGE6IHRva2VuIH0gPSBhd2FpdCBheGlvcy5wb3N0PHN0cmluZz4oXG4gICAgICBgJHtCQUNLRU5EX1VSSX0vYXV0aC9nb29nbGVgLFxuICAgICAgeyB0b2tlbklkOiBnb29nbGVUb2tlbklkIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGp3dFBheWxvYWQgPSBqd3REZWNvZGU8Snd0UGF5bG9hZD4odG9rZW4pO1xuXG4gICAgY29uc29sZS5sb2coand0UGF5bG9hZCk7XG5cbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbiBhcyBzdHJpbmcpO1xuXG4gICAgYXdhaXQgdXNlVXNlclN0YXRlLmdldFN0YXRlKCkuZ2V0VXNlcigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgIHJlZGlyZWN0VG9FcnJvcignc2V0VG9rZW5JbkxvY2FsU3RvcmFnZSBlcnJvcicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Rva2VuSW5Mb2NhbFN0b3JhZ2UoKTogYm9vbGVhbiB7XG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbiAgaWYgKHRva2VuKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRKd3RQYXlsb2FkRnJvbVRva2VuKCk6IEp3dFBheWxvYWQgfCB1bmRlZmluZWQge1xuICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXG4gIGlmICh0b2tlbikge1xuICAgIGNvbnN0IGp3dFBheWxvYWQgPSBqd3REZWNvZGU8Snd0UGF5bG9hZD4odG9rZW4pO1xuXG4gICAgcmV0dXJuIGp3dFBheWxvYWQ7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFRvRXJyb3IodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gIHJvdXRlci5wdXNoKGBlcnJvcj90ZXh0PSR7dGV4dH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0VG9Mb2dpbigpOiB2b2lkIHtcbiAgcm91dGVyLnB1c2goJ2xvZ2luJyk7XG59XG4iLCJpbXBvcnQgVXNlciBmcm9tICdAL2ludGVyZmFjZXMvdXNlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNyZWF0ZSBmcm9tICd6dXN0YW5kJztcbmltcG9ydCB7IEJBQ0tFTkRfVVJJIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZmV0Y2hVc2VyIH0gZnJvbSAnLi9mZXRjaEFwaSc7XG5cbnR5cGUgQXV0aFN0YXRlID0ge1xuICBhdXRoOiB7XG4gICAgbG9hZGluZzogYm9vbGVhbjtcbiAgfTtcbiAgc2V0TG9hZGluZzogKGxvYWRpbmc6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aFN0b3JlID0gY3JlYXRlPEF1dGhTdGF0ZT4oc2V0ID0+ICh7XG4gIGF1dGg6IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfSxcbiAgc2V0TG9hZGluZzogbG9hZGluZyA9PlxuICAgIHNldCh7XG4gICAgICBhdXRoOiB7XG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICB9LFxuICAgIH0pLFxufSkpO1xuXG50eXBlIFVzZXJTdGF0ZSA9IHtcbiAgdXNlcjogVXNlciB8IHVuZGVmaW5lZDtcbiAgZ2V0VXNlcjogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgdXBkYXRlVXNlcjogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgZGVsZXRlVXNlcjogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVc2VyU3RhdGUgPSBjcmVhdGU8VXNlclN0YXRlPihzZXQgPT4gKHtcbiAgdXNlcjogdW5kZWZpbmVkLFxuICBnZXRVc2VyOiBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhOiB1c2VyIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7QkFDS0VORF9VUkl9L3VzZXJzYCk7XG4gICAgc2V0KHsgdXNlcjogdXNlciB9KTtcbiAgfSxcbiAgdXBkYXRlVXNlcjogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSAoYXdhaXQgZmV0Y2hVc2VyKCkpIGFzIFVzZXI7XG4gICAgc2V0KHsgdXNlcjogdXNlciB9KTtcbiAgfSxcbiAgZGVsZXRlVXNlcjogKCkgPT4ge1xuICAgIHNldCh7IHVzZXI6IHVuZGVmaW5lZCB9KTtcbiAgfSxcbn0pKTtcbiIsImltcG9ydCBBdXRoIGZyb20gJ0AvY29tcG9uZW50cy9BdXRoJztcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgeyBDc3NCYXNlbGluZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IFN0eWxlc1Byb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBucHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcbmltcG9ydCAnbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQge1xuICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4ge1xuICAgIG5wcm9ncmVzcy5zdGFydCgpO1xuICB9KTtcbiAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IG5wcm9ncmVzcy5kb25lKCkpO1xuICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gbnByb2dyZXNzLmRvbmUoKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QbGFuSVRMWTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjcuMS9kaXN0L2xlYWZsZXQuY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGE1MTIteG9kWkJOVEM1bjE3WHQyYXRUUHVFMUh4alZNU3ZMVlc5b2NxVUtMc0NDNUNYZGJxQ21ibEFzaE9NQVM2L2tlcXEvc01aTVoxOXNjUjRQc1pDaFNSN0E9PVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8QXV0aD5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxTdHlsZXNQcm92aWRlciBpbmplY3RGaXJzdD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvU3R5bGVzUHJvdmlkZXI+XG4gICAgICA8L0F1dGg+XG4gICAgPC8+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImp3dC1kZWNvZGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwienVzdGFuZFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==