import './reset.css';
import './style.css';
import * as THREE from 'three';
import { gsap } from 'gsap';
import vertexShaderSource from './assets/shaders/vertex.vert';
import fragmentShaderSource from './assets/shaders/fragment.frag';

import { setupScene, updateImage } from './secondCanvas.js';

const imageUrls = [
    './assets/images/hero-image-01.jpg',
    './assets/images/hero-image-02.jpg',
    './assets/images/hero-image-03.jpg',
];

let renderer, scene, camera, material;
let currentIndex = 0;

const dispMapUrl = './assets/textures/fluid.jpg';

function onWindowResize() {
    // ウィンドウのアスペクト比に基づいてレンダラーのサイズを更新
    renderer.setSize(window.innerWidth, window.innerHeight);
  
    // カメラのアスペクト比を更新
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  
    // マテリアルのuniformsを更新
    if (material) {
        material.uniforms.uPlaneAspect.value = window.innerWidth / window.innerHeight;
    }
}

async function initializeScene(imageUrls) {
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.canvas-bg-dist').appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 2.6;

    const textures = await Promise.all(
        imageUrls.map(url => new Promise(resolve => new THREE.TextureLoader().load(url, resolve)))
    );
    const dispTexture = await new Promise(resolve => new THREE.TextureLoader().load(dispMapUrl, resolve));

    material = new THREE.ShaderMaterial({
        uniforms: {
            currentImage: { value: textures[0] },
            nextImage: { value: textures[1] },
            disp: { value: dispTexture },
            dispFactor: { value: 0.0 },
            uImageAspect: { value: window.innerWidth / window.innerHeight },
            uPlaneAspect: { value: window.innerWidth / window.innerHeight },
        },
        vertexShader: vertexShaderSource,
        fragmentShader: fragmentShaderSource,
        transparent: true,
    });

    const planeGeometry = new THREE.PlaneGeometry(5, 5 * (window.innerHeight / window.innerWidth));
    const plane = new THREE.Mesh(planeGeometry, material);
    plane.position.y = -.3;
    scene.add(plane);

    window.addEventListener('resize', onWindowResize);

    function triggerAnimation() {
      const nextIndex = (currentIndex + 1) % textures.length;
      material.uniforms.nextImage.value = textures[nextIndex];

      gsap.to(material.uniforms.dispFactor, {
          value: 1,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
              material.uniforms.currentImage.value = textures[nextIndex];
              material.uniforms.nextImage.value = textures[(nextIndex + 1) % textures.length];
              material.uniforms.dispFactor.value = 0;
              currentIndex = nextIndex;
          }
      });
      // currentIndexを渡しています
      updateImage(currentIndex);
    }

    setInterval(triggerAnimation, 5000);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    setupScene(imageUrls);
}

initializeScene(imageUrls).catch(error => console.error(error));
