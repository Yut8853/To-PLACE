import musicSrc from './assets/videos/loops_7.wav';
import './blob.js'

let audio = new Audio(musicSrc);
audio.loop = true;
audio.volume = 0.5;

export const musicOnButton = document.getElementById('music-on');
export const musicOffButton = document.getElementById('music-off');
export const soundIcon = document.querySelector('.sound-icon');
const blob = document.querySelector('.gradient-container')

// サウンドボタンの切り替え


document.addEventListener('DOMContentLoaded', function() {
    // DOM要素に対する操作をここに配置
    let soundIconEvent = document.querySelector('.sound-icon');
    if (soundIconEvent) {
        soundIconEvent.addEventListener('click', () => {
            if (audio.paused) {
                playMusic();
            } else {
                stopMusic();
            }
        });
    }
});



// 音楽を再生する関数

function playMusic() {
    audio.play().catch(error => console.error('音声の再生を開始できませんでした:', error));
    soundIcon.classList.add('playing');
}

// 音楽を停止する関数
function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
    soundIcon.classList.remove('playing');
}

export { playMusic, stopMusic, audio};