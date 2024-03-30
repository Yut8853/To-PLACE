import './reset.css';
import './style.css';
import './business.css';
import './start.js';
import './light.js'
import './hamburger.js';
import './smooth.js'
import './music.js'

// TOPページでのみ music.js を動的にインポート
if (document.body.classList.contains('top-page')) {
    import('./music.js').then(module => {
      // music.js のメソッドを実行
      module.doSomething();
    });
}

