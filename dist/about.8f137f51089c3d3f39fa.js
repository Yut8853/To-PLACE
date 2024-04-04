/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.css */ \"./src/about.css\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./light.js */ \"./src/light.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_light_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburger.js */ \"./src/hamburger.js\");\n/* harmony import */ var _smooth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smooth.js */ \"./src/smooth.js\");\n/* harmony import */ var _under_start_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./under-start.js */ \"./src/under-start.js\");\n/* harmony import */ var _scrollControl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrollControl.js */ \"./src/scrollControl.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\n\n\n\n\n\n\n(0,_scrollControl_js__WEBPACK_IMPORTED_MODULE_7__.enableScroll)();\n\n\n\n// ScrollTriggerをgsapに登録\ngsap__WEBPACK_IMPORTED_MODULE_8__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_9__.ScrollTrigger);\ngsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".logo path, .logo path-text, .menu-btn\", {\n  scrollTrigger: {\n    trigger: \".about-info2-wrapper\",\n    start: \"center center\",\n    // トリガー要素の上端がビューポートの中央に達した時に開始\n    end: \"bottom top\",\n    // トリガー要素の下端がビューポートの下端に達した時に終了\n    onEnter: function onEnter() {\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".logo-text\", {\n        color: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".logo path\", {\n        fill: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#22201E\"\n      });\n    },\n    onLeave: function onLeave() {\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".logo-text\", {\n        color: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".logo path\", {\n        fill: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#fff\"\n      });\n    },\n    onEnterBack: function onEnterBack() {\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".logo-text\", {\n        color: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".logo path\", {\n        fill: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#22201E\"\n      });\n    },\n    onLeaveBack: function onLeaveBack() {\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".logo-text\", {\n        color: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".logo path\", {\n        fill: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#fff\"\n      });\n    }\n    //   markers: true\n  }\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n  var textElements = gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.utils.toArray('.text-effect');\n  textElements.forEach(function (text) {\n    gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(text, {\n      backgroundSize: '100%',\n      ease: 'power1.inOut',\n      scrollTrigger: {\n        trigger: text,\n        start: 'top bottom',\n        // 要素の上端がビューポートの下端に達した時点で発火\n        end: 'top 70%',\n        scrub: true,\n        once: true\n        // markers: true,\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmVlLXNoYWRlci1lbnYwMS8uL3NyYy9hYm91dC5qcz81ODY0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9hYm91dC5jc3MnO1xuaW1wb3J0ICcuL2xpZ2h0LmpzJ1xuaW1wb3J0ICcuL2hhbWJ1cmdlci5qcyc7XG5pbXBvcnQgJy4vc21vb3RoLmpzJ1xuaW1wb3J0ICcuL3VuZGVyLXN0YXJ0LmpzJ1xuaW1wb3J0IHsgZGlzYWJsZVNjcm9sbCwgZW5hYmxlU2Nyb2xsIH0gZnJvbSAnLi9zY3JvbGxDb250cm9sLmpzJztcbmVuYWJsZVNjcm9sbCgpO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcblxuLy8gU2Nyb2xsVHJpZ2dlcuOCkmdzYXDjgavnmbvpjLJcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmdzYXAudG8oXCIubG9nbyBwYXRoLCAubG9nbyBwYXRoLXRleHQsIC5tZW51LWJ0blwiLCB7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIuYWJvdXQtaW5mbzItd3JhcHBlclwiLFxuICAgICAgc3RhcnQ6IFwiY2VudGVyIGNlbnRlclwiLCAvLyDjg4jjg6rjgqzjg7zopoHntKDjga7kuIrnq6/jgYzjg5Pjg6Xjg7zjg53jg7zjg4jjga7kuK3lpK7jgavpgZTjgZfjgZ/mmYLjgavplovlp4tcbiAgICAgIGVuZDogXCJib3R0b20gdG9wXCIsIC8vIOODiOODquOCrOODvOimgee0oOOBruS4i+err+OBjOODk+ODpeODvOODneODvOODiOOBruS4i+err+OBq+mBlOOBl+OBn+aZguOBq+e1guS6hlxuICAgICAgb25FbnRlcjogKCkgPT4ge1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28tdGV4dFwiLCB7IGNvbG9yOiBcIiMyMjIwMUVcIiB9KTtcbiAgICAgICAgZ3NhcC50byhcIi5sb2dvIHBhdGhcIiwgeyBmaWxsOiBcIiMyMjIwMUVcIiB9KTsgXG4gICAgICAgIGdzYXAudG8oXCIubWVudS1idG5cIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIyMjAxRVwiIH0pO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmU6ICgpID0+IHtcbiAgICAgICAgZ3NhcC50byhcIi5sb2dvLXRleHRcIiwgeyBjb2xvcjogXCIjZmZmXCIgfSk7XG4gICAgICAgIGdzYXAudG8oXCIubG9nbyBwYXRoXCIsIHsgZmlsbDogXCIjZmZmXCIgfSk7XG4gICAgICAgIGdzYXAudG8oXCIubWVudS1idG5cIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiIH0pO1xuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOiAoKSA9PiB7XG4gICAgICAgIGdzYXAudG8oXCIubG9nby10ZXh0XCIsIHsgY29sb3I6IFwiIzIyMjAxRVwiIH0pO1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28gcGF0aFwiLCB7IGZpbGw6IFwiIzIyMjAxRVwiIH0pO1xuICAgICAgICBnc2FwLnRvKFwiLm1lbnUtYnRuXCIsIHsgYmFja2dyb3VuZENvbG9yOiBcIiMyMjIwMUVcIiB9KTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogKCkgPT4ge1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28tdGV4dFwiLCB7IGNvbG9yOiBcIiNmZmZcIiB9KTtcbiAgICAgICAgZ3NhcC50byhcIi5sb2dvIHBhdGhcIiwgeyBmaWxsOiBcIiNmZmZcIiB9KTtcbiAgICAgICAgZ3NhcC50byhcIi5tZW51LWJ0blwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIgfSk7XG4gICAgICB9LFxuICAgIC8vICAgbWFya2VyczogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCB0ZXh0RWxlbWVudHMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoJy50ZXh0LWVmZmVjdCcpO1xuICAgIFxuICAgIHRleHRFbGVtZW50cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgZ3NhcC50byh0ZXh0LCB7XG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXG4gICAgICAgIGVhc2U6ICdwb3dlcjEuaW5PdXQnLFxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgdHJpZ2dlcjogdGV4dCxcbiAgICAgICAgICBzdGFydDogJ3RvcCBib3R0b20nLCAvLyDopoHntKDjga7kuIrnq6/jgYzjg5Pjg6Xjg7zjg53jg7zjg4jjga7kuIvnq6/jgavpgZTjgZfjgZ/mmYLngrnjgafnmbrngatcbiAgICAgICAgICBlbmQ6ICd0b3AgNzAlJyxcbiAgICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gICJdLCJuYW1lcyI6WyJkaXNhYmxlU2Nyb2xsIiwiZW5hYmxlU2Nyb2xsIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsInRvIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsImVuZCIsIm9uRW50ZXIiLCJjb2xvciIsImZpbGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkxlYXZlIiwib25FbnRlckJhY2siLCJvbkxlYXZlQmFjayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRleHRFbGVtZW50cyIsInV0aWxzIiwidG9BcnJheSIsImZvckVhY2giLCJ0ZXh0IiwiYmFja2dyb3VuZFNpemUiLCJlYXNlIiwic2NydWIiLCJvbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/hamburger.js":
/*!**************************!*\
  !*** ./src/hamburger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _scrollControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollControl */ \"./src/scrollControl.js\");\n\n\n(0,_scrollControl__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();\nvar menuOpen = false;\ndocument.querySelector('.menu-btn').addEventListener('click', function () {\n  var link = document.querySelectorAll('.text-stroke-fill-ltr');\n  var linkHoverReveal = document.querySelectorAll('.hover-reveal');\n  var linkImages = document.querySelectorAll('.hidden-img');\n  var _loop = function _loop(i) {\n    link[i].addEventListener('mousemove', function (e) {\n      linkHoverReveal[i].style.opacity = .6;\n      linkHoverReveal[i].style.transform = \"translate(150%, -70% ) rotate(5deg)\";\n      linkImages[i].style.transform = 'scale(1, 1)';\n      linkHoverReveal[i].style.left = e.clientX + \"px\";\n    });\n    link[i].addEventListener('mouseleave', function (e) {\n      linkHoverReveal[i].style.opacity = 0;\n      linkHoverReveal[i].style.transform = \"translate(-50%, -50%) rotate(-5deg)\";\n      linkImages[i].style.transform = 'scale(0.8, 0.8)';\n    });\n  };\n  for (var i = 0; i < link.length; i++) {\n    _loop(i);\n  }\n  var tl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({\n    onStart: function onStart() {\n      document.querySelector('.menu-bg').style.visibility = 'visible';\n    },\n    onComplete: function onComplete() {\n      if (!menuOpen) {\n        document.querySelector('.menu-bg').style.visibility = 'hidden';\n      }\n    }\n  });\n  if (menuOpen) {\n    // メニューが開いている場合、左に隠す\n    tl.to('.menu-bg', {\n      duration: .4,\n      left: '-100%',\n      ease: 'power4.Out'\n    });\n  } else {\n    // メニューが閉じている場合、右に表示\n    tl.to('.menu-bg', {\n      duration: .4,\n      left: 0,\n      ease: 'power4.In'\n    }).fromTo('.menu-bg nav ul li', {\n      x: -40,\n      opacity: 0\n    }, {\n      duration: 1,\n      x: 0,\n      opacity: 1,\n      stagger: 0.3,\n      ease: \"power2.out\"\n    });\n  }\n  menuOpen = !menuOpen;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0lXLFFBQVEsRUFBRSxDQUFDO01BQ1hHLENBQUMsRUFBRSxDQUFDO01BQ0pkLE9BQU8sRUFBRSxDQUFDO01BQ1ZlLE9BQU8sRUFBRSxHQUFHO01BQ1pILElBQUksRUFBRTtJQUNWLENBQUMsQ0FBQztFQUNOO0VBQ0F4QixRQUFRLEdBQUcsQ0FBQ0EsUUFBUTtBQUN4QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZS1zaGFkZXItZW52MDEvLi9zcmMvaGFtYnVyZ2VyLmpzPzM5M2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgZGlzYWJsZVNjcm9sbCB9IGZyb20gJy4vc2Nyb2xsQ29udHJvbCc7XG5cbmRpc2FibGVTY3JvbGwoKTtcbmxldCBtZW51T3BlbiA9IGZhbHNlO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dC1zdHJva2UtZmlsbC1sdHInKTtcbiAgICBjb25zdCBsaW5rSG92ZXJSZXZlYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG92ZXItcmV2ZWFsJyk7XG4gICAgY29uc3QgbGlua0ltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWRkZW4taW1nJyk7XG5cbmZvcihsZXQgaSA9IDA7IGkgPCBsaW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgbGlua1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgICBsaW5rSG92ZXJSZXZlYWxbaV0uc3R5bGUub3BhY2l0eSA9IC42O1xuICAgICAgICBsaW5rSG92ZXJSZXZlYWxbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgxNTAlLCAtNzAlICkgcm90YXRlKDVkZWcpYDtcbiAgICAgICAgbGlua0ltYWdlc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSwgMSknO1xuICAgICAgICBsaW5rSG92ZXJSZXZlYWxbaV0uc3R5bGUubGVmdCA9IGUuY2xpZW50WCArIFwicHhcIjtcbiAgICAgIH0pXG4gICAgICBcbiAgICAgIGxpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgIGxpbmtIb3ZlclJldmVhbFtpXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgbGlua0hvdmVyUmV2ZWFsW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC01ZGVnKWA7XG4gICAgICAgIGxpbmtJbWFnZXNbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAuOCwgMC44KSc7XG4gICAgICB9KVxufVxuXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYmcnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgfSxcbiAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIW1lbnVPcGVuKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYmcnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtZW51T3Blbikge1xuICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgYzplovjgYTjgabjgYTjgovloLTlkIjjgIHlt6bjgavpmqDjgZlcbiAgICAgICAgdGwudG8oJy5tZW51LWJnJywge1xuICAgICAgICAgICAgZHVyYXRpb246IC40LFxuICAgICAgICAgICAgbGVmdDogJy0xMDAlJyxcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjQuT3V0JyxcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8g44Oh44OL44Ol44O844GM6ZaJ44GY44Gm44GE44KL5aC05ZCI44CB5Y+z44Gr6KGo56S6XG4gICAgICAgIHRsLnRvKCcubWVudS1iZycsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAuNCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXI0LkluJyxcbiAgICAgICAgfSlcbiAgICAgICAgLmZyb21UbygnLm1lbnUtYmcgbmF2IHVsIGxpJywge1xuICAgICAgICAgICAgeDogLTQwLFxuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgc3RhZ2dlcjogMC4zLFxuICAgICAgICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1lbnVPcGVuID0gIW1lbnVPcGVuO1xufSk7XG5cblxuIl0sIm5hbWVzIjpbImdzYXAiLCJkaXNhYmxlU2Nyb2xsIiwibWVudU9wZW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwibGluayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rSG92ZXJSZXZlYWwiLCJsaW5rSW1hZ2VzIiwiX2xvb3AiLCJpIiwiZSIsInN0eWxlIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsImxlZnQiLCJjbGllbnRYIiwibGVuZ3RoIiwidGwiLCJ0aW1lbGluZSIsIm9uU3RhcnQiLCJ2aXNpYmlsaXR5Iiwib25Db21wbGV0ZSIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwiZnJvbVRvIiwieCIsInN0YWdnZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hamburger.js\n");

