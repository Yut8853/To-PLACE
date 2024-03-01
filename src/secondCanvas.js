import * as THREE from 'three';
import { gsap } from 'gsap';
import vertexShader from './assets/shaders/canvas-two-vertex.vert';
import fragmentShader from './assets/shaders/canvas-two-fragment.frag';

let scene, renderer, camera, textureLoader, currentIndex = 0, plane, textures;

export const setupScene = async (imageUrls) => {
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.querySelector('.canvas-bg-blur');
    container.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 600;

    scene = new THREE.Scene();
    textureLoader = new THREE.TextureLoader();

    try {
        textures = await Promise.all(imageUrls.map(url => 
            new Promise((resolve, reject) => {
                textureLoader.load(url, texture => {
                    texture.magFilter = THREE.LinearFilter;

                    resolve(texture);
                }, undefined, reject);
            })
        ));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                map: { value: textures[currentIndex] },
                aspectRatio: { value: textures[currentIndex].image.width / textures[currentIndex].image.height },
                containerAspectRatio: { value: window.innerWidth / window.innerHeight },
            },
            vertexShader,
            fragmentShader,
            transparent: true,
        });

        createPlane(1900, 971, material);

        setInterval(triggerAnimation, 8000);

    } catch (error) {
        console.error('Error loading textures:', error);
    }

    window.addEventListener('resize', onWindowResize, false);

    animate();
};

const createPlane = (width, height, material) => {
    if (plane) scene.remove(plane);
    const planeGeometry = new THREE.PlaneGeometry(width, height);
    plane = new THREE.Mesh(planeGeometry, material);
    scene.add(plane);
    plane.position.set(0, 0, 0);
};

const onWindowResize = () => {
    const aspect = window.innerWidth / window.innerHeight;
    camera.aspect = aspect;

    // カメラの位置を調整して画面全体に表示されるようにします
    const fov = 75; // 垂直視野角
    const near = 0.1; // 近いクリッピング面
    const far = 10000; // 遠いクリッピング面

    // カメラの位置と視野角を再計算
    const height = Math.tan(THREE.MathUtils.degToRad(fov) / 2) * near * 2;
    const width = height * aspect;
    camera.aspect = aspect;
    camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(height / (2 * near)));
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
};

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

function triggerAnimation() {
    if (textures) {
        const nextIndex = (currentIndex + 1) % textures.length;
        plane.material.uniforms.map.value = textures[nextIndex];
        currentIndex = nextIndex;
    }
    gsap.to('.canvas-bg-blur', {
        duration: 8,
        opacity: 0,
        ease: 'power2.inOut',
        repeat: -1,
    });

}

export const updateImage = (index) => {
    if (textures && index < textures.length) {
        currentIndex = index;
        plane.material.uniforms.map.value = textures[currentIndex];
    }
};
