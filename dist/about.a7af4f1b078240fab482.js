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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.css */ \"./src/about.css\");\n/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.js */ \"./src/start.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./light.js */ \"./src/light.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_light_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hamburger.js */ \"./src/hamburger.js\");\n/* harmony import */ var _smooth_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smooth.js */ \"./src/smooth.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\n\n\n\n\n\n\n\n\n// ScrollTriggerをgsapに登録\ngsap__WEBPACK_IMPORTED_MODULE_7__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_8__.ScrollTrigger);\ngsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".logo path, .logo path-text, .menu-btn\", {\n  scrollTrigger: {\n    trigger: \".about-info2-wrapper\",\n    start: \"center center\",\n    // トリガー要素の上端がビューポートの中央に達した時に開始\n    end: \"bottom top\",\n    // トリガー要素の下端がビューポートの下端に達した時に終了\n    onEnter: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".logo-text\", {\n        color: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".logo path\", {\n        fill: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#22201E\"\n      });\n    },\n    onLeave: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".logo-text\", {\n        color: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".logo path\", {\n        fill: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#fff\"\n      });\n    },\n    onEnterBack: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".logo-text\", {\n        color: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".logo path\", {\n        fill: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#22201E\"\n      });\n    },\n    onLeaveBack: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".logo-text\", {\n        color: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".logo path\", {\n        fill: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#fff\"\n      });\n    }\n    //   markers: true\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDcUI7QUFDQTtBQUNBO0FBQ0Q7QUFDRDtBQUNLO0FBQ0o7QUFFUTtBQUN1Qjs7QUFFbkQ7QUFDQUEsc0NBQUksQ0FBQ0UsY0FBYyxDQUFDRCw2REFBYSxDQUFDO0FBRWxDRCxzQ0FBSSxDQUFDRyxFQUFFLENBQUMsd0NBQXdDLEVBQUU7RUFDOUNDLGFBQWEsRUFBRTtJQUNiQyxPQUFPLEVBQUUsc0JBQXNCO0lBQy9CQyxLQUFLLEVBQUUsZUFBZTtJQUFFO0lBQ3hCQyxHQUFHLEVBQUUsWUFBWTtJQUFFO0lBQ25CQyxPQUFPLEVBQUVBLENBQUEsS0FBTTtNQUNiUixzQ0FBSSxDQUFDRyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQUVNLEtBQUssRUFBRTtNQUFVLENBQUMsQ0FBQztNQUMzQ1Qsc0NBQUksQ0FBQ0csRUFBRSxDQUFDLFlBQVksRUFBRTtRQUFFTyxJQUFJLEVBQUU7TUFBVSxDQUFDLENBQUM7TUFDMUNWLHNDQUFJLENBQUNHLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFBRVEsZUFBZSxFQUFFO01BQVUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDREMsT0FBTyxFQUFFQSxDQUFBLEtBQU07TUFDYlosc0NBQUksQ0FBQ0csRUFBRSxDQUFDLFlBQVksRUFBRTtRQUFFTSxLQUFLLEVBQUU7TUFBTyxDQUFDLENBQUM7TUFDeENULHNDQUFJLENBQUNHLEVBQUUsQ0FBQyxZQUFZLEVBQUU7UUFBRU8sSUFBSSxFQUFFO01BQU8sQ0FBQyxDQUFDO01BQ3ZDVixzQ0FBSSxDQUFDRyxFQUFFLENBQUMsV0FBVyxFQUFFO1FBQUVRLGVBQWUsRUFBRTtNQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0RFLFdBQVcsRUFBRUEsQ0FBQSxLQUFNO01BQ2pCYixzQ0FBSSxDQUFDRyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQUVNLEtBQUssRUFBRTtNQUFVLENBQUMsQ0FBQztNQUMzQ1Qsc0NBQUksQ0FBQ0csRUFBRSxDQUFDLFlBQVksRUFBRTtRQUFFTyxJQUFJLEVBQUU7TUFBVSxDQUFDLENBQUM7TUFDMUNWLHNDQUFJLENBQUNHLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFBRVEsZUFBZSxFQUFFO01BQVUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDREcsV0FBVyxFQUFFQSxDQUFBLEtBQU07TUFDakJkLHNDQUFJLENBQUNHLEVBQUUsQ0FBQyxZQUFZLEVBQUU7UUFBRU0sS0FBSyxFQUFFO01BQU8sQ0FBQyxDQUFDO01BQ3hDVCxzQ0FBSSxDQUFDRyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQUVPLElBQUksRUFBRTtNQUFPLENBQUMsQ0FBQztNQUN2Q1Ysc0NBQUksQ0FBQ0csRUFBRSxDQUFDLFdBQVcsRUFBRTtRQUFFUSxlQUFlLEVBQUU7TUFBTyxDQUFDLENBQUM7SUFDbkQ7SUFDRjtFQUNBO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWUtc2hhZGVyLWVudjAxLy4vc3JjL2Fib3V0LmpzPzU4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2Fib3V0LmNzcyc7XG5pbXBvcnQgJy4vc3RhcnQuanMnO1xuaW1wb3J0ICcuL2xpZ2h0LmpzJ1xuaW1wb3J0ICcuL2hhbWJ1cmdlci5qcyc7XG5pbXBvcnQgJy4vc21vb3RoLmpzJ1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcblxuLy8gU2Nyb2xsVHJpZ2dlcuOCkmdzYXDjgavnmbvpjLJcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmdzYXAudG8oXCIubG9nbyBwYXRoLCAubG9nbyBwYXRoLXRleHQsIC5tZW51LWJ0blwiLCB7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIuYWJvdXQtaW5mbzItd3JhcHBlclwiLFxuICAgICAgc3RhcnQ6IFwiY2VudGVyIGNlbnRlclwiLCAvLyDjg4jjg6rjgqzjg7zopoHntKDjga7kuIrnq6/jgYzjg5Pjg6Xjg7zjg53jg7zjg4jjga7kuK3lpK7jgavpgZTjgZfjgZ/mmYLjgavplovlp4tcbiAgICAgIGVuZDogXCJib3R0b20gdG9wXCIsIC8vIOODiOODquOCrOODvOimgee0oOOBruS4i+err+OBjOODk+ODpeODvOODneODvOODiOOBruS4i+err+OBq+mBlOOBl+OBn+aZguOBq+e1guS6hlxuICAgICAgb25FbnRlcjogKCkgPT4ge1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28tdGV4dFwiLCB7IGNvbG9yOiBcIiMyMjIwMUVcIiB9KTtcbiAgICAgICAgZ3NhcC50byhcIi5sb2dvIHBhdGhcIiwgeyBmaWxsOiBcIiMyMjIwMUVcIiB9KTsgXG4gICAgICAgIGdzYXAudG8oXCIubWVudS1idG5cIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIyMjAxRVwiIH0pO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmU6ICgpID0+IHtcbiAgICAgICAgZ3NhcC50byhcIi5sb2dvLXRleHRcIiwgeyBjb2xvcjogXCIjZmZmXCIgfSk7XG4gICAgICAgIGdzYXAudG8oXCIubG9nbyBwYXRoXCIsIHsgZmlsbDogXCIjZmZmXCIgfSk7XG4gICAgICAgIGdzYXAudG8oXCIubWVudS1idG5cIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiIH0pO1xuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOiAoKSA9PiB7XG4gICAgICAgIGdzYXAudG8oXCIubG9nby10ZXh0XCIsIHsgY29sb3I6IFwiIzIyMjAxRVwiIH0pO1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28gcGF0aFwiLCB7IGZpbGw6IFwiIzIyMjAxRVwiIH0pO1xuICAgICAgICBnc2FwLnRvKFwiLm1lbnUtYnRuXCIsIHsgYmFja2dyb3VuZENvbG9yOiBcIiMyMjIwMUVcIiB9KTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogKCkgPT4ge1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28tdGV4dFwiLCB7IGNvbG9yOiBcIiNmZmZcIiB9KTtcbiAgICAgICAgZ3NhcC50byhcIi5sb2dvIHBhdGhcIiwgeyBmaWxsOiBcIiNmZmZcIiB9KTtcbiAgICAgICAgZ3NhcC50byhcIi5tZW51LWJ0blwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIgfSk7XG4gICAgICB9LFxuICAgIC8vICAgbWFya2VyczogdHJ1ZVxuICAgIH1cbiAgfSk7XG4iXSwibmFtZXMiOlsiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsInRvIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsImVuZCIsIm9uRW50ZXIiLCJjb2xvciIsImZpbGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkxlYXZlIiwib25FbnRlckJhY2siLCJvbkxlYXZlQmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/about.css":
/*!***********************!*\
  !*** ./src/about.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlLXNoYWRlci1lbnYwMS8uL3NyYy9hYm91dC5jc3M/OGQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/about.css\n");

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
/******/ 			"about": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_studio-fre-78703a","vendors-node_modules_three_build_three_module_js","default-src_index_js-src_start_js"], () => (__webpack_require__("./src/about.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;