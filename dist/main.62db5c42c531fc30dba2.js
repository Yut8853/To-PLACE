/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hamburger.js":
/*!**************************!*\
  !*** ./src/hamburger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nlet menuOpen = false;\ndocument.querySelector('.menu-btn').addEventListener('click', function () {\n  const link = document.querySelectorAll('.text-stroke-fill-ltr');\n  const linkHoverReveal = document.querySelectorAll('.hover-reveal');\n  const linkImages = document.querySelectorAll('.hidden-img');\n  for (let i = 0; i < link.length; i++) {\n    link[i].addEventListener('mousemove', e => {\n      linkHoverReveal[i].style.opacity = .6;\n      linkHoverReveal[i].style.transform = `translate(150%, -70% ) rotate(5deg)`;\n      linkImages[i].style.transform = 'scale(1, 1)';\n      linkHoverReveal[i].style.left = e.clientX + \"px\";\n    });\n    link[i].addEventListener('mouseleave', e => {\n      linkHoverReveal[i].style.opacity = 0;\n      linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;\n      linkImages[i].style.transform = 'scale(0.8, 0.8)';\n    });\n  }\n  let tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n    onStart: function () {\n      document.querySelector('.menu-bg').style.visibility = 'visible';\n    },\n    onComplete: function () {\n      if (!menuOpen) {\n        document.querySelector('.menu-bg').style.visibility = 'hidden';\n      }\n    }\n  });\n  if (menuOpen) {\n    // メニューが開いている場合、左に隠す\n    tl.to('.menu-bg', {\n      duration: .4,\n      left: '-100%',\n      ease: 'power4.Out'\n    });\n  } else {\n    // メニューが閉じている場合、右に表示\n    tl.to('.menu-bg', {\n      duration: .4,\n      left: 0,\n      ease: 'power4.In'\n    }).fromTo('.menu-bg nav ul li', {\n      x: -40,\n      opacity: 0\n    }, {\n      duration: 1,\n      x: 0,\n      opacity: 1,\n      stagger: 0.6,\n      ease: \"power2.out\"\n    });\n  }\n  menuOpen = !menuOpen;\n});\n\n//# sourceURL=webpack://three-shader-env01/./src/hamburger.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _assets_shaders_vertex_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/shaders/vertex.vert */ \"./src/assets/shaders/vertex.vert\");\n/* harmony import */ var _assets_shaders_fragment_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/shaders/fragment.frag */ \"./src/assets/shaders/fragment.frag\");\n/* harmony import */ var _secondCanvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secondCanvas.js */ \"./src/secondCanvas.js\");\n/* harmony import */ var _waveCanvas_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waveCanvas.js */ \"./src/waveCanvas.js\");\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hamburger.js */ \"./src/hamburger.js\");\n\n\n\n\n\n\n\n\n\nconst imageUrls = ['./assets/images/hero-image-01.jpg', './assets/images/hero-image-02.jpg', './assets/images/hero-image-03.jpg'];\nlet renderer, scene, camera, material;\nlet currentIndex = 0;\nlet plane;\nconst dispMapUrl = './assets/textures/fluid.jpg';\nfunction onWindowResize() {\n  if (!plane) return; // planeがundefinedまたはnullの場合、処理を中断\n\n  // ウィンドウのアスペクト比\n  const windowAspect = window.innerWidth / window.innerHeight;\n\n  // プレーン（または画像）の元のアスペクト比\n  const imageAspect = 1920 / 1080; // 例: 1920x1080の画像の場合\n\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  camera.aspect = windowAspect;\n  camera.updateProjectionMatrix();\n  if (material) {\n    material.uniforms.uPlaneAspect.value = windowAspect;\n  }\n\n  // アスペクト比に基づいてプレーンのスケールを調整\n  if (windowAspect > imageAspect) {\n    // ウィンドウがプレーンよりも横長の場合\n    plane.scale.x = windowAspect / imageAspect;\n    plane.scale.y = 1;\n  } else {\n    // ウィンドウがプレーンよりも縦長の場合\n    plane.scale.x = 1;\n    plane.scale.y = imageAspect / windowAspect;\n  }\n}\nasync function initializeScene(imageUrls) {\n  renderer = new three__WEBPACK_IMPORTED_MODULE_7__.WebGLRenderer({\n    alpha: true\n  });\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  document.querySelector('.canvas-bg-dist').appendChild(renderer.domElement);\n  scene = new three__WEBPACK_IMPORTED_MODULE_7__.Scene();\n  camera = new three__WEBPACK_IMPORTED_MODULE_7__.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);\n  camera.position.z = 2;\n  const textures = await Promise.all(imageUrls.map(url => new Promise(resolve => new three__WEBPACK_IMPORTED_MODULE_7__.TextureLoader().load(url, resolve))));\n  const dispTexture = await new Promise(resolve => new three__WEBPACK_IMPORTED_MODULE_7__.TextureLoader().load(dispMapUrl, resolve));\n  material = new three__WEBPACK_IMPORTED_MODULE_7__.ShaderMaterial({\n    uniforms: {\n      currentImage: {\n        value: textures[0]\n      },\n      nextImage: {\n        value: textures[1]\n      },\n      disp: {\n        value: dispTexture\n      },\n      dispFactor: {\n        value: 0.0\n      },\n      uImageAspect: {\n        value: window.innerWidth / window.innerHeight\n      },\n      uPlaneAspect: {\n        value: window.innerWidth / window.innerHeight\n      }\n    },\n    vertexShader: _assets_shaders_vertex_vert__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    fragmentShader: _assets_shaders_fragment_frag__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    transparent: true\n  });\n  const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_7__.PlaneGeometry(4, 4 * (window.innerHeight / window.innerWidth));\n  plane = new three__WEBPACK_IMPORTED_MODULE_7__.Mesh(planeGeometry, material);\n  plane.position.y = 0;\n  scene.add(plane);\n  window.addEventListener('resize', onWindowResize);\n  function triggerAnimation() {\n    const nextIndex = (currentIndex + 1) % textures.length;\n    material.uniforms.nextImage.value = textures[nextIndex];\n    gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(material.uniforms.dispFactor, {\n      value: 1,\n      duration: 1,\n      ease: \"power2.inOut\",\n      onComplete: () => {\n        material.uniforms.currentImage.value = textures[nextIndex];\n        material.uniforms.nextImage.value = textures[(nextIndex + 1) % textures.length];\n        material.uniforms.dispFactor.value = 0;\n        currentIndex = nextIndex;\n      }\n    });\n    // currentIndexを渡しています\n    (0,_secondCanvas_js__WEBPACK_IMPORTED_MODULE_4__.updateImage)(currentIndex);\n  }\n  setInterval(triggerAnimation, 5000);\n  function animate() {\n    requestAnimationFrame(animate);\n    renderer.render(scene, camera);\n  }\n  animate();\n  (0,_secondCanvas_js__WEBPACK_IMPORTED_MODULE_4__.setupScene)(imageUrls);\n}\ninitializeScene(imageUrls).catch(error => console.error(error));\n\n//# sourceURL=webpack://three-shader-env01/./src/index.js?");

