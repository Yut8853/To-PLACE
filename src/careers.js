import './reset.css';
import './style.css';
import './careers.css'
import './light.js'
import './hamburger.js';
import './smooth.js'
import './under-start.js'
import { disableScroll, enableScroll } from './scrollControl.js';
enableScroll();


import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) 

// 読み込み
document.addEventListener('DOMContentLoaded', () => {
  const textElements = gsap.utils.toArray('.text-effect');
  
  textElements.forEach(text => {
    gsap.to(text, {
      backgroundSize: '100%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: text,
        start: 'top bottom', // 要素の上端がビューポートの下端に達した時点で発火
        end: 'top 70%',
        scrub: true,
        once: true,
        // markers: true,
      },
    });
  });
});

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