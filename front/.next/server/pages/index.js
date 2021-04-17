module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"13":"ad64b8e559c44071d1a4","14":"558369090906f3d0dd7a"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0THn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Counter; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/assets/icons/PlusMinus.tsx


 // SVG plus icon

const Plus = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 12",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Group_3351",
      "data-name": "Group 3351",
      transform: "translate(-1367 -190)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
        "data-name": "Rectangle 520",
        width: "12",
        height: "2",
        rx: "1",
        transform: "translate(1367 195)",
        fill: color
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
        "data-name": "Rectangle 521",
        width: "12",
        height: "2",
        rx: "1",
        transform: "translate(1374 190) rotate(90)",
        fill: color
      })]
    })
  });
}; // SVG minus icon

const Minus = ({
  color = 'currentColor',
  width = '12px',
  height = '2px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 2",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
      "data-name": "Rectangle 522",
      width: "12",
      height: "2",
      rx: "1",
      fill: color
    })
  });
};
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./src/components/counter/counter.style.tsx



const CounterBox = external_styled_components_default.a.div.withConfig({
  displayName: "counterstyle__CounterBox",
  componentId: "sc-1gnzxso-0"
})(css_default()({
  display: 'flex',
  backgroundColor: 'primary.regular',
  color: 'white',
  fontSize: 'base',
  fontWeight: 'bold'
}), {
  borderRadius: 200,
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  flexShrink: 0,
  '&:focus': {
    outline: 'none'
  }
}, Object(external_styled_system_["variant"])({
  variants: {
    horizontal: {
      width: 104,
      height: 36
    },
    vertical: {
      width: 30,
      height: 90,
      flexDirection: 'column-reverse'
    },
    lightHorizontal: {
      width: 104,
      height: 36,
      backgroundColor: 'gray.200',
      color: 'text.bold'
    },
    lightVertical: {
      width: 30,
      height: 90,
      flexDirection: 'column-reverse',
      backgroundColor: 'gray.200',
      color: 'text.bold'
    },
    altHorizontal: {
      width: 104,
      height: 36,
      borderRadius: '6px'
    },
    altVertical: {
      width: 30,
      height: 90,
      borderRadius: '6px'
    },
    full: {
      width: '100%',
      height: 36,
      borderRadius: '6px'
    }
  }
}));
const CounterButton = external_styled_components_default.a.button.withConfig({
  displayName: "counterstyle__CounterButton",
  componentId: "sc-1gnzxso-1"
})(css_default()({
  color: 'popUpColor' //signs color

}), {
  border: 'none',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: 10,
  cursor: 'pointer',
  '&:hover, &:focus': {
    outline: 'none'
  }
}, Object(external_styled_system_["variant"])({
  variants: {
    lightHorizontal: {
      color: '#fff'
    },
    lightVertical: {
      color: 'popUpColor'
    }
  }
}));
const CounterValue = external_styled_components_default.a.span.withConfig({
  displayName: "counterstyle__CounterValue",
  componentId: "sc-1gnzxso-2"
})(css_default()({
  color: 'popUpColor' //counter txt color

}), {
  pointerEvents: 'none'
});
CounterValue.displayName = 'CounterValue';
CounterButton.displayName = 'CounterButton';
CounterBox.displayName = 'CounterBox';
CounterBox.defaultProps = {
  variant: 'horizontal'
};
// CONCATENATED MODULE: ./src/components/counter/counter.tsx





const Counter = ({
  onDecrement,
  onIncrement,
  value,
  variant,
  className
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CounterBox, {
    variant: variant,
    className: className,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CounterButton, {
      onClick: onDecrement,
      variant: variant,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Minus, {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CounterValue, {
      children: value
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CounterButton, {
      onClick: onIncrement,
      variant: variant,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Plus, {})
    })]
  });
};

/***/ }),

/***/ "17+d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacialCare; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const FacialCare = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "18.814",
    height: "24",
    viewBox: "0 0 18.814 24"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
      id: "Makup",
      transform: "translate(-507.818 -485.385)",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_17426",
        "data-name": "Path 17426",
        d: "M514.58,502.867a.721.721,0,0,0-.448-.579.411.411,0,0,0-.125-.041v-4.5a.591.591,0,0,0-.29-.5V494.9a6.977,6.977,0,0,0-.675-2.868l0-.009,0-.005a3.2,3.2,0,0,0-.272-.449,1.188,1.188,0,0,0-1.347-.362,2.261,2.261,0,0,0-1.492,1.22l-.022.045a6.315,6.315,0,0,0-.338.874c0,.007-.006.012-.008.019s0,.01,0,.015a7.074,7.074,0,0,0-.292,2.044v1.707c-.336.144-.509.35-.509.613v4.486c-.354.155-.545.364-.57.622,0,.006,0,.011,0,.017a71.956,71.956,0,0,0-.289,10.391c0,.787,1.5,1.38,3.49,1.38s3.49-.593,3.489-1.355a72.1,72.1,0,0,0-.288-10.417ZM512.8,494a5.335,5.335,0,0,1,.085.9v2.779a6.961,6.961,0,0,1-1.5.142,7.622,7.622,0,0,1-1.284-.1v-2.3a6.715,6.715,0,0,1,.043-.751,1.974,1.974,0,0,0,.891.2A2.569,2.569,0,0,0,512.8,494Zm-3.209,4.464a8.613,8.613,0,0,0,3.585,0v4.508a10.2,10.2,0,0,1-3.585,0Zm1.087-5.676a1.447,1.447,0,0,1,.938-.773c.172-.042.394-.067.479.048a2.406,2.406,0,0,1,.206.344v0a.832.832,0,0,1-.006.876,1.743,1.743,0,0,1-1.264.749.87.87,0,0,1-.655-.213c-.017-.023-.055-.077-.019-.21a5.462,5.462,0,0,1,.3-.781Zm3.364,20.4a6.081,6.081,0,0,1-5.316,0,71.567,71.567,0,0,1,.219-9.528,10,10,0,0,0,4.877,0A71.829,71.829,0,0,1,514.038,513.194Z",
        transform: "translate(0 -5.256)",
        fill: "currentColor"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_17427",
        "data-name": "Path 17427",
        d: "M618.005,487.378c-.617-1.323-2.2-1.993-4.7-1.993s-4.08.671-4.7,1.994c-1.3,2.781,2.328,7.41,2.923,8.139l-.194,12.539c0,.514.524,1.279,1.969,1.279s1.969-.765,1.969-1.286l-.195-12.532C615.675,494.791,619.3,490.161,618.005,487.378Zm-5.671,10.394.026-1.66a3.555,3.555,0,0,0,.65.1.415.415,0,0,0,.088.01c.013,0,.024,0,.037,0,.058,0,.116,0,.174,0a3.918,3.918,0,0,0,.949-.107l.026,1.66a2.931,2.931,0,0,1-1.949,0Zm-2.966-10.041c.468-1,1.794-1.511,3.94-1.511s3.472.508,3.94,1.511c.836,1.792-1.112,5.009-2.374,6.7a6.637,6.637,0,0,0,.23-1.731.417.417,0,0,0-.417-.417h0a.418.418,0,0,0-.417.417c0,.657-.2,2.461-1.017,2.665a2.056,2.056,0,0,1-.49-1.175.417.417,0,0,0-.826.123,4.453,4.453,0,0,0,.112.518C610.835,493.3,608.46,489.678,609.368,487.731Zm3.94,20.771c-.9,0-1.126-.359-1.134-.438l.146-9.408a4.2,4.2,0,0,0,1.976,0l.146,9.4C614.435,508.143,614.208,508.5,613.308,508.5Z",
        transform: "translate(-91.651)",
        fill: "currentColor"
      })]
    })
  }));
};

/***/ }),

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "2nMb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseIcon; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const CloseIcon = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "10.003",
    height: "10",
    viewBox: "0 0 10.003 10"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      "data-name": "_ionicons_svg_ios-close (5)",
      d: "M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z",
      transform: "translate(-160.5 -160.55)",
      fill: "currentColor"
    })
  }));
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QeBL");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "57Ed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getConfig; });
async function getConfig(code) {
  return await fetch(`${"https://whatsappneed.com/api/v1"}/qrcode/${code}`).then(res => res.json());
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6mxo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "box__Box",
  componentId: "sc-1h894p0-0"
})({
  boxSizing: 'border-box',
  minWidth: 0,
  margin: 0
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"]));

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "9OV9":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/grocery-banner-img-two-02f262ef03102cd4eaeea8ef517e4a16.jpg";

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Ay7f":
/***/ (function(module, exports) {

module.exports = require("react-spring-modal");

/***/ }),

/***/ "B68Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StyledButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-6gren8-0"
})(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_4___default()({
  px: '15px',
  py: 0,
  fontSize: ['base'],
  fontWeight: 'bold',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  color: props.disabled ? 'text.light' : 'popUpColor',
  bg: props.disabled ? 'btnCheckout' : 'primary.regular',
  transition: 'all 0.3s ease',
  borderRadius: 'base',
  '&:hover': {
    color: props.disabled ? 'text.light' : 'body.text',
    bg: props.disabled ? 'btnCheckout' : 'primary.hover'
  }
}), {
  appearance: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  textAlign: 'center',
  height: '38px',
  textDecoration: 'none',
  fontFamily: 'inherit',
  border: 0,
  '&:focus': {
    outline: 'none'
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_5__["variant"])({
  variants: {
    outlined: {
      color: 'primary.regular',
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.500',
      '&:hover': {
        borderColor: 'primary.regular',
        color: 'primary.regular',
        bg: 'white'
      }
    },
    primary: {
      color: 'white',
      bg: 'primary.regular',
      '&:hover': {
        bg: 'primary.hover'
      }
    },
    secondary: {
      color: 'primary.regular',
      bg: 'white',
      border: '2px solid',
      borderColor: 'gray.500',
      '&:hover': {
        color: 'white',
        bg: 'primary.regular',
        borderColor: 'primary.regular'
      }
    },
    text: {
      color: 'primary.regular',
      bg: 'transparent',
      '&:hover': {
        bg: 'transparent',
        color: 'primary.hover'
      }
    },
    select: {
      width: 26,
      height: 26,
      lineHeight: 1,
      flexShrink: 0,
      border: '1px solid',
      borderColor: 'text.regular',
      borderRadius: 13,
      padding: 0,
      color: 'text.bold',
      bg: 'transparent',
      '&.selected': {
        bg: 'primary.regular',
        color: 'white',
        borderColor: 'primary.regular'
      },
      '&:hover:not(.selected)': {
        bg: 'transparent',
        color: 'primary.regular',
        borderColor: 'primary.regular'
      }
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_5__["variant"])({
  prop: 'size',
  variants: {
    big: {
      height: '48px',
      px: 30
    },
    small: {
      height: '30px',
      fontSize: 14
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_5__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_5__["border"], styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], styled_system__WEBPACK_IMPORTED_MODULE_5__["layout"]));
const rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "button__Spinner",
  componentId: "sc-6gren8-1"
})(["width:18px;height:18px;margin-left:10px;border:3px solid #ffffff;border-top:3px solid ", ";border-radius:50%;transition-property:transform;animation-name:", ";animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear;"], props => props.color ? props.color : Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('primary.regular', '#009E7F'), rotate); // const Spinner = styled.div((props) =>
//   css({
//     width: 18,
//     height: 18,
//     marginLeft: 10,
//     border: '3px solid white',
//     borderTop: `3px solid ${props.color ? props.color : 'primary.regular'}`,
//     borderRadius: '50%',
//     transitionProperty: 'transform',
//     animationName: `${rotate}`,
//     animationDuration: '1.2s',
//     animationIterationCount: 'infinite',
//     animationTimingFunction: 'linear',
//   })
// );

const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((_ref, ref) => {
  let {
    children,
    disabled,
    loading = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "loading"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(StyledButton, _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    disabled: disabled,
    children: [children, loading && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Spinner, {})]
  }));
});

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "ExBD":
/***/ (function(module, exports) {

module.exports = require("@styled-system/css");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "GnvZ":
/***/ (function(module, exports) {

module.exports = require("lodash/startCase");

/***/ }),

/***/ "H8eV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEO; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);




const SEO = ({
  title,
  description,
  canonical,
  css,
  js,
  image
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
    children: title
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "viewport",
    content: "width=device-width,maximum-scale=1,initial-scale=1"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "og:title",
    property: "og:title",
    content: title
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "og:description",
    property: "og:description",
    content: description
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:site_name",
    content: "Proper Noun"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:url",
    content: `${canonical}`
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:description",
    content: description
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:site",
    content: "@propernounco"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:creator",
    content: "@propernounco"
  }), css && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
    rel: "stylesheet",
    href: `${css}`
  }), image ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:image",
    content: `${image}`
  }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:image",
    content: "https://www.propernoun.co/static/images/proper-noun-social.png"
  }), image && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:image",
    content: `${image}`
  }), canonical && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
    rel: "canonical",
    href: `${canonical}`
  }), js && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
    type: "text/javascript",
    src: `${js}`
  })]
});

/***/ }),

/***/ "KVly":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ isLocale; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ isRTL; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getCorrectTranslation; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ isAlternativeLanguage; });

// UNUSED EXPORTS: getInitialLocale

// CONCATENATED MODULE: ./src/contexts/language/language.config.ts
const defaultLocale = 'en';
const locales = ['en', 'ar', 'es', 'de', 'zh', 'he', 'tr', 'fr'];
const rtlLocales = ['ar', 'he']; // need to customize later

const languageNames = {
  en: 'English',
  fr: 'français',
  pl: 'polski'
};
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./src/contexts/language/language.utils.ts


function isLocale(tested) {
  return locales.some(locale => locale === tested);
}
function isRTL(tested) {
  return rtlLocales.some(locale => locale === tested);
}
function getInitialLocale(config) {
  var _config$restaurant, _config$restaurant$us;

  // preference from the previous session
  const localSetting = external_js_cookie_default.a.get('locale');

  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  if (config !== null && config !== void 0 && (_config$restaurant = config.restaurant) !== null && _config$restaurant !== void 0 && (_config$restaurant$us = _config$restaurant.userConfig) !== null && _config$restaurant$us !== void 0 && _config$restaurant$us.main_lang) {
    return config === null || config === void 0 ? void 0 : config.restaurant.userConfig.main_lang;
  } // the language setting of the browser
  // const [browserSetting] = navigator.language.split('-');
  // if (isLocale(browserSetting)) {
  //   return browserSetting;
  // }


  return defaultLocale;
}
function getCorrectTranslation(config, object, field) {
  var _config$restaurant2, _config$restaurant2$u;

  let currentLang = getInitialLocale(config);

  if (currentLang === (config === null || config === void 0 ? void 0 : (_config$restaurant2 = config.restaurant) === null || _config$restaurant2 === void 0 ? void 0 : (_config$restaurant2$u = _config$restaurant2.userConfig) === null || _config$restaurant2$u === void 0 ? void 0 : _config$restaurant2$u.alt_lang)) {
    return object[`alt${field}`];
  } else {
    return object[`main${field}`];
  }
}
function isAlternativeLanguage(config) {
  var _config$restaurant3, _config$restaurant3$u;

  let currentLang = getInitialLocale(config);
  return currentLang === (config === null || config === void 0 ? void 0 : (_config$restaurant3 = config.restaurant) === null || _config$restaurant3 === void 0 ? void 0 : (_config$restaurant3$u = _config$restaurant3.userConfig) === null || _config$restaurant3$u === void 0 ? void 0 : _config$restaurant3$u.alt_lang);
}

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ GroceryTwoPage; });

// NAMESPACE OBJECT: ./src/assets/icons/category-icons.ts
var category_icons_namespaceObject = {};
__webpack_require__.r(category_icons_namespaceObject);
__webpack_require__.d(category_icons_namespaceObject, "Accessories", function() { return Accessories; });
__webpack_require__.d(category_icons_namespaceObject, "FruitsVegetable", function() { return FruitsVegetable["a" /* FruitsVegetable */]; });
__webpack_require__.d(category_icons_namespaceObject, "MeatFish", function() { return MeatFish; });
__webpack_require__.d(category_icons_namespaceObject, "Purse", function() { return Purse; });
__webpack_require__.d(category_icons_namespaceObject, "HandBags", function() { return HandBags; });
__webpack_require__.d(category_icons_namespaceObject, "ShoulderBags", function() { return ShoulderBags; });
__webpack_require__.d(category_icons_namespaceObject, "Wallet", function() { return Wallet; });
__webpack_require__.d(category_icons_namespaceObject, "LaptopBags", function() { return LaptopBags; });
__webpack_require__.d(category_icons_namespaceObject, "WomenDress", function() { return WomenDress; });
__webpack_require__.d(category_icons_namespaceObject, "OuterWear", function() { return OuterWear; });
__webpack_require__.d(category_icons_namespaceObject, "Pants", function() { return Pants; });
__webpack_require__.d(category_icons_namespaceObject, "Tops", function() { return Tops; });
__webpack_require__.d(category_icons_namespaceObject, "Skirts", function() { return Skirts; });
__webpack_require__.d(category_icons_namespaceObject, "Shirts", function() { return Shirts; });
__webpack_require__.d(category_icons_namespaceObject, "Face", function() { return Face; });
__webpack_require__.d(category_icons_namespaceObject, "Eyes", function() { return Eyes; });
__webpack_require__.d(category_icons_namespaceObject, "Lips", function() { return Lips; });
__webpack_require__.d(category_icons_namespaceObject, "Snacks", function() { return Snacks; });
__webpack_require__.d(category_icons_namespaceObject, "PetCare", function() { return PetCare; });
__webpack_require__.d(category_icons_namespaceObject, "HomeCleaning", function() { return HomeCleaning; });
__webpack_require__.d(category_icons_namespaceObject, "Dairy", function() { return Dairy; });
__webpack_require__.d(category_icons_namespaceObject, "Cooking", function() { return Cooking; });
__webpack_require__.d(category_icons_namespaceObject, "Breakfast", function() { return Breakfast; });
__webpack_require__.d(category_icons_namespaceObject, "Beverage", function() { return Beverage; });
__webpack_require__.d(category_icons_namespaceObject, "BeautyHealth", function() { return BeautyHealth; });
__webpack_require__.d(category_icons_namespaceObject, "ShavingNeeds", function() { return ShavingNeeds; });
__webpack_require__.d(category_icons_namespaceObject, "OralCare", function() { return OralCare; });
__webpack_require__.d(category_icons_namespaceObject, "FacialCare", function() { return FacialCare["a" /* FacialCare */]; });
__webpack_require__.d(category_icons_namespaceObject, "Deodorant", function() { return Deodorant; });
__webpack_require__.d(category_icons_namespaceObject, "BathOil", function() { return BathOil; });
__webpack_require__.d(category_icons_namespaceObject, "Minus", function() { return Minus; });
__webpack_require__.d(category_icons_namespaceObject, "Chair", function() { return Chair; });
__webpack_require__.d(category_icons_namespaceObject, "Bed", function() { return Bed; });
__webpack_require__.d(category_icons_namespaceObject, "BookShelf", function() { return BookShelf; });
__webpack_require__.d(category_icons_namespaceObject, "DressingTable", function() { return DressingTable; });
__webpack_require__.d(category_icons_namespaceObject, "ReadingTable", function() { return ReadingTable; });
__webpack_require__.d(category_icons_namespaceObject, "Sofa", function() { return Sofa; });
__webpack_require__.d(category_icons_namespaceObject, "CenterTable", function() { return CenterTable; });
__webpack_require__.d(category_icons_namespaceObject, "RelaxChair", function() { return RelaxChair; });
__webpack_require__.d(category_icons_namespaceObject, "Storage", function() { return Storage; });
__webpack_require__.d(category_icons_namespaceObject, "Tools", function() { return Tools; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/product-grid/product-grid-three.tsx
var product_grid_three = __webpack_require__("wpJo");

// EXTERNAL MODULE: ./src/components/product-card/product-card-seven.tsx
var product_card_seven = __webpack_require__("hy7I");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: ./src/components/error-message/error-message.tsx
var error_message = __webpack_require__("quMH");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/components/button/loadmore-button.tsx
var loadmore_button = __webpack_require__("k47W");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/components/box.tsx
var box = __webpack_require__("6mxo");

// EXTERNAL MODULE: ./src/contexts/language/language.utils.ts + 1 modules
var language_utils = __webpack_require__("KVly");

// EXTERNAL MODULE: ./src/data/use-products.ts
var use_products = __webpack_require__("Sy3N");

// CONCATENATED MODULE: ./src/components/product-grid/product-grid.tsx






 // import { useQuery, NetworkStatus } from '@apollo/client';
// import { GET_PRODUCTS } from 'graphql/query/products.query';






 // import { Button } from './button';

const Grid = external_styled_components_default.a.div.withConfig({
  displayName: "product-grid__Grid",
  componentId: "uvfti9-0"
})(css_default()({
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: 'repeat(1, minmax(180px, 1fr))',
  '@media screen and (min-width: 440px)': {
    gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))'
  },
  '@media screen and (min-width: 768px)': {
    gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
    gridGap: '20px'
  },
  '@media screen and (min-width: 991px)': {
    gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
    gridGap: '30px'
  },
  '@media screen and (min-width: 1100px)': {
    gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))'
  },
  '@media screen and (min-width: 1700px)': {
    gridTemplateColumns: 'repeat(4, minmax(240px, 1fr))'
  },
  '@media screen and (min-width: 2200px)': {
    gridTemplateColumns: 'repeat(5, minmax(240px, 1fr))'
  }
}));
const ProductGrid = ({
  style,
  type,
  loadMore = true,
  fetchLimit = 16,
  config
}) => {
  var _config$restaurant;

  const router = Object(router_["useRouter"])();
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    data,
    error
  } = Object(use_products["a" /* default */])({
    type,
    text: router.query.text,
    category: router.query.category,
    offset: 0,
    limit: fetchLimit,
    slug: config === null || config === void 0 ? void 0 : (_config$restaurant = config.restaurant) === null || _config$restaurant === void 0 ? void 0 : _config$restaurant.slug,
    altLang: Object(language_utils["b" /* isAlternativeLanguage */])(config)
  });
  if (error) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(error_message["a" /* default */], {
    message: error.message
  });
  if (!data) return null;

  const handleLoadMore = async () => {
    setLoading(true); // await fetchMore(Number(data.length), fetchLimit);

    setLoading(false);
  }; // const { items, hasMore } = data.products;


  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid, {
      style: style,
      children: data.map((product, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(product_card_seven["a" /* ProductCard */], {
        data: product
      }, product.id))
    }), loadMore && (data === null || data === void 0 ? void 0 : data.hasMore) && /*#__PURE__*/Object(jsx_runtime_["jsx"])(box["a" /* Box */], {
      style: {
        textAlign: 'center'
      },
      mt: '2rem',
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(loadmore_button["a" /* Button */], {
        onClick: handleLoadMore,
        loading: loading,
        variant: "secondary",
        style: {
          fontSize: 14,
          display: 'inline-flex'
        },
        border: "1px solid #f1f1f1",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
          id: "loadMoreButton",
          defaultMessage: "Load More"
        })
      })
    })]
  });
};
// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./src/contexts/config/config.context.tsx
var config_context = __webpack_require__("RjkI");

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./src/components/text.tsx


