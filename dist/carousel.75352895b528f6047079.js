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

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ (() => {

eval("const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;\nconst clamp = (val, min, max) => Math.max(min, Math.min(val, max));\nconst createDragScroll = ({\n  el,\n  wrap,\n  item,\n  bar\n}) => {\n  const $el = document.querySelector(el);\n  if (!$el) return;\n  const $wrap = $el.querySelector(wrap);\n  const $items = $el.querySelectorAll(item);\n  const $bar = $el.querySelector(bar);\n  let progress = 0,\n    speed = 0,\n    oldX = 0,\n    x = 0,\n    playrate = 0,\n    dragging = false,\n    startX = 0;\n  let wrapWidth = 0,\n    maxScroll = 0;\n  let animationFrameId = null;\n  const calculate = () => {\n    wrapWidth = $items[0].clientWidth * $items.length;\n    $wrap.style.width = `${wrapWidth}px`;\n    maxScroll = wrapWidth - $el.clientWidth;\n  };\n  const move = () => progress = clamp(progress, 0, maxScroll);\n  const handleWheel = e => {\n    progress += e.deltaY;\n    move();\n  };\n  const handleTouchStart = e => {\n    e.preventDefault();\n    dragging = true;\n    startX = e.clientX || e.touches[0].clientX;\n    $el.classList.add('dragging');\n  };\n  const handleTouchMove = e => {\n    if (!dragging) return;\n    const currentX = e.clientX || e.touches[0].clientX;\n    progress += (startX - currentX) * 2.5;\n    startX = currentX;\n    move();\n  };\n  const handleTouchEnd = () => {\n    dragging = false;\n    $el.classList.remove('dragging');\n  };\n  const raf = () => {\n    animationFrameId = requestAnimationFrame(raf);\n    x = lerp(x, progress, 0.1);\n    playrate = x / maxScroll;\n    $wrap.style.transform = `translateX(${-x}px)`;\n    $bar.style.transform = `scaleX(${0.18 + playrate * 0.82})`;\n    speed = Math.min(100, oldX - x);\n    oldX = x;\n    $items.forEach(i => {\n      const scale = 1 - Math.abs(speed) * 0.002;\n      i.style.transform = `scale(${scale})`;\n      i.querySelector('img').style.transform = `scaleX(${1 + Math.abs(speed) * 0.004})`;\n    });\n  };\n  const events = () => {\n    window.addEventListener('resize', calculate);\n    window.addEventListener('wheel', handleWheel);\n    $el.addEventListener('touchstart', handleTouchStart);\n    window.addEventListener('touchmove', handleTouchMove);\n    window.addEventListener('touchend', handleTouchEnd);\n    window.addEventListener('mousedown', handleTouchStart);\n    window.addEventListener('mousemove', handleTouchMove);\n    window.addEventListener('mouseup', handleTouchEnd);\n    document.body.addEventListener('mouseleave', handleTouchEnd);\n  };\n  const init = () => {\n    calculate();\n    events();\n  };\n  const observer = new IntersectionObserver((entries, observer) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        raf(); // 要素がビューポートに入ったらアニメーションを開始\n        observer.unobserve($el); // 一度開始したら監視を止める\n      }\n    });\n  }, {\n    threshold: 0.1 // 要素の10%が見えたらコールバックを実行\n  });\n  observer.observe($bar); // $elの監視を開始\n\n  init();\n  return {\n    update: calculate,\n    refresh: init,\n    stop: () => cancelAnimationFrame(animationFrameId) // アニメーションの停止メソッドを追加\n  };\n};\n\n/*--------------------\nInstances\n--------------------*/\nconst scroll = createDragScroll({\n  el: '.carousel',\n  wrap: '.carousel--wrap',\n  item: '.carousel--item',\n  bar: '.carousel--progress-bar'\n});\n\n/*--------------------\nOne raf to rule them all\n--------------------*/\nrequestAnimationFrame(function rafLoop() {\n  requestAnimationFrame(rafLoop);\n  scroll.refresh();\n});\n\n//# sourceURL=webpack://three-shader-env01/./src/carousel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/carousel.js"]();
/******/ 	
/******/ })()
;