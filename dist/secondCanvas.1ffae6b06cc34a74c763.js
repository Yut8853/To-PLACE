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

/***/ "./src/secondCanvas.js":
/*!*****************************!*\
  !*** ./src/secondCanvas.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupScene: () => (/* binding */ setupScene),\n/* harmony export */   updateImage: () => (/* binding */ updateImage)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _assets_shaders_canvas_two_vertex_vert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/shaders/canvas-two-vertex.vert */ \"./src/assets/shaders/canvas-two-vertex.vert\");\n/* harmony import */ var _assets_shaders_canvas_two_fragment_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/shaders/canvas-two-fragment.frag */ \"./src/assets/shaders/canvas-two-fragment.frag\");\n\n\n\n\nlet scene,\n  renderer,\n  camera,\n  textureLoader,\n  currentIndex = 0,\n  plane,\n  textures;\nconst setupScene = async imageUrls => {\n  renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\n    alpha: true\n  });\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  const container = document.querySelector('.canvas-bg-blur');\n  container.appendChild(renderer.domElement);\n  camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n  camera.position.z = 600;\n  scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n  textureLoader = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader();\n  try {\n    textures = await Promise.all(imageUrls.map(url => new Promise((resolve, reject) => {\n      textureLoader.load(url, texture => {\n        texture.magFilter = three__WEBPACK_IMPORTED_MODULE_2__.LinearFilter;\n        resolve(texture);\n      }, undefined, reject);\n    })));\n    const material = new three__WEBPACK_IMPORTED_MODULE_2__.ShaderMaterial({\n      uniforms: {\n        map: {\n          value: textures[currentIndex]\n        },\n        aspectRatio: {\n          value: textures[currentIndex].image.width / textures[currentIndex].image.height\n        },\n        containerAspectRatio: {\n          value: window.innerWidth / window.innerHeight\n        }\n      },\n      vertexShader: _assets_shaders_canvas_two_vertex_vert__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      fragmentShader: _assets_shaders_canvas_two_fragment_frag__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      transparent: true\n    });\n    createPlane(1900, 971, material);\n    setInterval(triggerAnimation, 8000);\n  } catch (error) {\n    console.error('Error loading textures:', error);\n  }\n  window.addEventListener('resize', onWindowResize, false);\n  animate();\n};\nconst createPlane = (width, height, material) => {\n  if (plane) scene.remove(plane);\n  const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(width, height);\n  plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planeGeometry, material);\n  scene.add(plane);\n  plane.position.set(0, 0, 0);\n};\nconst onWindowResize = () => {\n  const aspect = window.innerWidth / window.innerHeight;\n  camera.aspect = aspect;\n\n  // カメラの位置を調整して画面全体に表示されるようにします\n  const fov = 75; // 垂直視野角\n  const near = 0.1; // 近いクリッピング面\n  const far = 10000; // 遠いクリッピング面\n\n  // カメラの位置と視野角を再計算\n  const height = Math.tan(three__WEBPACK_IMPORTED_MODULE_2__.MathUtils.degToRad(fov) / 2) * near * 2;\n  const width = height * aspect;\n  camera.aspect = aspect;\n  camera.fov = three__WEBPACK_IMPORTED_MODULE_2__.MathUtils.radToDeg(2 * Math.atan(height / (2 * near)));\n  camera.updateProjectionMatrix();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n};\nconst animate = () => {\n  requestAnimationFrame(animate);\n  renderer.render(scene, camera);\n};\nfunction triggerAnimation() {\n  if (textures) {\n    const nextIndex = (currentIndex + 1) % textures.length;\n    plane.material.uniforms.map.value = textures[nextIndex];\n    currentIndex = nextIndex;\n  }\n  gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to('.canvas-bg-blur', {\n    duration: 8,\n    opacity: 0,\n    ease: 'power2.inOut',\n    repeat: -1\n  });\n}\nconst updateImage = index => {\n  if (textures && index < textures.length) {\n    currentIndex = index;\n    plane.material.uniforms.map.value = textures[currentIndex];\n  }\n};\n\n//# sourceURL=webpack://three-shader-env01/./src/secondCanvas.js?");

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
/******/ 			"secondCanvas": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_index_js","vendors-node_modules_three_build_three_module_js"], () => (__webpack_require__("./src/secondCanvas.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;