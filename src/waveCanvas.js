import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const amountX = 40;
const amountY = 100;
const spacer = 70;
const particlesCount = amountX * amountY;
let particles = 0;
let count = 0;

const waveFrequencyX = 0.35;
const waveFrequencyY = 0.2;
const waveAmplitude = 155;
const waveSpeed = 0.05;

document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.querySelector('.wave-content');
  if (container !== null) {
      wave(); // .wave-content が存在する時のみ wave 関数を実行
  }
});

function wave() {
  const container = document.querySelector('.wave-content');
  if (container === null) {
      console.log('waveCanvas.js is not executed on this page.');
      return; // コンテナが存在しない場合はここで処理を中断
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // ピクセル比の設定を適切に制限
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement); // レンダラーのDOM要素をコンテナに追加

  camera.position.set(350, 150, 250);
  camera.lookAt(scene.position);

  renderer.setClearColor(0x22201E, 1);

  const positions = new Float32Array(particlesCount * 3);
  let i = 0;
  for (let ix = 0; ix < amountX; ix++) {
    for (let iy = 0; iy < amountY; iy++) {
      positions[i] = ix * spacer - (amountX * spacer) / 2; // x
      positions[i + 1] = 0; // y
      positions[i + 2] = iy * spacer - (amountY * spacer) / 2; // z

      i += 3;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xffffff }));
  scene.add(particles);

  animate(); // アニメーションループを開始
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  const positions = particles.geometry.attributes.position.array;

  let i = 0;
  for (let ix = 0; ix < amountX; ix++) {
    for (let iy = 0; iy < amountY; iy++) {
      positions[i + 1] =
        Math.sin((ix + count) * waveFrequencyX) * waveAmplitude +
        Math.sin((iy + count) * waveFrequencyY) * waveAmplitude;

      i += 3;
    }
  }

  particles.geometry.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);

  count += waveSpeed;
}


