import './reset.css';
import './style.css';
import './policy.css';
import './light.js'
import './hamburger.js';
import './smooth.js'
import './under-start.js'

if (document.body.classList.contains('index-page')) {
    // index.htmlの場合にのみ実行するコード
    initializeScene(imageUrls);
}