/***/ }),

/***/ "./src/light.js":
/*!**********************!*\
  !*** ./src/light.js ***!
  \**********************/
/***/ (() => {

eval("var height = 200;\nvar width = 200;\ndocument.addEventListener('DOMContentLoaded', function () {\n  // .light と .light2 の両方を取得\n  var light = document.querySelector('.light');\n  var light2 = document.querySelector('.light2');\n\n  // mousemove と touchmove イベントリスナーで共通の処理を実行\n  var handleMove = function handleMove(e) {\n    // .light が存在する場合\n    if (light) {\n      setPosition(e, light);\n    }\n    // .light2 が存在する場合\n    if (light2) {\n      setPosition(e, light2);\n    }\n  };\n  document.addEventListener('mousemove', handleMove);\n  document.addEventListener('touchmove', handleMove);\n});\n\n// setPosition関数は、イベントオブジェクトと特定のlight要素を受け取ります\nfunction setPosition(e, lightElement) {\n  lightElement.style.top = e.pageY - height / 2 + \"px\";\n  lightElement.style.left = e.pageX - width / 2 + \"px\";\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlnaHQuanMiLCJuYW1lcyI6WyJoZWlnaHQiLCJ3aWR0aCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpZ2h0IiwicXVlcnlTZWxlY3RvciIsImxpZ2h0MiIsImhhbmRsZU1vdmUiLCJlIiwic2V0UG9zaXRpb24iLCJsaWdodEVsZW1lbnQiLCJzdHlsZSIsInRvcCIsInBhZ2VZIiwibGVmdCIsInBhZ2VYIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZS1zaGFkZXItZW52MDEvLi9zcmMvbGlnaHQuanM/MGQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaGVpZ2h0ID0gMjAwO1xubGV0IHdpZHRoID0gMjAwO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIC8vIC5saWdodCDjgaggLmxpZ2h0MiDjga7kuKHmlrnjgpLlj5blvpdcbiAgY29uc3QgbGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQnKTtcbiAgY29uc3QgbGlnaHQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0MicpO1xuXG4gIC8vIG1vdXNlbW92ZSDjgaggdG91Y2htb3ZlIOOCpOODmeODs+ODiOODquOCueODiuODvOOBp+WFsemAmuOBruWHpueQhuOCkuWun+ihjFxuICBjb25zdCBoYW5kbGVNb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIC8vIC5saWdodCDjgYzlrZjlnKjjgZnjgovloLTlkIhcbiAgICBpZiAobGlnaHQpIHtcbiAgICAgIHNldFBvc2l0aW9uKGUsIGxpZ2h0KTtcbiAgICB9XG4gICAgLy8gLmxpZ2h0MiDjgYzlrZjlnKjjgZnjgovloLTlkIhcbiAgICBpZiAobGlnaHQyKSB7XG4gICAgICBzZXRQb3NpdGlvbihlLCBsaWdodDIpO1xuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3ZlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlTW92ZSk7XG59KTtcblxuLy8gc2V0UG9zaXRpb27plqLmlbDjga/jgIHjgqTjg5njg7Pjg4jjgqrjg5bjgrjjgqfjgq/jg4jjgajnibnlrprjga5saWdodOimgee0oOOCkuWPl+OBkeWPluOCiuOBvuOBmVxuZnVuY3Rpb24gc2V0UG9zaXRpb24oZSwgbGlnaHRFbGVtZW50KSB7XG4gIGxpZ2h0RWxlbWVudC5zdHlsZS50b3AgPSBlLnBhZ2VZIC0gaGVpZ2h0IC8gMiArIFwicHhcIjtcbiAgbGlnaHRFbGVtZW50LnN0eWxlLmxlZnQgPSBlLnBhZ2VYIC0gd2lkdGggLyAyICsgXCJweFwiO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFNLEdBQUcsR0FBRztBQUNoQixJQUFJQyxLQUFLLEdBQUcsR0FBRztBQUVmQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDdkQ7RUFDQSxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUM5QyxJQUFNQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFNBQVMsQ0FBQzs7RUFFaEQ7RUFDQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBWUMsQ0FBQyxFQUFFO0lBQzdCO0lBQ0EsSUFBSUosS0FBSyxFQUFFO01BQ1RLLFdBQVcsQ0FBQ0QsQ0FBQyxFQUFFSixLQUFLLENBQUM7SUFDdkI7SUFDQTtJQUNBLElBQUlFLE1BQU0sRUFBRTtNQUNWRyxXQUFXLENBQUNELENBQUMsRUFBRUYsTUFBTSxDQUFDO0lBQ3hCO0VBQ0YsQ0FBQztFQUVESixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsRUFBRUksVUFBVSxDQUFDO0VBQ2xETCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsRUFBRUksVUFBVSxDQUFDO0FBQ3BELENBQUMsQ0FBQzs7QUFFRjtBQUNBLFNBQVNFLFdBQVdBLENBQUNELENBQUMsRUFBRUUsWUFBWSxFQUFFO0VBQ3BDQSxZQUFZLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHSixDQUFDLENBQUNLLEtBQUssR0FBR2IsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJO0VBQ3BEVSxZQUFZLENBQUNDLEtBQUssQ0FBQ0csSUFBSSxHQUFHTixDQUFDLENBQUNPLEtBQUssR0FBR2QsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJO0FBQ3REIiwiaWdub3JlTGlzdCI6W119\n//# sourceURL=webpack-internal:///./src/light.js\n");

/***/ }),

