import gsap from 'gsap';
import './blob.js';
import { playMusic, stopMusic } from './music.js';
import { disableScroll, enableScroll } from './scrollControl.js';

export let musicOnButton, musicOffButton;

export function setUpMusic(callback) {
    console.log('setUpMusic is called');

  musicOnButton = document.getElementById('music-on');
  musicOffButton = document.getElementById('music-off');

  musicOnButton.addEventListener('click', () => {
    playMusic();
    localStorage.setItem('isPlaying', 'true');
    disableScroll();
    document.querySelector('.sound-icon').classList.add('playing'); // 音楽再生時にアニメーション開始
    triggerAnimation(); // アニメーションをトリガー
  });
  
  musicOffButton.addEventListener('click', () => {
    stopMusic();
    localStorage.setItem('isPlaying', 'false');
    enableScroll();
    document.querySelector('.sound-icon').classList.remove('playing'); // 音楽再生時にアニメーション開始
    triggerAnimation(); // アニメーションをトリガー
  });
  if (callback && typeof callback === 'function') {
    callback();
  }
}

export function triggerAnimation() {
    const loadItem = document.querySelectorAll('.loader__bg');
    
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

