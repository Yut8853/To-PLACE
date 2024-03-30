import gsap from 'gsap';
import { musicOnButton, musicOffButton, playMusic, stopMusic } from './music.js';
import { disableScroll, enableScroll } from './index.js';

function setUpMusic() {
    musicOnButton.addEventListener('click', () => {
        playMusic();
        localStorage.setItem('isPlaying', 'true');
        disableScroll();
        triggerAnimation(); // アニメーションをトリガー
    });
    
    musicOffButton.addEventListener('click', () => {
        stopMusic();
        localStorage.setItem('isPlaying', 'false');
        enableScroll();
        triggerAnimation(); // アニメーションをトリガー
    });
}

const loadItem = document.querySelectorAll('.loader__bg');

function triggerAnimation() {
    
    const tl = gsap.timeline({
        onComplete: () => {
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.gradient-container').style.display = 'none';
        }
    });
    
    tl.set(loadItem, {
        transformOrigin: '100% 100%',
        scaleX: 1
    })
    .to(loadItem, {
        scaleX: 0,
        transformOrigin: '0% 0%',
        stagger: 0.07,
        ease: 'power4.inOut'
    })
    // アニメーションの詳細をここに追加
    .to(".overlay-white", {
        duration: .7,
        xPercent: 100,
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
    })
    .to(".overlay-red", {
        duration: .9,
        xPercent: 150,
        ease: "cubic-bezier(0.961, 0.83, 0.961)",
    })
    .to('.overlay-white2', {
        duration: .7,
        xPercent: 100,
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
    })
    .to('.overlay-red2', {
        duration: .9,
        xPercent: 100,
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
    })
    .to(".white-outlined-text", {
        duration: .8,
        opacity: 1,
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
        stagger: {
            amount: .8,
            from: "start"
        },
        transform: 'translateY(0)'
    })
    .to('.hero-text', {
        duration: 1.5,
        delay: .1,
        color: 'rgba(60, 57, 57, 1)',
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
        opacity: 1,
    })
    .to('.hero-vision-bg', {
        delay: 1,
        duration: .5,
        xPercent: 0,
        opacity: 1,
        width: '100%',
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log(document.getElementById('music-on')); // これが null を返すか確認
    console.log(document.getElementById('music-off')); // これが null を返すか確認
    
    if (document.getElementById('music-on') && document.getElementById('music-off')) {
        setUpMusic();
    } else {
        console.error('ボタンが見つかりません。HTML要素のIDを確認してください。');
    }
});



