module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
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
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"11":"34eb9e2797faaa5346ff"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/KGT":
/***/ (function(module, exports) {



/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


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

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4l1m":
/***/ (function(module, exports) {



/***/ }),

/***/ "5l48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GROCERY_PAGE; });
/* unused harmony export GROCERY_PAGE_TWO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MAKEUP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLOTHING_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BAGS_PAGE; });
/* unused harmony export BAKERY_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BOOK_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FURNITURE_PAGE; });
/* unused harmony export FURNITURE_PAGE_TWO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MEDICINE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return RESTAURANT_PAGE; });
/* unused harmony export REQUEST_MEDICINE_PAGE */
/* unused harmony export CHECKOUT_PAGE */
/* unused harmony export CHECKOUT_PAGE_TWO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PROFILE_PAGE; });
/* unused harmony export YOUR_ORDER_PAGE */
/* unused harmony export ORDER_RECEIVED_PAGE */
/* unused harmony export OFFER_PAGE */
/* unused harmony export HELP_PAGE */
/* unused harmony export TERMS_AND_SERVICES_PAGE */
/* unused harmony export PRIVACY_POLICY_PAGE */
/* unused harmony export HOME_MENU_ITEM */
/* unused harmony export HELP_MENU_ITEM */
/* unused harmony export OFFER_MENU_ITEM */
/* unused harmony export ORDER_MENU_ITEM */
/* unused harmony export REQUEST_MEDICINE_MENU_ITEM */
/* unused harmony export PROFILE_MENU_ITEM */
/* unused harmony export CHECKOUT_MENU_ITEM */
/* unused harmony export AUTHORIZED_MENU_ITEMS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CATEGORY_MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MOBILE_DRAWER_MENU; });
/* unused harmony export PROFILE_SIDEBAR_TOP_MENU */
/* unused harmony export PROFILE_SIDEBAR_BOTTOM_MENU */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LANGUAGE_MENU; });
const HOME_PAGE = '/';
const GROCERY_PAGE = '/grocery';
const GROCERY_PAGE_TWO = '/grocery-two';
const MAKEUP_PAGE = '/makeup';
const CLOTHING_PAGE = '/clothing';
const BAGS_PAGE = '/bags';
const BAKERY_PAGE = '/bakery';
const BOOK_PAGE = '/book';
const FURNITURE_PAGE = '/furniture';
const FURNITURE_PAGE_TWO = '/furniture-two';
const MEDICINE_PAGE = '/medicine';
const RESTAURANT_PAGE = '/restaurant';
const REQUEST_MEDICINE_PAGE = '/request-medicine';
const CHECKOUT_PAGE = '/checkout';
const CHECKOUT_PAGE_TWO = '/checkout-alternative';
const PROFILE_PAGE = '/profile';
const YOUR_ORDER_PAGE = '/order';
const ORDER_RECEIVED_PAGE = '/order-received';
const OFFER_PAGE = '/offer';
const HELP_PAGE = '/help';
const TERMS_AND_SERVICES_PAGE = '/terms';
const PRIVACY_POLICY_PAGE = '/privacy'; // Mobile Drawer Menus

const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE
};
const HELP_MENU_ITEM = {
  id: 'nav.help',
  defaultMessage: 'Help',
  href: HELP_PAGE
};
const OFFER_MENU_ITEM = {
  id: 'nav.offer',
  defaultMessage: 'Offer',
  href: OFFER_PAGE
};
const ORDER_MENU_ITEM = {
  id: 'nav.order',
  href: YOUR_ORDER_PAGE,
  defaultMessage: 'Order'
};
const REQUEST_MEDICINE_MENU_ITEM = {
  id: 'nav.request_medicine',
  defaultMessage: 'Request Medicine',
  href: REQUEST_MEDICINE_PAGE
};
const PROFILE_MENU_ITEM = {
  id: 'nav.profile',
  defaultMessage: 'Profile',
  href: PROFILE_PAGE
};
const CHECKOUT_MENU_ITEM = {
  id: 'nav.checkout',
  defaultMessage: 'Checkout',
  href: CHECKOUT_PAGE
};
const AUTHORIZED_MENU_ITEMS = [PROFILE_MENU_ITEM, {
  id: 'nav.checkout',
  defaultMessage: 'Checkout',
  href: CHECKOUT_PAGE
}, {
  id: 'alternativeCheckout',
  href: CHECKOUT_PAGE_TWO,
  defaultMessage: 'Checkout Alternative'
}, ORDER_MENU_ITEM, {
  id: 'nav.order_received',
  href: ORDER_RECEIVED_PAGE,
  defaultMessage: 'Order invoice'
}, {
  id: 'nav.terms_and_services',
  defaultMessage: 'Terms and Services',
  href: TERMS_AND_SERVICES_PAGE
}, {
  id: 'nav.privacy_policy',
  defaultMessage: 'Privacy Policy',
  href: PRIVACY_POLICY_PAGE
}]; // category menu items for header navigation

const CATEGORY_MENU_ITEMS = [{
  id: 'nav.grocery',
  href: GROCERY_PAGE,
  defaultMessage: 'Grocery',
  icon: 'FruitsVegetable',
  dynamic: true
}, {
  id: 'nav.grocery-two',
  href: GROCERY_PAGE_TWO,
  defaultMessage: 'Grocery Two',
  icon: 'FruitsVegetable',
  dynamic: false
}, {
  id: 'nav.bakery',
  href: BAKERY_PAGE,
  defaultMessage: 'Bakery',
  icon: 'Bakery',
  dynamic: false
}, {
  id: 'nav.makeup',
  defaultMessage: 'Makeup',
  href: MAKEUP_PAGE,
  icon: 'FacialCare',
  dynamic: true
}, {
  id: 'nav.bags',
  defaultMessage: 'Bags',
  href: BAGS_PAGE,
  icon: 'Handbag',
  dynamic: true
}, {
  id: 'nav.clothing',
  defaultMessage: 'Clothing',
  href: CLOTHING_PAGE,
  icon: 'DressIcon',
  dynamic: true
}, {
  id: 'nav.furniture',
  defaultMessage: 'Furniture',
  href: FURNITURE_PAGE,
  icon: 'FurnitureIcon',
  dynamic: true
}, {
  id: 'nav.furniture-two',
  defaultMessage: 'Furniture Two',
  href: FURNITURE_PAGE_TWO,
  icon: 'FurnitureIcon',
  dynamic: false
}, {
  id: 'nav.book',
  defaultMessage: 'Book',
  href: BOOK_PAGE,
  icon: 'BookIcon',
  dynamic: true
}, {
  id: 'nav.medicine',
  defaultMessage: 'Medicine',
  href: MEDICINE_PAGE,
  icon: 'MedicineIcon',
  dynamic: true
}];
const MOBILE_DRAWER_MENU = [HOME_MENU_ITEM, CHECKOUT_MENU_ITEM //...AUTHORIZED_MENU_ITEMS,
//HELP_MENU_ITEM,
//OFFER_MENU_ITEM,
];
const PROFILE_SIDEBAR_TOP_MENU = [ORDER_MENU_ITEM, HELP_MENU_ITEM];
const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM];
const LANGUAGE_MENU = [{
  id: 'ar',
  defaultMessage: 'Arabic',
  icon: 'SAFlag'
}, {
  id: 'zh',
  defaultMessage: 'Chinese',
  icon: 'CNFlag'
}, {
  id: 'en',
  defaultMessage: 'English',
  icon: 'USFlag'
}, {
  id: 'de',
  defaultMessage: 'German',
  icon: 'DEFlag'
}, {
  id: 'he',
  defaultMessage: 'Hebrew',
  icon: 'ILFlag'
}, {
  id: 'es',
  defaultMessage: 'Spanish',
  icon: 'ESFlag'
}, {
  id: 'tr',
  defaultMessage: 'Turkish',
  icon: 'TRFlag'
}, {
  id: 'fr',
  defaultMessage: 'French',
  icon: 'FRFlag'
}];

/***/ }),

/***/ "9T+x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// CONCATENATED MODULE: ./src/layouts/logo/logo.style.tsx


const LogoBox = external_styled_components_default.a.span.withConfig({
  displayName: "logostyle__LogoBox",
  componentId: "sc-1igpf04-0"
})(css_default()({
  color: 'text.bold',
  fontSize: 26,
  fontWeight: 'bold',
  cursor: 'pointer',
  mr: [0, 20, 40],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const LogoImage = external_styled_components_default.a.img.withConfig({
  displayName: "logostyle__LogoImage",
  componentId: "sc-1igpf04-1"
})({
  display: 'block',
  backfaceVisibility: 'hidden',
  maxHeight: 50
});
// CONCATENATED MODULE: ./src/layouts/logo/logo.tsx





const Logo = ({
  imageUrl,
  alt,
  onClick,
  config
}) => {
  function onLogoClick() {
    var _config$qrcode;

    router_default.a.push(`/front/?code=${config === null || config === void 0 ? void 0 : (_config$qrcode = config.qrcode) === null || _config$qrcode === void 0 ? void 0 : _config$qrcode.qr}`);

    if (onClick) {
      onClick();
    }
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(LogoBox, {
    onClick: onLogoClick,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LogoImage, {
      src: imageUrl,
      alt: alt
    })
  });
};

/* harmony default export */ var logo = __webpack_exports__["a"] = (Logo);

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

/***/ "HPEz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SearchWrapper; });
/* unused harmony export HeaderLeftSide */
/* unused harmony export HeaderRightSide */
/* unused harmony export MainMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MobileHeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MobileHeaderInnerWrapper; });
/* unused harmony export SelectedType */
/* unused harmony export DropDownArrow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DrawerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HamburgerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DrawerContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DrawerClose; });
/* unused harmony export DrawerProfile */
/* unused harmony export LogoutView */
/* unused harmony export LoginView */
/* unused harmony export UserAvatar */
/* unused harmony export UserDetails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DrawerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DrawerMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return UserOptionMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SearchModalWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SearchModalClose; });
/* unused harmony export LanguageItem */
/* unused harmony export LangSwitcher */
/* unused harmony export Flag */
/* unused harmony export TypeIcon */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const positionAnim = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{position:fixed;opacity:1;}to{opacity:0;transition:all 0.3s ease;}"]);
const hideSearch = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{display:none;}to{display:flex;}"]);
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__SearchWrapper",
  componentId: "sc-12e3rnc-0"
})(["padding:5px;cursor:pointer;color:", ";svg{display:block;width:17px;height:auto;}@media only screen and (min-width:991px) and (max-width:1366px){opacity:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "headerstyle__HeaderWrapper",
  componentId: "sc-12e3rnc-1"
})(["padding:10px 50px;display:flex;align-items:center;justify-content:space-between;position:fixed;z-index:99999;top:0;left:0;width:100%;background-color:", ";box-shadow:", ";transition:all 0.3s ease;&.home{position:absolute;background-color:transparent;box-shadow:none;}@media (min-width:1600px){padding:25px 40px;}@media (max-width:990px){display:none;}.headerSearch{margin:0 30px;@media only screen and (min-width:991px) and (max-width:1200px){margin:0 15px;input{width:80%;}.buttonText{display:none;}}}&.sticky{background-color:", ";position:fixed;box-shadow:", ";padding-top:20px;padding-bottom:20px;@media (max-width:1400px){padding-top:20px;padding-bottom:20px;}.headerSearch{display:flex;form{background-color:", ";input{background-color:", ";}}@media only screen and (min-width:991px) and (max-width:1200px){.buttonText{display:none;}}}}.popover-wrapper{.popover-content{padding:20px 0;.menu-item{a{margin:0;padding:12px 30px;border-bottom:1px solid ", ";cursor:pointer;white-space:nowrap;&:last-child{border-bottom:0;}&:hover{color:", ";}&.current-page{color:", ";}.menu-item-icon{margin-right:15px;}}}}}.headerSearch{input{padding:0 15px;font-size:", "px;@media only screen and (min-width:991px) and (max-width:1200px){}}button{@media (max-width:1400px){padding:0 15px;font-size:", "px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.body.header', 'colors.body.header'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.body.header', 'colors.body.header'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.400', '#F3F3F3'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.400', '#F3F3F3'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'));
const HeaderLeftSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__HeaderLeftSide",
  componentId: "sc-12e3rnc-2"
})(["display:flex;align-items:center;justify-content:space-between;flex-shrink:0;"]);
const HeaderRightSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__HeaderRightSide",
  componentId: "sc-12e3rnc-3"
})(["display:flex;align-items:center;flex-shrink:0;.menu-icon{min-width:14px;margin-right:7px;}.menu-item{a{font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;transition:0.15s ease-in-out;display:flex;align-items:center;margin-right:45px;@media (max-width:1400px){margin-right:35px;font-size:", "px;}&:hover{color:", ";}&.current-page{color:", ";}}}.user-pages-dropdown{.popover-handler{width:38px;height:38px;border-radius:50%;display:block;overflow:hidden;img{width:100%;height:auto;display:block;}}.popover-content{.inner-wrap{}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const MainMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__MainMenu",
  componentId: "sc-12e3rnc-4"
})(["display:flex;align-items:center;.popover-wrapper{.popover-content{.menu-item{font-family:", ";a{font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}&:hover{color:", ";}&.current-page{color:", ";background-color:", ";}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const MobileHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__MobileHeaderWrapper",
  componentId: "sc-12e3rnc-5"
})(["@media (min-width:991px){.desktop{display:none;}}"]);
const MobileHeaderInnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__MobileHeaderInnerWrapper",
  componentId: "sc-12e3rnc-6"
})(["display:flex;align-items:center;justify-content:space-between;padding:10px;position:fixed;width:100%;top:0;left:0;z-index:999;transition:0.25s ease-in-out;&.home{position:absolute;background-color:transparent;box-shadow:none;}&.unSticky:not(.home){background-color:", ";box-shadow:", ";}&.sticky{position:fixed;background-color:", ";box-shadow:", ";@media only screen and (min-width:991px) and (max-width:1366px){.searchIconWrapper{opacity:1;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.body.header', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'));
const SelectedType = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "headerstyle__SelectedType",
  componentId: "sc-12e3rnc-7"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:15px;padding-right:15px;border-radius:", ";outline:0;min-width:150px;cursor:pointer;span{display:flex;align-items:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-decoration:none;&:first-child{margin-right:auto;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const DropDownArrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "headerstyle__DropDownArrow",
  componentId: "sc-12e3rnc-8"
})(["width:12px;margin-left:16px;"]);
const DrawerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerWrapper",
  componentId: "sc-12e3rnc-9"
})(["display:flex;"]);
const DrawerBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerBody",
  componentId: "sc-12e3rnc-10"
})([".drawer-scrollbar{height:100%;}"]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LogoWrapper",
  componentId: "sc-12e3rnc-11"
})(["margin-left:auto;margin-right:auto;@media (max-width:990px){margin-left:30px;}img{display:block;}"]);
const HamburgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__HamburgerIcon",
  componentId: "sc-12e3rnc-12"
})(["width:26px;cursor:pointer;display:block;position:relative;> span{display:block;background-color:", ";border-radius:", ";height:2px;margin-bottom:6px;transition:0.2s ease-in-out;&:nth-child(1){width:26px;}&:nth-child(2){width:12px;}&:nth-child(3){width:22px;}&:last-child{margin-bottom:0;}}&:hover{> span{&:nth-child(1){width:12px;}&:nth-child(2){width:22px;}&:nth-child(3){width:26px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'));
const DrawerContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerContentWrapper",
  componentId: "sc-12e3rnc-13"
})(["padding-top:60px;background-color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.brightDarkColor', '#77798c'));
const DrawerClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerClose",
  componentId: "sc-12e3rnc-14"
})(["display:block;position:absolute;left:35px;top:14px;color:", ";cursor:pointer;padding:10px;z-index:1;svg{display:block;width:12px;height:auto;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const DrawerProfile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerProfile",
  componentId: "sc-12e3rnc-15"
})(["background-color:", ";padding:45px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'));
const LogoutView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LogoutView",
  componentId: "sc-12e3rnc-16"
})(["display:flex;align-items:center;justify-content:center;.sign_in{border:0;padding-left:0;padding-right:25px;}.sign_in,.sign_up{height:36px;padding-left:15px;padding-right:15px;}"]);
const LoginView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LoginView",
  componentId: "sc-12e3rnc-17"
})(["display:flex;align-items:center;"]);
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__UserAvatar",
  componentId: "sc-12e3rnc-18"
})(["width:50px;height:50px;flex-shrink:0;display:block;border-radius:50%;overflow:hidden;margin-right:15px;img{width:100%;height:auto;display:block;}"]);
const UserDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__UserDetails",
  componentId: "sc-12e3rnc-19"
})(["h3{font-size:calc(", " - 1px);font-weight:", ";color:", ";margin-bottom:10px;line-height:1.2;}span{display:block;font-size:", "px;font-weight:", ";color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base' + 'px', '15px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xs', '12'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const DrawerMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerMenu",
  componentId: "sc-12e3rnc-20"
})(["padding:40px 0;"]);
const DrawerMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerMenuItem",
  componentId: "sc-12e3rnc-21"
})(["&:last-child{.drawer_menu_item{margin-bottom:0;}}.drawer_menu_item{a,.logoutBtn{display:block;padding:5px 45px;font-size:calc(", " - 1px);font-weight:", ";color:", ";margin-bottom:19px;position:relative;transition:0.15s ease-in-out;&:hover{color:", ";}&:before{content:'';display:block;position:absolute;top:0;left:0;width:5px;height:100%;background:transparent;}&.current-page{color:", ";font-weight:", ";&:before{background-color:", ";}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const UserOptionMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__UserOptionMenu",
  componentId: "sc-12e3rnc-22"
})(["padding:45px 0;border-top:1px solid ", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.700', '#e6e6e6'));
const SearchModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__SearchModalWrapper",
  componentId: "sc-12e3rnc-23"
})(["padding-top:15px;padding-bottom:15px;background-color:", ";display:flex;width:100%;.header-modal-search{width:calc(100% - 60px);@media (max-width:420px){input{width:150px;}}button{background:transparent;color:", ";padding-left:15px;padding-right:15px;}input{color:", ";padding-left:5px;padding-right:5px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.body.header', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const SearchModalClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "headerstyle__SearchModalClose",
  componentId: "sc-12e3rnc-24"
})(["border:0;background:transparent;display:block;padding:0 15px;color:", ";display:flex;align-items:center;justify-content:center;cursor:pointer;svg{display:block;width:20px;height:auto;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const LanguageItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "headerstyle__LanguageItem",
  componentId: "sc-12e3rnc-25"
})(["width:100%;font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;border:0;border-bottom:1px solid ", ";border-radius:0;background-color:transparent;outline:0;cursor:pointer;&:last-child{border-bottom:0;}@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}span{box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;margin-right:15px;svg{display:block;width:20px;height:auto;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'));
const LangSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LangSwitcher",
  componentId: "sc-12e3rnc-26"
})(["margin-right:20px;@media (max-width:767px){margin-right:10px;}.popover-wrapper.right{.popover-content{padding:15px 0;}}"]);
const Flag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__Flag",
  componentId: "sc-12e3rnc-27"
})(["margin-right:7px;box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;svg{width:20px;height:auto;}"]);
const TypeIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__TypeIcon",
  componentId: "sc-12e3rnc-28"
})(["margin-right:7px;display:flex;align-items:center;justify-content:center;min-width:16px;"]);
/* harmony default export */ __webpack_exports__["o"] = (HeaderWrapper);

/***/ }),

/***/ "J7Kp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchIcon; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const SearchIcon = (_ref) => {
  let {
    color = 'currentColor',
    width = '14px',
    height = '14px'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color", "width", "height"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z",
      transform: "translate(-0.984)",
      fill: color
    })
  }));
};

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

/***/ "MgtJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "OfaO":
/***/ (function(module, exports) {



/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Ou8F":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Zuhause\",\"nav.grocery\":\"Lebensmittelgeschäft\",\"nav.makeup\":\"Bilden\",\"nav.bags\":\"Taschen\",\"nav.clothing\":\"Kleidung\",\"nav.furniture\":\"Möbel\",\"nav.book\":\"Buch\",\"nav.medicine\":\"Medizin\",\"nav.foods\":\"Lebensmittel\",\"nav.terms_and_services\":\"Nutzungsbedingungen\",\"nav.privacy_policy\":\"Datenschutz-Bestimmungen\",\"nav.offer\":\"Angebot\",\"nav.help\":\"Brauchen Sie Hilfe\",\"nav.profile\":\"Profil\",\"nav.checkout\":\"Auschecken\",\"nav.order_received\":\"Rechnung bestellen\",\"nav.logout\":\"Ausloggen\",\"nav.login\":\"Anmeldung\",\"nav.order\":\"Deine Bestellung\",\"nav.account_settings\":\"Ihre Kontoeinstellungen\",\"groceriesTitle\":\"Lebensmittel in {minute} Minuten geliefert\",\"groceriesSubTitle\":\"Holen Sie sich den ganzen Tag über gesunde Lebensmittel und Snacks vor Ihre Haustür\",\"makeupTitle\":\"Eingebrannte und importierte Make-ups\",\"makeupSubTitle\":\"Der einfachste und günstigste Weg, um Ihre Marken- und Import-Make-ups zu erhalten\",\"bagsTitle\":\"Exklusive Markentaschen\",\"bagsSubTitle\":\"Erhalten Sie Ihre exklusiven & markenbezogenen Taschen in kürzester Zeit zugestellt\",\"womenClothsTitle\":\"Kaufen Sie Ihre Designer-Kleider\",\"womenClothsSubTitle\":\"Konfektionskleider für Sie aus dem Internet zugeschnitten. Beeilen Sie sich, solange der Vorrat reicht.\",\"furnitureTitle\":\"Exklusive Möbel zum günstigen Preis\",\"furnitureSubTitle\":\"Machen Sie aus Ihrem Haus ein Zuhause mit unserer großen Auswahl an schönen Möbeln\",\"booksTitle\":\"Dein eigener Buchladen\",\"booksSubTitle\":\"Holen Sie sich Ihre Lieblingsbücher aus unserer großen Auswahl an Büchern.\",\"medicineTitle\":\"Ihre Medikamente geliefert\",\"medicineSubTitle\":\"Verabschieden Sie sich mit uns von all Ihren Sorgen im Gesundheitswesen\",\"foodsTitle\":\"Sie bestellen, wir liefern\",\"foodsSubTitle\":\"Holen Sie sich Ihre Lieblingsspeisen in weniger als einer Stunde\",\"alternativeCheckout\":\"Checkout-Alternative\",\"termAndConditionHelper\":\"Mit diesem Kauf stimmen Sie unseren zu\",\"termAndCondition\":\"Geschäftsbedingungen.\",\"reqMedicine\":\"Medizin anfordern\",\"submitRequest\":\"Anfrage einreichen\",\"noteHead\":\"Hinweis\",\"noteDescription\":\"Produktverfügbarkeit und Preis werden telefonisch bestätigt. Versandkosten innerhalb der Stadt ${inside} und außerhalb der Stadt  ${outside}.\",\"rmMedicineName\":\"Name der Medizin\",\"rmMedicineQuantity\":\"Menge\",\"rmPrescripttionUpload\":\"Laden Sie Ihr Rezept hoch\",\"rmUploadText\":\"Ziehen Sie Ihre Datei hierher.\",\"cartTitle\":\"Deine Bestellung\",\"discountText\":\"Rabatt\",\"vatText\":\"Inkl. MwSt\",\"searchPlaceholder\":\"Suchen Sie hier nach Ihren Produkten\",\"searchButtonText\":\"Suche\",\"mobileSignInButtonText\":\"Dazu kommen\",\"cartItems\":\"Artikel\",\"cartItem\":\"Artikel\",\"addCartButton\":\"Wagen\",\"addToCartButton\":\"In den Warenkorb legen\",\"backBtn\":\"Zurück\",\"noProductFound\":\"Keine Produkte gefunden\",\"specialCode\":\"Hast du einen Gutschein?\",\"couponApplied\":\"Coupon angewendet\",\"couponPlaceholder\":\"Gutscheincode hier eingeben\",\"sidebarYourOrder\":\"Bestellung\",\"profilePageTitle\":\"Dein Profil\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"sparen\",\"contactNumberTitle\":\"Kontakt Nummer\",\"addContactBtn\":\"Kontakt hinzufügen\",\"deliveryAddressTitle\":\"Lieferadresse\",\"addAddressBtn\":\"Adresse hinzufügen\",\"addNew\":\"Neue hinzufügen\",\"paymentCardTitle\":\"Zahlungskarte\",\"addCardBtn\":\"Karte hinzufügen\",\"savedCardsId\":\"Gespeicherte Karten\",\"savedContactId\":\"Kontakt speichern\",\"savedAddressId\":\"Adresse speichern\",\"siteFooter\":\"Pickbazar ist ein Produkt von\",\"subTotal\":\"Zwischensumme\",\"itemsText\":\"Artikel\",\"shippinFeeText\":\"Versandkosten\",\"voucherText\":\"Gutschein\",\"voucherApply\":\"Sich bewerben\",\"couponError\":\"Ungültiger Gutschein\",\"totalText\":\"Gesamt\",\"deliverySchedule\":\"Lieferungsplan\",\"checkoutDeliveryAddress\":\"Lieferadresse\",\"contactNumberText\":\"Kontakt Nummer\",\"selectPaymentText\":\"Bezahlmöglichkeit\",\"proceesCheckout\":\"Zur Kasse\",\"backHomeBtn\":\"Zurück nach Hause\",\"orderReceivedText\":\"Bestellung erhalten\",\"orderReceivedSuccess\":\"Vielen Dank. Ihre Bestellung ist eingegangen\",\"orderNumberText\":\"Bestellnummer\",\"orderDateText\":\"Datum\",\"paymenMethodText\":\"Zahlungsmethode\",\"paymentMethodName\":\"Nachnahme\",\"orderDetailsText\":\"Bestelldetails\",\"totalItemText\":\"Gesamter Artikel\",\"orderTimeText\":\"Bestellzeitpunkt\",\"deliveryTimeText\":\"Lieferzeit\",\"deliveryLocationText\":\"Lieferort\",\"totalAmountText\":\"Gesamtmenge\",\"loadMoreBtn\":\"Mehr laden\",\"welcomeBack\":\"Willkommen zurück\",\"loginText\":\"Melden Sie sich mit Ihrer E-Mail-Adresse und Ihrem Passwort an\",\"emailAddressPlaceholder\":\"E-Mail-Adresse oder Kontaktnummer\",\"passwordPlaceholder\":\"Passwort (mindestens {minCharacter} Zeichen)\",\"continueBtn\":\"Fortsetzen\",\"orText\":\"oder\",\"continueFacebookBtn\":\"Weiter mit Facebook\",\"continueGoogleBtn\":\"Fahren Sie mit Google fort\",\"dontHaveAccount\":\"Noch keinen Account?\",\"signUpBtnText\":\"Anmelden\",\"forgotPasswordText\":\"Haben Sie Ihr Passwort vergessen?\",\"resetText\":\"Setzen Sie es zurück\",\"signUpText\":\"Mit Ihrer Anmeldung stimmen Sie Pickbazar's zu\",\"termsConditionText\":\"Nutzungsbedingungen\",\"alreadyHaveAccount\":\"Hast du schon ein Konto?\",\"backToSign\":\"Zurück zu\",\"loginBtnText\":\"Anmeldung\",\"forgotPassText\":\"Passwort vergessen\",\"sendResetPassText\":\"Wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts\",\"resetPasswordBtn\":\"Passwörter zurücksetzen\",\"intlCopyBtnId\":\"Kopieren\",\"intlCopySuccessId\":\"Kopiert\",\"locationModalheading\":\"Wähle deinen Standort\",\"locationModalSubHeading\":\"Sie müssen Ihren Standort für den Lieferservice auswählen\",\"locationModalFooter\":\"Kostenlose Lieferung für {number}Bestellung\",\"saleText\":\"Verkauf\",\"offText\":\"aus\",\"faqNo1Title\":\"Wie kann ich mit dem Kundenservice Kontakt aufnehmen?\",\"faqNo1Desc\":\"Unser Customer Experience Team ist {number1} Tage die Woche für Sie da und wir bieten zwei Möglichkeiten, um mit Ihnen in Kontakt zu treten. E-Mail und Chat. Wir bemühen uns, schnell zu antworten, damit Sie nicht zu lange auf eine Antwort warten müssen !.\",\"faqNo2Title\":\"App-Installation fehlgeschlagen, wie werden Systeminformationen aktualisiert?\",\"faqNo2Desc\":\"Bitte lesen Sie die Dokumentation sorgfältig durch. Wir haben auch einige Online-Video-Tutorials zu diesem Thema. Wenn das Problem weiterhin besteht, öffnen Sie ein Ticket im Support-Forum\",\"faqNo3Title\":\"Website-Antwort braucht Zeit, wie kann man sie verbessern?\",\"faqNo3Desc\":\"Bitte überprüfen Sie zunächst Ihre Internetverbindung. Wir haben auch einige Online-Video-Tutorials zu diesem Thema. Wenn das Problem weiterhin besteht, öffnen Sie ein Ticket im Support-Forum.\",\"faqNo4Title\":\"Wie erstelle ich ein Konto?\",\"faqNo4Desc\":\"Wenn Sie ein Konto für den persönlichen Gebrauch eröffnen möchten, können Sie dies telefonisch oder online tun. Die Online-Kontoeröffnung sollte nur wenige Minuten dauern.\",\"intlOrderDetailsDiscount\":\"Rabatt\",\"intlOrderDetailsDelivery\":\"Zustellgebühr\",\"intlOrderPageTitle\":\"Meine Bestellung\",\"intlNoOrderFound\":\"Keine Bestellung gefunden\",\"intlOrderPageDetails\":\"Bestelldetails\",\"intlTableColTitle2\":\"Menge\",\"intlTableColTitle3\":\"Preis\",\"intlOrderCardTitleText\":\"Bestellung\",\"intlOrderCardDateText\":\"Bestelldatum\",\"intlOrderCardTotalText\":\"Gesamtpreis\",\"joinButton\":\"Beitreten\",\"ar\":\"Arabisch\",\"zh\":\"Chinesisch\",\"en\":\"Englisch\",\"de\":\"Deutsche\",\"he\":\"Hebräisch\",\"es\":\"Spanisch\",\"intlTextBy\":\"durch\",\"intlRelatedItems\":\"ähnliche Artikel\",\"readFreeSampleButton\":\"Kostenlose Probe lesen\",\"bookSectionTitle\":\"Über das Buch\",\"authorSectionTitle\":\"Über den Autor\",\"defaultIntlId\":\"Bitte fügen Sie einen Platzhalter aus der Sprachdatei hinzu\",\"noResultFound\":\"Entschuldigung, kein Ergebnis gefunden :(\",\"deliveryText\":\"Lieferung\",\"cuisineText\":\"Küche\",\"minOrderText\":\"Mindestbestellmenge\",\"fromText\":\"Von\",\"loadMoreButton\":\"Mehr laden\"}");

/***/ }),

