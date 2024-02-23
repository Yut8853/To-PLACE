varying vec2 vUv;
uniform sampler2D currentImage;
uniform sampler2D nextImage;
uniform sampler2D disp;
uniform float dispFactor;
uniform float uImageAspect;
uniform float uPlaneAspect;

void main() {
    vec2 ratio = vec2(
        min(uPlaneAspect / uImageAspect, 1.0),
        min((1.0 / uPlaneAspect) / (1.0 / uImageAspect), 1.0)
    );
    vec2 fixedUv = vec2(
        (vUv.x - 0.5) * ratio.x + 0.5,
        (vUv.y - 0.5) * ratio.y + 0.5
    );
    vec2 uv = fixedUv;
    vec4 dispMap = texture2D(disp, uv);
    // ディスプレイスメント値を[-1, 1]の範囲に調整
    vec2 dispValue = dispMap.rg * 2.0 - 1.0;
    vec2 calcPosition = uv + dispValue * (1.0 - dispFactor) * 0.9;

    vec4 _currentImage = texture2D(currentImage, fixedUv);
    vec4 _nextImage = texture2D(nextImage, calcPosition);

    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
}
