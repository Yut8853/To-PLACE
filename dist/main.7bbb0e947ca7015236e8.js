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

/***/ }),

/***/ "./src/hamburger.js":
/*!**************************!*\
  !*** ./src/hamburger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nlet menuOpen = false;\ndocument.querySelector('.menu-btn').addEventListener('click', function () {\n  const link = document.querySelectorAll('.text-stroke-fill-ltr');\n  const linkHoverReveal = document.querySelectorAll('.hover-reveal');\n  const linkImages = document.querySelectorAll('.hidden-img');\n  for (let i = 0; i < link.length; i++) {\n    link[i].addEventListener('mousemove', e => {\n      linkHoverReveal[i].style.opacity = .6;\n      linkHoverReveal[i].style.transform = `translate(150%, -70% ) rotate(5deg)`;\n      linkImages[i].style.transform = 'scale(1, 1)';\n      linkHoverReveal[i].style.left = e.clientX + \"px\";\n    });\n    link[i].addEventListener('mouseleave', e => {\n      linkHoverReveal[i].style.opacity = 0;\n      linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;\n      linkImages[i].style.transform = 'scale(0.8, 0.8)';\n    });\n  }\n  let tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n    onStart: function () {\n      document.querySelector('.menu-bg').style.visibility = 'visible';\n    },\n    onComplete: function () {\n      if (!menuOpen) {\n        document.querySelector('.menu-bg').style.visibility = 'hidden';\n      }\n    }\n  });\n  if (menuOpen) {\n    // メニューが開いている場合、左に隠す\n    tl.to('.menu-bg', {\n      duration: .4,\n      left: '-100%',\n      ease: 'power4.Out'\n    });\n  } else {\n    // メニューが閉じている場合、右に表示\n    tl.to('.menu-bg', {\n      duration: .4,\n      left: 0,\n      ease: 'power4.In'\n    }).fromTo('.menu-bg nav ul li', {\n      x: -40,\n      opacity: 0\n    }, {\n      duration: 1,\n      x: 0,\n      opacity: 1,\n      stagger: 0.3,\n      ease: \"power2.out\"\n    });\n  }\n  menuOpen = !menuOpen;\n});\n\n//# sourceURL=webpack://three-shader-env01/./src/hamburger.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _assets_shaders_vertex_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/shaders/vertex.vert */ \"./src/assets/shaders/vertex.vert\");\n/* harmony import */ var _assets_shaders_fragment_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/shaders/fragment.frag */ \"./src/assets/shaders/fragment.frag\");\n/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start.js */ \"./src/start.js\");\n/* harmony import */ var _secondCanvas_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secondCanvas.js */ \"./src/secondCanvas.js\");\n/* harmony import */ var _waveCanvas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./waveCanvas.js */ \"./src/waveCanvas.js\");\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hamburger.js */ \"./src/hamburger.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./light.js */ \"./src/light.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_light_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carousel.js */ \"./src/carousel.js\");\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_carousel_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _scrollTrigger_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scrollTrigger.js */ \"./src/scrollTrigger.js\");\n/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./video.js */ \"./src/video.js\");\n/* harmony import */ var _smooth_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./smooth.js */ \"./src/smooth.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst imageUrls = ['./assets/images/hero-image-01.jpg', './assets/images/hero-image-02.jpg', './assets/images/hero-image-03.jpg'];\nlet renderer, scene, camera, material, plane;\nlet currentIndex = 0;\nconst dispMapUrl = './assets/textures/fluid.jpg';\nasync function loadTexture(url) {\n  return new Promise((resolve, reject) => {\n    new three__WEBPACK_IMPORTED_MODULE_13__.TextureLoader().load(url, resolve, undefined, reject);\n  });\n}\nfunction onWindowResize() {\n  if (!plane) return; // planeがundefinedまたはnullの場合、処理を中断\n\n  const windowAspect = window.innerWidth / window.innerHeight;\n  const imageAspect = 1920 / 1080; // 例: 1920x1080の画像の場合\n\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  camera.aspect = windowAspect;\n  camera.updateProjectionMatrix();\n  if (material) {\n    material.uniforms.uPlaneAspect.value = windowAspect;\n  }\n  if (windowAspect > imageAspect) {\n    plane.scale.x = windowAspect / imageAspect;\n    plane.scale.y = 1;\n  } else {\n    plane.scale.x = 1;\n    plane.scale.y = imageAspect / windowAspect;\n  }\n}\nasync function initializeScene(imageUrls) {\n  try {\n    renderer = new three__WEBPACK_IMPORTED_MODULE_13__.WebGLRenderer({\n      alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    const container = document.querySelector('.canvas-bg-dist');\n    container.appendChild(renderer.domElement); // Ensure this matches your actual HTML structure\n\n    scene = new three__WEBPACK_IMPORTED_MODULE_13__.Scene();\n    camera = new three__WEBPACK_IMPORTED_MODULE_13__.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 2;\n    const textures = await Promise.all(imageUrls.map(url => loadTexture(url)));\n    const dispTexture = await loadTexture(dispMapUrl);\n    material = new three__WEBPACK_IMPORTED_MODULE_13__.ShaderMaterial({\n      uniforms: {\n        currentImage: {\n          value: textures[0]\n        },\n        nextImage: {\n          value: textures[1]\n        },\n        disp: {\n          value: dispTexture\n        },\n        dispFactor: {\n          value: 0.0\n        },\n        uImageAspect: {\n          value: window.innerWidth / window.innerHeight\n        },\n        uPlaneAspect: {\n          value: window.innerWidth / window.innerHeight\n        }\n      },\n      vertexShader: _assets_shaders_vertex_vert__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      fragmentShader: _assets_shaders_fragment_frag__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      transparent: true\n    });\n    const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_13__.PlaneGeometry(4, 4 * (window.innerHeight / window.innerWidth));\n    plane = new three__WEBPACK_IMPORTED_MODULE_13__.Mesh(planeGeometry, material);\n    scene.add(plane);\n    window.addEventListener('resize', onWindowResize);\n    function triggerAnimation() {\n      const nextIndex = (currentIndex + 1) % textures.length;\n      material.uniforms.nextImage.value = textures[nextIndex];\n      gsap__WEBPACK_IMPORTED_MODULE_14__.gsap.to(material.uniforms.dispFactor, {\n        value: 1,\n        duration: 1,\n        ease: \"power2.inOut\",\n        onComplete: () => {\n          material.uniforms.currentImage.value = textures[nextIndex];\n          material.uniforms.nextImage.value = textures[(nextIndex + 1) % textures.length];\n          material.uniforms.dispFactor.value = 0;\n          currentIndex = nextIndex;\n          (0,_secondCanvas_js__WEBPACK_IMPORTED_MODULE_5__.updateImage)(currentIndex); // Update the image based on currentIndex\n        }\n      });\n    }\n    setInterval(triggerAnimation, 8000);\n    function animate() {\n      requestAnimationFrame(animate);\n      renderer.render(scene, camera);\n    }\n    animate();\n    (0,_secondCanvas_js__WEBPACK_IMPORTED_MODULE_5__.setupScene)(imageUrls);\n  } catch (error) {\n    console.error('An error occurred:', error);\n  }\n}\ninitializeScene(imageUrls).catch(error => console.error(error));\n\n//# sourceURL=webpack://three-shader-env01/./src/index.js?");