/***/ "PsoQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: ./src/assets/icons/flags.ts
var flags_namespaceObject = {};
__webpack_require__.r(flags_namespaceObject);
__webpack_require__.d(flags_namespaceObject, "DEFlag", function() { return DEFlag; });
__webpack_require__.d(flags_namespaceObject, "CNFlag", function() { return CNFlag; });
__webpack_require__.d(flags_namespaceObject, "USFlag", function() { return USFlag; });
__webpack_require__.d(flags_namespaceObject, "ILFlag", function() { return ILFlag; });
__webpack_require__.d(flags_namespaceObject, "ESFlag", function() { return ESFlag; });
__webpack_require__.d(flags_namespaceObject, "SAFlag", function() { return SAFlag; });
__webpack_require__.d(flags_namespaceObject, "TRFlag", function() { return TRFlag; });
__webpack_require__.d(flags_namespaceObject, "FRFlag", function() { return FRFlag; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/layouts/header/menu/language-switcher/language-switcher.style.tsx


const Box = external_styled_components_default.a.div.withConfig({
  displayName: "language-switcherstyle__Box",
  componentId: "rdvw9c-0"
})(["margin-right:20px;@media (max-width:990px){margin-left:auto;}.popover-wrapper.right{.popover-content{padding:15px 0;}}@media (max-width:767px){margin-right:10px;}"]); //language btn bg color

const SelectedItem = external_styled_components_default.a.button.withConfig({
  displayName: "language-switcherstyle__SelectedItem",
  componentId: "rdvw9c-1"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:10px;padding-right:10px;border-radius:", ";outline:0;cursor:pointer;@media (max-width:767px){border:0;padding:0;}span{display:flex;align-items:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-decoration:none;@media (max-width:767px){display:none;}&:first-child{margin-right:auto;}}"], Object(theme_get_["themeGet"])('colors.body.header', '#ffffff'), Object(theme_get_["themeGet"])('colors.languagesBtnBorder', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Flag = external_styled_components_default.a.div.withConfig({
  displayName: "language-switcherstyle__Flag",
  componentId: "rdvw9c-2"
})(["margin-right:7px;box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;svg{width:20px;height:auto;}@media (max-width:767px){margin-right:0;}"]);
const MenuItem = external_styled_components_default.a.button.withConfig({
  displayName: "language-switcherstyle__MenuItem",
  componentId: "rdvw9c-3"
})(["width:100%;font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;border:0;border-bottom:1px solid ", ";border-radius:0;background-color:transparent;outline:0;cursor:pointer;&:last-child{border-bottom:0;}@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}span{box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;margin-right:15px;svg{display:block;width:20px;height:auto;}}"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('fontSizes.base', '15'));
// CONCATENATED MODULE: ./src/components/popover/useOnClickOutside.js

function useOnClickOutside(ref, handler) {
  Object(external_react_["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, // Add ref and handler to effect dependencies
  // It's worth noting that because passed in handler is a new ...
  // ... function on every render that will cause this effect ...
  // ... callback/cleanup to run every render. It's not a big deal ...
  // ... but to optimize you can wrap handler in useCallback before ...
  // ... passing it into this hook.
  [ref, handler]);
}
// CONCATENATED MODULE: ./src/components/popover/popover.style.tsx


const PopoverWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "popoverstyle__PopoverWrapper",
  componentId: "w52wlq-0"
})(["position:relative;cursor:pointer;.popover-handler{display:inline-block;cursor:pointer;}.popover-content{left:0px;top:calc(100% + 15px);display:block;min-width:200px;padding:15px 20px;position:absolute;border-radius:", ";background-color:", ";box-shadow:0 3px 20px rgba(142,142,142,0.14);z-index:99;&:before{content:'';position:absolute;width:0;height:0;border-style:solid;border-width:0 8px 9px 8px;border-color:transparent transparent ", " transparent;top:-8px;left:15px;box-shadow:-4px -4px 8px -3px rgba(142,142,142,0.14);pointer-events:none;}}&.right{.popover-content{left:auto;right:0px;&:before{left:auto;right:15px;}}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.popOver', '#ffffff'), Object(theme_get_["themeGet"])('colors.popOver', '#ffffff'));
/* harmony default export */ var popover_style = (PopoverWrapper);
// CONCATENATED MODULE: ./src/components/popover/popover.tsx






const Popover = ({
  className,
  handler,
  content,
  direction
}) => {
  // Popover State
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(false); // Ref

  const ref = Object(external_react_["useRef"])(); // Add all classs to an array

  const addAllClasses = ['popover-wrapper']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Add direction class on popover content


  if (direction) {
    addAllClasses.push(direction);
  } // Toggle Popover content


  const handleToggle = e => {
    e.stopPropagation();
    setState(state => !state);
  }; // Handle document click


  const handleDocumentClick = e => {
    e.stopPropagation();

    if (state) {
      handleToggle(e);
    }
  }; // Handle window event listener


  Object(external_react_["useEffect"])(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }); // Close popover on click outside

  useOnClickOutside(ref, () => setState(state => false));
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(popover_style, {
    className: addAllClasses.join(' '),
    ref: ref,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "popover-handler",
      onClick: handleToggle,
      children: handler
    }), state && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "popover-content",
      children: content && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "inner-wrap",
        onClick: handleToggle,
        children: content
      })
    })]
  });
};

/* harmony default export */ var popover = (Popover);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/assets/icons/DEFlag.tsx



const DEFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ffce00",
      d: "M0 320h640v160H0z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M0 0h640v160H0z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#d00",
      d: "M0 160h640v160H0z"
    })]
  });
};
// CONCATENATED MODULE: ./src/assets/icons/CNFlag.tsx



const CNFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "a",
        fill: "#ffde00",
        d: "M-.6.8L0-1 .6.8-1-.3h2z"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#de2910",
      d: "M0 0h640v480H0z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("use", {
      width: "30",
      height: "20",
      transform: "matrix(71.9991 0 0 72 120 120)",
      xlinkHref: "#a"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("use", {
      width: "30",
      height: "20",
      transform: "matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)",
      xlinkHref: "#a"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("use", {
      width: "30",
      height: "20",
      transform: "matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)",
      xlinkHref: "#a"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("use", {
      width: "30",
      height: "20",
      transform: "matrix(6.5991 -23.0749 23.0746 6.59919 288 168)",
      xlinkHref: "#a"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("use", {
      width: "30",
      height: "20",
      transform: "matrix(14.9991 -18.73557 18.73533 14.99929 240 216)",
      xlinkHref: "#a"
    })]
  });
};
// CONCATENATED MODULE: ./src/assets/icons/USFlag.tsx



const USFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-us",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fillRule: "evenodd",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        strokeWidth: "1pt",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fill: "#bd3d44",
          d: "M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z",
          transform: "scale(.9375)"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fill: "#fff",
          d: "M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z",
          transform: "scale(.9375)"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#192f5d",
        d: "M0 0h389.1v275.7H0z",
        transform: "scale(.9375)"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z",
        transform: "scale(.9375)"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/ILFlag.tsx



const ILFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
        id: "il-a",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fillOpacity: ".7",
          d: "M-87.6 0H595v512H-87.6z"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fillRule: "evenodd",
      clipPath: "url(#il-a)",
      transform: "translate(82.1) scale(.94)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M619.4 512H-112V0h731.4z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#00c",
        d: "M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6l-222.6-.8z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M225.8 317.8l20.9 35.5 21.4-35.3-42.4-.2z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#00c",
        d: "M136 320.6L246.2 129l112.4 190.8-222.6.8z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M225.8 191.6l20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5l41.2.3-19.8 36.3-21.4-36.6zm151.2 67l20.9 35.5-41.7-.5 20.8-35zm20.5-67l-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"
      })]
    })]
  });
};
// CONCATENATED MODULE: ./src/assets/icons/ESFlag.tsx



const ESFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-es",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#AA151B",
      d: "M0 0h640v480H0z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#F1BF00",
      d: "M0 120h640v240H0z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M133.8 204.5c0-.4.4-.8.8-.8s1 .4 1 .8c0 .5-.5.9-1 .9s-.8-.4-.8-.9"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.9 203.7c.4.1.6.4.6.8 0 .5-.4.9-.8.9s-1-.4-1-.9c0-.4.3-.7.7-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M126.8 206.8c1-.5 3 1.1 4.6 3.6m11-3.6c-.8-.5-2.8 1.1-4.5 3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#058e6e",
      d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#058e6e",
      d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M124 223h21.4v-5.5H124v5.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M124 223h21.4v-5.5H124v5.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#005bbf",
      d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ccc",
      d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#005bbf",
      d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ccc",
      d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#005bbf",
      d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M123.7 316.7h22V311h-22v5.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M123.7 316.7h22V311h-22v5.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ccc",
      d: "M126.8 305.6h15.6V229h-15.6v76.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M138 229.2v76.3m1.7-76.3v76.3m-12.9 0h15.6v-76.4h-15.6v76.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M125.8 254c1.9-.6 3.1-1.5 2.5-3-.4-1-1.4-1-2.8-.6l-2.6 1 2.3 5.8.8-.3.8-.3-1-2.5zm-1.2-2.7l.7-.3c.5-.2 1.2.1 1.4.8.2.5.2 1-.5 1.5a4.4 4.4 0 01-.6.3l-1-2.3m7.3-2.5l-.9.3h-.8l1.3 6.1 4.3-.8-.2-.4v-.4l-2.5.6-1.2-5.3m8.4 5.2c.8-2.2 1.7-4.3 2.7-6.4a5.3 5.3 0 01-1 0 54.8 54.8 0 01-1.8 4.6l-2.4-4.3-1 .1h-1a131.4 131.4 0 013.5 6h1m8.8-4.7l.4-.9a3.4 3.4 0 00-1.7-.6c-1.7-.1-2.7.6-2.8 1.7-.2 2.1 3.2 2 3 3.4 0 .6-.7.9-1.4.8-.8 0-1.4-.5-1.4-1.2h-.3a7.3 7.3 0 01-.4 1.1 4 4 0 001.8.6c1.7.2 3-.5 3.2-1.7.2-2-3.3-2.1-3.1-3.4 0-.5.4-.8 1.3-.7.7 0 1 .4 1.2.9h.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm-.2-1.4a.4.4 0 01.4-.4c.2 0 .4.1.4.4s-.2.4-.4.4a.4.4 0 01-.4-.4zm-1.1-1c0-.2.2-.3.4-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.4-.5zm-1.4-.4c0-.2.2-.4.4-.4.3 0 .5.2.5.4s-.2.4-.4.4-.5-.2-.5-.4zm-1.4 0c0-.2.2-.3.5-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: ".3",
      d: "M287.8 211.2l.2-1a2.7 2.7 0 00-2.7-2.8c-.5 0-1 .1-1.3.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M283 209.2l.2-.8c0-1.1-1.1-2-2.5-2-.6 0-1.2.2-1.6.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M288.2 210c0-.3.2-.5.4-.5s.4.2.4.4c0 .3-.2.4-.4.4s-.4-.1-.4-.4zm-.2-1.6c0-.2.2-.4.4-.4a.4.4 0 01.5.4c0 .2-.2.4-.4.4-.3 0-.5-.2-.5-.4zm-1-1.1a.4.4 0 01.5-.4c.2 0 .4.1.4.4a.4.4 0 01-.4.4.4.4 0 01-.5-.4zm-1.3-.7c0-.2.2-.4.5-.4s.4.2.4.4c0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm-1.4.1c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4zm.2-1.4c0-.3.2-.4.4-.4s.5.1.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm1-1c0-.2.3-.3.5-.3s.5.1.5.4c0 .2-.2.4-.5.4a.4.4 0 01-.4-.5zm1.4-.4c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4zm1.4 0c0-.2.2-.3.5-.3.2 0 .4.1.4.4 0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: ".3",
      d: "M267.8 211.2a2.8 2.8 0 01-.2-1 2.7 2.7 0 012.7-2.8c.5 0 1 .1 1.4.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M272.7 209.2a1.7 1.7 0 01-.3-.8c0-1 1.2-2 2.6-2a3 3 0 011.5.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M266.6 210c0-.3.2-.5.4-.5.3 0 .4.2.4.4a.4.4 0 01-.4.4c-.2 0-.4-.1-.4-.4zm.1-1.6c0-.2.3-.4.5-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4zm1-1.1c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4.4.4 0 01-.5-.4zm1.3-.7c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm1.4.1c0-.2.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#058e6e",
      d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#058e6e",
      d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M277 205.4c0-.5.4-.8.8-.8s1 .3 1 .8-.5.8-1 .8a.9.9 0 01-.8-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M279 205.1v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M278.1 204.6c.4 0 .6.4.6.8 0 .5-.4.8-.9.8a.9.9 0 01-.8-.8c0-.4.2-.7.6-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#005bbf",
      d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ccc",
      d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#005bbf",
      d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ccc",
      d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#005bbf",
      d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M266.9 316.7h22V311h-22v5.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M266.9 316.7h22V311h-22v5.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ccc",
      d: "M270.1 305.6h15.6V229h-15.6v76.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M281.4 229.1v76.3m1.8-76.3v76.3m-13 .2h15.5V229h-15.6v76.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M263.9 254.4c.6-2.3 1.4-4.4 2.1-6.6h-.5a5.2 5.2 0 01-.5.1 52.8 52.8 0 01-1.4 4.8c-1-1.4-2-2.7-2.7-4.1l-1 .2h-1a131.3 131.3 0 014 5.7h.5l.5-.1m6-6.6h-1a8 8 0 01-.8 0v6.2h4.2v-.7h-2.6l.1-5.5m6.8 1l2 .3v-.7l-5.8-.5v.8a19.3 19.3 0 012 0l-.4 5.6h1.6l.5-5.4m2.4 6c.3 0 .5 0 .8.2l.8.2.7-2.9.6 1.2.8 2.1 1 .2c.4 0 .7.2 1 .3l-.3-.7c-.4-1-1-1.9-1.3-2.9 1 0 1.9-.3 2.1-1.2.1-.6 0-1-.7-1.5-.4-.3-1.2-.4-1.7-.5l-2.4-.5-1.4 6m3-5.2c.7.2 1.5.3 1.5 1v.5c-.3.9-1 1.2-2 .9l.5-2.4m8 7l-.2 2 .8.5.9.5.5-7a3.4 3.4 0 01-.7-.3l-6.1 3.8.5.3.4.2 1.7-1.2 2.3 1.3zm-1.7-1.5l2-1.4-.2 2.3-1.8-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M205.7 175.4c6.3 0 12 1 15.7 2.4a31.7 31.7 0 0014.6 2.3c2.7 0 6.5.8 10.3 2.4a27.3 27.3 0 017.4 4.7l-1.5 1.4-.4 3.8-4.1 4.7-2 1.8-5 3.9-2.5.2-.7 2.1-31.6-3.7-31.7 3.7-.8-2.1-2.5-.2-4.9-4-2-1.7-4.1-4.7-.5-3.8-1.5-1.4a27.6 27.6 0 017.5-4.7 26 26 0 0110.2-2.4c2 .2 4.2.1 6.6-.2a30 30 0 008-2c3.7-1.5 9-2.5 15.5-2.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206.2 217.1c-11.8 0-22.4-1.4-29.9-3.6a1.1 1.1 0 01-.8-1.2c0-.5.3-1 .8-1.2a109 109 0 0129.9-3.6c11.7 0 22.3 1.4 29.8 3.6a1.3 1.3 0 010 2.4c-7.5 2.2-18 3.6-29.8 3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M206.9 215.7v-6.3m-1.7 6.3v-6.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M203.6 215.7v-6.3m-1.6 6.3v-6.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M200.6 215.7v-6.3m-2.8 5.9v-5.7m1.3 5.8v-6m-3.8 5.6v-5.2m1.3 5.4v-5.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M192 214.8V210m1 4.7V210m1.2 5v-5m-3.4 4.7v-4.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M189.7 214.5v-4.2m-1.2 4.1v-4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".6",
      d: "M186 214v-3m1.3 3.2v-3.5m-2.5 3.1V211"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".7",
      d: "M183.7 213.6v-2.3m-1.3 2v-1.8m-1.2 1.6v-1.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".9",
      d: "M179.8 212.8v-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M213.7 215.3v-5.8m-2.9 6v-6.1m-2.1 6.2v-6.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206 207.4a108 108 0 00-30 3.9c.6-.3.5-1-.3-3-1-2.5-2.4-2.4-2.4-2.4 8.3-2.5 20-4 32.8-4a123 123 0 0133 4s-1.5-.1-2.5 2.3c-.8 2-.8 2.8-.2 3-7.5-2.2-18.4-3.7-30.3-3.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206.1 201.9c-12.9 0-24.5 1.5-32.8 4a1 1 0 01-1.3-.6 1 1 0 01.7-1.3 121 121 0 0133.4-4.2c13.2 0 25.2 1.7 33.5 4.2.6.2.9.8.7 1.3-.2.5-.8.8-1.3.6-8.4-2.5-20-4-32.9-4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M197 204.8c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206.1 205.6H203a1 1 0 010-2h6.4c.5 0 1 .5 1 1s-.5 1-1 1h-3.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#058e6e",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M190.3 206.5l-2.3.2c-.6.1-1-.3-1.2-.8a1 1 0 011-1.1l2.2-.3 2.4-.3c.5 0 1 .3 1.1.9.1.5-.3 1-.9 1l-2.3.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M181 206.7c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M174 208.5l1.2-1.6 3.3.4-2.6 2-1.8-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#058e6e",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M222 206.5l2.3.2c.5.1 1-.3 1.1-.8a1 1 0 00-.9-1.1l-2.2-.3-2.4-.3a1 1 0 00-1.1.9c-.1.5.3 1 .9 1l2.3.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M213.3 204.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m15.8 1.9c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M238.2 208.5l-1.1-1.6-3.3.4 2.6 2 1.8-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M177.3 212.8c7.4-2.1 17.6-3.4 28.8-3.4 11.3 0 21.4 1.3 28.9 3.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M204.2 178c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7m.4-3.7c0-.7.6-1.3 1.4-1.3.8 0 1.5.6 1.5 1.3 0 .8-.7 1.4-1.5 1.4s-1.4-.6-1.4-1.4m.4-3.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m.2-2.8c0-.5.4-.8.8-.8.5 0 .9.3.9.8 0 .4-.4.8-.9.8a.8.8 0 01-.8-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206.2 191.8l1.2.2a4.6 4.6 0 004.5 6 4.7 4.7 0 004.4-3c.1 0 .5-1.7.7-1.7.2 0 .1 1.8.2 1.7.3 2.3 2.4 3.8 4.7 3.8a4.6 4.6 0 004.7-5l1.5-1.5.7 2a4 4 0 00-.4 1.9 4.4 4.4 0 004.5 4.2c1.6 0 3-.7 3.8-1.9l.9-1.2v1.5c0 1.5.6 2.8 2 3 0 0 1.7.1 4-1.6 2.1-1.7 3.3-3.1 3.3-3.1l.2 1.7s-1.8 2.8-3.8 4c-1 .6-2.7 1.3-4 1-1.4-.2-2.4-1.3-3-2.6a6.7 6.7 0 01-3.3 1 6.5 6.5 0 01-6.1-3.7 7 7 0 01-10.4-.3 7 7 0 01-4.6 1.8 6.9 6.9 0 01-5.7-3 6.9 6.9 0 01-5.7 3 7 7 0 01-4.7-1.8 7 7 0 01-10.4.3 6.5 6.5 0 01-6 3.7 6.7 6.7 0 01-3.4-1c-.6 1.3-1.5 2.4-3 2.7-1.2.2-2.9-.5-4-1.1-2-1.2-3.8-4-3.8-4l.2-1.7s1.2 1.4 3.4 3.1c2.2 1.8 3.9 1.6 3.9 1.6 1.4-.2 2-1.5 2-3v-1.5l1 1.2a4.6 4.6 0 003.7 2c2.5 0 4.5-2 4.5-4.3a4 4 0 00-.4-2l.8-1.9 1.5 1.5a4.4 4.4 0 000 .6c0 2.4 2 4.4 4.6 4.4 2.4 0 4.4-1.5 4.7-3.8 0 0 0-1.6.2-1.7.2 0 .6 1.7.7 1.6a4.7 4.7 0 004.5 3.1 4.6 4.6 0 004.5-6l1.2-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M238.6 197.7c.3-.8 0-1.6-.6-1.8-.5-.2-1.2.3-1.5 1.1-.3.8 0 1.6.6 1.8.5.2 1.2-.3 1.5-1.1m-20.5-4c0-.8-.3-1.6-1-1.6-.5-.1-1 .5-1.2 1.4-.1.8.3 1.5.9 1.6.6 0 1.2-.6 1.3-1.4m-23.9 0c0-.8.4-1.6 1-1.6.6-.1 1.1.5 1.2 1.4.1.8-.3 1.5-.9 1.6-.6 0-1.1-.6-1.2-1.4m-20.6 4c-.2-.8 0-1.6.6-1.8.6-.2 1.2.3 1.5 1.1.3.8 0 1.6-.5 1.8-.6.2-1.3-.3-1.6-1.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M182.7 184a5.1 5.1 0 012.2 2.9s0-.3.6-.6 1-.3 1-.3l-.1 1.3-.3 2.2a7.4 7.4 0 01-.7 1.6 1.9 1.9 0 00-1.5-.4 1.8 1.8 0 00-1.2.9s-.7-.6-1.2-1.3l-1.1-2-.7-1.1s.5-.2 1.1 0c.6 0 .8.2.8.2a4.9 4.9 0 011-3.4m.4 9.8a1.8 1.8 0 01-.6-1c0-.5 0-.9.3-1.2 0 0-.9-.5-1.8-.7-.7-.2-2-.2-2.3-.2h-1l.2.5c.2.5.5.7.5.7a5 5 0 00-3 2 5.3 5.3 0 003.5 1l-.2.8v.6l1-.4c.3-.1 1.5-.5 2-1 .8-.4 1.5-1.1 1.5-1.1m2.7-.5a1.6 1.6 0 00.2-1.1 1.7 1.7 0 00-.6-1l1.4-1.3a10 10 0 012-.9l1.1-.4v.6a5.7 5.7 0 01-.2.8 5 5 0 013.4 1 5 5 0 01-2.9 2 6.4 6.4 0 00.7 1.2h-1c-.4 0-1.6 0-2.3-.2a11 11 0 01-1.8-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206.1 180.8a5.7 5.7 0 011.9 3.7s.2-.3.9-.5c.7-.3 1.2-.2 1.2-.2l-.5 1.4-.8 2.4a8.2 8.2 0 01-1 1.7 2.1 2.1 0 00-1.7-.7c-.6 0-1.2.3-1.6.7 0 0-.6-.7-1-1.7l-.8-2.4-.5-1.4 1.2.2c.7.2.9.5.9.5 0-1.4.8-2.8 1.8-3.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M204.6 191.8a2 2 0 01-.5-1.2c0-.5.1-1 .4-1.3 0 0-.8-.7-1.8-1-.7-.4-2-.7-2.5-.7l-1.2-.2.2.6.4.9a5.9 5.9 0 00-3.7 1.7c1 .9 2.3 1.6 3.7 1.6l-.4 1-.2.6 1.2-.2c.4-.1 1.8-.4 2.5-.7 1-.4 1.9-1 1.9-1m3 0a1.9 1.9 0 00.1-2.6s.9-.7 1.8-1a8 8 0 012.5-.7l1.2-.3-.1.7-.4.9c1.4 0 2.7.8 3.6 1.7a5.9 5.9 0 01-3.6 1.6 6.9 6.9 0 00.5 1.6l-1.2-.2-2.5-.7c-1-.4-1.8-1-1.8-1m22-8a5.2 5.2 0 00-2.2 3l-.7-.6c-.6-.3-1-.3-1-.3l.2 1.3c0 .3 0 1.3.3 2.2.2 1 .6 1.6.6 1.6a2 2 0 011.5-.4c.6.1 1 .5 1.3.9l1.1-1.3c.6-.8 1-1.7 1.1-2l.7-1.1s-.4-.2-1 0c-.7 0-1 .2-1 .2a4.9 4.9 0 00-1-3.4m-.3 9.8c.3-.3.5-.6.6-1a1.6 1.6 0 00-.2-1.2s.8-.5 1.7-.7c.7-.2 2-.2 2.3-.2h1.1l-.3.5a6.2 6.2 0 01-.4.7 5 5 0 012.9 2 5.3 5.3 0 01-3.5 1l.2.8v.6l-1-.4c-.3-.1-1.4-.5-2-1-.8-.4-1.4-1.1-1.4-1.1m-2.8-.5a1.7 1.7 0 01-.2-1.1c0-.5.3-.8.6-1 0 0-.6-.8-1.4-1.3-.6-.4-1.7-.8-2-.9a171.4 171.4 0 01-1-.4v.6c0 .5.2.8.2.8a5.2 5.2 0 00-3.5 1c.7.9 1.7 1.7 3 2 0 0-.3.2-.5.7l-.3.5h1c.4 0 1.7 0 2.3-.2a11.1 11.1 0 001.8-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M226 192.4c0-1 1-2 2-2s2.1 1 2.1 2a2 2 0 01-2 2 2 2 0 01-2.1-2m23.2 4.4c-.4-.5-1.4-.4-2.2.2-.8.7-1 1.6-.5 2.2.5.5 1.5.4 2.3-.3.7-.6 1-1.6.5-2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M246.3 198l.7-1c.7-.6 1.8-.7 2.3-.2l.1.2s1-2 2.3-2.6c1.3-.7 3.4-.5 3.4-.5a2.8 2.8 0 00-2.9-2.8 3 3 0 00-2.4 1l-.2-1s-1.3.3-1.9 1.8c-.6 1.5 0 3.6 0 3.6s-.3-.9-.7-1.5a8 8 0 00-2.4-1.6l-1.3-.7-.1.5a5 5 0 000 .8 7.9 7.9 0 00-3.7.5 4.7 4.7 0 002.5 2.2l-.8.7a4 4 0 00-.4.5l1.3.2 2.5.2a14.5 14.5 0 001.7-.2m-80.3 0c0-.4-.3-.7-.7-1-.7-.7-1.7-.8-2.2-.3l-.2.3s-1-2-2.3-2.7c-1.2-.7-3.3-.5-3.3-.5a2.8 2.8 0 012.8-2.8c1 0 1.9.4 2.4 1l.2-1s1.3.3 2 1.8c.5 1.5-.1 3.6-.1 3.6s.3-.9.8-1.5a8 8 0 012.4-1.6l1.3-.7v1.3a7.9 7.9 0 013.7.5 4.7 4.7 0 01-2.5 2.2l.8.7.4.5-1.2.2-2.6.2a14.7 14.7 0 01-1.7-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M163 196.8c.6-.5 1.6-.4 2.4.3.7.6 1 1.5.4 2-.5.6-1.5.5-2.2-.2-.8-.6-1-1.6-.5-2m41-6.3c0-1.1.9-2 2-2s2.1.9 2.1 2c0 1-1 2-2 2a2 2 0 01-2.1-2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#005bbf",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M201.8 160.6c0-2.2 1.9-4 4.3-4s4.2 1.8 4.2 4-1.9 4-4.3 4a4.1 4.1 0 01-4.2-4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M205 149.3v2.2h-2.4v2.2h2.3v6.3H202l-.2.6c0 .6.1 1.1.3 1.6h7.9c.2-.5.3-1 .3-1.6l-.2-.6h-2.8v-6.3h2.3v-2.2h-2.3v-2.2h-2.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ccc",
      d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ccc",
      d: "M206.3 270h48.3v-53.5h-48.3V270z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M206.3 270h48.3v-53.5h-48.3V270z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M168.6 320.9c1.5.8 3.6 2 5.8 2.6l-.1-54.7h-5.7v52z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".5",
      d: "M158 301.6a24.4 24.4 0 005.5 15v-47.5h-5.4v32.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c7b500",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M179.4 324.7a26.6 26.6 0 005.6 0v-55.9h-5.6v56z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M190 323.5a19 19 0 005.8-2.5v-52.2H190l-.1 54.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M158.1 270h48.2v-53.5H158V270z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M158.1 270h48.2v-53.5H158V270z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M201 316c2.4-2 4.6-6.8 5.4-12.2l.1-35H201l.1 47.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M215.1 294.1l.1.5c0 .6-.5 1-1.1 1a1 1 0 01-1.1-1v-.5h-1.5a2.5 2.5 0 001.8 2.9v3.9h1.6V297a2.6 2.6 0 001.7-1.6h4.4v-1.2h-6m21.8 0v1.2h-4a2.5 2.5 0 01-.3.6l4.6 5.2-1.2 1-4.6-5.3-.2.1v8.7h-1.6V297h-.2l-4.8 5.2-1.2-1 4.7-5.3a2.1 2.1 0 01-.2-.4h-4V294h13zm2.6 0v1.2h4.4c.3.8.9 1.4 1.7 1.6v3.9h1.6V297a2.5 2.5 0 001.8-2.4 2 2 0 000-.5h-1.6l.1.5c0 .6-.5 1-1 1-.7 0-1.2-.4-1.2-1a1 1 0 01.1-.5h-5.9m-6.7 22.1a15.6 15.6 0 003.7-1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-11-2.2l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.3-4.8h1.7a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.5.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-6-4.8c.3-.4 1-.5 1.5 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2.2-4.5l-1.6-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.2 2.7zm1.4-5.3l1.7.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6a14 14 0 01-.3-2.7v-2.6zm5.6 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7m2.2-9.4l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m18.1 9.9l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.5-.5a2.4 2.4 0 00.3-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3.1 2.6zm6-4.8a1.2 1.2 0 00-1.5 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2.2-4.5l1.6-.3.3-4.3-1.7-.6v2.5c0 1 0 1.9-.2 2.8zm-1.4-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m-5.6 13.7a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.6 18.6 0 004-2l-.4-1.7m-2.2-9.4l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-20.1-8.7l.5 1.6h4.5l.5-1.6h-5.5m21.1 0l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M211.5 294.2c.2-1 1-1.6 1.8-2V287h1.6v5.3c.8.3 1.5.9 1.7 1.6h4.4v.3h-6a1.2 1.2 0 00-1-.6c-.4 0-.7.3-1 .6h-1.5m12.2 0v-.3h4.1a2.4 2.4 0 01.2-.3l-5-5.7 1.2-1 5 5.6.2-.1V285h1.6v7.3h.3l4.9-5.5 1.2 1-4.9 5.5.3.6h4v.3h-13zm21.6 0a1.1 1.1 0 011-.6c.5 0 .8.3 1 .6h1.6c-.2-1-.9-1.6-1.8-2V287h-1.6v5.3c-.8.3-1.4.8-1.7 1.6h-4.4v.3h6m-30.2-15l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.7 2.5 2.5 2.5 0 001.8 2.4v5.2h1.6v-5.2h.3zm32 0v5.3h-1.7v-5.2a2.5 2.5 0 01-.4-.2l-6 6.8-1.3-1 6.2-6.9-.1-.3h-4.5V276h4.5a2.6 2.6 0 012.4-1.7 2.6 2.6 0 012.7 2.5 2.5 2.5 0 01-1.9 2.4zm-16.1 0v3.3h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4a2.6 2.6 0 012.5-1.7c1.2 0 2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm-17.8 4l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m30.6 0l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m-25.5.8l1.6-.7 2.9 3.3-1 1.4-3.5-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.3-1.5-.7 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m-6.7-17c0-.6.5-1 1.2-1a1 1 0 011 1c0 .6-.4 1-1 1a1.1 1.1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m15.7 17.8l-.5-1.6h-4.5l-.5 1.6h5.5m4.4-17c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1.1 1a1.1 1.1 0 01-1.1-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.6m0-1.6l.5-1.6h4.6l.5 1.6h-5.6m-5.9 5l-1.7.5v4.3l1.7.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#c8b100",
      strokeWidth: ".3",
      d: "M232.7 316.3a15.6 15.6 0 003.7-1.1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-4.7-20.4a2.3 2.3 0 01-.2-.5h-4V294h4a2.6 2.6 0 01.2-.4l-5-5.6 1.2-1 5 5.5a2.2 2.2 0 01.2 0V285h1.7v7.3h.2l4.9-5.5 1.2 1-4.9 5.5.3.6h4v1.5h-4c0 .2-.2.4-.3.5l4.7 5.3-1.3 1-4.6-5.3-.2.1v8.7h-1.6V297l-.2-.1-4.8 5.3-1.2-1 4.7-5.3m-12.8-16.7l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.6 2.5 2.5 2.5 0 001.7 2.4v5.2h1.6v-5.2h.3zm6.5 34.8l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.2-4.8h1.6a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.6.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-8.4-13.1V297a2.5 2.5 0 01-1.8-2.4c0-1 .8-2 1.8-2.4V287h1.6v5.3c.8.2 1.5.8 1.7 1.6h4.4v1.5h-4.4a2.6 2.6 0 01-1.6 1.6v3.9h-1.7m2.3 8.3c.4-.4 1.1-.5 1.6 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2-4.5l-1.7-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.3 2.7zm1.4-5.3l1.6.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6-.3-2.7v-2.6zm5.5 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#c8b100",
      strokeWidth: ".3",
      d: "M221.9 305.1l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m-7.6-9.5c0-.6.5-1 1-1 .7 0 1.2.5 1.2 1 0 .6-.5 1.1-1.1 1.1a1 1 0 01-1.1-1zm25.7 19.4l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.6-.5a2.4 2.4 0 00.2-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3 2.6zm8.4-13.1V297a2.5 2.5 0 001.8-2.4c0-1-.7-2-1.8-2.4V287h-1.6v5.3c-.8.2-1.4.8-1.7 1.6h-4.4v1.5h4.4c.3.8.9 1.3 1.7 1.6v3.9h1.6zm-2.3 8.3a1.2 1.2 0 00-1.6 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2-4.5l1.7-.3.3-4.3-1.7-.6v2.5c0 1 0 1.8-.2 2.7zm-1.3-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m1.6-20.1v5.2h-1.6v-5.2a2.3 2.3 0 01-.4-.2l-6 6.8-1.2-1 6-7v-.2h-4.5V276h4.4a2.6 2.6 0 012.5-1.7 2.6 2.6 0 012.6 2.5 2.5 2.5 0 01-1.8 2.4zm-16 0v3.2h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4c.4-1 1.3-1.7 2.5-1.7s2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm8.8 33.8a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.7 18.7 0 004-2l-.4-1.7m-27.4-31.4l-1.7.5v4.3l1.7.5v-5.2m1.7 0l1.6.4v4.3l-1.6.5V283m30.5 0l-1.7.5v4.3l1.7.5V283"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#c8b100",
      strokeWidth: ".3",
      d: "M247.1 283.1l1.7.5v4.3l-1.7.5V283m-8.6 22l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-18.2-20l1.6-.7 3 3.3-1 1.4-3.6-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.2-1.5-.6 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m0 1.5l.5 1.6h4.5l.5-1.6h-5.5M213 277c0-.6.5-1 1.2-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m20.1 18.5c0-.5.5-1 1.1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1.1-1 1.1a1 1 0 01-1.2-1zm-4.4-.7l-.5-1.6h-4.5l-.5 1.6h5.5m0 1.5l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2m15.7-32.6c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.5m0-1.6l.4-1.6h4.6l.5 1.6h-5.5m-6 5l-1.6.5v4.3l1.6.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#058e6e",
      d: "M227.7 294.7a2.6 2.6 0 012.6-2.5 2.6 2.6 0 012.6 2.5 2.6 2.6 0 01-2.6 2.4c-1.4 0-2.6-1-2.6-2.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ed72aa",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M238.1 227.5v1.4c.2.6-.1 1.2 0 1.5 0 .4.1.6.3.9l.2.9-.7-.5-.6-.4v1c.1.2.3.8.6 1.1l1 1.3c.2.5.1 1.4.1 1.4s-.4-.7-.8-.8l-1.2-.7s.7.8.7 1.5c0 .8-.3 1.6-.3 1.6s-.3-.7-.8-1.1l-1-.9s.4 1.2.4 2v2.3l-.9-1-1-.7c0-.2.5.6.6 1.1 0 .5.3 2.3 1.8 4.5 1 1.3 2.3 3.6 5.3 2.9 3-.8 1.9-4.8 1.3-6.7a16.8 16.8 0 01-1-4.6c0-.8.6-2.9.5-3.3a8 8 0 01.2-3.1c.4-1.3.7-1.8.9-2.3.2-.6.4-.9.4-1.3l.1-1.3.7 1.3.1 1.5s.1-1 1-1.6c.8-.6 1.8-1.1 2-1.4.3-.3.3-.5.3-.5s0 1.8-.6 2.6l-1.7 2s.7-.3 1.2-.3h.9s-.6.4-1.4 1.6c-.8 1-.5 1.2-1 2.1-.6 1-1 1-1.7 1.5-1 .8-.5 4.2-.4 4.7.2.5 2 4.5 2 5.5s.2 3.2-1.5 4.6c-1.1 1-3 1-3.4 1.2-.4.3-1.2 1.1-1.2 2.8 0 1.7.6 2 1 2.4.6.5 1.2.2 1.3.6.2.3.2.5.5.7.2.2.3.4.2.8 0 .3-.8 1.1-1.1 1.7l-.8 2.4c0 .2-.1 1 .1 1.3 0 0 .9 1 .3 1.2-.4.2-.8-.2-1-.2l-.9.5c-.3-.1-.3-.3-.4-.8l-.1-.7c-.2 0-.3.2-.4.5 0 .2 0 .8-.3.8-.2 0-.5-.4-.8-.5-.2 0-.8-.2-.8-.4 0-.3.4-.9.7-1 .4 0 .8-.3.5-.5s-.5-.2-.7 0-.8 0-.7-.2v-.8c0-.2-.4-.5.1-.8.6-.3.8.2 1.4.1.6 0 .8-.3 1-.6.2-.3.2-1-.2-1.4-.4-.5-.7-.5-.9-.8l-.3-.9v2.2l-.7-.8c-.3-.3-.6-1.3-.6-1.3v1.3c0 .4.3.7.2.8-.1.1-.8-.7-1-.8a3.7 3.7 0 01-1-1l-.4-1.4a4.2 4.2 0 010-1.5l.4-1h-1.4c-.7 0-1.2-.3-1.5.2-.3.5-.2 1.5.2 2.8.3 1.2.5 1.9.4 2.1a3 3 0 01-.7.8h-.9a2.5 2.5 0 00-1.2-.3h-1.3l-1.1-.3c-.3.1-.8.3-.6.7.2.6-.2.7-.5.7l-.9-.2c-.4-.1-.9 0-.8-.4 0-.4.2-.4.4-.7.2-.3.2-.5 0-.5h-.6c-.2.2-.5.5-.8.4-.2-.1-.4-.4-.4-1s-.7-1.2 0-1.1c.5 0 1.3.4 1.4 0 .2-.3 0-.4-.2-.7s-.8-.4-.3-.7l.7-.5c.1-.2.4-.8.7-.6.6.2 0 .7.6 1.3.6.7 1 1 2 .8 1 0 1.3-.2 1.3-.5l-.1-1v-1s-.4.3-.5.6l-.4.8v-2a8 8 0 00-.2-.8l-.3.9-.1 1s-.7-.5-.5-1.5c.1-.7-.1-1.6.1-2 .2-.3.7-1.5 2-1.6h2.6l2-.3s-2.8-1.4-3.5-1.9a9.5 9.5 0 01-2-2l-.6-1.6s-.5 0-1 .3a5 5 0 00-1.2 1l-.7 1 .1-1.2v-.8s-.4 1.2-1 1.7l-1.4 1v-.8l.2-1s-.4.8-1.1 1c-.7 0-1.8 0-1.9.4 0 .5.2 1 0 1.4 0 .3-.4.5-.4.5l-.8-.4c-.4 0-.7.2-.7.2s-.3-.4-.2-.7c.1-.2.7-.6.5-.8l-.8.2c-.3.1-.8.3-.8-.2 0-.4.2-.7 0-1 0-.3 0-.5.2-.6l1.2-.1c0-.2-.2-.5-.8-.6-.6-.1-.8-.5-.5-.8.3-.2.3-.3.5-.6.1-.2.2-.7.7-.5.5.3.4.8 1 1a4 4 0 002-.2l1.5-1 1.5-1-1-.8c-.3-.3-.7-.9-1-1a8.3 8.3 0 00-1.8-.6 9 9 0 01-1.7-.5l.8-.3c.2-.2.6-.6.8-.6h.3-1.4c-.3-.1-1-.6-1.3-.6l-.8.1s.8-.4 1.4-.5l1-.1s-.9-.3-1.1-.6l-.6-1c-.2-.1-.3-.5-.6-.5l-1 .3c-.4 0-.6-.2-.6-.6l-.1-.5c-.2-.3-.6-.8-.2-1h1.4c0-.2-.5-.6-.8-.8-.4-.2-1-.5-.7-.8l.8-.5c.2-.3.3-1 .7-.7.4.2.8 1.2 1.1 1.1.3 0 .3-.8.3-1 0-.4 0-1 .2-.9.3 0 .5.4 1 .5.4 0 1-.1 1 .2 0 .3-.3.7-.6 1-.3.3-.4 1-.3 1.4.2.5.7 1.2 1.2 1.4.4.3 1.2.5 1.7.9.5.3 1.7 1.2 2.1 1.3l.8.4s.5-.2 1.1-.2c.7 0 2.1 0 2.6-.2.6-.2 1.3-.6 1-1-.1-.6-1.3-1-1.2-1.4 0-.4.5-.4 1.2-.4.8 0 1.8.1 2-1 .2-1 .2-1.5-.8-1.8-1-.2-1.8-.2-2-1-.2-.7-.4-.9-.2-1.1.3-.2.6-.3 1.4-.4.8 0 1.6 0 1.9-.2.2-.2.3-.7.6-.9.3-.2 1.4-.4 1.4-.4s1.4.7 2.7 1.7a15 15 0 012.2 2.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M237.3 231.3l-.4-.7a8 8 0 01-.3-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M228.2 230.5l.3-.5.3.5h-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M228.2 230.5l.3-.5.3.5h-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M229 230.5l.3-.5.4.5h-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M229 230.5l.3-.5.4.5h-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M228.6 227.3l.8.3-.7.4-.1-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M228.6 227.3l.8.3-.7.4-.1-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M229.5 227.6l.7.2-.5.4-.2-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M229.5 227.6l.7.2-.5.4-.2-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M224.2 233.7s-.7.2-1 .6c-.4.5-.3 1-.3 1s.6-.5 1.5-.3l1.2.3 1.3-.3s-.7.8-.7 1.3l.2 1.1c0 .7-.6 1.6-.6 1.6l1-.3a4.6 4.6 0 001.7-.8l.9-1s-.2 1 0 1.4l.2 1.6.8-.6c.2-.1.7-.4.9-.7l.3-1s0 .8.4 1.3l.6 1.6s.3-.8.6-1.1c.3-.4.7-.8.7-1a4.3 4.3 0 00-.1-.9l.4.8m-11 .6s.5-.8 1-1l1.1-.8.9-.4m1 5l1.3-.8a4 4 0 001-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7zm16 1.3s2 1.2 1.9 2.2c0 1-1 2.3-1 2.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#db4446",
      d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ffd691",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M208.8 316.4c2 .6 3 2 3 3.8 0 2.3-2.2 4-5 4-3 0-5.3-1.7-5.3-4 0-1.7 1-3.6 3-3.8l-.2-.4-.7-.7h1.2l.8.5.5-.7c.3-.4.6-.5.6-.5l.6.6.3.5.7-.4.8-.3s0 .4-.2.7l-.1.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#058e6e",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M206.3 326.7s-3.8-2.6-5.5-3c-2-.4-4.5 0-5.5 0 0 0 1.2.8 1.8 1.4.5.5 2.3 1.5 3.3 1.8 3 .8 6-.2 6-.2m1 .2s2.4-2.5 5-2.9c3-.4 5 .3 6.2.6l-1.5.8c-.5.3-2 1.5-4 1.6-2 0-4.4-.3-4.8-.2l-.9.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M206.7 323.8a4.8 4.8 0 010-7.1 4.8 4.8 0 011.5 3.5 4.9 4.9 0 01-1.5 3.6"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#058e6e",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M205.7 329s.6-1.5.6-2.7l-.1-2.1h.8s.3 1.1.3 2l-.1 2.4-.7.1-.8.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M231.7 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.6 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m0 3c0-.5.6-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1m-1 2.8c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1 0 .6-.4 1-1 1a1 1 0 01-1-1m-1.9 2.6c0-.5.5-1 1-1 .7 0 1.2.5 1.2 1s-.5 1-1.1 1c-.6 0-1-.4-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M178.2 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m-.7 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m-.2 3c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.9 2.8c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1.1-1m1.8 2.6c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#fff",
      d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M174.7 228.9h-1v-1h-1.5v3.6h1.6v2.5h-3.4v7h1.8v14.3h-3.5v7.3h27.2v-7.3h-3.5V241h1.8v-7h-3.4v-2.5h1.6V228h-1.6v.9h-.8v-1h-1.6v1h-1.1v-1h-1.6v3.6h1.6v2.5H184v-7.8h1.7v-3.5H184v.9h-1v-1h-1.5v1h-.9v-1H179v3.6h1.7v7.8h-3.3v-2.5h1.6V228h-1.6v.9h-.9v-1h-1.8v1zm-6 33.7H196m-27.3-1.8H196m-27.3-1.8H196m-27.3-1.7H196m-27.3-2H196m-23.8-1.6h20.2m-20.2-1.8h20.2m-20.2-2h20.2m-20.2-1.7h20.2m-20.2-1.8h20.2m-20.2-1.8h20.2m-20.2-1.7h20.2m-22-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-20.4-1.7h17m-10.2-1.8h3.4m-3.4-1.8h3.4m-3.4-1.8h3.4m-3.4-1.7h3.4m-5.1-2.2h6.8m-12 7.5h3.6m-5-2.2h6.6m-6.7 32.6v-1.8m0-1.8v-1.7m-1.8 1.7v1.8m3.4 0V259m1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m-1.7 7.4v-2m-3.4 2v-2m7 0v2m1.5-2v-1.6m-5.1-1.8v1.8m3.5-1.8v1.8m3.3-1.8v1.8M179 252v-2m1.7-1.7v1.7m0-5.3v1.8m-1.7-3.6v1.8m1.7-3.5v1.7m-3.3-1.7v1.7m-3.5-1.7v1.7m-1.6-3.5v1.8m3.3-1.8v1.8m3.4-1.8v1.8m1.7-3.6v1.8m-3.3-1.8v1.8m-3.5-1.8v1.8m-1.6-3.6v1.8m6.7-1.8v1.8m-3.4-5.3v1.8m15.3-1.8h-3.5m5-2.2h-6.6m6.7 32.6v-1.8m0-1.8v-1.7m1.8 1.7v1.8m-3.4 0V259m-1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m1.7 7.4v-2m3.4 2v-2m-7 0v2m-1.5-2v-1.6m5.1-1.8v1.8m-3.5-1.8v1.8m-3.3-1.8v1.8m1.7-1.8v-2m-1.7-1.7v1.7m0-5.3v1.8m1.7-3.6v1.8m-1.7-3.5v1.7m3.3-1.7v1.7m3.5-1.7v1.7m1.6-3.5v1.8m-3.3-1.8v1.8m-3.4-1.8v1.8m-1.7-3.6v1.8m3.3-1.8v1.8m3.5-1.8v1.8m1.6-3.6v1.8m-6.7-1.8v1.8m3.4-5.3v1.8m-7 18v-2m0-5.4v-1.8m0 5.4v-1.8m0-5.3v-1.8m0-1.8v-1.7m0-3.6v-1.8m0-1.7v-1.8m-8.3 4.6h3.5m3.3-5.3h3.4m3.3 5.3h3.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M186.8 262.6v-4.7c0-.8-.4-3.5-4.6-3.5-4 0-4.4 2.7-4.4 3.5v4.7h9z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M179.3 258.2l-2.2-.3c0-.9.2-2.2.9-2.6l2 1.5c-.3.2-.7 1-.7 1.4zm6 0l2.2-.3c0-.9-.2-2.2-.9-2.6l-2 1.5c.3.2.7 1 .7 1.4zm-2.2-2.3l1-2a5.3 5.3 0 00-2-.4l-1.7.4 1.1 2h1.6zm-4.2-5.5v-4.9c0-1.3-1-2.4-2.5-2.4s-2.4 1-2.4 2.4v4.9h4.9zm6.8 0v-4.9c0-1.3 1-2.4 2.5-2.4s2.4 1 2.4 2.4v4.9h-4.9zm-1.7-12l.4-4.4h-4.2l.2 4.4h3.6zm3.3 0l-.4-4.4h4.4l-.5 4.4h-3.5zm-10 0l.2-4.4h-4.2l.5 4.4h3.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#0039f0",
      d: "M185.3 262.6v-4c0-.7-.5-2.7-3.1-2.7-2.4 0-2.9 2-2.9 2.7v4h6zm-6.9-12.7v-4.2c0-1-.6-2.2-2-2.2s-2 1.1-2 2.2v4.3h4zm7.8 0v-4.2c0-1 .7-2.2 2-2.2s2 1.1 2 2.2v4.3h-4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#ad1519",
      d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".6",
      d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#005bbf",
      d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".6",
      d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M199.2 269.9h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M199.2 269.9h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M209.4 269.9h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M209.4 269.9h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M204.3 278.6h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M204.3 278.6h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M237.3 225.5v-.2h-.3l.1.2h.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M237.3 225.5v-.2h-.3l.1.2h.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M238.8 227v-.3h-.3v.2h.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M238.8 227v-.3h-.3v.2h.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#c8b100",
      d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3zm38-21.9v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "0",
      d: "M134.4 217.1v-1.2m-.4 1.2v-1.2m-.2 1.2v-1.2m-.3 1.2v-1.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M133.2 217.1v-1.2m-.5 1.1v-1m.2 1v-1m-.7 1v-1m.2 1v-1m-.9 1v-1m.2 1v-1m.3 1v-1m-.7 1v-1m-.3.9v-.8m-.1.8v-.8m-.5.7v-.6m.2.6v-.6m-.4.5v-.5m-.2.5v-.4m-.3.3v-.3m-.3.3v-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M129.2 216.6v-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "0",
      d: "M135.7 217v-1m-.5 1v-1m-.4 1.2V216m143 1.1V216m-.4 1.1V216m-.3 1.1V216m-.3 1.2V216"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M276.6 217.1V216m-.6 1v-1m.3 1v-1m-.8 1v-1m.3 1v-1m-.9 1v-1m.2 1v-1m.2 1v-1m-.6 1v-1m-.3.9v-.8m-.2.8v-.8m-.4.7v-.6m.2.6v-.6m-.5.6v-.6m-.2.5v-.4m-.3.4v-.4m-.2.3v-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M272.6 216.6v-.2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "0",
      d: "M279.1 217v-1m-.6 1v-1m-.4 1.1V216"
    })]
  });
};
// CONCATENATED MODULE: ./src/assets/icons/SAFlag.tsx



const SAFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-sa",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
        id: "sa-a",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          fillOpacity: ".7",
          d: "M-85.3 0h682.6v512H-85.3z"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fillRule: "evenodd",
      clipPath: "url(#sa-a)",
      transform: "translate(80) scale(.9375)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#199d00",
        d: "M-128 0h768v512h-768z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M65.5 145.1c-.8 12-2 33 8.3 35.2 12.3 1.2 5.5-20.8 10-24.8.8-2 2.3-2 2.4.5v18.7c0 6 4 7.8 7 9 3.2-.2 5.4 0 6.6 3l1.6 32.3s7.4 2.2 7.8-18.1c.3-12-2.4-21.9-.8-24.2 0-2.3 3-2.4 5-1.3 3.2 2.2 4.6 5 9.6 4 7.6-2.2 12.2-5.9 12.3-11.7a47 47 0 00-3.5-16.6c.4-1-1.4-3.7-1-4.7 1.3 2.2 3.4 2 3.8 0-1.3-4.2-3.3-8.3-6.5-10-2.7-2.4-6.7-2-8 3-.8 5.7 2 12.4 6.1 18 .9 2.1 2.1 5.7 1.6 8.9-2.2 1.3-4.4.7-6.3-1.2 0 0-6-4.5-6-5.6 1.6-10.2.3-11.4-.6-14.3-.6-3.9-2.5-5.2-4-7.8-1.5-1.6-3.5-1.6-4.5 0-2.7 4.6-1.4 14.5.5 19 1.4 4.1 3.5 6.7 2.5 6.7-.8 2.3-2.5 1.7-3.8-1a66.6 66.6 0 01-2.1-17.4c-.5-4.6-1.1-14.4-4.2-17-1.8-2.4-4.5-1.2-5.5 1a82.4 82.4 0 00.3 13.4c2 7.4 2.7 14 3.7 21.5.3 10.1-5.8 4.4-5.5-.7a45 45 0 00-.3-19.4c-1-2.6-2.1-3.2-4.6-2.8-1.9 0-6.8 5.3-8.2 14.3 0 0-1.2 4.6-1.7 8.7-.7 4.6-3.7 8-5.9-.6-1.8-6.3-3-21.6-6-18z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M99 194.2l-32 15.4c.3-7.3 15.1-20.4 25.3-20.5 6.5.1 4.9 2.5 6.6 5.1z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M93.3 204.2c-16.8 43.5 39.5 49.6 45.8 1.8.6-2 3-3.9 3.4-.7-1.3 43.3-43.6 46.2-50.8 32.6a41.9 41.9 0 01-2.5-14.6c-1-8.5-5.5-5.2-6.2 3.2-.7 4.7-.5 6-.5 10.5 2.2 34.2 56.7 19.5 65.6-8.7 4.7-15.6-.8-27.1 1.7-27.1 5.4 5.8 13 .8 14.7-1.2.7-1 2.5-1.7 3.7-.4 4.2 3 11.6 1.6 13.2-3.7.9-5.3 1.6-10.7 1.8-16.2-3.5 1-6 1.7-6.3 3.2l-.7 4.6c-.3 1.5-3.2 1.5-3.4-.4-1.3-6-6.7-6.7-10 2.5-2.1 1.8-6.1 2.2-6.5-.5.5-6.2-2-7-7-4.1l-4.8-36.2c2 0 4 1.5 5.9-.9-2-6.5-6.5-19.7-9-20.7-1.1-1.4-2.1-.5-3.7-.1-2.6.8-5 3-4.2 7.4 3 18.8 5 33.1 8.1 52 .5 2.1-1.3 5-3.7 4.7-4-2.7-5-8.2-12-8-5 0-10.6 5.5-11.3 10.7-.9 4.2-1.2 8.7 0 12.3 3.5 4.2 7.7 3.8 11.4 2.9 3-1.3 5.5-4.3 6.6-3.6.7.9.1 10.9-14.3 18.5-8.7 4-15.7 4.8-19.4-2.3-2.3-4.5.2-21.4-5.6-17.5z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M165 160c3.3-1.2 19.3-19.6 19.3-19.6l-2.4-2c-.9-.7-.8-1.5 0-2.2 4-2.4 2.7-7.4.7-9.8a9.7 9.7 0 00-8.7.1c-2.8 2.7-3.4 7-1.2 9.6 2.1 1 4.2 3.2 2.8 4.4-6.6 7-24.5 19.1-22.4 19.5.4.6 11.5.6 11.8 0zm-97 65c-6 9.6-6.5 23.9-3.2 28.2 1.8 2 4.7 2.9 6.8 2.2 3.8-1.6 5.5-9.3 4.6-12-1.3-2-2.3-2.3-3.6-.7-2.6 5.4-3.7 1.7-4-1.3a70 70 0 01.8-15.2c.7-4.2 0-3-1.4-1.2zm257.1-15.3c-5.8-12.6-13.9-25-16.4-29.7a557.6 557.6 0 00-24.8-36c-6.2-7.4 10.2 3.1-2-11.7l-8.9-7.5c-2-1.4-6.8-4-7.6.2-.4 3.8-.2 5.8.4 8.9.5 2 3.5 5.5 5 7.5a565 565 0 0153.8 86.5c2.6-1.3 2-16.1.5-18.2z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M299.6 251.5c-1.2 1.3 2.8 6.8 8 6.8 8.6-1 16.2-5.8 23.2-18.6a33 33 0 005.3-14.2 317 317 0 00-5.8-72.4c-.3-2 0-4.4.2-5 .6-.7 2.5 0 3.5-1.7 1.5-1.5-4-14-7-18.7-1-2.2-1.5-3.6-3.3.2a27 27 0 00-3 13.6c4.1 28.5 5.4 53.4 8 81.9.3 2.8-.1 6.8-2 8.4a80.2 80.2 0 01-27.1 19.7zm116.5-.1c-6.2 3.6-6.2 7.7-1.2 7.8 8.6-1 18.8-1.7 25.8-12.3a41 41 0 004.2-16 303 303 0 00-4.7-71.4c-.2-2-1.1-6.7-.8-7.3.6-1.4 3.4.1 4.4-1.5 1.4-1.5-7.3-12.7-10.4-17.5-1-2.2-1.4-3.6-3.3.2a22.3 22.3 0 00-1.8 13.6c4.6 31 8 54.2 8.7 81.6-.4 2.6-.5 4-1.7 7.3-2.7 3.4-5.7 7.8-8.5 9.9-2.8 2-8.8 4-10.7 5.6z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M420.7 223.7c0-7.3.1-13.5-.1-19a34 34 0 00-3-13.5c-1.8-4.1-.7-7.4-1.6-11.8-.8-4.4-.6-11-1.8-16.1-.4-2-1.4-8.5-1.1-9.2.5-1.4 2.4 0 3.4-1.6 1.4-1.5-5-18-8.2-22.7-1.1-2.1-3.3-1.4-5.8 2-2.5 2.3-1.6 7.4-.6 12.3 6.1 32.3 10.8 61.6 9.8 92.3-.4 2.6 9-7.8 9-12.7zm-45.7-40c-3.9-.2-12-7.7-14.4-12a8 8 0 01.4-6.5c1.5-1 3.7-2 5.4-1 0 0 1.7 2.4 1.4 2.7 2 1 3 .5 3.2-.4.1-1.5-.6-2.4-.6-4 .9-4.6 6-5.3 8-2.4 1.4 1.8 2 5.5 2.1 8 0 1.3-2-.2-3.3 0-1.1.4-1.4 1.8-1.5 3-.2 3.3-.6 8.6-.7 12.5zm-71.8 48c1-9.8-.4-27.3-.5-33.1A477 477 0 00299 154c-1.2-8.4 3.4.9 2.8-4-1.5-8.3-6.1-14-11.6-21.5-1.7-2.5-1.7-3-4.4.6-3 6.7-.4 11.4.4 16.7 3.9 17.2 6.2 33 7.3 48.7a393.4 393.4 0 01.4 49c3 .1 7.6-4.7 9.3-11.8z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M434 216c-6.9-11.6-17.2-24-20-28.7a658 658 0 00-29.2-37.8c-8.5-9 4-1.5-1.6-8.5-4.7-5.1-6-6.8-10.1-9.9-2-1.3-3.2-3.8-4 .5a83 83 0 00-.2 11.2c0 1.7 1.8 5 3.4 7 20.7 25.5 43.4 51.5 61.6 84.2 2.6-1.3 1.7-16 0-18z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#1ba400",
        d: "M122.6 194.7c-.5.9-1.6 2-1.2 3.1.7 1 1.4 1.3 2.6 1.3 1.1 0 2.7.3 3-.3.6-.7 1-2 .6-3.3-1.2-3-4.4-1.8-5-.8z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M354.2 362.5c9.2.4 15.2.5 23.3 1.4l9.6-1c10.6-1 11 15.1 11 15.1 0 9.5-3.7 10-8.4 11-2.7.4-4-1.6-5.5-3.6a14 14 0 01-7 .4c-3.9-.2-7.7-.2-11.5-.5-4-.3-6.2.5-10.3.1-.8 1.3-2 3.1-4.4 2.6-2-.3-4.5-6-3.8-10.5 1.5-3.2 1-2.1 1-3.5-37.6-1-75.5-2.7-112.3-2.2-28.8.1-57.2 1.3-85.7 2.5-15.2-.2-26.8-2.6-34.8-14.3.8 0 38.8 2.1 49.9 1.4 20.5-.2 39.3-1.9 60.2-2.5 41.2.7 82.1.7 123.3 3.6-4-2.7-4-9 2-10.6.5-.4.8 3.1 1.7 3 4.9-.3 2.7 6.3 1.7 7.6zM188.6 135.3c-6.2 17.8 3.6 37.4 10.4 35.5 5 2 8-7.4 10-17.6 1.5-2.9 2.5-3.2 3.2-1.7-.2 13.6 1 16.7 4.5 20.8 7.8 6 14.3.8 14.8.3l6-6.1c1.4-1.5 3.2-1.5 5.1-.3 1.9 1.7 1.6 4.6 5.6 6.6 3.4 1.4 10.5.4 12.2-2.5 2.2-3.9 2.8-5.2 3.8-6.6 1.6-2.1 4.3-1.2 4.3-.5-.3 1.2-1.9 2.3-.8 4.5 2 1.4 2.4.5 3.5.2 4-2 7-10.6 7-10.6.1-3.2-1.7-3-2.9-2.2l-3.1 2.1c-2 .3-5.7 1.6-7.6-1.3-1.9-3.4-1.9-8.3-3.3-11.8 0-.2-2.6-5.5-.2-5.8 1.2.2 3.7.9 4.1-1.2 1.2-2.1-2.6-8-5.3-11-2.3-2.5-5.5-2.8-8.6-.2-2.2 2-1.9 4.2-2.3 6.3a9.8 9.8 0 002 8.7c2.2 4.2 6.1 9.7 4.8 17.5 0 0-2.3 3.6-6.3 3.1-1.7-.3-4.4-1-5.8-11.8-1.1-8 .2-19.4-3.2-24.7-1.3-3.3-2.2-6.4-5.2-.9-.8 2.2-4.3 5.5-1.8 12.2a36 36 0 012 19c-1.5 2.2-1.8 2.9-3.7 5-2.6 3-5.5 2.2-7.7 1.1-2-1.3-3.6-2-4.6-6.5.2-7 .6-18.5-.7-20.9-1.9-3.8-5-2.4-6.3-1.2a47.7 47.7 0 00-11.5 23.5c-1.8 5.8-3.7 4.1-5 1.8-3.2-3-3.5-26.7-7.4-22.8z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M207.4 174.1c2.9-2 1.6-3.4 5.8.8a72 72 0 019.2 31.3c-.2 2.6 1.6 4.2 2.5 3.6.4-6 15.1-14.4 28.6-15.6 2-.5 1-4.4 1.3-6.4-.8-7.5 4.2-14.3 11.2-14.8 9.6 1.4 12.8 6.5 13 14.2-1.1 15-16.7 17.5-25.4 18.7-1.3.5-1.9 1.1 0 1.8l36.6.2 1.9 1c.2 1-.6.2-2 2.6a29.5 29.5 0 00-3.7 11.5c-10.9 3.6-22.2 5-33.6 6.5-4 2-6 4.7-5.2 7.7 1.4 3.3 10.2 6.7 10.2 6.8 1.7 1 3.6 3.5-.5 8.6-17.8-.8-31.7-8.4-36.5-19.1-1.4-1.1-3 0-4 1.4-7 9-13.8 17-25.7 21.4-7 1.8-14.3-1.1-17.7-5.7-2.3-2.7-2.2-5.6-3-6.2-3.9 1.7-36.9 15.7-32.7 9.1 8-8.5 22-14.9 34.2-23.3.9-2.9 2.5-12.5 7.3-15.6.3 0-.7 5.6-.6 8 0 2-.2 2.7.2 2.2.9-.5 15.7-12.2 17-15.8 1.4-2 .3-7.2.3-7.4-2.8-7.2-6.7-7.8-8.1-11.4-1.3-4.7-.7-10.1 2-11.7 2.4-2.1 5.2-1.9 7.9.5 3 2.7 5.6 8 6.4 11.9-.5 1.5-4-1-5-.3a16 16 0 013.7 7.8c2 8.2 1.4 11.4-.6 16.7-6.6 13.9-15 18-22.4 23.2-.2 0-.3 3.5 2.4 5.4 1 1 4.9 1.5 9.4 0a54.5 54.5 0 0022.3-23.3 51 51 0 00-2.4-22.2c-2.9-6.7-6.3-16.2-6.3-16.4-.1-4.2.2-5.6 2-7.7zm-95.8-38.6c4.2 2 12.2 1.1 11.8-5.7l-.2-3.1c-.8-2-3.2-1.5-3.7.5-.2.7.3 1.8-.3 2.1-.4.4-1.7.2-1.7-1.7 0-.6-.4-1.2-.7-1.6-.2-.2-.4-.2-.9-.2-.6 0-.6.1-.9.6-.1.5-.3 1-.3 1.6 0 .7-.4.9-.8 1-.6 0-.5 0-1-.2-.2-.3-.5-.4-.5-1l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.7-2.3 3.7-.2.2-.3 4.9 2.8 6.2z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M235.1 187.7c4.2 2 14.3.9 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.6-.2.6.3 1.7-.4 2-.3.4-1.7.2-1.6-1.6 0-.6-.4-1.3-.7-1.7-.3-.1-.4-.2-1-.2-.5 0-.5.2-.8.7-.2.5-.3 1-.3 1.6-.1.6-.4.8-.9 1-.5 0-.4 0-.8-.3-.3-.3-.6-.4-.6-.9l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 5 3 6.2zm72-21.6c4.2 2 12.1 1.1 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.5-.2.7.3 1.8-.4 2.2-.3.3-1.7.1-1.6-1.8 0-.6-.4-1.2-.7-1.6-.3-.2-.4-.2-1-.2-.5 0-.5.2-.8.7l-.3 1.5c-.1.7-.4 1-.9 1s-.4 0-.8-.2c-.3-.3-.6-.4-.6-.9s-.1-1.3-.3-1.7c-.2-.3-.6-.4-1-.5-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 4.9 3 6.2zm37.3 54.3c-7.3 8.3-4.1 22-2.4 25 2.4 4.8 4.3 7.9 9 10.3 4.3 3.1 7.7 1.2 9.5-1 4.3-4.5 4.4-16 6.4-18.2 1.4-4.2 5-3.5 6.7-1.6a16.5 16.5 0 006.2 5.3c4 3.5 8.8 4.2 13.6 1 3.2-1.9 5.3-4.2 7.2-8.9 2-5.6 1-31.6.5-47l-4.2-21.5c0-.2-.5-10.2-1-12.5 0-1-.3-1.3.7-1.2 1.1 1 1.2 1 2 1.3 1 .2 2-1.7 1.3-3.3l-10-18.6c-.8-.8-1.9-1.6-3.2.2a7.3 7.3 0 00-2.4 5.5c.3 4.4 1 8.9 1.3 13.3l4 22.6c1.3 16 1.6 29.2 2.9 45.3-.2 6.8-2.3 12.7-4.3 13.6 0 0-3 1.7-5-.2-1.5-.6-7.4-9.9-7.4-9.9-3-2.7-5-2-7.1 0-6 5.8-8.6 16.4-12.7 23.8-1 1.7-4 3-7.2-.1-8.2-11.3-3.4-27.3-4.4-23.2zM309 126.7c3.8 1.5 6.4 9.2 5.6 13-.8 4.5-2.8 9.5-4.2 8.9-1.6-.6 1-4.6-.5-8.8-.8-2.8-6-7.8-5.4-9.2-1-3.1 2.2-4.5 4.5-4z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M356.6 225c.7-9.2-.6-14.8-.8-20.2s-6.1-46.6-7.3-50.6c-1.5-7.8 5.7-1 4.9-5.6-2.5-5.6-8.6-13.9-10.5-18.8-1.2-2-.7-4-3.3-.5a42.3 42.3 0 00-2.3 19.2c6.2 32.3 12.5 59.1 11.5 89.8 3 0 6.3-6.7 7.8-13.3zm64.4-85.3c3.5 1.7 5.5 11.3 5.1 14-.7 5-2.5 10.4-3.8 9.7-1.5-.6.3-7.4-.4-9.5-.8-3-5.5-8.4-5-10-1-3.4 2-4.8 4.1-4.2zm-255.7 67.9c3.3 1.3 5.3 8.3 5 10.3-.8 3.7-2.5 7.7-3.8 7.1-1.3-.4.3-5.4-.3-7-.3-3.7-4.9-5.7-4.8-7.3-.8-3 2-3.5 4-3.1z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#1b9d00",
        d: "M244.9 218.2c4.2.2 6.3 3.6 2.4 5-4 1.3-7.7 2.4-7.8 8 1.5 8-2 5.2-4 4.2-2.4-1.8-9.2-6-10.2-15-.1-2.1 1.6-4 4.3-4 4 1.1 10 1.2 15.3 1.8z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M77.4 124.4c4.8 1.4 5.1 8.6 4.8 10.7-.7 3.8-2.4 7.9-3.6 7.4-1.4-.5 0-5.7-.7-7.3-.7-2.2-4.8-6.4-4.4-7.6-.9-2.5 2-3.7 3.9-3.2zm95.9 33.6c-3.8 2-5.2 8-2.9 11.6 2.2 3 5.6 1.9 6 1.9 3.7.4 5.9-6.9 5.9-6.9s.1-2-4.2 1.9c-1.9.3-2-.4-2.5-1.4a9 9 0 01.5-5.7c.7-1.8-.7-2.6-2.8-1.4zm28-36.4c-2 1.3-5.7 5.2-5.8 9.6-.1 2.5-.6 2.5 1 4 1.3 1.8 2.4 1.7 4.8.4a5.1 5.1 0 002.3-3.4c.6-2.8-3 1.4-3.4-1.8-.8-3 1.5-4.2 3.7-7 0-2 0-3.3-2.7-1.8zm22.4 4a59.5 59.5 0 00-1.6 11.1c-.6 2.8 3 4 4.5.4 2.4-6.5 2.4-9.3 2.6-12-.7-4.3-3.6-4.2-5.5.5zm142 72.3c.4-.5 20-14.4 20-14.4 2-.7 1.5 7.2.6 7.1a77.8 77.8 0 01-20.7 14.3c-1 .7-1.9-5.3 0-7zm17.7-.2c3.5 1.7 4.9 11.8 4.5 14.5 0 5.4-3.3 9.6-4.7 9-1.4-.7.2-6.7-.5-8.8-.8-3-3.7-8.5-3.2-10.1-1-3.4 1.8-5.2 4-4.6zm-116 43.4a26 26 0 015.6-4.9c2-1 3.8.8 3.7.7.3 2-1.2 3.7-.7 6.3.4 1 .7 2.2 2.6 1.8 3.1-2.5 6-2.7 9-2.8 2.5.1 2.6 4.2 1 4.2-5.7 1.2-8.2 2.8-12.3 4.3-2 1.2-3.6-.3-3.6-.4s-1.1-1.1-.4-3.7c.2-2-.6-3.2-2.4-3-1.2.8-2.4 1.2-3-.3-.3-1-.4-1.6.5-2.2zm136.6 5.4c.8 1 1.4 2-.1 3.8l-3.7 3.2c-.6 1-1 2.8 1 3.3 3.6 1 12-4.5 12-4.6 1.4-1 1-3 .8-3-.8-.9-2.6-.3-3.8-.5-.6 0-2.5-.2-1.6-2a11.4 11.4 0 001.6-2.9c.5-1.2 0-2-2-2.7-2.1-.4-3-.2-5.3 0-1.2.2-1.6.8-1.9 2.3.1 2.3 1.5 2.2 3 3z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#259f00",
        d: "M268.1 189.7c-.5 1-2.3 1-4 0s-2.7-2.6-2.1-3.5 2.3-.9 4 0 2.6 2.6 2.1 3.5zm-89-53.6c-1 .3-2.4-.6-3-2s-.3-2.6.7-2.9 2.3.7 3 2 .3 2.7-.8 3z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#209000",
        d: "M355.2 375c9.4.4 18.2 0 27.5.5 1.7 1.5.5 5-.6 4.8l-7.8-.3c-.1-3-7.7-2.5-7.5.1-4.1.5-7.8-.1-12-.3-1.2-1.5-1-4.2.4-4.8z"
      })]
    })]
  });
};
// CONCATENATED MODULE: ./src/assets/icons/TRFlag.tsx



const TRFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-tr",
    viewBox: "0 0 640 480",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      fillRule: "evenodd",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#e30a17",
        d: "M0 0h640v480H0z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#e30a17",
        d: "M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#fff",
        d: "M430.7 191.5l-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"
      })]
    })
  });
};
// CONCATENATED MODULE: ./src/assets/icons/FRFlag.tsx



const FRFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
      width: "640",
      height: "480",
      fill: "#ED2939"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
      width: "427",
      height: "480",
      fill: "#fff"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
      width: "213",
      height: "480",
      fill: "#002395"
    })]
  });
};
// CONCATENATED MODULE: ./src/assets/icons/flags.ts








// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx
var language_provider = __webpack_require__("uiyz");

// EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
var site_navigation = __webpack_require__("5l48");

// CONCATENATED MODULE: ./src/layouts/header/menu/language-switcher/language-switcher.tsx











const FlagIcon = ({
  name
}) => {
  const TagName = flags_namespaceObject[name];
  return !!TagName ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(TagName, {}) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: ["Invalid icon ", name]
  });
};

const LanguageMenu = ({
  onClick,
  config
}) => {
  var _config$restaurant, _config$restaurant$us;

  let languageList = [];
  let configLanguagesList = (config === null || config === void 0 ? void 0 : config.restaurant.userConfig.auto_languages) && (config === null || config === void 0 ? void 0 : config.restaurant.userConfig.auto_languages.length) > 0 && (config === null || config === void 0 ? void 0 : config.restaurant.userConfig.auto_languages.split(","));

  if (config !== null && config !== void 0 && (_config$restaurant = config.restaurant) !== null && _config$restaurant !== void 0 && (_config$restaurant$us = _config$restaurant.userConfig) !== null && _config$restaurant$us !== void 0 && _config$restaurant$us.main_lang) {
    languageList = site_navigation["h" /* LANGUAGE_MENU */].filter(m => {
      var _config$restaurant2, _config$restaurant2$u, _config$restaurant3, _config$restaurant3$u;

      return m.id === (config === null || config === void 0 ? void 0 : (_config$restaurant2 = config.restaurant) === null || _config$restaurant2 === void 0 ? void 0 : (_config$restaurant2$u = _config$restaurant2.userConfig) === null || _config$restaurant2$u === void 0 ? void 0 : _config$restaurant2$u.main_lang) || m.id === (config === null || config === void 0 ? void 0 : (_config$restaurant3 = config.restaurant) === null || _config$restaurant3 === void 0 ? void 0 : (_config$restaurant3$u = _config$restaurant3.userConfig) === null || _config$restaurant3$u === void 0 ? void 0 : _config$restaurant3$u.alt_lang) || configLanguagesList.filter(mm => mm === m.id).length > 0;
    });
  } else {
    languageList = site_navigation["h" /* LANGUAGE_MENU */];
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: languageList.map(item => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MenuItem, {
      onClick: onClick,
      value: item.id,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FlagIcon, {
          name: item.icon
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
        id: item.id,
        defaultMessage: item.defaultMessage
      })]
    }, item.id))
  });
};

const LanguageSwitcher = ({
  config
}) => {
  const {
    locale,
    changeLanguage
  } = Object(language_provider["b" /* useLocale */])();
  const selectedLanguage = site_navigation["h" /* LANGUAGE_MENU */].find(x => x.id === locale);

  const languageChangeHandler = e => {
    changeLanguage(e.target.value);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Box, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(popover, {
      className: "right",
      handler: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(SelectedItem, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Flag, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FlagIcon, {
            name: selectedLanguage === null || selectedLanguage === void 0 ? void 0 : selectedLanguage.icon
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
            id: selectedLanguage === null || selectedLanguage === void 0 ? void 0 : selectedLanguage.id,
            defaultMessage: selectedLanguage === null || selectedLanguage === void 0 ? void 0 : selectedLanguage.defaultMessage
          })
        })]
      }),
      content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LanguageMenu, {
        onClick: languageChangeHandler,
        config: config
      })
    })
  });
};

/* harmony default export */ var language_switcher = __webpack_exports__["a"] = (LanguageSwitcher);

/***/ }),

/***/ "QfjN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "RHsn":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"家\",\"nav.grocery\":\"杂货店\",\"nav.makeup\":\"补偿\",\"nav.bags\":\"包袋\",\"nav.clothing\":\"服装\",\"nav.furniture\":\"家具类\",\"nav.book\":\"书\",\"nav.medicine\":\"药物\",\"nav.foods\":\"食品类\",\"nav.terms_and_services\":\"条款及服务\",\"nav.privacy_policy\":\"隐私政策\",\"nav.offer\":\"提供\",\"nav.help\":\"需要帮忙\",\"nav.profile\":\"輪廓\",\"nav.checkout\":\"查看\",\"nav.order_received\":\"订单发票\",\"nav.logout\":\"登出\",\"nav.login\":\"登錄\",\"nav.order\":\"你的订单\",\"groceriesTitle\":\"{minute}分钟内送达的杂货\",\"groceriesSubTitle\":\"每天一整天都在您家门口提供健康食品和小吃\",\"makeupTitle\":\"品牌和进口化妆品\",\"makeupSubTitle\":\"最简单，最便宜的获得品牌和进口化妆品的方法\",\"bagsTitle\":\"独家品牌包\",\"bagsSubTitle\":\"立即获得您专属的品牌包包\",\"womenClothsTitle\":\"选购设计师礼服\",\"womenClothsSubTitle\":\"从网上即可为您量身定制礼服。 存货充足时快点。\",\"furnitureTitle\":\"廉价的独家家具\",\"furnitureSubTitle\":\"我们种类繁多的精美家具让您的房子成为家\",\"booksTitle\":\"你自己的书店\",\"booksSubTitle\":\"从我们广泛的书籍中获取您喜欢的书籍。\",\"medicineTitle\":\"您的药物已交付\",\"medicineSubTitle\":\"与您的所有医疗保健问题说再见\",\"foodsTitle\":\"您订购我们送货\",\"foodsSubTitle\":\"在不到一个小时的时间内得到您喜欢的食物\",\"alternativeCheckout\":\"结帐替代\",\"termAndConditionHelper\":\"购买后，即表示您同意我们的\",\"termAndCondition\":\"条款和条件。\",\"reqMedicine\":\"要求药\",\"submitRequest\":\"提交要求\",\"noteHead\":\"注意\",\"noteDescription\":\"产品可用性和价格将通过电话确认。 市区内送货费$ 5，市区外送货费$ 10。\",\"rmMedicineName\":\"药品名称\",\"rmMedicineQuantity\":\"数量\",\"rmPrescripttionUpload\":\"上传您的处方\",\"rmUploadText\":\"在此处拖动/上传文件。\",\"cartTitle\":\"你的订单\",\"discountText\":\"折扣\",\"vatText\":\"含税 增值税\",\"searchPlaceholder\":\"從這裡搜索您的產品\",\"searchButtonText\":\"搜索\",\"mobileSignInButtonText\":\"加入\",\"navlinkAccountSettings\":\"您的帳戶設置\",\"cartItems\":\"項目\",\"cartItem\":\"项目\",\"addCartButton\":\"大车\",\"addToCartButton\":\"添加到购物车\",\"backBtn\":\"背部\",\"noProductFound\":\"沒有找到產品\",\"specialCode\":\"你有优惠券吗？\",\"couponApplied\":\"優惠券已申請\",\"couponPlaceholder\":\"在此输入优惠券代码\",\"sidebarYourOrder\":\"订购\",\"profilePageTitle\":\"你的個人資料\",\"profileNameField\":\"名稱\",\"profileEmailField\":\"電子郵件\",\"profileSaveBtn\":\"保存\",\"contactNumberTItle\":\"聯繫電話\",\"addContactBtn\":\"增加聯繫人\",\"deliveryAddressTitle\":\"郵寄地址\",\"addAddressBtn\":\"添加地址\",\"addNew\":\"添新\",\"paymentCardTitle\":\"付款卡\",\"addCardBtn\":\"新增卡\",\"savedCardsId\":\"保存的卡\",\"savedContactId\":\"储存联络人\",\"savedAddressId\":\"保存地址\",\"siteFooter\":\"Pickbazar是一個產品\",\"subTotal\":\"小計\",\"itemsText\":\"項目\",\"shippinFeeText\":\"運輸費用\",\"voucherText\":\"憑證\",\"voucherApply\":\"應用\",\"couponError\":\"優惠券無效\",\"totalText\":\"總\",\"deliverySchedule\":\"交货时间表\",\"checkoutDeliveryAddress\":\"邮寄地址\",\"contactNumberText\":\"联系电话\",\"selectPaymentText\":\"付款方式\",\"proceesCheckout\":\"進行結算\",\"backHomeBtn\":\"回到家\",\"orderReceivedText\":\"訂單已經收到\",\"orderReceivedSuccess\":\"謝謝。 您的訂單已收到\",\"orderNumberText\":\"訂單號\",\"orderDateText\":\"日期\",\"paymenMethodText\":\"付款方法\",\"paymentMethodName\":\"貨到付款\",\"orderDetailsText\":\"訂單詳細信息\",\"totalItemText\":\"總項目\",\"orderTimeText\":\"訂單時間\",\"deliveryTimeText\":\"交貨時間\",\"deliveryLocationText\":\"交貨地點\",\"totalAmountText\":\"總金額\",\"loadMoreBtn\":\"装载更多\",\"welcomeBack\":\"歡迎回來\",\"loginText\":\"使用您的電子郵件和密碼登錄\",\"emailAddressPlaceholder\":\"電郵地址或聯絡號碼\",\"passwordPlaceholder\":\"密碼（最少{minCharacter}個字符）\",\"continueBtn\":\"繼續\",\"orText\":\"要么\",\"continueFacebookBtn\":\"繼續使用Facebook\",\"continueGoogleBtn\":\"繼續使用Google\",\"dontHaveAccount\":\"沒有帳戶？\",\"signUpBtnText\":\"註冊\",\"forgotPasswordText\":\"忘記密碼了嗎？\",\"resetText\":\"重置它\",\"signUpText\":\"通過註冊，您同意Pickbazar的\",\"termsConditionText\":\"條款和條件\",\"alreadyHaveAccount\":\"已經有賬號？\",\"backToSign\":\"回到\",\"loginBtnText\":\"登錄\",\"forgotPassText\":\"忘記密碼\",\"sendResetPassText\":\"我們會向您發送重置密碼的鏈接\",\"resetPasswordBtn\":\"重置密碼\",\"intlCopyBtnId\":\"复制\",\"intlCopySuccessId\":\"复制的\",\"locationModalheading\":\"选择你的位置\",\"locationModalSubHeading\":\"您必须选择位置以进行送货服务\",\"locationModalFooter\":\"免费送货第一订单\",\"saleText\":\"特卖\",\"offText\":\"关\",\"faqNo1Title\":\"如何与客户服务联系？\",\"faqNo1Desc\":\"我们的客户体验团队每周工作{number1}天，我们提供两种联系方式。电子邮件和聊天。 我们会尽快回复您，因此您无需等待太久就可以回复！\",\"faqNo2Title\":\"应用安装失败，如何更新系统信息？\",\"faqNo2Desc\":\"请仔细阅读文档。 我们也有一些有关此问题的在线视频教程。 如果问题仍然存在，请在支持论坛中打开故障单\",\"faqNo3Title\":\"网站响应耗时，如何改善？\",\"faqNo3Desc\":\"首先，请检查您的互联网连接。 我们也有一些有关此问题的在线视频教程。 如果问题仍然存在，请在支持论坛中打开故障单。\",\"faqNo4Title\":\"如何创建一个帐户？\",\"faqNo4Desc\":\"如果您想开设一个个人帐户，可以通过电话或在线进行。 在线开户仅需几分钟。\",\"intlOrderDetailsDiscount\":\"折扣\",\"intlOrderDetailsDelivery\":\"送货费\",\"intlOrderPageTitle\":\"我的订单\",\"intlNoOrderFound\":\"找不到订单\",\"intlOrderPageDetails\":\"订单详细信息\",\"intlTableColTitle2\":\"数量\",\"intlTableColTitle3\":\"价钱\",\"intlOrderCardTitleText\":\"订购\",\"intlOrderCardDateText\":\"订购日期\",\"intlOrderCardTotalText\":\"总价\",\"joinButton\":\"加入\",\"ar\":\"阿拉伯\",\"zh\":\"中文\",\"en\":\"英语\",\"de\":\"德语\",\"he\":\"希伯来语\",\"es\":\"西班牙文\",\"intlTextBy\":\"通过\",\"intlRelatedItems\":\"相关项目\",\"readFreeSampleButton\":\"阅读免费样本\",\"bookSectionTitle\":\"关于这本书\",\"authorSectionTitle\":\"关于作者\",\"defaultIntlId\":\"请从语言文件添加占位符\",\"noResultFound\":\"对不起，没有找到结果:(\",\"deliveryText\":\"交货\",\"cuisineText\":\"美食\",\"minOrderText\":\"最低订购\",\"fromText\":\"从\",\"loadMoreButton\":\"装载更多\"}");

/***/ }),

/***/ "RjkI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ConfigContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "Td6B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./src/components/search-box/search-box.style.tsx



const StyledForm = external_styled_components_default.a.form.withConfig({
  displayName: "search-boxstyle__StyledForm",
  componentId: "sc-1p7r5j6-0"
})(props => css_default()({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 'base',
  overflow: 'hidden',
  width: props.minimal ? '100%' : 700,
  color: 'text.regular',
  backgroundColor: props.minimal ? 'searchIcon' : 'searchBar',
  borderWidth: props.minimal ? '1px' : '0',
  borderStyle: 'solid',
  borderColor: props.minimal ? 'searchBtnBorder' : 'white',
  input: {
    pl: props.minimal ? 0 : 20
  }
}), external_styled_system_["shadow"]);
const StyledInput = external_styled_components_default.a.input.withConfig({
  displayName: "search-boxstyle__StyledInput",
  componentId: "sc-1p7r5j6-1"
})(css_default()({
  flexGrow: 1,
  fontSize: 'base',
  pr: 20,
  height: 48,
  color: 'text.regular',
  backgroundColor: 'searchBg',
  appearance: 'none'
}), {
  border: 0,
  '&:focus': {
    outline: 0
  },
  '&::-webkit-input-placeholder, &::-moz-placeholder, &::-moz-placeholder, &::-ms-input-placeholder': {
    fontSize: 'base',
    color: 'text.regular',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
});
const StyledCategoryName = external_styled_components_default.a.span.withConfig({
  displayName: "search-boxstyle__StyledCategoryName",
  componentId: "sc-1p7r5j6-2"
})(css_default()({
  fontSize: 14,
  fontWeight: 'bold',
  lineHeight: '38px',
  px: 15,
  color: 'primary.regular',
  backgroundColor: 'body.bg2',
  borderRadius: 'base'
}), {
  margin: '5px',
  whiteSpace: 'nowrap',
  textTransform: 'capitalize'
});
const StyledSearchButton = external_styled_components_default.a.button.withConfig({
  displayName: "search-boxstyle__StyledSearchButton",
  componentId: "sc-1p7r5j6-3"
})(css_default()({
  backgroundColor: 'primary.regular',
  color: 'white',
  fontSize: 'base',
  fontWeight: 'bold'
}), {
  display: 'flex',
  height: 48,
  alignItems: 'center',
  border: 0,
  outline: 0,
  paddingLeft: 30,
  paddingRight: 30,
  cursor: 'pointer',
  flexShrink: 0
});
// EXTERNAL MODULE: ./src/assets/icons/SearchIcon.tsx
var SearchIcon = __webpack_require__("J7Kp");

// CONCATENATED MODULE: ./src/components/search-box/search-box.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SearchBox = (_ref) => {
  let {
    onEnter,
    onChange,
    value,
    name,
    minimal,
    categoryType,
    buttonText,
    className,
    showButtonText = true,
    shadow
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["onEnter", "onChange", "value", "name", "minimal", "categoryType", "buttonText", "className", "showButtonText", "shadow"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledForm, {
    onSubmit: onEnter,
    className: className,
    boxShadow: shadow,
    minimal: minimal,
    children: minimal ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchIcon["a" /* SearchIcon */], {
        style: {
          marginLeft: 16,
          marginRight: 16
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledInput, _objectSpread({
        type: "search",
        onChange: onChange,
        value: value,
        name: name
      }, rest))]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledInput, _objectSpread({
        type: "search",
        onChange: onChange,
        value: value,
        name: name
      }, rest)), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(StyledSearchButton, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchIcon["a" /* SearchIcon */], {
          style: {
            marginRight: 10
          }
        }), showButtonText && buttonText]
      })]
    })
  });
};
// EXTERNAL MODULE: ./src/contexts/app/app.provider.ts + 2 modules
var app_provider = __webpack_require__("xZKy");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/features/search/search.tsx


