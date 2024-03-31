import musicSrc from './assets/videos/loops_7.wav';

export let audio = new Audio(musicSrc);
audio.loop = true;
audio.volume = 0.05;
let isPlaying = false; // 再生状態を管理するフラグ

// 音楽を再生する関数
export function playMusic() {
    audio.play().catch(error => console.error('音声の再生を開始できませんでした:', error));
    isPlaying = true;
}

// 音楽を停止する関数
export function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
}

// サウンドアイコンをクリックした時の処理
function toggleMusic() {
    if (isPlaying) {
        stopMusic();
    } else {
        playMusic();
    }
    updateIcon(); // アイコンの状態を更新
}

// アイコンの状態に応じてクラスを追加または削除する関数
function updateIcon() {
    const soundIcon = document.querySelector('.sound-icon');
    if (soundIcon) {
        if (isPlaying) {
            soundIcon.classList.add('playing');
        } else {
            soundIcon.classList.remove('playing');
        }
    }
}

// DOMContentLoaded イベントリスナーの設定など、初期化処理を行う関数
export function initializeMusic() {
    const soundIcon = document.querySelector('.sound-wave');
    if (soundIcon) {
        soundIcon.addEventListener('click', toggleMusic);
    }
}

