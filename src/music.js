    import { animateBlobs } from './blob.js';
    import { heyMelody } from './blob.js';
    import { manageInitialAnimation } from './index.js';
    import { disableScroll, enableScroll } from './index.js';
    import { loader } from './start.js';
    import music from './assets/videos/loops_7.wav';

    let musicOnButton = null;
    let musicOffButton = null;

    export let audio = new Audio(music); // 音楽ファイルを読み込む
    
    document.addEventListener('DOMContentLoaded', () => {
        manageInitialAnimation(); // 初回訪問のチェックとアニメーションの制御
    
        musicOnButton = document.querySelector('#music-on');
        musicOffButton = document.querySelector('#music-off');
    
        // 音楽の再生状態を localStorage から読み込む
        // 自動再生を試みずに、ユーザー操作を待つ
        const isPlaying = localStorage.getItem('isPlaying') === 'true';
        if (isPlaying) {
            disableScroll();
        } else {
            enableScroll();
        }
    
        // 音楽ONボタンのイベントリスナー
        musicOnButton.addEventListener('click', () => {
            audio.play().then(() => {
                localStorage.setItem('isPlaying', 'true');
                disableScroll();
                // 音楽が再生された後、次のアニメーションに進む
                loader();
            }).catch(error => {
                console.error('音声の再生に失敗しました:', error);
            });
        });
    
        // 音楽OFFボタンのイベントリスナー
        musicOffButton.addEventListener('click', () => {
            audio.pause();
            audio.currentTime = 0;
            localStorage.setItem('isPlaying', 'false');
            enableScroll();
        });
    
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
