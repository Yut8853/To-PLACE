uniform sampler2D map;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    gl_FragColor = texture2D(map, uv);
}
