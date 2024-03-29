import './reset.css';
import './style.css';
import './business.css';
import './start2.js';
import './light.js'
import './hamburger.js';
import './smooth.js'
import './music.js'
import gsap from 'gsap';
import music from './assets/videos/loops_7.wav';

console.log('business.js')

document.addEventListener('DOMContentLoaded', () => {
    // 音楽ファイルのパスを直接指定
    let audio = new Audio(music);
    audio.loop = true;

    // localStorageから再生状態と再生位置を取得
    const isPlaying = localStorage.getItem('isPlaying') === 'true';
    const currentPosition = parseFloat(localStorage.getItem('currentPosition')) || 0;

    if (isPlaying) {
        // 再生位置を設定してから再生開始
        audio.currentTime = currentPosition;
        audio.play().then(() => {
            // 再生成功時の処理
        }).catch(error => {
            console.error('Audio playback failed:', error);
            // 自動再生がブロックされた場合などのエラーハンドリング
        });

        // 再生位置を定期的に更新
        setInterval(() => {
            localStorage.setItem('currentPosition', audio.currentTime.toString());
        }, 100); // 1秒ごとに更新
    }
});

export function loader2() {
    let loadItem = document.querySelectorAll('.loader__bg');
    let header = document.querySelector('header');
    
    const tl = gsap.timeline()
    gsap.set(loadItem,{
        transformOrigin: '100% 100%',
        scaleX: 1
    }),
    tl.to(loadItem,{
        scaleX: 0,
        transformOrigin: '0% 0%',
        stagger: 0.07,
        ease: 'power4.inOut'
    })
    tl.to(header, {
        y: 0,
        duration: 1,
        ease: 'power4.inOut'
    })
}

window.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(() => {
        loader2();
    }, 100);
})

