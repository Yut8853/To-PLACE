import { Scene, PlaneGeometry, MeshBasicMaterial, Mesh, OrthographicCamera, WebGLRenderer, TextureLoader, ShaderMaterial, DoubleSide } from 'three';
import gsap from 'gsap';

// シェーダーファイルとテクスチャのインポート
import vertexShaderSource from './assets/shaders/vertex.glsl';
import fragmentShaderSource from './assets/shaders/fragment.glsl';
const imageUrls = [
  './assets/images/hero-image-01.jpg',
  './assets/images/hero-image-02.jpg',
  './assets/images/hero-image-03.jpg'
];

// Canvasのサイズとパディングを設定
const padding = { x: 116, y: 168 }; // フルHDでのパディング
const responsiveBreakpoint = 768; // レスポンシブのブレークポイント

let camera, renderer, scene, material, mesh, textureIndex = 0, textures = [];

async function loadTextures(loader, urls) {
  const promises = urls.map(url => new Promise((resolve) => loader.load(url, resolve)));
  return Promise.all(promises);
}

function setupScene(textures) {
  scene = new Scene();

  // 背景画像の設定（背景用メッシュの作成）
  const bgGeometry = new PlaneGeometry(window.innerWidth, window.innerHeight);
  const bgMaterial = new MeshBasicMaterial({ map: textures[0], side: DoubleSide }); // 最初の画像を背景に設定
  const bgMesh = new Mesh(bgGeometry, bgMaterial);
  scene.add(bgMesh);

  // WebGLスライダー用のメッシュを設定
  const geometry = new PlaneGeometry(window.innerWidth - padding.x * 2, window.innerHeight - padding.y * 2);
  material = new ShaderMaterial({
    uniforms: {
      currentImage: { type: "t", value: textures[0] },
      nextImage: { type: "t", value: textures[1] },
      dispFactor: { type: "f", value: 0 },
      // その他のuniforms...
    },
    vertexShader: vertexShaderSource,
    fragmentShader: fragmentShaderSource,
    transparent: true,
  });
  mesh = new Mesh(geometry, material);
  scene.add(mesh);
}

function setupCamera() {
  camera = new OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
  camera.position.z = 1;
}

function setupRenderer() {
  renderer = new WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function onWindowResize() {
  // レスポンシブ対応のサイズ調整
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function startBlurAnimation(nextIndex) {
  // 背景画像のぼかし効果を適用する前に現在の画像を更新
  document.getElementById("background").style.backgroundImage = `url(${imageUrls[nextIndex]})`;

  // ぼかし効果を適用
  gsap.to("#background", {
    filter: "blur(20px)",
    duration: 1.5, // ぼかし効果をかける時間を半分にして、トータルで3秒になるように調整
    ease: "power1.inOut",
    onComplete: () => {
      // ぼかし効果を解除
      gsap.to("#background", {
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power1.inOut"
      });
    }
  });
}

function changeSlide() {
  const nextIndex = (textureIndex + 1) % textures.length;

  // バックグラウンドの画像を更新し、ぼかしアニメーションを開始
  startBlurAnimation(nextIndex);

  // スライダー画像のディストーションエフェクトアニメーション
  material.uniforms.nextImage.value = textures[nextIndex]; // 次の画像を先に設定
  gsap.to(material.uniforms.dispFactor, {
    value: 1,
    duration: 3, // ディストーションエフェクトの持続時間を3秒に設定
    ease: "power2.inOut",
    onComplete: () => {
      material.uniforms.currentImage.value = textures[nextIndex];
      material.uniforms.nextImage.value = textures[(nextIndex + 1) % textures.length]; // 次の次の画像を予め設定
      material.uniforms.dispFactor.value = 0; // ディスプレイスメントファクターをリセット
      textureIndex = nextIndex;
    }
  });
}

async function init() {
  const loader = new TextureLoader();
  textures = await loadTextures(loader, imageUrls);
  setupRenderer();
  setupCamera();
  setupScene(textures);
  window.addEventListener('resize', onWindowResize, false);
  animate();
  setInterval(changeSlide, 3000); // 3秒ごとにスライドを切り替え
}

init();