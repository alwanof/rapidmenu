exports.ids = [14];
exports.modules = {

/***/ "WYzD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__("1nAM");
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__("mNWG");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// CONCATENATED MODULE: ./src/components/banner/banner.style.tsx



const Box = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__Box",
  componentId: "sc-1te9e3c-0"
})(css_default()({
  height: ['auto', 'auto', '600px', '100vh']
}), {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
  // backgroundColor: #f7f7f7;
  '@media (max-width: 990px)': {
    padding: '80px 0 25px'
  }
}, Object(external_styled_system_["compose"])(external_styled_system_["space"], external_styled_system_["color"], external_styled_system_["layout"], external_styled_system_["position"], external_styled_system_["flexbox"], external_styled_system_["border"]));
const Image = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__Image",
  componentId: "sc-1te9e3c-1"
})(css_default()({
  backgroundSize: ['cover']
}), {
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0,
  '@media (max-width: 990px) and (min-width: 768px)': {
    backgroundPosition: 'inherit'
  }
}, external_styled_system_["background"]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__Content",
  componentId: "sc-1te9e3c-2"
})(css_default()({
  px: ['20px', '20px', '15px'],
  pt: [0]
}), {
  position: 'relative',
  zIndex: 2,
  width: '100%'
});
const Title = external_styled_components_default.a.h2.withConfig({
  displayName: "bannerstyle__Title",
  componentId: "sc-1te9e3c-3"
})(css_default()({
  fontSize: [17, '2xl', 45],
  color: 'text.bold',
  fontWeight: 'bold'
}), {
  marginBottom: 15,
  textAlign: 'center'
});
const Description = external_styled_components_default.a.p.withConfig({
  displayName: "bannerstyle__Description",
  componentId: "sc-1te9e3c-4"
})(css_default()({
  fontSize: ['base', 'md'],
  color: 'text.regular',
  marginBottom: [null, null, 60],
  display: ['block'],
  fontWeight: 'regular',
  lineHeight: 'body',
  textAlign: ['left', 'left', 'center'],
  '@media (max-width: 990px)': {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingRight: '15px'
  }
}));
const ContentRow = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__ContentRow",
  componentId: "sc-1te9e3c-5"
})(css_default()({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 20,
  button: {
    padding: 0,
    ':before': {
      content: '""',
      width: 5,
      height: 5,
      display: 'block',
      borderRadius: '50%',
      backgroundColor: 'yellow.regular',
      marginRight: '7px'
    }
  }
}));
const SearchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__SearchWrapper",
  componentId: "sc-1te9e3c-6"
})(css_default()({
  display: 'flex',
  justifyContent: 'center'
}));
const SliderNav = external_styled_components_default.a.button.withConfig({
  displayName: "bannerstyle__SliderNav",
  componentId: "sc-1te9e3c-7"
})(css_default()({
  width: 30,
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'text.bold',
  backgroundColor: 'white',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
  outline: 0,
  padding: 0,
  border: 0,
  borderRadius: '50%',
  position: 'absolute',
  top: '50%',
  marginTop: '-15px',
  zIndex: 1,
  cursor: 'pointer',
  svg: {
    width: 18,
    maxHeight: 18
  },
  '&.banner-slider-prev': {
    left: 20
  },
  '&.banner-slider-next': {
    right: 20
  }
}));
// CONCATENATED MODULE: ./src/assets/icons/ArrowNext.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ArrowNext = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z",
      fill: "currentColor",
      stroke: "currentColor"
    })
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/ArrowPrev.tsx


const ArrowPrev = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z",
      fill: "currentColor",
      stroke: "currentColor"
    })
  });
};
// CONCATENATED MODULE: ./src/components/banner/banner-two.tsx









external_swiper_default.a.use([external_swiper_["Navigation"]]);
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "banner-two__ImageWrapper",
  componentId: "sc-4ui9c3-0"
})({
  position: 'relative',
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain'
  },
  '@media (max-width: 575px)': {
    minHeight: 180,
    img: {
      height: 180,
      objectPosition: 'left',
      objectFit: 'cover'
    }
  }
});

const Banner = ({
  data
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Swiper"], {
    id: "banner",
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.banner-slider-next',
      prevEl: '.banner-slider-prev'
    },
    style: {
      marginBottom: 20,
      minHeight: 180
    },
    children: [data.map((item, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["SwiperSlide"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImageWrapper, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: item.img,
          alt: item.alt
        })
      })
    }, idx)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SliderNav, {
      className: "banner-slider-next",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowNext, {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SliderNav, {
      className: "banner-slider-prev",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowPrev, {})
    })]
  });
};

/* harmony default export */ var banner_two = __webpack_exports__["default"] = (Banner);

/***/ })

};;