/***/ }),

/***/ "./src/secondCanvas.js":
/*!*****************************!*\
  !*** ./src/secondCanvas.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupScene: () => (/* binding */ setupScene),\n/* harmony export */   updateImage: () => (/* binding */ updateImage)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _assets_shaders_canvas_two_vertex_vert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/shaders/canvas-two-vertex.vert */ \"./src/assets/shaders/canvas-two-vertex.vert\");\n/* harmony import */ var _assets_shaders_canvas_two_fragment_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/shaders/canvas-two-fragment.frag */ \"./src/assets/shaders/canvas-two-fragment.frag\");\n\n\n\n\nlet scene,\n  renderer,\n  camera,\n  textureLoader,\n  currentIndex = 0,\n  plane,\n  textures;\nconst setupScene = async imageUrls => {\n  renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\n    alpha: true\n  });\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  const container = document.querySelector('.canvas-bg-blur');\n  container.appendChild(renderer.domElement);\n  camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n  camera.position.z = 600;\n  scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n  textureLoader = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader();\n  try {\n    textures = await Promise.all(imageUrls.map(url => new Promise((resolve, reject) => {\n      textureLoader.load(url, texture => {\n        texture.magFilter = three__WEBPACK_IMPORTED_MODULE_2__.LinearFilter;\n        resolve(texture);\n      }, undefined, reject);\n    })));\n    const material = new three__WEBPACK_IMPORTED_MODULE_2__.ShaderMaterial({\n      uniforms: {\n        map: {\n          value: textures[currentIndex]\n        },\n        aspectRatio: {\n          value: textures[currentIndex].image.width / textures[currentIndex].image.height\n        },\n        containerAspectRatio: {\n          value: window.innerWidth / window.innerHeight\n        }\n      },\n      vertexShader: _assets_shaders_canvas_two_vertex_vert__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      fragmentShader: _assets_shaders_canvas_two_fragment_frag__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      transparent: true\n    });\n    createPlane(1900, 971, material);\n    setInterval(triggerAnimation, 5000);\n  } catch (error) {\n    console.error('Error loading textures:', error);\n  }\n  window.addEventListener('resize', onWindowResize, false);\n  animate();\n};\nconst createPlane = (width, height, material) => {\n  if (plane) scene.remove(plane);\n  const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(width, height);\n  plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planeGeometry, material);\n  scene.add(plane);\n  plane.position.set(0, 0, 0);\n};\nconst onWindowResize = () => {\n  const aspect = window.innerWidth / window.innerHeight;\n  camera.aspect = aspect;\n\n  // カメラの位置を調整して画面全体に表示されるようにします\n  const fov = 75; // 垂直視野角\n  const near = 0.1; // 近いクリッピング面\n  const far = 10000; // 遠いクリッピング面\n\n  // カメラの位置と視野角を再計算\n  const height = Math.tan(three__WEBPACK_IMPORTED_MODULE_2__.MathUtils.degToRad(fov) / 2) * near * 2;\n  const width = height * aspect;\n  camera.aspect = aspect;\n  camera.fov = three__WEBPACK_IMPORTED_MODULE_2__.MathUtils.radToDeg(2 * Math.atan(height / (2 * near)));\n  camera.updateProjectionMatrix();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n};\nconst animate = () => {\n  requestAnimationFrame(animate);\n  renderer.render(scene, camera);\n};\nfunction triggerAnimation() {\n  if (textures) {\n    const nextIndex = (currentIndex + 1) % textures.length;\n    plane.material.uniforms.map.value = textures[nextIndex];\n    currentIndex = nextIndex;\n  }\n  gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to('.canvas-bg-blur', {\n    duration: 5,\n    opacity: 0,\n    ease: 'power2.inOut',\n    repeat: -1\n  });\n}\nconst updateImage = index => {\n  if (textures && index < textures.length) {\n    currentIndex = index;\n    plane.material.uniforms.map.value = textures[currentIndex];\n  }\n};\n\n//# sourceURL=webpack://three-shader-env01/./src/secondCanvas.js?");

