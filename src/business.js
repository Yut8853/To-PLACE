import './reset.css';
import './style.css';
import './business.css';
import './light.js'
import './hamburger.js';
import './smooth.js'
import './under-start.js'
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

// ScrollTriggerをgsapに登録
gsap.registerPlugin(ScrollTrigger);

// TOPページでのみ music.js を動的にインポート
if (document.body.classList.contains('top-page')) {
    import('./music.js').then(module => {
      // music.js のメソッドを実行
      module.doSomething();
    });
}

