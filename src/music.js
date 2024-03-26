import music from './assets/videos/143_BPM120.mp3';
const shuffle = (arr) => {
    for (let j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
};

const assignBlobColors = (arr) => {
    [0, 1, 2, 3].forEach((i) => {
        const node = document.getElementById(`color-${i}`);
        node.style.backgroundColor = arr[i];
    });
};

let can = document.getElementById("color-base");
let colors = ["#d1fae5", "#42b6c6", "#5eead4", "#d8b4fe", "#f3e8ff"];

const heyMelody = () => {
    const baseColor = colors[Math.floor(Math.random() * colors.length)];
    const blobColors = shuffle(colors.filter((color) => color !== baseColor));
  
    can.style.background = baseColor;
    assignBlobColors(blobColors);
};

document.addEventListener('DOMContentLoaded', () => {
    const musicOnButton = document.getElementById('music-on');
    const musicOffButton = document.getElementById('music-off');
    let audio = new Audio(music);
    audio.loop = true;

    // 音楽ONボタンのクリックイベント
    musicOnButton.addEventListener('click', () => {
        audio.play();
        startAnimation()
    });

    // 音楽OFFボタンのクリックイベント
    musicOffButton.addEventListener('click', () => {
        // 音楽が再生中なら停止する
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0; // 再生位置を最初に戻す
        }
        startAnimation()
    });

    // アニメーションを開始する関数
    function startAnimation() {
        heyMelody();
        setInterval(heyMelody, 3000);
    }
});
