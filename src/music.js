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
        isPlaying = false; // 音楽が停止していることを示す
    } else {
        playMusic();
        isPlaying = true; // 音楽が再生中であることを示す
    }
    updateIcon(); // アイコンとアニメーションの状態を更新
}

// アイコンの状態とアニメーションの同期を取るための関数を修正
function updateIcon() {
    const soundIcon = document.querySelector('.sound-icon');
    if (isPlaying) {
        soundIcon.classList.add('playing'); // 音楽が再生されているとき、アニメーションを開始
    } else {
        soundIcon.classList.remove('playing'); // 音楽が停止しているとき、アニメーションを停止
    }
}


// DOMContentLoaded イベントリスナーの設定など、初期化処理を行う関数
export function initializeMusic() {
    const soundIcon = document.querySelector('.sound-wave');
    if (soundIcon) {
        soundIcon.addEventListener('click', toggleMusic);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeMusic(); // 初期化処理
    // 必要に応じて、音楽の初期状態を設定するコードをここに追加
    // 例: playMusic(); または、特定の条件に基づいて playMusic() か stopMusic() を呼び出す
});
