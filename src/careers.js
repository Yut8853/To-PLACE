import './reset.css';
import './style.css';
import './careers.css'
import './light.js'
import './hamburger.js';
import './smooth.js'
import './under-start.js'

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

if (document.body.classList.contains('index-page')) {
  // index.htmlの場合にのみ実行するコード
  initializeScene(imageUrls);
} 