/***/ "./src/scrollControl.js":
/*!******************************!*\
  !*** ./src/scrollControl.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   disableScroll: () => (/* binding */ disableScroll),\n/* harmony export */   enableScroll: () => (/* binding */ enableScroll)\n/* harmony export */ });\nfunction preventScroll(e) {\n  e.preventDefault();\n}\n\n// スクロールを禁止する関数\nfunction disableScroll() {\n  document.body.style.overflow = 'hidden';\n  document.body.classList.add('fixed');\n  document.addEventListener('touchmove', preventScroll, {\n    passive: false\n  });\n}\n\n// スクロールを許可する関数\nfunction enableScroll() {\n  document.body.style.overflow = '';\n  document.body.classList.remove('fixed');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nyb2xsQ29udHJvbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVNBLGFBQWFBLENBQUNDLENBQUMsRUFBRTtFQUN4QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztBQUNwQjs7QUFFQTtBQUNPLFNBQVNDLGFBQWFBLENBQUEsRUFBRztFQUM5QkMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLFFBQVE7RUFDdkNILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFDcENMLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsV0FBVyxFQUFFVixhQUFhLEVBQUU7SUFBRVcsT0FBTyxFQUFFO0VBQU0sQ0FBQyxDQUFDO0FBQzNFOztBQUVBO0FBQ08sU0FBU0MsWUFBWUEsQ0FBQSxFQUFHO0VBQzdCUixRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUcsRUFBRTtFQUNqQ0gsUUFBUSxDQUFDQyxJQUFJLENBQUNHLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUN6QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlLXNoYWRlci1lbnYwMS8uL3NyYy9zY3JvbGxDb250cm9sLmpzPzVhYzIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHJldmVudFNjcm9sbChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuLy8g44K544Kv44Ot44O844Or44KS56aB5q2i44GZ44KL6Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCgpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnRTY3JvbGwsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG59XG5cbi8vIOOCueOCr+ODreODvOODq+OCkuioseWPr+OBmeOCi+mWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XG59XG4iXSwibmFtZXMiOlsicHJldmVudFNjcm9sbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVTY3JvbGwiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJlbmFibGVTY3JvbGwiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scrollControl.js\n");