/***/ }),

/***/ "./src/waveCanvas.js":
/*!***************************!*\
  !*** ./src/waveCanvas.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n  antialias: true\n});\nconst amountX = 40;\nconst amountY = 100;\nconst spacer = 70;\nconst particlesCount = amountX * amountY;\nlet particles = 0;\nlet count = 0;\n\n// Additional parameters for dynamic waves\nconst waveFrequencyX = 0.35;\nconst waveFrequencyY = 0.2;\nconst waveAmplitude = 35;\nconst waveSpeed = 0.05;\nfunction init() {\n  renderer.setPixelRatio(window.devicePixelRatio);\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  const container = document.querySelector('.wave-content');\n  container.appendChild(renderer.domElement);\n  camera.position.x = 350;\n  camera.position.y = 150;\n  camera.position.z = 350;\n  camera.lookAt(scene.position);\n  const positions = new Float32Array(particlesCount * 8);\n  let i = 0;\n  for (let ix = 0; ix < amountX; ix++) {\n    for (let iy = 0; iy < amountY; iy++) {\n      positions[i] = ix * spacer - amountX * spacer / 2; // x\n      positions[i + 1] = 0; // y\n      positions[i + 2] = iy * spacer - amountY * spacer / 2; // z\n\n      i += 3;\n    }\n  }\n  const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n  geometry.setAttribute(\"position\", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));\n  particles = new three__WEBPACK_IMPORTED_MODULE_0__.Points(geometry); // add material here\n\n  scene.add(particles);\n  renderer.render(scene, camera);\n  animate();\n}\nfunction animate() {\n  requestAnimationFrame(animate);\n  render();\n}\nfunction render() {\n  const positions = particles.geometry.attributes.position.array;\n  let i = 0;\n  for (let ix = 0; ix < amountX; ix++) {\n    for (let iy = 0; iy < amountY; iy++) {\n      positions[i + 1] = Math.sin((ix + count) * waveFrequencyX) * waveAmplitude + Math.sin((iy + count) * waveFrequencyY) * waveAmplitude;\n      i += 3;\n    }\n  }\n  particles.geometry.attributes.position.needsUpdate = true;\n  renderer.render(scene, camera);\n  count += waveSpeed;\n}\ninit();\n\n//# sourceURL=webpack://three-shader-env01/./src/waveCanvas.js?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://three-shader-env01/./src/reset.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://three-shader-env01/./src/style.css?");

/***/ }),

