(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{378:
/*!*****************************************************!*\
  !*** ./src/components/Layout/Layout.js + 3 modules ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/history.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/normalize.css/normalize.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/Footer/Footer.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/Header/Header.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/Layout/Layout.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/isomorphic-style-loader/lib/withStyles.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";var o=n(20),r=n.n(o),i=(n(11),n(377)),a=n.n(i),c=n(387),u=n.n(c),s=n(384),l=n.n(s),f=n(382),p=n.n(f),d=n(50);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return h(o,(n=o=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),Object.defineProperty(v(o),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){o.props.onClick&&o.props.onClick(e),!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)&&function(e){return 0===e.button}(e)&&!0!==e.defaultPrevented&&(e.preventDefault(),d.a.push(o.props.to))}}),n))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.children,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["to","children"]);return r.a.createElement("a",b({href:t},o,{onClick:this.handleClick}),n)}}])&&m(n.prototype,o),i&&m(n,i),t}();Object.defineProperty(g,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{onClick:null}});var x,w=g;function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n,o){x||(x="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:x,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var k,C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){return S("div",{className:p.a.root},void 0,S("div",{className:p.a.container},void 0,S(w,{className:p.a.brand,to:"/"},void 0,S("span",{className:p.a.brandTxt},void 0,"Volca Freesound"))))}}])&&O(n.prototype,o),i&&O(n,i),t}(),P=a()(p.a)(C),N=n(380),E=n.n(N);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t,n,o){k||(k="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:k,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var D,F=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){return A("div",{className:E.a.root},void 0,A("div",{className:E.a.container},void 0,A("span",{className:E.a.text},void 0,"© Wouter Hisschemoller"),A("span",{className:E.a.spacer},void 0,"·"),A("span",{className:E.a.text},void 0,"2018"),A("span",{className:E.a.spacer},void 0,"·"),A(w,{className:E.a.link,to:"http://www.hisschemoller.com"},void 0,"www.hisschemoller.com")))}}])&&I(n.prototype,o),i&&I(n,i),t}(),q=a()(E.a)(F);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t,n,o){D||(D="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:D,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var $=z(P,{}),H=z(q,{}),W=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),M(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){return z("div",{},void 0,$,this.props.children,H)}}])&&L(n.prototype,o),i&&L(n,i),t}();t.a=a()(u.a,l.a)(W)},379:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-rules-2!./node_modules/postcss-loader/lib??ref--5-rules-3!./src/components/Footer/Footer.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){(t=e.exports=n(/*! ../../../node_modules/css-loader/lib/css-base.js */376)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._1UUMy{background:#fff;color:#ccc}._3dfAC{margin:0 auto;padding:20px 15px;max-width:1000px;max-width:var(--max-content-width);text-align:left}._3ReUN,._297xE{color:#ccc}._3qHjF,._3ReUN{color:#ccc;font-size:16px;font-size:1rem;padding:2px 5px;text-decoration:none}._3qHjF:hover{text-decoration:underline}',""]),t.locals={root:"_1UUMy",container:"_3dfAC",text:"_3ReUN",spacer:"_297xE",link:"_3qHjF"}},380:
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.css ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var o=n(/*! !../../../node_modules/css-loader??ref--5-rules-2!../../../node_modules/postcss-loader/lib??ref--5-rules-3!./Footer.css */379),r=n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},381:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-rules-2!./node_modules/postcss-loader/lib??ref--5-rules-3!./src/components/Header/Header.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){(t=e.exports=n(/*! ../../../node_modules/css-loader/lib/css-base.js */376)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--brand-color:#61dafb}.O9oW9{background:#fff;color:#ccc}.qQ2mF{margin:0 auto;padding:20px 0;max-width:1000px;max-width:var(--max-content-width)}._2oS_y{color:#92e5fc;color:color(var(--brand-color) lightness(10%));text-decoration:none;font-size:16px;font-size:1rem}',""]),t.locals={root:"O9oW9",container:"qQ2mF",brand:"_2oS_y",brandTxt:"_230aH"}},382:
/*!******************************************!*\
  !*** ./src/components/Header/Header.css ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var o=n(/*! !../../../node_modules/css-loader??ref--5-rules-2!../../../node_modules/postcss-loader/lib??ref--5-rules-3!./Header.css */381),r=n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},383:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-rules-2!./node_modules/postcss-loader/lib??ref--5-rules-3!./src/components/Layout/Layout.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){(e.exports=n(/*! ../../../node_modules/css-loader/lib/css-base.js */376)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;font-family:var(--font-family-base);line-height:1.375}body{margin:0}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}',""])},384:
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.css ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var o=n(/*! !../../../node_modules/css-loader??ref--5-rules-2!../../../node_modules/postcss-loader/lib??ref--5-rules-3!./Layout.css */383),r=n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},401:
/*!*******************************************!*\
  !*** ./node_modules/recompose/compose.js ***!
  \*******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];return t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}},448:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-rules-2!./node_modules/postcss-loader/lib??ref--5-rules-3!./src/components/Slots/Slots.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){(t=e.exports=n(/*! ../../../node_modules/css-loader/lib/css-base.js */376)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._2nNrI{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}',""]),t.locals={root:"_2nNrI"}},449:
