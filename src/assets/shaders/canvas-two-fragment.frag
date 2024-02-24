// fragment.frag
uniform sampler2D map;
uniform float aspectRatio;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    float imageAspectRatio = aspectRatio; // 画像のアスペクト比 (例: 1900 / 971)
    float containerAspectRatio = gl_FragCoord.w / gl_FragCoord.z; // コンテナのアスペクト比

    // アスペクト比の調整
    if (containerAspectRatio < imageAspectRatio) {
        float scaleFactor = containerAspectRatio / imageAspectRatio;
        uv.y = (uv.y - 0.5) * scaleFactor + 0.5; // 中心を基点にスケーリング
    } else {
        float scaleFactor = imageAspectRatio / containerAspectRatio;
        uv.x = (uv.x - 0.5) * scaleFactor + 0.5; // 中心を基点にスケーリング
    }

    gl_FragColor = texture2D(map, uv);
}