const Text = external_styled_components_default.a.p.withConfig({
  displayName: "text__Text",
  componentId: "sc-1fm7nr5-0"
})({
  boxSizing: 'border-box',
  minWidth: 0,
  margin: 0
}, Object(external_styled_system_["compose"])(external_styled_system_["space"], external_styled_system_["color"], external_styled_system_["typography"]));
// CONCATENATED MODULE: ./src/assets/icons/Accessories.tsx



const Accessories = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      "data-name": "Group 15",
      fill: color,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 53",
        d: "M17.356 0H.643A.643.643 0 000 .643v10.925a.643.643 0 00.643.643h16.714a.643.643 0 00.643-.643V.643A.644.644 0 0017.356 0zM2.431 11.27a1.306 1.306 0 111.306-1.306 1.306 1.306 0 01-1.306 1.306zm0-3.857a1.305 1.305 0 11.924-.382 1.306 1.306 0 01-.924.382zm0-3.857a1.306 1.306 0 11.925-.384 1.306 1.306 0 01-.925.384zm3.218 7.714a1.307 1.307 0 11.922-.382 1.306 1.306 0 01-.922.382zm0-3.857a1.307 1.307 0 11.922-.381 1.306 1.306 0 01-.922.381zm0-3.857a1.307 1.307 0 11.92-.385 1.306 1.306 0 01-.92.385zm3.218 7.714a1.09 1.09 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm3.218 7.714a1.1 1.1 0 10-.012 0zm-1.306-5.166a.525.525 0 11-.012 0zm1.306-2.551a1.571 1.571 0 10-.012 0zm4.8 7c0 .355-.412.643-.921.643H15.5c-.508 0-.921-.288-.921-.643V1.768c0-.355.412-.643.921-.643h.461c.508 0 .921.288.921.643z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 54",
        d: "M16.348 2.78c-.318-1.052-.434-.893-.476-1.186-.013-.1-.346-.095-.351 0-.017.261-.15.378-.365.888-.236.562-.193 1 0 1.186h-.069v2.52a.274.274 0 00-.085.2v4.2h1.445v-4.2a.273.273 0 00-.085-.2V3.684c.106-.13.143-.393-.014-.904zm-.29 3.134h-.672V3.971h.67z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 55",
        d: "M2.43 1.246a1 1 0 101 1 1 1 0 00-1-1z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 56",
        d: "M12.073 1.246a1 1 0 101 1 1 1 0 00-1-1z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 57",
        d: "M8.859 5.103a1 1 0 101 1 1 1 0 00-1-1z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 58",
        d: "M5.645 8.96a1 1 0 101 1 1 1 0 00-1-1z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 59",
        d: "M12.073 8.96a1 1 0 101 1 1 1 0 00-1-1z"
      })]
    })
  });
};
// EXTERNAL MODULE: ./src/assets/icons/FruitsVegetable.tsx
var FruitsVegetable = __webpack_require__("pQO/");

// CONCATENATED MODULE: ./src/assets/icons/MeatFish.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const MeatFish = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24.003",
    height: "24",
    viewBox: "0 0 24.003 24"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Meat_Fish",
      "data-name": "Meat & Fish",
      transform: "translate(-100.274 -126.786)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17433",
        "data-name": "Path 17433",
        d: "M152.165,147.238c-.186,0-.366-.005-.542-.016a.465.465,0,0,1-.27-.108c-.525-.442-1.049-.911-1.546-1.38-.508-.508-.952-1.036-1.383-1.546a.545.545,0,0,1-.124-.289c-.234-3.811,2.129-10.143,4.769-12.784a9.528,9.528,0,0,1,1.8-1.453.463.463,0,1,1,.5.781,8.639,8.639,0,0,0-1.629,1.318c-2.42,2.42-4.661,8.375-4.515,11.929.4.474.8.944,1.236,1.378.439.414.907.835,1.379,1.236,3.5.153,9.508-2.1,11.919-4.506a8.691,8.691,0,0,0,1.328-1.638.463.463,0,1,1,.781.5,9.625,9.625,0,0,1-1.462,1.8C161.888,144.973,156.01,147.238,152.165,147.238Z",
        transform: "translate(-42.009 -2.453)",
        fill: "currentColor"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17434",
        "data-name": "Path 17434",
        d: "M105.065,249.978a2.457,2.457,0,0,1-1.745-.729,2.547,2.547,0,0,1-.707-1.61,2.454,2.454,0,0,1-2.338-2.483,2.479,2.479,0,0,1,3.513-2.21l2.637-2.663a.464.464,0,0,1,.659.653l-2.889,2.916a.465.465,0,0,1-.592.055,1.547,1.547,0,0,0-2.4,1.257,1.544,1.544,0,0,0,.457,1.114,1.572,1.572,0,0,0,1.365.416.463.463,0,0,1,.535.536,1.592,1.592,0,0,0,.425,1.374,1.54,1.54,0,0,0,2.355-1.963.464.464,0,0,1,.062-.583l2.916-2.888a.463.463,0,1,1,.652.658l-2.668,2.644a2.487,2.487,0,0,1-.491,2.778A2.454,2.454,0,0,1,105.065,249.978Z",
        transform: "translate(0 -99.192)",
        fill: "currentColor"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17435",
        "data-name": "Path 17435",
        d: "M206.374,138.769a5.236,5.236,0,0,1-2-.475A14.609,14.609,0,0,1,200,135.177c-2.193-2.193-3.6-4.707-3.593-6.4a1.862,1.862,0,0,1,1.989-1.987h.018c1.7,0,4.2,1.408,6.385,3.593l0,0c2.629,2.655,4.592,6.308,3.05,7.848A2.011,2.011,0,0,1,206.374,138.769Zm-7.96-11.056H198.4a.948.948,0,0,0-1.067,1.066c-.008,1.439,1.327,3.747,3.322,5.743a13.669,13.669,0,0,0,4.084,2.92c1.138.483,2.054.532,2.455.133.814-.814-.239-3.7-3.054-6.541C202.153,129.045,199.854,127.713,198.414,127.713Z",
        transform: "translate(-84.117 0)",
        fill: "currentColor"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17436",
        "data-name": "Path 17436",
        d: "M216.843,148.223h0c-1.039,0-2.9-1.214-4.749-3.084-1.538-1.518-3.09-3.585-3.079-4.77a.963.963,0,0,1,.283-.715.95.95,0,0,1,.7-.266H210c1.187,0,3.243,1.544,4.76,3.081,1.868,1.845,3.079,3.707,3.082,4.746a.944.944,0,0,1-1,1.008Zm-6.811-7.916a.268.268,0,0,0-.1.017c-.133.33.7,2.069,2.815,4.161,2.27,2.3,3.912,2.933,4.181,2.8.115-.253-.521-1.895-2.816-4.159l0,0C212.174,141.163,210.54,140.306,210.032,140.306Z",
        transform: "translate(-95.146 -11.027)",
        fill: "currentColor"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17437",
        "data-name": "Path 17437",
        d: "M181.251,168.174l-.83-.41a5.223,5.223,0,0,1,.391-.689.464.464,0,0,1,.755.539A4.148,4.148,0,0,0,181.251,168.174Z",
        transform: "translate(-70.129 -35.084)",
        fill: "currentColor"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17438",
        "data-name": "Path 17438",
        d: "M164.789,189.173a.478.478,0,0,1-.095-.01.463.463,0,0,1-.359-.548,18.285,18.285,0,0,1,1.23-3.8.464.464,0,0,1,.845.381,17.358,17.358,0,0,0-1.168,3.611A.463.463,0,0,1,164.789,189.173Z",
        transform: "translate(-56.046 -50.535)",
        fill: "currentColor"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17439",
        "data-name": "Path 17439",
        d: "M239.96,170.8a.463.463,0,0,1-.328-.136l-.382-.382a.463.463,0,0,1,.655-.655l.382.382a.464.464,0,0,1-.328.791Z",
        transform: "translate(-121.487 -37.372)",
        fill: "currentColor"
      })]
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/Purse.tsx



const Purse = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      "data-name": "Group 2",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        "data-name": "Group 1",
        fill: color,
        stroke: "#fff",
        strokeMiterlimit: "10",
        strokeWidth: ".091",
        transform: "translate(-85.169 -7.348)",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 1",
          d: "M98.946 11.381l.217-.061a5.124 5.124 0 00-.6-1.341 11.3 11.3 0 00-1.04-1.279 4.724 4.724 0 00-.93-.679l-.269-.143a3.735 3.735 0 00-.88-.323 5.437 5.437 0 00-1.274-.167l-.317.014a5.3 5.3 0 00-.957.152c-.1.024-.2.061-.3.092a5.009 5.009 0 00-.846.374 4.734 4.734 0 00-.93.679 5.709 5.709 0 00-1.639 2.615l.217.061.217.061a4.7 4.7 0 01.972-1.8 5.106 5.106 0 01.6-.508 4.982 4.982 0 01.874-.521 5.2 5.2 0 011.018-.35 5.315 5.315 0 011.1-.123 5.5 5.5 0 011.1.123 5.2 5.2 0 011.018.35 4.99 4.99 0 01.874.521 5.066 5.066 0 01.585.5 4.7 4.7 0 01.982 1.806z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 2",
          d: "M93.787 22.392a22.149 22.149 0 01-8.561-1.727l3.3-9.285h11.282l3.3 9.285a22.149 22.149 0 01-8.561 1.727z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 3",
          d: "M88.531 11.381l-1.353 3.8a17.645 17.645 0 006.609 1.351h.765a17.643 17.643 0 006.609-1.351l-1.353-3.8z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 4",
          d: "M88.531 11.23l-1.225 3.442a14.059 14.059 0 006.481 1.71h.765a14.059 14.059 0 006.481-1.71l-1.224-3.442z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
          "data-name": "Rectangle 26",
          width: "2.01",
          height: "2.01",
          rx: ".672",
          transform: "rotate(-44.999 66.026 -103.976)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 5",
          d: "M101.162 15.182h0l-.173-.486a14.034 14.034 0 01-6.436 1.687h-.273v.15h.272a17.649 17.649 0 006.61-1.351z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
          "data-name": "Rectangle 27",
          width: "2.01",
          height: "2.01",
          rx: ".672",
          transform: "rotate(-44.999 66.026 -103.976)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
          "data-name": "Rectangle 28",
          width: "1.5",
          height: "1.5",
          rx: ".501",
          transform: "rotate(-44.999 66.206 -104.411)"
        })]
      })
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/HandBags.tsx



const HandBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      "data-name": "Group 11",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        "data-name": "Group 10",
        fill: color,
        stroke: "#fff",
        strokeMiterlimit: "10",
        strokeWidth: ".091",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 45",
          d: "M17.954 7.253v8.585a1.791 1.791 0 01-1.791 1.791H1.836a1.791 1.791 0 01-1.791-1.791V7.253c0-.988 17.909-.988 17.909 0z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Rectangle 36",
          d: "M.102 8.77h17.795v.913H.102z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 46",
          d: "M4.793 7.253C4.976 4.061 7.113.614 9 .614c2.41 0 4.049 3.84 4.207 6.639h.572C13.618 4.168 11.791.044 8.999.044c-1.131 0-2.338.922-3.312 2.529a10.463 10.463 0 00-1.466 4.68z"
        })]
      })
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/ShoulderBags.tsx



const ShoulderBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      "data-name": "Group 3",
      transform: "translate(-100.548 -66.187)",
      fill: color,
      stroke: "#fff",
      strokeMiterlimit: "10",
      strokeWidth: ".076",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 6",
        d: "M105.083 69.531l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.343 1.343 0 01.708-.188h0a.149.149 0 01.141.111z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 7",
        d: "M104.167 69.774l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.342 1.342 0 01.708-.188h0a.149.149 0 01.141.111z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 8",
        d: "M106.5 69.531l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.343 1.343 0 00-.708-.188h0a.149.149 0 00-.141.111z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 9",
        d: "M107.421 69.774l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.342 1.342 0 00-.708-.188h0a.149.149 0 00-.141.111z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 10",
        d: "M110.987 80.15l-.645-7.545a3.781 3.781 0 00-3.768-3.459h-.78v1.23h0v-1.23h-.78a3.781 3.781 0 00-3.768 3.459l-.646 7.545a3.407 3.407 0 003.395 3.7h3.598a3.407 3.407 0 003.395-3.7z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 11",
        d: "M108.494 69.668c-1.336-.669-1.426-1.652-2.7-1.654h0c-1.272 0-1.362.985-2.7 1.654l.294-.046c1.191-.519 1.271-1.282 2.406-1.283s1.215.764 2.406 1.283z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 12",
        d: "M105.795 77.868l.132-.006 4.385-.192.239 2.792h0a16.8 16.8 0 01-4.579.636h-.177"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 13",
        d: "M105.788 77.868l-.132-.006-4.385-.192-.239 2.792h0a16.8 16.8 0 004.579.636h.177"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 14",
        d: "M110.625 80.455l-.591-6.916a3.54 3.54 0 00-3.527-3.239h-1.427a3.54 3.54 0 00-3.527 3.238l-.591 6.916a3.2 3.2 0 001.393 2.92l.083-.123a3.056 3.056 0 01-1.328-2.785l.591-6.916a3.372 3.372 0 013.38-3.1h1.426a3.372 3.372 0 013.379 3.1l.591 6.916a3.056 3.056 0 01-1.328 2.785l.083.123a3.2 3.2 0 001.392-2.921z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 15",
        d: "M105.792 84.149v-3.008h0a25.049 25.049 0 01-4.756-.676l-.447-.039A3.568 3.568 0 00104 84.149z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 16",
        d: "M105.795 81.141v3.008h1.8A3.568 3.568 0 00111 80.426l-.447.039a25.083 25.083 0 01-4.758.676z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 17",
        d: "M105.792 81.083v2.767h1.647a3.123 3.123 0 003.112-3.389 27.2 27.2 0 01-4.757.622z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 18",
        d: "M105.795 83.85v-2.765h0a27.157 27.157 0 01-4.759-.622h0a3.123 3.123 0 003.112 3.389z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
        "data-name": "Rectangle 34",
        width: "2.177",
        height: "1.086",
        rx: ".281",
        transform: "rotate(-3.21 1460.138 -1873.834)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 19",
        d: "M103.251 80.12h0a.158.158 0 01-.158-.158v-6.679a.158.158 0 01.158-.158h0a.158.158 0 01.158.158v6.679a.158.158 0 01-.158.158z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Rectangle 35",
        d: "M103.093 74.874h.316v1.036h-.316z"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/Wallet.tsx



const Wallet = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      "data-name": "Group 9",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        "data-name": "Group 8",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 42",
          d: "M12.362 1.129a1.415 1.415 0 00-1.672-1.1L1.428 1.942h11.1z",
          fill: color
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 43",
        d: "M11.579 11.242v-2.2a1.822 1.822 0 011.82-1.82h2.784v-2.78a1.415 1.415 0 00-1.415-1.415H1.415A1.415 1.415 0 000 4.442v11.4a1.415 1.415 0 001.415 1.415h13.354a1.415 1.415 0 001.415-1.415v-2.776h-2.785a1.822 1.822 0 01-1.82-1.82z",
        fill: color
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 44",
        d: "M16.989 8.03h-3.59a1.011 1.011 0 00-1.01 1.01v2.2a1.012 1.012 0 001.01 1.01h3.59a1.012 1.012 0 001.01-1.01v-2.2a1.012 1.012 0 00-1.01-1.01zm-2.8 3.128a1.006 1.006 0 111.006-1.006 1.006 1.006 0 01-1.006 1.006z",
        fill: color
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/LaptopBags.tsx



const LaptopBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      "data-name": "Group 6",
      fill: color,
      stroke: "#fff",
      strokeMiterlimit: "10",
      strokeWidth: ".091",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 22",
        d: "M6.224 1.741a.408.408 0 01-.292-.175l-.013-.018v-.022c-.08-.612.818-.747.856-.753l.4-.057-.334.222h0a.807.807 0 00-.128.338c-.105.42-.375.465-.489.465zm-.13-.263a.213.213 0 00.13.081c.106 0 .244-.056.305-.323a1.686 1.686 0 01.07-.237c-.214.064-.523.205-.505.479z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 23",
        d: "M9 6.496H.046v6.8a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833v-6.8z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 24",
        d: "M17.44 2.135H.561a.515.515 0 00-.515.515v6.285a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833V2.65a.515.515 0 00-.515-.515z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 25",
        d: "M11.776 1.741c-.113 0-.387-.045-.482-.464a.734.734 0 00-.134-.342l-.334-.222.4.061c.038.006.936.141.856.753v.022l-.013.018a.408.408 0 01-.293.174zM11.4.999a1.682 1.682 0 01.071.238c.061.267.2.323.305.323a.216.216 0 00.13-.081c.019-.276-.291-.416-.506-.48z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 26",
        d: "M11.295.752A3.333 3.333 0 009 .045a3.333 3.333 0 00-2.295.707.136.136 0 00.158.222A3.036 3.036 0 018.999.318a3.037 3.037 0 012.136.656.136.136 0 10.158-.222z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 27",
        d: "M9 9.419h-.958v.751h1.917v-.751z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 28",
        d: "M8.698 8.214h0a.9.9 0 00-.657 1.24h1.917a.9.9 0 00-.657-1.24h0a1.656 1.656 0 00-.6 0z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 29",
        d: "M9 10.17h-.958v1.009h1.917V10.17z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 30",
        d: "M9 10.473h-.807v.706h1.615v-.706z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 31",
        d: "M4.725 2.135h1.136a1.287 1.287 0 00.648-.83.118.118 0 00-.117-.139h0a.116.116 0 00-.095.048 1.873 1.873 0 01-1.38.721.118.118 0 00-.088.05z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 32",
        d: "M13.275 2.135H12.14a1.287 1.287 0 01-.648-.83.118.118 0 01.116-.139h0a.116.116 0 01.095.048 1.873 1.873 0 001.38.721.118.118 0 01.088.05z"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/WomenDress.tsx



const WomenDress = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
        id: "a",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Rectangle 20",
          transform: "translate(226 1073)",
          fill: "#ebe7e7",
          d: "M0 0h18v18H0z"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      "data-name": "Women Dress",
      transform: "translate(-226 -1073)",
      clipPath: "url(#a)",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        "data-name": "Group 28",
        transform: "translate(230.461 1073)",
        fill: color,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 80",
          d: "M8.236 12.619c-.12-.6-.384-3.422-1.008-4.358a1.446 1.446 0 01-.19-.8.039.039 0 000-.007c.02-.29.052-.6.073-.762a.493.493 0 01.01-.076c.016-.1.036-.192.057-.289a16.065 16.065 0 00.515-2.746c0-1.429-.733-1.849-.733-1.849.251-1.069.434-1.647.434-1.647L7.179 0A10.558 10.558 0 006.7 1.717a2.911 2.911 0 01-2.161.694 2.913 2.913 0 01-2.161-.694A10.578 10.578 0 001.897 0l-.216.087s.18.577.434 1.647c0 0-.733.421-.733 1.849a14.672 14.672 0 00.491 2.631.1.1 0 000 .039.2.2 0 00.01.035l.007.028c.03.123.074.347.081.347.014.087.029.243.043.4.006.055.01.109.014.163l.016.207h-.007a1.462 1.462 0 01-.191.826c-.624.936-.889 3.758-1.008 4.358s-.408 2.81-.552 3.459-.288 1.537-.288 1.537a3.7 3.7 0 001.2.144s-.087.252.649.18a14.433 14.433 0 011.969-.06c.5.024.153.12.72.12s.216-.1.72-.12a14.388 14.388 0 011.969.06c.733.072.649-.18.649-.18a3.708 3.708 0 001.2-.144s-.144-.889-.289-1.537-.428-2.857-.549-3.457zM6.955 6.468c-.056.077-.106.2-.041.251-.017.115-.027.231-.039.347-.065-.075-.274-.006-.274-.006-.155-.068.137.335.254.181-.005.065-.007.13-.01.2-.142-.01-.284-.02-.427-.028a.66.66 0 00-.068-.149c.016-.108-.108.016-.15.137a25.847 25.847 0 00-.925-.02C5.211 7.304 5 7.373 5 7.373c-.031-.014-.044-.008-.044.009h-.032a.147.147 0 00.016-.067.152.152 0 00-.3 0 .149.149 0 00.017.067c-.406 0-.812.013-1.214.023a.791.791 0 00-.042-.077c.014-.092-.074-.017-.126.081l-.207.005a.491.491 0 00.112-.2c.154-.1-.434-.074-.271.151a.2.2 0 00.051.051h-.173a.087.087 0 000-.122c-.136-.2-.238.094-.25.127l-.3.006a.43.43 0 00-.005-.081c.073-.011.315-.308.087-.354a.173.173 0 00-.109.005 4.818 4.818 0 00-.048-.385.674.674 0 00.059-.135c.067-.042-.005-.062-.1-.051a2.26 2.26 0 00-.039-.147h.224a.152.152 0 10.292.057.148.148 0 00-.014-.062l1.04-.019a.1.1 0 000 .132c.143.2.244-.072.266-.137l.479-.005c.075.095.22.2.277.043a.207.207 0 00.009-.046h.7a.15.15 0 00-.034.092.152.152 0 10.3 0 .149.149 0 00-.033-.087c.384.007.766.024 1.148.048-.116.015-.254.077-.166.2.161.225.271-.151.271-.151.029-.018.032-.032.018-.042l.1.007a.042.042 0 00.009.008c-.007.052-.016.1-.026.153z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 81",
          d: "M4.951 7.161c-.144.087.4.076.252-.134s-.252.134-.252.134z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 82",
          d: "M4.286 7.052c-.1.235.249.14.249.14.15.075-.149-.375-.249-.14z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 83",
          d: "M4.768 6.721c-.284-.057-.1.31-.1.31-.049.19.384-.249.1-.31z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 84",
          d: "M5.973 6.533c.095-.26-.277-.138-.277-.138-.167-.073.183.398.277.138z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 85",
          d: "M5.382 6.898c.276.023.061-.3.061-.3.027-.184-.34.279-.061.3z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 86",
          d: "M4.985 6.632c.161.225.271-.151.271-.151.154-.097-.433-.076-.271.151z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
          "data-name": "Ellipse 3",
          cx: ".152",
          cy: ".152",
          r: ".152",
          transform: "translate(3.253 6.916)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 87",
          d: "M3.851 6.782c-.144-.21-.252.134-.252.134-.144.086.396.076.252-.134z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 88",
          d: "M3.649 7.126c-.167-.073.183.4.277.138s-.277-.138-.277-.138z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 89",
          d: "M2.903 6.808c-.1.235.249.14.249.14.151.075-.149-.374-.249-.14z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 90",
          d: "M3.384 6.48c-.284-.057-.1.31-.1.31-.046.185.385-.256.1-.31z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 91",
          d: "M6.359 6.852a.152.152 0 11-.152.152.152.152 0 01.152-.152z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 92",
          d: "M6.553 6.853c-.144.087.4.076.252-.134s-.252.134-.252.134z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 93",
          d: "M5.861 7.3c.161.225.271-.151.271-.151.152-.1-.435-.074-.271.151z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 94",
          d: "M5.856 6.744c-.1.235.249.14.249.14.15.075-.15-.375-.249-.14z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 95",
          d: "M6.338 6.413c-.284-.057-.1.31-.1.31-.049.187.385-.25.1-.31z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 96",
          d: "M4.064 6.654c.276.023.061-.3.061-.3.027-.184-.339.276-.061.3z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 97",
          d: "M2.972 6.533c.094-.26-.277-.138-.277-.138-.168-.073.182.398.277.138z"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 98",
          d: "M2.381 6.898c.276.023.061-.3.061-.3.026-.184-.336.279-.061.3z"
        })]
      })
    })]
  });
};
// CONCATENATED MODULE: ./src/assets/icons/OuterWear.tsx



const OuterWear = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      "data-name": "Group 29",
      fill: color,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 99",
        d: "M15.643 5.659a1.993 1.993 0 00.453-.062c-.224-1.2-.4-1.9-.4-1.9a5.546 5.546 0 00-1.713-1.068 1.964 1.964 0 001.66 3.03z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 100",
        d: "M.896 5.596a1.962 1.962 0 002.113-2.97 5.561 5.561 0 00-1.712 1.068s-.178.697-.401 1.902z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 101",
        d: "M15.641 6.146a2.466 2.466 0 01-2.463-2.463 2.436 2.436 0 01.348-1.24 14.661 14.661 0 00-2.08-.61L11.422.664A5.484 5.484 0 008.947.008c-.225-.01-.677-.01-.904 0a5.5 5.5 0 00-2.478.653l-.02 1.169a14.746 14.746 0 00-2.08.612 2.446 2.446 0 01-2.658 3.64 53.686 53.686 0 00-.771 11.244H.26v.123a.512.512 0 00.532.493h1.24a.512.512 0 00.532-.493v-.123h.23s-.238-7.281 1.02-9.143v9.08a23.275 23.275 0 004.326.735V1.151a5.227 5.227 0 01-1.749-.19S6.529.498 8.043.516h.9c1.5.023 1.653.445 1.653.445a5.226 5.226 0 01-1.751.19v16.847a23.274 23.274 0 004.329-.736V8.184c1.259 1.866 1.023 9.143 1.023 9.143h.229v.123a.511.511 0 00.532.493H16.2a.512.512 0 00.532-.493v-.123h.224a53.827 53.827 0 00-.771-11.246 2.462 2.462 0 01-.544.065z"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/Pants.tsx



const Pants = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fill: color,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 102",
        d: "M7.999 1.165a10.721 10.721 0 00-.139-.71L7.797.187A.243.243 0 007.561 0H.553a.243.243 0 00-.236.187L.253.455c-.056.235-.1.472-.139.71z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 103",
        d: "M.018 2.048a9.93 9.93 0 00-.015.828l.379 13.479a.243.243 0 00.242.236H.86v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.172a.243.243 0 00.242-.225l.833-11.228a.15.15 0 01.3 0l.825 11.228a.243.243 0 00.242.225h.233v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.179a.243.243 0 00.242-.236L8.1 2.876c.008-.276 0-.553-.015-.828z"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/Tops.tsx



const Tops = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fill: color,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 104",
        d: "M6.994 2.83L5.928 5.991a.315.315 0 01-.6 0L4.273 2.83a2.4 2.4 0 00-2.909-.026L0 3.822l.087.329a32.647 32.647 0 01.909 11.921L.79 18h9.7l-.215-1.909a32.667 32.667 0 01.912-11.96l.083-.31-1.366-1.013a2.4 2.4 0 00-2.909.026zm0 0"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 105",
        d: "M.549 2.843l.62-.114L.714.261a.315.315 0 00-.62.114zm0 0"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 106",
        d: "M10.978.369a.316.316 0 00-.622-.108L9.966 2.6l.622.108zm0 0"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/Skirts.tsx



const Skirts = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fill: color,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 107",
        d: "M17.688 16.585L14.826 5.454a3.95 3.95 0 00-.26-.682l-.822-1.6a.749.749 0 00-.616-.376H4.576a.746.746 0 00-.615.377l-.841 1.65a4.017 4.017 0 00-.258.683L.017 16.585a.373.373 0 00.374.482h.64a1.52 1.52 0 01.612.158l1.246.691a.824.824 0 00.728 0l1.24-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a1.52 1.52 0 01.612-.158h.64a.373.373 0 00.374-.482z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 108",
        d: "M4.525 2.1h8.656a.333.333 0 00.333-.333V.333A.333.333 0 0013.181 0H4.525a.333.333 0 00-.331.333v1.438a.333.333 0 00.331.331zM7.833.652a.267.267 0 01.262-.266h1.508a.267.267 0 01.266.266v.8a.267.267 0 01-.266.266H8.095a.267.267 0 01-.266-.266z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Rectangle 2",
        d: "M8.275.83h1.153v.444H8.275z"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/Shirts.tsx



const Shirts = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fill: color,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 109",
        d: "M6.751 2.546a.172.172 0 00.04 0l2.206-.525 2.2.543a.171.171 0 00.041 0 .142.142 0 00.111-.051.149.149 0 00.027-.128l-.21-.983a.362.362 0 010-.115l.221-1.1a.144.144 0 00-.026-.122.138.138 0 00-.168-.029l-2.192 1.05L6.813.017a.137.137 0 00-.169.028.144.144 0 00-.027.122l.21 1.1a.362.362 0 010 .115l-.217.979a.149.149 0 00.027.128.142.142 0 00.11.053z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 110",
        d: "M2.563 15.126l-1.806-.153a.4.4 0 00-.4.278l-.342 1.214a.285.285 0 00.039.248.285.285 0 00.224.112l1.8.058h.013a.428.428 0 00.391-.288l.334-1.1a.282.282 0 00-.252-.372z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 111",
        d: "M17.985 16.466l-.338-1.2a.4.4 0 00-.4-.278l-1.806.152a.282.282 0 00-.252.372l.33 1.083a.428.428 0 00.391.288l1.815-.058a.274.274 0 00.264-.359z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 112",
        d: "M17.024 14.342a.286.286 0 00.257-.372l-.756-2.678a5.452 5.452 0 01-.105-.451l-1.321-6.627a.61.61 0 00-.315-.4l-2.139-.945a.63.63 0 00-.248-.046.638.638 0 00-.263.051L9.176 4.248a.483.483 0 01-.346 0L5.865 2.876a.64.64 0 00-.263-.051.63.63 0 00-.248.046l-2.139.945a.61.61 0 00-.315.4l-1.318 6.626c-.025.125-.074.328-.105.451l-.759 2.662a.286.286 0 00.257.372l1.824.154a.405.405 0 00.407-.275l.874-2.857a3.587 3.587 0 00.105-.476l.278-2.1-.254 8.162a.326.326 0 00.327.337h8.99a.325.325 0 00.326-.338l-.292-8.058.265 2.006a3.582 3.582 0 00.105.476l.875 2.874a.405.405 0 00.407.275zM8.998 16.3a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.562z"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/Face.tsx



const Face = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fill: color,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 41",
        d: "M6.388 9.238c-3.319 0-5.11 1.36-5.11 1.911s1.791 1.911 5.11 1.911a9.995 9.995 0 002.653-.345 5.1 5.1 0 011.387-2.612 8.865 8.865 0 00-4.04-.864z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 42",
        d: "M8.34 8.908a7.515 7.515 0 012.3.841 5.111 5.111 0 01.581-.391 7 7 0 00-1.969-.887 5.957 5.957 0 01-.912.438z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 43",
        d: "M8.958 13.383a10.774 10.774 0 01-2.571.3c-3.29 0-5.749-1.349-5.749-2.555 0-.908 1.394-1.9 3.484-2.33a6.017 6.017 0 01-.9-.433c-1.96.571-3.224 1.647-3.224 2.762 0 1.731 2.922 3.193 6.388 3.193a11.64 11.64 0 002.573-.285c-.008-.112-.018-.234-.018-.354.002-.097.011-.197.017-.298z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 44",
        d: "M6.388 8.952a4.833 4.833 0 005.11-4.471A4.833 4.833 0 006.388.01a4.833 4.833 0 00-5.11 4.471 4.833 4.833 0 005.11 4.471zm0-8.3a4.194 4.194 0 014.471 3.833 4.194 4.194 0 01-4.471 3.833A4.194 4.194 0 011.917 4.48 4.194 4.194 0 016.388.647z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 45",
        d: "M6.391 7.675a3.561 3.561 0 003.833-3.193 3.561 3.561 0 00-3.833-3.195A3.561 3.561 0 002.558 4.48a3.561 3.561 0 003.833 3.195zm0-5.749a2.969 2.969 0 013.193 2.555h-.638c0-1.039-1.17-1.911-2.555-1.911z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 46",
        d: "M17.39 11.304a6.91 6.91 0 01-.592.319 5.4 5.4 0 00-2.518 2.518 6.026 6.026 0 01-2.81 2.81 7.22 7.22 0 00-.486.259 4.466 4.466 0 006.407-5.9zm-3.877 6.051v-.638a3.238 3.238 0 00.581-.053l.112.628a3.847 3.847 0 01-.694.063zm1.394-.261l-.233-.595a3.176 3.176 0 002.032-2.976h.638a3.812 3.812 0 01-2.438 3.571z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 47",
        d: "M12.66 15.332a4.74 4.74 0 001.044-1.472 6.029 6.029 0 012.809-2.815c.173-.085.337-.17.518-.278a4.527 4.527 0 00-.4-.45 6.37 6.37 0 01-.731.407 5.386 5.386 0 00-2.512 2.521 6.03 6.03 0 01-2.81 2.81 6.962 6.962 0 00-.532.285 4.507 4.507 0 00.414.438 6.34 6.34 0 01.727-.406 4.733 4.733 0 001.474-1.042z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 48",
        d: "M11.769 14.439a4.74 4.74 0 001.044-1.472 6.022 6.022 0 012.81-2.81c.166-.082.328-.164.5-.265a4.462 4.462 0 00-6.435 5.922c.219-.136.419-.236.614-.337a4.747 4.747 0 001.47-1.037z"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/Eyes.tsx



const Eyes = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fill: color,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 49",
        d: "M3.002 0h-1.5v.75h-1.5v1.5h1.5V3h-1.5v1.5h1.5v.75h-1.5v1.5h1.5v3.75h-.75a.75.75 0 00-.744.842l.75 6a.75.75 0 00.744.657h1.5a.75.75 0 00.744-.657l.75-6a.75.75 0 00-.744-.842h-.75V6.748h1.5v-1.5h-1.5V4.5h1.5V3h-1.5v-.75h1.5V.75h-1.5z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 50",
        d: "M11.995 17.187l-.746-9.69h-4.5l-.747 9.69a.75.75 0 00.748.807h4.5a.75.75 0 00.748-.807z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 51",
        d: "M11.251 5.249a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v1.5h4.5z"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/Lips.tsx


const Lips = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      "data-name": "Group 14",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 52",
        d: "M6.035 17.392v-6.2a.567.567 0 00-.516-.61H5.5V5.269h-.527c0-.877.008-1.608.013-2.212.019-2.149.023-2.66-.235-2.923A.454.454 0 004.422 0a1.282 1.282 0 00-.549.193 4.29 4.29 0 01-.708.3 2.882 2.882 0 00-2.117 2.235v2.541H.541v5.306H.519a.567.567 0 00-.516.61v6.2a.567.567 0 00.516.61h5.006a.567.567 0 00.51-.603zm-1.144-6.817H1.148V5.932l3.743.043z",
        fill: color
      })
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/Snacks.tsx



