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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.css */ \"./src/about.css\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./light.js */ \"./src/light.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_light_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburger.js */ \"./src/hamburger.js\");\n/* harmony import */ var _smooth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smooth.js */ \"./src/smooth.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\n\n\n\n\n\n\n\n// ScrollTriggerをgsapに登録\ngsap__WEBPACK_IMPORTED_MODULE_6__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger);\ngsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".logo path, .logo path-text, .menu-btn\", {\n  scrollTrigger: {\n    trigger: \".about-info2-wrapper\",\n    start: \"center center\",\n    // トリガー要素の上端がビューポートの中央に達した時に開始\n    end: \"bottom top\",\n    // トリガー要素の下端がビューポートの下端に達した時に終了\n    onEnter: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".logo-text\", {\n        color: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".logo path\", {\n        fill: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#22201E\"\n      });\n    },\n    onLeave: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".logo-text\", {\n        color: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".logo path\", {\n        fill: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#fff\"\n      });\n    },\n    onEnterBack: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".logo-text\", {\n        color: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".logo path\", {\n        fill: \"#22201E\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#22201E\"\n      });\n    },\n    onLeaveBack: () => {\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".logo-text\", {\n        color: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".logo path\", {\n        fill: \"#fff\"\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".menu-btn\", {\n        backgroundColor: \"#fff\"\n      });\n    }\n    //   markers: true\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNxQjtBQUNBO0FBQ0E7QUFDRjtBQUNLO0FBQ0o7QUFFUTtBQUN1Qjs7QUFFbkQ7QUFDQUEsc0NBQUksQ0FBQ0UsY0FBYyxDQUFDRCw2REFBYSxDQUFDO0FBRWxDRCxzQ0FBSSxDQUFDRyxFQUFFLENBQUMsd0NBQXdDLEVBQUU7RUFDOUNDLGFBQWEsRUFBRTtJQUNiQyxPQUFPLEVBQUUsc0JBQXNCO0lBQy9CQyxLQUFLLEVBQUUsZUFBZTtJQUFFO0lBQ3hCQyxHQUFHLEVBQUUsWUFBWTtJQUFFO0lBQ25CQyxPQUFPLEVBQUVBLENBQUEsS0FBTTtNQUNiUixzQ0FBSSxDQUFDRyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQUVNLEtBQUssRUFBRTtNQUFVLENBQUMsQ0FBQztNQUMzQ1Qsc0NBQUksQ0FBQ0csRUFBRSxDQUFDLFlBQVksRUFBRTtRQUFFTyxJQUFJLEVBQUU7TUFBVSxDQUFDLENBQUM7TUFDMUNWLHNDQUFJLENBQUNHLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFBRVEsZUFBZSxFQUFFO01BQVUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDREMsT0FBTyxFQUFFQSxDQUFBLEtBQU07TUFDYlosc0NBQUksQ0FBQ0csRUFBRSxDQUFDLFlBQVksRUFBRTtRQUFFTSxLQUFLLEVBQUU7TUFBTyxDQUFDLENBQUM7TUFDeENULHNDQUFJLENBQUNHLEVBQUUsQ0FBQyxZQUFZLEVBQUU7UUFBRU8sSUFBSSxFQUFFO01BQU8sQ0FBQyxDQUFDO01BQ3ZDVixzQ0FBSSxDQUFDRyxFQUFFLENBQUMsV0FBVyxFQUFFO1FBQUVRLGVBQWUsRUFBRTtNQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0RFLFdBQVcsRUFBRUEsQ0FBQSxLQUFNO01BQ2pCYixzQ0FBSSxDQUFDRyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQUVNLEtBQUssRUFBRTtNQUFVLENBQUMsQ0FBQztNQUMzQ1Qsc0NBQUksQ0FBQ0csRUFBRSxDQUFDLFlBQVksRUFBRTtRQUFFTyxJQUFJLEVBQUU7TUFBVSxDQUFDLENBQUM7TUFDMUNWLHNDQUFJLENBQUNHLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFBRVEsZUFBZSxFQUFFO01BQVUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDREcsV0FBVyxFQUFFQSxDQUFBLEtBQU07TUFDakJkLHNDQUFJLENBQUNHLEVBQUUsQ0FBQyxZQUFZLEVBQUU7UUFBRU0sS0FBSyxFQUFFO01BQU8sQ0FBQyxDQUFDO01BQ3hDVCxzQ0FBSSxDQUFDRyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQUVPLElBQUksRUFBRTtNQUFPLENBQUMsQ0FBQztNQUN2Q1Ysc0NBQUksQ0FBQ0csRUFBRSxDQUFDLFdBQVcsRUFBRTtRQUFFUSxlQUFlLEVBQUU7TUFBTyxDQUFDLENBQUM7SUFDbkQ7SUFDRjtFQUNBO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWUtc2hhZGVyLWVudjAxLy4vc3JjL2Fib3V0LmpzPzU4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2Fib3V0LmNzcyc7XG5pbXBvcnQgJy4vbGlnaHQuanMnXG5pbXBvcnQgJy4vaGFtYnVyZ2VyLmpzJztcbmltcG9ydCAnLi9zbW9vdGguanMnXG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJztcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL1Njcm9sbFRyaWdnZXInO1xuXG4vLyBTY3JvbGxUcmlnZ2Vy44KSZ3NhcOOBq+eZu+mMslxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZ3NhcC50byhcIi5sb2dvIHBhdGgsIC5sb2dvIHBhdGgtdGV4dCwgLm1lbnUtYnRuXCIsIHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5hYm91dC1pbmZvMi13cmFwcGVyXCIsXG4gICAgICBzdGFydDogXCJjZW50ZXIgY2VudGVyXCIsIC8vIOODiOODquOCrOODvOimgee0oOOBruS4iuerr+OBjOODk+ODpeODvOODneODvOODiOOBruS4reWkruOBq+mBlOOBl+OBn+aZguOBq+mWi+Wni1xuICAgICAgZW5kOiBcImJvdHRvbSB0b3BcIiwgLy8g44OI44Oq44Ks44O86KaB57Sg44Gu5LiL56uv44GM44OT44Ol44O844Od44O844OI44Gu5LiL56uv44Gr6YGU44GX44Gf5pmC44Gr57WC5LqGXG4gICAgICBvbkVudGVyOiAoKSA9PiB7XG4gICAgICAgIGdzYXAudG8oXCIubG9nby10ZXh0XCIsIHsgY29sb3I6IFwiIzIyMjAxRVwiIH0pO1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28gcGF0aFwiLCB7IGZpbGw6IFwiIzIyMjAxRVwiIH0pOyBcbiAgICAgICAgZ3NhcC50byhcIi5tZW51LWJ0blwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjMjIyMDFFXCIgfSk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogKCkgPT4ge1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28tdGV4dFwiLCB7IGNvbG9yOiBcIiNmZmZcIiB9KTtcbiAgICAgICAgZ3NhcC50byhcIi5sb2dvIHBhdGhcIiwgeyBmaWxsOiBcIiNmZmZcIiB9KTtcbiAgICAgICAgZ3NhcC50byhcIi5tZW51LWJ0blwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIgfSk7XG4gICAgICB9LFxuICAgICAgb25FbnRlckJhY2s6ICgpID0+IHtcbiAgICAgICAgZ3NhcC50byhcIi5sb2dvLXRleHRcIiwgeyBjb2xvcjogXCIjMjIyMDFFXCIgfSk7XG4gICAgICAgIGdzYXAudG8oXCIubG9nbyBwYXRoXCIsIHsgZmlsbDogXCIjMjIyMDFFXCIgfSk7XG4gICAgICAgIGdzYXAudG8oXCIubWVudS1idG5cIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIyMjAxRVwiIH0pO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmVCYWNrOiAoKSA9PiB7XG4gICAgICAgIGdzYXAudG8oXCIubG9nby10ZXh0XCIsIHsgY29sb3I6IFwiI2ZmZlwiIH0pO1xuICAgICAgICBnc2FwLnRvKFwiLmxvZ28gcGF0aFwiLCB7IGZpbGw6IFwiI2ZmZlwiIH0pO1xuICAgICAgICBnc2FwLnRvKFwiLm1lbnUtYnRuXCIsIHsgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIiB9KTtcbiAgICAgIH0sXG4gICAgLy8gICBtYXJrZXJzOiB0cnVlXG4gICAgfVxuICB9KTtcbiJdLCJuYW1lcyI6WyJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwidG8iLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwib25FbnRlciIsImNvbG9yIiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsIm9uTGVhdmUiLCJvbkVudGVyQmFjayIsIm9uTGVhdmVCYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/hamburger.js":
/*!**************************!*\
  !*** ./src/hamburger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nlet menuOpen = false;\ndocument.querySelector('.menu-btn').addEventListener('click', function () {\n  const link = document.querySelectorAll('.text-stroke-fill-ltr');\n  const linkHoverReveal = document.querySelectorAll('.hover-reveal');\n  const linkImages = document.querySelectorAll('.hidden-img');\n  for (let i = 0; i < link.length; i++) {\n    link[i].addEventListener('mousemove', e => {\n      linkHoverReveal[i].style.opacity = .6;\n      linkHoverReveal[i].style.transform = `translate(150%, -70% ) rotate(5deg)`;\n      linkImages[i].style.transform = 'scale(1, 1)';\n      linkHoverReveal[i].style.left = e.clientX + \"px\";\n    });\n    link[i].addEventListener('mouseleave', e => {\n      linkHoverReveal[i].style.opacity = 0;\n      linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;\n      linkImages[i].style.transform = 'scale(0.8, 0.8)';\n    });\n  }\n  let tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n    onStart: function () {\n      document.querySelector('.menu-bg').style.visibility = 'visible';\n    },\n    onComplete: function () {\n      if (!menuOpen) {\n        document.querySelector('.menu-bg').style.visibility = 'hidden';\n      }\n    }\n  });\n  if (menuOpen) {\n    // メニューが開いている場合、左に隠す\n    tl.to('.menu-bg', {\n      duration: .4,\n      left: '-100%',\n      ease: 'power4.Out'\n    });\n  } else {\n    // メニューが閉じている場合、右に表示\n    tl.to('.menu-bg', {\n      duration: .4,\n      left: 0,\n      ease: 'power4.In'\n    }).fromTo('.menu-bg nav ul li', {\n      x: -40,\n      opacity: 0\n    }, {\n      duration: 1,\n      x: 0,\n      opacity: 1,\n      stagger: 0.3,\n      ease: \"power2.out\"\n    });\n  }\n  menuOpen = !menuOpen;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7SUFDVixDQUFDLENBQUM7RUFDTjtFQUNBdkIsUUFBUSxHQUFHLENBQUNBLFFBQVE7QUFDeEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWUtc2hhZGVyLWVudjAxLy4vc3JjL2hhbWJ1cmdlci5qcz8zOTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJztcblxubGV0IG1lbnVPcGVuID0gZmFsc2U7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0LXN0cm9rZS1maWxsLWx0cicpO1xuICAgIGNvbnN0IGxpbmtIb3ZlclJldmVhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3Zlci1yZXZlYWwnKTtcbiAgICBjb25zdCBsaW5rSW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGRlbi1pbWcnKTtcblxuZm9yKGxldCBpID0gMDsgaSA8IGxpbmsubGVuZ3RoOyBpKyspIHtcbiAgICBsaW5rW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgIGxpbmtIb3ZlclJldmVhbFtpXS5zdHlsZS5vcGFjaXR5ID0gLjY7XG4gICAgICAgIGxpbmtIb3ZlclJldmVhbFtpXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDE1MCUsIC03MCUgKSByb3RhdGUoNWRlZylgO1xuICAgICAgICBsaW5rSW1hZ2VzW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLCAxKSc7XG4gICAgICAgIGxpbmtIb3ZlclJldmVhbFtpXS5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xuICAgICAgfSlcbiAgICAgIFxuICAgICAgbGlua1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgbGlua0hvdmVyUmV2ZWFsW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBsaW5rSG92ZXJSZXZlYWxbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTVkZWcpYDtcbiAgICAgICAgbGlua0ltYWdlc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMC44LCAwLjgpJztcbiAgICAgIH0pXG59XG5cbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1iZycpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB9LFxuICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghbWVudU9wZW4pIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1iZycpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1lbnVPcGVuKSB7XG4gICAgICAgIC8vIOODoeODi+ODpeODvOOBjOmWi+OBhOOBpuOBhOOCi+WgtOWQiOOAgeW3puOBq+maoOOBmVxuICAgICAgICB0bC50bygnLm1lbnUtYmcnLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogLjQsXG4gICAgICAgICAgICBsZWZ0OiAnLTEwMCUnLFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyNC5PdXQnLFxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgYzplonjgZjjgabjgYTjgovloLTlkIjjgIHlj7PjgavooajnpLpcbiAgICAgICAgdGwudG8oJy5tZW51LWJnJywge1xuICAgICAgICAgICAgZHVyYXRpb246IC40LFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjQuSW4nLFxuICAgICAgICB9KVxuICAgICAgICAuZnJvbVRvKCcubWVudS1iZyBuYXYgdWwgbGknLCB7XG4gICAgICAgICAgICB4OiAtNDAsXG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLjMsXG4gICAgICAgICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWVudU9wZW4gPSAhbWVudU9wZW47XG59KTtcblxuXG4iXSwibmFtZXMiOlsiZ3NhcCIsIm1lbnVPcGVuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGlua0hvdmVyUmV2ZWFsIiwibGlua0ltYWdlcyIsImkiLCJsZW5ndGgiLCJlIiwic3R5bGUiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwibGVmdCIsImNsaWVudFgiLCJ0bCIsInRpbWVsaW5lIiwib25TdGFydCIsInZpc2liaWxpdHkiLCJvbkNvbXBsZXRlIiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJmcm9tVG8iLCJ4Iiwic3RhZ2dlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hamburger.js\n");

/***/ }),

