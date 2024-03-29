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

// Additional parameters for dynamic waves
const waveFrequencyX = 0.35;
const waveFrequencyY = 0.2;
const waveAmplitude = 155;
const waveSpeed = 0.05;

function wave() {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  const container = document.querySelector('.wave-content');
  if (container) {
    container.appendChild(renderer.domElement);
  } else {
    console.error('Container element not found.');
  }

  camera.position.x = 350;
  camera.position.y = 150;
  camera.position.z = 250;
  camera.lookAt(scene.position);

  //set crear color de fondo
  renderer.setClearColor(0x22201E, 1);

  const positions = new Float32Array(particlesCount * 10);

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

  particles = new THREE.Points(geometry); // add material here

  scene.add(particles);

  renderer.render(scene, camera);
  animate();
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

wave();