function Snacks_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Snacks_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Snacks_ownKeys(Object(source), true).forEach(function (key) { Snacks_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Snacks_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Snacks_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Snacks = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", Snacks_objectSpread(Snacks_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "25.143",
    height: "22",
    viewBox: "0 0 25.143 22"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Snacks",
      transform: "translate(0 -32.001)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        id: "Group_5714",
        "data-name": "Group 5714",
        transform: "translate(3.142 40.381)",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
          id: "Group_5713",
          "data-name": "Group 5713",
          transform: "translate(0 0)",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            id: "Path_17398",
            "data-name": "Path 17398",
            d: "M80.227,202.654H65.559a1.573,1.573,0,0,0-1.571,1.571v1.048a9.928,9.928,0,0,0,5.388,8.847.524.524,0,1,0,.481-.931,8.883,8.883,0,0,1-4.821-7.916v-1.048a.524.524,0,0,1,.524-.524H80.227a.524.524,0,0,1,.524.524v1.048a8.879,8.879,0,0,1-4.822,7.915.524.524,0,0,0,.241.99.517.517,0,0,0,.24-.059,9.923,9.923,0,0,0,5.389-8.846v-1.048A1.573,1.573,0,0,0,80.227,202.654Z",
            transform: "translate(-63.988 -202.654)",
            fill: "currentColor"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        id: "Group_5716",
        "data-name": "Group 5716",
        transform: "translate(0 50.857)",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
          id: "Group_5715",
          "data-name": "Group 5715",
          transform: "translate(0 0)",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            id: "Path_17399",
            "data-name": "Path 17399",
            d: "M24.056,416.29a.525.525,0,0,0-.484-.324H.524a.524.524,0,0,0-.371.895l1.174,1.175a3.645,3.645,0,0,0,2.593,1.074H20.174a3.651,3.651,0,0,0,2.6-1.074l1.174-1.175A.523.523,0,0,0,24.056,416.29ZM22.027,417.3a2.6,2.6,0,0,1-1.852.767H3.921a2.6,2.6,0,0,1-1.852-.767l-.281-.281h20.52Z",
            transform: "translate(0 -415.966)",
            fill: "currentColor"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        id: "Group_5718",
        "data-name": "Group 5718",
        transform: "translate(17.438 42.474)",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
          id: "Group_5717",
          "data-name": "Group 5717",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            id: "Path_17400",
            "data-name": "Path 17400",
            d: "M361.785,245.653c-1.411-.907-3.666.078-3.918.192a.524.524,0,0,0,.435.954c.505-.229,2.125-.773,2.917-.263a1.488,1.488,0,0,1,.532,1.358c0,2.1-4.23,3.365-5.864,3.677l-.371.073a.523.523,0,0,0,.1,1.037.486.486,0,0,0,.1-.01l.368-.072c.274-.052,6.712-1.315,6.712-4.705A2.471,2.471,0,0,0,361.785,245.653Z",
            transform: "translate(-355.093 -245.272)",
            fill: "currentColor"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        id: "Group_5720",
        "data-name": "Group 5720",
        transform: "translate(14.667 32.001)",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
          id: "Group_5719",
          "data-name": "Group 5719",
          transform: "translate(0 0)",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            id: "Path_17401",
            "data-name": "Path 17401",
            d: "M300.125,35.994a3.139,3.139,0,0,0,0-3.8.524.524,0,1,0-.818.655,2.113,2.113,0,0,1,0,2.488,3.135,3.135,0,0,0,0,3.8.524.524,0,1,0,.818-.655A2.11,2.11,0,0,1,300.125,35.994Z",
            transform: "translate(-298.666 -32.001)",
            fill: "currentColor"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        id: "Group_5722",
        "data-name": "Group 5722",
        transform: "translate(11.52 32.001)",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
          id: "Group_5721",
          "data-name": "Group 5721",
          transform: "translate(0 0)",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            id: "Path_17402",
            "data-name": "Path 17402",
            d: "M236.055,36a3.135,3.135,0,0,0,0-3.8.524.524,0,1,0-.818.655,2.11,2.11,0,0,1,0,2.488,3.139,3.139,0,0,0,0,3.8.524.524,0,1,0,.818-.655A2.113,2.113,0,0,1,236.055,36Z",
            transform: "translate(-234.597 -32.009)",
            fill: "currentColor"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        id: "Group_5724",
        "data-name": "Group 5724",
        transform: "translate(8.381 32.002)",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
          id: "Group_5723",
          "data-name": "Group 5723",
          transform: "translate(0 0)",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            id: "Path_17403",
            "data-name": "Path 17403",
            d: "M172.125,36.015a3.139,3.139,0,0,0,0-3.8.524.524,0,0,0-.818.654,2.113,2.113,0,0,1,0,2.488,3.135,3.135,0,0,0,0,3.8.524.524,0,1,0,.818-.654A2.11,2.11,0,0,1,172.125,36.015Z",
            transform: "translate(-170.666 -32.022)",
            fill: "currentColor"
          })
        })
      })]
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/PetCare.tsx


function PetCare_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PetCare_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PetCare_ownKeys(Object(source), true).forEach(function (key) { PetCare_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PetCare_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PetCare_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const PetCare = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", PetCare_objectSpread(PetCare_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "512",
    height: "512"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      id: "Outline",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M83.242,192.5,76.758,177.87c-18.5,8.2-28.133,17.987-28.7,29.087L16.142,374.5a8,8,0,0,0,3.812,8.4C47.161,398.85,82.72,411.28,125.642,419.845,165.487,427.8,210.564,432,256,432s90.513-4.2,130.358-12.155c42.922-8.565,78.481-21,105.688-36.943a8,8,0,0,0,3.812-8.4l-10.667-56L469.475,321.5l3.263,17.136-10.656,5.557a270.53,270.53,0,0,1-48.076,19.552C369.917,376.806,313.8,384,256,384c-59.3,0-116.534-7.531-161.151-21.206l-4.69,15.3C136.255,392.219,195.151,400,256,400c59.3,0,117.028-7.428,162.551-20.917a286.6,286.6,0,0,0,50.929-20.706l6.385-3.329,3.2,16.819c-107.232,58.747-338.9,58.747-446.137,0L60.214,228.632q11.793,9.07,34.867,16.276C134.037,257.041,192.689,264,256,264s121.963-6.959,160.92-19.092q23.056-7.182,34.867-16.276L466.428,305.5l15.717-2.994-18.187-95.477c-.88-18.8-27.229-33.514-78.388-43.754l-3.14,15.688C434.3,189.342,448,202.5,448,208c0,4.68-8.951,12.184-28.716,19.253a48.237,48.237,0,0,0-35.856-26.672,48.122,48.122,0,0,0-40-40.008,48.147,48.147,0,0,0-13.489-26.511,47.646,47.646,0,0,0-26.5-13.493,48.015,48.015,0,0,0-94.864,0,47.647,47.647,0,0,0-26.506,13.494,48.167,48.167,0,0,0-12.7,22.608c-29.7,3.39-55.8,8.518-75.8,14.905l4.87,15.241a316.9,316.9,0,0,1,40.8-9.67,47.54,47.54,0,0,0-10.67,23.422,47.647,47.647,0,0,0-26.506,13.494,48.175,48.175,0,0,0-9.33,13.2C72.955,220.188,64,212.681,64,208,64,204.629,69.055,198.787,83.242,192.5Zm30.134,32.88A31.791,31.791,0,0,1,136,216a8,8,0,0,0,8-8,32.013,32.013,0,0,1,32-32,8,8,0,0,0,8-8c0-1.055.055-2.15.16-3.228A32.023,32.023,0,0,1,216,136a8,8,0,0,0,8-8,32,32,0,0,1,64,0,8,8,0,0,0,8,8,32.024,32.024,0,0,1,31.838,28.747c.107,1.1.162,2.2.162,3.253a8,8,0,0,0,8,8,32.036,32.036,0,0,1,32,32,8,8,0,0,0,8,8,32.12,32.12,0,0,1,27.754,16.073C366.446,242.232,313.315,248,256,248s-110.44-5.768-147.748-15.925A32.2,32.2,0,0,1,113.376,225.377ZM248,176v16a24.027,24.027,0,0,0-24,24H208A40.045,40.045,0,0,1,248,176Zm24-24H256V136h16Zm32,64H288V200h16ZM168,200h16v16H168ZM74.3,294.646l15.726,2.948L79.437,354.081,63.71,351.134Zm18.294-11.175-15.742-2.862,3.28-18.04,15.742,2.862Z",
        fill: "currentColor"
      })
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/HomeCleaning.tsx



function HomeCleaning_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function HomeCleaning_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { HomeCleaning_ownKeys(Object(source), true).forEach(function (key) { HomeCleaning_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { HomeCleaning_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function HomeCleaning_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const HomeCleaning = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", HomeCleaning_objectSpread(HomeCleaning_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20.59",
    height: "25.05",
    viewBox: "0 0 20.59 25.05"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "home_cleaner",
      "data-name": "home cleaner",
      transform: "translate(-2142.193 -787.635)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17440",
        "data-name": "Path 17440",
        d: "M2188.815,831.346a2.538,2.538,0,0,1,2.6-1.81v-1.584a27.676,27.676,0,0,0-3.734-.111,3.962,3.962,0,0,0-3.169,2.034c-.33.684,2.49-.339,2.716,1.471",
        transform: "translate(-39.669 -37.554)",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "0.9"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17441",
        "data-name": "Path 17441",
        d: "M2289.466,862.334a10.742,10.742,0,0,0,1.89,3.765c.082.119-.025.28-.137.207a6.8,6.8,0,0,1-2.94-3.5",
        transform: "translate(-138.167 -70.32)",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "0.9"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17442",
        "data-name": "Path 17442",
        d: "M2226.052,898.788a2.93,2.93,0,0,0,1.4.214,3.341,3.341,0,0,0,1.319-.214v-1.436a.17.17,0,0,0-.169-.17h-2.377a.17.17,0,0,0-.169.17Z",
        transform: "translate(-79.113 -103.39)",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "0.9"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17443",
        "data-name": "Path 17443",
        d: "M2156.93,1189.207",
        transform: "translate(-13.516 -380.522)",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "0.9"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17444",
        "data-name": "Path 17444",
        d: "M2320.353,830.622h1.328v1.584h-1.328",
        transform: "translate(-168.605 -40.225)",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "0.9"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17445",
        "data-name": "Path 17445",
        d: "M2153.421,936.6a15.113,15.113,0,0,1-1.134,4.707.744.744,0,0,1-.68.515h-7.4a.751.751,0,0,1-.688-.544,12.078,12.078,0,0,1,2.065-12.242,3.527,3.527,0,0,0,.679-3.055,1.052,1.052,0,0,1,.675-1.195",
        transform: "translate(0 -129.588)",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "0.9"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17446",
        "data-name": "Path 17446",
        d: "M2278.913,926.025c1.471.905-.25,1.974.006,2.2.847.757-.006,1.8-.006,1.8a1.4,1.4,0,0,1,.369,1.741,8.765,8.765,0,0,1,2.391,2.01",
        transform: "translate(-129.259 -130.762)",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "0.9"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
        id: "Line_15",
        "data-name": "Line 15",
        y1: "1.511",
        x2: "3.16",
        transform: "translate(2154.628 788.235)",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "0.9"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
        id: "Line_16",
        "data-name": "Line 16",
        x2: "3.16",
        y2: "1.511",
        transform: "translate(2154.628 792.632)",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "0.9"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
        id: "Line_17",
        "data-name": "Line 17",
        x2: "4.259",
        transform: "translate(2154.628 791.189)",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "0.9"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
        id: "Ellipse_9",
        "data-name": "Ellipse 9",
        cx: "2.047",
        cy: "2.047",
        r: "2.047",
        transform: "translate(2158.239 799.709)",
        strokeWidth: "0.9",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17447",
        "data-name": "Path 17447",
        d: "M2383.738,957.387a1.489,1.489,0,0,0,2.978,0,1.489,1.489,0,0,0-2.978,0Z",
        transform: "translate(-228.757 -159.112)",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "0.9"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
        id: "Ellipse_10",
        "data-name": "Ellipse 10",
        cx: "2.764",
        cy: "2.764",
        r: "2.764",
        transform: "translate(2152.212 802.109)",
        strokeWidth: "0.9",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      })]
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/Dairy.tsx



function Dairy_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Dairy_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Dairy_ownKeys(Object(source), true).forEach(function (key) { Dairy_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Dairy_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Dairy_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Dairy = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", Dairy_objectSpread(Dairy_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16.967",
    height: "22.1",
    viewBox: "0 0 16.967 22.1"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Dairy",
      transform: "translate(-71.95 -15.95)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17395",
        "data-name": "Path 17395",
        d: "M72.733,36.167v-8.8a8.516,8.516,0,0,1,.693-3.374l.755-1.762c.064-.15.126-.3.183-.46a6.94,6.94,0,0,1,2.722.055,7.585,7.585,0,0,0,2.869.085c.041.107.085.214.13.321l.755,1.763.674-.289-.755-1.763c-.08-.188-.154-.379-.22-.568a8.55,8.55,0,0,1-.465-2.44h.359a.367.367,0,0,0,.367-.367V17.1A1.1,1.1,0,0,0,79.7,16H74.567a1.1,1.1,0,0,0-1.1,1.1v1.467a.367.367,0,0,0,.367.367h.359a8.552,8.552,0,0,1-.45,2.4c-.071.207-.15.412-.235.61L72.752,23.7A9.247,9.247,0,0,0,72,27.367v8.8A1.835,1.835,0,0,0,73.833,38H79.7v-.733H73.833A1.1,1.1,0,0,1,72.733,36.167ZM74.2,17.1a.367.367,0,0,1,.367-.367H79.7a.367.367,0,0,1,.367.367v1.1H74.2Zm5.141,1.833a9.271,9.271,0,0,0,.375,2.27,6.855,6.855,0,0,1-2.47-.095,7.673,7.673,0,0,0-2.633-.118,9.278,9.278,0,0,0,.314-2.057Z",
        transform: "translate(0 0)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.1"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17397",
        "data-name": "Path 17397",
        d: "M241.533,201.833c0-1.2-2.4-1.833-4.767-1.833s-4.767.63-4.767,1.833a.88.88,0,0,0,.01.132l1.092,11.271a.367.367,0,0,0,.365.33h6.6a.367.367,0,0,0,.365-.33l1.092-11.271A.884.884,0,0,0,241.533,201.833Zm-1,3-.185.062a5.813,5.813,0,0,1-3.526.053,6.566,6.566,0,0,0-3.778,0l-.033.01-.181-2.047a10.662,10.662,0,0,0,7.873,0Zm-3.767-4.1c2.593,0,4.015.717,4.032,1.093l0,.046c-.091.382-1.506,1.061-4.028,1.061s-3.937-.679-4.028-1.061l0-.046C232.752,201.451,234.173,200.733,236.767,200.733Zm2.968,12.1H233.8l-.718-7.128.175-.052a5.859,5.859,0,0,1,3.357,0,6.539,6.539,0,0,0,3.845-.02Z",
        transform: "translate(-152.667 -175.567)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.1"
      })]
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/Cooking.tsx



function Cooking_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Cooking_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Cooking_ownKeys(Object(source), true).forEach(function (key) { Cooking_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Cooking_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Cooking_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Cooking = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", Cooking_objectSpread(Cooking_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "28.9",
    height: "16.9",
    viewBox: "0 0 28.9 16.9"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      id: "Cooking",
      transform: "translate(-61.55 -195.55)",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        id: "Group_12320",
        "data-name": "Group 12320",
        transform: "translate(62 196)",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
          id: "Group_12319",
          "data-name": "Group 12319",
          transform: "translate(11.006 10.518)",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
            id: "Line_10",
            "data-name": "Line 10",
            x2: "0.963",
            fill: "none",
            stroke: "currentColor",
            strokeLinejoin: "round",
            strokeWidth: "0.9"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
            id: "Line_11",
            "data-name": "Line 11",
            x2: "0.963",
            transform: "translate(2.345)",
            fill: "none",
            stroke: "currentColor",
            strokeLinejoin: "round",
            strokeWidth: "0.9"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
            id: "Line_12",
            "data-name": "Line 12",
            x2: "0.963",
            transform: "translate(4.691)",
            fill: "none",
            stroke: "currentColor",
            strokeLinejoin: "round",
            strokeWidth: "0.9"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17428",
          "data-name": "Path 17428",
          d: "M578.074,414.485l3.192-.59v-1.15h-3.192Z",
          transform: "translate(-553.266 -406.978)",
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "0.9"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17429",
          "data-name": "Path 17429",
          d: "M506.668,414.485l-3.192-.59v-1.15h3.192Z",
          transform: "translate(-503.476 -406.978)",
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "0.9"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17430",
          "data-name": "Path 17430",
          d: "M523.823,401.744a17.212,17.212,0,0,0-10.749,3.829h21.615A17.751,17.751,0,0,0,523.823,401.744Z",
          transform: "translate(-509.882 -399.805)",
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "0.9"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
          id: "Line_13",
          "data-name": "Line 13",
          y1: "1.939",
          transform: "translate(13.941)",
          fill: "none",
          stroke: "currentColor",
          strokeMiterlimit: "10",
          strokeWidth: "0.9"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
          id: "Line_14",
          "data-name": "Line 14",
          x2: "3.606",
          transform: "translate(12.197)",
          fill: "none",
          stroke: "currentColor",
          strokeMiterlimit: "10",
          strokeWidth: "0.9"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17431",
          "data-name": "Path 17431",
          d: "M534.69,412.643s-.333,10.268-5.321,10.268H518.395c-4.988,0-5.321-10.268-5.321-10.268Z",
          transform: "translate(-509.882 -406.911)",
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "0.9"
        })]
      })
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/Breakfast.tsx



function Breakfast_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Breakfast_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Breakfast_ownKeys(Object(source), true).forEach(function (key) { Breakfast_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Breakfast_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Breakfast_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Breakfast = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", Breakfast_objectSpread(Breakfast_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "25.408",
    height: "18.5",
    viewBox: "0 0 25.408 18.5"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Breakfast",
      transform: "translate(0.25 -70.75)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17388",
        "data-name": "Path 17388",
        d: "M241.73,131a.73.73,0,0,0-.73.73v1.946a.73.73,0,0,0,1.459,0V131.73A.73.73,0,0,0,241.73,131Z",
        transform: "translate(-229.276 -57.081)",
        fill: "currentColor",
        stroke: "#fff",
        strokeWidth: "0.4"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17389",
        "data-name": "Path 17389",
        d: "M292.335,131.324a.73.73,0,1,0-1.214.81l.973,1.459a.73.73,0,0,0,1.214-.81Z",
        transform: "translate(-276.841 -57.08)",
        fill: "currentColor",
        stroke: "#fff",
        strokeWidth: "0.4"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17390",
        "data-name": "Path 17390",
        d: "M173.105,131.121a.73.73,0,0,0-1.012.2l-.973,1.459a.73.73,0,1,0,1.214.81l.973-1.459A.73.73,0,0,0,173.105,131.121Z",
        transform: "translate(-162.679 -57.08)",
        fill: "currentColor",
        stroke: "#fff",
        strokeWidth: "0.4"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17391",
        "data-name": "Path 17391",
        d: "M24.908,80.487A2.68,2.68,0,0,0,22.926,77.9a6.867,6.867,0,0,0-3.151-4.777A12.907,12.907,0,0,0,12.454,71a12.907,12.907,0,0,0-7.321,2.125A6.867,6.867,0,0,0,1.982,77.9a2.676,2.676,0,0,0,.159,5.207l.874,3.5A3.158,3.158,0,0,0,6.083,89H18.825a3.158,3.158,0,0,0,3.068-2.4l.874-3.5A2.68,2.68,0,0,0,24.908,80.487ZM4.431,86.251l-.772-3.089H6.945l.547,4.378H6.083a1.7,1.7,0,0,1-1.652-1.29Zm12.061-3.089-.547,4.378H13.184V83.162Zm-4.768,4.378H8.963l-.547-4.378h3.309Zm8.753-1.29a1.7,1.7,0,0,1-1.652,1.29H17.416l.547-4.378h3.286ZM22.232,81.7H2.676a1.216,1.216,0,0,1,0-2.432.73.73,0,0,0,.73-.73,5.255,5.255,0,0,1,2.561-4.217,11.44,11.44,0,0,1,6.488-1.864,11.44,11.44,0,0,1,6.488,1.864A5.255,5.255,0,0,1,21.5,78.541a.73.73,0,0,0,.73.73,1.216,1.216,0,1,1,0,2.432Z",
        transform: "translate(0 0)",
        fill: "currentColor",
        stroke: "#fff",
        strokeWidth: "0.5"
      })]
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/Beverage.tsx


