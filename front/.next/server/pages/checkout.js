module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6A1X");


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

/***/ "6A1X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: ./src/components/scrollbar/scrollbar.tsx
var scrollbar = __webpack_require__("ewwY");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/features/checkouts/checkout-two/checkout-two.style.tsx


const CheckoutWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutWrapper",
  componentId: "sc-14n4o2h-0"
})(["background-color:", ";width:100%;display:flex;padding:130px 60px 60px;position:relative;@media (max-width:1100px){padding-left:0;padding-right:0;}@media (max-width:990px){padding-top:60px;}"], Object(theme_get_["themeGet"])('colors.body.bgCheckout', '#f7f7f7'));
const CheckoutContainer = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutContainer",
  componentId: "sc-14n4o2h-1"
})(["width:100%;display:flex;counter-reset:section-counter;@media (min-width:990px){width:970px;margin-left:auto;margin-right:auto;}@media (max-width:767px){flex-direction:column;}"]);
const CheckoutInformation = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutInformation",
  componentId: "sc-14n4o2h-2"
})(["position:relative;width:100%;overflow:hidden;display:flex;flex-direction:column;margin-right:20px;padding:20px;@media (max-width:990px){margin-right:10px;}@media (max-width:767px){order:1;margin-right:0;}"]);
const Heading = external_styled_components_default.a.h3.withConfig({
  displayName: "checkout-twostyle__Heading",
  componentId: "sc-14n4o2h-3"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.4;margin-bottom:35px;position:relative;width:calc(100% - 100px);display:flex;align-items:center;@media (max-width:600px){font-size:", "px;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.md', '19'));
const InformationBox = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__InformationBox",
  componentId: "sc-14n4o2h-4"
})(["background-color:", ";padding:30px;padding-bottom:20px;position:relative;margin-bottom:20px;box-shadow:0 2px 16px 0 rgba(0,0,0,0.08);@media (max-width:767px){padding:20px;}"], Object(theme_get_["themeGet"])('colors.body.bgItem', '#ffffff'));
const TotalProduct = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__TotalProduct",
  componentId: "sc-14n4o2h-5"
})(["flex-grow:1;text-align:right;padding-right:60px;"]);
const TotalPrice = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__TotalPrice",
  componentId: "sc-14n4o2h-6"
})(["flex-grow:1;text-align:left;padding-left:60px;"]);
const DeliverySchedule = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__DeliverySchedule",
  componentId: "sc-14n4o2h-7"
})([".radioGroup{justify-content:space-between;> label{margin-right:0;flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);padding:11px 15px;@media (max-width:900px) and (min-width:768px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;}}}"]);
const CheckoutSubmit = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutSubmit",
  componentId: "sc-14n4o2h-8"
})(["margin-top:25px;.reusecore__button{width:100%;}"]);
const InfoText = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__InfoText",
  componentId: "sc-14n4o2h-9"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;margin-top:15px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const CouponBoxWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CouponBoxWrapper",
  componentId: "sc-14n4o2h-10"
})(["position:relative;display:flex;flex-direction:column;align-items:flex-start;width:100%;margin-top:50px;.couponCodeText{margin-right:auto;}"]);
const CouponCode = external_styled_components_default.a.p.withConfig({
  displayName: "checkout-twostyle__CouponCode",
  componentId: "sc-14n4o2h-11"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";width:100%;display:flex;justify-content:flex-start;align-items:baseline;span{font-weight:", ";color:", ";margin-left:10px;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const RemoveCoupon = external_styled_components_default.a.button.withConfig({
  displayName: "checkout-twostyle__RemoveCoupon",
  componentId: "sc-14n4o2h-12"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";width:auto;height:auto;display:inline-block;border:0;outline:0;box-shadow:none;background-color:transparent;padding:0;cursor:pointer;margin-left:5px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
const CouponInputBox = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CouponInputBox",
  componentId: "sc-14n4o2h-13"
})(["width:100%;display:flex;align-items:center;@media (max-width:600px){.reusecore__button{padding-right:30px !important;flex-shrink:0;}}"]);
const HaveCoupon = external_styled_components_default.a.button.withConfig({
  displayName: "checkout-twostyle__HaveCoupon",
  componentId: "sc-14n4o2h-14"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";width:auto;height:auto;display:inline-block;border:0;outline:0;box-shadow:none;background-color:transparent;padding:0;cursor:pointer;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const ErrorMsg = external_styled_components_default()('span').withConfig({
  displayName: "checkout-twostyle__ErrorMsg",
  componentId: "sc-14n4o2h-15"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-top:10px;display:flex;margin-left:20px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.hover', '#FF282F'));
const TermConditionText = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__TermConditionText",
  componentId: "sc-14n4o2h-16"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.5;margin-top:30px;display:block;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.smm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const TermConditionLink = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__TermConditionLink",
  componentId: "sc-14n4o2h-17"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-left:5px;cursor:pointer;line-height:1.5;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.smm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
const CartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CartWrapper",
  componentId: "sc-14n4o2h-18"
})(["width:270px;flex-shrink:0;padding-top:20px;@media (min-width:768px) and (max-width:1200px){width:260px;}@media (max-width:767px){order:0;width:100%;padding-left:15px;padding-right:15px;padding-top:40px;padding-bottom:30px;position:relative !important;}.checkout-scrollbar{height:100%;max-height:390px;padding-right:15px;}"]);
const OrderInfo = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__OrderInfo",
  componentId: "sc-14n4o2h-19"
})(["width:100%;display:flex;flex-direction:column;@media (min-width:768px) and (max-width:990px){padding-right:15px;}"]);
const Title = external_styled_components_default.a.h3.withConfig({
  displayName: "checkout-twostyle__Title",
  componentId: "sc-14n4o2h-20"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-align:center;margin-bottom:40px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const ItemsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__ItemsWrapper",
  componentId: "sc-14n4o2h-21"
})(["display:flex;flex-direction:column;padding-left:15px;"]);
const CalculationWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CalculationWrapper",
  componentId: "sc-14n4o2h-22"
})(["border-top:1px solid ", ";padding:20px 15px 0;margin-top:20px;"], Object(theme_get_["themeGet"])('colors.gray.700', '#e6e6e6'));
const Items = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__Items",
  componentId: "sc-14n4o2h-23"
})(["display:flex;width:100%;align-items:flex-start;justify-content:flex-start;margin-bottom:25px;&:last-child{margin-bottom:0;}"]);
const Quantity = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Quantity",
  componentId: "sc-14n4o2h-24"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const Multiplier = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Multiplier",
  componentId: "sc-14n4o2h-25"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";margin:0 12px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const ItemInfo = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__ItemInfo",
  componentId: "sc-14n4o2h-26"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";margin-right:15px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const Price = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Price",
  componentId: "sc-14n4o2h-27"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";margin-left:auto;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const TextWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__TextWrapper",
  componentId: "sc-14n4o2h-28"
})(["display:flex;width:100%;justify-content:space-between;margin-bottom:10px;"]);
const Text = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Text",
  componentId: "sc-14n4o2h-29"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const Bold = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Bold",
  componentId: "sc-14n4o2h-30"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const Small = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Small",
  componentId: "sc-14n4o2h-31"
})(["font-family:", ";font-size:11px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'));
const NoProductMsg = external_styled_components_default.a.h3.withConfig({
  displayName: "checkout-twostyle__NoProductMsg",
  componentId: "sc-14n4o2h-32"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";line-height:1.2;position:relative;width:100%;display:flex;justify-content:center;margin-bottom:10px;align-items:center;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const NoProductImg = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__NoProductImg",
  componentId: "sc-14n4o2h-33"
})(["display:flex;align-items:center;justify-content:center;margin-bottom:20px;svg{width:140px;height:auto;}"]);
const WhatsappCheckout = external_styled_components_default.a.a.withConfig({
  displayName: "checkout-twostyle__WhatsappCheckout",
  componentId: "sc-14n4o2h-34"
})(["font-family:", ";font-size:", "px;font-weight:", ";background-color:", ";color:", ";font-weight:bold;width:auto;height:auto;display:inline-block;border:0;outline:0;box-shadow:none;padding:15px;cursor:pointer;border-radius:10px;display:flex;justify-content:center;fontWeight:'bold',"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.popUpColor', '#009e7f'));
/* harmony default export */ var checkout_two_style = (CheckoutWrapper);
// EXTERNAL MODULE: ./src/assets/icons/NoCartBag.tsx
var NoCartBag = __webpack_require__("MXV/");

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// CONCATENATED MODULE: ./src/contexts/profile/profile.context.tsx

const ProfileContext = /*#__PURE__*/Object(external_react_["createContext"])({});
// EXTERNAL MODULE: ./src/contexts/config/config.context.tsx
var config_context = __webpack_require__("RjkI");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
var use_cart = __webpack_require__("tFEG");

// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx
var language_provider = __webpack_require__("uiyz");

// CONCATENATED MODULE: ./src/utils/useWindowSize.ts

const useWindowSize = () => {
  const isClient =  false && false;

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const {
    0: windowSize,
    1: setWindowSize
  } = Object(external_react_["useState"])(getSize);
  Object(external_react_["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};
// EXTERNAL MODULE: ./src/contexts/language/language.utils.ts + 1 modules
var language_utils = __webpack_require__("KVly");

// CONCATENATED MODULE: ./src/data/use-order.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function createOrder({
  email,
  name,
  phone,
  address,
  dist,
  aprt,
  house,
  lat,
  lng,
  total,
  note,
  items,
  bell,
  config
}) {
  var _config$qrcode, _config$restaurant, _config$qrcode2, _config$restaurant2;

  let body = {
    indoor: config === null || config === void 0 ? void 0 : (_config$qrcode = config.qrcode) === null || _config$qrcode === void 0 ? void 0 : _config$qrcode.indoor,
    restID: config === null || config === void 0 ? void 0 : (_config$restaurant = config.restaurant) === null || _config$restaurant === void 0 ? void 0 : _config$restaurant.id,
    total,
    email,
    note,
    items: items.map(product => `${product.id}@${Object(language_utils["a" /* getCorrectTranslation */])(config, product, "Title")}@${product.quantity}`).join("#")
  };

  if (config !== null && config !== void 0 && (_config$qrcode2 = config.qrcode) !== null && _config$qrcode2 !== void 0 && _config$qrcode2.indoor || !(config !== null && config !== void 0 && (_config$restaurant2 = config.restaurant) !== null && _config$restaurant2 !== void 0 && _config$restaurant2.checkout)) {
    var _config$qrcode3, _config$qrcode4, _config$qrcode5;

    body = _objectSpread(_objectSpread({}, body), {}, {
      name: config === null || config === void 0 ? void 0 : (_config$qrcode3 = config.qrcode) === null || _config$qrcode3 === void 0 ? void 0 : _config$qrcode3.title,
      phone: config === null || config === void 0 ? void 0 : (_config$qrcode4 = config.qrcode) === null || _config$qrcode4 === void 0 ? void 0 : _config$qrcode4.whatsapp,
      address: config === null || config === void 0 ? void 0 : (_config$qrcode5 = config.qrcode) === null || _config$qrcode5 === void 0 ? void 0 : _config$qrcode5.title,
      dist: "N",
      aprt: "N",
      house: "N",
      lat: 0,
      lng: 0
    });
  } else {
    body = _objectSpread(_objectSpread({}, body), {}, {
      name,
      phone,
      address,
      dist,
      aprt,
      house,
      bell,
      lat,
      lng
    });
  }

  return fetch(`${"https://whatsappneed.com/api/v1"}/order/create`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  });
}
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./src/components/forms/input.tsx
var input = __webpack_require__("VnWI");

// CONCATENATED MODULE: ./src/components/forms/text-field.tsx



function text_field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function text_field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { text_field_ownKeys(Object(source), true).forEach(function (key) { text_field_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { text_field_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function text_field_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "text-field__FieldWrapper",
  componentId: "sc-187fotg-0"
})(["textarea{height:auto;min-height:171px;padding-top:15px;resize:none;background-color:", ";border-color:", ";}"], Object(theme_get_["themeGet"])('colors.inputCheckout', '#FF282F'), Object(theme_get_["themeGet"])('colors.inputBorderCheckout', '#FF282F'));
const InputFeedback = external_styled_components_default.a.span.withConfig({
  displayName: "text-field__InputFeedback",
  componentId: "sc-187fotg-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-top:10px;display:flex;justify-content:flex-end;"], Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.hover', '#FF282F')); // const Input = styled.input`
//   width: 100%;
//   height: 54px;
//   border-radius: 6px;
//   font-family: ${themeGet('fontFamily.0', 'Lato, sans-serif')};
//   border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
//   color: ${themeGet('colors.text.bold', '#0D1136')};
//   font-size: ${themeGet('fontSizes.base', '15')}px;
//   font-weight: ${themeGet('fontWeights.regular', '400')};
//   line-height: 19px;
//   padding: 0 18px;
//   box-sizing: border-box;
//   transition: border-color 0.25s ease;
//   &:hover,
//   &:focus {
//     outline: 0;
//   }
//   &:focus {
//     border-color: ${themeGet('colors.primary', '#009e7f')};
//   }
//   &::placeholder {
//     color: ${themeGet('colors.text.regular', '#77798C')};
//   }
// `;

const TextField = (_ref) => {
  let {
    type,
    id,
    label,
    error,
    value,
    onChange,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "id", "label", "error", "value", "onChange", "className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FieldWrapper, {
    children: [label && /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      className: "label",
      htmlFor: id,
      children: label
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* Input */], text_field_objectSpread({
      id: id,
      type: type,
      value: value,
      onChange: onChange
    }, props)), error && /*#__PURE__*/Object(jsx_runtime_["jsx"])(InputFeedback, {
      children: error
    })]
  });
};

/* harmony default export */ var text_field = (TextField);
// CONCATENATED MODULE: ./src/components/address-card/address-card.style.tsx


const address_card_style_FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "address-cardstyle__FieldWrapper",
  componentId: "sc-1qj3rfj-0"
})(["width:100%;display:flex;flex-direction:column;margin-bottom:15px;"]);
const address_card_style_Heading = external_styled_components_default.a.div.withConfig({
  displayName: "address-cardstyle__Heading",
  componentId: "sc-1qj3rfj-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;"], Object(theme_get_["themeGet"])('fontFamily.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.md', '19'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const MapContainer = external_styled_components_default.a.div.withConfig({
  displayName: "address-cardstyle__MapContainer",
  componentId: "sc-1qj3rfj-2"
})(["height:350px;width:100%;margin-bottom:15px;.map{height:100%;}.pointIcon{position:absolute;width:30px;top:50%;left:50%;margin-top:-20px;margin-left:-20px;}"]);

// EXTERNAL MODULE: external "@react-google-maps/api"
var api_ = __webpack_require__("Ww4b");

// EXTERNAL MODULE: ./src/assets/icons/map.png
var icons_map = __webpack_require__("FTrM");
var map_default = /*#__PURE__*/__webpack_require__.n(icons_map);

// EXTERNAL MODULE: external "react-geocode"
var external_react_geocode_ = __webpack_require__("GNgB");
var external_react_geocode_default = /*#__PURE__*/__webpack_require__.n(external_react_geocode_);

// CONCATENATED MODULE: ./src/components/address-card/address-card.tsx






 // import { Button } from 'components/button/button';

 // import { useMutation } from '@apollo/client';
// import { UPDATE_ADDRESS } from 'graphql/mutation/address';







external_react_geocode_default.a.setApiKey("AIzaSyANYVpeOpsNN4DqdKR4AKAyd03IQ3_9PvU"); // Shape of form values

// Wrap our form with the using withFormik HoC
const FormEnhancer = Object(external_formik_["withFormik"])({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      id: props.item.id || null,
      name: props.item.name || '',
      address: props.item.address || '',
      house: props.item.house || '',
      aprt: props.item.aprt || '',
      lat: props.item.lat || 41.113139,
      lng: props.item.lng || 29.020306,
      dist: props.item.dist,
      bell: props.item.bell
    };
  },
  validationSchema: external_yup_["object"]().shape({
    address: external_yup_["string"]().required('Address is required'),
    house: external_yup_["string"]().required('House is required'),
    aprt: external_yup_["string"]().required('Apartment is required')
  }),
  handleSubmit: values => {// do submitting things
  }
});

const UpdateAddress = props => {
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    isValid,
    item,
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleReset,
    isSubmitting,
    setFieldValue,
    config
  } = props;
  const addressValue = {
    id: values.id,
    type: 'primary',
    name: values.name,
    address: values.address,
    house: values.house,
    aprt: values.aprt,
    lat: values.lat,
    lng: values.lng,
    dist: values.dist,
    bell: values.bell
  };
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(ProfileContext); // const [addressMutation, { data }] = useMutation(UPDATE_ADDRESS);

  const {
    0: lat,
    1: setLat
  } = Object(external_react_["useState"])(addressValue.lat);
  const {
    0: lng,
    1: setLng
  } = Object(external_react_["useState"])(addressValue.lng);
  const {
    0: map,
    1: setMap
  } = Object(external_react_["useState"])(null);
  const {
    isLoaded
  } = Object(api_["useLoadScript"])({
    googleMapsApiKey: "AIzaSyANYVpeOpsNN4DqdKR4AKAyd03IQ3_9PvU"
  });
  Object(external_react_["useEffect"])(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {});
    }
  }, []);

  const onLoad = mapInstance => {
    setMap(mapInstance);
  };

  const renderMap = () => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(api_["GoogleMap"], {
      onLoad: onLoad,
      id: "map",
      center: {
        lat: lat,
        lng: lng
      },
      mapContainerClassName: "map",
      zoom: 14,
      onDragEnd: () => {
        setFieldValue("lat", lat);
        setFieldValue("lng", lng);
        external_react_geocode_default.a.fromLatLng(lat, lng).then(response => {
          const address = response.results[0];
          setFieldValue("address", address.formatted_address);
          if (address.address_components && address.address_components.length > 3) setFieldValue("dist", address.address_components[3].long_name);
        }, error => {
          console.error(error);
        });
      },
      onCenterChanged: () => {
        if (map) {
          setLat(map.getCenter().lat());
          setLng(map.getCenter().lng());
        }
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: map_default.a,
        alt: "map_pointer",
        className: "pointIcon"
      })
    });
  };

  const handleSubmit = async () => {
    if (isValid) {
      // const addressData = await addressMutation({
      //   variables: { addressInput: JSON.stringify(addressValue) },
      // });
      dispatch({
        type: 'ADD_OR_UPDATE_ADDRESS',
        payload: addressValue
      });
      Object(reuse_modal_["closeModal"])();
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_formik_["Form"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(address_card_style_Heading, {
      children: item && item.id ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
        id: "deliveryAddressTitle",
        defaultMessage: "Edit Address"
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
        id: "deliveryAddressTitle",
        defaultMessage: "Add New Address"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MapContainer, {
      children: isLoaded ? renderMap() : /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: "Loading the maps..."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(address_card_style_FieldWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(text_field, {
        id: "address",
        as: "textarea",
        placeholder: intl.formatMessage({
          id: 'form.address'
        }),
        value: values.address,
        onChange: handleChange,
        onBlur: handleBlur
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["ErrorMessage"], {
      name: "address",
      component: StyledError
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(address_card_style_FieldWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(text_field, {
        id: "house",
        type: "text",
        placeholder: intl.formatMessage({
          id: 'form.house'
        }),
        value: values.house,
        onChange: handleChange,
        onBlur: handleBlur
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["ErrorMessage"], {
      name: "house",
      component: StyledError
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(address_card_style_FieldWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(text_field, {
        id: "aprt",
        type: "text",
        placeholder: intl.formatMessage({
          id: 'form.aprt'
        }),
        error: touched.aprt && errors.aprt,
        value: values.aprt,
        onChange: handleChange,
        onBlur: handleBlur
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["ErrorMessage"], {
      name: "aprt",
      component: StyledError
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(address_card_style_FieldWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(text_field, {
        id: "bell",
        type: "text",
        placeholder: intl.formatMessage({
          id: 'form.bell'
        }),
        error: touched.bell && errors.bell,
        value: values.bell,
        onChange: handleChange,
        onBlur: handleBlur
      })
    })]
  });
};

const StyledError = external_styled_components_default.a.div.withConfig({
  displayName: "address-card__StyledError",
  componentId: "sc-1wte1lo-0"
})(["color:red;padding-bottom:10px;margin-top:-5px;"]);
/* harmony default export */ var address_card = (FormEnhancer(UpdateAddress));
// EXTERNAL MODULE: external "react-text-mask"
var external_react_text_mask_ = __webpack_require__("I6Cj");
var external_react_text_mask_default = /*#__PURE__*/__webpack_require__.n(external_react_text_mask_);

// CONCATENATED MODULE: ./src/components/contact-card/contact-card.style.tsx


const contact_card_style_FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "contact-cardstyle__FieldWrapper",
  componentId: "bmsad6-0"
})(["width:100%;display:flex;flex-direction:column;margin-bottom:15px;"]);
const contact_card_style_Heading = external_styled_components_default.a.div.withConfig({
  displayName: "contact-cardstyle__Heading",
  componentId: "bmsad6-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;"], Object(theme_get_["themeGet"])('fontFamily.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.md', '19'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));

// CONCATENATED MODULE: ./src/components/contact-card/contact-card.tsx



function contact_card_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function contact_card_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { contact_card_ownKeys(Object(source), true).forEach(function (key) { contact_card_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { contact_card_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function contact_card_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import { useMutation } from '@apollo/client';



// import { UPDATE_CONTACT } from 'graphql/mutation/contact';



const ContactValidationSchema = external_yup_["object"]().shape({
  number: external_yup_["string"]().required('Number is required'),
  name: external_yup_["string"]().required('Name is required')
});

const CreateOrUpdateContact = ({
  item,
  config
}) => {
  const intl = Object(external_react_intl_["useIntl"])();
  const initialValues = {// id: item.id || null,
    // type: item.type || 'primary',
    // number: item.number || '',
    // email: item.email || '',
    // name: item.name || '',
    // note: item.note || '',
  }; // const [addContactMutation] = useMutation(UPDATE_CONTACT);

  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(ProfileContext);

  const handleSubmit = async (values, {
    setSubmitting
  }) => {
    // await addContactMutation({
    //   variables: { contactInput: JSON.stringify(values) },
    // });
    console.log(values, 'formik values');
    dispatch({
      type: 'ADD_OR_UPDATE_CONTACT',
      payload: values
    });
    Object(reuse_modal_["closeModal"])();
    setSubmitting(false);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Formik"], {
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: ContactValidationSchema,
    children: ({
      values,
      handleChange,
      handleBlur,
      isSubmitting
    }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_formik_["Form"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(contact_card_style_Heading, {
        children: item && item.id ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
          id: "contactNumberText",
          defaultMessage: "Edit Contact"
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
          id: "contactNumberText",
          defaultMessage: "Add New Contact"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(contact_card_style_FieldWrapper, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_text_mask_default.a, {
          mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
          className: "form-control",
          placeholder: intl.formatMessage({
            id: 'form.phone'
          }),
          guide: false,
          id: "my-input-id",
          value: values.number,
          onChange: handleChange,
          onBlur: handleBlur,
          name: "number",
          render: (ref, props) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(PhoneStyledInput, contact_card_objectSpread({
            ref: ref
          }, props))
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["ErrorMessage"], {
        name: "number",
        component: contact_card_StyledError
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(contact_card_style_FieldWrapper, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(text_field, {
          id: "name",
          type: "text",
          placeholder: intl.formatMessage({
            id: 'form.name'
          }),
          value: values.name,
          onChange: handleChange,
          onBlur: handleBlur
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["ErrorMessage"], {
        name: "name",
        component: contact_card_StyledError
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(contact_card_style_FieldWrapper, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(text_field, {
          id: "email",
          type: "text",
          placeholder: intl.formatMessage({
            id: 'form.email'
          }),
          value: values.email,
          onChange: handleChange,
          onBlur: handleBlur
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(contact_card_style_FieldWrapper, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(text_field, {
          id: "note",
          as: "textarea",
          placeholder: intl.formatMessage({
            id: 'form.note'
          }),
          value: values.note,
          onChange: handleChange,
          onBlur: handleBlur
        })
      })]
    })
  });
};

/* harmony default export */ var contact_card = (CreateOrUpdateContact);
const StyledInput = external_styled_components_default.a.input.withConfig({
  displayName: "contact-card__StyledInput",
  componentId: "sc-1pk9751-0"
})(["width:100%;height:54px;border-radius:", ";font-family:", ";border:1px solid ", ";color:", ";font-size:16px;line-height:19px;font-weight:", ";padding:0 18px;box-sizing:border-box;transition:border-color 0.25s ease;&:hover,&:focus{outline:0;}&:focus{border-color:", ";}&::placeholder{color:", ";}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fonts.body', 'Lato, sans-serif'), Object(theme_get_["themeGet"])('colors.gray.700', '#e6e6e6'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'));
const PhoneStyledInput = external_styled_components_default.a.input.withConfig({
  displayName: "contact-card__PhoneStyledInput",
  componentId: "sc-1pk9751-1"
})(["width:100%;height:54px;border-radius:", ";font-family:", ";border:1px solid ", ";color:", ";background-color:", ";border-color:", ";font-size:16px;line-height:19px;font-weight:", ";padding:0 18px;box-sizing:border-box;transition:border-color 0.25s ease;direction:ltr !important;&:hover,&:focus{outline:0;}&:focus{border-color:", ";}&::placeholder{color:", ";}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fonts.body', 'Lato, sans-serif'), Object(theme_get_["themeGet"])('colors.gray.700', '#e6e6e6'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('colors.inputCheckout', '#0D1136'), Object(theme_get_["themeGet"])('colors.inputBorderCheckout', '#0D1136'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'));
const contact_card_StyledError = external_styled_components_default.a.div.withConfig({
  displayName: "contact-card__StyledError",
  componentId: "sc-1pk9751-2"
})(["color:red;padding-bottom:10px;margin-top:-5px;"]);
// CONCATENATED MODULE: ./src/features/checkouts/checkout-two/checkout-two.tsx
















 // import Coupon from 'features/coupon/coupon';
// import Schedules from 'features/schedule/schedule';
// import Contact from 'features/contact/contact';
// import Payment from 'features/payment/payment';
// import Address from 'features/address/address';




const OrderItem = ({
  product,
  config
}) => {
  var _config$restaurant, _config$restaurant$us;

  const {
    id,
    quantity,
    title,
    name,
    unit,
    price,
    salePrice
  } = product;
  const displayPrice = salePrice ? salePrice : price;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Items, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Quantity, {
      children: quantity
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Multiplier, {
      children: "x"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ItemInfo, {
      children: [name ? name : title, " ", unit ? `| ${unit}` : '']
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Price, {
      children: [config === null || config === void 0 ? void 0 : (_config$restaurant = config.restaurant) === null || _config$restaurant === void 0 ? void 0 : (_config$restaurant$us = _config$restaurant.userConfig) === null || _config$restaurant$us === void 0 ? void 0 : _config$restaurant$us.currency, (displayPrice * quantity).toFixed(2)]
    })]
  }, id);
};

const CheckoutWithSidebar = ({
  token,
  deviceType
}) => {
  var _config$qrcode3, _config$restaurant3, _config$qrcode4, _config$restaurant4, _config$qrcode5, _config$restaurant5, _config$restaurant5$u, _config$restaurant6, _config$restaurant6$u, _config$restaurant7, _config$restaurant7$u, _config$restaurant8, _config$restaurant8$u;

  //const [hasCoupon, setHasCoupon] = useState(false);
  const {
    state
  } = Object(external_react_["useContext"])(ProfileContext);
  const {
    config
  } = Object(external_react_["useContext"])(config_context["a" /* ConfigContext */]);
  const {
    isRtl
  } = Object(language_provider["b" /* useLocale */])();
  const {
    items,
    removeCoupon,
    coupon,
    clearCart,
    cartItemsCount,
    calculatePrice,
    calculateDiscount,
    calculateSubTotalPrice,
    isRestaurant,
    toggleRestaurant
  } = Object(use_cart["b" /* useCart */])();
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: isValid,
    1: setIsValid
  } = Object(external_react_["useState"])(false);
  const {
    0: createOrderResult,
    1: setCreateOrderResult
  } = Object(external_react_["useState"])(undefined);
  const {
    address,
    contact,
    card,
    schedules
  } = state;
  const size = useWindowSize();

  const handleSubmit = async () => {
    var _config$qrcode, _config$restaurant2;

    setLoading(true);

    if (isValid || config !== null && config !== void 0 && (_config$qrcode = config.qrcode) !== null && _config$qrcode !== void 0 && _config$qrcode.indoor || !(config !== null && config !== void 0 && (_config$restaurant2 = config.restaurant) !== null && _config$restaurant2 !== void 0 && _config$restaurant2.checkout)) {
      createOrder({
        config: config,
        name: contact.length > 0 ? contact[0].name : "",
        note: contact.length > 0 ? contact[0].note : "",
        email: contact.length > 0 ? contact[0].email : "",
        phone: contact.length > 0 ? contact[0].number : "",
        address: address.length > 0 ? address[0].address : "",
        dist: address.length > 0 ? address[0].dist : "",
        aprt: address.length > 0 ? address[0].aprt : "",
        bell: address.length > 0 ? address[0].bell : "",
        house: address.length > 0 ? address[0].house : "",
        lat: address.length > 0 ? address[0].lat : "",
        lng: address.length > 0 ? address[0].lng : "",
        total: calculatePrice(),
        items: items
      }).then(response => {
        return response.text();
      }).then(text => {
        setCreateOrderResult(text);
        setLoading(false);
      }).catch(error => {
        console.log("An error returned when trying to create an order " + error.message);
        setLoading(false);
      });
    }
  };

  Object(external_react_["useEffect"])(() => {
    if (calculatePrice() > 0 && cartItemsCount > 0 && address.length && contact.length //&&
    //card.length &&
    //schedules.length
    ) {
        setIsValid(true);
      }
  }, [state]);
  Object(external_react_["useEffect"])(() => {
    return () => {
      if (isRestaurant) {
        toggleRestaurant();
        clearCart();
      }
    };
  }, []);

  const handleSendToWhatsApp = () => {
    //window.open(`https://wa.me/${config?.qrcode?.whatsapp}?text=${createOrderResult}`, '_blank');
    setTimeout(() => {
      var _config$qrcode2;

      clearCart();
      router_default.a.push(`/front?code=${config === null || config === void 0 ? void 0 : (_config$qrcode2 = config.qrcode) === null || _config$qrcode2 === void 0 ? void 0 : _config$qrcode2.qr}`);
    }, 4000);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(checkout_two_style, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CheckoutContainer, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(CheckoutInformation, {
          children: [!(config !== null && config !== void 0 && (_config$qrcode3 = config.qrcode) !== null && _config$qrcode3 !== void 0 && _config$qrcode3.indoor) && config !== null && config !== void 0 && (_config$restaurant3 = config.restaurant) !== null && _config$restaurant3 !== void 0 && _config$restaurant3.checkout ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InformationBox, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(address_card, {
              item: address,
              config: config
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(contact_card, {
              item: contact,
              config: config
            })]
          }) // <InformationBox>
          //   {/* <UpdateAddress/> */}
          //   <Address
          //     increment={true}
          //     flexStart={true}
          //     buttonProps={{
          //       variant: 'text',
          //       type: 'button',
          //       className: 'addButton',
          //     }}
          //     icon={true}
          //     config={config}
          //   />
          // </InformationBox>
          : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(InformationBox, {
            className: "paymentBox",
            style: {
              paddingBottom: 30
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CheckoutSubmit, {
              children: !createOrderResult ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(button_button["a" /* Button */], {
                type: "button",
                onClick: handleSubmit,
                disabled: !isValid && !(config !== null && config !== void 0 && (_config$qrcode4 = config.qrcode) !== null && _config$qrcode4 !== void 0 && _config$qrcode4.indoor) && (config === null || config === void 0 ? void 0 : (_config$restaurant4 = config.restaurant) === null || _config$restaurant4 === void 0 ? void 0 : _config$restaurant4.checkout),
                size: "big",
                loading: loading,
                style: {
                  width: '100%'
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
                  id: "processCheckout",
                  defaultMessage: "Proceed to Checkout"
                })
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(WhatsappCheckout, {
                href: `https://wa.me/${config === null || config === void 0 ? void 0 : (_config$qrcode5 = config.qrcode) === null || _config$qrcode5 === void 0 ? void 0 : _config$qrcode5.whatsapp}?text=${createOrderResult}`,
                target: "_blank",
                onClick: handleSendToWhatsApp,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
                  id: "processWhatsapp",
                  defaultMessage: "Order created successfully, click to send it to restaurant Whatsapp account"
                })
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CartWrapper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_stickynode_default.a, {
            enabled: size.width >= 768 ? true : false,
            top: 120,
            innerZ: 999,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(OrderInfo, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
                  id: "cartTitle",
                  defaultMessage: "Your Order"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(scrollbar["a" /* Scrollbar */], {
                className: "checkout-scrollbar",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ItemsWrapper, {
                  children: cartItemsCount > 0 ? items.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])(OrderItem, {
                    product: item,
                    config: config
                  }, `cartItem-${item.id}`)) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NoProductImg, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NoCartBag["a" /* NoCartBag */], {})
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NoProductMsg, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
                        id: "noProductFound",
                        defaultMessage: "No products found"
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CalculationWrapper, {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(TextWrapper, {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
                      id: "subTotal",
                      defaultMessage: "Subtotal"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Text, {
                    children: [config === null || config === void 0 ? void 0 : (_config$restaurant5 = config.restaurant) === null || _config$restaurant5 === void 0 ? void 0 : (_config$restaurant5$u = _config$restaurant5.userConfig) === null || _config$restaurant5$u === void 0 ? void 0 : _config$restaurant5$u.currency, calculateSubTotalPrice()]
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TextWrapper, {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
                      id: "intlOrderDetailsDelivery",
                      defaultMessage: "Delivery Fee"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Text, {
                    children: [config === null || config === void 0 ? void 0 : (_config$restaurant6 = config.restaurant) === null || _config$restaurant6 === void 0 ? void 0 : (_config$restaurant6$u = _config$restaurant6.userConfig) === null || _config$restaurant6$u === void 0 ? void 0 : _config$restaurant6$u.currency, " 0.00"]
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TextWrapper, {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
                      id: "discountText",
                      defaultMessage: "Discount"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Text, {
                    children: [config === null || config === void 0 ? void 0 : (_config$restaurant7 = config.restaurant) === null || _config$restaurant7 === void 0 ? void 0 : (_config$restaurant7$u = _config$restaurant7.userConfig) === null || _config$restaurant7$u === void 0 ? void 0 : _config$restaurant7$u.currency, calculateDiscount()]
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TextWrapper, {
                  style: {
                    marginTop: 20
                  },
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Bold, {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
                      id: "totalText",
                      defaultMessage: "Total"
                    }), ' ', /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Small, {
                      children: ["(", /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["FormattedMessage"], {
                        id: "vatText",
                        defaultMessage: "Incl. VAT"
                      }), ")"]
                    })]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Bold, {
                    children: [config === null || config === void 0 ? void 0 : (_config$restaurant8 = config.restaurant) === null || _config$restaurant8 === void 0 ? void 0 : (_config$restaurant8$u = _config$restaurant8.userConfig) === null || _config$restaurant8$u === void 0 ? void 0 : _config$restaurant8$u.currency, calculatePrice()]
                  })]
                })]
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ var checkout_two = (CheckoutWithSidebar);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// CONCATENATED MODULE: ./src/features/checkouts/data.ts
/* harmony default export */ var data = ([
  /*{
    id: '1',
    type: 'primary',
    title: 'express-delivery',
    time_slot: '90 min express delivery',
  },
  {
    id: '2',
    type: 'secondary',
    title: '8am-11am',
    time_slot: '8.00 AM - 11.00 AM',
  },
  {
    id: '3',
    type: 'secondary',
    title: '11am-2pm',
    time_slot: '11.00 AM - 2.00 PM',
  },
  {
    id: '4',
    type: 'secondary',
    title: '2pm-5pm',
    time_slot: '2.00 PM - 5.00 PM',
  },
  {
    id: '5',
    type: 'secondary',
    title: '5pm-8pm',
    time_slot: '5.00 PM - 8.00 PM',
  },
  {
    id: '6',
    type: 'secondary',
    title: 'next day',
    time_slot: 'Next Day',
  },*/
]);
// CONCATENATED MODULE: ./src/contexts/profile/profile.provider.tsx


function profile_provider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function profile_provider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profile_provider_ownKeys(Object(source), true).forEach(function (key) { profile_provider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profile_provider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function profile_provider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function reducer(state, action) {
  switch (action.type) {
    case 'HANDLE_ON_INPUT_CHANGE':
      return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
        [action.payload.field]: action.payload.value
      });

    case 'ADD_OR_UPDATE_CONTACT':
      if (action.payload.id) {
        return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
          contact: state.contact.map(item => item.id === action.payload.id ? profile_provider_objectSpread(profile_provider_objectSpread({}, item), action.payload) : item)
        });
      }

      const newContact = profile_provider_objectSpread(profile_provider_objectSpread({}, action.payload), {}, {
        id: Object(external_uuid_["v4"])(),
        type: state.contact.length === '0' ? 'primary' : 'secondary'
      });

      return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
        contact: [...state.contact, newContact]
      });

    case 'DELETE_CONTACT':
      return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
        contact: state.contact.filter(item => item.id !== action.payload)
      });

    case 'ADD_OR_UPDATE_ADDRESS':
      if (action.payload.id) {
        return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
          address: state.address.map(item => item.id === action.payload.id ? profile_provider_objectSpread(profile_provider_objectSpread({}, item), action.payload) : item)
        });
      }

      const newAdress = profile_provider_objectSpread(profile_provider_objectSpread({}, action.payload), {}, {
        id: Object(external_uuid_["v4"])(),
        type: state.address.length === '0' ? 'primary' : 'secondary'
      });

      return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
        address: [...state.address, newAdress]
      });

    case 'DELETE_ADDRESS':
      return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
        address: state.address.filter(item => item.id !== action.payload)
      });

    case 'ADD_CARD':
      const newCard = {
        id: action.payload.id,
        type: state.card.length === '0' ? 'primary' : 'secondary',
        cardType: action.payload.brand.toLowerCase(),
        name: state.name,
        lastFourDigit: action.payload.last4
      };
      return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
        card: [newCard, ...state.card]
      });

    case 'DELETE_CARD':
      return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
        card: state.card.filter(item => item.id !== action.payload)
      });

    case 'SET_PRIMARY_CONTACT':
      return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
        contact: state.contact.map(item => item.id === action.payload ? profile_provider_objectSpread(profile_provider_objectSpread({}, item), {}, {
          type: 'primary'
        }) : profile_provider_objectSpread(profile_provider_objectSpread({}, item), {}, {
          type: 'secondary'
        }))
      });

    case 'SET_PRIMARY_ADDRESS':
      return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
        address: state.address.map(item => item.id === action.payload ? profile_provider_objectSpread(profile_provider_objectSpread({}, item), {}, {
          type: 'primary'
        }) : profile_provider_objectSpread(profile_provider_objectSpread({}, item), {}, {
          type: 'secondary'
        }))
      });

    case 'SET_PRIMARY_SCHEDULE':
      return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
        schedules: state.schedules.map(item => item.id === action.payload ? profile_provider_objectSpread(profile_provider_objectSpread({}, item), {}, {
          type: 'primary'
        }) : profile_provider_objectSpread(profile_provider_objectSpread({}, item), {}, {
          type: 'secondary'
        }))
      });

    case 'SET_PRIMARY_CARD':
      return profile_provider_objectSpread(profile_provider_objectSpread({}, state), {}, {
        card: state.card.map(item => item.id === action.payload ? profile_provider_objectSpread(profile_provider_objectSpread({}, item), {}, {
          type: 'primary'
        }) : profile_provider_objectSpread(profile_provider_objectSpread({}, item), {}, {
          type: 'secondary'
        }))
      });

    default:
      return state;
  }
}

const ProfileProvider = ({
  children,
  initData
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(external_react_["useReducer"])(reducer, profile_provider_objectSpread(profile_provider_objectSpread({}, initData), {}, {
    schedules: data
  })); // console.log(state, 'profile provider state');

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProfileContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  });
};
// CONCATENATED MODULE: ./src/data/use-user.ts
const fetcher = url => fetch(url).then(res => res.json()); // const end_point_url = '/'


function useUser() {
  /*const { data, mutate, error } = useSWR('/api/user.json', fetcher);
   const addOrUpdateContactNumber = async (contact) => {
    console.log(contact, 'contact');
    // return await fetch(end_point_url,{method: 'POST', body: contact });
  };
  const addOrUpdateAddress = async (address) => {
    console.log(address, 'address');
     // return await fetch(end_point_url,{method: 'POST', body: address });
  };
  const addOrUpdatePaymentCard = async (payment_card) => {
    console.log(payment_card, 'payment_card');
     // return await fetch(end_point_url,{method: 'POST', body: payment_card });
  };
  const deleteContactNumber = async (contactId) => {
    console.log(contactId, 'contactId');
     // return await fetch(end_point_url,{method: 'POST', body: contactId });
  };
  const deleteAddress = async (addressId) => {
    console.log(addressId, 'addressId');
     // return await fetch(end_point_url,{method: 'POST', body: addressId });
  };
  const deletePaymentCard = async (cardId) => {
    console.log(cardId, 'cardId');
     // return await fetch(end_point_url,{method: 'POST', body: cardId });
  };
   return {
    // loggedOut,
    user: data,
    mutate,
    error,
    addOrUpdateContactNumber,
    addOrUpdateAddress,
    addOrUpdatePaymentCard,
    deleteContactNumber,
    deleteAddress,
    deletePaymentCard,
  };  */
  return {
    user: {
      "id": 1,
      "name": "",
      "email": "",
      "address": [],
      "contact": []
    },
    error: undefined,
    addOrUpdateContactNumber: () => {},
    addOrUpdateAddress: () => {},
    addOrUpdatePaymentCard: () => {},
    deleteContactNumber: () => {},
    deleteAddress: () => {},
    deletePaymentCard: () => {}
  };
}
// EXTERNAL MODULE: ./src/utils/api/config.ts
var api_config = __webpack_require__("57Ed");

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// CONCATENATED MODULE: ./src/pages/checkout.tsx










async function getServerSideProps({
  query
}) {
  const config = await Object(api_config["a" /* getConfig */])(query.code); // const data = await getProductBySlug(config?.restaurant?.slug, params.slug);

  return {
    props: {
      // data,
      config
    }
  };
}

const CheckoutPage = ({
  deviceType,
  config
}) => {
  const {
    user,
    error
  } = useUser(); //if (error) return <ErrorMessage message={error.message} />;
  //if (!user) return <div>loading...</div>;

  const token = 'true';
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(seo["a" /* SEO */], {
      title: config.qrcode.title + " | checkout",
      description: config.description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProfileProvider, {
      initData: user,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(reuse_modal_["Modal"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(checkout_two, {
          token: token,
          deviceType: deviceType,
          config: config
        })
      })
    })]
  });
};

/* harmony default export */ var checkout = __webpack_exports__["default"] = (CheckoutPage);

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

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

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

/***/ "FTrM":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-c8ef3213d543b171117c2e3767ce48e9.png";

/***/ }),

/***/ "GNgB":
/***/ (function(module, exports) {

module.exports = require("react-geocode");

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

/***/ "I6Cj":
/***/ (function(module, exports) {

module.exports = require("react-text-mask");

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

/***/ "MXV/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoCartBag; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const NoCartBag = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "231.91",
    height: "292",
    viewBox: "0 0 231.91 292",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("linearGradient", {
        id: "linear-gradient",
        x1: "1",
        y1: "0.439",
        x2: "0.369",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
          offset: "0",
          stopColor: "#029477"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
          offset: "1",
          stopColor: "#009e7f"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
      id: "no_cart_in_bag_2",
      "data-name": "no cart in bag 2",
      transform: "translate(-1388 -351)",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ellipse", {
        id: "Ellipse_2873",
        "data-name": "Ellipse 2873",
        cx: "115.955",
        cy: "27.366",
        rx: "115.955",
        ry: "27.366",
        transform: "translate(1388 588.268)",
        fill: "#ddd",
        opacity: "0.25"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_18691",
        "data-name": "Path 18691",
        d: "M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z",
        transform: "translate(1403 381)",
        fill: "#009e7f"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Rectangle_1852",
        "data-name": "Rectangle 1852",
        d: "M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z",
        transform: "translate(1403 381)",
        fill: "#006854"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Rectangle_1853",
        "data-name": "Rectangle 1853",
        d: "M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z",
        transform: "translate(1403 381)",
        fill: "#006854"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_18685",
        "data-name": "Path 18685",
        d: "M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z",
        transform: "translate(1056.69 164.944)",
        fill: "#006854"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_18686",
        "data-name": "Path 18686",
        d: "M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z",
        transform: "translate(1057.793 95.684)",
        fill: "#009e7f"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
        id: "Ellipse_2874",
        "data-name": "Ellipse 2874",
        cx: "28.689",
        cy: "28.689",
        r: "28.689",
        transform: "translate(1473.823 511.046)",
        fill: "#006854"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
        id: "Ellipse_2875",
        "data-name": "Ellipse 2875",
        cx: "15.046",
        cy: "15.046",
        r: "15.046",
        transform: "translate(1481.401 547.854) rotate(-45)",
        fill: "#009e7f"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_18687",
        "data-name": "Path 18687",
        d: "M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
        transform: "translate(1060.579 -35.703)",
        fill: "#006854"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_18688",
        "data-name": "Path 18688",
        d: "M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
        transform: "translate(1060.566 -35.704)",
        fill: "#006854"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_18689",
        "data-name": "Path 18689",
        d: "M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
        transform: "translate(970.304 -35.704)",
        fill: "#006854"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_18690",
        "data-name": "Path 18690",
        d: "M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
        transform: "translate(970.318 -35.703)",
        fill: "#006854"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_18692",
        "data-name": "Path 18692",
        d: "M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z",
        transform: "translate(1292.301 101.536)",
        fill: "url(#linear-gradient)"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_18693",
        "data-name": "Path 18693",
        d: "M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z",
        transform: "translate(1118.301 101.536)",
        fill: "url(#linear-gradient)"
      })]
    })]
  });
};

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "RjkI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ConfigContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "VnWI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "input__Input",
  componentId: "sc-1m4o66e-0"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  display: 'block',
  width: '100%',
  p: '0 18px',
  appearance: 'none',
  fontFamily: 'body',
  fontSize: 'base',
  lineHeight: 'inherit',
  border: '1px solid',
  borderColor: 'inputBorderCheckout',
  borderRadius: 'base',
  backgroundColor: 'inputCheckout',
  color: 'text.bold',
  height: '48px',
  transition: 'all 0.25s ease',
  // mb: 3,
  '&:focus': {
    borderColor: 'primary.regular'
  }
}), {
  '&:hover,&:focus': {
    outline: 0
  },
  '&::placeholder': {
    color: ''
  },
  '&::-webkit-inner-spin-button,&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },
  '&.disabled': {
    cursor: 'not-allowed',
    opacity: 0.6
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"]));

/***/ }),

/***/ "Ww4b":
/***/ (function(module, exports) {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xoY3":
/***/ (function(module, exports) {

module.exports = require("stylis-plugin-rtl");

/***/ })

/******/ });