/***/ "./src/assets/shaders/canvas-two-fragment.frag":
/*!*****************************************************!*\
  !*** ./src/assets/shaders/canvas-two-fragment.frag ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"\\n\\n// Fragment Shader\\nuniform sampler2D map;\\nuniform float aspectRatio;\\nuniform float containerAspectRatio;\\nvarying vec2 vUv;\\n\\nvoid main() {\\n    vec2 adjustedUV = vUv;\\n    // テクスチャのアスペクト比とコンテナのアスペクト比を比較してUV座標を調整\\n    if (aspectRatio > containerAspectRatio) {\\n        // 画像がコンテナよりも横長の場合\\n        adjustedUV.x = (vUv.x - 0.5) * (containerAspectRatio / aspectRatio) + 0.5;\\n    } else {\\n        // 画像がコンテナよりも縦長の場合\\n        adjustedUV.y = (vUv.y - 0.5) * (aspectRatio / containerAspectRatio) + 0.5;\\n    }\\n\\n    gl_FragColor = texture2D(map, adjustedUV);\\n}\\n\");\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/shaders/canvas-two-fragment.frag?");

/***/ }),

/***/ "./src/assets/shaders/canvas-two-vertex.vert":
/*!***************************************************!*\
  !*** ./src/assets/shaders/canvas-two-vertex.vert ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"// Vertex Shader\\nvarying vec2 vUv;\\n\\nvoid main() {\\n    vUv = uv;\\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\\n}\");\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/shaders/canvas-two-vertex.vert?");

/***/ }),

/***/ "./src/assets/shaders/fragment.frag":
/*!******************************************!*\
  !*** ./src/assets/shaders/fragment.frag ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"varying vec2 vUv;\\nuniform sampler2D currentImage;\\nuniform sampler2D nextImage;\\nuniform sampler2D disp;\\nuniform float dispFactor;\\nuniform float uPlaneAspect;\\n\\nvoid main() {\\n    // 画像のアスペクト比を保持するためのユニフォーム uImageAspect は JavaScript から設定されるものとします\\n    // uImageAspect の値が 1699 / 597 のアスペクト比を持つ画像のアスペクト比であると仮定して計算します\\n\\n    vec2 ratio = vec2(\\n        min(uPlaneAspect / (1699.0 / 597.0), 1.0),\\n        min((1.0 / uPlaneAspect) / ((1.0 / 1699.0) / 597.0), 1.0)\\n    );\\n\\n    vec2 fixedUv = vec2(\\n        (vUv.x - 0.5) * ratio.x + 0.5,\\n        (vUv.y - 0.5) * ratio.y + 0.5\\n    );\\n\\n    vec2 uv = fixedUv;\\n\\n    vec4 dispMap = texture2D(disp, uv);\\n    vec2 dispValue = dispMap.rg * 2.0 - 1.0;\\n    vec2 calcPosition = uv + dispValue * (1.0 - dispFactor) * 0.9;\\n\\n    vec4 _currentImage = texture2D(currentImage, fixedUv);\\n    vec4 _nextImage = texture2D(nextImage, calcPosition);\\n\\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\\n    gl_FragColor = finalTexture;\\n}\\n\");\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/shaders/fragment.frag?");

/***/ }),

/***/ "./src/assets/shaders/vertex.vert":
/*!****************************************!*\
  !*** ./src/assets/shaders/vertex.vert ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"      varying vec2 vUv;\\n      void main() {\\n        vUv = uv;\\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n      }\");\n\n//# sourceURL=webpack://three-shader-env01/./src/assets/shaders/vertex.vert?");

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
/******/ 			"main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_index_js-node_modules_three_build_three_module_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;