    import gsap from 'gsap';
    import { manageInitialAnimation } from './index.js';
    import { musicOffButton, musicOnButton } from './music.js'

    export function loader() {
        let loadItem = document.querySelectorAll('.loader__bg');
        
        const tl = gsap.timeline()
        gsap.set(loadItem,{
            transformOrigin: '100% 100%',
            scaleX: 1
        })
        tl.to(loadItem,{
            scaleX: 0,
            transformOrigin: '0% 0%',
            stagger: 0.07,
            ease: 'power4.inOut'
        })
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
        })
    }
    document.addEventListener('DOMContentLoaded', () => {
        manageInitialAnimation(); // 初回訪問のチェックとアニメーションの制御
        setTimeout(() => {
          // 対象の要素が存在することを確認してからloader関数を実行
          if (document.querySelector('.loader__bg')) {
            loader();
          }
        }, 100);
      
        // musicOnButtonとmusicOffButtonが存在することを確認してからイベントリスナーを設定
        if (musicOnButton) {
          musicOnButton.addEventListener('click', loader);
        }
        if (musicOffButton) {
          musicOffButton.addEventListener('click', loader);
        }
      });


