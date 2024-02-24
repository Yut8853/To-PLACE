import * as THREE from 'three';
import vertexShader from './assets/shaders/canvas-two-vertex.vert';
import fragmentShader from './assets/shaders/canvas-two-fragment.frag';

let scene, renderer, camera, textureLoader, materials = [], currentIndex = 0, plane;
let container, imageAspectRatio = 1; // Default aspect ratio

export const setupScene = (imageUrls) => {
    container = document.createElement('div');
    container.classList.add('canvas-container');
    document.body.appendChild(container);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    scene = new THREE.Scene();
    textureLoader = new THREE.TextureLoader();

    const loadTextures = (urls) => {
        urls.forEach(url => {
            textureLoader.load(url, (texture) => {
                texture.magFilter = THREE.LinearFilter;
                texture.minFilter = THREE.LinearFilter;
                texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;

                if (!plane) { // Only for the first texture
                    imageAspectRatio = texture.image.width / texture.image.height;
                    createPlane();
                }

                const material = new THREE.ShaderMaterial({
                    uniforms: {
                        map: { value: texture },
                        aspectRatio: { value: imageAspectRatio },
                        containerAspectRatio: { value: container.clientWidth / container.clientHeight },
                    },
                    vertexShader,
                    fragmentShader,
                    transparent: true,
                });
                materials.push(material);
            });
        });
    };

    const createPlane = () => {
        plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1 / imageAspectRatio), materials[currentIndex]);
        scene.add(plane);
        adjustPlaneSize(); // Adjust size immediately after creation
    };

    loadTextures(imageUrls);
    window.addEventListener('resize', onWindowResize, false);
    animate();
};

const onWindowResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    adjustPlaneSize();
};

const adjustPlaneSize = () => {
    if (!plane) return; // Ensure plane exists
    const containerAspectRatio = container.clientWidth / container.clientHeight;
    plane.material.uniforms.containerAspectRatio.value = containerAspectRatio;
};

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

export const updateImage = (index) => {
    if (index < materials.length) {
        currentIndex = index;
        plane.material = materials[currentIndex];
    }
};
