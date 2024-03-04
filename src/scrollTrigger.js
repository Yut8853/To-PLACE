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