/***/ }),

/***/ "./src/light.js":
/*!**********************!*\
  !*** ./src/light.js ***!
  \**********************/
/***/ (() => {

eval("const light = document.querySelector('.light');\nlet height = 200;\nlet width = 200;\ndocument.addEventListener('mousemove', function (e) {\n  setPosition(e);\n});\ndocument.addEventListener('touchmove', function (e) {\n  setPosition(e);\n});\nfunction setPosition(e) {\n  light.style.top = e.pageY - height / 2 + \"px\";\n  light.style.left = e.pageX - width / 2 + \"px\";\n}\n\n//# sourceURL=webpack://three-shader-env01/./src/light.js?");

/***/ }),

/***/ "./src/scrollTrigger.js":
/*!******************************!*\
  !*** ./src/scrollTrigger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\ngsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\ngsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fromTo('.parallax-right', {\n  x: \"15.1797px\"\n}, {\n  x: '-3603.18px',\n  scrollTrigger: {\n    trigger: '.video-section',\n    // Changed to the actual class of the scroll container\n    start: 'top center-=300',\n    end: 'bottom top',\n    scrub: .1 // You can adjust the scrub speed if needed\n  }\n});\n\n// Move .parallax-left in the opposite direction, adjust values as needed\ngsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fromTo('.parallax-left', {\n  x: \"-1000.1797px\" // Start moving from the opposite direction\n}, {\n  x: '3603.18px',\n  // Move to the opposite direction\n  scrollTrigger: {\n    trigger: '.video-section',\n    // Ensuring consistency with the trigger element\n    start: 'top center-=300',\n    end: 'bottom top',\n    scrub: 1 // Adjusting the scrub speed for a different effect\n  }\n});\nconst textElements = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].utils.toArray('.text-effect');\ntextElements.forEach(text => {\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(text, {\n    backgroundSize: '100%',\n    ease: 'none',\n    scrollTrigger: {\n      trigger: text,\n      start: 'center 80%',\n      end: 'center 20%',\n      scrub: true\n    }\n  });\n});\nconst word = document.querySelector('.link-effect');\nconst letters = \"ABCDEFGHIJKLMNOPRSTUVWXYZ\";\nlet isIntervalRunning = false;\nlet interval;\n\n// アニメーションを開始する関数\nconst startAnimation = () => {\n  if (!isIntervalRunning) {\n    isIntervalRunning = true;\n    interval = setInterval(() => {\n      if (!isIntervalRunning) return;\n      const currentWord = word.innerHTML;\n      word.innerHTML = currentWord.split(\"\").map(letter => letters[Math.floor(Math.random() * letters.length)]).join(\"\");\n    }, 30);\n\n    // 3秒後にアニメーションを停止\n    setTimeout(() => {\n      clearInterval(interval);\n      isIntervalRunning = false;\n      word.innerHTML = 'GET IN TOUCH';\n    }, 1000);\n  }\n};\n\n// GSAPのスクロールトリガーを使用して表示領域に入ったときにアニメーションを開始\ngsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(word, {\n  scrollTrigger: {\n    trigger: word,\n    start: \"top bottom\",\n    // 要素がビューポートの下に入った時\n    onEnter: startAnimation,\n    once: true // 一度だけ実行\n  }\n});\n\n//# sourceURL=webpack://three-shader-env01/./src/scrollTrigger.js?");

/***/ }),

