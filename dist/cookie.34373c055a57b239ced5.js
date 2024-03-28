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

/***/ "./src/cookie.js":
/*!***********************!*\
  !*** ./src/cookie.js ***!
  \***********************/
/***/ (() => {

eval("(function () {\n  const expire = 365; // 有効期限（日）\n  let cc = document.querySelector('.cookie-consent');\n  let ca = document.querySelector('.cookie-agree');\n  const flag = localStorage.getItem('popupFlag');\n  if (flag != null) {\n    const data = JSON.parse(flag);\n    if (data['value'] == 'true') {\n      window.onscroll = () => {\n        if (window.pageYOffset) {\n          popup();\n        }\n      };\n    } else {\n      const current = new Date();\n      if (current.getTime() > data['expire']) {\n        setWithExpiry('popupFlag', 'true', expire);\n        window.onscroll = () => {\n          if (window.pageYOffset) {\n            popup();\n          }\n        };\n      }\n    }\n  } else {\n    setWithExpiry('popupFlag', 'true', expire);\n    window.onscroll = () => {\n      if (window.pageYOffset) {\n        popup();\n      }\n    };\n  }\n  ca.addEventListener('click', () => {\n    cc.classList.add('cc-hide1');\n    setWithExpiry('popupFlag', 'false', expire);\n  });\n  function setWithExpiry(key, value, expire) {\n    const current = new Date();\n    expire = current.getTime() + expire * 24 * 3600 * 1000;\n    const item = {\n      value: value,\n      expire: expire\n    };\n    localStorage.setItem(key, JSON.stringify(item));\n  }\n  function popup() {\n    cc.classList.add('is-show');\n  }\n})();\n\n//# sourceURL=webpack://three-shader-env01/./src/cookie.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/cookie.js"]();
/******/ 	
/******/ })()
;