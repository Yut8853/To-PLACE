import './reset.css';
import './style.css';
import './business.css';
import './start.js';
import './light.js'
import './hamburger.js';
import './smooth.js'

console.log('business.js')

if (document.body.classList.contains('index-page')) {
    // index.htmlの場合にのみ実行するコード
    initializeScene(imageUrls);
}