/***/ "./src/secondCanvas.js":
/*!*****************************!*\
  !*** ./src/secondCanvas.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupScene: () => (/* binding */ setupScene),\n/* harmony export */   updateImage: () => (/* binding */ updateImage)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _assets_shaders_canvas_two_vertex_vert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/shaders/canvas-two-vertex.vert */ \"./src/assets/shaders/canvas-two-vertex.vert\");\n/* harmony import */ var _assets_shaders_canvas_two_fragment_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/shaders/canvas-two-fragment.frag */ \"./src/assets/shaders/canvas-two-fragment.frag\");\n\n\n\n\nlet scene,\n  renderer,\n  camera,\n  textureLoader,\n  currentIndex = 0,\n  plane,\n  textures;\nconst setupScene = async imageUrls => {\n  renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\n    alpha: true\n  });\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  const container = document.querySelector('.canvas-bg-blur');\n  container.appendChild(renderer.domElement);\n  camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n  camera.position.z = 600;\n  scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n  textureLoader = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader();\n  try {\n    textures = await Promise.all(imageUrls.map(url => new Promise((resolve, reject) => {\n      textureLoader.load(url, texture => {\n        texture.magFilter = three__WEBPACK_IMPORTED_MODULE_2__.LinearFilter;\n        resolve(texture);\n      }, undefined, reject);\n    })));\n    const material = new three__WEBPACK_IMPORTED_MODULE_2__.ShaderMaterial({\n      uniforms: {\n        map: {\n          value: textures[currentIndex]\n        },\n        aspectRatio: {\n          value: textures[currentIndex].image.width / textures[currentIndex].image.height\n        },\n        containerAspectRatio: {\n          value: window.innerWidth / window.innerHeight\n        }\n      },\n      vertexShader: _assets_shaders_canvas_two_vertex_vert__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      fragmentShader: _assets_shaders_canvas_two_fragment_frag__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      transparent: true\n    });\n    createPlane(1900, 971, material);\n    setInterval(triggerAnimation, 8000);\n  } catch (error) {\n    console.error('Error loading textures:', error);\n  }\n  window.addEventListener('resize', onWindowResize, false);\n  animate();\n};\nconst createPlane = (width, height, material) => {\n  if (plane) scene.remove(plane);\n  const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(width, height);\n  plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planeGeometry, material);\n  scene.add(plane);\n  plane.position.set(0, 0, 0);\n};\nconst onWindowResize = () => {\n  const aspect = window.innerWidth / window.innerHeight;\n  camera.aspect = aspect;\n\n  // カメラの位置を調整して画面全体に表示されるようにします\n  const fov = 75; // 垂直視野角\n  const near = 0.1; // 近いクリッピング面\n  const far = 10000; // 遠いクリッピング面\n\n  // カメラの位置と視野角を再計算\n  const height = Math.tan(three__WEBPACK_IMPORTED_MODULE_2__.MathUtils.degToRad(fov) / 2) * near * 2;\n  const width = height * aspect;\n  camera.aspect = aspect;\n  camera.fov = three__WEBPACK_IMPORTED_MODULE_2__.MathUtils.radToDeg(2 * Math.atan(height / (2 * near)));\n  camera.updateProjectionMatrix();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n};\nconst animate = () => {\n  requestAnimationFrame(animate);\n  renderer.render(scene, camera);\n};\nfunction triggerAnimation() {\n  if (textures) {\n    const nextIndex = (currentIndex + 1) % textures.length;\n    plane.material.uniforms.map.value = textures[nextIndex];\n    currentIndex = nextIndex;\n  }\n  gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to('.canvas-bg-blur', {\n    duration: 8,\n    opacity: 0,\n    ease: 'power2.inOut',\n    repeat: -1\n  });\n}\nconst updateImage = index => {\n  if (textures && index < textures.length) {\n    currentIndex = index;\n    plane.material.uniforms.map.value = textures[currentIndex];\n  }\n};\n\n//# sourceURL=webpack://three-shader-env01/./src/secondCanvas.js?");

