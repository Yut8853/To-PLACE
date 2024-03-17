import './reset.css';
import './style.css';
import './sales.css';
import './start.js';
import './light2.js'
import './hamburger.js';

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hover-image');

    images.forEach(image => {
        image.addEventListener('mouseover', function () {
            document.body.style.backgroundImage = `url('${image.src}')`;
            document.body.style.backgroundRepeat = 'repeat'; // 画像をタイル状に繰り返し表示
        });

        image.addEventListener('mouseout', function () {
            document.body.style.backgroundImage = '';
        });
    });
});



console.log('sales.js')