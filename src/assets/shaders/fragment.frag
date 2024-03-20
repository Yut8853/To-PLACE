varying vec2 vUv;
uniform sampler2D currentImage;
uniform sampler2D nextImage;
uniform sampler2D disp;
uniform float dispFactor;
uniform float uPlaneAspect;

void main() {
    // 画像のアスペクト比を保持するためのユニフォーム uImageAspect は JavaScript から設定されるものとします
    // uImageAspect の値が 1699 / 597 のアスペクト比を持つ画像のアスペクト比であると仮定して計算します

    vec2 ratio = vec2(
        min(uPlaneAspect / (1699.0 / 597.0), 1.0),
        min((1.0 / uPlaneAspect) / ((1.0 / 1699.0) / 597.0), 1.0)
    );

    vec2 fixedUv = vec2(
        (vUv.x - 0.5) * ratio.x + 0.5,
        (vUv.y - 0.5) * ratio.y + 0.5
    );

    vec2 uv = fixedUv;

    vec4 dispMap = texture2D(disp, uv);
    vec2 dispValue = dispMap.rg * 1.0 - 1.0;
    vec2 calcPosition = uv + dispValue * (1.0 - dispFactor) * 0.2;

    vec4 _currentImage = texture2D(currentImage, fixedUv);
    vec4 _nextImage = texture2D(nextImage, calcPosition);

    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
}