function Beverage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Beverage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Beverage_ownKeys(Object(source), true).forEach(function (key) { Beverage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Beverage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Beverage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Beverage = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", Beverage_objectSpread(Beverage_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.569",
    height: "26.099",
    viewBox: "0 0 14.569 26.099"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      id: "bevarage",
      d: "M901.182,394.343v-.267c0-1.455,0-2.911,0-4.366,0-.192-.037-.279-.246-.333a7.179,7.179,0,0,1-5.405-7.48c.093-1.293.3-2.579.459-3.867q.247-2,.5-3.993a.536.536,0,0,1,.621-.544q5.626,0,11.252,0a.536.536,0,0,1,.614.552c.306,2.43.6,4.862.92,7.291a7.253,7.253,0,0,1-5.12,7.982c-.482.144-.483.144-.483.663q0,2.04,0,4.08v.27c.508.073,1,.13,1.5.219a7.565,7.565,0,0,1,2.734.93,2.92,2.92,0,0,1,.508.4,1.325,1.325,0,0,1,.01,2,3.705,3.705,0,0,1-1.341.82,12.018,12.018,0,0,1-3.443.721,16.444,16.444,0,0,1-5.062-.306,12.666,12.666,0,0,1-1.887-.633,2.91,2.91,0,0,1-.834-.562,1.323,1.323,0,0,1-.03-2.054,4.29,4.29,0,0,1,1.763-.958,12.137,12.137,0,0,1,2.667-.527C900.976,394.376,901.069,394.359,901.182,394.343Zm7.541-13.96c-.329.106-.636.19-.933.3a5.372,5.372,0,0,1-3.76.018c-.931-.323-1.869-.626-2.8-.937a4.011,4.011,0,0,0-2.269-.227c-.695.174-1.376.4-2.061.617a.231.231,0,0,0-.129.159,12.072,12.072,0,0,0-.171,2.765,6.182,6.182,0,0,0,8.7,4.938,6.035,6.035,0,0,0,3.624-5.24A10.427,10.427,0,0,0,908.723,380.383Zm-11.243-5.84-.56,4.5c.2-.061.359-.1.51-.159a5.867,5.867,0,0,1,4.451,0c.917.356,1.867.628,2.806.925a3.391,3.391,0,0,0,1.868.129c.644-.163,1.277-.372,1.909-.577.055-.018.108-.16.1-.237-.125-1.074-.262-2.147-.4-3.22q-.085-.677-.17-1.354Zm3.7,20.782c-.893.191-1.747.332-2.574.567a5.433,5.433,0,0,0-1.343.65c-.332.206-.326.45-.006.681a4.151,4.151,0,0,0,.97.535,12.9,12.9,0,0,0,4.672.683,12.466,12.466,0,0,0,4.433-.712,3.869,3.869,0,0,0,.776-.41c.457-.312.453-.555.006-.869a3.233,3.233,0,0,0-.517-.294,10.12,10.12,0,0,0-3.3-.76c0,.471,0,.928,0,1.384,0,.429-.192.623-.615.624q-.948,0-1.9,0a.531.531,0,0,1-.607-.6C901.18,396.347,901.182,395.889,901.182,395.326Zm1.058-5.713v6.734h1v-6.734Z",
      transform: "translate(-895.457 -373.443)",
      fill: "currentColor",
      stroke: "#fff",
      strokeWidth: "0.1"
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/BeautyHealth.tsx



function BeautyHealth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BeautyHealth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BeautyHealth_ownKeys(Object(source), true).forEach(function (key) { BeautyHealth_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BeautyHealth_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BeautyHealth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const BeautyHealth = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", BeautyHealth_objectSpread(BeautyHealth_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "17.112",
    height: "24",
    viewBox: "0 0 17.112 24"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Beauty",
      transform: "translate(-1278.138 -490.139)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17448",
        "data-name": "Path 17448",
        d: "M1295.25,496.812a.432.432,0,0,0-.432-.432h-1.467a6.671,6.671,0,0,0-13.314,0h-1.467a.433.433,0,0,0-.432.432,8.567,8.567,0,0,0,8.124,8.545v6.335h-3.6a1.223,1.223,0,1,0,0,2.447h8.065a1.223,1.223,0,1,0,0-2.447h-3.6v-6.335A8.567,8.567,0,0,0,1295.25,496.812Zm-4.165,16.1a.359.359,0,0,1-.359.358h-8.065a.359.359,0,1,1,0-.717h8.065A.359.359,0,0,1,1291.085,512.916ZM1286.694,491a5.808,5.808,0,1,1-5.808,5.808A5.814,5.814,0,0,1,1286.694,491Zm-7.679,6.24h1.022a6.671,6.671,0,0,0,13.314,0h1.022a7.691,7.691,0,0,1-15.358,0Z",
        fill: "currentColor"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17449",
        "data-name": "Path 17449",
        d: "M1334.423,532.013a.431.431,0,0,0,.306-.127l3.391-3.392a.432.432,0,0,0-.612-.611l-3.391,3.391a.432.432,0,0,0,.306.738Z",
        transform: "translate(-50.749 -34.18)",
        fill: "currentColor"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17450",
        "data-name": "Path 17450",
        d: "M1390.525,532.974a.431.431,0,0,0,.306-.127l.569-.569a.432.432,0,0,0-.612-.612l-.569.569a.433.433,0,0,0,.306.738Z",
        transform: "translate(-101.725 -37.618)",
        fill: "currentColor"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17451",
        "data-name": "Path 17451",
        d: "M1337.9,552.1a.432.432,0,0,0,.611,0l3.894-3.894a.432.432,0,0,0-.611-.611l-3.894,3.894A.432.432,0,0,0,1337.9,552.1Z",
        transform: "translate(-54.184 -52.089)",
        fill: "currentColor"
      })]
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/ShavingNeeds.tsx



const ShavingNeeds = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      "data-name": "Group 17",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        "data-name": "Group 16",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 60",
          d: "M17.24.609h-5.239a.741.741 0 00-.731.731v.667a.741.741 0 00.731.731h.183a1.222 1.222 0 011.222 1.222v1.222l-.152 3.351h2.777l-.183-3.351V3.959a1.222 1.222 0 011.222-1.222h.183a.741.741 0 00.731-.731v-.667a.741.741 0 00-.744-.731zm-2.011 4.265h-1.222v-.609h1.222zm.03-1.222h-1.28a1.741 1.741 0 00-.457-.914h2.163a1.952 1.952 0 00-.425.92z",
          fill: color
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      "data-name": "Group 19",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        "data-name": "Group 18",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 61",
          d: "M16.023 9.138h-2.8l-.061 1.222h2.924z",
          fill: color
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      "data-name": "Group 21",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        "data-name": "Group 20",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 62",
          d: "M16.413 16.144l-.243-5.178h-3.046l-.243 5.178a1.768 1.768 0 103.533 0z",
          fill: color
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      "data-name": "Group 23",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        "data-name": "Group 22",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 63",
          d: "M8.499 1.827V0H2.436v2.742h-.918V4.11A2.283 2.283 0 000 6.274V7.31h6.092v7.31H0v1.066a2.3 2.3 0 002.284 2.285h3.934a2.282 2.282 0 002.284-2.284V6.244a2.312 2.312 0 00-1.526-2.163V2.742h-.915v-.915zM6.092 3.351h.3v.609h-4.26v-.609z",
          fill: color
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      "data-name": "Group 25",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        "data-name": "Group 24",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          "data-name": "Path 64",
          d: "M0 7.92v1.222h2.132a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v1.222h5.482V7.927z",
          fill: color
        })
      })
    })]
  });
};
// CONCATENATED MODULE: ./src/assets/icons/OralCare.tsx



const OralCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fill: color,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 65",
        d: "M3.118 11.024a2.267 2.267 0 01.142 1.454l-.027.333c-.127 1.655.111 3.807 1.157 4.887a.463.463 0 00.1.046.252.252 0 00.317-.127.255.255 0 00.017-.15v-.02c-.017-.157-.385-3.87 1.27-5.887a1.035 1.035 0 011.6.009c1.623 2.025 1.257 5.719 1.241 5.875v.02a.255.255 0 00.017.15.252.252 0 00.317.127.388.388 0 00.111-.049c1.043-1.078 1.281-3.231 1.154-4.887a35.384 35.384 0 00-.027-.333 2.268 2.268 0 01.142-1.455 3.792 3.792 0 011.517-1.087 2.221 2.221 0 001-1.522 3.819 3.819 0 00-.16-2.192c-.555-1.388-1.827-1.924-3.5-1.466a4.521 4.521 0 00-1.368.622c-.2.126-.409.253-.666.384a2.761 2.761 0 001.566.237.248.248 0 11.1.486 3.837 3.837 0 01-2.355-.493 10.454 10.454 0 01-.478-.265 7.466 7.466 0 00-2.338-1.014A2.73 2.73 0 00.698 6.581a2.908 2.908 0 00.92 3.343 3.784 3.784 0 011.5 1.1z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 66",
        d: "M17.256.93H6.409L6.036.558A1.888 1.888 0 004.693.003H.664a.666.666 0 00-.666.666v1.889a.25.25 0 00.5 0V.667A.165.165 0 01.663.502h.1v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.507a1.4 1.4 0 01.823.4l.792.789a1.888 1.888 0 001.343.555h9.441a.666.666 0 100-1.323z"
      })]
    })
  });
};
// EXTERNAL MODULE: ./src/assets/icons/FacialCare.tsx
var FacialCare = __webpack_require__("17+d");

// CONCATENATED MODULE: ./src/assets/icons/Deodorant.tsx



const Deodorant = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      "data-name": "018---Roll-On",
      fill: color,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
        cx: "1.607",
        cy: "3.535",
        rx: "1.607",
        ry: "3.535",
        transform: "translate(2.176 8.678)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M7.244 4.821H.321a.321.321 0 00-.32.356l.027.254a71.835 71.835 0 01.311 11.215A1.282 1.282 0 001.621 18h4.325a1.282 1.282 0 001.282-1.353 71.835 71.835 0 01.3-11.214l.027-.254a.321.321 0 00-.316-.358zm-6.355.962a.321.321 0 01.321-.321h.641a.321.321 0 110 .641H1.21a.321.321 0 01-.321-.32zm2.9 10.607c-1.261 0-2.25-1.832-2.25-4.178s.988-4.178 2.25-4.178 2.25 1.832 2.25 4.178-.995 4.181-2.256 4.181zM6.354 6.104H3.14a.321.321 0 110-.641h3.214a.321.321 0 110 .641z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Shape",
        d: "M3.783 0a2.25 2.25 0 00-2.224 1.929h4.447A2.25 2.25 0 003.783 0zM6.443 2.572H1.128a5.946 5.946 0 00-.237 1.607h5.785a5.946 5.946 0 00-.233-1.607zM11.82 16.716h3.214v-1.284a2.893 2.893 0 10-5.786 0v1.284h.964a.321.321 0 010 .641h-.964v.321a.321.321 0 00.321.321h5.143a.321.321 0 00.321-.321v-.321H11.82a.321.321 0 110-.641zm-.964-1.929a.321.321 0 01-.641 0 1.55 1.55 0 011.606-1.608.321.321 0 110 .641.916.916 0 00-.966.964z"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/BathOil.tsx



const BathOil = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      "data-name": "Group 27",
      fill: color,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 67",
        d: "M3.866 16.077a2.481 2.481 0 001.645-1.613h-.42q-.269 0-.531-.012a1.23 1.23 0 01-.87.755.724.724 0 10.175.863z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 68",
        d: "M15.172 16.479a.725.725 0 10-.432-1.309 1.458 1.458 0 01-.78-.77 4.085 4.085 0 01-.686.062h-.315a2.318 2.318 0 001.543 1.579.725.725 0 00.67.438z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 69",
        d: "M13.988 2.638l-1.482-1.482a5.015 5.015 0 00-1.356.863l1.972 1.972a4.972 4.972 0 00.866-1.353z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 70",
        d: "M11.173 3.19a.148.148 0 00.108-.043l.208-.208a.147.147 0 00-.164-.237.15.15 0 00-.044.029l-.209.208a.148.148 0 00.108.252z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 71",
        d: "M10.547 3.819a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 72",
        d: "M9.92 4.445a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 73",
        d: "M11.932 3.313a.146.146 0 00-.193-.193.15.15 0 00-.044.029l-.208.209a.148.148 0 00.209.208l.208-.209a.144.144 0 00.028-.044z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 74",
        d: "M11.277 3.775a.148.148 0 00-.208 0l-.208.208a.148.148 0 00.209.208l.208-.208a.148.148 0 000-.208z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 75",
        d: "M10.652 4.402a.148.148 0 00-.208 0l-.208.209a.148.148 0 00.209.208l.208-.209a.148.148 0 000-.208z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 76",
        d: "M12.007 4.028a.148.148 0 00.108-.043l.208-.208a.143.143 0 00.029-.044.148.148 0 00-.238-.164l-.208.208a.148.148 0 000 .208.146.146 0 00.101.043z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 77",
        d: "M11.38 4.654a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 78",
        d: "M10.756 5.28a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        "data-name": "Path 79",
        d: "M17.414 7.083h-.886V.295a.295.295 0 00-.3-.3h-1.277a.3.3 0 00-.2.078l-1.061.976a1.175 1.175 0 00-.69.096l1.013 1.014a1.187 1.187 0 00.083-.68l.966-.888h.872v6.493H.59a.59.59 0 00-.59.591v.59a.59.59 0 00.59.59h.367c.045.229.108.491.176.794l.413 1.98a2.9 2.9 0 003.138 2.53c.134 0 .27.006.408.006h8.191a3.876 3.876 0 00.565-.041 3.157 3.157 0 002.637-2.342l.671-2.929h.3A.588.588 0 0018 8.265v-.59a.59.59 0 00-.586-.592zm-4.7 6.168a.035.035 0 000 .005v-.005z"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/Minus.tsx


