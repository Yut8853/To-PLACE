import './reset.css';
import './style.css';
import './sales.css';
import './start.js';
import './light2.js'
import './hamburger.js';
import './smooth.js'
import './music.js'
import music from './assets/videos/143_BPM120.mp3';

console.log('sales.js')

document.addEventListener('DOMContentLoaded', () => {
    // 音楽ファイルのパスを直接指定
    let audio = new Audio(music);
    audio.loop = true;

    // localStorageから再生状態と再生位置を取得
    const isPlaying = localStorage.getItem('isPlaying') === 'true';
    const currentPosition = parseFloat(localStorage.getItem('currentPosition')) || 0;

    if (isPlaying) {
        // 再生位置を設定してから再生開始
        audio.currentTime = currentPosition;
        audio.play().then(() => {
            // 再生成功時の処理
        }).catch(error => {
            console.error('Audio playback failed:', error);
            // 自動再生がブロックされた場合などのエラーハンドリング
        });

        // 再生位置を定期的に更新
        setInterval(() => {
            localStorage.setItem('currentPosition', audio.currentTime.toString());
        }, 10000); // 1秒ごとに更新
    }
});

window.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(() => {
        loader();
    }, 100);
})