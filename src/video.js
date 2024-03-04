import video01 from './assets/videos/AdobeStock_483252332 (video-converter.com).mp4';
import video02 from './assets/videos/AdobeStock_585956923 (video-converter.com).mp4';
import video03 from './assets/videos/AdobeStock_732033388 (video-converter.com).mp4';

const videoSection = document.querySelector('.video-section');

const videoElement1 = document.createElement('video');
videoElement1.src = video01;
videoElement1.controls = true;
videoSection.appendChild(videoElement1);

// ビデオ02の要素を作成してページに挿入
const videoElement2 = document.createElement('video');
videoElement2.src = video02;
videoElement2.controls = true;
videoSection.appendChild(videoElement2);

// ビデオ03の要素を作成してページに挿入
const videoElement3 = document.createElement('video');
videoElement3.src = video03;
videoElement3.controls = true;
videoSection.appendChild(videoElement3);