/***/ }),

/***/ "./src/smooth.js":
/*!***********************!*\
  !*** ./src/smooth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.mjs\");\n\nvar lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  lerp: .1,\n  // 慣性の強さ\n  duration: 30 // スクロールアニメーションの時\n});\nfunction raf(time) {\n  lenis.raf(time);\n  requestAnimationFrame(raf);\n}\nrequestAnimationFrame(raf);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc21vb3RoLmpzIiwibWFwcGluZ3MiOiI7O0FBQXlDO0FBRXpDLElBQU1DLEtBQUssR0FBRyxJQUFJRCw2REFBSyxDQUFDO0VBQ3BCRSxJQUFJLEVBQUUsRUFBRTtFQUFFO0VBQ1ZDLFFBQVEsRUFBRSxFQUFFLENBQUU7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsU0FBU0MsR0FBR0EsQ0FBQ0MsSUFBSSxFQUFFO0VBQ2pCSixLQUFLLENBQUNHLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO0VBQ2ZDLHFCQUFxQixDQUFDRixHQUFHLENBQUM7QUFDNUI7QUFFQUUscUJBQXFCLENBQUNGLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlLXNoYWRlci1lbnYwMS8uL3NyYy9zbW9vdGguanM/MzE5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGVuaXMgZnJvbSAnQHN0dWRpby1mcmVpZ2h0L2xlbmlzJ1xuXG5jb25zdCBsZW5pcyA9IG5ldyBMZW5pcyh7XG4gICAgbGVycDogLjEsIC8vIOaFo+aAp+OBruW8t+OBlVxuICAgIGR1cmF0aW9uOiAzMCwgLy8g44K544Kv44Ot44O844Or44Ki44OL44Oh44O844K344On44Oz44Gu5pmCXG59KTtcblxuZnVuY3Rpb24gcmFmKHRpbWUpIHtcbiAgbGVuaXMucmFmKHRpbWUpXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpXG59XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpIl0sIm5hbWVzIjpbIkxlbmlzIiwibGVuaXMiLCJsZXJwIiwiZHVyYXRpb24iLCJyYWYiLCJ0aW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/smooth.js\n");

/***/ }),

