import './reset.css';
import './style.css';
import './policy.css';
import './light.js'
import './hamburger.js';
import './smooth.js'
import './under-start.js'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { disableScroll, enableScroll } from './scrollControl.js';
enableScroll();


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

if (document.body.classList.contains('index-page')) {
    // index.htmlの場合にのみ実行するコード
    initializeScene(imageUrls);
}