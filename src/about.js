
import './reset.css';
import './style.css';
import './about.css';
import './start.js';
import './light.js'
import './hamburger.js';
import './smooth.js'
import './music.js'
import music from './assets/videos/143_BPM120.mp3';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ScrollTriggerをgsapに登録
gsap.registerPlugin(ScrollTrigger);

gsap.to(".logo path, .logo path-text, .menu-btn", {
    scrollTrigger: {
      trigger: ".about-info2-wrapper",
      start: "center center", // トリガー要素の上端がビューポートの中央に達した時に開始
      end: "bottom top", // トリガー要素の下端がビューポートの下端に達した時に終了
      onEnter: () => {
        gsap.to(".logo-text", { color: "#22201E" });
        gsap.to(".logo path", { fill: "#22201E" }); 
        gsap.to(".menu-btn", { backgroundColor: "#22201E" });
      },
      onLeave: () => {
        gsap.to(".logo-text", { color: "#fff" });
        gsap.to(".logo path", { fill: "#fff" });
        gsap.to(".menu-btn", { backgroundColor: "#fff" });
      },
      onEnterBack: () => {
        gsap.to(".logo-text", { color: "#22201E" });
        gsap.to(".logo path", { fill: "#22201E" });
        gsap.to(".menu-btn", { backgroundColor: "#22201E" });
      },
      onLeaveBack: () => {
        gsap.to(".logo-text", { color: "#fff" });
        gsap.to(".logo path", { fill: "#fff" });
        gsap.to(".menu-btn", { backgroundColor: "#fff" });
      },
    //   markers: true
    }
  });

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