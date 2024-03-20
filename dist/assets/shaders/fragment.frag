varying vec2 vUv;
uniform sampler2D currentImage;
uniform sampler2D nextImage;
uniform sampler2D disp;
uniform float dispFactor;
uniform float uPlaneAspect;
uniform float uImageAspect;

vec2 aspectCorrectedUV() {
    float aspectRatio = uPlaneAspect / uImageAspect;
    vec2 uv = vUv;

    if (aspectRatio < 1.0) {
        uv.y = uv.y * aspectRatio + (1.0 - aspectRatio) * 0.5;
    } else {
        uv.x = uv.x / aspectRatio + (1.0 - 1.0 / aspectRatio) * 0.5;
    }

    return uv;
}

void main() {
    vec2 uv = aspectCorrectedUV();

    // ここでuvを使用してテクスチャサンプリング
    vec4 dispMap = texture2D(disp, uv);
    vec2 dispValue = dispMap.rg * 2.0 - 1.0;
    vec2 calcPosition = uv + dispValue * (1.0 - dispFactor) * 0.9;

    vec4 _currentImage = texture2D(currentImage, uv);
    vec4 _nextImage = texture2D(nextImage, calcPosition);

    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
}