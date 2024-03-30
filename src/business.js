import './reset.css';
import './style.css';
import './business.css';
import { triggerAnimation } from './start.js';
import './light.js'
import './hamburger.js';
import './smooth.js'


if (document.body.classList.contains('index-page')) {
    // index.htmlの場合にのみ実行するコード
    initializeScene(imageUrls);
}