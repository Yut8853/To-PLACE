    import { animateBlobs } from './blob.js';
    import { heyMelody } from './blob.js';
    import { disableScroll, enableScroll } from './index.js';
    import { loader } from './start.js';
    import music from './assets/videos/loops_7.wav';

    let musicOnButton = document.querySelector('#music-on');
    let musicOffButton = document.querySelector('#music-off');

    // DOMContentLoaded イベントリスナー内で変数を初期化する
    document.addEventListener('DOMContentLoaded', () => {

        let audio = new Audio(music); // 音楽ファイルを読み込む

        // 初期のブロブ色を設定
        animateBlobs();
        heyMelody();
        disableScroll();

        // localStorage から再生状態を取得し、再生中なら音楽を再生
        const isPlaying = localStorage.getItem('isPlaying') === 'true';
        if (isPlaying) {
            audio.play();
        }

        // 音楽ONボタンのクリックイベントリスナーを追加
        musicOnButton.addEventListener('click', () => {
            audio.play(); // 音楽を再生
            document.querySelector('.container').style.display = 'none'; // 再生画面を非表示にする

            // 10秒ごとに現在の再生位置を localStorage に保存
            setInterval(() => {
                localStorage.setItem('currentPosition', audio.currentTime.toString());
            }, 10000);

            loader(); // ローダーを表示
            enableScroll(); // スクロールを有効にする
        });

        // 音楽OFFボタンのクリックイベントリスナーを追加
        musicOffButton.addEventListener('click', () => {
            if (!audio.paused) {
                audio.pause(); // 音楽を一時停止
                audio.currentTime = 0; // 再生位置を初期化
            }
            document.querySelector('.container').style.display = 'none'; // 再生画面を非表示にする
            localStorage.setItem('isPlaying', 'false'); // 再生状態を localStorage に保存

            loader(); // ローダーを表示
            enableScroll(); // スクロールを有効にする
        });
    });

    export { musicOnButton, musicOffButton };
