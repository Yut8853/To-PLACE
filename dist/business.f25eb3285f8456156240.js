/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/business.js":
/*!*************************!*\
  !*** ./src/business.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _business_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business.css */ \"./src/business.css\");\n/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.js */ \"./src/start.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./light.js */ \"./src/light.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_light_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hamburger.js */ \"./src/hamburger.js\");\n/* harmony import */ var _smooth_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smooth.js */ \"./src/smooth.js\");\n\n\n\n\n\n\n\nconsole.log('business.js');\n\n//# sourceURL=webpack://three-shader-env01/./src/business.js?");

/***/ }),

/***/ "./src/hamburger.js":
/*!**************************!*\
  !*** ./src/hamburger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nlet menuOpen = false;\ndocument.querySelector('.menu-btn').addEventListener('click', function () {\n  const link = document.querySelectorAll('.text-stroke-fill-ltr');\n  const linkHoverReveal = document.querySelectorAll('.hover-reveal');\n  const linkImages = document.querySelectorAll('.hidden-img');\n  for (let i = 0; i < link.length; i++) {\n    link[i].addEventListener('mousemove', e => {\n      linkHoverReveal[i].style.opacity = .6;\n      linkHoverReveal[i].style.transform = `translate(150%, -70% ) rotate(5deg)`;\n      linkImages[i].style.transform = 'scale(1, 1)';\n      linkHoverReveal[i].style.left = e.clientX + \"px\";\n    });\n    link[i].addEventListener('mouseleave', e => {\n      linkHoverReveal[i].style.opacity = 0;\n      linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;\n      linkImages[i].style.transform = 'scale(0.8, 0.8)';\n    });\n  }\n  let tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n    onStart: function () {\n      document.querySelector('.menu-bg').style.visibility = 'visible';\n    },\n    onComplete: function () {\n      if (!menuOpen) {\n        document.querySelector('.menu-bg').style.visibility = 'hidden';\n      }\n    }\n  });\n  if (menuOpen) {\n    // メニューが開いている場合、左に隠す\n    tl.to('.menu-bg', {\n      duration: .4,\n      left: '-100%',\n      ease: 'power4.Out'\n    });\n  } else {\n    // メニューが閉じている場合、右に表示\n    tl.to('.menu-bg', {\n      duration: .4,\n      left: 0,\n      ease: 'power4.In'\n    }).fromTo('.menu-bg nav ul li', {\n      x: -40,\n      opacity: 0\n    }, {\n      duration: 1,\n      x: 0,\n      opacity: 1,\n      stagger: 0.3,\n      ease: \"power2.out\"\n    });\n  }\n  menuOpen = !menuOpen;\n});\n\n//# sourceURL=webpack://three-shader-env01/./src/hamburger.js?");

/***/ }),

/***/ "./src/light.js":
/*!**********************!*\
  !*** ./src/light.js ***!
  \**********************/
/***/ (() => {

eval("const light = document.querySelector('.light');\nlet height = 200;\nlet width = 200;\ndocument.addEventListener('mousemove', function (e) {\n  setPosition(e);\n});\ndocument.addEventListener('touchmove', function (e) {\n  setPosition(e);\n});\nfunction setPosition(e) {\n  light.style.top = e.pageY - height / 2 + \"px\";\n  light.style.left = e.pageX - width / 2 + \"px\";\n}\n\n//# sourceURL=webpack://three-shader-env01/./src/light.js?");

/***/ }),

/***/ "./src/smooth.js":
/*!***********************!*\
  !*** ./src/smooth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.mjs\");\n\n\n// イージング関数\nfunction easeOutQuart(t) {\n  return 1 - --t * t * t * t;\n}\nconst lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  lerp: .1,\n  // 慣性の強さ\n  duration: 4,\n  // スクロールアニメーションの時間\n  easing: easeOutQuart // イージング関数\n});\nlenis.on('scroll', e => {\n  console.log(e);\n});\nfunction raf(time) {\n  lenis.raf(time);\n  requestAnimationFrame(raf);\n}\nrequestAnimationFrame(raf);\n\n//# sourceURL=webpack://three-shader-env01/./src/smooth.js?");

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loader: () => (/* binding */ loader)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nfunction loader() {\n  let loadItem = document.querySelectorAll('.loader__bg');\n  const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(loadItem, {\n    transformOrigin: '100% 100%',\n    scaleX: 1\n  }), tl.to(loadItem, {\n    scaleX: 0,\n    transformOrigin: '0% 0%',\n    stagger: 0.07,\n    ease: 'power4.inOut'\n  }).to(\".overlay-white\", {\n    duration: .7,\n    xPercent: 100,\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\"\n  }).to(\".overlay-red\", {\n    duration: .9,\n    xPercent: 150,\n    ease: \"cubic-bezier(0.961, 0.83, 0.961)\"\n  }).to('.overlay-white2', {\n    duration: .7,\n    xPercent: 100,\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\"\n  }).to('.overlay-red2', {\n    duration: .9,\n    xPercent: 100,\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\"\n  }).to(\".white-outlined-text\", {\n    duration: .8,\n    opacity: 1,\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\",\n    stagger: {\n      amount: .8,\n      from: \"start\"\n    },\n    transform: 'translateY(0)'\n  }).to('.hero-text', {\n    duration: 1.5,\n    delay: .1,\n    color: 'rgba(60, 57, 57, 1)',\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\",\n    opacity: 1\n  }).to('.hero-vision-bg', {\n    delay: 1,\n    duration: .5,\n    xPercent: 0,\n    opacity: 1,\n    width: '100%',\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\"\n  });\n}\nwindow.addEventListener('DOMContentLoaded', () => {\n  setTimeout(() => {\n    loader();\n  }, 100);\n});\n\n//# sourceURL=webpack://three-shader-env01/./src/start.js?");

/***/ }),

/***/ "./src/business.css":
/*!**************************!*\
  !*** ./src/business.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://three-shader-env01/./src/business.css?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://three-shader-env01/./src/reset.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://three-shader-env01/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"business": 0,
/******/ 			"src_reset_css-src_style_css": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthree_shader_env01"] = self["webpackChunkthree_shader_env01"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_index_js-node_modules_studio-freight_lenis_dist_lenis_mjs","src_reset_css-src_style_css"], () => (__webpack_require__("./src/business.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;