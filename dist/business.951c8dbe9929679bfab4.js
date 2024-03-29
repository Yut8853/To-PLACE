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

/***/ "./src/business.js":
/*!*************************!*\
  !*** ./src/business.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loader2: () => (/* binding */ loader2)\n/* harmony export */ });\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _business_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business.css */ \"./src/business.css\");\n/* harmony import */ var _start2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start2.js */ \"./src/start2.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./light.js */ \"./src/light.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_light_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hamburger.js */ \"./src/hamburger.js\");\n/* harmony import */ var _smooth_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smooth.js */ \"./src/smooth.js\");\n/* harmony import */ var _music_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./music.js */ \"./src/music.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _assets_videos_loops_7_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/videos/loops_7.wav */ \"./src/assets/videos/loops_7.wav\");\n\n\n\n\n\n\n\n\n\n\nconsole.log('business.js');\ndocument.addEventListener('DOMContentLoaded', () => {\n  // 音楽ファイルのパスを直接指定\n  let audio = new Audio(_assets_videos_loops_7_wav__WEBPACK_IMPORTED_MODULE_8__);\n  audio.loop = true;\n\n  // localStorageから再生状態と再生位置を取得\n  const isPlaying = localStorage.getItem('isPlaying') === 'true';\n  const currentPosition = parseFloat(localStorage.getItem('currentPosition')) || 0;\n  if (isPlaying) {\n    // 再生位置を設定してから再生開始\n    audio.currentTime = currentPosition;\n    audio.play().then(() => {\n      // 再生成功時の処理\n    }).catch(error => {\n      console.error('Audio playback failed:', error);\n      // 自動再生がブロックされた場合などのエラーハンドリング\n    });\n\n    // 再生位置を定期的に更新\n    setInterval(() => {\n      localStorage.setItem('currentPosition', audio.currentTime.toString());\n    }, 100); // 1秒ごとに更新\n  }\n});\nfunction loader2() {\n  let loadItem = document.querySelectorAll('.loader__bg');\n  let header = document.querySelector('header');\n  const tl = gsap__WEBPACK_IMPORTED_MODULE_9__[\"default\"].timeline();\n  gsap__WEBPACK_IMPORTED_MODULE_9__[\"default\"].set(loadItem, {\n    transformOrigin: '100% 100%',\n    scaleX: 1\n  }), tl.to(loadItem, {\n    scaleX: 0,\n    transformOrigin: '0% 0%',\n    stagger: 0.07,\n    ease: 'power4.inOut'\n  });\n  tl.to(header, {\n    y: 0,\n    duration: 1,\n    ease: 'power4.inOut'\n  });\n}\nwindow.addEventListener('DOMContentLoaded', () => {\n  setTimeout(() => {\n    loader2();\n  }, 100);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnVzaW5lc3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFCO0FBQ0E7QUFDRztBQUNIO0FBQ0Y7QUFDSztBQUNKO0FBQ0Q7QUFDSztBQUN3QjtBQUVoREUsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBRTFCQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQ7RUFDQSxJQUFJQyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFDTix1REFBSyxDQUFDO0VBQzVCSyxLQUFLLENBQUNFLElBQUksR0FBRyxJQUFJOztFQUVqQjtFQUNBLE1BQU1DLFNBQVMsR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssTUFBTTtFQUM5RCxNQUFNQyxlQUFlLEdBQUdDLFVBQVUsQ0FBQ0gsWUFBWSxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUM7RUFFaEYsSUFBSUYsU0FBUyxFQUFFO0lBQ1g7SUFDQUgsS0FBSyxDQUFDUSxXQUFXLEdBQUdGLGVBQWU7SUFDbkNOLEtBQUssQ0FBQ1MsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE1BQU07TUFDcEI7SUFBQSxDQUNILENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLElBQUk7TUFDZGhCLE9BQU8sQ0FBQ2dCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRUEsS0FBSyxDQUFDO01BQzlDO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0FDLFdBQVcsQ0FBQyxNQUFNO01BQ2RULFlBQVksQ0FBQ1UsT0FBTyxDQUFDLGlCQUFpQixFQUFFZCxLQUFLLENBQUNRLFdBQVcsQ0FBQ08sUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUNiO0FBQ0osQ0FBQyxDQUFDO0FBRUssU0FBU0MsT0FBT0EsQ0FBQSxFQUFHO0VBQ3RCLElBQUlDLFFBQVEsR0FBR25CLFFBQVEsQ0FBQ29CLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztFQUN2RCxJQUFJQyxNQUFNLEdBQUdyQixRQUFRLENBQUNzQixhQUFhLENBQUMsUUFBUSxDQUFDO0VBRTdDLE1BQU1DLEVBQUUsR0FBRzNCLDRDQUFJLENBQUM0QixRQUFRLENBQUMsQ0FBQztFQUMxQjVCLDRDQUFJLENBQUM2QixHQUFHLENBQUNOLFFBQVEsRUFBQztJQUNkTyxlQUFlLEVBQUUsV0FBVztJQUM1QkMsTUFBTSxFQUFFO0VBQ1osQ0FBQyxDQUFDLEVBQ0ZKLEVBQUUsQ0FBQ0ssRUFBRSxDQUFDVCxRQUFRLEVBQUM7SUFDWFEsTUFBTSxFQUFFLENBQUM7SUFDVEQsZUFBZSxFQUFFLE9BQU87SUFDeEJHLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLElBQUksRUFBRTtFQUNWLENBQUMsQ0FBQztFQUNGUCxFQUFFLENBQUNLLEVBQUUsQ0FBQ1AsTUFBTSxFQUFFO0lBQ1ZVLENBQUMsRUFBRSxDQUFDO0lBQ0pDLFFBQVEsRUFBRSxDQUFDO0lBQ1hGLElBQUksRUFBRTtFQUNWLENBQUMsQ0FBQztBQUNOO0FBRUFHLE1BQU0sQ0FBQ2hDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQUs7RUFDN0NpQyxVQUFVLENBQUMsTUFBTTtJQUNiaEIsT0FBTyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQ1gsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWUtc2hhZGVyLWVudjAxLy4vc3JjL2J1c2luZXNzLmpzPzhiYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9idXNpbmVzcy5jc3MnO1xuaW1wb3J0ICcuL3N0YXJ0Mi5qcyc7XG5pbXBvcnQgJy4vbGlnaHQuanMnXG5pbXBvcnQgJy4vaGFtYnVyZ2VyLmpzJztcbmltcG9ydCAnLi9zbW9vdGguanMnXG5pbXBvcnQgJy4vbXVzaWMuanMnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbmltcG9ydCBtdXNpYyBmcm9tICcuL2Fzc2V0cy92aWRlb3MvbG9vcHNfNy53YXYnO1xuXG5jb25zb2xlLmxvZygnYnVzaW5lc3MuanMnKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIOmfs+alveODleOCoeOCpOODq+OBruODkeOCueOCkuebtOaOpeaMh+WumlxuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhtdXNpYyk7XG4gICAgYXVkaW8ubG9vcCA9IHRydWU7XG5cbiAgICAvLyBsb2NhbFN0b3JhZ2XjgYvjgonlho3nlJ/nirbmhYvjgajlho3nlJ/kvY3nva7jgpLlj5blvpdcbiAgICBjb25zdCBpc1BsYXlpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNQbGF5aW5nJykgPT09ICd0cnVlJztcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBwYXJzZUZsb2F0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UG9zaXRpb24nKSkgfHwgMDtcblxuICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgICAgLy8g5YaN55Sf5L2N572u44KS6Kit5a6a44GX44Gm44GL44KJ5YaN55Sf6ZaL5aeLXG4gICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gY3VycmVudFBvc2l0aW9uO1xuICAgICAgICBhdWRpby5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyDlho3nlJ/miJDlip/mmYLjga7lh6bnkIZcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQXVkaW8gcGxheWJhY2sgZmFpbGVkOicsIGVycm9yKTtcbiAgICAgICAgICAgIC8vIOiHquWLleWGjeeUn+OBjOODluODreODg+OCr+OBleOCjOOBn+WgtOWQiOOBquOBqeOBruOCqOODqeODvOODj+ODs+ODieODquODs+OCsFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDlho3nlJ/kvY3nva7jgpLlrprmnJ/nmoTjgavmm7TmlrBcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQb3NpdGlvbicsIGF1ZGlvLmN1cnJlbnRUaW1lLnRvU3RyaW5nKCkpO1xuICAgICAgICB9LCAxMDApOyAvLyAx56eS44GU44Go44Gr5pu05pawXG4gICAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXIyKCkge1xuICAgIGxldCBsb2FkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2FkZXJfX2JnJyk7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgIFxuICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpXG4gICAgZ3NhcC5zZXQobG9hZEl0ZW0se1xuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcxMDAlIDEwMCUnLFxuICAgICAgICBzY2FsZVg6IDFcbiAgICB9KSxcbiAgICB0bC50byhsb2FkSXRlbSx7XG4gICAgICAgIHNjYWxlWDogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnLFxuICAgICAgICBzdGFnZ2VyOiAwLjA3LFxuICAgICAgICBlYXNlOiAncG93ZXI0LmluT3V0J1xuICAgIH0pXG4gICAgdGwudG8oaGVhZGVyLCB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBlYXNlOiAncG93ZXI0LmluT3V0J1xuICAgIH0pXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxvYWRlcjIoKTtcbiAgICB9LCAxMDApO1xufSlcblxuIl0sIm5hbWVzIjpbImdzYXAiLCJtdXNpYyIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdWRpbyIsIkF1ZGlvIiwibG9vcCIsImlzUGxheWluZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjdXJyZW50UG9zaXRpb24iLCJwYXJzZUZsb2F0IiwiY3VycmVudFRpbWUiLCJwbGF5IiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJzZXRJbnRlcnZhbCIsInNldEl0ZW0iLCJ0b1N0cmluZyIsImxvYWRlcjIiLCJsb2FkSXRlbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoZWFkZXIiLCJxdWVyeVNlbGVjdG9yIiwidGwiLCJ0aW1lbGluZSIsInNldCIsInRyYW5zZm9ybU9yaWdpbiIsInNjYWxlWCIsInRvIiwic3RhZ2dlciIsImVhc2UiLCJ5IiwiZHVyYXRpb24iLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/business.js\n");

