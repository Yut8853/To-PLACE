/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/policy.js":
/*!***********************!*\
  !*** ./src/policy.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _policy_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy.css */ \"./src/policy.css\");\n/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.js */ \"./src/start.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./light.js */ \"./src/light.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_light_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hamburger.js */ \"./src/hamburger.js\");\n/* harmony import */ var _smooth_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smooth.js */ \"./src/smooth.js\");\n/* harmony import */ var _music_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./music.js */ \"./src/music.js\");\n/* harmony import */ var _assets_videos_loops_7_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/videos/loops_7.wav */ \"./src/assets/videos/loops_7.wav\");\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // 音楽ファイルのパスを直接指定\n  let audio = new Audio(_assets_videos_loops_7_wav__WEBPACK_IMPORTED_MODULE_8__);\n  audio.loop = true;\n\n  // localStorageから再生状態と再生位置を取得\n  const isPlaying = localStorage.getItem('isPlaying') === 'true';\n  const currentPosition = parseFloat(localStorage.getItem('currentPosition')) || 0;\n  if (isPlaying) {\n    // 再生位置を設定してから再生開始\n    audio.currentTime = currentPosition;\n    audio.play().then(() => {\n      // 再生成功時の処理\n    }).catch(error => {\n      console.error('Audio playback failed:', error);\n      // 自動再生がブロックされた場合などのエラーハンドリング\n    });\n\n    // 再生位置を定期的に更新\n    setInterval(() => {\n      localStorage.setItem('currentPosition', audio.currentTime.toString());\n    }, 10000); // 1秒ごとに更新\n  }\n});\nwindow.addEventListener('DOMContentLoaded', () => {\n  setTimeout(() => {\n    loader();\n  }, 100);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcG9saWN5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFCO0FBQ0E7QUFDQztBQUNGO0FBQ0Q7QUFDSztBQUNKO0FBQ0Q7QUFDNkI7QUFHaERDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRDtFQUNBLElBQUlDLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUNKLHVEQUFLLENBQUM7RUFDNUJHLEtBQUssQ0FBQ0UsSUFBSSxHQUFHLElBQUk7O0VBRWpCO0VBQ0EsTUFBTUMsU0FBUyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxNQUFNO0VBQzlELE1BQU1DLGVBQWUsR0FBR0MsVUFBVSxDQUFDSCxZQUFZLENBQUNDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQztFQUVoRixJQUFJRixTQUFTLEVBQUU7SUFDWDtJQUNBSCxLQUFLLENBQUNRLFdBQVcsR0FBR0YsZUFBZTtJQUNuQ04sS0FBSyxDQUFDUyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsTUFBTTtNQUNwQjtJQUFBLENBQ0gsQ0FBQyxDQUFDQyxLQUFLLENBQUNDLEtBQUssSUFBSTtNQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyx3QkFBd0IsRUFBRUEsS0FBSyxDQUFDO01BQzlDO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0FFLFdBQVcsQ0FBQyxNQUFNO01BQ2RWLFlBQVksQ0FBQ1csT0FBTyxDQUFDLGlCQUFpQixFQUFFZixLQUFLLENBQUNRLFdBQVcsQ0FBQ1EsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUNmO0FBQ0osQ0FBQyxDQUFDO0FBRUZDLE1BQU0sQ0FBQ2xCLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQUs7RUFDN0NtQixVQUFVLENBQUMsTUFBTTtJQUNiQyxNQUFNLENBQUMsQ0FBQztFQUNaLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDWCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZS1zaGFkZXItZW52MDEvLi9zcmMvcG9saWN5LmpzP2FlYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9wb2xpY3kuY3NzJztcbmltcG9ydCAnLi9zdGFydC5qcyc7XG5pbXBvcnQgJy4vbGlnaHQuanMnXG5pbXBvcnQgJy4vaGFtYnVyZ2VyLmpzJztcbmltcG9ydCAnLi9zbW9vdGguanMnXG5pbXBvcnQgJy4vbXVzaWMuanMnXG5pbXBvcnQgbXVzaWMgZnJvbSAnLi9hc3NldHMvdmlkZW9zL2xvb3BzXzcud2F2JztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIOmfs+alveODleOCoeOCpOODq+OBruODkeOCueOCkuebtOaOpeaMh+WumlxuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhtdXNpYyk7XG4gICAgYXVkaW8ubG9vcCA9IHRydWU7XG5cbiAgICAvLyBsb2NhbFN0b3JhZ2XjgYvjgonlho3nlJ/nirbmhYvjgajlho3nlJ/kvY3nva7jgpLlj5blvpdcbiAgICBjb25zdCBpc1BsYXlpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNQbGF5aW5nJykgPT09ICd0cnVlJztcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBwYXJzZUZsb2F0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UG9zaXRpb24nKSkgfHwgMDtcblxuICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgICAgLy8g5YaN55Sf5L2N572u44KS6Kit5a6a44GX44Gm44GL44KJ5YaN55Sf6ZaL5aeLXG4gICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gY3VycmVudFBvc2l0aW9uO1xuICAgICAgICBhdWRpby5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyDlho3nlJ/miJDlip/mmYLjga7lh6bnkIZcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQXVkaW8gcGxheWJhY2sgZmFpbGVkOicsIGVycm9yKTtcbiAgICAgICAgICAgIC8vIOiHquWLleWGjeeUn+OBjOODluODreODg+OCr+OBleOCjOOBn+WgtOWQiOOBquOBqeOBruOCqOODqeODvOODj+ODs+ODieODquODs+OCsFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDlho3nlJ/kvY3nva7jgpLlrprmnJ/nmoTjgavmm7TmlrBcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQb3NpdGlvbicsIGF1ZGlvLmN1cnJlbnRUaW1lLnRvU3RyaW5nKCkpO1xuICAgICAgICB9LCAxMDAwMCk7IC8vIDHnp5LjgZTjgajjgavmm7TmlrBcbiAgICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbG9hZGVyKCk7XG4gICAgfSwgMTAwKTtcbn0pIl0sIm5hbWVzIjpbIm11c2ljIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXVkaW8iLCJBdWRpbyIsImxvb3AiLCJpc1BsYXlpbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY3VycmVudFBvc2l0aW9uIiwicGFyc2VGbG9hdCIsImN1cnJlbnRUaW1lIiwicGxheSIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInNldEludGVydmFsIiwic2V0SXRlbSIsInRvU3RyaW5nIiwid2luZG93Iiwic2V0VGltZW91dCIsImxvYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/policy.js\n");

/***/ }),

/***/ "./src/policy.css":
/*!************************!*\
  !*** ./src/policy.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcG9saWN5LmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZS1zaGFkZXItZW52MDEvLi9zcmMvcG9saWN5LmNzcz8wNTljIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/policy.css\n");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
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
/******/ 			"policy": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_studio-fre-78703a","vendors-node_modules_three_build_three_module_js","default-src_music_js-src_start_js"], () => (__webpack_require__("./src/policy.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;