/*!****************************************!*\
  !*** ./src/components/Slots/Slots.css ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var o=n(/*! !../../../node_modules/css-loader??ref--5-rules-2!../../../node_modules/postcss-loader/lib??ref--5-rules-3!./Slots.css */448),r=n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},450:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-rules-2!./node_modules/postcss-loader/lib??ref--5-rules-3!./src/components/Slot/Slot.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){(t=e.exports=n(/*! ../../../node_modules/css-loader/lib/css-base.js */376)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._10Trp{border:1px solid #ccc;font-size:9px;height:12px;margin:1px;outline:none;padding:0;text-align:center;width:12px}._10Trp[data-status="0"]{background:#fff;color:#ccc}._10Trp[data-status="1"]{background:#eee;color:#aaa}._10Trp[data-status="2"]{background:#999;color:#fff}._10Trp[data-status="3"]{background:#333;color:#fff}',""]),t.locals={root:"_10Trp"}},451:
/*!**************************************!*\
  !*** ./src/components/Slot/Slot.css ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var o=n(/*! !../../../node_modules/css-loader??ref--5-rules-2!../../../node_modules/postcss-loader/lib??ref--5-rules-3!./Slot.css */450),r=n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},452:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-rules-2!./node_modules/postcss-loader/lib??ref--5-rules-3!./src/routes/volca/Volca.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){(t=e.exports=n(/*! ../../../node_modules/css-loader/lib/css-base.js */376)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._3WQgr{color:#ccc;padding-left:20px;padding-right:20px}._30pZO{margin:0 auto;padding:0 0 40px;max-width:1000px;max-width:var(--max-content-width)}._3qm6h{font-size:16px;font-size:1rem;font-weight:400}._1Uph8{display:block}.tO7Y6{border-top:1px solid #ccc}._2v2f6{display:block}',""]),t.locals={root:"_3WQgr",container:"_30pZO",title:"_3qm6h",samplecount:"_1Uph8",row:"tO7Y6",textline:"_2v2f6"}},453:
/*!************************************!*\
  !*** ./src/routes/volca/Volca.css ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var o=n(/*! !../../../node_modules/css-loader??ref--5-rules-2!../../../node_modules/postcss-loader/lib??ref--5-rules-3!./Volca.css */452),r=n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},513:
/*!************************************************!*\
  !*** ./src/routes/volca/index.js + 11 modules ***!
  \************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/Layout/Layout.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/constants/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/Slot/Slot.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/Slots/Slots.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/routes/volca/Volca.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/isomorphic-style-loader/lib/withStyles.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-redux/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/recompose/compose.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var o=n(20),r=n.n(o),i=n(378),a=n(103),c=n(401),u=n.n(c),s=(n(11),n(377)),l=n.n(s),f=n(453),p=n.n(f);function d(){return function(e,t){var n,o,r,i="Sounds downloaded from Freesound.org and transferred to the Korg Volca Sample\n\n\n",a=t();a.sounds.sounds.allIds.forEach(function(e){var t=a.sounds.sounds.byId[e];i+="Sample slot: ".concat(t.slotIndex,"\n\nSound name: ").concat(t.name,"\nID: ").concat(t.id,"\nDuration: ").concat(t.duration,"\nFile type: ").concat(t.type,"\nLicense: ").concat(t.license,"\nUser name: ").concat(t.username,"\nFreesound URL: ").concat(t.url,"\n\n.............\n\n")}),n="volca-freesound-receipt.txt",o=i,(r=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,".concat(encodeURIComponent(o))),r.setAttribute("download",n),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}}var y=n(9);function b(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];var i={type:e};return n.forEach(function(e,t){i[n[t]]=o[t]}),i}}var m={url:"https://freesound.org/apiv2/",token:"I4LLx1YDPjNbkBCuK0zYbQAV9njbRLJ9ZhctDhGP"},h=b(y.b),v=b(y.v),g=b(y.w),x=b(y.c),w=b(y.r),_=b(y.s,"value"),S=b(y.t,"value"),O=b(y.q,"value"),j=b(y.x,"index"),k=b(y.a),C=b(y.p);var P=b(y.f,"duration"),N=b(y.e,"position"),E=b(y.d);function U(e,t){return function(n){var o,r=e.createBufferSource();r.buffer=t,r.connect(e.destination),r.onended=function(){clearInterval(o),n(E()),n(function(e,t){var n=t();-1===n.sounds.slots.findIndex(function(e){return 1===e})||n.sounds.isPaused?e(g()):e(L())})},r.start(),n(P(t.duration*r.playbackRate.value));var i=performance.now(),a=t.duration*r.playbackRate.value*1e3;o=setInterval(function(){n(N((performance.now()-i)/a))},200)}}var A=b(y.n,"query"),I=(b(y.h,"json"),b(y.k,"error"));function T(e,t,n){for(var o=0;o<n.length;o+=1)e.setUint8(t+o,n.charCodeAt(o))}function D(e,t,n){var o=new ArrayBuffer(44+2*e.length),r=new DataView(o);T(r,0,"RIFF"),r.setUint32(4,36+2*e.length,!0),T(r,8,"WAVE"),T(r,12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,t,!0),r.setUint32(24,n,!0),r.setUint32(28,4*n,!0),r.setUint16(32,2*t,!0),r.setUint16(34,16,!0),T(r,36,"data"),r.setUint32(40,2*e.length,!0),function(e,t,n){for(var o=t,r=0,i=n.numberOfChannels;r<i;r+=1)if(0===r)for(var a=n.getChannelData(r),c=0,u=a.length;c<u;c+=1,o+=2){var s=Math.max(-1,Math.min(1,a[c]));e.setInt16(o,s<0?32768*s:32767*s,!0)}}(r,44,e);for(var i=1e3;i<r.byteLength;)i+=2400;return new Blob([r],{type:"audio/wav"})}function F(e){return function(t,n){t(A()),e?fetch(e).then(function(e){e.arrayBuffer().then(function(e){var o=se;o.decodeAudioData(e).then(function(e){var r=D(e,e.numberOfChannels,e.sampleRate),i=n();window.Syrialize(r,i.sounds.slotIndex,function(e){var n=new FileReader;n.onload=function(){var e=n.result;o.decodeAudioData(e).then(function(e){t(U(o,e))})},n.readAsArrayBuffer(e)})})})}):t(I("no preview url"))}}var q=b(y.m,"query"),R=b(y.g,"sound"),z=b(y.j,"error");function L(){return function(e,t){var n=t(),o="duration:[0 TO ".concat(n.sounds.durationMax,"]"),r=Math.floor(Math.random()*n.sounds.count);return e(q()),fetch("".concat(m.url,"search/text/?format=json&query=''&page=").concat(r,"&page_size=1&fields=").concat("id,url,name,license,type,duration,username,previews","&filter=").concat(o,"&token=").concat(m.token)).then(function(e){return e.json()},function(t){return e(z(t))}).then(function(t){e(R(t.results[0])),e(F(t.results[0].previews["preview-hq-mp3"]))},function(t){return e(z(t))})}}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=b(y.o,"query"),H=b(y.i,"json"),W=b(y.l,"error");function B(e){return function(t,n){var o=n(),r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){M(e,t,n[t])})}return e}({},e),i=r.query,a=r.page,c=r.pageSize,u="duration:[0 TO ".concat(o.sounds.durationMax,"]");return t($(i)),fetch("".concat(m.url,"search/text/?format=json&query=").concat(i,"&page=").concat(a,"&page_size=").concat(c,"&fields=").concat("id","&filter=").concat(u,"&token=").concat(m.token)).then(function(e){return e.json()},function(e){return t(W(e))}).then(function(e){t(H(e))},function(e){return t(W(e))})}}var K,Q=n(451),V=n.n(Q);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Z(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var G,X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Z(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this;return function(e,t,n,o){K||(K="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:K,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}("button",{type:"button",className:V.a.root,"data-status":this.props.status,onClick:function(t){t.preventDefault(),e.props.dispatch(j(e.props.index))}},void 0,this.props.index)}}])&&J(n.prototype,o),i&&J(n,i),t}(),ee=u()(l()(V.a),Object(a.b)(function(){return{}}))(X),te=n(449),ne=n.n(te);function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(e,t,n,o){G||(G="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:G,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ie(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ae(e,t){return!t||"object"!==oe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var ce=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ae(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.slotIndex,n=e.slots;return re("div",{className:ne.a.root},void 0,n.map(function(e,n){return re(ee,{status:n===t?3:e,index:n},n.toString())}))}}])&&ie(n.prototype,o),i&&ie(n,i),t}();Object.defineProperty(ce,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var ue,se,le=u()(l()(ne.a),Object(a.b)(function(e){return{slotIndex:e.sounds.slotIndex,slots:e.sounds.slots}}))(ce);function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t,n,o){ue||(ue="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:ue,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function de(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ye(e,t){return!t||"object"!==fe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var be=pe("span",{},void 0,"Max. duration"),me=pe("span",{},void 0,"From"),he=pe("span",{},void 0,"To"),ve=pe(le,{}),ge=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ye(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){se=new(window.AudioContext||window.webkitAudioContext),this.props.dispatch(h()),this.props.dispatch(B({query:"",page:1,pageSize:1}))}},{key:"componentWillUnmount",value:function(){se.close()}},{key:"render",value:function(){var e=this,t="Start";return this.props.isStarted&&(t=this.props.isPaused?"Stopping...":"Stop"),pe("div",{className:p.a.root},void 0,pe("div",{className:p.a.container},void 0,pe("h1",{className:p.a.title},void 0,this.props.title),pe("span",{className:p.a.samplecount},void 0,this.props.count>0?"".concat(this.props.count," samples found"):"No samples available."),pe("div",{className:p.a.row},void 0,pe("progress",{max:"1",value:this.props.position}),pe("span",{},void 0,Math.round(100*this.props.position),"%"),pe("button",{type:"button",onClick:function(t){t.preventDefault(),e.props.isStarted?e.props.dispatch(x()):(e.props.dispatch(v()),e.props.dispatch(L()))}},void 0,t)),pe("div",{className:p.a.row},void 0,pe("span",{className:p.a.textline},void 0,"File transfer has finished. Please download your receipt."),pe("button",{type:"button",onClick:function(t){t.preventDefault(),e.props.dispatch(d())}},void 0,"Download receipt (text file)")),pe("div",{className:p.a.row},void 0,pe("label",{htmlFor:"duration_max"},void 0,be,pe("input",{type:"number",min:"0",max:"none",value:this.props.durationMax,id:"duration_max",onChange:function(t){t.preventDefault(),e.props.dispatch(O(t.target.value)),e.props.dispatch(B({query:"",page:1,pageSize:1}))}}))),pe("div",{className:p.a.row},void 0,pe("label",{htmlFor:"from"},void 0,me,pe("input",{type:"number",min:"0",max:this.props.slotCount-1,value:this.props.rangeFirst,id:"from",onChange:function(t){t.preventDefault(),e.props.dispatch(_(t.target.value))}})),pe("label",{htmlFor:"to"},void 0,he,pe("input",{type:"number",min:"0",max:this.props.slotCount-1,value:this.props.rangeLast,id:"to",onChange:function(t){t.preventDefault(),e.props.dispatch(S(t.target.value))}})),pe("button",{type:"button",onClick:function(t){t.preventDefault(),e.props.dispatch(w())}},void 0,"Set range")),pe("div",{className:p.a.row},void 0,pe("button",{type:"button",onClick:function(t){t.preventDefault(),e.props.dispatch(k())}},void 0,"Clear All"),pe("button",{type:"button",onClick:function(t){t.preventDefault(),e.props.dispatch(C())}},void 0,"Select All")),ve))}}])&&de(n.prototype,o),i&&de(n,i),t}();Object.defineProperty(ge,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var xe,we=u()(l()(p.a),Object(a.b)(function(e){return{count:e.sounds.count,durationMax:e.sounds.durationMax,isPaused:e.sounds.isPaused,isStarted:e.sounds.isStarted,rangeFirst:e.sounds.rangeFirst,rangeLast:e.sounds.rangeLast,position:e.sounds.position,slotCount:e.sounds.slotCount}}))(ge);function _e(e,t,n,o){xe||(xe="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:xe,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var Se="vf",Oe=_e(i.a,{},void 0,_e(we,{title:Se,numSounds:0}));t.default=function(){return{title:Se,component:Oe}}}}]);
//# sourceMappingURL=volca.2b7041a5.chunk.js.map