/***/ }),

/***/ "./src/smooth.js":
/*!***********************!*\
  !*** ./src/smooth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.mjs\");\n\nconst lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlenis.on('scroll', e => {\n  console.log(e);\n});\nfunction raf(time) {\n  lenis.raf(time);\n  requestAnimationFrame(raf);\n}\nrequestAnimationFrame(raf);\n\n//# sourceURL=webpack://three-shader-env01/./src/smooth.js?");

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loader: () => (/* binding */ loader)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nfunction loader() {\n  let loadItem = document.querySelectorAll('.loader__bg');\n  const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(loadItem, {\n    transformOrigin: '100% 100%',\n    scaleX: 1\n  }), tl.to(loadItem, {\n    scaleX: 0,\n    transformOrigin: '0% 0%',\n    stagger: 0.07,\n    ease: 'power4.inOut'\n  }).to(\".overlay-white\", {\n    duration: .7,\n    xPercent: 100,\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\"\n  }).to(\".overlay-red\", {\n    duration: .9,\n    xPercent: 150,\n    ease: \"cubic-bezier(0.961, 0.83, 0.961)\"\n  }).to('.overlay-white2', {\n    duration: .7,\n    xPercent: 100,\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\"\n  }).to('.overlay-red2', {\n    duration: .9,\n    xPercent: 100,\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\"\n  }).to(\".white-outlined-text\", {\n    duration: .8,\n    opacity: 1,\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\",\n    stagger: {\n      amount: .8,\n      from: \"start\"\n    },\n    transform: 'translateY(0)'\n  }).to('.hero-text', {\n    duration: 1.5,\n    delay: .1,\n    color: 'rgba(60, 57, 57, 1)',\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\",\n    opacity: 1\n  }).to('.hero-vision-bg', {\n    duration: .5,\n    xPercent: 0,\n    opacity: 1,\n    width: '100%',\n    ease: \"cubic-bezier(0.961, 0.03, 0.961)\"\n  });\n}\nwindow.addEventListener('DOMContentLoaded', () => {\n  setTimeout(() => {\n    loader();\n  }, 100);\n});\n\n//# sourceURL=webpack://three-shader-env01/./src/start.js?");

/***/ }),

