import './reset.css';
import './style.css';
import * as THREE from 'three';
import { gsap } from 'gsap';
import vertexShaderSource from './assets/shaders/vertex.vert';
import fragmentShaderSource from './assets/shaders/fragment.frag';
import './start.js';
import './music.js'
import { setupScene, updateImage } from './secondCanvas.js';
import './waveCanvas.js';
import './hamburger.js';
import './light.js'
import './carousel.js';
import './scrollTrigger.js';
import './video.js';
import './smooth.js'
import './cookie.js';
import './secondCanvas.js'

const imageUrls = [
  './assets/images/top/hero-image-01.webp',
  './assets/images/top/hero-image-02.webp',
  './assets/images/top/hero-image-03.webp',
];

export function disableScroll() {
  document.body.classList.add("no-scroll");
}

export function enableScroll() {
  document.body.classList.remove("no-scroll");
}

let renderer, scene, camera, material, plane;
let currentIndex = 0;
const dispMapUrl = './assets/textures/fluid.jpg';
const imageAspects = []; // 画像のアスペクト比を保存する配列
let loadedResources = 0; // 読み込み完了したリソースの数
const totalResources = imageUrls.length + 1; // 全リソース数 (画像 + dispMap)
let currentPercent = 0; // 現在の読み込みパーセンテージ
let targetPercent = 0; // 目標パーセンテージ

// ローディング進行状況のテキストを更新する関数
function updateLoadingScreen(loaded, total) {
  targetPercent = (loaded / total) * 100;
  animateLoadingText(); // カウントアップを開始または続行
}

// ゆっくりと不規則にカウントアップするアニメーション
function animateLoadingText() {
  if (currentPercent < targetPercent) {
    currentPercent += Math.random() * 5; // 0から5%のランダムな値を加算
    currentPercent = Math.min(currentPercent, targetPercent); // targetPercentを超えないように
    document.getElementById('loading-text').innerText = `Loading... ${Math.floor(currentPercent)}%`;
    
    requestAnimationFrame(animateLoadingText); // 次のフレームで再度呼び出し
  } else if (loadedResources >= totalResources) {
    // 全リソースの読み込みが完了したらローディング画面を非表示にする
    gsap.to('#loading-screen', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.getElementById('loading-screen').style.display = 'none';
      }
    });
  }
}

async function loadTexture(url, index) {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(url, texture => {
      const aspect = texture.image.width / texture.image.height;
      imageAspects[index] = aspect; // アスペクト比を保存
      loadedResources++; // 読み込み完了したリソースをカウント
      updateLoadingScreen(loadedResources, totalResources); // ローディング画面を更新
      resolve(texture);
    }, undefined, reject);
  });
}

function onWindowResize() {
  if (!plane) return;

  const windowAspect = window.innerWidth / window.innerHeight;
  const imageAspect = imageAspects[currentIndex];

  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = windowAspect;
  camera.updateProjectionMatrix();

  if (material) {
    material.uniforms.uPlaneAspect.value = windowAspect;
    material.uniforms.uImageAspect.value = imageAspect;
  }

  // オブジェクトフィットcoverのような挙動を実現するスケール計算
  if (windowAspect > imageAspect) {
    plane.scale.x = windowAspect / imageAspect;
    plane.scale.y = windowAspect / imageAspect;
  } else {
    plane.scale.x = imageAspect / windowAspect;
    plane.scale.y = imageAspect / windowAspect;
  }
}


async function initializeScene(imageUrls) {
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.querySelector('.canvas-bg-dist');
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    // 画像テクスチャを読み込む
    const textures = await Promise.all(imageUrls.map((url, index) => loadTexture(url, index)));
    const dispTexture = await loadTexture(dispMapUrl);

    material = new THREE.ShaderMaterial({
      uniforms: {
        currentImage: { value: textures[0] },
        nextImage: { value: textures[1] },
        disp: { value: dispTexture },
        dispFactor: { value: 0.0 },
        uImageAspect: { value: imageAspects[0] }, // 最初の画像のアスペクト比を初期値として設定
        uPlaneAspect: { value: window.innerWidth / window.innerHeight },
      },
      vertexShader: vertexShaderSource,
      fragmentShader: fragmentShaderSource,
      transparent: true,
    });

    const planeGeometry = new THREE.PlaneGeometry(4, 4 * (window.innerHeight / window.innerWidth));
    plane = new THREE.Mesh(planeGeometry, material);
    scene.add(plane);

    window.addEventListener('resize', onWindowResize);

    function triggerAnimation() {
      const nextIndex = (currentIndex + 1) % imageUrls.length;
      const nextImageAspect = imageAspects[nextIndex]; // 次の画像のアスペクト比
    
      material.uniforms.nextImage.value = textures[nextIndex];
      material.uniforms.uImageAspect.value = nextImageAspect; // 次の画像に合わせてuImageAspectを更新
    
      gsap.to(material.uniforms.dispFactor, {
        value: 1,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          material.uniforms.currentImage.value = textures[nextIndex];
          material.uniforms.nextImage.value = textures[(nextIndex + 1) % imageUrls.length];
          material.uniforms.dispFactor.value = 0;
          currentIndex = nextIndex;
          updateImage(currentIndex); // Update the image based on currentIndex
        }
      });
    }
    

    setInterval(triggerAnimation, 8000);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    setupScene(imageUrls);

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeScene(imageUrls).catch(error => console.error(error));
});