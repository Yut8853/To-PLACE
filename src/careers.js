import './reset.css';
import './style.css';
import './careers.css'
import './start.js';
import './light.js'
import './hamburger.js';
import './smooth.js'
import './music.js'
import music from './assets/videos/143_BPM120.mp3';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

console.log('careers.js')

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
      trigger: ".img-container",
      start: "top bottom", // 画面の下部で開始
      end: "bottom top", // 画面の上部で終了
      scrub: true // スクロールに応じて遅れて動くように
    }
  })
  .fromTo(".img-container img", {y: 0}, {y: -200}); // 画像を垂直方向に200px移動させる

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