/***/ "./src/video.js":
/*!**********************!*\
  !*** ./src/video.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_videos_AdobeStock_483252332_video_converter_com_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/videos/AdobeStock_483252332 (video-converter.com).mp4 */ \"./src/assets/videos/AdobeStock_483252332 (video-converter.com).mp4\");\n/* harmony import */ var _assets_videos_AdobeStock_585956923_video_converter_com_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/videos/AdobeStock_585956923 (video-converter.com).mp4 */ \"./src/assets/videos/AdobeStock_585956923 (video-converter.com).mp4\");\n/* harmony import */ var _assets_videos_AdobeStock_732033388_video_converter_com_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/videos/AdobeStock_732033388 (video-converter.com).mp4 */ \"./src/assets/videos/AdobeStock_732033388 (video-converter.com).mp4\");\n\n\n\nconst videoWrapper01 = document.querySelector('.sticky-image01');\nconst videoElement1 = document.createElement('video');\nvideoElement1.src = _assets_videos_AdobeStock_483252332_video_converter_com_mp4__WEBPACK_IMPORTED_MODULE_0__;\n// videoElement1.controls = true;\nvideoElement1.autoplay = true; // 自動再生を有効化\nvideoElement1.muted = true; // ミュートを有効化\nvideoElement1.loop = true; // ループ再生を有効化\nvideoElement1.classList.add('sticky-image');\nvideoWrapper01.appendChild(videoElement1);\n\n// ビデオ02の要素を作成してページに挿入\nconst videoElement2 = document.createElement('video');\nvideoElement2.src = _assets_videos_AdobeStock_585956923_video_converter_com_mp4__WEBPACK_IMPORTED_MODULE_1__;\n// videoElement2.controls = true;\nvideoElement2.autoplay = true; // 自動再生を有効化\nvideoElement2.muted = true; // ミュートを有効化\nvideoElement2.loop = true; // ループ再生を有効化\nvideoElement2.classList.add('sticky-image');\nvideoWrapper01.appendChild(videoElement2);\n\n// ビデオ03の要素を作成してページに挿入\nconst videoElement3 = document.createElement('video');\nvideoElement3.src = _assets_videos_AdobeStock_732033388_video_converter_com_mp4__WEBPACK_IMPORTED_MODULE_2__;\n// videoElement3.controls = true;\nvideoElement3.autoplay = true; // 自動再生を有効化\nvideoElement3.muted = true; // ミュートを有効化\nvideoElement3.loop = true; // ループ再生を有効化\nvideoElement3.classList.add('sticky-image');\nvideoWrapper01.appendChild(videoElement3);\n\n//# sourceURL=webpack://three-shader-env01/./src/video.js?");

