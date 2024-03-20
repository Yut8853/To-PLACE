

// Fragment Shader
uniform sampler2D map;
uniform float aspectRatio;
uniform float containerAspectRatio;
varying vec2 vUv;

void main() {
    vec2 adjustedUV = vUv;
    // テクスチャのアスペクト比とコンテナのアスペクト比を比較してUV座標を調整
    if (aspectRatio > containerAspectRatio) {
        // 画像がコンテナよりも横長の場合
        adjustedUV.x = (vUv.x - 0.5) * (containerAspectRatio / aspectRatio) + 0.5;
    } else {
        // 画像がコンテナよりも縦長の場合
        adjustedUV.y = (vUv.y - 0.5) * (aspectRatio / containerAspectRatio) + 0.5;
    }

    gl_FragColor = texture2D(map, adjustedUV);
}
