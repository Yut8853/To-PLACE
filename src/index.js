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

// テクスチャの非同期ロード
async function loadTextures(urls) {
    const loader = new THREE.TextureLoader();
    const texturePromises = urls.map(url => new Promise((resolve) => resolve(loader.load(url))));
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

    const triggerAnimation = () => {
        gsap.to(material.uniforms.dispFactor, {
            value: 1,
            duration: 1.5,
            ease: 'power2.inOut',
            onComplete: () => {
                currentIndex = (currentIndex + 1) % textures.length;
                material.uniforms.currentImage.value = textures[currentIndex];
                material.uniforms.nextImage.value = textures[(currentIndex + 1) % textures.length];
                material.uniforms.dispFactor.value = 0;
            }
        });
    };

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();

    setInterval(triggerAnimation, 3000);
}

setupScene().catch(error => console.error(error));