/***/ "./src/light.js":
/*!**********************!*\
  !*** ./src/light.js ***!
  \**********************/
/***/ (() => {

eval("let height = 200;\nlet width = 200;\ndocument.addEventListener('DOMContentLoaded', function () {\n  // .light と .light2 の両方を取得\n  const light = document.querySelector('.light');\n  const light2 = document.querySelector('.light2');\n\n  // mousemove と touchmove イベントリスナーで共通の処理を実行\n  const handleMove = function (e) {\n    // .light が存在する場合\n    if (light) {\n      setPosition(e, light);\n    }\n    // .light2 が存在する場合\n    if (light2) {\n      setPosition(e, light2);\n    }\n  };\n  document.addEventListener('mousemove', handleMove);\n  document.addEventListener('touchmove', handleMove);\n});\n\n// setPosition関数は、イベントオブジェクトと特定のlight要素を受け取ります\nfunction setPosition(e, lightElement) {\n  lightElement.style.top = e.pageY - height / 2 + \"px\";\n  lightElement.style.left = e.pageX - width / 2 + \"px\";\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlnaHQuanMiLCJuYW1lcyI6WyJoZWlnaHQiLCJ3aWR0aCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpZ2h0IiwicXVlcnlTZWxlY3RvciIsImxpZ2h0MiIsImhhbmRsZU1vdmUiLCJlIiwic2V0UG9zaXRpb24iLCJsaWdodEVsZW1lbnQiLCJzdHlsZSIsInRvcCIsInBhZ2VZIiwibGVmdCIsInBhZ2VYIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZS1zaGFkZXItZW52MDEvLi9zcmMvbGlnaHQuanM/MGQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaGVpZ2h0ID0gMjAwO1xubGV0IHdpZHRoID0gMjAwO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIC8vIC5saWdodCDjgaggLmxpZ2h0MiDjga7kuKHmlrnjgpLlj5blvpdcbiAgY29uc3QgbGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQnKTtcbiAgY29uc3QgbGlnaHQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0MicpO1xuXG4gIC8vIG1vdXNlbW92ZSDjgaggdG91Y2htb3ZlIOOCpOODmeODs+ODiOODquOCueODiuODvOOBp+WFsemAmuOBruWHpueQhuOCkuWun+ihjFxuICBjb25zdCBoYW5kbGVNb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIC8vIC5saWdodCDjgYzlrZjlnKjjgZnjgovloLTlkIhcbiAgICBpZiAobGlnaHQpIHtcbiAgICAgIHNldFBvc2l0aW9uKGUsIGxpZ2h0KTtcbiAgICB9XG4gICAgLy8gLmxpZ2h0MiDjgYzlrZjlnKjjgZnjgovloLTlkIhcbiAgICBpZiAobGlnaHQyKSB7XG4gICAgICBzZXRQb3NpdGlvbihlLCBsaWdodDIpO1xuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3ZlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlTW92ZSk7XG59KTtcblxuLy8gc2V0UG9zaXRpb27plqLmlbDjga/jgIHjgqTjg5njg7Pjg4jjgqrjg5bjgrjjgqfjgq/jg4jjgajnibnlrprjga5saWdodOimgee0oOOCkuWPl+OBkeWPluOCiuOBvuOBmVxuZnVuY3Rpb24gc2V0UG9zaXRpb24oZSwgbGlnaHRFbGVtZW50KSB7XG4gIGxpZ2h0RWxlbWVudC5zdHlsZS50b3AgPSBlLnBhZ2VZIC0gaGVpZ2h0IC8gMiArIFwicHhcIjtcbiAgbGlnaHRFbGVtZW50LnN0eWxlLmxlZnQgPSBlLnBhZ2VYIC0gd2lkdGggLyAyICsgXCJweFwiO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFNLEdBQUcsR0FBRztBQUNoQixJQUFJQyxLQUFLLEdBQUcsR0FBRztBQUVmQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDdkQ7RUFDQSxNQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUM5QyxNQUFNQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFNBQVMsQ0FBQzs7RUFFaEQ7RUFDQSxNQUFNRSxVQUFVLEdBQUcsU0FBQUEsQ0FBU0MsQ0FBQyxFQUFFO0lBQzdCO0lBQ0EsSUFBSUosS0FBSyxFQUFFO01BQ1RLLFdBQVcsQ0FBQ0QsQ0FBQyxFQUFFSixLQUFLLENBQUM7SUFDdkI7SUFDQTtJQUNBLElBQUlFLE1BQU0sRUFBRTtNQUNWRyxXQUFXLENBQUNELENBQUMsRUFBRUYsTUFBTSxDQUFDO0lBQ3hCO0VBQ0YsQ0FBQztFQUVESixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsRUFBRUksVUFBVSxDQUFDO0VBQ2xETCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsRUFBRUksVUFBVSxDQUFDO0FBQ3BELENBQUMsQ0FBQzs7QUFFRjtBQUNBLFNBQVNFLFdBQVdBLENBQUNELENBQUMsRUFBRUUsWUFBWSxFQUFFO0VBQ3BDQSxZQUFZLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHSixDQUFDLENBQUNLLEtBQUssR0FBR2IsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJO0VBQ3BEVSxZQUFZLENBQUNDLEtBQUssQ0FBQ0csSUFBSSxHQUFHTixDQUFDLENBQUNPLEtBQUssR0FBR2QsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJO0FBQ3REIiwiaWdub3JlTGlzdCI6W119\n//# sourceURL=webpack-internal:///./src/light.js\n");

/***/ }),