const Minus = ({
  color = 'currentColor',
  width = '12px',
  height = '2px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 2",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
      "data-name": "Rectangle 522",
      width: "12",
      height: "2",
      rx: "1",
      fill: color
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/category/chair.tsx


const Chair = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40.4",
    height: "62",
    viewBox: "0 0 40.4 62",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Chair",
      transform: "translate(-312 -308)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
        id: "Ellipse_111",
        "data-name": "Ellipse 111",
        cx: "0.6",
        cy: "0.6",
        r: "0.6",
        transform: "translate(322 314.4)",
        strokeWidth: "2",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
        id: "Ellipse_112",
        "data-name": "Ellipse 112",
        cx: "0.6",
        cy: "0.6",
        r: "0.6",
        transform: "translate(341.2 314.4)",
        strokeWidth: "2",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
        id: "Ellipse_113",
        "data-name": "Ellipse 113",
        cx: "0.6",
        cy: "0.6",
        r: "0.6",
        transform: "translate(331.6 314.4)",
        strokeWidth: "2",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
        id: "Ellipse_114",
        "data-name": "Ellipse 114",
        cx: "0.6",
        cy: "0.6",
        r: "0.6",
        transform: "translate(322 324)",
        strokeWidth: "2",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
        id: "Ellipse_115",
        "data-name": "Ellipse 115",
        cx: "0.6",
        cy: "0.6",
        r: "0.6",
        transform: "translate(341.2 324)",
        strokeWidth: "2",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
        id: "Ellipse_116",
        "data-name": "Ellipse 116",
        cx: "0.6",
        cy: "0.6",
        r: "0.6",
        transform: "translate(331.6 324)",
        strokeWidth: "2",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
        id: "Ellipse_117",
        "data-name": "Ellipse 117",
        cx: "0.6",
        cy: "0.6",
        r: "0.6",
        transform: "translate(322 333.6)",
        strokeWidth: "2",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
        id: "Ellipse_118",
        "data-name": "Ellipse 118",
        cx: "0.6",
        cy: "0.6",
        r: "0.6",
        transform: "translate(341.2 333.6)",
        strokeWidth: "2",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
        id: "Ellipse_119",
        "data-name": "Ellipse 119",
        cx: "0.6",
        cy: "0.6",
        r: "0.6",
        transform: "translate(331.6 333.6)",
        strokeWidth: "2",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17427",
        "data-name": "Path 17427",
        d: "M351.4,339.8H313v-2.4a2.4,2.4,0,0,1,2.4-2.4H349a2.4,2.4,0,0,1,2.4,2.4Z",
        transform: "translate(0 5.2)",
        fill: "none",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
        id: "Line_7",
        "data-name": "Line 7",
        y1: "24",
        transform: "translate(315.4 345)",
        fill: "none",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
        id: "Line_8",
        "data-name": "Line 8",
        y2: "24",
        transform: "translate(349 345)",
        fill: "none",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17428",
        "data-name": "Path 17428",
        d: "M348.6,340.2H315V313.8a4.8,4.8,0,0,1,4.8-4.8h24a4.8,4.8,0,0,1,4.8,4.8Z",
        transform: "translate(0.4 0)",
        fill: "none",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/category/bed.tsx

const Bed = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      id: "Bed",
      d: "M228.5,466.75V455.5A7.5,7.5,0,0,0,221,448H191a7.5,7.5,0,0,0-7.5,7.5v11.25L176,491.125v11.25a1.874,1.874,0,0,0,1.875,1.875h3.75V508H183.5v-3.75h45V508h1.875v-3.75h3.75A1.874,1.874,0,0,0,236,502.375v-11.25ZM185.375,455.5A5.632,5.632,0,0,1,191,449.875h30a5.632,5.632,0,0,1,5.625,5.625v11.1q-.938-.072-1.875-.137V463a3.75,3.75,0,0,0-3.75-3.75h-9.375a3.75,3.75,0,0,0-3.75,3.75v2.824c-.625,0-1.25-.009-1.875-.009s-1.25,0-1.875.009V463a3.75,3.75,0,0,0-3.75-3.75H191a3.75,3.75,0,0,0-3.75,3.75v3.467q-.938.065-1.875.137Zm37.5,10.84q-6.557-.409-13.125-.5V463a1.877,1.877,0,0,1,1.875-1.875H221A1.877,1.877,0,0,1,222.875,463Zm-33.75,0V463A1.877,1.877,0,0,1,191,461.125h9.375A1.877,1.877,0,0,1,202.25,463v2.843Q195.684,465.933,189.125,466.34Zm-4.207,2.176c6.992-.549,14.077-.827,21.082-.827s14.09.277,21.082.827l6.331,20.576c-9.1-.517-18.313-.779-27.413-.779s-18.308.262-27.413.779Zm49.207,33.859h-56.25v-11.36q14.05-.823,28.125-.827t28.125.827Z",
      transform: "translate(-176 -448)",
      fill: "#212121"
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/category/book-shelf.tsx

const BookShelf = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48.75",
    height: "60",
    viewBox: "0 0 48.75 60",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      id: "Book_self",
      "data-name": "Book self",
      d: "M228.875,176h-45A1.874,1.874,0,0,0,182,177.875v52.5a1.874,1.874,0,0,0,1.875,1.875h3.75V236H189.5v-3.75h33.75V236h1.875v-3.75h3.75a1.874,1.874,0,0,0,1.875-1.875v-52.5A1.874,1.874,0,0,0,228.875,176Zm-23.437,54.375h-2.812v-11.25H200.75v11.25h-1.875v-11.25H197v11.25h-1.875v-11.25H193.25v11.25h-1.875v-11.25H189.5v11.25h-1.875v-11.25H185.75v11.25h-1.875V213.5h21.563Zm0-18.75h-6.562v-11.25H197v11.25h-1.875v-11.25H193.25v11.25h-1.875v-11.25H189.5v11.25h-1.875v-11.25H185.75v11.25h-1.875V194.75h21.563Zm0-18.75h-6.452l1.764-.6-3.6-10.658-1.777.6,3.6,10.654h-3.848v-11.25H193.25v11.25h-1.875v-11.25H189.5v11.25h-1.875v-11.25H185.75v11.25h-1.875v-15h21.563Zm23.438,37.5h-7.5v-11.25H219.5v11.25H212v-11.25h-1.875v11.25h-2.812V213.5h21.563Zm0-18.75h-5.5l1.752-.592-3.6-10.658-1.777.6,3.6,10.65H219.5V200.379h-1.875v11.246H215.75V200.379h-1.875v11.246H212V200.379h-1.875v11.246h-2.812V194.75h21.563Zm0-18.75H227v-11.25h-1.875v11.25H223.25v-11.25h-1.875v11.25H219.5v-11.25h-1.875v11.25H215.75v-11.25h-1.875v11.25H212v-11.25h-1.875v11.25h-2.812v-15h21.563Z",
      transform: "translate(-182 -176)",
      fill: "#212121"
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/category/dressing-table.tsx


const DressingTable = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "39.867",
    height: "62",
    viewBox: "0 0 39.867 62",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Dressing_Table",
      "data-name": "Dressing Table",
      transform: "translate(-942.634 -346.008)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
        id: "Rectangle_1064",
        "data-name": "Rectangle 1064",
        width: "18.934",
        height: "19.835",
        transform: "translate(943.634 384.083)",
        strokeWidth: "2",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17426",
        "data-name": "Path 17426",
        d: "M970.947,347.008h0a14.519,14.519,0,0,1,14.476,14.476v22.6H956.471v-22.6A14.519,14.519,0,0,1,970.947,347.008Z",
        transform: "translate(-8.38)",
        fill: "none",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
        id: "Rectangle_1065",
        "data-name": "Rectangle 1065",
        width: "18.934",
        height: "19.835",
        transform: "translate(962.568 384.083)",
        strokeWidth: "2",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
        id: "Line_1",
        "data-name": "Line 1",
        y2: "3.09",
        transform: "translate(958.781 392.455)",
        fill: "none",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
        id: "Line_2",
        "data-name": "Line 2",
        y2: "3.09",
        transform: "translate(966.355 392.455)",
        fill: "none",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
        id: "Line_3",
        "data-name": "Line 3",
        y2: "3.09",
        transform: "translate(945.729 403.918)",
        fill: "none",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
        id: "Line_4",
        "data-name": "Line 4",
        y2: "3.09",
        transform: "translate(979.034 403.918)",
        fill: "none",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
        id: "Line_5",
        "data-name": "Line 5",
        x1: "15.39",
        y2: "15.39",
        transform: "translate(954.873 359.746)",
        fill: "none",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
        id: "Line_6",
        "data-name": "Line 6",
        x1: "8.437",
        y2: "8.437",
        transform: "translate(955.706 360.578)",
        fill: "none",
        stroke: "#212121",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/category/reading-table.tsx


const ReadingTable = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Reading_Table",
      "data-name": "Reading Table",
      transform: "translate(-448 -584)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17417",
        "data-name": "Path 17417",
        d: "M506.125,608.375H459.25a3.749,3.749,0,0,0-2.812-3.627v-3.873a.938.938,0,0,0-.232-.617l-5.843-6.679,9.16-5.829H463v.944a4.676,4.676,0,0,0-1.875,3.743v.938H470.5v-.937a4.676,4.676,0,0,0-1.875-3.743v-1.882a2.811,2.811,0,0,0-5.462-.937H459.25a.938.938,0,0,0-.5.146l-10.312,6.563a.938.938,0,0,0-.2,1.408l6.331,7.236v3.52a3.749,3.749,0,0,0-2.812,3.627h-1.875A1.875,1.875,0,0,0,448,610.25v31.875A1.875,1.875,0,0,0,449.875,644h1.875a1.875,1.875,0,0,0,1.875-1.875V614H478v28.125A1.875,1.875,0,0,0,479.875,644h26.25A1.875,1.875,0,0,0,508,642.125V610.25A1.875,1.875,0,0,0,506.125,608.375Zm-40.312-22.5a.939.939,0,0,1,.938.938v2.817l.747.562a2.805,2.805,0,0,1,.967,1.308h-5.3a2.805,2.805,0,0,1,.967-1.308l.747-.562v-2.817A.939.939,0,0,1,465.813,585.875ZM455.5,606.5a1.877,1.877,0,0,1,1.875,1.875h-3.75A1.877,1.877,0,0,1,455.5,606.5Zm50.625,35.625h-26.25V629h26.25Zm0-15h-26.25V614h26.25Zm0-15H451.75v30h-1.875V610.25h56.25Z",
        fill: "#212121"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17418",
        "data-name": "Path 17418",
        d: "M492.938,619.875h3.75a.938.938,0,0,0,0-1.875h-3.75a.938.938,0,0,0,0,1.875Z",
        transform: "translate(-2.75 -2.125)",
        fill: "#212121"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17419",
        "data-name": "Path 17419",
        d: "M492.938,635.875h3.75a.938.938,0,0,0,0-1.875h-3.75a.938.938,0,0,0,0,1.875Z",
        transform: "translate(-2.75 -3.125)",
        fill: "#212121"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/category/sofa.tsx

const Sofa = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "66.782",
    height: "48",
    viewBox: "0 0 66.782 48",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      id: "Sofa",
      d: "M100.643,196.523h-.116a6.04,6.04,0,0,0-2.092.375v-4.549A8.348,8.348,0,0,0,90.087,184H56.7a8.348,8.348,0,0,0-8.348,8.348v4.532a6.258,6.258,0,0,0-2.087-.358c-.133,0-.266,0-.4.013a6.261,6.261,0,0,0-1.687,12.151v21.227A2.086,2.086,0,0,0,46.261,232h4.174a2.086,2.086,0,0,0,2.087-2.087H94.261A2.086,2.086,0,0,0,96.348,232h4.174a2.086,2.086,0,0,0,2.087-2.087V208.686a6.261,6.261,0,0,0-1.966-12.163Zm-50.208,33.39H46.261V208.686a2.086,2.086,0,0,0-1.391-1.967,4.154,4.154,0,0,1-2.778-4.151,4.211,4.211,0,0,1,3.9-3.951c.09-.005.181-.008.27-.008a4.178,4.178,0,0,1,4.174,4.174Zm43.826-2.087H52.522v-6.261H94.261Zm-41.739-8.348v-6.261H70.261a2.089,2.089,0,0,1,2.087,2.087v4.174Zm41.739,0H74.435V215.3a2.089,2.089,0,0,1,2.087-2.087H94.261Zm0-16.555v8.207H76.522a4.161,4.161,0,0,0-3.13,1.419,4.161,4.161,0,0,0-3.13-1.419H52.522v-8.348a6.245,6.245,0,0,0-2.087-4.665v-5.769a6.269,6.269,0,0,1,6.261-6.261H90.087a6.269,6.269,0,0,1,6.261,6.261v5.831A6.467,6.467,0,0,0,94.261,202.923Zm7.652,3.8a2.086,2.086,0,0,0-1.391,1.967v21.227H96.348v-26.99a4.306,4.306,0,0,1,4.179-4.315h.076a4.174,4.174,0,0,1,1.31,8.109Z",
      transform: "translate(-40 -184)",
      fill: "#212121"
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/category/center-table.tsx

const CenterTable = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "48.75",
    viewBox: "0 0 60 48.75",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      id: "Center_table",
      "data-name": "Center table",
      d: "M226.757,591.945A98.842,98.842,0,0,0,206,590a98.842,98.842,0,0,0-20.757,1.945C179.11,593.33,176,595.2,176,597.5s3.11,4.17,9.243,5.555a93.868,93.868,0,0,0,17.945,1.915v4.724a4.674,4.674,0,0,0,0,7.487v8.444h-1.875a4.7,4.7,0,0,0-4.594,3.75h-1.031A4.693,4.693,0,0,0,191,634.063v3.75a.938.938,0,0,0,.938.938h3.75a.938.938,0,0,0,.938-.937V635h.938a4.7,4.7,0,0,0,4.594-3.75h1.031v.938a2.813,2.813,0,0,0,5.625,0v-.937h1.031a4.7,4.7,0,0,0,4.594,3.75h.938v2.813a.938.938,0,0,0,.938.938h3.75a.938.938,0,0,0,.938-.937v-3.75a4.693,4.693,0,0,0-4.687-4.687h-1.031a4.7,4.7,0,0,0-4.594-3.75h-1.875v-8.444a4.674,4.674,0,0,0,0-7.487V604.97a93.877,93.877,0,0,0,17.945-1.915C232.89,601.67,236,599.8,236,597.5S232.89,593.33,226.757,591.945Zm-23.57,37.43h-1.875a.938.938,0,0,0-.937.938,2.816,2.816,0,0,1-2.812,2.813h-1.875a.938.938,0,0,0-.937.938v2.813h-1.875v-2.812a2.816,2.816,0,0,1,2.813-2.812h1.875a.938.938,0,0,0,.938-.937,2.816,2.816,0,0,1,2.813-2.812h1.875Zm7.5-1.875a2.816,2.816,0,0,1,2.813,2.813.938.938,0,0,0,.938.938h1.875a2.816,2.816,0,0,1,2.813,2.813v2.813H217.25v-2.812a.938.938,0,0,0-.937-.937h-1.875a2.816,2.816,0,0,1-2.812-2.812.938.938,0,0,0-.937-.937h-1.875V627.5Zm-3-11.817-.747.562v15.942a.938.938,0,0,1-1.875,0V616.245l-.747-.562a2.8,2.8,0,0,1,0-4.491l.747-.562V605h1.875v5.63l.747.562a2.8,2.8,0,0,1,0,4.491Zm18.659-14.457a96.9,96.9,0,0,1-20.344,1.9,96.9,96.9,0,0,1-20.344-1.9c-6.143-1.387-7.781-2.994-7.781-3.726s1.639-2.339,7.781-3.726a96.9,96.9,0,0,1,20.344-1.9,96.9,96.9,0,0,1,20.344,1.9c6.143,1.387,7.781,2.994,7.781,3.726S232.486,599.839,226.344,601.226Z",
      transform: "translate(-176 -590)",
      fill: "#212121"
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/category/relax-chair.tsx


const RelaxChair = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "45",
    height: "60",
    viewBox: "0 0 45 60",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Relax_chair",
      "data-name": "Relax chair",
      transform: "translate(-48 -584)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17415",
        "data-name": "Path 17415",
        d: "M82.71,587.219A3.751,3.751,0,0,0,79,584H63a3.751,3.751,0,0,0-3.713,3.219L56,614H86Zm-21.562.25A1.883,1.883,0,0,1,63,585.875H79a1.883,1.883,0,0,1,1.853,1.595l3.029,24.655H58.12Z",
        transform: "translate(-0.5)",
        fill: "#212121"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17416",
        "data-name": "Path 17416",
        d: "M91.125,608H89.25a1.875,1.875,0,0,0-1.875,1.875v1.875a1.875,1.875,0,0,0,1.875,1.875v7.5H87.375a3.75,3.75,0,0,0-3.75-3.75H57.375a3.75,3.75,0,0,0-3.75,3.75H51.75v-7.5a1.875,1.875,0,0,0,1.875-1.875v-1.875A1.875,1.875,0,0,0,51.75,608H49.875A1.875,1.875,0,0,0,48,609.875v1.875a1.875,1.875,0,0,0,1.875,1.875v7.5A1.875,1.875,0,0,0,51.75,623h2.38a3.747,3.747,0,0,0,3.245,1.875H66.75v3.75a1.875,1.875,0,0,0,1.875,1.875h.938v1.875H63.938a4.693,4.693,0,0,0-4.687,4.688v2.976a2.813,2.813,0,1,0,1.875,0v-2.976a2.816,2.816,0,0,1,2.813-2.812h5.625v5.788a2.813,2.813,0,1,0,1.875,0V634.25h5.625a2.816,2.816,0,0,1,2.813,2.813v2.976a2.813,2.813,0,1,0,1.875,0v-2.976a4.693,4.693,0,0,0-4.687-4.687H71.438V630.5h.938a1.875,1.875,0,0,0,1.875-1.875v-3.75h9.375A3.744,3.744,0,0,0,86.869,623H89.25a1.875,1.875,0,0,0,1.875-1.875v-7.5A1.875,1.875,0,0,0,93,611.75v-1.875A1.875,1.875,0,0,0,91.125,608Zm-41.25,3.75v-1.875H51.75v1.875Zm10.313,31.875a.938.938,0,1,1,.938-.937A.939.939,0,0,1,60.188,643.625Zm20.625-1.875a.938.938,0,1,1-.937.938A.939.939,0,0,1,80.813,641.75ZM70.5,643.625a.938.938,0,1,1,.938-.937A.939.939,0,0,1,70.5,643.625Zm1.875-15h-3.75v-3.75h3.75ZM83.625,623H57.375a1.875,1.875,0,0,1,0-3.75h26.25a1.875,1.875,0,0,1,0,3.75Zm7.5-11.25H89.25v-1.875h1.875Z",
        transform: "translate(0 -1.5)",
        fill: "#212121"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/category/storage.tsx


const Storage = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48.75",
    height: "60",
    viewBox: "0 0 48.75 60",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Storage",
      transform: "translate(-318 -448)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17422",
        "data-name": "Path 17422",
        d: "M364.875,448h-45A1.874,1.874,0,0,0,318,449.875v52.5a1.874,1.874,0,0,0,1.875,1.875h3.75V508H325.5v-3.75h33.75V508h1.875v-3.75h3.75a1.874,1.874,0,0,0,1.875-1.875v-52.5A1.874,1.874,0,0,0,364.875,448Zm-22.5,54.375h-22.5V493h22.5Zm0-11.25h-22.5V459.25h10.313v2.311l-8.02,5.347a.938.938,0,0,0,.52,1.717h16.875a.938.938,0,0,0,.52-1.717l-8.02-5.347V459.25h10.313Zm-11.25-27.936,5.341,3.561H325.784Zm11.25-5.814h-22.5v-7.5h22.5Zm22.5,45H344.25V493h20.625Zm0-11.25H344.25v-41.25h20.625Z",
        fill: "#212121"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17423",
        "data-name": "Path 17423",
        d: "M355,502h4a1,1,0,0,0,0-2h-4a1,1,0,0,0,0,2Z",
        transform: "translate(-2.543 -4)",
        fill: "#212121"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17424",
        "data-name": "Path 17424",
        d: "M329,502h4a1,1,0,0,0,0-2h-4a1,1,0,0,0,0,2Z",
        transform: "translate(-0.707 -4)",
        fill: "#212121"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17425",
        "data-name": "Path 17425",
        d: "M349,478a1,1,0,0,0,1-1v-4a1,1,0,0,0-2,0v4A1,1,0,0,0,349,478Z",
        transform: "translate(-1.95 -1.655)",
        fill: "#212121"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/category/tools.tsx


const Tools = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Tools",
      transform: "translate(-448 -720)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17429",
        "data-name": "Path 17429",
        d: "M477.063,765h-.88l.851-3.4-.967-3.865L474.25,765H455.5l3.281-13.125H474.6L474.135,750H459.25l3.281-13.125h8.322L470.385,735H463l3.75-15h-1.933l-14.531,58.125h-1.348a.938.938,0,0,0,0,1.875h3.75a.938.938,0,0,0,0-1.875h-.469l2.813-11.25h18.75l-2.812,11.25h-1.406a.938.938,0,0,0,0,1.875h3.75a.938.938,0,0,0,0-1.875H472.9l2.813-11.25h1.349a.938.938,0,0,0,0-1.875Z",
        fill: "#212121"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17430",
        "data-name": "Path 17430",
        d: "M508.434,778.125h-1.349l-2.812-11.25h.412a.938.938,0,0,0,0-1.875h-.88l-3.281-13.125h.412a.938.938,0,0,0,0-1.875h-.88l-3.281-13.125h.412a.938.938,0,0,0,0-1.875h-.88l-3.281-13.125h2.287a.938.938,0,0,0,0-1.875H469.938l.114.455,14.417,57.67h-.411a.938.938,0,0,0,0,1.875h3.75a.938.938,0,0,0,0-1.875H486.4l-2.812-11.25h18.75l2.813,11.25h-.469a.938.938,0,0,0,0,1.875h3.75a.938.938,0,0,0,0-1.875Zm-36.094-56.25h18.75L494.371,735h-18.75Zm3.75,15h18.75L498.121,750h-18.75ZM483.121,765l-3.281-13.125h18.75L501.871,765Z",
        transform: "translate(-1.371)",
        fill: "#212121"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/category-icons.ts









































// CONCATENATED MODULE: ./src/components/card-menu.tsx











const CardBox = external_styled_components_default.a.div.withConfig({
  displayName: "card-menu__CardBox",
  componentId: "kplyj5-0"
})(props => css_default()({
  backgroundColor: ['body.text', 'body.text', 'body.text'],
  textAlign: 'center',
  padding: '1rem 10px',
  borderRadius: [10, 10, 6],
  cursor: 'pointer',
  border: props.active ? '2px solid' : '2px solid',
  borderColor: props.active ? 'borderColorActive' : ['body.bg2', 'body.bg2', 'body.bg']
}));

const Icon = ({
  name,
  style
}) => {
  const TagName = category_icons_namespaceObject[name];
  return !!TagName ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(TagName, {
    style: style
  }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: ["Invalid icon ", name]
  });
};

const CardMenu = ({
  data,
  onClick,
  active,
  style
}) => {
  const {
    config
  } = Object(external_react_["useContext"])(config_context["a" /* ConfigContext */]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: data.map(category => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardBox, {
      onClick: () => onClick(category.id),
      active: category.id.toString() === active,
      role: "button",
      style: style,
      children: [category.photo ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(box["a" /* Box */], {
        padding: "1rem",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "https://whatsappneed.com/storage/" + category.photo,
          style: {
            height: 40,
            width: 'auto'
          },
          alt: ""
        })
      }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
        as: "span",
        color: config.restaurant.userConfig.dark ? "#fff" : "#212121",
        fontSize: 14,
        fontWeight: 600,
        children: Object(language_utils["a" /* getCorrectTranslation */])(config, category, "Title")
      })]
    }, category.id))
  });
};
// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: ./src/components/scrollbar/scrollbar.tsx
var scrollbar = __webpack_require__("ewwY");

// CONCATENATED MODULE: ./src/components/category-walker/category-walker.style.tsx


const WalkerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "category-walkerstyle__WalkerWrapper",
  componentId: "sc-18jt816-0"
})(css_default()({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0px 20px 15px',
  button: {
    padding: 0
  }
}));
const CategoryWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "category-walkerstyle__CategoryWrapper",
  componentId: "sc-18jt816-1"
})(css_default()({
  display: 'flex',
  alignItems: 'baseline',
  width: '100%'
}));
const Category = external_styled_components_default.a.span.withConfig({
  displayName: "category-walkerstyle__Category",
  componentId: "sc-18jt816-2"
})(css_default()({
  fontSize: 'sm',
  color: 'text.bold',
  fontWeight: 'bold',
  padding: '5px 10px',
  backgroundColor: 'gray.500',
  borderRadius: 'base'
}));
const NoCategory = external_styled_components_default.a.span.withConfig({
  displayName: "category-walkerstyle__NoCategory",
  componentId: "sc-18jt816-3"
})(css_default()({
  fontSize: 'base',
  color: 'text.bold',
  fontWeight: 'bold'
}));
const IconWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "category-walkerstyle__IconWrapper",
  componentId: "sc-18jt816-4"
})(css_default()({
  display: 'flex',
  padding: '0 8px',
  color: 'gray.900'
}));
// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__("KwCx");

