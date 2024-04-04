import './reset.css';
import './style.css';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import vertexShaderSource from './assets/shaders/vertex.vert';
import fragmentShaderSource from './assets/shaders/fragment.frag';
import { setupScene, updateImage } from './secondCanvas.js';
import './waveCanvas.js';
import './hamburger.js';
import './light.js'
import './carousel.js';
import './video.js';
import './smooth.js'
import './cookie.js';
import './secondCanvas.js'
import './scrollTrigger.js'
import { disableScroll, enableScroll } from './scrollControl.js';
import { playMusic, stopMusic,audio } from './music.js';
import { triggerAnimation, setUpMusic, musicOnButton, musicOffButton } from './musicControl.js';


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event triggered');
  if (document.body.classList.contains('top-page')) {
    setUpMusic(manageInitialAnimation)
    // initializeScene(imageUrls);
    
    Promise.all([
      import('./music.js')
      .then(({ initializeMusic }) => {
        initializeMusic();
        console.log('initial')
      })
      .catch(error => {
        console.error('Failed to load music module', error);
      }),
      import('./scrollControl.js')
      .then(({ disableScroll, enableScroll }) => {
        enableScroll();
      })
      .catch(error => {
        console.error('Failed to load scrollControl module', error);
      })
    ]);
  } 
});

const imageUrls = [
  './assets/images/top/hero-image-01.webp',
  './assets/images/top/hero-image-02.webp',
  './assets/images/top/hero-image-03.webp',
];

let renderer, scene, camera, material, plane;
let currentIndex = 0;
const dispMapUrl = './assets/textures/fluid.jpg';
const imageAspects = []; // 画像のアスペクト比を保存する配列
let loadedResources = 0; // 読み込み完了したリソースの数
let totalResources = imageUrls.length + 1; // 全リソース数 (画像 + dispMap)
let currentPercent = 0; // 現在の読み込みパーセンテージ
let targetPercent = 100; // 目標パーセンテージ

document.addEventListener('DOMContentLoaded', () => {
  loadedResources = 0; // リソースの初期値を設定
  totalResources = imageUrls.length + 1; // 仮の総リソース数、実際のリソース数に置き換えてください
  // リソース読み込みをシミュレート
  for (let i = 0; i < totalResources; i++) {
    setTimeout(() => {
      loadedResources++;
      updateLoadingScreen(loadedResources, totalResources);
    }, i * 100); // 仮のロード時間
  }
});


// ローディング進行状況のテキストを更新する関数
function updateLoadingScreen(loaded, total) {
  targetPercent = (loaded / total) * 100;
  animateLoadingText(); // カウントアップを開始または続行
}

function animateLoadingText() {
  // '.loading-text'要素が存在するかを確認
  const loadingTextElement = document.querySelector('.loading-text');
  if (!loadingTextElement) {
    console.error('Loading text element not found');
    return; // 要素が存在しない場合は、ここで処理を中断
  }

  if (currentPercent < targetPercent) {
    currentPercent += 1;
    if (currentPercent >= 100) {
      currentPercent = 100;
      completeLoading();
      return;
    }
    loadingTextElement.innerText = `${Math.floor(currentPercent)}%`;
    requestAnimationFrame(animateLoadingText);
  } else if (currentPercent >= 100) {
    completeLoading();
  }
}


let loadingCompleted = false;
function completeLoading() {
  if(!loadingCompleted) {
    loadingCompleted = true;
    gsap.to('.loading-screen', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
          loadingScreen.style.display = 'none'; // ローディング画面を非表示にする
          // 例: 音楽コントロールのセットアップを行う
          setUpMusic({
            playMusic: playMusic,
            stopMusic: stopMusic,
            triggerAnimation: triggerAnimation
          });
          
        } else {
          console.error('loading-screen が見つかりません。');
        }
      }
    });
  }
}

// ローディングプロセスのシミュレーション
document.addEventListener('DOMContentLoaded', () => {
  loadedResources = 1; // この行はローディングプロセスが完了したことを示します。
  animateLoadingText(); // ローディングアニメーションを開始
});

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
  console.log('initializeScene called')
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
      console.log('initializeScene 完了')
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

// 要素の表示/非表示を切り替える関数
const toggleVisibility = (selector, isVisible) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    if (isVisible) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  });
};


// スクロールトリガーの設定関数をトップレベルに移動
function setupScrollTriggers() {

  const textElements = gsap.utils.toArray('.text-effect');
  textElements.forEach(text => {
    gsap.to(text, {
      backgroundSize: '100%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: text,
        start: 'top-=2000  bottom',
        end: 'top 70%',
        scrub: true,
        once: true,
        // markers: true,
        pinnedContainer: '.top-main',
      },
    });
  });
}

// 非同期の初期化関数
async function initialize() {
  // 必要に応じてここで画像やその他のリソースのロードを待つ
  // 例: await loadImage(...);

  // シーンの初期化とスクロールトリガーの設定
  initializeScene(imageUrls);
  setupScrollTriggers();

  // その他の初期化処理...
  // ここで ScrollTrigger.refresh() を呼び出すことも可能
}

document.addEventListener('DOMContentLoaded', () => {
  // 初期化関数の呼び出し
  initialize().catch(error => console.error('Initialization failed', error));
});
// 初回訪問時に表示するアニメーションをトリガーする関数
export const showInitialAnimation = () => {
  toggleVisibility('.loading-screen', true);
  toggleVisibility('.container', true);
  toggleVisibility('.gradient-container', true);

  window.onload = () => {
    toggleVisibility('.loading-screen', false);
  };
};

document.addEventListener('DOMContentLoaded', (event) => {
  // 初期画面でスクロールを無効にする
  disableScroll();
});

  
// 初回訪問のチェックとアニメーションの制御
export const manageInitialAnimation = () => {
  const animationShown = localStorage.getItem('animationShown');
  if (!animationShown) {
    showInitialAnimation();
    localStorage.setItem('animationShown', 'true');
  } else {
    // 2回目以降の訪問時には非表示にする要素
    toggleVisibility('.loading-screen', false);
    toggleVisibility('.gradient-container', false);
    toggleVisibility('.container', false);
  }

  if (musicOnButton) {
    musicOnButton.addEventListener('click', () => {
        audio.play().catch(error => console.error('音声の再生を開始できませんでした:', error));
        localStorage.setItem('isPlaying', 'true');
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.gradient-container').style.display = 'none';
        enableScroll();
    });
  }

  if (musicOffButton) {
    musicOffButton.addEventListener('click', () => {
        audio.pause();
        localStorage.setItem('isPlaying', 'false');
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.gradient-container').style.display = 'none';
        enableScroll();
    });
  }
}