/***/ }),

/***/ "./src/start2.js":
/*!***********************!*\
  !*** ./src/start2.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loader2: () => (/* binding */ loader2)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nfunction loader2() {\n  let loadItem = document.querySelectorAll('.loader__bg');\n  const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(loadItem, {\n    transformOrigin: '100% 100%',\n    scaleX: 1\n  }), tl.to(loadItem, {\n    scaleX: 0,\n    transformOrigin: '0% 0%',\n    stagger: 0.07,\n    ease: 'power4.inOut'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhcnQyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdCO0FBRWpCLFNBQVNDLE9BQU9BLENBQUEsRUFBRztFQUN0QixJQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0VBRXZELE1BQU1DLEVBQUUsR0FBR0wsNENBQUksQ0FBQ00sUUFBUSxDQUFDLENBQUM7RUFDMUJOLDRDQUFJLENBQUNPLEdBQUcsQ0FBQ0wsUUFBUSxFQUFDO0lBQ2RNLGVBQWUsRUFBRSxXQUFXO0lBQzVCQyxNQUFNLEVBQUU7RUFDWixDQUFDLENBQUMsRUFDRkosRUFBRSxDQUFDSyxFQUFFLENBQUNSLFFBQVEsRUFBQztJQUNYTyxNQUFNLEVBQUUsQ0FBQztJQUNURCxlQUFlLEVBQUUsT0FBTztJQUN4QkcsT0FBTyxFQUFFLElBQUk7SUFDYkMsSUFBSSxFQUFFO0VBQ1YsQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZS1zaGFkZXItZW52MDEvLi9zcmMvc3RhcnQyLmpzPzMwOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXIyKCkge1xuICAgIGxldCBsb2FkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2FkZXJfX2JnJyk7XG4gICAgXG4gICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKClcbiAgICBnc2FwLnNldChsb2FkSXRlbSx7XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJScsXG4gICAgICAgIHNjYWxlWDogMVxuICAgIH0pLFxuICAgIHRsLnRvKGxvYWRJdGVtLHtcbiAgICAgICAgc2NhbGVYOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJScsXG4gICAgICAgIHN0YWdnZXI6IDAuMDcsXG4gICAgICAgIGVhc2U6ICdwb3dlcjQuaW5PdXQnXG4gICAgfSlcbn1cblxuXG4iXSwibmFtZXMiOlsiZ3NhcCIsImxvYWRlcjIiLCJsb2FkSXRlbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRsIiwidGltZWxpbmUiLCJzZXQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJzY2FsZVgiLCJ0byIsInN0YWdnZXIiLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/start2.js\n");

/***/ }),

/***/ "./src/business.css":
/*!**************************!*\
  !*** ./src/business.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnVzaW5lc3MuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlLXNoYWRlci1lbnYwMS8uL3NyYy9idXNpbmVzcy5jc3M/OTM3NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/business.css\n");

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
/******/ 			"business": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_studio-fre-78703a","vendors-node_modules_three_build_three_module_js","default-src_music_js-src_start_js"], () => (__webpack_require__("./src/business.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;