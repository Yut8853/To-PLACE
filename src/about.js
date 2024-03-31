
import './reset.css';
import './style.css';
import './about.css';
import './light.js'
import './hamburger.js';
import './smooth.js'
import './under-start.js'
import { showInitialAnimation, manageInitialAnimation } from './index.js'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ScrollTriggerをgsapに登録
gsap.registerPlugin(ScrollTrigger);

gsap.to(".logo path, .logo path-text, .menu-btn", {
    scrollTrigger: {
      trigger: ".about-info2-wrapper",
      start: "center center", // トリガー要素の上端がビューポートの中央に達した時に開始
      end: "bottom top", // トリガー要素の下端がビューポートの下端に達した時に終了
      onEnter: () => {
        gsap.to(".logo-text", { color: "#22201E" });
        gsap.to(".logo path", { fill: "#22201E" }); 
        gsap.to(".menu-btn", { backgroundColor: "#22201E" });
      },
      onLeave: () => {
        gsap.to(".logo-text", { color: "#fff" });
        gsap.to(".logo path", { fill: "#fff" });
        gsap.to(".menu-btn", { backgroundColor: "#fff" });
      },
      onEnterBack: () => {
        gsap.to(".logo-text", { color: "#22201E" });
        gsap.to(".logo path", { fill: "#22201E" });
        gsap.to(".menu-btn", { backgroundColor: "#22201E" });
      },
      onLeaveBack: () => {
        gsap.to(".logo-text", { color: "#fff" });
        gsap.to(".logo path", { fill: "#fff" });
        gsap.to(".menu-btn", { backgroundColor: "#fff" });
      },
    //   markers: true
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const textElements = gsap.utils.toArray('.text-effect');
    
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
      });
    });
  });
  