// EXTERNAL MODULE: external "react-spring-modal"
var external_react_spring_modal_ = __webpack_require__("Ay7f");

// EXTERNAL MODULE: ./src/assets/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__("2nMb");

// CONCATENATED MODULE: ./src/components/spring-modal/spring-modal.tsx



function spring_modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function spring_modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { spring_modal_ownKeys(Object(source), true).forEach(function (key) { spring_modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { spring_modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function spring_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { useAppState, useAppDispatch } from 'contexts/app/app.provider';




const SpringModal = ({
  isOpen,
  onRequestClose,
  children,
  style = {}
}) => {
  // const dispatch = useAppDispatch();
  // const isModalOpen = useAppState('isModalOpen');
  // const onClose = () => {
  //   dispatch({
  //     type: 'TOGGLE_MODAL',
  //   });
  // };
  const transition = Object(external_react_spring_["useTransition"])(isOpen, null, {
    from: {
      transform: 'translateY(100%) translateY(55px) translateX(-50%)'
    },
    enter: {
      transform: 'translateY(0%) translateY(0) translateX(-50%)'
    },
    leave: {
      transform: 'translateY(100%) translateY(55px) translateX(-50%)'
    }
  });
  const {
    config
  } = Object(external_react_["useContext"])(config_context["a" /* ConfigContext */]);
  const staticStyles = {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    padding: '0',
    width: 'calc(100% + 1px)',
    height: '100%',
    maxHeight: '70vh',
    backgroundColor: '#ffffff',
    borderRadius: '0px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    zIndex: 99999
  };
  const buttonStyle = {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: config.restaurant.userConfig.dark ? "#000" : "#fff",
    color: config.restaurant.userConfig.dark ? "#444" : "#0D1136",
    border: 0,
    outline: 0,
    boxShadow: 'none',
    borderRadius: '50%',
    position: 'absolute',
    top: -55,
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'pointer',
    ':focus': {
      outline: 0,
      boxShadow: 'none'
    }
  };
  const scrollbarStyle = {
    height: '100%',
    maxHeight: '100%',
    backgroundColor: config.restaurant.userConfig.dark ? "#000" : "#fff"
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_spring_modal_["BaseModal"], {
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    children: transition.map(({
      item,
      key,
      props: transitionStyles
    }) => item && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_spring_["animated"].div, {
      style: spring_modal_objectSpread(spring_modal_objectSpread(spring_modal_objectSpread({}, transitionStyles), staticStyles), style),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        type: "button",
        onClick: onRequestClose,
        style: spring_modal_objectSpread({}, buttonStyle),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseIcon["a" /* CloseIcon */], {
          style: {
            width: 12,
            height: 12
          }
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(scrollbar["a" /* Scrollbar */], {
        style: spring_modal_objectSpread({}, scrollbarStyle),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            padding: '30px'
          },
          children: children
        })
      })]
    }, key))
  });
};

/* harmony default export */ var spring_modal = (SpringModal);
// EXTERNAL MODULE: external "lodash/startCase"
var startCase_ = __webpack_require__("GnvZ");
var startCase_default = /*#__PURE__*/__webpack_require__.n(startCase_);

// CONCATENATED MODULE: ./src/components/category-walker/category-walker.tsx









const CategoryWalker = ({
  children,
  style
}) => {
  const {
    0: isOpen,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    query
  } = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(WalkerWrapper, {
    style: style,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CategoryWrapper, {
      children: query.category ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Category, {
        children: startCase_default()(query.category)
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(NoCategory, {
        children: "No Category Selected"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(button_button["a" /* Button */], {
      variant: "text",
      onClick: () => setOpen(true),
      children: "Filter"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(spring_modal, {
      isOpen: isOpen,
      onRequestClose: () => setOpen(false),
      children: children
    })]
  });
};

/* harmony default export */ var category_walker = (CategoryWalker);
// CONCATENATED MODULE: ./src/layouts/sidebar/sidebar-with-card-menu.tsx



function sidebar_with_card_menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function sidebar_with_card_menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sidebar_with_card_menu_ownKeys(Object(source), true).forEach(function (key) { sidebar_with_card_menu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sidebar_with_card_menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function sidebar_with_card_menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Aside = external_styled_components_default.a.aside.withConfig({
  displayName: "sidebar-with-card-menu__Aside",
  componentId: "sc-1563805-0"
})({
  width: '300px',
  position: 'fixed',
  top: 110,
  left: 30,
  height: 'calc(100% - 110px)'
});
const CardMenuWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "sidebar-with-card-menu__CardMenuWrapper",
  componentId: "sc-1563805-1"
})({
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: '1fr 1fr',
  gridAutoRows: 'max-content',
  paddingBottom: 30,
  '@media (min-width: 550px) and (max-width: 990px)': {
    gridTemplateColumns: '1fr 1fr 1fr'
  }
});
const MobileOnly = external_styled_components_default.a.div.withConfig({
  displayName: "sidebar-with-card-menu__MobileOnly",
  componentId: "sc-1563805-2"
})({
  display: 'none',
  zIndex: 10,
  '@media (max-width: 990px)': {
    display: 'block'
  }
});
const DesktopOnly = external_styled_components_default.a.div.withConfig({
  displayName: "sidebar-with-card-menu__DesktopOnly",
  componentId: "sc-1563805-3"
})({
  display: 'none',
  '@media (min-width: 991px)': {
    display: 'block'
  }
});
const SidebarWithCardMenu = ({
  type,
  config,
  data,
  error
}) => {
  const router = Object(router_["useRouter"])();
  if (error) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(error_message["a" /* default */], {
    message: error.message
  });
  if (!data) return null;
  const {
    pathname,
    query
  } = router;
  const selectedQueries = query.category;

  const onCategoryClick = slug => {
    router.push({
      pathname,
      query: sidebar_with_card_menu_objectSpread(sidebar_with_card_menu_objectSpread({}, query), {}, {
        text: "",
        category: slug
      })
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MobileOnly, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_stickynode_default.a, {
        top: 67,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(category_walker, {
          style: {
            backgroundColor: config.restaurant.userConfig.dark ? "#444" : "#fff",
            paddingTop: '15px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.06)'
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardMenuWrapper, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardMenu, {
              data: data,
              onClick: onCategoryClick,
              active: selectedQueries,
              config: config
            })
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DesktopOnly, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Aside, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(scrollbar["a" /* Scrollbar */], {
          style: {
            height: '100%',
            maxHeight: '100%'
          },
          options: {
            scrollbars: {
              visibility: 'hidden'
            }
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardMenuWrapper, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardMenu, {
              data: data,
              onClick: onCategoryClick,
              active: selectedQueries,
              config: config
            })
          })
        })
      })
    })]
  });
};
// EXTERNAL MODULE: ./src/assets/images/banner/grocery-banner-img-one.jpg
var grocery_banner_img_one = __webpack_require__("SyRa");
var grocery_banner_img_one_default = /*#__PURE__*/__webpack_require__.n(grocery_banner_img_one);

// EXTERNAL MODULE: ./src/assets/images/banner/grocery-banner-img-two.jpg
var grocery_banner_img_two = __webpack_require__("9OV9");
var grocery_banner_img_two_default = /*#__PURE__*/__webpack_require__.n(grocery_banner_img_two);

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// EXTERNAL MODULE: ./src/utils/api/config.ts
var api_config = __webpack_require__("57Ed");

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);

// CONCATENATED MODULE: ./src/data/use-category.ts
 // import productFetcher from 'utils/api/product';

const fetcher = url => fetch(url).then(res => res.json());

function useCategory({
  type,
  slug
}) {
  const {
    data,
    mutate,
    error
  } = external_swr_default()(`${"https://whatsappneed.com/api/v1"}/categories?user=${slug}`, fetcher);
  const loading = !data && !error;
  const categories = data === null || data === void 0 ? void 0 : data.data; // const paginatedData = data?.slice(offset, limit);
  // const loggedOut = error && error.status === 403;

  return {
    loading,
    error,
    data: categories,
    // loggedOut,
    // user: data,
    mutate
  };
}
// CONCATENATED MODULE: ./src/pages/index.tsx

















const Banner = dynamic_default()(() => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, "WYzD")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("WYzD")],
    modules: ['components/banner/banner-two']
  }
});
const CartPopUp = dynamic_default()(() => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "gZAk")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("gZAk")],
    modules: ['features/carts/cart-popup']
  }
});
const bannerSlides = [{
  img: grocery_banner_img_one_default.a,
  alt: 'Slide One'
}, {
  img: grocery_banner_img_two_default.a,
  alt: 'Slide Two'
}];
const PAGE_TYPE = 'grocery';
async function getServerSideProps({
  query
}) {
  // const config = await getConfig(query.code);
  const config = await Object(api_config["a" /* getConfig */])(query.code); // const data = await getProductBySlug(config?.restaurant?.slug, params.slug);

  return {
    props: {
      // data,
      config
    }
  };
}
function GroceryTwoPage({
  deviceType
}) {
  var _config$restaurant, _router$query$categor, _config$restaurant2, _config$restaurant2$u;

  const router = Object(router_["useRouter"])();
  const {
    config
  } = Object(external_react_["useContext"])(config_context["a" /* ConfigContext */]);
  const {
    data,
    error
  } = useCategory({
    type: PAGE_TYPE,
    slug: config === null || config === void 0 ? void 0 : (_config$restaurant = config.restaurant) === null || _config$restaurant === void 0 ? void 0 : _config$restaurant.slug
  });
  const selectedQueries = (_router$query$categor = router.query.category) === null || _router$query$categor === void 0 ? void 0 : _router$query$categor.toString();
  const targetCategory = data === null || data === void 0 ? void 0 : data.filter(m => m.id === parseInt(selectedQueries));
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(reuse_modal_["Modal"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(seo["a" /* SEO */], {
      title: config.qrcode.title + " | Home Page",
      description: config.description
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentArea, {
      style: {
        backgroundColor: config === null || config === void 0 ? void 0 : (_config$restaurant2 = config.restaurant) === null || _config$restaurant2 === void 0 ? void 0 : (_config$restaurant2$u = _config$restaurant2.userConfig) === null || _config$restaurant2$u === void 0 ? void 0 : _config$restaurant2$u.bg_color
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SidebarWithCardMenu, {
        type: PAGE_TYPE,
        config: config,
        data: data,
        error: error
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
        children: data && targetCategory && targetCategory.length > 0 && targetCategory[0].featured ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProductGrid, {
          type: PAGE_TYPE,
          config: config
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(product_grid_three["a" /* ProductGrid */], {
          type: PAGE_TYPE,
          config: config
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CartPopUp, {
      deviceType: deviceType,
      config: config
    })]
  });
}
const ContentArea = external_styled_components_default.a.div.withConfig({
  displayName: "pages__ContentArea",
  componentId: "sc-1mj09pc-0"
})(css_default()({
  overflow: 'hidden',
  padding: ['68px 0 100px', '68px 0 50px', '110px 2rem 50px'],
  display: 'grid',
  minHeight: '100vh',
  gridColumnGap: '30px',
  gridRowGap: ['15px', '20px', '0'],
  gridTemplateColumns: ['minmax(0, 1fr)', 'minmax(0, 1fr)', '300px minmax(0, 1fr)'],
  backgroundColor: 'body.bg'
}));

/***/ }),

/***/ "RjkI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ConfigContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "Sy3N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useProducts; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aYjl");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jYXs");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_1__);


const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.3,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  minMatchCharLength: 2,
  keys: ['title']
};

function search(list, pattern) {
  const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_1___default.a(list, options);
  return fuse.search(pattern).map(current => current.item);
} // import productFetcher from 'utils/api/product';


const productFetcher = url => fetch(url).then(res => res.json());

function useProducts(variables) {
  const {
    type,
    text,
    category,
    offset = 0,
    limit = 20,
    slug,
    altLang
  } = variables !== null && variables !== void 0 ? variables : {};
  const {
    data,
    mutate,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(text ? !altLang ? `${"https://whatsappneed.com/api/v1"}/item/search?user=${slug}&maintitle=${text}&maindesc=${text}` : `${"https://whatsappneed.com/api/v1"}/item/search?user=${slug}&atltitle=${text}&altdesc=${text}` : category ? `${"https://whatsappneed.com/api/v1"}/categories/${category}/items?user=${slug}` : `${"https://whatsappneed.com/api/v1"}/items?user=${slug}`, productFetcher);
  const loading = !data && !error;
  const products = data === null || data === void 0 ? void 0 : data.data; // need to remove when you using real API integration
  // const [formattedData, setFormattedData] = useState(false);

  /*let products = data?.filter((current) => current.type === type);
  if (category) {
    products = products?.filter((product) =>
      product.categories.find(
        (category_item) => category_item.slug === category
      )
    );
  }
  if (text) {
    products = search(products, text);
  }*/
  // let localOffset = offset;
  // let localLimit = limit;
  // const fetchMore = async (os, lmt) => {
  //   localOffset = os;
  //   localLimit = lmt;
  //   setFormattedData(true);
  // };
  // console.log('object');
  // data: [
  //   ...state.data,
  //   ...state.total.slice(
  //     state.data.length,
  //     state.data.length + state.limit
  //   ),
  // ],
  // need to implement fetchMore
  // const hasMore = products?.length > localOffset + localLimit;

  return {
    loading,
    error,
    data: products,
    // hasMore,
    mutate // fetchMore,

  };
}

/***/ }),

/***/ "SyRa":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/grocery-banner-img-one-f61643072d29ecf1481c657015b69ea3.jpg";

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "aHYz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemToCart; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tFEG");
/* harmony import */ var _counter_counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0THn");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("6mxo");









const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "add-item-to-cart__Icon",
  componentId: "sc-1ruto21-0"
})(Object(styled_system__WEBPACK_IMPORTED_MODULE_6__["variant"])({
  variants: {
    full: {
      px: 3,
      height: 36,
      backgroundColor: 'buttonIcon',
      transition: '0.35s ease-in-out',
      display: 'flex',
      alignItems: 'center'
    }
  }
}));
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "add-item-to-cart__Button",
  componentId: "sc-1ruto21-1"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_3___default()({
  width: 36,
  height: 36,
  borderRadius: 6,
  transition: '0.35s ease-in-out',
  backgroundColor: '#fff',
  border: '1px solid',
  borderColor: '#e6e6e6',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'primary.regular',
    borderColor: 'primary.regular',
    color: '#fff'
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_6__["variant"])({
  variants: {
    full: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'secondary.regular',
      padding: 0,
      border: 'none',
      overflow: 'hidden',
      color: 'darkBrightColor',
      ':hover': {
        backgroundColor: 'primary.hover',
        borderColor: 'primary.hover',
        color: 'brightDarkColor',
        [Icon]: {
          backgroundColor: 'primary.regular',
          color: 'brightDarkColor'
        }
      }
    }
  }
}));
const AddItemToCart = ({
  data,
  variant,
  buttonText
}) => {
  const {
    addItem,
    removeItem,
    getItem,
    isInCart
  } = Object(contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_4__[/* useCart */ "b"])();

  const handleAddClick = e => {
    e.stopPropagation();
    addItem(data); // if (!isInCart(data.id)) {
    //   cartAnimation(e);
    // }
  };

  const handleRemoveClick = e => {
    e.stopPropagation();
    removeItem(data);
  };

  return !isInCart(data.id) ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Button, {
    "aria-label": "add item to cart",
    onClick: handleAddClick,
    variant: variant,
    children: [!!buttonText && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_box__WEBPACK_IMPORTED_MODULE_7__[/* Box */ "a"], {
      flexGrow: 1,
      children: buttonText
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Icon, {
      variant: variant,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          "data-name": "Path 9",
          d: "M143.407,137.783h-1.25v4.375h-4.375v1.25h4.375v4.375h1.25v-4.375h4.375v-1.25h-4.375Z",
          transform: "translate(-137.782 -137.783)",
          fill: "currentColor"
        })
      })
    })]
  }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_counter_counter__WEBPACK_IMPORTED_MODULE_5__[/* Counter */ "a"], {
    value: getItem(data.id).quantity,
    onDecrement: handleRemoveClick,
    onIncrement: handleAddClick,
    className: "card-counter",
    variant: variant || 'altHorizontal'
  });
};

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath = "/front" || false;

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "ewwY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scrollbar; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("trJ8");
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const Scrollbar = (_ref) => {
  let {
    children,
    className,
    options,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "options", "style"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_1__["OverlayScrollbarsComponent"], _objectSpread(_objectSpread({
    options: _objectSpread({
      className: `${className} os-theme-thin`,
      scrollbars: {
        autoHide: 'leave'
      }
    }, options),
    style: style
  }, props), {}, {
    children: children
  }));
};

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hy7I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCard; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_add_item_to_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("aHYz");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6mxo");
/* harmony import */ var _contexts_language_language_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("KVly");
/* harmony import */ var contexts_config_config_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("RjkI");