function search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { search_ownKeys(Object(source), true).forEach(function (key) { search_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function search_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = search_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function search_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Search = (_ref) => {
  let {
    onSubmit
  } = _ref,
      props = search_objectWithoutProperties(_ref, ["onSubmit"]);

  const searchTerm = Object(app_provider["c" /* useAppState */])('searchTerm');
  const dispatch = Object(app_provider["b" /* useAppDispatch */])();
  const router = Object(router_["useRouter"])();
  const intl = Object(external_react_intl_["useIntl"])();

  const handleOnChange = e => {
    const {
      value
    } = e.target;
    dispatch({
      type: 'SET_SEARCH_TERM',
      payload: value
    });
  };

  const {
    pathname,
    query
  } = router;

  const onSearch = e => {
    e.preventDefault();

    const {
      type
    } = query,
          rest = search_objectWithoutProperties(query, ["type"]);

    if (type) {
      router.push({
        pathname,
        query: search_objectSpread(search_objectSpread({}, rest), {}, {
          category: "",
          text: searchTerm
        })
      }, {
        pathname: `/${type}`,
        query: search_objectSpread(search_objectSpread({}, rest), {}, {
          category: "",
          text: searchTerm
        })
      });
    } else {
      router.push({
        pathname,
        query: search_objectSpread(search_objectSpread({}, rest), {}, {
          category: "",
          text: searchTerm
        })
      });
    }

    dispatch({
      type: 'SET_SEARCH_TERM',
      payload: searchTerm
    });

    if (onSubmit) {
      onSubmit();
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBox, search_objectSpread({
    onEnter: onSearch,
    onChange: handleOnChange,
    value: searchTerm,
    name: "search",
    placeholder: intl.formatMessage({
      id: 'searchPlaceholder',
      defaultMessage: 'Search your products from here'
    }),
    categoryType: query.type || 'restaurant',
    buttonText: intl.formatMessage({
      id: 'searchButtonText',
      defaultMessage: 'Search'
    })
  }, props));
};

/* harmony default export */ var search = __webpack_exports__["a"] = (Search);

/***/ }),

/***/ "ToeK":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"בית\",\"nav.grocery\":\"מכולת\",\"nav.makeup\":\"להשלים\",\"nav.bags\":\"תיקים\",\"nav.clothing\":\"ביגוד\",\"nav.furniture\":\"ריהוט\",\"nav.book\":\"ספר\",\"nav.medicine\":\"תרופה\",\"nav.foods\":\"אוכלים\",\"nav.terms_and_services\":\"תנאים ושירותים\",\"nav.privacy_policy\":\"מדיניות פרטיות\",\"nav.offer\":\"הצעה\",\"nav.help\":\"זקוק לעזרה\",\"nav.profile\":\"פרופיל\",\"nav.checkout\":\"לבדוק\",\"nav.order_received\":\"הזמנת חשבונית\",\"nav.logout\":\"להתנתק\",\"nav.login\":\"התחברות\",\"nav.order\":\"ההזמנה שלך\",\"groceriesTitle\":\"מצרכים הובאו תוך {minute} דקות\",\"groceriesSubTitle\":\"קבל את האוכל והחטיפים הבריאים שלך המובאים בפתח שלך כל היום בכל יום\",\"makeupTitle\":\"איפור ממותג ומיובא\",\"makeupSubTitle\":\"הדרך הקלה והזולה ביותר להשיג איפור ממותג ומיובא שלך\",\"bagsTitle\":\"תיקים ממותגים בלעדיים\",\"bagsSubTitle\":\"קבל את התיקים הבלעדיים והמותגיים שלך שנשלחו אליך תוך זמן קצר\",\"womenClothsTitle\":\"קנו את שמלות המעצבים שלך\",\"womenClothsSubTitle\":\"מוכנים ללבוש שמלות המותאמות עבורך מהאינטרנט. מהרו כשמלאי נמשך.\",\"furnitureTitle\":\"ריהוט בלעדי במחיר זול\",\"furnitureSubTitle\":\"הפוך את ביתך לבית עם אוסף הרהיטים היפה שלנו\",\"booksTitle\":\"חנות ספרים משלך\",\"booksSubTitle\":\"השג את הספרים המועדפים עליך ממגוון הספרים הרחב שלנו.\",\"medicineTitle\":\"התרופות שלך, מועברות\",\"medicineSubTitle\":\"להיפרד מכל הדאגות שלך בתחום הבריאות איתנו\",\"foodsTitle\":\"אתה מזמין שאנו מספקים\",\"foodsSubTitle\":\"השג את המזונות האהובים עליך תוך פחות משעה\",\"alternativeCheckout\":\"אלטרנטיבה לקופה\",\"termAndConditionHelper\":\"על ידי ביצוע רכישה זו אתה מסכים לשלנו\",\"termAndCondition\":\"תנאים.\",\"reqMedicine\":\"בקש רפואה\",\"submitRequest\":\"שלח בקשה\",\"noteHead\":\"פתק\",\"noteDescription\":\"זמינות המוצר ומחירם יאשרו בטלפון. תשלום משלוח בתוך העיר 5 $ ומחוצה לה 10 $.\",\"rmMedicineName\":\"שם הרפואה\",\"rmMedicineQuantity\":\"כמות\",\"rmPrescripttionUpload\":\"העלה את המרשם שלך\",\"rmUploadText\":\"גרור / העלה את הקובץ שלך לכאן.\",\"cartTitle\":\"ההזמנה שלך\",\"discountText\":\"הנחה\",\"vatText\":\"כולל מע\\\"מ\",\"searchPlaceholder\":\"חפש במוצרים שלך מכאן\",\"searchButtonText\":\"לחפש\",\"mobileSignInButtonText\":\"להצטרף\",\"navlinkAccountSettings\":\"הגדרות החשבון שלך\",\"cartItems\":\"פריטים\",\"cartItem\":\"פריט\",\"addCartButton\":\"עגלה\",\"addToCartButton\":\"הוסף לעגלה\",\"backBtn\":\"חזור\",\"noProductFound\":\"לא נמצאו מוצרים\",\"specialCode\":\"יש לך שובר?\",\"couponApplied\":\"קופון מיושם\",\"couponPlaceholder\":\"הזן כאן קוד שובר\",\"sidebarYourOrder\":\"להזמין\",\"profilePageTitle\":\"הפרופיל שלך\",\"profileNameField\":\"שם\",\"profileEmailField\":\"דוא\\\"ל\",\"profileSaveBtn\":\"לשמור\",\"contactNumberTItle\":\"מספר איש קשר\",\"addContactBtn\":\"הוסף איש קשר\",\"deliveryAddressTitle\":\"כתובת למשלוח\",\"addAddressBtn\":\"הוסף כתובת\",\"addNew\":\"הוסף חדש\",\"addCardBtn\":\"הוסף כרטיס\",\"savedCardsId\":\"כרטיסים שמורים\",\"savedContactId\":\"שמור איש קשר\",\"savedAddressId\":\"שמור כתובת\",\"paymentCardTitle\":\"כרטיס תשלומים\",\"siteFooter\":\"Pickbazar הוא מוצר מאת\",\"subTotal\":\"תת סה\\\"כ\",\"itemsText\":\"פריטים\",\"shippinFeeText\":\"דמי משלוח\",\"voucherText\":\"שובר\",\"voucherApply\":\"להגיש מועמדות\",\"couponError\":\"קופון לא חוקי\",\"deliverySchedule\":\"לוח הזמנים של המשלוח\",\"checkoutDeliveryAddress\":\"כתובת למשלוח\",\"contactNumberText\":\"מספר איש קשר\",\"selectPaymentText\":\"אפשרות תשלום\",\"proceesCheckout\":\"התקדם לנקודת הביקורת\",\"backHomeBtn\":\"בחזרה לבית\",\"orderReceivedText\":\"ההזמנה התקבלה\",\"orderReceivedSuccess\":\"תודה. ההזמנה שלך התקבלה\",\"orderNumberText\":\"מספר הזמנה\",\"orderDateText\":\"תאריך\",\"paymenMethodText\":\"אמצעי תשלום\",\"paymentMethodName\":\"מזומן במשלוח\",\"orderDetailsText\":\"פרטי הזמנה\",\"totalItemText\":\"סה\\\"כ פריט\",\"orderTimeText\":\"הזמן הזמן\",\"deliveryTimeText\":\"זמן משלוח\",\"deliveryLocationText\":\"מיקום המשלוח\",\"totalAmountText\":\"הכמות הכוללת\",\"loadMoreBtn\":\"טען עוד\",\"welcomeBack\":\"ברוך שובך\",\"loginText\":\"התחבר באמצעות הדוא\\\"ל והסיסמה שלך\",\"emailAddressPlaceholder\":\"כתובת דוא\\\"ל או מספר איש קשר\",\"passwordPlaceholder\":\"סיסמא (מינימום {minCharacter} תווים)\",\"continueBtn\":\"המשך\",\"orText\":\"או\",\"continueFacebookBtn\":\"המשך עם פייסבוק\",\"continueGoogleBtn\":\"המשך עם גוגל\",\"dontHaveAccount\":\"אין לך חשבון?\",\"signUpBtnText\":\"הירשם\",\"forgotPasswordText\":\"שכחת ססמה?\",\"resetText\":\"אפס אותו\",\"signUpText\":\"על ידי ההרשמה, אתה מסכים לפיקבזר\",\"termsConditionText\":\"תנאים והגבלות\",\"alreadyHaveAccount\":\"כבר יש לך חשבון?\",\"backToSign\":\"בחזרה ל\",\"loginBtnText\":\"התחברות\",\"forgotPassText\":\"שכחת את הסיסמא\",\"sendResetPassText\":\"אנו נשלח לך קישור לאיפוס הסיסמה שלך\",\"resetPasswordBtn\":\"אפס סיסמאות\",\"intlCopyBtnId\":\"עותק\",\"intlCopySuccessId\":\"הועתק\",\"locationModalheading\":\"בחר את המיקום שלךSelecciona tu ubicación\",\"locationModalSubHeading\":\"עליכם לבחור את המיקום שלכם לצורך שירות משלוחים\",\"locationModalFooter\":\"משלוח חינם להזמנה ראשונה\",\"saleText\":\"מכירה\",\"offText\":\"כבוי\",\"faqNo1Title\":\"כיצד ליצור קשר עם שירות לקוחות?\",\"faqNo1Desc\":\"צוות חוויית הלקוחות שלנו זמין {number1} ימים בשבוע ואנחנו מציעים {number2} דרכים ליצור קשר. דואר אלקטרוני וצ'אט. אנו מנסים לענות במהירות, כך שאתה לא צריך לחכות יותר מדי לתגובה !.\",\"faqNo2Title\":\"התקנת האפליקציה נכשלה, כיצד לעדכן את פרטי המערכת?\",\"faqNo2Desc\":\"אנא קרא את התיעוד בעיון. יש לנו גם כמה הדרכות וידאו מקוונות בנושא זה. אם הבעיה נותרה, אנא פתח כרטיס בפורום התמיכה\",\"faqNo3Title\":\"תגובת אתר לוקח זמן, כיצד לשפר?\",\"faqNo3Desc\":\"בהתחלה, אנא בדוק את חיבור האינטרנט שלך. יש לנו גם כמה הדרכות וידאו מקוונות בנושא זה. אם הבעיה נותרה, אנא פתח כרטיס בפורום התמיכה.\",\"faqNo4Title\":\"כיצד אוכל ליצור חשבון?\",\"faqNo4Desc\":\"אם אתה רוצה לפתוח חשבון לשימוש אישי אתה יכול לעשות זאת בטלפון או באינטרנט. פתיחת חשבון באופן מקוון אמורה לארוך מספר דקות בלבד.\",\"totalText\":\"סך הכל\",\"intlOrderDetailsDiscount\":\"הנחה\",\"intlOrderDetailsDelivery\":\"דמי משלוח\",\"intlOrderPageTitle\":\"ההזמנה שלי\",\"intlNoOrderFound\":\"לא נמצאה הזמנה\",\"intlOrderPageDetails\":\"פרטי הזמנה\",\"intlTableColTitle2\":\"כמות\",\"intlTableColTitle3\":\"מחיר\",\"intlOrderCardTitleText\":\"להזמין\",\"intlOrderCardDateText\":\"תאריך הזמנה\",\"intlOrderCardTotalText\":\"מחיר סופי\",\"joinButton\":\"הצטרף\",\"ar\":\"ערבית\",\"zh\":\"סינית\",\"en\":\"אנגלית\",\"de\":\"גרמנית\",\"he\":\"עברית\",\"es\":\"ספרדית\",\"intlTextBy\":\"על ידי\",\"intlRelatedItems\":\"חפצים קשורים\",\"readFreeSampleButton\":\"קרא דוגמא בחינם\",\"bookSectionTitle\":\"לגבי הספר\",\"authorSectionTitle\":\"על הסופר\",\"defaultIntlId\":\"בבקשה הוסף מציין מיקום מקובץ השפה\",\"noResultFound\":\"מצטערים, לא נמצאה תוצאה :(\",\"deliveryText\":\"מסירה\",\"cuisineText\":\"מטבח\",\"minOrderText\":\"הזמנה מינמלית\",\"fromText\":\"מ\",\"loadMoreButton\":\"טען עוד\"}");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UrZU":
/***/ (function(module, exports) {



/***/ }),

/***/ "VLDe":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ExtendedApp; });

// NAMESPACE OBJECT: ./src/assets/icons/category-menu-icons.ts
var category_menu_icons_namespaceObject = {};
__webpack_require__.r(category_menu_icons_namespaceObject);
__webpack_require__.d(category_menu_icons_namespaceObject, "FruitsVegetable", function() { return FruitsVegetable["a" /* FruitsVegetable */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "FacialCare", function() { return FacialCare["a" /* FacialCare */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Handbag", function() { return Handbag; });
__webpack_require__.d(category_menu_icons_namespaceObject, "DressIcon", function() { return DressIcon; });
__webpack_require__.d(category_menu_icons_namespaceObject, "FurnitureIcon", function() { return FurnitureIcon; });
__webpack_require__.d(category_menu_icons_namespaceObject, "BookIcon", function() { return BookIcon; });
__webpack_require__.d(category_menu_icons_namespaceObject, "MedicineIcon", function() { return MedicineIcon; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Restaurant", function() { return Restaurant; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Bakery", function() { return Bakery; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/site-settings/site-theme/default.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baseColor = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    100: '#f9f9f9',
    200: '#F7F7F7',
    300: '#f4f4f4',
    400: '#F3F3F3',
    500: '#f1f1f1',
    // border alt color
    600: '#EdEdEd',
    700: '#E6E6E6',
    // border color
    800: '#C2C3CC',
    900: '#bdbdbd'
  },
  text: {
    bold: '#0D1136',
    // heading color prices
    medium: '#424561',
    regular: '#77798C',
    // regular text color
    light: '#909090',
    label: '#767676'
  },
  transparent: 'transparent',
  primary: {
    regular: '#009E7F',
    // primary color
    hover: '#019376',
    alternate: '#028489',
    light: '#b7dbdd'
  },
  secondary: {
    regular: '#ff5b60',
    hover: '#009E7F',
    alternate: '#009E7F'
  },
  yellow: {
    regular: '#FFAD5E',
    hover: '#FFB369',
    alternate: '#f4c243'
  },
  blue: {
    regular: '#2e70fa',
    dark: '#161F6A',
    light: '#666D92',
    link: '#4285f4'
  },
  red: '#ea4d4a',
  success: '',
  warning: '',
  muted: '',
  highlight: ''
};
const defaultTheme = config => {
  const dark = config === null || config === void 0 ? void 0 : config.restaurant.userConfig.dark;
  return {
    colors: _objectSpread(_objectSpread({}, baseColor), {}, {
      text: {
        bold: dark ? '#eee' : '#000',
        // heading color prices ,humburger menu ,No category selected
        medium: dark ? '#999' : '#424561',
        regular: dark ? config === null || config === void 0 ? void 0 : config.restaurant.userConfig.primary_color : '#77798C',
        // regular text color
        light: dark ? config === null || config === void 0 ? void 0 : config.restaurant.userConfig.primary_color : '#909090',
        label: dark ? config === null || config === void 0 ? void 0 : config.restaurant.userConfig.primary_color : '#767676'
      },
      primary: {
        regular: (config === null || config === void 0 ? void 0 : config.restaurant.userConfig.primary_color) || '#559E7f',
        // primary color
        hover: (config === null || config === void 0 ? void 0 : config.restaurant.userConfig.primary_color) || '#559E7f',
        alternate: (config === null || config === void 0 ? void 0 : config.restaurant.userConfig.primary_color) || '#559E7f',
        light: (config === null || config === void 0 ? void 0 : config.restaurant.userConfig.primary_color) || '#559E7f'
      },
      secondary: {
        regular: dark ? '#666' : config === null || config === void 0 ? void 0 : config.restaurant.userConfig.secondaryColor,
        hover: dark ? '#b7dbdd' : config === null || config === void 0 ? void 0 : config.restaurant.userConfig.secondaryColor,
        alternate: dark ? '#b7dbdd' : config === null || config === void 0 ? void 0 : config.restaurant.userConfig.secondaryColor
      },
      body: {
        bg: dark ? '#121212' : '#fff',
        bg2: dark ? '#292929' : 'gray.200',
        text: dark ? '#292929' : '#fff',
        header: dark ? '#292929' : '#fff',
        bgItem: dark ? '#292929' : '#f7f7f7',
        //bg for each item
        bgCheckout: dark ? '#121212' : '#f7f7f7' //page bg checkout

      },
      btnCheckout: dark ? '#000' : 'gray.500',
      inputBorderCheckout: dark ? '#444' : '#fff',
      inputCheckout: dark ? '#222' : '#fff',
      languagesBtnBorder: dark ? '#444' : '#fff',
      searchBg: dark ? '#222' : '#f7f7f7',
      searchBtnBorder: dark ? '#444' : 'gray.500',
      searchIcon: dark ? '#444' : 'gray.200',
      searchBar: dark ? '#222' : '#fff',
      popOver: dark ? '#444' : '#fff',
      //bg for each item
      closeBtnColor: dark ? 'rgba(254, 254, 254, 0.25)' : 'rgba(0, 0, 0, 0.25)',
      borderColor: 'gray.500',
      headingsColor: 'text.bold',
      subheadingsColor: '',
      textColor: dark ? 'text.bold' : 'text.regular',
      brightDarkColor: dark ? '#121212' : '#fff',
      //btn text color
      darkBrightColor: dark ? '#fff' : '#121212',
      //btn text color
      buttonIcon: dark ? '#444' : '#e6e6e6',
      //icon bg color
      buttonBgColor: dark ? 'red' : 'primary.regular',
      buttonBgHoverColor: 'primary.hover',
      buttonBorderColor: 'primary.regular',
      borderColorActive: dark ? '#fff' : '#212121',
      //btn text color
      popUpColor: dark ? '#666' : '#fff',
      linkColor: 'primary.regular',
      input: {
        text: '',
        bg: '',
        border: '',
        focus: '',
        placeholder: ''
      }
    }),
    // btnBorderRadius: '',
    breakpoints: ['767px', '991px', '1025px', '1300px'],
    // space: [0, 4, 8, 10, 15, 20, 25, 30, 40, 56],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    // export const space = [0, 0.25, 0.5, 1, 1.5, 3].map(n => n + 'rem')
    // fontSizes: [10, 13, 15, 19, 21, 30, 45],
    // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontSizes: {
      xs: 12,
      sm: 13,
      base: 15,
      md: 19,
      lg: 21,
      xl: 24,
      '2xl': 30,
      '3xl': 36,
      '4xl': 42,
      '5xl': 48
    },
    fontWeights: {
      body: 400,
      heading: 700,
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      bolder: 900
    },
    fonts: {
      body: 'Lato, sans-serif',
      heading: 'Poppins, sans-serif',
      monospace: 'Menlo, monospace'
    },
    customs: {
      transition: '0.35s ease'
    },
    lineHeights: {
      body: 1.5,
      // body: 1.625,
      heading: 1.125 // heading: 1.25,

    },
    boxSizing: 'border-box',
    radii: {
      base: '6px',
      small: '3px',
      medium: '12px',
      big: '18px'
    },
    shadows: {
      base: '0 3px 6px rgba(0, 0, 0, 0.16)',
      medium: '0 6px 12px rgba(0, 0, 0, 0.16)',
      big: '0 21px 36px rgba(0, 0, 0, 0.16)',
      header: '0 1px 2px rgba(0, 0, 0, 0.06)'
    },
    globals: {
      //uncommit
      body: {
        backgroundColor: dark ? '#121212' : 'gray.900',
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body'
      }
    }
  };
}; // xs: 0,
// sm: 576px,
// md: 768px,
// lg: 992px,
// xl: 1200px,
// xxl: 1400px
// EXTERNAL MODULE: ./src/contexts/app/app.provider.ts + 2 modules
var app_provider = __webpack_require__("xZKy");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// CONCATENATED MODULE: ./src/contexts/auth/auth.provider.tsx


function auth_provider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_provider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_provider_ownKeys(Object(source), true).forEach(function (key) { auth_provider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_provider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_provider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isBrowser = false;
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
  currentForm: 'signIn'
};

function reducer(state, action) {
  console.log(state, 'auth');

  switch (action.type) {
    case 'SIGNIN':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'signIn'
      });

    case 'SIGNIN_SUCCESS':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        isAuthenticated: true
      });

    case 'SIGN_OUT':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        isAuthenticated: false
      });

    case 'SIGNUP':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'signUp'
      });

    case 'FORGOTPASS':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'forgotPass'
      });

    default:
      return state;
  }
}

const AuthProvider = ({
  children
}) => {
  const {
    0: authState,
    1: authDispatch
  } = Object(external_react_["useReducer"])(reducer, INITIAL_STATE);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(auth_context["a" /* AuthContext */].Provider, {
    value: {
      authState,
      authDispatch
    },
    children: children
  });
};
// EXTERNAL MODULE: ./src/contexts/config/config.context.tsx
var config_context = __webpack_require__("RjkI");

// CONCATENATED MODULE: ./src/contexts/config/config.provider.tsx