/***/ }),

/***/ "./src/waveCanvas.js":
/*!***************************!*\
  !*** ./src/waveCanvas.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n  antialias: true\n});\nconst amountX = 40;\nconst amountY = 100;\nconst spacer = 70;\nconst particlesCount = amountX * amountY;\nlet particles = 0;\nlet count = 0;\n\n// Additional parameters for dynamic waves\nconst waveFrequencyX = 0.35;\nconst waveFrequencyY = 0.2;\nconst waveAmplitude = 155;\nconst waveSpeed = 0.05;\nfunction init() {\n  renderer.setPixelRatio(window.devicePixelRatio);\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  const container = document.querySelector('.wave-content');\n  container.appendChild(renderer.domElement);\n  camera.position.x = 350;\n  camera.position.y = 150;\n  camera.position.z = 250;\n  camera.lookAt(scene.position);\n\n  //set crear color de fondo\n  renderer.setClearColor(0x3C3939, 1);\n  const positions = new Float32Array(particlesCount * 10);\n  let i = 0;\n  for (let ix = 0; ix < amountX; ix++) {\n    for (let iy = 0; iy < amountY; iy++) {\n      positions[i] = ix * spacer - amountX * spacer / 2; // x\n      positions[i + 1] = 0; // y\n      positions[i + 2] = iy * spacer - amountY * spacer / 2; // z\n\n      i += 3;\n    }\n  }\n  const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n  geometry.setAttribute(\"position\", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));\n  particles = new three__WEBPACK_IMPORTED_MODULE_0__.Points(geometry); // add material here\n\n  scene.add(particles);\n  renderer.render(scene, camera);\n  animate();\n}\nfunction animate() {\n  requestAnimationFrame(animate);\n  render();\n}\nfunction render() {\n  const positions = particles.geometry.attributes.position.array;\n  let i = 0;\n  for (let ix = 0; ix < amountX; ix++) {\n    for (let iy = 0; iy < amountY; iy++) {\n      positions[i + 1] = Math.sin((ix + count) * waveFrequencyX) * waveAmplitude + Math.sin((iy + count) * waveFrequencyY) * waveAmplitude;\n      i += 3;\n    }\n  }\n  particles.geometry.attributes.position.needsUpdate = true;\n  renderer.render(scene, camera);\n  count += waveSpeed;\n}\ninit();\n\n//# sourceURL=webpack://three-shader-env01/./src/waveCanvas.js?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://three-shader-env01/./src/reset.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://three-shader-env01/./src/style.css?");

/***/ }),

/***/ "./src/assets/shaders/canvas-two-fragment.frag":
/*!*****************************************************!*\
  !*** ./src/assets/shaders/canvas-two-fragment.frag ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"\\n\\n// Fragment Shader\\nuniform sampler2D map;\\nuniform float aspectRatio;\\nuniform float containerAspectRatio;\\nvarying vec2 vUv;\\n\\nvoid main() {\\n    vec2 adjustedUV = vUv;\\n    // テクスチャのアスペクト比とコンテナのアスペクト比を比較してUV座標を調整\\n    if (aspectRatio > containerAspectRatio) {\\n        // 画像がコンテナよりも横長の場合\\n        adjustedUV.x = (vUv.x - 0.5) * (containerAspectRatio / aspectRatio) + 0.5;\\n    } else {\\n        // 画像がコンテナよりも縦長の場合\\n        adjustedUV.y = (vUv.y - 0.5) * (aspectRatio / containerAspectRatio) + 0.5;\\n    }\\n\\n    gl_FragColor = texture2D(map, adjustedUV);\\n}\\n\");\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/shaders/canvas-two-fragment.frag?");

/***/ }),

