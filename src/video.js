import video01 from './assets/videos/AdobeStock_483252332 (video-converter.com).mp4';
import video02 from './assets/videos/AdobeStock_585956923 (video-converter.com).mp4';
import video03 from './assets/videos/AdobeStock_732033388 (video-converter.com).mp4';

const videoWrapper01 = document.querySelector('.sticky-image01');

const videoElement1 = document.createElement('video');
videoElement1.src = video01;
// videoElement1.controls = true;
videoElement1.autoplay = true; // 自動再生を有効化
videoElement1.muted = true; // ミュートを有効化
videoElement1.loop = true; // ループ再生を有効化
videoElement1.classList.add('sticky-image');
videoWrapper01.appendChild(videoElement1);

// ビデオ02の要素を作成してページに挿入
const videoElement2 = document.createElement('video');
videoElement2.src = video02;
// videoElement2.controls = true;
videoElement2.autoplay = true; // 自動再生を有効化
videoElement2.muted = true; // ミュートを有効化
videoElement2.loop = true; // ループ再生を有効化
videoElement2.classList.add('sticky-image');
videoWrapper01.appendChild(videoElement2);

// ビデオ03の要素を作成してページに挿入
const videoElement3 = document.createElement('video');
videoElement3.src = video03;
// videoElement3.controls = true;
videoElement3.autoplay = true; // 自動再生を有効化
videoElement3.muted = true; // ミュートを有効化
videoElement3.loop = true; // ループ再生を有効化
videoElement3.classList.add('sticky-image');
videoWrapper01.appendChild(videoElement3);



  