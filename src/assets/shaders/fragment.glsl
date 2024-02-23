varying vec2 vUv;
uniform sampler2D currentImage;
uniform sampler2D nextImage;
uniform sampler2D disp;

uniform float uImageAspect;
uniform float uPlaneAspect;
uniform float dispFactor;

void main() {
  vec2 ratio = vec2(
    min(uPlaneAspect / uImageAspect, 1.0),
    min((1.0 / uPlaneAspect) / (1.0 / uImageAspect), 1.0)
  );

  vec2 fixedUv = vec2(
    (vUv.x - 0.5) * ratio.x + 0.5,
    (vUv.y - 0.5) * ratio.y + 0.5
  );

  vec4 dispTexture = texture2D(disp, vUv);
  vec2 dispVec = vec2(dispTexture.r, dispTexture.g) * (1.0 - dispFactor) * 0.9;
  vec2 displacedUv = fixedUv + dispVec;

  vec4 _currentImage = texture2D(currentImage, fixedUv);
  vec4 _nextImage = texture2D(nextImage, displacedUv);

  vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
  gl_FragColor = finalTexture;
}

