import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) 

gsap.fromTo('.parallax-right', {
    x: "15.1797px",
  }, {
    x: '-3603.18px',
    scrollTrigger: {
      trigger: '.video-section', // Changed to the actual class of the scroll container
      start: 'top center-=300',
      end: 'bottom top',
      scrub: .1, // You can adjust the scrub speed if needed
    }
});

// Move .parallax-left in the opposite direction, adjust values as needed
gsap.fromTo('.parallax-left', {
    x: "-1000.1797px", // Start moving from the opposite direction
  }, {
    x: '3603.18px', // Move to the opposite direction
    scrollTrigger: {
      trigger: '.video-section', // Ensuring consistency with the trigger element
      start: 'top center-=300',
      end: 'bottom top',
      scrub: 1, // Adjusting the scrub speed for a different effect
    }
});

const textElements = gsap.utils.toArray('.text-effect');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});

const word = document.querySelector('.link-effect');
const letters = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
let isIntervalRunning = false;
let interval;

// アニメーションを開始する関数
const startAnimation = () => {
  if (!isIntervalRunning) {
    isIntervalRunning = true;
    interval = setInterval(() => {
      if (!isIntervalRunning) return;
      const currentWord = word.innerHTML;
      word.innerHTML = currentWord.split("").map(letter => letters[Math.floor(Math.random() * letters.length)]).join("");
    }, 30);

    // 3秒後にアニメーションを停止
    setTimeout(() => {
      clearInterval(interval);
      isIntervalRunning = false;
      word.innerHTML = 'GET IN TOUCH';
    }, 1000);
  }
};

// GSAPのスクロールトリガーを使用して表示領域に入ったときにアニメーションを開始
gsap.to(word, {
  scrollTrigger: {
    trigger: word,
    start: "top bottom", // 要素がビューポートの下に入った時
    onEnter: startAnimation,
    once: true // 一度だけ実行
  }
});