import './reset.css';
import './style.css';
import * as THREE from 'three';
import { gsap } from 'gsap';
import vertexShaderSource from './assets/shaders/vertex.vert';
import fragmentShaderSource from './assets/shaders/fragment.frag';

const imageUrls = [
    './assets/images/hero-image-01.jpg',
    './assets/images/hero-image-02.jpg',
    './assets/images/hero-image-03.jpg',
];
const dispMapUrl = './assets/textures/fluid.jpg';

// レンダラーのセットアップ
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// シーンとカメラのセットアップ
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 2;

// レンダラーのサイズを更新する関数
function updateRendererSize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// ウィンドウサイズが変更された時に実行する関数
function onWindowResize(material) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    updateRendererSize();
    if (material) {
        // ここで画像アスペクト比とプレーンアスペクト比を更新する
        material.uniforms.uPlaneAspect.value = window.innerWidth / window.innerHeight;
    }
}

// テクスチャの非同期ロード関数
async function loadTextures(urls) {
  const loader = new THREE.TextureLoader();
  const texturePromises = urls.map(url => new Promise(resolve => loader.load(url, texture => resolve(texture))));
  return Promise.all(texturePromises);
}

// メインの非同期セットアップ関数
async function setupScene() {
    const textures = await loadTextures(imageUrls);
    const dispTexture = await new Promise(resolve => new THREE.TextureLoader().load(dispMapUrl, resolve));
    let currentIndex = 0; // 現在表示中の画像インデックス

    const material = new THREE.ShaderMaterial({
        uniforms: {
            currentImage: { value: textures[currentIndex] },
            nextImage: { value: textures[(currentIndex + 1) % textures.length] },
            disp: { value: dispTexture },
            dispFactor: { value: 0.0 },
            uImageAspect: { value: 1.33 }, // 例: 4:3アスペクト比
            uPlaneAspect: { value: window.innerWidth / window.innerHeight },
        },
        vertexShader: vertexShaderSource,
        fragmentShader: fragmentShaderSource,
        transparent: true,
    });

    const planeGeometry = new THREE.PlaneGeometry(2, 2 * (window.innerHeight / window.innerWidth));
    const plane = new THREE.Mesh(planeGeometry, material);
    scene.add(plane);

    // ウィンドウリサイズイベントリスナーにmaterialを渡す
    window.addEventListener('resize', () => onWindowResize(material));

    // アニメーショントリガー関数
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
    }

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();

    setInterval(triggerAnimation, 3000);
}

setupScene().catch(error => console.error(error));
