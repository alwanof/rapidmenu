module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
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
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + "." + {"8":"0b929efdcf295b376932","9":"a4d66e306f5e903d1b85","10":"77e8924eff515e9402b1","12":"3f9c78620a68c2ba994a"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qN2i");


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

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RjkI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ConfigContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "jYXs":
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "qN2i":
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

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/assets/styles/product-single.style.tsx


const ProductSingleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__ProductSingleWrapper",
  componentId: "tupj2e-0"
})(["padding:78px 0 60px 0;position:relative;background-color:", ";@media (min-width:1600px){padding-top:89px;}@media (max-width:990px){padding-top:60px;}"], Object(theme_get_["themeGet"])('colors.body.bg2', 'colors.body.bg2'));
const ProductSingleContainer = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__ProductSingleContainer",
  componentId: "tupj2e-1"
})(["width:100%;"]);
const RelatedItemContainer = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__RelatedItemContainer",
  componentId: "tupj2e-2"
})(["display:flex;flex-wrap:wrap;margin-left:-15px;margin-right:-15px;@media (max-width:1199px) and (min-width:990px){margin-left:-10px;margin-right:-10px;}@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;}"]);
const RealatedItemCol = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__RealatedItemCol",
  componentId: "tupj2e-3"
})(["flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1500px){flex:0 0 20%;max-width:20%;}@media (max-width:1200px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:991px){padding-left:10px;padding-right:10px;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}@media (max-width:767px){flex:0 0 50%;max-width:50%;}"]);
const Loading = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__Loading",
  componentId: "tupj2e-4"
})(["width:100%;padding:10px;display:flex;align-items:center;justify-content:center;font-size:calc(", " - 1px);color:#222222;"], Object(theme_get_["themeGet"])('fontSizes.base', '15px'));
/* harmony default export */ var product_single_style = (ProductSingleWrapper);
// CONCATENATED MODULE: ./src/utils/api/product.ts
const url = "https://whatsappneed.com/api/v1";
async function getAllProducts() {
  const products = await fetch(`${url}/api/products.json`);
  return await products.json();
}
async function getProductBySlug(slug, id) {
  const product = await fetch(`${"https://whatsappneed.com/api/v1"}/items/${id}?user=${slug}`).then(res => res.json());
  return product.data;
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/contexts/config/config.context.tsx
var config_context = __webpack_require__("RjkI");

// EXTERNAL MODULE: ./src/utils/api/config.ts
var api_config = __webpack_require__("57Ed");

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// CONCATENATED MODULE: ./src/pages/products/[slug].tsx











const ProductDetails = dynamic_default()(() => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, "Srwm")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Srwm")],
    modules: ['components/product-details/product-details-four/product-details-four']
  }
});
const ProductDetailsBakery = dynamic_default()(() => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "bLUX")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("bLUX")],
    modules: ['components/product-details/product-details-five/product-details-five']
  }
});
const ProductDetailsGrocery = dynamic_default()(() => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, "oARK")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("oARK")],
    modules: ['components/product-details/product-details-six/product-details-six']
  }
});
const CartPopUp = dynamic_default()(() => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, "gZAk")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("gZAk")],
    modules: ['features/carts/cart-popup']
  }
});

/*export async function getStaticProps({ params }) {
  const data = await getProductBySlug(params.slug);
  return {
    props: {
      data,
    },
  };
}
export async function getStaticPaths() {
  const products = await getAllProducts();
  return {
    paths: products.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}*/
async function getServerSideProps({
  params,
  query
}) {
  var _config$restaurant;

  const config = await Object(api_config["a" /* getConfig */])(query.code);
  const data = await getProductBySlug(config === null || config === void 0 ? void 0 : (_config$restaurant = config.restaurant) === null || _config$restaurant === void 0 ? void 0 : _config$restaurant.slug, params.slug);
  return {
    props: {
      data,
      config
    }
  };
}

const ProductDetailsPage = ({
  data,
  deviceType,
  config
}) => {
  const router = Object(router_["useRouter"])();
  let targetConfig = config;

  if (!targetConfig || !targetConfig.qrcode) {
    const configContext = Object(external_react_["useContext"])(config_context["a" /* ConfigContext */]);
    targetConfig = configContext.config;
  }

  if (router.isFallback) return /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  });

  let content = /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProductDetails, {
    product: data,
    deviceType: deviceType,
    config: targetConfig
  });
  /*if (data.type === 'bakery') {
    content = <ProductDetailsBakery product={data} deviceType={deviceType} />;
  }
  if (data.type === 'grocery') {
    content = <ProductDetailsGrocery product={data} deviceType={deviceType} />;
  }*/


  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(reuse_modal_["Modal"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(seo["a" /* SEO */], {
      title: config.qrcode.title + " | " + data.mainTitle,
      description: config.description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(product_single_style, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ProductSingleContainer, {
        children: [content, /*#__PURE__*/Object(jsx_runtime_["jsx"])(CartPopUp, {
          deviceType: deviceType,
          config: targetConfig
        })]
      })
    })]
  });
};

/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (ProductDetailsPage);

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "trJ8":
/***/ (function(module, exports) {

module.exports = require("overlayscrollbars-react");

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