import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) 

// 読み込み
document.addEventListener('DOMContentLoaded', () => {
  const textElements = gsap.utils.toArray('.text-effect');
  const imgbgcolor = gsap.utils.toArray('.img-overlay-bgcolor');
  const imgblackcolor = gsap.utils.toArray('.img-overlay-black');
  
  textElements.forEach(text => {
    gsap.to(text, {
      backgroundSize: '100%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: text,
        start: 'top bottom', // 要素の上端がビューポートの下端に達した時点で発火
        end: 'top 70%',
        scrub: true,
        once: true,
        // markers: true,
      },
    })
  });

  imgbgcolor.forEach((img, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top top+=1000", // トリガー要素の上端がビューポートの上端から1000px上になった時に開始
        end: "bottom top", // トリガー要素の下端がビューポートの上端に達した時に終了    
        scrub: true,
        once: true,
        markers: true,
      },
    });
  
    tl.to(img, {
      duration: 1.2,
      xPercent: 100,
      ease: "cubic-bezier(0.961, 0.03, 0.961)",
    })
    .to(imgblackcolor[index], {
      duration: 1.2,
      xPercent: 100,
      ease: "cubic-bezier(0.961, 0.03, 0.961)",
      delay: 0.7, // このアニメーションを0.7秒後に開始
    }, "-=0.5"); // この値を調整して、前のアニメーションとのオーバーラップを制御
  });


  
  gsap.fromTo('.parallax-right', {
      x: "15.1797px",
    }, {
      x: '-3603.18px',
      scrollTrigger: {
        trigger: '.video-section', // Changed to the actual class of the scroll container
        start: 'top 80%',
        end: 'bottom top',
        scrub: .1, // You can adjust the scrub speed if needed
      }
  })

  // Move .parallax-left in the opposite direction, adjust values as needed
  gsap.fromTo('.parallax-left', {
      x: "-1000.1797px", // Start moving from the opposite direction
    }, {
      x: '3603.18px', // Move to the opposite direction
      scrollTrigger: {
        trigger: '.video-section', // Ensuring consistency with the trigger element
        start: 'top 80%',
        end: 'bottom top',
        scrub: 1, // Adjusting the scrub speed for a different effect
      }
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
})