const Card = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "product-card-seven__Card",
  componentId: "sc-15zj106-0"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_5___default()({
  backgroundColor: 'body.bgItem',
  //background color for carts
  overflow: 'hidden',
  borderRadius: 6,
  // border: '1px solid #f3f3f3',//border color
  display: 'flex',
  flexDirection: 'column',
  transition: '0.3s ease-in-out',
  cursor: 'pointer',
  ':hover': {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
    transform: 'translateY(-5px)'
  }
}));
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "product-card-seven__ImageWrapper",
  componentId: "sc-15zj106-1"
})({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
  overflow: 'hidden',
  '@media screen and (max-width: 1280px)': {
    height: 250
  },
  '@media screen and (max-width: 560px)': {
    height: 180
  }
});
const Image = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img.withConfig({
  displayName: "product-card-seven__Image",
  componentId: "sc-15zj106-2"
})({
  maxWidth: '100%',
  maxHeight: '100%',
  width: '100%'
});
const Discount = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "product-card-seven__Discount",
  componentId: "sc-15zj106-3"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_5___default()({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  backgroundColor: 'primary.regular',
  color: '#fff',
  overflow: 'hidden',
  padding: '0.25rem 0.5rem',
  fontSize: 12,
  borderRadius: 6,
  pointerEvents: 'none'
}));
const Title = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h2.withConfig({
  displayName: "product-card-seven__Title",
  componentId: "sc-15zj106-4"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_5___default()({
  marginBottom: 10,
  color: 'text.medium',
  //description for each product
  fontSize: 14,
  fontWeight: 'normal'
}));
const PriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "product-card-seven__PriceWrapper",
  componentId: "sc-15zj106-5"
})({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 10
});
const Price = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.span.withConfig({
  displayName: "product-card-seven__Price",
  componentId: "sc-15zj106-6"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_5___default()({
  color: 'text.bold',
  fontSize: 18,
  fontWeight: 'semiBold',
  lineHeight: 1
}));
const SalePrice = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.span.withConfig({
  displayName: "product-card-seven__SalePrice",
  componentId: "sc-15zj106-7"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_5___default()({
  color: 'text.regular',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 'regular',
  padding: '0 5px',
  overflow: 'hidden',
  position: 'relative',
  marginLeft: 10,
  display: 'flex',
  alignItems: 'center',
  ':before': {
    content: '""',
    width: '100%',
    height: 1,
    display: 'inline-block',
    backgroundColor: 'text.regular',
    position: 'absolute',
    top: '50%',
    left: 0
  }
}));
const ProductCard = ({
  data
}) => {
  var _config$qrcode, _config$restaurant, _config$restaurant$us;

  const {
    config
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(contexts_config_config_context__WEBPACK_IMPORTED_MODULE_8__[/* ConfigContext */ "a"]);
  const {
    mainTitle,
    photo,
    price,
    salePrice,
    id,
    discountInPercent
  } = data;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Card, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ImageWrapper, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/front/products/[slug]",
        as: `/front/products/${id}?code=${config === null || config === void 0 ? void 0 : (_config$qrcode = config.qrcode) === null || _config$qrcode === void 0 ? void 0 : _config$qrcode.qr}`,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Image, {
            src: "https://whatsappneed.com/storage/" + photo,
            alt: mainTitle
          }), discountInPercent ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Discount, {
            children: [discountInPercent, "%"]
          }) : null]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(components_box__WEBPACK_IMPORTED_MODULE_6__[/* Box */ "a"], {
      px: 20,
      pb: 20,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(PriceWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Price, {
          children: [config === null || config === void 0 ? void 0 : (_config$restaurant = config.restaurant) === null || _config$restaurant === void 0 ? void 0 : (_config$restaurant$us = _config$restaurant.userConfig) === null || _config$restaurant$us === void 0 ? void 0 : _config$restaurant$us.currency, " ", salePrice ? salePrice : price]
        }), discountInPercent ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(SalePrice, {
          children: ["$", price]
        }) : null]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Title, {
        children: Object(_contexts_language_language_utils__WEBPACK_IMPORTED_MODULE_7__[/* getCorrectTranslation */ "a"])(config, data, "Title")
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_add_item_to_cart__WEBPACK_IMPORTED_MODULE_3__[/* AddItemToCart */ "a"], {
        data: data,
        variant: "full",
        buttonText: "Add"
      })]
    })]
  });
};

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "jYXs":
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "k47W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StyledButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "loadmore-button__StyledButton",
  componentId: "wy77qo-0"
})(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default()({
  px: '15px',
  py: 0,
  fontSize: ['base'],
  fontWeight: 'bold',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  color: props.disabled ? 'text.light' : 'white',
  bg: props.disabled ? 'gray.500' : 'primary.regular',
  transition: 'all 0.3s ease',
  borderRadius: 'base',
  '&:hover': {
    color: props.disabled ? 'text.light' : 'white',
    bg: props.disabled ? 'gray.500' : 'primary.hover'
  }
}), {
  appearance: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  textAlign: 'center',
  height: '38px',
  textDecoration: 'none',
  fontFamily: 'inherit',
  border: 0,
  '&:focus': {
    outline: 'none'
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["variant"])({
  variants: {
    outlined: {
      color: 'primary.regular',
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.500',
      '&:hover': {
        borderColor: 'primary.regular',
        color: 'primary.regular',
        bg: 'white'
      }
    },
    primary: {
      color: 'white',
      bg: 'primary.regular',
      '&:hover': {
        bg: 'primary.hover'
      }
    },
    secondary: {
      color: 'primary.regular',
      bg: 'white',
      border: '2px solid',
      borderColor: 'gray.500',
      '&:hover': {
        color: 'white',
        bg: 'primary.regular',
        borderColor: 'primary.regular'
      }
    },
    text: {
      color: 'primary.regular',
      bg: 'transparent',
      '&:hover': {
        bg: 'transparent',
        color: 'primary.hover'
      }
    },
    select: {
      width: 26,
      height: 26,
      lineHeight: 1,
      flexShrink: 0,
      border: '1px solid',
      borderColor: 'text.regular',
      borderRadius: 13,
      padding: 0,
      color: 'text.bold',
      bg: 'transparent',
      '&.selected': {
        bg: 'primary.regular',
        color: 'white',
        borderColor: 'primary.regular'
      },
      '&:hover:not(.selected)': {
        bg: 'transparent',
        color: 'primary.regular',
        borderColor: 'primary.regular'
      }
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["variant"])({
  prop: 'size',
  variants: {
    big: {
      height: '48px',
      px: 30
    },
    small: {
      height: '30px',
      fontSize: 14
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_4__["border"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["layout"]));
const rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "loadmore-button__Spinner",
  componentId: "wy77qo-1"
})(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default()({
  width: 18,
  height: 18,
  marginLeft: 10,
  border: '3px solid white',
  borderTop: `3px solid ${props.color ? props.color : 'primary.regular'}`,
  borderRadius: '50%',
  transitionProperty: 'transform'
}), Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["animation:", " 1.2s infinite linear;"], rotate));
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((_ref, ref) => {
  let {
    children,
    disabled,
    loading = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "loading"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(StyledButton, _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    disabled: disabled,
    role: "button",
    children: [children, loading && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Spinner, {})]
  }));
});

/***/ }),

/***/ "mNWG":
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pQO/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FruitsVegetable; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const FruitsVegetable = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20.347",
    height: "24.101",
    viewBox: "0 0 20.347 24.101"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
      id: "Grocery",
      transform: "translate(-39.481 0.052)",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_17386",
        "data-name": "Path 17386",
        d: "M349.261,399.988a.469.469,0,1,1,.461-.385A.473.473,0,0,1,349.261,399.988Z",
        transform: "translate(-294.289 -380.346)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.1"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_17387",
        "data-name": "Path 17387",
        d: "M58.743,8.638A6.2,6.2,0,0,0,55.4,6.3a6.662,6.662,0,0,0-3.058.055h0l-.034.008-.091.02c-.074.017-.188.045-.31.076-.16.041-.323.078-.485.108q0-.182-.014-.374a6.162,6.162,0,0,1,1.87-3.956A6.643,6.643,0,0,1,55.212.9.469.469,0,0,0,54.87.032a7.448,7.448,0,0,0-2.223,1.509,7.229,7.229,0,0,0-1.659,2.437,4.837,4.837,0,0,0-1.119-1.837C47.744.019,43.762.68,43.527.721h0a.457.457,0,0,0-.367.314.6.6,0,0,0-.017.066c-.027.151-.573,3.346.8,5.557a7.353,7.353,0,0,0-3.914,6.923,11.6,11.6,0,0,0,1.142,4.581,14.2,14.2,0,0,0,2.744,4.091A5.044,5.044,0,0,0,47.309,24a6.6,6.6,0,0,0,1.88-.276A3.331,3.331,0,0,1,51,23.691l.006,0,.11.031A6.6,6.6,0,0,0,53,24a4.912,4.912,0,0,0,3.25-1.608,13.985,13.985,0,0,0,4.029-8.812A8.163,8.163,0,0,0,58.743,8.638ZM49.206,2.8a5.247,5.247,0,0,1,1.256,3.409c-.017.211-.025,1.132-.025,1.132L46.881,3.794a.469.469,0,0,0-.663.663L49.8,8.033c-1.224.066-3.343-.027-4.572-1.255C43.75,5.3,43.912,2.552,44.02,1.6c.953-.108,3.709-.27,5.185,1.2ZM55.6,21.716A4.033,4.033,0,0,1,53,23.062a5.728,5.728,0,0,1-1.609-.236l-.141-.04h0a4.269,4.269,0,0,0-2.329.04,5.728,5.728,0,0,1-1.609.236A4.172,4.172,0,0,1,44.58,21.59a13.058,13.058,0,0,1-3.612-8.009c0-3.445,1.878-5.444,3.571-6.163l.024.024a6.632,6.632,0,0,0,4.665,1.547A9.91,9.91,0,0,0,50.9,8.863c.374-.082.365-.256.388-.364V8.482a9.219,9.219,0,0,0,.107-.965.475.475,0,0,0,.083-.007c.22-.038.441-.085.658-.142.084-.022.165-.042.232-.058,1.934.674,3.846,2.849,3.846,6.269a9.857,9.857,0,0,1-.747,3.455.469.469,0,1,0,.874.339,10.789,10.789,0,0,0,.811-3.795,7.594,7.594,0,0,0-3.162-6.493,4.317,4.317,0,0,1,1.17.122c2.013.521,4.18,2.737,4.18,6.371A13.138,13.138,0,0,1,55.6,21.716Z",
        transform: "translate(-0.5)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.1"
      })]
    })
  }));
};

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "quMH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessage; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function ErrorMessage({
  message
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(StyledAside, {
    children: message
  });
}
const StyledAside = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "error-message__StyledAside",
  componentId: "sc-1ynw6tb-0"
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: '1.5rem',
  fontSize: 'xl',
  color: 'white',
  backgroundColor: 'red'
});

/***/ }),

/***/ "tFEG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CartProvider; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useCart; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/contexts/cart/cart.reducer.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// export const cartItemsTotalPrice = (items, { discountInPercent = 0 } = {}) => {
const cartItemsTotalPrice = (items, coupon = null) => {
  if (items === null || items.length === 0) return 0;
  const itemCost = items.reduce((total, item) => {
    if (item.salePrice) {
      return total + item.salePrice * item.quantity;
    }

    return total + item.price * item.quantity;
  }, 0); // const discountRate = 1 - discountInPercent;

  const discount = coupon ? itemCost * Number(coupon.discountInPercent) / 100 : 0; // itemCost * discountRate * TAX_RATE + shipping;
  // return itemCost * discountRate;

  return itemCost - discount;
}; // cartItems, cartItemToAdd

const addItemToCart = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);

  if (existingCartItemIndex > -1) {
    const newState = [...state.items];
    newState[existingCartItemIndex].quantity += action.payload.quantity;
    return newState;
  }

  return [...state.items, action.payload];
}; // cartItems, cartItemToRemove


const removeItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.quantity - action.payload.quantity;
      return newQuantity > 0 ? [...acc, _objectSpread(_objectSpread({}, item), {}, {
        quantity: newQuantity
      })] : [...acc];
    }

    return [...acc, item];
  }, []);
};

const clearItemFromCart = (state, action) => {
  return state.items.filter(item => item.id !== action.payload.id);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'REHYDRATE':
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'TOGGLE_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    case 'ADD_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: addItemToCart(state, action)
      });

    case 'REMOVE_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: removeItemFromCart(state, action)
      });

    case 'CLEAR_ITEM_FROM_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: clearItemFromCart(state, action)
      });

    case 'CLEAR_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: []
      });

    case 'APPLY_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: action.payload
      });

    case 'REMOVE_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: null
      });

    case 'TOGGLE_RESTAURANT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isRestaurant: !state.isRestaurant
      });

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
// EXTERNAL MODULE: external "localforage"
var external_localforage_ = __webpack_require__("wiMN");
var external_localforage_default = /*#__PURE__*/__webpack_require__.n(external_localforage_);

// CONCATENATED MODULE: ./src/utils/use-storage.ts
function use_storage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function use_storage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { use_storage_ownKeys(Object(source), true).forEach(function (key) { use_storage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { use_storage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function use_storage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const isObjectLiked = value => value.constructor.name === 'Array' || value.constructor.name === 'Object';

const rehydrate = (value, defaultValue) => {
  if (!value) return defaultValue; // if (value === 'false') str = false;
  // if (value === 'true') str = true;
  // if (!isObjectLiked(value)) {
  //   return value;
  // }

  try {
    const parse = JSON.parse(value);
    return parse;
  } catch (err) {
    return defaultValue;
  }
};

const hydrate = value => {
  if (!isObjectLiked(value)) {
    return value;
  }

  return JSON.stringify(value);
};

const createMigration = (opts, data) => {
  return new Promise((resolve, reject) => {
    const key = `${opts.key}-version`;
    external_localforage_default.a.getItem(key, (err, version) => {
      if (version !== opts.version) {
        data = opts.migrate(data);
        external_localforage_default.a.setItem(opts.key, rehydrate(data), err => {
          if (err) return reject(err);
          external_localforage_default.a.setItem(key, opts.version, err => {
            if (err) return reject(err);
            return resolve(data);
          });
        });
      } else {
        resolve(data);
      }
    });
  });
};

const config = {
  key: '@session',
  version: 1,
  migrate: state => {
    return use_storage_objectSpread({}, state);
  }
};
const useStorage = (state, setState) => {
  const {
    0: rehydrated,
    1: setRehydrated
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    async function init() {
      await external_localforage_default.a.getItem(config.key, (err, value) => {
        if (err) {
          setRehydrated(true);
          return setError(err);
        } // Migrate persisted data


        const restoredValue = rehydrate(value);

        if (typeof config.migrate === 'function') {
          createMigration(config, restoredValue).then(data => setState(data)).then(() => setRehydrated(true));
        } else {
          setState(restoredValue);
          setRehydrated(true);
        }
      });
    }

    init();
  }, []);
  Object(external_react_["useEffect"])(() => {
    // if (isNil(state) || isEmpty(state)) {
    //   localForage.removeItem(config.key);
    // }
    external_localforage_default.a.setItem(config.key, hydrate(state));
  }, [state]);
  return {
    rehydrated,
    error
  };
};
// CONCATENATED MODULE: ./src/contexts/cart/use-cart.tsx


function use_cart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function use_cart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { use_cart_ownKeys(Object(source), true).forEach(function (key) { use_cart_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { use_cart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function use_cart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const CartContext = /*#__PURE__*/Object(external_react_["createContext"])({});
const INITIAL_STATE = {
  isOpen: false,
  items: [],
  isRestaurant: false,
  coupon: null
};

const useCartActions = (initialCart = INITIAL_STATE) => {
  var _state$items3;

  const {
    0: state,
    1: dispatch
  } = Object(external_react_["useReducer"])(reducer, initialCart);

  const addItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: use_cart_objectSpread(use_cart_objectSpread({}, item), {}, {
        quantity
      })
    });
  };

  const removeItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: use_cart_objectSpread(use_cart_objectSpread({}, item), {}, {
        quantity
      })
    });
  };

  const clearItemFromCartHandler = item => {
    dispatch({
      type: 'CLEAR_ITEM_FROM_CART',
      payload: item
    });
  };

  const clearCartHandler = () => {
    dispatch({
      type: 'CLEAR_CART'
    });
  };

  const toggleCartHandler = () => {
    dispatch({
      type: 'TOGGLE_CART'
    });
  };

  const couponHandler = coupon => {
    dispatch({
      type: 'APPLY_COUPON',
      payload: coupon
    });
  };

  const removeCouponHandler = () => {
    dispatch({
      type: 'REMOVE_COUPON'
    });
  };

  const rehydrateLocalState = payload => {
    dispatch({
      type: 'REHYDRATE',
      payload
    });
  };

  const toggleRestaurant = () => {
    dispatch({
      type: 'TOGGLE_RESTAURANT'
    });
  };

  const isInCartHandler = id => {
    var _state$items;

    return (_state$items = state.items) === null || _state$items === void 0 ? void 0 : _state$items.some(item => item.id === id);
  };

  const getItemHandler = id => {
    var _state$items2;

    return (_state$items2 = state.items) === null || _state$items2 === void 0 ? void 0 : _state$items2.find(item => item.id === id);
  };

  const getCartItemsPrice = () => cartItemsTotalPrice(state.items).toFixed(2);

  const getCartItemsTotalPrice = () => cartItemsTotalPrice(state.items, state.coupon).toFixed(2);

  const getDiscount = () => {
    var _state$coupon;

    const total = cartItemsTotalPrice(state.items);
    const discount = state.coupon ? total * Number((_state$coupon = state.coupon) === null || _state$coupon === void 0 ? void 0 : _state$coupon.discountInPercent) / 100 : 0;
    return discount.toFixed(2);
  };

  const getItemsCount = (_state$items3 = state.items) === null || _state$items3 === void 0 ? void 0 : _state$items3.reduce((acc, item) => acc + item.quantity, 0);
  return {
    state,
    getItemsCount,
    rehydrateLocalState,
    addItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    getCartItemsPrice,
    couponHandler,
    removeCouponHandler,
    getDiscount,
    toggleRestaurant
  };
};

const CartProvider = ({
  children
}) => {
  var _state$items4;

  const {
    state,
    rehydrateLocalState,
    getItemsCount,
    addItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    couponHandler,
    removeCouponHandler,
    getCartItemsPrice,
    getDiscount,
    toggleRestaurant
  } = useCartActions();
  const {
    rehydrated,
    error
  } = useStorage(state, rehydrateLocalState);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(CartContext.Provider, {
    value: {
      isOpen: state.isOpen,
      items: state.items,
      coupon: state.coupon,
      isRestaurant: state.isRestaurant,
      cartItemsCount: (_state$items4 = state.items) === null || _state$items4 === void 0 ? void 0 : _state$items4.length,
      itemsCount: getItemsCount,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
      removeItemFromCart: clearItemFromCartHandler,
      clearCart: clearCartHandler,
      isInCart: isInCartHandler,
      getItem: getItemHandler,
      toggleCart: toggleCartHandler,
      calculatePrice: getCartItemsTotalPrice,
      calculateSubTotalPrice: getCartItemsPrice,
      applyCoupon: couponHandler,
      removeCoupon: removeCouponHandler,
      calculateDiscount: getDiscount,
      toggleRestaurant
    },
    children: children
  });
};
const useCart = () => Object(external_react_["useContext"])(CartContext);

/***/ }),

/***/ "trJ8":
/***/ (function(module, exports) {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wpJo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGrid; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_product_card_product_card_seven__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hy7I");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_error_message_error_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("quMH");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_button_loadmore_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("k47W");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("6mxo");
/* harmony import */ var contexts_language_language_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("KVly");
/* harmony import */ var data_use_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Sy3N");













const Grid = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "product-grid-three__Grid",
  componentId: "sc-31srys-0"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_4___default()({
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
  '@media screen and (min-width: 630px)': {
    gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))'
  },
  '@media screen and (min-width: 768px)': {
    gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))'
  },
  '@media screen and (min-width: 991px)': {
    gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))'
  },
  '@media screen and (min-width: 1200px)': {
    gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))'
  },
  '@media screen and (min-width: 1700px)': {
    gridTemplateColumns: 'repeat(5, minmax(240px, 1fr))'
  },
  '@media screen and (min-width: 1900px)': {
    gridTemplateColumns: 'repeat(6, minmax(240px, 1fr))'
  }
}));
const ProductGrid = ({
  style,
  type,
  loadMore = true,
  fetchLimit = 16,
  config
}) => {
  var _config$restaurant;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    data,
    error
  } = Object(data_use_products__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])({
    type,
    text: router.query.text,
    category: router.query.category,
    offset: 0,
    limit: fetchLimit,
    slug: config === null || config === void 0 ? void 0 : (_config$restaurant = config.restaurant) === null || _config$restaurant === void 0 ? void 0 : _config$restaurant.slug,
    altLang: Object(contexts_language_language_utils__WEBPACK_IMPORTED_MODULE_10__[/* isAlternativeLanguage */ "b"])(config)
  });
  if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_error_message_error_message__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    message: error.message
  });
  if (!data) return null;

  const handleLoadMore = async () => {
    setLoading(true); // await fetchMore(Number(data.length), fetchLimit);

    setLoading(false);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Grid, {
      style: style,
      children: data.map(product => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_product_card_product_card_seven__WEBPACK_IMPORTED_MODULE_2__[/* ProductCard */ "a"], {
        data: product,
        config: config
      }, product.id))
    }), loadMore && (data === null || data === void 0 ? void 0 : data.hasMore) && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_box__WEBPACK_IMPORTED_MODULE_9__[/* Box */ "a"], {
      style: {
        textAlign: 'center'
      },
      mt: '2rem',
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_button_loadmore_button__WEBPACK_IMPORTED_MODULE_7__[/* Button */ "a"], {
        onClick: handleLoadMore,
        loading: loading,
        variant: "secondary",
        style: {
          fontSize: 14,
          display: 'inline-flex'
        },
        border: "1px solid #f1f1f1",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          id: "loadMoreButton",
          defaultMessage: "Load More"
        })
      })
    })]
  });
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xoY3":
/***/ (function(module, exports) {

module.exports = require("stylis-plugin-rtl");

/***/ })

/******/ });