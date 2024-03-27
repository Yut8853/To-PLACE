import { animateBlobs } from './blob.js';
import { heyMelody } from './blob.js';
import { disableScroll, enableScroll } from './index.js';
import { loader } from './start.js';
import music from './assets/videos/loops_7.wav';

const musicOnButton = document.getElementById('music-on');
const musicOffButton = document.getElementById('music-off');
let audio = new Audio(music);
audio.loop = true;
audio.volume = 0.2;

// 初期のブロブ色を設定
animateBlobs();
heyMelody();
disableScroll();

const isPlaying = localStorage.getItem('isPlaying') === 'true';
if (isPlaying) {
    audio.play();
}

// 音楽ONボタンの処理
musicOnButton.addEventListener('click', () => {
    audio.play();
    // 音楽再生画面を非表示にする
    document.querySelector('.container').style.display = 'none';
    setInterval(() => {
        // audio.currentTimeで現在の再生位置（秒数）を取得し、localStorageに保存
        localStorage.setItem('currentPosition', audio.currentTime.toString());
    }, 10000); // 例えば1秒ごとに更新

    loader();
    enableScroll()
});

// 音楽OFFボタンの処理
musicOffButton.addEventListener('click', () => {
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0; // 再生位置を最初に戻す
    }
    // 音楽再生画面を非表示にする
    document.querySelector('.container').style.display = 'none';
    localStorage.setItem('isPlaying', 'false');

    loader();
    enableScroll()
});