/***/ "./src/under-start.js":
/*!****************************!*\
  !*** ./src/under-start.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nfunction triggerAnimation02() {\n  var loadItem = document.querySelectorAll('.loader__bg');\n  var tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();\n  tl.set(loadItem, {\n    transformOrigin: '100% 100%',\n    scaleX: 1\n  }).to(loadItem, {\n    scaleX: 0,\n    transformOrigin: '0% 0%',\n    stagger: 0.07,\n    ease: 'power4.inOut'\n  });\n}\ntriggerAnimation02();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdW5kZXItc3RhcnQuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEI7QUFFNUIsU0FBU0Msa0JBQWtCQSxDQUFBLEVBQUc7RUFDMUIsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztFQUV6RCxJQUFNQyxFQUFFLEdBQUdMLHNDQUFJLENBQUNNLFFBQVEsQ0FBQyxDQUFDO0VBRTFCRCxFQUFFLENBQUNFLEdBQUcsQ0FBQ0wsUUFBUSxFQUFFO0lBQ2JNLGVBQWUsRUFBRSxXQUFXO0lBQzVCQyxNQUFNLEVBQUU7RUFDWixDQUFDLENBQUMsQ0FDREMsRUFBRSxDQUFDUixRQUFRLEVBQUU7SUFDVk8sTUFBTSxFQUFFLENBQUM7SUFDVEQsZUFBZSxFQUFFLE9BQU87SUFDeEJHLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLElBQUksRUFBRTtFQUNWLENBQUMsQ0FBQztBQUVOO0FBRUFYLGtCQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZS1zaGFkZXItZW52MDEvLi9zcmMvdW5kZXItc3RhcnQuanM/YzJlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XG5cbmZ1bmN0aW9uIHRyaWdnZXJBbmltYXRpb24wMigpIHtcbiAgICBjb25zdCBsb2FkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2FkZXJfX2JnJyk7XG4gICAgXG4gICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG4gICAgXG4gICAgdGwuc2V0KGxvYWRJdGVtLCB7XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJScsXG4gICAgICAgIHNjYWxlWDogMVxuICAgIH0pXG4gICAgLnRvKGxvYWRJdGVtLCB7XG4gICAgICAgIHNjYWxlWDogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnLFxuICAgICAgICBzdGFnZ2VyOiAwLjA3LFxuICAgICAgICBlYXNlOiAncG93ZXI0LmluT3V0J1xuICAgIH0pXG4gICBcbn1cblxudHJpZ2dlckFuaW1hdGlvbjAyKCk7Il0sIm5hbWVzIjpbImdzYXAiLCJ0cmlnZ2VyQW5pbWF0aW9uMDIiLCJsb2FkSXRlbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRsIiwidGltZWxpbmUiLCJzZXQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJzY2FsZVgiLCJ0byIsInN0YWdnZXIiLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/under-start.js\n");

/***/ }),

/***/ "./src/about.css":
/*!***********************!*\
  !*** ./src/about.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlLXNoYWRlci1lbnYwMS8uL3NyYy9hYm91dC5jc3M/OGQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/about.css\n");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVzZXQuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlLXNoYWRlci1lbnYwMS8uL3NyYy9yZXNldC5jc3M/ODE3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reset.css\n");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlLXNoYWRlci1lbnYwMS8uL3NyYy9zdHlsZS5jc3M/MzU0NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/style.css\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js-node_modules_studio-fre-78703a"], () => (__webpack_require__("./src/about.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;