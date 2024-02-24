import * as THREE from 'three';
import vertex2 from './assets/shaders/canvas-two-vertex.vert';
import fragment2 from './assets/shaders/canvas-two-fragment.frag';

let scene, renderer, camera, textureLoader, materials = [], currentIndex = 0, plane;
let container;

const aspectRatio = 1900 / 971;

export const setupScene = (imageUrls) => {
    container = document.createElement('div');
    container.classList.add('canvas-container');

    // Ensure renderer and camera are initialized before they are used
    renderer = new THREE.WebGLRenderer({ alpha: true });
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    // Set the size of the renderer based on the current window size
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    document.body.appendChild(container);

    scene = new THREE.Scene();

    textureLoader = new THREE.TextureLoader();
    imageUrls.forEach(url => {
        let texture = textureLoader.load(url);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                map: { type: "t", value: texture },
                aspectRatio: { type: "f", value: aspectRatio },
            },
            vertexShader: vertex2,
            fragmentShader: fragment2,
            transparent: true,
        });
        
        materials.push(material);
    });

    plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1 / aspectRatio), materials[currentIndex]);
    scene.add(plane);

    // Ensure the renderer and plane size adjustment functions are properly defined
    const adjustRendererSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.setSize(width, height);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };

    const adjustPlaneSize = () => {
        const canvasWidth = renderer.domElement.width;
        const canvasHeight = renderer.domElement.height;

        let planeWidth, planeHeight;
        const browserAspectRatio = canvasWidth / canvasHeight;
    
        if (browserAspectRatio < aspectRatio) {
            planeWidth = canvasHeight * aspectRatio;
            planeHeight = canvasHeight;
        } else {
            planeWidth = canvasWidth;
            planeHeight = canvasWidth / aspectRatio;
        }

        plane.scale.set(planeWidth / plane.geometry.parameters.width, planeHeight / plane.geometry.parameters.height, 1);
    };

    // Set up resize event listener after everything is initialized
    window.addEventListener('resize', () => {
        adjustRendererSize();
        adjustPlaneSize();
    });

    // Adjust sizes upon setup
    adjustRendererSize();
    adjustPlaneSize();

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();
};

export const updateImage = (index) => {
    currentIndex = index % materials.length;
    plane.material = materials[currentIndex];
};
