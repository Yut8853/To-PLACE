import './reset.css';
import './style.css';
import './business.css';
import './light.js'
import './hamburger.js';
import './smooth.js'
import './under-start.js'

// TOPページでのみ music.js を動的にインポート
if (document.body.classList.contains('top-page')) {
    import('./music.js').then(module => {
      // music.js のメソッドを実行
      module.doSomething();
    });
}

