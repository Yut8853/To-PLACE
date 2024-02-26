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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _assets_shaders_vertex_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/shaders/vertex.vert */ \"./src/assets/shaders/vertex.vert\");\n/* harmony import */ var _assets_shaders_fragment_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/shaders/fragment.frag */ \"./src/assets/shaders/fragment.frag\");\n/* harmony import */ var _secondCanvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secondCanvas.js */ \"./src/secondCanvas.js\");\n\n\n\n\n\n\n\nconst imageUrls = ['./assets/images/hero-image-01.jpg', './assets/images/hero-image-02.jpg', './assets/images/hero-image-03.jpg'];\nlet renderer, scene, camera, material;\nlet currentIndex = 0;\nconst dispMapUrl = './assets/textures/fluid.jpg';\nfunction onWindowResize() {\n  // ウィンドウのアスペクト比に基づいてレンダラーのサイズを更新\n  renderer.setSize(window.innerWidth, window.innerHeight);\n\n  // カメラのアスペクト比を更新\n  camera.aspect = window.innerWidth / window.innerHeight;\n  camera.updateProjectionMatrix();\n\n  // マテリアルのuniformsを更新\n  if (material) {\n    material.uniforms.uPlaneAspect.value = window.innerWidth / window.innerHeight;\n  }\n}\nasync function initializeScene(imageUrls) {\n  renderer = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n    alpha: true\n  });\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  document.querySelector('.canvas-bg-dist').appendChild(renderer.domElement);\n  scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();\n  camera = new three__WEBPACK_IMPORTED_MODULE_5__.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);\n  camera.position.z = 2.4;\n  const textures = await Promise.all(imageUrls.map(url => new Promise(resolve => new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader().load(url, resolve))));\n  const dispTexture = await new Promise(resolve => new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader().load(dispMapUrl, resolve));\n  material = new three__WEBPACK_IMPORTED_MODULE_5__.ShaderMaterial({\n    uniforms: {\n      currentImage: {\n        value: textures[0]\n      },\n      nextImage: {\n        value: textures[1]\n      },\n      disp: {\n        value: dispTexture\n      },\n      dispFactor: {\n        value: 0.0\n      },\n      uImageAspect: {\n        value: window.innerWidth / window.innerHeight\n      },\n      uPlaneAspect: {\n        value: window.innerWidth / window.innerHeight\n      }\n    },\n    vertexShader: _assets_shaders_vertex_vert__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    fragmentShader: _assets_shaders_fragment_frag__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    transparent: true\n  });\n  const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_5__.PlaneGeometry(5, 5 * (window.innerHeight / window.innerWidth));\n  const plane = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(planeGeometry, material);\n  plane.position.y = -.3;\n  scene.add(plane);\n  window.addEventListener('resize', onWindowResize);\n  function triggerAnimation() {\n    const nextIndex = (currentIndex + 1) % textures.length;\n    material.uniforms.nextImage.value = textures[nextIndex];\n    gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(material.uniforms.dispFactor, {\n      value: 1,\n      duration: 1,\n      ease: \"power2.inOut\",\n      onComplete: () => {\n        material.uniforms.currentImage.value = textures[nextIndex];\n        material.uniforms.nextImage.value = textures[(nextIndex + 1) % textures.length];\n        material.uniforms.dispFactor.value = 0;\n        currentIndex = nextIndex;\n      }\n    });\n    // currentIndexを渡しています\n    (0,_secondCanvas_js__WEBPACK_IMPORTED_MODULE_4__.updateImage)(currentIndex);\n  }\n  setInterval(triggerAnimation, 3000);\n  function animate() {\n    requestAnimationFrame(animate);\n    renderer.render(scene, camera);\n  }\n  animate();\n  (0,_secondCanvas_js__WEBPACK_IMPORTED_MODULE_4__.setupScene)(imageUrls);\n}\ninitializeScene(imageUrls).catch(error => console.error(error));\n\n//# sourceURL=webpack://three-shader-env01/./src/index.js?");

/***/ }),

/***/ "./src/secondCanvas.js":
/*!*****************************!*\
  !*** ./src/secondCanvas.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupScene: () => (/* binding */ setupScene),\n/* harmony export */   updateImage: () => (/* binding */ updateImage)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_shaders_canvas_two_vertex_vert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/shaders/canvas-two-vertex.vert */ \"./src/assets/shaders/canvas-two-vertex.vert\");\n/* harmony import */ var _assets_shaders_canvas_two_fragment_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/shaders/canvas-two-fragment.frag */ \"./src/assets/shaders/canvas-two-fragment.frag\");\n\n\n\nlet scene,\n  renderer,\n  camera,\n  textureLoader,\n  materials = [],\n  currentIndex = 0,\n  plane;\nlet container;\nlet imageAspectRatio = 1; // Default aspect ratio\n\nconst setupScene = async imageUrls => {\n  // Async function to handle texture loading properly\n\n  renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\n    alpha: true\n  });\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  container = document.querySelector('.canvas-bg-blur');\n  container.appendChild(renderer.domElement);\n  camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n  camera.position.z = 2;\n  scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n  textureLoader = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader();\n  const textures = await Promise.all(imageUrls.map(url => new Promise((resolve, reject) => {\n    textureLoader.load(url, resolve, undefined, reject);\n  })));\n  textures.forEach((texture, index) => {\n    console.log(`Texture ${index} loaded successfully.`);\n    if (index === 0) {\n      // Only for the first texture\n      imageAspectRatio = texture.image.width / texture.image.height;\n    }\n    const material = new three__WEBPACK_IMPORTED_MODULE_2__.ShaderMaterial({\n      uniforms: {\n        map: {\n          value: texture\n        },\n        aspectRatio: {\n          value: imageAspectRatio\n        },\n        containerAspectRatio: {\n          value: container.clientWidth / container.clientHeight\n        }\n      },\n      vertexShader: _assets_shaders_canvas_two_vertex_vert__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      fragmentShader: _assets_shaders_canvas_two_fragment_frag__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      transparent: true\n    });\n    materials.push(material);\n    if (index === 0) {\n      // Only for the first texture\n      createPlane(material); // Create plane with the first texture\n    }\n  });\n  const onWindowResize = () => {\n    camera.aspect = window.innerWidth / window.innerHeight;\n    camera.updateProjectionMatrix();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    adjustPlaneSize(); // Adjust plane size on window resize\n  };\n  window.addEventListener('resize', onWindowResize, false);\n  animate(); // Start the rendering loop\n};\nconst createPlane = material => {\n  console.log('Plane width:', planeGeometry.parameters.width);\n  console.log('Plane height:', planeGeometry.parameters.height);\n  const aspectRatio = 1900 / 971; // Example aspect ratio, adjust as needed\n  const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(1, 1 / aspectRatio);\n  plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planeGeometry, material);\n  plane.position.y = -1; // Adjust position as needed\n  scene.add(plane);\n  adjustPlaneSize();\n};\nconst adjustPlaneSize = () => {\n  if (!plane) return;\n  const windowAspect = window.innerWidth / window.innerHeight;\n  plane.scale.x = windowAspect < imageAspectRatio ? windowAspect / imageAspectRatio : 1;\n  plane.scale.y = windowAspect > imageAspectRatio ? imageAspectRatio / windowAspect : 1;\n};\nconst animate = () => {\n  requestAnimationFrame(animate);\n  renderer.render(scene, camera);\n};\nconst updateImage = index => {\n  if (index < materials.length) {\n    currentIndex = index;\n    plane.material = materials[currentIndex];\n  }\n};\n\n//# sourceURL=webpack://three-shader-env01/./src/secondCanvas.js?");

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