/***/ "./src/assets/shaders/canvas-two-vertex.vert":
/*!***************************************************!*\
  !*** ./src/assets/shaders/canvas-two-vertex.vert ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"// Vertex Shader\\nvarying vec2 vUv;\\n\\nvoid main() {\\n    vUv = uv;\\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\\n}\");\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/shaders/canvas-two-vertex.vert?");

/***/ }),

/***/ "./src/assets/shaders/fragment.frag":
/*!******************************************!*\
  !*** ./src/assets/shaders/fragment.frag ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"varying vec2 vUv;\\nuniform sampler2D currentImage;\\nuniform sampler2D nextImage;\\nuniform sampler2D disp;\\nuniform float dispFactor;\\nuniform float uPlaneAspect;\\n\\nvoid main() {\\n    // 画像のアスペクト比を保持するためのユニフォーム uImageAspect は JavaScript から設定されるものとします\\n    // uImageAspect の値が 1699 / 597 のアスペクト比を持つ画像のアスペクト比であると仮定して計算します\\n\\n    vec2 ratio = vec2(\\n        min(uPlaneAspect / (1699.0 / 597.0), 1.0),\\n        min((1.0 / uPlaneAspect) / ((1.0 / 1699.0) / 597.0), 1.0)\\n    );\\n\\n    vec2 fixedUv = vec2(\\n        (vUv.x - 0.5) * ratio.x + 0.5,\\n        (vUv.y - 0.5) * ratio.y + 0.5\\n    );\\n\\n    vec2 uv = fixedUv;\\n\\n    vec4 dispMap = texture2D(disp, uv);\\n    vec2 dispValue = dispMap.rg * 2.0 - 1.0;\\n    vec2 calcPosition = uv + dispValue * (1.0 - dispFactor) * 0.9;\\n\\n    vec4 _currentImage = texture2D(currentImage, fixedUv);\\n    vec4 _nextImage = texture2D(nextImage, calcPosition);\\n\\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\\n    gl_FragColor = finalTexture;\\n}\\n\");\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/shaders/fragment.frag?");

/***/ }),

/***/ "./src/assets/shaders/vertex.vert":
/*!****************************************!*\
  !*** ./src/assets/shaders/vertex.vert ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"      varying vec2 vUv;\\n      void main() {\\n        vUv = uv;\\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n      }\");\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/shaders/vertex.vert?");

/***/ }),

/***/ "./src/assets/videos/AdobeStock_483252332 (video-converter.com).mp4":
/*!**************************************************************************!*\
  !*** ./src/assets/videos/AdobeStock_483252332 (video-converter.com).mp4 ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"videos/AdobeStock_483252332 (video-converter.com).mp4\";\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/videos/AdobeStock_483252332_(video-converter.com).mp4?");

/***/ }),

/***/ "./src/assets/videos/AdobeStock_585956923 (video-converter.com).mp4":
/*!**************************************************************************!*\
  !*** ./src/assets/videos/AdobeStock_585956923 (video-converter.com).mp4 ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"videos/AdobeStock_585956923 (video-converter.com).mp4\";\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/videos/AdobeStock_585956923_(video-converter.com).mp4?");

/***/ }),

/***/ "./src/assets/videos/AdobeStock_732033388 (video-converter.com).mp4":
/*!**************************************************************************!*\
  !*** ./src/assets/videos/AdobeStock_732033388 (video-converter.com).mp4 ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"videos/AdobeStock_732033388 (video-converter.com).mp4\";\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/videos/AdobeStock_732033388_(video-converter.com).mp4?");

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
/******/ 			"main": 0,
/******/ 			"src_reset_css-src_style_css": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_index_js","vendors-node_modules_gsap_ScrollTrigger_js-node_modules_studio-freight_lenis_dist_lenis_mjs-n-366e95","src_reset_css-src_style_css"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;