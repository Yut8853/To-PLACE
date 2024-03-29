    import { animateBlobs } from './blob.js';
    import { heyMelody } from './blob.js';
    import { manageInitialAnimation } from './index.js';
    import { disableScroll, enableScroll } from './index.js';
    import { loader } from './start.js';
    import music from './assets/videos/loops_7.wav';

    let musicOnButton = null;
    let musicOffButton = null;
        
document.addEventListener('DOMContentLoaded', () => {
    manageInitialAnimation(); // 初回訪問のチェックとアニメーションの制御

    let audio = new Audio(music); // 音楽ファイルを読み込む
    let musicOnButton = document.querySelector('#music-on');
    let musicOffButton = document.querySelector('#music-off');

    // 音楽の再生状態を localStorage から読み込む
    const isPlaying = localStorage.getItem('isPlaying') === 'true';
    if (isPlaying) {
        audio.play();
        disableScroll();
    } else {
        enableScroll();
    }

    // 音楽ONボタンのイベントリスナー
    if (musicOnButton) {
        musicOnButton.addEventListener('click', () => {
            audio.play();
            localStorage.setItem('isPlaying', 'true');
            disableScroll();
        });
    }

    // 音楽OFFボタンのイベントリスナー
    if (musicOffButton) {
        musicOffButton.addEventListener('click', () => {
            audio.pause();
            audio.currentTime = 0;
            localStorage.setItem('isPlaying', 'false');
            enableScroll();
        });
    }

    // 初期のブロブアニメーションを設定
    animateBlobs();
    heyMelody();
});

// ページの読み込みが完了したら loader 関数を実行
window.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(() => {
        loader();
    }, 100);
})

export { musicOnButton, musicOffButton };
