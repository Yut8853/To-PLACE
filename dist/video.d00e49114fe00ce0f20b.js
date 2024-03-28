/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/video.js":
/*!**********************!*\
  !*** ./src/video.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_videos_AdobeStock_483252332_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/videos/AdobeStock_483252332.mp4 */ \"./src/assets/videos/AdobeStock_483252332.mp4\");\n/* harmony import */ var _assets_videos_AdobeStock_585956923_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/videos/AdobeStock_585956923.mp4 */ \"./src/assets/videos/AdobeStock_585956923.mp4\");\n/* harmony import */ var _assets_videos_AdobeStock_732033388_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/videos/AdobeStock_732033388.mp4 */ \"./src/assets/videos/AdobeStock_732033388.mp4\");\n// ビデオファイルのインポート\n\n\n\nlet isVideoInserted = false; // ビデオ挿入済みフラグ\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  if (isVideoInserted) return; // 既にビデオが挿入されていれば何もしない\n  isVideoInserted = true; // ビデオ挿入フラグをtrueに設定\n\n  const videoWrapper = document.querySelector('.sticky-image01');\n  if (videoWrapper) {\n    // ビデオ01の要素を作成してページに挿入\n    const videoElement1 = createVideoElement(_assets_videos_AdobeStock_483252332_mp4__WEBPACK_IMPORTED_MODULE_0__);\n    videoWrapper.appendChild(videoElement1);\n\n    // ビデオ02の要素を作成してページに挿入\n    const videoElement2 = createVideoElement(_assets_videos_AdobeStock_585956923_mp4__WEBPACK_IMPORTED_MODULE_1__);\n    videoWrapper.appendChild(videoElement2);\n\n    // ビデオ03の要素を作成してページに挿入\n    const videoElement3 = createVideoElement(_assets_videos_AdobeStock_732033388_mp4__WEBPACK_IMPORTED_MODULE_2__);\n    videoWrapper.appendChild(videoElement3);\n  } else {\n    console.error('.sticky-image01 element not found');\n  }\n});\nfunction createVideoElement(videoSrc) {\n  const videoElement = document.createElement('video');\n  videoElement.src = videoSrc;\n  videoElement.autoplay = true;\n  videoElement.muted = true;\n  videoElement.loop = true;\n  videoElement.classList.add('sticky-image');\n  return videoElement;\n}\n\n//# sourceURL=webpack://three-shader-env01/./src/video.js?");

/***/ }),

/***/ "./src/assets/videos/AdobeStock_483252332.mp4":
/*!****************************************************!*\
  !*** ./src/assets/videos/AdobeStock_483252332.mp4 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"videos/AdobeStock_483252332.mp4\";\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/videos/AdobeStock_483252332.mp4?");

/***/ }),

/***/ "./src/assets/videos/AdobeStock_585956923.mp4":
/*!****************************************************!*\
  !*** ./src/assets/videos/AdobeStock_585956923.mp4 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"videos/AdobeStock_585956923.mp4\";\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/videos/AdobeStock_585956923.mp4?");

/***/ }),

/***/ "./src/assets/videos/AdobeStock_732033388.mp4":
/*!****************************************************!*\
  !*** ./src/assets/videos/AdobeStock_732033388.mp4 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"videos/AdobeStock_732033388.mp4\";\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/videos/AdobeStock_732033388.mp4?");

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
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/video.js");
/******/ 	
/******/ })()
;