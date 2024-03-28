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

/***/ "./src/light.js":
/*!**********************!*\
  !*** ./src/light.js ***!
  \**********************/
/***/ (() => {

eval("const light = document.querySelector('.light');\nlet height = 200;\nlet width = 200;\ndocument.addEventListener('mousemove', function (e) {\n  setPosition(e);\n});\ndocument.addEventListener('touchmove', function (e) {\n  setPosition(e);\n});\nfunction setPosition(e) {\n  light.style.top = e.pageY - height / 2 + \"px\";\n  light.style.left = e.pageX - width / 2 + \"px\";\n}\n\n//# sourceURL=webpack://three-shader-env01/./src/light.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/light.js"]();
/******/ 	
/******/ })()
;