function config_provider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function config_provider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { config_provider_ownKeys(Object(source), true).forEach(function (key) { config_provider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { config_provider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function config_provider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function config_provider_reducer(state, action) {
  return config_provider_objectSpread({}, state);
}

const ConfigContextProvider = ({
  children,
  initConfig
}) => {
  const {
    0: config,
    1: configDispatch
  } = Object(external_react_["useReducer"])(config_provider_reducer, initConfig);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(config_context["a" /* ConfigContext */].Provider, {
    value: {
      config,
      configDispatch
    },
    children: children
  });
};
// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx
var language_provider = __webpack_require__("uiyz");

// EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
var use_cart = __webpack_require__("tFEG");

// CONCATENATED MODULE: ./src/utils/use-media.ts

const isClient = false;
const useMedia = (query, defaultState = false) => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(isClient ? () => window.matchMedia(query).matches : defaultState);
  Object(external_react_["useEffect"])(() => {
    let mounted = true;
    const mql = window.matchMedia(query);

    const onChange = () => {
      if (!mounted) {
        return;
      }

      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);
    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);
  return state;
};
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: ./src/layouts/header/menu/language-switcher/language-switcher.tsx + 13 modules
var language_switcher = __webpack_require__("PsoQ");

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/layouts/header/menu/right-menu/right-menu.style.tsx


const RightMenuBox = external_styled_components_default.a.div.withConfig({
  displayName: "right-menustyle__RightMenuBox",
  componentId: "sc-4ytm0i-0"
})(["display:flex;align-items:center;flex-shrink:0;.menu-icon{min-width:14px;margin-right:7px;}.menu-item{a{font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;transition:0.15s ease-in-out;display:flex;align-items:center;margin-right:45px;@media (max-width:1400px){margin-right:35px;font-size:", "px;}&:hover{color:", ";}&.current-page{color:", ";}}}.user-pages-dropdown{.popover-handler{width:38px;height:38px;border-radius:50%;display:block;overflow:hidden;img{width:100%;height:auto;display:block;}}.popover-content{.inner-wrap{}}}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
// CONCATENATED MODULE: ./src/layouts/header/menu/right-menu/right-menu.tsx

 //import dynamic from 'next/dynamic';
//import NavLink from 'components/nav-link/nav-link';
//import { OFFER_MENU_ITEM, HELP_MENU_ITEM } from 'site-settings/site-navigation';

 //import { HelpIcon } from 'assets/icons/HelpIcon';

 //const AuthMenu = dynamic(() => import('../auth-menu'), { ssr: false });

const RightMenu = ({
  //onLogout,
  //avatar,
  //isAuthenticated,
  //onJoin,
  config
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(RightMenuBox, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(language_switcher["a" /* default */], {
      config: config
    })
  });
};
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/layouts/logo/logo.tsx + 1 modules
var logo_logo = __webpack_require__("9T+x");

// EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
var site_navigation = __webpack_require__("5l48");

// EXTERNAL MODULE: ./src/assets/icons/FruitsVegetable.tsx
var FruitsVegetable = __webpack_require__("pQO/");

// EXTERNAL MODULE: ./src/assets/icons/FacialCare.tsx
var FacialCare = __webpack_require__("17+d");

// CONCATENATED MODULE: ./src/assets/icons/Handbag.tsx


function Handbag_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Handbag_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Handbag_ownKeys(Object(source), true).forEach(function (key) { Handbag_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Handbag_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Handbag_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Handbag = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", Handbag_objectSpread(Handbag_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "23.878",
    height: "24.3",
    viewBox: "0 0 23.878 24.3"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      id: "Bags",
      d: "M334.087,36.795h6.808a2.594,2.594,0,0,1,1.833.763h0a2.592,2.592,0,0,1,.763,1.833v2.718h3.328a2.384,2.384,0,0,1,1.686.7h0a2.383,2.383,0,0,1,.7,1.686v3.227a5.569,5.569,0,0,1-.606,2.532v6.066a4.48,4.48,0,0,1-4.469,4.469H330.795a4.567,4.567,0,0,1-4.556-4.556V50.26a5.569,5.569,0,0,1-.606-2.532V44.5a2.384,2.384,0,0,1,.7-1.687h0a2.382,2.382,0,0,1,1.688-.7h3.328v-2.58a2.742,2.742,0,0,1,2.736-2.736Zm13.29,15.077a5.6,5.6,0,0,1-3.443,1.462l-.048,0h-.009l-.061,0h-.01l-.066,0h-3.826v.718a1.838,1.838,0,0,1-.541,1.3v0a1.841,1.841,0,0,1-1.3.541h-1.245a1.891,1.891,0,0,1-1.339-.556v0a1.887,1.887,0,0,1-.556-1.337v-.668H331.1l-.066,0h-.01l-.06,0h-.009l-.048,0a5.6,5.6,0,0,1-3.443-1.462v4.367a3.339,3.339,0,0,0,3.328,3.328h13.341a3.252,3.252,0,0,0,3.241-3.241V51.872Zm-3.883-8.533H328.022a1.159,1.159,0,0,0-.82.342h0a1.158,1.158,0,0,0-.339.82v3.227a4.405,4.405,0,0,0,4.161,4.383h0l.11,0h12.574l.11,0h0a4.4,4.4,0,0,0,4.161-4.383V44.5a1.157,1.157,0,0,0-.339-.82l0,0a1.157,1.157,0,0,0-.82-.339Zm-4.807,10.006h-2.53v.668a.669.669,0,0,0,.2.472h0a.667.667,0,0,0,.471.2h1.245a.615.615,0,0,0,.436-.182h0a.62.62,0,0,0,.18-.437v-.718Zm2.208-15.322h-6.808a1.515,1.515,0,0,0-1.509,1.509v2.58h9.688V39.394a1.365,1.365,0,0,0-.4-.968l0,0A1.365,1.365,0,0,0,340.895,38.023Z",
      transform: "translate(-325.483 -36.645)",
      fill: "currentColor",
      stroke: "#fff",
      strokeWidth: "0.3",
      fillRule: "evenodd"
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/DressIcon.tsx


function DressIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DressIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DressIcon_ownKeys(Object(source), true).forEach(function (key) { DressIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DressIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DressIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const DressIcon = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", DressIcon_objectSpread(DressIcon_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.735",
    height: "24.503",
    viewBox: "0 0 14.735 24.503"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      id: "Cloth",
      transform: "translate(-255.389 -266.539)",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17425",
        "data-name": "Path 17425",
        d: "M266.6,273.033c.216-.528.472-1.457.483-1.5a.2.2,0,0,0-.012-.138c-.658-1.409.329-3.9.339-3.925a.2.2,0,0,0-.05-.222,9.5,9.5,0,0,0-1.271-.928.2.2,0,0,0-.3.127c-.339,1.475-1.972,2.824-2.776,3.413a7.168,7.168,0,0,0-.887-.508c-.1-.05-.194-.1-.23-.121a4.167,4.167,0,0,1-1.7-2.76.2.2,0,0,0-.282-.162,5.566,5.566,0,0,0-1.558.942.2.2,0,0,0,0,.227,4.777,4.777,0,0,1,.241,4.008.2.2,0,0,0,0,.125,12.874,12.874,0,0,0,.481,1.277c-.221,1.106-2.826,14.1-3.427,15.87a.2.2,0,0,0,.036.193c.047.056.506.551,2.217.664h.03a3.387,3.387,0,0,1,1.081.17,11.474,11.474,0,0,0,1.552.33,28.226,28.226,0,0,0,3.063.177,16.064,16.064,0,0,0,3.3-.3.2.2,0,0,0,.032-.013s.01,0,.015,0a23.834,23.834,0,0,1,2.73-.686.2.2,0,0,0,.158-.227A134.93,134.93,0,0,0,266.6,273.033Zm-.494-6.225a8.838,8.838,0,0,1,.881.647c-.2.551-.9,2.655-.311,4.042-.061.216-.256.893-.424,1.323h-.518c.21-.487-.209-.482-.441,0h-.086a9.474,9.474,0,0,0-1.866-2.7A7.861,7.861,0,0,0,266.108,266.808ZM259,271.547a5.249,5.249,0,0,0-.227-4.156,6.6,6.6,0,0,1,1.067-.6,4.476,4.476,0,0,0,1.835,2.781,3,3,0,0,0,.273.146,6,6,0,0,1,.958.565l0,0c.045.035.089.071.132.108a8.645,8.645,0,0,1,1.716,2.431h-3.622c-.208-.313-.684-.434-.464,0h-1.187a.231.231,0,0,0-.035-.089A10.391,10.391,0,0,1,259,271.547Zm8.085,17.96a45.2,45.2,0,0,0-1.04-9.177.2.2,0,0,0-.385.114c.834,2.83,1,8.178,1.026,9.188a21.687,21.687,0,0,1-6.073.085,10.977,10.977,0,0,1-1.485-.316,3.862,3.862,0,0,0-1.209-.185,3.8,3.8,0,0,1-1.843-.459c.65-2.122,2.92-13.4,3.347-15.533h6.816a135.764,135.764,0,0,1,3.2,15.711C268.948,289.038,267.708,289.307,267.086,289.507Z",
        transform: "translate(0 0.5)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.5"
      })
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/FurnitureIcon.tsx



function FurnitureIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FurnitureIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FurnitureIcon_ownKeys(Object(source), true).forEach(function (key) { FurnitureIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FurnitureIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FurnitureIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const FurnitureIcon = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", FurnitureIcon_objectSpread(FurnitureIcon_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "18.1",
    height: "24.1",
    viewBox: "0 0 18.1 24.1"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Furniture",
      transform: "translate(-47.95 -583.95)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17415",
        "data-name": "Path 17415",
        d: "M66.684,585.288A1.5,1.5,0,0,0,65.2,584H58.8a1.5,1.5,0,0,0-1.485,1.288L56,596H68Zm-8.625.1a.753.753,0,0,1,.741-.638h6.4a.753.753,0,0,1,.741.638l1.212,9.862h-10.3Z",
        transform: "translate(-5)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.1"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        id: "Path_17416",
        "data-name": "Path 17416",
        d: "M65.25,608H64.5a.75.75,0,0,0-.75.75v.75a.75.75,0,0,0,.75.75v3h-.75a1.5,1.5,0,0,0-1.5-1.5H51.75a1.5,1.5,0,0,0-1.5,1.5H49.5v-3a.75.75,0,0,0,.75-.75v-.75a.75.75,0,0,0-.75-.75h-.75a.75.75,0,0,0-.75.75v.75a.75.75,0,0,0,.75.75v3a.75.75,0,0,0,.75.75h.952a1.5,1.5,0,0,0,1.3.75H55.5v1.5a.75.75,0,0,0,.75.75h.375v.75h-2.25a1.877,1.877,0,0,0-1.875,1.875v1.19a1.125,1.125,0,1,0,.75,0v-1.19a1.126,1.126,0,0,1,1.125-1.125h2.25v2.315a1.125,1.125,0,1,0,.75,0V618.5h2.25a1.126,1.126,0,0,1,1.125,1.125v1.19a1.125,1.125,0,1,0,.75,0v-1.19a1.877,1.877,0,0,0-1.875-1.875h-2.25V617h.375a.75.75,0,0,0,.75-.75v-1.5h3.75a1.5,1.5,0,0,0,1.3-.75H64.5a.75.75,0,0,0,.75-.75v-3a.75.75,0,0,0,.75-.75v-.75A.75.75,0,0,0,65.25,608Zm-16.5,1.5v-.75h.75v.75Zm4.125,12.75a.375.375,0,1,1,.375-.375A.376.376,0,0,1,52.875,622.25Zm8.25-.75a.375.375,0,1,1-.375.375A.376.376,0,0,1,61.125,621.5ZM57,622.25a.375.375,0,1,1,.375-.375A.376.376,0,0,1,57,622.25Zm.75-6h-1.5v-1.5h1.5Zm4.5-2.25H51.75a.75.75,0,0,1,0-1.5h10.5a.75.75,0,0,1,0,1.5Zm3-4.5H64.5v-.75h.75Z",
        transform: "translate(0 -15)",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "0.1"
      })]
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/BookIcon.tsx



function BookIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BookIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BookIcon_ownKeys(Object(source), true).forEach(function (key) { BookIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BookIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BookIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const BookIcon = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", BookIcon_objectSpread(BookIcon_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24.6",
    height: "19.335",
    viewBox: "0 0 24.6 19.335"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Books",
      transform: "translate(-24.7 -30.187)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        id: "Group_12308",
        "data-name": "Group 12308",
        transform: "translate(25 32.504)",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
          id: "Group_12306",
          "data-name": "Group 12306",
          transform: "translate(0 0)",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            id: "Path_17416",
            "data-name": "Path 17416",
            d: "M32.612,50.142h0a34.57,34.57,0,0,0-7.238.8h0l0,0V35a0,0,0,0,1,0,0h.583a0,0,0,0,0,0,0v-.357a0,0,0,0,0,0,0h-.771a.183.183,0,0,0-.183.183V51.164a.182.182,0,0,0,.183.183.181.181,0,0,0,.036,0,28.735,28.735,0,0,1,9.287-.669.006.006,0,0,0,.006,0,.005.005,0,0,0,0-.006Z",
            transform: "translate(-25 -34.629)",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.6"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
          id: "Group_12307",
          "data-name": "Group 12307",
          transform: "translate(14.922 0)",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            id: "Path_17417",
            "data-name": "Path 17417",
            d: "M64.983,34.629h-.776V35H64.8V50.957c-.5-.063-1.009-.13-1.515-.2a47.178,47.178,0,0,0-6.073-.546l-.013,0-1.075.311a.048.048,0,0,0,.017.094,37.04,37.04,0,0,1,7.1.5c.576.076,1.152.152,1.724.223a.183.183,0,0,0,.205-.181V34.812A.183.183,0,0,0,64.983,34.629Z",
            transform: "translate(-56.088 -34.629)",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.6"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        id: "Group_12309",
        "data-name": "Group 12309",
        transform: "translate(26.919 30.542)",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17418",
          "data-name": "Path 17418",
          d: "M49.16,30.842a.183.183,0,0,0-.166-.182c-.314-.029-7.587-.67-9.915,1.365-2.327-2.035-9.6-1.393-9.915-1.365a.183.183,0,0,0-.166.182v15.7a.183.183,0,0,0,.195.183c.073,0,7.272-.441,9.754,2.133a.187.187,0,0,0,.062.042h0a.186.186,0,0,0,.069.013.182.182,0,0,0,.069-.013h0a.187.187,0,0,0,.062-.042c2.481-2.573,9.682-2.138,9.754-2.133a.187.187,0,0,0,.137-.049.183.183,0,0,0,.058-.134Zm-19.8,15.51V31.011c1.122-.085,7.578-.49,9.531,1.336V48.314c-2.072-1.743-6.2-1.988-8.356-1.988C30.006,46.326,29.594,46.341,29.364,46.352Zm19.429,0c-1.16-.056-6.948-.212-9.531,1.962V32.347c1.954-1.827,8.409-1.421,9.531-1.336Z",
          transform: "translate(-28.998 -30.542)",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: "0.6"
        })
      })]
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/MedicineIcon.tsx



function MedicineIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MedicineIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MedicineIcon_ownKeys(Object(source), true).forEach(function (key) { MedicineIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MedicineIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MedicineIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const MedicineIcon = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", MedicineIcon_objectSpread(MedicineIcon_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24.2",
    height: "24.2",
    viewBox: "0 0 24.2 24.2"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Medicine",
      transform: "translate(-332.9 -1656.038)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        id: "Group_12311",
        "data-name": "Group 12311",
        transform: "translate(333 1656.138)",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17420",
          "data-name": "Path 17420",
          d: "M350.833,1680.138a6.126,6.126,0,0,1-4.361-1.806l-11.666-11.666a6.167,6.167,0,0,1,8.722-8.722l11.666,11.666a6.167,6.167,0,0,1-4.361,10.528Zm-11.666-23.214a5.381,5.381,0,0,0-3.805,9.186l11.666,11.666a5.381,5.381,0,0,0,7.61,0h0a5.381,5.381,0,0,0,0-7.61L342.972,1658.5A5.346,5.346,0,0,0,339.167,1656.924Z",
          transform: "translate(-333 -1656.138)",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: "0.2"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        id: "Group_12312",
        "data-name": "Group 12312",
        transform: "translate(340.524 1663.662)",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
          id: "Line_3",
          "data-name": "Line 3",
          y1: "8.166",
          x2: "8.166",
          transform: "translate(0.393 0.393)",
          fill: "#fff",
          stroke: "currentColor",
          strokeWidth: "0.2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17421",
          "data-name": "Path 17421",
          d: "M536.93,1868.628a.393.393,0,0,1-.278-.671l8.166-8.166a.393.393,0,0,1,.556.556l-8.166,8.166A.392.392,0,0,1,536.93,1868.628Z",
          transform: "translate(-536.537 -1859.676)",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: "0.2"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
        id: "Group_12313",
        "data-name": "Group 12313",
        transform: "translate(334.856 1659.668)",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17423",
          "data-name": "Path 17423",
          d: "M386.6,1759.337a.392.392,0,0,1-.278-.115,10.88,10.88,0,0,1-2.936-4.287,3.121,3.121,0,0,1,.659-3.167.393.393,0,1,1,.579.532,2.353,2.353,0,0,0-.482,2.417,10.161,10.161,0,0,0,2.737,3.949.393.393,0,0,1-.278.671Z",
          transform: "translate(-383.216 -1751.641)",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: "0.2"
        })
      })]
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/Restaurant.tsx



function Restaurant_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Restaurant_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Restaurant_ownKeys(Object(source), true).forEach(function (key) { Restaurant_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Restaurant_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Restaurant_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Restaurant = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", Restaurant_objectSpread(Restaurant_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "32.9",
    height: "18.371",
    viewBox: "0 0 32.9 18.371"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      id: "Kitchen",
      transform: "translate(-61.55 -195.55)",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
        id: "Group_12320",
        "data-name": "Group 12320",
        transform: "translate(-441.476 -200.174)",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
          id: "Group_12319",
          "data-name": "Group 12319",
          transform: "translate(516.054 407.659)",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
            id: "Line_10",
            "data-name": "Line 10",
            x2: "1.101",
            fill: "none",
            stroke: "currentColor",
            strokeLinejoin: "round",
            strokeWidth: "0.9"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
            id: "Line_11",
            "data-name": "Line 11",
            x2: "1.101",
            transform: "translate(2.68)",
            fill: "none",
            stroke: "currentColor",
            strokeLinejoin: "round",
            strokeWidth: "0.9"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
            id: "Line_12",
            "data-name": "Line 12",
            x2: "1.101",
            transform: "translate(5.361)",
            fill: "none",
            stroke: "currentColor",
            strokeLinejoin: "round",
            strokeWidth: "0.9"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17428",
          "data-name": "Path 17428",
          d: "M578.074,414.645l3.648-.644v-1.256h-3.648Z",
          transform: "translate(-46.247 -10.273)",
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "0.9"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17429",
          "data-name": "Path 17429",
          d: "M507.124,414.645,503.476,414v-1.256h3.648Z",
          transform: "translate(0 -10.273)",
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "0.9"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17430",
          "data-name": "Path 17430",
          d: "M525.358,401.744a20.169,20.169,0,0,0-12.284,4.181h24.7A20.811,20.811,0,0,0,525.358,401.744Z",
          transform: "translate(-5.95 -3.453)",
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "0.9"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
          id: "Line_13",
          "data-name": "Line 13",
          y1: "2.117",
          transform: "translate(519.408 396.174)",
          fill: "none",
          stroke: "currentColor",
          strokeMiterlimit: "10",
          strokeWidth: "0.9"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("line", {
          id: "Line_14",
          "data-name": "Line 14",
          x2: "4.121",
          transform: "translate(517.415 396.174)",
          fill: "none",
          stroke: "currentColor",
          strokeMiterlimit: "10",
          strokeWidth: "0.9"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          id: "Path_17431",
          "data-name": "Path 17431",
          d: "M537.778,412.643s-.38,11.212-6.081,11.212H519.155c-5.7,0-6.081-11.212-6.081-11.212Z",
          transform: "translate(-5.95 -10.21)",
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "0.9"
        })]
      })
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/Bakery.tsx



function Bakery_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Bakery_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Bakery_ownKeys(Object(source), true).forEach(function (key) { Bakery_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Bakery_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Bakery_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Bakery = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", Bakery_objectSpread(Bakery_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    id: "Outline",
    viewBox: "0 0 512 512",
    width: "512",
    height: "512"
  }, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M213.056,231.438a8,8,0,1,0,5.888-14.876c-18.527-7.335-42.3-11.374-66.944-11.374s-48.417,4.039-66.944,11.374a8,8,0,1,0,5.888,14.876c16.7-6.61,38.382-10.25,61.056-10.25S196.357,224.828,213.056,231.438Z",
      fill: "currentColor"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M416,16H384c-23.366,0-43.613,25.444-58.552,73.58-7.08,22.815-12.528,49.446-16.163,78.42H144v.118c-32.288.855-62.486,6.86-85.746,17.149C31.006,197.319,16,214.135,16,232.617c0,15.891,11.317,30.777,32,42.266V422.049a65.688,65.688,0,0,0-23.435,38.717,29.684,29.684,0,0,0,6.2,24.659A28.79,28.79,0,0,0,53.047,496H346.953a28.681,28.681,0,0,0,17.852-6.229A34.1,34.1,0,0,0,384,496h32c23.366,0,43.613-25.444,58.552-73.58C488.383,377.854,496,318.751,496,256s-7.617-121.854-21.448-166.42C459.613,41.444,439.366,16,416,16ZM53.047,480a12.848,12.848,0,0,1-9.929-4.743,13.738,13.738,0,0,1-2.851-11.416,49.465,49.465,0,0,1,29.246-36.168,111.883,111.883,0,0,0-4.867,19.063A47.027,47.027,0,0,0,71.416,480ZM104,480H99.361c-4.729,0-9.3-2.31-12.859-6.5-5.263-6.195-7.531-15.233-6.067-24.177,4-24.452,16.7-44.92,33.932-56.125a86.14,86.14,0,0,0-.505,38.033l9.6,45.7a23.548,23.548,0,0,0,.886,3.067Zm18.94-108.547c-18.246,5.984-33.872,19.364-44.576,37.26A63.07,63.07,0,0,0,64,412.654V270.061a8,8,0,0,0-4.415-7.152C41.8,253.993,32,243.235,32,232.617,32,221.024,43.929,209.1,64.727,199.9,87.905,189.646,118.9,184,152,184s64.1,5.646,87.273,15.9c20.8,9.2,32.727,21.125,32.727,32.718,0,10.618-9.8,21.376-27.585,30.292A8,8,0,0,0,240,270.061v66.433a82.933,82.933,0,0,0-19.088-6.381,104.007,104.007,0,0,0-41.824,0,82.889,82.889,0,0,0-52.978,36.075C124.979,367.91,123.938,369.673,122.94,371.453Zm147.539,56.485-9.6,45.707A8.037,8.037,0,0,1,253.05,480H146.95a8.037,8.037,0,0,1-7.829-6.355l-9.6-45.707a69.688,69.688,0,0,1,9.962-52.964,66.994,66.994,0,0,1,42.8-29.184,88.1,88.1,0,0,1,35.426,0,66.994,66.994,0,0,1,42.8,29.184A69.688,69.688,0,0,1,270.479,427.938ZM313.5,473.5c-3.563,4.193-8.13,6.5-12.859,6.5H275.651a23.579,23.579,0,0,0,.886-3.066l9.6-45.706a86.14,86.14,0,0,0-.5-38.033c17.233,11.2,29.929,31.674,33.932,56.126C321.029,458.265,318.761,467.3,313.5,473.5ZM277.06,371.453c-1-1.78-2.039-3.543-3.17-5.265A84.568,84.568,0,0,0,256,346.53V274.883c20.683-11.489,32-26.375,32-42.266,0-18.482-15.006-35.3-42.254-47.35-.982-.435-2-.848-3-1.267h64.745C305.194,206.984,304,231.205,304,256c0,56.555,6.13,109.782,17.4,152.319C310.705,390.619,295.172,377.393,277.06,371.453Zm79.822,103.8A12.848,12.848,0,0,1,346.953,480H328.584a47.028,47.028,0,0,0,6.77-33.265,111.965,111.965,0,0,0-4.867-19.062,49.463,49.463,0,0,1,29.246,36.169A13.737,13.737,0,0,1,356.882,475.257ZM384,480a18.245,18.245,0,0,1-9.814-3.218,29.809,29.809,0,0,0,1.249-16.016A65.552,65.552,0,0,0,339.708,414.3a401.074,401.074,0,0,1-9.879-42.129c11.047-3.1,35.55-7.273,67.641,3.423v0a8,8,0,1,0,5.058-15.17v0l-.089-.029-.113-.035c-34.435-11.43-61.2-7.762-75.142-4.084a677.754,677.754,0,0,1-7.164-94.85c9.779-3.326,35.077-9.281,69.448,2.176v0a8,8,0,1,0,5.058-15.17v0l-.088-.028-.116-.037c-33.673-11.174-60.012-7.529-74.241-3.655a669.018,669.018,0,0,1,6.836-87.643c9.119-3,35.244-9.227,70.549,2.541v0a8,8,0,1,0,5.058-15.17v0l-.089-.029-.113-.035c-32.393-10.752-57.989-8.143-72.517-4.733a393.693,393.693,0,0,1,10.918-45.292C352.84,55.3,369.016,32,384,32s31.16,23.3,43.271,62.322C440.639,137.4,448,194.812,448,256s-7.361,118.605-20.729,161.678C415.16,456.7,398.984,480,384,480Zm75.271-62.322C447.16,456.7,430.984,480,416,480h-1.859c10.781-12.331,20.367-31.659,28.411-57.58C456.383,377.854,464,318.751,464,256s-7.617-121.854-21.448-166.42c-8.044-25.921-17.63-45.249-28.411-57.58H416c14.984,0,31.16,23.3,43.271,62.322C472.639,137.4,480,194.812,480,256S472.639,374.605,459.271,417.678Z",
      fill: "currentColor"
    })]
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/category-menu-icons.ts









// CONCATENATED MODULE: ./src/layouts/header/menu/left-menu/left-menu.style.tsx


const LeftMenuBox = external_styled_components_default.a.div.withConfig({
  displayName: "left-menustyle__LeftMenuBox",
  componentId: "sc-23xl1m-0"
})(["display:flex;align-items:center;justify-content:space-between;flex-shrink:0;color:", ";"], Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const MainMenu = external_styled_components_default.a.div.withConfig({
  displayName: "left-menustyle__MainMenu",
  componentId: "sc-23xl1m-1"
})(["display:flex;align-items:center;"]);
const IconWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "left-menustyle__IconWrapper",
  componentId: "sc-23xl1m-2"
})(["display:flex;align-items:center;justify-content:center;width:24px;margin-right:15px;"]);
const MenuItem = external_styled_components_default.a.button.withConfig({
  displayName: "left-menustyle__MenuItem",
  componentId: "sc-23xl1m-3"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;white-space:nowrap;display:block;padding:12px 30px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;background-color:transparent;border:0;outline:0;cursor:pointer;svg{min-width:15px;max-width:20px;max-height:19px;}&:focus{outline:0;box-shadow:none;}@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}&:hover{color:", ";}&.current-page{color:", ";background-color:#fff;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const SelectedItem = external_styled_components_default.a.button.withConfig({
  displayName: "left-menustyle__SelectedItem",
  componentId: "sc-23xl1m-4"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:15px;padding-right:15px;border-radius:", ";outline:0;min-width:150px;cursor:pointer;svg{min-width:15px;max-width:20px;max-height:19px;}span{display:flex;align-items:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-decoration:none;&:first-child{margin-right:auto;}}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Icon = external_styled_components_default.a.div.withConfig({
  displayName: "left-menustyle__Icon",
  componentId: "sc-23xl1m-5"
})(["margin-right:7px;display:flex;align-items:center;justify-content:center;min-width:16px;"]);
const Arrow = external_styled_components_default.a.span.withConfig({
  displayName: "left-menustyle__Arrow",
  componentId: "sc-23xl1m-6"
})(["width:12px;margin-left:16px;"]);
// CONCATENATED MODULE: ./src/layouts/header/menu/left-menu/left-menu.tsx



function left_menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function left_menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { left_menu_ownKeys(Object(source), true).forEach(function (key) { left_menu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { left_menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function left_menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const CategoryIcon = ({
  name
}) => {
  const TagName = category_menu_icons_namespaceObject[name];
  return !!TagName ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(TagName, {}) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: ["Invalid icon ", name]
  });
};

const CategoryMenu = props => {
  const handleOnClick = item => {
    if (item.dynamic) {
      router_default.a.push('/[type]', `${item.href}`);
      props.onClick(item);
      return;
    }

    router_default.a.push(`${item.href}`);
    props.onClick(item);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    children: site_navigation["c" /* CATEGORY_MENU_ITEMS */].map(item => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MenuItem, left_menu_objectSpread(left_menu_objectSpread({}, props), {}, {
      onClick: () => handleOnClick(item),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconWrapper, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CategoryIcon, {
          name: item.icon
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
        id: item.id,
        defaultMessage: item.defaultMessage
      })]
    }), item.id))
  });
};

const LeftMenu = ({
  logo,
  name,
  config
}) => {
  const router = Object(router_["useRouter"])();
  const initialMenu = site_navigation["c" /* CATEGORY_MENU_ITEMS */].find(item => item.href === router.asPath);
  const [activeMenu, setActiveMenu] = external_react_default.a.useState(initialMenu !== null && initialMenu !== void 0 ? initialMenu : site_navigation["c" /* CATEGORY_MENU_ITEMS */][0]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LeftMenuBox, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(logo_logo["a" /* default */], {
      imageUrl: logo,
      alt: 'Shop Logo',
      onClick: () => setActiveMenu(site_navigation["c" /* CATEGORY_MENU_ITEMS */][0]),
      config: config
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      children: name
    })]
  });
};
// EXTERNAL MODULE: ./src/layouts/header/header.style.tsx
var header_style = __webpack_require__("HPEz");

// EXTERNAL MODULE: ./src/features/search/search.tsx + 2 modules
var search = __webpack_require__("Td6B");

// CONCATENATED MODULE: ./src/layouts/header/header.tsx








const Header = ({
  className,
  config
}) => {
  var _config$restaurant, _config$restaurant2;

  /*const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);*/
  // const { pathname, query } = useRouter();

  /*const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };*/

  /*const handleJoin = () => {
    authDispatch({
      type: 'SIGNIN',
    });
     openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  };*/
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(header_style["o" /* default */], {
    className: className,
    id: "layout-header",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LeftMenu, {
      logo: "https://whatsappneed.com/storage/" + (config === null || config === void 0 ? void 0 : (_config$restaurant = config.restaurant) === null || _config$restaurant === void 0 ? void 0 : _config$restaurant.logo),
      name: config === null || config === void 0 ? void 0 : (_config$restaurant2 = config.restaurant) === null || _config$restaurant2 === void 0 ? void 0 : _config$restaurant2.name,
      config: config
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search["a" /* default */], {
      minimal: true,
      className: "headerSearch"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RightMenu, {
      config: config
    })]
  });
};

/* harmony default export */ var header = (Header);
// CONCATENATED MODULE: ./src/layouts/layout.style.tsx


const LayoutWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "layoutstyle__LayoutWrapper",
  componentId: "sc-3nydxg-0"
})(["background-color:", ";@media (max-width:990px){background-color:", ";}.reuseModalHolder{padding:0;overflow:auto;border-radius:", " ", " 0 0;border:0;}"], Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('radii.small', '3px'), Object(theme_get_["themeGet"])('radii.small', '3px'));
// CONCATENATED MODULE: ./src/layouts/is-home-page.ts

const arr = [site_navigation["g" /* HOME_PAGE */], site_navigation["f" /* GROCERY_PAGE */], site_navigation["d" /* CLOTHING_PAGE */], site_navigation["i" /* MAKEUP_PAGE */], site_navigation["a" /* BAGS_PAGE */], site_navigation["e" /* FURNITURE_PAGE */], site_navigation["b" /* BOOK_PAGE */], site_navigation["j" /* MEDICINE_PAGE */], site_navigation["m" /* RESTAURANT_PAGE */]];
function isCategoryPage(pathname) {
  return arr.includes(`/${pathname}`);
}
// CONCATENATED MODULE: ./src/layouts/app-layout.tsx










const MobileHeader = dynamic_default()(() => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, "UTRa")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("UTRa")],
    modules: ['./header/mobile-header']
  }
});


