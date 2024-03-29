    import gsap from 'gsap';
    import { disableScroll, enableScroll } from './index.js';
    import { manageInitialAnimation } from './index.js';
    import { audio } from './music.js'

    export function loader() {
        let loadItem = document.querySelectorAll('.loader__bg'); // loadItemの定義を追加
    
        // アニメーションの定義を開始
        const tl = gsap.timeline();
    
        // アニメーションの初期状態をTimeline内で設定
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
        manageInitialAnimation(); // 初回訪問のチェックとアニメーションの制御
    
        const musicOnButton = document.getElementById('music-on');
        const musicOffButton = document.getElementById('music-off');
        
        const hideMusicSelectionAndStartAnimation = () => {
            document.querySelector('.container').style.display = 'none'; // 音楽選択画面を非表示に
            loader(); // 指定されたGSAPアニメーションを実行
        };
        
        musicOnButton.addEventListener('click', () => {
            audio.play().catch(error => console.error('音声の再生を開始できませんでした:', error));
            localStorage.setItem('isPlaying', 'true');
            disableScroll();
            hideMusicSelectionAndStartAnimation();
        });
        
        musicOffButton.addEventListener('click', () => {
            audio.pause();
            audio.currentTime = 0;
            localStorage.setItem('isPlaying', 'false');
            enableScroll();
            hideMusicSelectionAndStartAnimation();
        });
    });


