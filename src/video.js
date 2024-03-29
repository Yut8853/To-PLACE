// ビデオファイルのインポート
import video01 from './assets/videos/AdobeStock_483252332_small.mp4';
import video02 from './assets/videos/AdobeStock_585956923_small.mp4';
import video03 from './assets/videos/AdobeStock_732033388_small.mp4';

let isVideoInserted = false; // ビデオ挿入済みフラグ

document.addEventListener('DOMContentLoaded', function() {
  if (isVideoInserted) return; // 既にビデオが挿入されていれば何もしない
  isVideoInserted = true; // ビデオ挿入フラグをtrueに設定

  const videoWrapper = document.querySelector('.sticky-image01');
  if (videoWrapper) {
        // ビデオ01の要素を作成してページに挿入
        const videoElement1 = createVideoElement(video01);
        videoWrapper.appendChild(videoElement1);
        
        // ビデオ02の要素を作成してページに挿入
        const videoElement2 = createVideoElement(video02);
        videoWrapper.appendChild(videoElement2);
        
        // ビデオ03の要素を作成してページに挿入
        const videoElement3 = createVideoElement(video03);
        videoWrapper.appendChild(videoElement3);
  } 
});

function createVideoElement(videoSrc) {
  const videoElement = document.createElement('video');
  videoElement.src = videoSrc;
  videoElement.autoplay = true;
  videoElement.muted = true;
  videoElement.loop = true;
  videoElement.classList.add('sticky-image');
  return videoElement;
}