/***/ "./src/smooth.js":
/*!***********************!*\
  !*** ./src/smooth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.mjs\");\n\nconst lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  lerp: .1,\n  // 慣性の強さ\n  duration: 30 // スクロールアニメーションの時\n});\nfunction raf(time) {\n  lenis.raf(time);\n  requestAnimationFrame(raf);\n}\nrequestAnimationFrame(raf);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc21vb3RoLmpzIiwibWFwcGluZ3MiOiI7O0FBQXlDO0FBRXpDLE1BQU1DLEtBQUssR0FBRyxJQUFJRCw2REFBSyxDQUFDO0VBQ3BCRSxJQUFJLEVBQUUsRUFBRTtFQUFFO0VBQ1ZDLFFBQVEsRUFBRSxFQUFFLENBQUU7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsU0FBU0MsR0FBR0EsQ0FBQ0MsSUFBSSxFQUFFO0VBQ2pCSixLQUFLLENBQUNHLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO0VBQ2ZDLHFCQUFxQixDQUFDRixHQUFHLENBQUM7QUFDNUI7QUFFQUUscUJBQXFCLENBQUNGLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlLXNoYWRlci1lbnYwMS8uL3NyYy9zbW9vdGguanM/MzE5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGVuaXMgZnJvbSAnQHN0dWRpby1mcmVpZ2h0L2xlbmlzJ1xuXG5jb25zdCBsZW5pcyA9IG5ldyBMZW5pcyh7XG4gICAgbGVycDogLjEsIC8vIOaFo+aAp+OBruW8t+OBlVxuICAgIGR1cmF0aW9uOiAzMCwgLy8g44K544Kv44Ot44O844Or44Ki44OL44Oh44O844K344On44Oz44Gu5pmCXG59KTtcblxuZnVuY3Rpb24gcmFmKHRpbWUpIHtcbiAgbGVuaXMucmFmKHRpbWUpXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpXG59XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpIl0sIm5hbWVzIjpbIkxlbmlzIiwibGVuaXMiLCJsZXJwIiwiZHVyYXRpb24iLCJyYWYiLCJ0aW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/smooth.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_index_js-node_modules_studio-freight_lenis_dist_lenis_mjs","vendors-node_modules_gsap_ScrollTrigger_js"], () => (__webpack_require__("./src/about.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;