const Layout = ({
  className,
  children,
  token
}) => {
  const {
    pathname,
    query
  } = Object(router_["useRouter"])();
  const {
    config
  } = Object(external_react_["useContext"])(config_context["a" /* ConfigContext */]);
  const isSticky = Object(app_provider["c" /* useAppState */])('isSticky') || pathname === '/furniture-two' || pathname === '/grocery-two';
  const isHomePage = isCategoryPage(query.type) || pathname === '/bakery';
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LayoutWrapper, {
    className: `layoutWrapper ${className}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_stickynode_default.a, {
      enabled: isSticky,
      innerZ: 1001,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MobileHeader, {
        className: `${isSticky ? 'sticky' : 'unSticky'} ${isHomePage ? 'home' : ''} desktop`,
        config: config
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(header, {
        className: `${isSticky ? 'sticky' : 'unSticky'} ${isHomePage ? 'home' : ''}`,
        config: config
      })]
    }), children]
  });
};

/* harmony default export */ var app_layout = (Layout);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.min.css
var swiper_bundle_min = __webpack_require__("4l1m");

// EXTERNAL MODULE: ./node_modules/rc-drawer/assets/index.css
var assets = __webpack_require__("/KGT");

// EXTERNAL MODULE: ./node_modules/rc-table/assets/index.css
var rc_table_assets = __webpack_require__("z2Xg");

// EXTERNAL MODULE: ./node_modules/rc-collapse/assets/index.css
var rc_collapse_assets = __webpack_require__("oKyy");

// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__("VLDe");

// EXTERNAL MODULE: ./src/components/multi-carousel/multi-carousel.style.css
var multi_carousel_style = __webpack_require__("OfaO");

// EXTERNAL MODULE: ./node_modules/react-spring-modal/dist/index.css
var dist = __webpack_require__("MgtJ");

// EXTERNAL MODULE: ./node_modules/overlayscrollbars/css/OverlayScrollbars.css
var OverlayScrollbars = __webpack_require__("UrZU");

// EXTERNAL MODULE: ./src/components/scrollbar/scrollbar.css
var scrollbar = __webpack_require__("qmtx");

// EXTERNAL MODULE: ./node_modules/@redq/reuse-modal/lib/index.css
var lib = __webpack_require__("msUf");

// EXTERNAL MODULE: ./src/assets/styles/global.style.tsx
var global_style = __webpack_require__("jbEd");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/en.json
var en = __webpack_require__("r/UT");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/ar.json
var ar = __webpack_require__("ojJp");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/es.json
var es = __webpack_require__("wrRK");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/de.json
var de = __webpack_require__("Ou8F");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/zh.json
var zh = __webpack_require__("RHsn");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/he.json
var he = __webpack_require__("ToeK");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/tr.json
var tr = __webpack_require__("xQB0");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/fr.json
var fr = __webpack_require__("z/Or");

// CONCATENATED MODULE: ./src/site-settings/site-translation/messages.ts








const messages = {
  en: en,
  ar: ar,
  es: es,
  de: de,
  zh: zh,
  he: he,
  tr: tr,
  fr: fr
};
// EXTERNAL MODULE: ./node_modules/typeface-lato/index.css
var typeface_lato = __webpack_require__("yRnI");

// EXTERNAL MODULE: ./node_modules/typeface-poppins/index.css
var typeface_poppins = __webpack_require__("mXcz");

// CONCATENATED MODULE: ./src/pages/_app.tsx



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // External CSS import here











 // Language translation messages



 // need to provide types

function ExtendedApp({
  Component,
  pageProps
}) {
  const mobile = useMedia('(max-width: 580px)');
  const tablet = useMedia('(max-width: 991px)');
  const desktop = useMedia('(min-width: 992px)');
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ConfigContextProvider, {
    initConfig: pageProps.config,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_styled_components_["ThemeProvider"], {
      theme: defaultTheme(pageProps.config),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(language_provider["a" /* LanguageProvider */], {
        messages: messages,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(use_cart["a" /* CartProvider */], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(app_provider["a" /* AppProvider */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AuthProvider, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(app_layout, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
                  deviceType: {
                    mobile,
                    tablet,
                    desktop
                  }
                }))
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(global_style["a" /* GlobalStyle */], {})]
            })
          })
        })
      })
    })
  });
}

/***/ }),

/***/ "ik7d":
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "jbEd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InjectRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const InjectRTL = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "globalstyle__InjectRTL",
  componentId: "sc-11h734h-0"
})(["", ""], ({
  lang
}) => (lang === 'ar' || lang === 'he') && `
    font-family: 'Cairo', sans-serif;
    `);
const GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(({
  theme
}) => _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },
  body: {
    margin: 0,
    fontFamily: 'body',
    fontWeight: 'regular',
    fontSize: 'base',
    lineHeight: '1.5',
    backgroundColor: 'white',
    transition: Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["get"])(theme, 'customs.transition'),
    WebkitTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.004)'
  },
  h1: {
    fontFamily: 'heading',
    fontSize: '5xl',
    fontWeight: 'semiBold',
    margin: 0
  },
  h2: {
    fontFamily: 'heading',
    fontSize: '3xl',
    fontWeight: 'semiBold',
    margin: 0
  },
  h3: {
    fontFamily: 'heading',
    fontSize: '2xl',
    fontWeight: 'semiBold',
    margin: 0
  },
  h4: {
    fontFamily: 'heading',
    fontSize: 'xl',
    fontWeight: 'semiBold',
    margin: 0
  },
  h5: {
    fontFamily: 'heading',
    fontSize: 'md',
    fontWeight: 'semiBold',
    margin: 0
  },
  h6: {
    fontFamily: 'heading',
    fontSize: 'base',
    fontWeight: 'bold',
    margin: 0
  },
  'p,span,button,li,div': {
    fontFamily: 'body',
    margin: 0
  },
  a: {
    fontFamily: 'body',
    textDecoration: 'none'
  },
  ul: {
    margin: 0,
    padding: 0
  },
  li: {
    listStyle: 'none'
  },
  pre: {
    fontFamily: 'monospace',
    overflowX: 'auto',
    code: {
      color: 'inherit'
    }
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 'inherit'
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  },
  button: {
    appearance: 'none'
  },
  img: {
    maxWidth: '100%'
  },
  '.quick-view-overlay': {
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  '.add-address-modal,.add-contact-modal': {
    boxShadow: '0 10px 40px rgba(0,0,0,0.16)',
    borderRadius: '3px !important',
    '.innerRndComponent': {
      width: '100%',
      padding: '30px',
      height: 'auto',
      backgroundColor: '#f7f8f9',
      border: 0,
      boxSizing: 'border-box'
    }
  },
  '.search-modal-mobile': {
    transform: 'none!important',
    maxWidth: 'none!important',
    maxHeight: 'none!important',
    top: '0!important',
    left: '0!important',
    background: 'transparent!important',
    borderRadius: '0!important'
  },
  '.reuseModalCloseBtn': {
    right: '10px!important',
    backgroundColor: '#ffffff!important',
    color: '#222222!important',
    borderRadius: '15px!important',
    padding: '0 9px!important',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
  },
  '.image-item': {
    padding: '0 15px'
  },
  '@media (max-width: 1199px) and (min-width: 991px)': {
    '.image-item': {
      paddingLeft: '10px',
      paddingRight: '10px'
    }
  },
  '@media (max-width: 768px)': {
    '.image-item': {
      paddingLeft: '7.5px',
      paddingRight: '7.5px'
    }
  },
  '.rc-table-fixed-header .rc-table-scroll .rc-table-header': {
    marginBottom: '0 !important',
    paddingBottom: '0 !important',
    th: {
      padding: '8px 20px'
    }
  },
  '.drawer-content-wrapper': {
    '*:focus': {
      outline: 'none'
    }
  },
  '.rc-table-content': {
    border: 0
  },
  '#modal-root': {
    zIndex: 999999,
    position: 'relative'
  },
  '.drawer': {
    outline: 0,
    boxShadow: 'none'
  },
  '.srOnly': {
    border: '0 !important',
    clip: 'rect(1px, 1px, 1px, 1px) !important',
    clipPath: 'inset(50%) !important',
    height: '1px !important',
    margin: '-1px !important',
    overflow: 'hidden !important',
    padding: '0 !important',
    position: 'absolute !important',
    width: '1px !important',
    whiteSpace: 'nowrap !important'
  }
}, theme.globals)));

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "mXcz":
/***/ (function(module, exports) {



/***/ }),

/***/ "msUf":
/***/ (function(module, exports) {



/***/ }),

/***/ "oKyy":
/***/ (function(module, exports) {



/***/ }),

/***/ "ojJp":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"الصفحة الرئيسية\",\"nav.grocery\":\"بقالة\",\"nav.makeup\":\"ميك أب\",\"nav.bags\":\"أكياس\",\"nav.clothing\":\"ملابس\",\"nav.furniture\":\"أثاث المنزل\",\"nav.book\":\"كتاب\",\"nav.medicine\":\"الدواء\",\"nav.foods\":\"الأطعمة\",\"nav.terms_and_services\":\"الشروط والخدمات\",\"nav.privacy_policy\":\"سياسة خاصة\",\"nav.offer\":\"عرض\",\"nav.help\":\"تحتاج مساعدة\",\"nav.profile\":\"الملف الشخصي\",\"nav.checkout\":\"الدفع\",\"nav.order_received\":\"طلب الفاتورة\",\"nav.logout\":\"الخروج\",\"nav.login\":\"تسجيل الدخول\",\"nav.order\":\"طلبك\",\"nav.account_settings\":\"إعدادات حسابك\",\"groceriesTitle\":\"تسليم البقالة في {minute} دقيقة\",\"groceriesSubTitle\":\"احصل على الأطعمة الصحية والوجبات الخفيفة التي تقدمها على عتبة دارك طوال اليوم\",\"makeupTitle\":\"مكياج ذو العلامات التجارية والمستوردة\",\"makeupSubTitle\":\"أسهل وأرخص وسيلة للحصول على الماكياج الخاص بك المستوردة والمستوردة\",\"bagsTitle\":\"الحقائب ذات العلامات التجارية الحصرية\",\"bagsSubTitle\":\"احصل على حقائبك الحصرية والعلامة التجارية التي تم تسليمها إليك في أي وقت من الأوقات\",\"womenClothsTitle\":\"تسوق مصمم الفساتين الخاصة بك\",\"womenClothsSubTitle\":\"على استعداد لارتداء الفساتين المخصصة لك من الانترنت. عجلوا في حين يستمر المخزون.\",\"furnitureTitle\":\"الأثاث الحصري بأسعار رخيصة\",\"furnitureSubTitle\":\"اجعل منزلك منزلاً من خلال مجموعتنا الواسعة من الأثاث الجميل\",\"booksTitle\":\"متجر الكتب الخاصة بك\",\"booksSubTitle\":\"احصل على كتبك المفضلة من مجموعة واسعة من الكتب.\",\"medicineTitle\":\"سلم الدواء الخاص بك\",\"medicineSubTitle\":\"قل وداعا لجميع همومك الصحية معنا\",\"foodsTitle\":\"أنت تأمر نحن تسليم\",\"foodsSubTitle\":\"احصل على طعامك المفضل في أقل من ساعة\",\"alternativeCheckout\":\"بديل الخروج\",\"termAndConditionHelper\":\"من خلال إجراء هذا الشراء فإنك توافق على موقعنا\",\"termAndCondition\":\"الأحكام والشروط.\",\"reqMedicine\":\"طلب الطب\",\"submitRequest\":\"تقديم الطلب\",\"noteHead\":\"ملحوظة\",\"noteDescription\":\"سيتأكد توفر المنتج والسعر عبر الهاتف. رسوم التوصيل داخل المدينة 5 دولارات وخارج المدينة 10 دولارات.\",\"rmMedicineName\":\"اسم الدواء\",\"rmMedicineQuantity\":\"كمية\",\"rmPrescripttionUpload\":\"حمل الوصفة الطبية الخاصة بك\",\"rmUploadText\":\"اسحب / حمل ملفك هنا.\",\"cartTitle\":\"طلبك\",\"discountText\":\"خصم\",\"vatText\":\"مدفوع. ضريبة القيمة المضافة\",\"searchPlaceholder\":\"ابحث عن منتجاتك من هنا\",\"searchButtonText\":\"بحث\",\"mobileSignInButtonText\":\"إنضم إلى\",\"cartItems\":\"العناصر\",\"cartItem\":\"بند\",\"addCartButton\":\"عربة التسوق\",\"addToCartButton\":\"أضف إلى السلة\",\"backBtn\":\"عودة\",\"noProductFound\":\"لا توجد منتجات\",\"specialCode\":\"هل لديك قسيمة؟\",\"couponApplied\":\"القسيمة المطبقة\",\"couponPlaceholder\":\"أدخل رمز القسيمة هنا\",\"sidebarYourOrder\":\"طلب\",\"profilePageTitle\":\"ملفك الشخصي\",\"profileNameField\":\"اسم\",\"profileEmailField\":\"البريد الإلكتروني\",\"profileSaveBtn\":\"حفظ\",\"contactNumberTitle\":\"معلومات الاتصال\",\"addContactBtn\":\"إضافة جهة اتصال\",\"deliveryAddressTitle\":\"عنوان التسليم\",\"addAddressBtn\":\"اضف عنوان\",\"addNew\":\"اضف جديد\",\"addCardBtn\":\"إضافة بطاقة\",\"savedCardsId\":\"البطاقات المحفوظة\",\"savedContactId\":\"حفظ جهة الاتصال\",\"savedAddressId\":\"حفظ العنوان\",\"paymentCardTitle\":\"بطاقة المدفوعات\",\"siteFooter\":\"Pickbazar هو منتج من قبل\",\"subTotal\":\"المجموع الفرعي\",\"itemsText\":\"العناصر\",\"shippinFeeText\":\"رسوم الشحن\",\"voucherText\":\"إيصال\",\"voucherApply\":\"تطبيق\",\"couponError\":\"قسيمة غير صالحة\",\"totalText\":\"مجموع\",\"deliverySchedule\":\"جدول التسليم\",\"checkoutDeliveryAddress\":\"عنوان التسليم\",\"contactNumberText\":\"رقم الاتصال\",\"selectPaymentText\":\"خيار الدفع\",\"proceesCheckout\":\"باشرالخروج من الفندق\",\"backHomeBtn\":\"العودة إلى المنزل\",\"orderReceivedText\":\"طلب وارد\",\"orderReceivedSuccess\":\"شكرا لكم. تم استلام طلبك\",\"orderNumberText\":\"رقم الطلب\",\"orderDateText\":\"تاريخ\",\"paymentMethodText\":\"طريقة الدفع او السداد\",\"paymentMethodName\":\"الدفع عن الاستلام\",\"orderDetailsText\":\"تفاصيل الطلب\",\"totalItemText\":\"مجموع البند\",\"orderTimeText\":\"وقت الطلب\",\"deliveryTimeText\":\"موعد التسليم\",\"deliveryLocationText\":\"موقع التسليم\",\"totalAmountText\":\"المبلغ الإجمالي\",\"loadMoreBtn\":\"تحميل المزيد\",\"welcomeBack\":\"مرحبا بعودتك\",\"loginText\":\"تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور الخاصة بك\",\"emailAddressPlaceholder\":\"عنوان البريد الإلكتروني أو رقم الاتصال\",\"passwordPlaceholder\":\"كلمة المرور (بحد أدنى {minCharacter} أحرف)\",\"continueBtn\":\"استمر\",\"orText\":\"أو\",\"continueFacebookBtn\":\"تواصل مع Facebook\",\"continueGoogleBtn\":\"تواصل مع جوجل\",\"dontHaveAccount\":\"ليس لديك أي حساب؟\",\"signUpBtnText\":\"سجل\",\"forgotPasswordText\":\"نسيت رقمك السري؟\",\"resetText\":\"إعادة تعيينها\",\"signUpText\":\"بالتسجيل ، أنت توافق على Pickbazar\",\"termsConditionText\":\"الشروط والأحكام\",\"alreadyHaveAccount\":\"هل لديك حساب؟\",\"backToSign\":\"ارجع الى\",\"loginBtnText\":\"تسجيل الدخول\",\"forgotPassText\":\"هل نسيت كلمة المرور\",\"sendResetPassText\":\"سنرسل لك رابطًا لإعادة تعيين كلمة المرور الخاصة بك\",\"resetPasswordBtn\":\"إعادة تعيين كلمات المرور\",\"intlCopyBtnId\":\"نسخ\",\"intlCopySuccessId\":\"نسخ\",\"locationModalheading\":\"حدد موقعك\",\"locationModalSubHeading\":\"يجب عليك تحديد موقعك لغرض تقديم الخدمة\",\"locationModalFooter\":\"توصيل مجاني للطلب الأول\",\"saleText\":\"تخفيض السعر\",\"offText\":\"إيقاف\",\"faqNo1Title\":\"كيف تتصل بخدمة العملاء؟\",\"faqNo1Desc\":\"يتوفر فريق تجربة العملاء لدينا {number1} أيام في الأسبوع ، ونقدم طريقتين للاتصال. البريد الإلكتروني والدردشة. نحن نحاول الرد بسرعة ، لذلك لا تحتاج إلى الانتظار طويلًا للحصول على رد!\",\"faqNo2Title\":\"فشل تثبيت التطبيق ، وكيفية تحديث معلومات النظام؟\",\"faqNo2Desc\":\"يرجى قراءة الوثائق بعناية. لدينا أيضًا بعض برامج الفيديو التعليمية عبر الإنترنت فيما يتعلق بهذه المشكلة. في حالة استمرار المشكلة ، يرجى فتح تذكرة في منتدى الدعم\",\"faqNo3Title\":\"استجابة الموقع يستغرق بعض الوقت ، وكيفية تحسين؟\",\"faqNo3Desc\":\"في البداية ، يرجى التحقق من اتصالك بالإنترنت. لدينا أيضًا بعض برامج الفيديو التعليمية عبر الإنترنت فيما يتعلق بهذه المشكلة. في حالة استمرار المشكلة ، يرجى فتح تذكرة في منتدى الدعم.\",\"faqNo4Title\":\"كيف يمكنني إنشاء حساب؟\",\"faqNo4Desc\":\"إذا كنت تريد فتح حساب للاستخدام الشخصي ، يمكنك القيام بذلك عبر الهاتف أو عبر الإنترنت. يجب أن يستغرق فتح الحساب عبر الإنترنت بضع دقائق فقط.\",\"intlOrderDetailsDiscount\":\"خصم\",\"intlOrderDetailsDelivery\":\"رسوم التوصيل\",\"intlOrderPageTitle\":\"طلبي\",\"intlNoOrderFound\":\"لم يتم العثور على أي طلب\",\"intlOrderPageDetails\":\"تفاصيل الطلب\",\"intlTableColTitle2\":\"كمية\",\"intlTableColTitle3\":\"السعر\",\"intlOrderCardTitleText\":\"طلب\",\"intlOrderCardDateText\":\"تاريخ الطلب\",\"intlOrderCardTotalText\":\"السعر الكلي\",\"joinButton\":\"انضم\",\"ar\":\"عربى\",\"zh\":\"صينى\",\"en\":\"الإنجليزية\",\"de\":\"ألمانية\",\"he\":\"اللغة العبرية\",\"es\":\"الأسبانية\",\"tr\":\"التركية\",\"intlTextBy\":\"بواسطة\",\"intlRelatedItems\":\"الأصناف ذات الصلة\",\"readFreeSampleButton\":\"قراءة عينة مجانية\",\"bookSectionTitle\":\"عن الكتاب\",\"authorSectionTitle\":\"عن المؤلف\",\"defaultIntlId\":\"يرجى إضافة عنصر نائب من ملف اللغة\",\"noResultFound\":\"عذرا ، لم يتم العثور على نتيجة :(\",\"deliveryText\":\"توصيل\",\"cuisineText\":\"أطباق\",\"minOrderText\":\"لمين\",\"fromText\":\"من عند\",\"loadMoreButton\":\"تحميل المزيد\",\"form.email\":\"أدخل البريد الالكتروني\",\"form.note\":\"أدخل الملاحظات إن كان لديك\",\"form.name\":\"ادخل الاسم\",\"form.phone\":\"أدخل الهاتف\",\"form.address\":\"أدخل العنوان\",\"form.house\":\"أدخل رقم البناء\",\"form.aprt\":\"أدخل رقم الشقة\",\"form.bell\":\"أدخل رقم الجرس\",\"processWhatsapp\":\"طلبك جاهز، إضغط هنا ليتم إرساله لحساب الواتس أب الخاص بالمطعم\"}");

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

/***/ "qmtx":
/***/ (function(module, exports) {



/***/ }),

/***/ "r/UT":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Home\",\"nav.grocery\":\"Grocery\",\"nav.makeup\":\"Makeup\",\"nav.bags\":\"Bags\",\"nav.clothing\":\"Clothing\",\"nav.furniture\":\"Furniture\",\"nav.book\":\"Book\",\"nav.medicine\":\"Medicine\",\"nav.foods\":\"Foods\",\"nav.terms_and_services\":\"Terms and Services\",\"nav.privacy_policy\":\"Privacy Policy\",\"nav.offer\":\"Offer\",\"nav.help\":\"Need Help\",\"nav.profile\":\"Profile\",\"nav.checkout\":\"Checkout\",\"nav.order_received\":\"Order Invoice\",\"nav.logout\":\"Logout\",\"nav.login\":\"Login\",\"nav.order\":\"Your Order\",\"nav.account_settings\":\"Your Account Settings\",\"groceriesTitle\":\"Groceries Delivered in {minute} Minute\",\"groceriesSubTitle\":\"Get your healthy foods & snacks delivered at your doorsteps all day everyday\",\"makeupTitle\":\"Branded & imported makeups\",\"makeupSubTitle\":\"Easiest and cheapest way to get your branded & imported makeups\",\"bagsTitle\":\"Exclusive Branded bags\",\"bagsSubTitle\":\"Get your exclusive & branded bags delivered to you in no time\",\"womenClothsTitle\":\"Shop your designer dresses\",\"womenClothsSubTitle\":\"Ready to wear dresses tailored for you from online. Hurry up while stock lasts.\",\"furnitureTitle\":\"Exclusive furniture on cheap price\",\"furnitureSubTitle\":\"Make your house a home with our wide collection of beautiful furniture\",\"booksTitle\":\"Your own books store\",\"booksSubTitle\":\"Get your favorite books from our wide range of books.\",\"medicineTitle\":\"Your medication, delivered\",\"medicineSubTitle\":\"Say goodbye to all your healthcare worries with  us\",\"foodsTitle\":\"You order we deliver\",\"foodsSubTitle\":\"Get your favorite foods in less than an hour\",\"alternativeCheckout\":\"Checkout Alternative\",\"termAndConditionHelper\":\"By making this purchase you agree to our\",\"termAndCondition\":\"terms and conditions.\",\"removeCoupon\":\"(Remove)\",\"reqMedicine\":\"Request Medicine\",\"submitRequest\":\"Submit Request\",\"noteHead\":\"Note\",\"noteDescription\":\"Product availability & price will confirm over phone. Delivery Charge inside the city ${inside} & outside the city ${outside}.\",\"rmMedicineName\":\"Medicine Name\",\"rmMedicineQuantity\":\"Quantity\",\"rmPrescripttionUpload\":\"Upload your prescription\",\"rmUploadText\":\"Drag/Upload your file here.\",\"cartTitle\":\"Your Order\",\"discountText\":\"Discount\",\"vatText\":\"Incl. VAT\",\"searchPlaceholder\":\"Search your products from here\",\"searchButtonText\":\"Search\",\"mobileSignInButtonText\":\"Join In\",\"cartItems\":\"Items\",\"cartItem\":\"Item\",\"addCartButton\":\"Cart\",\"addToCartButton\":\"Add to cart\",\"backBtn\":\"Back\",\"noProductFound\":\"No products found\",\"specialCode\":\"Do you have a voucher?\",\"couponApplied\":\"Coupon Applied\",\"couponPlaceholder\":\"Enter voucher code here\",\"sidebarYourOrder\":\"Order\",\"profilePageTitle\":\"Your Profile\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"Save\",\"contactNumberTitle\":\"Contact Info\",\"addContactBtn\":\"Add Contact\",\"deliveryAddressTitle\":\"Delivery Address\",\"addAddressBtn\":\"Add Address\",\"addNew\":\"Add New\",\"paymentCardTitle\":\"Payments Card\",\"addCardBtn\":\"Add Card\",\"savedCardsId\":\"Saved Cards\",\"savedContactId\":\"Save Contact\",\"savedAddressId\":\"Save Address\",\"siteFooter\":\"Pickbazar is a product by\",\"subTotal\":\"Sub Total\",\"itemsText\":\"items\",\"shippingFeeText\":\"Shipping Fee\",\"voucherText\":\"Voucher\",\"voucherApply\":\"Apply\",\"couponError\":\"Invalid Coupon\",\"totalText\":\"Total\",\"deliverySchedule\":\"Delivery Schedule\",\"checkoutDeliveryAddress\":\"Delivery Address\",\"contactNumberText\":\"Contact Number\",\"selectPaymentText\":\"Payment Option\",\"processCheckout\":\"Proceed to Checkout\",\"backHomeBtn\":\"Back to Home\",\"orderReceivedText\":\"Order Received\",\"orderReceivedSuccess\":\"Thank you. Your order has been received\",\"orderNumberText\":\"Order Number\",\"orderDateText\":\"Date\",\"paymentMethodText\":\"Payment Method\",\"paymentMethodName\":\"Cash on delivery\",\"orderDetailsText\":\"Order Details\",\"totalItemText\":\"Total Item\",\"orderTimeText\":\"Order Time\",\"deliveryTimeText\":\"Delivery Time\",\"deliveryLocationText\":\"Delivery Location\",\"totalAmountText\":\"Total Amount\",\"loadMoreBtn\":\"Load More\",\"welcomeBack\":\"Welcome Back\",\"loginText\":\"Login with your email & password\",\"emailAddressPlaceholder\":\"demo@demo.com\",\"passwordPlaceholder\":\"demo\",\"continueBtn\":\"Continue\",\"orText\":\"or\",\"continueFacebookBtn\":\"Continue with Facebook\",\"continueGoogleBtn\":\"Continue with Google\",\"dontHaveAccount\":\"Don't have any account?\",\"signUpBtnText\":\"Sign Up\",\"forgotPasswordText\":\"Forgot your password?\",\"resetText\":\"Reset It\",\"signUpText\":\"By signing up, you agree to Pickbazar's\",\"termsConditionText\":\"Terms & Condtion\",\"alreadyHaveAccount\":\"Already have an account?\",\"backToSign\":\"Back to\",\"loginBtnText\":\"Login\",\"forgotPassText\":\"Forgot Password\",\"sendResetPassText\":\"We'll send you a link to reset your password\",\"resetPasswordBtn\":\"Reset Password\",\"intlCopyBtnId\":\"Copy\",\"intlCopySuccessId\":\"Copied\",\"locationModalheading\":\"Select Your Location\",\"locationModalSubHeading\":\"You have to select your location for deliver service perpous\",\"locationModalFooter\":\"Free Delivery For 1st Order\",\"saleText\":\"Sale\",\"offText\":\"Off\",\"faqNo1Title\":\"How to contact with Customer Service?\",\"faqNo1Desc\":\"Our Customer Experience Team is available {number1} days a week and we offer {number2} ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.\",\"faqNo2Title\":\"App installation failed, how to update system information?\",\"faqNo2Desc\":\"Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum\",\"faqNo3Title\":\"Website response taking time, how to improve?\",\"faqNo3Desc\":\"At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .\",\"faqNo4Title\":\"How do I create a account?\",\"faqNo4Desc\":\"If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes.\",\"intlOrderDetailsDiscount\":\"Discount\",\"intlOrderDetailsDelivery\":\"Delivery Fee\",\"intlOrderPageTitle\":\"My Order\",\"intlNoOrderFound\":\"No order found\",\"intlOrderPageDetails\":\"Order Details\",\"intlTableColTitle2\":\"Quantity\",\"intlTableColTitle3\":\"Price\",\"intlOrderCardTitleText\":\"Order\",\"intlOrderCardDateText\":\"Order Date\",\"intlOrderCardTotalText\":\"Total Price\",\"joinButton\":\"Join\",\"ar\":\"Arabic\",\"zh\":\"Chinese\",\"en\":\"English\",\"de\":\"German\",\"he\":\"Hebrew\",\"es\":\"Spanish\",\"intlTextBy\":\"by\",\"intlRelatedItems\":\"Related Items\",\"readFreeSampleButton\":\"Read Free Sample\",\"bookSectionTitle\":\"About The Book\",\"authorSectionTitle\":\"About The Author\",\"defaultIntlId\":\"Please add a Placeholder from language file\",\"noResultFound\":\"Sorry, No result found :(\",\"deliveryText\":\"Delivery\",\"cuisineText\":\"Cuisine\",\"minOrderText\":\"Min Order\",\"fromText\":\"From\",\"form.email\":\"Enter Email\",\"form.note\":\"Enter Note if you have\",\"form.name\":\"Enter Name\",\"form.phone\":\"Enter Phone\",\"form.address\":\"Enter Address\",\"form.house\":\"Enter House Number\",\"form.aprt\":\"Enter Apartment Number\",\"form.bell\":\"Enter Bell Number\",\"processWhatsapp\":\"Your order is ready, click to send it to restaurant Whatsapp account\"}");

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

/***/ "uiyz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useLocale; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_config_config_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RjkI");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_styles_global_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jbEd");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KVly");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("xoY3");
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_8__);









const LanguageContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
const LanguageProvider = ({
  children,
  messages
}) => {
  var _config$restaurant, _config$restaurant$us, _config$restaurant2, _config$restaurant2$u;

  const {
    config
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(contexts_config_config_context__WEBPACK_IMPORTED_MODULE_2__[/* ConfigContext */ "a"]);
  const [locale, setLocale] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState((config === null || config === void 0 ? void 0 : (_config$restaurant = config.restaurant) === null || _config$restaurant === void 0 ? void 0 : (_config$restaurant$us = _config$restaurant.userConfig) === null || _config$restaurant$us === void 0 ? void 0 : _config$restaurant$us.main_lang) || 'en');

  const changeLanguage = newLocale => {
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set('locale', newLocale);
    window.location.reload();
    /*switch (newLocale) {
      case config?.restaurant?.userConfig?.main_lang:
      case config?.restaurant?.userConfig?.alt_lang:
        setLocale(newLocale);
        document.documentElement.lang = newLocale;
        Cookie.set('locale', newLocale);
      default:
        if (config?.restaurant?.userConfig?.main_lang) {
          setLocale(config?.restaurant.userConfig.main_lang);
        }
    }*/
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    const localSetting = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('locale');

    if (localSetting && Object(_language_utils__WEBPACK_IMPORTED_MODULE_6__[/* isLocale */ "c"])(localSetting)) {
      document.documentElement.lang = localSetting;
      setLocale(localSetting);
    }
  }, [locale]);
  let isRtl = Object(_language_utils__WEBPACK_IMPORTED_MODULE_6__[/* isRTL */ "d"])(locale);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(LanguageContext.Provider, {
    value: {
      locale,
      changeLanguage,
      isRtl
    },
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_intl__WEBPACK_IMPORTED_MODULE_3__["IntlProvider"], {
      locale: locale,
      messages: messages[locale],
      defaultLocale: (config === null || config === void 0 ? void 0 : (_config$restaurant2 = config.restaurant) === null || _config$restaurant2 === void 0 ? void 0 : (_config$restaurant2$u = _config$restaurant2.userConfig) === null || _config$restaurant2$u === void 0 ? void 0 : _config$restaurant2$u.main_lang) || 'en',
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(assets_styles_global_style__WEBPACK_IMPORTED_MODULE_4__[/* InjectRTL */ "b"], {
        lang: locale,
        dir: isRtl ? 'rtl' : 'ltr',
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(styled_components__WEBPACK_IMPORTED_MODULE_7__["StyleSheetManager"], {
          stylisPlugins: isRtl ? [stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_8___default.a] : [],
          children: children
        })
      })
    })
  });
};
const useLocale = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(LanguageContext);

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "wrRK":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Hogar\",\"nav.grocery\":\"Tienda de comestibles\",\"nav.makeup\":\"Maquillaje\",\"nav.bags\":\"Pantalones\",\"nav.clothing\":\"Ropa\",\"nav.furniture\":\"Mueble\",\"nav.book\":\"Libro\",\"nav.medicine\":\"Medicamento\",\"nav.foods\":\"Alimentos\",\"nav.terms_and_services\":\"Términos y servicios\",\"nav.privacy_policy\":\"Política de privacidad\",\"nav.offer\":\"Oferta\",\"nav.help\":\"Necesitas ayuda\",\"nav.profile\":\"Perfil\",\"nav.checkout\":\"Revisa\",\"nav.order_received\":\"Factura de pedido\",\"nav.logout\":\"Cerrar sesión\",\"nav.login\":\"Iniciar sesión\",\"nav.order\":\"Su pedido\",\"groceriesTitle\":\"Abarrotes entregados en {minute} minutos\",\"groceriesSubTitle\":\"Obtenga sus alimentos y refrigerios saludables entregados en su puerta todo el día todos los días\",\"makeupTitle\":\"Maquillajes de marca e importados\",\"makeupSubTitle\":\"La forma más fácil y económica de obtener sus maquillajes de marca e importados\",\"bagsTitle\":\"Bolsos exclusivos de marca\",\"bagsSubTitle\":\"Obtenga sus bolsos exclusivos y de marca entregados en poco tiempo\",\"womenClothsTitle\":\"Compra tus vestidos de diseñador\",\"womenClothsSubTitle\":\"Listo para usar vestidos a medida para usted en línea. Date prisa mientras duren las existencias.\",\"furnitureTitle\":\"Muebles exclusivos a precio económico\",\"furnitureSubTitle\":\"Haga de su casa un hogar con nuestra amplia colección de hermosos muebles.\",\"booksTitle\":\"Tu propia tienda de libros\",\"booksSubTitle\":\"Obtenga sus libros favoritos de nuestra amplia gama de libros.\",\"medicineTitle\":\"Su medicamento, entregado\",\"medicineSubTitle\":\"Diga adiós a todas sus preocupaciones de atención médica con nosotros.\",\"foodsTitle\":\"Tu orden lo entregamos\",\"foodsSubTitle\":\"Obtenga sus comidas favoritas en menos de una hora\",\"alternativeCheckout\":\"Alternativa de pago\",\"termAndConditionHelper\":\"Al realizar esta compra, usted acepta nuestro\",\"termAndCondition\":\"términos y Condiciones.\",\"reqMedicine\":\"Solicitar medicina\",\"submitRequest\":\"Enviar peticion\",\"noteHead\":\"Nota\",\"noteDescription\":\"La disponibilidad del producto y el precio se confirmarán por teléfono. Cargo por entrega dentro de la ciudad $ 5 y fuera de la ciudad $ 10.\",\"rmMedicineName\":\"Nombre de medicina\",\"rmMedicineQuantity\":\"Cantidad\",\"rmPrescripttionUpload\":\"Sube tu receta\",\"rmUploadText\":\"Arrastra / sube tu archivo aquí.\",\"cartTitle\":\"Su pedido\",\"discountText\":\"Descuento\",\"vatText\":\"Incl. IVA\",\"searchPlaceholder\":\"Busque sus productos desde aquí\",\"searchButtonText\":\"Buscar\",\"mobileSignInButtonText\":\"Participar\",\"navlinkAccountSettings\":\"La configuración de su cuenta\",\"cartItems\":\"artículos\",\"cartItem\":\"articulo\",\"addCartButton\":\"Carro\",\"addToCartButton\":\"Añadir al carrito\",\"backBtn\":\"atrás\",\"noProductFound\":\"No se encontraron productos.\",\"specialCode\":\"¿Tienes un cupón?\",\"couponApplied\":\"Cupón Aplicado\",\"couponPlaceholder\":\"Ingrese el código de cupón aquí\",\"sidebarYourOrder\":\"Orden\",\"profilePageTitle\":\"Tu perfil\",\"profileNameField\":\"Nombre\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"Salvar\",\"contactNumberTItle\":\"Número de contacto\",\"addContactBtn\":\"Agregar contacto\",\"deliveryAddressTitle\":\"Dirección de entrega\",\"addAddressBtn\":\"Añadir dirección\",\"addNew\":\"Agregar nuevo\",\"paymentCardTitle\":\"Tarjeta de pagos\",\"addCardBtn\":\"Agregar tarjeta\",\"savedCardsId\":\"Tarjetas guardadas\",\"savedContactId\":\"Guardar contacto\",\"savedAddressId\":\"Guardar dirección\",\"siteFooter\":\"Pickbazar es un producto de\",\"itemsText\":\"artículos\",\"shippinFeeText\":\"Gastos de envío\",\"voucherText\":\"Vale\",\"voucherApply\":\"Aplicar\",\"couponError\":\"Cupón Inválido\",\"deliverySchedule\":\"Calendario de entregas\",\"checkoutDeliveryAddress\":\"Dirección de entrega\",\"contactNumberText\":\"Número de contacto\",\"selectPaymentText\":\"Opcion de pago\",\"proceesCheckout\":\"Pasar por la caja\",\"backHomeBtn\":\"De vuelta a casa\",\"orderReceivedText\":\"orden recibida\",\"orderReceivedSuccess\":\"Gracias. Tu orden ha sido recibida\",\"orderNumberText\":\"Número de orden\",\"orderDateText\":\"Fecha\",\"paymenMethodText\":\"Método de pago\",\"paymentMethodName\":\"Contra reembolso\",\"orderDetailsText\":\"Detalles del pedido\",\"totalItemText\":\"Artículo total\",\"orderTimeText\":\"Tiempo de la orden\",\"deliveryTimeText\":\"El tiempo de entrega\",\"deliveryLocationText\":\"Lugar de entrega\",\"totalAmountText\":\"Cantidad total\",\"loadMoreBtn\":\"Carga más\",\"welcomeBack\":\"Dar una buena acogida\",\"loginText\":\"Inicie sesión con su correo electrónico y contraseña\",\"emailAddressPlaceholder\":\"Dirección de correo electrónico o número de contacto\",\"passwordPlaceholder\":\"Contraseña (mínimo {minCharacter} caracteres)\",\"continueBtn\":\"Continuar\",\"orText\":\"o\",\"continueFacebookBtn\":\"Continuar con Facebook\",\"continueGoogleBtn\":\"Continuar con Google\",\"dontHaveAccount\":\"¿No tienes cuenta?\",\"signUpBtnText\":\"Regístrate\",\"forgotPasswordText\":\"¿Olvidaste tu contraseña?\",\"resetText\":\"Reinicialo\",\"signUpText\":\"Al registrarte, aceptas Pickbazar's\",\"termsConditionText\":\"Términos y condiciones\",\"alreadyHaveAccount\":\"¿Ya tienes una cuenta?\",\"backToSign\":\"De regreso\",\"loginBtnText\":\"Iniciar sesión\",\"forgotPassText\":\"Se te olvidó tu contraseña\",\"sendResetPassText\":\"Le enviaremos un enlace para restablecer su contraseña\",\"resetPasswordBtn\":\"Restablecer contraseñas\",\"intlCopyBtnId\":\"Copiar\",\"intlCopySuccessId\":\"Copiado\",\"locationModalheading\":\"Selecciona tu ubicación\",\"locationModalSubHeading\":\"Debe seleccionar su ubicación para el servicio de entrega\",\"locationModalFooter\":\"Entrega gratuita para el primer pedido\",\"saleText\":\"Rebaja\",\"offText\":\"Apagada\",\"faqNo1Title\":\"¿Cómo contactar con el Servicio al Cliente?\",\"faqNo1Desc\":\"Nuestro equipo de experiencia del cliente está disponible los {number1} días de la semana y ofrecemos {number2} formas de ponerse en contacto: correo electrónico y chat. Intentamos responder rápidamente, por lo que no debe esperar demasiado para recibir una respuesta.\",\"faqNo2Title\":\"La instalación de la aplicación falló, ¿cómo actualizar la información del sistema?\",\"faqNo2Desc\":\"Por favor lea la documentación cuidadosamente. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte\",\"faqNo3Title\":\"Respuesta del sitio web tomando tiempo, ¿cómo mejorar?\",\"faqNo3Desc\":\"Al principio, verifique su conexión a internet. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte.\",\"faqNo4Title\":\"¿Cómo creo una cuenta?\",\"faqNo4Desc\":\"Si desea abrir una cuenta para uso personal, puede hacerlo por teléfono o en línea. Abrir una cuenta en línea solo debería tomar unos minutos.\",\"totalText\":\"Total\",\"subTotal\":\"Subtotal\",\"intlOrderDetailsDiscount\":\"Descuento\",\"intlOrderDetailsDelivery\":\"Gastos de envío\",\"intlOrderPageTitle\":\"Mi pedido\",\"intlNoOrderFound\":\"No se ha encontrado ningún pedido.\",\"intlOrderPageDetails\":\"Detalles del pedido\",\"intlTableColTitle2\":\"Cantidad\",\"intlTableColTitle3\":\"Precio\",\"intlOrderCardTitleText\":\"Orden\",\"intlOrderCardDateText\":\"Fecha de orden\",\"intlOrderCardTotalText\":\"Precio total\",\"joinButton\":\"Unirse\",\"ar\":\"Arábica\",\"zh\":\"Chino\",\"en\":\"Inglés\",\"de\":\"Alemán\",\"he\":\"Hebreo\",\"es\":\"Español\",\"intlTextBy\":\"por\",\"intlRelatedItems\":\"Artículos relacionados\",\"readFreeSampleButton\":\"Leer muestra gratis\",\"bookSectionTitle\":\"Acerca del libro\",\"authorSectionTitle\":\"Sobre el autor\",\"defaultIntlId\":\"Agregue un marcador de posición del archivo de idioma\",\"noResultFound\":\"Lo sentimos, no se encontraron resultados :(\",\"deliveryText\":\"Entrega\",\"cuisineText\":\"Cocina\",\"minOrderText\":\"La orden mínima\",\"fromText\":\"Desde\",\"loadMoreButton\":\"Carga más\"}");

/***/ }),

/***/ "xQB0":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Home\",\"nav.grocery\":\"Grocery\",\"nav.makeup\":\"Makeup\",\"nav.bags\":\"Bags\",\"nav.clothing\":\"Clothing\",\"nav.furniture\":\"Furniture\",\"nav.book\":\"Book\",\"nav.medicine\":\"Medicine\",\"nav.foods\":\"Foods\",\"nav.terms_and_services\":\"Terms and Services\",\"nav.privacy_policy\":\"Privacy Policy\",\"nav.offer\":\"Offer\",\"nav.help\":\"Need Help\",\"nav.profile\":\"Profile\",\"nav.checkout\":\"Checkout\",\"nav.order_received\":\"Order Invoice\",\"nav.logout\":\"Logout\",\"nav.login\":\"Login\",\"nav.order\":\"Your Order\",\"nav.account_settings\":\"Your Account Settings\",\"groceriesTitle\":\"Groceries Delivered in {minute} Minute\",\"groceriesSubTitle\":\"Get your healthy foods & snacks delivered at your doorsteps all day everyday\",\"makeupTitle\":\"Branded & imported makeups\",\"makeupSubTitle\":\"Easiest and cheapest way to get your branded & imported makeups\",\"bagsTitle\":\"Exclusive Branded bags\",\"bagsSubTitle\":\"Get your exclusive & branded bags delivered to you in no time\",\"womenClothsTitle\":\"Shop your designer dresses\",\"womenClothsSubTitle\":\"Ready to wear dresses tailored for you from online. Hurry up while stock lasts.\",\"furnitureTitle\":\"Exclusive furniture on cheap price\",\"furnitureSubTitle\":\"Make your house a home with our wide collection of beautiful furniture\",\"booksTitle\":\"Your own books store\",\"booksSubTitle\":\"Get your favorite books from our wide range of books.\",\"medicineTitle\":\"Your medication, delivered\",\"medicineSubTitle\":\"Say goodbye to all your healthcare worries with  us\",\"foodsTitle\":\"You order we deliver\",\"foodsSubTitle\":\"Get your favorite foods in less than an hour\",\"alternativeCheckout\":\"Checkout Alternative\",\"termAndConditionHelper\":\"By making this purchase you agree to our\",\"termAndCondition\":\"terms and conditions.\",\"removeCoupon\":\"(Remove)\",\"reqMedicine\":\"Request Medicine\",\"submitRequest\":\"Submit Request\",\"noteHead\":\"Note\",\"noteDescription\":\"Product availability & price will confirm over phone. Delivery Charge inside the city ${inside} & outside the city ${outside}.\",\"rmMedicineName\":\"Medicine Name\",\"rmMedicineQuantity\":\"Quantity\",\"rmPrescripttionUpload\":\"Upload your prescription\",\"rmUploadText\":\"Drag/Upload your file here.\",\"cartTitle\":\"Your Order\",\"discountText\":\"Discount\",\"vatText\":\"Incl. VAT\",\"searchPlaceholder\":\"Search your products from here\",\"searchButtonText\":\"Search\",\"mobileSignInButtonText\":\"Join In\",\"cartItems\":\"Items\",\"cartItem\":\"Item\",\"addCartButton\":\"Cart\",\"addToCartButton\":\"Add to cart\",\"backBtn\":\"Back\",\"noProductFound\":\"No products found!\",\"specialCode\":\"Do you have a voucher?\",\"couponApplied\":\"Coupon Applied\",\"couponPlaceholder\":\"Enter voucher code here\",\"sidebarYourOrder\":\"Order\",\"profilePageTitle\":\"Your Profile\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"Save\",\"contactNumberTitle\":\"Contact Info\",\"addContactBtn\":\"Add Contact\",\"deliveryAddressTitle\":\"Delivery Address\",\"addAddressBtn\":\"Add Address\",\"addNew\":\"Add New\",\"paymentCardTitle\":\"Payments Card\",\"addCardBtn\":\"Add Card\",\"savedCardsId\":\"Saved Cards\",\"savedContactId\":\"Save Contact\",\"savedAddressId\":\"Save Address\",\"siteFooter\":\"Pickbazar is a product by\",\"subTotal\":\"Sub Total\",\"itemsText\":\"items\",\"shippingFeeText\":\"Shipping Fee\",\"voucherText\":\"Voucher\",\"voucherApply\":\"Apply\",\"couponError\":\"Invalid Coupon\",\"totalText\":\"Total\",\"deliverySchedule\":\"Delivery Schedule\",\"checkoutDeliveryAddress\":\"Delivery Address\",\"contactNumberText\":\"Contact Number\",\"selectPaymentText\":\"Payment Option\",\"processCheckout\":\"Proceed to Checkout\",\"backHomeBtn\":\"Back to Home\",\"orderReceivedText\":\"Order Received\",\"orderReceivedSuccess\":\"Thank you. Your order has been received\",\"orderNumberText\":\"Order Number\",\"orderDateText\":\"Date\",\"paymentMethodText\":\"Payment Method\",\"paymentMethodName\":\"Cash on delivery\",\"orderDetailsText\":\"Order Details\",\"totalItemText\":\"Total Item\",\"orderTimeText\":\"Order Time\",\"deliveryTimeText\":\"Delivery Time\",\"deliveryLocationText\":\"Delivery Location\",\"totalAmountText\":\"Total Amount\",\"loadMoreBtn\":\"Load More\",\"welcomeBack\":\"Welcome Back\",\"loginText\":\"Login with your email & password\",\"emailAddressPlaceholder\":\"demo@demo.com\",\"passwordPlaceholder\":\"demo\",\"continueBtn\":\"Continue\",\"orText\":\"or\",\"continueFacebookBtn\":\"Continue with Facebook\",\"continueGoogleBtn\":\"Continue with Google\",\"dontHaveAccount\":\"Don't have any account?\",\"signUpBtnText\":\"Sign Up\",\"forgotPasswordText\":\"Forgot your password?\",\"resetText\":\"Reset It\",\"signUpText\":\"By signing up, you agree to Pickbazar's\",\"termsConditionText\":\"Terms & Condtion\",\"alreadyHaveAccount\":\"Already have an account?\",\"backToSign\":\"Back to\",\"loginBtnText\":\"Login\",\"forgotPassText\":\"Forgot Password\",\"sendResetPassText\":\"We'll send you a link to reset your password\",\"resetPasswordBtn\":\"Reset Password\",\"intlCopyBtnId\":\"Copy\",\"intlCopySuccessId\":\"Copied\",\"locationModalheading\":\"Select Your Location\",\"locationModalSubHeading\":\"You have to select your location for deliver service perpous\",\"locationModalFooter\":\"Free Delivery For 1st Order\",\"saleText\":\"Sale\",\"offText\":\"Off\",\"faqNo1Title\":\"How to contact with Customer Service?\",\"faqNo1Desc\":\"Our Customer Experience Team is available {number1} days a week and we offer {number2} ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.\",\"faqNo2Title\":\"App installation failed, how to update system information?\",\"faqNo2Desc\":\"Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum\",\"faqNo3Title\":\"Website response taking time, how to improve?\",\"faqNo3Desc\":\"At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .\",\"faqNo4Title\":\"How do I create a account?\",\"faqNo4Desc\":\"If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes.\",\"intlOrderDetailsDiscount\":\"Discount\",\"intlOrderDetailsDelivery\":\"Delivery Fee\",\"intlOrderPageTitle\":\"My Order\",\"intlNoOrderFound\":\"No order found\",\"intlOrderPageDetails\":\"Order Details\",\"intlTableColTitle2\":\"Quantity\",\"intlTableColTitle3\":\"Price\",\"intlOrderCardTitleText\":\"Order\",\"intlOrderCardDateText\":\"Order Date\",\"intlOrderCardTotalText\":\"Total Price\",\"joinButton\":\"Join\",\"ar\":\"Arabic\",\"zh\":\"Chinese\",\"en\":\"English\",\"de\":\"German\",\"he\":\"Hebrew\",\"es\":\"Spanish\",\"intlTextBy\":\"by\",\"intlRelatedItems\":\"Related Items\",\"readFreeSampleButton\":\"Read Free Sample\",\"bookSectionTitle\":\"About The Book\",\"authorSectionTitle\":\"About The Author\",\"defaultIntlId\":\"Please add a Placeholder from language file\",\"noResultFound\":\"Sorry, No result found :(\",\"deliveryText\":\"Delivery\",\"cuisineText\":\"Cuisine\",\"minOrderText\":\"Min Order\",\"fromText\":\"From\",\"form.email\":\"Enter Email\",\"form.note\":\"Enter Note if you have\",\"form.name\":\"Enter Name\",\"form.phone\":\"Enter Phone\",\"form.address\":\"Enter Address\",\"form.house\":\"Enter House Number\",\"form.aprt\":\"Enter Apartment Number\",\"form.bell\":\"Enter Bell Number\",\"processWhatsapp\":\"Your order is ready, click to send it to restaurant Whatsapp account\"}");

/***/ }),

/***/ "xZKy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useAppState; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useAppDispatch; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AppProvider; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/contexts/create-context.tsx


function useCreateContext(reducer, initialState) {
  const defaultDispatch = () => initialState;

  const stateCtx = /*#__PURE__*/Object(external_react_["createContext"])(initialState);
  const dispatchCtx = /*#__PURE__*/Object(external_react_["createContext"])(defaultDispatch);

  function useStateCtx(property) {
    const state = Object(external_react_["useContext"])(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return Object(external_react_["useContext"])(dispatchCtx);
  }

  function Provider(props) {
    const [state, dispatch] = external_react_default.a.useReducer(reducer, initialState);
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(dispatchCtx.Provider, {
      value: dispatch,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(stateCtx.Provider, {
        value: state,
        children: props.children
      })
    });
  }

  return [useStateCtx, useDispatchCtx, Provider];
} // const [useTextState, useTextDispatch, TextProvider] = useCreateContext(initialState, reducer);
// export const TextContext = ctx;
// export function App() {
//   return (
//     <TextProvider>
//       <Component />
//     </TextProvider>
//   )
// }
// export function Component() {
//   const state = useTextState('state')
//   const dispatch = useTextDispatch()
// const increment = useCallback(() => dispatch({ type: 'increment' }), [dispatch]);
//   return (
//     <div>
//       {state}
//       <button onClick={increment}>Toggle</button>
//     </div>
//   )
// }
// CONCATENATED MODULE: ./src/contexts/app/app.reducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const app_reducer_initialState = {
  searchTerm: '',
  isSticky: false,
  isSidebarSticky: true,
  isDrawerOpen: false,
  config: undefined
};
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchTerm: action.payload
      });

    case 'SET_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: true
      });

    case 'REMOVE_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: false
      });

    case 'SET_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: true
      });

    case 'REMOVE_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: false
      });

    case 'TOGGLE_DRAWER':
      return _objectSpread(_objectSpread({}, state), {}, {
        isDrawerOpen: !state.isDrawerOpen
      });

    default:
      {
        throw new Error(`Unsupported action type at App Reducer`);
      }
  }
}
// CONCATENATED MODULE: ./src/contexts/app/app.provider.ts


const [app_provider_state, app_provider_dispatch, provider] = useCreateContext(appReducer, app_reducer_initialState);
const useAppState = app_provider_state;
const useAppDispatch = app_provider_dispatch;
const AppProvider = provider;

/***/ }),

/***/ "xoY3":
/***/ (function(module, exports) {

module.exports = require("stylis-plugin-rtl");

/***/ }),

/***/ "yRnI":
/***/ (function(module, exports) {



/***/ }),

/***/ "z/Or":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Home\",\"nav.grocery\":\"Grocery\",\"nav.makeup\":\"Makeup\",\"nav.bags\":\"Bags\",\"nav.clothing\":\"Clothing\",\"nav.furniture\":\"Furniture\",\"nav.book\":\"Book\",\"nav.medicine\":\"Medicine\",\"nav.foods\":\"Foods\",\"nav.terms_and_services\":\"Terms and Services\",\"nav.privacy_policy\":\"Privacy Policy\",\"nav.offer\":\"Offer\",\"nav.help\":\"Need Help\",\"nav.profile\":\"Profile\",\"nav.checkout\":\"Checkout\",\"nav.order_received\":\"Order Invoice\",\"nav.logout\":\"Logout\",\"nav.login\":\"Login\",\"nav.order\":\"Your Order\",\"nav.account_settings\":\"Your Account Settings\",\"groceriesTitle\":\"Groceries Delivered in {minute} Minute\",\"groceriesSubTitle\":\"Get your healthy foods & snacks delivered at your doorsteps all day everyday\",\"makeupTitle\":\"Branded & imported makeups\",\"makeupSubTitle\":\"Easiest and cheapest way to get your branded & imported makeups\",\"bagsTitle\":\"Exclusive Branded bags\",\"bagsSubTitle\":\"Get your exclusive & branded bags delivered to you in no time\",\"womenClothsTitle\":\"Shop your designer dresses\",\"womenClothsSubTitle\":\"Ready to wear dresses tailored for you from online. Hurry up while stock lasts.\",\"furnitureTitle\":\"Exclusive furniture on cheap price\",\"furnitureSubTitle\":\"Make your house a home with our wide collection of beautiful furniture\",\"booksTitle\":\"Your own books store\",\"booksSubTitle\":\"Get your favorite books from our wide range of books.\",\"medicineTitle\":\"Your medication, delivered\",\"medicineSubTitle\":\"Say goodbye to all your healthcare worries with  us\",\"foodsTitle\":\"You order we deliver\",\"foodsSubTitle\":\"Get your favorite foods in less than an hour\",\"alternativeCheckout\":\"Checkout Alternative\",\"termAndConditionHelper\":\"By making this purchase you agree to our\",\"termAndCondition\":\"terms and conditions.\",\"removeCoupon\":\"(Remove)\",\"reqMedicine\":\"Request Medicine\",\"submitRequest\":\"Submit Request\",\"noteHead\":\"Note\",\"noteDescription\":\"Product availability & price will confirm over phone. Delivery Charge inside the city ${inside} & outside the city ${outside}.\",\"rmMedicineName\":\"Medicine Name\",\"rmMedicineQuantity\":\"Quantity\",\"rmPrescripttionUpload\":\"Upload your prescription\",\"rmUploadText\":\"Drag/Upload your file here.\",\"cartTitle\":\"Your Order\",\"discountText\":\"Discount\",\"vatText\":\"Incl. VAT\",\"searchPlaceholder\":\"Search your products from here\",\"searchButtonText\":\"Search\",\"mobileSignInButtonText\":\"Join In\",\"cartItems\":\"Items\",\"cartItem\":\"Item\",\"addCartButton\":\"Cart\",\"addToCartButton\":\"Add to cart\",\"backBtn\":\"Back\",\"noProductFound\":\"No products found\",\"specialCode\":\"Do you have a voucher?\",\"couponApplied\":\"Coupon Applied\",\"couponPlaceholder\":\"Enter voucher code here\",\"sidebarYourOrder\":\"Order\",\"profilePageTitle\":\"Your Profile\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"Save\",\"contactNumberTitle\":\"Contact Info\",\"addContactBtn\":\"Add Contact\",\"deliveryAddressTitle\":\"Delivery Address\",\"addAddressBtn\":\"Add Address\",\"addNew\":\"Add New\",\"paymentCardTitle\":\"Payments Card\",\"addCardBtn\":\"Add Card\",\"savedCardsId\":\"Saved Cards\",\"savedContactId\":\"Save Contact\",\"savedAddressId\":\"Save Address\",\"siteFooter\":\"Pickbazar is a product by\",\"subTotal\":\"Sub Total\",\"itemsText\":\"items\",\"shippingFeeText\":\"Shipping Fee\",\"voucherText\":\"Voucher\",\"voucherApply\":\"Apply\",\"couponError\":\"Invalid Coupon\",\"totalText\":\"Total\",\"deliverySchedule\":\"Delivery Schedule\",\"checkoutDeliveryAddress\":\"Delivery Address\",\"contactNumberText\":\"Contact Number\",\"selectPaymentText\":\"Payment Option\",\"processCheckout\":\"Proceed to Checkout\",\"backHomeBtn\":\"Back to Home\",\"orderReceivedText\":\"Order Received\",\"orderReceivedSuccess\":\"Thank you. Your order has been received\",\"orderNumberText\":\"Order Number\",\"orderDateText\":\"Date\",\"paymentMethodText\":\"Payment Method\",\"paymentMethodName\":\"Cash on delivery\",\"orderDetailsText\":\"Order Details\",\"totalItemText\":\"Total Item\",\"orderTimeText\":\"Order Time\",\"deliveryTimeText\":\"Delivery Time\",\"deliveryLocationText\":\"Delivery Location\",\"totalAmountText\":\"Total Amount\",\"loadMoreBtn\":\"Load More\",\"welcomeBack\":\"Welcome Back\",\"loginText\":\"Login with your email & password\",\"emailAddressPlaceholder\":\"demo@demo.com\",\"passwordPlaceholder\":\"demo\",\"continueBtn\":\"Continue\",\"orText\":\"or\",\"continueFacebookBtn\":\"Continue with Facebook\",\"continueGoogleBtn\":\"Continue with Google\",\"dontHaveAccount\":\"Don't have any account?\",\"signUpBtnText\":\"Sign Up\",\"forgotPasswordText\":\"Forgot your password?\",\"resetText\":\"Reset It\",\"signUpText\":\"By signing up, you agree to Pickbazar's\",\"termsConditionText\":\"Terms & Condtion\",\"alreadyHaveAccount\":\"Already have an account?\",\"backToSign\":\"Back to\",\"loginBtnText\":\"Login\",\"forgotPassText\":\"Forgot Password\",\"sendResetPassText\":\"We'll send you a link to reset your password\",\"resetPasswordBtn\":\"Reset Password\",\"intlCopyBtnId\":\"Copy\",\"intlCopySuccessId\":\"Copied\",\"locationModalheading\":\"Select Your Location\",\"locationModalSubHeading\":\"You have to select your location for deliver service perpous\",\"locationModalFooter\":\"Free Delivery For 1st Order\",\"saleText\":\"Sale\",\"offText\":\"Off\",\"faqNo1Title\":\"How to contact with Customer Service?\",\"faqNo1Desc\":\"Our Customer Experience Team is available {number1} days a week and we offer {number2} ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.\",\"faqNo2Title\":\"App installation failed, how to update system information?\",\"faqNo2Desc\":\"Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum\",\"faqNo3Title\":\"Website response taking time, how to improve?\",\"faqNo3Desc\":\"At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .\",\"faqNo4Title\":\"How do I create a account?\",\"faqNo4Desc\":\"If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes.\",\"intlOrderDetailsDiscount\":\"Discount\",\"intlOrderDetailsDelivery\":\"Delivery Fee\",\"intlOrderPageTitle\":\"My Order\",\"intlNoOrderFound\":\"No order found\",\"intlOrderPageDetails\":\"Order Details\",\"intlTableColTitle2\":\"Quantity\",\"intlTableColTitle3\":\"Price\",\"intlOrderCardTitleText\":\"Order\",\"intlOrderCardDateText\":\"Order Date\",\"intlOrderCardTotalText\":\"Total Price\",\"joinButton\":\"Join\",\"ar\":\"Arabic\",\"zh\":\"Chinese\",\"en\":\"English\",\"de\":\"German\",\"he\":\"Hebrew\",\"es\":\"Spanish\",\"intlTextBy\":\"by\",\"intlRelatedItems\":\"Related Items\",\"readFreeSampleButton\":\"Read Free Sample\",\"bookSectionTitle\":\"About The Book\",\"authorSectionTitle\":\"About The Author\",\"defaultIntlId\":\"Please add a Placeholder from language file\",\"noResultFound\":\"Sorry, No result found :(\",\"deliveryText\":\"Delivery\",\"cuisineText\":\"Cuisine\",\"minOrderText\":\"Min Order\",\"fromText\":\"From\",\"form.email\":\"Enter Email\",\"form.note\":\"Enter Note if you have\",\"form.name\":\"Enter Name\",\"form.phone\":\"Enter Phone\",\"form.address\":\"Enter Address\",\"form.house\":\"Enter House Number\",\"form.aprt\":\"Enter Apartment Number\",\"form.bell\":\"Enter Bell Number\",\"processWhatsapp\":\"Your order is ready, click to send it to restaurant Whatsapp account\"}");

/***/ }),

/***/ "z2Xg":
/***/ (function(module, exports) {



/***/ })

/******/ });