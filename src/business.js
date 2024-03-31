import './reset.css';
import './style.css';
import './business.css';
import './light.js'
import './hamburger.js';
import './smooth.js'
import './under-start.js'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ScrollTriggerをgsapに登録
gsap.registerPlugin(ScrollTrigger);

// TOPページでのみ music.js を動的にインポート
if (document.body.classList.contains('top-page')) {
    import('./music.js').then(module => {
      // music.js のメソッドを実行
      module.doSomething();
    });
}

