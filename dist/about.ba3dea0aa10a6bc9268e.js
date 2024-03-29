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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.css */ \"./src/about.css\");\n/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.js */ \"./src/start.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./light.js */ \"./src/light.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_light_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hamburger.js */ \"./src/hamburger.js\");\n/* harmony import */ var _smooth_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smooth.js */ \"./src/smooth.js\");\n/* harmony import */ var _music_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./music.js */ \"./src/music.js\");\n/* harmony import */ var _assets_videos_loops_7_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/videos/loops_7.wav */ \"./src/assets/videos/loops_7.wav\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n// ScrollTriggerをgsapに登録\ngsap__WEBPACK_IMPORTED_MODULE_9__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_10__.ScrollTrigger);\ngsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".logo path, .logo path-text, .menu-btn\", {\n  scrollTrigger: {\n    trigger: \".about-info2-wrapper\",\n    start: \"center center\",\n    // トリガー要素の上端がビューポートの中央に達した時に開始\n    end: \"bottom top\",\n    // トリガー要素の下端がビューポートの下端に達した時に終了\n    onEnter: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".logo-text\", {\n        color: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".logo path\", {\n        fill: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#22201E\"\n      });\n    },\n    onLeave: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".logo-text\", {\n        color: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".logo path\", {\n        fill: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#fff\"\n      });\n    },\n    onEnterBack: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".logo-text\", {\n        color: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".logo path\", {\n        fill: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#22201E\"\n      });\n    },\n    onLeaveBack: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".logo-text\", {\n        color: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".logo path\", {\n        fill: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#fff\"\n      });\n    }\n    //   markers: true\n  }\n});\ndocument.addEventListener('DOMContentLoaded', () => {\n  // 音楽ファイルのパスを直接指定\n  let audio = new Audio(_assets_videos_loops_7_wav__WEBPACK_IMPORTED_MODULE_8__);\n  audio.loop = true;\n\n  // localStorageから再生状態と再生位置を取得\n  const isPlaying = localStorage.getItem('isPlaying') === 'true';\n  const currentPosition = parseFloat(localStorage.getItem('currentPosition')) || 0;\n  if (isPlaying) {\n    // 再生位置を設定してから再生開始\n    audio.currentTime = currentPosition;\n    audio.play().then(() => {\n      // 再生成功時の処理\n    }).catch(error => {\n      console.error('Audio playback failed:', error);\n      // 自動再生がブロックされた場合などのエラーハンドリング\n    });\n\n    // 再生位置を定期的に更新\n    setInterval(() => {\n      localStorage.setItem('currentPosition', audio.currentTime.toString());\n    }, 10000); // 1秒ごとに更新\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBLEtBQUssQ0FBQztNQUM5QztJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBRSxXQUFXLENBQUMsTUFBTTtNQUNkVixZQUFZLENBQUNXLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRWYsS0FBSyxDQUFDUSxXQUFXLENBQUNRLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDZjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlLXNoYWRlci1lbnYwMS8uL3NyYy9hYm91dC5qcz81ODY0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9hYm91dC5jc3MnO1xuaW1wb3J0ICcuL3N0YXJ0LmpzJztcbmltcG9ydCAnLi9saWdodC5qcydcbmltcG9ydCAnLi9oYW1idXJnZXIuanMnO1xuaW1wb3J0ICcuL3Ntb290aC5qcydcbmltcG9ydCAnLi9tdXNpYy5qcydcbmltcG9ydCBtdXNpYyBmcm9tICcuL2Fzc2V0cy92aWRlb3MvbG9vcHNfNy53YXYnO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcblxuLy8gU2Nyb2xsVHJpZ2dlcuOCkmdzYXDjgavnmbvpjLJcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmdzYXAudG8oXCIubG9nbyBwYXRoLCAubG9nbyBwYXRoLXRleHQsIC5tZW51LWJ0blwiLCB7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIuYWJvdXQtaW5mbzItd3JhcHBlclwiLFxuICAgICAgc3RhcnQ6IFwiY2VudGVyIGNlbnRlclwiLCAvLyDjg4jjg6rjgqzjg7zopoHntKDjga7kuIrnq6/jgYzjg5Pjg6Xjg7zjg53jg7zjg4jjga7kuK3lpK7jgavpgZTjgZfjgZ/mmYLjgavplovlp4tcbiAgICAgIGVuZDogXCJib3R0b20gdG9wXCIsIC8vIOODiOODquOCrOODvOimgee0oOOBruS4i+err+OBjOODk+ODpeODvOODneODvOODiOOBruS4i+err+OBq+mBlOOBl+OBn+aZguOBq+e1guS6hlxuICAgICAgb25FbnRlcjogKCkgPT4ge1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28tdGV4dFwiLCB7IGNvbG9yOiBcIiMyMjIwMUVcIiB9KTtcbiAgICAgICAgZ3NhcC50byhcIi5sb2dvIHBhdGhcIiwgeyBmaWxsOiBcIiMyMjIwMUVcIiB9KTsgXG4gICAgICAgIGdzYXAudG8oXCIubWVudS1idG5cIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIyMjAxRVwiIH0pO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmU6ICgpID0+IHtcbiAgICAgICAgZ3NhcC50byhcIi5sb2dvLXRleHRcIiwgeyBjb2xvcjogXCIjZmZmXCIgfSk7XG4gICAgICAgIGdzYXAudG8oXCIubG9nbyBwYXRoXCIsIHsgZmlsbDogXCIjZmZmXCIgfSk7XG4gICAgICAgIGdzYXAudG8oXCIubWVudS1idG5cIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiIH0pO1xuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOiAoKSA9PiB7XG4gICAgICAgIGdzYXAudG8oXCIubG9nby10ZXh0XCIsIHsgY29sb3I6IFwiIzIyMjAxRVwiIH0pO1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28gcGF0aFwiLCB7IGZpbGw6IFwiIzIyMjAxRVwiIH0pO1xuICAgICAgICBnc2FwLnRvKFwiLm1lbnUtYnRuXCIsIHsgYmFja2dyb3VuZENvbG9yOiBcIiMyMjIwMUVcIiB9KTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogKCkgPT4ge1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28tdGV4dFwiLCB7IGNvbG9yOiBcIiNmZmZcIiB9KTtcbiAgICAgICAgZ3NhcC50byhcIi5sb2dvIHBhdGhcIiwgeyBmaWxsOiBcIiNmZmZcIiB9KTtcbiAgICAgICAgZ3NhcC50byhcIi5tZW51LWJ0blwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIgfSk7XG4gICAgICB9LFxuICAgIC8vICAgbWFya2VyczogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyDpn7Pmpb3jg5XjgqHjgqTjg6vjga7jg5HjgrnjgpLnm7TmjqXmjIflrppcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8obXVzaWMpO1xuICAgIGF1ZGlvLmxvb3AgPSB0cnVlO1xuXG4gICAgLy8gbG9jYWxTdG9yYWdl44GL44KJ5YaN55Sf54q25oWL44Go5YaN55Sf5L2N572u44KS5Y+W5b6XXG4gICAgY29uc3QgaXNQbGF5aW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzUGxheWluZycpID09PSAndHJ1ZSc7XG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gcGFyc2VGbG9hdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFBvc2l0aW9uJykpIHx8IDA7XG5cbiAgICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgICAgIC8vIOWGjeeUn+S9jee9ruOCkuioreWumuOBl+OBpuOBi+OCieWGjeeUn+mWi+Wni1xuICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IGN1cnJlbnRQb3NpdGlvbjtcbiAgICAgICAgYXVkaW8ucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8g5YaN55Sf5oiQ5Yqf5pmC44Gu5Yem55CGXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F1ZGlvIHBsYXliYWNrIGZhaWxlZDonLCBlcnJvcik7XG4gICAgICAgICAgICAvLyDoh6rli5Xlho3nlJ/jgYzjg5bjg63jg4Pjgq/jgZXjgozjgZ/loLTlkIjjgarjganjga7jgqjjg6njg7zjg4/jg7Pjg4njg6rjg7PjgrBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g5YaN55Sf5L2N572u44KS5a6a5pyf55qE44Gr5pu05pawXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UG9zaXRpb24nLCBhdWRpby5jdXJyZW50VGltZS50b1N0cmluZygpKTtcbiAgICAgICAgfSwgMTAwMDApOyAvLyAx56eS44GU44Go44Gr5pu05pawXG4gICAgfVxufSk7Il0sIm5hbWVzIjpbIm11c2ljIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsInRvIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsImVuZCIsIm9uRW50ZXIiLCJjb2xvciIsImZpbGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkxlYXZlIiwib25FbnRlckJhY2siLCJvbkxlYXZlQmFjayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImF1ZGlvIiwiQXVkaW8iLCJsb29wIiwiaXNQbGF5aW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1cnJlbnRQb3NpdGlvbiIsInBhcnNlRmxvYXQiLCJjdXJyZW50VGltZSIsInBsYXkiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJzZXRJbnRlcnZhbCIsInNldEl0ZW0iLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/about.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_studio-fre-78703a","vendors-node_modules_three_build_three_module_js","default-src_music_js-src_start_js"], () => (__webpack_require__("./src/about.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;