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
        urls.forEach((url, index) => { // Iterate through urls with index
            textureLoader.load(url, (texture) => {
                texture.magFilter = THREE.LinearFilter;
                texture.minFilter = THREE.LinearFilter;
                texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;

                if (index === 0) { // Only for the first texture
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

    let planeWidth, planeHeight;

    const createPlane = () => {
        const aspect = 1900 / 971; // 画像のアスペクト比
        let planeWidth = 1; // プレーンの幅を一定に保つ
        let planeHeight = 3 / aspect; // プレーンの高さをアスペクト比に基づいて設定
    
        // プレーンのジオメトリを生成
        plane = new THREE.Mesh(new THREE.PlaneGeometry(planeWidth, planeHeight), materials[currentIndex]);
        plane.position.y = planeHeight / 1.7; // 上部に配置
    
        scene.add(plane);
        adjustPlaneSize(); // 初期サイズ調整の呼び出し
    };
    

    const adjustPlaneSize = () => {
        if (!plane) return;
        
        // ブラウザと画像のアスペクト比を取得
        const windowAspect = window.innerWidth / window.innerHeight;
        const imageAspect = imageAspectRatio; // 画像のアスペクト比は事前にロード時に設定
    
        let planeWidth, planeHeight;
    
        // ブラウザのアスペクト比と画像のアスペクト比を比較して適切なスケールを計算
        if (windowAspect < imageAspect) {
            // ウィンドウよりも画像が横長の場合
            planeWidth = 6; // 任意の値
            planeHeight = planeWidth / imageAspect;
        } else {
            // ウィンドウよりも画像が縦長の場合
            planeHeight = 6; // 任意の値
            planeWidth = planeHeight * imageAspect;
        }
    
        // プレーンのスケールを更新
        plane.scale.set(planeWidth, planeHeight, 1);
    };
    
    

    function onWindowResize() {
        // カメラのアスペクト比をブラウザの新しいアスペクト比に更新
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        
        // レンダラーのサイズをブラウザの新しいサイズに更新
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // プレーンのサイズを調整
        adjustPlaneSize();
    }

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    loadTextures(imageUrls);
    window.addEventListener('resize', onWindowResize, false);
    animate();
};

export const updateImage = (index) => {
    if (index < materials.length) {
        currentIndex = index;
        plane.material = materials[currentIndex];
    }
};
