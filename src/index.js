// 必要な最小限のthreeモジュールとgsapのインポート
import { Scene, OrthographicCamera, WebGLRenderer } from 'three';
import gsap from 'gsap';

let camera, renderer, scene, material, mesh, textureIndex = 0, textures = [];

async function loadTextures() {
  const { TextureLoader } = await import('three');
  const loader = new TextureLoader();
  const imageUrls = [
    './assets/images/hero-image-01.jpg',
    './assets/images/hero-image-02.jpg',
    './assets/images/hero-image-03.jpg'
  ];
  const promises = imageUrls.map(url => new Promise((resolve) => loader.load(url, resolve)));
  return Promise.all(promises);
}

async function setupScene(textures) {
  scene = new Scene();
  const { PlaneGeometry, MeshBasicMaterial, Mesh, ShaderMaterial, DoubleSide } = await import('three');
  const vertexShaderSource = await import('./assets/shaders/vertex.glsl');
  const fragmentShaderSource = await import('./assets/shaders/fragment.glsl');

  // 背景用メッシュの設定
  const bgGeometry = new PlaneGeometry(window.innerWidth, window.innerHeight);
  const bgMaterial = new MeshBasicMaterial({ map: textures[0], side: DoubleSide });
  const bgMesh = new Mesh(bgGeometry, bgMaterial);
  scene.add(bgMesh);

  // WebGLスライダー用のメッシュ設定
  const geometry = new PlaneGeometry(window.innerWidth - 116 * 2, window.innerHeight - 168 * 2);
  material = new ShaderMaterial({
    uniforms: {
      currentImage: { type: "t", value: textures[0] },
      nextImage: { type: "t", value: textures[1] },
      dispFactor: { type: "f", value: 0 },
    },
    vertexShader: vertexShaderSource.default,
    fragmentShader: fragmentShaderSource.default,
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
  camera.left = window.innerWidth / -2;
  camera.right = window.innerWidth / 2;
  camera.top = window.innerHeight / 2;
  camera.bottom = window.innerHeight / -2;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function startBlurAnimation(nextIndex) {
  const imageUrls = [
    './assets/images/hero-image-01.jpg',
    './assets/images/hero-image-02.jpg',
    './assets/images/hero-image-03.jpg'
  ];
  document.getElementById("background").style.backgroundImage = `url(${imageUrls[nextIndex]})`;

  gsap.to("#background", {
    filter: "blur(20px)",
    duration: 1.5,
    ease: "power1.inOut",
    onComplete: () => {
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

  startBlurAnimation(nextIndex);

  material.uniforms.nextImage.value = textures[nextIndex];
  gsap.to(material.uniforms.dispFactor, {
    value: 1,
    duration: 3,
    ease: "power2.inOut",
    onComplete: () => {
      material.uniforms.currentImage.value = textures[nextIndex];
      material.uniforms.nextImage.value = textures[(nextIndex + 1) % textures.length];
      material.uniforms.dispFactor.value = 0;
      textureIndex = nextIndex;
    }
  });
}

async function init() {
  textures = await loadTextures();
  setupRenderer();
  setupCamera();
  await setupScene(textures);
  window.addEventListener('resize', onWindowResize, false);
  animate();
  setInterval(changeSlide, 3000); // 3秒ごとにスライドを切り替え
}

init();
