import * as THREE from 'three';
import vertex2 from './assets/shaders/canvas-two-vertex.vert';
import fragment2 from './assets/shaders/canvas-two-fragment.frag';

let scene, renderer, camera, textureLoader, materials = [], currentIndex = 0, plane;

export const setupScene = (imageUrls) => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / 971, 0.1, 1000); // アスペクト比をブラウザの幅に合わせて設定
    camera.position.z = 2;

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(1900, 971); // 固定のサイズを指定
    document.body.appendChild(renderer.domElement);

    textureLoader = new THREE.TextureLoader();
    const containerAspectRatio = window.innerWidth / window.innerHeight;
    imageUrls.forEach(url => {
        let texture = textureLoader.load(url);
        let material = new THREE.ShaderMaterial({
            uniforms: {
                map: { value: texture },
                aspectRatio: { value: 1900 / 971 }, // 画像のアスペクト比
                containerAspectRatio: { value: containerAspectRatio } // コンテナのアスペクト比
            },
            vertexShader: vertex2,
            fragmentShader: fragment2
        });
        materials.push(material);
    });

    const aspectRatio = 1900 / 971; // アスペクト比
    adjustPlaneSize(aspectRatio);

    window.addEventListener('resize', () => adjustPlaneSize(aspectRatio));

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();
};

const adjustPlaneSize = (aspectRatio) => {
    if (plane) scene.remove(plane);

    const height = window.innerHeight;
    const width = window.innerWidth;
    const planeAspectRatio = width / height;
    let planeWidth, planeHeight;

    if (planeAspectRatio > aspectRatio) {
        // ウィンドウのアスペクト比が画像のアスペクト比より大きい場合
        planeWidth = height * aspectRatio;
        planeHeight = height;
    } else {
        // ウィンドウのアスペクト比が画像のアスペクト比より小さい、または等しい場合
        planeWidth = width;
        planeHeight = width / aspectRatio;
    }

    const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight, 1, 1);
    plane = new THREE.Mesh(geometry, materials[currentIndex]); // plane を初期化
    scene.add(plane);
    plane.position.z = -500

    const newContainerAspectRatio = window.innerWidth / window.innerHeight;
    materials.forEach(material => {
        material.uniforms.containerAspectRatio.value = newContainerAspectRatio;
    });
};

export const updateImage = (index) => {
    currentIndex = index % materials.length;
    plane.material = materials[currentIndex];
};

